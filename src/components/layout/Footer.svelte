<script lang="ts">
	import Site, { Socials } from '$lib/config/common';

	const { value } = $props();
	const year = new Date().getFullYear();
</script>

<footer
	class="bg-crust text-subtext0 border-surface0/20 mx-5 mb-5 flex h-auto flex-col items-center justify-center gap-y-3 rounded-lg border p-5 text-sm md:flex-row md:justify-between md:gap-y-0"
>
	<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-start">
		<span class="whitespace-nowrap">© {year} Dhananjay Singh Chauhan</span>
	</div>

	<div class="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end">
		<div class="flex items-center gap-x-3">
			{#each Socials.filter((item) => item.footer) as item (item.url)}
				{@const Icon = item.icon}
				<a
					href={item.url}
					target="_blank"
					rel="noopener noreferrer"
					aria-label={item.label}
					class="text-subtext1 hover:text-accent transition-colors duration-200"
				>
					<Icon stroke={1.5} />
				</a>
			{/each}
		</div>
	</div>
</footer>
