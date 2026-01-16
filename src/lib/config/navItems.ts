import type { Icon } from '@tabler/icons-svelte';

interface NavItem {
	title: string;
	href: string;
	icon?: Icon;
	external?: boolean;
}

export const mainNavItems: NavItem[] = [
	{ title: 'About', href: '/about' },
	{ title: 'Poetry', href: '/poetry' },
	{ title: 'Projects', href: '/projects' },
	{ title: 'Philosophy', href: '/philosophy' }
];

export const moreNavItems: NavItem[] = [
	{ title: 'Pics', href: '/pics' }
];
