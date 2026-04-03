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
		client: {start:"_app/immutable/entry/start.QUyaPVXi.js",app:"_app/immutable/entry/app.M7yF8cyK.js",imports:["_app/immutable/entry/start.QUyaPVXi.js","_app/immutable/chunks/Bi107Npv.js","_app/immutable/chunks/CvumDFOP.js","_app/immutable/entry/app.M7yF8cyK.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/CvumDFOP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js')),
			__memo(() => import('../output/server/nodes/11.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/philosophy",
				pattern: /^\/philosophy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/philosophy/[slug]",
				pattern: /^\/philosophy\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/poetry",
				pattern: /^\/poetry\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/poetry/[slug]",
				pattern: /^\/poetry\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/socials",
				pattern: /^\/socials\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/__data.json","/about","/about/__data.json","/philosophy/rss.xml","/pics","/pics/__data.json","/poetry/rss.xml","/sitemap.xml","/projects/easycopy","/projects/easycopy/__data.json","/projects/sat-stream","/projects/sat-stream/__data.json","/projects/safenet","/projects/safenet/__data.json","/projects/qalpha","/projects/qalpha/__data.json","/projects/synthetic-finance-data-3m","/projects/synthetic-finance-data-3m/__data.json","/projects/docsentinel","/projects/docsentinel/__data.json","/projects/qwen-finance-gguf","/projects/qwen-finance-gguf/__data.json","/projects/scrapy","/projects/scrapy/__data.json","/projects/tunl","/projects/tunl/__data.json","/projects/mixgen","/projects/mixgen/__data.json","/projects/advent-of-code-2025","/projects/advent-of-code-2025/__data.json"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
