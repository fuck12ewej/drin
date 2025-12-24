(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [190], {
        47164: function(A, t, e) {
            "use strict";
            e.d(t, {
                U: function() {
                    return d
                }
            });
            var i = e(85893),
                a = e(67294),
                n = e(93967),
                l = e.n(n),
                s = e(47311),
                r = e(71792),
                c = e(81057),
                o = e.n(c);
            let d = A => {
                    let {
                        items: t = [],
                        className: e
                    } = A, [n, s] = (0, a.useState)(), r = (0, a.useCallback)(A => {
                        n === A ? s(void 0) : s(A)
                    }, [n]), c = l()(o().accordion, e);
                    return (0, i.jsx)("div", {
                        className: c,
                        children: !!t && t.map((A, t) => (0, i.jsx)(h, {
                            title: A.title,
                            content: A.content,
                            isActive: t === n,
                            onClick: () => r(t)
                        }, A.title))
                    })
                },
                h = A => {
                    let {
                        title: t,
                        content: e,
                        isActive: a,
                        onClick: n
                    } = A, c = l()(o().item, {
                        ["".concat(o()["is-active"])]: a
                    });
                    return (0, i.jsxs)("div", {
                        className: c,
                        children: [(0, i.jsx)("div", {
                            role: "button",
                            className: o().heading,
                            onClick: n,
                            children: t
                        }), (0, i.jsx)(r.Z, {
                            isActive: a,
                            children: (0, i.jsx)("div", {
                                className: o().content,
                                children: (0, s.ZP)(e)
                            })
                        })]
                    })
                }
        },
        95171: function(A, t, e) {
            "use strict";
            e.d(t, {
                N: function() {
                    return c
                }
            });
            var i = e(85893);
            e(67294);
            var a = e(93967),
                n = e.n(a),
                l = e(40569),
                s = e(80378),
                r = e.n(s);
            let c = A => {
                let {
                    text: t,
                    href: e,
                    color: a = "black",
                    nowrap: s,
                    className: c,
                    isExternal: o,
                    isStatic: d,
                    onClick: h
                } = A, g = n()(r().btn, "".concat(r()["btn--".concat(a)]), c);
                return (0, i.jsx)(l.z, {
                    text: t,
                    href: e,
                    type: "arrow",
                    icon: "arrow-right-long",
                    nowrap: s,
                    className: g,
                    isExternal: o,
                    isStatic: d,
                    onClick: h
                })
            }
        },
        6215: function(A, t, e) {
            "use strict";
            e.d(t, {
                $: function() {
                    return r
                }
            });
            var i = e(85893);
            e(67294);
            var a = e(93967),
                n = e.n(a),
                l = e(42783),
                s = e.n(l);
            let r = A => {
                let {
                    size: t = 100,
                    children: e,
                    className: a,
                    aos: l,
                    aosDelay: r
                } = A, c = n()(s().col, "".concat(s()["col--".concat(t)]), a);
                return (0, i.jsx)("div", {
                    className: c,
                    "data-aos": l,
                    "data-aos-delay": r,
                    children: e
                })
            }
        },
        46227: function(A, t, e) {
            "use strict";
            e.d(t, {
                J: function() {
                    return r
                }
            });
            var i = e(85893);
            e(67294);
            var a = e(93967),
                n = e.n(a),
                l = e(10812),
                s = e.n(l);
            let r = A => {
                let {
                    children: t,
                    margin: e,
                    noContainerMargin: a,
                    className: l
                } = A, r = n()(s().row, {
                    ["".concat(s()["row--margin"])]: e,
                    ["".concat(s()["row--no-container-margin"])]: a
                }, l);
                return (0, i.jsx)("div", {
                    className: r,
                    children: t
                })
            }
        },
        35220: function(A, t, e) {
            "use strict";
            e.d(t, {
                _: function() {
                    return b
                }
            });
            var i = e(85893);
            e(67294);
            var a = e(67421),
                n = e(25675),
                l = e.n(n),
                s = {
                    src: "/_next/static/media/INATBA.ddfc8a13.png",
                    height: 64,
                    width: 64,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAIVBMVEUUPoEvVI8VPoIQOn5MaXEaR4kXQYQKMncVOnolTIsYRIm2InnEAAAACXRSTlP5+7QtAOuxMDC4Rc9mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nDWLSRKAQAyESGaT/v+DLbXkCjBHQ4/JWanKutiiZENQ5UEjdFVedcov/vcbKqABKe6cIDEAAAAASUVORK5CYII=",
                    blurWidth: 8,
                    blurHeight: 8
                },
                r = {
                    src: "/_next/static/media/CDA.fe3473e2.png",
                    height: 64,
                    width: 64,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAKlBMVEUEBAQGBgYXFxdMaXEAAAACAgIuLi4BAQEAAAAAAAAGBgZJSUlVVVVBQUGd0ibvAAAAC3RSTlP97/4AMC39tbG1srqKR+QAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAANklEQVR4nEXLSQ7AMAzDQFrO1lj/f2/RAEFvPAzJPuHpSQuAaCwNCW2iRpXNCdvBQh/aP777CyYtAQvM15VzAAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                c = {
                    src: "/_next/static/media/ATII.a1d7651b.png",
                    height: 64,
                    width: 64,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAVFBMVEUAAAAAAQEAHCAAAgQAAAAAAAAAMTgAAwQAAQFMaXEAW2gAaHkAi6EAISUAqMAAWGUAAAAAbn8Ad4kAAAAAAAQAExUAYXAAFRgAAwQAfY8AlKsAbX2vvA/0AAAAGXRSTlPpxd80tvna1i8A8ezs0/rTptbrqTbh39IzcN/CmwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEJJREFUeJwFwckBwCAIBMBFQcAzh3mo/feZGbi9wGUO05TupAbW5+ysDKG6V1GBtHxWbwIOZfX6MSbCGAERPgmg6D9duAJ7Zn1+LAAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                o = {
                    src: "/_next/static/media/LSW3.36cf4e69.png",
                    height: 64,
                    width: 64,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEUEAwM4AwMCAgIEAQFMaXEjIyMAAAACAgIBAQESExMBAQFJTEyKioptb29UOTpZV1fDAAB9AADl5x1WAAAACnRSTlMu9OvrAP7rs/n4cUk60QAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJw1y0ESgCAMBMFBCUk2gPr/z1oevHfT8QinwylJA1xpaea0Z685V9LuXVdV4gop5DA+fMDfX0MQAeDM+k58AAAAAElFTkSuQmCC",
                    blurWidth: 8,
                    blurHeight: 8
                },
                d = {
                    src: "/_next/static/media/EUBA.7f547a87.png",
                    height: 64,
                    width: 64,
                    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEXLzOnS1OQjOo27vt5MaXGws9iustowRpO9vuHj4/O4u93p5PTp6fREV59+iMY+UZtter1OXqS+xd3M0uSq5gtDAAAADXRSTlOzMPq1APjw/vAttTAwpwXFegAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwVykkSgDAIBMBJBAZUyPb/v1r2uSEBVYTgtcose4DqOXoBNvKcHAZf3JvLgUmSE2j+Z2+QuFWvkA9QxQI9tFU+qwAAAABJRU5ErkJggg==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                h = {
                    src: "/_next/static/media/FTAHK.a46bf924.webp",
                    height: 200,
                    width: 200,
                    blurDataURL: "data:image/webp;base64,UklGRqoAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDQAAAABL6AmAAFGLQ0V9q0aERG4Q0FBJKmtojQDxwwC0hwgIEUBRPQ/zo5m8BVcoAt0BTf4Z0cDVlA4IFAAAADwAQCdASoIAAgAAkA4JbACdAYp5kUaecAA/u9qGgLCv1n2jejCss3KYB5lYWDJyf67otibe1xc2QMP/vGillbV//cab8BXn/940Vt/52AAAA==",
                    blurWidth: 8,
                    blurHeight: 8
                },
                g = e(46623),
                u = e.n(g);
            let b = () => {
                let {
                    t: A
                } = (0, a.$G)();
                return (0, i.jsxs)("div", {
                    className: u().info,
                    children: [(0, i.jsx)("div", {
                        className: u().title,
                        children: A("trustedMembers.title")
                    }), (0, i.jsxs)("ul", {
                        className: u().list,
                        children: [(0, i.jsxs)("li", {
                            children: [(0, i.jsx)(l(), {
                                src: s,
                                alt: "International Association for Trusted Blockchain Applications",
                                loading: "lazy"
                            }), (0, i.jsx)("span", {
                                children: "INATBA"
                            })]
                        }), (0, i.jsxs)("li", {
                            children: [(0, i.jsx)(l(), {
                                src: r,
                                alt: "Crypto Defenders Alliance",
                                loading: "lazy"
                            }), (0, i.jsx)("span", {
                                children: "CDA"
                            })]
                        }), (0, i.jsxs)("li", {
                            children: [(0, i.jsx)(l(), {
                                src: c,
                                alt: "Anti-Human Trafficking Intelligence Initiative",
                                loading: "lazy"
                            }), (0, i.jsx)("span", {
                                children: "ATII"
                            })]
                        }), (0, i.jsxs)("li", {
                            children: [(0, i.jsx)(l(), {
                                src: o,
                                alt: "League for Security in the Web3",
                                loading: "lazy"
                            }), (0, i.jsx)("span", {
                                children: "LSW3"
                            })]
                        }), (0, i.jsxs)("li", {
                            children: [(0, i.jsx)(l(), {
                                src: d,
                                alt: "EU Blockchain Association",
                                loading: "lazy"
                            }), (0, i.jsx)("span", {
                                children: "ЕВА"
                            })]
                        }), (0, i.jsxs)("li", {
                            children: [(0, i.jsx)(l(), {
                                src: h,
                                alt: "FinTech Association of Hong Kong",
                                loading: "lazy"
                            }), (0, i.jsx)("span", {
                                children: "FTAHK"
                            })]
                        })]
                    })]
                })
            }
        },
        19163: function(A, t, e) {
            "use strict";
            e.d(t, {
                Xy: function() {
                    return n
                },
                d3: function() {
                    return i
                }
            });
            let i = () => {
                    "function" == typeof window.HelpCrunch && window.HelpCrunch("onReady", function() {
                        window.HelpCrunch("openChat")
                    })
                },
                a = () => {
                    window.HubSpotConversations && window.HubSpotConversations.widget.open()
                },
                n = () => {
                    i(), a()
                }
        },
        24048: function(A, t, e) {
            "use strict";
            var i = e(85893);
            e(67294);
            var a = e(4889),
                n = e(34598),
                l = e(80407);
            t.Z = A => {
                let {
                    headerProps: t,
                    renderHeader: e = (0, i.jsx)(l.h, {
                        ...t
                    }),
                    renderFooter: s = (0, i.jsx)(n.$, {}),
                    children: r
                } = A;
                return (0, i.jsxs)(i.Fragment, {
                    children: [e, (0, i.jsx)(a.E.div, {
                        initial: {
                            y: 50,
                            opacity: 0
                        },
                        animate: {
                            y: 0,
                            opacity: 1
                        },
                        exit: {
                            y: 50,
                            opacity: 0
                        },
                        transition: {
                            type: "easeInOut",
                            duration: .35
                        },
                        children: r
                    }), s]
                })
            }
        },
        60790: function(A, t, e) {
            "use strict";
            var i = e(85893),
                a = e(67421),
                n = e(47311),
                l = e(45951),
                s = e(19163),
                r = e(80844),
                c = e.n(r);
            t.Z = () => {
                let {
                    t: A
                } = (0, a.$G)();
                return (0, i.jsxs)("div", {})
            }
        },
        98785: function(A, t, e) {
            "use strict";
            e.d(t, {
                B: function() {
                    return d
                }
            });
            var i = e(85893),
                a = e(93967),
                n = e.n(a),
                l = e(77548),
                s = e(47164),
                r = e(60790),
                c = e(76018),
                o = e.n(c);
            let d = A => {
                let {
                    title: t,
                    description: e,
                    items: a,
                    className: c
                } = A, d = n()(o().faq, c);
                return (0, i.jsx)("section", {
                    className: d,
                    id: "faq",
                    children: (0, i.jsxs)(l.i, {
                        children: [(0, i.jsxs)("div", {
                            className: o().head,
                            children: [(0, i.jsx)("h2", {
                                className: o().title,
                                "data-aos": "fade-up",
                                children: t
                            }), e && (0, i.jsx)("div", {
                                className: o().description,
                                "data-aos": "fade-up",
                                children: e
                            })]
                        }), (0, i.jsxs)("div", {
                            className: o().container,
                            children: [(0, i.jsx)(r.Z, {
                                "data-aos": "fade-up"
                            }), (0, i.jsx)("div", {
                                className: o().list,
                                "data-aos": "fade-up",
                                "data-aos-delay": "50",
                                children: (0, i.jsx)(s.U, {
                                    items: a
                                })
                            })]
                        })]
                    })
                })
            };
            t.Z = d
        },
        57559: function(A, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return x
                }
            });
            var i = e(85893),
                a = e(25675),
                n = e.n(a),
                l = e(41664),
                s = e.n(l),
                r = e(67421),
                c = e(98918),
                o = e(2261),
                d = e(95171),
                h = e(77548),
                g = e(4993);
            let u = [{
                    linkUrl: "https://blog.amlbot.com/how-to-open-a-financial-institution-account-at-binance/",
                    thumbUrl: {
                        src: "/_next/static/media/1.de8d0749.webp",
                        height: 263,
                        width: 469,
                        blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAAAwAgCdASoIAAQAAkA4JbACdLoAyv8DcOJb5AD+/VkGLUIfUfQv2tt3q4EH0iPv1//vs4QzdkRsnhzFBqN8Plkr6iN6cAAA",
                        blurWidth: 8,
                        blurHeight: 4
                    },
                    date: "Jun 16, 2023",
                    timeToRead: "2 min read",
                    title: "How to Open a Financial Institution Account at Binance",
                    description: "How to Open a Financial Institution Account at Binance If You Are a Crypto..."
                }, {
                    linkUrl: "https://blog.amlbot.com/amlbot-attends-eu-crypto-regulation-round-table/",
                    thumbUrl: {
                        src: "/_next/static/media/2.ceb39b4c.webp",
                        height: 395,
                        width: 704,
                        blurDataURL: "data:image/webp;base64,UklGRjQAAABXRUJQVlA4ICgAAACQAQCdASoIAAQAAkA4JaQAAudP3WAA/vsAeuMH95PIqpWjl0CqAAAA",
                        blurWidth: 8,
                        blurHeight: 4
                    },
                    date: "Jun 9, 2023",
                    timeToRead: "1 min read",
                    title: "AMLBot Team Attends EU Crypto Regulation Round Table",
                    description: "With the application of the Markets in Crypto Assets (MiCA) on the horizon..."
                }, {
                    linkUrl: "https://blog.amlbot.com/how-aml-regulations-are-changing-in-2023/",
                    thumbUrl: {
                        src: "/_next/static/media/3.48969de8.webp",
                        height: 263,
                        width: 469,
                        blurDataURL: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4IEYAAADQAQCdASoIAAQAAkA4JbACdAD0gdD1AAD+5TqE371wo+lf2kHZ/eyADSRIv/y5DFQ6/tzH+zioPlEL9TUt8Ig87Ut4hAAA",
                        blurWidth: 8,
                        blurHeight: 4
                    },
                    date: "May 14, 2023",
                    timeToRead: "7 min read",
                    title: "How AML Regulations Are Changing in 2023",
                    description: "Organized crime`s motivation is the money perpetrators stand to make out..."
                }, {
                    linkUrl: "https://blog.amlbot.com/amlbot-attends-the-web3-euro-summit-2023/",
                    thumbUrl: {
                        src: "/_next/static/media/4.306866a3.webp",
                        height: 263,
                        width: 469,
                        blurDataURL: "data:image/webp;base64,UklGRjYAAABXRUJQVlA4ICoAAABwAQCdASoIAAQAAkA4JZwCdAFAAAD++dYjEAOT+0xjfzf9ONoKPpJcAAA=",
                        blurWidth: 8,
                        blurHeight: 4
                    },
                    date: "May 24, 2023",
                    timeToRead: "2 min read",
                    title: "AMLBot Team Attends The Web3 Euro Summit 2023",
                    description: "At AMLBot, we constantly strive to connect with projects and ..."
                }],
                b = [{
                    linkUrl: "https://www.coindesk.com/markets/2024/08/12/ether-ico-whale-moves-5k-eth-to-exchanges-bringing-monthly-total-to-154m/",
                    logoUrl: {
                        src: "/_next/static/media/coindesk.a213e5bf.svg",
                        height: 94,
                        width: 494,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "CoinDesk"
                }, {
                    linkUrl: "https://decrypt.co/244946/frozen-crypto-wallets-nigeria-protests-active-report",
                    logoUrl: {
                        src: "/_next/static/media/decrypt.a729223b.svg",
                        height: 198,
                        width: 593,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Decrypt"
                }, {
                    linkUrl: "https://cointelegraph.com/news/kyc-to-stake-your-eth-it-s-probably-coming-to-the-us",
                    logoUrl: {
                        src: "/_next/static/media/cointelegraph.e7e32c87.svg",
                        height: 60,
                        width: 164,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Cointelegraph"
                }, {
                    linkUrl: "https://www.benzinga.com/markets/cryptocurrency/23/03/31509547/regulation-rumble-unpacking-the-coinbase-sec-showdown-and-what-it-means-for-crypto",
                    logoUrl: {
                        src: "/_next/static/media/benzinga.9798d80a.svg",
                        height: 60,
                        width: 119,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Benzinga"
                }, {
                    linkUrl: "https://coincodex.com/article/26583/analyzing-the-trends-of-usdt-and-usdc-traders-haven-or-risky-waters/",
                    logoUrl: {
                        src: "/_next/static/media/coincodex.029611ca.svg",
                        height: 57,
                        width: 300,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Coincodex"
                }, {
                    linkUrl: "https://es.beincrypto.com/que-esperar-regulacion-criptomonedas-2023/",
                    logoUrl: {
                        src: "/_next/static/media/beincrypto.5605fabe.svg",
                        height: 60,
                        width: 155,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "BeInCrypto"
                }, {
                    linkUrl: "https://bitcoinist.com/dont-keep-your-public-key-too-public-and-other-tips-to-safeguard-your-crypto-wallet/",
                    logoUrl: {
                        src: "/_next/static/media/bitcoinist.1767d741.svg",
                        height: 60,
                        width: 120,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "Bitcoinist"
                }, {
                    linkUrl: "https://www.newsbtc.com/news/company/the-hidden-danger-of-stablecoins/",
                    logoUrl: {
                        src: "/_next/static/media/newsbtc.9b839ed1.svg",
                        height: 60,
                        width: 118,
                        blurWidth: 0,
                        blurHeight: 0
                    },
                    alt: "NewsBTC"
                }];
            var m = e(76025),
                p = e.n(m);
            let w = {
                modules: [c.W_],
                spaceBetween: 20,
                loop: !1,
                centeredSlides: !1,
                slidesPerView: 1,
                autoHeight: !0,
                navigation: {
                    prevEl: ".swiper-prev",
                    nextEl: ".swiper-next"
                },
                breakpoints: {
                    768: {
                        slidesPerView: 3
                    }
                }
            };
            var x = A => {
                let {
                    showLogos: t = !0
                } = A, {
                    t: e
                } = (0, r.$G)(), a = (0, g.Z)();
                return (0, i.jsx)("section", {
                    className: p().initiatives,
                    children: []
                    })
                
            }
        },
        72996: function(A, t, e) {
            "use strict";
            e.d(t, {
                Z: function() {
                    return u
                }
            });
            var i = e(85893),
                a = e(25675),
                n = e.n(a),
                l = e(67421),
                s = e(98918),
                r = e(2261),
                c = e(77548);
            let o = [{
                image: {
                    src: "/_next/static/media/boxexchenger.765cb958.webp",
                    height: 140,
                    width: 396,
                    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAhYJBAAAAABDhj0/NzE+EwAFAAAAAAwAAFZQOCAyAAAA0AEAnQEqCAADAAJAOCWcAANs9Bjpl4AA/vxe3xv8wmmDXId90hEvT9/kJ/U4KCs8AAA=",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/kunaio.3cdc94d8.webp",
                    height: 140,
                    width: 424,
                    blurDataURL: "data:image/webp;base64,UklGRlgAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAAAAAAAAaGhuQF4AAAAAAAAAAAAAAFZQOCAYAAAAMAEAnQEqCAADAAJAOCWkAANwAP77nMAA",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/cryptopnl.21b37668.webp",
                    height: 140,
                    width: 424,
                    blurDataURL: "data:image/webp;base64,UklGRnoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAACQAAAAoFBQBFWGRdXGRHAAAHBAAAAAAAAFZQOCA6AAAA8AEAnQEqCAADAAJAOCWMAnR/ABcfkzQAAP7+GCjwebXmWwYp3BOKuFozRXl+wMACIL/l8G44KIAAAA==",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/gateio.afe6a22c.webp",
                    height: 140,
                    width: 424,
                    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAFgAAAAAAAABuZnZrfV5ZAB0bCAMEAgIAAFZQOCAuAAAAEAIAnQEqCAADAAJAOCWcAsQvABmf6Ne8AAD+/biKWUpR0pFbLqIr8gKXO4AAAA==",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/safe3.b117d893.webp",
                    height: 140,
                    width: 424,
                    blurDataURL: "data:image/webp;base64,UklGRmQAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAC3tNAAAAAAA6/8w2WUsgAAt8TgAAAAAAAFZQOCAkAAAAsAEAnQEqCAADAAJAOCWkAAMX/2pIAAD+/k5v7EjxOVdsgAAA",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/purefi.f642d30f.webp",
                    height: 140,
                    width: 424,
                    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAQAAAAMCQAOaFpZUmQiAAADCwAAAAAAAFZQOCAyAAAA0AEAnQEqCAADAAJAOCWcAuwBER6vsAAA/v1w0fPvryGHF/xpq3bcSEzXTbN9R1qNQAA=",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/comistar.28e8892e.webp",
                    height: 315,
                    width: 954,
                    blurDataURL: "data:image/webp;base64,UklGRnIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAJQAAAAAAAAaIJDJJQTNPAygAAAAAAAAAAFZQOCAyAAAAkAEAnQEqCAADAAJAOCWMAALnRbZgAP77cWZaxyytwZWYcQIS9/IOol94IDtEGCseAAA=",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/credits.430a042a.webp",
                    height: 315,
                    width: 954,
                    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAJigAAAABAADDylNVX4dOACgqAAAAAAAAAFZQOCAiAAAAMAEAnQEqCAADAAJAOCWkAANwAP762vy/EBMx7FjDuSUAAA==",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/goodcrypto.a7a84987.webp",
                    height: 168,
                    width: 416,
                    blurDataURL: "data:image/webp;base64,UklGRmoAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAAAAAAAAAAB7d4RURzk5OwAAAAAAAAAAAFZQOCAqAAAAkAEAnQEqCAADAAJAOCWcAAKdo3vgAP7pnkLEnstQ8qXQlTnnD8EmgAAA",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/letsexchange.0d7db51b.webp",
                    height: 210,
                    width: 636,
                    blurDataURL: "data:image/webp;base64,UklGRmwAAABXRUJQVlA4WAoAAAAQAAAABwAAAgAAQUxQSBkAAAAAAwAAAAAAAABeLUVSPU5HPgIAAAAAAAAAAFZQOCAsAAAAkAEAnQEqCAADAAJAOCWcAAL3gqDgAP78AZz1gNzTjz+5SQB6me9f1bAAAAA=",
                    blurWidth: 8,
                    blurHeight: 3
                }
            }, {
                image: {
                    src: "/_next/static/media/misttrack.fcf599f7.webp",
                    height: 141,
                    width: 672,
                    blurDataURL: "data:image/webp;base64,UklGRmIAAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAASB86HyEyMSlSHz0lFy8zNABWUDggKgAAALABAJ0BKggAAgACQDgliAJ0APSH+lwA/v6IzxFgzD0t6udyUPjNPUbgAA==",
                    blurWidth: 8,
                    blurHeight: 2
                }
            }, {
                image: {
                    src: "/_next/static/media/verifiwallet.f1100471.webp",
                    height: 192,
                    width: 742,
                    blurDataURL: "data:image/webp;base64,UklGRm4AAABXRUJQVlA4WAoAAAAQAAAABwAAAQAAQUxQSBEAAAAAgowSJS8iHxuBjBk4JSopKgBWUDggNgAAALABAJ0BKggAAgACQDgljAJ0APSH+lwA/vqjgIv9O+SYzG/rHsxLiNbD0EZIV0iZhrLHFDrAAA==",
                    blurWidth: 8,
                    blurHeight: 2
                }
            }];
            var d = e(69568),
                h = e.n(d);
            let g = {
                modules: [s.pt, s.Rv],
                spaceBetween: 20,
                speed: 6e3,
                loop: !0,
                freeMode: !0,
                centeredSlides: !0,
                slidesPerView: "auto",
                autoplay: {
                    delay: 1,
                    disableOnInteraction: !1
                }
            };
            var u = () => {
                let {
                    t: A
                } = (0, l.$G)();
                return (0, i.jsxs)("section", {
                    className: h().partners,
                    children: [(0, i.jsx)(c.i, {
                        children: (0, i.jsx)("h2", {
                            className: h().title,
                            "data-aos": "fade-up",
                            children: A("partners.title")
                        })
                    }), (0, i.jsx)("div", {
                        "data-aos": "fade-up",
                        children: (0, i.jsx)("div", {
                            className: h().slider,
                            children: (0, i.jsx)(r.tq, {
                                ...g,
                                className: h().swiper,
                                children: o.length && o.map((A, t) => (0, i.jsx)(r.o5, {
                                    children: (0, i.jsx)("div", {
                                        className: h().item,
                                        children: (0, i.jsx)(n(), {
                                            src: A.image,
                                            placeholder: "blur",
                                            loading: "lazy",
                                            alt: ""
                                        })
                                    })
                                }, t))
                            })
                        })
                    })]
                })
            }
        },
        81057: function(A) {
            A.exports = {
                item: "_Ul5cK",
                "is-active": "_0P8u3K",
                heading: "paUd7O",
                content: "_9ZTzQc"
            }
        },
        80378: function(A) {
            A.exports = {
                btn: "VOIKZ3",
                "btn--white": "cKPc_a",
                "btn--black": "nDPBXW",
                "btn--blue": "CJwH_8"
            }
        },
        42783: function(A) {
            A.exports = {
                col: "q57VaS",
                "col--25": "_SsedC",
                "col--33": "_5zZKyX",
                "col--40": "QezfsL",
                "col--45": "_6jPz01",
                "col--50": "vBV8lt",
                "col--55": "SW5Ndc",
                "col--60": "_6CiGxB",
                "col--66": "qqz2rC",
                "col--75": "wtVv0t",
                "col--100": "xE10_Q"
            }
        },
        10812: function(A) {
            A.exports = {
                row: "o4syl7",
                "row--margin": "SpLCSC",
                "row--no-container-margin": "_5OyiTR"
            }
        },
        46623: function(A) {
            A.exports = {
                info: "Uz3_Ic",
                title: "HtuBmR",
                list: "qQncdT"
            }
        },
        80844: function(A) {
            A.exports = {
                info: "_PiqMG",
                title: "Fl3Ugx",
                description: "_636_tF",
                link: "MZR5Z_",
                link__icon: "fWkT8f",
                link__body: "h165hA",
                note: "_9yCvRy"
            }
        },
        76018: function(A) {
            A.exports = {
                faq: "",
                head: "xb1dXH",
                title: "dc_GNJ",
                description: "_AWI7Y",
                container: "_9SfPwg",
                list: "e5xgXj"
            }
        },
        76025: function(A) {
            A.exports = {
                initiatives: "_1vzyvH",
                inner: "s_kK27",
                head: "_7WeSnE",
                head__actions: "rDvEz0",
                title: "ND2MPT",
                items: "VUyEan",
                swiper: "_1qSjkp",
                item: "oUoyh3",
                item__title: "W6K_qX",
                thumb: "_w7_mN",
                info: "_zllTn",
                description: "ORa75c",
                logos: "_2eIteR"
            }
        },
        69568: function(A) {
            A.exports = {
                partners: "uXciHY",
                title: "Lka5fb",
                slider: "_3VPNHF",
                item: "KkBkCX"
            }
        }
    }
]);