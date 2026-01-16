import { IconBrandGithub, type Icon } from '@tabler/icons-svelte';
import Site from '$lib/config/common';
import Kaggle from '$lib/icons/Kaggle.svelte';
import HuggingFace from '$lib/icons/HuggingFace.svelte';

export const Home = {
	socialLinks: [
		{
			href: Site.out.github,
			text: 'GitHub',
			icon: IconBrandGithub as unknown as Icon
		},
		{
			href: Site.out.kaggle,
			text: 'Kaggle',
			icon: Kaggle as unknown as Icon
		},
		{
			href: Site.out.huggingface,
			text: 'HuggingFace',
			icon: HuggingFace as unknown as Icon
		}
	]
};

// No experience timeline - student focused on learning
export const experienceTimeline: never[] = [];
