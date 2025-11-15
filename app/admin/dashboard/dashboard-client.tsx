'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { jetbrainsMono } from '@/lib/fonts';
import type { BlogPost } from '@/app/blog/posts/data';

interface DashboardClientProps {
	posts: BlogPost[];
}

export default function DashboardClient({ posts: initialPosts }: DashboardClientProps) {
	const [posts, setPosts] = useState(initialPosts);
	const [isEditing, setIsEditing] = useState(false);
	const [isCreating, setIsCreating] = useState(false);
	const router = useRouter();

	const [formData, setFormData] = useState({
		slug: '',
		title: '',
		date: new Date().toISOString().split('T')[0],
		tags: '',
		excerpt: '',
		content: '',
	});

	async function handleLogout() {
		await fetch('/api/auth/signout', { method: 'POST' });
		router.push('/admin/login');
	}

	function startCreate() {
		setIsCreating(true);
		setIsEditing(true);
		setFormData({
			slug: '',
			title: '',
			date: new Date().toISOString().split('T')[0],
			tags: '',
			excerpt: '',
			content: '',
		});
	}

	function startEdit(post: BlogPost) {
		setIsCreating(false);
		setIsEditing(true);
		setFormData({
			slug: post.slug,
			title: post.title,
			date: post.date,
			tags: post.tags.join(', '),
			excerpt: post.excerpt,
			content: post.content,
		});
	}

	function cancelEdit() {
		setIsEditing(false);
		setIsCreating(false);
	}

	async function handleSave() {
		const postData: BlogPost = {
			slug: formData.slug,
			title: formData.title,
			date: formData.date,
			tags: formData.tags.split(',').map(t => t.trim()).filter(Boolean),
			excerpt: formData.excerpt,
			content: formData.content,
		};

		try {
			const response = await fetch('/api/admin/posts', {
				method: isCreating ? 'POST' : 'PUT',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(postData),
			});

			if (response.ok) {
				const updatedPosts = await response.json();
				setPosts(updatedPosts);
				cancelEdit();
				router.refresh();
			} else {
				alert('Failed to save post');
			}
		} catch {
			alert('Error saving post');
		}
	}

	async function handleDelete(slug: string) {
		if (!confirm('Are you sure you want to delete this post?')) return;

		try {
			const response = await fetch(`/api/admin/posts?slug=${slug}`, {
				method: 'DELETE',
			});

			if (response.ok) {
				const updatedPosts = await response.json();
				setPosts(updatedPosts);
				router.refresh();
			} else {
				alert('Failed to delete post');
			}
		} catch {
			alert('Error deleting post');
		}
	}

	if (isEditing) {
		return (
			<div className="min-h-screen bg-background p-8">
				<div className="max-w-6xl mx-auto">
					<div className="flex justify-between items-center mb-8">
						<h1 className={`${jetbrainsMono.className} text-3xl font-bold text-sky-400`}>
							{isCreating ? 'Create New Post' : 'Edit Post'}
						</h1>
						<div className="flex gap-4">
							<button
								onClick={cancelEdit}
								className={`${jetbrainsMono.className} px-6 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-xl transition-colors`}
							>
								Cancel
							</button>
							<button
								onClick={handleSave}
								className={`${jetbrainsMono.className} px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl transition-colors`}
							>
								Save Post
							</button>
						</div>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{/* Editor */}
						<div className="space-y-4">
							<div>
								<label className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
									Slug (URL)
								</label>
								<input
									type="text"
									value={formData.slug}
									onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
									className={`${jetbrainsMono.className} w-full px-4 py-2 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 focus:border-sky-500 focus:outline-none`}
									placeholder="my-blog-post"
									disabled={!isCreating}
								/>
							</div>

							<div>
								<label className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
									Title
								</label>
								<input
									type="text"
									value={formData.title}
									onChange={(e) => setFormData({ ...formData, title: e.target.value })}
									className={`${jetbrainsMono.className} w-full px-4 py-2 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 focus:border-sky-500 focus:outline-none`}
									placeholder="Post Title"
								/>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
										Date
									</label>
									<input
										type="date"
										value={formData.date}
										onChange={(e) => setFormData({ ...formData, date: e.target.value })}
										className={`${jetbrainsMono.className} w-full px-4 py-2 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 focus:border-sky-500 focus:outline-none`}
									/>
								</div>

								<div>
									<label className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
										Tags (comma separated)
									</label>
									<input
										type="text"
										value={formData.tags}
										onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
										className={`${jetbrainsMono.className} w-full px-4 py-2 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 focus:border-sky-500 focus:outline-none`}
										placeholder="security, ctf"
									/>
								</div>
							</div>

							<div>
								<label className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
									Excerpt
								</label>
								<textarea
									value={formData.excerpt}
									onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
									rows={3}
									className={`${jetbrainsMono.className} w-full px-4 py-2 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 focus:border-sky-500 focus:outline-none resize-none`}
									placeholder="Brief summary of the post..."
								/>
							</div>

							<div>
								<label className={`${jetbrainsMono.className} block text-sm font-semibold text-slate-300 mb-2`}>
									Content (Markdown)
								</label>
								<textarea
									value={formData.content}
									onChange={(e) => setFormData({ ...formData, content: e.target.value })}
									rows={20}
									className={`${jetbrainsMono.className} w-full px-4 py-2 bg-slate-800 border-2 border-slate-600 rounded-xl text-slate-200 focus:border-sky-500 focus:outline-none font-mono text-sm`}
									placeholder="# Heading&#10;&#10;Your content here..."
								/>
							</div>
						</div>

						{/* Preview */}
						<div>
							<h3 className={`${jetbrainsMono.className} text-lg font-semibold text-slate-300 mb-4`}>
								Preview
							</h3>
							<div className="bg-slate-900 border-2 border-slate-700 rounded-xl p-6">
								<h1 className="text-3xl font-bold text-slate-200 mb-2">
									{formData.title || 'Untitled Post'}
								</h1>
								<div className={`${jetbrainsMono.className} flex gap-4 items-center text-slate-400 text-sm mb-4`}>
									<span>{formData.date}</span>
									{formData.tags && (
										<>
											<span>•</span>
											<div className="flex gap-2">
												{formData.tags.split(',').map((tag, i) => (
													<span key={i} className="px-2 py-1 bg-slate-800 rounded text-sky-400 text-xs">
														{tag.trim()}
													</span>
												))}
											</div>
										</>
									)}
								</div>
								<p className="text-slate-300 mb-4">{formData.excerpt}</p>
								<div className="prose prose-invert prose-slate max-w-none text-slate-300 whitespace-pre-wrap">
									{formData.content}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-background p-8">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between items-center mb-8">
					<div>
						<h1 className={`${jetbrainsMono.className} text-3xl font-bold text-sky-400 mb-2`}>
							Blog Dashboard
						</h1>
						<p className="text-slate-400">Manage your blog posts</p>
					</div>
					<div className="flex gap-4">
						<button
							onClick={startCreate}
							className={`${jetbrainsMono.className} px-6 py-2 bg-sky-500 hover:bg-sky-400 text-white rounded-xl transition-colors`}
						>
							+ New Post
						</button>
						<button
							onClick={handleLogout}
							className={`${jetbrainsMono.className} px-6 py-2 bg-red-500 hover:bg-red-400 text-white rounded-xl transition-colors`}
						>
							Logout
						</button>
					</div>
				</div>

				<div className="grid gap-4">
					{posts.map((post) => (
						<div
							key={post.slug}
							className="bg-slate-900 border-2 border-slate-700 rounded-xl p-6 hover:border-sky-500/50 transition-colors"
						>
							<div className="flex justify-between items-start">
								<div className="flex-1">
									<h2 className="text-2xl font-semibold text-slate-200 mb-2">
										{post.title}
									</h2>
									<div className={`${jetbrainsMono.className} flex gap-4 items-center text-slate-400 text-sm mb-3`}>
										<span>{post.date}</span>
										<span>•</span>
										<div className="flex gap-2">
											{post.tags.map((tag) => (
												<span key={tag} className="px-2 py-1 bg-slate-800 rounded text-sky-400 text-xs">
													{tag}
												</span>
											))}
										</div>
									</div>
									<p className="text-slate-300">{post.excerpt}</p>
								</div>
								<div className="flex gap-2 ml-4">
									<button
										onClick={() => startEdit(post)}
										className={`${jetbrainsMono.className} px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg transition-colors`}
									>
										Edit
									</button>
									<button
										onClick={() => handleDelete(post.slug)}
										className={`${jetbrainsMono.className} px-4 py-2 bg-red-900 hover:bg-red-800 text-red-200 rounded-lg transition-colors`}
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
