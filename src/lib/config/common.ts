import {
	type Icon,
	IconBrandGithub,
	IconMail
} from '@tabler/icons-svelte';
import { dev } from '$app/environment';
import Kaggle from '$lib/icons/Kaggle.svelte';
import HuggingFace from '$lib/icons/HuggingFace.svelte';

interface Site {
	name: string;
	url: string;
	description: string;
	tags: string[];
	seo: {
		author: string;
		birthDate: string;
		location: {
			country: string;
		};
	};
	out: {
		github: string;
		kaggle: string;
		huggingface: string;
		email: string;
	};
	repo: { url: string; commitBaseUrl: string };
}

const Site: Site = {
	name: 'Dhananjay Singh Chauhan',
	url: dev ? 'http://localhost:5173' : 'https://dschauhan.dev',
	description:
		'Dhananjay Singh Chauhan - Year 12 student; forensics and blue team. NixOS user, reality compiler, LLM enjoyer.',
	tags: [
		'Dhananjay Singh Chauhan',
		'DsChauhan08',
		'Year 12 Student',
		'Forensics',
		'Blue Team',
		'Security',
		'NixOS',
		'LLM',
		'Rust Developer',
		'C Developer',
		'Network Security',
		'Malware Analysis'
	],
	seo: {
		author: 'Dhananjay Singh Chauhan',
		birthDate: '2008-08-08',
		location: {
			country: 'India'
		}
	},
	out: {
		github: 'https://github.com/DsChauhan08',
		kaggle: 'https://www.kaggle.com/olliebearman',
		huggingface: 'https://huggingface.co/dschauhan08',
		email: 'mailto:singhdschauhan10@gmail.com'
	},
	repo: {
		url: 'https://github.com/DsChauhan08/portfolio',
		commitBaseUrl: 'https://github.com/DsChauhan08/portfolio/commit/'
	}
};

export default Site;

export const Socials = [
	{
		url: Site.out.github,
		label: 'GitHub',
		icon: IconBrandGithub,
		footer: true
	},
	{
		url: Site.out.kaggle,
		label: 'Kaggle',
		icon: Kaggle as unknown as Icon,
		footer: true
	},
	{
		url: Site.out.huggingface,
		label: 'HuggingFace',
		icon: HuggingFace as unknown as Icon,
		footer: true
	},
	{
		url: Site.out.email,
		label: 'Email',
		icon: IconMail,
		footer: true
	}
];
