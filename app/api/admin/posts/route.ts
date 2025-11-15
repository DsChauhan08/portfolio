import { auth } from '@/auth';
import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import type { BlogPost } from '@/app/blog/posts/data';

const DATA_FILE_PATH = path.join(process.cwd(), 'app/blog/posts/data.ts');

// Rate limiting map (IP -> array of timestamps)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 10;

function checkRateLimit(ip: string): boolean {
	const now = Date.now();
	const requests = rateLimitMap.get(ip) || [];
	
	// Filter out old requests
	const recentRequests = requests.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
	
	if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
		return false;
	}
	
	recentRequests.push(now);
	rateLimitMap.set(ip, recentRequests);
	return true;
}

async function getPosts(): Promise<BlogPost[]> {
	const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
	const postsMatch = fileContent.match(/export const posts: BlogPost\[\] = (\[[\s\S]*?\]);/);
	if (!postsMatch) throw new Error('Could not parse posts');
	
	// This is a simple eval - in production, use a proper parser
	// eslint-disable-next-line no-eval
	const posts = eval(postsMatch[1]) as BlogPost[];
	return posts;
}

async function savePosts(posts: BlogPost[]) {
	const fileContent = await fs.readFile(DATA_FILE_PATH, 'utf-8');
	const postsString = JSON.stringify(posts, null, '\t')
		.replace(/"(\w+)":/g, '$1:') // Remove quotes from keys
		.replace(/\\n/g, '\\n') // Preserve newlines
		.replace(/\\t/g, '\\t'); // Preserve tabs
	
	const newContent = fileContent.replace(
		/export const posts: BlogPost\[\] = \[[\s\S]*?\];/,
		`export const posts: BlogPost[] = ${postsString};`
	);
	
	await fs.writeFile(DATA_FILE_PATH, newContent, 'utf-8');
}

// GET - List all posts
export async function GET() {
	const session = await auth();
	if (!session?.user) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	try {
		const posts = await getPosts();
		return NextResponse.json(posts);
	} catch {
		return NextResponse.json({ error: 'Failed to read posts' }, { status: 500 });
	}
}

// POST - Create new post
export async function POST(request: NextRequest) {
	const session = await auth();
	if (!session?.user) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown';
	if (!checkRateLimit(ip)) {
		return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
	}

	try {
		const newPost = await request.json() as BlogPost;
		const posts = await getPosts();
		
		// Check if slug already exists
		if (posts.some((p) => p.slug === newPost.slug)) {
			return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
		}
		
		posts.push(newPost);
		await savePosts(posts);
		
		return NextResponse.json(posts);
	} catch {
		return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
	}
}

// PUT - Update existing post
export async function PUT(request: NextRequest) {
	const session = await auth();
	if (!session?.user) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown';
	if (!checkRateLimit(ip)) {
		return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
	}

	try {
		const updatedPost = await request.json() as BlogPost;
		const posts = await getPosts();
		
		const index = posts.findIndex((p) => p.slug === updatedPost.slug);
		if (index === -1) {
			return NextResponse.json({ error: 'Post not found' }, { status: 404 });
		}
		
		posts[index] = updatedPost;
		await savePosts(posts);
		
		return NextResponse.json(posts);
	} catch {
		return NextResponse.json({ error: 'Failed to update post' }, { status: 500 });
	}
}

// DELETE - Delete post
export async function DELETE(request: NextRequest) {
	const session = await auth();
	if (!session?.user) {
		return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
	}

	const ip = request.headers.get('x-forwarded-for') || request.ip || 'unknown';
	if (!checkRateLimit(ip)) {
		return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
	}

	try {
		const { searchParams } = new URL(request.url);
		const slug = searchParams.get('slug');
		
		if (!slug) {
			return NextResponse.json({ error: 'Slug required' }, { status: 400 });
		}
		
		const posts = await getPosts();
		const filteredPosts = posts.filter((p) => p.slug !== slug);
		await savePosts(filteredPosts);
		
		return NextResponse.json(filteredPosts);
	} catch {
		return NextResponse.json({ error: 'Failed to delete post' }, { status: 500 });
	}
}
