export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/catppuccin.css","css/colors.css","favicon.svg","images/avatar.webp","logos/hackcanada.svg","logos/rbc.svg","logos/stan.svg","logos/storagebox.svg","projects/advent-of-code-2025.png","projects/docsentinel.png","projects/mixgen.png","projects/scrapy.png","projects/tunl.png","resume.pdf","robots.txt"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".pdf":"application/pdf",".txt":"text/plain",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.vi06r8kz.js",app:"_app/immutable/entry/app.DdyBdRtn.js",imports:["_app/immutable/entry/start.vi06r8kz.js","_app/immutable/chunks/DhUqbzPi.js","_app/immutable/chunks/BO8472px.js","_app/immutable/chunks/DL-IYu9g.js","_app/immutable/chunks/BHzYtxdM.js","_app/immutable/chunks/COgXYPT9.js","_app/immutable/entry/app.DdyBdRtn.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/DL-IYu9g.js","_app/immutable/chunks/BHzYtxdM.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BO8472px.js","_app/immutable/chunks/CDEKRZbE.js","_app/immutable/chunks/EyJCFt1t.js","_app/immutable/chunks/0b41AozX.js","_app/immutable/chunks/CnW4CWI0.js","_app/immutable/chunks/COgXYPT9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
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
				id: "/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/posts/rss.xml",
				pattern: /^\/posts\/rss\.xml\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/posts/rss.xml/_server.ts.js'))
			},
			{
				id: "/posts/[slug]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/projects/[slug]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
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
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {"_app/immutable/assets/517355716.9EdqCTGC.jpg":309161,"_app/immutable/assets/IMG_0013.B-dilVNP.jpg":14500264,"_app/immutable/assets/IMG_0036.BUndmE3Z.jpg":11780643,"_app/immutable/assets/IMG_0542.B-6eQK1Y.jpg":3321317,"_app/immutable/assets/IMG_20251107_205325_165.BVSc4cG5.jpg":323205,"_app/immutable/assets/IMG_9555.DpJKibvk.jpg":3443928,"_app/immutable/assets/IMG_9884.BncWTysN.jpg":9509777,"_app/immutable/assets/PXL_20220404_221001861.Dym6yvyG.jpg":2744311,"_app/immutable/assets/PXL_20220626_030332663.NIGHT.D8TRLHaL.jpg":3216549,"_app/immutable/assets/PXL_20220918_221838148.PORTRAIT.DE_AqHb6.jpg":2252398,"_app/immutable/assets/PXL_20221009_195927011.tdkm_-Ng.jpg":2820108,"_app/immutable/assets/PXL_20230719_022112889.NIGHT.Djq8aOZj.jpg":2356645,"_app/immutable/assets/PXL_20230720_033605781.NIGHT~2.Zp74VoDg.jpg":1083608,"_app/immutable/assets/PXL_20240414_234010698.CpDP_0uQ.jpg":6587353,"_app/immutable/assets/PXL_20240514_232351202.PORTRAIT.dK7tbIjC.jpg":2171591,"_app/immutable/assets/PXL_20240514_232408454.PORTRAIT.ORIGINAL.B-RAy2I9.jpg":3728120,"_app/immutable/assets/PXL_20250001.BjVpW9Z0.jpg":12364354,"_app/immutable/assets/PXL_20250311_221838769.DdMm3mkz.jpg":7036780,"_app/immutable/assets/PXL_20250829_235850782.BA54zDb6.jpg":4300819,"_app/immutable/assets/PXL_20251031_221431315.C8Pkmc-v.jpg":3815503,"_app/immutable/assets/PXL_20251103_220514644~2.Dn43ijo-.jpg":2209771,"_app/immutable/assets/PXL_20251106_012413214.O3kQY4Qu.jpg":2072600,"_app/immutable/assets/PXL_20251114_010033442.7i-Evx-G.jpg":2714728,"_app/immutable/assets/_MG_0564.CuRljals.jpg":10638366,"_app/immutable/assets/_MG_0577.5Ph4-yEo.jpg":8810718,"_app/immutable/assets/space.B7veovbH.jpg":5403868,"_app/immutable/assets/unity.DaJEl71o.jpg":11018503}
	}
}
})();
