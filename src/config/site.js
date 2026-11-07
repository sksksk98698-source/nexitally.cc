// Get site URL from environment variable, use default value if not set
// Note: Please set the correct PUBLIC_SITE_URL in .env file after first deployment
const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://nexitally.cc';

export const siteConfig = {
	title: "Nexitally",
	name: "Nexitally 奶昔",
	author: "Nexitally Official",
	url: SITE_URL,
	mail: "support@nexitally.cc",
	// 注册按钮统一使用，并设置 rel="nofollow noopener noreferrer" 保护本站 SEO 权重
	registerUrl: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
	meta: {
		title: "Nexitally 官网 — 老牌 IEPL 专线 · 企业级全内网架构 · VLESS 极速协议",
		description: "Nexitally（奶昔）始于 2020 年稳定运营，提供全球 IEPL / IPLC 企业级内网专线与 VLESS 协议。自研客户端与全平台订阅支持，全天候 4K 秒开，解锁 ChatGPT、Claude、TikTok 直播与全球流媒体。",
		keywords: "Nexitally, 奶昔机场, Nexitally官网, IEPL专线, IPLC专线, VLESS协议, 机场梯子, ChatGPT加速, TikTok直播节点, 跨境电商专线",
		image: `${SITE_URL}/og.jpg`,
		twitterHandle: "@nexitally",
	},
	headerCta: {
		text: "立即注册",
		url: "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
	},
	// 核心亮点标签
	tags: [
		"2020年运营",
		"IEPL专线",
		"VLESS协议",
		"年付低至8.25元/月",
		"AI工具全解锁",
		"4K流媒体秒开",
		"自研客户端"
	],
	// social links
	social: {
		twitter: "https://x.com/nexitally",
		twitterName: "Nexitally",
		github: "",
		blog: "/blog",
	},
	// 站长平台验证配置 (Google, Bing, 百度, 神马)
	webmaster: {
		google: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || "",
		bing: import.meta.env.PUBLIC_BING_SITE_VERIFICATION || "",
		baidu: import.meta.env.PUBLIC_BAIDU_SITE_VERIFICATION || "",
		shenma: import.meta.env.PUBLIC_SHENMA_SITE_VERIFICATION || "",
	},
};

// 套餐标准卡片数据配置
export const pricingPlans = [
	{
		id: "snooker-147",
		name: "致敬斯诺克 147 永久套餐",
		badge: "一次性永久版 · 限量特惠",
		price: "147",
		billingPeriod: "一次性付清",
		periodNote: "永久不过期 · 流量用尽可重置",
		traffic: "247 GB 永久流量",
		speed: "最高 2.5 Gbps",
		features: [
			{ text: "一次性永久版无忧过期", highlight: true },
			{ text: "原生稳定节点，单节点最高 2.5Gbps", highlight: true },
			{ text: "不限制在线设备数量，多端同时在线", highlight: false },
			{ text: "覆盖：香港×20、台湾×5、日本×10、新加坡×10、美国×10、马来西亚×2、英法德土泰巴等", highlight: false },
			{ text: "适合：日常办公、邮件、资料查询、社交聊天、轻度视频", highlight: false },
			{ text: "解锁：跨境电商、TikTok 直播、社媒推广、远程办公", highlight: true },
			{ text: "一次性买断，纯净无额外扣费", highlight: false },
		],
		popular: false,
		ctaText: "立即订购 147 永久版",
	},
	{
		id: "lightweight",
		name: "轻量版",
		badge: "入门首选 · 年付均摊",
		price: "99",
		billingPeriod: "/ 年",
		periodNote: "折算仅约 8.25 元/月（年付结算）",
		traffic: "69 GB / 月",
		speed: "原生稳定专线",
		features: [
			{ text: "轻量入门高性价比，低门槛畅联", highlight: true },
			{ text: "月享 69GB 高速流量（每月自动重置）", highlight: false },
			{ text: "原生稳定节点，低延迟全内网接入", highlight: false },
			{ text: "不限制在线设备数量", highlight: false },
			{ text: "节点：港/台/日/新/马/美/德/法/英/土/越", highlight: false },
			{ text: "解锁：Netflix / Disney+ / ChatGPT / TikTok", highlight: true },
			{ text: "适合：办公、邮件、学术资料、聊天与轻度视频", highlight: false },
		],
		popular: false,
		ctaText: "立即选购轻量版",
	},
	{
		id: "pro-speed",
		name: "极速版",
		badge: "🔥 旗舰热销 · 晚高峰无忧",
		price: "25",
		billingPeriod: "/ 月",
		periodNote: "半年9折 / 年付8折 / 两年75折 / 三年7折",
		traffic: "168 GB / 月",
		speed: "全球 IPLC 专线 · 最高 2.5 Gbps",
		features: [
			{ text: "全球 IPLC / IEPL 专线，全节点 ×1.0 真实倍率", highlight: true },
			{ text: "单节点最高 2.5Gbps，晚高峰 4K 秒开", highlight: true },
			{ text: "不限在线设备数量，多端并发无压力", highlight: false },
			{ text: "节点：港/台/日/新/马/美/德/法/英/土/越", highlight: false },
			{ text: "全解锁：Netflix 4K / Disney+ / ChatGPT 4o / Claude / TikTok", highlight: true },
			{ text: "7×24 小时专业运维与自动化冗余切换", highlight: false },
			{ text: "支持半年付/年付/多年付阶梯优惠", highlight: false },
		],
		popular: true,
		ctaText: "立即开通极速版",
	},
	{
		id: "enterprise-custom",
		name: "定制版",
		badge: "企业专享 · 独立带宽 IP",
		price: "680",
		billingPeriod: "/ 月",
		periodNote: "专属商务支持 · 线下专属确认",
		traffic: "500 GB / 月（可弹性定制）",
		speed: "独享带宽 · 最高 2.5 Gbps",
		features: [
			{ text: "按需独立部署，全 IPLC 专线超低时延架构", highlight: true },
			{ text: "为每位用户分配专属原生 IP 与独立隔离带宽", highlight: true },
			{ text: "单节点最高 2.5Gbps，不限客户端数量", highlight: false },
			{ text: "解锁：跨境电商防关联、TikTok 直播矩阵、企业专网", highlight: true },
			{ text: "流量、带宽、线路与地区（港/日/美/新等）均可灵活定制", highlight: false },
			{ text: "客服一对一专属确认，7×24 小时 VIP 架构师保障", highlight: true },
			{ text: "满足企业长时稳定传输与严苛数据合规", highlight: false },
		],
		popular: false,
		ctaText: "咨询定制专线",
	},
];

// Footer 友情与导航链接
export const socialLinks = [
	{
		name: 'Twitter',
		url: 'https://x.com/nexitally',
		icon: `<svg class="ic-twitter icon" width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1684 408q-67 98-162 167 1 14 1 42 0 130-38 259.5t-115.5 248.5-184.5 210.5-258 146-323 54.5q-271 0-496-145 35 4 78 4 225 0 401-138-105-2-188-64.5t-114-159.5q33 5 61 5 43 0 85-11-112-23-185.5-111.5t-73.5-205.5v-4q68 38 146 41-66-44-105-115t-39-154q0-88 44-163 121 149 294.5 238.5t371.5 99.5q-8-38-8-74 0-134 94.5-228.5t228.5-94.5q140 0 236 102 109-21 205-78-37 115-142 178 93-10 186-50z" fill="currentColor"></path></svg>`
	},
	{
		name: 'RSS',
		url: '/rss.xml',
		icon: `<svg t="1730123988138" class="icon ic-rss ic-social " viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11766" width="256" height="256"><path d="M329.143 768q0 45.714-32 77.714t-77.714 32-77.715-32-32-77.714 32-77.714 77.715-32 77.714 32 32 77.714z m292.571 70.286q1.143 16-9.714 27.428-10.286 12-26.857 12H508q-14.286 0-24.571-9.428T472 844.57q-12.571-130.857-105.429-223.714T142.857 515.43q-14.286-1.143-23.714-11.429t-9.429-24.571v-77.143q0-16.572 12-26.857 9.715-9.715 24.572-9.715h2.857q91.428 7.429 174.857 46T472 515.43q65.143 64.571 103.714 148t46 174.857z m292.572 1.143q1.143 15.428-10.286 26.857-10.286 11.428-26.286 11.428H796q-14.857 0-25.429-10T759.43 843.43Q752.57 720.57 701.714 610T569.43 418t-192-132.286T144 227.43q-14.286-0.572-24.286-11.143t-10-24.857v-81.715q0-16 11.429-26.285 10.286-10.286 25.143-10.286H148q149.714 7.428 286.571 68.571t243.143 168q106.857 106.286 168 243.143t68.572 286.572z" p-id="11767"></path></svg>`
	},
];
