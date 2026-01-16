export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["css/catppuccin.css","css/colors.css","favicon.svg","images/avatar.webp","logos/hackcanada.svg","logos/rbc.svg","logos/stan.svg","logos/storagebox.svg","projects/advent-of-code-2025.png","projects/docsentinel.png","projects/mixgen.png","projects/scrapy.png","projects/tunl.png","resume.pdf","robots.txt"]),
	mimeTypes: {".css":"text/css",".svg":"image/svg+xml",".webp":"image/webp",".png":"image/png",".pdf":"application/pdf",".txt":"text/plain",".avif":"image/avif"},
	_: {
		client: {start:"_app/immutable/entry/start.CxhNjbEn.js",app:"_app/immutable/entry/app.BHl4KwnQ.js",imports:["_app/immutable/entry/start.CxhNjbEn.js","_app/immutable/chunks/5k8lECY2.js","_app/immutable/chunks/BO8472px.js","_app/immutable/chunks/DL-IYu9g.js","_app/immutable/chunks/BHzYtxdM.js","_app/immutable/chunks/COgXYPT9.js","_app/immutable/entry/app.BHl4KwnQ.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/DL-IYu9g.js","_app/immutable/chunks/BHzYtxdM.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BO8472px.js","_app/immutable/chunks/CDEKRZbE.js","_app/immutable/chunks/EyJCFt1t.js","_app/immutable/chunks/0b41AozX.js","_app/immutable/chunks/CnW4CWI0.js","_app/immutable/chunks/COgXYPT9.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
		server_assets: {"_app/immutable/assets/517355716.C4wbNKkS.avif":160561,"_app/immutable/assets/517355716.CRvl8MUo.avif":79468,"_app/immutable/assets/517355716.TQaAyghm.avif":38884,"_app/immutable/assets/517355716.BSp8-2pv.webp":270750,"_app/immutable/assets/517355716.DVQA8kYt.webp":123576,"_app/immutable/assets/517355716.DkC8_Q1l.webp":59186,"_app/immutable/assets/IMG_0013.CttTLx1l.avif":243572,"_app/immutable/assets/IMG_0013.CJBK1MOf.avif":110134,"_app/immutable/assets/IMG_0013.BkfUj_4F.avif":60891,"_app/immutable/assets/IMG_0013.D3UibwUD.webp":367928,"_app/immutable/assets/IMG_0013._H5qD19J.webp":161814,"_app/immutable/assets/IMG_0013.DKiwz05N.webp":84916,"_app/immutable/assets/IMG_0036.Du_6SkYR.avif":103423,"_app/immutable/assets/IMG_0036.XSGqAkIX.avif":46681,"_app/immutable/assets/IMG_0036.BfhVUoix.avif":26968,"_app/immutable/assets/IMG_0036.bhKx1f1o.webp":178396,"_app/immutable/assets/IMG_0036.DKoqHutB.webp":76582,"_app/immutable/assets/IMG_0036.DPA5FJH7.webp":41610,"_app/immutable/assets/IMG_0542.BvCf2aQk.avif":138103,"_app/immutable/assets/IMG_0542.9CHTCCmC.avif":57756,"_app/immutable/assets/IMG_0542.BJ_CO8sq.avif":30795,"_app/immutable/assets/IMG_0542.DtpDqXOj.webp":223386,"_app/immutable/assets/IMG_0542.B7b5d_qY.webp":91540,"_app/immutable/assets/IMG_0542.HsimIlHc.webp":47632,"_app/immutable/assets/IMG_20251107_205325_165.DgG196EM.avif":68812,"_app/immutable/assets/IMG_20251107_205325_165.k4JOm_P1.avif":37584,"_app/immutable/assets/IMG_20251107_205325_165.Bg87dwu3.webp":112338,"_app/immutable/assets/IMG_20251107_205325_165.BuzATooA.webp":72430,"_app/immutable/assets/IMG_9555.B52hcppI.avif":64149,"_app/immutable/assets/IMG_9555.DAqukuc4.avif":37496,"_app/immutable/assets/IMG_9555.BTv7EXkQ.avif":24872,"_app/immutable/assets/IMG_9555.Cs5bfF-o.webp":125694,"_app/immutable/assets/IMG_9555.DD2v_65m.webp":66810,"_app/immutable/assets/IMG_9555.Cgv07Y9i.webp":41820,"_app/immutable/assets/IMG_9884.CzbvvEke.avif":66426,"_app/immutable/assets/IMG_9884.D_2KmCg_.avif":35645,"_app/immutable/assets/IMG_9884.TON4Nn8C.avif":22191,"_app/immutable/assets/IMG_9884.YCBWcmF_.webp":116994,"_app/immutable/assets/IMG_9884.QqBQk4Eo.webp":60780,"_app/immutable/assets/IMG_9884.V_yXLH0z.webp":35262,"_app/immutable/assets/PXL_20220404_221001861.CZHZ3V0Y.avif":337506,"_app/immutable/assets/PXL_20220404_221001861.Bx7pHfQB.avif":187265,"_app/immutable/assets/PXL_20220404_221001861.LrMw6x23.avif":115962,"_app/immutable/assets/PXL_20220404_221001861.Biqtz8A9.webp":674384,"_app/immutable/assets/PXL_20220404_221001861.BGkOiwqx.webp":342246,"_app/immutable/assets/PXL_20220404_221001861.Dkq6s6l5.webp":195536,"_app/immutable/assets/PXL_20220626_030332663.NIGHT.DsK5bohc.avif":256282,"_app/immutable/assets/PXL_20220626_030332663.NIGHT.B5w4T_Sc.avif":102823,"_app/immutable/assets/PXL_20220626_030332663.NIGHT.EGtjcJB6.avif":39828,"_app/immutable/assets/PXL_20220626_030332663.NIGHT.Cus1QzkV.webp":398186,"_app/immutable/assets/PXL_20220626_030332663.NIGHT.Bg_iXkvu.webp":164962,"_app/immutable/assets/PXL_20220626_030332663.NIGHT.468GBtmr.webp":69792,"_app/immutable/assets/PXL_20220918_221838148.PORTRAIT.DjZAM2Z0.avif":170734,"_app/immutable/assets/PXL_20220918_221838148.PORTRAIT.D2NGv1aZ.avif":75455,"_app/immutable/assets/PXL_20220918_221838148.PORTRAIT.C4BL8UMv.avif":35096,"_app/immutable/assets/PXL_20220918_221838148.PORTRAIT.CITN0HOr.webp":311312,"_app/immutable/assets/PXL_20220918_221838148.PORTRAIT.CVZCrjFN.webp":129396,"_app/immutable/assets/PXL_20220918_221838148.PORTRAIT.JNw01dWX.webp":58484,"_app/immutable/assets/PXL_20221009_195927011.C6qwSwg3.avif":171752,"_app/immutable/assets/PXL_20221009_195927011.2L8y3cqi.avif":88402,"_app/immutable/assets/PXL_20221009_195927011.oQMBaUAj.avif":48774,"_app/immutable/assets/PXL_20221009_195927011.CPN1g-lX.webp":322708,"_app/immutable/assets/PXL_20221009_195927011.-U1YUNTP.webp":156774,"_app/immutable/assets/PXL_20221009_195927011.CcKfdVSS.webp":81468,"_app/immutable/assets/PXL_20230719_022112889.NIGHT.CquBqT-P.avif":127715,"_app/immutable/assets/PXL_20230719_022112889.NIGHT.tjNc6j3H.avif":59768,"_app/immutable/assets/PXL_20230719_022112889.NIGHT.BLrd5OLf.avif":26679,"_app/immutable/assets/PXL_20230719_022112889.NIGHT.Cfc0QiBz.webp":226096,"_app/immutable/assets/PXL_20230719_022112889.NIGHT.Bo5zaast.webp":110752,"_app/immutable/assets/PXL_20230719_022112889.NIGHT.DMBHLLWi.webp":53836,"_app/immutable/assets/PXL_20230720_033605781.NIGHT~2.C4YUIEpI.avif":149453,"_app/immutable/assets/PXL_20230720_033605781.NIGHT~2.B-dTRZkf.avif":75655,"_app/immutable/assets/PXL_20230720_033605781.NIGHT~2.DKgPcDnG.avif":36816,"_app/immutable/assets/PXL_20230720_033605781.NIGHT~2.CC67uD6E.webp":254720,"_app/immutable/assets/PXL_20230720_033605781.NIGHT~2.18ZJvq5d.webp":131648,"_app/immutable/assets/PXL_20230720_033605781.NIGHT~2.05g83yuz.webp":67940,"_app/immutable/assets/PXL_20240414_234010698.C4RLMM_O.avif":496335,"_app/immutable/assets/PXL_20240414_234010698.B3FUnUUx.avif":242030,"_app/immutable/assets/PXL_20240414_234010698.o-87f4iD.avif":119339,"_app/immutable/assets/PXL_20240414_234010698.D7QOuvyL.webp":891616,"_app/immutable/assets/PXL_20240414_234010698.DuoLXkCF.webp":413936,"_app/immutable/assets/PXL_20240414_234010698.CHXkMb9N.webp":200168,"_app/immutable/assets/PXL_20240514_232351202.PORTRAIT.BnMxMxcr.avif":146374,"_app/immutable/assets/PXL_20240514_232351202.PORTRAIT.BNX5um8a.avif":64809,"_app/immutable/assets/PXL_20240514_232351202.PORTRAIT.BlUhxhL_.avif":36969,"_app/immutable/assets/PXL_20240514_232351202.PORTRAIT.BFfJAVXl.webp":265060,"_app/immutable/assets/PXL_20240514_232351202.PORTRAIT.sV3-ABfc.webp":117090,"_app/immutable/assets/PXL_20240514_232351202.PORTRAIT.De2gz2Iy.webp":62708,"_app/immutable/assets/PXL_20240514_232408454.PORTRAIT.ORIGINAL.B-D0wfFF.avif":71186,"_app/immutable/assets/PXL_20240514_232408454.PORTRAIT.ORIGINAL.C7dkmmGG.avif":31522,"_app/immutable/assets/PXL_20240514_232408454.PORTRAIT.ORIGINAL.DCuBkvaK.avif":16608,"_app/immutable/assets/PXL_20240514_232408454.PORTRAIT.ORIGINAL.CaaappeY.webp":134568,"_app/immutable/assets/PXL_20240514_232408454.PORTRAIT.ORIGINAL.CuSl4qDW.webp":57490,"_app/immutable/assets/PXL_20240514_232408454.PORTRAIT.ORIGINAL.DzcJehsz.webp":30940,"_app/immutable/assets/PXL_20250001.CJfvXly8.avif":87865,"_app/immutable/assets/PXL_20250001.97jbGy-h.avif":48930,"_app/immutable/assets/PXL_20250001.T30GJ0q1.avif":28936,"_app/immutable/assets/PXL_20250001.CkOPNsKO.webp":160572,"_app/immutable/assets/PXL_20250001.LRUIEl3R.webp":82202,"_app/immutable/assets/PXL_20250001.BWRY1joe.webp":46230,"_app/immutable/assets/PXL_20250311_221838769.bCjxNlOY.avif":362245,"_app/immutable/assets/PXL_20250311_221838769.m8I41Wdy.avif":144018,"_app/immutable/assets/PXL_20250311_221838769.CkoPcw9M.avif":61950,"_app/immutable/assets/PXL_20250311_221838769.BPASEskj.webp":610634,"_app/immutable/assets/PXL_20250311_221838769.D8B8XbK3.webp":233394,"_app/immutable/assets/PXL_20250311_221838769.CnKPeQ4X.webp":103372,"_app/immutable/assets/PXL_20250829_235850782.FY1-XFd0.avif":141690,"_app/immutable/assets/PXL_20250829_235850782.jANF5CAt.avif":79601,"_app/immutable/assets/PXL_20250829_235850782.D_oi27CV.avif":47175,"_app/immutable/assets/PXL_20250829_235850782.7oCUbOwo.webp":286500,"_app/immutable/assets/PXL_20250829_235850782.X8SRPtfB.webp":135696,"_app/immutable/assets/PXL_20250829_235850782.D9FCdAq5.webp":74254,"_app/immutable/assets/PXL_20251031_221431315.WrZEMCLg.avif":410344,"_app/immutable/assets/PXL_20251031_221431315.CetFwSse.avif":215894,"_app/immutable/assets/PXL_20251031_221431315.BslwYmI1.avif":119612,"_app/immutable/assets/PXL_20251031_221431315.BgNQ-0m5.webp":677728,"_app/immutable/assets/PXL_20251031_221431315.D_MxXWoK.webp":318776,"_app/immutable/assets/PXL_20251031_221431315.CGq3AZor.webp":173438,"_app/immutable/assets/PXL_20251103_220514644~2.qO2adx3e.avif":33345,"_app/immutable/assets/PXL_20251103_220514644~2.BEwKISiv.avif":15672,"_app/immutable/assets/PXL_20251103_220514644~2.B21lMOcV.avif":9089,"_app/immutable/assets/PXL_20251103_220514644~2.DL4EowI_.webp":91196,"_app/immutable/assets/PXL_20251103_220514644~2.DvumTCoO.webp":39776,"_app/immutable/assets/PXL_20251103_220514644~2.BclZ8vUp.webp":20496,"_app/immutable/assets/PXL_20251106_012413214.C3ESJVY_.avif":55450,"_app/immutable/assets/PXL_20251106_012413214.CcWK1j2k.avif":27639,"_app/immutable/assets/PXL_20251106_012413214.C_u-0st-.avif":15542,"_app/immutable/assets/PXL_20251106_012413214.BUxlPAgd.webp":117190,"_app/immutable/assets/PXL_20251106_012413214.CweoiCb0.webp":54430,"_app/immutable/assets/PXL_20251106_012413214.DxPScHeZ.webp":28832,"_app/immutable/assets/PXL_20251114_010033442.Crjy07JV.avif":99264,"_app/immutable/assets/PXL_20251114_010033442.MEK7mKyH.avif":46398,"_app/immutable/assets/PXL_20251114_010033442.6zU2zPWS.avif":23993,"_app/immutable/assets/PXL_20251114_010033442.CGLaXWab.webp":203258,"_app/immutable/assets/PXL_20251114_010033442.B4NRwIOt.webp":89152,"_app/immutable/assets/PXL_20251114_010033442.CfYO3Pj8.webp":44962,"_app/immutable/assets/_MG_0564.BliMquyZ.avif":58015,"_app/immutable/assets/_MG_0564.XKuOXHcQ.avif":24782,"_app/immutable/assets/_MG_0564.DLEf9jzX.avif":13109,"_app/immutable/assets/_MG_0564.Cst7LV7m.webp":116488,"_app/immutable/assets/_MG_0564.C9K8FnAd.webp":48128,"_app/immutable/assets/_MG_0564.CFXkhSIa.webp":25528,"_app/immutable/assets/_MG_0577.BDJ4k7Wp.avif":25957,"_app/immutable/assets/_MG_0577.BKMGaZzg.avif":11620,"_app/immutable/assets/_MG_0577.BNN7aIyA.avif":6539,"_app/immutable/assets/_MG_0577.Cqb_RNCZ.webp":62328,"_app/immutable/assets/_MG_0577.C0Y6tHzg.webp":27526,"_app/immutable/assets/_MG_0577.CNDQolVI.webp":14530,"_app/immutable/assets/space.8uRoYWmn.avif":50783,"_app/immutable/assets/space.DNS2qPok.avif":21128,"_app/immutable/assets/space.S9ZenYjM.avif":10922,"_app/immutable/assets/space.wdgG6nds.webp":79300,"_app/immutable/assets/space.SkPOCpdJ.webp":32128,"_app/immutable/assets/space.DeeUO03E.webp":16496,"_app/immutable/assets/unity.t5nbVm-H.avif":37091,"_app/immutable/assets/unity.6kwB1-Jw.avif":22020,"_app/immutable/assets/unity.Bn0vQRUE.avif":14844,"_app/immutable/assets/unity.Cgj4tS4j.webp":82136,"_app/immutable/assets/unity.B_8I4HGB.webp":42622,"_app/immutable/assets/unity.DJ1N0rlg.webp":26754}
	}
}
})();
