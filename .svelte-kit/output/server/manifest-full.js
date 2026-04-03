export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/catppuccin.css","css/colors.css","favicon.svg","fonts/jetbrains-mono-latin-400-normal.woff2","fonts/jetbrains-mono-latin-700-normal.woff2","images/avatar.webp","logos/hackcanada.svg","logos/rbc.svg","logos/stan.svg","logos/storagebox.svg","projects/advent-of-code-2025.png","projects/docsentinel.png","projects/docsentinel.webp","projects/mixgen.png","projects/mixgen.webp","projects/scrapy.png","projects/scrapy.webp","projects/tunl.png","projects/tunl.webp","resume.pdf","robots.txt"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".woff2":"font/woff2",".webp":"image/webp",".png":"image/png",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.Bn-DHgU5.js",app:"_app/immutable/entry/app.DUAxGiMl.js",imports:["_app/immutable/entry/start.Bn-DHgU5.js","_app/immutable/chunks/B3zgwEe8.js","_app/immutable/chunks/DdQo10ER.js","_app/immutable/entry/app.DUAxGiMl.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/DdQo10ER.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/preview/[owner]/[repo]",
				pattern: /^\/api\/preview\/([^/]+?)\/([^/]+?)\/?$/,
				params: [{"name":"owner","optional":false,"rest":false,"chained":false},{"name":"repo","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/preview/_owner_/_repo_/_server.ts.js'))
			},
			{
				id: "/philosophy",
				pattern: /^\/philosophy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/philosophy/rss.xml",
				pattern: /^\/philosophy\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/philosophy/rss.xml/_server.ts.js'))
			},
			{
				id: "/philosophy/[slug]",
				pattern: /^\/philosophy\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/pics",
				pattern: /^\/pics\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/poetry",
				pattern: /^\/poetry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/poetry/rss.xml",
				pattern: /^\/poetry\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/poetry/rss.xml/_server.ts.js'))
			},
			{
				id: "/poetry/[slug]",
				pattern: /^\/poetry\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/sitemap.xml",
				pattern: /^\/sitemap\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/sitemap.xml/_server.ts.js'))
			},
			{
				id: "/socials",
				pattern: /^\/socials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
