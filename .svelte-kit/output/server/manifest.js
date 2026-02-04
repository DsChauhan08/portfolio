export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","css/catppuccin.css","css/colors.css","favicon.svg","images/avatar.webp","logos/hackcanada.svg","logos/rbc.svg","logos/stan.svg","logos/storagebox.svg","projects/advent-of-code-2025.png","projects/docsentinel.png","projects/mixgen.png","projects/scrapy.png","projects/tunl.png","resume.pdf","robots.txt"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".pdf":"application/pdf",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BDJYdDgw.js",app:"_app/immutable/entry/app.hMkv5MS4.js",imports:["_app/immutable/entry/start.BDJYdDgw.js","_app/immutable/chunks/BdghKveP.js","_app/immutable/chunks/D7FRCZ5m.js","_app/immutable/chunks/D6BEqjKt.js","_app/immutable/chunks/CelBeEm6.js","_app/immutable/chunks/J9LnY1sB.js","_app/immutable/entry/app.hMkv5MS4.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/D6BEqjKt.js","_app/immutable/chunks/CelBeEm6.js","_app/immutable/chunks/CpEqz7ul.js","_app/immutable/chunks/D7FRCZ5m.js","_app/immutable/chunks/DvT2td1w.js","_app/immutable/chunks/iSYQj8Dr.js","_app/immutable/chunks/1bzHHiSe.js","_app/immutable/chunks/DCnVbYGX.js","_app/immutable/chunks/J9LnY1sB.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
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
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/philosophy/[slug]",
				pattern: /^\/philosophy\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/poetry",
				pattern: /^\/poetry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/poetry/[slug]",
				pattern: /^\/poetry\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/socials",
				pattern: /^\/socials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/projects/docsentinel","/projects/docsentinel/__data.json","/projects/qwen-finance-gguf","/projects/qwen-finance-gguf/__data.json","/projects/scrapy","/projects/scrapy/__data.json","/projects/tunl","/projects/tunl/__data.json","/projects/mixgen","/projects/mixgen/__data.json","/projects/advent-of-code-2025","/projects/advent-of-code-2025/__data.json","/about","/about/__data.json","/pics","/pics/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
