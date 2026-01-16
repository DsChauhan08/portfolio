<script lang="ts">
	import LinkWithIcon from '$components/LinkWithIcon.svelte';
	import Featured, { type FeaturedProject } from '$components/layout/Featured.svelte';
	import {
		IconArrowRight,
		IconExternalLink,
		IconFeather,
		IconCode,
		IconBrain
	} from '@tabler/icons-svelte';
	import Site from '$lib/config/common';
	import { Home } from '$lib/config/pages';
	import { formatDate } from '$utils/date';
	import type { CommitData } from '$lib/api/commits';

	type PageData = {
		featuredProjects: FeaturedProject[];
		commitData: CommitData;
		latestPosts: {
			slug: string;
			metadata: { title: { text: string; config?: string }; published_at: string };
		}[];
	};

	let { data }: { data: PageData } = $props();
</script>

<div class="mx-auto max-w-3xl space-y-12 px-4 py-8 md:py-12">
	<!-- Hero -->
	<section class="space-y-4">
		<h1 class="text-3xl font-bold">
			<span class="text-accent">Dhananjay Singh Chauhan</span>
		</h1>
		<p class="text-subtext0 max-w-prose leading-relaxed">
			Year 12 student. Forensics and blue team enthusiast. I write code like a stoic, configure systems like a monk, and break things like a scientist.
		</p>
		<p class="text-subtext1 text-sm">
			Currently learning: CCNA, CompTIA Security+, Malware Analysis, LLM fine-tuning.
		</p>
		<div class="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
			{#each Home.socialLinks as link (link.href)}
				<LinkWithIcon
					href={link.href}
					text={link.text}
					icon={link.icon}
					external={true}
					class="text-sm"
				/>
				{#if link !== Home.socialLinks[Home.socialLinks.length - 1]}
					<span class="text-surface1 text-xs">|</span>
				{/if}
			{/each}
			<span class="text-surface1 text-xs">|</span>
			<a
				href="/about"
				class="group text-subtext1 hover:text-accent inline-flex items-center gap-1 text-sm transition-colors"
			>
				<span>More about me</span>
				<IconArrowRight size={16} class="transition-transform group-hover:translate-x-0.5" />
			</a>
		</div>
	</section>

	<!-- Featured Projects -->
	<Featured projects={data.featuredProjects} maxProjects={3} />

	<!-- Two Column: Poetry & Philosophy -->
	<section class="grid gap-6 md:grid-cols-2">
		<!-- Latest Poetry -->
		<div class="border-surface0 bg-base rounded-lg border p-4">
			<div class="mb-3 flex items-center justify-between">
				<h2 class="text-text flex items-center gap-2 text-sm font-semibold">
					<IconFeather size={16} class="text-accent" />
					Poetry
				</h2>
				<a href="/poetry" class="text-accent/80 hover:text-accent text-xs">
					<IconExternalLink size={14} />
				</a>
			</div>
			{#if data.latestPosts.length > 0}
				<ul class="space-y-1.5 text-sm">
					{#each data.latestPosts.slice(0, 3) as post (post.slug)}
						<li>
							<a
								href={'/poetry/' + post.slug}
								class="text-subtext0 hover:text-accent flex items-center justify-between gap-2"
							>
								<span class="truncate">{post.metadata.title.text}</span>
								{#if post.metadata.published_at}
									<span class="text-subtext1 text-xs whitespace-nowrap">
										{formatDate(post.metadata.published_at, { shortMonth: true })}
									</span>
								{/if}
							</a>
						</li>
					{/each}
				</ul>
			{:else}
				<p class="text-subtext1 text-sm italic">Coming soon...</p>
			{/if}
		</div>

		<!-- Keeping Myself Sane (Philosophy) -->
		<div class="border-surface0 bg-base rounded-lg border p-4">
			<div class="mb-3 flex items-center justify-between">
				<h2 class="text-text flex items-center gap-2 text-sm font-semibold">
					<IconBrain size={16} class="text-accent" />
					Keeping Myself Sane
				</h2>
				<a href="/philosophy" class="text-accent/80 hover:text-accent text-xs">
					<IconExternalLink size={14} />
				</a>
			</div>
			<p class="text-subtext0 text-sm">
				Thoughts on stoicism, systems thinking, and staying grounded while breaking things.
			</p>
			<a
				href="/philosophy"
				class="text-accent mt-3 inline-flex items-center gap-1 text-sm hover:underline"
			>
				Read more <IconArrowRight size={14} />
			</a>
		</div>
	</section>

	<!-- Recent Activity -->
	{#if data.commitData?.commits?.length > 0}
		<section class="border-surface0 bg-base rounded-lg border p-4">
			<div class="mb-3 flex items-center justify-between">
				<h2 class="text-text flex items-center gap-2 text-sm font-semibold">
					<IconCode size={16} class="text-accent" />
					Recent Commits
				</h2>
				<a
					href={Site.out.github}
					target="_blank"
					rel="noopener noreferrer"
					class="text-accent/80 hover:text-accent text-xs"
				>
					<IconExternalLink size={14} />
				</a>
			</div>
			<ul class="space-y-1.5 text-sm">
				{#each data.commitData.commits.slice(0, 4) as commit (commit.sha)}
					<li>
						<a
							href={commit.href}
							target="_blank"
							rel="noopener noreferrer"
							class="text-subtext0 hover:text-accent flex items-center gap-2"
							title={commit.message}
						>
							<span class="text-text font-medium">{commit.repo.split('/')[1]}:</span>
							<span class="truncate">{commit.message}</span>
						</a>
					</li>
				{/each}
			</ul>
		</section>
	{/if}
</div>
