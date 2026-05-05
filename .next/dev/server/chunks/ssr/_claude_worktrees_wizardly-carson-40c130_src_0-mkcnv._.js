module.exports = [
"[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Tabs({ items, className, tabsClassName, defaultActive }) {
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(defaultActive ?? items[0]?.key);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-wrap justify-center gap-3 mb-8 " + (tabsClassName ?? ""),
                role: "tablist",
                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            role: "tab",
                            "aria-selected": active === item.key,
                            "data-active": active === item.key,
                            className: "tab-pill",
                            onClick: ()=>setActive(item.key),
                            children: item.label
                        }, void 0, false, {
                            fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Tabs.tsx",
                            lineNumber: 30,
                            columnNumber: 13
                        }, this)
                    }, item.key, false, {
                        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Tabs.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Tabs.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tab-content",
                children: items.map((item)=>active === item.key ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: item.content
                    }, item.key, false, {
                        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Tabs.tsx",
                        lineNumber: 45,
                        columnNumber: 33
                    }, this) : null)
            }, void 0, false, {
                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Tabs.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Tabs.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Reveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Reveal",
    ()=>Reveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Reveal({ children, className = "", delay = 0, as = "div" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    const t = window.setTimeout(()=>setVisible(true), delay);
                    observer.disconnect();
                    return ()=>window.clearTimeout(t);
                }
            });
        }, {
            threshold: 0.12,
            rootMargin: "0px 0px -60px 0px"
        });
        observer.observe(node);
        return ()=>observer.disconnect();
    }, [
        delay
    ]);
    const Tag = as;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: "reveal " + (visible ? "is-visible " : "") + className,
        children: children
    }, void 0, false, {
        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/shared/Reveal.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
"[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/SwiperCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SwiperCarousel",
    ()=>SwiperCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/swiper/swiper-react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/index.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/autoplay.mjs [app-ssr] (ecmascript) <export default as Autoplay>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/pagination.mjs [app-ssr] (ecmascript) <export default as Pagination>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__ = __turbopack_context__.i("[project]/node_modules/swiper/modules/navigation.mjs [app-ssr] (ecmascript) <export default as Navigation>");
"use client";
;
;
;
;
;
;
function SwiperCarousel({ className, slides, loop = true, autoplay = true, pagination = true, navigation = false, spaceBetween = 24, breakpoints, slidesPerView = 1 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Swiper"], {
        className: className,
        modules: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$autoplay$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Autoplay$3e$__["Autoplay"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$pagination$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pagination$3e$__["Pagination"],
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$modules$2f$navigation$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Navigation$3e$__["Navigation"]
        ],
        loop: loop,
        autoplay: autoplay ? {
            delay: 4500,
            disableOnInteraction: false
        } : false,
        pagination: pagination ? {
            clickable: true
        } : false,
        navigation: navigation,
        spaceBetween: spaceBetween,
        slidesPerView: slidesPerView,
        breakpoints: breakpoints,
        children: slides.map((slide, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$swiper$2f$swiper$2d$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperSlide"], {
                children: slide
            }, i, false, {
                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/SwiperCarousel.tsx",
                lineNumber: 46,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/SwiperCarousel.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
"[project]/.claude/worktrees/wizardly-carson-40c130/src/lib/data/feedback.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CLIENT_LOGOS",
    ()=>CLIENT_LOGOS,
    "FEEDBACKS",
    ()=>FEEDBACKS
]);
const FEEDBACKS = [
    {
        name: "Aarav Mehta",
        company: "Brightline Logistics",
        quote: "TechnoBren delivered exactly what we needed — a custom logistics platform that runs flawlessly. Their team was responsive, knowledgeable, and committed throughout."
    },
    {
        name: "Sara Khalid",
        company: "Barakat Group",
        quote: "From scoping through delivery, the experience was outstanding. The mobile app they built has reduced our distribution times by 30% in the first quarter alone."
    },
    {
        name: "Manoj Kumar",
        company: "JSW Paints",
        quote: "We needed enterprise-grade software with tight integrations. TechnoBren handled it end-to-end — clean architecture, on-time delivery, and great support."
    },
    {
        name: "Priya Iyer",
        company: "Davies",
        quote: "Our merchandiser management tool has been a game-changer for our retail teams. Real-time tracking and easy reporting have boosted shelf compliance significantly."
    }
];
const CLIENT_LOGOS = [
    "/images/JSW-Paints.png",
    "/images/Movit-logo.png",
    "/images/hariss-logo.png",
    "/images/Cosmic-Nutracos.png",
    "/images/Davies-1.png",
    "/images/barakat-logo.png",
    "/images/masafi-logo.png",
    "/images/Mega-Global.png",
    "/images/Godrej-agrovet-1.png",
    "/images/Redington.png",
    "/images/admirals-logo.png",
    "/images/dhl.png",
    "/images/nfpc-logo.png",
    "/images/oasis-logo.png",
    "/images/gurave-logo.png"
];
}),
"[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FeedbackCarousel",
    ()=>FeedbackCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$components$2f$carousel$2f$SwiperCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/SwiperCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$lib$2f$data$2f$feedback$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.claude/worktrees/wizardly-carson-40c130/src/lib/data/feedback.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function FeedbackCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$components$2f$carousel$2f$SwiperCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperCarousel"], {
        className: "pb-12",
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1200: {
                slidesPerView: 3
            }
        },
        spaceBetween: 24,
        slides: __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$lib$2f$data$2f$feedback$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FEEDBACKS"].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "feedback-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/qoute.svg",
                        alt: "",
                        className: "h-6 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx",
                        lineNumber: 18,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "details-text mb-6 leading-7",
                        style: {
                            color: "#fff"
                        },
                        children: f.quote
                    }, void 0, false, {
                        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-bold text-lg m-0",
                                children: f.name
                            }, void 0, false, {
                                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx",
                                lineNumber: 23,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-[#bcbcbc] m-0",
                                children: f.company
                            }, void 0, false, {
                                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx",
                                lineNumber: 24,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx",
                        lineNumber: 22,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/FeedbackCarousel.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/.claude/worktrees/wizardly-carson-40c130/src/lib/data/industries.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "INDUSTRIES",
    ()=>INDUSTRIES
]);
const INDUSTRIES = [
    {
        title: "Manufacturing",
        icon: "/images/manufacturing.svg"
    },
    {
        title: "Healthcare",
        icon: "/images/healthcare.svg"
    },
    {
        title: "Logistics",
        icon: "/images/logistics.svg"
    },
    {
        title: "Retail",
        icon: "/images/shopping.svg"
    },
    {
        title: "Education",
        icon: "/images/education.svg"
    },
    {
        title: "Finance",
        icon: "/images/finance.svg"
    },
    {
        title: "Media",
        icon: "/images/media.svg"
    },
    {
        title: "Travel",
        icon: "/images/traveling.svg"
    },
    {
        title: "Construction",
        icon: "/images/construction.svg"
    },
    {
        title: "Beauty & Wellness",
        icon: "/images/cosmetics.svg"
    },
    {
        title: "Sports",
        icon: "/images/sports.svg"
    },
    {
        title: "Legal",
        icon: "/images/legal.svg"
    }
];
}),
"[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/IndustriesCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "IndustriesCarousel",
    ()=>IndustriesCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$components$2f$carousel$2f$SwiperCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/SwiperCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$lib$2f$data$2f$industries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.claude/worktrees/wizardly-carson-40c130/src/lib/data/industries.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function IndustriesCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$components$2f$carousel$2f$SwiperCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperCarousel"], {
        className: "pb-12",
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 4
            },
            1200: {
                slidesPerView: 6
            }
        },
        spaceBetween: 16,
        slides: __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$lib$2f$data$2f$industries$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["INDUSTRIES"].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "industries-box",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: i.icon,
                        alt: i.title
                    }, void 0, false, {
                        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/IndustriesCarousel.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: i.title
                    }, void 0, false, {
                        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/IndustriesCarousel.tsx",
                        lineNumber: 20,
                        columnNumber: 11
                    }, this)
                ]
            }, i.title, true, {
                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/IndustriesCarousel.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/IndustriesCarousel.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
"[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/ClientsCarousel.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientsCarousel",
    ()=>ClientsCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$components$2f$carousel$2f$SwiperCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/SwiperCarousel.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$lib$2f$data$2f$feedback$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/.claude/worktrees/wizardly-carson-40c130/src/lib/data/feedback.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
function ClientsCarousel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$components$2f$carousel$2f$SwiperCarousel$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SwiperCarousel"], {
        className: "pb-8",
        breakpoints: {
            0: {
                slidesPerView: 2
            },
            576: {
                slidesPerView: 3
            },
            992: {
                slidesPerView: 5
            },
            1200: {
                slidesPerView: 6
            }
        },
        spaceBetween: 32,
        pagination: false,
        slides: __TURBOPACK__imported__module__$5b$project$5d2f2e$claude$2f$worktrees$2f$wizardly$2d$carson$2d$40c130$2f$src$2f$lib$2f$data$2f$feedback$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CLIENT_LOGOS"].map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center h-24 grayscale hover:grayscale-0 transition",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: src,
                    alt: "",
                    className: "max-h-16 w-auto object-contain"
                }, void 0, false, {
                    fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/ClientsCarousel.tsx",
                    lineNumber: 23,
                    columnNumber: 11
                }, this)
            }, i, false, {
                fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/ClientsCarousel.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/.claude/worktrees/wizardly-carson-40c130/src/components/carousel/ClientsCarousel.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_claude_worktrees_wizardly-carson-40c130_src_0-mkcnv._.js.map