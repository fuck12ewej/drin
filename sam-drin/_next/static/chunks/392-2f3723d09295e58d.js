(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [392], {
        40569: function(e, s, i) {
            "use strict";
            i.d(s, {
                z: function() {
                    return m
                }
            });
            var t = i(85893),
                n = i(67294),
                l = i(41664),
                a = i.n(l),
                c = i(93967),
                r = i.n(c),
                o = i(45951),
                d = i(33787),
                h = i.n(d);
            let m = e => {
                let {
                    type: s = "primary",
                    size: i = "large",
                    minWidth: l,
                    icon: c,
                    iconPosition: d = "right",
                    text: m,
                    nowrap: x,
                    href: C = "#",
                    isExternal: u,
                    isStatic: j,
                    fullWidth: L,
                    isDisabled: p,
                    isLoading: f,
                    download: v,
                    className: b,
                    id: g,
                    isSubmitType: k,
                    onClick: y
                } = e, w = r()(h().btn, "".concat(h()["btn--".concat(s)]), {
                    ["".concat(h()["btn--".concat(i)])]: "arrow" !== s,
                    ["".concat(h()["btn--nowrap"])]: x,
                    ["".concat(h()["btn--fullwidth"])]: L,
                    ["".concat(h()["btn--icon-".concat(d)])]: !!c && !!d
                }, b), N = c && (0, t.jsx)(o.l, {
                    name: c,
                    className: h().icon
                }), M = (0, n.useMemo)(() => u ? "_blank" : "_self", [u]), Z = (0, n.useCallback)(() => {
                    !p && y && y()
                }, [p, y]), F = k ? "submit" : "button", _ = () => f ? (0, t.jsx)("div", {
                    className: h().loading
                }) : (0, t.jsxs)(t.Fragment, {
                    children: ["left" === d && N, (0, t.jsx)("span", {
                        className: h().inner,
                        children: m
                    }), "right" === d && N]
                });
                return j ? (0, t.jsx)("button", {
                    type: F,
                    disabled: p,
                    className: w,
                    id: g,
                    style: {
                        minWidth: l
                    },
                    children: _()
                }) : y ? (0, t.jsx)("button", {
                    type: F,
                    className: w,
                    disabled: p,
                    onClick: Z,
                    id: g,
                    style: {
                        minWidth: l
                    },
                    children: _()
                }) : y ? null : (0, t.jsx)(a(), {
                    href: C,
                    target: M,
                    rel: "noopener noreferrer nofollow",
                    download: v,
                    className: w,
                    id: g,
                    style: {
                        minWidth: l
                    },
                    children: _()
                })
            }
        },
        44423: function(e, s, i) {
            "use strict";
            i.d(s, {
                k: function() {
                    return u
                }
            });
            var t = i(85893),
                n = i(67294),
                l = i(93967),
                a = i.n(l),
                c = i(13114),
                r = i(4889),
                o = i(11163),
                d = i(71152),
                h = i(74271),
                m = i.n(h);
            let x = {
                    variants: {
                        hidden: {
                            opacity: 0,
                            height: 0,
                            y: -10
                        },
                        show: {
                            opacity: 1,
                            height: "auto",
                            y: 0,
                            transition: {
                                delayChildren: .1,
                                staggerChildren: .05
                            }
                        }
                    },
                    transition: {
                        duration: .35
                    },
                    initial: "hidden",
                    animate: "show",
                    exit: {
                        opacity: 0,
                        y: -10
                    }
                },
                C = {
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: -10
                        },
                        show: {
                            opacity: 1,
                            y: 0
                        }
                    }
                },
                u = e => {
                    let {
                        className: s
                    } = e, i = (0, n.useRef)(null), l = (0, o.useRouter)(), {
                        pathname: h,
                        query: u,
                        asPath: j,
                        locale: L,
                        locales: p
                    } = l, [f, v] = (0, n.useState)(!1), b = (0, n.useCallback)(() => {
                        v(!f)
                    }, [f]), g = (0, n.useCallback)(() => {
                        v(!1)
                    }, []), k = (0, n.useCallback)(e => {
                        l.push({
                            pathname: h,
                            query: u
                        }, j, {
                            locale: e,
                            scroll: !1
                        }), g()
                    }, [j, g, h, u, l]);
                    (0, d.t)([i], g, void 0, []);
                    let y = a()(m().lang, {
                        [m()["is-active"]]: f
                    }, s);
                    return p ? (0, t.jsxs)("nav", {
                        className: y,
                        ref: i,
                        children: [(0, t.jsx)("button", {
                            type: "button",
                            className: m().current,
                            onClick: b,
                            children: L
                        }), (0, t.jsx)(c.M, {
                            children: f && (0, t.jsx)(r.E.div, {
                                ...x,
                                className: m().list,
                                children: p.map(e => e === L ? null : (0, n.createElement)(r.E.button, {
                                    ...C,
                                    key: e,
                                    className: m().item,
                                    onClick: () => k(e)
                                }, e))
                            })
                        })]
                    }) : null
                }
        },
        51297: function(e, s, i) {
            "use strict";
            i.d(s, {
                T: function() {
                    return a
                }
            });
            var t = i(85893);
            i(67294);
            let n = {
                    black: {
                        icon: "#0057FF",
                        text: "#000"
                    },
                    white: {
                        icon: "#fff",
                        text: "#fff"
                    }
                },
                l = {
                    width: "100%",
                    height: "auto"
                },
                a = e => {
                    let {
                        type: s = "black",
                        className: i
                    } = e;
                    return (0, t.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 160 33",
                        xlinkTitle: "AMLBot",
                        "aria-label": "AMLBot",
                        className: i,
                        style: l,
                        children: [
                            (0, t.jsx)("path", {
                            fill: n[s].text,
                            d: ""
                        }), 
                        (0, t.jsx)("path", {
                            fill: n[s].icon,
                            fillRule: "evenodd",
                            d: "M14.555 1.543c-1.43-2.105-4.566-2.046-5.915.112L.531 14.63a3.49 3.49 0 0 0 .037 3.759l8.487 13.014c1.39 2.13 4.526 2.13 5.915 0l8.462-12.975a3.49 3.49 0 0 0-.036-3.87L14.555 1.543Zm.968 7.687c-.305 5.437-4.595 9.816-10.012 10.294l6.502 9.97 8.462-12.974-4.952-7.29Z",
                            clipRule: "evenodd"
                        })]
                    })
                }
        },
        71792: function(e, s, i) {
            "use strict";
            var t = i(85893),
                n = i(67294),
                l = i(64221),
                a = i.n(l);
            s.Z = e => {
                let {
                    isActive: s = !1,
                    duration: i = .25,
                    children: l
                } = e, c = (0, n.useRef)(null), [r, o] = (0, n.useState)(0), [d, h] = (0, n.useState)(0);
                return (0, n.useEffect)(() => {
                    let {
                        current: e
                    } = c;
                    null != e && (o(e.offsetHeight), h(e.offsetHeight), s ? h(r) : h(0))
                }, [r, s]), (0, t.jsx)("div", {
                    className: a().container,
                    style: {
                        height: d,
                        transition: "all ".concat(i, "s")
                    },
                    children: (0, t.jsx)("div", {
                        ref: c,
                        children: l
                    })
                })
            }
        },
        48754: function(e, s, i) {
            "use strict";
            i.d(s, {
                c: function() {
                    return u
                }
            });
            var t = i(85893),
                n = i(93967),
                l = i.n(n),
                a = i(25675),
                c = i.n(a),
                r = i(41664),
                o = i.n(r);
            i(67294);
            var d = i(47057),
                h = {
                    src: "/_next/static/media/logo-trustpilot-white.13d3f83f.svg",
                    height: 31,
                    width: 126,
                    blurWidth: 0,
                    blurHeight: 0
                },
                m = {
                    src: "/_next/static/media/logo-trustpilot.7960630a.svg",
                    height: 31,
                    width: 126,
                    blurWidth: 0,
                    blurHeight: 0
                },
                x = i(61748),
                C = i.n(x);
            let u = e => {
                    let {
                        size: s = "large",
                        color: i = "black",
                        showLogo: n = !0,
                        showBasedOn: a = !0,
                        className: r
                    } = e, x = l()(C().trustpilot, [C()["trustpilot--".concat(s)]], [C()["trustpilot--".concat(i)]], r);
                    return (0, t.jsxs)(o(), {
                        href: d.Am,
                        target: "_blank",
                        className: x,
                        children: [n && (0, t.jsx)(c(), {
                            src: "black" === i ? m : h,
                            alt: "",
                            loading: "lazy",
                            className: C().logo
                        }), (0, t.jsxs)("div", {
                            className: C().body,
                            children: [(0, t.jsxs)("div", {
                                className: C().stars,
                                children: [(0, t.jsx)(j, {}), (0, t.jsx)(j, {}), (0, t.jsx)(j, {}), (0, t.jsx)(j, {}), (0, t.jsx)(j, {
                                    white: "white" === i,
                                    half: !0
                                })]
                            }), (0, t.jsxs)("div", {
                                className: C().of,
                                children: [(0, t.jsx)("b", {
                                    children: "4.5"
                                }), " out of 5"]
                            })]
                        }), "large" === s || a && (0, t.jsxs)("div", {
                            className: C().based,
                            children: ["Based on ", (0, t.jsx)("span", {
                                children: "66 reviews"
                            })]
                        })]
                    })
                },
                j = e => {
                    let {
                        half: s,
                        white: i
                    } = e, n = "#219654";
                    return (0, t.jsxs)("svg", {
                        viewBox: "0 0 47 47",
                        version: "1.1",
                        xmlns: "http://www.w3.org/2000/svg",
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        children: [(0, t.jsx)("title", {
                            children: "Trustpilot"
                        }), (0, t.jsx)("polygon", {
                            fill: s ? i ? "#1D1D1D" : "#D9D9D9" : n,
                            points: "0 46.330002 46.375587 46.330002 46.375587 0 0 0"
                        }), s && (0, t.jsx)("polygon", {
                            fill: n,
                            points: "0 46.330002 23.187793 46.330002 23.187793 0 0 0"
                        }), (0, t.jsx)("path", {
                            d: "M39.532606,19.711433 L13.229706,38.800651 L17.067125,27.002824 L7.019821,19.711433 L19.438795,19.711433 L23.276213,7.912809 L27.113631,19.711433 L39.532606,19.711433 L39.532606,19.711433 Z M23.27717,31.510075 L30.460765,30.000499 L33.322879,38.800651 L23.27717,31.510075 Z",
                            fill: "#FFFFFF"
                        })]
                    })
                }
        },
        77548: function(e, s, i) {
            "use strict";
            i.d(s, {
                i: function() {
                    return r
                }
            });
            var t = i(85893);
            i(67294);
            var n = i(93967),
                l = i.n(n),
                a = i(12333),
                c = i.n(a);
            let r = e => {
                let {
                    children: s,
                    mobileSmallGutter: i,
                    mobileNoGutter: n,
                    className: a
                } = e, r = l()(c().wrapper, {
                    [c()["mobile-small-gutter"]]: i,
                    [c()["mobile-no-gutter"]]: n
                }, a);
                return (0, t.jsx)("div", {
                    className: r,
                    children: s
                })
            }
        },
        9546: function(e, s, i) {
            "use strict";
            i.d(s, {
                X: function() {
                    return t
                }
            });
            let t = "__next"
        },
        4993: function(e, s, i) {
            "use strict";
            var t = i(11163),
                n = i(47057);
            s.Z = () => {
                let {
                    locale: e
                } = (0, t.useRouter)();
                return "ru" === e || "ua" === e ? "".concat(n.Ql, "/ru") : n.Ql
            }
        },
        5147: function(e, s, i) {
            "use strict";
            var t = i(39332),
                n = i(43840),
                l = i(47057),
                a = i(22486);
            s.Z = e => {
                let s = (0, a.p)(),
                    i = (0, t.useSearchParams)(),
                    c = (0, n.p)(i),
                    r = e ? "/".concat(e) : "";
                if (s) {
                    let e = c.length ? "&".concat(c) : "";
                    return "".concat(l.xp).concat(r, "?ref=").concat(s).concat(e)
                }
                return "".concat(l.xp).concat(r, "?").concat(c)
            }
        },
        65219: function(e, s, i) {
            "use strict";
            var t = i(20296),
                n = i.n(t),
                l = i(67294);
            let a = {
                desktop: "(min-width: ".concat(1024, "px)"),
                tablet: "(max-width: ".concat(1024, "px) and (min-width: ").concat(767, "px)"),
                mobile: "(max-width: ".concat(767, "px)")
            };
            s.Z = () => {
                let [e, s] = (0, l.useState)({
                    isDesktop: !1,
                    isTablet: !1,
                    isMobile: !1
                });
                return (0, l.useEffect)(() => {
                    let e = () => {
                        s({
                            isDesktop: window.matchMedia(a.desktop).matches,
                            isTablet: window.matchMedia(a.tablet).matches,
                            isMobile: window.matchMedia(a.mobile).matches
                        })
                    };
                    e();
                    let i = n()(e, 250);
                    return window.addEventListener("resize", i), () => {
                        window.removeEventListener("resize", i)
                    }
                }, []), e
            }
        },
        71152: function(e, s, i) {
            "use strict";
            i.d(s, {
                t: function() {
                    return n
                }
            });
            var t = i(67294);

            function n(e, s, i) {
                let n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [],
                    l = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                (0, t.useEffect)(() => {
                    if (!l || !s) return;
                    let t = t => {
                        var l;
                        let a = t.target,
                            c = e.every(e => !(null == e ? void 0 : e.current)),
                            r = e.some(e => {
                                var s;
                                return !!(null == e ? void 0 : null === (s = e.current) || void 0 === s ? void 0 : s.contains(a))
                            }),
                            o = t.composedPath().some(e => n.some(s => {
                                var i;
                                return null === (i = e.matches) || void 0 === i ? void 0 : i.call(e, s)
                            }));
                        c || r || o || (null == i ? void 0 : null === (l = i.current) || void 0 === l ? void 0 : l.contains(a)) || s(t)
                    };
                    return document.addEventListener("mousedown", t), document.addEventListener("touchstart", t), () => {
                        document.removeEventListener("mousedown", t), document.removeEventListener("touchstart", t)
                    }
                }, [e, i, s, n, l])
            }
        },
        62246: function(e, s, i) {
            "use strict";
            i.d(s, {
                N: function() {
                    return t
                },
                x: function() {
                    return n
                }
            });
            let t = {
                    variants: {
                        hidden: {
                            opacity: 0,
                            height: 0,
                            y: -10
                        },
                        show: {
                            opacity: 1,
                            height: "auto",
                            y: 0,
                            transition: {
                                delayChildren: .1,
                                staggerChildren: .05
                            }
                        }
                    },
                    transition: {
                        duration: .35
                    },
                    initial: "hidden",
                    animate: "show",
                    exit: {
                        opacity: 0,
                        y: -10
                    }
                },
                n = {
                    variants: {
                        hidden: {
                            opacity: 0,
                            y: -10
                        },
                        show: {
                            opacity: 1,
                            y: 0
                        }
                    }
                }
        },
        93311: function(e, s, i) {
            "use strict";
            i.d(s, {
                H: function() {
                    return E
                }
            });
            var t = i(85893),
                n = i(67294),
                l = i(73935),
                a = i(93967),
                c = i.n(a),
                r = i(13114),
                o = i(4889),
                d = i(14199),
                h = i.n(d);
            let m = e => {
                let {
                    isActive: s,
                    onClick: i
                } = e, n = c()(h().burger, {
                    ["".concat(h()["is-active"])]: s
                });
                return (0, t.jsx)("button", {
                    type: "button",
                    className: n,
                    "aria-label": "Menu",
                    onClick: i,
                    children: (0, t.jsxs)("span", {
                        className: h().burger__in,
                        children: [(0, t.jsx)("i", {}), (0, t.jsx)("i", {}), (0, t.jsx)("i", {})]
                    })
                })
            };
            var x = i(9546),
                C = i(65219),
                u = i(14550),
                j = i(41664),
                L = i.n(j),
                p = i(67421),
                f = i(62246),
                v = i(47057),
                b = i(4993),
                g = i(71792),
                k = i(45951),
                y = i(54831),
                w = i.n(y),
                N = i(25857),
                M = i.n(N);
            let Z = () => {
                    let [e, s] = (0, n.useState)(!1), {
                        t: i
                    } = (0, p.$G)(), l = (0, n.useCallback)(() => {
                        s(!e)
                    }, [e]), a = c()(w().item, w()["has-submenu"], {
                        [w()["is-active"]]: e
                    });
                    return (0, t.jsxs)("div", {
                        className: a,
                        children: [(0, t.jsx)(o.E.button, {
                            type: "button",
                            className: w().link,
                            onClick: l,
                            ...f.x,
                            children: i("header.links.products")
                        }), (0, t.jsx)(g.Z, {
                            isActive: e,
                            children: (0, t.jsxs)("div", {
                                className: M().submenu,
                                children: [(0, t.jsxs)("div", {
                                    className: M().group,
                                    children: [(0, t.jsx)("h3", {
                                        className: M().title,
                                        children: i("menuProducts.forBusiness")
                                    }), (0, t.jsxs)("div", {
                                        className: M().list,
                                        children: [(0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsx)(L(), {
                                                href: v.zc,
                                                className: M().link,
                                                children: i("menuProducts.kyt.label")
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsx)(L(), {
                                                href: v.b3,
                                                className: M().link,
                                                children: i("menuProducts.kyc.label")
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsxs)(L(), {
                                                href: v.uz,
                                                className: M().link,
                                                children: [(0, t.jsx)("span", {
                                                    children: "AMLBot"
                                                }), (0, t.jsx)(k.l, {
                                                    name: "pro",
                                                    className: M().pro
                                                })]
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsx)(L(), {
                                                href: v.sE,
                                                className: M().link,
                                                children: i("menuProducts.amlTraining.label")
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsx)(L(), {
                                                href: v.Rp,
                                                className: M().link,
                                                children: i("menuProducts.consulting.label")
                                            })
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: M().group,
                                    children: [(0, t.jsx)("h3", {
                                        className: M().title,
                                        children: i("menuProducts.forPersonalUse")
                                    }), (0, t.jsxs)("div", {
                                        className: M().list,
                                        children: [(0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsx)(L(), {
                                                href: v.nb,
                                                className: M().link,
                                                children: i("menuProducts.chatBot.label")
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsx)(L(), {
                                                href: v.jo,
                                                target: "_blank",
                                                className: M().link,
                                                children: i("menuProducts.mobileApp.label")
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: M().item,
                                            children: (0, t.jsx)(L(), {
                                                href: v.dh,
                                                className: M().link,
                                                children: i("menuProducts.investigation.label")
                                            })
                                        })]
                                    })]
                                })]
                            })
                        })]
                    })
                },
                F = {
                    products: !0,
                    pricing: !0,
                    analysis: !0,
                    faq: !0,
                    blog: !0,
                    aboutUs: !0,
                    careers: !0
                },
                _ = e => {
                    let {
                        apperance: s = F,
                        onClickLink: i
                    } = e, {
                        t: n
                    } = (0, p.$G)(), l = (0, b.Z)();
                    return (0, t.jsxs)("nav", {
                        className: w().links,
                        children: [s.products && (0, t.jsx)(Z, {}), s.pricing && (0, t.jsx)(o.E.div, {
                            className: w().item,
                            ...f.x,
                            children: (0, t.jsx)(L(), {
                                href: v.Ni,
                                className: w().link,
                                onClick: i,
                                children: n("header.links.price")
                            })
                        }), s.analysis && (0, t.jsx)(o.E.div, {
                            className: w().item,
                            ...f.x,
                            children: (0, t.jsx)(L(), {
                                href: v.vI,
                                className: w().link,
                                children: n("header.links.analysis")
                            })
                        }), s.careers && (0, t.jsx)(o.E.div, {
                            className: w().item,
                            ...f.x,
                            children: (0, t.jsx)(L(), {
                                href: v.g6,
                                className: w().link,
                                children: n("footer.info.links.careers")
                            })
                        })]
                    })
                };
            var B = i(73630),
                P = i.n(B);
            let E = e => {
                let {
                    children: s,
                    renderLinks: i,
                    renderActions: a,
                    className: d
                } = e, {
                    isTablet: h,
                    isMobile: j
                } = (0, C.Z)(), [L, p] = (0, n.useState)(!1), v = (0, n.useCallback)(() => {
                    p(!L)
                }, [L]), b = (0, n.useCallback)(() => {
                    p(!1)
                }, []), g = (0, t.jsxs)(t.Fragment, {
                    children: [i || (0, t.jsx)(_, {
                        onClickLink: b
                    }), a || (0, t.jsx)(u.P, {})]
                }), k = c()(P().menu, d);
                return h || j ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(m, {
                        isActive: L,
                        onClick: v
                    }), L && l.createPortal((0, t.jsx)(r.M, {
                        children: L && (0, t.jsx)(o.E.div, {
                            ...f.N,
                            className: k,
                            children: (0, t.jsx)("div", {
                                className: P().inner,
                                children: s || g
                            })
                        })
                    }), document.getElementById(x.X))]
                }) : null
            }
        },
        14550: function(e, s, i) {
            "use strict";
            i.d(s, {
                P: function() {
                    return h
                }
            });
            var t = i(85893);
            i(67294);
            var n = i(67421),
                l = i(4889),
                a = i(62246),
                c = i(40569),
                r = i(5147),
                o = i(39824),
                d = i.n(o);
            let h = e => {
                    let {
                        children: s
                    } = e;
                    return (0, t.jsx)(l.E.nav, {
                        className: d().actions,
                        ...a.x,
                        children: s || (0, t.jsx)(m, {})
                    })
                },
                m = () => {
                    let {
                        t: e
                    } = (0, n.$G)(), s = (0, r.Z)("signin"), i = (0, r.Z)("signup");
                    return (0, t.jsxs)(t.Fragment, {
                        children: []
                    })
                }
        },
        34598: function(e, s, i) {
            "use strict";
            i.d(s, {
                $: function() {
                    return q
                }
            });
            var t = i(85893),
                n = i(67421),
                l = i(93967),
                a = i.n(l),
                c = i(77548);
            i(67294);
            var r = i(51297),
                o = i(48754),
                d = i(25675),
                h = i.n(d),
                m = i(41664),
                x = i.n(m),
                C = i(47057),
                u = {
                    src: "/_next/static/media/iso-9001-white.7dccc3d9.svg",
                    height: 120,
                    width: 120,
                    blurWidth: 0,
                    blurHeight: 0
                },
                j = {
                    src: "/_next/static/media/iso-27001-white.00c51d59.svg",
                    height: 120,
                    width: 120,
                    blurWidth: 0,
                    blurHeight: 0
                },
                L = {
                    src: "/_next/static/media/iso-9001-black.58844294.svg",
                    height: 120,
                    width: 120,
                    blurWidth: 0,
                    blurHeight: 0
                },
                p = {
                    src: "/_next/static/media/iso-27001-black.6acb33dc.svg",
                    height: 120,
                    width: 120,
                    blurWidth: 0,
                    blurHeight: 0
                },
                f = i(1381),
                v = i.n(f);
            let b = e => {
                let {
                    color: s = "white"
                } = e;
                return (0, t.jsxs)("div", {
                    className: v().certifications,
                    children: [(0, t.jsx)(x(), {
                        href: C.mq,
                        target: "_blank",
                        children: (0, t.jsx)(h(), {
                            src: {
                                white: u,
                                black: L
                            } [s],
                            alt: "",
                            loading: "lazy"
                        })
                    }), (0, t.jsx)(x(), {
                        href: C.mq,
                        target: "_blank",
                        children: (0, t.jsx)(h(), {
                            src: {
                                white: j,
                                black: p
                            } [s],
                            alt: "",
                            loading: "lazy"
                        })
                    })]
                })
            };
            var g = i(24634),
                k = i.n(g);
            let y = e => {
                let {
                    type: s
                } = e, i = "black" === s || "black-transparent" === s;
                return (0, t.jsxs)("div", {
                    className: k().top,
                    children: [(0, t.jsxs)("div", {
                        className: k().info,
                        children: [(0, t.jsx)("div", {
                            className: k().logo,
                            children: (0, t.jsx)(r.T, {
                                type: i ? "white" : "black",
                                className: k().logoImg
                            })
                        }), (0, t.jsxs)("div", {
                            className: k().requisites,
                            children: [(0, t.jsx)("p", {
                                children: (0, t.jsx)("b", {
                                    children: "Safelement Limited,"
                                })
                            }), (0, t.jsx)("p", {
                                children: "Office 1111, Suite 1102, Lee Garden One, 33 Hysan Avenue, Causeway Bay, Hong Kong"
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: k().right,
                        children: [(0, t.jsx)(b, {
                            color: i ? "white" : "black"
                        }), (0, t.jsx)(o.c, {
                            color: i ? "white" : "black",
                            size: "small",
                            showBasedOn: !1,
                            className: k().trustpilot
                        })]
                    })]
                })
            };
            var w = i(45951),
                N = i(97522),
                M = i.n(N),
                Z = i(40806),
                F = i.n(Z);
            let _ = () => {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, t.jsxs)("nav", {
                    className: F().socials,
                    children: [(0, t.jsx)("div", {
                        className: M().title,
                        children: e("footer.socials.title")
                    }), (0, t.jsxs)("ul", {
                        className: F().list,
                        children: [(0, t.jsx)("li", {
                            children: (0, t.jsxs)(x(), {
                                href: C.MS,
                                rel: "noreferrer nofollow",
                                target: "_blank",
                                className: F().link,
                                children: [(0, t.jsx)(w.l, {
                                    name: "telegram-fill-circle"
                                }), (0, t.jsx)("span", {
                                    children: "Telegram"
                                })]
                            })
                        })]
                    })]
                })
            };
            var B = i(64423),
                P = i(51013),
                E = i.n(P);
            let z = () => {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, B.d)(), (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: E().group,
                        children: [(0, t.jsx)("div", {
                            className: M().title,
                            children: e("menuProducts.forBusiness")
                        }), (0, t.jsxs)("ul", {
                            className: M().list,
                            children: [(0, t.jsx)("li", {
                                children: (0, t.jsx)(x(), {
                                    href: C.zc,
                                    className: M().link,
                                    children: e("menuProducts.kyt.label")
                                })
                            }), (0, t.jsx)("li", {
                                children: (0, t.jsx)(x(), {
                                    href: C.b3,
                                    className: M().link,
                                    children: e("menuProducts.kyc.label")
                                })
                            }), (0, t.jsx)("li", {
                                children: (0, t.jsxs)(x(), {
                                    href: C.uz,
                                    className: M().link,
                                    children: [(0, t.jsx)("span", {
                                        children: "AMLBot"
                                    }), (0, t.jsx)(w.l, {
                                        name: "pro",
                                        className: E().pro
                                    })]
                                })
                            }), (0, t.jsx)("li", {
                                children: (0, t.jsx)(x(), {
                                    href: C.sE,
                                    className: M().link,
                                    children: e("menuProducts.amlTraining.label")
                                })
                            }), (0, t.jsx)("li", {
                                children: (0, t.jsx)(x(), {
                                    href: C.Rp,
                                    className: M().link,
                                    children: e("menuProducts.consulting.label")
                                })
                            })]
                        })]
                    }), (0, t.jsxs)("div", {
                        className: E().group,
                        children: [(0, t.jsx)("div", {
                            className: M().title,
                            children: e("menuProducts.forPersonalUse")
                        }), (0, t.jsxs)("ul", {
                            className: M().list,
                            children: [(0, t.jsx)("li", {
                                children: (0, t.jsx)(x(), {
                                    href: C.nb,
                                    className: M().link,
                                    children: e("menuProducts.chatBot.label")
                                })
                            }), (0, t.jsx)("li", {
                                children: (0, t.jsx)(x(), {
                                    href: C.jo,
                                    target: "_blank",
                                    className: M().link,
                                    children: e("menuProducts.mobileApp.label")
                                })
                            }), (0, t.jsx)("li", {
                                children: (0, t.jsx)(x(), {
                                    href: C.dh,
                                    className: M().link,
                                    children: e("menuProducts.investigation.label")
                                })
                            })]
                        })]
                    })]
                })
            };
            var R = i(86575),
                H = i.n(R);
            let V = () => {
                let {
                    t: e
                } = (0, n.$G)();
                return (0, t.jsxs)(x(), {
                    href: C.s1,
                    rel: "nofollow",
                    className: H().support,
                    children: [(0, t.jsx)(w.l, {
                        name: "telegram"
                    }), e("footer.info.links.support")]
                })
            };
            var I = i(4993),
                T = i(73346),
                S = i.n(T);
            let D = () => {
                let {
                    t: e
                } = (0, n.$G)(), s = (0, I.Z)();
                return (0, t.jsxs)("nav", {

                    
                })
            };
            var G = i(43024),
                A = i.n(G);
            let O = () => {
                    let {
                        t: e
                    } = (0, n.$G)();
                    return (0, t.jsxs)("nav", {
                        className: A().regulatory,
                        children: [(0, t.jsxs)(x(), {
                            href: C.Ek,
                            target: "_blank",
                            className: A().link,
                            children: [(0, t.jsx)(w.l, {
                                name: "pdf"
                            }), (0, t.jsx)("span", {
                                children: e("footer.legal.links.userAgreement")
                            })]
                        }), (0, t.jsx)(x(), {
                            href: C.PO,
                            className: A().link,
                            children: e("footer.legal.links.privacyPolicy")
                        })]
                    })
                },
                q = e => {
                    let {
                        type: s = "black",
                        className: i
                    } = e, {
                        t: l
                    } = (0, n.$G)(), r = a()(M().footer, "".concat(M()["footer--".concat(s)]), i);
                    return (0, t.jsx)("footer", {
                        className: r,
                        children: (0, t.jsxs)(c.i, {
                            children: [(0, t.jsx)(y, {
                                type: s
                            }), (0, t.jsxs)("div", {
                                className: M().nav,
                                children: [(0, t.jsx)(z, {}), (0, t.jsx)(D, {}), (0, t.jsx)(_, {})]
                            }), (0, t.jsxs)("div", {
                                className: M().bottom,
                                children: [(0, t.jsxs)("div", {
                                    className: M().copy,
                                    children: ["\xa9 ", "".concat(new Date().getFullYear()), " ", l("footer.copyright")]
                                }), (0, t.jsx)(V, {}), (0, t.jsx)(O, {})]
                            })]
                        })
                    })
                }
        },
        33180: function(e, s, i) {
            "use strict";
            i.d(s, {
                Z: function() {
                    return m
                }
            });
            var t = i(85893),
                n = i(67294),
                l = i(4298),
                a = i.n(l),
                c = i(9008),
                r = i.n(c),
                o = i(11163);
            let d = () => (0, t.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    position: "absolute",
                    width: 0,
                    height: 0,
                    visibility: "hidden"
                },
                children: [(0, t.jsx)("title", {
                    children: "SVG Icons"
                }), (0, t.jsx)("symbol", {
                    id: "icon-attach",
                    viewBox: "0 0 254 281",
                    children: (0, t.jsx)("path", {
                        d: "M136.61457,257.142 C105.21657,287.84 54.7325699,287.718 23.5095699,256.713 C-7.7044301,225.726 -7.8274301,175.584 23.0895699,144.405 L23.0635699,144.387 L136.63257,31.615 L150.83557,17.517 C174.35757,-5.839 212.48557,-5.839 236.00757,17.517 C259.52957,40.873 259.52957,78.738 236.00757,102.103 L110.81757,225.123 L110.77357,225.088 C95.3455699,239.859 70.7555699,239.754 55.5115699,224.694 C40.2675699,209.625 40.1715699,185.333 55.1175699,170.106 L55.0735699,170.053 L69.0135699,156.297 L138.71457,87.454 L152.64557,101.228 L69.0135699,183.827 C61.3125699,191.423 61.3125699,203.753 69.0135699,211.357 C76.7145699,218.961 89.2015699,218.961 96.8935699,211.357 L221.81157,87.987 L221.77657,87.961 L222.24957,87.558 C237.93157,71.99 237.93157,46.735 222.24957,31.168 C206.56757,15.601 181.15557,15.6 165.47357,31.168 L165.05357,31.641 L165.02757,31.623 L150.83357,45.712 L37.2575699,158.485 C13.7355699,181.841 13.7355699,219.706 37.2575699,243.062 C60.7795699,266.418 98.9165699,266.418 122.42057,243.062 L221.79557,144.387 L235.98957,130.298 L250.18357,144.387 L235.98957,158.485 L136.63257,257.16 C136.63257,257.159 136.61457,257.142 136.61457,257.142 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-user",
                    viewBox: "0 0 534 668",
                    children: (0, t.jsx)("path", {
                        d: "M267,0.666666667 C359.046567,0.666666667 433.666667,75.2862506 433.666667,167.333333 C433.666667,259.380416 359.046567,334 267,334 C174.952508,334 100.333333,259.380825 100.333333,167.333333 C100.333333,75.2858417 174.952508,0.666666667 267,0.666666667 Z M267,55.3333333 C201.83036,55.3333333 149,105.477404 149,167.333333 C149,229.189263 201.83036,279.333333 267,279.333333 C332.168671,279.333333 385,229.188689 385,167.333333 C385,105.477977 332.168671,55.3333333 267,55.3333333 Z M267,367.333333 C414.276158,367.333333 533.666667,486.723842 533.666667,634 C533.666667,652.409492 518.742825,667.333333 500.333333,667.333333 L33.6666667,667.333333 C15.257175,667.333333 0.333333333,652.409492 0.333333333,634 C0.333333333,486.723949 119.724067,367.333333 267,367.333333 Z M267.000088,415.333333 C158.340581,415.333333 67.9915761,502.147943 49.4295751,616.558566 L48.9991667,619.333333 L484.999167,619.333333 L484.570608,616.558527 C466.217206,503.433338 377.68105,417.287705 270.655764,415.366129 L267.000088,415.333333 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-marker",
                    viewBox: "0 0 524 725",
                    children: (0, t.jsx)("path", {
                        d: "M262,123.333333 C295.7709,123.333333 328.158631,136.748771 352.038263,160.628403 C375.917896,184.508035 389.333333,216.895767 389.333333,250.666667 C389.333333,320.990925 332.324258,378 262,378 C191.675742,378 134.666667,320.990925 134.666667,250.666667 C134.666667,180.342409 191.675742,123.333333 262,123.333333 Z M262,167.777778 C216.221731,167.777778 179.111111,204.888397 179.111111,250.666667 C179.111111,296.444936 216.221731,333.555556 262,333.555556 L262,333.333333 C307.691626,333.333498 344.766391,296.358129 344.888889,250.666667 C344.888889,204.888397 307.778269,167.777778 262,167.777778 Z M262,0.444444444 C406.179501,0.444444444 523.266262,116.933477 524,261.111111 C524,364.888889 465.777778,451.555556 423.333333,514.888889 L415.555556,526.666667 C373.098461,588.186996 327.558878,647.521957 279.111111,704.444444 L262.222222,724.222222 L245.333333,704.444444 C196.879366,647.526969 151.339538,588.191689 108.888889,526.666667 L101.111111,515.111111 C58.4444444,451.777778 0.222222222,364.888889 0.222222222,261.111111 C0.955468917,117.020125 117.907199,0.564794952 262,0.444444444 Z M364.5,83.5670693 C301.07278,46.3665294 222.92722,46.3665294 159.5,83.5670693 C96.0727774,120.767609 57,189.517042 57,263.918121 C57,350.370155 107.935583,427.240067 145.03681,483.455183 L152.373211,494.740793 C188.42638,549.678293 237.265849,611.21681 262,641.666664 C287.782209,611.21681 335.57362,549.678293 371.626789,494.740793 L379.172802,483.455183 C416.274029,428.091811 467,351.221899 467,263.918121 C467,189.517042 427.927223,120.767609 364.5,83.5670693 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-copy",
                    viewBox: "0 0 115.77 122.88",
                    children: (0, t.jsx)("path", {
                        d: "M89.62,13.96v7.73h12.19h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02v0.02 v73.27v0.01h-0.02c-0.01,3.84-1.57,7.33-4.1,9.86c-2.51,2.5-5.98,4.06-9.82,4.07v0.02h-0.02h-61.7H40.1v-0.02 c-3.84-0.01-7.34-1.57-9.86-4.1c-2.5-2.51-4.06-5.98-4.07-9.82h-0.02v-0.02V92.51H13.96h-0.01v-0.02c-3.84-0.01-7.34-1.57-9.86-4.1 c-2.5-2.51-4.06-5.98-4.07-9.82H0v-0.02V13.96v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07V0h0.02h61.7 h0.01v0.02c3.85,0.01,7.34,1.57,9.86,4.1c2.5,2.51,4.06,5.98,4.07,9.82h0.02V13.96L89.62,13.96z M79.04,21.69v-7.73v-0.02h0.02 c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v64.59v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h12.19V35.65 v-0.01h0.02c0.01-3.85,1.58-7.34,4.1-9.86c2.51-2.5,5.98-4.06,9.82-4.07v-0.02h0.02H79.04L79.04,21.69z M105.18,108.92V35.65v-0.02 h0.02c0-0.91-0.39-1.75-1.01-2.37c-0.61-0.61-1.46-1-2.37-1v0.02h-0.01h-61.7h-0.02v-0.02c-0.91,0-1.75,0.39-2.37,1.01 c-0.61,0.61-1,1.46-1,2.37h0.02v0.01v73.27v0.02h-0.02c0,0.91,0.39,1.75,1.01,2.37c0.61,0.61,1.46,1,2.37,1v-0.02h0.01h61.7h0.02 v0.02c0.91,0,1.75-0.39,2.37-1.01c0.61-0.61,1-1.46,1-2.37h-0.02V108.92L105.18,108.92z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-check",
                    viewBox: "0 0 12 9",
                    children: (0, t.jsx)("path", {
                        d: "M10.9801483,0.146444922 C11.1754114,-0.0488162919 11.4919939,-0.048814781 11.6872551,0.146448297 C11.8825163,0.341711375 11.8825148,0.658293864 11.6872517,0.853555078 L4.3538817,8.18685508 C4.15862011,8.3821148 3.84204056,8.382115 3.64677873,8.18685551 L0.313438731,4.85355551 C0.118175413,4.65829454 0.118173514,4.34171205 0.313434488,4.14644873 C0.508695462,3.95118541 0.825277952,3.95118351 1.02054127,4.14644449 L3.99999,7.126 L10.9801483,0.146444922 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-checkmark-circle",
                    viewBox: "0 0 256 256",
                    children: (0, t.jsx)("path", {
                        d: "M128,10C62.8,10,10,62.8,10,128c0,65.2,52.8,118,118,118c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M200.1,94.1l-80.9,79.2c-0.4,0.7-0.9,1.4-1.6,2l-3.8,3.8c-2.1,2.1-4.6,3-5.5,2.1l-38.5-40.3c-0.9-0.9,0-3.4,2.1-5.5l3.8-3.8c2.1-2.1,4.6-3,5.5-2.1l28.9,30.2l78.7-77c2.1-2.1,5.5-2.1,7.6,0l3.8,3.8C202.2,88.6,202.2,92,200.1,94.1z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-arrow-right-long",
                    viewBox: "0 0 20 10",
                    children: (0, t.jsx)("path", {
                        d: "M19.7709,4.2907422 C19.7706,4.2905122 19.7704,4.2902322 19.7702,4.2900022 L15.688,0.227502195 C15.3821,-0.0768378048 14.8875,-0.0757078048 14.5831,0.230152195 C14.2787,0.535972195 14.2799,1.0306222 14.5857,1.3350022 L17.3265,4.0625022 L0.78125,4.0625022 C0.349766,4.0625022 0,4.4122522 0,4.8437522 C0,5.2752522 0.349766,5.6249522 0.78125,5.6249522 L17.3264,5.6249522 L14.5857,8.3524522 C14.2799,8.6568522 14.2788,9.1515522 14.5831,9.4573522 C14.8875,9.7632522 15.3822,9.7642522 15.688,9.4599522 L19.7702,5.3974522 C19.7704,5.3972522 19.7706,5.3969522 19.7709,5.3967522 C20.0769,5.0913522 20.0759,4.5951522 19.7709,4.2907422 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-arrow-left-long",
                    viewBox: "0 0 20 10",
                    children: (0, t.jsx)("path", {
                        d: "M0.153482779,4.37823078 L0.229825153,4.2900022 L4.31202515,0.227502195 C4.61792515,-0.0768378048 5.11252515,-0.0757078048 5.41692515,0.230152195 C5.72132515,0.535972195 5.72012515,1.0306222 5.41432515,1.3350022 L2.67352515,4.0625022 L19.2187752,4.0625022 C19.6502592,4.0625022 20.0000252,4.4122522 20.0000252,4.8437522 C20.0000252,5.2752522 19.6502592,5.6249522 19.2187752,5.6249522 L2.67362515,5.6249522 L5.41432515,8.3524522 C5.72012515,8.6568522 5.72122515,9.1515522 5.41692515,9.4573522 C5.11252515,9.7632522 4.61782515,9.7642522 4.31202515,9.4599522 L0.229125153,5.3967522 C-0.0490566647,5.11911583 -0.0735194747,4.68379352 0.153482779,4.37823078 Z"
                    })
                }), (0, t.jsxs)("symbol", {
                    id: "icon-facebook-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("path", {
                        d: "M14,0 C6.28043,0 0,6.28043 0,14 C0,21.719 6.28043,28 14,28 C21.719,28 28,21.719 28,14 C28,6.28043 21.7201,0 14,0 Z",
                        fill: "#1D1D1D"
                    }), (0, t.jsx)("path", {
                        d: "M17.4817,14.4929 L15.204,14.4929 L15.204,22.6111 L11.8289,22.6111 C11.8289,22.6111 11.8289,18.1753 11.8289,14.4929 L10.2245,14.4929 L10.2245,11.6236 L11.8289,11.6236 L11.8289,9.76774 C11.8289,8.43857 12.4605,6.36164 15.235,6.36164 L17.736,6.37122 L17.736,9.15645 C17.736,9.15645 16.2162,9.15645 15.9207,9.15645 C15.6252,9.15645 15.2051,9.3042 15.2051,9.93805 L15.2051,11.6242 L17.7766,11.6242 L17.4817,14.4929 Z",
                        fill: "#FFFFFF"
                    })]
                }), (0, t.jsxs)("symbol", {
                    id: "icon-telegram-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("path", {
                        d: "M14,28 C21.7338,28 28,21.7338 28,14 C28,6.26617 21.7338,0 14,0 C6.26617,0 0,6.26617 0,14 C0,21.7338 6.26617,28 14,28 Z"
                    }), (0, t.jsx)("path", {
                        d: "M6.40617,13.6967 L19.9045,8.49217 C20.531,8.26583 21.0782,8.645 20.8752,9.59233 L20.8763,9.59117 L18.578,20.419 C18.4077,21.1867 17.9515,21.3733 17.3133,21.0117 L13.8133,18.4322 L12.1252,20.0585 C11.9385,20.2452 11.781,20.4027 11.4193,20.4027 L11.6678,16.8408 L18.1545,10.9807 C18.4368,10.7322 18.0915,10.5922 17.7193,10.8395 L9.70317,15.8865 L6.2475,14.8085 C5.49733,14.5705 5.481,14.0583 6.40617,13.6967 Z",
                        fill: "#fff"
                    })]
                }), (0, t.jsx)("symbol", {
                    id: "icon-telegram",
                    viewBox: "0 0 22 19",
                    children: (0, t.jsx)("path", {
                        d: "M8.63240987,12.0829924 L8.26849987,17.2015924 C8.78915987,17.2015924 9.01465987,16.9779924 9.28507987,16.7093924 L11.7261999,14.3764924 L16.7842999,18.0806924 C17.7119999,18.5976924 18.3655999,18.3254924 18.6157999,17.2272924 L21.9359999,1.66962235 L21.9368999,1.66870235 C22.2311999,0.297371354 21.4409999,-0.238878146 20.5371999,0.0975383542 L1.02132987,7.56929235 C-0.310587131,8.08629235 -0.290420131,8.82879235 0.794912869,9.16520235 L5.78432987,10.7170924 L17.3736999,3.46537235 C17.9191999,3.10420235 18.4150999,3.30404235 18.0071999,3.66520235 L8.63240987,12.0829924 Z"
                    })
                }), (0, t.jsxs)("symbol", {
                    id: "icon-linkedin-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("path", {
                        d: "M14,0 C6.2692,0 0,6.2692 0,14 C0,21.7308 6.2692,28 14,28 C21.7308,28 28,21.7308 28,14 C28,6.2692 21.7308,0 14,0 Z"
                    }), (0, t.jsx)("polygon", {
                        fill: "#FFFFFF",
                        points: "9.93176 21.1641 6.52213 21.1641 6.52213 10.9061 9.93176 10.9061"
                    }), (0, t.jsx)("path", {
                        d: "M8.22705,9.50537 L8.20483,9.50537 C7.06067,9.50537 6.32068,8.71774 6.32068,7.73337 C6.32068,6.72678 7.08331,5.96094 8.24969,5.96094 C9.41608,5.96094 10.1339,6.72678 10.1561,7.73337 C10.1561,8.71774 9.41608,9.50537 8.22705,9.50537 Z",
                        fill: "#FFFFFF"
                    }), (0, t.jsx)("path", {
                        d: "M22.2262,21.1641 L18.817,21.1641 L18.817,15.6763 C18.817,14.2971 18.3233,13.3566 17.0896,13.3566 C16.1478,13.3566 15.5868,13.991 15.3403,14.6035 C15.2501,14.8227 15.2281,15.129 15.2281,15.4355 L15.2281,21.1641 L11.8187,21.1641 C11.8187,21.1641 11.8633,11.8685 11.8187,10.9061 L15.2281,10.9061 L15.2281,12.3585 C15.6812,11.6595 16.4919,10.6653 18.3009,10.6653 C20.5441,10.6653 22.2262,12.1314 22.2262,15.2822 L22.2262,21.1641 Z",
                        fill: "#FFFFFF"
                    })]
                }), (0, t.jsx)("symbol", {
                    id: "icon-mail-fill-circle",
                    viewBox: "0 0 28 28",
                    children: (0, t.jsx)("path", {
                        d: "M14,0 C21.7201,0 28,6.28043 28,14 C28,21.719 21.719,28 14,28 C6.28043,28 0,21.719 0,14 C0,6.28043 6.28043,0 14,0 Z M13.9981552,5 C9.02863134,5 5,9.02943887 5,14 C5,18.9705714 9.02863134,23 13.9981552,23 C16.0992084,23 18.033872,22.2788686 19.5654164,21.07112 C19.8998408,20.8072914 19.9572236,20.3222171 19.6934479,19.9876229 C19.429775,19.6531314 18.9447979,19.5957372 18.6102707,19.8595657 C17.3411651,20.8603657 15.7404117,21.4571429 13.9981552,21.4571429 C9.88054972,21.4571429 6.54254794,18.1185029 6.54254794,14 C6.54254794,9.88153829 9.88054972,6.54285714 13.9981552,6.54285714 C18.1158327,6.54285714 21.4538036,9.88153829 21.4538036,14 C21.4538036,14.0346629 21.4561689,14.0687086 21.4605908,14.1021372 C21.4571972,14.1344343 21.4559632,14.1672457 21.456683,14.2004686 C21.4630589,14.4623429 21.4295342,14.8685257 21.3435629,15.2568114 C21.2498788,15.67976 21.1278118,15.9228114 21.0564433,15.9977943 C20.7459798,16.3236457 20.3187968,16.5126972 19.8689898,16.5236 C19.41908,16.5344 18.9832588,16.3660229 18.6574727,16.0554971 C18.4444982,15.8524571 18.3834133,15.55448 18.3667538,14.8620457 L18.2479776,9.92687771 C18.2377968,9.50094629 17.8842448,9.16397601 17.4583987,9.17423086 C17.0325527,9.18448571 16.6956602,9.53806743 16.7059439,9.96399885 L16.7230147,10.6764286 C15.9814605,10.0674834 15.032485,9.70195999 13.9981552,9.70195999 C11.6249555,9.70195999 9.70107939,11.6262217 9.70107939,13.9998971 C9.70107939,16.3736343 11.6249555,18.2978857 13.9981552,18.2978857 C15.3087039,18.2978857 16.4822744,17.7110857 17.2704136,16.7857829 C17.358853,16.92032 17.465186,17.0502286 17.5933203,17.1724229 C18.2152756,17.7651886 19.0472231,18.0866171 19.906011,18.0659429 C20.7649017,18.0452686 21.5803954,17.68424 22.1731451,17.06216 C22.5533318,16.6631771 22.7457389,16.0594057 22.8496038,15.59048 C22.9610786,15.0867886 23.0082806,14.5560457 22.9988196,14.1633371 C22.9980998,14.1350514 22.9959402,14.1071771 22.9923409,14.0797143 C22.9950147,14.0534857 22.9963515,14.0269486 22.9963515,14 C22.9963515,9.02943887 18.9677305,5 13.9981552,5 Z M13.999972,11 C15.6568978,11 17,12.3431582 17,13.999972 C17,15.6568978 15.6568978,17 13.999972,17 C12.3431582,17 11,15.6568978 11,13.999972 C11,12.3431582 12.3431582,11 13.999972,11 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-linkedin-fill-rect",
                    viewBox: "0 0 21 20",
                    children: (0, t.jsx)("path", {
                        d: "M18.5195,0 L1.47656,0 C0.66016,0 0,0.644531 0,1.44141 L0,18.5547 C0,19.3516 0.66016,20 1.47656,20 L18.5195,20 C19.3359,20 20,19.3516 20,18.5586 L20,1.44141 C20,0.644531 19.3359,0 18.5195,0 Z M5.93359,17.043 L2.96484,17.043 L2.96484,7.49609 L5.93359,7.49609 L5.93359,17.043 Z M4.44922,6.19531 C3.49609,6.19531 2.72656,5.42578 2.72656,4.47656 C2.72656,3.52734 3.49609,2.75781 4.44922,2.75781 C5.39844,2.75781 6.16797,3.52734 6.16797,4.47656 C6.16797,5.42188 5.39844,6.19531 4.44922,6.19531 Z M17.043,17.043 L14.0781,17.043 L14.0781,12.4023 C14.0781,11.2969 14.0586,9.87109 12.5352,9.87109 C10.9922,9.87109 10.7578,11.0781 10.7578,12.3242 L10.7578,17.043 L7.79688,17.043 L7.79688,7.49609 L10.6406,7.49609 L10.6406,8.80078 L10.6797,8.80078 C11.0742,8.05078 12.043,7.25781 13.4844,7.25781 C16.4883,7.25781 17.043,9.23438 17.043,11.8047 L17.043,17.043 Z"
                    })
                }), (0, t.jsxs)("symbol", {
                    id: "icon-instagram-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("circle", {
                        fill: "#1D1D1D",
                        cx: "14",
                        cy: "14",
                        r: "14"
                    }), (0, t.jsx)("path", {
                        d: "M17.9997,6 L9.9999,6 C7.80015,6 6,7.80015 6,9.9999 L6,18.0001 C6,20.1993 7.80015,22 9.9999,22 L17.9997,22 C20.1995,22 21.9996,20.1993 21.9996,18.0001 L21.9996,9.9999 C21.9996,7.80015 20.1995,6 17.9997,6 Z M20.6662,18.0001 C20.6662,19.4701 19.4705,20.6666 17.9997,20.6666 L9.9999,20.6666 C8.52974,20.6666 7.33337,19.4701 7.33337,18.0001 L7.33337,9.9999 C7.33337,8.52955 8.52974,7.33337 9.9999,7.33337 L17.9997,7.33337 C19.4705,7.33337 20.6662,8.52955 20.6662,9.9999 L20.6662,18.0001 Z",
                        fill: "#FFFFFF"
                    }), (0, t.jsx)("path", {
                        d: "M18.332,10.666 C18.8843,10.666 19.332,10.2183 19.332,9.66599 C19.332,9.11372 18.8843,8.66602 18.332,8.66602 C17.7797,8.66602 17.332,9.11372 17.332,9.66599 C17.332,10.2183 17.7797,10.666 18.332,10.666 Z",
                        fill: "#FFFFFF"
                    }), (0, t.jsx)("path", {
                        d: "M13.9999,10 C11.7903,10 10,11.7905 10,13.9999 C10,16.2084 11.7903,18.0002 13.9999,18.0002 C16.2088,18.0002 17.9998,16.2084 17.9998,13.9999 C17.9998,11.7905 16.2088,10 13.9999,10 Z M13.9999,16.6668 C12.5273,16.6668 11.3334,15.4729 11.3334,13.9999 C11.3334,12.5269 12.5273,11.3334 13.9999,11.3334 C15.4725,11.3334 16.6664,12.5269 16.6664,13.9999 C16.6664,15.4729 15.4725,16.6668 13.9999,16.6668 Z",
                        fill: "#FFFFFF"
                    })]
                }), (0, t.jsxs)("symbol", {
                    id: "icon-reddit-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("circle", {
                        cx: "14",
                        cy: "14",
                        r: "14"
                    }), (0, t.jsx)("path", {
                        d: "M21.1991,14.1078 C21.1631,13.2438 20.4431,12.5598 19.5611,12.5778 C19.1651,12.5958 18.8051,12.7578 18.5351,13.0098 C17.3111,12.1638 15.8531,11.7138 14.3591,11.6778 L15.0611,8.31183 L17.3831,8.77983 C17.4551,9.37383 17.9771,9.80583 18.5711,9.73383 C19.1651,9.66183 19.5971,9.13983 19.5251,8.54583 C19.4531,7.95183 18.9311,7.51983 18.3371,7.59183 C17.9951,7.62783 17.6891,7.82583 17.5271,8.11383 L14.8811,7.59183 C14.7011,7.55583 14.5211,7.66383 14.4851,7.84383 L13.6931,11.6058 C12.1811,11.6238 10.7231,12.0918 9.46314,12.9378 C8.83314,12.3438 7.82514,12.3618 7.23114,13.0098 C6.63714,13.6398 6.65514,14.6478 7.30314,15.2418 C7.42914,15.3498 7.57314,15.4578 7.73514,15.5298 C7.71714,15.6918 7.71714,15.8538 7.73514,15.9978 C7.73514,18.4278 10.5611,20.4078 14.0531,20.4078 C17.5451,20.4078 20.3711,18.4458 20.3711,15.9978 C20.3891,15.8358 20.3891,15.6738 20.3711,15.5298 C20.8751,15.2778 21.2171,14.7198 21.1991,14.1078 L21.1991,14.1078 Z M10.3451,15.2058 C10.3451,14.6118 10.8311,14.1258 11.4251,14.1258 C12.0191,14.1258 12.5051,14.6118 12.5051,15.2058 C12.5051,15.7998 12.0191,16.2858 11.4251,16.2858 C10.8311,16.2858 10.3451,15.7998 10.3451,15.2058 Z M16.6451,18.1938 C15.8711,18.7698 14.9351,19.0758 13.9811,19.0218 C13.0271,19.0578 12.0731,18.7698 11.3171,18.1938 C11.2091,18.0678 11.2271,17.8878 11.3531,17.7798 C11.4611,17.6898 11.6051,17.6898 11.7311,17.7798 C12.3791,18.2478 13.1711,18.4998 13.9811,18.4638 C14.7911,18.4998 15.5831,18.2838 16.2491,17.7978 C16.3751,17.6898 16.5551,17.6898 16.6811,17.7978 C16.7891,17.9238 16.7891,18.1038 16.6811,18.2298 L16.6811,18.1938 L16.6451,18.1938 Z M16.4651,16.3398 C15.8711,16.3398 15.3851,15.8538 15.3851,15.2598 C15.3851,14.6658 15.8711,14.1798 16.4651,14.1798 C17.0591,14.1798 17.5451,14.6658 17.5451,15.2598 C17.5631,15.8538 17.1131,16.3578 16.5011,16.3758 C16.4831,16.3758 16.4651,16.3758 16.4471,16.3758 L16.4651,16.3398 Z",
                        fill: "#FFFFFF"
                    })]
                }), (0, t.jsxs)("symbol", {
                    id: "icon-tiktok-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("circle", {
                        cx: "14",
                        cy: "14",
                        r: "14"
                    }), (0, t.jsx)("path", {
                        d: "M21.0732,10.7617 C20.2171,10.7617 19.4273,10.4781 18.793,9.99971 C18.0655,9.45127 17.5429,8.64678 17.3583,7.71953 C17.3126,7.49043 17.288,7.254 17.2857,7.01172 L14.8403,7.01172 L14.8403,13.6938 L14.8373,17.3538 C14.8373,18.3323 14.2001,19.162 13.3168,19.4538 C13.0605,19.5385 12.7836,19.5786 12.4953,19.5628 C12.1274,19.5426 11.7825,19.4315 11.4828,19.2522 C10.845,18.8708 10.4126,18.1788 10.4009,17.3872 C10.3824,16.15 11.3826,15.1413 12.619,15.1413 C12.863,15.1413 13.0974,15.1812 13.3168,15.2535 L13.3168,13.4271 L13.3168,12.7706 C13.0854,12.7363 12.8498,12.7185 12.6116,12.7185 C11.2584,12.7185 9.99279,13.281 9.0881,14.2943 C8.40432,15.0602 7.99416,16.0372 7.93088,17.0617 C7.84797,18.4076 8.34045,19.687 9.29553,20.631 C9.43586,20.7695 9.58322,20.8981 9.73732,21.0168 C10.5562,21.647 11.5572,21.9886 12.6116,21.9886 C12.8498,21.9886 13.0854,21.971 13.3168,21.9367 C14.3018,21.7908 15.2106,21.3399 15.9278,20.631 C16.809,19.76 17.2959,18.6036 17.3012,17.3729 L17.2886,11.9072 C17.709,12.2315 18.1687,12.4999 18.662,12.7082 C19.4293,13.0319 20.2429,13.196 21.0802364,13.1957 L21.0802364,11.42 L21.0802364,10.7611 C21.0808,10.7617 21.0738,10.7617 21.0732,10.7617 L21.0732,10.7617 Z",
                        fill: "#FFFFFF"
                    })]
                }), (0, t.jsxs)("symbol", {
                    id: "icon-twitter-fill-circle",
                    viewBox: "0 0 102 102",
                    children: [(0, t.jsx)("circle", {
                        cx: "50",
                        cy: "50",
                        r: "50"
                    }), (0, t.jsx)("path", {
                        d: "M37.6197295,21.0314548 L53.2877743,41.9806996 L72.6788366,21.0314548 L78.0919627,21.0314548 L55.7060736,45.2154866 L80.9507082,78.9677979 L62.5309131,78.9677979 L45.5186762,56.2204104 L24.4624362,78.9677979 L19.04931,78.9677979 L43.0993381,52.9866623 L19.1999343,21.0314548 L37.6197295,21.0314548 Z M35.6221395,25.0183245 L27.1601695,25.0183245 L64.5274643,74.9809282 L72.9894343,74.9809282 L35.6221395,25.0183245 Z",
                        fill: "#FFFFFF"
                    })]
                }), (0, t.jsxs)("symbol", {
                    id: "icon-youtube-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("circle", {
                        cx: "14",
                        cy: "14",
                        r: "14"
                    }), (0, t.jsxs)("g", {
                        transform: "translate(5.000000, 7.707030)",
                        children: [(0, t.jsx)("path", {
                            d: "M17.6291,1.97204 C17.4216,1.20094 16.8137,0.59312 16.0427,0.38548 C14.6341,0 8.9998,0 8.9998,0 C8.9998,0 3.36565,0 1.95707,0.37079 C1.20094,0.57829 0.57815,1.20108 0.37065,1.97204 C0,3.38047 0,6.30147 0,6.30147 C0,6.30147 0,9.23717 0.37065,10.63087 C0.57829,11.40187 1.18611,12.00977 1.95721,12.21747 C3.38048,12.60287 9,12.60287 9,12.60287 C9,12.60287 14.6341,12.60287 16.0427,12.23217 C16.8138,12.02467 17.4216,11.41667 17.6293,10.64567 C17.9999766,9.23717 17.9999766,6.31627 17.9999766,6.31627 C17.9999766,6.31627 18.0148,3.38047 17.6291,1.97204 Z",
                            fill: "#FFFFFF"
                        }), (0, t.jsx)("polygon", {
                            points: "7.207 8.99957 11.8923 6.30107 7.207 3.60257"
                        })]
                    })]
                }), (0, t.jsxs)("symbol", {
                    id: "icon-medium-fill-circle",
                    viewBox: "0 0 28 28",
                    children: [(0, t.jsx)("circle", {
                        cx: "14",
                        cy: "14",
                        r: "14"
                    }), (0, t.jsx)("path", {
                        d: "M11.0766 9C13.8804 9 16.1531 11.2886 16.1531 14.1115C16.1531 16.9344 13.8802 19.2228 11.0766 19.2228C8.27305 19.2228 6 16.9344 6 14.1115C6 11.2886 8.27287 9 11.0766 9ZM19.1836 9.29942C20.5855 9.29942 21.722 11.4536 21.722 14.1115H21.7221C21.7221 16.7686 20.5857 18.9235 19.1838 18.9235C17.7819 18.9235 16.6455 16.7686 16.6455 14.1115C16.6455 11.4543 17.7818 9.29942 19.1836 9.29942ZM23.1073 9.80063C23.6002 9.80063 24 11.7306 24 14.1115C24 16.4916 23.6004 18.4223 23.1073 18.4223C22.6142 18.4223 22.2147 16.4921 22.2147 14.1115C22.2147 11.7308 22.6143 9.80063 23.1073 9.80063Z",
                        fill: "white"
                    })]
                }), (0, t.jsx)("symbol", {
                    id: "icon-twitter",
                    viewBox: "0 0 300 301",
                    children: (0, t.jsx)("path", {
                        d: "M89.34,0 L166.78,110.38 L263.81,0 L290.27,0 L178.57,127.15 L300,300.25 L210.66,300.25 L128.86,183.66 L26.46,300.25 L0,300.25 L117.13,166.93 L0,0 L89.34,0 Z M76.66,19.54 L36.01,19.54 L223.13,281.67 L263.79,281.67 L76.66,19.54 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-close",
                    viewBox: "0 0 27 24",
                    children: (0, t.jsx)("path", {
                        d: "M15.3055 12L25.7924 2.41015C26.3961 1.85816 26.3961 0.965972 25.7924 0.413988C25.1888 -0.137996 24.2132 -0.137996 23.6095 0.413988L13.1226 10.0038L2.63561 0.413988C2.03199 -0.137996 1.05634 -0.137996 0.452716 0.413988C-0.150905 0.965972 -0.150905 1.85816 0.452716 2.41015L10.9397 12L0.452716 21.5898C-0.150905 22.1418 -0.150905 23.034 0.452716 23.586C0.753757 23.8613 1.14896 23.9996 1.54416 23.9996C1.93937 23.9996 2.33457 23.8612 2.63561 23.586L13.1226 13.9961L23.6095 23.586C23.9105 23.8613 24.3057 23.9996 24.7009 23.9996C25.0961 23.9996 25.4914 23.8612 25.7924 23.586C26.396 23.034 26.396 22.1418 25.7924 21.5898L15.3055 12Z"
                    })
                }), (0, t.jsxs)("symbol", {
                    id: "icon-login",
                    viewBox: "0 0 22 23",
                    children: [(0, t.jsx)("path", {
                        d: "M13.702 1.646C12.4484 1.64598 11.4379 1.64596 10.6432 1.75281C9.81815 1.86374 9.12339 2.10106 8.57164 2.65282C8.09045 3.134 7.84731 3.72533 7.71968 4.42015C7.59567 5.09533 7.57194 5.92161 7.56642 6.91301C7.56431 7.29269 7.87039 7.6022 8.25009 7.60432C8.62978 7.60644 8.93929 7.30034 8.9414 6.92066C8.94698 5.91829 8.97301 5.2078 9.07206 4.66857C9.16749 4.14899 9.32077 3.84825 9.54389 3.62509C9.79762 3.37139 10.1538 3.20598 10.8264 3.11555C11.5188 3.02245 12.4365 3.021 13.7523 3.021H14.669C15.9848 3.021 16.9024 3.02245 17.5949 3.11555C18.2675 3.20598 18.6237 3.37139 18.8774 3.62509C19.1311 3.87879 19.2965 4.23498 19.387 4.90761C19.48 5.60001 19.4815 6.5177 19.4815 7.8335V15.1668C19.4815 16.4826 19.48 17.4003 19.387 18.0927C19.2965 18.7654 19.1311 19.1215 18.8774 19.3752C18.6237 19.629 18.2675 19.7943 17.5949 19.8848C16.9024 19.9779 15.9848 19.9793 14.669 19.9793H13.7523C12.4365 19.9793 11.5188 19.9779 10.8264 19.8848C10.1538 19.7943 9.79762 19.629 9.54389 19.3752C9.32077 19.152 9.16749 18.8514 9.07206 18.3318C8.97301 17.7925 8.94698 17.082 8.9414 16.0796C8.93929 15.7 8.62978 15.3939 8.25009 15.396C7.87039 15.3981 7.56431 15.7077 7.56642 16.0873C7.57194 17.0787 7.59567 17.905 7.71968 18.5801C7.84731 19.275 8.09045 19.8663 8.57164 20.3476C9.12339 20.8993 9.81815 21.1366 10.6432 21.2475C11.4379 21.3543 12.4484 21.3543 13.702 21.3543H14.7193C15.9729 21.3543 16.9834 21.3543 17.7781 21.2475C18.6032 21.1366 19.2979 20.8993 19.8497 20.3476C20.4014 19.7957 20.6388 19.1011 20.7497 18.276C20.8566 17.4812 20.8565 16.4708 20.8565 15.2172V7.7832C20.8565 6.52957 20.8566 5.51911 20.7497 4.72439C20.6388 3.89929 20.4014 3.20458 19.8497 2.65282C19.2979 2.10106 18.6032 1.86374 17.7781 1.75281C16.9834 1.64596 15.9729 1.64598 14.7193 1.646H13.702Z"
                    }), (0, t.jsx)("path", {
                        d: "M1.83594 10.8115C1.45624 10.8115 1.14844 11.1193 1.14844 11.499C1.14844 11.8787 1.45624 12.1865 1.83594 12.1865H12.8107L11.0135 13.7271C10.7252 13.9741 10.6919 14.4081 10.9389 14.6964C11.186 14.9847 11.6201 15.0181 11.9084 14.7711L15.1167 12.0211C15.2691 11.8904 15.3568 11.6998 15.3568 11.499C15.3568 11.2984 15.2691 11.1077 15.1167 10.9771L11.9084 8.22704C11.6201 7.97995 11.186 8.01333 10.9389 8.30161C10.6919 8.58991 10.7252 9.02392 11.0135 9.27103L12.8107 10.8115H1.83594Z"
                    })]
                }), (0, t.jsx)("symbol", {
                    id: "icon-helpcrunch",
                    viewBox: "0 0 36 30",
                    children: (0, t.jsx)("path", {
                        fillRule: "evenodd",
                        d: "M28.202 13.052c.255-.793.39-1.622.39-2.478C28.592 4.652 22.135 0 14.296 0 6.456 0 0 4.652 0 10.574c0 3.148 1.846 6.031 4.935 8.005-.005.402-.005 4.041-.005 4.041 0 1.372 1.305 1.998 2.37 1.123 0 0 2.557-2.101 3.538-2.905a19.489 19.489 0 0 0 5.568.195c.771 3.35 4.653 5.798 9.228 5.798.234 0 .467-.007.698-.02.495.405 2.846 2.342 2.846 2.342 1.066.875 2.371.249 2.371-1.123 0 0 .01-2.29.01-2.77C33.696 23.956 35 21.986 35 19.808c0-3.273-2.902-5.932-6.798-6.757zm-2.005-.253c.276-.712.423-1.459.423-2.225 0-4.672-5.462-8.607-12.324-8.607-6.863 0-12.324 3.935-12.324 8.607 0 2.549 1.628 4.957 4.442 6.602l.487.285v4.08l3.042-2.517.365-.3.464.096a17.556 17.556 0 0 0 5.546.244c.494-3.592 4.525-6.277 9.316-6.277.189 0 .376.004.563.012zm-.563 12.064c-4.14 0-7.395-2.344-7.395-5.054 0-2.71 3.255-5.055 7.395-5.055s7.394 2.345 7.394 5.055c0 1.555-1.073 3.041-2.924 4.013l-.527.276v.594l.012 2.25-2.31-1.898-.311-.256-.402.035c-.307.027-.618.04-.932.04zm-3.45-4.207a.985.985 0 1 0-.987-.984c0 .543.442.984.986.984zm3.45 0a.985.985 0 1 0-.986-.984c0 .543.441.984.986.984zm-16.76-7.87a1.97 1.97 0 0 0 1.971-1.966 1.97 1.97 0 0 0-1.972-1.968 1.97 1.97 0 0 0-1.972 1.968 1.97 1.97 0 0 0 1.972 1.967zm5.915 0a1.97 1.97 0 0 0 1.972-1.966 1.97 1.97 0 0 0-1.972-1.968 1.97 1.97 0 0 0-1.972 1.968 1.97 1.97 0 0 0 1.972 1.967zm14.296 7.87a.985.985 0 1 0-.986-.984c0 .543.441.984.986.984zm-8.38-7.87a1.97 1.97 0 0 0 1.971-1.966 1.97 1.97 0 0 0-1.972-1.968 1.97 1.97 0 0 0-1.972 1.968 1.97 1.97 0 0 0 1.972 1.967z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-arrow-right",
                    viewBox: "0 0 22 20",
                    children: (0, t.jsx)("path", {
                        d: "M10.4696699,-0.530330086 C10.7625631,-0.823223305 11.2374369,-0.823223305 11.5303301,-0.530330086 L20.5303301,8.46966991 C20.5529506,8.49229046 20.5741329,8.51634926 20.5937281,8.54169736 L20.598,8.548 L20.619,8.58 L20.647603,8.62146064 L20.652,8.631 L20.6610428,8.64528991 L20.674,8.675 L20.6910613,8.70806615 L20.699,8.73 L20.7046137,8.74253391 L20.71,8.761 L20.7232093,8.80062029 L20.729,8.828 L20.7336609,8.84387965 L20.736,8.863 L20.7431534,8.89822944 L20.745,8.925 L20.7481845,8.94768643 L20.748,8.971 L20.75,9 L20.748,9.029 L20.7481845,9.05231357 L20.745,9.073 L20.7431534,9.10177056 L20.736,9.136 L20.7336609,9.15612035 L20.729,9.171 L20.7232093,9.19937971 L20.71,9.238 L20.7046137,9.25746609 L20.699,9.269 L20.6910613,9.29193385 L20.674,9.324 L20.6610428,9.35471009 L20.652,9.368 L20.647603,9.37853936 L20.619,9.419 L20.6029482,9.44621165 L20.5303301,9.53033009 L11.5303301,18.5303301 C11.2374369,18.8232233 10.7625631,18.8232233 10.4696699,18.5303301 C10.1767767,18.2374369 10.1767767,17.7625631 10.4696699,17.4696699 L18.188,9.75 L0,9.75 C-0.379695766,9.75 -0.693490961,9.46784612 -0.743153384,9.10177056 L-0.75,9 C-0.75,8.58578644 -0.414213562,8.25 0,8.25 L18.189,8.25 L10.4696699,0.530330086 C10.2034034,0.264063523 10.1791973,-0.152600159 10.3970518,-0.446211653 L10.4696699,-0.530330086 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-whatsapp",
                    viewBox: "0 0 25 24",
                    children: (0, t.jsx)("path", {
                        d: "M0,24 L1.687003,17.837 C0.646003,16.033 0.099,13.988 0.1,11.891 C0.103,5.335 5.438003,0 11.992993,0 C15.173993,0.001 18.159993,1.24 20.405993,3.488 C22.650993,5.736 23.886993,8.724 23.8859936,11.902 C23.882993,18.459 18.547993,23.794 11.992993,23.794 C10.002993,23.793 8.042003,23.294 6.305003,22.346 L0,24 Z M6.597003,20.193 C8.273003,21.188 9.872993,21.784 11.988993,21.785 C17.436993,21.785 21.874993,17.351 21.8779937,11.9 C21.879993,6.438 17.462993,2.01 11.996993,2.008 C6.545003,2.008 2.110003,6.442 2.10800185,11.892 C2.107003,14.117 2.759003,15.783 3.854003,17.526 L2.855003,21.174 L6.597003,20.193 Z M17.983993,14.729 C17.909993,14.605 17.711993,14.531 17.413993,14.382 C17.116993,14.233 15.655993,13.514 15.382993,13.415 C15.110993,13.316 14.912993,13.266 14.713993,13.564 C14.515993,13.861 13.945993,14.531 13.772993,14.729 C13.599993,14.927 13.425993,14.952 13.128993,14.803 C12.831993,14.654 11.873993,14.341 10.738993,13.328 C9.855993,12.54 9.259003,11.567 9.086003,11.269 C8.913003,10.972 9.068003,10.811 9.216003,10.663 C9.350003,10.53 9.512993,10.316 9.661993,10.142 C9.812993,9.97 9.861993,9.846 9.961993,9.647 C10.060993,9.449 10.011993,9.275 9.936993,9.126 C9.861993,8.978 9.268003,7.515 9.021003,6.92 C8.779003,6.341 8.534003,6.419 8.352003,6.41 L7.782003,6.4 C7.584003,6.4 7.262003,6.474 6.990003,6.772 C6.718003,7.07 5.950003,7.788 5.950003,9.251 C5.950003,10.714 7.015003,12.127 7.163003,12.325 C7.312003,12.523 9.258003,15.525 12.238993,16.812 C12.947993,17.118 13.501993,17.301 13.932993,17.438 C14.644993,17.664 15.292993,17.632 15.804993,17.556 C16.375993,17.471 17.562993,16.837 17.810993,16.143 C18.058993,15.448 18.058993,14.853 17.983993,14.729 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-download",
                    viewBox: "0 0 19 22",
                    children: (0, t.jsx)("path", {
                        d: "M0.00251110477,18.9548172 L18.0024998,19.0000172 L17.9974776,21.0000108 L-0.00251110477,20.9548172 L0.00251110477,18.9548172 Z M8.60568413,17.3567676 L-0.0343188665,8.66896762 L1.38379027,7.25866038 L8.314,14.228 L8.3147387,0 L10.3147387,0 L10.314,14.228 L17.245632,7.25866256 L18.6637454,8.66896544 L10.0237954,17.3567676 L9.314,16.651 L8.60568413,17.3567676 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-pdf",
                    viewBox: "0 0 394 483",
                    children: (0, t.jsx)("path", {
                        d: "M270.652,0 L77.005,0 C48.715,0 25.69,23.041 25.69,51.315 L25.69,241.069 L20.678,241.069 C9.26,241.069 0,250.32 0,261.748 L0,387.152 C0,398.579 9.259,407.829 20.678,407.829 L25.69,407.829 L25.69,430.824 C25.69,459.129 48.715,482.139 77.005,482.139 L341.228,482.139 C369.5,482.139 392.528,459.128 392.528,430.824 L392.528,121.449 L270.652,0 Z M54.247,284.379 C60.307,283.355 68.825,282.583 80.826,282.583 C92.954,282.583 101.598,284.898 107.406,289.548 C112.954,293.93 116.698,301.163 116.698,309.675 C116.698,318.185 113.861,325.42 108.699,330.321 C101.985,336.641 92.056,339.478 80.441,339.478 C77.856,339.478 75.539,339.35 73.727,339.099 L73.727,370.195 L54.247,370.195 L54.247,284.379 Z M341.228,450.713 L77.005,450.713 C66.051,450.713 57.131,441.793 57.131,430.824 L57.131,407.829 L303.441,407.829 C314.861,407.829 324.12,398.579 324.12,387.152 L324.12,261.748 C324.12,250.32 314.861,241.069 303.441,241.069 L57.131,241.069 L57.131,51.315 C57.131,40.377 66.052,31.457 77.005,31.457 L258.895,31.267 L258.895,98.5 C258.895,118.138 274.829,134.087 294.482,134.087 L360.344,133.898 L361.085,430.823 C361.085,441.793 352.181,450.713 341.228,450.713 Z M129.259,369.801 L129.259,284.379 C136.484,283.229 145.901,282.583 155.839,282.583 C172.355,282.583 183.065,285.546 191.457,291.865 C200.488,298.579 206.161,309.281 206.161,324.646 C206.161,341.289 200.101,352.779 191.708,359.87 C182.551,367.482 168.612,371.092 151.583,371.092 C141.385,371.092 134.16,370.446 129.259,369.801 Z M272.276,283.229 L272.276,299.351 L238.856,299.351 L238.856,319.226 L270.086,319.226 L270.086,335.222 L238.856,335.222 L238.856,370.195 L219.116,370.195 L219.116,283.229 L272.276,283.229 Z M157.903,297.681 C174.805,297.681 185.389,307.231 185.263,325.294 C185.263,346.066 173.648,355.869 155.839,355.743 C153.388,355.743 150.677,355.743 148.998,355.349 L148.998,298.453 C150.676,298.06 153.513,297.681 157.903,297.681 Z M81.859,297.412 C91.662,297.412 97.218,302.187 97.218,310.194 C97.218,319.1 90.764,324.379 80.315,324.379 C77.47,324.379 75.406,324.253 73.727,323.875 L73.727,298.185 C75.145,297.807 77.856,297.412 81.859,297.412 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-aml",
                    viewBox: "0 0 24 33",
                    children: (0, t.jsx)("path", {
                        d: "M8.64003,1.6551 C9.98857,-0.502521 13.1248,-0.561855 14.5549,1.54318 L23.3957,14.5566 C24.1879,15.7226 24.2023,17.2468 23.4323,18.4274 L14.9705,31.4019 C13.5808,33.5327 10.4451,33.5327 9.05544,31.4019 L0.567695,18.3877 C0.312096,17.9958 0.14269,17.5655 0.0597111,17.1227 C0.0546548,17.0957 0.049928,17.0687 0.0455172,17.0417 C-0.0883809,16.2206 0.0730176,15.362 0.531299,14.6287 Z M15.5226,9.23001 C15.2182,14.6668 10.9283,19.0457 5.51078,19.5242 L12.013,29.4939 L20.4748,16.5195 L15.5226,9.23001 Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-timer",
                    viewBox: "0 0 16 16",
                    children: (0, t.jsx)("path", {
                        d: "M7.99967 13.333C10.933 13.333 13.333 10.933 13.333 7.99967C13.333 5.06634 10.933 2.66634 7.99967 2.66634C5.06634 2.66634 2.66634 5.06634 2.66634 7.99967C2.66634 10.933 5.06634 13.333 7.99967 13.333ZM7.99967 1.33301C11.6663 1.33301 14.6663 4.33301 14.6663 7.99967C14.6663 11.6663 11.6663 14.6663 7.99967 14.6663C4.33301 14.6663 1.33301 11.6663 1.33301 7.99967C1.33301 4.33301 4.33301 1.33301 7.99967 1.33301ZM11.333 9.26634L10.8663 10.133L7.33301 8.19967V4.66634H8.33301V7.59967L11.333 9.26634Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-arrow-down-short",
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("path", {
                        d: "M3.16107 6.49408C3.48651 6.16864 4.01414 6.16864 4.33958 6.49408L9.58366 11.7382L14.8277 6.49408C15.1532 6.16864 15.6808 6.16864 16.0062 6.49408C16.3317 6.81951 16.3317 7.34715 16.0062 7.67259L10.1729 13.5059C9.84748 13.8314 9.31984 13.8314 8.9944 13.5059L3.16107 7.67259C2.83563 7.34715 2.83563 6.81951 3.16107 6.49408Z"
                    })
                }), (0, t.jsx)("symbol", {
                    id: "icon-play",
                    viewBox: "0 0 30 33",
                    children: (0, t.jsx)("path", {
                        d: "M30 16.5L0 33V0L30 16.5Z"
                    })
                }), (0, t.jsxs)("symbol", {
                    id: "icon-pro",
                    viewBox: "0 0 54 25",
                    children: [(0, t.jsx)("defs", {
                        children: (0, t.jsxs)("linearGradient", {
                            x1: "0%",
                            y1: "50%",
                            x2: "100%",
                            y2: "50%",
                            id: "linearGradient-cjm-9njj_7-1",
                            children: [(0, t.jsx)("stop", {
                                stopColor: "#1A5CF6",
                                offset: "0%"
                            }), (0, t.jsx)("stop", {
                                stopColor: "#D135CB",
                                offset: "100%"
                            })]
                        })
                    }), (0, t.jsx)("g", {
                        id: "Page-1",
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, t.jsxs)("g", {
                            id: "pro",
                            fillRule: "nonzero",
                            children: [(0, t.jsx)("rect", {
                                id: "Rectangle",
                                fill: "url(#linearGradient-cjm-9njj_7-1)",
                                x: "0",
                                y: "0",
                                width: "54",
                                height: "25",
                                rx: "12.5"
                            }), (0, t.jsx)("path", {
                                d: "M12.8849,18 L12.8849,7.81818 L16.902,7.81818 C17.6742,7.81818 18.3321,7.96567 18.8757,8.26065 C19.4193,8.55232 19.8336,8.95833 20.1186,9.47869 C20.407,9.99574 20.5511,10.5923 20.5511,11.2685 C20.5511,11.9446 20.4053,12.5412 20.1136,13.0582 C19.822,13.5753 19.3994,13.978 18.8459,14.2663 C18.2957,14.5547 17.6295,14.6989 16.8473,14.6989 L14.2869,14.6989 L14.2869,12.9737 L16.4993,12.9737 C16.9136,12.9737 17.255,12.9025 17.5234,12.7599 C17.7952,12.6141 17.9974,12.4136 18.13,12.1584 C18.2659,11.8999 18.3338,11.6032 18.3338,11.2685 C18.3338,10.9304 18.2659,10.6354 18.13,10.3835 C17.9974,10.1283 17.7952,9.93111 17.5234,9.7919 C17.2517,9.64938 16.907,9.57812 16.4893,9.57812 L15.0376,9.57812 L15.0376,18 L12.8849,18 Z M21.9494,18 L21.9494,7.81818 L25.9664,7.81818 C26.7354,7.81818 27.3916,7.95573 27.9352,8.23082 C28.4821,8.5026 28.898,8.88873 29.1831,9.3892 C29.4714,9.88636 29.6156,10.4714 29.6156,11.1442 C29.6156,11.8203 29.4698,12.402 29.1781,12.8892 C28.8864,13.3731 28.4638,13.7443 27.9103,14.0028 C27.3601,14.2614 26.694,14.3906 25.9118,14.3906 L23.2221,14.3906 L23.2221,12.6605 L25.5637,12.6605 C25.9747,12.6605 26.3161,12.6042 26.5879,12.4915 C26.8597,12.3788 27.0618,12.2098 27.1944,11.9844 C27.3303,11.759 27.3983,11.4789 27.3983,11.1442 C27.3983,10.8061 27.3303,10.5211 27.1944,10.2891 C27.0618,10.0571 26.858,9.88139 26.5829,9.76207 C26.3111,9.63944 25.9681,9.57812 25.5538,9.57812 L24.1021,9.57812 L24.1021,18 L21.9494,18 Z M27.448,13.3665 L29.9785,18 L27.6021,18 L25.1262,13.3665 L27.448,13.3665 Z M40.4934,12.9091 C40.4934,14.0194 40.283,14.964 39.862,15.7429 C39.4444,16.5218 38.8743,17.1167 38.1518,17.5277 C37.4326,17.9354 36.6239,18.1392 35.7257,18.1392 C34.8208,18.1392 34.0088,17.9337 33.2896,17.5227 C32.5704,17.1117 32.002,16.5168 31.5843,15.7379 C31.1667,14.959 30.9579,14.0161 30.9579,12.9091 C30.9579,11.7988 31.1667,10.8542 31.5843,10.0753 C32.002,9.2964 32.5704,8.70312 33.2896,8.29545 C34.0088,7.88447 34.8208,7.67898 35.7257,7.67898 C36.6239,7.67898 37.4326,7.88447 38.1518,8.29545 C38.8743,8.70312 39.4444,9.2964 39.862,10.0753 C40.283,10.8542 40.4934,11.7988 40.4934,12.9091 Z M38.3109,12.9091 C38.3109,12.1899 38.2032,11.5833 37.9877,11.0895 C37.7756,10.5956 37.4757,10.2211 37.0879,9.96591 C36.7001,9.7107 36.246,9.5831 35.7257,9.5831 C35.2053,9.5831 34.7512,9.7107 34.3635,9.96591 C33.9757,10.2211 33.6741,10.5956 33.4586,11.0895 C33.2465,11.5833 33.1404,12.1899 33.1404,12.9091 C33.1404,13.6283 33.2465,14.2348 33.4586,14.7287 C33.6741,15.2225 33.9757,15.5971 34.3635,15.8523 C34.7512,16.1075 35.2053,16.2351 35.7257,16.2351 C36.246,16.2351 36.7001,16.1075 37.0879,15.8523 C37.4757,15.5971 37.7756,15.2225 37.9877,14.7287 C38.2032,14.2348 38.3109,13.6283 38.3109,12.9091 Z",
                                fill: "#FFFFFF"
                            })]
                        })
                    })]
                })]
            });
            var h = i(47057),
                m = e => {
                    let {
                        title: s,
                        titleTag: i = s,
                        description: l = "",
                        canonical: c = "",
                        siteName: m = " ",
                        ogImage: x = "",
                        appendSvgIcons: C = !0
                    } = e, {
                        asPath: u,
                        locale: j,
                        defaultLocale: L
                    } = (0, o.useRouter)(), p = (0, n.useMemo)(() => {
                        if (c) return c;
                        let e = u.split("#")[0].split("?")[0],
                            s = j === L ? "" : "/".concat(j);
                        return "".concat(h.Rg).concat(s).concat("/" === e ? "" : e)
                    }, [u, c, L, j]);
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)(r(), {
                            children: [(0, t.jsx)("title", {
                                children: s
                            }), (0, t.jsx)("meta", {
                                name: "title",
                                content: i
                            }), l && (0, t.jsx)("meta", {
                                name: "description",
                                content: l
                            }), (0, t.jsx)("meta", {
                                property: "og:title",
                                content: i
                            }), (0, t.jsx)("meta", {
                                property: "og:description",
                                content: l
                            }), x && (0, t.jsx)("meta", {
                                property: "og:image",
                                content: x
                            }), (0, t.jsx)("meta", {
                                property: "og:image:width",
                                content: "2400"
                            }), (0, t.jsx)("meta", {
                                property: "og:image:height",
                                content: "1260"
                            }), (0, t.jsx)("meta", {
                                property: "og:image:type",
                                content: "image/png"
                            }), (0, t.jsx)("meta", {
                                name: "og:site_name",
                                content: m
                            }), (0, t.jsx)("meta", {
                                name: "twitter:title",
                                content: i
                            }), (0, t.jsx)("meta", {
                                name: "twitter:description",
                                content: l
                            }), x && (0, t.jsx)("meta", {
                                name: "twitter:image",
                                content: x
                            }), (0, t.jsx)("meta", {
                                name: "twitter:card",
                                content: "summary_large_image"
                            }), (0, t.jsx)("meta", {
                                name: "apple-mobile-web-app-capable",
                                content: "yes"
                            }), (0, t.jsx)("meta", {
                                content: "yes",
                                name: "apple-touch-fullscreen"
                            }), (0, t.jsx)("meta", {
                                name: "apple-mobile-web-app-status-bar-style",
                                content: "#000000"
                            }), (0, t.jsx)("meta", {
                                name: "format-detection",
                                content: "telephone=no"
                            }), (0, t.jsx)("meta", {
                                name: "viewport",
                                content: "initial-scale=1.0, width=device-width"
                            }), (0, t.jsx)("link", {
                                rel: "canonical",
                                href: p
                            }, "canonical"), (0, t.jsx)("link", {
                                rel: "icon",
                                type: "image/png",
                                href: "".concat(h.Rg, "/favicon.png")
                            })]
                        }), (0, t.jsx)(a(), {
                            id: "linkamlbot-workers-dev",
                            strategy: "afterInteractive",
                            "data-domain": "amlbot.com",
                            "data-api": "https://small-star-b48f.linkamlbot.workers.dev/blue/event",
                            src: "https://small-star-b48f.linkamlbot.workers.dev/blue/script.js"
                        }), (0, t.jsxs)(a(), {
                            id: "google-tag-manager",
                            strategy: "afterInteractive",
                            children: ["var HelpCrunch = () => {};", "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n        })(window,document,'script','dataLayer','GTM-NB2RTM9');"]
                        }), (0, t.jsx)(a(), {
                            id: "google-datalayer-push",
                            strategy: "afterInteractive",
                            children: "window.dataLayer = window.dataLayer || [];\n          function gtag() {\n            dataLayer.push(arguments);\n        }"
                        }), C && (0, t.jsx)(d, {})]
                    })
                }
        },
        80407: function(e, s, i) {
            "use strict";
            i.d(s, {
                h: function() {
                    return C
                }
            });
            var t = i(85893),
                n = i(93967),
                l = i.n(n);
            i(67294);
            var a = i(77548),
                c = i(44423),
                r = i(93311),
                o = i(51710),
                d = i(29999),
                h = i(24972),
                m = i(24184),
                x = i.n(m);
            let C = e => {
                let {
                    type: s = "white",
                    children: i,
                    renderLogo: n,
                    renderLinks: m,
                    renderActions: C,
                    renderBurgerMenu: u,
                    renderLangSwitcher: j,
                    className: L,
                    wrapperClassName: p
                } = e, f = "white-blur" === s, v = (0, t.jsxs)(t.Fragment, {
                    children: [n || (0, t.jsx)(h.O, {
                        color: f ? "white" : "black"
                    }), m || (0, t.jsx)(d.f, {}), C || (0, t.jsx)(o.k, {
                        type: f ? "white" : "black"
                    }), j || (0, t.jsx)(c.k, {}), u || (0, t.jsx)(r.H, {})]
                }), b = l()(x().header, x()["header--".concat(s)], L), g = l()(x().wrapper, p);
                return (0, t.jsx)("header", {
                    className: b,
                    children: (0, t.jsx)(a.i, {
                        className: g,
                        children: i || v
                    })
                })
            }
        },
        51710: function(e, s, i) {
            "use strict";
            i.d(s, {
                k: function() {
                    return m
                }
            });
            var t = i(85893);
            i(67294);
            var n = i(67421),
                l = i(93967),
                a = i.n(l),
                c = i(40569),
                r = i(5147),
                o = i(65219),
                d = i(68169),
                h = i.n(d);
            let m = e => {
                let {
                    type: s = "black"
                } = e, {
                    isTablet: i,
                    isMobile: l
                } = (0, o.Z)(), {
                    t: d
                } = (0, n.$G)(), m = (0, r.Z)("signin"), x = (0, r.Z)("signup");
                if (i || l) return null;
                let C = a()(h().actions, "".concat(h()["actions--".concat(s)]));
                return (0, t.jsxs)("nav", {
                    className: C,
                    children: []
                })
            }
        },
        29999: function(e, s, i) {
            "use strict";
            i.d(s, {
                f: function() {
                    return z
                }
            });
            var t = i(85893),
                n = i(93967),
                l = i.n(n),
                a = i(41664),
                c = i.n(a),
                r = i(67294),
                o = i(67421),
                d = i(73935),
                h = i(47057),
                m = i(4993),
                x = i(65219),
                C = i(9546),
                u = i(13114),
                j = i(4889),
                L = i(47311),
                p = i(71152),
                f = i(64423),
                v = i(45951);
            let b = {
                initial: {
                    opacity: 0,
                    height: 0
                },
                animate: {
                    opacity: 1,
                    height: "auto"
                },
                exit: {
                    opacity: 0
                },
                transition: {
                    ease: "easeInOut",
                    duration: .35,
                    type: "spring",
                    stiffness: 300,
                    damping: 24
                }
            };
            var g = i(54612),
                k = i.n(g);
            let y = e => {
                    let {
                        isActive: s,
                        className: i,
                        onClose: n
                    } = e, {
                        t: a
                    } = (0, o.$G)();
                    (0, f.d)();
                    let d = (0, r.useRef)(null),
                        m = (0, r.useCallback)(() => {
                            n && n()
                        }, [n]);
                    (0, p.t)([d], m, void 0, [".exclude-menu-clickoutside"]);
                    let x = l()(k().menu, i);
                    return (0, t.jsx)(u.M, {
                        children: s && (0, t.jsx)(j.E.div, {
                            ...b,
                            ref: d,
                            className: x,
                            children: (0, t.jsxs)("div", {
                                className: k().inner,
                                children: [(0, t.jsxs)("div", {
                                    className: k().group,
                                    children: [(0, t.jsx)("h3", {
                                        className: k().heading,
                                        children: a("menuProducts.forBusiness")
                                    }), (0, t.jsxs)("div", {
                                        className: k().list,
                                        children: [(0, t.jsxs)(c(), {
                                            href: h.zc,
                                            className: "".concat(k().item, " ").concat(k()["item--kyt"]),
                                            children: [(0, t.jsx)("h4", {
                                                className: k().title,
                                                children: a("menuProducts.kyt.label")
                                            }), (0, t.jsx)("p", {
                                                className: k().description,
                                                children: a("menuProducts.kyt.description")
                                            })]
                                        }), (0, t.jsxs)(c(), {
                                            href: h.b3,
                                            className: "".concat(k().item, " ").concat(k()["item--kyc"]),
                                            children: [(0, t.jsx)("h4", {
                                                className: k().title,
                                                children: a("menuProducts.kyc.label")
                                            }), (0, t.jsx)("p", {
                                                className: k().description,
                                                children: a("menuProducts.kyc.description")
                                            })]
                                        }), (0, t.jsxs)(c(), {
                                            href: h.uz,
                                            className: "".concat(k().item, " ").concat(k()["item--pro"]),
                                            children: [(0, t.jsxs)("h4", {
                                                className: k().title,
                                                children: [(0, t.jsx)("span", {
                                                    children: "AMLBot"
                                                }), (0, t.jsx)(v.l, {
                                                    name: "pro",
                                                    className: k().pro
                                                })]
                                            }), (0, t.jsx)("p", {
                                                className: k().description,
                                                children: []
                                            })]
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: k().group,
                                    children: [(0, t.jsx)("h3", {
                                        className: k().heading,
                                        children: "\xa0"
                                    }), (0, t.jsxs)("div", {
                                        className: k().list,
                                        children: [(0, t.jsxs)(c(), {
                                            href: h.sE,
                                            className: "".concat(k().item, " ").concat(k()["item--training"]),
                                            children: [(0, t.jsx)("h4", {
                                                className: k().title,
                                                children: (0, L.ZP)(a("menuProducts.amlTraining.label"))
                                            }), (0, t.jsx)("p", {
                                                className: k().description,
                                                children: a("menuProducts.amlTraining.description")
                                            })]
                                        }), (0, t.jsxs)(c(), {
                                            href: h.Rp,
                                            className: "".concat(k().item, " ").concat(k()["item--consulting"]),
                                            children: [(0, t.jsx)("h4", {
                                                className: k().title,
                                                children: a("menuProducts.consulting.label")
                                            }), (0, t.jsx)("p", {
                                                className: k().description,
                                                children: a("menuProducts.consulting.description")
                                            })]
                                        })]
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: k().group,
                                    children: [(0, t.jsx)("h3", {
                                        className: k().heading,
                                        children: a("menuProducts.forPersonalUse")
                                    }), (0, t.jsxs)("div", {
                                        className: k().list,
                                        children: [(0, t.jsxs)(c(), {
                                            href: "https://t.me/monitorusd_supp",
                                            className: "".concat(k().item, " ").concat(k()["item--chatbot"]),
                                            children: [(0, t.jsx)("h4", {
                                                className: k().title,
                                                children: a("menuProducts.chatBot.label")
                                            }), (0, t.jsx)("p", {
                                                className: k().description,
                                                children: a("menuProducts.chatBot.description")
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                w = {
                    products: !0,
                    pricing: !0,
                    analysis: !0,
                    faq: !0,
                    blog: !0,
                    aboutUs: !0
                };
            var N = i(9430),
                M = i.n(N);
            let Z = {
                    hidden: {
                        opacity: 0,
                        x: "-50%",
                        y: -20,
                        transition: {
                            duration: .2
                        }
                    },
                    visible: {
                        opacity: 1,
                        x: "-50%",
                        y: 0,
                        transition: {
                            duration: .3,
                            ease: [.25, .1, .25, 1]
                        }
                    }
                },
                F = {
                    hidden: {
                        opacity: 0,
                        y: -5
                    },
                    visible: e => ({
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: .1 * e,
                            duration: .2,
                            ease: [.25, .1, .25, 1]
                        }
                    })
                },
                _ = [{
                    url: h.g6,
                    translationKey: "footer.info.links.careers"
                }, {
                    url: h.mq,
                    translationKey: "footer.info.links.certifications"
                }, {
                    url: h.rR,
                    translationKey: "footer.info.links.pressKit"
                }];
            var B = i(39818),
                P = i.n(B);
            let E = () => {
                    let {
                        t: e
                    } = (0, o.$G)();
                    return (0, t.jsx)(j.E.nav, {
                        variants: Z,
                        initial: "hidden",
                        animate: "visible",
                        exit: "hidden",
                        className: P().submenu,
                        children: (0, t.jsx)("div", {
                            className: P().inner,
                            children: (0, t.jsx)("div", {
                                className: P().list,
                                children: _.length && _.map((s, i) => (0, t.jsx)(j.E.div, {
                                    variants: F,
                                    custom: i,
                                    initial: "hidden",
                                    animate: "visible",
                                    children: (0, t.jsx)(c(), {
                                        href: s.url,
                                        className: P().link,
                                        children: e(s.translationKey)
                                    })
                                }, s.translationKey))
                            })
                        })
                    })
                },
                z = e => {
                    let {
                        apparance: s = w,
                        productsMenuClassName: i
                    } = e, {
                        t: n
                    } = (0, o.$G)(), {
                        isTablet: a,
                        isMobile: u
                    } = (0, x.Z)(), j = (0, m.Z)(), [L, p] = (0, r.useState)(!1), [f, v] = (0, r.useState)(!1), b = (0, r.useCallback)(() => {
                        p(!L)
                    }, [L]), g = l()(M().link, M()["has-submenu"], "exclude-menu-clickoutside", {
                        [M()["is-active"]]: L
                    }), k = l()(M().link, M().hover, M()["has-submenu"], "exclude-menu-clickoutside", {
                        [M()["is-active"]]: f
                    }), N = (0, r.useCallback)(() => {
                        v(!0)
                    }, []), Z = (0, r.useCallback)(() => {
                        v(!1)
                    }, []);
                    return a || u ? null : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsxs)("nav", {
                            className: M().links,
                            children: [s.products && (0, t.jsx)("button", {
                                type: "button",
                                className: g,
                                onClick: b,
                                children: n("header.links.products")
                            }), s.pricing && (0, t.jsx)(c(), {
                                href: h.Ni,
                                className: M().link,
                                children: n("header.links.price")
                            }), s.analysis && (0, t.jsx)(c(), {
                                href: h.vI,
                                className: M().link,
                                children: n("header.links.analysis")
                            })]
                        }), L && d.createPortal((0, t.jsx)(y, {
                            isActive: L,
                            className: i,
                            onClose: () => p(!1)
                        }), document.getElementById(C.X))]
                    })
                }
        },
        24972: function(e, s, i) {
            "use strict";
            i.d(s, {
                O: function() {
                    return o
                }
            });
            var t = i(85893);
            i(67294);
            var n = i(41664),
                l = i.n(n),
                a = i(51297),
                c = i(2033),
                r = i.n(c);
            let o = e => {
                let {
                    color: s = "black"
                } = e;
                return (0, t.jsx)(l(), {
                    href: "/",
                    className: r().logo,
                    children: (0, t.jsx)(a.T, {
                        type: s
                    })
                })
            }
        },
        33787: function(e) {
            e.exports = {
                btn: "LJ7GIf",
                "btn--arrow": "AI0JX2",
                "btn--black": "wZ_Bne",
                "btn--black-link": "sWEOgD",
                "btn--white": "Rbk247",
                "is-hover": "Mdb0RZ",
                "btn--primary": "mZeSlA",
                "btn--bordered-blue": "fZBn9v",
                "btn--bordered-black": "W98Vgo",
                "btn--bordered-white": "fRM4wN",
                "btn--purple": "_JES45",
                "btn--purple-reverse": "MRR96n",
                "btn--purple-gradient": "_3DhpI9",
                "btn--dark-to-gradient": "_1s66sH",
                "btn--blue-gradient": "HSCsOs",
                "btn--small": "ecdMWi",
                "btn--medium": "_BTY_Y",
                "btn--medium-plus": "Q1GNf0",
                "btn--large": "CqPxuo",
                "btn--icon-right": "gI8oRk",
                icon: "bVm7g2",
                "btn--icon-left": "r5Goaa",
                "btn--nowrap": "dzM2XM",
                "btn--fullwidth": "yW0_2K",
                inner: "B1PIwZ",
                loading: "pS__gR",
                rotate360: "n8_Slr"
            }
        },
        14199: function(e) {
            e.exports = {
                burger: "wQi65v",
                burger__in: "pIEvV8",
                "is-active": "HlINio"
            }
        },
        74271: function(e) {
            e.exports = {
                lang: "wlQLLs",
                "is-active": "GlV_O8",
                current: "Dg63SU",
                list: "e2WTV3",
                item: "_0sNHm"
            }
        },
        64221: function(e) {
            e.exports = {
                container: "ORhlBm"
            }
        },
        61748: function(e) {
            e.exports = {
                trustpilot: "wIL4xY",
                "trustpilot--white": "y_16nq",
                of: "to5cY5",
                "trustpilot--small": "lZlhxp",
                logo: "EFniD4",
                stars: "E6G38x",
                body: "SY9kc_",
                "trustpilot--small-vertical": "ErvNBm",
                based: "_9FXx7j"
            }
        },
        12333: function(e) {
            e.exports = {
                wrapper: "b_L6f_",
                "mobile-small-gutter": "mYyEos",
                "mobile-no-gutter": "k8KRTm"
            }
        },
        73630: function(e) {
            e.exports = {
                menu: "KwOTv_",
                inner: "_wx08K"
            }
        },
        39824: function(e) {
            e.exports = {
                actions: "xcwb_M",
                signIn: "_8gtz1p"
            }
        },
        54831: function(e) {
            e.exports = {
                links: "_2kePRX",
                item: "hfskxe",
                "is-active": "nj4F9T",
                "has-submenu": "ljw1FL",
                link: "qLWg8N",
                birthday: "UFafSM"
            }
        },
        25857: function(e) {
            e.exports = {
                submenu: "_378K_U",
                group: "Xhpuge",
                title: "KSWhqb",
                list: "S75LaS",
                item: "vioC8F",
                link: "d80oyK",
                pro: "Wz5oyO"
            }
        },
        97522: function(e) {
            e.exports = {
                footer: "_99rnTN",
                "footer--black": "SPTTmA",
                "footer--black-transparent": "_ODNT0",
                "footer--white": "xpfe1_",
                nav: "wSGqsr",
                title: "f1E3Tw",
                list: "kKi77y",
                link: "gDDzrm",
                bottom: "_8yyV1L",
                copy: "to2XVo"
            }
        },
        1381: function(e) {
            e.exports = {
                certifications: "j8Gu_5"
            }
        },
        73346: function(e) {
            e.exports = {
                company: "WeaO9p"
            }
        },
        51013: function(e) {
            e.exports = {
                group: "qbxdE2",
                pro: "_R9D9B"
            }
        },
        43024: function(e) {
            e.exports = {
                regulatory: "_2sMxxz",
                link: "lmFR8X"
            }
        },
        40806: function(e) {
            e.exports = {
                socials: "RS6MyV",
                list: "UaljBr",
                link: "_1PrtJV"
            }
        },
        86575: function(e) {
            e.exports = {
                support: "e4Ejat"
            }
        },
        24634: function(e) {
            e.exports = {
                top: "gsp1gS",
                info: "_0xfACM",
                logo: "mwrkyb",
                logoImg: "vChn_I",
                requisites: "EOxXQw",
                right: "TGa6sT",
                trustpilot: "F9reqP"
            }
        },
        24184: function(e) {
            e.exports = {
                header: "rIYD0d",
                "header--white": "_1POjMs",
                "header--white-blur": "rgwZ2W",
                wrapper: "eOD671"
            }
        },
        39818: function(e) {
            e.exports = {
                submenu: "IR0ZEI",
                inner: "_8gsig9",
                list: "PiHVg_",
                link: "_2tnPTC"
            }
        },
        68169: function(e) {
            e.exports = {
                actions: "Mwyj41",
                "actions--white": "nsYFEB",
                signIn: "hhYn3k",
                signUp: "mwcOHg"
            }
        },
        9430: function(e) {
            e.exports = {
                links: "ZQfMnc",
                link: "_835826",
                hover: "V7b13Y",
                "has-submenu": "aLiYTy",
                "is-active": "_4KTltB",
                submenuWrapper: "fxv46h",
                birthday: "bcz2kV"
            }
        },
        2033: function(e) {
            e.exports = {
                logo: "Zcp_6V"
            }
        },
        54612: function(e) {
            e.exports = {
                menu: "QC9R8Y",
                inner: "ifJX3Z",
                group: "OhdqAo",
                heading: "fzPkR1",
                list: "XOw__6",
                item: "JQtNkO",
                title: "wKsfd2",
                "item--chatbot": "_1ZltXw",
                "item--kyt": "zl8tc5",
                "item--training": "sPjNyr",
                "item--consulting": "zb_PHf",
                "item--app": "_Rdt7I",
                "item--kyc": "Dh2jv_",
                "item--pro": "BLapBx",
                "item--investigation": "Ex_Ekq",
                pro: "xK0oRL",
                description: "pBYzKJ"
            }
        }
    }
]);