
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/api" | "/api/preview" | "/api/preview/[owner]" | "/api/preview/[owner]/[repo]" | "/philosophy" | "/philosophy/rss.xml" | "/philosophy/[slug]" | "/pics" | "/poetry" | "/poetry/rss.xml" | "/poetry/[slug]" | "/posts" | "/posts/rss.xml" | "/posts/[slug]" | "/projects" | "/projects/[slug]" | "/sitemap.xml" | "/socials";
		RouteParams(): {
			"/api/preview/[owner]": { owner: string };
			"/api/preview/[owner]/[repo]": { owner: string; repo: string };
			"/philosophy/[slug]": { slug: string };
			"/poetry/[slug]": { slug: string };
			"/posts/[slug]": { slug: string };
			"/projects/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { owner?: string; repo?: string; slug?: string };
			"/about": Record<string, never>;
			"/api": { owner?: string; repo?: string };
			"/api/preview": { owner?: string; repo?: string };
			"/api/preview/[owner]": { owner: string; repo?: string };
			"/api/preview/[owner]/[repo]": { owner: string; repo: string };
			"/philosophy": { slug?: string };
			"/philosophy/rss.xml": Record<string, never>;
			"/philosophy/[slug]": { slug: string };
			"/pics": Record<string, never>;
			"/poetry": { slug?: string };
			"/poetry/rss.xml": Record<string, never>;
			"/poetry/[slug]": { slug: string };
			"/posts": { slug?: string };
			"/posts/rss.xml": Record<string, never>;
			"/posts/[slug]": { slug: string };
			"/projects": { slug?: string };
			"/projects/[slug]": { slug: string };
			"/sitemap.xml": Record<string, never>;
			"/socials": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/api" | "/api/" | "/api/preview" | "/api/preview/" | `/api/preview/${string}` & {} | `/api/preview/${string}/` & {} | `/api/preview/${string}/${string}` & {} | `/api/preview/${string}/${string}/` & {} | "/philosophy" | "/philosophy/" | "/philosophy/rss.xml" | "/philosophy/rss.xml/" | `/philosophy/${string}` & {} | `/philosophy/${string}/` & {} | "/pics" | "/pics/" | "/poetry" | "/poetry/" | "/poetry/rss.xml" | "/poetry/rss.xml/" | `/poetry/${string}` & {} | `/poetry/${string}/` & {} | "/posts" | "/posts/" | "/posts/rss.xml" | "/posts/rss.xml/" | `/posts/${string}` & {} | `/posts/${string}/` & {} | "/projects" | "/projects/" | `/projects/${string}` & {} | `/projects/${string}/` & {} | "/sitemap.xml" | "/sitemap.xml/" | "/socials" | "/socials/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/css/catppuccin.css" | "/css/colors.css" | "/favicon.svg" | "/images/avatar.webp" | "/logos/hackcanada.svg" | "/logos/rbc.svg" | "/logos/stan.svg" | "/logos/storagebox.svg" | "/projects/advent-of-code-2025.png" | "/projects/docsentinel.png" | "/projects/mixgen.png" | "/projects/scrapy.png" | "/projects/tunl.png" | "/resume.pdf" | "/robots.txt" | string & {};
	}
}