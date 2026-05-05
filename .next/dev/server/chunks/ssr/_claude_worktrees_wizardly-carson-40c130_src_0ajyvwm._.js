module.exports = [
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

//# sourceMappingURL=_claude_worktrees_wizardly-carson-40c130_src_0ajyvwm._.js.map