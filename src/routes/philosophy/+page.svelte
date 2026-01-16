<script lang="ts">
	import { formatDate } from '$lib/utils/date';
	import type { PhilosophyEntry } from '$lib/content/philosophy';
	import PostTags from '$components/posts/PostTags.svelte';

	export let data: { philosophy: PhilosophyEntry[] };

	const words = (title: string) => title.split(' ');
	const safePath = (slug: string) => slug.split('/').pop() || slug;

	function getViewTransitionName(
		slug: string,
		word: string,
		wordIndex: number,
		allWords: string[]
	): string {
		const normalized = word.toLowerCase().replace(/[^a-z0-9\s-_]/g, '');
		// Count how many times this word appeared before this index
		const previousOccurrences = allWords
			.slice(0, wordIndex)
			.filter((w) => w.toLowerCase().replace(/[^a-z0-9\s-_]/g, '') === normalized).length;
		return `_${safePath(slug)}__${normalized}${previousOccurrences > 0 ? '___' + previousOccurrences : ''}`;
	}
</script>

<div class="mx-auto max-w-prose px-4 py-8 sm:px-6 lg:px-8">
	<h1 class="text-text mb-8 text-3xl font-bold tracking-tight">Keeping Myself Sane</h1>
	<p class="text-subtext0 mb-8 border-l-2 border-accent/50 pl-4 italic">
		"Write code like a stoic. Configure systems like a monk. Break things like a scientist."
	</p>

	{#if data.philosophy && data.philosophy.length}
		<div class="space-y-6">
			{#each data.philosophy as entry}
				{@const titleWords = words(entry.metadata.title.text)}
				<a href={`/philosophy/${entry.slug}`} class="block">
					<article class="space-y-2">
						<h2 class="text-text hover:text-accent text-xl font-semibold">
							{#each titleWords as word, i}
								<span
									style="view-transition-name: {getViewTransitionName(
										entry.slug,
										word,
										i,
										titleWords
									)};"
								>
									{word}{i < titleWords.length - 1 ? ' ' : ''}
								</span>
							{/each}
						</h2>
						{#if entry.metadata.published_at}
							<p class="text-subtext0 text-xs">
								{formatDate(entry.metadata.published_at)}
							</p>
						{:else}
							<p class="text-subtext0 text-xs italic">Draft</p>
						{/if}
						<p class="text-subtext1 text-sm">
							{entry.metadata.description}
						</p>
						<!-- Using PostTags component, expecting a 'post' prop but passing our entry which has compatible shape -->
						<PostTags post={entry as any} showIcon={false} colored={false} />
					</article>
				</a>
			{/each}
		</div>
	{:else}
		<p class="text-subtext0">No thoughts recorded yet.</p>
	{/if}
</div>
