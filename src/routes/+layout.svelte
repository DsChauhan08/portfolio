<script lang="ts">
	import '../app.css';
	import Header from '../components/layout/Header.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import Sidebar from '../components/layout/Sidebar.svelte';
	import { page } from '$app/state';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	import Site from '$lib/config/common';
	import { initCodeBlocks } from '$lib/client/codeblocks';

	const { data, children } = $props();

	let title = $derived(
		[Site.name, ...page.url.pathname.split('/').slice(1)].filter(Boolean).join(' - ')
	);

	let isSidebarOpen = $state(false);
	function toggleSidebar() {
		isSidebarOpen = !isSidebarOpen;
	}
	function closeSidebar() {
		isSidebarOpen = false;
	}

	// Enable View Transitions API for SvelteKit navigation
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(() => {
		initCodeBlocks();
	});
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={Site.description} />

	<!-- Open Graph (OG) Tags -->
	<meta property="og:title" content={title} />
	<meta property="og:description" content={Site.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={Site.url} />
	<meta property="og:site_name" content={Site.name} />

	<!-- Additional Meta Tags -->
	<meta name="author" content={Site.seo.author} />
	<meta name="keywords" content={Site.tags.join(', ')} />
	<meta name="robots" content="index, follow" />
	<link rel="canonical" href={Site.url + page.url.pathname} />

	<!-- JSON-LD Person Schema -->
	{@html `<script type="application/ld+json">
		${JSON.stringify({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: Site.seo.author,
			url: Site.url,
			description: Site.description,
			birthDate: Site.seo.birthDate,
			sameAs: [
				Site.out.github,
				Site.out.kaggle,
				Site.out.huggingface
			],
			knowsAbout: [
				'Cybersecurity',
				'Forensics',
				'Blue Team',
				'Rust',
				'C',
				'LLM Fine-tuning',
				'Network Security',
				'NixOS'
			]
		})}
	</script>`}
</svelte:head>

<div class="text-text mx-auto flex min-h-screen max-w-[90%] flex-col md:max-w-[80%]">
	<Header {toggleSidebar} />
	<Sidebar isOpen={isSidebarOpen} {closeSidebar} />
	<main class="flex-1 px-0 py-8 md:px-5">
		{@render children?.()}
	</main>
	<Footer value={data.footerData.value} />
</div>
