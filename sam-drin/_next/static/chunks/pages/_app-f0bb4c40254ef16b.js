(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [888], {
        2711: function (e) {
            var t;
            t = function () {
                return function (e) {
                    function t(i) {
                        if (n[i]) return n[i].exports;
                        var r = n[i] = {
                            exports: {},
                            id: i,
                            loaded: !1
                        };
                        return e[i].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.p = "dist/", t(0)
                }([function (e, t, n) {
                    "use strict";

                    function i(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    }
                    var r = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                        }
                        return e
                    },
                        o = (i(n(1)), n(6)),
                        s = i(o),
                        a = i(n(7)),
                        l = i(n(8)),
                        c = i(n(9)),
                        u = i(n(10)),
                        d = i(n(11)),
                        p = i(n(14)),
                        m = [],
                        h = !1,
                        f = {
                            offset: 120,
                            delay: 0,
                            easing: "ease",
                            duration: 400,
                            disable: !1,
                            once: !1,
                            startEvent: "DOMContentLoaded",
                            throttleDelay: 99,
                            debounceDelay: 50,
                            disableMutationObserver: !1
                        },
                        g = function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            if (e && (h = !0), h) return m = (0, d.default)(m, f), (0, u.default)(m, f.once), m
                        },
                        b = function () {
                            m = (0, p.default)(), g()
                        },
                        v = function () {
                            m.forEach(function (e, t) {
                                e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                            })
                        };
                    e.exports = {
                        init: function (e) {
                            f = r(f, e), m = (0, p.default)();
                            var t, n = document.all && !window.atob;
                            return !0 === (t = f.disable) || "mobile" === t && c.default.mobile() || "phone" === t && c.default.phone() || "tablet" === t && c.default.tablet() || "function" == typeof t && !0 === t() || n ? v() : (f.disableMutationObserver || l.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), f.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", f.easing), document.querySelector("body").setAttribute("data-aos-duration", f.duration), document.querySelector("body").setAttribute("data-aos-delay", f.delay), "DOMContentLoaded" === f.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? g(!0) : "load" === f.startEvent ? window.addEventListener(f.startEvent, function () {
                                g(!0)
                            }) : document.addEventListener(f.startEvent, function () {
                                g(!0)
                            }), window.addEventListener("resize", (0, a.default)(g, f.debounceDelay, !0)), window.addEventListener("orientationchange", (0, a.default)(g, f.debounceDelay, !0)), window.addEventListener("scroll", (0, s.default)(function () {
                                (0, u.default)(m, f.once)
                            }, f.throttleDelay)), f.disableMutationObserver || l.default.ready("[data-aos]", b), m)
                        },
                        refresh: g,
                        refreshHard: b
                    }
                }, function (e, t) { }, , , , , function (e, t) {
                    (function (t) {
                        "use strict";

                        function n(e) {
                            var t = void 0 === e ? "undefined" : r(e);
                            return !!e && ("object" == t || "function" == t)
                        }

                        function i(e) {
                            if ("number" == typeof e) return e;
                            if ("symbol" == (void 0 === (t = e) ? "undefined" : r(t)) || t && "object" == (void 0 === t ? "undefined" : r(t)) && g.call(t) == a) return s;
                            if (n(e)) {
                                var t, i = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = n(i) ? i + "" : i
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            var o = u.test(e = e.replace(l, ""));
                            return o || d.test(e) ? p(e.slice(2), o ? 2 : 8) : c.test(e) ? s : +e
                        }
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                            o = "Expected a function",
                            s = NaN,
                            a = "[object Symbol]",
                            l = /^\s+|\s+$/g,
                            c = /^[-+]0x[0-9a-f]+$/i,
                            u = /^0b[01]+$/i,
                            d = /^0o[0-7]+$/i,
                            p = parseInt,
                            m = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                            h = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                            f = m || h || Function("return this")(),
                            g = Object.prototype.toString,
                            b = Math.max,
                            v = Math.min,
                            y = function () {
                                return f.Date.now()
                            };
                        e.exports = function (e, t, r) {
                            var s = !0,
                                a = !0;
                            if ("function" != typeof e) throw TypeError(o);
                            return n(r) && (s = "leading" in r ? !!r.leading : s, a = "trailing" in r ? !!r.trailing : a),
                                function (e, t, r) {
                                    function s(t) {
                                        var n = d,
                                            i = p;
                                        return d = p = void 0, A = t, h = e.apply(i, n)
                                    }

                                    function a(e) {
                                        var n = e - g,
                                            i = e - A;
                                        return void 0 === g || n >= t || n < 0 || w && i >= m
                                    }

                                    function l() {
                                        var e, n, i, r = y();
                                        return a(r) ? c(r) : void (f = setTimeout(l, (e = r - g, n = r - A, i = t - e, w ? v(i, m - n) : i)))
                                    }

                                    function c(e) {
                                        return f = void 0, L && d ? s(e) : (d = p = void 0, h)
                                    }

                                    function u() {
                                        var e, n = y(),
                                            i = a(n);
                                        if (d = arguments, p = this, g = n, i) {
                                            if (void 0 === f) return A = e = g, f = setTimeout(l, t), k ? s(e) : h;
                                            if (w) return f = setTimeout(l, t), s(g)
                                        }
                                        return void 0 === f && (f = setTimeout(l, t)), h
                                    }
                                    var d, p, m, h, f, g, A = 0,
                                        k = !1,
                                        w = !1,
                                        L = !0;
                                    if ("function" != typeof e) throw TypeError(o);
                                    return t = i(t) || 0, n(r) && (k = !!r.leading, m = (w = "maxWait" in r) ? b(i(r.maxWait) || 0, t) : m, L = "trailing" in r ? !!r.trailing : L), u.cancel = function () {
                                        void 0 !== f && clearTimeout(f), A = 0, d = g = p = f = void 0
                                    }, u.flush = function () {
                                        return void 0 === f ? h : c(y())
                                    }, u
                                }(e, t, {
                                    leading: s,
                                    maxWait: t,
                                    trailing: a
                                })
                        }
                    }).call(t, function () {
                        return this
                    }())
                }, function (e, t) {
                    (function (t) {
                        "use strict";

                        function n(e) {
                            var t = void 0 === e ? "undefined" : r(e);
                            return !!e && ("object" == t || "function" == t)
                        }

                        function i(e) {
                            if ("number" == typeof e) return e;
                            if ("symbol" == (void 0 === (t = e) ? "undefined" : r(t)) || t && "object" == (void 0 === t ? "undefined" : r(t)) && f.call(t) == s) return o;
                            if (n(e)) {
                                var t, i = "function" == typeof e.valueOf ? e.valueOf() : e;
                                e = n(i) ? i + "" : i
                            }
                            if ("string" != typeof e) return 0 === e ? e : +e;
                            var p = c.test(e = e.replace(a, ""));
                            return p || u.test(e) ? d(e.slice(2), p ? 2 : 8) : l.test(e) ? o : +e
                        }
                        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                            return typeof e
                        } : function (e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                        },
                            o = NaN,
                            s = "[object Symbol]",
                            a = /^\s+|\s+$/g,
                            l = /^[-+]0x[0-9a-f]+$/i,
                            c = /^0b[01]+$/i,
                            u = /^0o[0-7]+$/i,
                            d = parseInt,
                            p = "object" == (void 0 === t ? "undefined" : r(t)) && t && t.Object === Object && t,
                            m = "object" == ("undefined" == typeof self ? "undefined" : r(self)) && self && self.Object === Object && self,
                            h = p || m || Function("return this")(),
                            f = Object.prototype.toString,
                            g = Math.max,
                            b = Math.min,
                            v = function () {
                                return h.Date.now()
                            };
                        e.exports = function (e, t, r) {
                            function o(t) {
                                var n = u,
                                    i = d;
                                return u = d = void 0, y = t, m = e.apply(i, n)
                            }

                            function s(e) {
                                var n = e - f,
                                    i = e - y;
                                return void 0 === f || n >= t || n < 0 || k && i >= p
                            }

                            function a() {
                                var e, n, i, r = v();
                                return s(r) ? l(r) : void (h = setTimeout(a, (e = r - f, n = r - y, i = t - e, k ? b(i, p - n) : i)))
                            }

                            function l(e) {
                                return h = void 0, w && u ? o(e) : (u = d = void 0, m)
                            }

                            function c() {
                                var e, n = v(),
                                    i = s(n);
                                if (u = arguments, d = this, f = n, i) {
                                    if (void 0 === h) return y = e = f, h = setTimeout(a, t), A ? o(e) : m;
                                    if (k) return h = setTimeout(a, t), o(f)
                                }
                                return void 0 === h && (h = setTimeout(a, t)), m
                            }
                            var u, d, p, m, h, f, y = 0,
                                A = !1,
                                k = !1,
                                w = !0;
                            if ("function" != typeof e) throw TypeError("Expected a function");
                            return t = i(t) || 0, n(r) && (A = !!r.leading, p = (k = "maxWait" in r) ? g(i(r.maxWait) || 0, t) : p, w = "trailing" in r ? !!r.trailing : w), c.cancel = function () {
                                void 0 !== h && clearTimeout(h), y = 0, u = f = d = h = void 0
                            }, c.flush = function () {
                                return void 0 === h ? m : l(v())
                            }, c
                        }
                    }).call(t, function () {
                        return this
                    }())
                }, function (e, t) {
                    "use strict";

                    function n() {
                        return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
                    }

                    function i(e) {
                        e && e.forEach(function (e) {
                            var t = Array.prototype.slice.call(e.addedNodes),
                                n = Array.prototype.slice.call(e.removedNodes);
                            if (function e(t) {
                                var n = void 0,
                                    i = void 0;
                                for (n = 0; n < t.length; n += 1)
                                    if ((i = t[n]).dataset && i.dataset.aos || i.children && e(i.children)) return !0;
                                return !1
                            }(t.concat(n))) return r()
                        })
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var r = function () { };
                    t.default = {
                        isSupported: function () {
                            return !!n()
                        },
                        ready: function (e, t) {
                            var o = window.document,
                                s = new (n())(i);
                            r = t, s.observe(o.documentElement, {
                                childList: !0,
                                subtree: !0,
                                removedNodes: !0
                            })
                        }
                    }
                }, function (e, t) {
                    "use strict";

                    function n() {
                        return navigator.userAgent || navigator.vendor || window.opera || ""
                    }
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = function () {
                        function e(e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }
                        return function (t, n, i) {
                            return n && e(t.prototype, n), i && e(t, i), t
                        }
                    }(),
                        r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
                        o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
                        a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
                        l = function () {
                            function e() {
                                ! function (e, t) {
                                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                                }(this, e)
                            }
                            return i(e, [{
                                key: "phone",
                                value: function () {
                                    var e = n();
                                    return !(!r.test(e) && !o.test(e.substr(0, 4)))
                                }
                            }, {
                                key: "mobile",
                                value: function () {
                                    var e = n();
                                    return !(!s.test(e) && !a.test(e.substr(0, 4)))
                                }
                            }, {
                                key: "tablet",
                                value: function () {
                                    return this.mobile() && !this.phone()
                                }
                            }]), e
                        }();
                    t.default = new l
                }, function (e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var n = function (e, t, n) {
                        var i = e.node.getAttribute("data-aos-once");
                        t > e.position ? e.node.classList.add("aos-animate") : void 0 === i || "false" !== i && (n || "true" === i) || e.node.classList.remove("aos-animate")
                    };
                    t.default = function (e, t) {
                        var i = window.pageYOffset,
                            r = window.innerHeight;
                        e.forEach(function (e, o) {
                            n(e, r + i, t)
                        })
                    }
                }, function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i, r = (i = n(12)) && i.__esModule ? i : {
                        default: i
                    };
                    t.default = function (e, t) {
                        return e.forEach(function (e, n) {
                            e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
                        }), e
                    }
                }, function (e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i, r = (i = n(13)) && i.__esModule ? i : {
                        default: i
                    };
                    t.default = function (e, t) {
                        var n = 0,
                            i = 0,
                            o = window.innerHeight,
                            s = {
                                offset: e.getAttribute("data-aos-offset"),
                                anchor: e.getAttribute("data-aos-anchor"),
                                anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                            };
                        switch (s.offset && !isNaN(s.offset) && (i = parseInt(s.offset)), s.anchor && document.querySelectorAll(s.anchor) && (e = document.querySelectorAll(s.anchor)[0]), n = (0, r.default)(e).top, s.anchorPlacement) {
                            case "top-bottom":
                                break;
                            case "center-bottom":
                                n += e.offsetHeight / 2;
                                break;
                            case "bottom-bottom":
                                n += e.offsetHeight;
                                break;
                            case "top-center":
                                n += o / 2;
                                break;
                            case "bottom-center":
                                n += o / 2 + e.offsetHeight;
                                break;
                            case "center-center":
                                n += o / 2 + e.offsetHeight / 2;
                                break;
                            case "top-top":
                                n += o;
                                break;
                            case "bottom-top":
                                n += e.offsetHeight + o;
                                break;
                            case "center-top":
                                n += e.offsetHeight / 2 + o
                        }
                        return s.anchorPlacement || s.offset || isNaN(t) || (i = t), n + i
                    }
                }, function (e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function (e) {
                        for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
                        return {
                            top: n,
                            left: t
                        }
                    }
                }, function (e, t) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.default = function (e) {
                        return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function (e) {
                            return {
                                node: e
                            }
                        })
                    }
                }])
            }, e.exports = t()
        },
        76489: function (e, t) {
            "use strict";
            /*!
             * cookie
             * Copyright(c) 2012-2014 Roman Shtylman
             * Copyright(c) 2015 Douglas Christopher Wilson
             * MIT Licensed
             */
            t.parse = function (e, t) {
                if ("string" != typeof e) throw TypeError("argument str must be a string");
                for (var n = {}, i = (t || {}).decode || r, o = 0; o < e.length;) {
                    var s = e.indexOf("=", o);
                    if (-1 === s) break;
                    var a = e.indexOf(";", o);
                    if (-1 === a) a = e.length;
                    else if (a < s) {
                        o = e.lastIndexOf(";", s - 1) + 1;
                        continue
                    }
                    var l = e.slice(o, s).trim();
                    if (void 0 === n[l]) {
                        var c = e.slice(s + 1, a).trim();
                        34 === c.charCodeAt(0) && (c = c.slice(1, -1)), n[l] = function (e, t) {
                            try {
                                return t(e)
                            } catch (t) {
                                return e
                            }
                        }(c, i)
                    }
                    o = a + 1
                }
                return n
            }, t.serialize = function (e, t, r) {
                var s = r || {},
                    a = s.encode || o;
                if ("function" != typeof a) throw TypeError("option encode is invalid");
                if (!i.test(e)) throw TypeError("argument name is invalid");
                var l = a(t);
                if (l && !i.test(l)) throw TypeError("argument val is invalid");
                var c = e + "=" + l;
                if (null != s.maxAge) {
                    var u = s.maxAge - 0;
                    if (isNaN(u) || !isFinite(u)) throw TypeError("option maxAge is invalid");
                    c += "; Max-Age=" + Math.floor(u)
                }
                if (s.domain) {
                    if (!i.test(s.domain)) throw TypeError("option domain is invalid");
                    c += "; Domain=" + s.domain
                }
                if (s.path) {
                    if (!i.test(s.path)) throw TypeError("option path is invalid");
                    c += "; Path=" + s.path
                }
                if (s.expires) {
                    var d = s.expires;
                    if ("[object Date]" !== n.call(d) && !(d instanceof Date) || isNaN(d.valueOf())) throw TypeError("option expires is invalid");
                    c += "; Expires=" + d.toUTCString()
                }
                if (s.httpOnly && (c += "; HttpOnly"), s.secure && (c += "; Secure"), s.partitioned && (c += "; Partitioned"), s.priority) switch ("string" == typeof s.priority ? s.priority.toLowerCase() : s.priority) {
                    case "low":
                        c += "; Priority=Low";
                        break;
                    case "medium":
                        c += "; Priority=Medium";
                        break;
                    case "high":
                        c += "; Priority=High";
                        break;
                    default:
                        throw TypeError("option priority is invalid")
                }
                if (s.sameSite) switch ("string" == typeof s.sameSite ? s.sameSite.toLowerCase() : s.sameSite) {
                    case !0:
                    case "strict":
                        c += "; SameSite=Strict";
                        break;
                    case "lax":
                        c += "; SameSite=Lax";
                        break;
                    case "none":
                        c += "; SameSite=None";
                        break;
                    default:
                        throw TypeError("option sameSite is invalid")
                }
                return c
            };
            var n = Object.prototype.toString,
                i = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function r(e) {
                return -1 !== e.indexOf("%") ? decodeURIComponent(e) : e
            }

            function o(e) {
                return encodeURIComponent(e)
            }
        },
        47041: function (e, t, n) {
            "use strict";
            var i = this && this.__assign || function () {
                return (i = Object.assign || function (e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }).apply(this, arguments)
            },
                r = this && this.__rest || function (e, t) {
                    var n = {};
                    for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (n[i] = e[i]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                        for (var r = 0, i = Object.getOwnPropertySymbols(e); r < i.length; r++) 0 > t.indexOf(i[r]) && Object.prototype.propertyIsEnumerable.call(e, i[r]) && (n[i[r]] = e[i[r]]);
                    return n
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.hasCookie = t.deleteCookie = t.setCookie = t.getCookie = t.getCookies = void 0;
            var o = n(76489),
                s = function () {
                    return "undefined" != typeof window
                },
                a = function (e) {
                    return !!e && "getAll" in e && "set" in e && "function" == typeof e.getAll && "function" == typeof e.set
                },
                l = function (e) {
                    return !!(null == e ? void 0 : e.req) && "cookies" in e.req && a(null == e ? void 0 : e.req.cookies) || !!(null == e ? void 0 : e.res) && "cookies" in e.res && a(null == e ? void 0 : e.res.cookies) || !!(null == e ? void 0 : e.cookies) && a(e.cookies())
                },
                c = function (e) {
                    var t = {};
                    return e.getAll().forEach(function (e) {
                        var n = e.name,
                            i = e.value;
                        t[n] = i
                    }), t
                },
                u = function (e) {
                    try {
                        if ("string" == typeof e) return e;
                        return JSON.stringify(e)
                    } catch (t) {
                        return e
                    }
                };
            t.getCookies = function (e) {
                if (l(e)) {
                    if (null == e ? void 0 : e.req) return c(e.req.cookies);
                    if (null == e ? void 0 : e.cookies) return c(e.cookies())
                }
                if (e && (t = e.req), !s()) return t && t.cookies ? t.cookies : t && t.headers.cookie ? (0, o.parse)(t.headers.cookie) : {};
                for (var t, n = {}, i = document.cookie ? document.cookie.split("; ") : [], r = 0, a = i.length; r < a; r++) {
                    var u = i[r].split("="),
                        d = u.slice(1).join("=");
                    n[u[0]] = d
                }
                return n
            }, t.getCookie = function (e, n) {
                var i = (0, t.getCookies)(n)[e];
                if (void 0 !== i) return i ? i.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent) : i
            }, t.setCookie = function (e, t, n) {
                if (l(n)) {
                    var a, c, d, p = n.req,
                        m = n.res,
                        h = n.cookies,
                        f = r(n, ["req", "res", "cookies"]),
                        g = i({
                            name: e,
                            value: u(t)
                        }, f);
                    p && p.cookies.set(g), m && m.cookies.set(g), h && h().set(g);
                    return
                }
                if (n) {
                    var p = n.req,
                        m = n.res,
                        b = r(n, ["req", "res"]);
                    c = p, d = m, a = b
                }
                var v = (0, o.serialize)(e, u(t), i({
                    path: "/"
                }, a));
                if (s()) document.cookie = v;
                else if (d && c) {
                    var y = d.getHeader("Set-Cookie");
                    if (Array.isArray(y) || (y = y ? [String(y)] : []), d.setHeader("Set-Cookie", y.concat(v)), c && c.cookies) {
                        var A = c.cookies;
                        "" === t ? delete A[e] : A[e] = u(t)
                    }
                    if (c && c.headers && c.headers.cookie) {
                        var A = (0, o.parse)(c.headers.cookie);
                        "" === t ? delete A[e] : A[e] = u(t), c.headers.cookie = Object.entries(A).reduce(function (e, t) {
                            return e.concat("".concat(t[0], "=").concat(t[1], ";"))
                        }, "")
                    }
                }
            }, t.deleteCookie = function (e, n) {
                return (0, t.setCookie)(e, "", i(i({}, n), {
                    maxAge: -1
                }))
            }, t.hasCookie = function (e, n) {
                return !!e && (0, t.getCookies)(n).hasOwnProperty(e)
            }
        },
        58875: function (e, t, n) {
            var i, r, o;
            o = {
                canUseDOM: r = !!("undefined" != typeof window && window.document && window.document.createElement),
                canUseWorkers: "undefined" != typeof Worker,
                canUseEventListeners: r && !!(window.addEventListener || window.attachEvent),
                canUseViewport: r && !!window.screen
            }, void 0 !== (i = (function () {
                return o
            }).call(t, n, t, e)) && (e.exports = i)
        },
        83454: function (e, t, n) {
            "use strict";
            var i, r;
            e.exports = (null == (i = n.g.process) ? void 0 : i.env) && "object" == typeof (null == (r = n.g.process) ? void 0 : r.env) ? n.g.process : n(77663)
        },
        6840: function (e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
                return n(99294)
            }])
        },
        12236: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return el
                }
            });
            let i = {
                type: "logger",
                log(e) {
                    this.output("log", e)
                },
                warn(e) {
                    this.output("warn", e)
                },
                error(e) {
                    this.output("error", e)
                },
                output(e, t) {
                    console && console[e] && console[e].apply(console, t)
                }
            };
            class r {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.init(e, t)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.prefix = t.prefix || "i18next:", this.logger = e || i, this.options = t, this.debug = t.debug
                }
                log() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "log", "", !0)
                }
                warn() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "", !0)
                }
                error() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "error", "")
                }
                deprecate() {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return this.forward(t, "warn", "WARNING DEPRECATED: ", !0)
                }
                forward(e, t, n, i) {
                    return i && !this.debug ? null : ("string" == typeof e[0] && (e[0] = `${n}${this.prefix} ${e[0]}`), this.logger[t](e))
                }
                create(e) {
                    return new r(this.logger, {
                        prefix: `${this.prefix}:${e}:`,
                        ...this.options
                    })
                }
                clone(e) {
                    return (e = e || this.options).prefix = e.prefix || this.prefix, new r(this.logger, e)
                }
            }
            var o = new r;
            class s {
                constructor() {
                    this.observers = {}
                }
                on(e, t) {
                    return e.split(" ").forEach(e => {
                        this.observers[e] || (this.observers[e] = new Map);
                        let n = this.observers[e].get(t) || 0;
                        this.observers[e].set(t, n + 1)
                    }), this
                }
                off(e, t) {
                    if (this.observers[e]) {
                        if (!t) {
                            delete this.observers[e];
                            return
                        }
                        this.observers[e].delete(t)
                    }
                }
                emit(e) {
                    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                    this.observers[e] && Array.from(this.observers[e].entries()).forEach(e => {
                        let [t, i] = e;
                        for (let e = 0; e < i; e++) t(...n)
                    }), this.observers["*"] && Array.from(this.observers["*"].entries()).forEach(t => {
                        let [i, r] = t;
                        for (let t = 0; t < r; t++) i.apply(i, [e, ...n])
                    })
                }
            }
            let a = () => {
                let e, t;
                let n = new Promise((n, i) => {
                    e = n, t = i
                });
                return n.resolve = e, n.reject = t, n
            },
                l = e => null == e ? "" : "" + e,
                c = (e, t, n) => {
                    e.forEach(e => {
                        t[e] && (n[e] = t[e])
                    })
                },
                u = /###/g,
                d = e => e && e.indexOf("###") > -1 ? e.replace(u, ".") : e,
                p = e => !e || "string" == typeof e,
                m = (e, t, n) => {
                    let i = "string" != typeof t ? t : t.split("."),
                        r = 0;
                    for (; r < i.length - 1;) {
                        if (p(e)) return {};
                        let t = d(i[r]);
                        !e[t] && n && (e[t] = new n), e = Object.prototype.hasOwnProperty.call(e, t) ? e[t] : {}, ++r
                    }
                    return p(e) ? {} : {
                        obj: e,
                        k: d(i[r])
                    }
                },
                h = (e, t, n) => {
                    let {
                        obj: i,
                        k: r
                    } = m(e, t, Object);
                    if (void 0 !== i || 1 === t.length) {
                        i[r] = n;
                        return
                    }
                    let o = t[t.length - 1],
                        s = t.slice(0, t.length - 1),
                        a = m(e, s, Object);
                    for (; void 0 === a.obj && s.length;) o = `${s[s.length - 1]}.${o}`, (a = m(e, s = s.slice(0, s.length - 1), Object)) && a.obj && void 0 !== a.obj[`${a.k}.${o}`] && (a.obj = void 0);
                    a.obj[`${a.k}.${o}`] = n
                },
                f = (e, t, n, i) => {
                    let {
                        obj: r,
                        k: o
                    } = m(e, t, Object);
                    r[o] = r[o] || [], r[o].push(n)
                },
                g = (e, t) => {
                    let {
                        obj: n,
                        k: i
                    } = m(e, t);
                    if (n) return n[i]
                },
                b = (e, t, n) => {
                    let i = g(e, n);
                    return void 0 !== i ? i : g(t, n)
                },
                v = (e, t, n) => {
                    for (let i in t) "__proto__" !== i && "constructor" !== i && (i in e ? "string" == typeof e[i] || e[i] instanceof String || "string" == typeof t[i] || t[i] instanceof String ? n && (e[i] = t[i]) : v(e[i], t[i], n) : e[i] = t[i]);
                    return e
                },
                y = e => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
            var A = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };
            let k = e => "string" == typeof e ? e.replace(/[&<>"'\/]/g, e => A[e]) : e;
            class w {
                constructor(e) {
                    this.capacity = e, this.regExpMap = new Map, this.regExpQueue = []
                }
                getRegExp(e) {
                    let t = this.regExpMap.get(e);
                    if (void 0 !== t) return t;
                    let n = new RegExp(e);
                    return this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()), this.regExpMap.set(e, n), this.regExpQueue.push(e), n
                }
            }
            let L = [" ", ",", "?", "!", ";"],
                M = new w(20),
                C = (e, t, n) => {
                    t = t || "", n = n || "";
                    let i = L.filter(e => 0 > t.indexOf(e) && 0 > n.indexOf(e));
                    if (0 === i.length) return !0;
                    let r = M.getRegExp(`(${i.map(e => "?" === e ? "\\?" : e).join("|")})`),
                        o = !r.test(e);
                    if (!o) {
                        let t = e.indexOf(n);
                        t > 0 && !r.test(e.substring(0, t)) && (o = !0)
                    }
                    return o
                },
                S = function (e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                    if (!e) return;
                    if (e[t]) return e[t];
                    let i = t.split(n),
                        r = e;
                    for (let e = 0; e < i.length;) {
                        let t;
                        if (!r || "object" != typeof r) return;
                        let o = "";
                        for (let s = e; s < i.length; ++s)
                            if (s !== e && (o += n), o += i[s], void 0 !== (t = r[o])) {
                                if (["string", "number", "boolean"].indexOf(typeof t) > -1 && s < i.length - 1) continue;
                                e += s - e + 1;
                                break
                            } r = t
                    }
                    return r
                },
                x = e => e && e.indexOf("_") > 0 ? e.replace("_", "-") : e;
            class z extends s {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        ns: ["translation"],
                        defaultNS: "translation"
                    };
                    super(), this.data = e || {}, this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), void 0 === this.options.ignoreJSONStructure && (this.options.ignoreJSONStructure = !0)
                }
                addNamespaces(e) {
                    0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                }
                removeNamespaces(e) {
                    let t = this.options.ns.indexOf(e);
                    t > -1 && this.options.ns.splice(t, 1)
                }
                getResource(e, t, n) {
                    let i, r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                        s = void 0 !== r.ignoreJSONStructure ? r.ignoreJSONStructure : this.options.ignoreJSONStructure;
                    e.indexOf(".") > -1 ? i = e.split(".") : (i = [e, t], n && (Array.isArray(n) ? i.push(...n) : "string" == typeof n && o ? i.push(...n.split(o)) : i.push(n)));
                    let a = g(this.data, i);
                    return (!a && !t && !n && e.indexOf(".") > -1 && (e = i[0], t = i[1], n = i.slice(2).join(".")), a || !s || "string" != typeof n) ? a : S(this.data && this.data[e] && this.data[e][t], n, o)
                }
                addResource(e, t, n, i) {
                    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                        silent: !1
                    },
                        o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                        s = [e, t];
                    n && (s = s.concat(o ? n.split(o) : n)), e.indexOf(".") > -1 && (s = e.split("."), i = t, t = s[1]), this.addNamespaces(t), h(this.data, s, i), r.silent || this.emit("added", e, t, n, i)
                }
                addResources(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        silent: !1
                    };
                    for (let i in n) ("string" == typeof n[i] || Array.isArray(n[i])) && this.addResource(e, t, i, n[i], {
                        silent: !0
                    });
                    i.silent || this.emit("added", e, t, n)
                }
                addResourceBundle(e, t, n, i, r) {
                    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                        silent: !1,
                        skipCopy: !1
                    },
                        s = [e, t];
                    e.indexOf(".") > -1 && (s = e.split("."), i = n, n = t, t = s[1]), this.addNamespaces(t);
                    let a = g(this.data, s) || {};
                    o.skipCopy || (n = JSON.parse(JSON.stringify(n))), i ? v(a, n, r) : a = {
                        ...a,
                        ...n
                    }, h(this.data, s, a), o.silent || this.emit("added", e, t, n)
                }
                removeResourceBundle(e, t) {
                    this.hasResourceBundle(e, t) && delete this.data[e][t], this.removeNamespaces(t), this.emit("removed", e, t)
                }
                hasResourceBundle(e, t) {
                    return void 0 !== this.getResource(e, t)
                }
                getResourceBundle(e, t) {
                    return (t || (t = this.options.defaultNS), "v1" === this.options.compatibilityAPI) ? {
                        ...this.getResource(e, t)
                    } : this.getResource(e, t)
                }
                getDataByLanguage(e) {
                    return this.data[e]
                }
                hasLanguageSomeTranslations(e) {
                    let t = this.getDataByLanguage(e);
                    return !!(t && Object.keys(t) || []).find(e => t[e] && Object.keys(t[e]).length > 0)
                }
                toJSON() {
                    return this.data
                }
            }
            var E = {
                processors: {},
                addPostProcessor(e) {
                    this.processors[e.name] = e
                },
                handle(e, t, n, i, r) {
                    return e.forEach(e => {
                        this.processors[e] && (t = this.processors[e].process(t, n, i, r))
                    }), t
                }
            };
            let T = {};
            class B extends s {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    super(), c(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, this), this.options = t, void 0 === this.options.keySeparator && (this.options.keySeparator = "."), this.logger = o.create("translator")
                }
                changeLanguage(e) {
                    e && (this.language = e)
                }
                exists(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    };
                    if (null == e) return !1;
                    let n = this.resolve(e, t);
                    return n && void 0 !== n.res
                }
                extractFromKey(e, t) {
                    let n = void 0 !== t.nsSeparator ? t.nsSeparator : this.options.nsSeparator;
                    void 0 === n && (n = ":");
                    let i = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        r = t.ns || this.options.defaultNS || [],
                        o = n && e.indexOf(n) > -1,
                        s = !this.options.userDefinedKeySeparator && !t.keySeparator && !this.options.userDefinedNsSeparator && !t.nsSeparator && !C(e, n, i);
                    if (o && !s) {
                        let t = e.match(this.interpolator.nestingRegexp);
                        if (t && t.length > 0) return {
                            key: e,
                            namespaces: r
                        };
                        let o = e.split(n);
                        (n !== i || n === i && this.options.ns.indexOf(o[0]) > -1) && (r = o.shift()), e = o.join(i)
                    }
                    return "string" == typeof r && (r = [r]), {
                        key: e,
                        namespaces: r
                    }
                }
                translate(e, t, n) {
                    if ("object" != typeof t && this.options.overloadTranslationOptionHandler && (t = this.options.overloadTranslationOptionHandler(arguments)), "object" == typeof t && (t = {
                        ...t
                    }), t || (t = {}), null == e) return "";
                    Array.isArray(e) || (e = [String(e)]);
                    let i = void 0 !== t.returnDetails ? t.returnDetails : this.options.returnDetails,
                        r = void 0 !== t.keySeparator ? t.keySeparator : this.options.keySeparator,
                        {
                            key: o,
                            namespaces: s
                        } = this.extractFromKey(e[e.length - 1], t),
                        a = s[s.length - 1],
                        l = t.lng || this.language,
                        c = t.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                    if (l && "cimode" === l.toLowerCase()) {
                        if (c) {
                            let e = t.nsSeparator || this.options.nsSeparator;
                            return i ? {
                                res: `${a}${e}${o}`,
                                usedKey: o,
                                exactUsedKey: o,
                                usedLng: l,
                                usedNS: a,
                                usedParams: this.getUsedParamsDetails(t)
                            } : `${a}${e}${o}`
                        }
                        return i ? {
                            res: o,
                            usedKey: o,
                            exactUsedKey: o,
                            usedLng: l,
                            usedNS: a,
                            usedParams: this.getUsedParamsDetails(t)
                        } : o
                    }
                    let u = this.resolve(e, t),
                        d = u && u.res,
                        p = u && u.usedKey || o,
                        m = u && u.exactUsedKey || o,
                        h = Object.prototype.toString.apply(d),
                        f = void 0 !== t.joinArrays ? t.joinArrays : this.options.joinArrays,
                        g = !this.i18nFormat || this.i18nFormat.handleAsObject,
                        b = "string" != typeof d && "boolean" != typeof d && "number" != typeof d;
                    if (g && d && b && 0 > ["[object Number]", "[object Function]", "[object RegExp]"].indexOf(h) && !("string" == typeof f && Array.isArray(d))) {
                        if (!t.returnObjects && !this.options.returnObjects) {
                            this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!");
                            let e = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(p, d, {
                                ...t,
                                ns: s
                            }) : `key '${o} (${this.language})' returned an object instead of string.`;
                            return i ? (u.res = e, u.usedParams = this.getUsedParamsDetails(t), u) : e
                        }
                        if (r) {
                            let e = Array.isArray(d),
                                n = e ? [] : {},
                                i = e ? m : p;
                            for (let e in d)
                                if (Object.prototype.hasOwnProperty.call(d, e)) {
                                    let o = `${i}${r}${e}`;
                                    n[e] = this.translate(o, {
                                        ...t,
                                        joinArrays: !1,
                                        ns: s
                                    }), n[e] === o && (n[e] = d[e])
                                } d = n
                        }
                    } else if (g && "string" == typeof f && Array.isArray(d)) (d = d.join(f)) && (d = this.extendTranslation(d, e, t, n));
                    else {
                        let i = !1,
                            s = !1,
                            c = void 0 !== t.count && "string" != typeof t.count,
                            p = B.hasDefaultValue(t),
                            m = c ? this.pluralResolver.getSuffix(l, t.count, t) : "",
                            h = t.ordinal && c ? this.pluralResolver.getSuffix(l, t.count, {
                                ordinal: !1
                            }) : "",
                            f = c && !t.ordinal && 0 === t.count && this.pluralResolver.shouldUseIntlApi(),
                            g = f && t[`defaultValue${this.options.pluralSeparator}zero`] || t[`defaultValue${m}`] || t[`defaultValue${h}`] || t.defaultValue;
                        !this.isValidLookup(d) && p && (i = !0, d = g), this.isValidLookup(d) || (s = !0, d = o);
                        let b = (t.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && s ? void 0 : d,
                            v = p && g !== d && this.options.updateMissing;
                        if (s || i || v) {
                            if (this.logger.log(v ? "updateKey" : "missingKey", l, a, o, v ? g : d), r) {
                                let e = this.resolve(o, {
                                    ...t,
                                    keySeparator: !1
                                });
                                e && e.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                            }
                            let e = [],
                                n = this.languageUtils.getFallbackCodes(this.options.fallbackLng, t.lng || this.language);
                            if ("fallback" === this.options.saveMissingTo && n && n[0])
                                for (let t = 0; t < n.length; t++) e.push(n[t]);
                            else "all" === this.options.saveMissingTo ? e = this.languageUtils.toResolveHierarchy(t.lng || this.language) : e.push(t.lng || this.language);
                            let i = (e, n, i) => {
                                let r = p && i !== d ? i : b;
                                this.options.missingKeyHandler ? this.options.missingKeyHandler(e, a, n, r, v, t) : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(e, a, n, r, v, t), this.emit("missingKey", e, a, n, d)
                            };
                            this.options.saveMissing && (this.options.saveMissingPlurals && c ? e.forEach(e => {
                                let n = this.pluralResolver.getSuffixes(e, t);
                                f && t[`defaultValue${this.options.pluralSeparator}zero`] && 0 > n.indexOf(`${this.options.pluralSeparator}zero`) && n.push(`${this.options.pluralSeparator}zero`), n.forEach(n => {
                                    i([e], o + n, t[`defaultValue${n}`] || g)
                                })
                            }) : i(e, o, g))
                        }
                        d = this.extendTranslation(d, e, t, u, n), s && d === o && this.options.appendNamespaceToMissingKey && (d = `${a}:${o}`), (s || i) && this.options.parseMissingKeyHandler && (d = "v1" !== this.options.compatibilityAPI ? this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${a}:${o}` : o, i ? d : void 0) : this.options.parseMissingKeyHandler(d))
                    }
                    return i ? (u.res = d, u.usedParams = this.getUsedParamsDetails(t), u) : d
                }
                extendTranslation(e, t, n, i, r) {
                    var o = this;
                    if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, {
                        ...this.options.interpolation.defaultVariables,
                        ...n
                    }, n.lng || this.language || i.usedLng, i.usedNS, i.usedKey, {
                        resolved: i
                    });
                    else if (!n.skipInterpolation) {
                        let s;
                        n.interpolation && this.interpolator.init({
                            ...n,
                            interpolation: {
                                ...this.options.interpolation,
                                ...n.interpolation
                            }
                        });
                        let a = "string" == typeof e && (n && n.interpolation && void 0 !== n.interpolation.skipOnVariables ? n.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
                        if (a) {
                            let t = e.match(this.interpolator.nestingRegexp);
                            s = t && t.length
                        }
                        let l = n.replace && "string" != typeof n.replace ? n.replace : n;
                        if (this.options.interpolation.defaultVariables && (l = {
                            ...this.options.interpolation.defaultVariables,
                            ...l
                        }), e = this.interpolator.interpolate(e, l, n.lng || this.language || i.usedLng, n), a) {
                            let t = e.match(this.interpolator.nestingRegexp);
                            s < (t && t.length) && (n.nest = !1)
                        } !n.lng && "v1" !== this.options.compatibilityAPI && i && i.res && (n.lng = this.language || i.usedLng), !1 !== n.nest && (e = this.interpolator.nest(e, function () {
                            for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
                            return r && r[0] === i[0] && !n.context ? (o.logger.warn(`It seems you are nesting recursively key: ${i[0]} in key: ${t[0]}`), null) : o.translate(...i, t)
                        }, n)), n.interpolation && this.interpolator.reset()
                    }
                    let s = n.postProcess || this.options.postProcess,
                        a = "string" == typeof s ? [s] : s;
                    return null != e && a && a.length && !1 !== n.applyPostProcessor && (e = E.handle(a, e, t, this.options && this.options.postProcessPassResolved ? {
                        i18nResolved: {
                            ...i,
                            usedParams: this.getUsedParamsDetails(n)
                        },
                        ...n
                    } : n, this)), e
                }
                resolve(e) {
                    let t, n, i, r, o, s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return "string" == typeof e && (e = [e]), e.forEach(e => {
                        if (this.isValidLookup(t)) return;
                        let a = this.extractFromKey(e, s),
                            l = a.key;
                        n = l;
                        let c = a.namespaces;
                        this.options.fallbackNS && (c = c.concat(this.options.fallbackNS));
                        let u = void 0 !== s.count && "string" != typeof s.count,
                            d = u && !s.ordinal && 0 === s.count && this.pluralResolver.shouldUseIntlApi(),
                            p = void 0 !== s.context && ("string" == typeof s.context || "number" == typeof s.context) && "" !== s.context,
                            m = s.lngs ? s.lngs : this.languageUtils.toResolveHierarchy(s.lng || this.language, s.fallbackLng);
                        c.forEach(e => {
                            this.isValidLookup(t) || (o = e, !T[`${m[0]}-${e}`] && this.utils && this.utils.hasLoadedNamespace && !this.utils.hasLoadedNamespace(o) && (T[`${m[0]}-${e}`] = !0, this.logger.warn(`key "${n}" for languages "${m.join(", ")}" won't get resolved as namespace "${o}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), m.forEach(n => {
                                let o;
                                if (this.isValidLookup(t)) return;
                                r = n;
                                let a = [l];
                                if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(a, l, n, e, s);
                                else {
                                    let e;
                                    u && (e = this.pluralResolver.getSuffix(n, s.count, s));
                                    let t = `${this.options.pluralSeparator}zero`,
                                        i = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                                    if (u && (a.push(l + e), s.ordinal && 0 === e.indexOf(i) && a.push(l + e.replace(i, this.options.pluralSeparator)), d && a.push(l + t)), p) {
                                        let n = `${l}${this.options.contextSeparator}${s.context}`;
                                        a.push(n), u && (a.push(n + e), s.ordinal && 0 === e.indexOf(i) && a.push(n + e.replace(i, this.options.pluralSeparator)), d && a.push(n + t))
                                    }
                                }
                                for (; o = a.pop();) this.isValidLookup(t) || (i = o, t = this.getResource(n, e, o, s))
                            }))
                        })
                    }), {
                        res: t,
                        usedKey: n,
                        exactUsedKey: i,
                        usedLng: r,
                        usedNS: o
                    }
                }
                isValidLookup(e) {
                    return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                }
                getResource(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, t, n, i) : this.resourceStore.getResource(e, t, n, i)
                }
                getUsedParamsDetails() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.replace && "string" != typeof e.replace,
                        n = t ? e.replace : e;
                    if (t && void 0 !== e.count && (n.count = e.count), this.options.interpolation.defaultVariables && (n = {
                        ...this.options.interpolation.defaultVariables,
                        ...n
                    }), !t)
                        for (let e of (n = {
                            ...n
                        }, ["defaultValue", "ordinal", "context", "replace", "lng", "lngs", "fallbackLng", "ns", "keySeparator", "nsSeparator", "returnObjects", "returnDetails", "joinArrays", "postProcess", "interpolation"])) delete n[e];
                    return n
                }
                static hasDefaultValue(e) {
                    let t = "defaultValue";
                    for (let n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n) && t === n.substring(0, t.length) && void 0 !== e[n]) return !0;
                    return !1
                }
            }
            let P = e => e.charAt(0).toUpperCase() + e.slice(1);
            class q {
                constructor(e) {
                    this.options = e, this.supportedLngs = this.options.supportedLngs || !1, this.logger = o.create("languageUtils")
                }
                getScriptPartFromCode(e) {
                    if (!(e = x(e)) || 0 > e.indexOf("-")) return null;
                    let t = e.split("-");
                    return 2 === t.length ? null : (t.pop(), "x" === t[t.length - 1].toLowerCase()) ? null : this.formatLanguageCode(t.join("-"))
                }
                getLanguagePartFromCode(e) {
                    if (!(e = x(e)) || 0 > e.indexOf("-")) return e;
                    let t = e.split("-");
                    return this.formatLanguageCode(t[0])
                }
                formatLanguageCode(e) {
                    if ("string" == typeof e && e.indexOf("-") > -1) {
                        let t = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                            n = e.split("-");
                        return this.options.lowerCaseLng ? n = n.map(e => e.toLowerCase()) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = P(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), t.indexOf(n[1].toLowerCase()) > -1 && (n[1] = P(n[1].toLowerCase())), t.indexOf(n[2].toLowerCase()) > -1 && (n[2] = P(n[2].toLowerCase()))), n.join("-")
                    }
                    return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                }
                isSupportedCode(e) {
                    return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                }
                getBestMatchFromCodes(e) {
                    let t;
                    return e ? (e.forEach(e => {
                        if (t) return;
                        let n = this.formatLanguageCode(e);
                        (!this.options.supportedLngs || this.isSupportedCode(n)) && (t = n)
                    }), !t && this.options.supportedLngs && e.forEach(e => {
                        if (t) return;
                        let n = this.getLanguagePartFromCode(e);
                        if (this.isSupportedCode(n)) return t = n;
                        t = this.options.supportedLngs.find(e => {
                            if (e === n || !(0 > e.indexOf("-") && 0 > n.indexOf("-")) && (e.indexOf("-") > 0 && 0 > n.indexOf("-") && e.substring(0, e.indexOf("-")) === n || 0 === e.indexOf(n) && n.length > 1)) return e
                        })
                    }), t || (t = this.getFallbackCodes(this.options.fallbackLng)[0]), t) : null
                }
                getFallbackCodes(e, t) {
                    if (!e) return [];
                    if ("function" == typeof e && (e = e(t)), "string" == typeof e && (e = [e]), Array.isArray(e)) return e;
                    if (!t) return e.default || [];
                    let n = e[t];
                    return n || (n = e[this.getScriptPartFromCode(t)]), n || (n = e[this.formatLanguageCode(t)]), n || (n = e[this.getLanguagePartFromCode(t)]), n || (n = e.default), n || []
                }
                toResolveHierarchy(e, t) {
                    let n = this.getFallbackCodes(t || this.options.fallbackLng || [], e),
                        i = [],
                        r = e => {
                            e && (this.isSupportedCode(e) ? i.push(e) : this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))
                        };
                    return "string" == typeof e && (e.indexOf("-") > -1 || e.indexOf("_") > -1) ? ("languageOnly" !== this.options.load && r(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && r(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && r(this.getLanguagePartFromCode(e))) : "string" == typeof e && r(this.formatLanguageCode(e)), n.forEach(e => {
                        0 > i.indexOf(e) && r(this.formatLanguageCode(e))
                    }), i
                }
            }
            let I = [{
                lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                nr: [1, 2],
                fc: 1
            }, {
                lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                nr: [1, 2],
                fc: 2
            }, {
                lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                nr: [1],
                fc: 3
            }, {
                lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                nr: [1, 2, 5],
                fc: 4
            }, {
                lngs: ["ar"],
                nr: [0, 1, 2, 3, 11, 100],
                fc: 5
            }, {
                lngs: ["cs", "sk"],
                nr: [1, 2, 5],
                fc: 6
            }, {
                lngs: ["csb", "pl"],
                nr: [1, 2, 5],
                fc: 7
            }, {
                lngs: ["cy"],
                nr: [1, 2, 3, 8],
                fc: 8
            }, {
                lngs: ["fr"],
                nr: [1, 2],
                fc: 9
            }, {
                lngs: ["ga"],
                nr: [1, 2, 3, 7, 11],
                fc: 10
            }, {
                lngs: ["gd"],
                nr: [1, 2, 3, 20],
                fc: 11
            }, {
                lngs: ["is"],
                nr: [1, 2],
                fc: 12
            }, {
                lngs: ["jv"],
                nr: [0, 1],
                fc: 13
            }, {
                lngs: ["kw"],
                nr: [1, 2, 3, 4],
                fc: 14
            }, {
                lngs: ["lt"],
                nr: [1, 2, 10],
                fc: 15
            }, {
                lngs: ["lv"],
                nr: [1, 2, 0],
                fc: 16
            }, {
                lngs: ["mk"],
                nr: [1, 2],
                fc: 17
            }, {
                lngs: ["mnk"],
                nr: [0, 1, 2],
                fc: 18
            }, {
                lngs: ["mt"],
                nr: [1, 2, 11, 20],
                fc: 19
            }, {
                lngs: ["or"],
                nr: [2, 1],
                fc: 2
            }, {
                lngs: ["ro"],
                nr: [1, 2, 20],
                fc: 20
            }, {
                lngs: ["sl"],
                nr: [5, 1, 2, 3],
                fc: 21
            }, {
                lngs: ["he", "iw"],
                nr: [1, 2, 20, 21],
                fc: 22
            }],
                O = {
                    1: e => Number(e > 1),
                    2: e => Number(1 != e),
                    3: e => 0,
                    4: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    5: e => Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5),
                    6: e => Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2),
                    7: e => Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    8: e => Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3),
                    9: e => Number(e >= 2),
                    10: e => Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
                    11: e => Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3),
                    12: e => Number(e % 10 != 1 || e % 100 == 11),
                    13: e => Number(0 !== e),
                    14: e => Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3),
                    15: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2),
                    16: e => Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2),
                    17: e => Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1),
                    18: e => Number(0 == e ? 0 : 1 == e ? 1 : 2),
                    19: e => Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3),
                    20: e => Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2),
                    21: e => Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0),
                    22: e => Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                },
                R = ["v1", "v2", "v3"],
                D = ["v4"],
                F = {
                    zero: 0,
                    one: 1,
                    two: 2,
                    few: 3,
                    many: 4,
                    other: 5
                },
                N = () => {
                    let e = {};
                    return I.forEach(t => {
                        t.lngs.forEach(n => {
                            e[n] = {
                                numbers: t.nr,
                                plurals: O[t.fc]
                            }
                        })
                    }), e
                };
            class j {
                constructor(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    this.languageUtils = e, this.options = t, this.logger = o.create("pluralResolver"), (!this.options.compatibilityJSON || D.includes(this.options.compatibilityJSON)) && ("undefined" == typeof Intl || !Intl.PluralRules) && (this.options.compatibilityJSON = "v3", this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")), this.rules = N(), this.pluralRulesCache = {}
                }
                addRule(e, t) {
                    this.rules[e] = t
                }
                clearCache() {
                    this.pluralRulesCache = {}
                }
                getRule(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (this.shouldUseIntlApi()) try {
                        let n = x("dev" === e ? "en" : e),
                            i = t.ordinal ? "ordinal" : "cardinal",
                            r = JSON.stringify({
                                cleanedCode: n,
                                type: i
                            });
                        if (r in this.pluralRulesCache) return this.pluralRulesCache[r];
                        let o = new Intl.PluralRules(n, {
                            type: i
                        });
                        return this.pluralRulesCache[r] = o, o
                    } catch (e) {
                        return
                    }
                    return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                }
                needsPlural(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.getRule(e, t);
                    return this.shouldUseIntlApi() ? n && n.resolvedOptions().pluralCategories.length > 1 : n && n.numbers.length > 1
                }
                getPluralFormsOfKey(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return this.getSuffixes(e, n).map(e => `${t}${e}`)
                }
                getSuffixes(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = this.getRule(e, t);
                    return n ? this.shouldUseIntlApi() ? n.resolvedOptions().pluralCategories.sort((e, t) => F[e] - F[t]).map(e => `${this.options.prepend}${t.ordinal ? `ordinal${this.options.prepend}` : ""}${e}`) : n.numbers.map(n => this.getSuffix(e, n, t)) : []
                }
                getSuffix(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = this.getRule(e, n);
                    return i ? this.shouldUseIntlApi() ? `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ""}${i.select(t)}` : this.getSuffixRetroCompatible(i, t) : (this.logger.warn(`no plural rule found for: ${e}`), "")
                }
                getSuffixRetroCompatible(e, t) {
                    let n = e.noAbs ? e.plurals(t) : e.plurals(Math.abs(t)),
                        i = e.numbers[n];
                    this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                    let r = () => this.options.prepend && i.toString() ? this.options.prepend + i.toString() : i.toString();
                    return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" == typeof i ? `_plural_${i.toString()}` : r() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === e.numbers.length && 1 === e.numbers[0] ? r() : this.options.prepend && n.toString() ? this.options.prepend + n.toString() : n.toString()
                }
                shouldUseIntlApi() {
                    return !R.includes(this.options.compatibilityJSON)
                }
            }
            let K = function (e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ".",
                    r = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
                    o = b(e, t, n);
                return !o && r && "string" == typeof n && void 0 === (o = S(e, n, i)) && (o = S(t, n, i)), o
            },
                W = e => e.replace(/\$/g, "$$$$");
            class U {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = o.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || (e => e), this.init(e)
                }
                init() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    e.interpolation || (e.interpolation = {
                        escapeValue: !0
                    });
                    let {
                        escape: t,
                        escapeValue: n,
                        useRawValueToEscape: i,
                        prefix: r,
                        prefixEscaped: o,
                        suffix: s,
                        suffixEscaped: a,
                        formatSeparator: l,
                        unescapeSuffix: c,
                        unescapePrefix: u,
                        nestingPrefix: d,
                        nestingPrefixEscaped: p,
                        nestingSuffix: m,
                        nestingSuffixEscaped: h,
                        nestingOptionsSeparator: f,
                        maxReplaces: g,
                        alwaysFormat: b
                    } = e.interpolation;
                    this.escape = void 0 !== t ? t : k, this.escapeValue = void 0 === n || n, this.useRawValueToEscape = void 0 !== i && i, this.prefix = r ? y(r) : o || "{{", this.suffix = s ? y(s) : a || "}}", this.formatSeparator = l || ",", this.unescapePrefix = c ? "" : u || "-", this.unescapeSuffix = this.unescapePrefix ? "" : c || "", this.nestingPrefix = d ? y(d) : p || y("$t("), this.nestingSuffix = m ? y(m) : h || y(")"), this.nestingOptionsSeparator = f || ",", this.maxReplaces = g || 1e3, this.alwaysFormat = void 0 !== b && b, this.resetRegExp()
                }
                reset() {
                    this.options && this.init(this.options)
                }
                resetRegExp() {
                    let e = (e, t) => e && e.source === t ? (e.lastIndex = 0, e) : RegExp(t, "g");
                    this.regexp = e(this.regexp, `${this.prefix}(.+?)${this.suffix}`), this.regexpUnescape = e(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`), this.nestingRegexp = e(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`)
                }
                interpolate(e, t, n, i) {
                    let r, o, s;
                    let a = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {},
                        c = e => {
                            if (0 > e.indexOf(this.formatSeparator)) {
                                let r = K(t, a, e, this.options.keySeparator, this.options.ignoreJSONStructure);
                                return this.alwaysFormat ? this.format(r, void 0, n, {
                                    ...i,
                                    ...t,
                                    interpolationkey: e
                                }) : r
                            }
                            let r = e.split(this.formatSeparator),
                                o = r.shift().trim(),
                                s = r.join(this.formatSeparator).trim();
                            return this.format(K(t, a, o, this.options.keySeparator, this.options.ignoreJSONStructure), s, n, {
                                ...i,
                                ...t,
                                interpolationkey: o
                            })
                        };
                    this.resetRegExp();
                    let u = i && i.missingInterpolationHandler || this.options.missingInterpolationHandler,
                        d = i && i.interpolation && void 0 !== i.interpolation.skipOnVariables ? i.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
                    return [{
                        regex: this.regexpUnescape,
                        safeValue: e => W(e)
                    }, {
                        regex: this.regexp,
                        safeValue: e => this.escapeValue ? W(this.escape(e)) : W(e)
                    }].forEach(t => {
                        for (s = 0; r = t.regex.exec(e);) {
                            let n = r[1].trim();
                            if (void 0 === (o = c(n))) {
                                if ("function" == typeof u) {
                                    let t = u(e, r, i);
                                    o = "string" == typeof t ? t : ""
                                } else if (i && Object.prototype.hasOwnProperty.call(i, n)) o = "";
                                else if (d) {
                                    o = r[0];
                                    continue
                                } else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`), o = ""
                            } else "string" == typeof o || this.useRawValueToEscape || (o = l(o));
                            let a = t.safeValue(o);
                            if (e = e.replace(r[0], a), d ? (t.regex.lastIndex += o.length, t.regex.lastIndex -= r[0].length) : t.regex.lastIndex = 0, ++s >= this.maxReplaces) break
                        }
                    }), e
                }
                nest(e, t) {
                    let n, i, r, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = (e, t) => {
                            let n = this.nestingOptionsSeparator;
                            if (0 > e.indexOf(n)) return e;
                            let i = e.split(RegExp(`${n}[ ]*{`)),
                                o = `{${i[1]}`;
                            e = i[0];
                            let s = (o = this.interpolate(o, r)).match(/'/g),
                                a = o.match(/"/g);
                            (s && s.length % 2 == 0 && !a || a.length % 2 != 0) && (o = o.replace(/'/g, '"'));
                            try {
                                r = JSON.parse(o), t && (r = {
                                    ...t,
                                    ...r
                                })
                            } catch (t) {
                                return this.logger.warn(`failed parsing options string in nesting for key ${e}`, t), `${e}${n}${o}`
                            }
                            return r.defaultValue && r.defaultValue.indexOf(this.prefix) > -1 && delete r.defaultValue, e
                        };
                    for (; n = this.nestingRegexp.exec(e);) {
                        let a = [];
                        (r = (r = {
                            ...o
                        }).replace && "string" != typeof r.replace ? r.replace : r).applyPostProcessor = !1, delete r.defaultValue;
                        let c = !1;
                        if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                            let e = n[1].split(this.formatSeparator).map(e => e.trim());
                            n[1] = e.shift(), a = e, c = !0
                        }
                        if ((i = t(s.call(this, n[1].trim(), r), r)) && n[0] === e && "string" != typeof i) return i;
                        "string" != typeof i && (i = l(i)), i || (this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`), i = ""), c && (i = a.reduce((e, t) => this.format(e, t, o.lng, {
                            ...o,
                            interpolationkey: n[1].trim()
                        }), i.trim())), e = e.replace(n[0], i), this.regexp.lastIndex = 0
                    }
                    return e
                }
            }
            let V = e => {
                let t = e.toLowerCase().trim(),
                    n = {};
                if (e.indexOf("(") > -1) {
                    let i = e.split("(");
                    t = i[0].toLowerCase().trim();
                    let r = i[1].substring(0, i[1].length - 1);
                    "currency" === t && 0 > r.indexOf(":") ? n.currency || (n.currency = r.trim()) : "relativetime" === t && 0 > r.indexOf(":") ? n.range || (n.range = r.trim()) : r.split(";").forEach(e => {
                        if (e) {
                            let [t, ...i] = e.split(":"), r = i.join(":").trim().replace(/^'+|'+$/g, ""), o = t.trim();
                            n[o] || (n[o] = r), "false" === r && (n[o] = !1), "true" === r && (n[o] = !0), isNaN(r) || (n[o] = parseInt(r, 10))
                        }
                    })
                }
                return {
                    formatName: t,
                    formatOptions: n
                }
            },
                Y = e => {
                    let t = {};
                    return (n, i, r) => {
                        let o = r;
                        r && r.interpolationkey && r.formatParams && r.formatParams[r.interpolationkey] && r[r.interpolationkey] && (o = {
                            ...o,
                            [r.interpolationkey]: void 0
                        });
                        let s = i + JSON.stringify(o),
                            a = t[s];
                        return a || (a = e(x(i), r), t[s] = a), a(n)
                    }
                };
            class _ {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    this.logger = o.create("formatter"), this.options = e, this.formats = {
                        number: Y((e, t) => {
                            let n = new Intl.NumberFormat(e, {
                                ...t
                            });
                            return e => n.format(e)
                        }),
                        currency: Y((e, t) => {
                            let n = new Intl.NumberFormat(e, {
                                ...t,
                                style: "currency"
                            });
                            return e => n.format(e)
                        }),
                        datetime: Y((e, t) => {
                            let n = new Intl.DateTimeFormat(e, {
                                ...t
                            });
                            return e => n.format(e)
                        }),
                        relativetime: Y((e, t) => {
                            let n = new Intl.RelativeTimeFormat(e, {
                                ...t
                            });
                            return e => n.format(e, t.range || "day")
                        }),
                        list: Y((e, t) => {
                            let n = new Intl.ListFormat(e, {
                                ...t
                            });
                            return e => n.format(e)
                        })
                    }, this.init(e)
                }
                init(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        interpolation: {}
                    },
                        n = t.interpolation;
                    this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ","
                }
                add(e, t) {
                    this.formats[e.toLowerCase().trim()] = t
                }
                addCached(e, t) {
                    this.formats[e.toLowerCase().trim()] = Y(t)
                }
                format(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        r = t.split(this.formatSeparator);
                    if (r.length > 1 && r[0].indexOf("(") > 1 && 0 > r[0].indexOf(")") && r.find(e => e.indexOf(")") > -1)) {
                        let e = r.findIndex(e => e.indexOf(")") > -1);
                        r[0] = [r[0], ...r.splice(1, e)].join(this.formatSeparator)
                    }
                    return r.reduce((e, t) => {
                        let {
                            formatName: r,
                            formatOptions: o
                        } = V(t);
                        if (this.formats[r]) {
                            let t = e;
                            try {
                                let s = i && i.formatParams && i.formatParams[i.interpolationkey] || {},
                                    a = s.locale || s.lng || i.locale || i.lng || n;
                                t = this.formats[r](e, a, {
                                    ...o,
                                    ...i,
                                    ...s
                                })
                            } catch (e) {
                                this.logger.warn(e)
                            }
                            return t
                        }
                        return this.logger.warn(`there was no format function for ${r}`), e
                    }, e)
                }
            }
            let H = (e, t) => {
                void 0 !== e.pending[t] && (delete e.pending[t], e.pendingCount--)
            };
            class G extends s {
                constructor(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    super(), this.backend = e, this.store = t, this.services = n, this.languageUtils = n.languageUtils, this.options = i, this.logger = o.create("backendConnector"), this.waitingReads = [], this.maxParallelReads = i.maxParallelReads || 10, this.readingCalls = 0, this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5, this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350, this.state = {}, this.queue = [], this.backend && this.backend.init && this.backend.init(n, i.backend, i)
                }
                queueLoad(e, t, n, i) {
                    let r = {},
                        o = {},
                        s = {},
                        a = {};
                    return e.forEach(e => {
                        let i = !0;
                        t.forEach(t => {
                            let s = `${e}|${t}`;
                            !n.reload && this.store.hasResourceBundle(e, t) ? this.state[s] = 2 : this.state[s] < 0 || (1 === this.state[s] ? void 0 === o[s] && (o[s] = !0) : (this.state[s] = 1, i = !1, void 0 === o[s] && (o[s] = !0), void 0 === r[s] && (r[s] = !0), void 0 === a[t] && (a[t] = !0)))
                        }), i || (s[e] = !0)
                    }), (Object.keys(r).length || Object.keys(o).length) && this.queue.push({
                        pending: o,
                        pendingCount: Object.keys(o).length,
                        loaded: {},
                        errors: [],
                        callback: i
                    }), {
                        toLoad: Object.keys(r),
                        pending: Object.keys(o),
                        toLoadLanguages: Object.keys(s),
                        toLoadNamespaces: Object.keys(a)
                    }
                }
                loaded(e, t, n) {
                    let i = e.split("|"),
                        r = i[0],
                        o = i[1];
                    t && this.emit("failedLoading", r, o, t), !t && n && this.store.addResourceBundle(r, o, n, void 0, void 0, {
                        skipCopy: !0
                    }), this.state[e] = t ? -1 : 2, t && n && (this.state[e] = 0);
                    let s = {};
                    this.queue.forEach(n => {
                        f(n.loaded, [r], o), H(n, e), t && n.errors.push(t), 0 !== n.pendingCount || n.done || (Object.keys(n.loaded).forEach(e => {
                            s[e] || (s[e] = {});
                            let t = n.loaded[e];
                            t.length && t.forEach(t => {
                                void 0 === s[e][t] && (s[e][t] = !0)
                            })
                        }), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                    }), this.emit("loaded", s), this.queue = this.queue.filter(e => !e.done)
                }
                read(e, t, n) {
                    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this.retryTimeout,
                        o = arguments.length > 5 ? arguments[5] : void 0;
                    if (!e.length) return o(null, {});
                    if (this.readingCalls >= this.maxParallelReads) {
                        this.waitingReads.push({
                            lng: e,
                            ns: t,
                            fcName: n,
                            tried: i,
                            wait: r,
                            callback: o
                        });
                        return
                    }
                    this.readingCalls++;
                    let s = (s, a) => {
                        if (this.readingCalls--, this.waitingReads.length > 0) {
                            let e = this.waitingReads.shift();
                            this.read(e.lng, e.ns, e.fcName, e.tried, e.wait, e.callback)
                        }
                        if (s && a && i < this.maxRetries) {
                            setTimeout(() => {
                                this.read.call(this, e, t, n, i + 1, 2 * r, o)
                            }, r);
                            return
                        }
                        o(s, a)
                    },
                        a = this.backend[n].bind(this.backend);
                    if (2 === a.length) {
                        try {
                            let n = a(e, t);
                            n && "function" == typeof n.then ? n.then(e => s(null, e)).catch(s) : s(null, n)
                        } catch (e) {
                            s(e)
                        }
                        return
                    }
                    return a(e, t, s)
                }
                prepareLoading(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 ? arguments[3] : void 0;
                    if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), i && i();
                    "string" == typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" == typeof t && (t = [t]);
                    let r = this.queueLoad(e, t, n, i);
                    if (!r.toLoad.length) return r.pending.length || i(), null;
                    r.toLoad.forEach(e => {
                        this.loadOne(e)
                    })
                }
                load(e, t, n) {
                    this.prepareLoading(e, t, {}, n)
                }
                reload(e, t, n) {
                    this.prepareLoading(e, t, {
                        reload: !0
                    }, n)
                }
                loadOne(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = e.split("|"),
                        i = n[0],
                        r = n[1];
                    this.read(i, r, "read", void 0, void 0, (n, o) => {
                        n && this.logger.warn(`${t}loading namespace ${r} for language ${i} failed`, n), !n && o && this.logger.log(`${t}loaded namespace ${r} for language ${i}`, o), this.loaded(e, n, o)
                    })
                }
                saveMissing(e, t, n, i, r) {
                    let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {},
                        s = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => { };
                    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(t)) {
                        this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`, "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");
                        return
                    }
                    if (null != n && "" !== n) {
                        if (this.backend && this.backend.create) {
                            let a = {
                                ...o,
                                isUpdate: r
                            },
                                l = this.backend.create.bind(this.backend);
                            if (l.length < 6) try {
                                let r;
                                (r = 5 === l.length ? l(e, t, n, i, a) : l(e, t, n, i)) && "function" == typeof r.then ? r.then(e => s(null, e)).catch(s) : s(null, r)
                            } catch (e) {
                                s(e)
                            } else l(e, t, n, i, s, a)
                        }
                        e && e[0] && this.store.addResource(e[0], t, n, i)
                    }
                }
            }
            let $ = () => ({
                debug: !1,
                initImmediate: !0,
                ns: ["translation"],
                defaultNS: ["translation"],
                fallbackLng: ["dev"],
                fallbackNS: !1,
                supportedLngs: !1,
                nonExplicitSupportedLngs: !1,
                load: "all",
                preload: !1,
                simplifyPluralSuffix: !0,
                keySeparator: ".",
                nsSeparator: ":",
                pluralSeparator: "_",
                contextSeparator: "_",
                partialBundledLanguages: !1,
                saveMissing: !1,
                updateMissing: !1,
                saveMissingTo: "fallback",
                saveMissingPlurals: !0,
                missingKeyHandler: !1,
                missingInterpolationHandler: !1,
                postProcess: !1,
                postProcessPassResolved: !1,
                returnNull: !1,
                returnEmptyString: !0,
                returnObjects: !1,
                joinArrays: !1,
                returnedObjectHandler: !1,
                parseMissingKeyHandler: !1,
                appendNamespaceToMissingKey: !1,
                appendNamespaceToCIMode: !1,
                overloadTranslationOptionHandler: e => {
                    let t = {};
                    if ("object" == typeof e[1] && (t = e[1]), "string" == typeof e[1] && (t.defaultValue = e[1]), "string" == typeof e[2] && (t.tDescription = e[2]), "object" == typeof e[2] || "object" == typeof e[3]) {
                        let n = e[3] || e[2];
                        Object.keys(n).forEach(e => {
                            t[e] = n[e]
                        })
                    }
                    return t
                },
                interpolation: {
                    escapeValue: !0,
                    format: e => e,
                    prefix: "{{",
                    suffix: "}}",
                    formatSeparator: ",",
                    unescapePrefix: "-",
                    nestingPrefix: "$t(",
                    nestingSuffix: ")",
                    nestingOptionsSeparator: ",",
                    maxReplaces: 1e3,
                    skipOnVariables: !0
                }
            }),
                J = e => ("string" == typeof e.ns && (e.ns = [e.ns]), "string" == typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" == typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.supportedLngs && 0 > e.supportedLngs.indexOf("cimode") && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e),
                Z = () => { },
                Q = e => {
                    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t => {
                        "function" == typeof e[t] && (e[t] = e[t].bind(e))
                    })
                };
            class X extends s {
                constructor() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    if (super(), this.options = J(e), this.services = {}, this.logger = o, this.modules = {
                        external: []
                    }, Q(this), t && !this.isInitialized && !e.isClone) {
                        if (!this.options.initImmediate) return this.init(e, t), this;
                        setTimeout(() => {
                            this.init(e, t)
                        }, 0)
                    }
                }
                init() {
                    var e = this;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    this.isInitializing = !0, "function" == typeof t && (n = t, t = {}), !t.defaultNS && !1 !== t.defaultNS && t.ns && ("string" == typeof t.ns ? t.defaultNS = t.ns : 0 > t.ns.indexOf("translation") && (t.defaultNS = t.ns[0]));
                    let i = $();
                    this.options = {
                        ...i,
                        ...this.options,
                        ...J(t)
                    }, "v1" !== this.options.compatibilityAPI && (this.options.interpolation = {
                        ...i.interpolation,
                        ...this.options.interpolation
                    }), void 0 !== t.keySeparator && (this.options.userDefinedKeySeparator = t.keySeparator), void 0 !== t.nsSeparator && (this.options.userDefinedNsSeparator = t.nsSeparator);
                    let r = e => e ? "function" == typeof e ? new e : e : null;
                    if (!this.options.isClone) {
                        let t;
                        this.modules.logger ? o.init(r(this.modules.logger), this.options) : o.init(null, this.options), this.modules.formatter ? t = this.modules.formatter : "undefined" != typeof Intl && (t = _);
                        let n = new q(this.options);
                        this.store = new z(this.options.resources, this.options);
                        let s = this.services;
                        s.logger = o, s.resourceStore = this.store, s.languageUtils = n, s.pluralResolver = new j(n, {
                            prepend: this.options.pluralSeparator,
                            compatibilityJSON: this.options.compatibilityJSON,
                            simplifyPluralSuffix: this.options.simplifyPluralSuffix
                        }), t && (!this.options.interpolation.format || this.options.interpolation.format === i.interpolation.format) && (s.formatter = r(t), s.formatter.init(s, this.options), this.options.interpolation.format = s.formatter.format.bind(s.formatter)), s.interpolator = new U(this.options), s.utils = {
                            hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                        }, s.backendConnector = new G(r(this.modules.backend), s.resourceStore, s, this.options), s.backendConnector.on("*", function (t) {
                            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            e.emit(t, ...i)
                        }), this.modules.languageDetector && (s.languageDetector = r(this.modules.languageDetector), s.languageDetector.init && s.languageDetector.init(s, this.options.detection, this.options)), this.modules.i18nFormat && (s.i18nFormat = r(this.modules.i18nFormat), s.i18nFormat.init && s.i18nFormat.init(this)), this.translator = new B(this.services, this.options), this.translator.on("*", function (t) {
                            for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                            e.emit(t, ...i)
                        }), this.modules.external.forEach(e => {
                            e.init && e.init(this)
                        })
                    }
                    if (this.format = this.options.interpolation.format, n || (n = Z), this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                        let e = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                        e.length > 0 && "dev" !== e[0] && (this.options.lng = e[0])
                    }
                    this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined"), ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"].forEach(t => {
                        this[t] = function () {
                            return e.store[t](...arguments)
                        }
                    }), ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"].forEach(t => {
                        this[t] = function () {
                            return e.store[t](...arguments), e
                        }
                    });
                    let s = a(),
                        l = () => {
                            let e = (e, t) => {
                                this.isInitializing = !1, this.isInitialized && !this.initializedStoreOnce && this.logger.warn("init: i18next is already initialized. You should call init just once!"), this.isInitialized = !0, this.options.isClone || this.logger.log("initialized", this.options), this.emit("initialized", this.options), s.resolve(t), n(e, t)
                            };
                            if (this.languages && "v1" !== this.options.compatibilityAPI && !this.isInitialized) return e(null, this.t.bind(this));
                            this.changeLanguage(this.options.lng, e)
                        };
                    return this.options.resources || !this.options.initImmediate ? l() : setTimeout(l, 0), s
                }
                loadResources(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z,
                        n = t,
                        i = "string" == typeof e ? e : this.language;
                    if ("function" == typeof e && (n = e), !this.options.resources || this.options.partialBundledLanguages) {
                        if (i && "cimode" === i.toLowerCase() && (!this.options.preload || 0 === this.options.preload.length)) return n();
                        let e = [],
                            t = t => {
                                t && "cimode" !== t && this.services.languageUtils.toResolveHierarchy(t).forEach(t => {
                                    "cimode" !== t && 0 > e.indexOf(t) && e.push(t)
                                })
                            };
                        i ? t(i) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e => t(e)), this.options.preload && this.options.preload.forEach(e => t(e)), this.services.backendConnector.load(e, this.options.ns, e => {
                            e || this.resolvedLanguage || !this.language || this.setResolvedLanguage(this.language), n(e)
                        })
                    } else n(null)
                }
                reloadResources(e, t, n) {
                    let i = a();
                    return "function" == typeof e && (n = e, e = void 0), "function" == typeof t && (n = t, t = void 0), e || (e = this.languages), t || (t = this.options.ns), n || (n = Z), this.services.backendConnector.reload(e, t, e => {
                        i.resolve(), n(e)
                    }), i
                }
                use(e) {
                    if (!e) throw Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                    if (!e.type) throw Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                    return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && E.addPostProcessor(e), "formatter" === e.type && (this.modules.formatter = e), "3rdParty" === e.type && this.modules.external.push(e), this
                }
                setResolvedLanguage(e) {
                    if (e && this.languages && !(["cimode", "dev"].indexOf(e) > -1))
                        for (let e = 0; e < this.languages.length; e++) {
                            let t = this.languages[e];
                            if (!(["cimode", "dev"].indexOf(t) > -1) && this.store.hasLanguageSomeTranslations(t)) {
                                this.resolvedLanguage = t;
                                break
                            }
                        }
                }
                changeLanguage(e, t) {
                    var n = this;
                    this.isLanguageChangingTo = e;
                    let i = a();
                    this.emit("languageChanging", e);
                    let r = e => {
                        this.language = e, this.languages = this.services.languageUtils.toResolveHierarchy(e), this.resolvedLanguage = void 0, this.setResolvedLanguage(e)
                    },
                        o = (e, o) => {
                            o ? (r(o), this.translator.changeLanguage(o), this.isLanguageChangingTo = void 0, this.emit("languageChanged", o), this.logger.log("languageChanged", o)) : this.isLanguageChangingTo = void 0, i.resolve(function () {
                                return n.t(...arguments)
                            }), t && t(e, function () {
                                return n.t(...arguments)
                            })
                        },
                        s = t => {
                            e || t || !this.services.languageDetector || (t = []);
                            let n = "string" == typeof t ? t : this.services.languageUtils.getBestMatchFromCodes(t);
                            n && (this.language || r(n), this.translator.language || this.translator.changeLanguage(n), this.services.languageDetector && this.services.languageDetector.cacheUserLanguage && this.services.languageDetector.cacheUserLanguage(n)), this.loadResources(n, e => {
                                o(e, n)
                            })
                        };
                    return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? 0 === this.services.languageDetector.detect.length ? this.services.languageDetector.detect().then(s) : this.services.languageDetector.detect(s) : s(e) : s(this.services.languageDetector.detect()), i
                }
                getFixedT(e, t, n) {
                    var i = this;
                    let r = function (e, t) {
                        let o, s;
                        if ("object" != typeof t) {
                            for (var a = arguments.length, l = Array(a > 2 ? a - 2 : 0), c = 2; c < a; c++) l[c - 2] = arguments[c];
                            o = i.options.overloadTranslationOptionHandler([e, t].concat(l))
                        } else o = {
                            ...t
                        };
                        o.lng = o.lng || r.lng, o.lngs = o.lngs || r.lngs, o.ns = o.ns || r.ns, "" !== o.keyPrefix && (o.keyPrefix = o.keyPrefix || n || r.keyPrefix);
                        let u = i.options.keySeparator || ".";
                        return s = o.keyPrefix && Array.isArray(e) ? e.map(e => `${o.keyPrefix}${u}${e}`) : o.keyPrefix ? `${o.keyPrefix}${u}${e}` : e, i.t(s, o)
                    };
                    return "string" == typeof e ? r.lng = e : r.lngs = e, r.ns = t, r.keyPrefix = n, r
                }
                t() {
                    return this.translator && this.translator.translate(...arguments)
                }
                exists() {
                    return this.translator && this.translator.exists(...arguments)
                }
                setDefaultNamespace(e) {
                    this.options.defaultNS = e
                }
                hasLoadedNamespace(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                    if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                    let n = t.lng || this.resolvedLanguage || this.languages[0],
                        i = !!this.options && this.options.fallbackLng,
                        r = this.languages[this.languages.length - 1];
                    if ("cimode" === n.toLowerCase()) return !0;
                    let o = (e, t) => {
                        let n = this.services.backendConnector.state[`${e}|${t}`];
                        return -1 === n || 0 === n || 2 === n
                    };
                    if (t.precheck) {
                        let e = t.precheck(this, o);
                        if (void 0 !== e) return e
                    }
                    return !!(this.hasResourceBundle(n, e) || !this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages || o(n, e) && (!i || o(r, e)))
                }
                loadNamespaces(e, t) {
                    let n = a();
                    return this.options.ns ? ("string" == typeof e && (e = [e]), e.forEach(e => {
                        0 > this.options.ns.indexOf(e) && this.options.ns.push(e)
                    }), this.loadResources(e => {
                        n.resolve(), t && t(e)
                    }), n) : (t && t(), Promise.resolve())
                }
                loadLanguages(e, t) {
                    let n = a();
                    "string" == typeof e && (e = [e]);
                    let i = this.options.preload || [],
                        r = e.filter(e => 0 > i.indexOf(e) && this.services.languageUtils.isSupportedCode(e));
                    return r.length ? (this.options.preload = i.concat(r), this.loadResources(e => {
                        n.resolve(), t && t(e)
                    }), n) : (t && t(), Promise.resolve())
                }
                dir(e) {
                    return (e || (e = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), e) ? ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam", "ckb"].indexOf((this.services && this.services.languageUtils || new q($())).getLanguagePartFromCode(e)) > -1 || e.toLowerCase().indexOf("-arab") > 1 ? "rtl" : "ltr" : "rtl"
                }
                static createInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    return new X(e, t)
                }
                cloneInstance() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Z,
                        n = e.forkResourceStore;
                    n && delete e.forkResourceStore;
                    let i = {
                        ...this.options,
                        ...e,
                        isClone: !0
                    },
                        r = new X(i);
                    return (void 0 !== e.debug || void 0 !== e.prefix) && (r.logger = r.logger.clone(e)), ["store", "services", "language"].forEach(e => {
                        r[e] = this[e]
                    }), r.services = {
                        ...this.services
                    }, r.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    }, n && (r.store = new z(this.store.data, i), r.services.resourceStore = r.store), r.translator = new B(r.services, i), r.translator.on("*", function (e) {
                        for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        r.emit(e, ...n)
                    }), r.init(i, t), r.translator.options = i, r.translator.backendConnector.services.utils = {
                        hasLoadedNamespace: r.hasLoadedNamespace.bind(r)
                    }, r
                }
                toJSON() {
                    return {
                        options: this.options,
                        store: this.store,
                        language: this.language,
                        languages: this.languages,
                        resolvedLanguage: this.resolvedLanguage
                    }
                }
            }
            let ee = X.createInstance();
            ee.createInstance = X.createInstance, ee.createInstance, ee.dir, ee.init, ee.loadResources, ee.reloadResources, ee.use, ee.changeLanguage, ee.getFixedT, ee.t, ee.exists, ee.setDefaultNamespace, ee.hasLoadedNamespace, ee.loadNamespaces, ee.loadLanguages;
            var et = n(67421),
                en = JSON.parse('{"translation":{"aboutUs":{"culture":{"description":"Мы считаем, что любой успех в AML Zapex обусловлен двумя вещами: нашими людьми и нашей культурой.","items":[{"button":"Попробуйте AML Zapex сейчас","description1":"Наша цель – создать честный и прозрачный криптовалютный рынок и сделать инструмент для защиты своей репутации и активов, доступный для всех.\\n","title":"Наша миссия"},{"button":"Станьте частью команды","description":"Сегодня команда из более чем {{specialistsCount}} специалистов в четырех разных офисах (Киев, Лондон, Гётеборг и Гонконг) работает над созданием и развитием сервиса.","title":"Люди"},{"button":"Подробнее о проекте","description":"Наш алгоритм постоянно совершенствуется и анализирует более 10 тысяч открытых источников и <b> 2,5 тысячи </b> спам-адресов в режиме реального времени.","title":"Технологии"}],"title":"Наша культура"},"experts":{"title":"Наши эксперты"},"main":{"description":"Онлайн оценка криптоадресов и транзакций, основана в 2019 году командой специалистов RegTech в соответствии с международными рекомендациями FATF"},"products":{"items":[{"button":"Попробуйте Safe3 сейчас","description":"Децентрализованный кошелек Web 3.0. Первый криптокошелек со встроенным модулем AML. Одно приложение для всех криптовалют. Все прозрачно и безопасно."},{"button":"Подробнее о PureFi","description":"Протокол PureFi позволяет Dapps приложениям полностью соответствовать локальным и глобальным нормам, сохраняя при этом децентрализацию и анонимность пользователей.\\n\\nAML Zapex разработан  в партнерстве с Hacken Foundation для решения полного цикла аналитики криптоактивов и процедур AML/KYC для инфраструктуры Web3."}],"title":"Другие наши продукты"}},"analyze":{"items":{"green":{"bridge":{"description":"Субъекты, обеспечивающие передачу активов через разные блокчейны. Эти соединения позволяют перемещать активы, не торгуя ими, что отличает мосты от децентрализованных бирж.","title":"Bridge"},"exchange":{"description":"Организация позволяет пользователям покупать, продавать и торговать криптовалютами, обладая торговыми лицензиями, которые включают следующие аспекты услуг:<br /> —Депозитарные, брокерские или другие связанные финансовые услуги, которые предоставляют услуги обмена, где взаимодействуют участники с центральной стороной.<br /><br /> И не включает:<br /> — Лицензии на неспецифические финансовые услуги и юрисдикции, включенные в список FATF.<br /><br /> Они представляют собой наиболее важную и наиболее используемую категорию субъектов в индустрии криптовалют, на которую приходится 90% всех средств, отправленных через эти сервисы.","title":"Exchange"},"iCO":{"description":"Организация, которая занимается краудфандингом своего проекта, продавая свою новоиспеченную криптовалюту инвесторам в обмен на фиатную валюту или более распространенные криптовалюты, такие как биткойн и эфир.<br /><br /> Существует много законных примеров таких предложений, но также и много случаев, где злоумышленники собирают средства через ICO, затем присваивают деньги и исчезают.","title":"ICO"},"marketplace":{"description":"Монеты, использованные для оплаты законной деятельности.","title":"Marketplace"},"merchantServices":{"description":"Организация, которая позволяет компаниям принимать платежи от своих клиентов, также известная как платежные шлюзы или обработчики платежей.<br /><br /> Он часто облегчает конвертацию в местную фиатную валюту и перевод средств на банковский счет продавца.","title":"Merchant Services"},"miner":{"description":"Монеты, добытые майнерами и еще не перенаправленные.","title":"Miner"},"nFTPlatform":{"description":"Протоколы, предназначенные для выпуска, торговли и продажи NFT. Хотя они похожи на смарт-контракты или децентрализованные биржи, они классифицируются по своей основной функции.","title":"NFT Platform"},"nFTPlatformCollection":{"description":"Коллекции NFT на платформах, предназначенных для их выпуска, торговли и продажи. Классифицируются по их реальному назначению, несмотря на сходство со смарт-контрактами или децентрализованными биржами.","title":"NFT Platform Collection"},"other":{"description":"Монеты, полученные с помощью аирдропов, продажи токенов или другими способами.","title":"Other"},"p2PExchange":{"description":"Организация имеет лицензию на ведение бизнеса, связанного с предоставлением услуг по обмену криптовалюты, когда участники обмениваются напрямую друг с другом, без посредников.<br /><br /> Сюда не входят лицензии на неспецифические финансовые услуги и юрисдикции, которые в несотрудничающем списке FATF.","title":"P2P Exchange"},"paymentProcessor":{"description":"Монеты, связанные с платежными услугами.","title":"Payment Management"},"seizedAssets":{"description":"Криптоактивы, арестованные органами государственной власти.","title":"Seized Assets"},"wallet":{"description":"Онлайн кошелек - это сервис для хранения и совершения транзакций с криптовалютой. Кастодиальные кошельки - это один из типов онлайн кошельков, где сервис хранит приватные ключи пользователя, что может создать потенциальные риски мошенничества или недостаточной безопасности, но в целом репутабельные поставщики могут обеспечивать лучшую безопасность, чем сами неопытные пользователи.","title":"Wallet"}},"red":{"childExploitation":{"description":"Субъекты, связанные с эксплуатацией детей.","title":"Child Exploitation"},"darkMarket":{"description":"Монеты,  связанные с незаконной деятельностью.","title":"Dark Market"},"darkService":{"description":"Монеты, связанные с жестоким обращением с детьми, финансированием терроризма или торговлей наркотиками.","title":"Dark Service"},"enforcementAction":{"description":"Юридическое лицо подлежит судебному разбирательству с судебными органами.","title":"Enforcement action"},"fraudShop":{"description":"Субъект, который продает различные типы данных, включая личную информацию, данные кредитных карт и украденные учетные записи.<br /><br /> Мошеннические сделки обычно отличаются от рынков даркнета своим поведением, таким как постоянное пополнение депозитов и отсутствие входящих транзакций клиентам.","title":"Fraud Shop"},"fraudulentExchange":{"description":"Биржи, вовлеченные в аферы с выходом, незаконным поведением, или у которых средства были конфискованы органами государственной власти.","title":"Fraudulent Exchange"},"gambling":{"description":"Монеты, связанные с нелицензированными онлайн-играми.","title":"Gambling"},"highRiskJurisdiction":{"description":"Юрисдикция, внесенная в список несотрудничающих с FATF стран, имеет обширную злонамеренную криптовалютную деятельность или не имеет развитой нормативно-правовой базы.<br /><br /> Включая такие страны, как Иран, Венесуэла, Албания и Корейская Народно-Демократическая Республика, также известная как Северная Корея.","title":"High-Risk Jurisdiction"},"illegalService":{"description":"Монеты, связанные с незаконной деятельностью.","title":"Illegal Service"},"illicitActorOrganization":{"description":"Организация или физическое лицо, которое прямо или косвенно участвует в различных формах незаконной деятельности.<br /><br /> Они часто связаны с такими рискованными темами, как рынки даркнета, мошеннические транзакции, экстремистское финансирование и хакерство.","title":"Illicit Actor/Organization"},"malware":{"description":"Адреса, связанные с вредоносными программами, включая криптоджекеры, которые используют хост-компьютеры для майнинга. Другие типы вредоносных программ включают в себя клипперы, ботнеты, трояны и DDoS-кампании.","title":"Malware"},"mixer":{"description":"Монеты, пропущенные через миксер, чтобы затруднить или сделать невозможным отслеживание. Микcеры в основном используются для отмывания денег.","title":"Mixer"},"onlinePharmacy":{"description":"Организации, специализирующиеся на незаконной продаже неодобренных или рецептурных лекарств. Сравнимы с рынками даркнета, но могут работать как в даркнете, так и легально, что дает основание для отдельной классификации","title":"Online Pharmacy"},"ransom":{"description":"Монеты, полученные путем вымогательства или шантажа.","title":"Ransom"},"sanctions":{"description":"Субъекты, к которым применены санкции.","title":"Sanctions"},"scam":{"description":"Монеты, полученные путем обмана.","title":"Scam"},"specialMeasures":{"description":"Организации или адреса, определенные FinCEN как вызывающие большой риск по отмыванию денег. Контрмеры включают ведение документации, требования к отчетности и ограничения на переводы средств и управление счетами.<br /><br /> Область действия может распространяться на аналогичные органы в других странах или юрисдикциях по мере их реализации.","title":"Special Measures"},"stolenCoins":{"description":"Монеты, полученные путем хищения чужой криптовалюты.","title":"Stolen Coins"},"terrorismFinancing":{"description":"Субъекты, связанные с финансированием терроризма.","title":"Terrorism Financing"}},"yellow":{"aTM":{"description":"Монеты, полученные через оператора криптовалютного банкомата.","title":"ATM"},"dEX":{"description":"Блокчейн-приложение, которое облегчает торговлю криптовалютой и токенами с помощью автоматических смарт-контрактов.<br /><br /> Сделки на децентрализованной платформе являются одноранговыми и не имеют третьих лиц или центрального органа, кроме смарт-контракта, который исполняет условия сделки, что делает его популярным инструментом отмывания денег среди злоумышленников.","title":"DEX"},"exchangeHighRisk":{"description":"Субъект становится высокорисковым на основании следующих критериев:<br /><br /> Нет KYC: не требует абсолютно никакой информации о клиенте, прежде чем разрешать любой уровень депозита/снятия средств, или не предпринимает попыток проверить эту информацию.<br /><br /> Криминальные связи: уголовные обвинения юридического лица в связи с нарушениями AML/CFT.<br /><br /> Воздействие: высокий уровень подверженности рискованным услугам, таким как рынки даркнета, другие биржи с высоким риском или смешение определяется, как услуга, прямая подверженность высокому риску которой отличается на одно стандартное отклонение от среднего значения всех идентифицированных организаций по обмену за 12-месячный период.<br /><br /> Юрисдикция: базируется в юрисдикции со слабыми мерами AML/CFT.<br /><br /> Без лицензии: не имеет какой-либо конкретной лицензии на ведение торговли криптовалютой.","title":"Exchange | High Risk"},"infrastructureAsAService":{"description":"Организация, которая предлагает вычислительные и информационные услуги, включая, помимо прочего, VPN, VPS и регистрацию доменов.<br /><br /> Потенциально, это может представлять собой платеж провайдерам, ориентированным на конфиденциальность, который может быть использован в незаконных целях, но в в то же время может представлять собой платеж полностью законному бизнес-провайдеру.","title":"Infrastructure as a Service"},"lendingContract":{"description":"Блокчейн-приложение, которое позволяет пользователям одноранговым кредитовать и брать криптоактивы взаймы без взаимодействия с третьей стороной или центральным органом.","title":"Lending Contract"},"liquidityPools":{"description":"Смарт-контракты, в которых токены блокируются для обеспечения ликвидности.","title":"Liquidity Pools"},"p2PExchangeHighRisk":{"description":"Организация не имеет какой-либо специальной лицензии на ведение бизнеса, связанного с предоставлением услуг по обмену криптовалюты, когда участники обмениваются напрямую друг с другом, без посредников.<br /><br /> Сюда также входят организации, которые имеют лицензию, но находятся в перечисленных юрисдикциях, внесены в список несотрудничающих компаний FATF или не предоставляют KYC для транзакций на крупные суммы, что делает их привлекательными для отмывания денег.","title":"P2P Exchange | High Risk"},"privacyProtocol":{"description":"Протокол или объект, который использует функции конфиденциальности, такие как доказательства с нулевым разглашением, чтобы предоставить пользователям функции конфиденциальности.<br /><br /> Обеспечение прозрачности транзакций, но при этом адреса контрагентов остаются скрытыми.<br /><br /> Эта функция является поведением по умолчанию многих криптовалют, защищающих конфиденциальность, таких как Monero и Secret, а это означает, что получение доступа к этим активам не обязательно означает, что средства были смешаны или намеренно запутаны.","title":"Privacy Protocol"},"smartContract":{"description":"Функциональность блокчейна, который функционирует, как самоисполняющийся контракт, с условиями соглашения между покупателем и продавцом, записанными непосредственно в строках кода, исполняемых без необходимости участия третьей стороны.","title":"Smart Contract"},"tokenSmartContract":{"description":"Криптовалютный актив, построенный на другом блокчейне, который можно отправлять и получать с помощью криптокошелька.<br /><br /> Существуют различные технические стандарты согласованных правил, которые определяют дизайн, разработку, поведение и работу данного токена.","title":"Token Smart Contract"},"unnamedService":{"description":"Категория относится к неидентифицированным в настоящее время кластерам, которые демонстрируют поведение, ожидаемое от службы, по большому количеству адресов и транзакций.","title":"Unnamed Service"}}},"main":{"description":"Мы проводим анализ адресов на принадлежность к более чем 20 источникам риска, чтобы найти подозрительные транзакции и определить коэффициент риска. Все источники мы разбили на три категории.","title":"Что мы анализируем?"},"note":{"text1":"Присутствие <b>Dark Market, Dark Service, Illegal Service</b> – это плохой знак.","text2":"Рекомендуем провести дополнительные исследования, чтобы не потерять свои средства из-за блокировок.","title":"Будьте осторожны!"}},"b2b":{"contactForm":{"description":"Свяжитесь с нами, и наша команда ответит на ваши вопросы.","title":"Контактная форма"},"curiousAbout":{"button":"Узнать детали","description":"Наши AML эксперты готовы помочь вам разобраться в Complience.","title":"Готовы начать с AML Zapex"},"help":{"items":[{"button":"Свяжитесь с нами","description":"Наш автоматизированный и глубокий анализ транзакций (Know Your Transaction) помогает компаниям соответствовать требованиям AML/CFT.","title":"Как мы помогаем"},{"button":"Пример отчета","description":"Вы получите подробный отчет с оценкой риска транзакций и указанием всех источников. Это поможет как с корректными решениями, так и с соответствием всем требований.","title":"Расширенная отчетность"},{"description":"Мы проверим криптокошельки и транзакции на наличие “грязных” , отправим полный отчет+дадим пояснения.","title":"Проверяем криптокошельки"},{"button":"Свяжитесь с нами","description":"Мы поможем вам создать и заполнить все документы и отчеты для подачи в любые проверяющие органы/компании (SAR, CTR и другие)","title":"Помогаем с документами"},{"description":"Мы помогли более чем 200 компаниям соответствовать требованиям FATF/MiCA благодаря нашему KYT решению.","title":"Успешные кейсы"}],"title":"Помощь бизнесу в соблюдении требований FATF/MiCA"},"helpsWith":{"items":[{"description":"Наша оценка риска обеспечивает точность в 99.5% из трёх разных источников.","title":"Точность проверок 99.5%"},{"description":"Проверьте свой адрес один раз и получите доступ к бесплатным проверкам на всю жизнь.","title":"Неограниченные бесплатные проверки адресов"},{"description":"Непрерывный мониторинг кошелька с уведомлениями в реальном времени о всех входящих и исходящих транзакциях.","title":"Уведомления в реальном времени"},{"description":"AML Zapex занимается интеграцией, освобождая ваших разработчиков для выполнения основных задач.","description1":"Мы поможем вам настроить автоматическую проверку всех входящих транзакций.","description2":"Сокращение затрат на техническое обслуживание с вашей стороны, чтобы вы могли сосредоточиться на самом важном — на своем бизнесе.","title":"Помощь"},{"description":"AML Zapex упрощает проверку транзакций с помощью единой точки доступа, сокращая затраты на обслуживание для вашего бизнеса.","title":"Документация API"},{"description":"Контракт AML Zapex гарантирует регулирующим органам эффективное управление вопросами соответствия и безопасности.","description1":"Когда дело дойдет до интеграции AML Zapex, мы выполним всю работу за вас.","description2":"Таким образом, ваши разработчики смогут сосредоточиться на разработке, а не на интеграции соответствия.","title":"Договор AML"}],"title":"AML Zapex интеграция упрощает KYT Compliance"},"howMatch":{"agreementCompliant":"AML / KYT / KYC договор, соответствующий AMLD5, FATF и MiCA","amlTrainingForFree":"<b>Тренинг по AML комплаенсу и блокчейн аналитике </b> <small>стоимость $3500, включён в тарифный план бесплатно</small>","automaticChecksViaApi":"Автоматическая проверка через API","bestChoice":"Лучший выбор","business":{"checksCount":"15 000 АМЛ проверок","description":"Продвинутое решение для среднего бизнеса","otherServicesOff":"Скидка на остальные услуги AML Zapex 5%","price":"$3750","pricePerCheck":"$0.25 за проверку","referralProgram":"Участие в реферальной программе 5%","testApi":"Тестовое API для KYC +50$ на баланс"},"customerSupport":"Служба поддержки 24/7","dataSources":"5 источников данных","description":"Планы, разработанные для соответствия нужд вашего бизнеса","discuss":"Обсудить","enterprise":{"checksCount":"100 000 — 500 000 AML проверок","contactUsForQuote":"Обсудить","description":"Специальная цена и лицензия для крупнейших компаний","otherServicesOff":"Скидка на остальные услуги AML Zapex 10%","price":"Лицензия","pricePerCheck":"Индивидуальное ценообразование","referralProgram":"Участие в реферальной программе 15%","supportTeam":"Команда поддержки по комплаенсу и расследованиям","testApi":"Тестовое API для KYC +100$ на баланс"},"growth":{"checksCount":"5 000 AML проверок","description":"Базовое AML решение для растущего бизнеса","otherServicesOff":"Скидка на остальные услуги AML Zapex 5%","price":"$1500","pricePerCheck":"$0.30 за проверку","referralProgram":"Участие в реферальной программе 2%","testApi":"Тестовое API для KYC +50$ на баланс"},"monitoringWithAlerts":"Мониторинг адресов с алертами","note":"* По истечению календарного года с момента оплаты остаток не использованных проверок ануллируется","ofac":"Проверка на санкции OFAC","premium":{"checksCount":"50 000 АМЛ проверок","description":"Лучшая цена и юридическая поддержка для крупных компаний","otherServicesOff":"Скидка на остальные услуги AML Zapex 10%","price":"$10000","pricePerCheck":"$0.20 за проверку","referralProgram":"Участие в реферальной программе 15%","testApi":"Тестовое API для KYC +100$ на баланс"},"serviceClustering":"Кластеризация вашего сервиса","special":"Получите скидку 15% на все планы до 30 декабря 2023 года","supportedBlockchains":"25+ Поддерживаемых блокчейнов","title":"Сколько стоит ваше спокойствие?","yearly":"Ежегодно"},"main":{"button":"Записаться на демонстрацию","description":"Повышенная защита от рисков и мошенничества, соответствие Compliance и удобное API решение.","title":"Защитите свой бизнес с AML проверками (KYT)"},"reviews":{"description":"Узнайте о наших услугах от наших клиентах","eliTaranto":{"company":"Digital Assets at EQIBank","name":"Eli Taranto","position":"CEO","text":"\xabГлавной проблемой для нас было убедиться, что все транзакции полностью соответствуют требованиям. Это означало необходимость подключения нескольких баз данных, признаваемых регуляторами и эффективных для выявления мошенничества. Благодаря AML Zapex мы этого достигли и защитили наших клиентов от злоумышленников и блокировок из-за грязных крипто активов.\xbb."}},"risk":{"text":"Согласно нашей статистике, <b>каждый четвертый кошелек является подозрительным.</b><br/>\\nПотратив несколько долларов на проверку, вы можете защитить себя от значительных потерь."},"safety":{"items":[{"button":"Узнать больше","description":"Принимайте криптоплатежи или расплачивайтесь криптовалютой с партнерами. Все безопасно, так как мы проверяем все деньги, и к вам заходят только чистые средства.","title":"Криптоплатежи для вашего бизнеса"}],"title":"Безопасная система обработки криптоплатежей"},"statistics":{"description":"Упрощенный процесс подключения AML Zapex гарантирует быстрый запуск и защиту вашего бизнеса от финансовых и мошеннических рисков.","title":"Получите быструю интеграцию и эффективную защиту AML уже сегодня"}},"b2c":{"contact":{"button":"Спросить в\xa0Telegram","description":"Мы на связи 24/7, поэтому любой вопрос можем решить быстро и в формате живого общения","note":"Мы живые люди, поэтому ночью можем отвечать не так оперативно, как днем\xa0✌️","title":"Остались вопросы?"},"email":{"buttonDownload":"Скачать пример","placeholder":"Ваш е-мейл","title":"Оставляйте почту и мы отправим вам пример детального отчета"},"example":{"items":[{"button":"Проверить адрес","description":"Отчет можно показать регуляторам, как гарант, что у вас закрыт вопрос с AML политикой и решены спорные вопросы","title":"Отправляем детальный AML\xa0отчет"},{"button":"Узнать больше","description":"Мы анализируем кошельки на 25+ источников, чтобы найти подозрительные транзакции и определить коэффициент риска.","title":"Изучаем источники"},{"button":"Начать проверку","description":"Мы выдаем подробную информацию по каждому из источников","title":"Раскладываем по полочкам"},{"description":"Вы получаете информацию насколько рискованный кошелек и принимаете решение, стоит ли иметь с ним дело","title":"Оцениваем риски"},{"button":"Проверить адрес","description":"Покажем находится ли адрес в санкционных списках. Любое взаимодействие с такими адресами может обернуться штрафами, блокировкой или отзывом лицензии","title":"Проверяем санкционные списки"}],"title":"Пример анализа кошелька"},"main":{"button":"Начать проверку","description":"Мы проверяем кошельки и транзакции и показываем источники происхождения средств. Это помогает определить чистоту активов и защитить себя от мошенников и ворованных монет.","title":"Детальный анализ криптокошельков"},"pricing":{"items":[{"button":"Мне подходит","description":"Идеально для старта","note":"$3 за дополнительно проверку","price":"$3","spec1":"1 AML проверка","spec2":"Без срока действия","spec3":"AML Zapex поддержка 24/7","title":"Start"},{"button":"Я беру","description":"Выгодный пакет для холдеров","note":"$2.5 за одну проверку","price":"$25","spec1":"10 AML проверок","spec2":"1 год","spec3":"AML Zapex поддержка 24/7","title":"Optimal"},{"badge":"Лучший выбор","button":"Выгодно!","description":"Для трейдеров и инвесторов","note":"$2 за одну проверку","price":"$50","spec1":"25 AML проверок","spec2":"1 год","spec3":"AML Zapex поддержка 24/7","spec4":"Реферальная программа","title":"Pro"}],"title":"Цены"},"works":{"text":"Тут видео","title":"Как это работает ?"}},"b2cpage":{"checkAddress":{"messengers":{"description":"Достаточно простого сообщения в Telegram или WhatsApp, чтобы инициировать комплексную проверку вашего криптокошелька. Это удобный вариант для пользователей, предпочитающих платформы мгновенного обмена сообщениями.","title":"Мессенджеры"},"or":"или","signUp":"Зарегистрируйтесь для доступа к дополнительным функциям","title":"Как проверить свой адрес?","website":{"description":"Более традиционный способ: войдите в свою учетную запись на нашем сайте. Здесь вы можете приобрести и провести комплексную интерактивную проверку кошелька с подробными инструкциями и поддержкой. Или загрузите наше мобильное приложение для максимального удобства и доступности.","title":"Вебсайт или приложение"}},"checkYourWallet":"Проверить кошелек","faq":{"info":{"answer":"Мы отвечаем в течение 30 секунд","description":"Свяжитесь с нами в Telegram. Мы круглосуточно на связи, чтобы гарантировать комфорт для всех.","inTelegram":"Мы в Telegram","note":"Мы на связи <b>24/7</b>, однако не всегда можем быстро ответить ночью","title":"Вашего вопроса нет в списке?"},"title":"FAQs"},"hero":{"description":"Получение средств незаконного происхождения может привести к заморозке ваших средств","title":"Защита ваших кошельков от грязных денег"},"info":{"address":{"description":"Отслеживание в реальном времени всех транзакций, связанных с указанным адресом блокчейна, получение мгновенных уведомлений о входящих и исходящих транзакциях.","title":"Отслеживание адреса"},"investigations":{"description":"Просматривайте прямые и косвенные связи между заданным адресом и выявленными кластерами, общую сумму, отправленную на/из целевого кошелька, и расстояние до него.","title":"Расследования"},"suspicious":{"description":"Выявление активов, связанных с незаконной деятельностью, включая мошенничество, терроризм, вымогательство и другие преступления.","title":"Подозрительные транзакции"}},"investigation":{"download":"Скачать пример отчета в формате PDF","title":"Расследование адреса кошелька","videoTitle":"Смотреть видео с примером расследования"},"keepCrypto":{"description":"Выявление потенциальных рисков","items":{"avoid":{"description":"Регулярная проверка ваших криптокошельков и транзакций может значительно снизить риск заморозки ваших активов на биржах.","title":"Защита от приостановки счета на платформе CEX"},"boost":{"description":"Выявляйте и устраняйте потенциальные угрозы безопасности для защиты ваших инвестиций и активов.","title":"Усиление безопасности"},"stay":{"description":"Соблюдайте действующие правила и избегайте штрафов. Регулярные проверки помогут вам придерживаться требований законодательства, избегая штрафов и юридических проблем.","title":"Оставайтесь в рамках закона и избегайте неприятностей"}},"title":"Обеспечьте безопасность ваших криптовалют"},"moreProducts":{"items":{"amlTraining":{"description":"Специализированные программы обучения для криптовалютной индустрии","title":"Обучение AML"},"consulting":{"description":"Помощь криптовалютным компаниям с процедурами по борьбе с отмыванием денег (AML), обучением и настройкой банковских счетов","title":"Консультации"},"investigation":{"description":"Помощь в восстановлении похищенных криптовалют","title":"Расследование"},"kyc":{"description":"Проверяйте больше пользователей с помощью быстрой, безопасной, автоматизированной и эффективной верификации","title":"KYC"},"kyt":{"description":"Автоматическая проверка всех транзакций и кошельков через API","title":"KYT"}},"leaveRequest":"Оставить заявку","title":"Другие продукты и решения"},"orOnWeb":"или на сайте","pricing":{"checklist":["25+ поддерживаемых блокчейнов и их собственных активов и токенов","Ручная проверка транзакций и кошельков через панель управления","Приоритетное обслуживание 24/7","3 источника данных"],"forBusiness":"Для бизнеса","forPersonal":"Для личного","tariffs":{"advanced":{"badge":"Экономия 40%","checks":"100 проверок","perCheck":"1.8$ за каждую проверку","price":"$180"},"optimal":{"badge":"Экономия 17%","checks":"10 проверок","perCheck":"2,5$ за каждую проверку","price":"25$"},"pro":{"badge":"Экономия 33%","checks":"25 проверок","perCheck":"2$ за каждую проверку","price":"50$"},"start":{"checks":"3 Проверки","perCheck":"3$ за каждую проверку","price":"$9"}},"title":"Цены"},"risks":{"description":"В криптовалютном мире очень важно соответствовать действующим нормативно-правовым стандартам. Регулярные проверки помогут вам придерживаться требований законодательства, избегая штрафов и юридических проблем.","title":"Что мы анализируем?"},"secureCrypto":{"title":"Защитите свои крипту находя рискованные кошельки и транзакции"},"stats":{"description":"Оценка рисков AML Zapex основана на данных из многочисленных источников, что гарантирует наличие у нас самых надежных данных в отрасли","title":"23% кошельков хранят рискованные активы, в результате чего пользователи уязвимы для мошенничества, обмана или действий недобросовестных лиц."},"trustedCompliance":{"title":"Нам доверяют специалисты отделов контроля"},"weTrusted":{"title":"Мы являемся доверенными представителями"},"why":{"discussButton":"Давайте обсудим","integrated":{"description1":"Мы предлагаем оценку KYT/кошельков, KYC, AML и многое другое для криптовалютных компаний","description2":"Оценка рисков AML Zapex основана на данных из многочисленных источников, что гарантирует наличие у нас самых надежных данных в отрасли","description3":"Наши услуги и решения позволяют оптимизировать процессы в вашей компании и устраняют сложности, связанные с соблюдением требований законодательства","title":"Интегрированная платформа соблюдения нормативных требований"},"personalized":{"description1":"AML Zapex предлагает широкий спектр решений в сфере соответствия нормативным требованиям, адаптированных для каждого клиента.","description2":"Мы уверены, что соответствуем вашим требованиям, ведь мы помогли 300+ криптовалютным компаниям различных уровней в 25 юрисдикциях.","title":"Индивидуальный подход"},"title":"Почему AML Zapex?"}},"banners":{"title":"Баннеры"},"careers":{"advantages":{"items":{"dynamicEnvironment":{"description":"Мы процветаем благодаря изменениям и инновациям, обеспечивая, чтобы каждый день был увлекательным и полным новых возможностей.","title":"Динамичная среда"},"freedomToCreate":{"description":"Бери на себя ответственность, привноси свежие идеи и продвигай инновации в среде, которая тебе доверяет и дает возможности.","title":"Свобода творить"},"makeDifference":{"description":"Твоя работа будет напрямую способствовать созданию более безопасного и надежного цифрового мира.","title":"Меняй мир"},"supportiveCulture":{"description":"Сотрудничество и прозрачность – в основе нашей работы. Голос каждого услышан и ценится.","title":"Культура поддержки"},"workLifeBalance":{"description":"Мы ставим влияние выше жестких графиков — НИКАКОГО учета времени, только РЕЗУЛЬТАТЫ.","title":"Баланс между работой и личной жизнью"},"workWithExperts":{"description":"Присоединяйся к команде, которая ценит обмен знаниями, любознательность и постоянное обучение для расширения границ.","title":"Работай с экспертами"}},"title":"Почему тебе понравится работать с нами"},"employmentType":{"fullTime":"Полная занятость","partTime":"Частичная занятость"},"gallery":{"title":"Люди, которые воплощают это в жизнь"},"hero":{"description":"В AML Zapex каждая задача — это возможность для инноваций. Присоединяйся к целеустремленной команде, которая преобразует комплаенс в блокчейне с помощью передовых решений. Твои идеи, навыки и страсть могут оставить здесь значимый след.","openPositionsButton":"Посмотреть открытые вакансии","title":"Вместе мы формируем будущее аналитики и инноваций в блокчейне"},"hrInfo":{"gotQuestions":"Есть вопросы? Давайте обсудим"},"jobType":{"office":"Офис","remote":"Удаленно"},"location":{"ukraine":"Украина","worldwide":"По всему миру"},"numbers":{"byTheNumbers":"В цифрах","locations":"Локации","teammates":"Товарищи по команде","yearOverYearGrowth":"Годовой рост","yearsOnTheMarket":"Лет на рынке"},"openPositions":{"empty":"В данный момент нет открытых вакансий","title":"Открытые вакансии"},"openPositionsEntry":{"details":"Детали"},"stickyNav":{"aboutUs":"О нас","advantages":"Преимущества","openPositions":"Открытые вакансии"},"submitApplication":{"attachYourResumeOrCV":"Прикрепите резюме / CV","currentCompany":"Текущая компания","currentLocation":"Текущее местоположение","eMail":"Электронная почта","enterYourCompany":"Введите название компании","enterYourEmail":"Введите адрес эл. почты","enterYourFullName":"Введите ваше полное имя","enterYourLocation":"Введите ваше местоположение","enterYourPhone":"Введите ваш телефон","fileIsTooLarge":"Файл слишком большой (максимум {{maxFileSize}} мб)","fullName":"Полное имя","invalidEmail":"Неверный адрес электронной почты","phone":"Телефон","resumeOrCV":"Резюме / CV","submit":"Отправить","success":{"description":"Наша команда рассмотрит вашу заявку и скоро свяжется с вами.","title":"Спасибо за вашу заявку!"},"thisFieldIsRequired":"Это поле обязательно","title":"Отправить заявку"},"vacancy":{"applyForThisJob":"Подать заявку","backToOpenPositions":"Назад к открытым вакансиям"}},"certifications":{"90012015":{"description":"AML Zapex сертифицирован по ISO 9001, самому признанному в мире стандарту систем менеджмента качества. Эта сертификация гарантирует, что мы предоставляем стабильное качество, повышаем удовлетворенность клиентов, оптимизируем процессы, уменьшаем количество ошибок и повышаем производительность. В AML Zapex мы стремимся соответствовать самым высоким стандартам управления качеством.","title":"ISO9001"},"270012017":{"description":"AML Zapex получил сертификацию по ISO 27001, признанному во всем мире как ведущий стандарт систем управления информационной безопасностью. Эта сертификация устанавливает стратегическую основу для повышения уровня защиты информации, снижения кибер рисков и обеспечения соответствия нормативным требованиям.","title":"ISO27001"},"description":"В AML Zapex мы ставим безопасность наших пользователей на первое место и постоянно улучшаем наши подходы, чтобы обеспечить защиту и доверие.","title":"Сертификации AML Zapex"},"checking":{"addressPlaceholder":"Введите адрес","allFieldsRequired":"Все поля обязательны для заполнения","description":"Быстрое определение риска кошелька и источника его средств с помощью простого отчета","emailError":"Пожалуйста, введите действующий email адрес","emailPlaceholder":"Ваш e-mail","note":"После проверки мы отправим отчет на указанную вами электронную почту.","submitButton":"Проверить","successDescription":"Ваш запрос находится в обработке, результаты проверки будут получены на указанный адрес электронной почты в самое ближайшее время.","successTitle":"Спасибо!","title":"Проверка криптовалютных кошельков"},"consulting":{"consult":{"title":"Бесплатная консультация без каких-либо обязательств"},"faq":{"items":[{"content":"Несоблюдение требований AML/KYC может привести к отзыву лицензии регулирующими органами, большим штрафам или тюремному заключению. Кроме того, ваша учетная запись может быть заблокирована, а ваши активы могут быть заморожены финансовым учреждением или крипто биржей.","title":"Зачем нужно соблюдать AML/KYC требования?"},{"content":"Да, мы выдаем подтверждение того, что обучение в AML Zapex было пройдено. Вы можете предъявить этот сертификат аудиторам, регуляторам, банкам или криптовалютным биржам, когда они попросят подтвердить ваши знания в области AML/KYC или блокчейн-аналитики.","title":"Выдаете ли вы сертификаты о прохождении обучения?"},{"content":"В зависимости от запроса процесс подготовки процедур или других документов может занять от 1-2 недель до 1 месяца.","title":"Сколько времени это занимает?"},{"content":"В первую очередь мы покрываем страны ЕС и СНГ для лицензирования или заданий, связанных с AML/KYC. Тем не менее, другие страны могут быть рассмотрены в индивидуальном порядке. Кроме того, есть документы, которые необходимы только финансовым учреждениям или крипто биржам, а не местным регулирующим органам. В таком случае мы также сможем оказать Вам необходимую помощь.","title":"Какие страны вы можете охватить?"},{"content":"Мы можем предоставить вам аудит криптокошелька. Аудит будет включать в себя анализ источника средств, контрагентов, рисков и поведения выбранного криптокошелька. Такой аудит криптокошелька может понадобиться юридическим или физическим лицам при дальнейшем взаимодействии с банком или регулятором.","title":"Выдаете ли вы отчет о due diligence (аудите) криптокошельков?"}],"title":"Популярные вопросы"},"form":{"thankYou":{"description":"Мы ценим ваш интерес к нашим консультационным услугам по соблюдению криптовалютных норм. Ваш запрос был успешно отправлен, и наша команда готова помочь вам. В течение следующих 24 часов один из наших сертифицированных специалистов свяжется с вами, чтобы подробно обсудить ваш вопрос.","info":{"description":"Пока вы ждете, не стесняйтесь изучать наш <a href=\\"https://blog.AML Zapex.com\\">блог</a> , чтобы узнать о последних событиях и обновлениях в мире криптовалют.","title":"Будьте в курсе"},"title":"Спасибо, что обратились к AML Zapex"}},"main":{"description":"Мы консультируем клиентов, учитывая не только требования законодательства, но и рыночную практику и бизнес-аспект вопроса","leaveRequest":"Оставить заявку","title":"Помощь криптокомпаниям с оформлением документов"},"services":{"description":"В команде AML Zapex работают сертифицированные специалисты из различных областей, включая юриспруденцию, аудит, соблюдение требований AML/CFT и блокчейн-криминалистику. Мы предоставляем комплексные консультации, учитывающие требования законодательства, рыночную практику и бизнес-аспекты.","hide":"Скрыть","items":{"assisting":{"description":"Некоторые из наших клиентов испытывают трудности с открытием счета для криптоактивов или услуг, связанных с фиатными средствами.","fullDescription":"Некоторые из наших клиентов испытывают трудности с открытием счета для криптоактивов или услуг, связанных с фиатными средствами. Мы помогаем клиентам найти наиболее подходящую финансовую организацию или криптовалютную биржу, которая бы соответствовала ожиданиям клиента. Мы также помогаем клиентам в общении с выбранными финансовыми учреждениями, чтобы гарантировать быстрый и беспроблемный процесс открытия счета. Такая коммуникация может включать заполнение анкет, форм, связанных с AML, и т. д.","title":"Помощь в открытии счета в банках или на криптовалютных биржах"},"audit":{"description":"Некоторые из наших консультантов - юристы и аудиторы с опытом работы в ведущих юридических фирмах, Big4 и CEX, которые могут помочь нашим клиентам в решении юридических вопросов и предоставить исчерпывающие отчеты о комплексной юридической проверке.","fullDescription":"Некоторые из наших консультантов - юристы и аудиторы с опытом работы в ведущих юридических фирмах, Big4 и CEX, которые могут помочь нашим клиентам в решении юридических вопросов и предоставить исчерпывающие отчеты о комплексной юридической проверке. Например, мы можем подготовить отчет о комплексной юридической проверке криптокошельков, криптоинвестиционных компаний и т. д.","title":"Юридические и аудиторские услуги"},"drafting":{"description":"Мы помогаем криптовалютным компаниям разрабатывать и развивать внутренние AML/KYC процессы.","fullDescription":"Мы помогаем криптовалютным компаниям разрабатывать и развивать внутренние AML/KYC процессы. Например, мы разрабатываем и адаптируем внутреннюю AML процедуру с учетом бизнес-процессов клиента и текущей ситуации. Кроме того, мы помогаем клиентам составить заявление об оценке рисков, разработать политику информирования о нарушениях, политику противодействия коррупции и взяточничеству, а также правила мониторинга операций с криптоактивами. Все вышеперечисленные документы необходимы регуляторам или банкам/криптобиржам, если клиент планирует подать заявку на получение лицензии или открытие счета.","title":"Разработка AML/KYC процедур и мониторинга транзакций"},"trainings":{"description":"Мы обладаем практическим опытом работы в сфере AML с криптоактивами или блокчейном и хотим поделиться своими знаниями.","fullDescription":"Мы обладаем практическим опытом работы в сфере AML с криптоактивами или блокчейном и хотим поделиться своими знаниями. Поэтому мы постоянно разрабатываем тренинги для обучения наших клиентов новым рискам AML/CFT с акцентом на криптоактивы.<br /><br /> Важно отметить, что все регулируемые криптобизнесы, имеющие счета на CEX или банках, должны ежегодно проводить как минимум один тренинг по AML.","title":"Тренинги по AML/KYC и блокчейн аналитике"}},"learnMore":"Подробнее","title":"Наши сервисы"},"specialist":{"nikoDemchuk":{"description":"Niko Demchuk - опытный специалист по борьбе с отмыванием денег, сертифицированный Ассоциацией сертифицированных специалистов по борьбе с отмыванием денег (ACAMS). Получив степень магистра в области информационного IT-права, Niko является экспертом в области криптовалютного регулирования, AML и KYC-комплаенса. Имеет большой опыт работы в юридических фирмах и опыт работы с различными крипторегламентами. В настоящее время является юристом и руководителем отдела консалтинга компании AML Zapex.","name":"Niko Demchuk","position":"Работа с юристами и государственными органами"},"title":"Leading Сertified AML Specialist"}},"cookies":{"acceptButton":"Принять все файлы cookie","text":"Просматривая этот веб-сайт, вы разрешаете использование файлов cookie сторонними службами."},"copy":"Скопировать","cryptopayment":{"contact":{"button":"Спросить в Telegram","description":"У нас  гибкие условия и индивидуальный подход. Напишите нам в Telegram и мы подберем лучший вариант, в соответствии с требованиями вашего бизнеса","title":"Свяжитесь с нами, чтобы обсудить условия"},"howMatch":{"description":"Избегайте высоких комиссий с AML Zapex. Скрытые комиссии и возвратные платежи остались в прошлом","items":[{"label1":"Персональные кошельки","label2":"Кошельки продавцов","label3":"Фиатные счета","title":"Персональная плата для получения"},{"description":"Комиссия за отправку устанавливается, исходя из курса доллара США и расчитывается во время создания платежа","title":"Персональная плата для отправки"},{"title":"Комиссия за снятие фиатных средств составляет"}],"title":"Сколько стоит?"},"info":{"items":[{"button":"Узнать больше","description":"Помогаем бизнесу принимать криптовалютные платежи или рассчитываться криптовалютой с партнерами. Мы проверяем эти транзакции, и вы можете быть уверенны в чистоте активов.","title":"Что мы делаем ?"},{"title":"Получайте криптоплатежи из любой точки мира"},{"title":"Платежи в самых популярных криптовалютах"}]},"join":{"button":"Начать сейчас","description":"Принимайте платежи, привлекайте новых клиентов, и избегайте высоких комиссий благодаря AML Zapex","title":"Присоединяйтесь к тысячам компаний, которые уже используют криптоплатежи"},"main":{"button":"Бесплатная консультация","description":"Проверяем все криптоплатежи, чтобы ваш бизнес принимал или отправлял только чистые средства.","title":"Прием криптоплатежей для вашего бизнеса"}},"fatf":{"advantages":{"items":[{"button":"Бессплатная консультация","description":"Если мы не сможем вам помочь, мы честно об этом скажем","title":"Вы платите за результат"},{"button":"Обсудить условия","description":"Если даже через год вы напишите нам о проблеме, мы дадим вам рекомендации бесплатно","title":"Нам не все равно"},{"button":"Написать нам в Telegram","description1":"Мы на связи 24/7, поэтому любой вопрос можем решить быстро и в формате живого общения.","description2":"Мы живые люди, поэтому ночью можем отвечать не так оперативно, как днем ✌️","title":"Поддержка 24/7"},{"button":"Заключить контракт","description":"Мы спасли около <b><span>$5 359 800</span></b> от блокировки на биржах и обменниках","title":"Опыт"},{"button":"Связаться с нами","description":"Мы ценим ваше время, поэтому отвечаем в течение 30 секунд","title":"Отвечаем в течение 30 сек"},{"button":"Бесплатная консультация","description":"Мы помогли <b><span>200 компаниям</span></b> соответствовать FATF","title":"Профессионализм"}],"title":"Наши приемущества"},"canWeHelp":{"first":{"description":"Составление юридической документации, необходимой для процесса лицензирования крипто бизнеса, такой как процедуры AML, специальных процедур для блокчейн аналитики, декларация подверженности рискам и другие","title":"Процедура лицензирования крипто бизнеса"},"items":[{"description":"Проверяем откуда и куда вы отправляли деньги и какой риск блокировки сейчас у ваших актиов","title":"Проверка на AML"},{"description":"Мы поможем создать и заполнить все документы и предоставим отчеты для подачи в любые проверяющие органы/компании","title":"Аудит + отчет"},{"description":"После детального аудита команды AML специалистов ваш бизнес будет соответствовать всем требованиям FATF","title":"Соответствие FATF"}],"note":"Наш опыт основан на MiCA и нормативных потребностях криптодружественных стран.","second":{"description":"Консультирование крипто-компаний в повседневном бизнесе, например, проведение тренингов по борьбе с отмыванием денег и помощь с расследованием происхождения крипто активов.<br /><br /> Ежегодные AML тренинги являются обязательными для лицензированных крипто компаний.","title":"AML Консалтинг"},"third":{"description":"Поддержка крипто-компаний при открытии банковских счетов и заполнении анкет от финансовых учреждений.<br /><br />Кроме того, мы предлагаем аудит выбранного криптокошелька на предмет наличия юридических рисков. <br /><br /> Банк может потребовать заполнить анкеты, связанные с AML, или предоставить политики AML и т. д.","title":"Регуляторная помощь"},"title":"Что мы делаем?"},"consultation":{"button":"Написать нам в Telegram","description":"Консультация в формате чата в Telegram. Она бесплатная, и если мы не сможем вам помочь, сразу об этом скажем. Вы ничего не теряете и всегда можете отказаться.","title":"Консультация бесплатная и ни к чему не\xa0обязывает"},"faq":{"items":[{"content":"Несоблюдение требований AML/KYC может привести к отзыву лицензии регулирующими органами, большим штрафам или тюремному заключению. Кроме того, ваша учетная запись может быть заблокирована, а ваши активы могут быть заморожены финансовым учреждением или крипто биржей.","title":"Зачем нужно соблюдать требования AML/KYC?"},{"content":"Наш опыт сосредоточен на помощи для подачи заявления на крипто лицензию, соблюдении требований AML/KYC и открытии банковского счета. Пакет документов или конкретный совет зависит от потребностей клиента. Мы также можем предоставлять AML тренинги.","title":"Как мы можем помочь?"},{"content":"В зависимости от запроса процесс подготовки процедур или других документов может занять от 1-2 недель до 1 месяца.","title":"Сколько времени это занимает?"},{"content":"В первую очередь мы покрываем страны ЕС и СНГ для лицензирования или заданий, связанных с AML/KYC. Тем не менее, другие страны могут быть рассмотрены в индивидуальном порядке. Кроме того, есть документы, которые необходимы только финансовым учреждениям или крипто биржам, а не местным регулирующим органам. В таком случае мы также сможем оказать Вам необходимую помощь.","title":"Какие страны вы можете охватить?"},{"content":"Мы можем предоставить вам аудит криптокошелька. Аудит будет включать в себя анализ источника средств, контрагентов, рисков и поведения выбранного криптокошелька. Такой аудит криптокошелька может понадобиться юридическим или физическим лицам при дальнейшем взаимодействии с банком или регулятором.","title":"Выдаете ли вы отчет о due diligence (аудите) криптокошельков?"}],"title":"Популярные вопросы"},"main":{"button":"Бесплатная консультация","description":"Команда AML специалистов подготовит ваш бизнес к соотвествию требованиям\xa0FATF по AML.","note":"<b>200+</b> предприятий успешно выполнили нормативные требования","specs1":"Подготовить документы для крипто лицензий","specs2":"Открыть банковский счет","specs3":"Составить AML процедуры, другие необходимые документы и провести AML тренинг","subtitle":"Наша команда специалистов поможет вам:","title":"Помощь криптокомпаниям с\xa0оформлением документов"},"program":{"buttonPdf":"PDF Пример анализа","from":"От","items":[{"button":"Связаться с нами в Telegram","description":"Предоставим четкую основу для криптобизнеса с соблюдением требований AML.","specs":[{"text":"Команда проанализирует ваши активы и покажет происхождение всех средств"},{"text":"Отправим полный отчет о том, куда ушли ваши деньги  и какой риск блокировки сейчас у ваших активов +дадим пояснения."},{"text":"Мы расскажем как хранить данные, делать проверки на наличие санкций,  проверять политически значимых лиц и нежелательных СМИ"},{"text":"Мы дадим четкие инстукции, как защитить себя от штрафов за отмывание денег."}]},{"button":"Связаться с нами в Telegram","description":"Проанализируем все пункты по соблюдению требований AML. Проведем полную AML проверку вашего бизнеса","special":"Помогло {{value}} компаниям","specs":[{"text":"Команда проанализирует ваши активы и покажет происхождение всех средств"},{"text":"Отправим полный отчет о том, куда ушли ваши деньги  и какой риск блокировки сейчас у ваших активов +дадим пояснения."},{"text":"Подробные правила для  KYC/CDD"},{"text":"Мы поможем заполнить отчеты Enhanced Due Diligence (Расширенная комплексная проверка) – EDD , которые содержат подробные сведения о проверках  физических и юридических лиц"}]},{"button":"Связаться с нами в Telegram","description":"Проведем анализ вашего бизнеса. Покажем в каких местах надо будет поменять бизнес процессы для соответствия требованиям AML","specs":[{"text":"Профессиональный анализ бизнеса с опытным AML офицером"},{"text":"Отправим полный отчет о том, куда ушли ваши деньги  и какой риск блокировки сейчас у ваших активов +дадим пояснения."},{"text":"Мы поможем вам заполнить все документы и отчеты для подачи в любые проверяющие органы/компании (SAR,CTR и другие)"},{"text":"Мы проверим криптокошельки и транзакции на наличие “грязных” денег, отправим полный отчет+дадим пояснения."},{"text":"Мы подготовим ваш бизнес к соответствию FATF."}]}],"note":"Вы платите только за результат. Если не сможем помочь — прямо об этом скажем","text":"Наличие аудита увеличивает доверие к Вам со стороны партнеров.  Повышает лояльность  клиентов,  и может ускорить принятие решения о сотрудничестве с вами","title":"Программы по соблюдению требований AML"}},"feedback":{"thankYou":{"description":"Мы получили ваш запрос и ценим ваш интерес к сервисам AML Zapex.","info":{"description":"Пока вы ждете, не стесняйтесь изучать наш <a href=\\"https://blog.AML Zapex.com\\">блог</a> , чтобы узнать о последних событиях и обновлениях в мире криптовалют.","title":"Будьте в курсе"},"title":"Спасибо за ваш запрос"},"title":"Обратная связь"},"footer":{"copyright":"AML Zapex","info":{"links":{"AboutTheProject":"О проекте","aboutUs":"О нас","analysis":"Анализ","blog":"Блог","careers":"Вакансии","certifications":"Сертификаты","pressKit":"Пресс-кит","risks":"Риски","support":"Поддержка"},"title":"Компания"},"legal":{"links":{"privacyPolicy":"Политика конфиденциальности","termsOfuse":"Правила пользования","userAgreement":"Польз. соглашение"},"title":"Нормативная база"},"products":{"links":{"AML Zapex":"AML Zapex","apiIntegration":"Интеграция с API","cryptopayment":"Криптовалютные платежи","fatf":"Cryptocurrency Consulting","investigation":"Расследование","kyc":"Automated KYC"},"title":"Продукты"},"socials":{"links":{"facebook":"Facebook","instagram":"Instagram","linkedIn":"LinkedIn","reddit":"Reddit","telegram":"Telegram","tikTok":"TikTok","youTube":"YouTube"},"title":"Социальные сети"}},"fortune":{"codeModal":{"clickToCopy":"Нажмите, чтобы скопировать","copied":"Скопировано","getPrize":"Получить приз","note":"Скопируйте свой уникальный бонусный код и нажмите \xabПолучить приз\xbb, чтобы поделиться им с нашим менеджером и получить вознаграждение","title":"Ваш уникальный бонус-код для активации приза","willRedirected":"Вы будете перенаправлены в службу поддержки через {{countdown}} сек"},"end":{"contactUs":"Свяжитесь с нами","title":"Благодарим вас за интерес к участию в AML Zapex’s Birthday Bonus Giveaway! Однако мы хотим сообщить, что розыгрыш уже завершился.","title2":"Но не переживайте – у нас есть для вас специальный бонус!","title3":"Пожалуйста, свяжитесь с нашим менеджером для получения персонального предложения"},"hero":{"birthday":"<span>День Рождения</span> \uD83C\uDF89 <span>AML Zapex</span>","description":"Крутите колесо, чтобы выиграть эксклюзивную <span>скидку</span> или <span>бесплатные AML-проверки!</span>","title":"Празднуйте вместе с нами <b>\uD83E\uDD73</b> и выигрывайте приз ко дню рождения AML Zapex!"},"wheel":{"getLucky":"Пусть повезет!","spinNow":"Крутить сейчас!"},"winModal":{"congratulations":"Поздравляем!","discount":"Скидка","enterYourEmailLabel":"Введите ваш email, чтобы получить уникальный бонус-код для активации приза:","enterYourEmailPlaceholder":"Введите ваш email","freeChecks":"Бесплатных проверок","getPromoCode":"Получить бонус-код","youHaveWon":"Вы выиграли"}},"header":{"announcement":{"final":"сегодня","link":"Проверьте их","main":"Мы обновили тарифы для бизнеса! "},"checkWallet":"Проверить кошелек","createAnAccount":"Создать аккаунт","links":{"aboutUs":"О нас","analysis":"Анализ","blog":"Блог","faq":"FAQ","howDoesItWork":"Как работает?","price":"Стоимость","products":"Продукты","risks":"Риски"},"logIn":"Войти","requestDemo":"Проверка","signIn":"Войти","signUp":"Регистрация","webCheck":"Личный кабинет"},"iSOCertified":{"buttonText":"Узнать больше","description":"Мы постоянно совершенствуем наши меры безопасности, чтобы обеспечить надежность и защиту. Узнайте больше о наших сертификациях","title":"ISO сертифицировано"},"initiatives":{"moreInOurBlog":"Больше в нашем блоге","title":"Наши инициативы"},"investigations":{"consult":{"description":"Мы свяжемся с вами в течение 24 часов, чтобы сообщить о дальнейших действиях и описать вашу ситуацию","title":"Готовы начать? Отправьте форму, и наши специалисты рассмотрят вашу ситуацию."},"description":{"text":"Команда <span>сертифицированных</span> экспертов AML Zapex оказывает комплексную <span>аналитическую</span> и <span>юридическую</span> поддержку при возврате украденной криптовалюты"},"disclaimer":{"description1":"AML Zapex не звонит вам и не обращается к вам первым с просьбой помочь в процессе возврата средств, поскольку любые звонки, электронные письма или сообщения без вашего согласия противоречат правилам конфиденциальности. Обычно наши клиенты обращаются в AML Zapex сначала с помощью способов, указанных на нашем сайте.","description2":"Пожалуйста, обратите внимание, что для связи по электронной почте или любым другим каналам связи (Telegram, WhatsApp), чтобы предотвратить мошенничество в Интернете и криптовалютные аферы, AML Zapex использует только корпоративные доменные электронные почты <a href=\\"https://AML Zapex.com\\">https://AML Zapex.com</a> или официальные каналы связи, указанные на официальном сайте. Пользователь обязан проверять правильность написания сайта и общаться только с официальными каналами связи, указанными на сайте AML Zapex.","description3":"Инвойсы могут быть только от нашей компанией Safelement Limited. AML Zapex принимает как крипто-, так и фиатные платежи за наши услуги. Криптовалютные платежи принимаются на лицензированные криптовалютные биржи. Для фиатных платежей мы используем корпоративные банковские счета в крупнейших банках Гонконга и ЕС. Кроме того, мы используем услуги по оплате кредитными картами, предоставляемые компанией Stripe и подключенные к тем же банковским счетам.","hide":"Скрыть","learnMore":"Подробнее","subtitle":"Мошенничество и обман:","title":"Юридическая оговорка"},"expertise":{"description":"Доверьтесь нашей опытной команде специалистов в сфере расследований.","items":{"1":"Chainalysis Reactor Certification (CRC)","2":"Chainalysis KYT Certification (CKC)","3":"Cryptocurrency Fundamentals Certification (CCFC)","4":"Chainalysis Ethereum Investigations Certification (CEIC)","5":"ACAMS Fightning Moder Slavery And Human Trafficking","6":"<b>Полноправные участники</b><ul><li>Crypto Defence Alliance</li><li>\\nATHI</li></ul>"},"subtitle":"Наши сертификаты:","title":"Наши знания"},"faq":{"items":[{"content":"AML Zapex может исследовать различные криптовалюты, включая Bitcoin, Ethereum и другие популярные альткоины, но не ограничиваясь ими.","title":"Какие криптовалюты может исследовать AML Zapex?"},{"content":"Продолжительность расследования зависит от сложности дела. Как правило, в течение 24 часов мы бесплатно предоставляем обзор ситуации. Затем, если мы располагаем всей необходимой информацией, в течение 72 часов мы предоставляем Вам отчет о расследовании.  Однако общий срок может быть и больше, особенно если для продолжения расследования нам необходимо пометить кошельки для отслеживания.","title":"Сколько времени занимает блокчейн-расследование AML Zapex?"},{"content":"Продолжительность процесса возврата может существенно варьироваться в зависимости от сложности дела, времени реагирования бирж и правоохранительных органов, а также других факторов. Лучше всего подготовиться к тому, что процесс может занять несколько месяцев.","title":"Сколько времени обычно занимает процесс полного возврата?"},{"content":"Хотя AML Zapex использует передовые методы и инструменты, чтобы максимально увеличить шансы на возврат средств, невозможно гарантировать успешный исход в каждом случае из-за природы транзакций на основе блокчейна и различной степени сотрудничества с третьими сторонами.","title":"Есть ли гарантия, что моя потерянная криптовалюта будет возвращена?"},{"content":"Стоимость может варьироваться в зависимости от сложности дела. Для получения индивидуального предложения заполните форму или свяжитесь с нами.","title":"Какова стоимость услуг по возврату средств?"},{"content":"Стоимость наших услуг не подлежит возврату, поскольку она покрывает трудозатраты и ресурсы, вложенные командой AML Zapex в расследование, независимо от результата. Будьте уверены, мы сделаем все возможное для возврата ваших цифровых активов.","title":"Если мои средства не удастся вернуть, получу ли я возмещение за сервисный сбор?"},{"content":"Важно предоставить как можно больше подробностей о потерянной или украденной криптовалюте, включая адреса соответствующих кошельков, TX транзакций, характер потери (например, мошенничество, кража), а также все соответствующие записи о связи или транзакциях.","title":"Какую информацию мне необходимо предоставить для начала процесса по возврату средств?"},{"content":"Заявление в полицию следует подавать в зависимости от страны проживания. AML Zapex предоставляет руководство по правильной подаче заявления в полицию об утере или краже криптовалюты. Это заявление и последующая повестка необходимы для процесса по возврату средст.","title":"Где можно подать заявление в полицию?"},{"content":"Компания AML Zapex очень серьезно относится к безопасности вашей личной информации. Мы придерживаемся строгих правил конфиденциальности данных и используем надежные методы защиты вашей информации на всех этапах процесса по возврату средств.","title":"Насколько надежно защищены мои персональные данные во время этого процесса?"},{"content":"AML Zapex предоставляет образовательные материалы и ресурсы, которые помогут вам защитить свои цифровые активы и избежать распространенных мошенничеств и рисков в криптовалютной сфере. Сюда входят лучшие практики обеспечения безопасности кошельков, распознавания потенциальных мошенничеств, а также понимания рисков и преимуществ различных видов криптовалютных транзакций и инвестиций.","title":"Что я могу сделать, чтобы предотвратить будущие потери криптовалюты?"}],"title":"Популярные вопросы"},"form":{"thankYou":{"description":"Ваш запрос на помощь в возврате утерянной, взломанной или украденной криптовалюты получен. Мы понимаем срочность и деликатность вашей ситуации и готовы помочь вам в это непростое время.","info":{"description1":"Наша команда сертифицированных экспертов по восстановлению криптовалют изучит предоставленную вами информацию. Мы стремимся понять каждый аспект вашего дела, чтобы предложить наиболее эффективную стратегию восстановления.","description2":"Вы можете рассчитывать на ответ от нас в течение 24 часов с первоначальной оценкой вашего дела и дальнейшими шагами.","title":"Что будет дальше?"},"title":"Благодарим вас за передачу вашего кейса в AML Zapex"}},"main":{"description":"Выясните, где находится ваша потерянная криптовалюта, проведя тщательное расследование для возможного возврата","leaveRequest":"Оставить заявку","title":"Возврат украденной криптовалюты и блокчейн расследования"},"process":{"description":"Шаги, которые мы предпринимаем для анализа и возможного возврата утраченных активов.","items":{"0":{"description":"Заполните нашу подробную анкету, чтобы предоставить нам как можно больше информации о вашей ситуации.","title":"Сбор информации:"},"1":{"description":"Вы можете подать заявление в полицию самостоятельно или следовать нашим рекомендациям, чтобы сделать это эффективно.","title":"Заявление в полицию:"},"2":{"description":"При необходимости мы можем оказать необходимую помощь и предоставить информацию для проведения полицейского расследования и получения повестки в суд для возврата активов.","title":"Поддержка полицейского расследования:"},"3":{"description1":"В этом процессе мы предпринимаем несколько шагов, в том числе:","description2":"Внесение связанных кошельков в черный список бирж","description3":"Пометка связанных кошельков провайдерами блокчейн аналитики","description4":"Пометка для отслеживания, если средства размещены в неопознанных кошельках","title":"Блокчейн расследование:"},"4":{"description":"По результатам блокчейн расследования мы составляем комплексный отчет.","title":"Отчет о расследовании:"},"5":{"description":"Если похищенные средства попадают на биржу, мы связываемся с ней, чтобы запросить возможное замораживание похищенных активов.","title":"Коммуникация с биржами:"}},"title":"Процесс возврата криптовалюты"},"recovery":{"button":"Оставить заявку","description":"Отправьте заявку прямо сейчас, и наши специалисты свяжутся с вами в течение 24 часов.","title":"Готовы начать процесс возврата криптовалюты?"}},"kyc":{"check":{"items":{"addressVerification":{"description":"Мы подтверждаем адрес, используя официальный документ, такой как счет за коммунальные услуги или банковские выписки, сравнивая их с адресом, указанным клиентом.","title":"Address Verification"},"amlCheck":{"description":"В соответствии с требованиями Закона о предотвращении отмывания денег и финансирования терроризма мы проверяем средства и их происхождение.","title":"AML Check"},"companyCheck":{"description":"<ul><li>Юрисдикция регистрации компании и вид деятельности</li><li>Активна ли компания согласно Корпоративному реестру</li><li>Зарегистрированный адрес компании</li><li>Уполномоченные лица компании и их удостоверения личности</li><li>Бенефициары компании и их удостоверения личности</li></ul>","title":"Company Check (KYB)"},"documentVerification":{"description":"Проверка документов в реальном времени. Мы проверяем подлинность и действительность документа и проверяем личные данные пользователя.","title":"Document Verification"},"faceVerification":{"description":"Подтверждение личности с помощью распознавания лиц. Мы подтверждаем, что селфи клиента совпадают с фотографией на документах.","title":"Face Verification"},"ongoingMonitoring":{"description":"Мы предлагаем постоянный черный список ваших клиентов. Если туда кого-то добавят, мы проведем дополнительную проверку клиента и уведомим вас.","title":"Ongoing KYC/AML Monitoring"},"paymentMethod":{"description":"Мы проверяем финансовый документ, кредитную карту или транзакцию, чтобы убедиться, что платеж был произведен верифицированным клиентом.","title":"Payment Method"},"pepScreening":{"description":"Проверьте статус политически значимого лица, санкции и контрольный список этого лица, чтобы избежать работы с людьми или компаниями из группы высокого риска.","title":"PEP Screening"},"sourceOfFunds":{"description":"Мы проверяем происхождение средств и подтверждающие документы, такие как счета, контракты, заработная плата.","title":"Source of Funds Check"},"taxVerification":{"description":"Мы собираем идентификационный номер налогоплательщика из представленного документа и проверяем его действительность.","title":"Tax Verification"},"viabilityCheck":{"description":"Проверка документов, выданных финансовыми учреждениями или адвокатом, подтверждающих надежность клиента.","title":"Financial Viability Check"},"videoVerification":{"description":"Подтверждение личности с помощью видеозвонка. Мы подтверждаем, что клиент хочет пройти верификацию и что предоставленные документы принадлежат ему.","title":"Video Verification"}},"title":"Что мы проверяем?"},"contact":{"button":"Связаться с нами в Telegram","description":"Мы предлагаем гибкие условия и индивидуальный подход. Свяжитесь с нами, и мы подберем лучший вариант, отвечающий потребностям вашего бизнеса.","title":"Свяжитесь с нами, чтобы обсудить условия"},"info":{"items":[{"button":"Подробнее","description1":"Защитите свой бизнес с помощью процесса верификации, синхронизированного с требованиями регулирующего органа. Проверяйте адреса, способы оплаты, верифицируйте лица и личные документы, подтверждение наличия средств и многое другое, чтобы обеспечить комплаенс вашего бизнеса.","description2":"Проверьте надежность каждого пользователя, чтобы защитить себя от незаконной деятельности клиентов, которая может иметь негативные последствия для вашего бизнеса.","title":"Что мы предлагаем?"},{"button":"Подробнее","description1":"Наш сервис очень прост в настройке, поэтому вы можете сразу же начать верификацию своих пользователей.","description2":"KYC часто требуется для получения лицензий, разрешений и управления финансами. Мы предоставляем администраторам и пользователям удобный способ выполнить это требование.","title":"Зачем это нужно?"},{"button":"Просмотреть документацию","description":"Когда дело доходит до интеграции, мы возьмем на себя всю работу за вас. Таким образом, ваши разработчики смогут сосредоточиться на создании кода, а не на интеграции комплаенса.","title":"Помощь"}],"title":"KYC от AML Zapex- это простой и быстый способ подтвердить личность вашего клиента"},"main":{"badge":"Легко настроить","button":"Запланировать бесплатную демонстрацию","description":"Проверяйте больше пользователей с помощью быстрой, безопасной, автоматизированной и эффективной верификации, которая значительно сокращает ручную рабочую нагрузку.","title":"Верифицируйте пользователей с помощью автоматического KYC"},"why":{"items":[{"button":"Посмотреть документацию","description":"Ведущие отраслевые стандарты безопасности, подкрепленные сертификацией ISO и регулярными аудитами безопасности.","title":"Охрана"},{"button":"Посмотреть документацию","description":"Сертифицирован Европейским институтом управления и финансов.","title":"Сертификация"},{"button":"Свяжитесь с нами через Telegram","description":"Мы можем проверить более 4000 типов документов из 240 разных стран. Начните привлекать клиентов из любой точки мира.","title":"Международная совместимость"},{"button":"Контакт","title":"Ускорьте обслуживание клиентов, снизьте риски и упростите бизнес-процессы"}],"title":"Почему выбирают нас"}},"kycHelp":{"title":"Support Center"},"main":{"doing":{"items":[{"button":"Пример PDF отчета","description":"Мы проверяем криптокошельки и транзакции на наличие там грязных денег и выдаем детальный отчет. Это нужно, чтобы у вас не было проблем с проверяющими органами и чтобы уберечь вас от мошенников.","title":"Что мы делаем?"},{"description1":"Если вам зайдут грязные деньги — вы рискуете получить запрос от проверяющих органов и потерять свои средства из-за блокировок.","description2":"Этого может не случится, но ваш кошелек будет помечен.","description3":"Рекомендуем делать проверки, и быть уверенным в своих активах.","title":"Зачем это вам ?"},{"button":"Проверить в Telegram","title":"Первая проверка бесплатно"}]},"faq":{"info":{"answer":"Ответим в течение 30 сек","description":"Пишите нам в телеграм. Отвечаем быстро и по делу, ведь у нас все схвачено \uD83D\uDC4C","inTelegram":"Мы в Telegram","note":"Мы на связи <b>24/7</b>, однако ночью не всегда можем отвечать быстро","title":"Не нашли свой вопрос?"},"items":[{"content":"Базовый результат проверки AML Zapex включает процент оценки риска, источники риска и принадлежность к черному списку.<br /><br /> Кроме того, результат проверки может содержать различную дополнительную информацию об адресе, такую как принадлежность к кластеру, фактический баланс и сумма переведенных средств.<br /><br /> Если необходимая информация отсутствует, результат проверки может оказаться неполным по сравнению с описанными данными.<br /><br /> Обратите внимание, что для блокчейнов, проверка которых осуществляется в ограниченном режиме, кластеризация и процентное значение оценки риска недоступны. Оценка риска может быть предоставлена для контрагента только в том случае, если он относится к кластеризированной сущности.\\n","title":"Что показывает проверка AML Zapex?"},{"content":"Общий показатель риска (в процентах) — это вероятность того, что адрес связан с незаконной деятельностью. <br /><br />AML Zapex находит связи проверенного адреса с другими адресами в блокчейне и с объектами разных категорий, каждая из которых имеет разную оценку условного риска, и рассчитывает общую оценку риска на основе этих связей. <br /><br />При расчете общей оценки риска учитывается серьезность обнаруженных подключений. Например, в случае подключений к категориям организаций \xabМайнинг\xbb (риск 0%) и \xabДаркнет\xbb (риск 100%) влияние даркнета как более рискованной категории будет выше, а майнингу будет уделяться меньше внимания при оценке рисков.","title":"Что означает показатель процентного риска?"},{"content":"AML Zapex проверяет указанный адрес кошелька на наличие связей с известными сервисами блокчейна - сущностям. AML Zapex условно объединяет эти сервисы в группы с разным уровнем риска противоправной деятельности - категории сущностей.<br /><br /> Проверка AML показывает связи проверяемого адреса с этими категориями сущностей как источники риска, с которыми взаимодействовал адрес, и процент средств, переведенных с/на эти сервисы.<br /><br /> На основе всех источников риска рассчитывается общая оценка риска, которая помогает пользователю принимать дальнейшие решения об активах.","title":"Что означают источники риска?"},{"content":"Проверка адреса — это анализ всех связей с другими адресами и объектами в блокчейне с учетом движения входящих и исходящих средств. <br /><br />Процесс проверки транзакций отличается от проверки адреса, и результат зависит от вашей стороны в транзакции. Общая оценка риска всегда зависит от контрагента. <br /><br />Чтобы проверить транзакцию, вам необходимо указать TxID, адрес получателя этой транзакции и выбрать свою сторону в транзакции: <br /> - Получатель (вы получили депозит на свой кошелек) - проверяются адреса, с которых были получены средства. Источники риска описывают сервисы, с помощью которых отправители TX накапливали переведенные средства с процентной разбивкой. <br />- Отправитель (вы вывели средства со своего кошелька) — проверяется адрес, на который поступили средства. Источники риска описывают все связи адреса получателя с процентной разбивкой. <br /><br />Таким образом, при проверке транзакции проверяются риски получателя при получении средств и риски отправителя при отправке средств.","title":"В чем разница между проверкой адреса и транзакции?"},{"content":"Каждый клиент сам определяет, какой процент риска для него приемлем. Условно оценку риска можно разделить следующим образом:\\n<br />\\n - 0-25% — чистый кошелек/транзакция;\\n<br />\\n - 25-75% — средний уровень риска;\\n<br />\\n - более 75% такой кошелек/транзакция считаются рискованными.\\n<br />\\nТакже стоит обратить внимание на красные источники риска в подробном анализе, описанном на <a href=\\"https://AML Zapex.com/what-do-we-analyze\\"> странице\\n</a>","title":"Как я понимаю оценку рисков?"},{"content":"AML Zapex поддерживает все основные блокчейны и токены на них. Мы постоянно добавляем поддержку дополнительных криптовалют. Вы всегда можете ознакомиться с актуальным списком поддерживаемых криптовалют в\\n<a href=\\"http://web.AML Zapex.com\\" target=\\"_blank\\">\\nв личном кабинете\\n</a>\\nили в\\n<a href=\\"https://docs.AML Zapex.com/\\" target=\\"_blank\\">\\nДокументация по API\\n</a>\\n.","title":"Какие криптовалюты анализирует AML Zapex ?"},{"content":"Проверяя кошельки контрагентов перед транзакцией, вы можете отказаться от их активов, если уровень риска высок. Также перед переводом средств в другие сервисы вы можете проверить адрес своего кошелька и сохранить результат (сделать скриншот). <br /><br />Если проверка показывает, что ваши активы не были связаны с незаконной деятельностью и сервис заблокировал вас, вы можете предоставить сохраненный результат, чтобы подтвердить чистоту ваших активов.","title":"Как AML Zapex помогает защитить вас от блокировки?"},{"content":"Результаты проверки основаны на международных базах данных, которые постоянно обновляются. Таким образом, адрес, риск которого вчера был 0%, сегодня, возможно, получил или передал актив рискованному контрагенту. В этом случае оценка риска изменится. Если вы хотите быть уверены в результате и определить, в чем причина высокого риска, мы можем провести для вас подробную проверку. Для этого напишите нам по адресу <a href=\\"mailto:info@AML Zapex.com\\">\\ninfo@AML Zapex.com </a>","title":"Риск превышает 50%, но я уверен, что адрес надежный. Что делать?"},{"content":"Ответ на этот вопрос зависит от вашей уникальной модели рисков. Обычно рекомендуется проверять AML каждый раз, когда вы взаимодействуете с неизвестным кошельком или смарт-контрактом.","title":"Как часто рекомендуется проводить проверки?"},{"content":"После подтверждения транзакции баланс пополняется: <br /> • до 10 минут, если оплата была произведена в течение 24 часов после выставления счета; <br /> • до 25 минут, если оплата была произведена через 24 часа после выставления счета. В целом BTC, ETH, USDT и фиат обрабатываются быстрее, чем другие монеты.","title":"Как быстро пополняется баланс?"},{"content":"Если вы приобрели проверки без срока действия — они остаются в вашем аккаунте, и вы можете использовать их в любое время. <br /><br />Если вы приобрели проверки с ограниченным сроком действия, они будут списаны с вашего счета по истечении срока действия.","title":"Что произойдет, если я не буду использовать все свои проверки каждый месяц?"},{"content":"При необходимости вы можете купить дополнительные проверки. Количество проверок всегда отображается в вашем персональном кабинете.","title":"Что если мне понадобятся дополнительные проверки?"},{"content":"AML Zapex защищает данные, соблюдая строгие стандарты, что подтверждено нашими сертификациями ISO 9001 и ISO 27001.<br /><br />\\nНаша сертификация по ISO 9001 подчеркивает нашу приверженность обеспечению стабильного качества и повышению удовлетворенности клиентов. Еще более важно, что сертификация по ISO 27001 демонстрирует нашу приверженность поддержанию высоких стандартов информационной безопасности, защите конфиденциальных данных и соблюдению нормативных требований.<br /><br />\\nУзнайте больше о наших сертификациях <a href=\\"https://AML Zapex.com/ru/certifications\\">здесь</a>.","title":"Как AML Zapex обеспечивает защиту данных?"}],"title":"Популярные вопросы"},"howMatch":{"button":"Свяжитесь с нами","label":"Первая проверка — бесплатно","note":"По нашей статистике, <b>каждый четвертый кошелек — подозрительный</b>.<br /> Потратив пару долларов на проверку, вы можете уберечь себя  от потерь на несколько тысяч долларов.","perCheck":"за проверку","startsFrom":"От","title":"Сколько стоит ваше спокойствие?"},"officers":{"items":{"[0]":{"label":"Co-Founder","name":"Slava Demchuk"},"[1]":{"label":"Chief Operating Officer","name":"Vasily Vidmanov"},"[2]":{"label":"Chief Commercial Officer","name":"Andrew Aleksandrov"},"[3]":{"label":"Blockchain Analyst","name":"Sid Panda"},"[4]":{"label":"Lawyer / Certified AML Specialist","name":"Niko Demchuk"},"[5]":{"label":"Legal Advisor","name":"Ganna Voievodina"},"[6]":{"label":"Business development manager","name":"Vlad Raskosov"},"[7]":{"label":"Business development manager","name":"Denys Shestak"},"[8]":{"label":"Customer support manager","name":"Nikita Raskosov"},"anmolJain":{"label":"VP","name":"Anmol Jain"},"graemeHampton":{"label":"Certified AML Specialist","name":"Graeme Hampton"},"nikoDemchuk":{"label":"Certified AML Specialist","name":"Niko Demchuk"},"sidPanda":{"label":"Blockchain Analyst","name":"Sid Panda"},"slavaDemchuk":{"label":"Co-Founder","name":"Slava Demchuk"}},"text":"AML специалисты помогают решить сложные ситуации и уберечь вас от штрафов и блокировок. Профессиональные специалисты будут представлять ваши интересы вплоть до суда, если понадобится.","title":"Наша команда"},"partners":{"title":"Нам доверяют"},"prime":{"AML ZapexOnWeb":"Личный кабинет","button":"Начать проверку","checkInTelegram":"Проверить кошелек","description":"AML Zapex автоматизирует AML / KYC процедуры и снижает расходы на соблюдение требований законодательства","primaryButton":"Проверка","secondaryButton":"Чат-бот","telegramCheck":"Telegram check","title":"Комплексный комплаенс продукт для крипто бизнеса"},"reviews":{"description":"Исследуйте наш сервис с людьми, которым мы уже помогли.","items":[{"note":"Den • <a href=\\"https://csgo500.com\\">CSGO500","quote":"Мы используем AML Zapex уже почти два года и благодаря им успешно выявили и остановили сотни угроз. Обязательно продолжу пользоваться их услугами."},{"note":"CEO • <a href=\\"https://uniochange.com\\">Uniochange</a>","quote":"Криптосообщество сталкивалось с трудностями в выявлении источников подозрительных средств, но после появления AML Zapex все трудности исчезли. Всем советую пользоваться этим сервисом, пока ваша деятельность не станет полностью законной."},{"note":"<a href=\\"https://alltrust.me\\">AllTrust</a>","quote":"Мы очень довольны AML Zapex, благодаря интеграции с нашей платформой нам удалось предотвратить большое количество транзакций, связанных с незаконными средствами. Уверены, что будем и дальше развивать наше сотрудничество."},{"note":"<a href=\\"https://guarda.com\\">Guarda</a>","quote":"AML Zapex уже довольно давно является для нас замечательным партнером. Он невероятно прост в использовании, надежен и, самое главное, обеспечивает дополнительное спокойствие для наших пользователей. Мы в Guarda с нетерпением ждем возможности продолжить нашу совместную работу."}],"title":"Наши клиенты говорят о нас"},"services":{"description":"Мы предоставляем полный пакет опций для безопасной работы с криптовалютой","items":[{"description":"API-решения, расширяющие возможности инструментов для обеспечения соответствия требованиям AML в рамках вашей текущей системы. Все транзакции автоматически проверяются на соответствие требованиям AML и FATF и снижают риски вашего бизнеса.","title":"AML/KYT Скрининг"},{"description":"Оптимизированный и автоматизированный процесс верификации позволяет вашему бизнесу быстро привлекать клиентов, снижая ручные усилия и минимизируя риски идентификационного мошенничества и незаконной активности.","title":"KYC для бизнеса"},{"description":"Запустите свой криптовалютный проект с легкостью, простотой и уверенностью, используя наш консалтинг по вопросам AML и KYC, обеспечивающий беспрепятственное соблюдение требований и эффективное управление рисками с самого начала.","title":"AML/KYC Процедуры"},{"description":"При помощи наших специалистов вы сможете упростить открытие корпоративного счета на CEX EMI и сосредоточиться на развитии бизнеса в криптоиндустрии.","title":"Корпоративные счета на CEX/EMI"},{"description":"Возврат украденой криптовалюты с помощью экспертных блокчейн-расследований, позволяющих оперативно выявить виновных и отследить средства для их эффективного возврата.","title":"Блокчейн-расследования"}],"learnMore":"Узнать больше","title":"AML Zapex Сервисы"},"stats":{"items":[{"description":"Количество обнаруженных рискованных активов","title":"+$100 000 000"},{"description":"Compliance отдел, который соответствует AML требованиям","title":"6 500 000+"},{"description":"Провайдеров проверенно","title":"60,000+"}]},"whatElse":{"items":[{"button":"Проверить адрес","description":"Покажем находится ли адрес в санкционных списках. Любое взаимодействие с такими адресами может обернуться штрафами, блокировкой или отзывом лицензии.","title":"Проверяем санкционные списки"},{"button":"Бесплатная консультация","description":"Мы помогаем вернуть деньги, которые были украдены мошенниками с вашего кошелька. Специалист проанализирует ситуацию, и предложит решение.","note":"Вы платите только за результат. Если не сможем помочь — прямо об этом скажем","title":"Помогаем спасти украденную крипту"},{"button":"Посмотреть документацию","description1":"Мы поможем вам настроить автоматическую проверку всех входящих транзакций. Выделяем программиста, который поможет быстро интегрировать наш API в ваш сервис.","description2":"Вам больше не нужно переживать и освободится время для других дел.","title":"Интеграция с API"}],"title":"Что еще?"},"why":{"items":[{"buttonText":"Давайте обсудим","description":"Персональные данные обрабатываются и хранятся в соответствии с GDPR.","description1":"AML Zapex предлагает широкий спектр комплаенс-решений, адаптированных для каждого клиента.","description2":"Мы уверены в том, что сможем удовлетворить ваши требования, ведь <b>мы помогли 300+ криптовалютным организациям</b> всех размеров в 25 юрисдикциях.","title":"Индивидуальный подход"},{"description":"У нас имеются соответствующие сертификаты, которые вы можете показать проверяющим органам.","description1":"Мы предлагаем KYT/Wallet скрининг, KYC, AML и многое другое для крипто бизнеса.","description2":"Оценка рисков в AML Zapex основана на многочисленных источниках данных, что обеспечивает получение наиболее достоверной информации в отрасли.","description3":"Наши удобные в использовании сервисы и решения оптимизируют процессы в компании, устраняя сложности, связанные с соблюдением требований провайдеров услуг.","title":"Интегрированная платформа обеспечения соответствия"},{"buttonText":"Связаться","description":"Мы понимаем, насколько важна быстрая и дружелюбная поддержка наших клиентов, поэтому мы всегда рядом. Поддержка 24/7.","description1":"Мы на связи 24/7, поэтому любой вопрос можем решить быстро и в формате живого общения.","description2":"Мы живые люди, поэтому ночью можем отвечать не так оперативно, как днем ✌️","note":"Ответ в ночное время может занять немного больше времени","title":"Поддержка клиентов"},{"description":"Мы спасли около {{value}} от блокировки на биржах и обменниках","title":"Опыт"}],"title":"Почему AML Zapex?"},"works":{"description":"Тут видео","title":"Как это работает ?"},"yearStats":{"label":"За три года сервисом AML Zapex воспользовались","text":"компаний и\xa0обменок"}},"menuProducts":{"AML ZapexPro":{"description":"Отслеживание источника и направлений транзакций","label":"AML Zapex Pro"},"amlTraining":{"description":"Специализированные программы обучения для криптовалютной индустрии","label":"AML Тренинг"},"chatBot":{"description":"Мгновенные AML проверки - самый простой способ попробовать наши продукты","label":"AML Чат-бот"},"consulting":{"description":"Помогаем крипто бизнесу в разработке AML процедур, предоставлении AML-тренингов и открытии банковских счетов","label":"Консалтинг"},"dynamic":{"description":"Используйте наши промежуточные адреса, чтобы избежать рисков","label":"Динамические <nobr>мерчант-адреса</nobr>"},"forBusiness":"Для бизнеса","forPersonalUse":"Для личного пользования","investigation":{"description":"Помощь в возврате украденной криптовалюты","label":"Расследование"},"kyc":{"description":"Проверяйте пользователей быстро, безопасно и эффективно с помощью автоматизированного процесса верификации","label":"KYC"},"kyt":{"description":"Автоматическая проверка всех транзакций и кошельков через API","label":"KYT"},"mobileApp":{"description":"AML-проверки в удобном мобильном приложении","label":"Мобильное приложение"}},"notFindQuestion":{"answer":"Ответим в течение 30 сек","description":"Свяжитесь с нами через мессенджер. Мы на связи <b>24/7</b>, поэтому любой вопрос можем решить быстро и в формате живого общения.","inTelegram":"Мы в Telegram","note":"Ответ в ночное время может занять чуть больше времени.","onMessenger":"Мы в мессенджере","title":"Ваш вопрос отсутствует в списке?"},"partners":{"title":"Наши 300+ клиентов и партнеров"},"pro":{"experience":{"items":{"consistent":{"description":"Глубокий анализ ончейн-активности обеспечит соблюдение вашей компанией криптовалютных регуляций в вашей юрисдикции. Положитесь на систему онлайн-мониторинга для выявления подозрительных аккаунтов и операций.","title":"Постоянный комплаенс"},"efficient":{"description":"<span>Найдите. Расследуйте. Действуйте.</span> Наши аналитические инструменты помогут вам выявить источник и получателя криптовалютных транзакций. Используйте наши инновационные технологии, чтобы эффективно бороться с криминальной деятельностью, проводить расследования быстрее и точнее.","title":"Эффективные расследования"}},"title":"Получите доступ к самой качественной аналитике блокчейна — лучшие данные по доступной цене."},"faq":{"info":{"answer":"Мы отвечаем в течение 30 секунд","description":"Получите быструю и эффективную поддержку 24/7 Свяжитесь с нами в Telegram по любым вопросам или помощи. Никаких ботов, только поддержка людей.","inTelegram":"Мы в телеграме","note":"Ответ в ночное время может занять немного больше времени.","title":"Твоего вопроса нет в списке?"},"title":"Часто задаваемые вопросы"},"features":{"items":[{"description":"AML Zapex Pro использует лучшие доступные данные. Мы сканируем кошельки и транзакции, чтобы выявить связи с незаконными криптовалютными средствами, которые используются в преступной или сомнительной деятельности, включая даркнет-рынки, мошенничество, программы-вымогатели и миксеры криптовалют.","title":"Исключительный доступ к данным"},{"description":"AML Zapex Pro делает сложный анализ блокчейна простым.","title":"Удобные поисковые опции"},{"description":"AML Zapex Pro связывает криптовалютные транзакции с реальными участниками.","title":"Связь виртуальных транзакций с реальными компаниями"},{"description":"Простой интерфейс AML Zapex Pro удобен для любого пользователя. Усовершенствованные процессы позволяют отслеживать средства, выявлять аккаунты и транзакции с высоким уровнем риска.","title":"Улучшенная доступность"},{"description":"Получайте более оперативные результаты с помощью AML Zapex Pro, который отслеживает движение средств через блокчейны. Определяйте адреса входа и выхода, а также своп-активность, чтобы выявить скрытые действия.","title":"Прозрачность криптовалютных транзакций"},{"description":"С помощью AML Zapex Pro вы сможете создать надежную историю движения криптовалютных средств. Экспортируйте и визуализируйте данные, чтобы получить полное представление о преступной деятельности.","title":"Больше убедительных доказательств"}],"title":"Функции AML Zapex Pro"},"hero":{"button":"Попробуйте AML Zapex Pro","description":"AML Zapex Pro — это инструмент анализа блокчейна, предоставляющий экспертам по расследованиям и специалистам по комплаенсу доступ к лучшим данным в отрасли.","info":{"compliance":{"description":"Оптимизируйте KYT/AML процессы, чтобы обеспечить соблюдение мер комплаенса.","title":"Комплаенс"},"investigations":{"description":"Быстро решайте кейсы с помощью эффективного отслеживания блокчейна. Остановите криптопреступность.","title":"Расследования"}},"title":"Распутайте сеть блокчейн-преступлений"},"secure":{"buttonText":"Попробуйте AML Zapex Pro","title":"Защитите свою криптовалюту с помощью проверки кошельков и рисков транзакций"},"sets":{"buttonText":"Попробуйте AML Zapex Pro","items":[{"list":["Легальные криптопроекты","Санкции и контрольные списки","Программы-вымогатели","Терроризм и группы по отмыванию денег"],"title":"Уникальные данные"},{"list":["Прозрачные данные","Удобный пользовательский опыт","Легкий старт"],"title":"Простота использования"},{"list":["Оценка рисков","Выявление преступной деятельности","Поощрение партнерства"],"title":"Безопасность и защита"}],"title":"Что отличает<br /> AML Zapex Pro?"},"superior":{"items":{"analyzeRisk":{"description":"Проверяйте счета по критическим спискам наблюдения, включая OFAC.","title":"Анализ рисков"},"continuousTracking":{"description":"Следите за движением средств в режиме реального времени.","title":"Постоянный мониторинг"},"gatherEvidence":{"description":"Используйте наши собственные данные для усиления вашего кейс-расследования.","title":"Сбор доказательств"},"reliableData":{"description":"Получайте информацию о компаниях с различными уровнями риска.","title":"Надежные данные"},"try":{"buttonText":"Активируйте сейчас!","title":"Раскройте полный потенциал нашего решения"},"userFriendlyDashboard":{"description":"Легко ориентируйтесь и визуализируйте важные данные.","title":"Удобная панель управления"}},"title":"Превосходный дизайн и функциональность"}},"saleBanner":{"text1":"Получите скидку 15% на все планы","text2":"до 30 декабря 2023 года"},"seo":{"cryptoChecker":{"description":"AML Zapex - инструмент для проверки кошельков и защиты криптовалют от незаконных действий. AML Zapex показывает, как биткойн и альткойны связаны с подозрительными транзакциями и преступной деятельностью.","title":"Решение для проверки и защиты криптокошельков | AML Zapex"},"cryptoCheckerLand":{"description":"AML Zapex - надежный сервис для проверки и защиты криптокошельков от нелегальных операций. Узнайте, как ваш биткойн и альткойны могут быть связаны с подозрительными транзакциями.","title":"AML Zapex - проверка и защита криптовалютных кошельков онлайн"},"cryptoComplianceConsulting":{"description":"AML Zapex предлагает консалтинг, KYC и AML процедуры, юридическое сопровождение и аудит для криптобизнеса. Узнайте больше о наших услугах и почему нас выбирают ведущие криптокомпании.","title":"Консалтинг и юридическое сопровождение для криптобизнеса | AML Zapex"},"home":{"description":"AML Zapex - надежный сервис для финансового мониторинга криптовалюты. AML проверка криптокошелька онлайн с использованием передового AML бота. Борьба с отмыванием денег с AML Zapex.","title":"AML Проверка Криптокошельков Онлайн | AML Бот для Борьбы с Отмыванием Денег"},"kyc":{"description":"Быстрая и безопасная платформа для проверки KYC, предлагающая автоматизированные решения по проверке KYC, AML, ID и налогов. Начните с легкостью привлекать клиентов по всему миру.","title":"Услуги по AML & KYC для соответствия требованиям бизнеса | AML Zapex"},"kyt":{"description":"API интеграция для мгновенных оценок риска всех входящих крипто транзакций. AML Zapex предоставляет API для KYT и AML проверки кошельков, помогая в борьбе с отмыванием денег.","title":"API Интеграция для KYT и AML Проверки Транзакций от AML Zapex"},"pro":{"description":"AML Zapex Pro – продвинутый инструмент для анализа блокчейна, скоринга рисков и мониторинга транзакций на соответствие.","title":"AML Zapex Pro –  AML-проверка криптовалют для профессионалов"},"reclaimCrypto":{"description":"Наша команда проведет срочное блокчейн расследование и поможет в возврате или блокировке украденной криптовалюты. Мы предоставляем услуги по восстановлению криптовалют и возврату активов.","title":"Помощь в поиске и возврате украденной Криптовалюты | Услуги по возврату криптовалют"},"training":{"description":"Экспертное обучение по AML для криптоиндустрии. Защитите свой бизнес от финансовых преступлений и регуляторных рисков с помощью наших курсов и сертификации по AML. Получите необходимые знания для соответствия требованиям.","title":"Обучение и сертификация по AML для криптобизнеса | Курс по Anti Money Laundering"}},"training":{"benefits":{"description":"Развивайте свой криптобизнес с помощью обучения AML Zapex:","items":{"1":{"title":"Повысьте операционную эффективность"},"2":{"title":"Укрепляйте репутацию"},"3":{"title":"Опережайте регуляторные риски"}},"title":"Преимущества обучения"},"consult":{"description":"Заполните форму, чтобы подать заявку на зачисление","formTitle":"Зарегистрируйтесь сейчас и освойте аналитику AML и блокчейна!","title":"Готовы начать?"},"courses":{"buttonText":"Запишитесь сейчас","item1":{"title":"Онлайн-тренинг со специалистом"},"item2":{"title":"Цифровой сертификат о прохождении курса"},"item3":{"title":"Тематические исследования и обсуждения"},"title":"Курсы включают"},"faq":{"description":"Ознакомьтесь с ответами на часто задаваемые вопросы, чтобы узнать больше о необходимости, частоте и аспектах сертификации нашего обучения AML.","items":[{"content":"Да, во многих юрисдикциях требуется обучение по вопросам отмывания денег для лицензированных и нелицензированных криптокомпаний. Однако конкретные требования могут отличаться в зависимости от страны или региона.","title":"Является ли обучение AML обязательным для всех предприятий криптоиндустрии?"},{"content":"Необходимо регулярно проводить обучение по вопросам отмывания денег, чтобы сотрудники были в курсе последних событий. Частота может варьироваться в зависимости от отраслевых стандартов, нормативных требований и оценки рисков компании.","title":"Как часто следует проводить обучение AML?"},{"content":"Да, для лиц, специализирующихся на соблюдении требований AML, доступны различные программы сертификации. Эти сертификаты подтверждают знания и опыт специалистов в этой области. Являясь лицензированными специалистами в этой области, AML Zapex предоставляет участникам сертификат после прохождения обучения AML Zapex, что еще больше повышает их квалификацию в области соблюдения требований AML.","title":"Существуют ли программы сертификации для специалистов по борьбе с отмыванием денег?"},{"content":"Авторитетных поставщиков услуг по обучению AML можно найти в отраслевых ассоциациях, регулирующих органах и специализированных учебных организациях. Очень важно выбрать поставщика с большим опытом работы и опытом в области соблюдения требований AML.","title":"Где компании могут найти авторитетных поставщиков услуг по обучению AML?"}],"title":"У вас есть вопросы?"},"form":{"thankYou":{"description":"Мы будем рады помочь вам повысить операционную эффективность, укрепить репутацию и опередить регуляторные риски в вашем криптобизнесе.","title":"Спасибо, что выбрали AML Zapex для обучения AML"}},"main":{"buttonText":"Начать","description":"Предоставление вашим командам возможности освоить экосистему соответствия требованиям в сфере криптовалют","subtitle":"Обучение и сертификация","title":"Тренинг по соблюдению требований и аналитике блокчейна в сфере криптовалют "},"trainings":{"blockchainEntries":[{"title":"Аналитика блокчейна"},{"title":"История"},{"title":"Как это работает"},{"title":"Оценка риска"},{"title":"Скрининг транзакций"},{"title":"Проверка кошельков"},{"title":"Криптовалютное расследование"},{"title":"Трудности в аналитике блокчейна"},{"title":"Участники рынка"},{"title":"Регулирование"},{"title":"Случаи применения"}],"course1":{"buttonText":"Получить сертификат","description1":"В этом специализированном отраслевом тренинге представлены основные темы по борьбе с отмыванием денег, которые профессионально разработаны так, чтобы они были краткими и понятными. Сертификация представляет собой хороший обзор для криптокомпаний, которые начинают свой путь в мире криптовалют.","description2":"После обучения вы сможете понять, что такое отмывание денег и другие финансовые преступления, понять основные требования по борьбе с отмыванием денег, способы построения внутренних процессов по борьбе с отмыванием денег, риски отмывания денег в криптоиндустрии и многое другое.","duration":"3,5 часа","entryTitle":"Учебный модуль включает следующие главы:","title":"Основы AML для обучения и сертификации криптобизнеса"},"course2":{"buttonText":"Получить сертификат","description":"Это обучение и сертификация разработаны нашими экспертами специально для тех, кто уже знаком с криптовалютами и имеет базовые знания в области отмывания денег, но хочет расширить свой опыт и знания в области блокчейн-аналитики.","duration":"3 часа","entryTitle":"Учебный модуль включает следующие главы:","title":"Обучение и сертификация навыков блокчейн-аналитики"},"fundamentalsEntries":[{"description":"Понимание концепций, методов и показателей деятельности по отмыванию денег и финансированию терроризма.","title":"Отмывание денег и финансирование терроризма"},{"description":"Ознакомление участников с глобальными стандартами, правилами и юридическими обязательствами по борьбе с отмыванием денег, характерными для криптоиндустрии.","title":"Стандарты и правовая база по борьбе с отмыванием денег"},{"description":"Определение рисков, присущих криптовалютам, таких как анонимность, трансграничные транзакции и использование цифровых активов для незаконной деятельности.","title":"Риски отмывания денег в криптоиндустрии"},{"description":"Изучение ролей и обязанностей различных заинтересованных сторон в рамках системы борьбы с отмыванием денег, включая руководство, сотрудников по соблюдению нормативных требований и внутренних аудиторов.","title":"Три линии обороны"},{"description":"Предоставление рекомендаций и передовых практик по внедрению эффективных процедур борьбы с отмыванием денег в криптокомпаниях, включая комплексную проверку клиентов (CDD), мониторинг транзакций и отчетность о подозрительных действиях.","title":"Процедуры по отмыванию денег"},{"description":"Понимание конкретных требований регулирующих органов по отмыванию денег, таких как ведение документации, обязательства по отчетности и методологии оценки рисков.","title":"Основные требования к AML"},{"description":"Знакомство участников с инструментами блокчейн-аналитики и методами мониторинга и анализа транзакций в блокчейне для выявления подозрительных действий.","title":"Аналитика блокчейна"},{"description":"Информирование участников о международных санкционных режимах и важности проверки сделок и юридических лиц по санкционным спискам.","title":"Санкции"},{"description":"Информирование участников о последних тенденциях, тактике и методах, используемых лицами, занимающимися отмыванием денег, и террористами для соответствующей адаптации мер по борьбе с отмыванием денег.","title":"Преобладающие техники, методы и тенденции в ML/TF:"},{"description":"Работа над практическими заданиями, позволяющая участникам применять свои знания и навыки решения проблем.","title":"Кейсы"}],"seeAllProgram":"Смотреть всю программу","showLess":"Показать меньше","title":"Профессиональное обучение и сертификация"},"why":{"buttonText":"Зарегистрироваться","description":"В быстро меняющемся мире криптовалют защитите свой бизнес от финансовых преступлений, нормативных санкций и репутационного ущерба, овладев искусством и наукой соблюдения требований AML.","title":"Почему стоит выбрать обучение AML от AML Zapex?"}},"trustedMembers":{"title":"Мы являемся полноправными участниками"},"wasCopiedToClipboard":"было скопировано в буфер обмена","why":{"block1":{"buttonText":"Давайте обсудим","description1":"AML Zapex предлагает широкий спектр комплаенс-решений, адаптированных для каждого клиента.","description2":"Мы уверены в том, что сможем удовлетворить ваши требования, ведь <b>мы помогли 300+ криптовалютным организациям</b> всех размеров в 25 юрисдикциях.","title":"Индивидуальный подход"},"block2":{"description1":"Мы предлагаем KYT/Wallet скрининг, KYC, AML и многое другое для крипто бизнеса","description2":"Оценка рисков в AML Zapex основана на многочисленных источниках данных, что обеспечивает получение наиболее достоверной информации в отрасли","description3":"Наши удобные в использовании сервисы и решения оптимизируют процессы в компании, устраняя сложности, связанные с соблюдением требований провайдеров услуг","title":"Интегрированная платформа обеспечения соответствия"},"block3":{"buttonText":"Связаться","description":"Мы понимаем, насколько важна быстрая и дружелюбная поддержка наших клиентов, поэтому мы всегда рядом. Поддержка 24/7","note":"Ответ в ночное время может занять немного больше времени","title":"Поддержка клиентов"},"title":"Почему AML Zapex?"}}}'),
                ei = JSON.parse('{"translation":{"aboutUs":{"culture":{"description":"Ми вважаємо, що будь-який успіх AML Zapex залежить від двох речей: наших людей і нашої культури.","items":[{"button":"Спробуйте AML Zapex зараз","description1":"Наша мета — створити чесний і прозорий крипторинок і зробити інструмент для захисту своєї репутації та активів, доступним кожному.","title":"Наша місія"},{"button":"Станьте частиною команди","description":"Сьогодні команда з понад {{specialistsCount}} спеціалістів у чотирьох різних офісах (Київ, Лондон, Гетеборг і Гонконг) працює над створенням і розвитком сервісу.","title":"Люди"},{"button":"Детальніше про проєкт","description":"Наш алгоритм постійно вдосконалюється і аналізує більше 10 тисяч відкритих джерел і <b>2,5 тисячі спам-адрес </b> в режимі реального часу.","title":"Технології"}],"title":"Наша культура"},"experts":{"title":"Наші експерти"},"main":{"description":"Онлайн-оцінка крипто-адрес та транзакцій, заснована у 2019 році командою спеціалістів RegTech відповідно до міжнародних рекомендацій FATF"},"products":{"items":[{"button":"Спробуйте Safe3 зараз","description":"Децентралізований гаманець Web 3.0. Перший криптогаманець з вбудованим модулем AML. Одна програма для всього, що стосується криптовалюти. Все прозоро і безпечно."},{"button":"Детальніше про PureFi","description":"Протокол PureFi дозволяє Dapps додаткам повністю відповідати локальним та глобальним нормам, зберігаючи при цьому децентралізацію та анонімність користувачів.\\n\\nAML Zapex розроблений у партнерстві з Hacken Foundation для вирішення повного циклу криптовалют та процедур AML/KYC для інфраструктури Web3"}],"title":"Інші наші продукти"}},"analyze":{"items":{"green":{"bridge":{"description":"Суб\'єкти, що забезпечують передачу активів через різні блокчейни. Ці з\'єднання дають змогу переміщати активи, не торгуючи ними, що відрізняє мости від децентралізованих бірж.","title":"Bridge"},"exchange":{"description":"Організація дає змогу користувачам купувати, продавати і торгувати криптовалютами, володіючи торговими ліцензіями, які включають такі аспекти послуг:<br /> -Депозитарні, брокерські або інші пов\'язані фінансові послуги, які надають послуги обміну, де взаємодіють учасники з центральною стороною.<br /><br /> І не включає:<br /> - Ліцензії на неспецифічні фінансові послуги та юрисдикції, занесені до списку таких, що не співпрацюють з FATF.<br /><br /> Вони являють собою найбільш важливу і найбільш використовувану категорію суб\'єктів в індустрії криптовалют, на яку припадає 90% всіх коштів, відправлених через ці сервіси.","title":"Exchange"},"iCO":{"description":"Організація, яка займається краудфандингом свого проєкту, продаючи свою новоспечену криптовалюту інвесторам в обмін на фіатну валюту або більш поширені криптовалюти, такі як біткойн та ефір.<br /><br /> Існує багато законних прикладів таких пропозицій, але також і багато випадків, де зловмисники збирають кошти через ICO, потім привласнюють гроші і зникають.","title":"ICO"},"marketplace":{"description":"Монети, що використовувалися для оплати законної діяльності.","title":"Marketplace"},"merchantServices":{"description":"Організація, яка дозволяє компаніям приймати платежі від своїх клієнтів, також відома як платіжні шлюзи або обробники платежів.<br /><br /> Це часто полегшує конвертацію в місцеву фіатну валюту та переказ коштів на банківський рахунок торговця.","title":"Merchant Services"},"miner":{"description":"Монети, здобуті майнерами і ще не перенаправлені.","title":"Miner"},"nFTPlatform":{"description":"Протоколи, призначені для випуску, торгівлі та продажу NFT. Хоча вони схожі на смарт-контракти або децентралізовані біржі, вони класифікуються за своєю основною функцією.","title":"NFT Platform"},"nFTPlatformCollection":{"description":"Зібрання NFT на платформах, призначених для їх випуску, торгівлі та продажу. Класифікуються за їхнім реальним призначенням, незважаючи на схожість зі смарт-контрактами або децентралізованими біржами.","title":"NFT Platform Collection"},"other":{"description":"Монети, отримані за допомогою аірдропів, продажу токенів або іншими способами.","title":"Other"},"p2PExchange":{"description":"Організація має ліцензію на ведення бізнесу, пов\'язаного з наданням послуг з обміну криптовалюти, коли учасники напряму обмінюються один з одним, без посередників. <br /><br /> Сюди не входять ліцензії на неспецифічні фінансові послуги та юрисдикції, з якими не співпрацює FATF.","title":"P2P Exchange"},"paymentProcessor":{"description":"Монети, пов\'язані з платіжними послугами.","title":"Payment Management"},"seizedAssets":{"description":"Криптоактиви, заарештовані органами державної влади.","title":"Seized Assets"},"wallet":{"description":"Онлайн гаманець - це сервіс для зберігання та здійснення транзакцій з криптовалютою. Кастодіальні гаманці - це один із типів онлайн гаманців, де сервіс зберігає приватні ключі користувача, що може створити потенційні ризики шахрайства або недостатньої безпеки, але загалом репутабельні постачальники можуть забезпечувати кращу безпеку, ніж самі недосвідчені користувачі.","title":"Wallet"}},"red":{"childExploitation":{"description":"Суб\'єкти, пов\'язані з експлуатацією дітей.","title":"Child Exploitation"},"darkMarket":{"description":"Монети, пов\'язані з незаконною діяльністю.","title":"Dark Market\\n"},"darkService":{"description":"Монети, пов\'язані з жорстоким поводженням з дітьми, фінансуванням тероризму чи торгівлею наркотиками.","title":"Dark Service"},"enforcementAction":{"description":"Юридична особа підлягає судовому розгляду із судовими органами.","title":"Enforcement action\\n"},"fraudShop":{"description":"Суб\'єкт, який продає різні типи даних, включаючи особисту інформацію, дані кредитних карток та вкрадені облікові записи.<br /><br />\\nШахрайські угоди зазвичай відрізняються від ринків даркнета своєю поведінкою, такою як постійне поповнення депозитів і відсутність вхідних транзакцій клієнтам.","title":"Fraud Shop"},"fraudulentExchange":{"description":"Біржі, залучені до афери з виходом, незаконною поведінкою, або у яких кошти були конфісковані органами державної влади.","title":"Fraudulent Exchange"},"gambling":{"description":"Монети, пов\'язані з неліцензованими онлайн-іграми.","title":"Gambling\\n"},"highRiskJurisdiction":{"description":"Юрисдикція, внесена до списку країн, що не співпрацюють з FATF, має велику зловмисну криптовалютну діяльність або не має розвиненої нормативно-правової бази.<br /><br />Включно з такими країнами, як Іран, Венесуела, Албанія і Корейська Народно-Демократична Республіка, також відома як Північна Корея.","title":"High-Risk Jurisdiction\\n"},"illegalService":{"description":"Монети, пов\'язані з незаконною діяльністю.","title":"Illegal Service"},"illicitActorOrganization":{"description":"Організація або фізична особа, яка прямо чи опосередковано бере участь у різних формах незаконної діяльності.<br /><br /> Вони часто пов\'язані з такими ризикованими темами, як ринки даркнету, шахрайські транзакції, екстремістське фінансування та хакерство.","title":"Illicit Actor/Organization"},"malware":{"description":"Адреси, пов\'язані зі шкідливими програмами, включно з криптоджекерами, які використовують хост-комп\'ютери для майнінгу. Інші типи шкідливих програм включаючи кліпери, ботнети, трояни і DDoS-кампанії.","title":"Malware"},"mixer":{"description":"Монети, пропущені через міксер, щоб ускладнити чи унеможливити відстеження. Міксери в основному використовуються для відмивання грошей.","title":"Mixer\\n"},"onlinePharmacy":{"description":"Організації, що спеціалізуються на незаконному продажі неліцензійних або рецептурних ліків. Подібні до ринків даркнету, але можуть діяти як у даркнеті, так і легально, що дає підставу для окремої класифікації","title":"Online Pharmacy"},"ransom":{"description":"Монети, отримані шляхом вимагання чи шантажу.","title":"Ransom"},"sanctions":{"description":"Суб\'єкти, до яких застосовано санкції.","title":"Sanctions"},"scam":{"description":"Монети, отримані шляхом обману.","title":"Scam"},"specialMeasures":{"description":"Суб\'єкти або адреси, визначені FinCEN як такі, що становлять високий ризик відмивання грошей. Контрзаходи включають ведення обліку, вимоги до звітності та обмеження на перекази коштів та управління рахунками. <br /><br />Сфера застосування може поширюватися на аналогічні органи в інших країнах або юрисдикціях у міру їх впровадження.","title":"Special Measures"},"stolenCoins":{"description":"Монети отримані шляхом розкрадання чужої криптовалюти.","title":"Stolen Coins"},"terrorismFinancing":{"description":"Суб\'єкти, пов\'язані з фінансуванням тероризму.","title":"Terrorism Financing\\n"}},"yellow":{"aTM":{"description":"Монети, отримані через оператора криптовалютного банкомату.","title":"ATM"},"dEX":{"description":"Блокчейн-додаток, який полегшує торгівлю криптовалютою та токенами за допомогою автоматичних смарт-контрактів.<br /><br /> Угоди на децентралізованій платформі є одноранговими і не мають третіх осіб або центрального органу, окрім смарт-контракту, що виконує умови угоди, що робить його популярним інструментом відмивання грошей серед зловмисників.","title":"DEX"},"exchangeHighRisk":{"description":"Суб\'єкт стає високоризиковим на підставі наступних критеріїв: <br /><br />  Немає KYC: не вимагає абсолютно ніякої інформації про клієнта, перш ніж дозволяти будь-який рівень депозиту/зняття коштів, або не намагається перевірити цю інформацію.<br /><br /> Кримінальні зв\'язки: кримінальні звинувачення юридичної особи через порушення AML/CFT.<br /><br />Вплив: високий рівень схильності до ризикованих послуг, таких як ринки даркнета, інші біржі з високим ризиком або змішання визначається, як послуга, пряма схильність до високого ризику якої відрізняється на одне стандартне відхилення від середнього значення всіх ідентифікованих організацій з обміну за 12-місячний період.<br /><br /> Юрисдикція: базується на юрисдикції зі слабкими заходами AML/CFT.<br /><br />\\n  Без ліцензії: немає жодної конкретної ліцензії на ведення торгівлі криптовалютою.","title":"High-Risk | Exchange"},"infrastructureAsAService":{"description":"Організація, яка пропонує обчислювальні та інформаційні послуги, включаючи VPN, VPS і реєстрацію доменів.<br /><br /> Потенційно, це може являти собою платіж провайдерам, орієнтованим на конфіденційність, який можна використати з незаконною метою, але водночас може являти собою платіж повністю законному бізнес-провайдеру.","title":"Infrastructure as a Service"},"lendingContract":{"description":"Блокчейн-додаток, який дозволяє одноранговим користувачам кредитувати та брати криптоактиви у позику без взаємодії з третьою стороною або центральним органом.","title":"Lending Contract"},"liquidityPools":{"description":"Смарт-контракти, у яких токени блокуються для забезпечення ліквідності.","title":"Liquidity Pools"},"p2PExchangeHighRisk":{"description":"Організація не має жодної спеціальної ліцензії на ведення бізнесу, пов\'язаного з наданням послуг з обміну криптовалюти, коли учасники обмінюються безпосередньо один з одним без посередників.<br /><br /> Сюди також входять організації, які мають ліцензію, але перебувають у перерахованих юрисдикціях, з якими не співпрацює FATF, або не надають KYC для транзакцій на великі суми, що робить їх привабливими для відмивання грошей.","title":"P2P Exchange | High Risk"},"privacyProtocol":{"description":"Протокол або об\'єкт, який використовує функції конфіденційності, такі як докази з нульовим розголошенням, щоб забезпечити конфіденційность користувачам.<br /><br /> Забезпечення прозорості транзакцій, але при цьому адреси контрагентів залишаються прихованими.<br /> <br /> Ця функція є стандартною поведінкою багатьох криптовалют, що захищають конфіденційність, таких як Monero і Secret, а це означає, що отримання доступу до цих активів не обов\'язково означає, що кошти були змішані або навмисно заплутані.","title":"Privacy Protocol"},"smartContract":{"description":"Функціональність блокчейна, яка функціонує, як контракт, що самовиконується, з умовами угоди між покупцем і продавцем, записаними безпосередньо в рядках коду, що виконуються без необхідності участі третьої сторони.","title":"Smart Contract"},"tokenSmartContract":{"description":"Криптовалютний актив, побудований на другому блокчейні, який можна відправляти та отримувати за допомогою криптогаманця.<br /><br /> Існують різні технічні стандарти узгоджених правил, що визначають дизайн, розробку, поведінку та роботу даного токена.","title":"Token Smart Contract"},"unnamedService":{"description":"Ця категорія відноситься до поточних неідентифікованих кластерів, які показують поведінку, очікувану від служби через велику кількість адрес і транзакцій.","title":"Unnamed Service"}}},"main":{"description":"Ми проводимо аналіз адрес на приналежність до більш ніж 20 джерел ризику, щоб знайти підозрілі транзакції та визначити коефіцієнт ризику. Усі джерела ми розбили на три категорії.","title":"Що ми аналізуємо?"},"note":{"text1":"Наявність <b>Dark Market, Dark Service, Illegal Service</b> – це поганий знак.","text2":"Рекомендуємо провести додаткові дослідження, щоб не втратити свої кошти через блокування.","title":"Будьте обережні!"}},"b2b":{"contactForm":{"description":"Зв’яжіться з нами, і наша команда відповість на ваші запитання","title":"Контактна форма"},"curiousAbout":{"button":"Дізнатися деталі","description":"Наші AML експерти готові допомогти вам розібратися в Compliance.","title":"Готові розпочати з AML Zapex"},"help":{"items":[{"button":"Зв\'яжіться з нами","description":"Наш автоматизований і глибокий аналіз транзакцій (Know Your Transaction) допомагає компаніям відповідати вимогам AML/CFT.","title":"Як ми допомагаємо"},{"button":"Приклад звіту","description":"Ви отримаєте детальний звіт з оцінкою ризику транзакцій і зазначенням усіх джерел. Це допоможе як з коректними рішеннями, так і з дотриманням усіх вимог.","title":"Розширена звітність"},{"description":"Ми перевіряємо криптогаманці й транзакції на наявність там \\"брудних\\" грошей, надішлемо детальний звіт+надамо пояснення.","title":"Перевіряємо криптогаманці"},{"button":"Зв\'яжіться з нами","description":"Ми допоможемо вам заповнити всі документи та звіти для подання до будь-яких органів/компаній контролю (SAR, CTR та інші)","title":"Допомагаємо з документами"},{"description":"Ми допомогли понад 200 компаніям відповідати вимогам FATF/MiCA завдяки нашому KYT рішенню.","title":"Успішні кейси"}],"title":"Допомога бізнесу у дотриманні вимог FATF/MiCA"},"helpsWith":{"items":[{"description":"Наша оцінка ризику забезпечує точність у 99,5% з трьох різних джерел.","title":"Точність перевірок 99,5%"},{"description":"Перевірте свою адресу один раз і отримайте доступ до безкоштовних перевірок на все життя.","title":"Необмежені безкоштовні перевірки адрес"},{"description":"Безперервний моніторинг гаманця зі сповіщеннями в реальному часі про всі вхідні та вихідні транзакції.","title":"Сповіщення в реальному часі"},{"description":"AML Zapex забезпечує інтеграцію, звільняючи ваших розробників від основних завдань.","description1":"Ми допоможемо вам налаштувати автоматичну перевірку всіх вхідних операцій.","description2":"Зменшення технічного обслуговування з вашого боку, щоб ви могли зосередитися на найважливішому – своєму бізнесі.","title":"Допомога"},{"description":"AML Zapex спрощує перевірку транзакцій за допомогою єдиної точки доступу, зменшуючи технічне обслуговування для вашого бізнесу.","title":"Документація API"},{"description":"Контракт AML Zapex гарантує регуляторам ефективне управління питаннями відповідності та безпеки.","description1":"Що стосується інтеграції AML Zapex, ми виконаємо цю роботу за вас.","description2":"Таким чином ваші розробники можуть зосередитися на створенні, а не на інтеграції відповідності.","title":"Договір AML"}],"title":"Інтеграція AML Zapex спрощує KYT Compliance"},"howMatch":{"agreementCompliant":"AML/KYT/KYC договір, що відповідає AMLD5, FATF та MiCA","amlTrainingForFree":"<b>Тренінг з AML комплаєнсу та блокчейн аналітики</b> <small>вартість $3500, додано до тарифного плану безкоштовно</small>","automaticChecksViaApi":"Автоматична перевірка через API","bestChoice":"Найкращий вибір","business":{"checksCount":"15 000 AML перевірок","description":"Просунуте рішення для середнього бізнесу","otherServicesOff":"Знижка на інші послуги AML Zapex 5%","price":"$3750","pricePerCheck":"$0.25 за перевірку","referralProgram":"Участь у реферальній програмі 5%","testApi":"Тестове API для KYC +50$ на баланс"},"customerSupport":"Служба підтримки 24/7","dataSources":"5 джерел даних","description":"Плани, розроблені для відповідності потреб вашого бізнесу","discuss":"Обговорити","enterprise":{"checksCount":"100 000 — 500 000 AML перевірок","contactUsForQuote":"Дізнатись деталі","description":"Спеціальна ціна та ліцензія для найбільших компаній","otherServicesOff":"Знижка на інші послуги AML Zapex 10%","price":"Ліцензія","pricePerCheck":"Індивідуальне ціноутворення","referralProgram":"Участь у реферальній програмі 15%","supportTeam":"Команда підтримки по комплаєнсу та розслідуванням","testApi":"Тестове API для KYC +100$ на баланс"},"growth":{"checksCount":"5 000 AML перевірок","description":"Базове AML рішення для зростаючого бізнесу","otherServicesOff":"Знижка на інші послуги AML Zapex 5%","price":"$1500","pricePerCheck":"$0.30 за перевірку","referralProgram":"Участь у реферальній програмі 2%","testApi":"Тестове API для KYC +50$ на баланс"},"monitoringWithAlerts":"Моніторинг адрес з алертами","note":"* По закінченню календарного року з моменту оплати залишок не використаних перевірок анулюється","ofac":"Перевірка на санкції OFAC","premium":{"checksCount":"50 000 АМЛ перевірок","description":"Найкраща ціна та юридична підтримка для великих компаній","otherServicesOff":"Знижка на інші послуги AML Zapex 10%","price":"$10000","pricePerCheck":"$0.20 за перевірку","referralProgram":"Участь у реферальній програмі 15%","testApi":"Тестове API для KYC +100$ на баланс"},"serviceClustering":"Кластеризація вашого сервісу","special":"Отримайте знижку 15% на всі тарифи до 30 грудня 2023 року","supportedBlockchains":"Підтримка 25+ блокчейнів","title":"Скільки коштує ваш спокій?","yearly":"Щорічно"},"main":{"button":"Записатися на демонстрацію","description":"Підвищений захист від ризиків і шахрайства, відповідність Compliance та зручне API рішення.","title":"Захистіть свій бізнес з AML перевірками (KYT)"},"reviews":{"description":"Дізнайтеся про наші послуги від наших клієнтів","eliTaranto":{"company":"Digital Assets at EQIBank","name":"Eli Taranto","position":"CEO","text":"\xabГоловною проблемою для нас було переконатися, що всі транзакції повністю відповідають вимогам. Це означало необхідність підключення кількох баз даних, визнаних регуляторами та ефективних для виявлення шахрайства. Завдяки AML Zapex ми цього досягли та захистили наших клієнтів від зловмисників і блокувань через брудні криптоактиви\xbb."}},"risk":{"text":"За нашою статистикою, <b>кожен четвертий гаманець — підозрілий.</b><br /> Витративши кілька доларів на перевірку, ви можете убезпечити себе від втрат на кілька тисяч доларів."},"safety":{"items":[{"button":"Дізнатися більше","description":"Приймайте криптоплатежі або розраховуйтеся криптовалютою з партнерами. Усе безпечно, тому що ми перевіряємо всі гроші, і до вас заходять лише чисті кошти.","title":"Криптоплатежі для вашого бізнесу"}],"title":"Безпечна система опрацювання криптоплатежів"},"statistics":{"description":"Спрощений процес підключення AML Zapex гарантує швидкий запуск і захист вашого бізнесу від фінансових та шахрайських ризиків.","title":"Отримайте швидку інтеграцію та ефективний захист AML вже сьогодні"}},"b2c":{"contact":{"button":"Запитати у Telegram","description":"Ми на зв\'язку 24/7, тому будь-яке питання можемо вирішити швидко та у форматі живого спілкування","note":"Ми живі люди, тому вночі можемо відповідати не так оперативно, як вдень ✌️","title":"Залишилися питання?"},"email":{"buttonDownload":"Завантажити приклад","placeholder":"Ваша електронна пошта","title":"Залишайте пошту, і ми надішлемо вам приклад детального звіту"},"example":{"items":[{"button":"Перевірити адресу","description":"Звіт можна показати регуляторам як гарантію, що у вас закрито питання з AML політикою і вирішити спірні питання","title":"Надсилаємо детальний AML звіт"},{"button":"Дізнатися більше","description":"Ми аналізуємо гаманці на 25+ джерел, щоб знайти підозрілі транзакції та визначити коефіцієнт ризику.","title":"Вивчаємо джерела"},{"button":"Розпочати перевірку","description":"Ми надаємо детальну інформацію щодо кожного джерела","title":"Розкладаємо по поличках"},{"description":"Ви отримуєте інформацію наскільки ризикований гаманець та приймаєте рішення чи варто мати з ним справу","title":"Оцінюємо ризики"},{"button":"Перевірити адресу","description":"Покажемо, чи перебуває адреса в санкційних списках. Будь-яка взаємодія із такими адресами може призвести до штрафів, блокування або відкликання ліцензії","title":"Перевіряємо санкційні списки"}],"title":"Приклад аналізу гаманця"},"main":{"button":"Розпочати перевірку","description":"Ми перевіряємо гаманці та транзакції і показуємо джерела походження коштів. Це допомагає визначити чистоту активів і захистити себе від шахраїв і крадених монет.","title":"Детальний аналіз криптогаманців"},"pricing":{"items":[{"button":"Мені підходить","description":"Ідеально для старту","note":"$3 за додаткову перевірку","price":"$3","spec1":"1 AML перевірка","spec2":"Без терміну дії","spec3":"AML Zapex підтримка 24/7\\n","title":"Start"},{"button":"Я беру","description":"Вигідний пакет для холдерів","note":"$2,5 за одну перевірку","price":"$25","spec1":"10 AML перевірок","spec2":"1 рік","spec3":"AML Zapex підтримка 24/7\\n","title":"Optimal\\n"},{"badge":"Найкращий вибір","button":"Вигідно","description":"Для трейдерів та інвесторів","note":"$2 за одну перевірку","price":"$50","spec1":"25 AML перевірок","spec2":"1 рік","spec3":"AML Zapex підтримка 24/7\\n","spec4":"Реферальна програма","title":"Pro"}],"title":"Ціни"},"works":{"text":"Тут відео","title":"Як це працює ?"}},"b2cpage":{"checkAddress":{"messengers":{"description":"Достатньо простого повідомлення в Telegram або WhatsApp, щоб ініціювати комплексну перевірку вашого криптогаманця. Це зручний варіант для користувачів, які віддають перевагу платформам миттєвого обміну повідомленнями.","title":"Месенджери"},"or":"або","signUp":"Зареєструйтеся для доступу до додаткових функцій","title":"Як перевірити свою адресу?","website":{"description":"Традиційний підхід: увійдіть до свого облікового запису на нашому сайті. Тут ви можете придбати та провести комплексну й інтерактивну перевірку гаманця з докладними інструкціями і підтримкою. Або завантажте наш мобільний застосунок для максимальної зручності та доступності.","title":"Вебсайт або застосунок"}},"checkYourWallet":"Перевірити гаманець","faq":{"info":{"answer":"Ми відповідаємо протягом 30 секунд","description":"Зв’яжіться з нами в Telegram. Ми цілодобово на зв’язку, щоб гарантувати комфорт для всіх.","inTelegram":"Ми в Telegram","note":"Ми на зв’язку <b>24/7</b>, проте не завжди можемо швидко відповісти вночі","title":"Вашого запитання немає в списку?"},"title":"FAQs"},"hero":{"description":"Отримання коштів незаконного походження може призвести до заморожування ваших коштів","title":"Захист ваших гаманців від незаконних коштів"},"info":{"address":{"description":"Відстеження в реальному часі всіх транзакцій, пов’язаних із зазначеною адресою блокчейна, отримання миттєвих повідомлень про вхідні та вихідні транзакції.","title":"Відстеження адреси"},"investigations":{"description":"Переглядайте прямі та непрямі зв’язки між заданою адресою та виявленими кластерами, загальну суму, відправлену на/з цільового гаманця, і відстань до нього.","title":"Розслідування"},"suspicious":{"description":"Виявлення активів, пов’язаних із незаконною діяльністю, включно з шахрайством, тероризмом, вимаганням та іншими злочинами.","title":"Підозрілі транзакції"}},"investigation":{"download":"Завантажити приклад звіту у форматі PDF","title":"Розслідування щодо адреси гаманця","videoTitle":"Дивитися відео з прикладом розслідування"},"keepCrypto":{"description":"Виявлення потенційних ризиків","items":{"avoid":{"description":"Регулярна перевірка ваших криптогаманців і транзакцій може значно знизити ризик заморозки ваших активів на біржах.","title":"Захист від призупинення рахунку на платформі CEX"},"boost":{"description":"Виявляйте та усувайте потенційні загрози з точки зору безпеки для захисту ваших інвестицій та активів.","title":"Посилення безпеки"},"stay":{"description":"Дотримуйтесь чинних правил та уникайте штрафів. Регулярні перевірки допоможуть вам дотримуватися вимог законодавства, уникаючи штрафів та юридичних проблем.","title":"Залишайтеся в правовому полі та уникайте неприємностей"}},"title":"Захистіть свої криптовалюти"},"moreProducts":{"items":{"amlTraining":{"description":"Спеціалізовані програми навчання для криптовалютної індустрії","title":"Навчання AML"},"consulting":{"description":"Допомога криптовалютним компаніям із процедурами боротьби з відмиванням грошей (AML), навчанням і налаштуванням банківських рахунків","title":"Консультації"},"investigation":{"description":"Допомога у відновленні викрадених криптовалют","title":"Розслідування"},"kyc":{"description":"Перевіряйте більше користувачів за допомогою швидкої, безпечної, автоматизованої та ефективної верифікації","title":"KYC"},"kyt":{"description":"Автоматична перевірка всіх транзакцій і гаманців через API","title":"KYT"}},"leaveRequest":"Залишити заявку","title":"Інші продукти та рішення"},"orOnWeb":"або на сайті","pricing":{"checklist":["25+ підтримуваних блокчейнів та їхніх власних активів і токенів","Перевірка транзакцій і гаманців вручну через панель управління","Пріоритетне обслуговування 24/7","3 джерела даних"],"forBusiness":"Для бізнесу","forPersonal":"Для особистого","tariffs":{"advanced":{"badge":"Економія 40%","checks":"100 перевірок","perCheck":"$1.8 за кожну перевірку","price":"$180"},"optimal":{"badge":"Економія 17%","checks":"10 перевірок","perCheck":"$2.5 за кожну перевірку","price":"$25"},"pro":{"badge":"Економія 33%","checks":"25 перевірок","perCheck":"$2 за кожну перевірку","price":"$50"},"start":{"checks":"3 Перевірки","perCheck":"$3 за кожну перевірку","price":"$9"}},"title":"Ціни"},"risks":{"description":"У криптовалютному світі дуже важливо відповідати чинним нормативно-правовим стандартам. Регулярні перевірки допоможуть вам дотримуватися вимог законодавства, уникаючи штрафів та юридичних проблем.","title":"Що ми аналізуємо?"},"secureCrypto":{"title":"Захистіть свою крипту відсікаючі ризикові транзакції"},"stats":{"description":"Оцінка ризиків AML Zapex заснована на даних із численних джерел, що гарантує наявність у нас найнадійніших даних у галузі","title":"У 23% гаманців зберігаються ризиковані активи, через що користувачі вразливі до шахрайства, обману або дій недобросовісних осіб."},"trustedCompliance":{"title":"Нам довіряють фахівці відділів контролю"},"weTrusted":{"title":"Ми є довіреними представниками"},"why":{"discussButton":"Давайте поговоримо","integrated":{"description1":"Ми пропонуємо KYT/оцінку гаманців, KYC, AML і не тільки для криптовалютних компаній.","description2":"Оцінка ризиків AML Zapex заснована на даних із численних джерел, що гарантує наявність у нас найнадійніших даних у галузі","description3":"Наші послуги та рішення допоможуть оптимізувати процеси вашої компанії, усуваючи труднощі, пов’язані з дотриманням вимог законодавства","title":"Інтегрована платформа дотримання нормативних вимог"},"personalized":{"description1":"AML Zapex пропонує широкий спектр рішень відповідно до нормативних вимог, адаптованих для кожного клієнта.","description2":"Ми гарантовано відповідаємо вашим вимогам, адже ми допомогли 300+ криптовалютним компаніям різних рівнів у 25 юрисдикціях.","title":"Індивідуальний підхід"},"title":"Чому AML Zapex?"}},"banners":{"title":"Банери"},"careers":{"advantages":{"items":{"dynamicEnvironment":{"description":"Ми процвітаємо завдяки змінам і інноваціям, забезпечуючи, щоб кожен день був захопливим і сповненим нових можливостей.","title":"Динамічне середовище"},"freedomToCreate":{"description":"Бери на себе відповідальність, привнось свіжі ідеї та впроваджуй інновації в середовищі, яке тобі довіряє і надає можливості.","title":"Свобода творити"},"makeDifference":{"description":"Твоя робота безпосередньо сприятиме створенню безпечнішого і надійнішого цифрового світу.","title":"Змінюй світ"},"supportiveCulture":{"description":"Співпраця та прозорість – у центрі нашої діяльності. Голос кожного почутий і цінується.","title":"Культура підтримки"},"workLifeBalance":{"description":"Ми віддаємо пріоритет вище жорстких графіків — ЖОДНОГО обліку часу, лише РЕЗУЛЬТАТИ.","title":"Баланс роботи та особистого життя"},"workWithExperts":{"description":"Приєднуйся до команди, яка цінує обмін знаннями, допитливість і безперервне навчання для розширення меж.","title":"Працюй з експертами"}},"title":"Чому тобі сподобається працювати з нами"},"employmentType":{"fullTime":"Повна зайнятість","partTime":"Часткова зайнятість"},"gallery":{"title":"Люди, які роблять це можливим"},"hero":{"description":"В AML Zapex кожен виклик — це можливість для інновацій. Приєднуйся до команди, яка змінює комплаєнс у блокчейні за допомогою передових рішень. Твої ідеї, навички та пристрасть можуть залишити тут помітний слід.","openPositionsButton":"Переглянути відкриті вакансії","title":"Разом ми формуємо майбутнє аналітики та інновацій у блокчейні"},"hrInfo":{"gotQuestions":"Є питання? Давайте поговоримо"},"jobType":{"office":"Офіс","remote":"Віддалено"},"location":{"ukraine":"Україна","worldwide":"У всьому світі"},"numbers":{"byTheNumbers":"У цифрах","locations":"Локації","teammates":"Товариші по команді","yearOverYearGrowth":"Річне зростання","yearsOnTheMarket":"Років на ринку"},"openPositions":{"empty":"Наразі немає відкритих вакансій","title":"Відкриті вакансії"},"openPositionsEntry":{"details":"Деталі"},"stickyNav":{"aboutUs":"Про нас","advantages":"Переваги","openPositions":"Відкриті вакансії"},"submitApplication":{"attachYourResumeOrCV":"Додайте резюме / CV","currentCompany":"Поточна компанія","currentLocation":"Поточне місцезнаходження","eMail":"Електронна пошта","enterYourCompany":"Введіть назву компанії","enterYourEmail":"Введіть свій e-mail","enterYourFullName":"Введіть ваше повне ім’я","enterYourLocation":"Введіть ваше місцезнаходження","enterYourPhone":"Введіть ваш телефон","fileIsTooLarge":"Файл завеликий (максимум {{maxFileSize}} мб)","fullName":"Повне ім’я","invalidEmail":"Невірна електронна пошта","phone":"Телефон","resumeOrCV":"Резюме / CV","submit":"Надіслати","success":{"description":"Наша команда розгляне вашу заявку і незабаром зв’яжеться з вами.","title":"Дякуємо за вашу заявку!"},"thisFieldIsRequired":"Це поле обов’язкове","title":"Надіслати заявку"},"vacancy":{"applyForThisJob":"Подати заявку","backToOpenPositions":"Назад до відкритих вакансій"}},"certifications":{"90012015":{"description":"AML Zapex сертифікований за ISO 9001, найвідомішим у світі стандартом систем управління якістю. Ця сертифікація гарантує, що ми надаємо стабільну якість, підвищуємо задоволеність клієнтів, оптимізуємо процеси, зменшуємо кількість помилок і підвищуємо продуктивність. В AML Zapex ми прагнемо відповідати найвищим стандартам управління якістю.","title":"ISO9001"},"270012017":{"description":"AML Zapex отримав сертифікацію за ISO 27001, який визнаний у всьому світі як провідний стандарт систем управління інформаційною безпекою. Ця сертифікація встановлює стратегічну основу для підвищення рівня захисту інформації, зниження кібер ризиків та забезпечення відповідності нормативним вимогам.","title":"ISO27001"},"description":"В AML Zapex ми ставимо безпеку наших користувачів на перше місце і постійно вдосконалюємо наші підходи, щоб забезпечити захист і довіру.","title":"Сертифікації AML Zapex"},"checking":{"addressPlaceholder":"Введіть крипто-адресу","allFieldsRequired":"Всі поля обов\'язкові для заповнення.","description":"Швидко визначайте ризик гаманця та джерело його коштів за допомогою простого звіту","emailError":"Будь ласка, введіть дійсну адресу електронної пошти.","emailPlaceholder":"Ваш email","note":"Після перевірки ми надішлемо звіт на вказану вами електронну пошту","submitButton":"Перевірити","successDescription":"Ваш запит обробляється, ви отримаєте результати перевірки на вказану електронну адресу найближчим часом.","successTitle":"Дякуємо!","title":"Перевірка криптогаманців"},"consulting":{"consult":{"title":"Безкоштовна консультація без будь-яких зобов\'язань"},"faq":{"items":[{"content":"Недотримання вимог AML/KYC може призвести до відкликання ліцензії регулюючими органами, великим штрафам або навіть ув\'язненням. Крім того, ваш обліковий запис може бути заблокований, а ваші активи можуть бути заморожені фінансовою установою або крипто біржею.","title":"Навіщо потрібно дотримуватись вимог AML/KYC?"},{"content":"Так, ми видаємо підтвердження того, що навчання в AML Zapex було пройдено. Ви можете пред\'явити цей сертифікат аудиторам, регуляторам, банкам або криптовалютним біржам, коли вони попросять підтвердити ваші знання в галузі AML/KYC або блокчейн-аналітики.","title":"Чи видаєте ви сертифікати про проходження навчання?"},{"content":"Залежно від запиту, процес підготовки процедур або інших документів може зайняти від 1-2 тижнів до 1 місяця.","title":"Скільки часу це займає?"},{"content":"Насамперед ми покриваємо країни ЄС і СНД для ліцензування або завдань, пов\'язаних з AML/KYC. Проте, інші країни можуть бути розглянуті в індивідуальному порядку. Крім того, є документи, які необхідні тільки фінансовим установам або крипто біржам, а не місцевим регулюючим органам. У такому разі ми також зможемо надати Вам необхідну допомогу.","title":"Які країни ви можете охопити?"},{"content":"Ми можемо надати вам аудит криптогаманця. Аудит буде включати аналіз джерела коштів, контрагентів, ризиків і поведінки обраного криптогаманця. Такий аудит криптогаманця може знадобитися юридичним або фізичним особам за умови подальшої взаємодії з банком або регулятором.","title":"Чи видаєте ви звіт про due diligence (аудит) криптогаманців?"}],"title":"Популярні запитання"},"form":{"thankYou":{"description":"Ми цінуємо вашу зацікавленість у наших консультаційних послугах з питань криптокомплаєнсу. Ваш запит успішно відправлено, і наша команда готова допомогти вам. Протягом наступних 24 годин один з наших сертифікованих спеціалістів зв\'яжеться з вами, щоб детально обговорити ваш запит.","info":{"description":"Поки ви чекаєте, відвідайте наш <a href=\\"https://blog.AML Zapex.com\\">блог</a>, щоб дізнатися про останні новини у світі крипто-комплаєнсу.","title":"Будьте в курсі"},"title":"Дякуємо, що звернулися до AML Zapex"}},"main":{"description":"Ми консультуємо клієнтів, враховуючи не лише вимоги законодавства, а й ринкову практику та бізнес-аспект питання","leaveRequest":"Залишити заявку","title":"Допомога криптокомпаніям з оформленням документів"},"services":{"description":"У команді AML Zapex працюють сертифіковані фахівці з різних галузей, включно з юриспруденцією, аудитом, дотриманням вимог AML/CFT і блокчейн-криміналістикою. Ми надаємо комплексні консультації, що враховують вимоги законодавства, ринкову практику та бізнес-аспекти.","hide":"Приховати","items":{"assisting":{"description":"Деякі з наших клієнтів зазнають труднощів з відкриттям рахунку для криптоактивів або послуг, пов\'язаних з фіатними коштами.","fullDescription":"Деякі з наших клієнтів зазнають труднощів з відкриттям рахунку для криптоактивів або послуг, пов\'язаних з фіатними коштами. Ми допомагаємо клієнтам знайти найбільш підходящу фінансову організацію або криптовалютну біржу, яка б відповідала очікуванням клієнта. Ми також допомагаємо клієнтам у спілкуванні з обраними фінансовими установами, щоб гарантувати швидкий і безпроблемний процес відкриття рахунку. Така комунікація може включати заповнення анкет, форм, пов\'язаних з AML, тощо.","title":"Допомога клієнтам у відкритті рахунку в банках або на криптовалютних біржах"},"audit":{"description":"Деякі з наших консультантів - юристи та аудитори з досвідом роботи в провідних юридичних фірмах, Big4 і CEX, які можуть допомогти нашим клієнтам у вирішенні юридичних питань і надати вичерпні звіти про комплексну юридичну перевірку.","fullDescription":"Деякі з наших консультантів - юристи та аудитори з досвідом роботи в провідних юридичних фірмах, Big4 і CEX, які можуть допомогти нашим клієнтам у вирішенні юридичних питань і надати вичерпні звіти про комплексну юридичну перевірку. Наприклад, ми можемо підготувати звіт про комплексну юридичну перевірку криптогаманців, криптоінвестиційних компаній тощо.","title":"Юридичні та аудиторські послуги"},"drafting":{"description":"Ми допомагаємо криптовалютним компаніям розробляти і розвивати внутрішні процеси AML/KYC.","fullDescription":"Ми допомагаємо криптовалютним компаніям розробляти і розвивати внутрішні процеси AML/KYC. Наприклад, ми розробляємо й адаптуємо внутрішню процедуру AML з урахуванням бізнес-процесів клієнта та поточної ситуації. Крім того, ми допомагаємо клієнтам скласти заяву про оцінку ризиків, розробити політику інформування про порушення, політику протидії корупції та хабарництву, а також правила моніторингу операцій з криптоактивами. Усі перераховані вище документи необхідні регуляторам або банкам/криптобіржам, якщо клієнт планує подати заявку на отримання ліцензії або відкриття рахунку.","title":"Розробка процедур AML/KYC та моніторингу транзакцій"},"trainings":{"description":"Ми маємо практичний досвід роботи у сфері AML з криптоактивами або блокчейном і хочемо поділитися своїми знаннями.","fullDescription":"Ми маємо практичний досвід роботи у сфері AML з криптоактивами або блокчейном і хочемо поділитися своїми знаннями. Тому ми постійно розробляємо тренінги для навчання наших клієнтів новим ризикам AML/CFT з акцентом на криптоактиви.<br /><br /> Важливо зазначити, що всі регульовані криптобізнеси, які мають рахунки на CEX або в банках, повинні щорічно проводити щонайменше один тренінг з AML.","title":"Тренінги з AML/KYC та блокчейн-аналітики"}},"learnMore":"Детальніше","title":"Наші сервіси"},"specialist":{"nikoDemchuk":{"description":"Niko Demchuk - досвідчений фахівець із боротьби з відмиванням грошей, сертифікований Асоціацією сертифікованих фахівців із боротьби з відмиванням грошей (ACAMS). Здобувши ступінь магістра в галузі інформаційного IT-права, Niko є експертом у галузі криптовалютного регулювання, AML та KYC-комплаєнсу. Має великий досвід роботи в юридичних фірмах і досвід роботи з різними крипторегламентами. Наразі є юристом і керівником відділу консалтингу компанії AML Zapex.","name":"Niko Demchuk","position":"Робота з юристами та державними органами"},"title":"Leading Сertified AML Specialist"}},"cookies":{"acceptButton":"Прийняти усі файли cookies","text":"Переглядаючи цей веб-сайт, ви дозволяєте використання файлів cookie сторонніми службами."},"copy":"Скопіювати","cryptopayment":{"contact":{"button":"Запитати у Telegram","description":"У нас гнучкі умови та індивідуальний підхід. Напишіть нам у Telegram і ми підберемо найкращий варіант відповідно до вимог вашого бізнесу","title":"Зв\'яжіться з нами щоб обговорити умови"},"howMatch":{"description":"Уникайте високих комісій із AML Zapex. Приховані комісії та зворотні платежі залишилися у минулому","items":[{"label1":"Персональні гаманці","label2":"Гаманці продавців","label3":"Фіатні рахунки","title":"Персональна плата для отримання"},{"description":"Комісія за відправлення встановлюється, виходячи з курсу долара США і розраховується під час створення платежу","title":"Персональна плата для відправки"},{"title":"Комісія за зняття фіатних коштів становить"}],"title":"Скільки коштує ?"},"info":{"items":[{"button":"Дізнатися більше","description":"Допомагаємо бізнесу приймати криптовалютні платежі або розраховуватися із партнерами. Ми перевіряємо ці транзакції і ви можете бути впевнені у чистоті активів.","title":"Що ми робимо ?"},{"title":"Отримуйте криптоплатежі з будь-якої точки світу"},{"title":"Платежі у найпопулярніших криптовалютах"}]},"join":{"button":"Почати зараз","description":"Приймайте платежі, залучайте нових клієнтів та уникайте високих комісій завдяки AML Zapex","title":"Долучайтесь до тисяч компаній, які вже використовують криптоплатежі"},"main":{"button":"Безкоштовна консультація","description":"Перевіряємо всі криптоплатежі, щоб ваш бізнес приймав чи надсилав лише чисті кошти.","title":"Прийом криптоплатежів для вашого бізнесу"}},"fatf":{"advantages":{"items":[{"button":"Безкоштовна консультація","description":"Якщо не зможемо допомогти – прямо про це скажемо","title":"Ви платите за результат"},{"button":"Обговорити умови","description":"Якщо навіть за рік ви напишете нам про проблему, ми дамо вам рекомендації безкоштовно","title":"Нам не байдуже"},{"button":"Написати нам у Telegram","description1":"Ми на зв\'язку 24/7, тому будь-яке питання можемо вирішити швидко та у форматі живого спілкування.","description2":"Ми живі люди, тому вночі можемо відповідати не так оперативно, як вдень ✌️","title":"Підтримка 24/7"},{"button":"Укласти контракт","description":"Ми врятували близько <b><span>$5 359 800</span></b> від блокування на біржах та обмінниках","title":"Досвід"},{"button":"Зв\'язатися з нами","description":"Ми цінуємо ваш час, тому відповідаємо протягом 30 секунд","title":"Відповідаємо протягом 30 сек"},{"button":"Безкоштовна консультація","description":"Ми вже допомогли <b><span>200</span></b> компаніям відповідати вимогам FATF","title":"Професіоналізм"}],"title":"Наші переваги"},"canWeHelp":{"first":{"description":"Складання юридичної документації, необхідної для процесу ліцензування крипто бізнесу, такої як процедури AML, спеціальних процедур для блокчейн аналітики, декларація схильності до ризиків та інші","title":"Процедура ліцензування крипто бізнесу"},"items":[{"description":"Перевіряємо, звідки і куди ви відправляли гроші, і який ризик блокування зараз у ваших актів","title":"Перевірка на AML"},{"description":"Ми допоможемо вам заповнити всі документи та звіти для подання до будь-яких органів/компаній контролю","title":"Аудит + звіт"},{"description":"Після детального аудиту команди AML фахівців ваш бізнес буде відповідати всім вимогам FATF","title":"Відповідність FATF"}],"note":"Наш досвід заснований на MiCA та нормативних потребах криптодружніх країн.","second":{"description":"Консультування крипто-компаній у повсякденному бізнесі, наприклад, проведення тренінгів щодо боротьби з відмиванням грошей та допомогти з розслідуванням щодо походження крипто активів.<br /><br /> Щорічні AML тренінги є обов\'язковими для ліцензованих крипто компаній.","title":"AML Консалтинг"},"third":{"description":"Підтримка крипто-компаній під час відкриття банківських рахунків і заповнення анкет від фінансових установ. <br /><br />Крім того, ми пропонуємо аудит обраного криптогаманця щодо наявності юридичних ризиків. <br /><br />Банк може вимагати заповнити анкети, пов\'язані з AML, або надати політики AML тощо.","title":"Регуляторна допомога"},"title":"Що ми робимо?"},"consultation":{"button":"Написати нам у Telegram","description":"Консультація у форматі Telegram-чату. Вона безкоштовна, і якщо ми не зможемо вам допомогти, одразу про це скажемо. Ви нічого не втрачаєте і завжди можете відмовитись.","title":"Консультація безкоштовна і ні до чого не зобов\'язує"},"faq":{"items":[{"content":"Недотримання вимог AML/KYC може призвести до відкликання ліцензії регулюючими органами, великим штрафам або навіть ув\'язненням. Крім того, ваш обліковий запис може бути заблокований, а ваші активи можуть бути заморожені фінансовою установою або крипто біржею.","title":"Навіщо потрібно дотримуватись вимог AML/KYC?"},{"content":"Наш досвід зосереджений на допомозі для подання заяви на крипто ліцензію, дотримання вимог AML/KYC та відкриття банківського рахунку. Пакет документів або конкретна порада залежить від потреб клієнта. Ми також можемо надавати AML тренінги.","title":"Як ми можемо допомогти?"},{"content":"Залежно від запиту, процес підготовки процедур або інших документів може зайняти від 1-2 тижнів до 1 місяця.","title":"Скільки часу це займає?"},{"content":"Насамперед ми покриваємо країни ЄС і СНД для ліцензування або завдань, пов\'язаних з AML/KYC. Проте, інші країни можуть бути розглянуті в індивідуальному порядку. Крім того, є документи, які необхідні тільки фінансовим установам або крипто біржам, а не місцевим регулюючим органам. У такому разі ми також зможемо надати Вам необхідну допомогу.","title":"Які країни ви можете охопити?"},{"content":"Ми можемо надати вам аудит криптогаманця. Аудит буде включати аналіз джерела коштів, контрагентів, ризиків і поведінки обраного криптогаманця. Такий аудит криптогаманця може знадобитися юридичним або фізичним особам за умови подальшої взаємодії з банком або регулятором.","title":"Чи видаєте ви звіт про due diligence (аудит) криптогаманців?"}],"title":"Популярні питання"},"main":{"button":"Безкоштовна консультація","description":"Команда фахівців з AML підготує ваш бізнес до відповідності вимогам FATF по AML.","note":"<b>200+</b> підприємств успішно виконали нормативні вимоги","specs1":"Підготувати документи для крипто ліцензій","specs2":"Відкрити банківський рахунок","specs3":"Скласти AML процедури, інші необхідні документи та провести AML тренінг","subtitle":"Наша команда фахівців допоможе вам:","title":"Допомога криптокомпаніям з оформленням документів"},"program":{"buttonPdf":"PDF Приклад аналізу","from":"Від","items":[{"button":"Зв\'язатися з нами в Telegram","description":"Надаємо чітку основу для криптобізнесу з дотриманням вимог AML.","specs":[{"text":"Команда проаналізує ваші активи та покаже походження всіх коштів"},{"text":"Надішлемо повний звіт про те, куди пішли ваші гроші і який ризик блокування зараз у ваших активів +надамо пояснення."},{"text":"Ми розповімо як зберігати дані, робити перевірки на наявність санкцій, перевіряти політично значущих осіб та небажаних ЗМІ."},{"text":"Ми надамо чітку інструкцію, як захистити себе від штрафів за відмивання грошей."}]},{"button":"Зв\'язатися з нами в Telegram","description":"Проаналізуємо всі пункти на предмет дотримання вимог AML. Проведемо повну AML перевірку вашого бізнесу","special":"Це допомогло {{value}} компаніям","specs":[{"text":"Команда проаналізує ваші активи та покаже походження всіх коштів"},{"text":"Надішлемо повний звіт про те, куди пішли ваші гроші та який ризик блокування ваших активів + надамо пояснення."},{"text":"Детальні правила для KYC/CDD "},{"text":"Ми допоможемо заповнити звіти Enhanced Due Diligence (Розширена комплексна перевірка) – EDD, які містять детальні відомості про перевірки фізичних та юридичних осіб"}]},{"button":"Зв\'язатися з нами в Telegram","description":"Проведемо аналіз вашого бізнесу. Покажемо, в яких місцях потрібно буде поміняти бізнес-процеси для відповідності вимогам AML","specs":[{"text":"Професійний аналіз ситуації із досвідченим AML офіцером."},{"text":"Надішлемо повний звіт про те, куди пішли ваші гроші та який ризик блокування ваших активів + надамо пояснення."},{"text":"Ми допоможемо вам заповнити всі документи та звіти для подання до будь-яких органів/компаній контролю (SAR, CTR та інші)"},{"text":"Ми перевіряємо криптогаманці й транзакції на наявність там \\"брудних\\" грошей, надішлемо детальний звіт+надамо пояснення."},{"text":"Ми підготуємо ваш бізнес до відповідності FATF."}]}],"note":"Ви платите лише за результат. Якщо не зможемо допомогти – прямо про це скажемо","text":"Наявність аудиту збільшує довіру до Вас із боку партнерів. Підвищує лояльність клієнтів і може прискорити прийняття рішення про співпрацю з вами","title":"Програми з дотримання вимог AML"}},"feedback":{"thankYou":{"description":"Ми отримали Ваш запит і цінуємо Ваш інтерес до послуг AML Zapex.","info":{"description":"Поки ви чекаєте, відвідайте наш <a href=\\"https://blog.AML Zapex.com\\">блог</a>, щоб дізнатися про останні новини у світі крипто-комплаєнсу.","title":"Будьте в курсі"},"title":"Дякуємо за Ваш запит"},"title":"Зворотний зв\'язок"},"footer":{"copyright":"AML Zapex","info":{"links":{"AboutTheProject":"Про проєкт","aboutUs":"Про нас","analysis":"Аналіз","blog":"Блог","careers":"Вакансії","certifications":"Сертифікати","pressKit":"Прес-кіт","risks":"Ризики","support":"Підтримка"},"title":"Компанія"},"legal":{"links":{"privacyPolicy":"Політика конфіденційності","termsOfuse":"Умови використання","userAgreement":"Згода користувача"},"title":"Нормативна база"},"products":{"links":{"AML Zapex":"AML Zapex","apiIntegration":"Інтеграція з API","cryptopayment":"Криптоплатежі","fatf":"Консультації щодо криптовалют","investigation":"Розслідування","kyc":"Автоматизована KYC"},"title":"Продукти"},"socials":{"links":{"facebook":"Facebook","instagram":"Instagram","linkedIn":"LinkedIn","reddit":"Reddit","telegram":"Telegram","tikTok":"ТікТок","youTube":"YouTube"},"title":"Соціальні мережі"}},"fortune":{"codeModal":{"clickToCopy":"Натисніть, щоб скопіювати","copied":"Скопійовано","getPrize":"Отримати приз","note":"Скопіюйте свій унікальний бонусний код й натисніть \xabОтримати приз\xbb, щоб поділитися ним з нашим менеджером і отримати винагороду","title":"Ваш унікальний бонус-код для активації призу","willRedirected":"Ви будете перенаправлені до служби підтримки через {{countdown}} сек"},"end":{"contactUs":"Зв\'яжіться з нами","title":"Дякуємо за ваш інтерес до участі в AML Zapex’s Birthday Bonus Giveaway! Однак ми хочемо повідомити, що розіграш вже завершився.","title2":"Але не хвилюйтеся – у нас ще є спеціальний бонус для вас!","title3":"Будь ласка, зверніться до нашого менеджера для отримання персональної пропозиції"},"hero":{"birthday":"<span>День Народження</span> \uD83C\uDF89 <span>AML Zapex</span>","description":"Обертайте колесо, щоб виграти ексклюзивну <span>знижку</span> або <span>безплатні AML-перевірки!</span>","title":"Святкуйте разом з нами <b>\uD83E\uDD73</b> та вигравайте приз до дня народження AML Zapex!"},"wheel":{"getLucky":"Пощастить!","spinNow":"Крутити зараз!"},"winModal":{"congratulations":"Вітаємо!","discount":"Знижка","enterYourEmailLabel":"Введіть ваш email, щоб отримати унікальний бонус-код для активації призу:","enterYourEmailPlaceholder":"Введіть ваш email","freeChecks":"Безкоштовних перевірок","getPromoCode":"Отримати бонус-код","youHaveWon":"Ви виграли"}},"header":{"announcement":{"final":"сьогодні","link":"Перевірте їх","main":"Ми оновили тарифи для бізнесу! "},"checkWallet":"Перевірити гаманець","createAnAccount":"Створити акаунт","links":{"aboutUs":"Про нас","analysis":"Аналіз","blog":"Блог","faq":"FAQ","howDoesItWork":"Як це працює?","price":"Вартість","products":"Продукти","risks":"Ризики"},"logIn":"Увійти","requestDemo":"Проверка","signIn":"Увійти","signUp":"Зареєструватися","webCheck":"Особистий кабінет"},"iSOCertified":{"buttonText":"Дізнатися більше","description":"Ми постійно вдосконалюємо наші заходи безпеки, щоб забезпечити надійність та захист. Дізнайтеся більше про наші сертифікації","title":"ISO сертифіковано"},"initiatives":{"moreInOurBlog":"Більше в нашому блозі","title":"Наші ініціативи"},"investigations":{"consult":{"description":"Ми зв\'яжемося з вами протягом 24 годин, щоб повідомити про подальші дії та описати вашу ситуацію","title":"Готові почати? Надішліть форму, і наші фахівці розглянуть вашу справу"},"description":{"text":"Команда <span>сертифікованих</span> експертів AML Zapex надає комплексну <span>аналітичну</span> та <span>юридичну</span> підтримку при поверненні викраденої криптовалюти"},"disclaimer":{"description1":"AML Zapex не телефонує вам і не звертається до вас першим із проханням допомогти в процесі повернення коштів, оскільки будь-які дзвінки, електронні листи або повідомлення без вашої згоди суперечать правилам конфіденційності. Зазвичай наші клієнти звертаються до AML Zapex спочатку за допомогою способів, зазначених на нашому сайті.","description2":"Будь ласка, зверніть увагу, що для зв\'язку електронною поштою або будь-якими іншими каналами зв\'язку (Telegram, WhatsApp), щоб запобігти шахрайству в Інтернеті та криптовалютним аферам, AML Zapex використовує лише корпоративні доменні електронні адреси <a href=\\"https://AML Zapex.com\\">https://AML Zapex.com</a> або офіційні канали зв\'язку, зазначені на офіційному сайті. Користувач зобов\'язаний перевіряти правильність написання сайту і спілкуватися тільки з офіційними каналами зв\'язку, зазначеними на сайті AML Zapex.","description3":"Усі інвойси виготовляються нашою компанією Safelement Limited. Що стосується платежів, то AML Zapex приймає як крипто-, так і фіатні платежі за наші Послуги. Криптовалютні платежі приймаються на ліцензовані криптовалютні біржі. Для фіатних платежів ми використовуємо корпоративні банківські рахунки в найбільших банках Гонконгу та ЄС. Крім того, ми використовуємо послуги з оплати кредитними картками, що надаються компанією Stripe і підключені до тих самих банківських рахунків.","hide":"Приховати","learnMore":"Детальніше","subtitle":"Шахрайство й обман:","title":"Юридичне застереження"},"expertise":{"description":"Довіртеся нашій досвідченій команді фахівців у сфері розслідувань.","items":{"1":"Chainalysis Reactor Certification (CRC)","2":"Chainalysis KYT Certification (CKC)","3":"Cryptocurrency Fundamentals Certification (CCFC)","4":"Chainalysis Ethereum Investigations Certification (CEIC)","5":"ACAMS Fightning Moder Slavery And Human Trafficking","6":"<b>Повноправні учасники</b><ul><li>Crypto Defence Alliance</li><li>ATHI</li></ul>"},"subtitle":"Наші сертифікати:","title":"Наші знання"},"faq":{"items":[{"content":"AML Zapex може досліджувати різні криптовалюти, включно з Bitcoin, Ethereum та іншими популярними альткоїнами, але не обмежуючись ними.","title":"Які криптовалюти може досліджувати AML Zapex?"},{"content":"Тривалість розслідування залежить від складності справи. Як правило, протягом 24 годин ми безкоштовно надаємо огляд ситуації. Потім, якщо ми володіємо всією необхідною інформацією, протягом 72 годин ми надаємо Вам звіт про розслідування.  Однак загальний термін може бути й більшим, особливо якщо для продовження розслідування нам необхідно позначити гаманці для відстеження.","title":"Скільки часу займає блокчейн-розслідування AML Zapex?"},{"content":"Тривалість процесу повернення може істотно варіюватися залежно від складності справи, часу реагування бірж і правоохоронних органів, а також інших факторів. Найкраще підготуватися до того, що процес може зайняти кілька місяців.","title":"Скільки часу зазвичай займає процес повного повернення?"},{"content":"Хоча AML Zapex використовує передові методи та інструменти, щоб максимально збільшити шанси на повернення коштів, неможливо гарантувати успішний результат у кожному випадку через природу транзакцій на основі блокчейна і різного ступеня співпраці з третіми сторонами.","title":"Чи є гарантія, що мою втрачену криптовалюту буде повернуто?"},{"content":"Вартість може варіюватися залежно від складності справи. Для отримання індивідуальної пропозиції заповніть форму або зв\'яжіться з нами.","title":"Яка вартість послуг з повернення коштів?"},{"content":"Вартість наших послуг не підлягає поверненню, оскільки вона покриває трудовитрати та ресурси, вкладені командою AML Zapex у розслідування, незалежно від результату. Будьте впевнені, ми зробимо все можливе для повернення ваших цифрових активів.","title":"Якщо мої кошти не вдасться повернути, чи отримаю я відшкодування за сервісний збір?"},{"content":"Важливо надати якомога більше подробиць про втрачену або вкрадену криптовалюту, включно з адресами відповідних гаманців, TX транзакцій, характером втрати (наприклад, шахрайство, крадіжка), а також усіма відповідними записами про зв\'язок або транзакції.","title":"Яку інформацію мені необхідно надати для початку процесу з повернення коштів?"},{"content":"Заяву в поліцію слід подавати залежно від країни проживання. AML Zapex надає інструкцію щодо правильного подання заяви в поліцію про втрату або крадіжку криптовалюти. Ця заява і подальша повістка необхідні для процесу з повернення коштів.","title":"Де можна подати заяву в поліцію?"},{"content":"Компанія AML Zapex дуже серйозно ставиться до безпеки вашої особистої інформації. Ми дотримуємося суворих правил конфіденційності даних і використовуємо надійні методи захисту вашої інформації на всіх етапах процесу з повернення коштів.","title":"Наскільки надійно захищені мої персональні дані під час цього процесу?"},{"content":"AML Zapex надає освітні матеріали та ресурси, які допоможуть вам захистити свої цифрові активи та уникнути поширених шахрайств і ризиків у криптовалютній сфері. Сюди входять найкращі практики забезпечення безпеки гаманців, розпізнавання потенційних шахрайств, а також розуміння ризиків і переваг різних видів криптовалютних транзакцій та інвестицій.","title":"Що я можу зробити, щоб запобігти майбутнім втратам криптовалюти?"}],"title":"Популярні запитання"},"form":{"thankYou":{"description":"Ми отримали ваш запит на допомогу у поверненні втраченої, зламаної або викраденої криптовалюти. Ми розуміємо нагальність та делікатність вашої ситуації і прагнемо допомогти вам у цей складний час.","info":{"description1":"Наша команда сертифікованих експертів з повернення криптовалют розгляне надану вами інформацію. Ми прагнемо зрозуміти кожен аспект вашого випадку, щоб запропонувати найбільш ефективну стратегію повернення.","description2":"Ви можете розраховувати на відповідь від нас протягом 24 годин з первинною оцінкою вашої справи та наступними кроками, які потрібно вжити.","title":"Що буде далі?"},"title":"Дякуємо, що надіслали свій кейс до AML Zapex"}},"main":{"description":"З\'ясуйте, де знаходиться ваша втрачена криптовалюта, провівши ретельне розслідування для можливого повернення.","leaveRequest":"Залишити заявку","title":"Повернення викраденої криптовалюти та блокчейн розслідування"},"process":{"description":"Кроки, які ми робимо для аналізу та можливого повернення втрачених активів.","items":{"0":{"description":"Заповніть нашу детальну анкету, щоб надати нам якомога більше інформації про вашу ситуацію.","title":"Збір інформації:"},"1":{"description":"Ви можете подати заяву в поліцію самостійно або дотримуватися наших рекомендацій, щоб зробити це ефективно.","title":"Заява в поліцію:"},"2":{"description":"За необхідності ми можемо надати необхідну допомогу та надати інформацію для проведення поліцейського розслідування та отримання повістки до суду для повернення активів.","title":"Підтримка поліцейського розслідування:"},"3":{"description1":"У цьому процесі ми робимо кілька кроків, зокрема:","description2":"Внесення пов\'язаних гаманців до чорного списку бірж","description3":"Помітка пов\'язаних гаманців провайдерами блокчейн аналітики","description4":"Помітка для відстеження, якщо кошти розміщені в нерозпізнаних гаманцях","title":"Блокчейн розслідування:"},"4":{"description":"За результатами блокчейн розслідування ми складаємо комплексний звіт.","title":"Звіт про розслідування:"},"5":{"description":"Якщо викрадені кошти потрапляють на біржу, ми зв\'язуємося з нею, щоб запросити можливе заморожування викрадених активів.","title":"Комунікація з біржами:"}},"title":"Процес повернення криптовалюти"},"recovery":{"button":"Залишити заявку","description":"Надішліть заявку просто зараз, і наші фахівці зв\'яжуться з вами протягом 24 годин.","title":"Готові розпочати процес повернення криптовалюти?"}},"kyc":{"check":{"items":{"addressVerification":{"description":"Ми підтверджуємо адресу за допомогою офіційного документа, такого як рахунок за комунальні послуги або банківські виписки, порівнюючи їх з адресою, наданою клієнтом.","title":"Перевірка адреси"},"amlCheck":{"description":"Відповідно до вимог Закону про запобігання відмиванню грошей та фінансуванню тероризму, ми перевіряємо кошти та їх походження.","title":"Перевірка AML"},"companyCheck":{"description":"<ul><li>Юрисдикція реєстрації компанії та вид діяльності</li><li>Чи є компанія активною згідно з Корпоративним реєстром</li><li>Зареєстрована адреса компанії</li><li>Уповноважені особи компанії та їхні документи, що посвідчують особу</li><li>Бенефіціари компанії та їхні документи, що посвідчують особу</li></ul>","title":"Перевірка компанії (KYB)"},"documentVerification":{"description":"Перевірка документа в режимі реального часу. Перевіряємо справжність і дійсність документа і перевіряємо персональні дані користувача.","title":"Перевірка документа"},"faceVerification":{"description":"Підтвердження особи за допомогою розпізнавання обличчя. Ми підтверджуємо, що селфі клієнта збігаються з фотографією на його документах.","title":"Перевірка обличчя"},"ongoingMonitoring":{"description":"Ми пропонуємо постійний чорний список ваших клієнтів. Якщо туди хтось додасться, ми проведемо додаткову перевірку клієнта і повідомимо вас.","title":"Постійний моніторинг KYC/AML"},"paymentMethod":{"description":"Ми перевіряємо фінансовий документ, кредитну картку або транзакцію, щоб переконатися, що платіж був здійснений перевіреним клієнтом.","title":"Спосіб оплати"},"pepScreening":{"description":"Перевірте статус політично викритої особи, санкції та список спостереження особи, щоб уникнути роботи з людьми або компаніями з високим ризиком.","title":"Скринінг PEP"},"sourceOfFunds":{"description":"Ми перевіряємо походження коштів та підтверджуючі документи, такі як рахунки-фактури, контракти, заробітна плата.","title":"Перевірка джерела коштів"},"taxVerification":{"description":"Збираємо ідентифікаційний номер платника податків з поданого документа і перевіряємо його дійсність.","title":"Податкова перевірка"},"viabilityCheck":{"description":"Перевірка документів, виданих фінансовими установами або юристом, що підтверджують надійність клієнта.","title":"Перевірка фінансової життєздатності"},"videoVerification":{"description":"Підтвердження особи за допомогою відеодзвінка. Ми підтверджуємо, що замовник хоче бути перевіреним і що надані документи належать йому.","title":"Перевірка відео"}},"title":"Що ми перевіряємо?"},"contact":{"button":"Зв\'яжіться з нами в Telegram","description":"Ми пропонуємо гнучкі умови та індивідуальний підхід. Зв\'яжіться з нами, і ми знайдемо найкращий варіант, розроблений відповідно до потреб вашого бізнесу.","title":"Зв\'яжіться з нами, щоб обговорити умови"},"info":{"items":[{"button":"Дізнатися більше","description1":"Захистіть свій бізнес за допомогою процесу верифікації, який синхронізується з вимогами вашого регулятора. Перевірте адреси, способи оплати, верифікуйте обличчя та особисті документи, підтвердження грошових коштів тощо, щоб переконатися, щоб забезпечити повний комплаєнс вашого бізнесу.","description2":"Перевірте надійність кожного користувача, щоб захистити себе від незаконної діяльності клієнтів, яка може мати негативні наслідки для вашого бізнесу.","title":"Що ми пропонуємо?"},{"button":"Дізнатися більше","description1":"Наш сервіс дуже простий у налаштуванні, що гарантує, що ви можете одразу розпочати верифікацію своїх користувачів.","description2":"KYC часто потрібен для отримання ліцензій, дозволів та управління фінансами. Ми надаємо зручний спосіб для адміністраторів та користувачів виконати цю вимогу.","title":"Навіщо він потрібен?"},{"button":"Переглянути документацію","description":"Коли справа доходить до інтеграції, ми виконаємо роботу за вас. Таким чином, ваші розробники можуть зосередитися на створенні коду, а не на інтеграції комплаєнсу.","title":"Допомога"}],"title":"KYC AML Zapex - це швидкий і простий спосіб підтвердити особу вашого клієнта"},"main":{"badge":"Легко налаштувати","button":"Запланувати безкоштовну демонстрацію","description":"Перевірте більше користувачів за допомогою швидкої, безпечної, автоматизованої та ефективної перевірки, що значно зменшує ручне навантаження.","title":"Перевірка користувачів за допомогою автоматизованого KYC"},"why":{"items":[{"button":"Переглянути документацію","description":"Провідні в галузі стандарти безпеки, підкріплені сертифікацією ISO та регулярними аудитами безпеки.","title":"Безпека"},{"button":"Переглянути документацію","description":"Сертифікований Європейським інститутом менеджменту та фінансів.","title":"Сертифікація"},{"button":"Зв\'яжіться з нами через Telegram","description":"Ми можемо перевірити понад 4000 типів документів із 240 різних країн. Почніть залучати клієнтів з будь-якої точки світу.","title":"Міжнародна сумісність"},{"button":"Контакт","title":"Прискорюйте обслуговування клієнтів, зменшіть ризики та спростіть ваші бізнес-процеси"}],"title":"Чому обирають нас"}},"kycHelp":{"title":"Support Center"},"main":{"doing":{"items":[{"button":"Приклад PDF звіту","description":"Ми перевіряємо криптогаманці й транзакції на наявність там брудних грошей і надаємо детальний звіт. Це потрібно, щоб у вас не було проблем з органами контролю і щоб убезпечити вас від шахраїв.","title":"Що ми робимо?"},{"description1":"Якщо вам зайдуть брудні гроші — ви ризикуєте отримати запит від органів контролю і втратити свої кошти через блокування.","description2":"Цього може не трапитися, але ваш гаманець буде позначений.","description3":"Рекомендуємо робити перевірки та бути впевненими у своїх активах.","title":"Навіщо це Вам?"},{"button":"Перевірити у Telegram","title":"Перша перевірка безкоштовна"}]},"faq":{"info":{"answer":"Надамо відповідь протягом 30 сек","description":"Пишіть нам у телеграм. Відповідаємо швидко і по справі, адже у нас все схоплено \uD83D\uDC4C","inTelegram":"Ми в Telegram","note":"Ми на зв\'язку <b>24/7</b>, проте вночі не завжди можемо відповідати швидко","title":"Не знайшли своє запитання?"},"items":[{"content":"Основний результат перевірки AML Zapex включає відсоток оцінки ризику, джерела ризику та приналежність до чорного списку. <br /><br />Крім того, результат перевірки може містити різні необов\'язкові відомості про адресу, наприклад приналежність до кластеру, фактичний баланс та суму переказаних коштів. <br /><br />Результат перевірки може бути неповним щодо описаних даних, якщо відсутня необхідна інформація.<br /><br />Зверніть увагу, що для блокчейнів, перевірка яких відбувається в обмеженому режимі, кластеризація та відсоткове значення оцінки ризику перевірки недоступні. Оцінка ризику для контрагента може бути надана тільки в тому випадку, якщо він відноситься до кластеризованої сутності.","title":"Що показує перевірка AML Zapex?"},{"content":"Загальний показник ризику (у відсотках) – це ймовірність того, що адреса пов’язана з незаконною діяльністю. <br /><br />AML Zapex знаходить зв’язки перевіреної адреси з іншими адресами в блокчейні та з сутностями різних категорій, кожна з яких має власний умовний показник ризику і обчислює загальний показник ризику на основі цих зв’язків <br /><br />Розрахунок загального показнику ризику враховує серйозність ризику виявлених зв’язків. Наприклад, у разі зв’язків з категоріями сутностей Mining (ризик 0%) та Darknet (ризик 100%) вплив на ризик Darknet, як більш ризикової категорії, буде вищим, а Mining матиме меншу вагу в оцінці ризику.","title":"Що означає відсотковий показник ризику?"},{"content":"AML Zapex перевіряє вказану адресу гаманця на зв’язки до відомих сервісів на блокчейні - сутностей. AML Zapex умовно об’єднує ці сервіси в групи з різним рівнем ризику незаконної діяльності – категорії сутностей.<br /><br /> Перевірка AML показує зв’язки перевіреної адреси з цими категоріями сутностей як джерела ризику, з якими адреса взаємодіяла, а також відсоток коштів, перерахованих із/до цих сервісів.<br /><br /> На основі всіх джерел ризику розраховується загальний показник ризику, який допомагає користувачу приймати подальші рішення щодо активів.","title":"Що означають джерела ризику?"},{"content":"Перевірка адреси – це аналіз усіх її зв’язків з іншими адресами та сутностями на блокчейні, враховуючи вхідний і вихідний рух коштів.<br /><br /> Процес перевірки транзакції відрізняється від перевірки адреси, і результат залежить від вашої сторони в транзакції. Загальний показник ризику завжди стосується контрагента.<br /><br /> Щоб перевірити транзакцію, вам потрібно вказати TxID, адресу отримувача та вибрати свою сторону в транзакції: <br /> - Одержувач (ви отримали депозит на гаманець) - перевіряються адреси, з яких надійшли кошти. Джерела ризику описують сервіси, з яких відправники TX накопичували переказані кошти з розподілом у відсотках.<br /> - Відправник (ви зробили вивід з гаманця) - перевіряється адреса, на яку надійшли кошти. Джерела ризику описують усі зв’язки адреси отримувача з розподілом у відсотках.<br /><br /> Таким чином, при перевірці транзакції перевіряються ризики для отримувача, якщо ви отримуєте кошти, та ризики для відправника, якщо надсилаєте кошти.","title":"У чому різниця між перевірками адреси та транзакції?"},{"content":"Кожен клієнт визначає для себе, який відсоток ризику прийнятний для нього. Умовно оцінку ризику можна розділити наступним чином:\\n<br />\\n - 0-25% - це чистий гаманець/угода;\\n<br />\\n - 25-75% - середній рівень ризику;\\n<br />\\n - 75% + такий гаманце/угода вважається ризикованою.\\n<br />\\nТакож варто звернути увагу на червоні джерела ризику в детальному аналізі, описаному на <a href=\\"https://AML Zapex.com/what-do-we-analyze\\"> сторінці\\n</a>","title":"Як я розумію оцінку ризиків?"},{"content":"AML Zapex підтримує всі основні блокчейни та токени на них. Ми постійно додаємо підтримку нових криптовалют. Ви завжди можете перевірити актуальний список доступних для перевірки криптовалют у \\n<a href=\\"http://web.AML Zapex.com\\" target=\\"_blank\\">\\nв особистому кабінеті \\n</a>\\n або в\\n<a href=\\"https://docs.AML Zapex.com/\\" target=\\"_blank\\">\\nДокументації API\\n</a>\\n.","title":"Які криптовалюти аналізує AML Zapex?"},{"content":"Перевіряючи гаманці контрагентів перед транзакцією, ви можете відхилити їх активи, якщо оцінка ризику висока. Також перед переказом коштів на інші сервіси можна перевірити адресу гаманця і зберегти результат (зробити скріншот). <br /><br />Якщо перевірка показує, що ваші активи не мали зв\'язку з незаконною діяльністю і сервіс заблокував вас, ви можете надати збережений результат для підтвердження чистоти ваших активів.","title":"Як AML Zapex допомагає захистити вас від блокування?"},{"content":"Результати перевірки базуються на міжнародних базах даних, які постійно оновлюються. Тож адреса, яка вчора мала 0% ризику, могла отримати або передати актив ризикованому контрагенту сьогодні. В цьому випадку показник ризику зміниться. Якщо ви хочете бути впевненими в результаті і визначити, в чому причина високого ризику, ми можемо зробити детальну перевірку для вас. Для цього надішліть нам електронний лист за адресою <a href=\\"mailto:info@AML Zapex.com\\">\\ninfo@AML Zapex.com </a>","title":"Ризик вище 50%, але я впевнений, що адреса надійна. Що робити?"},{"content":"Відповідь на це залежить від вашої унікальної моделі ризику. Загальна рекомендація полягає в тому, щоб виконувати перевірку AML кожного разу, коли ви взаємодієте з невідомим гаманцем або смарт-контрактом.","title":"Як часто рекомендується робити перевірки?"},{"content":"Після підтвердження транзакції залишок поповнюється: <br /> • до 10 хвилин, якщо оплата була здійснена протягом 24 годин після видачі рахунку-фактури, <br /> • до 25 хвилин, якщо оплата була здійснена через 24 години після видачі рахунку-фактури. Загалом, BTC, ETH, USDT та фіат обробляються швидше, ніж інші монети.","title":"Як швидко поповнюється баланс?"},{"content":"Якщо ви придбали перевірки без терміну дії - вони залишаються у вашому обліковому записі, і ви можете використовувати їх у будь-який час.<br /><br /> Якщо ви придбали перевірки з терміном дії - вони будуть списані з вашого рахунку після закінчення терміну дії.","title":"Що станеться, якщо я не використаю всі свої перевірки за місяць?"},{"content":"Ви можете придбати додаткові перевірки за потреби. Кількість перевірок завжди відображається у вашому профілі користувача.","title":"Що робити, якщо мені знадобиться більше перевірок?"},{"content":"AML Zapex захищає дані, дотримуючись строгих стандартів, що підтверджується нашими сертифікаціями ISO 9001 та ISO 27001.<br />\\n<br /> Наша сертифікація за стандартом ISO 9001 підкреслює нашу відданість забезпеченню стабільної якості та підвищенню задоволеності клієнтів. Ще важливіше, що сертифікація за стандартом ISO 27001 демонструє нашу відданість підтриманню високих стандартів інформаційної безпеки, захисту конфіденційних даних та дотриманню нормативних вимог.<br />\\n<br /> Дізнайтеся більше про наші сертифікації <a href=\\"https://AML Zapex.com/ua/certifications\\">тут</a>.","title":"Як AML Zapex забезпечує захист даних?"}],"title":"Популярні запитання"},"howMatch":{"button":"Зв\'яжіться з нами","label":"Перша перевірка – безкоштовно","note":"За нашою статистикою, <b>кожен четвертий гаманець — підозрілий</b>.<br />Витративши кілька доларів на перевірку, ви можете убезпечити себе від втрат на кілька тисяч доларів.","perCheck":"за перевірку","startsFrom":"Від","title":"Скільки вартує ваш спокій?"},"officers":{"items":{"[0]":{"label":"Co-Founder","name":"Slava Demchuk"},"[1]":{"label":"Chief Operating Officer","name":"Vasily Vidmanov"},"[2]":{"label":"Chief Commercial Officer","name":"Andrew Aleksandrov"},"[3]":{"label":"Blockchain Analyst","name":"Sid Panda"},"[4]":{"label":"Lawyer/Certified AML Specialist","name":"Niko Demchuk"},"[5]":{"label":"Legal Advisor","name":"Ganna Voievodina"},"[6]":{"label":"Business development manager","name":"Vlad Raskosov"},"[7]":{"label":"Business development manager","name":"Denys Shestak"},"[8]":{"label":"Customer support manager","name":"Nikita Raskosov"},"anmolJain":{"label":"VP","name":"Anmol Jain"},"graemeHampton":{"label":"Certified AML Specialist","name":"Graeme Hampton"},"nikoDemchuk":{"label":"Certified AML Specialist","name":"Niko Demchuk"},"sidPanda":{"label":"Blockchain Analyst","name":"Sid Panda"},"slavaDemchuk":{"label":"Co-Founder","name":"Slava Demchuk"}},"text":"AML фахівці допомагають вирішити складні ситуації та вберегти вас від штрафів і блокувань. Професійні фахівці представлятимуть ваші інтереси аж до суду, якщо знадобиться.","title":"Наша команда"},"partners":{"title":"Нам довіряють"},"prime":{"AML ZapexOnWeb":"Особистий кабінет","button":"Розпочати перевірку","checkInTelegram":"Перевірити гаманець","description":"AML Zapex автоматизує процедури AML/KYC і знижує витрати на дотримання вимог законодавства","primaryButton":"Проверка","secondaryButton":"Чат-бот","telegramCheck":"Telegram check","title":"Комплексний комплаєнс продукт для крипто бізнесу"},"reviews":{"description":"Досліджуйте наш сервіс із людьми, яким ми вже допомогли.","items":[{"note":" Den• <a href=\\"https://csgo500.com\\">CSGO500","quote":"Ми використовуємо AML Zapex майже два роки, і завдяки їм ми успішно виявили та зупинили сотні загроз. Обов\'язково продовжу користуватися їхніми послугами."},{"note":"CEO - <a href=\\"https://uniochange.com\\">Uniochange</a>","quote":"Криптоспільнота стикалася з труднощами у виявленні джерел підозрілих коштів, але після появи AML Zapex усі труднощі зникли. Усім раджу користуватися цим сервісом, поки ваша діяльність не стане повністю законною."},{"note":"<a href=\\"https://alltrust.me\\">AllTrust</a>","quote":"Ми дуже задоволені AML Zapex, завдяки інтеграції з нашою платформою нам вдалося запобігти великій кількості транзакцій, пов\'язаних із незаконними коштами. Впевнені, що й надалі розвиватимемо нашу співпрацю."},{"note":"<a href=\\"https://guarda.com\\">","quote":"AML Zapex вже давно є для нас чудовим партнером. Він неймовірно простий у використанні, надійний і найголовніше забезпечує додатковий спокій для наших користувачів. Ми в Guarda з нетерпінням чекаємо на можливість продовжити нашу спільну роботу."}],"title":"Наші клієнти говорять про нас"},"services":{"description":"Ми надаємо повний пакет опцій для безпечної роботи з криптовалютою","items":[{"description":"API-рішення, що розширюють можливості інструментів для забезпечення відповідності вимогам AML у межах вашої поточної системи. Усі транзакції автоматично перевіряються на відповідність вимогам AML і FATF і знижують ризики вашого бізнесу.","title":"AML/KYT Скрінінг"},{"description":"Оптимізований і автоматизований процес верифікації дає змогу вашому бізнесу швидко залучати клієнтів, знижуючи ручні зусилля і мінімізуючи ризики ідентифікаційного шахрайства та незаконної активності.","title":"KYC для бізнесу"},{"description":"Запустіть свій криптовалютний проєкт з легкістю, простотою і впевненістю, використовуючи наш консалтинг з питань AML і KYC, що забезпечує безперешкодне дотримання вимог та ефективне управління ризиками від самого початку.","title":"AML/KYC Процедури"},{"description":"За допомогою наших фахівців ви зможете оптимізувати відкриття корпоративного рахунку на CEX EMI і зосередитися на розвитку бізнесу в криптоіндустрії.","title":"Корпоративні рахунки на CEX/EMI"},{"description":"Повернення вкраденої криптовалюти за допомогою експертних блокчейн-розслідувань, що дають змогу оперативно виявити винних і відстежити кошти для їх ефективного повернення.","title":"Блокчейн-розслідування"}],"learnMore":"Дізнатися більше","title":"AML Zapex Сервіси"},"stats":{"items":[{"description":"Кількість виявлених ризикованих активів","title":"+$100 000 000"},{"description":"Відділ Compliance, що відповідає вимогам AML","title":"6 500 000+"},{"description":"Перевірених провайдерів","title":"60,000+"}]},"whatElse":{"items":[{"button":"Перевірити адресу","description":"Покажемо, чи перебуває адреса в санкційних списках. Будь-яка взаємодія із такими адресами може призвести до штрафів, блокування або відкликання ліцензії.","title":"Перевіряємо санкційні списки"},{"button":"Безкоштовна консультація","description":"Ми допомагаємо повернути гроші, вкрадені шахраями з вашого гаманця. Фахівець проаналізує ситуацію і запропонує рішення.","note":"Ви платите лише за результат. Якщо не зможемо допомогти – прямо про це скажемо","title":"Допомагаємо врятувати вкрадену крипту"},{"button":"Переглянути документацію","description1":"Ми допоможемо вам налаштувати автоматичну перевірку всіх вхідних транзакцій. Надаємо програміста, який допоможе швидко інтегрувати наш API у ваш сервіс.","description2":"Вам більше не потрібно хвилюватися та звільниться час для інших справ.","title":"Інтеграція з API"}],"title":"Що ще?"},"why":{"items":[{"buttonText":"Давайте обговоримо","description":"Персональні дані обробляються та зберігаються відповідно до GDPR.","description1":"AML Zapex пропонує широкий спектр комплаєнс-рішень, адаптованих для кожного клієнта.","description2":"Ми впевнені в тому, що зможемо задовольнити ваші вимоги, адже ми допомогли 300+ криптовалютним організаціям усіх розмірів у 25 юрисдикціях.","title":"Індивідуальний підхід"},{"description":"У нас є відповідні сертифікати, які ви можете надати органам контролю.","description1":"Ми пропонуємо KYT/Wallet скринінг, KYC, AML і багато іншого для криптобізнесу.","description2":"Оцінювання ризиків в AML Zapex ґрунтується на численних джерелах даних, що забезпечує отримання найбільш достовірної інформації в галузі.","description3":"Наші зручні у використанні сервіси та рішення оптимізують процеси в компанії, усуваючи складнощі, пов\'язані з дотриманням вимог провайдерів послуг.","title":"Інтегрована платформа забезпечення відповідності"},{"buttonText":"Зв\'язатися","description":"Ми розуміємо, наскільки важлива швидка і доброзичлива підтримка наших клієнтів, тому ми завжди поруч. Підтримка 24/7.","description1":"Ми на зв\'язку 24/7, тому будь-яке питання можемо вирішити швидко та у форматі живого спілкування.","description2":"Ми живі люди, тому вночі можемо відповідати не так оперативно, як вдень ✌️","note":"Відповідь у нічний час може зайняти трохи більше часу.","title":"Підтримка клієнтів"},{"description":"Ми врятували близько {{value}} від блокування на біржах та обмінниках","title":"Досвід"}],"title":"Чому AML Zapex?"},"works":{"description":"Тут відео","title":"Як це працює ?"},"yearStats":{"label":"За три роки сервісом AML Zapex скористалися","text":"компаній та обмінників"}},"menuProducts":{"AML ZapexPro":{"description":"Відстеження джерела та напрямків транзакцій","label":"AML Zapex Pro"},"amlTraining":{"description":"Спеціалізовані навчальні програми для криптовалютної індустрії","label":"AML Тренінг"},"chatBot":{"description":"Миттєві AML перевірки - найпростіший спосіб спробувати наші продукти","label":"AML Чат-бот"},"consulting":{"description":"Допомагаємо криптобізнесу в розробці AML процедур, наданні AML-тренінгів та відкритті банківських рахунків","label":"Консалтинг"},"dynamic":{"description":"Використовуйте наші проміжні адреси, щоб уникнути ризиків","label":"Динамічні мерчант адреси"},"forBusiness":"Для бізнесу","forPersonalUse":"Для особистого користування","investigation":{"description":"Допомога в поверненні вкраденої криптовалюти","label":"Розслідування"},"kyc":{"description":"Перевіряйте користувачів швидко, безпечно та ефективно за допомогою автоматизованої системи верифікації","label":"KYC"},"kyt":{"description":"Автоматична перевірка всіх транзакцій і гаманців через API","label":"KYT"},"mobileApp":{"description":"AML-перевірки у зручному мобільному додатку","label":"Мобільний додаток"}},"notFindQuestion":{"answer":"Відповімо протягом 30 сек","description":"Зв\'яжіться з нами через месенджер. Ми на зв\'язку <b>24/7</b>, тому будь-яке питання можемо вирішити швидко та у форматі живого спілкування.","inTelegram":"Ми в Telegram","note":"Відповідь вночі може зайняти трохи більше часу.","onMessenger":"Ми в месенджері","title":"Не знайшли своє запитання?"},"partners":{"title":"Наші 300+ клієнтів і партнерів"},"pro":{"experience":{"items":{"consistent":{"description":"Глибокий аналіз ончейн-активності забезпечить дотримання вашою компанією криптовалютних регуляцій у вашій юрисдикції. Скористайтеся системою онлайн-моніторингу для виявлення підозрілих акаунтів та операцій.","title":"Постійний комплаєнс"},"efficient":{"description":"<span>Знайдіть. Розслідуйте. Дійте.</span> Наші аналітичні інструменти допоможуть вам виявити джерело й одержувача криптовалютних транзакцій. Скористайтесь нашими інноваційними технологіями, щоб ефективно боротися з кримінальною діяльністю та проводити розслідування швидше й точніше.","title":"Ефективні розслідування"}},"title":"Отримайте доступ до найякіснішої аналітики блокчейна — найкращі дані за доступною ціною."},"faq":{"info":{"answer":"Відповідаємо протягом 30 секунд","description":"Отримайте швидку та ефективну підтримку 24/7 Зв\'яжіться з нами в Telegram для будь-яких питань або допомоги. Ніяких ботів, тільки людська підтримка.","inTelegram":"Ми в телеграмі","note":"Відповідь вночі може зайняти трохи більше часу.","title":"Вашого питання немає в списку?"},"title":"Поширені запитання"},"features":{"items":[{"description":"AML Zapex Pro використовує найкращі доступні дані. Ми скануємо гаманці та транзакції, щоб виявити зв\'язки з незаконними криптовалютними активами, що використовуються у злочинній або сумнівній діяльності, включно з даркнет-ринками, шахрайством, програмами- вимагачами та міксерами криптовалют.","title":"Винятковий доступ до даних"},{"description":"AML Zapex Pro перетворює складний аналіз блокчейна на простий.","title":"Простота пошуку"},{"description":"AML Zapex Pro пов\'язує криптовалютні транзакції з реальними учасниками.","title":"Зв\'язок віртуальних транзакцій з реальними компаніями"},{"description":"Простий інтерфейс AML Zapex Pro зручний для кожного користувача. Вдосконалені процеси дають змогу відстежувати кошти, виявляти акаунти та транзакції з високим ступенем ризику.","title":"Покращена доступність"},{"description":"Отримуйте більш оперативні результати за допомогою AML Zapex Pro, який відстежує рух коштів через блокчейни. Визначайте адреси входу та виходу, а також своп-активність, щоб виявити приховані дії.","title":"Прозорість криптовалютних транзакцій"},{"description":"За допомогою AML Zapex Pro ви зможете створити вичерпну історію руху криптовалютних коштів. Експортуйте та візуалізуйте дані, щоб отримати повне уявлення про злочинну діяльність.","title":"Більше переконливих доказів"}],"title":"Функції AML Zapex Pro"},"hero":{"button":"Спробуйте AML Zapex Pro","description":"AML Zapex Pro — це інструмент аналізу блокчейна, що надає експертам із розслідувань та фахівцям із комплаєнсу доступ до найкращих даних у галузі","info":{"compliance":{"description":"Оптимізуйте KYT/AML процеси, щоб забезпечити дотримання заходів комплаєнсу.","title":"Комплаєнс"},"investigations":{"description":"Швидко вирішуйте кейси за допомогою ефективного відстеження на ончейні. Зупиніть криптозлочинність.","title":"Розслідування"}},"title":"Розплутайте мережу блокчейн-злочинів"},"secure":{"buttonText":"Спробуйте AML Zapex Pro","title":"Захистіть свою криптовалюту за допомогою перевірки ризиків гаманця та транзакцій"},"sets":{"buttonText":"Спробуйте AML Zapex Pro","items":[{"list":["Легальні криптопроєкти","Санкції та контрольні списки","Програми-вимагачі","Тероризм і групи з відмивання коштів"],"title":"Унікальні дані"},{"list":["Прозорі дані","Зручність для користувача","Легкий старт"],"title":"Простота використання"},{"list":["Оцінювання ризиків","Викриття злочинної діяльності","Заохочення до партнерства"],"title":"Безпека та захист"}],"title":"Що вирізняє AML Zapex Pro?"},"superior":{"items":{"analyzeRisk":{"description":"Перевіряйте рахунки за критичними списками спостереження, включно з OFAC.","title":"Аналіз ризиків"},"continuousTracking":{"description":"Відстеження руху коштів у режимі реального часу.","title":"Постійний моніторинг"},"gatherEvidence":{"description":"Скористайтесь нашими запатентованими даними для посилення вашого кейс-розслідування.","title":"Збір доказів"},"reliableData":{"description":"Доступ до інформації для об\'єктів з різними рівнями ризику.","title":"Надійні дані"},"try":{"buttonText":"Активуйте зараз!","title":"Розкрийте увесь потенціал нашого рішення"},"userFriendlyDashboard":{"description":"Проста навігація та візуалізація ключових даних.","title":"Зручна панель керування"}},"title":"Відмінний дизайн та функціональність"}},"saleBanner":{"text1":"Отримайте знижку 15% на всі тарифи","text2":"до 30 грудня 2023 року"},"seo":{"cryptoChecker":{"description":"AML Zapex - інструмент для AML перевірки криптовалюти та захисту гаманців. Дізнайтеся, як ваші біткоїни та альткоїни можуть бути пов\'язані з незаконною діяльністю.","title":"Повноцінне рішення для AML перевірки та захисту криптовалют | AML Zapex"},"cryptoCheckerLand":{"description":"AML Zapex - надійний сервіс для AML перевірки криптовалюти та безпеки ваших гаманців. Перевірте, як ваші цифрові активи можуть бути пов\'язані з незаконною діяльністю.","title":"AML перевірка крипти - комплексне рішення для AML перевірки"},"cryptoComplianceConsulting":{"description":"Консультування криптобізнесу з питань AML та KYC процедур, юридичний супровід і аудиторські послуги. Професійна допомога для забезпечення відповідності регуляторним вимогам.","title":"Консалтинг та юридичний супровід для криптобізнесу | AML та KYC Процедури"},"home":{"description":"AML Zapex – надійний сервіс для AML перевірки та фінансового моніторингу криптовалюти. Захистіть свій криптобізнес від ризиків відмивання грошей за допомогою AML Zapex.","title":"AML Zapex – комплексний AML моніторинг та перевірка криптогаманців"},"kyc":{"description":"Швидка та безпечна платформа KYC-верифікації, що пропонує автоматизовані рішення для KYC, AML, ідентифікації особи та податкової верифікації. Почніть з легкістю залучати клієнтів по всьому світу.","title":"KYC/AML рішення для комплаєнсу бізнесу | Автоматизована перевірка KYC"},"kyt":{"description":"API оптимізація для миттєвої оцінки ризиків всіх вхідних криптотранзакцій. AML Zapex надає API для перевірки гаманців та допомагає у боротьбі з відмиванням грошей.","title":"API інтеграція для KYT та AML перевірки транзакцій"},"pro":{"description":"AML Zapex Pro – аналітичний інструмент для моніторингу транзакцій, оцінки ризиків та виявлення підозрілих дій у блокчейні.","title":"AML Zapex Pro: інструмент для аналізу блокчейну та AML-комплаєнсу"},"reclaimCrypto":{"description":"Наша команда надає послуги з термінового розслідування та повернення вкрадених криптовалют. Ми допоможемо вам відновити кошти та заблокувати активи, викрадені шахраями.","title":"Допомога у відновленні, поверненні та блокуванні вкраденої криптовалюти | AML Zapex"},"training":{"description":"Запишіться на експертне навчання з протидії відмиванню коштів, розроблене спеціально для криптоіндустрії. Захистіть свій бізнес від фінансових злочинів і регуляторних ризиків. Отримайте необхідні знання з комплаєнсу.","title":"Навчання та сертифікація з AML для криптобізнесу | AML тренінг"}},"training":{"benefits":{"description":"Покращуйте свій криптовалютний бізнес за допомогою тренінгу AML Zapex:","items":{"1":{"title":"Підвищення операційної ефективності"},"2":{"title":"Зміцнення репутації"},"3":{"title":"Будьте на крок попереду регуляторних ризиків"}},"title":"Переваги навчання"},"consult":{"description":"Заповніть форму, щоб подати заявку на участь","formTitle":"Зареєструйтесь зараз - опануйте аналітику AML та блокчейн!","title":"Готові розпочати?"},"courses":{"buttonText":"Зареєструватися зараз","item1":{"title":"Живий тренінг з фахівцем"},"item2":{"title":"Цифровий сертифікат про закінчення"},"item3":{"title":"Тематичні дослідження та обговорення"},"title":"Курси включають в себе"},"faq":{"description":"Ознайомтеся з нашими поширеними запитаннями, щоб дізнатися більше про необхідність, частоту та сертифікацію наших тренінгів з протидії відмиванню коштів.","items":[{"content":"Так, багато юрисдикцій вимагають проходження навчання з протидії відмиванню коштів для ліцензованих і неліцензованих криптовалютних компаній. Однак конкретні вимоги можуть відрізнятися залежно від країни чи регіону.","title":"Чи є навчання з AML обов\'язковим для всіх підприємств криптоіндустрії?"},{"content":"Навчання з питань протидії відмиванню коштів слід проводити регулярно, щоб працівники були в курсі останніх подій. Частота може змінюватися залежно від галузевих стандартів, регуляторних вимог та оцінки ризиків компанії.","title":"Як часто слід проводити тренінги з AML?"},{"content":"Так, існують різні програми сертифікації для осіб, які спеціалізуються на комплаєнсі у сфері протидії відмиванню коштів. Ці сертифікати підтверджують знання та досвід професіоналів у цій галузі. Як ліцензовані фахівці в цій галузі, AML Zapex надає учасникам сертифікат після завершення навчання з AML Zapex, що ще більше підвищує їхню кваліфікацію у сфері протидії відмиванню коштів.","title":"Чи існують сертифікаційні програми для фахівців у сфері AML?"},{"content":"Авторитетних провайдерів тренінгів з протидії відмиванню коштів можна знайти через галузеві асоціації, регуляторні органи та спеціалізовані навчальні організації. Важливо обрати провайдера, який має значний досвід та знання у сфері протидії відмиванню коштів.","title":"Де компанії можуть знайти авторитетних провайдерів навчання у сфері AML?"}],"title":"Є питання?"},"form":{"thankYou":{"description":"Ми будемо раді допомогти вам підвищити операційну ефективність, зміцнити репутацію та випередити регуляторні ризики у вашому криптовалютному бізнесі.","title":"Дякуємо, що обрали AML Zapex для своїх потреб у навчанні з AML"}},"main":{"buttonText":"Почати","description":"Надання вашим командам можливості освоїти екосистему криптокомплаєнсу","subtitle":"Навчання та сертифікація","title":"Тренінг з комплаєнсу у сфері криптовалют та блокчейн-аналітики "},"trainings":{"blockchainEntries":[{"title":"Блокчейн-аналітика"},{"title":"Історія"},{"title":"Як це працює"},{"title":"Оцінка ризику"},{"title":"Перевірка транзакцій"},{"title":"Скринінг гаманця"},{"title":"Крипторозслідування"},{"title":"Виклики в аналітиці блокчейна"},{"title":"Учасники ринку"},{"title":"Регулювання"},{"title":"Випадки використання"}],"course1":{"buttonText":"Отримати сертифікат","description1":"Цей спеціалізований тренінг галузевого рівня охоплює основні теми з протидії відмиванню коштів, які викладені у стислій та зрозумілій формі. Сертифікація забезпечує хороший огляд для криптовалютних компаній, які починають свій шлях у криптовалютному світі.","description2":"Після тренінгу ви зможете зрозуміти, що таке відмивання коштів та інші фінансові злочини, засвоїти основні вимоги AML, як побудувати внутрішні AML-процеси, ризики AML в криптоіндустрії та багато іншого.","duration":"3,5 години","entryTitle":"Навчальний модуль складається з наступних розділів:","title":"Навчання та сертифікація з основ протидії відмиванню коштів у криптобізнесі"},"course2":{"buttonText":"Отримати сертифікат","description":"Цей тренінг та сертифікація розроблені нашими експертами спеціально для тих, хто вже знайомий з криптовалютами та має базові знання у сфері протидії відмиванню коштів, але хоче розширити свій досвід та розуміння аналітики блокчейну.","duration":"3 години","entryTitle":"Навчальний модуль складається з наступних розділів:","title":"Навчання та сертифікація з блокчейн-аналітики"},"fundamentalsEntries":[{"description":"Розуміння концепцій, методів та показників відмивання грошей та фінансування тероризму.","title":"Відмивання грошей та фінансування тероризму"},{"description":"Ознайомлення учасників із глобальними стандартами AML, правилами та юридичними зобов\'язаннями, характерними для криптоіндустрії.","title":"Стандарти AML та правова база"},{"description":"Визначення притаманних ризиків криптовалют, таких як анонімність, транскордонні транзакції та використання цифрових активів для незаконної діяльності.","title":"Ризики відмивання грошей у криптоіндустрії"},{"description":"Вивчення ролей та обов\'язків різних зацікавлених сторін у рамках AML, включаючи керівництво, відповідальних службовців та внутрішніх аудиторів.","title":"Три лінії оборони"},{"description":"Надання рекомендацій та найкращих практик для впровадження ефективних процедур відмивання коштів у криптобізнесі, включаючи належну перевірку клієнтів (CDD), моніторинг транзакцій та повідомлення про підозрілу діяльність.","title":"Процедури AML"},{"description":"Розуміння конкретних вимог щодо протидії відмивання коштів, встановлених регулюючими органами, таких як ведення обліку, обов\'язки щодо звітності та методології оцінки ризиків.","title":"Основні вимоги до AML"},{"description":"Знайомство учасників з інструментами та методами блокчейн-аналітики для моніторингу та аналізу транзакцій на блокчейні для виявлення підозрілих дій.","title":"Блокчейн-аналітика"},{"description":"Навчання учасників щодо міжнародних санкційних режимів та важливості перевірки транзакцій та організацій відповідно до санкційних списків.","title":"Санкції"},{"description":"Інформування учасників про останні тенденції, тактику та методи, які застосовують особи, що відмивають гроші та терористи, щоб відповідно адаптувати заходи щодо відмивання коштів.","title":"Переважаючі технології, методи та тенденції ML/TF:"},{"description":"Робота над практичними завданнями, що дозволяє учасникам застосовувати свої знання та навички вирішення проблем.","title":"Тематичні дослідження"}],"seeAllProgram":"Переглянути всю програму","showLess":"Показати менше","title":"Професійні тренінги та сертифікації"},"why":{"buttonText":"Зареєструйтеся для отримання деталей","description":"У швидкоплинному світі криптовалют захистіть свій бізнес від фінансових злочинів, регуляторних санкцій та репутаційних втрат, опанувавши мистецтво та науку комплаєнсу у сфері протидії відмиванню доходів, одержаних злочинним шляхом.","title":"Чому варто обрати AML-тренінг від AML Zapex?"}},"trustedMembers":{"title":"Ми є повноправними учасниками"},"wasCopiedToClipboard":"було скопійовано в буфер обміну","why":{"block1":{"buttonText":"Давайте обговоримо","description1":"AML Zapex пропонує широкий спектр комплаєнс-рішень, адаптованих для кожного клієнта","description2":"Ми впевнені в тому, що зможемо задовольнити ваші вимоги, адже ми допомогли 300+ криптовалютним організаціям усіх розмірів у 25 юрисдикціях","title":"Індивідуальний підхід"},"block2":{"description1":"Ми пропонуємо KYT/Wallet скринінг, KYC, AML і багато іншого для криптобізнесу","description2":"Оцінювання ризиків в AML Zapex ґрунтується на численних джерелах даних, що забезпечує отримання найбільш достовірної інформації в галузі","description3":"Наші зручні у використанні сервіси та рішення оптимізують процеси в компанії, усуваючи складнощі, пов\'язані з дотриманням вимог провайдерів послуг","title":"Інтегрована платформа забезпечення відповідності"},"block3":{"buttonText":"Зв\'язатися","description":"Ми розуміємо, наскільки важлива швидка і доброзичлива підтримка наших клієнтів, тому ми завжди поруч. Підтримка 24/7","note":"Відповідь у нічний час може зайняти трохи більше часу","title":"Підтримка клієнтів"},"title":"Чому AML Zapex?"}}}'),
                er = JSON.parse('{"translation":{"aboutUs":{"culture":{"description":"We think that any success at AML Zapex conditioned from two things: our people and our culture.\\n\\n","items":[{"button":"Try AML Zapex now","description1":"Our goal is to create an honest and transparent cryptocurrency market and make a tool for protecting our reputation and assets available to everyone","title":"Our mission"},{"button":"Become a part of the team","description":"Today, a team of more than {{specialistsCount}} specialists in four different offices (Kyiv, London, Gothenburg and Hong Kong) is working on the creation and development of the service.","title":"People"},{"button":"More about the project","description":"Our algorithm is constantly improving and analyzes more than 10 thousand open sources and <b>2.5 thousand </b>+ spam addresses in real time.","title":"Technology"}],"title":"Our culture"},"experts":{"title":"Our Experts"},"main":{"description":"Online assessment of crypto addresses and transactions, founded in 2019 by a team of RegTech specialists in accordance with FATF international recommendations"},"products":{"items":[{"button":"Try Safe3 now","description":"Web 3.0 Decentralized Crypto Wallet. \\nThe first crypto wallet that protects you from malicious assets, powered by AML Zapex & PureFi Protocol and allowing access to multiple chains."},{"button":"More about PureFi","description":"The PureFi protocol allows Dapps to fully comply with local and global regulations while maintaining decentralization and user anonymity.\\n\\nAML Zapex is developed in partnership with the Hacken Foundation to provide a complete crypto asset analytics and AML/KYC procedure solution for the Web3 infrastructure. "}],"title":"Our other products"}},"analyze":{"items":{"green":{"bridge":{"description":"Entities enabling the transfer of assets via different blockchains. These connections allow the transfer of assets without trading them, differentiating bridges from decentralized exchanges.","title":"Bridge"},"exchange":{"description":"The organization allows users to buy, sell and trade cryptocurrencies with trading licenses that include the following aspects of services: <br /> —Depository, brokerage or other related financial services that provide exchange services where participants interact with a central party. <br /><br />And it does not include: <br /> — Licenses for non-specific financial services and jurisdictions included in the FATF non-cooperative list. <br /><br />They represent the most important and most used category of entities in the cryptocurrency industry, accounting for 90% of all funds sent via these services.","title":"Exchange"},"iCO":{"description":"The organization that crowdfunds its project by selling their newly minted cryptocurrency to investors in exchange for fiat currency or more common cryptocurrencies such as Bitcoin and Ether.<br /><br /> There are many legitimate examples of these offerings, but also there are many cases where bad actors raise funds via ICOs, then they take the money and disappear.","title":"ICO"},"marketplace":{"description":"Coins that were used to pay for legal activities","title":"Marketplace"},"merchantServices":{"description":"The entity that allows businesses to accept payments from their customers, also known as payment gateways or payment processors.<br /><br /> It often faciliates conversions to local fiat currency and transferring the funds into the merchant\'s bank account.","title":"Merchant Services"},"miner":{"description":"Coins mined by miners and not forwarded yet.","title":"Miner"},"nFTPlatform":{"description":"Protocols designed for NFTs issuing, trading, and selling. Though they are similar to smart contracts or decentralized exchanges, they are categorized by their main function.","title":"NFT Platform"},"nFTPlatformCollection":{"description":"NFTs collection on platforms designed for issuing, trading, and selling. Classified by their real-world purpose, despite their similarity to smart contracts or decentralized exchanges.","title":"NFT Platform Collection"},"other":{"description":"Coins obtained through airdrops, token sales or other means.","title":"Other"},"p2PExchange":{"description":"The entity is licensed to conduct a business that is specific to providing cryptocurrency exchange services where participants exchange directly with each other, without intermediaries.<br /><br /> It does not include non-specific financial services licenses and jurisdictions that are on the non-cooperative FATF list.","title":"P2P Exchange"},"paymentProcessor":{"description":"Coins related to payment services.","title":"Payment Management"},"seizedAssets":{"description":"Crypto assets seized by the government.","title":"Seized Assets"},"wallet":{"description":"Online Wallet is a service used for storing and transacting cryptocurrency. Hosted wallets, a type of online wallet, are custodial solutions where the service holds the user\'s private keys, posing potential risks of scams or insufficient security, though reputable providers may offer better security than non-expert individuals.","title":"Wallet"}},"red":{"childExploitation":{"description":"Entities associated with child exploitation.","title":"Child Exploitation"},"darkMarket":{"description":"Coins associated with illegal activities.","title":"Dark Market"},"darkService":{"description":"Coins related to child abuse, terrorist financing or drug trafficking.","title":"Dark Service"},"enforcementAction":{"description":"The entity is subject to legal proceedings with the judicial authorities.","title":"Enforcement action"},"fraudShop":{"description":"An entity that sells various types of data, including personal information, credit card information, and stolen accounts.<br /><br /> Fraudulent transactions usually differ from darknet markets in their behavior, such as constant replenishment of deposits and no incoming transactions to customers.","title":"Fraud Shop"},"fraudulentExchange":{"description":"Exchanges involved in exit scams, illegal behavior, or whose funds have been confiscated by government authorities.","title":"Fraudulent Exchange"},"gambling":{"description":"Coins associated with unlicensed online games","title":"Gambling"},"highRiskJurisdiction":{"description":"The jurisdiction that is listed on the the FATF\'s non-cooperative list, has extensive malicious cryptocurrency activity or does not have a well-developed legal and regulatory framework.<br /><br /> Including countries such as Iran, Venezuela, Albania and Democratic People\'s Republic of Korea, also known as North Korea.","title":"High-Risk Jurisdiction\\n"},"illegalService":{"description":"Coins associated with illegal activities.","title":"Illegal Service"},"illicitActorOrganization":{"description":"An organization or physical entity who directly or indirectly participates in various forms of illegal activity.\\n<br />\\n<br />\\n  It is often associated with such risky topics as darknet markets, fraudulent transactions, extremist financing and hacking.","title":"Illicit Actor/Organization"},"malware":{"description":"Addresses associated with harmful malware, including cryptojackers, that use host computers for mining purposes. Other malware types include clippers, botnets, trojans, and DDoS campaigns.","title":"Malware"},"mixer":{"description":"Coins that passed via a mixer to make tracking difficult or impossible. Mixers are mainly used for money laundering.","title":"Mixer"},"onlinePharmacy":{"description":"Entities that specialize in the illegal sale of unapproved or prescription drugs. They are comparable to the darknet markets, but they can operate both on the dark web and legally, giving rise to a separate classification.","title":"Online Pharmacy"},"ransom":{"description":"Coins obtained by extortion or blackmail.","title":"Ransom"},"sanctions":{"description":"Entities subject to sanctions.","title":"Sanctions"},"scam":{"description":"Coins that were obtained by deception.","title":"Scam\\n"},"specialMeasures":{"description":"Entities or addresses identified by FinCEN as posing a high money laundering risk. Countermeasures include recordkeeping, reporting requirements, and restrictions on fund transfers and account management.<br /><br /> The scope may extend to similar authorities in other countries or jurisdictions as they are implemented.","title":"Special Measures"},"stolenCoins":{"description":"Coins obtained by stealing someone else\'s cryptocurrency.","title":"Stolen Coins\\n"},"terrorismFinancing":{"description":"Entities associated with terrorism financing.","title":"Terrorism Financing"}},"yellow":{"aTM":{"description":"Coins obtained via cryptocurrency ATM operator.","title":"ATM"},"dEX":{"description":"The blockchain application that facilitates cryptocurrency and token trading via automated smart contracts.<br /><br /> Trades on the decentralized platform are peer-to-peer and have no third party or central authority other than the smart contract that executes the terms of the transaction, making it a popular money laundering tool among malicious actors.","title":"DEX"},"exchangeHighRisk":{"description":"An entity becomes high-risk based on the following criteria:<br /><br />  No KYC: does not require any customer information before allowing any level of deposit/withdrawal, or makes no attempt to verify that information.<br /><br />\\n  Criminal Ties: Criminal charges against the legal entity in connection with AML/CFT violations.<br /><br />\\n  Impact: High exposure to risky services such as darknet markets, other high-risk exchanges, or mixing is defined as a service whose direct high-risk exposure differs by one standard deviation from the average of all identified exchanges over a 12-month period.<br /><br />\\n  Jurisdiction: based in a jurisdiction with weak AML/CFT measures.<br /><br />Unlicensed: does not have any specific license to trade cryptocurrencies.","title":"Exchange | High Risk\\n"},"infrastructureAsAService":{"description":"The entity that offers computing and information services, including but not limited to VPNs, VPS and domain registrations.<br /><br />It could potentially be a payment to privacy-focused providers that could be used for illicit purposes, but at the same time could represent a payment to completely legitimate business provider.","title":"Infrastructure as a Service"},"lendingContract":{"description":"The blockchain application that allows users to lend and borrow crypto assets peer-to-peer without interacting with a third party or central authority.","title":"Lending Contract\\n"},"liquidityPools":{"description":"The smart contracts where tokens are locked for the purpose of providing liquidity.","title":"Liquidity Pools\\n"},"p2PExchangeHighRisk":{"description":"The entity does not have any special license to conduct and provide cryptocurrency exchange services, when participants exchange directly with each other, without intermediaries.<br /><br />\\n  It also includes entities that are licensed but located in listed jurisdictions, are listed as non-cooperating companies by the FATF, or do not provide KYC for large-value transactions, making them attractive for money laundering.","title":"P2P Exchange | High Risk\\n"},"privacyProtocol":{"description":"A protocol or entity that uses privacy features, such as zero-disclosure proofs, to provide users with privacy features.<br /><br />It ensures transaction transparency, but keeps counterparty addresses hidden.<br /><br />\\n  This feature is the default behavior of many privacy-protecting cryptocurrencies such as Monero and Secret, meaning that gaining access to these assets does not necessarily mean that funds have been mixed or intentionally obfuscated.","title":"Privacy Protocol\\n"},"smartContract":{"description":"Blockchain functionality that functions like a self-executing contract, with the terms of the agreement between buyer and seller written directly into lines of code, that are executed without the need of a third party.","title":"Smart Contract\\n"},"tokenSmartContract":{"description":"The crypto asset that is built on another blockchain and that can be sent and received using a crypto wallet.<br /><br /> There are various technical standards of agreed rules that determine the design, development, behaviour and operation of the given token.","title":"Token Smart Contract"},"unnamedService":{"description":"The category refers to currently unidentified clusters that exhibit the behavior expected of a service, by a large number of addresses and transactions.","title":"Unnamed Service"}}},"main":{"description":"We analyze addresses for belonging to more than 20 sources of risk to find suspicious transactions and determine the risk factor. We divided all sources into three categories.","title":"What do we analyze?"},"note":{"text1":"The presence of <b>Dark Market, Dark Service, Illegal Service</b> is a bad sign.","text2":"We recommend conducting additional investigations not to lose your funds due to blocking.","title":"Be Careful!"}},"b2b":{"contactForm":{"description":"Reach out and our team will address your queries","title":"Contact form"},"curiousAbout":{"button":"Inquire Here","description":"Our AML experts are ready to talk through your requirements and answer questions.","title":"Get ready to start with AML Zapex"},"help":{"items":[{"button":"Contact us","description":"Our automated and in-depth Know Your Transaction analysis helps companies align with AML/CFT requirements.","title":"How We Help"},{"button":"Report example","description":"You\'ll get a detailed, comprehensive report that outlines the transaction\'s risk score and sources to guide your compliance decisions.","title":"Comprehensive Reporting"},{"description":"We will check crypto wallets and transactions for “dirty” ones, send a full report and give explanations.","title":"We Check Crypto Wallets"},{"button":"Contact us","description":"We will help you to create and complete all documents and reports for submission to any inspection authorities/companies (SAR, CTR, etc.)","title":"We Assist With Documentation"},{"description":"We\'ve helped over 200 businesses successfully achieve FATF/MiCA compliance with our KYT and AML solutions.","title":"Proven Track Record"}],"title":"Assisting Businesses with FATF/MiCA Compliance"},"helpsWith":{"items":[{"description":"Our risk scoring ensures 99.5% data accuracy from 3 reliable sources.","title":"99.5% Data Accuracy"},{"description":"Verify Your Address Once, Access Lifetime Free Checks.","title":"Unlimited Free Address Verifications"},{"description":"Continuous monitoring of a specified blockchain address with real-time notifications for all incoming and outgoing transactions.","title":"Real-Time Alerts"},{"description":"AML Zapex handles integration, freeing your developers for core tasks.","description1":"We will help you to set up automatic verification of all incoming transactions.","description2":"Reducing maintenance on your end, so you can focus on what matters the most, your business.","title":"Assistance"},{"description":"AML Zapex simplifies transaction verification with a single access point, reducing maintenance for your business focus.","title":"API Documentation"},{"description":"AML Zapex contract assures regulators that compliance and security matters are effectively managed.","description1":"When it comes to integrating AML Zapex, we’ll handle the work for you.","description2":"This way, your developers can focus on building, not integrating compliance.","title":"AML Contract"}],"title":"AML Zapex Integration Streamlines KYT Compliance"},"howMatch":{"agreementCompliant":"AML/KYT/KYC agreement compliant with AMLD5, FATF, and MiCA","amlTrainingForFree":"<b>Crypto AML compliance & blockchain analytics training</b> <small>valued at $3,500, included in the pricing plan for free</small>","automaticChecksViaApi":"Automatic checks via API","bestChoice":"The best choice","business":{"checksCount":"15 000 AML checks","description":"Advanced solution for mid-sized businesses","otherServicesOff":"5% off other AML Zapex services","price":"$3750","pricePerCheck":"$0.25 per check","referralProgram":"5% referral program","testApi":"Test API for AML Zapex\'s KYC +$50 on balance"},"customerSupport":"24/7 customer support","dataSources":"5 data sources","description":"Different plans designed to fit your business needs","discuss":"Discuss","enterprise":{"checksCount":"100 000 — 500 000 AML checks","contactUsForQuote":"Contact us for a quote","description":"The special price and license for the largest companies","otherServicesOff":"10% off other AML Zapex services","price":"License","pricePerCheck":"Custom pricing","referralProgram":"15% referral program","supportTeam":"Compliance/investigation support team","testApi":"Test API for AML Zapex\'s KYC +$100 on balance"},"growth":{"checksCount":"5 000 AML checks","description":"Basic AML solution for growing businesses","otherServicesOff":"5% off other AML Zapex services","price":"$1500","pricePerCheck":"$0.30 per check","referralProgram":"2% referral program","testApi":"Test API for AML Zapex\'s KYC +$50 on balance"},"monitoringWithAlerts":"Address monitoring with alerts","note":"* After the calendar year from the date of payment, the balance of unused checks is annulled","ofac":"OFAC sanctions compliance","premium":{"checksCount":"50 000 AML checks","description":"The best price and compliance assistance for large companies","otherServicesOff":"10% off other AML Zapex services","price":"$10000","pricePerCheck":"$0.20 per check","referralProgram":"15% referral program","testApi":"Test API for AML Zapex\'s KYC +$100 on balance"},"serviceClustering":"Service clustering","special":"Get a 15% discount on all plans until December 30, 2023","supportedBlockchains":"25+ supported blockchains","title":"How much is your peace of mind worth?","yearly":"Yearly"},"main":{"button":"Book a Demo","description":"Increase risk coverage and maximize efficiency through our transaction monitoring KYT API solution.","title":"Stay Compliant and Safeguard Your Business with KYT"},"reviews":{"description":"Explore our service with people we\'ve helped","eliTaranto":{"company":"Digital Assets at EQIBank","name":"Eli Taranto","position":"CEO","text":"“The biggest problem was making sure the wallets were fully compliant. This means that we needed to connect several databases, mainly databases initiated by the government that are run and operated by national agencies and maintained globally and jointly with other players to make sure that no nefarious players get into the crypto space.”"}},"risk":{"text":"According to our statistics, <b>every fourth wallet is suspicious.</b><br/>\\nBy spending a few dollars on a check, you can protect yourself from significant losses."},"safety":{"items":[{"button":"Learn more","description":"Accept crypto payments or pay with cryptocurrencies with partners. Everything is safe, as we check all the money, and only clean funds come to you.","title":"Crypto payment processing"}],"title":"Secure crypto payment processing system"},"statistics":{"description":"AML Zapex\'s streamlined onboarding flow ensures you\'re up and running in no time, safeguarding your business from financial and fraud risks.","title":"Get fast integration and effective AML protection today"}},"b2c":{"contact":{"button":"Contact us via Telegram","description":"We are in touch 24/7, so any issue can be resolved quickly and in a live chat format.","note":"We are human beings, so we may not respond as promptly at night as we do during the day ✌️","title":"Still Have Questions?"},"email":{"buttonDownload":"Download an example","placeholder":"Your Email","title":"Leave your email address and we will send you an example of a detailed report"},"example":{"items":[{"button":"Check a wallet","description":"The report can be presented to regulators as a guarantee that your issue with the AML policy is closed and disputes are resolved","title":"Sending a detailed AML report"},{"button":"Learn more","description":"We analyze wallets from 25+ sources to find suspicious transactions and determine the risk factor.","title":"Analysis of all the sources of funds"},{"button":"Start checking","description":"We provide detailed information on each source","title":"Laying it out in details"},{"description":"You get information about how risky the wallet is and decide whether to deal with it","title":"Evaluation of risks"},{"button":"Check an Address","description":"We check whether an address is on the sanctions lists. Any interaction with such addresses can result in fines, blocking or license revocation","title":"Protection against sanctioned wallets"}],"title":"Wallet analysis example"},"main":{"button":"Start checking","description":"We check wallets and transactions and show the origin of funds. It helps to determine the purity of assets and protect yourself from scammers and stolen coins.","title":"Detailed analysis of crypto wallets"},"pricing":{"items":[{"button":"It fits me","description":"Ideal for starting to understand our service","note":"$3 per one check","price":"$3","spec1":"1 AML check","spec2":"Unlimited in time","spec3":"AML Zapex Support 24/7","title":"Start"},{"button":"I take","description":"Profitable package for holders","note":"$2.5 per one check","price":"$25","spec1":"10 AML checks","spec2":"1 Year","spec3":"AML Zapex Support 24/7","title":"Optimal"},{"badge":"The best choice","button":"Profitable","description":"For traders and investors","note":"$2 per one check","price":"$50","spec1":"25 AML checks","spec2":"1 Year","spec3":"AML Zapex Support 24/7","spec4":"Referral program","title":"Pro"}],"title":"Pricing"},"works":{"text":"Here is a video","title":"How it works?"}},"b2cpage":{"checkAddress":{"messengers":{"description":"Simple message in Telegram or WhatsApp is all it takes to initiate a comprehensive check of your crypto wallet, making it a convenient option for users who prefer instant messaging platforms.","title":"Messengers"},"or":"or","signUp":"Sign Up to get more additional functionality","title":"How to check your address?","website":{"description":"For a more traditional approach, log into your user account on our website. Here, you can purchase and conduct wallet checks with detailed guidance and support, providing a comprehensive and interactive experience. Or download our mobile app for the ultimate convenience and accessibility.","title":"Website or App"}},"checkYourWallet":"Check Your Wallet","faq":{"info":{"answer":"We reply within 30 seconds","description":"Contact us via Telegram. We are available 24/7 to ensure a hassle-free experience for everyone.","inTelegram":"We\'re on Telegram","note":"We are in touch <b>24/7</b>, however we can\'t always respond quickly at night","title":"Your question is not on the list?"},"title":"Frequently Asked Questions"},"hero":{"description":"Receiving funds of illegal origin could lead the risk of having your funds frozen","title":"Secure Your Wallets from Illicit Funds"},"info":{"address":{"description":"Real-time monitoring of any transactions associated with a specified blockchain address, receiving instant notifications for both incoming and outgoing transactions.","title":"Address Tracking"},"investigations":{"description":"View the direct and indirect connection between the given address and the identified clusters, the total value sent to/from the target wallet, and the distance to it.","title":"Investigations"},"suspicious":{"description":"Identifying assets linked to illegal activities such as fraud, terrorism, extortion, and other crimes.","title":"Suspicious Transactions"}},"investigation":{"download":"Download example report.pdf","title":"Wallet Address Investigation","videoTitle":"Watch video with Investigation example"},"keepCrypto":{"description":"Identify Potential Risks","items":{"avoid":{"description":"Regular verification of your crypto wallets and transactions can significantly reduce the risk of your assets being frozen on exchanges.","title":"Avoid CEX Account Suspension"},"boost":{"description":"Identify and address potential security threats to safeguard your investments and holdings.","title":"Boost Security"},"stay":{"description":"Comply with evolving regulations and avoid penalties. Regular checks help you adhere to legal requirements, avoiding penalties and legal issues.","title":"Stay Legal & Avoid Trouble"}},"title":"Keep Your Crypto Safe"},"moreProducts":{"items":{"amlTraining":{"description":"Specialized training programs for the cryptocurrency industrya","title":"AML Training"},"consulting":{"description":"Helping crypto businesses with AML procedures, training, and bank account setup","title":"Consulting"},"investigation":{"description":"Assistance with the recovery of stole crypto","title":"Investigation"},"kyc":{"description":"Verify more users with a fast, secure, automated and efficient verification","title":"KYC"},"kyt":{"description":"Automatic checking of all transactions and wallets through the API","title":"KYT"}},"leaveRequest":"Leave a request","title":"More products & solutions"},"orOnWeb":"or on Web","pricing":{"checklist":["25+\xa0Supported Blockchains and their native assets and tokens","Manual checking of transactions and wallets through the dashboard","24/7\xa0Priority Service","3\xa0Data Sources"],"forBusiness":"For business","forPersonal":"For personal","tariffs":{"advanced":{"badge":"Save 40%","checks":"100 Checks","perCheck":"$1.8 per one check","price":"$180"},"optimal":{"badge":"Save 17%","checks":"10 Checks","perCheck":"$2.5 per one check","price":"$25"},"pro":{"badge":"Save 33%","checks":"25 Checks","perCheck":"$2 per one check","price":"$50"},"start":{"checks":"3 Checks","perCheck":"$3 per one check","price":"$9"}},"title":"Pricing"},"risks":{"description":"Staying compliant with evolving regulatory standards is crucial in the cryptocurrency world. Regular checks help you adhere to legal requirements, avoiding penalties and legal issues.","title":"What do we analyze?"},"secureCrypto":{"title":"Secure Your Crypto with Wallet & Transaction Risk Screening"},"stats":{"description":"AML Zapex risk scoring is based on multiple data sources, ensuring that we have the most reliable data in the industry","title":"23% of wallets hold risky assets, exposing users to scams, fraud, or bad actors."},"trustedCompliance":{"title":"Trusted by compliance desks of"},"weTrusted":{"title":"We are trusted members of"},"why":{"discussButton":"Let’s discuss","integrated":{"description1":"We offer KYT/Wallet Screening, KYC, AML, and more for crypto businesses","description2":"AML Zapex\' risk scoring is based on multiple data sources, ensuring that we have the most reliable data in the industry","description3":"Our user-friendly services and solutions streamline your company processes, removing compliance provider complexity","title":"Integrated Compliance Platform"},"personalized":{"description1":"AML Zapex offers a wide range of compliance solutions customized for each client.","description2":"We\'re confident in meeting your demands after helping 300+ crypto enterprises of all sizes in 25 jurisdictions","title":"Personalized Approach"},"title":"Why AML Zapex?"}},"banners":{"title":"Banners"},"careers":{"advantages":{"items":{"dynamicEnvironment":{"description":"We thrive on change and innovation, ensuring every day is engaging and full of new opportunities.","title":"Dynamic Environment"},"freedomToCreate":{"description":"Take ownership, bring fresh ideas, and drive innovation in an environment that trusts and empowers you.","title":"Freedom to Create"},"makeDifference":{"description":"Your work will directly contribute to a safer, more trustworthy digital world.","title":"Make a Difference"},"supportiveCulture":{"description":"Collaboration and transparency are at the heart of what we do. Everyone’s voice is heard and valued.","title":"Supportive Culture"},"workLifeBalance":{"description":"We prioritize impact over rigid schedules — NO time tracking, just RESULTS.","title":"Work-Life Balance"},"workWithExperts":{"description":"Join a team that values knowledge-sharing, curiosity, and continuous learning to push boundaries.","title":"Work with Experts"}},"title":"Why You’ll Love Working with Us"},"employmentType":{"fullTime":"Full-time","partTime":"Part-time"},"gallery":{"title":"People Who Make It Happen"},"hero":{"description":"At AML Zapex, every challenge is an opportunity to innovate. Be part of a mission-driven team transforming blockchain compliance with advanced solutions. Your ideas, skills, and passion can make a lasting impact here.","openPositionsButton":"View Open Positions","title":"Together, We Shape the Future of Blockchain Analytics and Innovation"},"hrInfo":{"gotQuestions":"Got Questions? Let’s Talk"},"jobType":{"office":"Office","remote":"Remote"},"location":{"ukraine":"Ukraine","worldwide":"Worldwide"},"numbers":{"byTheNumbers":"by the Numbers","locations":"Locations","teammates":"Teammates","yearOverYearGrowth":"Year-Over-Year Growth","yearsOnTheMarket":"Years on the Market"},"openPositions":{"empty":"No open positions at this time","title":"Open Positions"},"openPositionsEntry":{"details":"Details"},"stickyNav":{"aboutUs":"About Us","advantages":"Advantages","openPositions":"Open Positions"},"submitApplication":{"attachYourResumeOrCV":"Attach your resume / CV","currentCompany":"Current Company","currentLocation":"Current Location","eMail":"E-mail","enterYourCompany":"Enter your company","enterYourEmail":"Enter your email","enterYourFullName":"Enter your full name","enterYourLocation":"Enter your location","enterYourPhone":"Enter your phone","fileIsTooLarge":"File is too large (max {{maxFileSize}}MB)","fullName":"Full name","invalidEmail":"Invalid e-mail","phone":"Phone","resumeOrCV":"Resume / CV","submit":"Submit","success":{"description":"Our team will review your application and get back to you shortly.","title":"Thank you for applying!"},"thisFieldIsRequired":"This field is required","title":"Submit your application"},"vacancy":{"applyForThisJob":"Apply for this job","backToOpenPositions":"Back to Open Positions"}},"certifications":{"90012015":{"description":"AML Zapex is ISO 9001 certified by the world\'s most recognized Quality Management System standard. This certification ensures we provide consistent quality, enhance customer satisfaction, streamline processes, reduce errors, and increase productivity. At AML Zapex, we are dedicated to meeting the highest standards of quality management.","title":"ISO9001"},"270012017":{"description":"AML Zapex has attained certification under ISO 27001, recognized globally as the premier standard for information security management systems. This certification establishes a strategic framework for enhancing information security, mitigating cyber risks, and ensuring regulatory compliance.","title":"ISO27001"},"description":"At AML Zapex, we prioritize our users\' security and continuously upgrade our measures to ensure their safety and trust","title":"AML Zapex Certifications"},"checking":{"addressPlaceholder":"Enter a crypto address","allFieldsRequired":"All fields are required","description":"Quickly identify the risk of a wallet and its source of funds through a simple report","emailError":"Please enter a valid email address","emailPlaceholder":"Your e-mail","note":"After the check, we will send the report to the email you provided","submitButton":"Check","successDescription":"Your request is being processed, you will receive the results of the check at the specified email address as soon as possible.","successTitle":"Thank you!","title":"Crypto Wallet Checking"},"consulting":{"consult":{"title":"Free consultation without any obligation"},"faq":{"items":[{"content":"Not being AML/KYC compliant may lead to a revocation of the license by the regulators and up to big fines or even an imprisonment. In addition, your account may be blocked and your assets may be frozen by a financial institution or a cryptocurrency exchange.","title":"Why do I need AML/KYC compliance?"},{"content":"Yes, we issue confirmation that the training provided by AML Zapex was completed. You can show this certificate to the auditors, regulators, banks or crypto exchanges when they will ask for proof of your AML/KYC or Blockchain analytics expertise.","title":"Do you issue certificates of training completion?"},{"content":"Depending on the request, the process of drafting procedures or other documents may take from 1 or 2 weeks and up to 1 month.","title":"How long does it take?"},{"content":"We primarily cover EU and CIS countries for licensing or AML related assignments. However, other countries may be considered on an individual basis. In addition, there are documents which are needed for financial institutions or cryptocurrency exchanges only and not for local regulators. In such a case, we will be able to provide you with necessary assistance as well.","title":"What countries can you cover?"},{"content":"We may provide you with the audit of a crypto wallet. The audit will include the analysis of the source of funds, counterparties, risks and behavior of the selected crypto wallet. Such audit of the crypto wallet may be necessary for businesses or individuals in further interaction with a bank or a regulator.","title":"Do you issue a due diligence (audit) report of crypto wallets?"}],"title":"Frequently Asked Questions"},"form":{"thankYou":{"description":"We appreciate your interest in our crypto compliance consulting services. Your request has been successfully submitted, and our team is eager to assist you. Within the next 24 hours, one of our certified specialists will get in touch with you to discuss your query in detail.","info":{"description":"While you wait, feel free to explore our <a href=\\"https://blog.AML Zapex.com\\">blog</a> for the latest insights and updates in the world of crypto compliance.","title":"Stay Informed"},"title":"Thank You for Reaching Out to AML Zapex"}},"main":{"description":"We consult clients taking into consideration not only legal requirements but also a market practice and business aspect of the matter","leaveRequest":"Leave a request","title":"Helping crypto companies with paperwork"},"services":{"description":"The AML Zapex team offers certified specialists from various fields including legal, audit, AML/CFT compliance, and blockchain forensics. We provide comprehensive consulting that considers legal requirements, market practices, and business aspects.","hide":"Hide ↑","items":{"assisting":{"description":"Some of our clients struggle to open an account for their crypto asset or fiat related services.","fullDescription":"Some of our clients struggle to open an account for their crypto asset or fiat related services. We help clients to find the best suitable financial institution or crypto exchange that would meet client’s expectations. We also assist clients in communication with the selected financial institutions to guarantee a fast and smooth process of account opening. Such communication may include filling out questionnaires or completing AML-related forms etc.","title":"Assisting clients in opening account at banks or crypto exchanges"},"audit":{"description":"Some of our consultants are lawyers and auditors with experience at top tier law firms, Big4 and CEX who can help our clients to solve legal matters and provide comprehensive due diligence reports.","fullDescription":"Some of our consultants are lawyers and auditors with experience at top tier law firms, Big4 and CEX who can help our clients to solve legal matters and provide comprehensive due diligence reports. For example, we can prepare the due diligence report on crypto wallets or crypto investment businesses etc.","title":"Legal and audit services"},"drafting":{"description":"We help crypto businesses to draft and develop their internal AML/KYC processes.","fullDescription":"We help crypto businesses to draft and develop their internal AML/KYC processes. For instance, we draft and customize the internal AML Procedure taking into account the client’s business processes and current situation. Along with this, we help clients to come up with their risk-appetite statement, drafting whistleblowing policies, anti-corruption and bribery policy or develop transaction monitoring rules for crypto assets. All above-mentioned documents are required by regulators or bank/crypto exchanges if the client plans to apply for a license or open an account.","title":"Drafting AML/KYC\xa0 and transaction monitoring procedures"},"trainings":{"description":"We have first-hand experience when it comes to AML and crypto assets or blockchain and we want to share our knowledge and expertise.","fullDescription":"We have first-hand experience when it comes to AML and crypto assets or blockchain and we want to share our knowledge and expertise. Therefore, we are constantly developing trainings to educate our clients with new AML/CFT risks with the focus on crypto assets.<br /><br /> Important to note, that all regulated crypto businesses or crypto businesses having accounts at CEX/banks shall conduct at least one AML training annually.","title":"AML/KYC and Blockchain analytics trainings"}},"learnMore":"Learn more","title":"Our services"},"specialist":{"nikoDemchuk":{"description":"Niko Demchuk is an experienced AML specialist, сertified by the Association of Certified Anti-Money Laundering Specialists (ACAMS). Having received his Master’s degree in Information IT Law, Niko is an expert in cryptocurrency regulation, AML, and KYC compliance. He has extensive experience in legal firms and expertise in dealing with different cryptoregulations. Currently, he is a Lawyer and Head of Consulting of AML Zapex.","name":"Niko Demchuk","position":"Lawyer and Government Relations"},"title":"Leading Сertified AML Specialist"}},"cookies":{"acceptButton":"Accept all cookies","text":"By browsing this website, you consent to the use of cookies by third party services."},"copy":"Copy","cryptopayment":{"contact":{"button":"Contact us via Telegram","description":"We offer flexible conditions and an individual approach. Contact us and we\'ll find the best option designed to fit your business needs.","title":"Contact us to discuss the terms and conditions"},"howMatch":{"description":"Avoid high fees with AML Zapex. Hidden fees and chargebacks are long gone.","items":[{"label1":"Personal Wallets","label2":"Merchant Wallets","label3":"Fiat Invoices","title":"Incoming fee"},{"description":"The shipping fee is set based on the US dollar exchange rate and is calculated at the time of payment creation","title":"Personal shipping fee"},{"title":"The commission for the withdrawal of fiat funds is"}],"title":"What is the price?"},"info":{"items":[{"button":"Learn More","description":"We enable businesses to securely accept cryptocurrencies as part of their business or to pay their partners. Every transaction is analyzed in real-time, ensuring that all assets are clean.","title":"What do we offer?\\n"},{"title":"Accept payments in cryptocurrencies from anywhere in the world"},{"title":"Payments in the most popular cryptocurrencies"}]},"join":{"button":"Start now","description":"Accept payments, attract new clients and avoid high fees with AML Zapex","title":"Join thousands of companies that already use crypto payments"},"main":{"button":"Free Consultation","description":"Verify all crypto payments to ensure your business only accepts or sends pure funds.","title":"Accepting crypto payments for your business"}},"fatf":{"advantages":{"items":[{"button":"Free Consultation","description":"You pay only for the results and in case we are not able to help, we will let you know honestly.","title":"You pay for results"},{"button":"Discuss Terms","description":"Even if a problem arises in a few months or years, we will be happy to give you a recommendation free of charge.","title":"We care"},{"button":"Contact us via Telegram","description1":"We are in touch 24/7, so any issue can be resolved quickly and in a live chat format.","description2":"We are human beings, so we may not respond as promptly at night as we do during the day ✌️","title":"24/7 Support"},{"button":"Sign An Agreement","description":"We\'ve recovered over <b><span>$5 359 800</span></b> for clients that have had their funds stolen.","title":"Experience"},{"button":"Contact Us","description":"We appreciate your time, so we respond within 30 seconds","title":"We reply within 30 seconds"},{"button":"Free Consultation","description":"We\'ve already assisted over <b>200 companies </b> with fully complying with the  <b>FATF </b> AML Recommendations.","title":"Professionalism"}],"title":"Our advantages"},"canWeHelp":{"first":{"description":"Drafting legal documentation required for the crypto business licensing process such as AML procedures, special procedures for blockchain analytics, risk exposure declaration and others","title":"Crypto business licensing procedure"},"items":[{"description":"We perform verification of the source of individual assets, destination, as well as an overall assessment of the risk of blocking assets.","title":"AML Screening"},{"description":"We will help you to create and complete all documents and provide reports for filing with any auditing bodies/companies","title":" Audit + report"},{"description":"After a detailed audit of the AML team, your business will meet all FATF requirements","title":"FATF compliance"}],"note":"Our expertise is based on MiCA and the regulatory needs of crypto-friendly countries.","second":{"description":"Advising crypto companies in everyday business, for example, conducting anti-money laundering training and helping to investigate the origin of crypto assets. <br /><br />Annual AML trainings are mandatory for licensed crypto companies.","title":"AML Consulting"},"third":{"description":"Supporting crypto companies in opening bank accounts and completing questionnaires from financial institutions.<br /><br /> In addition, we offer an audit of the selected crypto wallet for legal risks.<br /><br /> The bank may require you to complete AML-related forms or provide AML policies, etc.","title":"Regulatory Assistance"},"title":"What do we offer?"},"consultation":{"button":"Contact us via Telegram","description":"Telegram chat consultation. It\'s free, and if we can\'t help you, we\'ll let you know right away. You have nothing to lose and you can always opt out.","title":"Free consultation without any obligation"},"faq":{"items":[{"content":"Not being AML/KYC compliant may lead to a revocation of the license by the regulators and up to big fines or even an imprisonment. In addition, your account may be blocked and your assets may be frozen by a financial institution or a cryptocurrency exchange.","title":"Why do I need AML/KYC compliance?"},{"content":"Our expertise focuses on crypto licensing requirements, AML/KYC compliance and opening a bank account. The package of documents or specific advice depends on the client\'s needs. We are also skilled to provide AML related training.","title":"How can you help me?"},{"content":"Depending on the request, the process of drafting procedures or other documents may take from 1 or 2 weeks and up to 1 month.","title":"How long does it take?"},{"content":"We primarily cover EU and CIS countries for licensing or AML related assignments. However, other countries may be considered on an individual basis. In addition, there are documents that are required by financial institutions or cryptocurrency exchanges only and not by local regulators. In this case, we will be able to provide you with the assistance you need.","title":"What countries can you cover?"},{"content":"We may provide you with a crypto wallet audit. It will include the analysis of the source of funds, counterparties, risks and behavior of the selected crypto wallet. Such an audit of a crypto wallet may be required for legal or phisical entities in their further interacting with a bank or regulator.","title":"Do you issue a due diligence (audit) report of crypto wallets?"}],"title":"FAQs"},"main":{"button":"Free Сonsultation","description":"Our team of experts will help you ensure that your business is fully compliant with the FATF Recommendations.","note":"<b>200+</b> businesses successfully complied with regulatory requirements","specs1":"Prepare documents for crypto licences","specs2":"Open a bank account","specs3":"Draw up AML procedures, other necessary documents and conduct AML training","subtitle":"Our team of specialists will help you:","title":"Helping crypto companies with paperwork"},"program":{"buttonPdf":"PDF Sample Analysis","from":"From","items":[{"button":"Contact us via Telegram","description":"We will provide a clear framework for crypto business with AML compliance.","specs":[{"text":"The team will analyze your assets and show the origin of all funds"},{"text":"We will send you the full report on where your funds were transferred to, show what the risk of your funds blocking and also provide the comments."},{"text":"We will explain how to store data, make checks for sanctions, verify politically significant individuals and unwanted media"},{"text":"We provide a clear guidance"}]},{"button":"Contact us via Telegram","description":"We will analyze all points on compliance with AML requirements and conduct a full AML audit of your business","special":"It worked out for {{value}} companies","specs":[{"text":"The team will analyze your assets and show the origin of all funds"},{"text":"We will send you the full report on where your funds were transferred to, show what the risk of your funds blocking and also provide the comments."},{"text":"Detailed rules for KYC/CDD"},{"text":"We will help you to complete Enhanced Due Diligence (EDD) reports, which contain detailed information about audits of physical and legal entities"}]},{"button":"Contact us via Telegram","description":"We will conduct a professional business analysis and show where it will be necessary to change business processes to meet AML requirements","specs":[{"text":"Professional business analysis with an experienced AML officer"},{"text":"We will send you the full report on where your funds were transferred to, show what the risk of your funds blocking and also provide the comments."},{"text":"We provide assistance with filling out the documents and reports to be submitted to any kind of regulating authorities/companies (SAR, CTR and others)"},{"text":"We will check crypto wallets and transactions for “dirty” money, send a full report + give explanations."},{"text":"We will prepare your business for FATF compliance."}]}],"note":"You pay only for the results and in case we are not able to help, we will let you know immediately.","text":"Auditing increases your partners\' trust in you. It increases customer loyalty and can speed up their decision to work with you.","title":"AML Compliance Programs"}},"feedback":{"thankYou":{"description":"We have received your request and appreciate your interest in AML Zapex\'s services.","info":{"description":"While you wait, feel free to explore our <a href=\\"https://blog.AML Zapex.com\\">blog</a> for the latest insights and updates in the world of crypto compliance.","title":"Stay Informed"},"title":"Thank You for Your Inquiry"},"title":"Feedback"},"footer":{"copyright":"AML Zapex","info":{"links":{"AboutTheProject":"About The Company","aboutUs":"About Us","analysis":"Analysis","blog":"Blog","careers":"Careers","certifications":"Certifications","pressKit":"Press kit","risks":"Risks","support":"Support"},"title":"Company"},"legal":{"links":{"privacyPolicy":"Privacy Policy","termsOfuse":"Terms of Use","userAgreement":"User Agreement"},"title":"Regulatory framework"},"products":{"links":{"AML Zapex":"AML Zapex","apiIntegration":"API Integration","cryptopayment":"Crypto payments","fatf":"Cryptocurrency Consulting","investigation":"Investigation","kyc":"Automated KYC"},"title":"Products"},"socials":{"links":{"facebook":"Facebook","instagram":"Instagram","linkedIn":"LinkedIn","reddit":"Reddit","telegram":"Telegram","tikTok":"TikTok","youTube":"YouTube"},"title":"Social networks"}},"fortune":{"codeModal":{"clickToCopy":"Click to copy","copied":"Copied","getPrize":"Get Prize","note":"Copy your unique Bonus Code and click \\"Get Prize\\" to share it with our manager to claim your reward","title":"Your Unique Bonus Code to Activate the Prize Is","willRedirected":"You will be redirected to support in {{countdown}} sec"},"end":{"contactUs":"Contact Us","title":"Thank you for your interest in participating in AML Zapex’s Birthday Bonus Giveaway! However, we would like to inform you that the giveaway has already ended.","title2":"But don’t worry – we still have a special bonus for you!","title3":"Please reach out to our manager for a personalized offer"},"hero":{"birthday":"<span>AML Zapex’s</span> \uD83C\uDF89 <span>Birthday</span>","description":"Spin the wheel to win an exclusive <span>Discount</span> or <span>free AML-checks!</span>","title":"Join the Celebration <b>\uD83E\uDD73</b> and Claim Your Prize for AML Zapex’s Birthday!"},"wheel":{"getLucky":"Get Lucky!","spinNow":"Spin Now!"},"winModal":{"congratulations":"Congratulations!","discount":"Discount","enterYourEmailLabel":"Enter your email to receive a unique bonus code to activate the prize:","enterYourEmailPlaceholder":"Enter your email","freeChecks":"Free checks","getPromoCode":"Get Bonus Code","youHaveWon":"You have won"}},"header":{"announcement":{"final":"today","link":"Check them out","main":"Business packages have been updated!\\n"},"checkWallet":"Check a wallet","createAnAccount":"Create an account","links":{"aboutUs":"About Us","analysis":"Analysis","blog":"Blog","faq":"FAQ","howDoesItWork":"How does it work?","price":"Pricing","products":"Products","risks":"Risks"},"logIn":"Log in","requestDemo":"Examination","signIn":"Sign in","signUp":"Sign Up","webCheck":"Personal account"},"iSOCertified":{"buttonText":"Learn more","description":"We continually improve our security measures to uphold trust and safety. Learn more about our certifications","title":"ISO certified"},"initiatives":{"moreInOurBlog":"More in our blog","title":"Our initiatives"},"investigations":{"consult":{"description":"We will get back to you within 24 hours with further steps and an overview of your situation","title":"Ready to Proceed? Submit a form and our team will review your case"},"description":{"text":"AML Zapex\'s team of <span>certified</span> experts provides comprehensive <span>analytical</span> and <span>legal</span> support in the recovery of the stolen crypto"},"disclaimer":{"description1":"AML Zapex is not calling you or approaching you first with a request to assist you with the fund recovery process, because any kind of call, email, or message without your consent is against privacy rules. Usually, our customers contact AML Zapex first with methods provided on our website.","description2":"Please be aware that for email or any other communication channels (Telegram, WhatsApp), to prevent online fraud and crypto scams, AML Zapex is using only corporate domain emails of <a href=\\"https://AML Zapex.com\\">https://AML Zapex.com</a> or official communication channels listed on the official website. It is the user\'s responsibility to check the right spelling of the website and communicate only with the official channels of communication listed on the AML Zapex website.","description3":"All of the invoices are produced by our company Safelement Limited. For payments, AML Zapex accepts both crypto and fiat payments for our Services. Crypto payments are accepted to the licensed crypto currency exchanges. For fiat payments, we use corporate bank accounts at the major HK & EU banks. In addition, we use credit card payment services provided by Stripe and connected to the same bank accounts.","hide":"Hide ↑","learnMore":"Learn more","subtitle":"Attention to Scams and Fraud:","title":"Legal disclaimer"},"expertise":{"description":"Put your trust in our experienced team of crypto investigators and recovery specialists.","items":{"1":"Chainalysis Reactor Certification (CRC)","2":"Chainalysis KYT Certification (CKC)","3":"Cryptocurrency Fundamentals Certification (CCFC)","4":"Chainalysis Ethereum Investigations Certification (CEIC)","5":"ACAMS Fightning Moder Slavery And Human Trafficking","6":"<b>Proud members</b><ul><li>Crypto Defence Alliance</li><li>ATHI</li></ul>"},"subtitle":"We hold certifications including:","title":"Our Expertise"},"faq":{"items":[{"content":"AML Zapex can investigate a variety of cryptocurrencies, including but not limited to Bitcoin, Ethereum, and other popular altcoins.","title":"What types of cryptocurrencies can AML Zapex investigate?"},{"content":"The duration of an investigation varies depending on the complexity of the case. Typically, we provide you high-level overview of your situation for free within 24 hours. Then, if we have all of the information, we provide you with an investigation report within 72 hours.  However, the the total timeframe can extend beyond this, especially when we have to mark the wallets fro tracing to continue the investigation.","title":"How long does a blockchain investigation by AML Zapex take?"},{"content":"The duration of the recovery process can vary significantly depending on the complexity of the case, the response times of exchanges and law enforcement, and other factors. It\'s best to prepare for a process that could take several months.","title":"How long does the full recovery process typically take?"},{"content":"While AML Zapex employs advanced techniques and tools to maximize the chances of recovery, it is not possible to guarantee a successful outcome in every case due to the nature of blockchain transactions and the varying degrees of cooperation from third parties involved.","title":"Is there a guarantee that my lost cryptocurrency will be recovered?"},{"content":"The cost can vary depending on the complexity of the case. Please submit victim’s report or contact us for a personalized quote.","title":"What is the cost of the recovery service?"},{"content":"Our service fee is non-refundable as it covers the labor and resources invested by the AML Zapex team in the investigation and recovery efforts, regardless of the outcome. Rest assured, we are committed to doing everything possible to recover your digital assets.","title":"If my funds can\'t be recovered, will I receive a refund for the service fee?"},{"content":"It\'s important to provide as much detail as possible about the lost or stolen cryptocurrency, including the associated wallet addresses, transaction TXs, the nature of the loss (e.g., scam, theft), and any relevant communication or transaction records.","title":"What information do I need to provide for the recovery process?"},{"content":"You should submit the police report based on your country of residence. AML Zapex provides guidance on how to properly submit a police report for your lost or stolen cryptocurrency. This report and subsequent subpena are necessary for the recovery process.","title":"Where do I submit a police report?"},{"content":"AML Zapex takes the security of your personal information very seriously. We adhere to strict data privacy practices and use secure methods to protect your information at all stages of the recovery process.","title":"How secure is my personal information during this process?"},{"content":"AML Zapex provides education and resources to help you secure your digital assets and avoid common scams and risks in the cryptocurrency space. This includes best practices for wallet security, recognizing potential scams, and understanding the risks and benefits of different types of cryptocurrency transactions and investments.","title":"What can I do to prevent future losses of cryptocurrency?"}],"title":"Frequently Asked Questions"},"form":{"thankYou":{"description":"Your request for assistance in recovering your lost, hacked, or stolen cryptocurrency has been received. We understand the urgency and sensitivity of your situation and are committed to helping you through this challenging time.","info":{"description1":"Our team of certified crypto recovery experts will review the details you\'ve provided. We aim to understand every aspect of your case to offer the most effective recovery strategy.","description2":"You can expect to hear back from us within 24 hours with an initial assessment of your case and the next steps to be taken.","title":"What Happens Next?"},"title":"Thank You for Submitting Your Case to AML Zapex"}},"main":{"description":"Find out where your lost cryptocurrency with a\xa0thorough investigation and potential recovery","leaveRequest":"Leave a request","title":"Crypto Recovery and Blockchain Investigation with\xa0AML Zapex"},"process":{"description":"Understand the steps we take to analyze and potentially recover your lost assets.","items":{"0":{"description":"Fill out our detailed victim\'s form to provide us with as much information as possible about your situation.","title":"Information Gathering:"},"1":{"description":"You can either submit a police report yourself or follow our guidelines to do it effectively.","title":"Police Report:"},"2":{"description":"If needed, we can offer necessary assistance and information for the police investigation and the subpoena to return the assets.","title":"Police Investigation Support:"},"3":{"description1":"We take several steps in this process, including:","description2":"Blacklisting the associated wallets with exchanges","description3":"Labeling the associated wallets with blockchain analytics providers","description4":"Marking wallets for tracing if the funds are parked in the unidentified wallets","title":"Blockchain Investigation:"},"4":{"description":"We generate a comprehensive report based on our blockchain investigation.","title":"Investigation Report:"},"5":{"description":"If the stolen funds reach an exchange, we communicate with them to request a potential freeze of the stolen assets.","title":"Communication with Exchanges:"}},"title":"Crypto Recovery Process"},"recovery":{"button":"Leave a request","description":"Submit your case now and our team will connect with you within 24 hours.","title":"Ready to start your crypto recovery process?"}},"kyc":{"check":{"items":{"addressVerification":{"description":"We confirm residence using an official document such as a utility bill or bank statements, comparing them with the address provided by the client.","title":"Address Verification"},"amlCheck":{"description":"As required by the Prevention of Money Laundering and Terrorist Financing Act, we check the funds and their origin.","title":"AML Check"},"companyCheck":{"description":"<ul><li>The jurisdiction of company incorporation and business activity type</li><li>Whether the company is active according to the Corporate Registry</li><li>The registered address of the company</li><li>The authorised persons of the company and their identification documents</li><li>The beneficiaries of the company and their identification documents</li></ul>","title":"Company Check (KYB)"},"documentVerification":{"description":"Real-time document verification. We check the authenticity and validity of the document and verify the user\'s personal data.","title":"Document Verification"},"faceVerification":{"description":"Identity confirmation using facial recognition. We confirm that the customer\'s selfies match the photo on their documents.","title":"Face Verification"},"ongoingMonitoring":{"description":"We offer ongoing blacklisting of your clients. If someone gets added there, we will carry out an additional check on the client and notify you.","title":"Ongoing KYC/AML Monitoring"},"paymentMethod":{"description":"We check the financial document, credit card or transaction to ensure that the payment has been made by the verified client.","title":"Payment Method"},"pepScreening":{"description":"Check the status of the politically exposed person, sanctions and the person\'s watch list to avoid working with high-risk people or companies.","title":"PEP Screening"},"sourceOfFunds":{"description":"We check the origin of funds and supporting documents such as invoices, contracts, payroll.","title":"Source of Funds Check"},"taxVerification":{"description":"We collect the taxpayer identification number from the submitted document and check its validity.","title":"Tax Verification"},"viabilityCheck":{"description":"Verification of documents issued by financial institutions or a lawyer confirming the client\'s trustworthiness.","title":"Financial Viability Check"},"videoVerification":{"description":"Identity verification by video call. We confirm that the customer wants to be verified and that the documents provided belong to him.","title":"Video Verification"}},"title":"What are we checking?"},"contact":{"button":"Contact us on Telegram","description":"We offer flexible conditions and an individual approach. Contact us and we\'ll find the best option designed to fit your business needs.","title":"Contact us to discuss the terms and conditions"},"info":{"items":[{"button":"Learn More","description1":"Secure your business with a verification flow that syncs with your regulator’s requirements. Verify addresses, payment methods, conduct face and personal document checks, proof of funds and more to ensure your business is fully compliant.","description2":"Verify the credibility of each user to protect yourself from illicit customer activity that may have negative consequences on your business.","title":"What do we offer?"},{"button":"Learn More","description1":"Our service is really easy to setup, ensuring that you can start verifying your users right away.","description2":"KYC is often required to obtain licenses, permits and handle finances. We provide a convenient way for administrators and users to fullfill this requirement.","title":"Why is it needed?"},{"button":"Get documentation","description":"When it comes to the integration, we’ll handle the work for you. This way, your developers can focus on building, not integrating compliance.","title":"Assistance"}],"title":"AML Zapex\'s KYC is a quick and easy way to verify your customer\'s identity"},"main":{"badge":"Easy to setup","button":"Book a free demo","description":"Verify more users with a fast, secure, automated and efficient verification that significantly reduces the manual workload.","title":"Verify users with automated KYC"},"why":{"items":[{"button":"View documentation","description":"Industry-leading safety standards, backed up by the ISO certification and regular safety audits.","title":"Security"},{"button":"View documentation","description":"Certified by the European Institute of Management and Finance.","title":"Certification"},{"button":"Contact us via Telegram","description":"We\'re able to verify over 4,000 document types from 240 different countries. Start onboarding customers from anywhere in the world.","title":"Country Interoperability"},{"button":"Contact","title":"Speed up customer service, reduce risk and simplify your business processes"}],"title":"Why choose us"}},"kycHelp":{"title":"Support Center"},"main":{"doing":{"items":[{"button":"PDF Sample Analysis","description":"We screen crypto wallets and transactions to identify the source of funds and provide you with a detailed report. You can determine the risk score of any wallet to avoid problems with regulatory authorities and to protect yourself from illicit funds.","title":"What do we offer?"},{"description1":"By receiving illicit funds, you risk having your money frozen.","description2":"By checking your wallet\'s AML status, you can determine its risk score and have a piece of mind.","description3":"We recommend you to make checks and be confident in your assets.","title":"Why is it needed?"},{"button":"Check via Telegram","title":"First check is free"}]},"faq":{"info":{"answer":"We reply within 30 seconds","description":"Contact us via Telegram. We are available 24/7 to ensure a hassle-free experience for everyone.","inTelegram":"We\'re on Telegram","note":"We are in touch <b>24/7</b>, however we can\'t always respond quickly at night","title":"Your question is not on the list?"},"items":[{"content":"The basic AML Zapex check result includes risk score percentage, sources of risk, and belonging to the blacklist.<br /><br />  In addition, the check result may include various optional information about the address, such as belonging to the cluster, actual balance, and transferred funds amount.<br /><br /> The check result may be incomplete in relation to the described data if the necessary information is missing.<br /><br /> Please note that for blockchains that are in the limited mode, clustering and percentage value of the check risk score are not available. A risk score can be provided for a counterparty only if it relates to an entity.\\n","title":"What does the AML Zapex check show?"},{"content":"The overall risk score (percentage) is the probability that the address is associated with illegal activity.<br /><br /> AML Zapex finds connections of a checked address to other addresses on the blockchain and with entities of different categories, each with a different conditional risk score, and calculates the overall risk score based on those connections.<br /><br /> The overall risk score calculation takes into account the risk severity of connections found. For example, in the case of connections to entity categories Mining (0% risk) and Darknet (100% risk), the risk impact of Darknet, as a more risky category, will be higher, and Mining will have less weight in the risk assessment.","title":"What does the percentage risk score mean?"},{"content":"AML Zapex checks the specified wallet address for connections to known blockchain services - entities. AML Zapex conventionally groups these services into groups with different risk levels of illegal activity - entity categories.<br /><br /> The AML check shows the connections of the checked address to these entity categories as the sources of risk, with which the address interacted, and the percentage of funds transferred from/to these services.<br /><br /> Based on all the sources of risk, an overall risk score is calculated, which helps the user to make further decisions about the assets.","title":"What do the sources of risk mean?"},{"content":"An address check is an analysis of all its connections to other addresses and entities on blockchains, considering incoming and outgoing funds movement.<br /><br /> A transaction check process differs from the address check, and the result depends on your side in the transaction. The overall risk score always relates to the counterparty.<br /><br /> To check a transaction you need to specify the TxID and the destination address of the transaction and select your side in the transaction:<br /> - Recipient (you got a deposit to your wallet) - the addresses from which the funds were received are checked. The sources of risk describe the services from which the TX senders accumulated the transferred funds with a percentage breakdown.<br /> - Sender (you made a withdrawal from your wallet) - the wallet that received the funds is checked. The sources of risk describe all connections of the recipient address with a percentage breakdown.<br /><br /> Thus, when checking a transaction, the risks for the recipient are checked if you receive funds, and the risks for the sender if you send funds.","title":"What is the difference between an address and a transaction checks?"},{"content":"Each client determines for himself what percentage of risk is acceptable for him. Conventionally, the risk score can be divided as follows:\\n<br />\\n  - 0-25% is a clean wallet/transaction;\\n<br />\\n  - 25-75% is the average level of risk;\\n<br />\\n  - 75%+ such a wallet/transaction is considered risky.\\n<br />\\nIt is also worth paying attention to the red sources of risk in the detailed analysis, described in <a href=\\"https://AML Zapex.com/what-do-we-analyze\\">page\\n</a>","title":"How do I understand risk assessment?"},{"content":"AML Zapex supports all major blockchains and tokens on them. We are constantly adding support for additional cryptocurrencies. You can always check the up-to-date list of supported cryptocurrencies in\\n<a href=\\"http://web.AML Zapex.com\\" target=\\"_blank\\">\\nweb dashboard\\n</a>\\n  or in\\n<a href=\\"https://docs.AML Zapex.com/\\" target=\\"_blank\\">\\nAPI Documentation\\n</a>\\n.","title":"What cryptocurrencies does AML Zapex analyze?"},{"content":"By checking counterparties\' wallets before a transaction, you can reject their assets if the risk score is high. Also, before transferring funds to other services, you can check your wallet address and save the result (make a screenshot).<br /><br /> If the check shows that your assets had no connection with illegal activity and the service blocked you, you can provide the saved result to confirm the purity of your assets.","title":"How does AML Zapex help to protect you against blocking?"},{"content":"The check results are based on the international databases, which are constantly updated. So an address that had 0% risk yesterday may have received or given the asset to a risky counterparty today. In this case, the risk score will change. If you want to be sure of the result and determine what the cause of the high risk is, we can do a detailed check for you. To do it, email us at <a href=\\"mailto:info@AML Zapex.com\\">\\ninfo@AML Zapex.com</a>","title":"The risk is higher than 50%, but I am certain that the address is reliable. What to do?"},{"content":"An answer to this question depends on your unique risk model. The general recommendation would be to perform an AML check every time you interact with an unknown wallet or a smart contract.","title":"How often are checks recommended to do?"},{"content":"After transaction confirmation, the balance is replenished: <br /> • up to 10 minutes if the payment was made within 24 hours after the invoice was issued, <br /> • up to 25 minutes if the payment was made after 24 hours after the invoice issuance. Overall, BTC, ETH, USDT, and fiat are processed faster than other cryptocurrencies.","title":"How quickly is the balance replenished?"},{"content":"If you purchased checks without expiration date - they remain in your account, and you can use them at any time.<br /><br /> If you purchased checks with a time limit - they will be deducted from your account after expiration date.","title":"What happens if I don\'t use all my checks each month?"},{"content":"You can buy additional checks as needed. The number of checks is always displayed within your user information.","title":"What if I will need more checks?"},{"content":"AML Zapex safeguards data by adhering to rigorous standards, as validated by our ISO 9001 and ISO 27001 certifications. <br /><br />Our ISO 9001 certification highlights our commitment to delivering consistent quality and enhancing customer satisfaction. More crucially, our ISO 27001 certification demonstrates our dedication to maintaining high standards of information security, ensuring the protection of sensitive data, and achieving regulatory compliance.<br /><br /> Learn more about our certifications <a href=\\"https://AML Zapex.com/certifications\\">here</a>.","title":"How does AML Zapex ensure data protection?"}],"title":"FAQs"},"howMatch":{"button":"Contact us","label":"First check is free","note":"Per our data, <b>one in four wallets is suspicious.</b><br />  Spending a few dollars on a check may save you a large sum.","perCheck":"per check","startsFrom":"From","title":"How much for your assurance?"},"officers":{"items":{"[0]":{"label":"Co-Founder","name":"Slava Demchuk"},"[1]":{"label":"Chief Operating Officer","name":"Vasily Vidmanov"},"[2]":{"label":"Chief Commercial Officer","name":"Andrew Aleksandrov"},"[3]":{"label":"Blockchain Analyst","name":"Sid Panda"},"[4]":{"label":"Lawyer/Certified AML Specialist","name":"Niko Demchuk"},"[5]":{"label":"Legal advisor","name":"Ganna Voievodina"},"[6]":{"label":"Business development manager\\n","name":"Vlad Raskosov\\n"},"[7]":{"label":"Business development manager\\n","name":"Denys Shestak"},"[8]":{"label":"Customer support manager","name":"Nikita Raskosov"},"anmolJain":{"label":"VP","name":"Anmol Jain"},"graemeHampton":{"label":"Certified AML Specialist","name":"Graeme Hampton"},"nikoDemchuk":{"label":"Certified AML Specialist","name":"Niko Demchuk"},"sidPanda":{"label":"Blockchain Analyst","name":"Sid Panda"},"slavaDemchuk":{"label":"Co-Founder","name":"Slava Demchuk"}},"text":"AML Specialists help to solve difficult situations and save you from fines and blocking. Professional experts will represent your interests up to the court, if necessary","title":"Meet the core team"},"partners":{"title":"Trusted by"},"prime":{"AML ZapexOnWeb":"Personal account","button":"Start checking","checkInTelegram":"Check a wallet","description":"The AML Zapex platform automates AML / KYC procedures and reduces compliance expenses","primaryButton":"Request a demo","secondaryButton":"Chat bot","telegramCheck":"Telegram check","title":"One-stop compliance solution for crypto business"},"reviews":{"description":"Find out more about our services from people we\'ve already helped.","items":[{"note":"Den •<a href=\\"https://csgo500.com\\">\\nCSGO500","quote":"We have been using AML Zapex for almost two years and and thanks to them we have successfully identified and stopped hundreds of threats. Will definitely continue to use their services."},{"note":"CEO • <a href=\\"https://uniochange.com\\">Uniochange</a>","quote":"The crypto community faced difficulties in identifying the sources of suspicious funds, but with the advent of AML Zapex, all difficulties disappeared. I advise everyone to use this service until your activity becomes completely legal."},{"note":"<a href=\\"https://alltrust.me\\">AllTrust</a> ","quote":"We are very pleased with AML Zapex, thanks to the integration with our platform, we have managed to prevent a large number of transactions related to illegal funds. We are sure that we will further develop our cooperation."},{"note":"<a href=\\"https://guarda.com\\">Guarda</a>","quote":"AML Zapex has been a great partner for us for a long time. It\'s incredibly easy to use, reliable, and most importantly, provides extra peace of mind for our users. We at Guarda look forward to continuing our work together."}],"title":"What our clients say about us"},"services":{"description":"We provide full pack of options for safe work with crypto","items":[{"description":"API solutions that empower AML compliance tools within your current system. All transactions are automatically verified to comply with AML and FATF requirements and reduce your business risk exposure.","title":"AML/KYT screening"},{"description":"The streamlined and automated verification process empowers your business to swiftly onboard customers, reducing manual effort and mitigating identity fraud and illicit activity risks.","title":"KYC for business"},{"description":"Launch your crypto venture with ease, simplicity, and confidence through our streamlined AML and KYC consulting, ensuring smooth compliance and effective risk management right from the beginning.","title":"AML/KYC procedures"},{"description":"Streamline corporate account opening on CEX EMI with our expert assistance, ensuring your focus remains on business growth in the crypto industry.","title":"Corporate accounts at CEX/EMI"},{"description":"Recover stolen cryptocurrencies with AML Zapex\'s expert blockchain investigations, swiftly identifying culprits and tracing funds for effective recovery.","title":"Blockchain investigations"}],"learnMore":"Learn more","title":"AML Zapex’s services"},"stats":{"items":[{"description":"Amount of the risky funds detected","title":"+$100 000 000"},{"description":"Compliance departments that accept our AML procedures","title":"6,500,000+"},{"description":"Service providers checked","title":"60,000+"}]},"whatElse":{"items":[{"button":"Check an address","description":"Check whether an address is included within sanction lists. Block sanctioned entities and protect your business from fines and license revocation.","title":"Protection against sanctioned wallets"},{"button":"Free consultation","description":"Our team of experts will trace the route of your stolen funds and will do everything within their power to help you to return them.","note":"You pay only for the results and in case we are not able to help, we will let you know immediately.","title":"Assistance with saving of stolen crypto"},{"button":"View documentation","description1":"Automatically check all the incoming transactions, and significantly reduce required workload. ","description2":"Our developers will be glad to help you seamlessly integrate our API into your service.","title":"API Integration"}],"title":"Explore our other services"},"why":{"items":[{"buttonText":"Let’s discuss","description":"Personal data is processed and stored in accordance with GDPR.","description1":"AML Zapex offers a wide range of compliance solutions customized for each client.","description2":"We\'re confident in meeting your demands <b>after helping 300+ crypto enterprises</b> of all sizes in 25 jurisdictions.","title":"Personalized Approach"},{"description":"Certified by the European Institute of Management and Finance.","description1":"We offer KYT/Wallet Screening, KYC, AML, and more for crypto businesses.","description2":"AML Zapex\' risk scoring is based on multiple data sources, ensuring that we have the most reliable data in the industry.","description3":"Our user-friendly services and solutions streamline your company processes, removing compliance provider complexity.","title":"Integrated Compliance Platform"},{"buttonText":"Contact","description":"AML Zapex understands the significance of fast, friendly customer support, thus we\'re always here for our clients. 24/7 support.","description1":"We are in touch 24/7, so any issue can be resolved quickly and in a live chat format.","description2":"We are human beings, so we may not respond as promptly at night as we do during the day ✌️","note":"An answer during the night may take a bit longer","title":"Customer Support"},{"description":"We saved around {{value}} from blocking at the exchanges.","title":"Experience"}],"title":"Why AML Zapex?"},"works":{"description":"Here is a video","title":"How it works?"},"yearStats":{"label":"Over the past three years, AML Zapex has been used by","text":"companies"}},"menuProducts":{"AML ZapexPro":{"description":"Trace the source and destinations of transactions","label":"AML Zapex Pro"},"amlTraining":{"description":"Specialized training programs for the\xa0cryptocurrency industry","label":"AML Training"},"chatBot":{"description":"Instant AML checks, the easiest way to try our products","label":"AML Chat Bot"},"consulting":{"description":"Helping crypto businesses with AML procedures, training, and bank account setup","label":"Consulting"},"dynamic":{"description":"Use our intermediate addresses to avoid risks","label":"Dynamic merchant addresses"},"forBusiness":"For business","forPersonalUse":"For personal use","investigation":{"description":"Assistance with the recovery of stolen crypto","label":"Investigation"},"kyc":{"description":"Verify more users with a fast, secure, automated and efficient verification","label":"KYC"},"kyt":{"description":"Automatic checking of all transactions and wallets through the API","label":"KYT"},"mobileApp":{"description":"AML checks in easy to use mobile app","label":"Mobile App"}},"notFindQuestion":{"answer":"We will answer within 30 seconds","description":"Contact us via messenger. We are in touch <b>24/7</b>, so any issue can be resolved quickly and in a live chat format.","inTelegram":"We\'re on Telegram","note":"It may take a little longer to respond during the night.","onMessenger":"We\'re in messenger","title":"Is your question not on the list?"},"partners":{"title":"Our 300+ clients and partners"},"pro":{"experience":{"items":{"consistent":{"description":"Ensure your organization is compliant with cryptocurrency regulations for your jurisdiction with deep on-chain activity insights. Rely on real-time screening to flag suspicious accounts or transactions.","title":"Consistent compliance"},"efficient":{"description":"<span>Discover. Investigate. Take Action.</span> Our investigation tools help you identify the source and destination of cryptocurrency transactions. Use our cutting-edge technology to curb criminal activity and conduct investigations more quickly and accurately.","title":"Efficient investigations"}},"title":"Experience the highest-quality blockchain insights – the best data made affordable"},"faq":{"info":{"answer":"We reply within 30 seconds","description":"Get fast and efficient support 24/7 Contact us on Telegram for any questions or assistance. No bots, only human support.","inTelegram":"We\'re on Telegram","note":"An answer during the night may take a bit longer.","title":"Your question is not on the list?"},"title":"Frequently Asked Questions"},"features":{"items":[{"description":"AML Zapex Pro runs on the best data available. We scan wallets and transactions to find ties to illicit crypto funds used in criminal or questionable activity, including Darknet markets, scams, ransomware, and mixers.","title":"Exceptional data accessibility"},{"description":"AML Zapex Pro transforms the complexity of blockchain analysis into simplicity.","title":"Straightforward search options"},{"description":"AML Zapex Pro Connects Cryptocurrency Transactions with Real-World entities.","title":"Connect virtual transactions to real-world entities"},{"description":"AML Zapex Pro’s simple interface is easy for anyone to use. Our streamlined process allows you to trace funds and flag high-risk accounts and transactions.","title":"Increased accessibility"},{"description":"Get faster results with AML Zapex Pro, which follows funds across blockchains. Identify on- and off- ramp addresses and swap activity to detect hidden actions.","title":"Clear crypto paths"},{"description":"With AML Zapex Pro, you can establish a solid narrative that shows the movement of crypto funds. Export and visualize data to create a full picture of criminal activity.","title":"More convincing cases"}],"title":"AML Zapex Pro Features"},"hero":{"button":"Get AML Zapex Pro","description":"AML Zapex Pro is a blockchain analytics tool that empowers investigators and compliance teams with the best data in the industry.","info":{"compliance":{"description":"Optimize your KYT and AML processes to maintain compliance.","title":"Compliance"},"investigations":{"description":"Solve cases quickly with efficient on-chain tracing. Put a stop to crypto crime","title":"Investigations"}},"title":"Untangle the web of on-chain crime"},"secure":{"buttonText":"Get AML Zapex Pro","title":"Secure Your Crypto with Wallet & Transaction Risk Screening"},"sets":{"buttonText":"Get AML Zapex Pro","items":[{"list":["Legitimate crypto projects","Sanctions and watchlists","Known ransomware","Terrorist and money Laundering groups"],"title":"Insightful data"},{"list":["Clear data","Smooth user experience","Simple start-up"],"title":"Ease of use"},{"list":["Assessing risk","Flagging criminal activity","Encouraging collaboration"],"title":"Safety and security"}],"title":"What sets<br /> AML Zapex Pro apart?"},"superior":{"items":{"analyzeRisk":{"description":"Check accounts against critical watchlists, including the OFAC.","title":"Analyze risk"},"continuousTracking":{"description":"Monitor the movement of funds in real time.","title":"Continuous tracking"},"gatherEvidence":{"description":"Use our proprietary data to strengthen your investigation case.","title":"Gather evidence"},"reliableData":{"description":"Access information for entities with various risk levels.","title":"Reliable data"},"try":{"buttonText":"Activate now!","title":"Unlock the full potential of\xa0our solution"},"userFriendlyDashboard":{"description":"Easily navigate and visualize crucial data.","title":"User-friendly dashboard"}},"title":"Superior design and functionality"}},"saleBanner":{"text1":"Enjoy a 15% Discount on All Plans","text2":"Until December 30, 2023"},"seo":{"cryptoChecker":{"description":"AML screening tool for crypto companies and end-users. Use AML Zapex to detect how Bitcoin and altcoins are connected with illicit activities and secure your wallets with advanced crypto risk scoring.","title":"AML Crypto Checker - Comprehensive Crypto Compliance Solution | AML Zapex"},"cryptoCheckerLand":{"description":"AML Zapex provides an advanced AML screening tool for crypto companies and end-users. Discover how Bitcoin and altcoins are connected with illicit activities and secure your wallets with our crypto checker bot.","title":"AML Zapex - Comprehensive Crypto Compliance Solution | Free AML Crypto Check"},"cryptoComplianceConsulting":{"description":"Expert AML consulting for crypto companies. Our services include AML/KYC procedures, transaction monitoring, and comprehensive compliance advisory.","title":"AML Consulting Services | Cryptocurrency Compliance & Advisory"},"home":{"description":"AML Zapex provides advanced AML compliance solutions for crypto businesses. Use our AML bot for thorough AML checks and ensure compliance with the latest regulations. Protect your assets with AML Zapex\'s comprehensive platform.","title":"AML Zapex - Comprehensive AML Compliance Solutions for Crypto"},"kyc":{"description":"Fast and secure KYC verification platform offering automated KYC, AML, ID, and Tax verification solutions. Start onboarding customers globally with ease.","title":"KYC/AML Service Provider for Business Compliance | Automated KYC Verification"},"kyt":{"description":"Automate risk scoring for incoming crypto transactions with AML Zapex\'s AML API. Ensure compliance with KYC and AML requirements using our comprehensive anti-money laundering API solutions.","title":"AML Compliance API for Crypto Transactions | AML Zapex"},"pro":{"description":"Discover AML Zapex Pro, a comprehensive blockchain analytics tool for fast investigations, risk scoring, and compliance monitoring in cryptocurrency transactions.","title":"AML Zapex Pro: Advanced Blockchain Analytics for AML & Compliance Teams"},"reclaimCrypto":{"description":"Our team specializes in recovering stolen crypto through comprehensive investigations and asset recovery, including blocking on exchanges and wallets.","title":"Recover Stolen Crypto | Cryptocurrency Recovery Services | AML Zapex"},"training":{"description":"Enroll in expert AML training tailored for the crypto industry. Earn your certificate in anti-money laundering and protect your business from financial crimes and regulatory risks with AML Zapex\'s comprehensive compliance courses.","title":"AML Training & Certification for Crypto Business | Anti Money Laundering Course"}},"training":{"benefits":{"description":"Enhance your Crypto Business with AML Zapex Training:","items":{"1":{"title":"Boost Operational Efficiency"},"2":{"title":"Fortify Reputation"},"3":{"title":"Stay Ahead of Regulatory Risks"}},"title":"Benefits of Training"},"consult":{"description":"Fill out the form to apply for enrollment","formTitle":"Register Now – Master AML & Blockchain Analytics!","title":"Ready to get started?"},"courses":{"buttonText":"Enroll Now","item1":{"title":"Live training with a specialist"},"item2":{"title":"Digital completion certificate"},"item3":{"title":"Case studies and discussions"},"title":"Courses include"},"faq":{"description":"Explore our FAQs to learn more about the necessity, frequency, and certification aspects of our AML training.","items":[{"content":"Yes, many jurisdictions require AML training for licensed and unlicensed crypto companies. However, the specific requirements may vary depending on the country or region.","title":"Is AML training mandatory for all businesses in the crypto industry?"},{"content":"AML training should be conducted regularly to ensure employees are current with the latest developments. The frequency may vary depending on industry standards, regulatory requirements, and the company\'s risk assessment.","title":"How often should AML training be conducted?"},{"content":"Yes, various certification programs are available for individuals specializing in AML compliance. These certifications validate the knowledge and expertise of professionals in the field. As licensed professionals in the field, AML Zapex provides participants with a certification upon completing AML Zapex training, further enhancing their credentials in AML compliance.","title":"Are there any certification programs for AML professionals?"},{"content":"Reputable AML training providers can be found through industry associations, regulatory bodies, and specialized training organizations. Choosing a provider with a strong track record and expertise in AML compliance is essential.","title":"Where can businesses find reputable AML training providers?"}],"title":"Have Questions?"},"form":{"thankYou":{"description":"We look forward to helping you enhance the operational efficiency, fortify the reputation, and stay ahead of regulatory risks in your crypto business.","title":"Thank you for choosing AML Zapex for your AML training needs"}},"main":{"buttonText":"Get started","description":"Empowering your teams to master the crypto compliance ecosystem","subtitle":"Training and Certification","title":"Crypto AML Compliance & Blockchain Analytics Training "},"trainings":{"blockchainEntries":[{"title":"Blockchain Analytics"},{"title":"History"},{"title":"How it Works"},{"title":"Risk Score"},{"title":"Transaction Screening"},{"title":"Wallet Screening"},{"title":"Crypto Investigation"},{"title":"Challenges in Blockchain Analytics"},{"title":"Market Participants"},{"title":"Regulation"},{"title":"Use cases"}],"course1":{"buttonText":"Get Certified","description1":"This specialized industry level training provides core AML topics expertly crafted to be concise and easily comprehensible. The certification provides a good overview for crypto companies that start their journey in the crypto world.","description2":"After the training, you will be able to understand what money laundering and other financial crimes are, grasp the main AML requirements, how to build internal AML processes, AML risk in crypto industry and more.","duration":"3.5 hours","entryTitle":"The training module includes the following chapters:","title":"AML Fundamentals for Crypto Business Training & Certification"},"course2":{"buttonText":"Get Certified","description":"This training & certification is tailor-made by our experts for those who are already familiar with cryptocurrencies and have basic AML knowledge but want to expand their expertise and understanding in blockchain analytics.","duration":"3 hours","entryTitle":"The training module includes the following chapters:","title":"Blockchain Analytics Mastery Training & Certification"},"fundamentalsEntries":[{"description":"Understanding the concepts, techniques, and indicators of money laundering and Terrorist Financing Activities.","title":"Money Laundering and Terrorist Financing"},{"description":"Familiarizing participants with global AML standards, regulations, and legal obligations specific to the crypto industry.","title":"AML Standards and Legal Framework"},{"description":"Identifying the inherent risks of cryptocurrencies, such as anonymity, cross-border transactions, and using digital assets for illicit activities.","title":"Money Laundering Risks in Crypto Industry"},{"description":"Exploring the roles and responsibilities of different stakeholders in the AML framework, including management, compliance officers, and internal auditors.","title":"Three Lines of Defense"},{"description":"Providing guidelines and best practices for implementing effective AML procedures within crypto businesses, including customer due diligence (CDD), transaction monitoring, and suspicious activity reporting.","title":"AML Procedures"},{"description":"Understanding the specific AML requirements imposed by regulatory authorities, such as record-keeping, reporting obligations, and risk assessment methodologies.","title":"Main AML Requirements"},{"description":"Introducing participants to blockchain analytics tools and techniques for monitoring and analyzing transactions on the blockchain to detect suspicious activities.","title":"Blockchain Analytics"},{"description":"Educating participants on international sanctions regimes and the importance of screening transactions and entities against sanctioned lists.","title":"Sanctions"},{"description":"Keeping participants informed about the latest trends, tactics, and methods employed by money launderers and terrorists to adapt AML measures accordingly.","title":"Prevailing Techniques, Methods, and Trends in ML/TF:"},{"description":"Working on practical assignments, allowing participants to apply their knowledge and problem-solving skills.","title":"Case Studies"}],"seeAllProgram":"See all program","showLess":"Show less","title":"Professional Trainings & Certifications"},"why":{"buttonText":"Register for Details","description":"In the fast-moving world of cryptocurrencies, safeguard your business against financial crimes, regulatory penalties, and reputational damage by mastering the art and science of AML compliance.","title":"Why choose AML Zapex’s AML Training?"}},"trustedMembers":{"title":"We are trusted members of"},"wasCopiedToClipboard":"was copied to clipboard","why":{"block1":{"buttonText":"Let’s discuss","description1":"AML Zapex offers a wide range of compliance solutions customized for each client","description2":"We\'re confident in meeting your demands <b>after helping 300+ crypto enterprises</b> of all sizes in 25 jurisdictions","title":"Personalized Approach"},"block2":{"description1":"We offer KYT/Wallet Screening, KYC, AML, and more for crypto businesses","description2":"AML Zapex\' risk scoring is based on multiple data sources, ensuring that we have the most reliable data in the industry","description3":"Our user-friendly services and solutions streamline your company processes, removing compliance provider complexity","title":"Integrated Compliance Platform"},"block3":{"buttonText":"Contact","description":"AML Zapex understands the significance of fast, friendly customer support, thus we\'re always here for our clients. 24/7 support","note":"An answer during the night may take a bit longer","title":"Customer Support"},"title":"Why AML Zapex?"}}}'),
                eo = JSON.parse('{"translation":{"aboutUs":{"culture":{"description":"Consideramos que todo el \xe9xito de AML Zapex se debe a dos cosas: nuestro equipo personal y nuestra cultura.","items":[{"button":"Pruebe AML Zapex ahora","description1":"Nuestro objetivo es crear un mercado de criptomonedas honesto y transparente, y poner a disposici\xf3n de todos una herramienta para proteger tanto nuestra reputaci\xf3n como nuestros activos.","title":"Nuestra misi\xf3n"},{"button":"Forme parte del equipo","description":"Hoy, un equipo de m\xe1s de {{specialistsCount}} especialistas en cuatro oficinas diferentes (Kyiv, Londres, Gotemburgo y Hong Kong) est\xe1 trabajando en la creaci\xf3n y el desarrollo del servicio.","title":"Equipo personal"},{"button":"M\xe1s sobre el proyecto","description":"Nuestro algoritmo mejora constantemente y puede analizar m\xe1s de 10.000 fuentes de c\xf3digo abierto y m\xe1s de <b>2.500</b> direcciones de spam en tiempo real.","title":"Tecnolog\xeda"}],"title":"Nuestra cultura"},"experts":{"title":"Nuestros expertos"},"main":{"description":"Somos una empresa de evaluaci\xf3n en l\xednea de direcciones y transacciones de criptomonedas fundada en 2019 por un equipo de especialistas en RegTech (tecnolog\xeda regulatoria) de acuerdo con las recomendaciones internacionales del GAFI."},"products":{"items":[{"button":"Pruebe Safe3 ahora","description":"Billetera de criptomonedas Web3 descentralizada. \\nLa primera billetera cripto multicadena, desarrollada con teconlog\xeda de AML Zapex y el protocolo PureFi, que lo protege de activos maliciosos."},{"button":"M\xe1s sobre PureFi","description":"El protocolo PureFi permite que las dApps se ajusten plenamente a las normativas locales y globales conservando la descentralizaci\xf3n y el anonimato de los usuarios.\\nAML Zapex se desarroll\xf3 en colaboraci\xf3n con Hacken Foundation a fin de ofrecer una soluci\xf3n integral de an\xe1lisis de criptoactivos y procedimientos de AML/KYC para infraestructura Web3."}],"title":"Otros de nuestros productos"}},"analyze":{"items":{"green":{"bridge":{"description":"Entidades que permiten la transferencia de activos a trav\xe9s de distintas blockchains. Estas conexiones permiten transferir activos sin intercambiarlos, lo que diferencia a los puentes de los exchanges descentralizados.","title":"Bridge"},"exchange":{"description":"La organizaci\xf3n permite a los usuarios comprar, vender y hacer trading de criptomonedas al contar con licencias comerciales que incluyen los siguientes aspectos de los servicios:<br /> — Servicios de dep\xf3sito, corretaje u otros servicios financieros relacionados que brindan servicios de intercambio donde los participantes interact\xfaan con una parte central.<br /><br /> Y no incluye:<br /> — Licencias para servicios financieros no espec\xedficos y jurisdicciones incluidas en la lista de las que no cooperan con el GAFI.<br /><br /> Estas entidades son la categor\xeda m\xe1s importante y m\xe1s utilizada en la industria de las criptomonedas, y representan el 90% de todos los fondos enviados a trav\xe9s de estos servicios.","title":"Exchange"},"iCO":{"description":"Una organizaci\xf3n que financia colectivamente su proyecto vendiendo su criptomoneda reci\xe9n acu\xf1ada a inversores a cambio de monedas fiat o criptomonedas m\xe1s convencionales como bitcoin y ether.<br /><br /> Hay muchos ejemplos leg\xedtimos de este tipo de ofertas, pero tambi\xe9n muchos casos en los que los atacantes recaudan fondos a trav\xe9s de una ICO, luego malversan el dinero y desaparecen.","title":"ICO"},"marketplace":{"description":"Monedas utilizadas para pagar actividades leg\xedtimas.","title":"Marketplace"},"merchantServices":{"description":"Entidades que permiten a las empresas aceptar pagos de sus clientes, tambi\xe9n conocidas como pasarelas de pago o procesadores de pago.<br /><br /> A menudo facilitan la conversi\xf3n a la moneda fiat local y la transferencia de fondos a la cuenta bancaria del comerciante.","title":"Merchant Services"},"miner":{"description":"Monedas extra\xeddas por mineros y que a\xfan no se han vuelto a enviar.","title":"Miner"},"nFTPlatform":{"description":"Protocolos dise\xf1ados para emitir NFT, comerciar con ellos o venderlos. Aunque son similares a los contratos inteligentes o exchanges descentralizados, se clasifican seg\xfan su funci\xf3n principal.","title":"NFT Platform"},"nFTPlatformCollection":{"description":"Colecciones de NFT en plataformas dise\xf1adas para emitir NFT, comerciar con ellos o venderlos. Se clasifican seg\xfan su prop\xf3sito real a pesar de la similitud con los contratos inteligentes o los exchanges descentralizados.","title":"NFT Platform Collection"},"other":{"description":"Monedas recibidas a trav\xe9s de airdrops, venta de tokens u otros medios.","title":"Other"},"p2PExchange":{"description":"La entidad tiene una licencia para realizar una actividad comercial espec\xedficamente relacionada con la prestaci\xf3n de servicios de intercambio de criptomonedas, donde los participantes cambian monedas directamente entre s\xed, sin intermediarios.<br /><br /> Esto no incluye licencias para servicios financieros no espec\xedficos y jurisdicciones de la lista de las que no cooperan con el GAFI.","title":"P2P Exchange"},"paymentProcessor":{"description":"Monedas asociadas a servicios de pago.","title":"Payment Management"},"seizedAssets":{"description":"Criptoactivos incautados por las autoridades estatales.","title":"Seized Assets"},"wallet":{"description":"Una billetera en l\xednea es un servicio para almacenar y realizar transacciones con criptomonedas. Las billeteras de custodia son un tipo de billetera en l\xednea en la que el servicio conserva las claves privadas del usuario, lo que supone riesgos potenciales de estafas o de falta de seguridad. Pero, en general, proveedores con buena reputaci\xf3n pueden brindar mayor seguridad que los propios usuarios sin experiencia.","title":"Wallet"}},"red":{"childExploitation":{"description":"Actores asociados a la explotaci\xf3n infantil.","title":"Child Exploitation"},"darkMarket":{"description":"Monedas asociadas a actividades ilegales.","title":"Dark Market"},"darkService":{"description":"Monedas asociadas al maltrato infantil, la financiaci\xf3n del terrorismo o el tr\xe1fico de drogas.","title":"Dark Service"},"enforcementAction":{"description":"Una entidad que est\xe1 sujeta a procesos judiciales con las autoridades.","title":"Enforcement action"},"fraudShop":{"description":"Una entidad que vende varios tipos de datos, incluida informaci\xf3n personal, informaci\xf3n de tarjetas de cr\xe9dito y cuentas robadas.<br /><br /> Las transacciones fraudulentas suelen diferir de los mercados de la darknet en su comportamiento, como la reposici\xf3n constante de dep\xf3sitos y la ausencia de transacciones entrantes para los clientes.","title":"Fraud Shop"},"fraudulentExchange":{"description":"Exchanges involucrados en estafas de salida, comportamiento ilegal o cuyos fondos han sido confiscados por autoridades gubernamentales.","title":"Fraudulent Exchange"},"gambling":{"description":"Monedas vinculadas a juegos en l\xednea sin licencia.","title":"Gambling"},"highRiskJurisdiction":{"description":"Una jurisdicci\xf3n que figura como pa\xeds no cooperante del GAFI, tiene una amplia actividad maliciosa con criptomonedas o carece de un marco regulatorio desarrollado.<br /><br /> Esto incluye a pa\xedses como Ir\xe1n, Venezuela, Albania y la Rep\xfablica Popular Democr\xe1tica de Corea, tambi\xe9n conocida como Corea del Norte.","title":"High-Risk Jurisdiction\\n"},"illegalService":{"description":"Monedas asociadas a actividades ilegales.","title":"Illegal Service"},"illicitActorOrganization":{"description":"Una organizaci\xf3n o individuo que est\xe1 directa o indirectamente involucrado en diversas formas de actividad ilegal.<br /><br /> A menudo se asocia con temas de riesgo como los mercados de la web oscura, las transacciones fraudulentas, la financiaci\xf3n extremista y la pirater\xeda.","title":"Illicit Actor/Organization"},"malware":{"description":"Direcciones asociadas con malware, incluidos los cryptojackers que utilizan las computadoras host para la miner\xeda. Otros tipos de malware incluyen clippers, botnets, troyanos y campa\xf1as DDoS.","title":"Malware"},"mixer":{"description":"Monedas que pasaron por un mezclador para dificultar o anular el seguimiento. Los mezcladores se utilizan principalmente para el lavado de dinero.","title":"Mixer"},"onlinePharmacy":{"description":"Organizaciones especializadas en la venta ilegal de medicamentos recetados o no aprobados. Se pueden comparar a los mercados de la darknet, pero estas pueden operar tanto en la darknet como legalmente, lo que da lugar a una clasificaci\xf3n separada.","title":"Online Pharmacy"},"ransom":{"description":"Monedas obtenidas mediante extorsi\xf3n o chantaje.","title":"Ransom"},"sanctions":{"description":"Entidades sujetas a sanciones.","title":"Sanctions"},"scam":{"description":"Monedas obtenidas por fraude.","title":"Scam"},"specialMeasures":{"description":"Organizaciones o direcciones identificadas por FinCEN como de alto riesgo de lavado de dinero. Las contramedidas incluyen el mantenimiento de registros, los requisitos de presentaci\xf3n de informes y las restricciones sobre las transferencias de fondos y la gesti\xf3n de cuentas.<br /><br /> El alcance puede extenderse a organismos similares en otros pa\xedses o jurisdicciones a medida que se implementen.","title":"Special Measures"},"stolenCoins":{"description":"Monedas que se obtuvieron robando las criptomonedas de otra persona.","title":"Stolen Coins\\n"},"terrorismFinancing":{"description":"Entidades asociadas a la financiaci\xf3n del terrorismo.","title":"Terrorism Financing"}},"yellow":{"aTM":{"description":"Monedas recibidas a trav\xe9s de un operador de cajero autom\xe1tico de criptomonedas.","title":"ATM"},"dEX":{"description":"Una aplicaci\xf3n blockchain que facilita el trading de criptomonedas y tokens a trav\xe9s de contratos inteligentes automatizados.<br /><br /> Las transacciones de la plataforma descentralizada se hacen entre pares y no involucran a un tercero o una autoridad central, m\xe1s que el contrato inteligente que hace cumplir los t\xe9rminos de la transacci\xf3n; esto hace que sirva como una herramienta popular de lavado de dinero entre actores maliciosos.","title":"DEX"},"exchangeHighRisk":{"description":"Una entidad pasa a ser de alto riesgo en funci\xf3n de los siguientes criterios:<br /><br /> No tiene KYC: no requiere ninguna informaci\xf3n del cliente antes de permitir cualquier nivel de dep\xf3sito/retiro, o no hace ning\xfan intento por verificar esa informaci\xf3n.<br /><br />\\nV\xednculos delictivos: hay acusaciones penales contra la entidad jur\xeddica relacionadas con infracciones de requisitos de AML/CFT.<br /><br />\\nImpacto: la alta exposici\xf3n a servicios de riesgo, como los mercados de la darknet, otros exchanges de alto riesgo o los servicios de mezcladores, se define como un servicio cuya exposici\xf3n directa a otros de alto riesgo difiere en una desviaci\xf3n est\xe1ndar del promedio de todos los exchanges identificados durante un periodo de 12 meses.<br /><br />\\nJurisdicci\xf3n: la entidad est\xe1 radicada en una jurisdicci\xf3n con medidas de AML/CFT d\xe9biles.<br /><br />Sin licencia: no tiene ninguna licencia espec\xedfica para el trading de criptomonedas.","title":"Exchange | High Risk"},"infrastructureAsAService":{"description":"Una organizaci\xf3n que ofrece servicios inform\xe1ticos y de informaci\xf3n, incluidos, entre otros, VPN, VPS y registro de dominios.<br /><br /> Potencialmente, esto podr\xeda representar un pago a proveedores centrados en la privacidad que podr\xeda usarse con fines ilegales, pero, al mismo tiempo, podr\xeda representar un pago a un proveedor comercial completamente leg\xedtimo.","title":"Infrastructure as a Service"},"lendingContract":{"description":"Una aplicaci\xf3n blockchain que permite a los usuarios prestar y tomar prestados criptoactivos entre pares, sin interactuar con un tercero o una autoridad central.","title":"Lending Contract"},"liquidityPools":{"description":"Los contratos inteligentes en los que se bloquean los tokens con el fin de proporcionar liquidez.","title":"Liquidity Pools"},"p2PExchangeHighRisk":{"description":"La entidad no tiene ninguna licencia especial para prestar servicios de cambio de criptomonedas, donde los participantes hacen intercambios directamente entre s\xed, sin intermediarios.<br /><br />\\nEsto tambi\xe9n incluye a las entidades que tienen licencia, pero est\xe1n radicadas en jurisdicciones con medidas d\xe9biles, que figuran en la lista de empresas que no cooperan con el GAFI, o que no proporcionan KYC para transacciones de gran valor, lo que las hace ideales para el lavado de dinero.","title":"P2P Exchange | High Risk\\n"},"privacyProtocol":{"description":"Un protocolo o entidad que usa funciones de privacidad, como pruebas de conocimiento cero, para proporcionar a los usuarios funciones de privacidad.<br /><br /> Garantiza la transparencia de las transacciones, pero mantiene ocultas las direcciones de las contrapartes.<br /><br /> Esta funci\xf3n es el comportamiento predeterminado de muchas criptomonedas que protegen la privacidad, como Monero y Secret, lo que implica que obtener acceso a estos activos no significa necesariamente que los fondos se hayan mezclado u ofuscado de manera premeditada.","title":"Privacy protocol"},"smartContract":{"description":"Funcionalidad blockchain que opera como un contrato de ejecuci\xf3n aut\xf3noma, en el que los t\xe9rminos del acuerdo entre el comprador y el vendedor se escriben directamente en l\xedneas de c\xf3digo, que se ejecutan sin necesidad recurrir a un tercero.","title":"Smart Contract"},"tokenSmartContract":{"description":"Un criptoactivo construido en otra blockchain, el cual se puede enviar y recibir utilizando una billetera de criptomonedas.<br /><br /> Existen varios est\xe1ndares t\xe9cnicos de reglas acordadas que determinan el dise\xf1o, el desarrollo, el comportamiento y el funcionamiento de un token en particular.","title":"Token Smart Contract"},"unnamedService":{"description":"La categor\xeda se refiere a grupos actualmente no identificados que exhiben un comportamiento que puede esperarse de un servicio con una gran cantidad de direcciones y transacciones.","title":"Unnamed Service"}}},"main":{"description":"Analizamos si las direcciones tienen vinculaci\xf3n con m\xe1s de 20 fuentes de riesgo para encontrar transacciones sospechosas y determinar el factor de riesgo. Dividimos todas las fuentes en tres categor\xedas.","title":"\xbfQu\xe9 analizamos?"},"note":{"text1":"La presencia de <b>Dark Market, Dark Service, Illegal Service</b> es una mala se\xf1al.","text2":"Recomendamos hacer una investigaci\xf3n adicional para evitar perder fondos debido a bloqueos.","title":"\xa1Ten cuidado!"}},"b2b":{"contactForm":{"description":"Reach out and our team will address your queries","title":"Contact form"},"curiousAbout":{"button":"Pregunta aqu\xed","description":"Nuestros expertos en AML est\xe1n listos para conversar acerca de tus requisitos y responder preguntas.","title":"Listo para comenzar con AML Zapex"},"help":{"items":[{"button":"Cont\xe1ctanos","description":"Nuestro an\xe1lisis automatizado y profundo de Conozca Su Transacci\xf3n ayuda a las empresas a cumplir con los requisitos AML/CFT.","title":"C\xf3mo ayudamos"},{"button":"Ejemplo de informe","description":"Recibir\xe1s un informe detallado y completo que describe la puntuaci\xf3n de riesgo de la transacci\xf3n y las fuentes para orientar tus decisiones de cumplimiento.","title":"Informes completos"},{"description":"Examinaremos si hay billeteras de criptomonedas o transacciones \xabsucias\xbb, y le enviaremos un informe completo con las explicaciones.","title":"Revisamos las billeteras"},{"button":"Cont\xe1ctanos","description":"Lo ayudaremos a generar todos los documentos e informes que deba presentar ante cualquier organismo/empresa de inspecci\xf3n (SAR, CTR, etc.) y a completarlos.","title":"Ayudamos con los documentos"},{"description":"Hemos ayudado a m\xe1s de 200 empresas a cumplir con las normas GAFI/MiCA con nuestras soluciones KYT y AML.","title":"Trayectoria comprobada"}],"title":"Ayudamos a las empresas a cumplir con las normas GAFI/MiCA"},"helpsWith":{"items":[{"description":"Nuestra puntuaci\xf3n de riesgo garantiza una precisi\xf3n de datos del 99,5 % de 3 fuentes confiables.","title":"Precisi\xf3n de datos del 99,5 %"},{"description":"Verifica tu direcci\xf3n una vez, accede a verificaciones gratuitas de por vida.","title":"Verificaciones de direcci\xf3n gratuitas ilimitadas"},{"description":"Monitoreo continuo de una direcci\xf3n de blockchain espec\xedfica con notificaciones en tiempo real para todas las transacciones entrantes y salientes.","title":"Alertas en tiempo real"},{"description":"AML Zapex maneja la integraci\xf3n, liberando a sus desarrolladores para realizar tareas principales.","description1":"Le ayudaremos a configurar la verificaci\xf3n autom\xe1tica de todas las transacciones entrantes.","description2":"Reduzca el mantenimiento por su parte, para que pueda concentrarse en lo m\xe1s importante: su negocio.","title":"Asistencia"},{"description":"AML Zapex simplifica la verificaci\xf3n de transacciones con un \xfanico punto de acceso, reduciendo el mantenimiento para el enfoque de su negocio.","title":"Documentaci\xf3n API"},{"description":"El contrato AML Zapex garantiza a los reguladores que los asuntos de cumplimiento y seguridad se gestionan de manera efectiva.","description1":"Cuando se trata de integrar AML Zapex, nos encargaremos del trabajo por usted.","description2":"De esta manera, sus desarrolladores pueden centrarse en construir, no en integrar el cumplimiento.","title":"Contrato AML"}],"title":"La integraci\xf3n de AML Zapex optimiza el cumplimiento de KYT"},"howMatch":{"agreementCompliant":"Acuerdo AML/KYT/KYC compatible con AMLD5, GAFI y MiCA","amlTrainingForFree":"<b>Capacitaci\xf3n en cumplimiento de AML de criptomonedas y an\xe1lisis de blockchain</b> <small>valorada en $3,500, incluida en el plan de precios de forma gratuita</small>","automaticChecksViaApi":"Verificaciones autom\xe1ticas mediante API","bestChoice":"La mejor opci\xf3n","business":{"checksCount":"15.000 verificaciones AML","description":"Soluci\xf3n avanzada para empresas medianas","otherServicesOff":"5% de descuento en otros servicios de AML Zapex","price":"$3750","pricePerCheck":"$0.25 por verificaci\xf3n","referralProgram":"5% en programa de referidos","testApi":"Prueba API para KYC de AML Zapex + $50 de saldo"},"customerSupport":"24/7 servicio al cliente","dataSources":"5 fuentes de datos","description":"Diferentes planes dise\xf1ados para adaptarse a las necesidades de tu negocio","discuss":"Discutir","enterprise":{"checksCount":"100 000 — 500 000 verificaciones AML","contactUsForQuote":"Cont\xe1ctenos para una cotizaci\xf3n","description":"Precio especial y licencia para las empresas m\xe1s grandes","otherServicesOff":"10% de descuento en otros servicios de AML Zapex","price":"Licencia","pricePerCheck":"Precio personalizado","referralProgram":"15% en programa de referidos","supportTeam":"Equipo de apoyo de investigaci\xf3n y cumplimiento","testApi":"Prueba API para KYC de AML Zapex + $100 de saldo"},"growth":{"checksCount":"5.000 verificaciones AML","description":"Soluci\xf3n AML b\xe1sica para empresas en crecimiento","otherServicesOff":"5% de descuento en otros servicios de AML Zapex","price":"$1500","pricePerCheck":"$0.30 por verificaci\xf3n","referralProgram":"2% en programa de referidos","testApi":"Prueba API para KYC de AML Zapex + $50 de saldo"},"monitoringWithAlerts":"Monitoreo de direcciones con alertas","note":"* Luego de un a\xf1o calendario desde la fecha de pago, se anula el saldo de revisiones no utilizadas","ofac":"Cumplimiento con las sanciones de OFAC","premium":{"checksCount":"50.000 verificaciones AML","description":"El mejor precio y asistencia en cumplimiento normativo para grandes empresas","otherServicesOff":"10% de descuento en otros servicios de AML Zapex","price":"$10000","pricePerCheck":"$0.20 por verificaci\xf3n","referralProgram":"15% en programa de referidos","testApi":"Prueba API para KYC de AML Zapex + $100 de saldo"},"serviceClustering":"Agrupamiento de servicios","special":"Obtenga un 15% de descuento en todos los planes hasta el 30 de diciembre de 2023","supportedBlockchains":"M\xe1s de 25 blockchains compatibles","title":"\xbfCu\xe1nto vale tu tranquilidad?","yearly":"Anualmente"},"main":{"button":"Inscr\xedbase para una demostraci\xf3n","description":"Aumenta la cobertura de riesgos y maximiza la eficiencia a trav\xe9s de nuestra soluci\xf3n de API KYT para monitoreo de transacciones.","title":"Mant\xe9n la Conformidad y Protege a tu Negocio con KYT"},"reviews":{"description":"Explora nuestro servicio con personas a las que hemos ayudado","eliTaranto":{"company":"Activos digitales en EQIBank","name":"Eli Taranto","position":"CEO","text":"“El mayor problema era asegurarnos de que las billeteras cumplieran con todas las normas. Esto significa que necesit\xe1bamos conectar varias bases de datos, principalmente bases de datos iniciadas por el gobierno que son administradas y operadas por agencias nacionales y mantenidas globalmente y en conjunto con otros actores para asegurarnos de que ning\xfan actor nefasto ingrese al espacio criptogr\xe1fico.”"}},"risk":{"text":"De acuerdo a nuestras estad\xedsticas, <b>una de cada cuatro billeteras es sospechosa.</b><br/>\\nGastando unos pocos d\xf3lares en una revisi\xf3n, puede protegerse contra grandes p\xe9rdidas."},"safety":{"items":[{"button":"M\xe1s informaci\xf3n","description":"Acepte pagos en criptomonedas de sus socios o p\xe1gueles con ellas de manera segura. Nosotros verificamos todos los fondos para que solo le llegue dinero leg\xedtimo.","title":"Procesamiento de pagos en criptomonedas"}],"title":"Sistema seguro de procesamiento de pagos en criptomonedas"},"statistics":{"description":"El flujo de incorporaci\xf3n optimizado de AML Zapex garantiza que est\xe9s listo y funcionando en poco tiempo, lo que protege a tu negocio de los riesgos financieros y de fraude.","title":"Obt\xe9n una integraci\xf3n r\xe1pida y una protecci\xf3n AML efectiva hoy"}},"b2c":{"contact":{"button":"Cont\xe1ctenos por Telegram","description":"Estamos en contacto 24/7, por lo que podemos resolver r\xe1pidamente cualquier problema a trav\xe9s del chat en vivo.","note":"Como seres humanos, es posible que no respondamos con la misma rapidez por la noche que durante el d\xeda ✌️","title":"\xbfLe queda alguna duda?"},"email":{"buttonDownload":"Descargar el ejemplo","placeholder":"Su correo electr\xf3nico","title":"Deje su correo electr\xf3nico y le enviaremos un ejemplo de un informe detallado"},"example":{"items":[{"button":"Examinar una billetera","description":"El informe puede presentarse ante entidades reguladoras como garant\xeda de que resolvi\xf3 su problema con la pol\xedtica AML y sus disputas.","title":"Enviamos un informe detallado de AML"},{"button":"M\xe1s informaci\xf3n","description":"Analizamos billeteras en funci\xf3n de m\xe1s de 25 fuentes de procedencia para detectar transacciones sospechosas y determinar el factor de riesgo.","title":"An\xe1lisis de todos los or\xedgenes de los fondos"},{"button":"Empezar la revisi\xf3n","description":"Proporcionamos informaci\xf3n detallada sobre cada una de las fuentes","title":"Explicamos detalladamente"},{"description":"Obtendr\xe1 informaci\xf3n sobre el grado de riesgo de la billetera y poder\xe1 decidir si interactuar con esta","title":"Evaluaci\xf3n de riesgos"},{"button":"Examinar una direcci\xf3n","description":"Te mostramos si la direcci\xf3n est\xe1 en una lista de sanciones. Cualquier interacci\xf3n con estas direcciones puede suponer la imposici\xf3n de multas, el bloqueo o la revocaci\xf3n de la licencia","title":"Protecci\xf3n contra billeteras sancionadas"}],"title":"Ejemplo de un an\xe1lisis de billetera"},"main":{"button":"Empezar la revisi\xf3n","description":"Examinamos tanto billeteras como transacciones y mostramos el origen de los fondos. Esto ayuda a determinar la integridad de los activos y a protegerse de estafadores y monedas robadas.","title":"Estudio detallado de las billeteras"},"pricing":{"items":[{"button":"Va conmigo","description":"Ideal para empezar a entender nuestro servicio","note":"$3 por una revisi\xf3n","price":"$3","spec1":"1 revisi\xf3n AML","spec2":"Sin l\xedmite de tiempo","spec3":"Asistencia de AML Zapex 24/7","title":"Inicio"},{"button":"Lo llevo","description":"Un paquete rentable para los holders","note":"$2,5 por una revisi\xf3n","price":"$25","spec1":"10 revisiones AML","spec2":"1 a\xf1o","spec3":"Asistencia de AML Zapex 24/7","title":"\xd3ptima"},{"badge":"La mejor opci\xf3n","button":"Quiero la oferta","description":"Para traders e inversores","note":"$2 por una revisi\xf3n","price":"$50","spec1":"25 revisiones AML","spec2":"1 a\xf1o","spec3":"Asistencia de AML Zapex 24/7","spec4":"Programa de referidos","title":"Pro"}],"title":"Precios"},"works":{"text":"Aqu\xed esta el v\xeddeo","title":"\xbfC\xf3mo funciona?"}},"b2cpage":{"checkAddress":{"messengers":{"description":"Un simple mensaje en Telegram o en WhatsApp es todo lo que se necesita para iniciar un an\xe1lisis minucioso de tu monedero de criptomonedas, proporcionando as\xed una alternativa c\xf3moda para aquellos usuarios que favorecen las plataformas de mensajer\xeda instant\xe1nea.","title":"Mensajeros"},"or":"o","signUp":"Reg\xedstrate para obtener m\xe1s funciones adicionales","title":"\xbfC\xf3mo verificar tu direcci\xf3n?","website":{"description":"Para un m\xe9todo m\xe1s convencional, accede a tu cuenta de usuario en nuestro sitio web. Aqu\xed podr\xe1s realizar compras y revisar tu monedero con una gu\xeda detallada y soporte, brindando una experiencia completa e interactiva. O descarga nuestra aplicaci\xf3n m\xf3vil para disfrutar de la m\xe1xima comodidad y accesibilidad.","title":"Sitio web o aplicaci\xf3n"}},"checkYourWallet":"Revisa tu monedero","faq":{"info":{"answer":"Respondemos en un plazo de 30 segundos","description":"Ponte en contacto con nosotros a trav\xe9s de Telegram. Estamos disponibles 24/7 para garantizar una experiencia sin problemas para todos.","inTelegram":"Estamos en Telegram","note":"Estamos disponibles las <b>24/7</b>, aunque puede que no podamos responder con prontitud durante la noche.","title":"\xbfTu pregunta no est\xe1 en la lista?"},"title":"FAQs"},"hero":{"description":"Recibir fondos de origen ilegal podr\xeda llevar al riesgo de que tus fondos sean congelados","title":"Asegura tus monederos de fondos il\xedcitos"},"info":{"address":{"description":"Monitoreo en tiempo real de cualquier transacci\xf3n asociada con una direcci\xf3n de blockchain espec\xedfica, recibiendo notificaciones instant\xe1neas tanto para transacciones entrantes como salientes.","title":"Seguimiento de direcciones"},"investigations":{"description":"Visualiza la conexi\xf3n directa e indirecta entre la direcci\xf3n proporcionada y los cl\xfasteres identificados, el valor total enviado hacia/desde el monedero objetivo y la distancia hasta \xe9l.","title":"Investigaciones"},"suspicious":{"description":"Identificaci\xf3n de activos vinculados a actividades ilegales como fraude, terrorismo, extorsi\xf3n y otros delitos.","title":"Transacciones sospechosas"}},"investigation":{"download":"Descarga informe de ejemplo.pdf","title":"Investigaci\xf3n de direcciones de monederos","videoTitle":"Ve el video que muestra un ejemplo de investigaci\xf3n"},"keepCrypto":{"description":"Identifica los riesgos potenciales","items":{"avoid":{"description":"La verificaci\xf3n regular de los monederos de criptomonedas y transacciones puede reducir significativamente el riesgo de que los activos sean congelados en los exchanges.","title":"Evita la suspensi\xf3n de la cuenta CEX"},"boost":{"description":"Identifica y aborda posibles amenazas de seguridad para proteger tus inversiones y participaciones.","title":"Aumenta la seguridad"},"stay":{"description":"Cumple con las regulaciones en evoluci\xf3n y evita penalizaciones. Las verificaciones regulares te ayudan a cumplir con los requisitos legales, evitando penalizaciones y problemas legales.","title":"Mantente legal y evita problemas"}},"title":"Mant\xe9n tus criptomonedas seguras"},"moreProducts":{"items":{"amlTraining":{"description":"Programas de capacitaci\xf3n especializados para la industria de las criptomonedas","title":"Capacitaci\xf3n AML"},"consulting":{"description":"Ayudamos a las criptoempresas con los procedimientos, la capacitaci\xf3n y la configuraci\xf3n de cuentas bancarias AML","title":"Consultor\xeda"},"investigation":{"description":"Asistencia con la recuperaci\xf3n de criptomonedas robadas","title":"Investigaci\xf3n"},"kyc":{"description":"Verifica m\xe1s usuarios con una validaci\xf3n r\xe1pida, segura, automatizada y eficaz","title":"KYC"},"kyt":{"description":"Verificaci\xf3n autom\xe1tica de todas las transacciones y monederos por medio de la API","title":"KYT"}},"leaveRequest":"Deje una solicitud","title":"M\xe1s productos y soluciones"},"orOnWeb":"o en la web","pricing":{"checklist":["M\xe1s de 25 Blockchains compatibles y sus activos y tokens nativos","Comprobaci\xf3n manual de transacciones y monederos a trav\xe9s del tablero de la plataforma de criptomonedas.","Servicio prioritario 24/7","3 Fuentes de datos"],"forBusiness":"Para empresas","forPersonal":"Para personal","tariffs":{"advanced":{"badge":"Ahorre 40%","checks":"100 Verificaciones","perCheck":"1.8 $ por una verificaci\xf3n","price":"$180"},"optimal":{"badge":"Ahorre 17%","checks":"10 Verificaciones","perCheck":"2,5 $ por una verificaci\xf3n","price":"25 $"},"pro":{"badge":"Ahorre 33%","checks":"25 Verificaciones","perCheck":"2 $ por una verificaci\xf3n","price":"50 $"},"start":{"checks":"3 Verificaciones","perCheck":"3 $ por una verificaci\xf3n","price":"$9"}},"title":"Precios"},"risks":{"description":"En el \xe1mbito de las criptomonedas, resulta primordial cumplir las normas reglamentarias que est\xe1n en constante evoluci\xf3n. Las verificaciones regulares te ayudan a cumplir con los requisitos legales, evitando penalizaciones y problemas legales.","title":"\xbfQu\xe9 analizamos?"},"secureCrypto":{"title":"Protege tus criptomonedas con la detecci\xf3n de riesgos de monederos y transacciones"},"stats":{"description":"La puntuaci\xf3n de riesgo de AML Zapex se basa en m\xfaltiples fuentes de datos, lo que garantiza que disponemos de los datos m\xe1s fiables del sector","title":"El 23% de los monederos contienen activos de riesgo, exponiendo a los usuarios a estafas, fraudes o malos actores."},"trustedCompliance":{"title":"Respaldados por los departamentos de cumplimiento normativo de"},"weTrusted":{"title":"Somos considerados miembros confiables de"},"why":{"discussButton":"Hablemos de ello","integrated":{"description1":"Ofrecemos evaluaci\xf3n de riesgos de monederos/KYT, KYC, AML y m\xe1s para empresas relacionadas con criptomonedas","description2":"La puntuaci\xf3n de riesgo de AML Zapex se basa en m\xfaltiples fuentes de datos, lo que garantiza que disponemos de los datos m\xe1s fiables del sector","description3":"Nuestros servicios y soluciones f\xe1ciles de usar simplifican los procesos de tu empresa, eliminando la complejidad asociada con los proveedores de cumplimiento","title":"Plataforma integrada de cumplimiento"},"personalized":{"description1":"AML Zapex ofrece una amplia gama de soluciones de cumplimiento personalizadas para cada cliente.","description2":"Estamos seguros de poder satisfacer tus necesidades despu\xe9s de haber colaborado con m\xe1s de 300 empresas relacionadas con criptomonedas, de todos los tama\xf1os y en 25 jurisdicciones","title":"Enfoque personalizado"},"title":"\xbfPor qu\xe9 AML Zapex?"}},"banners":{"title":"Banners"},"careers":{"advantages":{"items":{"dynamicEnvironment":{"description":"Prosperamos con el cambio y la innovaci\xf3n, asegurando que cada d\xeda sea emocionante y lleno de nuevas oportunidades.","title":"Entorno din\xe1mico"},"freedomToCreate":{"description":"Asume la responsabilidad, aporta ideas frescas y fomenta la innovaci\xf3n en un entorno que conf\xeda en ti y te empodera.","title":"Libertad para crear"},"makeDifference":{"description":"Tu trabajo contribuir\xe1 directamente a un mundo digital m\xe1s seguro y confiable.","title":"Marca la diferencia"},"supportiveCulture":{"description":"La colaboraci\xf3n y la transparencia est\xe1n en el coraz\xf3n de lo que hacemos. La voz de todos es escuchada y valorada.","title":"Cultura de apoyo"},"workLifeBalance":{"description":"Priorizamos el impacto sobre los horarios r\xedgidos — SIN seguimiento del tiempo, solo RESULTADOS.","title":"Equilibrio entre trabajo y vida"},"workWithExperts":{"description":"\xdanete a un equipo que valora el intercambio de conocimientos, la curiosidad y el aprendizaje continuo para superar l\xedmites.","title":"Trabaja con expertos"}},"title":"Por qu\xe9 te encantar\xe1 trabajar con nosotros"},"employmentType":{"fullTime":"Tiempo completo","partTime":"Medio tiempo"},"gallery":{"title":"Personas que lo hacen posible"},"hero":{"description":"En AML Zapex, cada desaf\xedo es una oportunidad para innovar. \xdanete a un equipo con una misi\xf3n clara que transforma el cumplimiento en blockchain con soluciones avanzadas. Tus ideas, habilidades y pasi\xf3n pueden dejar una huella duradera aqu\xed.","openPositionsButton":"Ver posiciones abiertas","title":"Juntos, damos forma al futuro del an\xe1lisis e innovaci\xf3n en blockchain"},"hrInfo":{"gotQuestions":"\xbfTienes preguntas? Hablemos"},"jobType":{"office":"Oficina","remote":"Remoto"},"location":{"ukraine":"Ucrania","worldwide":"En todo el mundo"},"numbers":{"byTheNumbers":"En n\xfameros","locations":"Ubicaciones","teammates":"Compa\xf1eros","yearOverYearGrowth":"Crecimiento anual","yearsOnTheMarket":"A\xf1os en el mercado"},"openPositions":{"empty":"No hay posiciones abiertas en este momento","title":"Posiciones abiertas"},"openPositionsEntry":{"details":"Detalles"},"stickyNav":{"aboutUs":"Sobre nosotros","advantages":"Ventajas","openPositions":"Posiciones abiertas"},"submitApplication":{"attachYourResumeOrCV":"Adjunta tu CV","currentCompany":"Empresa actual","currentLocation":"Ubicaci\xf3n actual","eMail":"Correo electr\xf3nico","enterYourCompany":"Ingresa el nombre de tu empresa","enterYourEmail":"Introduce tu e-mail","enterYourFullName":"Ingresa tu nombre completo","enterYourLocation":"Ingresa tu ubicaci\xf3n","enterYourPhone":"Ingresa tu tel\xe9fono","fileIsTooLarge":"El archivo es demasiado grande (m\xe1x. {{maxFileSize}}MB)","fullName":"Nombre completo","invalidEmail":"Correo electr\xf3nico no v\xe1lido","phone":"Tel\xe9fono","resumeOrCV":"CV","submit":"Enviar","success":{"description":"Nuestro equipo revisar\xe1 tu solicitud y se pondr\xe1 en contacto contigo pronto.","title":"\xa1Gracias por postularte!"},"thisFieldIsRequired":"Este campo es obligatorio","title":"Enviar tu solicitud"},"vacancy":{"applyForThisJob":"Solicitar","backToOpenPositions":"Volver a posiciones abiertas"}},"certifications":{"90012015":{"description":"AML Zapex cuenta con la certificaci\xf3n ISO 9001, el est\xe1ndar de sistemas de gesti\xf3n de calidad m\xe1s reconocido del mundo. Esta certificaci\xf3n garantiza que ofrecemos una calidad constante, mejoramos la satisfacci\xf3n del cliente, agilizamos los procesos, reducimos los errores y aumentamos la productividad. En AML Zapex, estamos comprometidos a cumplir con los est\xe1ndares m\xe1s altos de gesti\xf3n de calidad.","title":"ISO9001"},"270012017":{"description":"AML Zapex ha obtenido la certificaci\xf3n ISO 27001, reconocida mundialmente como el principal est\xe1ndar para sistemas de gesti\xf3n de seguridad de la informaci\xf3n. Esta certificaci\xf3n establece un marco estrat\xe9gico para mejorar la seguridad de la informaci\xf3n, mitigar los riesgos cibern\xe9ticos y garantizar el cumplimiento normativo.","title":"ISO27001"},"description":"En AML Zapex, le damos prioridad a la seguridad de nuestros usuarios y mejoramos continuamente nuestras medidas para garantizar su seguridad y confianza.","title":"Certificaciones de AML Zapex"},"checking":{"addressPlaceholder":"Ingrese una direcci\xf3n de criptomonedas","allFieldsRequired":"Todos los campos son obligatorios","description":"Identifique r\xe1pidamente el riesgo de una billetera y el origen de sus fondos por medio de un sencillo informe","emailError":"Ingrese una direcci\xf3n de correo electr\xf3nico v\xe1lida","emailPlaceholder":"Su correo electr\xf3nico","note":"Despu\xe9s de la verificaci\xf3n, le enviaremos el informe al correo electr\xf3nico que proporcion\xf3","submitButton":"Examinar","successDescription":"Su solicitud se est\xe1 procesando, recibir\xe1 los resultados de la verificaci\xf3n en la direcci\xf3n de correo electr\xf3nico especificada lo antes posible.","successTitle":"\xa1Gracias!","title":"Revisi\xf3n de billetera de criptomonedas"},"consulting":{"consult":{"title":"Consulte gratis sin ning\xfan compromiso"},"faq":{"items":[{"content":"El incumplimiento de los requisitos de AML/KYC puede llevar a entidades reguladoras a revocar una licencia, o incluso a grandes multas o al encarcelamiento. Adem\xe1s, una instituci\xf3n financiera o un exchange de criptomonedas podr\xeda bloquear su cuenta y congelar sus activos.","title":"\xbfPor qu\xe9 debo cumplir con los requisitos de AML/KYC?"},{"content":"S\xed, emitimos una confirmaci\xf3n de que se complet\xf3 la capacitaci\xf3n proporcionada por AML Zapex. Puede mostrar este certificado a los auditores, entidades reguladoras, bancos o exchanges de criptomonedas cuando le soliciten una prueba de su experiencia en AML/KYC o an\xe1lisis de blockchain.","title":"\xbfEmiten certificados de finalizaci\xf3n de la formaci\xf3n?"},{"content":"Dependiendo de la solicitud, el proceso de preparaci\xf3n de procedimientos u otros documentos puede durar entre 1-2 semanas y 1 mes.","title":"\xbfCu\xe1nto tiempo tarda?"},{"content":"Cubrimos la concesi\xf3n de licencias o encargos relacionados con AML/KYC principalmente para pa\xedses de la UE y la CEI. Sin embargo, se puede considerar a otros pa\xedses caso por caso. Adem\xe1s, hay documentos que solo las instituciones financieras o los exchanges de criptomonedas necesitan, pero no las autoridades reguladoras locales. En tal caso, tambi\xe9n podremos brindarle la asistencia necesaria.","title":"\xbfEn qu\xe9 pa\xedses tienen cobertura?"},{"content":"Podemos ofrecerle una auditor\xeda de su billetera de criptomonedas. La auditor\xeda incluir\xe1 el an\xe1lisis del origen de los fondos, las contrapartes, los riesgos y el comportamiento de la billetera cripto seleccionada. Algunas empresas o particulares pueden requerir dicha auditor\xeda de la billetera de criptomonedas en otras interacciones con un banco o entidad reguladora.","title":"\xbfEmiten informes de diligencia debida (auditor\xeda) para billeteras de criptomonedas?"}],"title":"Preguntas frecuentes"},"form":{"thankYou":{"description":"Agradecemos su inter\xe9s en nuestros servicios de consultor\xeda sobre el cumplimiento de la normativa en materia de criptograf\xeda. Su solicitud se ha enviado correctamente y nuestro equipo est\xe1 deseando ayudarle. En las pr\xf3ximas 24 horas, uno de nuestros especialistas certificados se pondr\xe1 en contacto con usted para discutir su consulta en detalle.","info":{"description":"Mientras espera, no dude en explorar nuestro <a href=\\"https://blog.AML Zapex.com\\">blog</a> para conocer las \xfaltimas novedades y actualizaciones en el mundo del cumplimiento de la normativa sobre criptomonedas.","title":"Mantente informado"},"title":"Gracias por contactar con AML Zapex"}},"main":{"description":"Ofrecemos consultor\xeda a los clientes teniendo en cuenta no solo los requisitos legales, sino tambi\xe9n la pr\xe1ctica de mercado y el aspecto comercial del asunto.","leaveRequest":"Deje una solicitud","title":"Ayudamos a empresas de criptomonedas con la documentaci\xf3n"},"services":{"description":"El equipo de AML Zapex ofrece especialistas certificados en varios campos, como el \xe1mbito jur\xeddico, las auditor\xedas, el cumplimiento normativo de AML/CFT y los informes forenses de blockchain. Proporcionamos asesoramiento integral teniendo en cuenta los requisitos legales, las pr\xe1cticas de mercado y los aspectos comerciales.","hide":"Ocultar ↑","items":{"assisting":{"description":"Algunos de nuestros clientes tienen dificultades cuando abren cuentas para servicios relacionados con criptoactivos o dinero fiat.","fullDescription":"Algunos de nuestros clientes tienen dificultades cuando abren cuentas para servicios relacionados con criptoactivos o dinero fiat. Ayudamos a los clientes a encontrar la instituci\xf3n financiera o el exchange de criptomonedas que mejor se ajuste a sus expectativas. Tambi\xe9n asistimos a los clientes en la comunicaci\xf3n con las instituciones financieras seleccionadas para garantizar un proceso de apertura de cuenta r\xe1pido y \xe1gil. Dicha comunicaci\xf3n puede implicar requisitos como rellenar cuestionarios o completar formularios relacionados con AML, etc.","title":"Asistencia para clientes en la apertura de cuentas en exchanges de criptomoneda o en bancos."},"audit":{"description":"Algunos de nuestros asesores son abogados y auditores con experiencia en firmas de abogados de primer nivel, como las del Big4 y los CEX, que pueden ayudar a nuestros clientes a resolver asuntos legales y proporcionar informes integrales de diligencia debida.","fullDescription":"Algunos de nuestros asesores son abogados y auditores con experiencia en firmas de abogados de primer nivel, como las del Big4 y los CEX, que pueden ayudar a nuestros clientes a resolver asuntos legales y proporcionar informes integrales de diligencia debida. Por ejemplo, podemos preparar un informe de diligencia debida sobre billeteras cripto o empresas de inversi\xf3n en criptomonedas, etc.","title":"Servicios legales y de auditor\xeda"},"drafting":{"description":"Ayudamos a las empresas de criptomonedas a dise\xf1ar y desarrollar sus procesos internos de AML/KYC.","fullDescription":"Ayudamos a las empresas de criptomonedas a dise\xf1ar y desarrollar sus procesos internos de AML/KYC. Por ejemplo, dise\xf1amos y personalizamos el procedimiento interno de AML teniendo en cuenta los procesos comerciales y la situaci\xf3n actual del cliente. Junto con esto, ayudamos a los clientes a elaborar su declaraci\xf3n de apetito de riesgo, a redactar pol\xedticas de denuncia de irregularidades, pol\xedticas de anticorrupci\xf3n y soborno, o a desarrollar reglas de monitoreo de transacciones de criptoactivos. Entidades reguladoras, bancos o exchanges de criptomonedas exigen todos los documentos mencionados anteriormente cuando el cliente planea solicitar una licencia o abrir una cuenta.","title":"Redacci\xf3n de procedimientos de AML/KYC y monitoreo de transacciones"},"trainings":{"description":"Tenemos experiencia de primera mano en AML y criptoactivos o blockchain, y queremos compartir nuestros conocimientos.","fullDescription":"Tenemos experiencia de primera mano en AML y criptoactivos o blockchain, y queremos compartir nuestros conocimientos. Por lo tanto, desarrollamos constantemente capacitaciones para educar a nuestros clientes sobre nuevos riesgos de AML/CFT con un enfoque en criptoactivos.<br /><br /> Cabe destacar que todas las empresas de criptomonedas reguladas que tienen cuentas en CEX/bancos deben realizar al menos una capacitaci\xf3n anual en AML.","title":"Capacitaciones en AML/KYC y an\xe1lisis de blockchain"}},"learnMore":"M\xe1s informaci\xf3n","title":"Nuestros servicios"},"specialist":{"nikoDemchuk":{"description":"Niko Demchuk es un especialista en AML experimentado, certificado por la Asociaci\xf3n de Especialistas Certificados en Anti-Lavado de Dinero (ACAMS). Habiendo recibido su maestr\xeda en Derecho Inform\xe1tico (IT), Niko es un experto en regulaci\xf3n de criptomonedas, cumplimiento normativo de AML y KYC. Tiene amplia experiencia en empresas legales y un gran conocimiento sobre el manejo de diferentes regulaciones de criptomonedas. Actualmente, es abogado y jefe de Consultor\xeda en AML Zapex.","name":"Niko Demchuk","position":"Abogado y asesor de Relaciones Gubernamentales"},"title":"Especialista l\xedder certificado en AML"}},"cookies":{"acceptButton":"Aceptar todas las cookies","text":"Al navegar por este sitio web, acepta el uso de cookies por parte de servicios de terceros."},"copy":"Copia","cryptopayment":{"contact":{"button":"Cont\xe1ctenos por Telegram","description":"Ofrecemos condiciones flexibles y un enfoque personalizado. Cont\xe1ctenos y encontraremos la opci\xf3n con el dise\xf1o que mejor se adapte a sus necesidades comerciales.","title":"Cont\xe1ctenos para hablar de los t\xe9rminos y condiciones"},"howMatch":{"description":"Evite altas comisiones con AML Zapex. Las comisiones ocultas y los contracargos son cosa del pasado.","items":[{"label1":"Billeteras personales","label2":"Billeteras de comerciantes","label3":"Facturas de dinero fiat","title":"Сomisi\xf3n de recepci\xf3n"},{"description":"Las comisiones de env\xedo se establecen en funci\xf3n del tipo de cambio del d\xf3lar estadounidense y se calculan en el momento de la generaci\xf3n del pago","title":"Сomisi\xf3n de env\xedo personal"},{"title":"La comisi\xf3n por retirar dinero fiat es la siguiente:"}],"title":"\xbfCu\xe1nto cuesta?"},"info":{"items":[{"button":"M\xe1s informaci\xf3n","description":"Brindamos a las empresas la capcidad de aceptar criptomonedas de forma segura como parte de su actividad comercial o para pagar a sus socios. Cada transacci\xf3n se analiza en tiempo real y garantiza as\xed que todos los activos sean leg\xedtimos.","title":"\xbfQu\xe9 ofrecemos?"},{"title":"Recibe pagos en criptomonedas desde cualquier parte del mundo"},{"title":"Pagos en las criptomonedas m\xe1s populares"}]},"join":{"button":"Empezar ahora","description":"Acepta pagos, atrae nuevos clientes y evita altas comisiones gracias a AML Zapex","title":"\xdanase a las miles de empresas que ya usan pagos en criptomonedas"},"main":{"button":"Consulta gratuita","description":"Verifique todos los pagos en criptomonedas para asegurarse de que su empresa solo maneja fondos limpios.","title":"Pagos en criptomonedas para su empresa"}},"fatf":{"advantages":{"items":[{"button":"Consulta gratuita","description":"Solo paga por los resultados. Si no podemos ayudarlo, se lo diremos honestamente.","title":"Paga por los resultados"},{"button":"Hablar sobre los t\xe9rminos","description":"Incluso si surge un problema en el transcurso de unos meses o a\xf1os, estaremos encantados de darle una recomendaci\xf3n gratuita.","title":"No nos da igual"},{"button":"Cont\xe1ctenos por Telegram","description1":"Estamos en contacto 24/7, por lo que podemos resolver r\xe1pidamente cualquier problema a trav\xe9s del chat en vivo.","description2":"Como seres humanos, es posible que no respondamos con la misma rapidez por la noche que durante el d\xeda ✌️","title":"Atenci\xf3n al cliente 24/7"},{"button":"Firmar contrato","description":"Hemos recuperado alrededor de <b><span>$5.359.800</span></b> para clientes a quienes les robaron sus fondos.","title":"Experiencia"},{"button":"Cont\xe1ctenos","description":"Valoramos su tiempo. Por eso, respondemos en solo 30 segundos.","title":" Le respondemos en 30 segundos"},{"button":"Consulta gratuita","description":"Ya hemos ayudado a m\xe1s de <b>200 empresas </b> a cumplir plenamente con las Recomendaciones de AML del <b>GAFI</b>.","title":"Profesionalismo"}],"title":"Nuestras ventajas"},"canWeHelp":{"first":{"description":"Redacci\xf3n de documentaci\xf3n legal requerida para procesos de licenciamiento de empresas de criptomonedas, tales como procedimientos AML, procedimientos especiales para el an\xe1lisis de blockchain, declaraci\xf3n de exposici\xf3n al riesgo y otros","title":"Procedimiento de licenciamiento para una empresa cripto"},"items":[{"description":"Llevamos a cabo la revisi\xf3n del origen de los activos individuales, el destino, y una evaluaci\xf3n global del riesgo de bloqueo de activos.","title":"Examen de AML"},{"description":"Ayudamos a crear y completar todos los documentos y proporcionaremos informes para su presentaci\xf3n a cualquier entidad/empresa de inspecci\xf3n","title":"Auditor\xeda + informe"},{"description":"Tras una auditor\xeda detallada por parte del equipo de AML, su empresa cumplir\xe1 con todos los requisitos del GAFI","title":"Cumplimiento normativo acorde al GAFI"}],"note":"Nuestra experiencia se basa en el reglamento MiCA y en las necesidades normativas de los pa\xedses que admiten criptomonedas.","second":{"description":"Asesoramos a empresas de criptomonedas en sus actividades comerciales diarias, por ejemplo, ofreci\xe9ndoles capacitaciones contra el lavado de dinero y ayud\xe1ndolas con investigaciones sobre los or\xedgenes de los criptoactivos.<br /><br /> Las capacitaciones anuales de AML son obligatorias para las empresas de criptomonedas con licencia.","title":"Consultor\xeda AML"},"third":{"description":"Ayudamos a empresas cripto a abrir cuentas bancarias y a completar cuestionarios de instituciones financieras.<br /><br /> Adem\xe1s, ofrecemos una auditor\xeda de la billetera cripto seleccionada para detectar riesgos legales.<br /><br /> El banco puede exigirle que rellene formularios relacionados con el AML o que presente pol\xedticas de AML, etc.","title":"Asistencia regulatoria"},"title":"\xbfQu\xe9 ofrecemos?"},"consultation":{"button":"Cont\xe1ctenos por Telegram","description":"Consulta gratis por chat de Telegram. Si no podemos ayudarlo, se lo diermos de inmediato. No tiene nada que perder y puede darse de baja cuando lo desee.","title":"La consulta es gratuita y sin compromiso"},"faq":{"items":[{"content":"El incumplimiento de los requisitos de AML/KYC puede llevar a entidades reguladoras a revocar una licencia, o incluso a grandes multas o al encarcelamiento. Adem\xe1s, una instituci\xf3n financiera o un exchange de criptomonedas podr\xeda bloquear su cuenta y congelar sus activos.","title":"\xbfPor qu\xe9 debo cumplir con los requisitos de AML/KYC?"},{"content":"Nuestra experiencia se centra en los requisitos de las licencias de criptomonedas, el cumplimiento normativo de AML/KYC y la apertura de cuentas bancarias. El paquete de documentos o el asesoramiento espec\xedfico dependen de las necesidades del cliente. Tambi\xe9n podemos impartir capacitaciones relacionadas con AML.","title":"\xbfC\xf3mo pueden ayudarme?"},{"content":"Dependiendo de la solicitud, el proceso de preparaci\xf3n de procedimientos u otros documentos puede tardar entre 1-2 semanas y 1 mes.","title":"\xbfCu\xe1nto tarda el proceso?"},{"content":"Cubrimos la concesi\xf3n de licencias o encargos relacionados con AML/KYC principalmente para pa\xedses de la UE y la CEI. Sin embargo, se puede considerar a otros pa\xedses caso por caso. Adem\xe1s, hay documentos que solo exigen las instituciones financieras o los exchanges de criptomonedas, pero no las autoridades reguladoras locales. En tal caso, tambi\xe9n podremos prestarle la asistencia que necesite.","title":"\xbfEn qu\xe9 pa\xedses tienen cobertura?"},{"content":"Podemos ofrecerle una auditor\xeda de su billetera de criptomonedas. La auditor\xeda incluir\xe1 el an\xe1lisis del origen de los fondos, las contrapartes, los riesgos y el comportamiento de la billetera cripto seleccionada. Algunas entidades f\xedsicas o jur\xeddicas pueden requerir dicha auditor\xeda de la billetera de criptomonedas en otras interacciones con un banco o entidad reguladora.","title":"\xbfEmiten informes de diligencia debida (auditor\xeda) para billeteras de criptomonedas?"}],"title":"Preguntas frecuentes"},"main":{"button":"Consulta gratuita","description":"Nuestro equipo de expertos lo ayudar\xe1 a garantizar que su empresa cumpla plenamente con las Recomendaciones del GAFI.","note":"<b>M\xe1s de 200</b> empresas ya se ajustaron correctamente a los requisitos normativos.","specs1":"Prepare documentos para licencias de uso de criptomonedas","specs2":"Abra una cuenta bancaria","specs3":"Elabore procedimientos de AML, otros documentos necesarios y realice una capacitaci\xf3n en AML","subtitle":"Nuestro equipo de especialistas lo ayudar\xe1 con lo siguiente","title":"Ayudamos a empresas de criptomonedas con la documentaci\xf3n"},"program":{"buttonPdf":"Ejemplo de an\xe1lisis en PDF","from":"Desde","items":[{"button":"Cont\xe1ctenos por Telegram","description":"Proporcionaremos un marco sencillo conforme a los requisitos de AML para empresas de criptomonedas.","specs":[{"text":"El equipo analizar\xe1 sus activos y le indicar\xe1 el origen de todos los fondos"},{"text":"Le enviaremos el informe completo de hacia d\xf3nde se transfirieron sus fondos, le indicaremos qu\xe9 riesgo tienen sus activos de quedar bloqueados y tambi\xe9n le ofreceremos nuestros comentarios."},{"text":"Explicaremos c\xf3mo almacenar datos, revisar sanciones, verificar a personas pol\xedticamente expuesta, y a lidiar con medios de comunicaci\xf3n no deseados"},{"text":"Proporcionamos indicaciones claras"}]},{"button":"Cont\xe1ctenos por Telegram","description":"Estudiaremos todos los aspectos relacionados con el cumplimiento de requisitos de AML y haremos una auditor\xeda completa de AML de su empresa","special":"Ayud\xf3 a {{value}} empresas","specs":[{"text":"El equipo analizar\xe1 sus activos y le indicar\xe1 el origen de todos los fondos"},{"text":"Le enviaremos el informe completo de hacia d\xf3nde se transfirieron sus fondos, le indicaremos qu\xe9 riesgo tienen sus activos de quedar bloqueados y tambi\xe9n le ofreceremos nuestros comentarios."},{"text":"Normas detalladas para KYC/CDD"},{"text":"Lo ayudaremos a completar los informes de diligencia debida mejorada (EDD), que contienen informaci\xf3n detallada sobre auditor\xedas de entidades f\xedsicas y jur\xeddicas"}]},{"button":"Cont\xe1ctenos por Telegram","description":"Haremos un an\xe1lisis empresarial profesional y le indicaremos d\xf3nde deber\xe1 cambiar los procesos empresariales para cumplir con los requisitos de AML.","specs":[{"text":"An\xe1lisis empresarial profesional con un experto en AML"},{"text":"Le enviaremos el informe completo de hacia d\xf3nde se transfirieron sus fondos, le indicaremos qu\xe9 riesgo tienen sus activos de quedar bloqueados y tambi\xe9n le ofreceremos nuestros comentarios."},{"text":"Ayudamos a completar todos los documentos e informes para presentarlos ante cualquier entidad/empresa de inspecci\xf3n (SAR, CTR, etc.)"},{"text":"Examinaremos si hay dinero \xabsucio\xbb en las billeteras de criptomonedas o las transacciones, y le enviaremos un informe completo con las explicaciones."},{"text":"Prepararemos a su empresa para ajustarse a las normativas del GAFI."}]}],"note":"Solo paga por los resultados. Si no podemos ayudarlo, se lo diremos de inmediato.","text":"La auditor\xeda Incrementa la confianza de sus socios en usted. Tambi\xe9n aumenta la fidelidad de los clientes y puede hacer que elijan m\xe1s r\xe1pidamente trabajar con usted.","title":"Programas de cumplimiento de AML"}},"feedback":{"thankYou":{"description":"Hemos recibido su solicitud y agradecemos su inter\xe9s en los servicios de AML Zapex.","info":{"description":"Mientras espera, no dude en explorar nuestro <a href=\\"https://blog.AML Zapex.com\\">blog</a> para conocer las \xfaltimas novedades y actualizaciones en el mundo del cumplimiento de la normativa sobre criptomonedas.","title":"Mantente informado"},"title":"Gracias por su consulta"},"title":"Realimentaci\xf3n"},"footer":{"copyright":"AML Zapex","info":{"links":{"AboutTheProject":"Sobre el proyecto","aboutUs":"Sobre nosotros","analysis":"An\xe1lisis","blog":"Blog","careers":"Empleos","certifications":"Certificaciones","pressKit":"Paquete publicitario","risks":"Riesgos","support":"Atenci\xf3n al cliente"},"title":"Compa\xf1\xeda"},"legal":{"links":{"privacyPolicy":"Pol\xedtica de privacidad","termsOfuse":"T\xe9rminos de uso","userAgreement":"Acuerdo de usuario"},"title":"Base normativa"},"products":{"links":{"AML Zapex":"AML Zapex","apiIntegration":"Integraci\xf3n con API","cryptopayment":"Pagos en criptomonedas","fatf":"Asesor\xeda en criptomonedas","investigation":"Investigaci\xf3n","kyc":"KYC automatizado"},"title":"Productos"},"socials":{"links":{"facebook":"Facebook","instagram":"Instagram","linkedIn":"LinkedIn","reddit":"Reddit","telegram":"Telegram","tikTok":"TikTok","youTube":"YouTube"},"title":"Redes sociales"}},"fortune":{"codeModal":{"clickToCopy":"Haz clic para copiar","copied":"Copiado","getPrize":"Obtener premio","note":"Copia tu c\xf3digo de bono \xfanico y haz clic en \\"Obtener premio\\" para compartirlo con nuestro gerente y reclamar tu recompensa","title":"Tu c\xf3digo de bonificaci\xf3n \xfanico para activar el premio","willRedirected":"Ser\xe1s redirigido al soporte en {{countdown}} segundos"},"end":{"contactUs":"Cont\xe1ctanos","title":"\xa1Gracias por tu inter\xe9s en participar en el AML Zapex’s Birthday Bonus Giveaway! Sin embargo, queremos informarte que el sorteo ya ha finalizado.","title2":"\xa1Pero no te preocupes, a\xfan tenemos un bono especial para ti!","title3":"Por favor, comun\xedcate con nuestro gerente para una oferta personalizada"},"hero":{"birthday":"<span>Cumplea\xf1os de</span> \uD83C\uDF89 <span>AML Zapex</span>","description":"\xa1Gira la rueda para ganar un <span>descuento exclusivo</span> o <span>AML-checks gratis!</span>","title":"\xa1\xdanete a la celebraci\xf3n <b>\uD83E\uDD73</b> y reclama tu premio por el cumplea\xf1os de AML Zapex!"},"wheel":{"getLucky":"\xa1Prueba tu suerte!","spinNow":"\xa1Gira ahora!"},"winModal":{"congratulations":"\xa1Felicidades!","discount":"Descuento","enterYourEmailLabel":"Introduce tu email para recibir un c\xf3digo de bonificaci\xf3n \xfanico y activar el premio:","enterYourEmailPlaceholder":"Introduce tu email","freeChecks":"Verificaciones gratuitas","getPromoCode":"Obtener c\xf3digo de bonificaci\xf3n","youHaveWon":"Has ganado"}},"header":{"announcement":{"final":"hoy","link":"Examine todo","main":"\xa1Actualizamos nuestras ofertas para empresas!"},"checkWallet":"Examinar una billetera","createAnAccount":"Crear una cuenta","links":{"aboutUs":"Sobre nosotros","analysis":"An\xe1lisis","blog":"Blog","faq":"FAQ","howDoesItWork":"\xbfC\xf3mo funciona?","price":"Precio","products":"Productos","risks":"Riesgos"},"logIn":"Iniciar sesi\xf3n","requestDemo":"Examen\xf3n","signIn":"Iniciar sesi\xf3n","signUp":"Registrarse","webCheck":"Mi cuenta"},"iSOCertified":{"buttonText":"Aprende m\xe1s","description":"Mejoramos continuamente nuestras medidas de seguridad para mantener la confianza y la seguridad. M\xe1s informaci\xf3n sobre nuestras certificaciones","title":"Certificaci\xf3n ISO"},"initiatives":{"moreInOurBlog":"M\xe1s informaci\xf3n en nuestro blog","title":"Nuestras iniciativas"},"investigations":{"consult":{"description":"Nos pondremos en contacto con usted dentro de las 24 horas con los pr\xf3ximos pasos y un resumen de su situaci\xf3n","title":"\xbfListo para continuar? Env\xede un formulario y nuestro equipo revisar\xe1 su caso"},"description":{"text":"El equipo de expertos <span>certificados</span> de AML Zapex proporciona un soporte <span>anal\xedtico</span> y <span>legal</span> integral en la recuperaci\xf3n de criptoactivos robados"},"disclaimer":{"description1":"AML Zapex no le llama ni se acerca a usted primero con una solicitud para ayudarle con el proceso de recuperaci\xf3n de fondos, porque cualquier tipo de llamada, correo electr\xf3nico o mensaje sin su consentimiento va en contra de las reglas de privacidad. Por lo general, nuestros clientes contactan primero a AML Zapex con los m\xe9todos proporcionados en nuestro sitio web.","description2":"Por favor, tenga en cuenta que para el correo electr\xf3nico o cualquier otro canal de comunicaci\xf3n (Telegram, WhatsApp), para prevenir el fraude en l\xednea y las estafas de criptomonedas, AML Zapex s\xf3lo utiliza correos electr\xf3nicos de dominio corporativo de <a href=\\"https://AML Zapex.com\\">https://AML Zapex.com</a> o canales de comunicaci\xf3n oficiales listados en el sitio web oficial. Es responsabilidad del usuario verificar la correcta ortograf\xeda del sitio web y comunicarse s\xf3lo con los canales oficiales de comunicaci\xf3n listados en el sitio web de AML Zapex.","description3":"nuestra empresa, Safelement Limited, emite todas las facturas. Para los pagos, AML Zapex acepta tanto pagos en cripto como en fiat por los servicios prestados. Los pagos en cripto se aceptan en los exchanges de criptomonedas con licencia. Para los pagos en fiat, utilizamos cuentas bancarias corporativas en los principales bancos de HK y la UE. Adem\xe1s, utilizamos servicios de pago con tarjeta de cr\xe9dito proporcionados por Stripe y conectados a las mismas cuentas bancarias.","hide":"Ocultar","learnMore":"Aprender m\xe1s","subtitle":"Atenci\xf3n a Estafas y Fraudes:","title":"Descargo de responsabilidad legal"},"expertise":{"description":"Conf\xede en nuestro experimentado equipo de investigadores y especialistas en recuperaci\xf3n de criptomonedas.","items":{"1":"Chainalysis Reactor Certification (CRC)","2":"Chainalysis KYT Certification (CKC)","3":"Cryptocurrency Fundamentals Certification (CCFC)","4":"Chainalysis Ethereum Investigations Certification (CEIC)","5":"ACAMS Fightning Moder Slavery And Human Trafficking","6":"<b>Miembros orgullosos</b><ul><li>Crypto Defence Alliance</li><li>ATHI</li></ul>"},"subtitle":"Poseemos certificaciones que incluyen:","title":"Nuestra experiencia"},"faq":{"items":[{"content":"AML Zapex puede investigar una variedad de criptomonedas, incluyendo pero no limitado a Bitcoin, Ethereum y otras altcoins populares.","title":"\xbfQu\xe9 tipos de criptomonedas puede investigar AML Zapex?"},{"content":"La duraci\xf3n de una investigaci\xf3n var\xeda dependiendo de la complejidad del caso. T\xedpicamente, proporcionamos una visi\xf3n general de alto nivel de su situaci\xf3n de forma gratuita dentro de las 24 horas. Luego, si tenemos toda la informaci\xf3n, le proporcionamos un informe de investigaci\xf3n dentro de las 72 horas. Sin embargo, el plazo total puede extenderse m\xe1s all\xe1 de esto, especialmente cuando tenemos que marcar las billeteras para seguir con la investigaci\xf3n.","title":"\xbfCu\xe1nto tiempo tarda una investigaci\xf3n de blockchain por parte de AML Zapex?"},{"content":"La duraci\xf3n del proceso de recuperaci\xf3n puede variar significativamente dependiendo de la complejidad del caso, los tiempos de respuesta de los intercambios y la aplicaci\xf3n de la ley, y otros factores. Es mejor prepararse para un proceso que podr\xeda llevar varios meses.","title":"\xbfCu\xe1nto tiempo suele durar todo el proceso de recuperaci\xf3n?"},{"content":"Si bien AML Zapex emplea t\xe9cnicas y herramientas avanzadas para maximizar las posibilidades de recuperaci\xf3n, no es posible garantizar un resultado exitoso en todos los casos debido a la naturaleza de las transacciones de blockchain y los diversos grados de cooperaci\xf3n de las terceras partes involucradas.","title":"\xbfHay alguna garant\xeda de que se recuperar\xe1 mi criptomoneda perdida?"},{"content":"El costo puede variar dependiendo de la complejidad del caso. Por favor, env\xede el informe de la v\xedctima o cont\xe1ctenos para obtener un presupuesto personalizado.","title":"\xbfCu\xe1l es el costo del servicio de recuperaci\xf3n?"},{"content":"Nuestra tarifa de servicio no es reembolsable ya que cubre el trabajo y los recursos invertidos por el equipo de AML Zapex en los esfuerzos de investigaci\xf3n y recuperaci\xf3n, independientemente del resultado. Tenga la seguridad de que estamos comprometidos a hacer todo lo posible para recuperar sus activos digitales.","title":"Si mis fondos no pueden ser recuperados, \xbfrecibir\xe9 un reembolso por la tarifa del servicio?"},{"content":"Es importante proporcionar tantos detalles como sea posible sobre la criptomoneda perdida o robada, incluyendo las direcciones de las billeteras asociadas, las TX de transacciones, la naturaleza de la p\xe9rdida (por ejemplo, estafa, robo) y cualquier registro de comunicaci\xf3n o transacci\xf3n relevante.","title":"\xbfQu\xe9 informaci\xf3n necesito proporcionar para el proceso de recuperaci\xf3n?"},{"content":"Debe presentar el informe policial seg\xfan su pa\xeds de residencia. AML Zapex proporciona orientaci\xf3n sobre c\xf3mo presentar adecuadamente un informe policial para su criptomoneda perdida o robada. Este informe y la subpena subsiguiente son necesarios para el proceso de recuperaci\xf3n.","title":"\xbfD\xf3nde presento un informe policial?"},{"content":"AML Zapex toma muy en serio la seguridad de su informaci\xf3n personal. Nos adherimos a pr\xe1cticas estrictas de privacidad de datos y utilizamos m\xe9todos seguros para proteger su informaci\xf3n en todas las etapas del proceso de recuperaci\xf3n.","title":"\xbfQu\xe9 tan segura est\xe1 mi informaci\xf3n personal durante este proceso?"},{"content":"AML Zapex proporciona educaci\xf3n y recursos para ayudarlo a asegurar sus activos digitales y evitar estafas y riesgos comunes en el espacio de criptomonedas. Esto incluye las mejores pr\xe1cticas para la seguridad de la billetera, reconocer posibles estafas y entender los riesgos y beneficios de diferentes tipos de transacciones e inversiones en criptomonedas.","title":"\xbfQu\xe9 puedo hacer para prevenir futuras p\xe9rdidas de criptomonedas?"}],"title":"Preguntas frecuentes"},"form":{"thankYou":{"description":"Hemos recibido su solicitud de asistencia para recuperar su criptomoneda perdida, pirateada o robada. Entendemos la urgencia y la sensibilidad de su situaci\xf3n y nos comprometemos a ayudarle en este dif\xedcil momento.","info":{"description1":"Nuestro equipo de expertos certificados en recuperaci\xf3n de criptomonedas revisar\xe1 los detalles que nos ha proporcionado. Nuestro objetivo es comprender todos los aspectos de su caso para ofrecerle la estrategia de recuperaci\xf3n m\xe1s eficaz.","description2":"Puede esperar recibir una respuesta de nosotros en un plazo de 24 horas con una evaluaci\xf3n inicial de su caso y los pr\xf3ximos pasos a seguir.","title":"\xbfQu\xe9 pasa ahora?"},"title":"Gracias por enviar su caso a AML Zapex"}},"main":{"description":"Descubra d\xf3nde est\xe1 su criptomoneda perdida con una investigaci\xf3n exhaustiva y una posible recuperaci\xf3n","leaveRequest":"Deje una solicitud","title":"Recuperaci\xf3n de Cripto y Investigaci\xf3n de Blockchain con AML Zapex"},"process":{"description":"Entienda los pasos que tomamos para analizar y potencialmente recuperar sus activos perdidos.","items":{"0":{"description":"Complete nuestro detallado formulario para v\xedctimas para proporcionarnos tanta informaci\xf3n como sea posible sobre su situaci\xf3n.","title":"Recolecci\xf3n de Informaci\xf3n:"},"1":{"description":"Puede presentar un informe policial usted mismo o seguir nuestras pautas para hacerlo de manera efectiva.","title":"Informe Policial:"},"2":{"description":"Si es necesario, podemos ofrecer la asistencia e informaci\xf3n necesaria para la investigaci\xf3n policial y la citaci\xf3n para devolver los activos.","title":"Soporte para la Investigaci\xf3n Policial:"},"3":{"description1":"Tomamos varios pasos en este proceso, incluyendo:","description2":"Lista negra de las carteras asociadas con los intercambios","description3":"Etiquetado de las carteras asociadas con proveedores de an\xe1lisis de blockchain","description4":"Marcado de carteras para rastreo si los fondos est\xe1n estacionados en carteras no identificadas","title":"Investigaci\xf3n de Blockchain:"},"4":{"description":"Generamos un informe integral basado en nuestra investigaci\xf3n de blockchain.","title":"Informe de Investigaci\xf3n:"},"5":{"description":"Si los fondos robados llegan a un exchange, nos comunicamos con ellos para solicitar un posible congelamiento de los activos robados.","title":"Comunicaci\xf3n con los exchanges:"}},"title":"Proceso de Recuperaci\xf3n de Criptoactivos"},"recovery":{"button":"Deje una solicitud","description":"Env\xede su caso ahora y nuestro equipo se pondr\xe1 en contacto con usted dentro de las 24 horas.","title":"\xbfListo para comenzar su proceso de recuperaci\xf3n de criptomonedas?"}},"kyc":{"check":{"items":{"addressVerification":{"description":"Verificamos la residencia utilizando un documento oficial, como una factura de servicios p\xfablicos o estados de cuenta bancarios, compar\xe1ndolo con la direcci\xf3n proporcionada por el cliente.","title":"Verificaci\xf3n de direcci\xf3n"},"amlCheck":{"description":"Seg\xfan lo requerido por la Ley de Prevenci\xf3n del Lavado de Dinero y la Financiaci\xf3n del Terrorismo, verificamos los fondos y su origen.","title":"Verificaci\xf3n AML"},"companyCheck":{"description":"<ul><li>Jurisdicci\xf3n de incorporaci\xf3n de la empresa y tipo de actividad</li><li>Si la empresa est\xe1 activa seg\xfan el Registro Corporativo</li><li>Direcci\xf3n registrada de la empresa</li><li>Personas autorizadas de la empresa y sus documentos de identificaci\xf3n</li><li>Beneficiarios de la empresa y sus documentos de identificaci\xf3n</li></ul>","title":"Verificaci\xf3n de empresa (KYB)"},"documentVerification":{"description":"Verificaci\xf3n de documentos en tiempo real. Comprobamos la autenticidad y validez del documento y verificamos los datos personales del usuario.","title":"Verificaci\xf3n de documentos"},"faceVerification":{"description":"Confirmaci\xf3n de identidad mediante reconocimiento facial. Confirmamos que las selfies del cliente coincidan con la foto en sus documentos.","title":"Verificaci\xf3n facial"},"ongoingMonitoring":{"description":"Ofrecemos un monitoreo continuo y la inclusi\xf3n de tus clientes en listas negras. Si alguien es agregado, realizaremos una verificaci\xf3n adicional del cliente y te notificaremos.","title":"Monitoreo continuo de KYC/AML"},"paymentMethod":{"description":"Verificamos el documento financiero, tarjeta de cr\xe9dito o transacci\xf3n para asegurarnos de que el pago haya sido realizado por el cliente verificado.","title":"M\xe9todo de pago"},"pepScreening":{"description":"Verificamos el estado de la persona pol\xedticamente expuesta, sanciones y listas de vigilancia para evitar trabajar con personas o empresas de alto riesgo.","title":"Evaluaci\xf3n de personas pol\xedticamente expuestas (PEP)"},"sourceOfFunds":{"description":"Verificamos el origen de los fondos y los documentos de respaldo, como facturas, contratos o n\xf3minas.","title":"Verificaci\xf3n de origen de fondos"},"taxVerification":{"description":"Recopilamos el n\xfamero de identificaci\xf3n fiscal del documento presentado y verificamos su validez.","title":"Verificaci\xf3n fiscal"},"viabilityCheck":{"description":"Verificaci\xf3n de documentos emitidos por instituciones financieras o un abogado que confirmen la confiabilidad del cliente.","title":"Verificaci\xf3n de viabilidad financiera"},"videoVerification":{"description":"Verificaci\xf3n de identidad a trav\xe9s de videollamada. Confirmamos que el cliente desea ser verificado y que los documentos proporcionados le pertenecen.","title":"Verificaci\xf3n por video"}},"title":"\xbfQu\xe9 verificamos?"},"contact":{"button":"Ponte en contacto con nosotros en Telegram","description":"Ofrecemos condiciones flexibles y un enfoque individual. Cont\xe1ctanos y encontraremos la mejor opci\xf3n dise\xf1ada para adaptarse a las necesidades de tu negocio.","title":"Cont\xe1ctanos para discutir los t\xe9rminos y condiciones"},"info":{"items":[{"button":"M\xe1s informaci\xf3n","description1":"Asegura tu negocio con un flujo de verificaci\xf3n que se adapta a los requisitos de tu regulador. Verifica direcciones, m\xe9todos de pago, realiza verificaciones faciales y de documentos personales, prueba de fondos y m\xe1s para garantizar que tu negocio cumpla con todas las normativas.","description2":"Verifica la credibilidad de cada usuario para protegerte de actividades il\xedcitas que puedan tener consecuencias negativas para tu negocio.","title":"\xbfQu\xe9 ofrecemos?"},{"button":"M\xe1s informaci\xf3n","description1":"Nuestro servicio es muy f\xe1cil de configurar, lo que te permite comenzar a verificar a tus usuarios de inmediato.","description2":"El KYC es a menudo un requisito para obtener licencias, permisos y manejar finanzas. Ofrecemos una forma conveniente para que los administradores y usuarios cumplan con esta obligaci\xf3n.","title":"\xbfPor qu\xe9 es necesario?"},{"button":"Consultar la documentaci\xf3n","description":"Cuando se trata de la integraci\xf3n, nos encargamos del trabajo por ti. De esta manera, tus desarrolladores pueden concentrarse en construir, no en integrar el cumplimiento normativo.","title":"Asistencia"}],"title":"El KYC de AML Zapex es una forma r\xe1pida y f\xe1cil de verificar la identidad de su cliente"},"main":{"badge":"F\xe1cil de configurar","button":"Reserva una demostraci\xf3n gratuita","description":"Verifica a m\xe1s usuarios con un proceso de verificaci\xf3n r\xe1pido, seguro, automatizado y eficiente que reduce significativamente la carga de trabajo manual.","title":"Verifica a los usuarios con KYC automatizado"},"why":{"items":[{"button":"Ver documentaci\xf3n","description":"Est\xe1ndares de seguridad l\xedderes en la industria, respaldados por la certificaci\xf3n ISO y auditor\xedas de seguridad regulares.","title":"Seguridad"},{"button":"Ver documentaci\xf3n","description":"Certificados por el Instituto Europeo de Gesti\xf3n y Finanzas.","title":"Certificaci\xf3n"},{"button":"Contacta con nosotros a trav\xe9s de Telegram","description":"Podemos verificar m\xe1s de 4,000 tipos de documentos de 240 pa\xedses diferentes. Comienza a incorporar clientes de cualquier parte del mundo.","title":"Interoperabilidad entre pa\xedses"},{"button":"Contact","title":"Acelera el servicio al cliente, reduce riesgos y simplifica los procesos de tu negocio"}],"title":"\xbfPor qu\xe9 elegirnos?"}},"kycHelp":{"title":"Centro de asistencia"},"main":{"doing":{"items":[{"button":"Ejemplo de informe en PDF","description":"Examinamos billeteras y transacciones de criptomonedas para identificar el origen de los fondos y proporcionarle un informe detallado. As\xed, puede determinar la puntuaci\xf3n de riesgo de cualquier billetera para evitar problemas con las autoridades regulatorias y protegerse de fondos il\xedcitos.","title":"\xbfQu\xe9 ofrecemos?"},{"description1":"Si recibe fondos li\xedcitos, se arriesga a que congelen su dinero.","description2":"Al revisar el estado de AML de su billetera, puede determinar su puntuaci\xf3n de riesgo y relajarse.","description3":"Le recomendamos hacer revisiones para confiar en sus activos.","title":"\xbfPor qu\xe9 es necesario?"},{"button":"Hacer revisi\xf3n por Telegram","title":"Primera revisi\xf3n gratuita"}]},"faq":{"info":{"answer":"Le respondemos en 30 segundos","description":"Cont\xe1ctenos por Telegram. Estamos disponibles 24/7 con el fin de garantizar una experiencia sin inconvenientes para todos.","inTelegram":"Estamos en Telegram","note":"Estamos disponibles <b>24/7</b>. Sin embargo, no siempre podemos responder tan r\xe1pido por la noche","title":"\xbfNo econtr\xf3 su pregunta en la lista?"},"items":[{"content":"El resultado b\xe1sico de la verificaci\xf3n de AML Zapex incluye el porcentaje de puntuaci\xf3n de riesgo, las fuentes de riesgo y la pertenencia a la lista negra. <br /><br />Adem\xe1s, el resultado de la verificaci\xf3n puede incluir varios datos opcionales sobre la direcci\xf3n, como la pertenencia al cl\xfaster, el saldo real y el monto de los fondos transferidos. <br /><br />El resultado de la verificaci\xf3n puede estar incompleto en relaci\xf3n con los datos descritos si falta la informaci\xf3n necesaria.<br /><br /> Tenga en cuenta que para las blockchains que est\xe1n en el modo limitado, la agrupaci\xf3n y el valor porcentual de la puntuaci\xf3n de riesgo de la comprobaci\xf3n no est\xe1n disponibles. S\xf3lo se puede proporcionar una puntuaci\xf3n de riesgo para una contraparte si se refiere a una entidad.","title":"\xbfQu\xe9 muestra la comprobaci\xf3n de AML Zapex?"},{"content":"La puntuaci\xf3n de riesgo general (porcentaje) es la probabilidad de que la direcci\xf3n est\xe9 asociada a una actividad ilegal. <br /><br />AML Zapex encuentra las conexiones de una direcci\xf3n comprobada con otras direcciones de la cadena de bloques y con entidades de diferentes categor\xedas, cada una con una puntuaci\xf3n de riesgo condicional diferente, y calcula la puntuaci\xf3n de riesgo general en funci\xf3n de esas conexiones. <br /><br />El c\xe1lculo de la puntuaci\xf3n de riesgo general tiene en cuenta la gravedad del riesgo de las conexiones encontradas. Por ejemplo, en el caso de las conexiones a las categor\xedas de entidades Miner\xeda (0% de riesgo) y Darknet (100% de riesgo), el impacto en el riesgo de Darknet, al ser una categor\xeda m\xe1s riesgosa, ser\xe1 mayor y la miner\xeda tendr\xe1 menos peso en la evaluaci\xf3n del riesgo.","title":"\xbfQu\xe9 significa la puntuaci\xf3n porcentual de riesgo?"},{"content":"AML Zapex comprueba la direcci\xf3n de la cartera especificada en busca de conexiones a servicios conocidos de blockchain - entidades. AML Zapex convencionalmente agrupa estos servicios en grupos con diferentes niveles de riesgo de actividad ilegal - categor\xedas de entidades.<br /><br /> La comprobaci\xf3n AML muestra las conexiones de la direcci\xf3n comprobada con estas categor\xedas de entidades como fuentes de riesgo, con las que la direcci\xf3n interactu\xf3, y el porcentaje de fondos transferidos desde/a estos servicios.<br /><br /> Bas\xe1ndose en todas las fuentes de riesgo, se calcula una puntuaci\xf3n de riesgo global, que ayuda al usuario a tomar otras decisiones sobre los activos.","title":"\xbfQu\xe9 significan las fuentes de riesgo?"},{"content":"Una comprobaci\xf3n de direcciones es un an\xe1lisis de todas sus conexiones con otras direcciones y entidades en blockchains, teniendo en cuenta el movimiento de fondos entrantes y salientes.<br /><br /> Un proceso de comprobaci\xf3n de transacciones difiere de la comprobaci\xf3n de direcciones, y el resultado depende de su parte en la transacci\xf3n. La puntuaci\xf3n global del riesgo siempre est\xe1 relacionada con la contraparte.<br /><br /> Para comprobar una transacci\xf3n, debe especificar el TxID y la direcci\xf3n de destino de la transacci\xf3n y seleccionar su lado en la transacci\xf3n:<br /> - Destinatario (recibi\xf3 un dep\xf3sito en su monedero) - se comprueban las direcciones desde las que se recibieron los fondos. Las fuentes de riesgo describen los servicios desde los que los remitentes TX acumularon los fondos transferidos con un desglose porcentual.<br /> - Remitente (retir\xf3 fondos de su monedero): se comprueba el monedero que recibi\xf3 los fondos. Las fuentes de riesgo describen todas las conexiones de la direcci\xf3n del destinatario con un desglose porcentual.<br /><br /> As\xed, al comprobar una transacci\xf3n, se comprueban los riesgos para el destinatario si usted recibe fondos, y los riesgos para el remitente si usted env\xeda fondos.","title":"\xbfCu\xe1l es la diferencia entre una direcci\xf3n y los cheques de transacci\xf3n?"},{"content":"Cada cliente determina por s\xed mismo qu\xe9 porcentaje de riesgo es aceptable para \xe9l. Convencionalmente, la puntuaci\xf3n de riesgo se puede dividir de la siguiente manera:\\n<br />\\n - El 0-25% es una billetera/transacci\xf3n limpia;\\n<br />\\n - 25-75% es el nivel promedio de riesgo;\\n<br />\\n - M\xe1s del 75% de este tipo de billetera/transacci\xf3n se considera riesgosa.\\n<br />\\nTambi\xe9n vale la pena prestar atenci\xf3n a las fuentes rojas de riesgo en el an\xe1lisis detallado que se describe en la <a href=\\"https://AML Zapex.com/what-do-we-analyze\\"> p\xe1gina\\n</a>","title":"\xbfC\xf3mo entiendo la evaluaci\xf3n de riesgos?"},{"content":"AML Zapex admite todas las principales cadenas de bloques y tokens en ellas. A\xf1adimos constantemente soporte para criptomonedas adicionales. Siempre puedes consultar la lista actualizada de criptomonedas compatibles en\\n<a href=\\"http://web.AML Zapex.com\\" target=\\"_blank\\">\\npanel web\\n</a>\\n o en\\n<a href=\\"https://docs.AML Zapex.com/\\" target=\\"_blank\\">\\nDocumentaci\xf3n de la API\\n</a>\\n.","title":"\xbfQu\xe9 criptomonedas analiza AML Zapex?"},{"content":"Al comprobar las carteras de las contrapartes antes de una transacci\xf3n, puede rechazar sus activos si la puntuaci\xf3n de riesgo es alta. Adem\xe1s, antes de transferir fondos a otros servicios, puedes comprobar la direcci\xf3n de tu cartera y guardar el resultado (haz una captura de pantalla). <br /><br />Si la comprobaci\xf3n demuestra que sus activos no ten\xedan relaci\xf3n con actividades ilegales y que el servicio lo bloque\xf3, puede proporcionar el resultado guardado para confirmar la pureza de sus activos.","title":"\xbfC\xf3mo ayuda AML Zapex a protegerlo contra el bloqueo?"},{"content":"Los resultados de la verificaci\xf3n se basan en bases de datos internacionales, que se actualizan constantemente. Por lo tanto, una direcci\xf3n que ayer ten\xeda un riesgo del 0% puede haber recibido o cedido el activo a una contraparte riesgosa hoy. En este caso, la puntuaci\xf3n de riesgo cambiar\xe1. Si quiere estar seguro del resultado y determinar cu\xe1l es la causa del alto riesgo, podemos realizar una verificaci\xf3n detallada por usted. Para hacerlo, env\xedenos un correo electr\xf3nico a <a href=\\"mailto:info@AML Zapex.com\\">\\ninfo@AML Zapex.com </a>","title":"El riesgo es superior al 50%, pero estoy seguro de que la direcci\xf3n es fiable. \xbfQu\xe9 hacer?"},{"content":"La respuesta a esto depende de su modelo de riesgo \xfanico. La recomendaci\xf3n general ser\xeda realizar una verificaci\xf3n de AML cada vez que interact\xfaes con una cartera desconocida o un contrato inteligente.","title":"\xbfCon qu\xe9 frecuencia se recomienda realizar las comprobaciones?"},{"content":"Tras la confirmaci\xf3n de la transacci\xf3n, el saldo se repone: <br /> • hasta 10 minutos si el pago se realiz\xf3 dentro de las 24 horas posteriores a la emisi\xf3n de la factura, <br /> • hasta 25 minutos si el pago se realiz\xf3 24 horas despu\xe9s de la emisi\xf3n de la factura. En general, el BTC, el ETH, el USDT y el fiat se procesan m\xe1s r\xe1pido que otras monedas.","title":"\xbfQu\xe9 tan r\xe1pido se repone el saldo?"},{"content":"Si ha adquirido cheques sin fecha de caducidad, permanecer\xe1n en su cuenta y podr\xe1 utilizarlos en cualquier momento.<br /><br /> Si compr\xf3 cheques con fecha de caducidad - se deducir\xe1n de su cuenta despu\xe9s de la fecha de caducidad.","title":"\xbfQu\xe9 sucede si no uso todos mis cheques cada mes?"},{"content":"Puede comprar cheques adicionales seg\xfan sea necesario. La cantidad de cheques siempre se muestra en su informaci\xf3n de usuario.","title":"\xbfQu\xe9 pasa si voy a necesitar m\xe1s cheques?"},{"content":"AML Zapex protege los datos adhiri\xe9ndose a est\xe1ndares rigurosos, como lo validan nuestras certificaciones ISO 9001 e ISO 27001.<br /><br />\\nNuestra certificaci\xf3n ISO 9001 destaca nuestro compromiso de brindar una calidad constante y mejorar la satisfacci\xf3n del cliente. M\xe1s importante a\xfan, nuestra certificaci\xf3n ISO 27001 demuestra nuestra dedicaci\xf3n a mantener altos est\xe1ndares de seguridad de la informaci\xf3n, garantizar la protecci\xf3n de datos confidenciales y lograr el cumplimiento normativo.<br /><br />\\nM\xe1s informaci\xf3n sobre nuestras certificaciones <a href=\\"https://AML Zapex.com/es/certifications\\">aqu\xed</a>.","title":"\xbfC\xf3mo garantiza AML Zapex la protecci\xf3n de datos?"}],"title":"Preguntas frecuentes"},"howMatch":{"button":"Cont\xe1ctenos","label":"La primera revisi\xf3n es gratis","note":"Seg\xfan nuestras estad\xedsticas, <b>una de cada cuatro billeteras es sospechosa.</b><br /> Gastando unos pocos d\xf3lares en una revisi\xf3n, puede evitar perder una gran suma.","perCheck":"por cheque","startsFrom":"Desde","title":"\xbfCu\xe1nto cuesta su tranquilidad?"},"officers":{"items":{"[0]":{"label":"Confundador","name":"Slava Demchuk"},"[1]":{"label":"Director ejecutivo","name":"Vasily Vidmanov"},"[2]":{"label":"Director comercial","name":"Andrew Aleksandrov"},"[3]":{"label":"Analista blockchain","name":"Sid Panda"},"[4]":{"label":"Abogado/Especialista certificado en AML","name":"Niko Demchuk"},"[5]":{"label":"Asesora legal","name":"Ganna Voievodina"},"[6]":{"label":"Gerente de Desarrollo Comercial","name":"Vlad Raskosov"},"[7]":{"label":"Gerente de Desarrollo Comercial","name":"Denys Shestak"},"[8]":{"label":"Gerente de Atenci\xf3n al cliente","name":"Nikita Raskosov"},"anmolJain":{"label":"VP","name":"Anmol Jain"},"graemeHampton":{"label":"Certified AML Specialist","name":"Graeme Hampton"},"nikoDemchuk":{"label":"Especialista certificado en AML","name":"Niko Demchuk"},"sidPanda":{"label":"Analista blockchain","name":"Sid Panda"},"slavaDemchuk":{"label":"Confundador","name":"Slava Demchuk"}},"text":"Los especialistas en AML ayudan a resolver situaciones dif\xedciles y le evitan multas y bloqueos. De ser necesario, expertos profesionales representar\xe1n sus intereses ante los tribunales.","title":"Nuestro equipo"},"partners":{"title":"Conf\xedan en nosotros"},"prime":{"AML ZapexOnWeb":"Cuenta personal","button":"Empezar la revisi\xf3n","checkInTelegram":"Examinar una billetera","description":"La plataforma AML Zapex automatiza los procedimientos de AML/KYC y reduce los gastos de cumplimiento","primaryButton":"Solicitar demostraci\xf3n","secondaryButton":"Bot de chat","telegramCheck":"Revisi\xf3n por Telegram","title":"Soluci\xf3n integral de cumplimiento para empresas de criptomonedas"},"reviews":{"description":"Explore nuestro servicio con personas a las que ya hemos ayudado.","items":[{"note":"Den • <a href=\\"https://csgo500.com\\">CSGO500","quote":"Hemos estado utilizando AML Zapex durante casi dos a\xf1os, y gracias a ellos hemos identificado y detenido con \xe9xito cientos de amenazas. Sin duda, seguiremos utilizando sus servicios."},{"note":"CEO • <a href=\\"https://uniochange.com\\">Uniochange</a>","quote":"La comunidad cripto ten\xeda dificultades para identificar las fuentes de fondos sospechosos, pero con la llegada de AML Zapex, todas las dificultades desaparecieron. Aconsejo a todo el mundo que utilice este servicio hasta lograr que su actividad sea completamente legal."},{"note":"<a href=\\"https://alltrust.me\\">AllTrust</a>","quote":"Estamos muy satisfechos con AML Zapex. Gracias a la integraci\xf3n en nuestra plataforma, hemos conseguido evitar un gran n\xfamero de transacciones ligadas a fondos il\xedcitos. Estamos seguros de que seguiremos mejorando nuestra colaboraci\xf3n."},{"note":"<a href=\\"https://guarda.com\\">Guarda</a>","quote":"AML Zapex ha sido un gran socio para nosotros durante mucho tiempo. Es incre\xedblemente f\xe1cil de usar, confiable y, lo que es m\xe1s importante, les brinda una mayor tranquilidad a nuestros usuarios. En Guarda, esperamos seguir trabajando juntos."}],"title":"Lo que nuestros clientes dicen de nosotros"},"services":{"description":"Proporcionamos un paquete completo de opciones para trabajar de manera segura con criptomonedas","items":[{"description":"Soluciones API que potencian las herramientas de cumplimiento normativo de AML dentro de su sistema actual. Todas las transacciones se verifican autom\xe1ticamente para acatar los requisitos de AML y del GAFI, con lo que se reduce la exposici\xf3n al riesgo de su empresa.","title":"Examen de AML/KYT"},{"description":"El proceso de verificaci\xf3n automatizado y optimizado le permite a su empresa incorporar r\xe1pidamente a los clientes y, por ende, reducir el esfuerzo manual adem\xe1s de mitigar los riesgos de fraude de identidad y actividades il\xedcitas.","title":"KYC empresarial"},{"description":"Inicie su emprendimiento cripto con facilidad, simplicidad y confianza utilizando nuestra asesor\xeda optimizada en AML y KYC, que garantiza un servicio de cumplimiento normativo \xe1gil y una gesti\xf3n de riesgos efectiva desde el principio.","title":"Procedimientos AML/KYC"},{"description":"Agilice la apertura de cuentas corporativas en CEX/EMI con nuestra asistencia experta, y conc\xe9ntrese en el crecimiento empresarial en el sector cripto.","title":"Cuentas corporativas en CEX/EMI"},{"description":"Recupere criptomonedas robadas con las investigaciones expertas en blockchain de AML Zapex, con las que identificar\xe1 r\xe1pidamente a los culpables y rastrear\xe1 los fondos para una recuperaci\xf3n efectiva.","title":"Investigaciones de blockchain"}],"learnMore":"M\xe1s informaci\xf3n","title":"Servicios de AML Zapex"},"stats":{"items":[{"description":"Monto de los fondos riesgosos detectados","title":"+ $100 millones"},{"description":"Departamentos de cumplimiento que aceptan nuestros procedimientos AML","title":"M\xe1s de 6.500.000"},{"description":"Proveedores de servicios verificados","title":"+60.000"}]},"whatElse":{"items":[{"button":"Examinar una direcci\xf3n","description":"Le indicamos si una direcci\xf3n aparece en una lista de direcciones sancionadas. Bloquee a las entidades sancionadas y proteja a su empresa de multas o de revocaciones de la licencia.","title":"Protecci\xf3n contra billeteras sancionadas"},{"button":"Consulta gratuita","description":"Nuestro equipo de expertos rastrear\xe1 la ruta de sus fondos robados y har\xe1 todo lo que est\xe9 a su alcance para ayudarlo a recuperarlos.","note":"Solo paga por los resultados. Si no podemos ayudarlo, se lo diremos de inmediato.","title":"Lo ayudamos a recuperar las criptomonedas robadas"},{"button":"Ver documentaci\xf3n","description1":"Examine autom\xe1ticamente todas las transacciones entrantes y reduzca en gran medida la carga de trabajo necesaria. ","description2":"Nuestros desarrolladores estar\xe1n encantados de ayudarlo a integrar nuestra API en su servicio sin inconvenientes.","title":"Integraci\xf3n con API"}],"title":"\xbfQu\xe9 m\xe1s?"},"why":{"items":[{"buttonText":"Hablemos","description":"Los datos personales se procesan y se almacenan de acuerdo con el RGDP (Reglamento General de Protecci\xf3n de Datos).","description1":"AML Zapex ofrece una amplia gama de soluciones de cumplimiento normativo personalizadas para cada cliente.","description2":"<b>Habiendo ayudado a m\xe1s de 300 empresas cripto</b> de todos los tama\xf1os en 25 jurisdicciones, confiamos en que podremos satisfacer sus demandas.","title":"Enfoque personalizado"},{"description":"Estamos certificados por el European Institute of Management and Finance.","description1":"Ofrecemos servicios de KYT/revisi\xf3n de billeteras, KYC, AML y m\xe1s para empresas cripto.","description2":"La puntuaci\xf3n de riesgo de AML Zapex se basa en m\xfaltiples fuentes de datos, lo que garantiza que contamos con los datos m\xe1s confiables de la industria.","description3":"Nuestros servicios y soluciones f\xe1ciles de usar simplifican los procesos de su empresa y eliminan la complejidad que implica un proveedor de cumplimiento normativo.","title":"Plataforma de cumplimiento normativo integrada"},{"buttonText":"Contacto","description":"En AML Zapex, brindar un servicio de asistencia r\xe1pido y agradable es muy importante. Por eso, siempre estamos para lo que nuestros clientes necesiten. Ofrecemos asistencia 24/7.","description1":"Estamos en contacto 24/7, por lo que podemos resolver r\xe1pidamente cualquier problema a trav\xe9s del chat en vivo.","description2":"Como seres humanos, es posible que no respondamos con la misma rapidez por la noche que durante el d\xeda ✌️","note":"Por la noche, las respuestas pueden tardar un poco m\xe1s.","title":"Atenci\xf3n al Cliente"},{"description":"Impedimos que se bloquearan alrededor de {{value}} en los exchanges.","title":"Experiencia"}],"title":"\xbfPor qu\xe9 AML Zapex?"},"works":{"description":"Aqu\xed esta el v\xeddeo","title":"\xbfC\xf3mo funciona?"},"yearStats":{"label":"En tres a\xf1os, AML Zapex ha sido utilizado por","text":"empresas"}},"menuProducts":{"AML ZapexPro":{"description":"Rastreo del origen y destino de las transacciones","label":"AML Zapex Pro"},"amlTraining":{"description":"Programas de formaci\xf3n especializados para el sector de las criptomonedas","label":"Formaci\xf3n AML"},"chatBot":{"description":"Controles AML instant\xe1neos, la forma m\xe1s f\xe1cil de probar nuestros productos","label":"Bot de chat AML"},"consulting":{"description":"Ayudamos a las empresas de criptomonedas con procedimientos AML, capacitaci\xf3n y configuraci\xf3n de cuentas bancarias","label":"Consultor\xeda"},"dynamic":{"description":"Utilice nuestras direcciones intermediarias para evitar riesgos","label":"Direcciones din\xe1micas para comerciantes"},"forBusiness":"Para empresas","forPersonalUse":"Para uso personal","investigation":{"description":"Asistencia con la recuperaci\xf3n de criptomonedas robadas","label":"Investigaci\xf3n"},"kyc":{"description":"Verifique a m\xe1s usuarios con una verificaci\xf3n r\xe1pida, segura, automatizada y eficiente","label":"KYC"},"kyt":{"description":"Control autom\xe1tico de todas las transacciones y billeteras a trav\xe9s de la API","label":"KYT"},"mobileApp":{"description":"Controles AML en una aplicaci\xf3n m\xf3vil f\xe1cil de usar","label":"Aplicaci\xf3n movil"}},"notFindQuestion":{"answer":"Responderemos en 30 segundos","description":"Cont\xe1ctenos a trav\xe9s de Messenger. Estamos en contacto <b>24/7</b>, por lo que podemos resolver r\xe1pidamente cualquier problema a trav\xe9s del chat en vivo.","inTelegram":"Estamos en Telegram","note":"Es posible que tardemos un poco m\xe1s en responder por la noche.","onMessenger":"Estamos en Messenger","title":"\xbfSu pregunta no est\xe1 en la lista?"},"partners":{"title":"Nuestros m\xe1s de 300 clientes y socios"},"pro":{"experience":{"items":{"consistent":{"description":"Aseg\xfarate de que tu organizaci\xf3n cumpla con las regulaciones de criptomonedas para tu jurisdicci\xf3n con informaci\xf3n detallada sobre la actividad en cadena. Conf\xeda en la detecci\xf3n en tiempo real para poner un marcador en cuentas o transacciones sospechosas.","title":"Cumplimiento constante"},"efficient":{"description":"<span>Descubre. Investiga. Toma medidas.</span> Nuestras herramientas de investigaci\xf3n te ayudan a identificar el origen y el destino de las transacciones de criptomonedas. Utiliza nuestra tecnolog\xeda de vanguardia para frenar la actividad delictiva y realizar investigaciones de manera m\xe1s r\xe1pida y precisa.","title":"Investigaciones eficientes"}},"title":"Experimenta la informaci\xf3n de blockchain de la m\xe1s alta calidad: los mejores datos a un precio asequible"},"faq":{"info":{"answer":"Respondemos en 30 segundos","description":"Obtenga asistencia r\xe1pida y eficiente las 24 horas del d\xeda, los 7 d\xedas de la semana. P\xf3ngase en contacto con nosotros en Telegram para cualquier pregunta o asistencia. Sin bots, solo soporte humano.","inTelegram":"Estamos en Telegram","note":"La respuesta durante la noche puede tardar un poco m\xe1s.","title":"\xbfTu pregunta no est\xe1 en la lista?"},"title":"Preguntas frecuentes"},"features":{"items":[{"description":"AML Zapex Pro funciona con los mejores datos disponibles. Analizamos billeteras y transacciones para encontrar v\xednculos con fondos criptogr\xe1ficos il\xedcitos utilizados en actividades delictivas o cuestionables, incluidos los mercados de Darknet, estafas, ransomware y mezcladores.","title":"Accesibilidad de datos excepcional"},{"description":"AML Zapex Pro transforma la complejidad del an\xe1lisis de blockchain en simplicidad.","title":"Opciones de b\xfasqueda sencillas"},{"description":"AML Zapex Pro conecta transacciones de criptomonedas con entidades del mundo real.","title":"Conecta transacciones virtuales con entidades del mundo real"},{"description":"La interfaz simple de AML Zapex Pro es f\xe1cil de usar para cualquier persona. Nuestro proceso optimizado te permite rastrear fondos y marcar cuentas y transacciones de alto riesgo.","title":"Mayor accesibilidad"},{"description":"Obt\xe9n resultados m\xe1s r\xe1pidos con AML Zapex Pro, que sigue fondos a trav\xe9s de blockchains. Identifica direcciones de entrada y salida y actividad de intercambio para detectar acciones ocultas.","title":"Limpia caminos criptogr\xe1ficos"},{"description":"Con AML Zapex Pro, puedes establecer una narrativa s\xf3lida que muestre el movimiento de fondos criptogr\xe1ficos. Exporta y visualiza datos para crear una imagen completa de la actividad delictiva.","title":"Casos m\xe1s convincentes"}],"title":"Caracter\xedsticas de AML Zapex Pro"},"hero":{"button":"Obt\xe9n AML Zapex Pro","description":"AML Zapex Pro es una herramienta de an\xe1lisis de blockchain que brinda a los investigadores y equipos de cumplimiento los mejores datos de la industria.","info":{"compliance":{"description":"Optimiza tus procesos de KYT y AML para mantener el cumplimiento.","title":"Cumplimiento"},"investigations":{"description":"Resuelve casos r\xe1pidamente con un rastreo eficiente en cadena. Pon fin a los delitos de criptomonedas","title":"Investigaciones"}},"title":"Desenrede la red de delitos en cadena"},"secure":{"buttonText":"Obt\xe9n AML Zapex Pro","title":"Proteja sus criptomonedas con la detecci\xf3n de riesgos de carteras y transacciones"},"sets":{"buttonText":"Obt\xe9n AML Zapex Pro","items":[{"list":["Proyectos criptogr\xe1ficos leg\xedtimos","Sanciones y listas de vigilancia","Ransomware conocido","Terroristas y grupos de Lavado de dinero"],"title":"Datos esclarecedores"},{"list":["Datos claros","C\xf3moda experiencia de usuario","Inicio sencillo"],"title":"Facilidad de uso"},{"list":["Evaluaci\xf3n de riesgos","Detecci\xf3n de actividad delictiva","Fomento de la colaboraci\xf3n"],"title":"Seguridad y protecci\xf3n"}],"title":"\xbfQu\xe9 distingue<br /> a AML Zapex Pro?"},"superior":{"items":{"analyzeRisk":{"description":"Compara las cuentas con listas de vigilancia cr\xedticas, incluida la OFAC.","title":"Analiza el riesgo"},"continuousTracking":{"description":"Monitorea el movimiento de fondos en tiempo real.","title":"Seguimiento continuo"},"gatherEvidence":{"description":"Usa nuestros datos patentados para fortalecer tu caso de investigaci\xf3n.","title":"Re\xfane evidencia"},"reliableData":{"description":"Accede a la informaci\xf3n de entidades con varios niveles de riesgo.","title":"Datos confiables"},"try":{"buttonText":"\xa1Act\xedvala ahora!","title":"Desbloquea todo el potencial de nuestra soluci\xf3n"},"userFriendlyDashboard":{"description":"Navega y visualiza f\xe1cilmente los datos cruciales.","title":"Panel de control f\xe1cil de usar"}},"title":"Dise\xf1o y funcionalidad superiores"}},"saleBanner":{"text1":"Disfrute de un 15% de descuento en todos los planes","text2":"Hasta el 30 de diciembre de 2023"},"seo":{"cryptoChecker":{"description":"Herramienta AML para empresas cripto y usuarios finales. Detecta con AML Zapex c\xf3mo Bitcoin y altcoins est\xe1n vinculados a actividades il\xedcitas y protege tus monederos con un an\xe1lisis avanzado de riesgos.","title":"Soluci\xf3n Completa para la Verificaci\xf3n y Protecci\xf3n de Criptomonedas | AML Zapex"},"cryptoCheckerLand":{"description":"AML Zapex proporciona una herramienta avanzada de detecci\xf3n AML para empresas de criptomonedas y usuarios finales. Descubra c\xf3mo Bitcoin y las altcoins est\xe1n conectadas con actividades il\xedcitas y asegure sus carteras con nuestro bot verificador de criptomonedas.","title":"AML Zapex - Soluci\xf3n integral de cumplimiento de criptograf\xeda | Comprobaci\xf3n criptogr\xe1fica AML gratuita"},"cryptoComplianceConsulting":{"description":"Consultor\xeda Experta en AML para Empresas Cripto: Procedimientos KYC/AML, Monitoreo de Transacciones y Asesor\xeda Integral en Cumplimiento","title":"Servicios de Consultor\xeda de Anti-Lavado de Dinero"},"home":{"description":"AML Zapex ofrece soluciones avanzadas de cumplimiento AML para negocios de criptomonedas. Utiliza nuestro bot AML para verificaciones exhaustivas y asegura el cumplimiento de las \xfaltimas regulaciones. Protege tus activos con la plataforma integral de AML Zapex (Lucha contra el blanqueo de capitales).","title":"AML Zapex - Soluciones Integrales de Cumplimiento AML para Criptomonedas (Lucha contra el blanqueo de capitales)"},"kyc":{"description":"Plataforma R\xe1pida y Segura de Verificaci\xf3n KYC que Ofrece Soluciones Automatizadas para KYC, AML, Identificaci\xf3n y Verificaci\xf3n Fiscal. Facilita la Incorporaci\xf3n de Clientes a Nivel Global.","title":"Proveedor de Servicios KYC/AML para la Conformidad Empresarial | Verificaci\xf3n KYC Automatizada"},"kyt":{"description":"Automatiza la evaluaci\xf3n de riesgos para transacciones cripto entrantes con el API AML de AML Zapex. Garantiza el cumplimiento de los requisitos KYC y AML con nuestras soluciones completas para la lucha contra el blanqueo de capitales.","title":"API para la Supervisi\xf3n y Cumplimiento AML en Transacciones de Criptomonedas | AML Zapex"},"pro":{"description":"AML Zapex Pro facilita la investigaci\xf3n de transacciones, la puntuaci\xf3n de riesgos y el cumplimiento de normativas en criptomonedas.","title":"An\xe1lisis avanzado de blockchain con AML Zapex Pro para equipos de cumplimiento"},"reclaimCrypto":{"description":"Nuestro equipo se especializa en recuperar criptomonedas robadas mediante investigaciones exhaustivas y recuperaci\xf3n de activos, incluyendo el bloqueo en intercambios y monederos.","title":"Recuperaci\xf3n de Criptomonedas Robadas | Servicios de Recuperaci\xf3n y Protecci\xf3n | AML Zapex"},"training":{"description":"Capacitaci\xf3n experta en AML para la industria cripto. Obt\xe9n tu certificaci\xf3n y protege tu negocio de riesgos financieros y regulatorios con los cursos integrales de AML Zapex.","title":"Formaci\xf3n y Certificaci\xf3n AML para Negocios de Criptomonedas | Curso de Lucha contra el Blanqueo de Capitales"}},"training":{"benefits":{"description":"Mejore su negocio criptogr\xe1fico con la formaci\xf3n AML Zapex:","items":{"1":{"title":"Aumentar la eficacia operativa"},"2":{"title":"Fortalecer la reputaci\xf3n"},"3":{"title":"Adel\xe1ntese a los riesgos normativos"}},"title":"Beneficios de la formaci\xf3n"},"consult":{"description":"Rellene el formulario para solicitar la inscripci\xf3n","formTitle":"Reg\xedstrese ahora - \xa1M\xe1ster en AML y Blockchain Analytics!","title":"\xbfListo para empezar?"},"courses":{"buttonText":"Inscr\xedbete ahora","item1":{"title":"Formaci\xf3n en directo con un especialista"},"item2":{"title":"Certificado digital de finalizaci\xf3n"},"item3":{"title":"Casos pr\xe1cticos y debates"},"title":"Los cursos incluyen"},"faq":{"description":"Explore nuestras preguntas frecuentes para obtener m\xe1s informaci\xf3n sobre la necesidad, la frecuencia y los aspectos de certificaci\xf3n de nuestra formaci\xf3n en materia de lucha contra el blanqueo de capitales.","items":[{"content":"S\xed, muchas jurisdicciones requieren capacitaci\xf3n ALD para las empresas de cripto con licencia y sin licencia. Sin embargo, los requisitos espec\xedficos pueden variar seg\xfan el pa\xeds o la regi\xf3n.","title":"\xbfEs obligatoria la formaci\xf3n en ALD para todas las empresas del sector de las criptomonedas?"},{"content":"La formaci\xf3n en materia de lucha contra el blanqueo de capitales debe impartirse con regularidad para garantizar que los empleados est\xe9n al d\xeda de las \xfaltimas novedades. La frecuencia puede variar en funci\xf3n de las normas del sector, los requisitos reglamentarios y la evaluaci\xf3n de riesgos de la empresa.","title":"\xbfCon qu\xe9 frecuencia debe impartirse la formaci\xf3n en materia de lucha contra el blanqueo de capitales?"},{"content":"S\xed, existen varios programas de certificaci\xf3n para personas especializadas en el cumplimiento de la normativa ALD. Estas certificaciones validan el conocimiento y la experiencia de los profesionales en el campo. Como profesionales con licencia en el campo, AML Zapex proporciona a los participantes una certificaci\xf3n al completar la formaci\xf3n AML Zapex, mejorando a\xfan m\xe1s sus credenciales en el cumplimiento de AML.","title":"\xbfExisten programas de certificaci\xf3n para profesionales de la lucha contra el blanqueo de capitales?"},{"content":"Se pueden encontrar proveedores de formaci\xf3n en ALD de buena reputaci\xf3n a trav\xe9s de asociaciones del sector, organismos reguladores y organizaciones de formaci\xf3n especializadas. Es esencial elegir un proveedor con un s\xf3lido historial y experiencia en el cumplimiento de la normativa de lucha contra el blanqueo de capitales.","title":"\xbfD\xf3nde pueden encontrar las empresas proveedores de formaci\xf3n acreditados en materia de lucha contra el blanqueo de capitales?"}],"title":"\xbfTiene alguna pregunta?"},"form":{"thankYou":{"description":"Esperamos poder ayudarle a mejorar la eficiencia operativa, fortificar la reputaci\xf3n y anticiparse a los riesgos normativos en su negocio de criptomonedas.","title":"Gracias por elegir AML Zapex para sus necesidades de formaci\xf3n AML"}},"main":{"buttonText":"Empezar","description":"Capacitar a sus equipos para dominar el ecosistema de cumplimiento de criptograf\xeda","subtitle":"Formaci\xf3n y certificaci\xf3n","title":"Formaci\xf3n en criptocumplimiento AML y Blockchain Analytics "},"trainings":{"blockchainEntries":[{"title":"An\xe1lisis de cadenas de bloques"},{"title":"Histor\xeda"},{"title":"C\xf3mo funciona"},{"title":"Puntaje de riesgo"},{"title":"Control de transacciones"},{"title":"Control de carteras"},{"title":"Investigaci\xf3n criptogr\xe1fica"},{"title":"Desaf\xedos del an\xe1lisis de cadenas de bloques"},{"title":"Participantes del mercado"},{"title":"Regulaci\xf3n"},{"title":"Casos de uso"}],"course1":{"buttonText":"Certificarse","description1":"Esta formaci\xf3n especializada a nivel industrial proporciona temas b\xe1sicos de AML elaborados por expertos para que sean concisos y f\xe1cilmente comprensibles. La certificaci\xf3n proporciona una buena visi\xf3n general para las empresas cripto que comienzan su viaje en el mundo cripto.","description2":"Despu\xe9s de la formaci\xf3n, usted ser\xe1 capaz de entender lo que es el blanqueo de dinero y otros delitos financieros, comprender los principales requisitos de AML, c\xf3mo construir procesos internos de AML, el riesgo de AML en la industria de criptomonedas y mucho m\xe1s.","duration":"3,5 horas","entryTitle":"El m\xf3dulo de formaci\xf3n incluye los siguientes cap\xedtulos:","title":"Fundamentos AML para la formaci\xf3n y certificaci\xf3n de criptoempresas"},"course2":{"buttonText":"Certificarse","description":"Esta formaci\xf3n y certificaci\xf3n est\xe1 hecha a medida por nuestros expertos para aquellos que ya est\xe1n familiarizados con las criptomonedas y tienen conocimientos b\xe1sicos de AML, pero quieren ampliar su experiencia y comprensi\xf3n en el an\xe1lisis de blockchain.","duration":"3 horas","entryTitle":"El m\xf3dulo de formaci\xf3n incluye los siguientes cap\xedtulos:","title":"Formaci\xf3n y certificaci\xf3n en Blockchain Analytics Mastery"},"fundamentalsEntries":[{"description":"Comprender los conceptos, las t\xe9cnicas y los indicadores de las actividades de lavado de dinero y financiaci\xf3n del terrorismo.","title":"Lavado de dinero y financiaci\xf3n del terrorismo"},{"description":"Familiarizar a los participantes con los est\xe1ndares, reglamentos y obligaciones legales globales de AML espec\xedficos de la industria de la criptograf\xeda.","title":"Est\xe1ndares AML y marco legal"},{"description":"Identificar los riesgos inherentes de las criptomonedas, como el anonimato, las transacciones transfronterizas y el uso de activos digitales para actividades il\xedcitas.","title":"Riesgos de lavado de dinero en la criptoindustria"},{"description":"Explorar las funciones y responsabilidades de las diferentes partes interesadas en el marco de AML, incluidos la administraci\xf3n, los oficiales de cumplimiento y los auditores internos.","title":"Tres l\xedneas de defensa"},{"description":"Proporcionar directrices y mejores pr\xe1cticas para implementar procedimientos eficaces de lucha contra el blanqueo de dinero en las empresas de criptomonedas, incluida la diligencia debida con el cliente (CDD), el monitoreo de transacciones y la notificaci\xf3n de actividades sospechosas.","title":"Procedimientos AML"},{"description":"Comprender los requisitos espec\xedficos de lucha contra el blanqueo de dinero impuestos por las autoridades reguladoras, como el mantenimiento de registros, las obligaciones de presentaci\xf3n de informes y las metodolog\xedas de evaluaci\xf3n de riesgos.","title":"Principales requisitos de AML"},{"description":"Presentar a los participantes las herramientas y t\xe9cnicas de an\xe1lisis de la cadena de bloques para monitorear y analizar las transacciones en la cadena de bloques a fin de detectar actividades sospechosas.","title":"An\xe1lisis de cadenas de bloques"},{"description":"Educar a los participantes sobre los reg\xedmenes de sanciones internacionales y la importancia de comparar las transacciones y entidades con las listas sancionadas.","title":"Sanciones"},{"description":"Mantener a los participantes informados sobre las \xfaltimas tendencias, t\xe1cticas y m\xe9todos empleados por los blanqueadores de dinero y los terroristas para adaptar las medidas de lucha contra el blanqueo de dinero en consecuencia.","title":"T\xe9cnicas, m\xe9todos y tendencias predominantes en ML/TF:"},{"description":"Trabajar en tareas pr\xe1cticas, lo que permite a los participantes aplicar sus conocimientos y habilidades para resolver problemas.","title":"Casos pr\xe1cticos"}],"seeAllProgram":"Ver todo el programa","showLess":"Mostrar menos","title":"Formaciones y certificaciones profesionales"},"why":{"buttonText":"Reg\xedstrese para obtener m\xe1s informaci\xf3n","description":"En el cambiante mundo de las criptomonedas, proteja su empresa contra los delitos financieros, las sanciones reglamentarias y los da\xf1os a la reputaci\xf3n dominando el arte y la ciencia del cumplimiento de la normativa ALD.","title":"\xbfPor qu\xe9 elegir la formaci\xf3n AML de AML Zapex?"}},"trustedMembers":{"title":"Organizaciones donde somos miembros de confianza:"},"wasCopiedToClipboard":"se copi\xf3 en el portapapeles","why":{"block1":{"buttonText":"Hablemos","description1":"AML Zapex ofrece una amplia gama de soluciones de cumplimiento normativo personalizadas para cada cliente.","description2":"<b>Habiendo ayudado a m\xe1s de 300 empresas cripto</b> de todos los tama\xf1os en 25 jurisdicciones, confiamos en que podremos satisfacer sus demandas.","title":"Enfoque personalizado"},"block2":{"description1":"Ofrecemos servicios de KYT/revisi\xf3n de billeteras, KYC, AML y m\xe1s para empresas cripto.","description2":"La puntuaci\xf3n de riesgo de AML Zapex se basa en m\xfaltiples fuentes de datos, lo que garantiza que contamos con los datos m\xe1s confiables de la industria.","description3":"Nuestros servicios y soluciones f\xe1ciles de usar simplifican los procesos de su empresa y eliminan la complejidad que implica un proveedor de cumplimiento normativo.","title":"Plataforma de cumplimiento normativo integrada"},"block3":{"buttonText":"Contacto","description":"En AML Zapex, brindar un servicio de asistencia r\xe1pido y agradable es muy importante. Por eso, siempre estamos para lo que nuestros clientes necesiten. Ofrecemos asistencia 24/7.","note":"Una respuesta durante la noche puede tardar un poco m\xe1s","title":"Atenci\xf3n al Cliente"},"title":"\xbfPor qu\xe9 AML Zapex?"}}}'),
                es = JSON.parse('{"translation":{"aboutUs":{"culture":{"description":"Nous croyons que tout succ\xe8s chez AML Zapex est d\xfb \xe0 deux choses : nos employ\xe9s et notre culture d\'entreprise.\\n","items":[{"button":"Essayer AML Zapex d\xe8s maintenant","description1":"Notre objectif est de cr\xe9er un march\xe9 des crypto-monnaies \xe9quitable et transparent et de mettre \xe0 la disposition de tous un outil permettant de prot\xe9ger \xe0 la fois la r\xe9putation et les actifs.","title":"Notre mission"},{"button":"Se joindre \xe0 nous","description":"Aujourd\'hui, une \xe9quipe de plus de {{specialistsCount}} sp\xe9cialistes dans quatre bureaux diff\xe9rents (Kyiv, Londres, G\xf6teborg et Hong Kong) travaille sur la cr\xe9ation et le d\xe9veloppement du service.","title":"L\'\xe9quipe"},{"button":"En savoir plus sur le projet","description":"Notre algorithme s\'am\xe9liore en permanence et analyse plus de 10 000 sources ouvertes et <b>2 500</b>+ adresses de spam en temps r\xe9el.","title":"La technologie"}],"title":"Notre culture"},"experts":{"title":"Nos experts"},"main":{"description":"Fond\xe9e en 2019 par une \xe9quipe de sp\xe9cialistes RegTech, notre plateforme fournit des \xe9valuations en ligne des adresses et des transactions cryptographiques conform\xe9ment aux recommandations internationales du GAFI."},"products":{"items":[{"button":"Essayez Safe3 maintenant","description":"Wallet d\xe9centralis\xe9 Web 3.0. Le premier Crypto Wallet avec un module AML int\xe9gr\xe9. Une seule application pour toutes les crypto-monnaies. Tout est transparent et s\xe9curis\xe9."},{"button":"En savoir plus sur PureFi","description":"Le protocole PureFi permet aux applications dApp de se conformer pleinement aux normes locales et mondiales, tout en pr\xe9servant la d\xe9centralisation et l\'anonymat des utilisateurs.\\n\\nD\xe9velopp\xe9e par AML Zapex en partenariat avec la Hacken Foundation, cette solution permet d\'analyser l\'ensemble des crypto-actifs et de mettre en place des proc\xe9dures AML/KYC pour l\'infrastructure Web3."}],"title":"Nos autres produits"}},"analyze":{"items":{"green":{"bridge":{"description":"Entit\xe9s qui assurent le transfert d\'actifs \xe0 travers diff\xe9rentes blockchains. Ces connexions vous permettent de d\xe9placer des actifs sans les \xe9changer, ce qui rend les ponts diff\xe9rents des \xe9changes d\xe9centralis\xe9s.","title":"Bridge"},"exchange":{"description":"Ce type d\'entit\xe9 permet aux utilisateurs d\'acheter, de vendre et d\'\xe9changer des cryptomonnaies en d\xe9tenant une licence d\'\xe9change et qui propose g\xe9n\xe9ralement les services suivants:<br />\\n- Conservation, courtage ou tout autre service financier connexe qui fournit un service d\'\xe9change o\xf9 les participants interagissent avec une entit\xe9 centralis\xe9e.\\n<br /><br />\\nEt n\'inclut pas :<br />\\n- Les licences de services financiers non sp\xe9cifiques et les juridictions qui figurent sur la liste non-coop\xe9rative du GAFI.\\n<br /><br />\\nIls repr\xe9sentent la cat\xe9gorie d\'entit\xe9s la plus importante et la plus utilis\xe9e dans l\'industrie des crypto-monnaies, faisant 90% de tous les fonds envoy\xe9s par ces services.","title":"Exchange"},"iCO":{"description":"Entit\xe9 qui finance son projet par financement participatif en vendant sa crypto-monnaie nouvellement \xe9mise aux investisseurs en \xe9change de monnaie fiduciaire ou de crypto-monnaies plus courantes comme le Bitcoin et l\'Ether.<br /><br />Il existe de nombreux exemples l\xe9gitimes de ces offres, mais aussi de nombreux cas o\xf9 de mauvais acteurs l\xe8vent des fonds par le biais d\'ICO, puis empochent l\'argent et s\'en vont.","title":"ICO"},"marketplace":{"description":"Cryptomonnaies utilis\xe9es pour payer des activit\xe9s l\xe9gitimes.","title":"Marketplace"},"merchantServices":{"description":"Une organisation qui permet aux entreprises d\'accepter les paiements de leurs clients, \xe9galement connue sous le nom de passerelles de paiement ou de processeurs de paiement. Elle facilite souvent la conversion en monnaie fiduciaire locale et le transfert des fonds sur le compte bancaire du commer\xe7ant.","title":"Merchant Services"},"miner":{"description":"Pi\xe8ces extraites par les mineurs qui n\'ont pas encore \xe9t\xe9s transf\xe9r\xe9es.","title":"Miner"},"nFTPlatform":{"description":"Protocoles con\xe7us pour \xe9mettre, \xe9changer et vendre des NFT. Bien qu\'ils soient similaires aux Smart Contracts ou aux \xe9changes d\xe9centralis\xe9s, ils sont class\xe9s en fonction de leur fonction principale.","title":"NFT Platform"},"nFTPlatformCollection":{"description":"Collections de NFT sur des plateformes con\xe7ues pour les \xe9mettre, les \xe9changer et les vendre. Ils sont class\xe9s en fonction de leur objectif r\xe9el, malgr\xe9 la similitude avec les Smart Contracts ou les \xe9changes d\xe9centralis\xe9s.","title":"NFT Platform Collection"},"other":{"description":"Les pi\xe8ces obtenues par le biais de airdrops, de vente de jetons ou d\'autres moyens.","title":"Other"},"p2PExchange":{"description":"L\'organisation est autoris\xe9e \xe0 exercer des activit\xe9s li\xe9es \xe0 la fourniture de services d\'\xe9change de crypto-monnaies, o\xf9 les participants \xe9changent directement entre eux, sans interm\xe9diaire.<br /><br /> Cela ne comprend pas les licences pour les services financiers non sp\xe9cifi\xe9s et les juridictions qui figurent sur la liste non coop\xe9rative du GAFI.","title":"P2P Exchange"},"paymentProcessor":{"description":"Cryptomonnaies li\xe9es aux services de paiement.","title":"Payment Management"},"seizedAssets":{"description":"Crypto-actifs saisis par les autorit\xe9s publiques.","title":"Seized Assets"},"wallet":{"description":"Un portefeuille en ligne est un service permettant de stocker et d’effectuer des transactions avec des cryptomonnaies. Les portefeuilles de garde sont un type de portefeuille en ligne dans lequel le service stocke les cl\xe9s priv\xe9es de l\'utilisateur, ce qui peut cr\xe9er des risques potentiels de fraude ou de manque de s\xe9curit\xe9, mais en g\xe9n\xe9ral, les fournisseurs r\xe9put\xe9s peuvent offrir une meilleure s\xe9curit\xe9 que les utilisateurs inexp\xe9riment\xe9s eux-m\xeames.","title":"Wallet"}},"red":{"childExploitation":{"description":"Entit\xe9s impliqu\xe9es dans l\'exploitation des enfants.","title":"Child Exploitation"},"darkMarket":{"description":"Cryptomonnaies li\xe9es \xe0 des activit\xe9s ill\xe9gales.","title":"Dark Market"},"darkService":{"description":"Les pi\xe8ces li\xe9es \xe0 la maltraitance des enfants, au financement du terrorisme ou au trafic de drogue.","title":"Dark Service"},"enforcementAction":{"description":"La personne morale fait l\'objet d\'une proc\xe9dure aupr\xe8s des autorit\xe9s judiciaires.","title":"Enforcement action"},"fraudShop":{"description":"Entit\xe9 qui vend divers types de donn\xe9es, notamment des informations personnelles, des donn\xe9es de cartes de cr\xe9dit et des comptes vol\xe9s.<br /><br />Les transactions frauduleuses se distinguent g\xe9n\xe9ralement des march\xe9s du darknet par leur comportement, comme des d\xe9p\xf4ts constants et aucune transaction client entrante.\\n","title":"Fraud Shop"},"fraudulentExchange":{"description":"Les plateformes d\'\xe9change impliqu\xe9es dans des escroqueries de retrait, des comportements ill\xe9gaux ou dont les fonds ont \xe9t\xe9 confisqu\xe9s par les autorit\xe9s gouvernementales.","title":"Fraudulent Exchange"},"gambling":{"description":"Pi\xe8ces associ\xe9es \xe0 des jeux en ligne sans licence.","title":"Gambling"},"highRiskJurisdiction":{"description":"Les juridictions figurant sur la liste non coop\xe9rative du GAFI ont une activit\xe9 frauduleuse et criminelle r\xe9pandue en mati\xe8re de crypto-monnaies ou ne disposent pas d\'un cadre r\xe9glementaire d\xe9velopp\xe9.<br /><br /> Cela comprend des pays comme l\'Iran, le Venezuela, l\'Albanie et la R\xe9publique populaire d\xe9mocratique de Cor\xe9e, \xe9galement connue sous le nom de Cor\xe9e du Nord.","title":"High-Risk Jurisdiction\\n"},"illegalService":{"description":"Cryptomonnaies li\xe9es \xe0 des activit\xe9s ill\xe9gales.","title":"Illegal Service"},"illicitActorOrganization":{"description":"Une organisation ou un individu qui est directement ou indirectement impliqu\xe9 dans diverses formes d\'activit\xe9s ill\xe9gales.<br /><br />Il est souvent associ\xe9 \xe0 des sujets \xe0 risque tels que les march\xe9s darknet, les transactions frauduleuses, le financement extr\xe9miste et le piratage informatique.","title":"Illicit Actor/Organization"},"malware":{"description":"Adresses associ\xe9es aux logiciels malveillants, y compris les cryptojackers utilis\xe9s par les ordinateurs h\xf4tes pour l\'exploitation mini\xe8re. Les autres types de logiciels malveillants incluent les clippers, les botnets, les chevaux de Troie et les campagnes DDoS.","title":"Malware"},"mixer":{"description":"Les actifs passent par un m\xe9langeur pour rendre leur tra\xe7age difficile, voire impossible. Les m\xe9langeurs sont principalement utilis\xe9s pour le blanchiment d\'argent.","title":"Mixer"},"onlinePharmacy":{"description":"Organismes sp\xe9cialis\xe9s dans la vente ill\xe9gale de m\xe9dicaments non approuv\xe9s ou sur ordonnance. Comparable aux march\xe9s du darknet, mais peut op\xe9rer \xe0 la fois sur le darknet et en toute l\xe9galit\xe9, donnant lieu \xe0 une classification distincte","title":"Online Pharmacy"},"ransom":{"description":"Cryptomonnaies obtenues par extorsion ou chantage.","title":"Ransom"},"sanctions":{"description":"Entit\xe9s soumises \xe0 des sanctions.","title":"Sanctions"},"scam":{"description":"Cryptomonnaies obtenues frauduleusement.","title":"Scam\\n"},"specialMeasures":{"description":"Organisations ou adresses identifi\xe9es par le FinCEN comme pr\xe9sentant un risque \xe9lev\xe9 de blanchiment d\'argent. Les contre-mesures comprennent la tenue de registres, les exigences de d\xe9claration et les restrictions sur les transferts de fonds et la gestion des comptes.<br /><br /> La port\xe9e peut s\'\xe9tendre \xe0 des organismes similaires dans d\'autres pays ou juridictions au fur et \xe0 mesure de leur mise en œuvre.","title":"Special Measures"},"stolenCoins":{"description":"Vol de crypto-monnaies.","title":"Stolen Coins\\n"},"terrorismFinancing":{"description":"Entit\xe9s impliqu\xe9es dans le financement du terrorisme.","title":"Terrorism Financing"}},"yellow":{"aTM":{"description":"Cryptomonnaies obtenues par l\'interm\xe9diaire d\'un op\xe9rateur de guichet automatique de crypto-monnaies.","title":"ATM"},"dEX":{"description":"Une application blockchain qui facilite les \xe9changes de crypto-monnaies et de jetons par le biais de Smart Contracts automatis\xe9s.<br /><br />Les transactions sur la plateforme d\xe9centralis\xe9e sont de pair \xe0 pair et n\'ont pas de tiers ou d\'autorit\xe9 centrale autre que le Smart Contract qui ex\xe9cute les transactions. Cela en fait un outil de blanchiment d\'argent populaire parmi les criminels.","title":"DEX"},"exchangeHighRisk":{"description":"Toute entit\xe9 devient \xe0 haut risque sur la base des crit\xe8res suivants :<br />\\n<br />\\nPas de KYC : Ne demande absolument aucune information sur le client avant d\'autoriser tout niveau de d\xe9p\xf4t/retrait, ou ne fait aucune tentative de v\xe9rification de ces informations.\\n<br />\\n<br />\\nLiens criminels : Condamnations p\xe9nales d\'une entit\xe9 juridique en rapport avec des violations de la LBC/FT.\\n<br />\\n<br />\\nExposition : Niveau \xe9lev\xe9 d\'exposition \xe0 des services \xe0 risque tels que les march\xe9s darknet, d\'autres \xe9changes \xe0 haut risque ou le commingling. D\xe9fini comme un service dont l\'exposition directe \xe0 haut risque diff\xe8re d\'un \xe9cart-type par rapport \xe0 la moyenne de toutes les entit\xe9s d\'\xe9change identifi\xe9es sur une p\xe9riode de 12 mois.\\n<br />\\n<br />\\nJuridiction : Bas\xe9 dans une juridiction o\xf9 les mesures LAB/CFT sont faibles.\\n<br />\\n<br />\\nSans licence : Ne d\xe9tient pas de licence sp\xe9cifique pour effectuer des transactions en crypto-monnaies.","title":"Exchange | High Risk\\n"},"infrastructureAsAService":{"description":"Une organisation qui offre des services d\'information, y compris VPN, VPS et enregistrement de domaine.<br /><br />\\nCela pourrait potentiellement constituer un paiement \xe0 des fournisseurs ax\xe9s sur la protection de la vie priv\xe9e qui pourraient \xeatre utilis\xe9s \xe0 des fins ill\xe9gales, mais en m\xeame temps pourrait constituer un paiement \xe0 un fournisseur commercial tout \xe0 fait l\xe9gitime.","title":"Infrastructure as a Service"},"lendingContract":{"description":"Une application blockchain qui permet aux utilisateurs de pr\xeater et d\'emprunter des crypto-actifs sans interaction avec un tiers ou une autorit\xe9 centrale.","title":"Lending Contract\\n"},"liquidityPools":{"description":"Les contrats intelligents dans lesquels les jetons sont bloqu\xe9s afin de fournir de la liquidit\xe9.","title":"Liquidity Pools\\n"},"p2PExchangeHighRisk":{"description":"L\'organisation n\'a pas de licence commerciale sp\xe9cifique pour fournir des services d\'\xe9change de crypto-monnaies o\xf9 les participants \xe9changent directement entre eux, sans interm\xe9diaire.\\n<br /><br />\\nCela inclut \xe9galement les organisations qui sont autoris\xe9es mais situ\xe9es dans des juridictions r\xe9pertori\xe9es. Ils sont r\xe9pertori\xe9es comme non coop\xe9ratives par le GAFI ou ne fournissent pas de KYC pour les transactions de grande valeur, ce qui les rend attractives pour le blanchiment d\'argent.","title":"P2P Exchange | High Risk\\n"},"privacyProtocol":{"description":"Un protocole ou une entit\xe9 qui utilise des fonctionnalit\xe9s de confidentialit\xe9, telles que les preuves \xe0 divulgation z\xe9ro, pour fournir aux utilisateurs des fonctionnalit\xe9s de confidentialit\xe9.\\n<br /><br />Assurer la transparence des transactions, tout en cachant les adresses des contreparties.<br /><br />Cette fonctionnalit\xe9 caract\xe9rise de nombreuses crypto-monnaies prot\xe9geant la vie priv\xe9e telles que Monero ou Secret, ce qui signifie que l\'obtention d\'un acc\xe8s \xe0 ces actifs ne signifie pas n\xe9cessairement que les fonds ont \xe9t\xe9 m\xe9lang\xe9s ou d\xe9lib\xe9r\xe9ment obscurcis.","title":"Privacy Protocol\\n"},"smartContract":{"description":"La fonctionnalit\xe9 de la blockchain qui fonctionne comme un contrat auto-ex\xe9cutoire, les termes de l\'accord entre l\'acheteur et le vendeur \xe9tant \xe9crits directement dans les lignes de code, ex\xe9cutables sans avoir recours \xe0 un tiers intervenant. ","title":"Smart Contract"},"tokenSmartContract":{"description":"Les actifs num\xe9riques qui sont construits sur une autre blockchain et qui peuvent \xeatre envoy\xe9s et re\xe7us \xe0 l\'aide d\'un portefeuille de crypto-monnaies.\\n<br />\\n<br />\\n Il existe diverses normes techniques de r\xe8gles convenues qui d\xe9terminent \xe0 la fois la conception, le d\xe9veloppement, le comportement et le fonctionnement du jeton donn\xe9.","title":"Token Smart Contract"},"unnamedService":{"description":"Clusters actuellement non identifi\xe9s qui pr\xe9sentent le comportement attendu d\'un service sur un grand nombre d\'adresses et de transactions.","title":"Unnamed Service"}}},"main":{"description":"Nous analysons les adresses pour leur appartenance \xe0 plus de 20 sources de risque afin de trouver les transactions suspectes et de d\xe9terminer le ratio de risque. Nous avons r\xe9parti toutes les sources en trois cat\xe9gories.","title":"Qu\'est-ce que nous analysons ?"},"note":{"text1":"La pr\xe9sence de <b>Dark Market, Dark Service et Illegal Service</b> est un mauvais signe.","text2":"Nous vous recommandons d\'effectuer des recherches plus approfondies pour \xe9viter de perdre vos fonds en raison de blocages (fonds gel\xe9s ou non accept\xe9s).","title":"Faites attention ! Soyez vigilants."}},"b2b":{"contactForm":{"description":"Reach out and our team will address your queries","title":"Contact form"},"curiousAbout":{"button":"Renseigner ici","description":"Nos experts AML sont pr\xeats \xe0 r\xe9pondre \xe0 vos demandes et vos questions.","title":"Commencer avec AML Zapex"},"help":{"items":[{"button":"Nous contacter","description":"Notre analyse automatique Conna\xeetre Vos Transactions aide votre entreprise \xe0 s\'aligner avec les exigences AML/CFT.","title":"Comment nous vous aidons ?"},{"button":"Exemple de report","description":"Vous obtiendrez un report d\xe9taill\xe9, et compr\xe9hensible qui souligne les risques des transactions et les sources pour vous guider dans vos d\xe9cisions de conformit\xe9.","title":"Report Compr\xe9hensible"},{"description":"Nous v\xe9rifierons les portefeuilles, les cryptomonnaies ainsi que les transactions; \xe0 la recherche de portefeuilles \xab\xa0sales\xa0\xbb, et vous enverrons un rapport complet avec explications.","title":"V\xe9rification des portefeuilles (adresses de wallets)"},{"button":"Nous contacter","description":"Nous vous aiderons \xe0 cr\xe9er et compl\xe9ter tous les documents et rapports \xe0 soumettre aux autorit\xe9s/soci\xe9t\xe9s d\'inspection (SAR, CTR, etc.)","title":"Assistance aux d\xe9clarations de suspicion"},{"description":"Nous avons aid\xe9 pr\xe8s de 200 entreprises \xe0 atteindre avec succ\xe8s les compliances FATF/MiCA avec nos solutions KYT et AML.","title":"Record Prouv\xe9"}],"title":"Assistance de business avec la compliance FATF/MiCA"},"helpsWith":{"items":[{"description":"Notre moyen de notation des risques assure une pr\xe9cision des donn\xe9es de 99,5% en provenance de 3 sources s\xfbres.","title":"99,5% de Pr\xe9cision des donn\xe9es"},{"description":"Faites V\xe9rifier Votre Adresse Une Fois, Acc\xe9dez aux V\xe9rifications Gratuites.","title":"Des V\xe9rifications d\'Adresses Illimit\xe9es et Gratuites"},{"description":"Une surveillance permanente des adresses a l\'aide d\'un blockchain sp\xe9cifi\xe9 avec des notifications en temps r\xe9el pour toutes les transactions qui arrivent et qui partent.","title":"Alertes en Temps R\xe9el"},{"description":"AML Zapex g\xe8re l&#39;int\xe9gration, lib\xe9rant ainsi vos d\xe9veloppeurs pour les t\xe2ches principales.","description1":"Nous vous aiderons \xe0 mettre en place une v\xe9rification automatique de toutes les transactions entrantes.","description2":"R\xe9duisez la maintenance de votre c\xf4t\xe9, afin que vous puissiez vous concentrer sur ce qui compte le plus : votre entreprise.","title":"Assistance"},{"description":"AML Zapex simplifie la v\xe9rification des transactions avec un point d&#39;acc\xe8s unique, r\xe9duisant ainsi la maintenance pour votre concentration sur l&#39;entreprise.","title":"Documentation API"},{"description":"Le contrat AML Zapex garantit aux r\xe9gulateurs que les questions de conformit\xe9 et de s\xe9curit\xe9 sont g\xe9r\xe9es efficacement.","description1":"En ce qui concerne l&#39;int\xe9gration d&#39;AML Zapex, nous nous chargeons du travail pour vous.","description2":"De cette fa\xe7on, vos d\xe9veloppeurs peuvent se concentrer sur la cr\xe9ation, et non sur l’int\xe9gration de la conformit\xe9.","title":"Contrat AML"}],"title":"L\'int\xe9gration AML Zapex Rationalise la Compliance KYT"},"howMatch":{"agreementCompliant":"AML/KYT/KYC en accord avec AMLD5, FATF, et MiCA","amlTrainingForFree":"<b>Accord avec Crypto AML & entra\xeenement \xe0 l\'analyse des cha\xeenes de blocs\\n\xe9valu\xe9s \xe0</b> <small>$3,500, inclu gratuitement dans l\'offre</small>","automaticChecksViaApi":"Verifications automatiques via API","bestChoice":"Le meilleur choix","business":{"checksCount":"15 000 verifications AML","description":"Des solutions avanc\xe9es pour les business de moyenne taille","otherServicesOff":"5% de r\xe9duction sur les autres services AML Zapex","price":"$3750","pricePerCheck":"$0.25 par verification","referralProgram":"5% programme de parrainage","testApi":"Test API pour AML Zapex KYC +$50 au total"},"customerSupport":"24/7 service client","dataSources":"5 sources de donn\xe9es","description":"Des plans diff\xe9rents d\xe9sign\xe9s \xe0 correspondre aux besoins de votre entreprise","discuss":"Discuter","enterprise":{"checksCount":"100 000 — 500 000 verifications AML","contactUsForQuote":"Contactez-nous pour un devis","description":"Prix sp\xe9cial et licence pour les plus grandes entreprises","otherServicesOff":"10% de reduction sur les autres services AML Zapex","price":"Licence","pricePerCheck":"Prix personnalis\xe9s","referralProgram":"15% programme de parrainage","supportTeam":"Conformit\xe9/ Suivi de nos \xe9quipes","testApi":"Test API pour AML Zapex KYC +$100 au total"},"growth":{"checksCount":"5 000 verifications AML","description":"Des solutions basiques AML pour les business en d\xe9veloppement","otherServicesOff":"5% de r\xe9duction sur les autres services AML Zapex","price":"$1500","pricePerCheck":"$0.30 par verification","referralProgram":"2% programme de parrainage","testApi":"Test API pour AML Zapex KYC +$50 au total"},"monitoringWithAlerts":"Surveillance des adresses avec alertes","note":"* Apr\xe8s l\'ann\xe9e civile \xe0 compter de la date du paiement, le solde des ch\xe8ques non utilis\xe9s est annul\xe9.","ofac":"OFAC sanctions de compliance","premium":{"checksCount":"50 000 verifications AML","description":"Le meilleur prix et assistance en conformit\xe9 pour les grandes entreprises","otherServicesOff":"10% de reduction sur les autres services AML Zapex","price":"$10000","pricePerCheck":"$0.20 par verification","referralProgram":"15% programme de parrainage","testApi":"Test API pour AML Zapex KYC +$100 au total"},"serviceClustering":"Service clustering","special":"B\xe9n\xe9ficiez d\'une r\xe9duction de 15 % sur tous les plans jusqu\'au 30 d\xe9cembre 2023","supportedBlockchains":"25+ cha\xeenes de blocs en support","title":"Combien co\xfbte votre tranquillit\xe9 d\'esprit?","yearly":"Annuellement"},"main":{"button":"Inscrivez-vous \xe0 une d\xe9mo","description":"Augmente la couverture du risque et la maximise efficacement \xe0 travers notre moyen de transaction avec la solution KYT API.","title":"Rester Conforme et S\xe9curiser votre business avec KYT"},"reviews":{"description":"Explorer nos services avec les personnes que nous avons aid\xe9es","eliTaranto":{"company":"Digital Assets at EQIBank","name":"Eli Taranto","position":"CEO","text":"\xabLe probl\xe8me \xe9tait d\'\xeatre s\xfbr que les bourses soit enti\xe8rement conformes. Ceci dit nous avions besoin de connecter plusieurs bases de donn\xe9es, principalement des bases de donn\xe9es initi\xe9es par le gouvernement qui sont suivis et g\xe9r\xe9es par les agences nationales ainsi maintenues en commun avec d\'autres participants, pour \xeatre certain qu\'aucun participant n\xe9faste n\'arrive \xe0 int\xe9grer l\'espace crypto.\xbb"}},"risk":{"text":"Selon nos statistiques, un <b>portefeuille sur quatre est suspect. </b><br/>\\nEn investissant quelques dollars en v\xe9rification, vous pouvez vous prot\xe9ger contre d\'\xe9ventuelles pertes importantes."},"safety":{"items":[{"button":"En savoir plus","description":"Acceptez les paiements en cryptomonnaies ou payez en cryptomonnaies. Tout est s\xe9curis\xe9, car nous v\xe9rifions tous les fonds et seuls les fonds \\"propres\\" vous parviennent.","title":"Paiements en cryptomonnaies pour votre entreprise"}],"title":"Syst\xe8me s\xe9curis\xe9 de traitement des paiements en cryptomonnaies"},"statistics":{"description":"Le flux d\'int\xe9gration rationalis\xe9 par AML Zapex assure que vous \xeates op\xe9rationnel en un rien de temps, prot\xe9geant votre business des fraudes financi\xe8res.","title":"Obtenez une int\xe9gration et une protection AML aujourd\'hui"}},"b2c":{"contact":{"button":"Nous contacter sur Telegram","description":"Nous sommes d\'astreinte 24 heures sur 24, 7 jours sur 7, de sorte que tout probl\xe8me peut \xeatre r\xe9solu rapidement et par le biais d\'un chat en direct.","note":"Bien que disponibles, nous sommes des \xeatres humains et il se peut donc que nous ne r\xe9agissions pas aussi rapidement la nuit que le jour ✌️","title":"Des questions ?"},"email":{"buttonDownload":"T\xe9l\xe9chargez un exemple de rapport de risque d\xe9taill\xe9","placeholder":"Votre e-mail","title":"Laissez votre adresse \xe9lectronique et nous vous enverrons un exemple de rapport d\xe9taill\xe9."},"example":{"items":[{"button":"V\xe9rifier l\'adresse","description":"Le rapport peut \xeatre pr\xe9sent\xe9 aux r\xe9gulateurs comme une garantie que votre probl\xe8me li\xe9 au blanchiment d\'argent est clos et que les litiges sont r\xe9solus.","title":"Envoi d\'un rapport d\xe9taill\xe9 sur la lutte contre le blanchiment d\'argent"},{"button":"En savoir plus","description":"Nous analysons les portefeuilles en prenant en compte plus de 25 param\xe8tres afin de trouver les transactions suspectes et d\xe9terminer le ratio de risque.","title":"Exploration des sources"},{"button":"Commencez \xe0 v\xe9rifier","description":"Nous donnons des informations d\xe9taill\xe9es sur chacune des sources","title":"Mise en page"},{"description":"Vous obtenez des informations sur le degr\xe9 de risque du portefeuille et d\xe9cidez si cela vaut la peine de le valider ou non.","title":"\xc9valuation des risques"},{"button":"V\xe9rifier l\'adresse","description":"Nous vous indiquerons si l\'adresse figure sur les listes de sanctions. Toute interaction avec de telles adresses peut entra\xeener des amendes, un blocage ou une r\xe9vocation de licence","title":"V\xe9rification des listes de sanctions"}],"title":"Exemple d\'analyse de portefeuille"},"main":{"button":"D\xe9marrez une v\xe9rification","description":"Nous v\xe9rifions les portefeuilles et les transactions et vous indiquons d\'o\xf9 proviennent les fonds. Cela permet de d\xe9terminer la puret\xe9 des actifs et de vous prot\xe9ger contre les fraudeurs et les cryptomonnaies vol\xe9es.","title":"Analyse d\xe9taill\xe9e des portefeuilles "},"pricing":{"items":[{"button":"Cela me convient","description":"Parfait pour d\xe9buter","note":"$3 pour une v\xe9rification suppl\xe9mentaire","price":"$3","spec1":"1 v\xe9rification (check)","spec2":"Aucune date d\'expiration","spec3":"Assistance AML Zapex 24h/24 et 7j/7","title":"Commencez!"},{"button":"J\'en profite","description":"Forfait avantageux pour les d\xe9tenteurs","note":"2.5$ par v\xe9rification","price":"$25","spec1":"10 v\xe9rifications","spec2":"1 an","spec3":"Assistance AML Zapex 24h/24 et 7j/7","title":"Optimale"},{"badge":"Le meilleur choix","button":"Rentable !","description":"Pour les traders et les investisseurs","note":"2$ par v\xe9rification","price":"$50","spec1":"25 v\xe9rifications","spec2":"1 an","spec3":"Assistance AML Zapex 24/7","spec4":"Programme de parrainage","title":"Pro"}],"title":"Tarifs"},"works":{"text":"Voir la vid\xe9o","title":"Comment \xe7a fonctionne ?"}},"b2cpage":{"checkAddress":{"messengers":{"description":"Un simple message dans Telegram ou WhatsApp suffit pour lancer une v\xe9rification compl\xe8te de votre portefeuille crypto, ce qui en fait une option pratique pour les utilisateurs qui pr\xe9f\xe8rent les plates-formes de messagerie instantan\xe9e.","title":"Messageries"},"or":"ou","signUp":"Inscrivez-vous pour obtenir plus de fonctions suppl\xe9mentaires","title":"Comment v\xe9rifier votre adresse ?","website":{"description":"Pour une approche plus traditionnelle, connectez-vous \xe0 votre compte utilisateur sur notre site Internet. Ici, vous pouvez acheter et effectuer des v\xe9rifications de portefeuille avec une assistance et des conseils d\xe9taill\xe9s, pour une exp\xe9rience approfondie et interactive. Ou t\xe9l\xe9chargez notre application mobile pour une commodit\xe9 et une accessibilit\xe9 ultimes.","title":"Site Web ou application"}},"checkYourWallet":"V\xe9rifiez votre portefeuille","faq":{"info":{"answer":"Nous r\xe9pondons dans les 30 secondes","description":"Contactez-nous par Telegram. Nous sommes disponibles 24h/24 et 7j/7 pour garantir une exp\xe9rience sans tracas pour tous.","inTelegram":"Nous sommes sur Telegram","note":"Nous sommes accessibles <b>24h/24 et 7j/7</b>, mais nous ne pouvons pas toujours r\xe9pondre rapidement la nuit","title":"Votre question n\'est pas dans la liste ?"},"title":"FAQs"},"hero":{"description":"Le fait de recevoir des fonds d\'origine ill\xe9gale peut entra\xeener le gel de vos fonds","title":"S\xe9curisez vos portefeuilles contre les fonds illicites"},"info":{"address":{"description":"Surveillance en temps r\xe9el de toutes les transactions associ\xe9es \xe0 une adresse blockchain pr\xe9cise et r\xe9ception de notifications instantan\xe9es des transactions entrantes et sortantes.","title":"Suivi des adresses"},"investigations":{"description":"Obtenez la possibilit\xe9 de voir les liens directs et indirects entre l\'adresse donn\xe9e et les clusters identifi\xe9s, la valeur totale envoy\xe9e vers/depuis le portefeuille cible et la distance jusqu\'\xe0 celui-ci.","title":"Enqu\xeates"},"suspicious":{"description":"Identifiez les actifs li\xe9s \xe0 des activit\xe9s ill\xe9gales telles que la fraude, le terrorisme, l\'extorsion et d\'autres crimes.","title":"Transactions suspectes"}},"investigation":{"download":"T\xe9l\xe9charger un exemple de rapport.pdf","title":"Enqu\xeate sur l\'adresse du portefeuille","videoTitle":"Regarder une vid\xe9o pr\xe9sentant un exemple d\'enqu\xeate"},"keepCrypto":{"description":"Identifier les risques potentiels","items":{"avoid":{"description":"Une v\xe9rification r\xe9guli\xe8re de vos portefeuilles et transactions cryptographiques peut r\xe9duire consid\xe9rablement le risque de gel de vos actifs sur les bourses.","title":"\xc9vitez les suspensions de compte CEX"},"boost":{"description":"Identifiez et traitez les menaces de s\xe9curit\xe9 potentielles pour prot\xe9ger vos investissements et vos avoirs.","title":"Renforcez la s\xe9curit\xe9"},"stay":{"description":"Respectez les r\xe9glementations en \xe9volution et \xe9vitez les p\xe9nalit\xe9s. Des contr\xf4les r\xe9guliers vous aident \xe0 respecter les exigences l\xe9gales, en \xe9vitant les p\xe9nalit\xe9s et les probl\xe8mes juridiques.","title":"Restez dans le cadre de la loi afin d’\xe9viter les probl\xe8mes"}},"title":"S\xe9curisez vos cryptomonnaies"},"moreProducts":{"items":{"amlTraining":{"description":"Programmes de formation sp\xe9cialis\xe9s pour l\'industrie des cryptomonnaies","title":"Formation AML"},"consulting":{"description":"Aider les entreprises de cryptomonnaies avec les proc\xe9dures AML, la formation et la configuration de compte bancaire","title":"Conseils"},"investigation":{"description":"Assistance \xe0 la r\xe9cup\xe9ration de cryptomonnaies vol\xe9es","title":"Enqu\xeate"},"kyc":{"description":"V\xe9rifiez plus d\'utilisateurs avec une v\xe9rification rapide, s\xe9curis\xe9e, automatis\xe9e et efficace","title":"KYC"},"kyt":{"description":"V\xe9rification automatique de toutes les transactions et portefeuilles via l\'API","title":"KYT"}},"leaveRequest":"Laissez une demande","title":"Plus de produits et solutions"},"orOnWeb":"sur le Web","pricing":{"checklist":["Plus de 25 blockchains prises en charge avec leurs actifs et jetons natifs","V\xe9rification manuelle des transactions et des portefeuilles via le tableau de bord","Service prioritaire 24h/24 et 7j/7","3 sources de donn\xe9es"],"forBusiness":"Pour les entreprises","forPersonal":"Pour personnel","tariffs":{"advanced":{"badge":"\xc9conomisez 40%","checks":"100 v\xe9rifications","perCheck":"1.8 $ par v\xe9rification","price":"$180"},"optimal":{"badge":"\xc9conomisez 17%","checks":"10 v\xe9rifications","perCheck":"2,5 $ par v\xe9rification","price":"25 $"},"pro":{"badge":"\xc9conomisez 33%","checks":"25 v\xe9rifications","perCheck":"2 $ par v\xe9rification","price":"50 $"},"start":{"checks":"3 v\xe9rifications","perCheck":"3 $ par v\xe9rification","price":"9 $"}},"title":"Tarifs"},"risks":{"description":"Dans le monde des cryptomonnaies, il est crucial de rester conforme aux normes r\xe9glementaires en \xe9volution. Des contr\xf4les r\xe9guliers vous aident \xe0 respecter les exigences l\xe9gales, en \xe9vitant les p\xe9nalit\xe9s et les probl\xe8mes juridiques.","title":"Qu\'est-ce que nous analysons ?"},"secureCrypto":{"title":"S\xe9curisez vos cryptomonnaies avec le contr\xf4le des risques de portefeuille et de transaction"},"stats":{"description":"Comme la notation des risques d\'AML Zapex est bas\xe9e sur plusieurs sources de donn\xe9es, nous avons la certitude de disposer des donn\xe9es les plus fiables du secteur","title":"23 % des portefeuilles contiennent des actifs risqu\xe9s, exposant les utilisateurs \xe0 des escroqueries, \xe0 des fraudes ou \xe0 des acteurs malhonn\xeates."},"trustedCompliance":{"title":"Approuv\xe9 par les bureaux de conformit\xe9 de"},"weTrusted":{"title":"Nous sommes des membres de confiance de"},"why":{"discussButton":"Discutons","integrated":{"description1":"Nous proposons des services de filtrage KYT/Wallet, KYC, AML et bien plus encore pour les entreprises de cryptographie","description2":"La notation des risques d\'AML Zapex est bas\xe9e sur plusieurs sources de donn\xe9es, garantissant que nous disposons des donn\xe9es les plus fiables du secteur","description3":"Nos services et solutions faciles d’utilisation permettent de rationaliser les processus de votre entreprise, \xe9liminant ainsi les complexit\xe9s relatives au fournisseur de conformit\xe9","title":"Plate-forme de conformit\xe9 int\xe9gr\xe9e"},"personalized":{"description1":"AML Zapex propose une large gamme de solutions de conformit\xe9 personnalis\xe9es pour chaque client.","description2":"Nous avons d\xe9j\xe0 aid\xe9 plus de 300 entreprises de cryptomonnaies de toutes tailles dans 25 juridictions, et nous sommes convaincus de pouvoir r\xe9pondre \xe0 vos demandes","title":"Approche personnalis\xe9e"},"title":"Pourquoi AML Zapex ?"}},"banners":{"title":"Banni\xe8res"},"careers":{"advantages":{"items":{"dynamicEnvironment":{"description":"Nous prosp\xe9rons gr\xe2ce au changement et \xe0 l\'innovation, garantissant que chaque jour soit engageant et plein de nouvelles opportunit\xe9s.","title":"Environnement dynamique"},"freedomToCreate":{"description":"Prends des responsabilit\xe9s, apporte des id\xe9es nouvelles et stimule l\'innovation dans un environnement qui te fait confiance et te donne du pouvoir.","title":"Libert\xe9 de cr\xe9er"},"makeDifference":{"description":"Ton travail contribuera directement \xe0 un monde num\xe9rique plus s\xfbr et plus fiable.","title":"Fais la diff\xe9rence"},"supportiveCulture":{"description":"La collaboration et la transparence sont au cœur de ce que nous faisons. Chaque voix est entendue et valoris\xe9e.","title":"Culture de soutien"},"workLifeBalance":{"description":"Nous privil\xe9gions l\'impact sur les horaires rigides — PAS de suivi du temps, seulement des R\xc9SULTATS.","title":"\xc9quilibre travail-vie"},"workWithExperts":{"description":"Rejoins une \xe9quipe qui valorise le partage des connaissances, la curiosit\xe9 et l\'apprentissage continu pour repousser les limites.","title":"Travaille avec des experts"}},"title":"Pourquoi tu vas adorer travailler avec nous"},"employmentType":{"fullTime":"Temps plein","partTime":"Temps partiel"},"gallery":{"title":"Les personnes qui font que \xe7a arrive"},"hero":{"description":"Chez AML Zapex, chaque d\xe9fi est une opportunit\xe9 d\'innover. Rejoins une \xe9quipe engag\xe9e qui transforme la conformit\xe9 blockchain avec des solutions avanc\xe9es. Tes id\xe9es, comp\xe9tences et passion peuvent y laisser une empreinte durable.","openPositionsButton":"Voir les postes ouverts","title":"Ensemble, nous fa\xe7onnons l\'avenir de l\'analyse et de l\'innovation blockchain"},"hrInfo":{"gotQuestions":"Des questions ? Parlons-en"},"jobType":{"office":"Bureau","remote":"\xc0 distance"},"location":{"ukraine":"Ukraine","worldwide":"Partout dans le monde"},"numbers":{"byTheNumbers":"En chiffres","locations":"Lieux","teammates":"Co\xe9quipiers","yearOverYearGrowth":"Croissance annuelle","yearsOnTheMarket":"Ann\xe9es sur le march\xe9"},"openPositions":{"empty":"Aucune offre d\'emploi disponible pour le moment","title":"Postes ouverts"},"openPositionsEntry":{"details":"D\xe9tails"},"stickyNav":{"aboutUs":"\xc0 propos de nous","advantages":"Avantages","openPositions":"Postes ouverts"},"submitApplication":{"attachYourResumeOrCV":"Joignez votre CV","currentCompany":"Entreprise actuelle","currentLocation":"Emplacement actuel","eMail":"E-mail","enterYourCompany":"Entrez le nom de votre entreprise","enterYourEmail":"Entrez votre e-mail","enterYourFullName":"Entrez votre nom complet","enterYourLocation":"Entrez votre emplacement","enterYourPhone":"Entrez votre t\xe9l\xe9phone","fileIsTooLarge":"Le fichier est trop volumineux (max {{maxFileSize}}MB)","fullName":"Nom complet","invalidEmail":"E-mail invalide","phone":"T\xe9l\xe9phone","resumeOrCV":"CV","submit":"Soumettre","success":{"description":"Notre \xe9quipe examinera votre candidature et vous contactera bient\xf4t.","title":"Merci pour votre candidature !"},"thisFieldIsRequired":"Ce champ est requis","title":"Soumettre votre candidature"},"vacancy":{"applyForThisJob":"Postuler","backToOpenPositions":"Retour aux postes ouverts"}},"certifications":{"90012015":{"description":"AML Zapex est garantie ISO9001, le syst\xe8me de gestion de qualit\xe9 le plus reconnu au monde. Gr\xe2ce \xe0 cette certification, nous fournissons une qualit\xe9 qui reste constante, am\xe9liorons la satisfaction des clients, les processus sont simplifi\xe9s, une r\xe9duction des erreurs ainsi qu’une augmentation de productivit\xe9. Chez AML Zapex nous voulons atteindre les standards de qualit\xe9 les plus hauts.","title":"ISO9001"},"270012017":{"description":"AML Zapex a obtenu la certification ISO 27001 reconnue mondialement comme le principal standard des syst\xe8mes de gestion de la s\xe9curit\xe9 des informations.\\nCette certification \xe9tablit un cadre strat\xe9gique am\xe9liorant la s\xe9curit\xe9 des informations, r\xe9duit les risques cybern\xe9tiques et assure une conformit\xe9 r\xe9glementaire.","title":"ISO27001"},"description":"Chez AML Zapex, nous mettons la priorit\xe9 sur la s\xe9curit\xe9 de nos usagers et continuons \xe0 am\xe9liorer constamment nos mesures pour assurer leur s\xe9curit\xe9 et leur confiance.","title":"Les certifications d’AML Zapex"},"checking":{"addressPlaceholder":"Entrer une adresse cryptographique","allFieldsRequired":"Tous les champs sont requis","description":"Identifiez rapidement le risque d\'un portefeuille et sa source de fonds gr\xe2ce \xe0 un simple rapport","emailError":"S\'il vous pla\xeet, mettez une adresse email valide.","emailPlaceholder":"Votre email","note":"Apr\xe8s le contr\xf4le, nous enverrons le rapport \xe0 l\'adresse e-mail que vous avez fournie","submitButton":"Ch\xe8que","successDescription":"Votre demande est en cours de traitement, vous recevrez les r\xe9sultats du contr\xf4le \xe0 l\'adresse \xe9lectronique indiqu\xe9e dans les meilleurs d\xe9lais.","successTitle":"Merci !","title":"V\xe9rification des portefeuilles de crypto-monnaie"},"consulting":{"consult":{"title":"Consultation gratuite sans aucun engagement"},"faq":{"items":[{"content":"Le non-respect des exigences AML/KYC peut entra\xeener un retrait de licence r\xe9glementaire, de lourdes amendes ou une peine d\'emprisonnement. En outre, votre compte peut \xeatre bloqu\xe9 et vos actifs peuvent \xeatre gel\xe9s par une institution financi\xe8re ou une bourse de crypto-monnaies.","title":"Pourquoi dois-je me conformer aux exigences AML/KYC ?"},{"content":"Oui, nous d\xe9livrons une confirmation que la formation fournie par AML Zapex a \xe9t\xe9 compl\xe9t\xe9e. Vous pouvez montrer ce certificat aux auditeurs, r\xe9gulateurs, banques ou plateformes d\'\xe9change de cryptomonnaies lorsqu\'ils demanderont une preuve de votre expertise en AML/KYC ou en analyse de blockchain.","title":"D\xe9livrez-vous des certificats de fin de formation ?"},{"content":"En fonction de la demande, le processus de pr\xe9paration des proc\xe9dures ou d\'autres documents peut prendre de 1 \xe0 2 semaines \xe0 1 mois.","title":"Combien de temps cela prend-il ?"},{"content":"Nous couvrons principalement les pays de l\'UE et de la CEI pour les licences ou les missions li\xe9es \xe0 la lutte contre le blanchiment d\'argent et le financement du terrorisme. Cependant, d\'autres pays peuvent \xeatre envisag\xe9s au cas par cas. En outre, il existe des documents qui ne sont exig\xe9s que par les institutions financi\xe8res ou les bourses de crypto-monnaies et non par les autorit\xe9s r\xe9glementaires locales. Si tel est le cas, nous serons \xe9galement en mesure de vous fournir l\'assistance dont vous avez besoin.","title":"Quels pays pouvez-vous couvrir ?"},{"content":"Nous pouvons vous fournir un audit de portefeuille de crypto-monnaies. L\'audit comprendra une analyse de la source des fonds, des contreparties, des risques et du comportement du portefeuille de crypto-monnaies s\xe9lectionn\xe9. Un tel audit d\'un portefeuille de crypto-monnaies peut \xeatre requis par les entreprises ou les particuliers dans leurs interactions futures avec une banque ou un r\xe9gulateur.","title":"\xc9mettez-vous un rapport de diligence raisonnable (audit) sur les portefeuilles cryptographiques ?"}],"title":"Questions fr\xe9quemment pos\xe9es"},"form":{"thankYou":{"description":"Nous appr\xe9cions l\'int\xe9r\xeat que vous portez \xe0 nos services de conseil en mati\xe8re de conformit\xe9 des cryptomonnaies. Votre demande a \xe9t\xe9 soumise avec succ\xe8s et notre \xe9quipe est impatiente de vous aider. Dans les prochaines 24 heures, l\'un de nos sp\xe9cialistes certifi\xe9s prendra contact avec vous pour discuter de votre demande en d\xe9tail.","info":{"description":"En attendant, n\'h\xe9sitez pas \xe0 consulter notre <a href=\\"https://blog.AML Zapex.com\\">blog</a> pour obtenir les derni\xe8res informations et mises \xe0 jour sur la conformit\xe9 des cryptomonnaies.","title":"Rester inform\xe9"},"title":"Merci d\'avoir contact\xe9 AML Zapex"}},"main":{"description":"Nous consultons les clients en tenant compte non seulement des exigences l\xe9gales, mais aussi des pratiques du march\xe9 et de l\'aspect commercial de la question","leaveRequest":"Laissez une demande","title":"Aider les entreprises de crypto avec la paperasse"},"services":{"description":"L\'\xe9quipe d\'AML Zapex propose des sp\xe9cialistes certifi\xe9s dans divers domaines, y compris le droit, l\'audit, la conformit\xe9 AML/CFT, et la forensique blockchain. Nous fournissons une consultation compl\xe8te qui prend en compte les exigences l\xe9gales, les pratiques du march\xe9, et les aspects commerciaux.","hide":"Cacher","items":{"assisting":{"description":"Certains de nos clients rencontrent des difficult\xe9s pour ouvrir un compte pour leurs actifs cryptographiques ou services li\xe9s aux fiat.","fullDescription":"Certains de nos clients rencontrent des difficult\xe9s pour ouvrir un compte pour leurs actifs cryptographiques ou services li\xe9s aux fiat. Nous aidons les clients \xe0 trouver l\'institution financi\xe8re ou l\'\xe9change de crypto-monnaies le plus adapt\xe9 qui r\xe9pondrait aux attentes du client. Nous assistons \xe9galement les clients dans la communication avec les institutions financi\xe8res s\xe9lectionn\xe9es pour garantir un processus d\'ouverture de compte rapide et fluide. Une telle communication peut inclure le remplissage de questionnaires ou la compl\xe9tion de formulaires li\xe9s \xe0 l\'AML, etc.","title":"Assistance aux clients pour l\'ouverture de compte dans les banques ou les \xe9changes de crypto-monnaies"},"audit":{"description":"Certains de nos consultants sont des avocats et des auditeurs ayant de l\'exp\xe9rience dans des cabinets d\'avocats de premier plan, Big4 et CEX qui peuvent aider nos clients \xe0 r\xe9soudre des questions juridiques et fournir des rapports de diligence raisonnable complets.","fullDescription":"Certains de nos consultants sont des avocats et des auditeurs ayant de l\'exp\xe9rience dans des cabinets d\'avocats de premier plan, Big4 et CEX qui peuvent aider nos clients \xe0 r\xe9soudre des questions juridiques et fournir des rapports de diligence raisonnable complets. Par exemple, nous pouvons pr\xe9parer le rapport de diligence raisonnable sur les portefeuilles cryptographiques ou les entreprises d\'investissement cryptographique, etc.","title":"Services juridiques et d\'audit"},"drafting":{"description":"Nous aidons les entreprises de crypto \xe0 r\xe9diger et d\xe9velopper leurs processus internes AML/KYC.","fullDescription":"Nous aidons les entreprises de crypto \xe0 r\xe9diger et d\xe9velopper leurs processus internes AML/KYC. Par exemple, nous r\xe9digeons et personnalisons la proc\xe9dure AML interne en tenant compte des processus commerciaux et de la situation actuelle du client. En parall\xe8le, nous aidons les clients \xe0 \xe9laborer leur d\xe9claration d\'app\xe9tit pour le risque, \xe0 r\xe9diger des politiques de d\xe9nonciation, une politique anti-corruption et de pots-de-vin ou \xe0 d\xe9velopper des r\xe8gles de surveillance des transactions pour les actifs cryptographiques. Tous les documents mentionn\xe9s ci-dessus sont requis par les r\xe9gulateurs ou les banques/\xe9changes de crypto si le client pr\xe9voit de demander une licence ou d\'ouvrir un compte.","title":"R\xe9daction de proc\xe9dures AML/KYC et de surveillance des transactions"},"trainings":{"description":"Nous avons une exp\xe9rience directe en mati\xe8re de LCB (Lutte Contre le Blanchiment) et d\'actifs cryptographiques ou de blockchain et nous souhaitons partager nos connaissances et notre expertise.","fullDescription":"Nous avons une exp\xe9rience directe en mati\xe8re de LCB (Lutte Contre le Blanchiment) et d\'actifs cryptographiques ou de blockchain et nous souhaitons partager nos connaissances et notre expertise. Par cons\xe9quent, nous d\xe9veloppons constamment des formations pour \xe9duquer nos clients sur les nouveaux risques AML/CFT, avec un accent sur les actifs cryptographiques.<br /><br /> Il est important de noter que toutes les entreprises de cryptomonnaies r\xe9gul\xe9es ayant des comptes chez CEX/banques doivent suivre au moins une formation AML par an.","title":"Formations en analyse AML/KYC et Blockchain"}},"learnMore":"En savoir plus","title":"Nos services"},"specialist":{"nikoDemchuk":{"description":"Niko Demchuk est un sp\xe9cialiste AML exp\xe9riment\xe9, certifi\xe9 par l\'Association des Sp\xe9cialistes Certifi\xe9s en Lutte contre le Blanchiment d\'Argent (ACAMS). Ayant obtenu son Master en Droit de l\'Information et des Technologies de l\'Information, Niko est un expert en r\xe9gulation des cryptomonnaies, en AML et en conformit\xe9 KYC. Il a une vaste exp\xe9rience dans les cabinets juridiques et une expertise dans le traitement de diff\xe9rentes cryptor\xe9gulations. Actuellement, il est Avocat et Responsable du Conseil chez AML Zapex.","name":"Niko Demchuk","position":"Avocat et Relations Gouvernementales"},"title":"Leading Сertified AML Specialist"}},"cookies":{"acceptButton":"Accepter tous les cookies","text":"En naviguant sur ce site, vous autorisez les cookies de services tiers."},"copy":"Copie","cryptopayment":{"contact":{"button":"Nous contacter sur Telegram","description":"Nous avons des conditions flexibles et une approche sur mesure. Envoyez nous un message sur Telegram et nous trouverons la meilleure option pour r\xe9pondre aux besoins de votre entreprise.","title":"Nous contacter pour discuter des termes et conditions"},"howMatch":{"description":"\xc9vitez les commissions \xe9lev\xe9es avec AML Zapex. Les frais cach\xe9s et les surfacturations font partie du pass\xe9.","items":[{"label1":"Portefeuilles personnels","label2":"Portefeuilles marchands","label3":"Comptes Fiat","title":"Frais de reception"},{"description":"Les frais d\'exp\xe9dition sont fix\xe9s en fonction du taux de change du dollar am\xe9ricain et sont calcul\xe9s au moment de la cr\xe9ation du paiement.","title":"Frais d\'envoi"},{"title":"Les frais pour les retraits en fiat sont les suivants"}],"title":"Combien cela co\xfbte-t-il ?"},"info":{"items":[{"button":"En savoir plus","description":"Nous permettons aux entreprises d\'accepter en toute s\xe9curit\xe9 les crypto-monnaies dans le cadre de leurs activit\xe9s ou pour pouvoir payer leurs partenaires. Chaque transaction est analys\xe9e en temps r\xe9el, ce qui garantit que tous les actifs sont int\xe8gres.","title":"Que faisons-nous ?"},{"title":"Recevez des paiements en cryptomonnaies du monde entier "},{"title":"Paiements dans les cryptomonnaies les plus populaires"}]},"join":{"button":"Commencez d\xe8s maintenant","description":"Acceptez les paiements, attirez de nouveaux clients et \xe9vitez les commissions \xe9lev\xe9s gr\xe2ce \xe0 AML Zapex.","title":"Rejoignez les milliers d\'entreprises qui utilisent d\xe9j\xe0 des paiements en cryptomonnaies."},"main":{"button":"Consultation gratuite","description":"V\xe9rification de tous les paiements en cryptomonnaie afin que votre entreprise n\'accepte ou n\'envoie que des fonds \\"propres\\".","title":"Accepter les paiements en cryptomonnaies pour votre entreprise"}},"fatf":{"advantages":{"items":[{"button":"Consultation gratuite","description":"Si nous ne pouvons pas vous aider, nous serons honn\xeates \xe0 ce sujet.","title":"Vous payez pour des r\xe9sultats"},{"button":"Discutez des termes et conditions","description":"Si vous nous \xe9crivez au sujet d\'un probl\xe8me, m\xeame apr\xe8s un an, nous vous conseillerons gratuitement.","title":"Nous sommes \xe0 l\'\xe9coute de vos besoins"},{"button":"Nous contacter sur Telegram","description1":"Nous sommes d\'astreinte 24 heures sur 24 et 7 jours sur 7, de sorte que tout probl\xe8me peut \xeatre r\xe9solu rapidement et par le biais d\'un chat en direct.","description2":"Bien que disponibles, nous sommes des \xeatres humains et il se peut donc que nous ne r\xe9agissions pas aussi rapidement la nuit que le jour ✌️","title":"Assistance 24h/24 et 7j/7"},{"button":"Pour souscrire \xe0 nos services","description":"Nous avons fait \xe9conomiser environ  <b><span>$5 359 800</span></b> dollars \xe0 nos clients en raison du blocage des transactions de la part des plateformes d\'\xe9changes.","title":"Exp\xe9rience et r\xe9sultats"},{"button":"Nous contacter","description":"Nous respectons votre temps, c\'est pourquoi nous r\xe9pondons dans les 30 secondes","title":"Nous r\xe9pondons dans les 30 secondes"},{"button":"Consultation gratuite","description":"Nous avons accompagn\xe9 <b><span>200 entreprises</span></b> \xe0 se conformer aux normes du GAFI.","title":"Professionnalisme"}],"title":"Les avantages en travaillant avec nous"},"canWeHelp":{"first":{"description":"R\xe9daction de la documentation juridique requise pour le processus d\'octroi de licences d\'entreprise de cryptographie, telles que les proc\xe9dures AML, les proc\xe9dures sp\xe9ciales pour l\'analyse de la blockchain, la d\xe9claration d\'exposition aux risques et autres","title":"Proc\xe9dure de licence d\'entreprise crypto"},"items":[{"description":"Nous v\xe9rifions d\'o\xf9 vous avez envoy\xe9 votre argent et quel est le risque de blocage de vos actifs","title":"Contr\xf4le LCB-FT"},{"description":"Nous vous aiderons \xe0 cr\xe9er et compl\xe9ter tous les documents et rapports \xe0 soumettre \xe0 tous les organismes op\xe9rant des contr\xf4les/audits","title":"Audit + rapport "},{"description":"Apr\xe8s un audit d\xe9taill\xe9 r\xe9alis\xe9 par une \xe9quipe de sp\xe9cialistes, votre entreprise se conformera  \xe0 toutes les exigences du GAFI","title":"Conformit\xe9 aux exigences du GAFI"}],"note":"Notre exp\xe9rience est bas\xe9e sur le texte MiCA et les besoins r\xe9glementaires des pays favorables aux crypto-monnaies.","second":{"description":"Conseiller les entreprises de cryptographie dans leurs activit\xe9s quotidiennes, par exemple en dispensant des formations sur la lutte contre le blanchiment d\'argent et en aidant aux enqu\xeates sur les origines des actifs cryptographiques.<br /><br /> Les formations annuelles AML sont obligatoires pour les soci\xe9t\xe9s de cryptographie agr\xe9\xe9es.","title":"Conseil AML"},"third":{"description":"Assistance aux soci\xe9t\xe9s de cryptographie lors de l\'ouverture de comptes bancaires et du remplissage des questionnaires des institutions financi\xe8res.<br /><br /> De plus, nous proposons un audit du portefeuille crypto s\xe9lectionn\xe9 pour les risques juridiques.<br /><br /> La banque peut vous demander de remplir des formulaires li\xe9s \xe0 la lutte contre le blanchiment d\'argent ou de fournir des politiques de lutte contre le blanchiment d\'argent, etc.","title":"Assistance r\xe9glementaire"},"title":"Que faisons-nous ?"},"consultation":{"button":"Nous contacter sur Telegram","description":"La consultation se d\xe9roule sous la forme d\'un chat sur Telegram. C\'est gratuit, et si nous ne pouvons pas vous aider, nous vous le dirons imm\xe9diatement. Vous ne perdez rien et vous pouvez vous retirer \xe0 tout moment.","title":"La consultation est gratuite et ne vous engage en rien."},"faq":{"items":[{"content":"Le non-respect des exigences AML/KYC peut entra\xeener un retrait de licence r\xe9glementaire, de lourdes amendes ou une peine d\'emprisonnement. En outre, votre compte peut \xeatre bloqu\xe9 et vos actifs peuvent \xeatre gel\xe9s par une institution financi\xe8re ou une bourse de crypto-monnaies.","title":"Pourquoi dois-je me conformer aux exigences AML/KYC ?"},{"content":"Notre expertise se concentre sur l\'aide \xe0 la demande d\'une licence cryptographique, la conformit\xe9 AML/KYC et l\'ouverture d\'un compte bancaire. L\'ensemble des documents ou les conseils sp\xe9cifiques d\xe9pendent des besoins du client. Nous pouvons \xe9galement fournir une formation sur la lutte contre le blanchiment d\'argent.","title":"Comment pouvons-nous vous aider ?"},{"content":"En fonction de la demande, le processus de pr\xe9paration des proc\xe9dures ou d\'autres documents peut prendre de 1 \xe0 2 semaines \xe0 1 mois.","title":"Combien de temps cela prend-il ?"},{"content":"Nous couvrons principalement les pays de l\'UE et de la CEI pour les licences ou les missions li\xe9es \xe0 la lutte contre le blanchiment d\'argent et le financement du terrorisme. Cependant, d\'autres pays peuvent \xeatre envisag\xe9s au cas par cas. En outre, il existe des documents qui ne sont exig\xe9s que par les institutions financi\xe8res ou les bourses de crypto-monnaies et non par les autorit\xe9s r\xe9glementaires locales. Si tel est le cas, nous serons \xe9galement en mesure de vous fournir l\'assistance dont vous avez besoin.","title":"Quels pays pouvez-vous couvrir ?"},{"content":"Nous pouvons vous fournir un audit de portefeuille de crypto-monnaies. L\'audit comprendra une analyse de la source des fonds, des contreparties, des risques et du comportement du portefeuille de crypto-monnaies s\xe9lectionn\xe9. Un tel audit d\'un portefeuille de crypto-monnaies peut \xeatre requis par les entreprises ou les particuliers dans leurs interactions futures avec une banque ou un r\xe9gulateur.","title":"\xc9mettez-vous un rapport de diligence raisonnable (audit) sur les portefeuilles cryptographiques\xa0?"}],"title":"Questions les plus fr\xe9quemment pos\xe9es"},"main":{"button":"Consultation gratuite","description":"L\'\xe9quipe d\'AML Zapex charg\xe9e de la lutte contre le blanchiment d\'argent et le financement du terrorisme pr\xe9parera votre entreprise \xe0 se conformer aux exigences du GAFI.","note":"<b>Plus de 200</b> entreprises ont satisfait aux exigences r\xe9glementaires suite \xe0 notre audit.","specs1":"Pr\xe9parer les documents pour les licences de crypto-monnaie","specs2":"Ouvrir un compte bancaire","specs3":"\xc9laborer des proc\xe9dures AML, d\'autres documents n\xe9cessaires et mener une formation AML","subtitle":"Notre \xe9quipe de sp\xe9cialistes vous aidera :","title":"Nous vous aidons \xe0 vous conformer aux exigences LCB-FT du GAFI"},"program":{"buttonPdf":"L\'exemple d\'analyse PDF","from":"\xc0 partir de","items":[{"button":"Nous contacter sur Telegram","description":"Nous vous fournissons un cadre clair pour votre business crypto qui est conforme \xe0 la l\xe9gislation anti-blanchiment.","specs":[{"text":"L\'\xe9quipe analysera vos actifs et montrera l\'origine de tous les fonds."},{"text":"Nous vous enverrons un rapport complet indiquant o\xf9 sont pass\xe9s vos fonds et quel est le risque que vos actifs soient bloqu\xe9s tels quels + vous aurez une explication d\xe9taill\xe9e."},{"text":"Nous vous expliquerons comment stocker vos donn\xe9es, effectuer des contr\xf4les de sanctions, v\xe9rifier les personnes politiquement expos\xe9es ainsi que la r\xe9putation m\xe9dia de vos clients"},{"text":"Nous vous donnerons des instructions claires sur la mani\xe8re de vous prot\xe9ger contre les amendes pour blanchiment d\'argent."}]},{"button":"Nous contacter sur Telegram","description":"Nous analyserons tous les points li\xe9s au respect des exigences en mati\xe8re de lutte contre le blanchiment d\'argent. Nous proc\xe9derons \xe0 un audit LCB-FT complet de votre entreprise","special":"A aid\xe9 {{value}} entreprises","specs":[{"text":"L\'\xe9quipe analysera vos actifs et montrera l\'origine de tous les fonds."},{"text":"Nous vous enverrons un rapport complet indiquant o\xf9 sont pass\xe9s vos fonds et quel est le risque que vos actifs soient bloqu\xe9s tels quels + vous aurez une explication d\xe9taill\xe9e."},{"text":"R\xe8gles d\xe9taill\xe9es pour le KYC/CDD"},{"text":"Nous vous aiderons \xe0 remplir les rapports de diligence raisonnable renforc\xe9e (EDD), qui contiennent des informations d\xe9taill\xe9es sur la diligence raisonnable des personnes physiques et morales"}]},{"button":"Nous contacter sur Telegram","description":"Nous analyserons votre activit\xe9. Nous vous indiquerons les domaines dans lesquels les processus m\xe9tier devront \xeatre modifi\xe9s pour se conformer aux exigences en mati\xe8re de lutte contre le blanchiment d\'argent","specs":[{"text":"Analyse professionnelle des activit\xe9s avec un responsable exp\xe9riment\xe9 de la lutte contre le blanchiment d\'argent"},{"text":"Nous vous enverrons un rapport complet indiquant o\xf9 sont pass\xe9s vos fonds et quel est le risque que vos actifs soient bloqu\xe9s tels quels + vous aurez une explication d\xe9taill\xe9e."},{"text":"Nous pouvons vous aider \xe0 remplir tous les documents et rapports \xe0 d\xe9poser aupr\xe8s de tout organisme de contr\xf4le (DS Tracfin, SAR, STR et autres)."},{"text":"Nous v\xe9rifierons les portefeuilles et les transactions \xe0 la recherche d\'adresses ou de crypto \xab\xa0sales\xa0\xbb et vous enverrons un rapport complet avec explications"},{"text":"Nous pr\xe9parerons votre entreprise \xe0 se conformer au GAFI."}]}],"note":"Vous ne payez que pour le r\xe9sultat. Si nous ne pouvons pas vous aider, nous vous le dirons directement.","text":"Le fait d\'avoir un audit augmente votre cr\xe9dibilit\xe9 aupr\xe8s de vos partenaires.  Augmente la fid\xe9lit\xe9 des clients et peut acc\xe9l\xe9rer la d\xe9cision de faire affaire avec vous.","title":"Programmes de conformit\xe9 en mati\xe8re de lutte contre le blanchiment d\'argent"}},"feedback":{"thankYou":{"description":"Nous avons bien re\xe7u votre demande et nous vous remercions de l\'int\xe9r\xeat que vous portez aux services d\'AML Zapex.","info":{"description":"En attendant, n\'h\xe9sitez pas \xe0 consulter notre <a href=\\"https://blog.AML Zapex.com\\">blog</a> pour obtenir les derni\xe8res informations et mises \xe0 jour sur la conformit\xe9 des cryptomonnaies.","title":"Rester inform\xe9"},"title":"Merci pour votre demande"},"title":"Retour d\'information"},"footer":{"copyright":"AML Zapex","info":{"links":{"AboutTheProject":"\xc0 propos du projet","aboutUs":"\xc0 propos de nous","analysis":"Analyse","blog":"Blog","careers":"Carri\xe8res","certifications":"Certifications","pressKit":"Press kit","risks":"Risques","support":"Soutien"},"title":"Company"},"legal":{"links":{"privacyPolicy":"Politique de confidentialit\xe9","termsOfuse":"Conditions d\'utilisation","userAgreement":"Contrat d\'utilisation"},"title":"Cadre r\xe9glementaire"},"products":{"links":{"AML Zapex":"AML Zapex","apiIntegration":"Int\xe9gration avec l\'API","cryptopayment":"Paiements en crypto-monnaie","fatf":"Conseil en crypto-monnaie","investigation":"Enqu\xeate","kyc":"KYC automatis\xe9"},"title":"Produits"},"socials":{"links":{"facebook":"Facebook","instagram":"Instagram","linkedIn":"LinkedIn","reddit":"Reddit","telegram":"Telegram","tikTok":"TikTok","youTube":"YouTube"},"title":"R\xe9seaux sociaux "}},"fortune":{"codeModal":{"clickToCopy":"Cliquez pour copier","copied":"Copi\xe9","getPrize":"Obtenir le prix","note":"Copiez votre code bonus unique et cliquez sur \\"Obtenir le prix\\" pour le partager avec notre gestionnaire afin de r\xe9clamer votre r\xe9compense","title":"Votre code bonus unique pour activer le prix","willRedirected":"Vous serez redirig\xe9 vers le support dans {{countdown}} secondes"},"end":{"contactUs":"Contactez-nous","title":"Merci de votre int\xe9r\xeat pour participer \xe0 AML Zapex’s Birthday Bonus Giveaway ! Cependant, nous souhaitons vous informer que le concours est d\xe9j\xe0 termin\xe9.","title2":"Mais ne vous inqui\xe9tez pas – nous avons encore un bonus sp\xe9cial pour vous !","title3":"Veuillez contacter notre responsable pour une offre personnalis\xe9e"},"hero":{"birthday":"<span>Anniversaire</span> \uD83C\uDF89 <span>d\'AML Zapex</span>","description":"Faites tourner la roue pour gagner une <span>remise exclusive</span> ou des <span>v\xe9rifications AML gratuites !</span>","title":"Rejoignez la c\xe9l\xe9bration <b>\uD83E\uDD73</b> et r\xe9clamez votre prix pour l\'anniversaire d\'AML Zapex !"},"wheel":{"getLucky":"Tentez votre chance !","spinNow":"Tournez maintenant !"},"winModal":{"congratulations":"F\xe9licitations !","discount":"Remise","enterYourEmailLabel":"Entrez votre email pour recevoir un code bonus unique et activer le prix :","enterYourEmailPlaceholder":"Entrez votre email","freeChecks":"V\xe9rifications gratuites","getPromoCode":"Obtenir le code bonus","youHaveWon":"Vous avez gagn\xe9"}},"header":{"announcement":{"final":"Aujourd\'hui","link":"Consultez-les","main":"Nous avons mis \xe0 jour nos tarifs professionnels\xa0! "},"checkWallet":"Wallet Check","createAnAccount":"Cr\xe9er un compte","links":{"aboutUs":"\xc0 propos de nous","analysis":"Analyse","blog":"Blog","faq":"FAQ","howDoesItWork":"Comment cela fonctionne-t-il ?","price":"Tarifs","products":"Produits","risks":"Risques"},"logIn":"Se connecter","requestDemo":"Examen","signIn":"S\'inscrire","signUp":"S\'inscrire","webCheck":"Espace personnel"},"iSOCertified":{"buttonText":"En savoir plus","description":"Nous continuons constamment d’am\xe9liorer nos mesures de s\xe9curit\xe9 pour garantir la confiance et la protection. En savoir plus sur nos certifications","title":"Certification ISO"},"initiatives":{"moreInOurBlog":"Plus dans notre blog","title":"Nos initiatives"},"investigations":{"consult":{"description":"Nous vous recontacterons dans les 24 heures avec les prochaines \xe9tapes et un aper\xe7u de votre situation","title":"Pr\xeat \xe0 continuer ? Soumettez un formulaire et notre \xe9quipe examinera votre cas"},"description":{"text":"L\'\xe9quipe d\'experts <span>certifi\xe9s</span> d\'AML Zapex fournit un soutien <span>analytique</span> et <span>juridique</span> complet dans la r\xe9cup\xe9ration des crypto-monnaies vol\xe9es"},"disclaimer":{"description1":"AML Zapex ne vous appelle pas ou ne vous approche pas en premier avec une demande pour vous aider dans le processus de r\xe9cup\xe9ration des fonds, car tout appel, courriel ou message sans votre consentement est contraire aux r\xe8gles de confidentialit\xe9. En g\xe9n\xe9ral, nos clients contactent d\'abord AML Zapex avec les m\xe9thodes fournies sur notre site web.","description2":"Veuillez noter que pour les courriels ou tout autre canal de communication (Telegram, WhatsApp), afin de pr\xe9venir la fraude en ligne et les escroqueries en crypto-monnaie, AML Zapex utilise uniquement des courriels de domaine d\'entreprise de <a href=\\"https://AML Zapex.com\\">https://AML Zapex.com</a> ou des canaux de communication officiels r\xe9pertori\xe9s sur le site web officiel. Il incombe \xe0 l\'utilisateur de v\xe9rifier l\'orthographe correcte du site web et de communiquer uniquement avec les canaux de communication officiels r\xe9pertori\xe9s sur le site web d\'AML Zapex.","description3":"Toutes les factures sont produites par notre entreprise Safelement Limited. Pour les paiements, AML Zapex accepte les paiements en crypto et en fiat pour nos Services. Les paiements en crypto sont accept\xe9s vers les bourses de crypto-monnaie licenci\xe9es. Pour les paiements en fiat, nous utilisons des comptes bancaires d\'entreprise dans les principales banques HK & UE. De plus, nous utilisons des services de paiement par carte de cr\xe9dit fournis par Stripe et connect\xe9s aux m\xeames comptes bancaires.","hide":"Cacher","learnMore":"En savoir plus","subtitle":"Attention aux Escroqueries et Fraudes :","title":"Avertissement L\xe9gal"},"expertise":{"description":"Placez votre confiance dans notre \xe9quipe exp\xe9riment\xe9e d\'enqu\xeateurs en crypto-monnaie et de sp\xe9cialistes en r\xe9cup\xe9ration.","items":{"1":"Chainalysis Reactor Certification (CRC)","2":"Chainalysis KYT Certification (CKC)","3":"Cryptocurrency Fundamentals Certification (CCFC)","4":"Chainalysis Ethereum Investigations Certification (CEIC)","5":"ACAMS Fightning Moder Slavery And Human Trafficking","6":"</b>Membres fiers<b><ul><li>Crypto Defence Alliance</li><li>ATHI</li></ul>"},"subtitle":"Nous d\xe9tenons des certifications, y compris :","title":"Notre expertise"},"faq":{"items":[{"content":"AML Zapex peut enqu\xeater sur diverses cryptomonnaies, y compris, mais sans s\'y limiter, Bitcoin, Ethereum et d\'autres altcoins populaires.","title":"Quels types de cryptomonnaies AML Zapex peut-il enqu\xeater ?"},{"content":"La dur\xe9e d\'une enqu\xeate varie en fonction de la complexit\xe9 du cas. En g\xe9n\xe9ral, nous vous fournissons un aper\xe7u de haut niveau de votre situation gratuitement dans les 24 heures. Ensuite, si nous avons toutes les informations, nous vous fournissons un rapport d\'enqu\xeate dans les 72 heures. Cependant, le d\xe9lai total peut s\'\xe9tendre au-del\xe0, surtout lorsque nous devons marquer les portefeuilles pour continuer l\'enqu\xeate.","title":"Combien de temps dure une enqu\xeate sur la blockchain par AML Zapex ?"},{"content":"La dur\xe9e du processus de r\xe9cup\xe9ration peut varier consid\xe9rablement en fonction de la complexit\xe9 du cas, des temps de r\xe9ponse des \xe9changes et des forces de l\'ordre, et d\'autres facteurs. Il est pr\xe9f\xe9rable de se pr\xe9parer \xe0 un processus qui pourrait prendre plusieurs mois.","title":"Combien de temps dure g\xe9n\xe9ralement l\'ensemble du processus de r\xe9cup\xe9ration ?"},{"content":"Bien qu\'AML Zapex utilise des techniques et des outils avanc\xe9s pour maximiser les chances de r\xe9cup\xe9ration, il n\'est pas possible de garantir un r\xe9sultat r\xe9ussi dans tous les cas en raison de la nature des transactions sur la blockchain et des diff\xe9rents degr\xe9s de coop\xe9ration des tiers impliqu\xe9s.","title":"Y a-t-il une garantie que ma cryptomonnaie perdue sera r\xe9cup\xe9r\xe9e ?"},{"content":"Le co\xfbt peut varier en fonction de la complexit\xe9 du cas. Veuillez soumettre le rapport de la victime ou nous contacter pour obtenir un devis personnalis\xe9.","title":"Quel est le co\xfbt du service de r\xe9cup\xe9ration ?"},{"content":"Nos frais de service ne sont pas remboursables car ils couvrent le travail et les ressources investis par l\'\xe9quipe AML Zapex dans les efforts d\'enqu\xeate et de r\xe9cup\xe9ration, quel que soit le r\xe9sultat. Soyez assur\xe9 que nous sommes engag\xe9s \xe0 faire tout notre possible pour r\xe9cup\xe9rer vos actifs num\xe9riques.","title":"Si mes fonds ne peuvent pas \xeatre r\xe9cup\xe9r\xe9s, vais-je \xeatre rembours\xe9 des frais de service ?"},{"content":"Il est important de fournir autant de d\xe9tails que possible sur la cryptomonnaie perdue ou vol\xe9e, y compris les adresses de portefeuilles associ\xe9es, les TX de transaction, la nature de la perte (par exemple, escroquerie, vol), et tout enregistrement de communication ou de transaction pertinent.","title":"Quelles informations dois-je fournir pour le processus de r\xe9cup\xe9ration ?"},{"content":"Vous devriez soumettre le rapport de police en fonction de votre pays de r\xe9sidence. AML Zapex fournit des directives sur la mani\xe8re de soumettre correctement un rapport de police pour votre cryptomonnaie perdue ou vol\xe9e. Ce rapport et la subpena subs\xe9quente sont n\xe9cessaires pour le processus de r\xe9cup\xe9ration.","title":"O\xf9 dois-je soumettre un rapport de police ?"},{"content":"AML Zapex prend tr\xe8s au s\xe9rieux la s\xe9curit\xe9 de vos informations personnelles. Nous adh\xe9rons \xe0 des pratiques strictes en mati\xe8re de confidentialit\xe9 des donn\xe9es et utilisons des m\xe9thodes s\xe9curis\xe9es pour prot\xe9ger vos informations \xe0 toutes les \xe9tapes du processus de r\xe9cup\xe9ration.","title":"Comment mes informations personnelles sont-elles s\xe9curis\xe9es pendant ce processus ?"},{"content":"AML Zapex fournit de l\'\xe9ducation et des ressources pour vous aider \xe0 s\xe9curiser vos actifs num\xe9riques et \xe0 \xe9viter les escroqueries et les risques courants dans l\'espace cryptomonnaie. Cela comprend les meilleures pratiques pour la s\xe9curit\xe9 des portefeuilles, la reconnaissance des escroqueries potentielles, et la compr\xe9hension des risques et avantages des diff\xe9rents types de transactions et investissements en cryptomonnaie.","title":"Que puis-je faire pour \xe9viter de futures pertes de cryptomonnaie ?"}],"title":"Questions fr\xe9quemment pos\xe9es"},"form":{"thankYou":{"description":"Votre demande d\'assistance pour r\xe9cup\xe9rer votre cryptomonnaie perdue, pirat\xe9e ou vol\xe9e a \xe9t\xe9 re\xe7ue. Nous comprenons l\'urgence et la sensibilit\xe9 de votre situation et nous nous engageons \xe0 vous aider \xe0 traverser cette p\xe9riode difficile.","info":{"description1":"Notre \xe9quipe d\'experts certifi\xe9s en r\xe9cup\xe9ration de crypto-monnaies examinera les d\xe9tails que vous avez fournis. Nous nous effor\xe7ons de comprendre tous les aspects de votre dossier afin de vous proposer la strat\xe9gie de r\xe9cup\xe9ration la plus efficace.","description2":"Vous pouvez vous attendre \xe0 recevoir une r\xe9ponse de notre part dans les 24 heures, avec une premi\xe8re \xe9valuation de votre dossier et les prochaines \xe9tapes \xe0 suivre.","title":"Que se passe-t-il ensuite ?"},"title":"Merci d\'avoir soumis votre cas \xe0 AML Zapex"}},"main":{"description":"D\xe9couvrez o\xf9 se trouve votre cryptomonnaie perdue gr\xe2ce \xe0 une enqu\xeate approfondie et une \xe9ventuelle r\xe9cup\xe9ration","leaveRequest":"Laissez une demande","title":"R\xe9cup\xe9ration de Crypto et Enqu\xeate sur la Blockchain avec AML Zapex"},"process":{"description":"Comprenez les \xe9tapes que nous entreprenons pour analyser et potentiellement r\xe9cup\xe9rer vos actifs perdus.","items":{"0":{"description":"Remplissez notre formulaire d\xe9taill\xe9 pour les victimes afin de nous fournir autant d\'informations que possible sur votre situation.","title":"Collecte d\'Informations :"},"1":{"description":"Vous pouvez soit soumettre vous-m\xeame un rapport de police, soit suivre nos directives pour le faire efficacement.","title":"Rapport de Police :"},"2":{"description":"Si n\xe9cessaire, nous pouvons offrir l\'assistance et les informations n\xe9cessaires pour l\'enqu\xeate polici\xe8re et la convocation pour restituer les actifs.","title":"Support pour l\'Enqu\xeate Polici\xe8re :"},"3":{"description1":"Nous prenons plusieurs mesures dans ce processus, y compris :","description2":"Mettre sur liste noire les portefeuilles associ\xe9s avec les \xe9changes","description3":"\xc9tiquetage des portefeuilles associ\xe9s avec les fournisseurs d\'analyse de blockchain","description4":"Marquage des portefeuilles pour tra\xe7age si les fonds sont gar\xe9s dans des portefeuilles non identifi\xe9s","title":"Enqu\xeate sur la Blockchain :"},"4":{"description":"Nous g\xe9n\xe9rons un rapport complet bas\xe9 sur notre enqu\xeate blockchain.","title":"Rapport d\'Enqu\xeate :"},"5":{"description":"Si les fonds vol\xe9s atteignent un \xe9change, nous communiquons avec eux pour demander un gel potentiel des actifs vol\xe9s.","title":"Communication avec les \xc9changes :"}},"title":"Processus de R\xe9cup\xe9ration de Crypto-monnaie"},"recovery":{"button":"Laissez une demande","description":"Soumettez votre cas maintenant et notre \xe9quipe vous contactera dans les 24 heures.","title":"Pr\xeat \xe0 commencer votre processus de r\xe9cup\xe9ration de crypto-monnaie ?"}},"kyc":{"check":{"items":{"addressVerification":{"description":"Nous confirmons le lieu de r\xe9sidence, utilisant un document officiel comme les facture ou les relev\xe9s bancaires, comparant ainsi avec l\'adresse que l\'utilisateur nous a fourni.","title":"Verification d\'adresse"},"amlCheck":{"description":"Comme demand\xe9 par l\'acte de Prevention of Money Laudering and Terrorist Financing, nous v\xe9rifions les fonds et leur origine.","title":"Verifications AML"},"companyCheck":{"description":"<ul><li>Juridiction d\'immatriculation de l\'entreprise et type d\'activit\xe9</li><li>Si l\'entreprise est active selon le Registre des soci\xe9t\xe9s</li><li>Adresse enregistr\xe9e de l\'entreprise</li><li>Personnes autoris\xe9es de l\'entreprise et leurs documents d\'identification</li><li>B\xe9n\xe9ficiaires de l\'entreprise et leurs documents d\'identification</li></ul>","title":"Verifications de l\'entreprise (KYB)"},"documentVerification":{"description":"Des v\xe9rifications de documents en temps r\xe9el. Nous v\xe9rifions l\'authenticit\xe9 et la validit\xe9 du document mais aussi les donn\xe9es personnelles de l\'utilisateur.","title":"Verifications de documents"},"faceVerification":{"description":"Une confirmation d\'identit\xe9 en utilisant la reconnaissance faciale. Nous confirmons que le selfie de l\'utilisateur concorde bien avec leurs documents.","title":"Verifications faciale"},"ongoingMonitoring":{"description":"Nous offrons des listes noires constamment renouvel\xe9es de vos clients. Si quelqu\'un en est ajout\xe9, nous ajouterons une v\xe9rification suppl\xe9mentaire et nous vous notifierons.","title":"Surveillance KYC/AML"},"paymentMethod":{"description":"Nous v\xe9rifions les documents financiers, carte de cr\xe9dit ou transactions pour assurer que le payement a \xe9t\xe9 r\xe9alis\xe9 par le client pr\xe9c\xe9demment v\xe9rifi\xe9.","title":"M\xe9thode de payment"},"pepScreening":{"description":"V\xe9rifie le statut de la personne, les sanctions et la liste des personnes \xe0 surveiller pour \xe9viter de travailler avec des personnes ou des entreprise \xe0 haut risque.","title":"D\xe9pistage PEP"},"sourceOfFunds":{"description":"Nous v\xe9rifions l\'origine des revenus avec \xe0 l\'appui des documents comme des factures, des contrats, des payes.","title":"Verifications de la source de revenus"},"taxVerification":{"description":"Nous recueillons le num\xe9ro d\'identification du payement des imp\xf4ts, fourni pr\xe9c\xe9demment et v\xe9rifions sa validit\xe9.","title":"Verifications des imp\xf4ts"},"viabilityCheck":{"description":"Verifications des documents d\'institutions financi\xe8res ou d\'un avocat confirmant la fiabilit\xe9 du client.","title":"Verifications de la stabilit\xe9 financi\xe8re"},"videoVerification":{"description":"Verifications d\'identit\xe9 par appel vid\xe9o. Nous confirmons que le client veuille bien se faire v\xe9rifier ainsi que les documents transmis s\'agissant bien des siens.","title":"Verifications par vid\xe9o"}},"title":"Qu\'est-ce que nous v\xe9rifions ?"},"contact":{"button":"Contactez-nous sur Telegram","description":"Nous offrons des conditions flexibles et une approche individuelle. Contactez-nous et nous trouverons les meilleures options personnalis\xe9es pour les besoins de votre business.","title":"Contactez-nous pour discuter des termes et conditions"},"info":{"items":[{"button":"En savoir plus","description1":"S\xe9curiser vos business avec une v\xe9rification constante qui s\'aligne avec nos exigences de r\xe9gulation. V\xe9rifier les adresses, les moyens de payments, mener les v\xe9rifications des documents personnels, la s\xfbret\xe9 des fonds et plus encore pour que votre business soit enti\xe8rement conforme.  ","description2":"V\xe9rifier la cr\xe9dibilit\xe9 de chaque utilisateur pour vous prot\xe9ger d\'activit\xe9s ill\xe9gales qui pourraient avoir un impact n\xe9gatif sur votre business.","title":"Ce que nous offrons ?"},{"button":"En savoir plus","description1":"Nos services sont faciles d\'acc\xe8s, assurant une v\xe9rification des utilisateurs immediate.","description2":"KYC est souvent n\xe9cessaire pour l\'obtention de licences, permis et pour la gestion des finances. Nous faisons en sorte que cela soit accessible pour les administrateurs et utilisateurs afin de leur permettre d\'obtenir cette exigence.","title":"Pourquoi est-ce que vous en avez besoin?"},{"button":"Visiter la documentation","description":"Concernant l\'int\xe9gration, nous nous occupons de tout pour vous. Ainsi, vos d\xe9veloppeurs peuvent se concentrer sur la forme, et non sur l\'int\xe9gration de la compliance.","title":"Assistance"}],"title":"Le KYC d\'AML Zapex est un moyen rapide et facile de v\xe9rifier l\'identit\xe9 de votre client"},"main":{"badge":"Facile \xe0 programmer","button":"R\xe9server une d\xe9mo gratuite","description":"V\xe9rifier plus d\'utilisateurs avec une v\xe9rification rapide, s\xe9curis\xe9e, automatique et efficace qui r\xe9duit significativement le travail manuel","title":"Verification des utilisateurs avec KYC automatis\xe9"},"why":{"items":[{"button":"Afficher la documentation","description":"Les standards de s\xe9curit\xe9 accumul\xe9s \xe0 la certification ISO et les audits de s\xe9curit\xe9.","title":"S\xe9curit\xe9"},{"button":"Afficher la documentation","description":"Certifi\xe9 par l\'institut Europ\xe9en du Management et des Finances.","title":"Certification"},{"button":"Contactez-nous via Telegram","description":"Nous avons pu v\xe9rifier plus de 4 000 types de documents venant de plus de 240 pays diff\xe9rents. Commencer \xe0 int\xe9grer des clients en provenance du monde entier.","title":"Interop\xe9rabilit\xe9 entre pays"},{"button":"Contact","title":"Acc\xe9l\xe9rer le service clients, r\xe9duire les risques et simplifier les processus de votre business"}],"title":"Pourquoi nous choisir?"}},"kycHelp":{"title":"Centre de support"},"main":{"doing":{"items":[{"button":"Exemple de rapport PDF","description":"Nous v\xe9rifions les portefeuilles et les transactions \xe0 la recherche d\'argent sale et vous fournissons un rapport d\xe9taill\xe9. Cela permet de s\'assurer que vous n\'aurez pas d\'ennuis avec les autorit\xe9s et de vous prot\xe9ger des criminels.","title":"Que faisons-nous ?"},{"description1":"En recevant des fonds illicites, vous risquez d\'\xeatre interpell\xe9 par les autorit\xe9s de contr\xf4le et de perdre vos fonds en raison du gel d\xe9cid\xe9 par ces derni\xe8res.\\n","description2":"Cela peut ne pas arriver, mais votre portefeuille sera marqu\xe9.","description3":"Nous vous recommandons de faire des v\xe9rifications et d\'\xeatre s\xfbr des actifs en votre possession.","title":"Pourquoi est-ce n\xe9cessaire ?"},{"button":"V\xe9rifier via Telegram ","title":"Premi\xe8re v\xe9rification de portefeuille gratuite"}]},"faq":{"info":{"answer":"Nous vous r\xe9pondrons dans les 30 secondes","description":"Envoyez-nous un message sur Telegram. Nous r\xe9pondrons rapidement et de mani\xe8re pr\xe9cise, car nous avons tout pr\xe9vu \uD83D\uDC4C","inTelegram":"Nous sommes sur Telegram","note":"Service prioritaire <b>24h/24 et 7j/7</b>","title":"Vous n\'avez pas trouv\xe9 votre question\xa0?"},"items":[{"content":"Le r\xe9sultat de la v\xe9rification de base d\'AML Zapex comprend le pourcentage du score de risque, les sources de risque et l\'appartenance \xe0 la liste noire.<br /><br /> En outre, le r\xe9sultat du contr\xf4le peut inclure diverses informations facultatives sur l\'adresse, telles que l\'appartenance au groupe, le solde r\xe9el et le montant des fonds transf\xe9r\xe9s.<br /><br /> Le r\xe9sultat de la v\xe9rification peut \xeatre incomplet par rapport aux donn\xe9es d\xe9crites si les informations n\xe9cessaires sont manquantes.<br /><br /> Veuillez noter que pour les blockchains qui sont en mode limit\xe9, le regroupement et la valeur en pourcentage du score de risque du contr\xf4le ne sont pas disponibles. Une note de risque ne peut \xeatre fournie pour une contrepartie que si elle se rapporte \xe0 une entit\xe9.","title":"Que montre le check AML Zapex\xa0?"},{"content":"Le score de risque global (pourcentage) est la probabilit\xe9 que l\'adresse soit associ\xe9e \xe0 une activit\xe9 ill\xe9gale. <br /><br />AML Zapex trouve les connexions d\'une adresse v\xe9rifi\xe9e \xe0 d\'autres adresses de la blockchain et \xe0 des entit\xe9s de diff\xe9rentes cat\xe9gories, chacune ayant un score de risque conditionnel diff\xe9rent, et calcule le score de risque global en fonction de ces connexions. <br /><br />Le calcul du score de risque global prend en compte la gravit\xe9 du risque des connexions trouv\xe9es. Par exemple, dans le cas des connexions aux cat\xe9gories d\'entit\xe9s Mining (risque 0\xa0%) et Darknet (risque 100\xa0%), l\'impact du Darknet, en tant que cat\xe9gorie plus risqu\xe9e, sera plus \xe9lev\xe9 et le Mining aura moins de poids dans l\'\xe9valuation des risques.","title":"Que signifie le score de risque en pourcentage\xa0?"},{"content":"AML Zapex v\xe9rifie l\'adresse du portefeuille sp\xe9cifi\xe9e pour les connexions aux services de blockchain connus - entit\xe9s. AML Zapex regroupe conventionnellement ces services en groupes pr\xe9sentant diff\xe9rents niveaux de risque d\'activit\xe9 ill\xe9gale - cat\xe9gories d\'entit\xe9s.<br /><br /> Le contr\xf4le AML montre les connexions de l\'adresse v\xe9rifi\xe9e \xe0 ces cat\xe9gories d\'entit\xe9s en tant que sources de risque, avec lesquelles l\'adresse a interagi, et le pourcentage de fonds transf\xe9r\xe9s de/vers ces services.<br /><br /> Sur la base de toutes les sources de risque, un score de risque global est calcul\xe9, qui aide l\'utilisateur \xe0 prendre d\'autres d\xe9cisions concernant les actifs.","title":"Que signifient les sources de risque\xa0?"},{"content":"Une v\xe9rification d\'adresse est une analyse de toutes ses connexions avec d\'autres adresses et entit\xe9s sur les blockchains, en tenant compte des mouvements de fonds entrants et sortants.<br /><br /> Le processus de v\xe9rification d\'une transaction diff\xe8re de la v\xe9rification de l\'adresse, et le r\xe9sultat d\xe9pend de votre c\xf4t\xe9 dans la transaction. Le score de risque global est toujours li\xe9 \xe0 la contrepartie.<br /><br /> Pour v\xe9rifier une transaction, vous devez sp\xe9cifier le TxID et l\'adresse de destination de la transaction et s\xe9lectionner votre c\xf4t\xe9 dans la transaction :<br /> - Destinataire (vous avez re\xe7u un d\xe9p\xf4t sur votre portefeuille) - les adresses \xe0 partir desquelles les fonds ont \xe9t\xe9 re\xe7us sont v\xe9rifi\xe9es. Les sources de risque d\xe9crivent les services \xe0 partir desquels les exp\xe9diteurs TX ont accumul\xe9 les fonds transf\xe9r\xe9s, avec une r\xe9partition en pourcentage.<br /> - Exp\xe9diteur (vous avez effectu\xe9 un retrait de votre portefeuille) - le portefeuille qui a re\xe7u les fonds est v\xe9rifi\xe9. Les sources de risque d\xe9crivent toutes les connexions de l\'adresse du destinataire avec une r\xe9partition en pourcentage.<br /><br /> Ainsi, lors de la v\xe9rification d\'une transaction, les risques pour le destinataire sont v\xe9rifi\xe9s si vous recevez des fonds, et les risques pour l\'exp\xe9diteur si vous envoyez des fonds.","title":"Quelle est la diff\xe9rence entre une adresse et un contr\xf4le de transaction ?"},{"content":"Chaque client d\xe9termine lui-m\xeame quel pourcentage de risque est acceptable pour lui. Classiquement, le score de risque peut \xeatre divis\xe9 comme suit\xa0:\\n<br />\\n - 0 \xe0 25\xa0% est un portefeuille/une transaction propre\xa0;\\n<br />\\n - 25 \xe0 75% est le niveau de risque moyen\xa0;\\n<br />\\n - Plus de 75\xa0% d\'un tel portefeuille/transaction sont consid\xe9r\xe9s comme risqu\xe9s.\\n<br />\\nIl convient \xe9galement de pr\xeater attention aux sources de risque rouges dans l\'analyse d\xe9taill\xe9e, d\xe9crite \xe0 <a href=\\"https://AML Zapex.com/what-do-we-analyze\\"> la page\\n</a>","title":"Comment comprendre l\'\xe9valuation des risques\xa0?"},{"content":"AML Zapex prend en charge toutes les principales cha\xeenes de blocs et les jetons qu\'elles contiennent. Nous ajoutons constamment la prise en charge de nouvelles cryptomonnaies. Vous pouvez toujours consulter la liste \xe0 jour des cryptomonnaies prises en charge dans\\n<a href=\\"http://web.AML Zapex.com\\" target=\\"_blank\\">\\ntableau de bord Web\\n</a>\\n ou dans\\n<a href=\\"https://docs.AML Zapex.com/\\" target=\\"_blank\\">\\nDocumentation de l\'API\\n</a>\\n.","title":"Quelles sont les cryptomonnaies analys\xe9es par AML Zapex\xa0?"},{"content":"En v\xe9rifiant les portefeuilles des contreparties avant une transaction, vous pouvez rejeter leurs actifs si le score de risque est \xe9lev\xe9. De plus, avant de transf\xe9rer des fonds vers d\'autres services, vous pouvez v\xe9rifier l\'adresse de votre portefeuille et enregistrer le r\xe9sultat (faire une capture d\'\xe9cran). <br /><br />Si le contr\xf4le montre que vos actifs n\'avaient aucun lien avec une activit\xe9 ill\xe9gale et que le service vous a bloqu\xe9, vous pouvez fournir le r\xe9sultat enregistr\xe9 pour confirmer la puret\xe9 de vos actifs.","title":"Comment AML Zapex vous aide-t-il \xe0 vous prot\xe9ger contre le blocage\xa0?"},{"content":"Les r\xe9sultats de la v\xe9rification sont bas\xe9s sur des bases de donn\xe9es internationales, qui sont constamment mises \xe0 jour. Ainsi, une adresse qui pr\xe9sentait un risque de 0\xa0% hier peut avoir re\xe7u ou donn\xe9 l\'actif \xe0 une contrepartie risqu\xe9e aujourd\'hui. Dans ce cas, le score de risque changera. Si vous voulez \xeatre s\xfbr du r\xe9sultat et d\xe9terminer la cause du risque \xe9lev\xe9, nous pouvons effectuer une v\xe9rification d\xe9taill\xe9e pour vous. Pour ce faire, envoyez-nous un e-mail \xe0 <a href=\\"mailto:info@AML Zapex.com\\">\\ninfo@AML Zapex.com </a>","title":"Le risque est sup\xe9rieur \xe0 50\xa0%, mais je suis certain que l\'adresse est fiable. Que faire\xa0?"},{"content":"La r\xe9ponse \xe0 cette question d\xe9pend de votre mod\xe8le de risque unique. La recommandation g\xe9n\xe9rale serait d\'effectuer une v\xe9rification AML chaque fois que vous interagissez avec un portefeuille inconnu ou un contrat intelligent.","title":"\xc0 quelle fr\xe9quence les contr\xf4les sont-ils recommand\xe9s\xa0?"},{"content":"Apr\xe8s confirmation de la transaction, le solde est r\xe9approvisionn\xe9\xa0: <br /> • jusqu\'\xe0 10 minutes si le paiement a \xe9t\xe9 effectu\xe9 dans les 24 heures suivant l\'\xe9mission de la facture, <br /> • jusqu\'\xe0 25 minutes si le paiement a \xe9t\xe9 effectu\xe9 24 heures apr\xe8s l\'\xe9mission de la facture. Dans l\'ensemble, le BTC, l\'ETH, l\'USDT et le fiat sont trait\xe9s plus rapidement que les autres pi\xe8ces.","title":"\xc0 quelle vitesse le solde est-il reconstitu\xe9\xa0?"},{"content":"Si vous avez achet\xe9 des ch\xe8ques sans date d\'expiration - ils restent sur votre compte et vous pouvez les utiliser \xe0 tout moment.<br /><br /> Si vous avez achet\xe9 des ch\xe8ques avec une limite de temps, ils seront d\xe9duits de votre compte apr\xe8s la date d\'expiration.","title":"Que se passe-t-il si je n\'utilise pas tous mes ch\xe8ques chaque mois\xa0?"},{"content":"Vous pouvez acheter des ch\xe8ques suppl\xe9mentaires si n\xe9cessaire. Le nombre de contr\xf4les est toujours affich\xe9 dans vos informations utilisateur.","title":"Et si j\'ai besoin de plus de contr\xf4les\xa0?"},{"content":"AML Zapex prot\xe8ge les donn\xe9es en adh\xe9rant aux rigoureux strandards de certifications de ISO9001 et ISO27001.<br /><br />\\nNotre certification ISO9001 souligne notre engagement \xe0 produire une qualit\xe9 constante et am\xe9liorer la satisfaction de nos clients. En effet, notre certification ISO 270001 d\xe9montre notre volont\xe9 \xe0 maintenir les hauts standards de protection des informations, assurant la protection des donn\xe9es sensibles, atteignant ainsi une conformit\xe9 r\xe9glementaire.<br /><br />\\nEn savoir plus sur nos certifications <a href=\\"https://AML Zapex.com/fr/certifications\\">ici</a>.","title":"Comment AML Zapex garantit la protection des donn\xe9es"}],"title":"Questions fr\xe9quemment pos\xe9es"},"howMatch":{"button":"Nous contacter","label":"La premi\xe8re v\xe9rification est gratuite","note":"Selon nos statistiques, <b>un portefeuille sur quatre est suspect.</b><br /> D\xe9penser quelques euros sur une v\xe9rification peut vous faire \xe9conomiser des milliers de d\'euros de pertes.","perCheck":"par ch\xe8que","startsFrom":"\xc0 partir de","title":"Quel est le prix de votre tranquillit\xe9?"},"officers":{"items":{"[0]":{"label":"Co-Founder","name":"Slava Demchuk"},"[1]":{"label":"Chief Operating Officer","name":"Vasily Vidmanov"},"[2]":{"label":"Chief Commercial Officer","name":"Andrew Aleksandrov"},"[3]":{"label":"Blockchain Analyst","name":"Sid Panda"},"[4]":{"label":"Juriste/ Expert certifi\xe9 AML","name":"Niko Demchuk"},"[5]":{"label":"Legal Advisor","name":"Ganna Voievodina"},"[6]":{"label":"Business development manager","name":"Vlad Raskosov"},"[7]":{"label":"Business development manager","name":"Denys Shestak"},"[8]":{"label":"Customer support manager","name":"Nikita Raskosov"},"anmolJain":{"label":"VP","name":"Anmol Jain"},"graemeHampton":{"label":"Certified AML Specialist","name":"Graeme Hampton"},"nikoDemchuk":{"label":"Certified AML Specialist","name":"Niko Demchuk"},"sidPanda":{"label":"Blockchain Analyst","name":"Sid Panda"},"slavaDemchuk":{"label":"Co-Founder","name":"Slava Demchuk"}},"text":"Les responsables de la lutte contre le blanchiment d\'argent d\'AML Zapex vous aident \xe0 faire face aux situations difficiles et vous mettent \xe0 l\'abri d\'amendes des organismes de contr\xf4le et de blocages de transactions. Nos sp\xe9cialistes professionnels d\xe9fendront vos int\xe9r\xeats jusqu\'au tribunal si n\xe9cessaire.","title":"Notre \xe9quipe"},"partners":{"title":"Ils nous font confiance"},"prime":{"AML ZapexOnWeb":"Espace personnel","button":"Commencez \xe0 v\xe9rifier des portefeuilles et transactions","checkInTelegram":"V\xe9rifiez une adresse de portefeuille ou une transaction","description":"La plateforme AML Zapex automatise les proc\xe9dures AML / KYC et r\xe9duit les d\xe9penses li\xe9es \xe0 la conformit\xe9.","primaryButton":"Demander une d\xe9mo","secondaryButton":"Bot de chat","telegramCheck":"V\xe9rification Telegram","title":"Solution de conformit\xe9 <nobr>tout-en-un</nobr> pour les entreprises de crypto"},"reviews":{"description":"D\xe9couvrez nos services via les clients que nous avons d\xe9j\xe0 aid\xe9s.","items":[{"note":"Den • <a href=\\"https://csgo500.com\\">CSGO500","quote":"Nous utilisons AML Zapex depuis pr\xe8s de deux ans et, gr\xe2ce \xe0 eux, nous avons r\xe9ussi \xe0 identifier et \xe0 stopper des centaines de menaces. Je continuerai certainement \xe0 utiliser leurs services."},{"note":"CEO • <a href=\\"https://uniochange.com\\">Uniochange</a>","quote":"La communaut\xe9 crypto a jusqu\'\xe0 pr\xe9sente rencontr\xe9 des difficult\xe9s pour d\xe9tecter les sources de fonds suspects, mais avec AML Zapex, toutes ces difficult\xe9s ont disparu. Je recommande \xe0 tout le monde d\'utiliser ce service afin que votre activit\xe9 devienne totalement l\xe9gale."},{"note":"<a href=\\"https://alltrust.me\\">AllTrust</a>","quote":"Nous sommes tr\xe8s satisfaits d\'AML Zapex. Gr\xe2ce \xe0 l\'int\xe9gration au sein de notre plateforme, nous avons r\xe9ussi \xe0 emp\xeacher un grand nombre de transactions li\xe9es \xe0 des fonds illicites. Nous sommes certains que nous d\xe9velopperons davantage notre coop\xe9ration."},{"note":"<a href=\\"https://guarda.com\\">Guarda</a>","quote":"AML Zapex est un partenaire exceptionnel pour nous et ce depuis un certain temps d\xe9j\xe0. Leurs services sont incroyablement faciles \xe0 utiliser, fiables et surtout, offrent une tranquillit\xe9 d\'esprit suppl\xe9mentaire \xe0 nos utilisateurs. \xc0 Guarda, nous sommes ravis de poursuivre notre travail avec eux."}],"title":"Ce que nos clients disent de nous"},"services":{"description":"Nous fournissons un ensemble complet d\'options pour travailler en toute s\xe9curit\xe9 avec les crypto-monnaies","items":[{"description":"Des solutions API qui renforcent les outils de conformit\xe9 AML au sein de votre syst\xe8me actuel. Toutes les transactions sont automatiquement v\xe9rifi\xe9es pour se conformer aux exigences AML et GAFI et r\xe9duire votre exposition aux risques d\'entreprendre.","title":"Screening AML/KYT"},{"description":"Le processus de v\xe9rification automatis\xe9 et rationalis\xe9 permet \xe0 votre entreprise d\'embarquer rapidement les clients, r\xe9duisant l\'effort manuel et att\xe9nuant les risques de fraude d\'identit\xe9 et d\'activit\xe9s illicites.","title":"KYC pour les entreprises"},{"description":"Lancez votre aventure crypto avec facilit\xe9, simplicit\xe9 et confiance gr\xe2ce \xe0 notre conseil AML et KYC rationalis\xe9, assurant une conformit\xe9 fluide et une gestion efficace des risques d\xe8s le d\xe9but.","title":"Proc\xe9dures AML/KYC"},{"description":"Rationalisez l\'ouverture de comptes d\'entreprise sur CEX EMI avec notre assistance experte, assurant que votre focus reste sur la croissance des activit\xe9s dans l\'industrie de la crypto.","title":"Comptes d\'entreprise chez CEX/EMI"},{"description":"R\xe9cup\xe9rez les cryptomonnaies vol\xe9es avec les enqu\xeates blockchain expertes d\'AML Zapex, identifiant rapidement les coupables et tra\xe7ant les fonds pour une r\xe9cup\xe9ration efficace.","title":"Enqu\xeates sur la blockchain"}],"learnMore":"En savoir plus","title":"Services AML Zapex"},"stats":{"items":[{"description":"D\xe9tection du nombre de fonds risqu\xe9s","title":"+ 100 000 000 $"},{"description":"D\xe9partements des compliances qui acceptent nos proc\xe9dures AML","title":"6 500 000+"},{"description":"Verifications du fournisseur de services","title":"60.000+"}]},"whatElse":{"items":[{"button":"V\xe9rifier une adresse","description":"Nous vous indiquerons si une adresse de portefeuille figure sur les listes de sanctions. Toute interaction avec de telles adresses peut entra\xeener des amendes, un blocage ou la r\xe9vocation de votre licence.","title":"Nous v\xe9rifions que les adresses ne figurent pas sur les listes de sanctions"},{"button":"Consultation gratuite","description":"Nous vous aidons \xe0 r\xe9cup\xe9rer l\'argent qui a \xe9t\xe9 vol\xe9 dans votre portefeuille crypto. Notre sp\xe9cialiste analysera la situation et proposera une solution.","note":"Vous ne payez que pour le r\xe9sultat. Si nous ne pouvons pas vous aider, nous vous le dirons directement.","title":"Nous vous aidons \xe0 r\xe9cup\xe9rer les cryptomonnaies vol\xe9es"},{"button":"Voir la documentation","description1":"Nous pouvons vous aider \xe0 mettre en place une v\xe9rification automatique de toutes les transactions entrantes. Nous vous affecterons un programmeur d\xe9di\xe9 afin de vous aider \xe0 int\xe9grer notre API rapidement \xe0 votre service.","description2":"Vous n\'aurez plus \xe0 vous inqui\xe9ter concernant les transactions entrantes et aurez le temps de vous consacrer \xe0 votre business.","title":"Int\xe9gration via API"}],"title":"Quoi d\'autre?"},"why":{"items":[{"buttonText":"Discutons-en","description":"AML Zapex ne collecte pas de donn\xe9es sur vous ou votre entreprise. Vous restez anonyme et prot\xe9g\xe9.","description1":"AML Zapex propose une large gamme de solutions de conformit\xe9 personnalis\xe9es pour chaque client.","description2":"Nous sommes confiants dans notre capacit\xe9 \xe0 r\xe9pondre \xe0 vos exigences apr\xe8s avoir aid\xe9 plus de 300 entreprises crypto de toutes tailles dans 25 juridictions.","title":"Approche personnalis\xe9e"},{"description":"Certifi\xe9 par l\'Institut europ\xe9en de finance et de gestion.","description1":"Nous offrons KYT/Screening de portefeuille, KYC, AML, et plus pour les entreprises crypto.","description2":"La notation des risques d\'AML Zapex est bas\xe9e sur plusieurs sources de donn\xe9es, assurant que nous avons les donn\xe9es les plus fiables de l\'industrie.","description3":"Nos services et solutions conviviaux rationalisent les processus de votre entreprise, \xe9liminant la complexit\xe9 du fournisseur de conformit\xe9.","title":"Plateforme de conformit\xe9 int\xe9gr\xe9e"},{"buttonText":"Nous contacter","description":"AML Zapex comprend l\'importance d\'un support client rapide et amical, c\'est pourquoi nous sommes toujours l\xe0 pour nos clients. Support 24/7.","description1":"Nous sommes d\'astreinte 24 heures sur 24 et 7 jours sur 7, de sorte que tout probl\xe8me peut \xeatre r\xe9solu rapidement et par le biais d\'un chat en direct sur Telegram.","description2":"Bien que disponibles, nous sommes des \xeatres humains et il se peut donc que nous ne r\xe9agissions pas aussi rapidement la nuit que le jour ✌️","note":"Une r\xe9ponse pendant la nuit peut prendre un peu plus de temps","title":"Support Client"},{"description":"Nous avons \xe9vit\xe9 qu\'environ {{value}} ne soient bloqu\xe9s sur les plateformes d\'\xe9change","title":"Exp\xe9rience"}],"title":"Pourquoi AML Zapex ?"},"works":{"description":"Pr\xe9sentation vid\xe9o","title":"Comment cela fonctionne-t-il ?"},"yearStats":{"label":"En trois ans, AML Zapex a \xe9t\xe9 utilis\xe9 par","text":"entreprises et plateformes d\'\xe9changes"}},"menuProducts":{"AML ZapexPro":{"description":"Traque la source et les destinations des transactions","label":"AML Zapex Pro"},"amlTraining":{"description":"Programmes de formation sp\xe9cialis\xe9s pour l\'industrie des crypto-monnaies","label":"Formation AML"},"chatBot":{"description":"V\xe9rification instantan\xe9e par AML, le moyen le plus facile pour essayer nos produits","label":"AML Chat Bot"},"consulting":{"description":"Aide pour le business de la crypto-monnaie avec les proc\xe9dures AML, entra\xeenement et placement des comptes bancaires","label":"Consulting"},"dynamic":{"description":"Utilisation de nos adresses interm\xe9diaires afin d\'\xe9viter tout risque","label":"Adresses marchandes dynamiques"},"forBusiness":"Pour les entreprises","forPersonalUse":"Pour usage personnel","investigation":{"description":"Assistance qui permet d’aider en cas de crypto-monnaie vol\xe9e","label":"Investigation"},"kyc":{"description":"Une v\xe9rification des usagers plus rapide, s\xe9curis\xe9e, automatique et efficace","label":"KYC"},"kyt":{"description":"Contr\xf4le automatiquement toutes les transactions et les portefeuilles \xe0 travers la API","label":"KYT"},"mobileApp":{"description":"Les v\xe9rifications AML sont faciles d’utilisation sur applications mobile","label":"Application mobile"}},"notFindQuestion":{"answer":"Nous vous r\xe9pondrons dans les 30 secondes","description":"Nous contacter via Messenger. Nous sommes en contact <b> 24 heures sur 24</b>, 7 jours sur 7, afin de pouvoir r\xe9soudre tout probl\xe8me rapidement et sous forme de communication en direct.","inTelegram":"Nous sommes sur Telegram","note":"Nous sommes disponibles <b>24 heures sur 24, 7 jours sur 7</b>, mais nous ne pouvons pas toujours r\xe9pondre rapidement la nuit","onMessenger":"Nous sommes sur Messanger","title":"Votre question ne figure pas dans la liste ?"},"partners":{"title":"Plus de 300 clients et partenaires"},"pro":{"experience":{"items":{"consistent":{"description":"Assure que votre organisation soit conforme aux r\xe9glementations concernant la crypto-monnaie pour votre juridiction avec de s\xe9rieuses activit\xe9s on-chain. Avec comme appui les captures d\'\xe9crans pour surprendre les comptes ou les transactions suspicieuses.","title":"Une conformit\xe9 constante"},"efficient":{"description":"<span>D\xe9couvrez. Enqu\xeatez. Passez \xe0 l\'action.</span> Nos outils d\'investigation vous aide \xe0 identifier la source et la destination des transactions de la crypto—monnaie. Utiliser notre technologie avant-gardiste afin de freiner les activit\xe9s criminelles et ainsi diriger les investissements plus rapidement et avec pr\xe9cision.","title":"Investigations efficaces"}},"title":"Essayer la blockchain de qualit\xe9 sup\xe9rieure - les meilleures donn\xe9es abordables"},"faq":{"info":{"answer":"Nous r\xe9pondons dans les 30 secondes","description":"B\xe9n\xe9ficiez d\'une assistance rapide et efficace 24h/24 et 7j/7 Contactez-nous sur Telegram pour toute question ou assistance. Pas de robots, juste une assistance humaine.","inTelegram":"Nous sommes sur Telegram","note":"Une r\xe9ponse pendant la nuit peut prendre un peu plus de temps.","title":"Votre question ne figure pas dans la liste\xa0?"},"title":"Questions fr\xe9quentes"},"features":{"items":[{"description":"AML Zapex Pro poss\xe8de les meilleures donn\xe9es disponibles. Nous scannons les bourses et les transactions pour trouver les failles de certaines cryptos illicites utilis\xe9es pour des activit\xe9s criminelles ou douteuses incluant le march\xe9 du Darknet, les scams, les ransomware, et mixers.","title":"Une accessibilit\xe9 aux donn\xe9es exceptionnelle"},{"description":"AML Zapex PRO transforme la complexit\xe9 de l\'analyse de la blockchain en la rendant facile d\'acc\xe8s.","title":"Options de recherche simples"},{"description":"AML Zapex Pro connecte les transactions de la crypto-monnaie au sein de r\xe9elles entit\xe9s.","title":"Connecter les transactions virtuelles dans de r\xe9elles entit\xe9s dans le monde"},{"description":"l\'interface simple d\'AML Zapex Pro est facile d\'acc\xe8s pour n\'importe qui. Notre processus d\'organisation vous permet de suivre les fonds et de voir les comptes \xe0 haut risque ainsi que les transactions.","title":"Am\xe9liorer l\'accessibilit\xe9"},{"description":"Obtenez des r\xe9sultats avec AML Zapex Pro, qui suivent les fonds \xe0 travers la blockchain. Identifier les adresses on-ramp et off-ramp et swap activity pour d\xe9tecter les actions cach\xe9es.","title":"Des chemins de crypto clairs"},{"description":"Avec AML Zapex Pro, vous pouvez \xe9tablir une narration solide qui vous montre le mouvement des fonds de crypto. Exporter et visualiser les donn\xe9es pour cr\xe9er une image compl\xe8te d\'activit\xe9 criminelle.","title":"Des affaires plus convaincante"}],"title":"Caract\xe9ristiques AML Zapex Pro"},"hero":{"button":"Obtenez AML Zapex Pro","description":"AML Zapex Pro est un outil blockchain analytique qui fortifie les investigateurs et les \xe9quipes de conformit\xe9 avec les meilleurs donn\xe9es de l\'industrie.","info":{"compliance":{"description":"Optimiser les processus de votre KYT et AML pour maintenir la conformit\xe9.","title":"Compliance"},"investigations":{"description":"R\xe9sout des affaires rapidement avec un suivi on-chain efficace. Mettez un stop \xe0 la crypto-criminalit\xe9.","title":"Investigations"}},"title":"D\xe9m\xealer le web de la criminalit\xe9 on-chain"},"secure":{"buttonText":"Obtenez AML Zapex Pro","title":"S\xe9curisez votre cryptomonnaie gr\xe2ce au filtrage des risques li\xe9s aux portefeuilles et aux transactions"},"sets":{"buttonText":"Obtenez AML Zapex Pro","items":[{"list":["Des projets de crypto l\xe9gitimes","Sanctions et listes de surveillance","En apprendre sur la ransomware","Terrorisme et argent Groupes Laundering"],"title":"Des donn\xe9es perspicaces"},{"list":["Donn\xe9es claires","Une exp\xe9rience facile","Commencer simplement"],"title":"Facile d\'utilisation"},{"list":["\xc9valuer les risques","Signalement d\'activit\xe9 criminelle","Encourager la collaboration"],"title":"S\xfbret\xe9 et s\xe9curit\xe9"}],"title":"Qu\'est-ce qui<br /> diff\xe9rencie AML Zapex Pro ?"},"superior":{"items":{"analyzeRisk":{"description":"V\xe9rifier les comptes contre les listes de surveillance critiques.","title":"Analyser les risques"},"continuousTracking":{"description":"Diriger le mouvement des fonds en temps r\xe9el.","title":"Un suivi en continu"},"gatherEvidence":{"description":"Utiliser nos propres donn\xe9es pour renforcer votre dossier d\'enqu\xeate.","title":"Rassembler les preuves"},"reliableData":{"description":"Acc\xe9der aux informations pour les entit\xe9s pr\xe9sentant diff\xe9rents niveaux de risques.","title":"Des donn\xe9es fiables"},"try":{"buttonText":"Activer maintenant !","title":"D\xe9bloquer le potentiel complet de notre solution"},"userFriendlyDashboard":{"description":"Naviguer facilement et visualiser les donn\xe9es d\xe9cisives.","title":"Des tableaux de bord facile d\'utilisation"}},"title":"Design sup\xe9rieur et fonctionnalit\xe9s"}},"saleBanner":{"text1":"B\xe9n\xe9ficiez d\'une r\xe9duction de 15% sur tous les plans","text2":"Jusqu\'au 30 d\xe9cembre 2023"},"seo":{"cryptoChecker":{"description":"Outil de filtrage LCB pour entreprises crypto et utilisateurs. D\xe9tectez avec AML Zapex les liens entre Bitcoin, altcoins et activit\xe9s illicites, et s\xe9curisez vos portefeuilles gr\xe2ce \xe0 une \xe9valuation avanc\xe9e des risques.","title":"V\xe9rificateur LCB pour Cryptomonnaies - Solution Compl\xe8te de Conformit\xe9 Crypto | AML Zapex"},"cryptoCheckerLand":{"description":"Outil de d\xe9pistage LCB-FT pour les entreprises de crypto-monnaies et les utilisateurs finaux. AML Zapex montre comment le bitcoin et les altcoins sont li\xe9s \xe0 des activit\xe9s illicites.","title":"LCB-FT crypto v\xe9rification - une solution compl\xe8te pour la v\xe9rification AML"},"cryptoComplianceConsulting":{"description":"Conseil Expert en Conformit\xe9 AML pour les Entreprises Crypto : Proc\xe9dures AML/KYC, Surveillance des Transactions et Accompagnement Juridique","title":"Services de Conseil en Conformit\xe9 LCB et Accompagnement Juridique pour les Entreprises de Cryptomonnaies"},"home":{"description":"AML Zapex fournit des solutions avanc\xe9es de conformit\xe9 LCB FT pour les entreprises de cryptographie. Utilisez notre AML Zapex pour des v\xe9rifications approfondies en mati\xe8re de lutte contre le blanchiment d\'argent","title":"LCB (Lutte Contre Le Blanchiment D’Argent) Solution de Conformit\xe9 Pour Les Crypto"},"kyc":{"description":"Plateforme Rapide et S\xe9curis\xe9e pour la V\xe9rification KYC offrant des Solutions Automatis\xe9es pour KYC, AML, Identification et V\xe9rification Fiscale. Simplifiez l\'Int\xe9gration des Clients \xe0 l\'\xc9chelle Mondiale","title":"Fournisseur de Services KYC/LCB pour la Conformit\xe9 des Entreprises | V\xe9rification KYC Automatis\xe9e"},"kyt":{"description":"Automatisez l\'\xe9valuation des risques pour les transactions cryptographiques entrantes avec l\'API AML d\'AML Zapex. Assurez la conformit\xe9 aux exigences KYC et AML gr\xe2ce \xe0 nos solutions API compl\xe8tes de lutte contre le blanchiment d\'argent.","title":"API de surveillance des transactions en crypto | AML Zapex"},"pro":{"description":"AML Zapex Pro offre des analyses blockchain avanc\xe9es pour surveiller les transactions, \xe9valuer les risques et garantir la conformit\xe9.","title":"AML Zapex Pro: Outil puissant d\'analyse blockchain pour la conformit\xe9 LCB-FT"},"reclaimCrypto":{"description":"Notre \xe9quipe excelle dans la r\xe9cup\xe9ration de cryptomonnaies vol\xe9es gr\xe2ce \xe0 des enqu\xeates approfondies et des services de r\xe9cup\xe9ration d\'actifs, y compris le blocage sur les \xe9changes et les portefeuilles.","title":"R\xe9cup\xe9ration de Crypto Vol\xe9es | Services de R\xe9cup\xe9ration et Protection avec AML Zapex"},"training":{"description":"Inscrivez-vous \xe0 une formation experte en AML, sp\xe9cialement con\xe7ue pour l\'industrie de la crypto. Obtenez votre certification en lutte contre le blanchiment d\'argent et prot\xe9gez votre entreprise contre les crimes financiers et les risques r\xe9glementaires gr\xe2ce aux cours complets de conformit\xe9 d\'AML Zapex.","title":"Formation et Certification LCB pour les Entreprises Crypto | Cours Lutte Contre le Blanchiment"}},"training":{"benefits":{"description":"Am\xe9liorez votre activit\xe9 Crypto avec la formation AML Zapex :","items":{"1":{"title":"Am\xe9liorer l\'efficacit\xe9 op\xe9rationnelle"},"2":{"title":"Renforcer la r\xe9putation"},"3":{"title":"Garder une longueur d\'avance sur les risques r\xe9glementaires"}},"title":"Avantages de la formation"},"consult":{"description":"Remplir le formulaire de demande d\'inscription","formTitle":"Inscrivez-vous maintenant - Ma\xeetrisez l\'analyse AML et Blockchain !","title":"Pr\xeat \xe0 commencer ?"},"courses":{"buttonText":"S\'inscrire maintenant","item1":{"title":"Formation en direct avec un sp\xe9cialiste"},"item2":{"title":"Certificat d\'ach\xe8vement num\xe9rique"},"item3":{"title":"\xc9tudes de cas et discussions"},"title":"Les cours comprennent"},"faq":{"description":"Consultez nos FAQ pour en savoir plus sur la n\xe9cessit\xe9, la fr\xe9quence et les aspects li\xe9s \xe0 la certification de notre formation sur la lutte contre le blanchiment d\'argent.","items":[{"content":"Oui, de nombreuses juridictions exigent une formation \xe0 la lutte contre le blanchiment d\'argent pour les soci\xe9t\xe9s de crypto-monnaies agr\xe9\xe9es ou non. Toutefois, les exigences sp\xe9cifiques peuvent varier en fonction du pays ou de la r\xe9gion.","title":"La formation \xe0 la lutte contre le blanchiment d\'argent est-elle obligatoire pour toutes les entreprises du secteur des cryptomonnaies ?"},{"content":"La formation \xe0 la lutte contre le blanchiment d\'argent doit \xeatre organis\xe9e r\xe9guli\xe8rement afin de s\'assurer que les employ\xe9s sont au courant des derniers d\xe9veloppements. La fr\xe9quence peut varier en fonction des normes du secteur, des exigences r\xe9glementaires et de l\'\xe9valuation des risques de l\'entreprise.","title":"\xc0 quelle fr\xe9quence la formation sur le blanchiment d\'argent doit-elle \xeatre organis\xe9e ?"},{"content":"Oui, il existe diff\xe9rents programmes de certification pour les personnes sp\xe9cialis\xe9es dans la lutte contre le blanchiment d\'argent. Ces certifications valident les connaissances et l\'expertise des professionnels dans ce domaine. En tant que professionnels agr\xe9\xe9s dans ce domaine, AML Zapex fournit aux participants une certification \xe0 l\'issue de la formation AML Zapex, ce qui renforce encore leurs r\xe9f\xe9rences en mati\xe8re de conformit\xe9 AML.","title":"Existe-t-il des programmes de certification pour les professionnels de la lutte contre le blanchiment d\'argent ?"},{"content":"Les associations sectorielles, les organismes de r\xe9glementation et les organismes de formation sp\xe9cialis\xe9s sont \xe0 m\xeame de trouver des prestataires de formation r\xe9put\xe9s en mati\xe8re de lutte contre le blanchiment d\'argent. Il est essentiel de choisir un prestataire ayant de solides ant\xe9c\xe9dents et une grande expertise dans le domaine de la lutte contre le blanchiment d\'argent.","title":"O\xf9 les entreprises peuvent-elles trouver des prestataires de formation r\xe9put\xe9s en mati\xe8re de lutte contre le blanchiment d\'argent ?"}],"title":"Vous avez des questions ?"},"form":{"thankYou":{"description":"Nous sommes impatients de vous aider \xe0 am\xe9liorer l\'efficacit\xe9 op\xe9rationnelle, \xe0 renforcer la r\xe9putation et \xe0 garder une longueur d\'avance sur les risques r\xe9glementaires dans votre activit\xe9 de crypto-monnaie.","title":"Merci d\'avoir choisi AML Zapex pour vos besoins en formation AML."}},"main":{"buttonText":"Commencer","description":"Donner \xe0 vos \xe9quipes les moyens de ma\xeetriser l\'\xe9cosyst\xe8me de la conformit\xe9 des cryptomonnaies","subtitle":"Formation et certification","title":"Formation \xe0 la conformit\xe9 AML des crypto-monnaies et \xe0 l\'analyse de la blockchain "},"trainings":{"blockchainEntries":[{"title":"Analyse de la blockchain"},{"title":"L\'histoire"},{"title":"Comment cela fonctionne"},{"title":"Score de risque"},{"title":"Filtrage des transactions"},{"title":"Filtrage des portefeuilles"},{"title":"Enqu\xeate sur la cryptographie"},{"title":"Les d\xe9fis de l\'analyse des cha\xeenes de blocs"},{"title":"Les acteurs du march\xe9"},{"title":"R\xe9glementation"},{"title":"Cas d\'utilisation"}],"course1":{"buttonText":"Obtenir une certification","description1":"Cette formation sp\xe9cialis\xe9e au niveau de l\'industrie fournit des sujets de base sur la lutte contre le blanchiment d\'argent, \xe9labor\xe9s de mani\xe8re experte pour \xeatre concis et facilement compr\xe9hensibles. La certification offre une bonne vue d\'ensemble aux entreprises de crypto-monnaies qui commencent leur voyage dans le monde de la crypto-monnaie.","description2":"Apr\xe8s la formation, vous serez en mesure de comprendre ce qu\'est le blanchiment d\'argent et d\'autres crimes financiers, de saisir les principales exigences en mati\xe8re de lutte contre le blanchiment d\'argent, de savoir comment mettre en place des processus internes de lutte contre le blanchiment d\'argent, de conna\xeetre le risque de blanchiment d\'argent dans l\'industrie des cryptomonnaies et plus encore.","duration":"3,5 heures","entryTitle":"Le module de formation comprend les chapitres suivants :","title":"Formation et certification sur les principes fondamentaux de la lutte contre le blanchiment d\'argent pour les entreprises de crypto-monnaies"},"course2":{"buttonText":"Obtenir une certification","description":"Cette formation &amp; certification est con\xe7ue sur mesure par nos experts pour ceux qui sont d\xe9j\xe0 familiers avec les crypto-monnaies et qui ont des connaissances de base en AML, mais qui veulent \xe9largir leur expertise et leur compr\xe9hension en mati\xe8re d\'analyse de la blockchain.","duration":"3 heures","entryTitle":"Le module de formation comprend les chapitres suivants :","title":"Formation et certification \xe0 la ma\xeetrise de l\'analyse de la blockchain"},"fundamentalsEntries":[{"description":"Comprendre les concepts, les techniques et les indicateurs des activit\xe9s de blanchiment d\'argent et de financement du terrorisme.","title":"Blanchiment d\'argent et financement du terrorisme"},{"description":"Familiariser les participants avec les normes, r\xe9glementations et obligations l\xe9gales mondiales en mati\xe8re de lutte contre le blanchiment d\'argent sp\xe9cifiques \xe0 l\'industrie de la cryptographie.","title":"Normes et cadre juridique en mati\xe8re de lutte contre le blanchiment d\'argent"},{"description":"Identifier les risques inh\xe9rents aux cryptomonnaies, tels que l\'anonymat, les transactions transfrontali\xe8res et l\'utilisation d\'actifs num\xe9riques pour des activit\xe9s illicites.","title":"Risques de blanchiment d\'argent dans l\'industrie de la cryptographie"},{"description":"Explorer les r\xf4les et les responsabilit\xe9s des diff\xe9rentes parties prenantes dans le cadre de la lutte contre le blanchiment d\'argent, notamment la direction, les responsables de la conformit\xe9 et les auditeurs internes.","title":"Trois lignes de d\xe9fense"},{"description":"Fournir des directives et des meilleures pratiques pour la mise en œuvre de proc\xe9dures de lutte contre le blanchiment d\'argent efficaces au sein des entreprises de cryptographie, y compris la due diligence \xe0 la client\xe8le (CDD), la surveillance des transactions et le signalement des activit\xe9s suspectes.","title":"Proc\xe9dures AML"},{"description":"Comprendre les exigences sp\xe9cifiques en mati\xe8re de lutte contre le blanchiment d\'argent impos\xe9es par les autorit\xe9s r\xe9glementaires, telles que la tenue de registres, les obligations de d\xe9claration et les m\xe9thodologies d\'\xe9valuation des risques.","title":"Principales exigences AML"},{"description":"Pr\xe9sentation aux participants des outils et techniques d\'analyse de la blockchain pour surveiller et analyser les transactions sur la blockchain afin de d\xe9tecter les activit\xe9s suspectes.","title":"Analyse de la blockchain"},{"description":"Sensibiliser les participants aux r\xe9gimes de sanctions internationaux et \xe0 l\'importance de filtrer les transactions et les entit\xe9s par rapport \xe0 des listes sanctionn\xe9es.","title":"Sanctions"},{"description":"Tenir les participants inform\xe9s des derni\xe8res tendances, tactiques et m\xe9thodes utilis\xe9es par les blanchisseurs d\'argent et les terroristes afin d\'adapter les mesures de lutte contre le blanchiment d\'argent en cons\xe9quence.","title":"Techniques, m\xe9thodes et tendances dominantes en mati\xe8re de blanchiment d\'argent et de financement du terrorisme\xa0:"},{"description":"Travailler sur des t\xe2ches pratiques, permettant aux participants d\'appliquer leurs connaissances et leurs comp\xe9tences en mati\xe8re de r\xe9solution de probl\xe8mes.","title":"Etudes de cas"}],"seeAllProgram":"Voir tous les programmes","showLess":"Montrer moins","title":"Formations et certifications professionnelles"},"why":{"buttonText":"S\'inscrire pour plus de d\xe9tails","description":"Dans le monde en constante \xe9volution des crypto-monnaies, prot\xe9gez votre entreprise contre les d\xe9lits financiers, les sanctions r\xe9glementaires et les atteintes \xe0 la r\xe9putation en ma\xeetrisant l\'art et la science de la conformit\xe9 AML.","title":"Pourquoi choisir la formation AML d\'AML Zapex ?"}},"trustedMembers":{"title":"Nous sommes membres de confiance de"},"wasCopiedToClipboard":"a \xe9t\xe9 copi\xe9 dans le presse-papiers","why":{"block1":{"buttonText":"Discutons-en","description1":"AML Zapex propose une large gamme de solutions de conformit\xe9 personnalis\xe9es pour chaque client","description2":"Nous sommes confiants dans notre capacit\xe9 \xe0 r\xe9pondre \xe0 vos exigences apr\xe8s avoir aid\xe9 plus de 300 entreprises crypto de toutes tailles dans 25 juridictions","title":"Approche personnalis\xe9e"},"block2":{"description1":"Nous offrons KYT/Screening de portefeuille, KYC, AML, et plus pour les entreprises crypto","description2":"La notation des risques d\'AML Zapex est bas\xe9e sur plusieurs sources de donn\xe9es, assurant que nous avons les donn\xe9es les plus fiables de l\'industrie","description3":"Nos services et solutions conviviaux rationalisent les processus de votre entreprise, \xe9liminant la complexit\xe9 du fournisseur de conformit\xe9","title":"Plateforme de conformit\xe9 int\xe9gr\xe9e"},"block3":{"buttonText":"Nous contacter","description":"AML Zapex comprend l\'importance d\'un support client rapide et amical, c\'est pourquoi nous sommes toujours l\xe0 pour nos clients. Support 24/7","note":"Une r\xe9ponse pendant la nuit peut prendre un peu plus de temps","title":"Support Client"},"title":"Pourquoi AML Zapex ?"}}}'),
                ea = JSON.parse('{"translation":{"aboutUs":{"culture":{"description":"Wir glauben, dass jeglicher Erfolg bei AML Zapex auf zwei Gr\xfcnde zur\xfcckzuf\xfchren ist: Unsere Mitarbeiter und die Unternehmenskultur.","items":[{"button":"AML Zapex jetzt ausprobieren","description1":"Unsere Mission besteht darin, einen vertrauensw\xfcrdigen und transparenten Kryptow\xe4hrungsmarkt zu etablieren und die M\xf6glichkeit zum Schutz von Reputation und Assets f\xfcr alle bereitzustellen.","title":"Unsere Mission"},{"button":"Werde Teil des Teams","description":"Heute arbeitet ein Team von mehr als {{specialistsCount}} Spezialisten in vier verschiedenen B\xfcros (Kyiv, London, G\xf6teborg und Hongkong) an der Erstellung und Entwicklung des Dienstes.","title":"Personen"},{"button":"Mehr \xfcber das Projekt","description":"Unser Algorithmus wird st\xe4ndig verbessert und analysiert mehr als 10.000 Open-Sources sowie <b>2.500</b> Spam-Adressen in Echtzeit.","title":"Technologien"}],"title":"Unsere Kultur"},"experts":{"title":"Unsere Experten"},"main":{"description":"Im Jahr 2019 von einem Team aus RegTech-Spezialisten gegr\xfcndet, bietet unsere Plattform Online-Bewertungen von Kryptoadressen und Transaktionen gem\xe4\xdf den internationalen FATF-Empfehlungen"},"products":{"items":[{"button":"Safe3 jetzt ausprobieren","description":"Eine dezentralisierte Web 3.0-Wallet mit einem integrierten AML-Modul - die erste ihrer Art. Eine Anwendung f\xfcr s\xe4mtliche Kryptow\xe4hrungen, die durch Transparenz und Sicherheit \xfcberzeugt."},{"button":"Mehr \xfcber PureFi erfahren","description":"Das PureFi-Protokoll erm\xf6glicht es Dapps, lokale und globale Vorschriften vollst\xe4ndig einzuhalten und gleichzeitig die Dezentralisierung und Anonymit\xe4t der Nutzer zu wahren.\\n\\nAML Zapex wurde in Zusammenarbeit mit der Hacken Foundation entwickelt, um eine vollst\xe4ndige L\xf6sung f\xfcr die Analyse von Kryptow\xe4hrungen und AML/KYC-Verfahren f\xfcr die Web3-Infrastruktur zu bieten."}],"title":"Andere Produkte von uns"}},"analyze":{"items":{"green":{"bridge":{"description":"Einrichtungen, die die \xdcbertragung von Assets \xfcber verschiedene Blockchains sicherstellen. Diese Verbindungen erm\xf6glichen es Ihnen, Assets zu bewegen, ohne sie zu handeln, was Bridges von dezentralen Exchanges unterscheidet.","title":"Bridge"},"exchange":{"description":"Die Organisation erm\xf6glicht Benutzern den Kauf, Verkauf und Handel mit Kryptow\xe4hrungen mit Handelslizenzen, die die folgenden Aspekte der Dienstleistungen beinhalten: <br /> — Depot-, Makler- oder andere verwandte Finanzdienstleistungen, die Exchange-Dienste anbieten, bei denen die Teilnehmer mit einer zentralen Partei interagieren. <br /><br />Und beinhaltet nicht: <br /> — Lizenzen f\xfcr unspezifische Finanzdienstleistungen und Rechtssysteme, die in der FATF-Liste der nicht kooperierenden L\xe4nder aufgef\xfchrt sind. <br /><br />Sie stellen die wichtigste und am h\xe4ufigsten genutzte Kategorie von Unternehmen in der Kryptow\xe4hrungsbranche dar und machen 90% aller \xfcber diese Dienste \xfcberwiesenen Gelder aus.","title":"Exchange"},"iCO":{"description":"Eine Organisation, die ihr Projekt per Crowdfunding finanziert, indem sie ihre neu gepr\xe4gte Kryptow\xe4hrung an Investoren im Austausch gegen Fiat-W\xe4hrung oder g\xe4ngigere Kryptow\xe4hrungen wie Bitcoin und Ether verkauft.<br /><br /> Es gibt viele legitime Beispiele f\xfcr solche Angebote, aber auch viele F\xe4lle, in denen Angreifer \xfcber einen ICO Gelder sammeln, diese dann veruntreuen und verschwinden.","title":"ICO"},"marketplace":{"description":"Coins, die zur Bezahlung von legitimen Aktivit\xe4ten verwendet werden.","title":"Marketplace"},"merchantServices":{"description":"Eine Organisation, die es Unternehmen erm\xf6glicht, Zahlungen von ihren Kunden anzunehmen, auch bekannt als Zahlungsgateways oder Zahlungsabwickler.<br /><br /> Sie erleichtert h\xe4ufig die Umrechnung in die lokale Fiat-W\xe4hrung und die \xdcberweisung von Geldern auf das Bankkonto des H\xe4ndlers.","title":"Merchant Services"},"miner":{"description":"Coins, die von Minern generiert wurden und sich noch nicht in Umlauf befinden","title":"Miner"},"nFTPlatform":{"description":"Protokolle zur Ausgabe, zum Handel und zum Verkauf von NFTs. Obwohl sie Smart-Contracts oder dezentralen Exchanges \xe4hneln, werden sie nach ihrer Hauptfunktion klassifiziert.","title":"NFT Platform"},"nFTPlatformCollection":{"description":"Sammlungen von NFTs auf Plattformen, die darauf ausgelegt sind, diese auszugeben, zu handeln und zu verkaufen. Sie werden nach ihrem wahren Zweck klassifiziert, trotz der \xc4hnlichkeit mit Smart-Contracts oder dezentralen Exchanges.","title":"NFT Platform Collection"},"other":{"description":"Coins, die durch Airdrops, Token-Verk\xe4ufe oder andere Methoden erhalten wurden.","title":"Other"},"p2PExchange":{"description":"Die Organisation ist lizenziert, Gesch\xe4fte im Zusammenhang mit der Bereitstellung von Kryptow\xe4hrungsaustauschdiensten zu betreiben, bei denen die Teilnehmer ohne Vermittler direkt miteinander austauschen. <br /><br />Dies schlie\xdft Lizenzen f\xfcr unspezifische Finanzdienstleistungen und L\xe4nder, die auf der Liste der nicht kooperativen FATF-L\xe4nder stehen, nicht mit ein.","title":"P2P Exchange"},"paymentProcessor":{"description":"Coins, die mit Zahlungsdiensten verbunden sind.","title":"Payment Management"},"seizedAssets":{"description":"Von Beh\xf6rden beschlagnahmte Krypto-Assets.","title":"Seized Assets"},"wallet":{"description":"Eine Online-Geldb\xf6rse ist ein Dienst zur Speicherung und Transaktion von Kryptow\xe4hrungen. Custodial Wallets sind eine Art von Online-Wallets, bei denen der Dienst die privaten Schl\xfcssel des Nutzers speichert, was zu potenziellen Betrugsrisiken oder unzureichender Sicherheit f\xfchren kann, aber im Allgemeinen k\xf6nnen seri\xf6se Anbieter eine bessere Sicherheit bieten als unerfahrene Nutzer selbst.","title":"Wallet"}},"red":{"childExploitation":{"description":"Organisationen krimineller Natur, die in die Ausbeutung von Kindern involviert sind.","title":"Child Exploitation"},"darkMarket":{"description":"Coins im Zusammenhang mit illegalen Aktivit\xe4ten.","title":"Dark Market"},"darkService":{"description":"Coins im Zusammenhang mit Kindesmissbrauch, Terrorismusfinanzierung oder Drogenhandel.","title":"Dark Service"},"enforcementAction":{"description":"Eine juristische Person, die sich einer gerichtlichen Untersuchung durch die Beh\xf6rden unterzieht.","title":"Enforcement action"},"fraudShop":{"description":"Ein Unternehmen, das verschiedene Arten von Daten verkauft, darunter pers\xf6nliche Informationen, Kreditkartendaten und gestohlene Konten.<br /><br /> Betr\xfcgerische Transaktionen unterscheiden sich typischerweise von Darknet-M\xe4rkten durch ihr Verhalten, z. B. st\xe4ndige Einzahlungen und keine eingehenden Kundentransaktionen.","title":"Fraud Shop"},"fraudulentExchange":{"description":"Krypto-Exchanges, die an Exit-Betr\xfcgereien oder illegalem Verhalten beteiligt sind oder deren Gelder von Beh\xf6rden beschlagnahmt wurden.","title":"Fraudulent Exchange"},"gambling":{"description":"Coins, die mit nicht lizenzierten Online-Gl\xfccksspielen verbunden sind.","title":"Gambling"},"highRiskJurisdiction":{"description":"Eine Gerichtsbarkeit, die in der Liste der L\xe4nder aufgef\xfchrt ist, die nicht mit der FATF zusammenarbeiten, weist umfangreiche b\xf6swillige Kryptow\xe4hrungsaktivit\xe4ten auf oder verf\xfcgt nicht \xfcber einen entwickelten regulatorischen Rahmen. <br /><br />Darunter L\xe4nder wie der Iran, Venezuela, Albanien und die Demokratische Volksrepublik Korea, auch bekannt als Nordkorea.","title":"High-Risk Jurisdiction\\n"},"illegalService":{"description":"Coins, die mit illegalen Aktivit\xe4ten in Verbindung gebracht wurden.","title":"Illegal Service"},"illicitActorOrganization":{"description":"Eine Organisation oder Einzelperson, die direkt oder indirekt an verschiedenen Formen illegaler Aktivit\xe4ten beteiligt ist. <br /><br />Diese wird oft mit riskanten Themen wie Darknet-M\xe4rkten, betr\xfcgerischen Transaktionen, extremistischer Finanzierung und Hacking in Verbindung gebracht.","title":"Illicit Actor/Organization"},"malware":{"description":"Adressen im Zusammenhang mit Malware, einschlie\xdflich Kryptojackern, die von Hostcomputern zum Mining verwendet werden. Andere Arten von Malware umfassen Clipper, Botnets, Trojaner und DDoS-Kampagnen.","title":"Malware"},"mixer":{"description":"Coins werden durch einen Mixer geleitet, um die R\xfcckverfolgung zu erschweren oder unm\xf6glich zu machen. Mixer werden haupts\xe4chlich zur Geldw\xe4sche eingesetzt.","title":"Mixer"},"onlinePharmacy":{"description":"Organisationen, die sich auf den illegalen Verkauf von nicht zugelassenen oder verschreibungspflichtigen Medikamenten spezialisiert haben. Sie sind mit Darknet-M\xe4rkten vergleichbar, k\xf6nnen jedoch sowohl im Dark Web als auch legal operieren, was Anlass zu einer separaten Klassifizierung gibt.","title":"Online Pharmacy"},"ransom":{"description":"Coins, die durch Erpressung oder Zwang erlangt wurden.","title":"Ransom"},"sanctions":{"description":"Unternehmen, die Sanktionen unterliegen.","title":"Sanctions"},"scam":{"description":"Durch Betrug erlangte Coins.","title":"Scam"},"specialMeasures":{"description":"Organisationen oder Adressen, bei denen laut FinCEN ein hohes Geldw\xe4scherisiko besteht. Zu den Gegenma\xdfnahmen geh\xf6ren die F\xfchrung von Aufzeichnungen, Meldepflichten sowie Einschr\xe4nkungen bei Geldtransfers und Kontof\xfchrung.<br /><br /> Der Geltungsbereich kann sich bei der Umsetzung auf \xe4hnliche Stellen in anderen L\xe4ndern oder Gerichtsbarkeiten erstrecken.","title":"Special Measures"},"stolenCoins":{"description":"Coins, die durch das Hijacking der Kryptos eines anderen erlangt wurden.","title":"Stolen Coins\\n"},"terrorismFinancing":{"description":"Unternehmen, die mit der Finanzierung des Terrorismus in Verbindung stehen.","title":"Terrorism Financing"}},"yellow":{"aTM":{"description":"Coins, die \xfcber einen Betreiber eines Kryptow\xe4hrungs-Geldautomaten erworben wurden.","title":"ATM"},"dEX":{"description":"Eine Blockchain-Anwendung, die das Traden mit Kryptow\xe4hrungen und Token durch automatisierte Smart-Contracts erleichtert. <br /><br />Transaktionen auf der dezentralisierten Plattform sind Peer-to-Peer und haben keine dritte Partei oder zentrale Autorit\xe4t au\xdfer dem Smart-Contract, der die Bedingungen der Transaktion ausf\xfchrt, was sie zu einem beliebten Geldw\xe4scheinstrument f\xfcr b\xf6swillige Akteure macht.","title":"DEX"},"exchangeHighRisk":{"description":"Ein Unternehmen wird aufgrund der folgenden Kriterien mit einem hohen Risiko behaftet: <br /> <br /> Kein KYC: ben\xf6tigt absolut keine Kundeninformationen, bevor eine Einzahlung/Auszahlung zul\xe4ssig ist, oder versucht nicht, diese Informationen zu \xfcberpr\xfcfen. <br /><br />Kriminelle Verbindungen: Strafanzeigen gegen eine juristische Person wegen Verst\xf6\xdfen gegen AML/CFT. <br /><br />Auswirkung: Eine hohe Exposition gegen\xfcber risikoreichen Diensten wie Darknet-M\xe4rkten, anderen risikoreichen Exchanges oder Blending wird als eine Dienstleistung definiert, deren direkte risikoreiche Exposition um eine Standardabweichung vom Durchschnitt aller identifizierten Exchanges \xfcber einen Zeitraum von 12 Monaten abweicht. <br /><br />Gerichtsbarkeit: Sitz in einer Gerichtsbarkeit mit schwachen AML/CFT-Ma\xdfnahmen. <br /><br />Ohne Lizenz: Hat keine spezielle Lizenz f\xfcr das Traden mit Kryptow\xe4hrungen.","title":"Exchange | High Risk\\n"},"infrastructureAsAService":{"description":"Eine Gesellschaft, die Computer- und Informationsdienste anbietet, einschlie\xdflich, aber nicht beschr\xe4nkt auf VPNs, VPS und Domainregistrierung. <br /><br />Dabei k\xf6nnte es sich m\xf6glicherweise um eine Zahlung an Anbieter handeln, die auf den Datenschutz ausgerichtet sind, die f\xfcr illegale Zwecke verwendet werden k\xf6nnte, aber es k\xf6nnte sich auch um eine Zahlung an einen vollst\xe4ndig legitimen Gesch\xe4ftsanbieter handeln.","title":"Infrastructure as a Service"},"lendingContract":{"description":"Eine Blockchain-Anwendung, die es Peer-to-Peer-Benutzern erm\xf6glicht, Krypto-Assets zu verleihen und auszuleihen, ohne mit einer dritten Partei oder einer zentralen Beh\xf6rde zu interagieren.","title":"Lending Contract\\n"},"liquidityPools":{"description":"Die intelligenten Vertr\xe4ge, bei denen Token zur Bereitstellung von Liquidit\xe4t gesperrt werden.","title":"Liquidity Pools"},"p2PExchangeHighRisk":{"description":"Die jeweilige Gesellschaft hat keine spezielle kommerzielle Lizenz, um Dienstleistungen f\xfcr den Austausch von Kryptow\xe4hrungen anzubieten, bei denen die Teilnehmer direkt und ohne Vermittler miteinander traden.<br /><br />Dazu geh\xf6ren auch Unternehmen, die zwar eine Lizenz haben, aber in gelisteten Gerichtsbarkeiten ans\xe4ssig sind. Sie werden von der FATF als nicht kooperativ gelistet oder bieten kein KYC f\xfcr Transaktionen mit hohem Wert, was sie f\xfcr Geldw\xe4sche attraktiv macht.","title":"P2P Exchange | High Risk\\n"},"privacyProtocol":{"description":"Ein Protokoll oder eine Entit\xe4t, die Datenschutzfunktionen wie Zero-Disclosure Evidence verwendet, um Benutzern Datenschutzfunktionen zur Verf\xfcgung zu stellen. <br /><br />Gew\xe4hrleistung der Transparenz der Transaktionen, aber gleichzeitig bleiben die Adressen der Gegenparteien verborgen. <br /><br />Diese Funktion ist das Standardverhalten vieler Kryptow\xe4hrungen zum Schutz der Privatsph\xe4re wie Monero und Secret, was bedeutet, dass der Zugriff auf diese Assets nicht unbedingt bedeutet, dass Gelder verwechselt oder absichtlich verwirrt wurden.","title":"Privacy Protocol\\n"},"smartContract":{"description":"Blockchain-Funktionalit\xe4t, die als selbstausf\xfchrender Vertrag fungiert, bei dem die Bedingungen der Vereinbarung zwischen K\xe4ufer und Verk\xe4ufer direkt in Codezeilen aufgezeichnet werden, die ausgef\xfchrt werden, ohne dass eine dritte Partei teilnehmen muss.","title":"Smart Contract\\n"},"tokenSmartContract":{"description":"Ein Kryptow\xe4hrungs-Asset, das auf einer anderen Blockchain basiert und mit einer Krypto-Wallet gesendet und empfangen werden kann. <br /><br />Es gibt verschiedene technische Standards f\xfcr vereinbarte Regeln, die das Design, die Entwicklung, das Verhalten und die Leistung dieses Tokens regeln.","title":"Token Smart Contract"},"unnamedService":{"description":"Diese Kategorie bezieht sich auf derzeit nicht identifizierte Cluster, die das vom Dienst erwartete Verhalten in Bezug auf eine gro\xdfe Anzahl von Adressen und Transaktionen demonstrieren.","title":"Unnamed Service"}}},"main":{"description":"Wir analysieren Adressen auf ihre Zugeh\xf6rigkeit zu mehr als 20 Risikoquellen, um verd\xe4chtige Transaktionen zu finden und das Risikoverh\xe4ltnis zu ermitteln. Wir haben alle Quellen in drei Kategorien unterteilt.","title":"Was analysieren wir?"},"note":{"text1":"Die Anwesenheit von <b>Dark Market, Dark Service sowie Illegaler Dienste</b> ist ein schlechtes Zeichen.","text2":"Wir empfehlen Ihnen, zus\xe4tzliche Untersuchungen durchzuf\xfchren, um Ihr Geld nicht durch eine Sperrung zu verlieren.","title":"Seien Sie vorsichtig!"}},"b2b":{"contactForm":{"description":"Reach out and our team will address your queries","title":"Contact form"},"curiousAbout":{"button":"Hier anfragen","description":"Unsere AML-Experten stehen bereit, um Ihre Anforderungen zu besprechen und Fragen zu beantworten.","title":"Bereit, um mit AML Zapex loszulegen"},"help":{"items":[{"button":"Kontakt","description":"Mit unserer automatisierten und detaillierten Know-Your-Transaction-Analyse unterst\xfctzen wir Unternehmen bei der Einhaltung der AML/CFT-Anforderungen.","title":"Wie wir helfen"},{"button":"Beispielbericht","description":"Sie erhalten einen detaillierten, umfassenden Bericht, der die Risikobewertung der Transaktion und die Quellen f\xfcr Ihre Compliance-Entscheidungen aufzeigt.","title":"Umfassende Berichterstattung"},{"description":"Wir \xfcberpr\xfcfen die Wallets, die Kryptow\xe4hrungen und die Transaktionen auf \\"unreine\\" Wallets und senden Ihnen einen vollst\xe4ndigen Bericht mit Erkl\xe4rungen.","title":"Wir \xfcberpr\xfcfen Krypto-Wallets"},{"button":"Kontakt","description":"Wir helfen Ihnen bei der Erstellung und Vervollst\xe4ndigung aller Dokumente und Berichte, die Sie den Beh\xf6rden/Inspektionsgesellschaften vorlegen m\xfcssen (SAR, DS Tracfin, STR, etc etc).","title":"Wir helfen mit den Dokumenten"},{"description":"Mit unseren KYT- und AML-L\xf6sungen haben wir \xfcber 200 Unternehmen erfolgreich bei der Einhaltung der FATF/MiCA-Vorschriften unterst\xfctzt.","title":"Bew\xe4hrte Erfolgsbilanz"}],"title":"Unterst\xfctzung von Unternehmen bei der Einhaltung von FATF/MiCA"},"helpsWith":{"items":[{"description":"Unsere Risikobewertung gew\xe4hrleistet 99,5 % Datengenauigkeit aus 3 zuverl\xe4ssigen Quellen.","title":"99,5% Datengenauigkeit"},{"description":"Verifizieren Sie Ihre Adresse einmal und erhalten Sie lebenslang kostenlose Checks.","title":"Unbegrenzte kostenlose Adress\xfcberpr\xfcfungen"},{"description":"St\xe4ndige Beobachtung einer bestimmten Blockchain-Adresse mit Echtzeit-Benachrichtigungen f\xfcr alle ein- und ausgehenden Transaktionen.","title":"Echtzeit-Benachrichtigungen"},{"description":"AML Zapex \xfcbernimmt die Integration und gibt Ihren Entwicklern die Freiheit, sich auf ihre Kernaufgaben zu konzentrieren.","description1":"Wir helfen Ihnen dabei, eine automatische \xdcberpr\xfcfung aller eingehenden Transaktionen einzurichten.","description2":"Reduzieren Sie den Wartungsaufwand auf Ihrer Seite, sodass Sie sich auf das Wichtigste konzentrieren k\xf6nnen: Ihr Gesch\xe4ft.","title":"Hilfe"},{"description":"AML Zapex vereinfacht die Transaktions\xfcberpr\xfcfung mit einem einzigen Zugriffspunkt und reduziert so den Wartungsaufwand f\xfcr Ihr Gesch\xe4ft.","title":"API Dokumentation"},{"description":"Der AML Zapex-Vertrag garantiert den Aufsichtsbeh\xf6rden, dass Compliance- und Sicherheitsfragen effektiv gehandhabt werden.","description1":"Wenn es um die Integration von AML Zapex geht, \xfcbernehmen wir die Arbeit f\xfcr Sie.","description2":"Auf diese Weise k\xf6nnen sich Ihre Entwickler auf das Erstellen konzentrieren und m\xfcssen nicht auf die Integration der Compliance.","title":"AML-Vertrag"}],"title":"AML Zapex-Integration rationalisiert KYT-Einhaltung"},"howMatch":{"agreementCompliant":"AML/KYT/KYC-Vereinbarung gem\xe4\xdf AMLD5, FATF und MiCA","amlTrainingForFree":"<b>Schulung zur Einhaltung von Krypto-AML-Vorschriften und Blockchain-Analytik</b> <small>im Wert von $3.500, kostenlos im Preisplan enthalten</small>","automaticChecksViaApi":"Automatische Pr\xfcfungen \xfcber API","bestChoice":"Beste Wahl","business":{"checksCount":"15 000 AML-Pr\xfcfungen","description":"Fortschrittliche L\xf6sung f\xfcr mittelst\xe4ndische Unternehmen","otherServicesOff":"5% Rabatt auf andere AML Zapex-Dienste","price":"$3750","pricePerCheck":"0,25 $ pro Pr\xfcfung","referralProgram":"5% Empfehlungsprogramm","testApi":"Test-API f\xfcr AML Zapex\'s KYC +$50 auf Guthaben"},"customerSupport":"24/7 Kundenbetreuung","dataSources":"5 Datenquellen","description":"Unterschiedliche Pl\xe4ne, die auf Ihre gesch\xe4ftlichen Anforderungen zugeschnitten sind","discuss":"Besprechen","enterprise":{"checksCount":"100 000 — 500 000 AML-Pr\xfcfungen","contactUsForQuote":"Kontaktieren Sie uns f\xfcr ein Angebot","description":"Sonderpreis und Lizenz f\xfcr die gr\xf6\xdften Unternehmen","otherServicesOff":"10% Rabatt auf andere AML Zapex-Dienste","price":"Lizenz","pricePerCheck":"Benutzerdefinierte Preise","referralProgram":"15% Empfehlungsprogramm","supportTeam":"Unterst\xfctzung durch das Compliance-/Ermittlungsteam","testApi":"Test-API f\xfcr AML Zapex\'s KYC +$100 auf den Saldo"},"growth":{"checksCount":"5 000 AML-Pr\xfcfungen","description":"Einfache AML-L\xf6sung f\xfcr wachsende Unternehmen","otherServicesOff":"5% Rabatt auf andere AML Zapex-Dienste","price":"$1500","pricePerCheck":"0,30 $ pro Pr\xfcfung","referralProgram":"2% Empfehlungsprogramm","testApi":"Test-API f\xfcr AML Zapex\'s KYC +$50 auf Guthaben"},"monitoringWithAlerts":"Adress\xfcberwachung mit Warnmeldungen","note":"* Am Ende des Kalenderjahres ab dem Zahlungsdatum wird der Restbetrag der nicht verwendeten Pr\xfcfungen annulliert","ofac":"Erf\xfcllung der OFAC-Sanktionen","premium":{"checksCount":"50 000 AML-Pr\xfcfungen","description":"Bester Preis und Unterst\xfctzung f\xfcr gro\xdfe Unternehmen","otherServicesOff":"10% Rabatt auf andere AML Zapex-Dienste","price":"$10000","pricePerCheck":"0,20 $ pro Pr\xfcfung","referralProgram":"15% Empfehlungsprogramm","testApi":"Test-API f\xfcr AML Zapex\'s KYC +$100 auf den Saldo"},"serviceClustering":"Dienst-Clustering","special":"Erhalten Sie bis zum 30. Dezember 2023 einen Rabatt von 15 % auf alle Tarife.","supportedBlockchains":"25+ unterst\xfctzte Blockchains","title":"Was ist Ihnen Ihr Seelenfrieden wert?","yearly":"J\xe4hrlich"},"main":{"button":"Melden Sie sich f\xfcr eine Demo an","description":"Erh\xf6hen Sie die Risikoabdeckung und maximieren Sie die Effizienz durch unsere KYT API L\xf6sung zur Transaktions\xfcberwachung.","title":"Halten Sie die Vorschriften ein und sch\xfctzen Sie Ihr Unternehmen mit KYT"},"reviews":{"description":"Entdecken Sie unseren Service mit Menschen, denen wir geholfen haben","eliTaranto":{"company":"Digitale Verm\xf6genswerte bei EQIBank","name":"Eli Taranto","position":"CEO","text":"„Die gr\xf6\xdfte Herausforderung bestand in der Gew\xe4hrleistung der vollst\xe4ndigen Konformit\xe4t der Wallets. Das hei\xdft, dass wir mehrere Datenbanken miteinander verbinden mussten, vor allem Datenbanken, die von der Regierung initiiert wurden und von nationalen Beh\xf6rden betrieben werden und weltweit und gemeinsam mit anderen Akteuren gepflegt werden, um sicherzustellen, dass keine ruchlosen Akteure in den Kryptoraum gelangen.“"}},"risk":{"text":"Unseren Statistiken zufolge <b>ist jede vierte Wallet verd\xe4chtig.</b> <br/>\\nIndem Sie ein paar Dollar f\xfcr die \xdcberpr\xfcfung ausgeben, k\xf6nnen Sie sich vor erheblichen Verlusten sch\xfctzen."},"safety":{"items":[{"button":"Mehr erfahren","description":"Akzeptieren Sie Krypto-Zahlungen oder zahlen Sie mit Kryptow\xe4hrungen bei Partnern. Alles ist sicher, da wir das gesamte Geld pr\xfcfen und nur reine Gelder bei Ihnen ankommen.","title":"Zahlungen in Kryptos f\xfcr Ihr Unternehmen"}],"title":"Sicheres System zur Abwicklung von Krypto-Zahlungen"},"statistics":{"description":"Dank des optimierten Onboarding-Flusses von AML Zapex sind Sie in k\xfcrzester Zeit einsatzbereit und sch\xfctzen Ihr Unternehmen vor finanziellen und betr\xfcgerischen Risiken.","title":"Schnelle Integration und effektiver AML-Schutz noch heute"}},"b2c":{"contact":{"button":"Stellen Sie uns gerne Fragen auf Telegram","description":"Wir sind rund um die Uhr erreichbar, so dass jedes Problem schnell und in einem Live-Chat gel\xf6st werden kann.","note":"Wir sind auch nur Menschen, deshalb reagieren wir nachts vielleicht nicht so schnell wie tags\xfcber ✌️","title":"Gerne beantworten wir Ihre Fragen"},"email":{"buttonDownload":"Beispiel herunterladen","placeholder":"Ihre E-Mail-Adresse","title":"Hinterlassen Sie Ihre E-Mail-Adresse, wir senden Ihnen ein Beispielbericht."},"example":{"items":[{"button":"Adresse pr\xfcfen","description":"Der Bericht kann den Aufsichtsbeh\xf6rden als Nachweis daf\xfcr vorgelegt werden, dass Sie das Problem mit der AML-Richtlinie gel\xf6st haben und strittige Fragen gekl\xe4rt sind.","title":"Wir senden einen detaillierten AML-Bericht"},{"button":"Mehr erfahren","description":"Wir analysieren Wallets f\xfcr 25+ Quellen, um verd\xe4chtige Transaktionen zu finden und den Risikofaktor zu bestimmen.","title":"Analyse aller Fondsquellen"},{"button":"Pr\xfcfung starten","description":"Wir geben detaillierte Informationen zu den einzelnen Quellen","title":"In allen Einzelheiten dargelegt"},{"description":"Sie erhalten Informationen dar\xfcber, wie riskant das Wallet ist, und entscheiden, ob Sie damit umgehen m\xf6chten","title":"Risikobewertung"},{"button":"Adresse pr\xfcfen","description":"Wir zeigen an, ob die Adresse auf den Sanktionslisten steht. Jegliche Interaktion mit solchen Adressen kann zu Geldstrafen, Sperrungen oder dem Entzug von Lizenzen f\xfchren","title":"Schutz vor sanktionierten Wallets"}],"title":"Beispiel einer Wallet-Analyse"},"main":{"button":"\xdcberpr\xfcfung starten","description":"Wir \xfcberpr\xfcfen Wallets und Transaktionen und zeigen, woher die Gelder kommen. Dies hilft dabei, die Reinheit von Assets zu ermitteln und sich vor Betr\xfcgern und gestohlenen Coins zu sch\xfctzen.","title":"Detaillierte Analyse von Krypto-Wallets"},"pricing":{"items":[{"button":"Dies gef\xe4llt mir","description":"Ideal zum Starten","note":"3$ f\xfcr eine zus\xe4tzliche Pr\xfcfung","price":"3$","spec1":"1 AML-Pr\xfcfung","spec2":"Kein Verfallsdatum","spec3":"AML Zapex-Unterst\xfctzung rund um die Uhr","title":"Starten"},{"button":"Ich nehme","description":"Profitables Paket f\xfcr Inhaber","note":"2,5$ pro Pr\xfcfung","price":"25$","spec1":"10 AML-Pr\xfcfungen","spec2":"1 Jahr","spec3":"AML Zapex-Unterst\xfctzung rund um die Uhr","title":"Optimal"},{"badge":"Beste Wahl","button":"Profitabel!","description":"F\xfcr Trader und Investoren","note":"2$ pro Pr\xfcfung","price":"50$","spec1":"25 AML-Pr\xfcfungen","spec2":"1 Jahr","spec3":"AML Zapex-Unterst\xfctzung rund um die Uhr","spec4":"Empfehlungsprogramm","title":"Pro"}],"title":"Preise"},"works":{"text":"Sehen Sie sich das Video an","title":"Wie funktioniert das?"}},"b2cpage":{"checkAddress":{"messengers":{"description":"Eine einfache Nachricht in Telegram oder WhatsApp reicht aus, um eine umfassende \xdcberpr\xfcfung Ihrer Krypto-Wallets durchzuf\xfchren – eine bequeme Option f\xfcr all jene Nutzer, die Instant-Messaging-Plattformen bevorzugen.","title":"Messenger"},"or":"oder","signUp":"Registrieren Sie sich, um mehr zus\xe4tzliche Funktionen zu erhalten","title":"Wie wird Ihre Adresse \xfcberpr\xfcft?","website":{"description":"F\xfcr eine herk\xf6mmliche Verfahrensweise loggen Sie sich einfach in Ihr Benutzerkonto auf unserer Webseite ein. Hier k\xf6nnen Sie Wallet-Checks mit ausf\xfchrlicher Anleitung und Unterst\xfctzung kaufen und durchf\xfchren und so eine umfassende und interaktive Erfahrung machen. Oder laden Sie unsere mobile App herunter, um den ultimativen Komfort und Zugang zu haben.","title":"Webseite oder App"}},"checkYourWallet":"\xdcberpr\xfcfen Sie Ihre Wallet","faq":{"info":{"answer":"Wir antworten innerhalb von 30 Sekunden","description":"Kontaktieren Sie uns via Telegram. Wir sind 24/7 erreichbar, um eine unkomplizierte Erfahrung f\xfcr alle zu gew\xe4hrleisten.","inTelegram":"Wir sind auf Telegram","note":"Wir sind <b>24/7</b> erreichbar, k\xf6nnen aber nachts nicht immer sofort reagieren.","title":"Ist Ihre Frage nicht aufgelistet?"},"title":"FAQs"},"hero":{"description":"Wenn Sie Guthaben aus illegalen Quellen erhalten, besteht die Gefahr, dass Ihre Gelder eingefroren werden","title":"Sichern Sie Ihre Wallets vor unerlaubtem Verm\xf6gen"},"info":{"address":{"description":"Echtzeit-\xdcberwachung aller Transaktionen, die mit einer bestimmten Blockchain-Adresse verbunden sind, und sofortige Benachrichtigung \xfcber eingehende und ausgehende Transaktionen.","title":"Adressverfolgung"},"investigations":{"description":"Sieh dir die direkte und indirekte Verbindung zwischen der angegebenen Adresse und den identifizierten Clustern an, den Gesamtwert, der an/von der Ziel-Wallet gesendet wurde, und die Entfernung zu ihr.","title":"Ermittlungen"},"suspicious":{"description":"Identifizierung von Geldern, die mit illegalen Aktivit\xe4ten wie Betrug, Terrorismus, Erpressung und anderen Straftaten in Verbindung stehen.","title":"Verd\xe4chtige Transaktionen"}},"investigation":{"download":"Beispielbericht.pdf herunterladen","title":"\xdcberpr\xfcfung von Wallet-Adressen","videoTitle":"Video mit Ermittlungsbeispiel ansehen"},"keepCrypto":{"description":"Identifizierung potenzieller Risiken","items":{"avoid":{"description":"Die regelm\xe4\xdfige Verifizierung deiner Wallets und Transaktionen kann das Risiko, dass dein Verm\xf6gen an den B\xf6rsen eingefroren wird, deutlich verringern.","title":"CEX-Kontosperrungen vermeiden"},"boost":{"description":"Erkenne potenzielle Sicherheitsbedrohungen und gehe dagegen vor, um deine Investitionen und Anlagen zu sch\xfctzen.","title":"Sicherheit erh\xf6hen"},"stay":{"description":"Erf\xfclle die sich entwickelnden Vorschriften und vermeide Strafen. Regelm\xe4\xdfige \xdcberpr\xfcfungen helfen dir, die gesetzlichen Vorschriften einzuhalten und Strafen und rechtliche Probleme zu vermeiden.","title":"Bleibe rechtskonform & vermeide \xc4rger"}},"title":"Sichere Aufbewahrung deiner Kryptow\xe4hrungen"},"moreProducts":{"items":{"amlTraining":{"description":"Spezialisierte Schulungsprogramme f\xfcr die Kryptow\xe4hrungsbranche","title":"AML-Training"},"consulting":{"description":"Wir helfen Kryptounternehmen bei AML-Verfahren, Schulungen und der Einrichtung von Bankkonten","title":"Beratung"},"investigation":{"description":"Unterst\xfctzung bei der Wiederbeschaffung gestohlener Kryptow\xe4hrungen","title":"Ermittlungen"},"kyc":{"description":"Verifizierung von mehr Nutzern mit einer schnellen, sicheren, automatisierten und effizienten Verifizierung","title":"KYC"},"kyt":{"description":"Automatische \xdcberpr\xfcfung aller Transaktionen und Wallets \xfcber die API","title":"KYT"}},"leaveRequest":"Eine Anfrage stellen","title":"Mehr Produkte & L\xf6sungen"},"orOnWeb":"oder auf der Webseite","pricing":{"checklist":["25+ Unterst\xfctzte Blockchains und ihre nativen W\xe4hrungen und Token","Manuelle \xdcberpr\xfcfung von Transaktionen und Wallets via Dashboard","24/7 Priorit\xe4ts-Service","3 Datenquellen"],"forBusiness":"F\xfcr Unternehmen","forPersonal":"F\xfcr pers\xf6nlich","tariffs":{"advanced":{"badge":"Sparen Sie 40%","checks":"100 \xdcberpr\xfcfungen","perCheck":"1.8 $ pro Einzel\xfcberpr\xfcfung","price":"$180"},"optimal":{"badge":"Sparen Sie 17%","checks":"10 \xdcberpr\xfcfungen","perCheck":"2,5 $ pro Einzel\xfcberpr\xfcfung","price":"25 $"},"pro":{"badge":"Sparen Sie 33%","checks":"25 \xdcberpr\xfcfungen","perCheck":"2 $ pro Einzel\xfcberpr\xfcfung","price":"50 $"},"start":{"checks":"3 \xdcberpr\xfcfungen\\n","perCheck":"3 $ pro Einzel\xfcberpr\xfcfung","price":"$9"}},"title":"Preise"},"risks":{"description":"In der Welt der Kryptow\xe4hrungen ist es von entscheidender Bedeutung, dass du dich an die sich entwickelnden regulatorischen Standards h\xe4ltst. Regelm\xe4\xdfige \xdcberpr\xfcfungen helfen dir, die gesetzlichen Vorschriften einzuhalten und Strafen und rechtliche Probleme zu vermeiden.","title":"Was analysieren wir?"},"secureCrypto":{"title":"Sichern Sie Ihre Kryptow\xe4hrungen mit unserem Walltet- und Risiko-Screening"},"stats":{"description":"Das AML Zapex-Risikoscoring basiert auf mehreren Datenquellen, um sicherzustellen, dass wir \xfcber die zuverl\xe4ssigsten Daten der Branche verf\xfcgen","title":"23% aller Wallets enthalten risikobehaftete Gelder und setzen die Nutzer damit Betrug und schlechten Absichten aus."},"trustedCompliance":{"title":"Das Vertrauen der Compliance-Abteilungen von"},"weTrusted":{"title":"Wir sind bew\xe4hrte Mitglieder von"},"why":{"discussButton":"Kontaktaufnahme","integrated":{"description1":"Wir bieten KYT-/Wallet-Screenings, KYC, AML und mehr f\xfcr Krypto-Unternehmen an","description2":"Das Risiko-Scoring von AML Zapex basiert auf mehreren Datenquellen, um sicherzustellen, dass wir \xfcber die zuverl\xe4ssigsten Daten der Branche verf\xfcgen","description3":"Unsere benutzerfreundlichen Dienste und L\xf6sungen rationalisieren Ihre Unternehmensprozesse und beseitigen die Komplexit\xe4t von Compliance-Anbietern","title":"Integrierte Compliance-Plattform"},"personalized":{"description1":"AML Zapex bietet eine breite Palette von Compliance-L\xf6sungen, die auf jeden Kunden zugeschnitten sind.","description2":"Wir sind \xfcberzeugt, dass wir Ihre Anforderungen erf\xfcllen k\xf6nnen, nachdem wir mehr als 300 Kryptounternehmen jeder Gr\xf6\xdfe in 25 L\xe4ndern unterst\xfctzt haben.","title":"Personalisierter Ansatz"},"title":"Wieso AML Zapex w\xe4hlen?"}},"banners":{"title":"Banner"},"careers":{"advantages":{"items":{"dynamicEnvironment":{"description":"Wir gedeihen durch Ver\xe4nderung und Innovation und sorgen daf\xfcr, dass jeder Tag spannend und voller neuer M\xf6glichkeiten ist.","title":"Dynamische Umgebung"},"freedomToCreate":{"description":"\xdcbernimm Verantwortung, bring frische Ideen ein und treibe Innovationen in einer Umgebung voran, die dir vertraut und dich st\xe4rkt.","title":"Freiheit zu kreieren"},"makeDifference":{"description":"Deine Arbeit wird direkt zu einer sichereren und vertrauensw\xfcrdigeren digitalen Welt beitragen.","title":"Mach den Unterschied"},"supportiveCulture":{"description":"Zusammenarbeit und Transparenz stehen im Mittelpunkt unserer Arbeit. Jede Stimme wird geh\xf6rt und gesch\xe4tzt.","title":"Unterst\xfctzende Kultur"},"workLifeBalance":{"description":"Wir setzen Wirkung \xfcber starre Zeitpl\xe4ne — KEINE Zeiterfassung, nur ERGEBNISSE.","title":"Work-Life-Balance"},"workWithExperts":{"description":"Tritt einem Team bei, das Wissensaustausch, Neugier und kontinuierliches Lernen sch\xe4tzt, um Grenzen zu erweitern.","title":"Arbeite mit Experten"}},"title":"Warum du es lieben wirst, mit uns zu arbeiten"},"employmentType":{"fullTime":"Vollzeit","partTime":"Teilzeit"},"gallery":{"title":"Menschen, die es m\xf6glich machen"},"hero":{"description":"Bei AML Zapex ist jede Herausforderung eine Chance zur Innovation. Werde Teil eines zielorientierten Teams, das die Blockchain-Compliance mit fortschrittlichen L\xf6sungen transformiert. Deine Ideen, F\xe4higkeiten und Leidenschaft k\xf6nnen hier einen bleibenden Eindruck hinterlassen.","openPositionsButton":"Offene Stellen anzeigen","title":"Gemeinsam gestalten wir die Zukunft der Blockchain-Analyse und Innovation"},"hrInfo":{"gotQuestions":"Fragen? Lassen Sie uns reden"},"jobType":{"office":"B\xfcro","remote":"Remote"},"location":{"ukraine":"Ukraine","worldwide":"Weltweit"},"numbers":{"byTheNumbers":"In Zahlen","locations":"Standorte","teammates":"Teammitglieder","yearOverYearGrowth":"J\xe4hrliches Wachstum","yearsOnTheMarket":"Jahre auf dem Markt"},"openPositions":{"empty":"Derzeit keine offenen Stellen","title":"Offene Stellen"},"openPositionsEntry":{"details":"Details"},"stickyNav":{"aboutUs":"\xdcber uns","advantages":"Vorteile","openPositions":"Offene Stellen"},"submitApplication":{"attachYourResumeOrCV":"Lebenslauf anh\xe4ngen","currentCompany":"Aktuelles Unternehmen","currentLocation":"Aktueller Standort","eMail":"E-mail","enterYourCompany":"Firmennamen eingeben","enterYourEmail":"E-Mail eingeben","enterYourFullName":"Vollst\xe4ndigen Namen eingeben","enterYourLocation":"Standort eingeben","enterYourPhone":"Telefonnummer eingeben","fileIsTooLarge":"Datei ist zu gro\xdf (max. {{maxFileSize}}MB)","fullName":"Vollst\xe4ndiger Name","invalidEmail":"Ung\xfcltige E-Mail","phone":"Telefon","resumeOrCV":"Lebenslauf","submit":"Absenden","success":{"description":"Unser Team wird Ihre Bewerbung pr\xfcfen und sich in K\xfcrze bei Ihnen melden.","title":"Danke f\xfcr Ihre Bewerbung!"},"thisFieldIsRequired":"Dieses Feld ist erforderlich","title":"Bewerbung einreichen"},"vacancy":{"applyForThisJob":"Bewerben","backToOpenPositions":"Zur\xfcck zu offenen Stellen"}},"certifications":{"90012015":{"description":"AML Zapex ist nach ISO 9001 zertifiziert, dem weltweit anerkanntesten Standard f\xfcr Qualit\xe4tsmanagementsysteme. Mit dieser Zertifizierung stellen wir sicher, dass wir konsistente Qualit\xe4t liefern, die Kundenzufriedenheit erh\xf6hen, Prozesse rationalisieren, Fehler minimieren und die Produktivit\xe4t steigern. Wir bei AML Zapex setzen uns daf\xfcr ein, die h\xf6chsten Standards des Qualit\xe4tsmanagements zu erf\xfcllen.","title":"ISO9001"},"270012017":{"description":"AML Zapex ist nach ISO 27001 zertifiziert, der global anerkannten Norm f\xfcr Managementsysteme f\xfcr Informationssicherheit. Mit dieser Zertifizierung wird ein strategischer Rahmen f\xfcr die Steigerung der Informationssicherheit, Eind\xe4mmung von Cyber-Risiken und Einhaltung von Vorschriften geschaffen.","title":"ISO27001"},"description":"Bei AML Zapex legen wir gr\xf6\xdften Wert auf die Sicherheit unserer Benutzer und optimieren kontinuierlich unsere Ma\xdfnahmen, um ihre Zufriedenheit und ihren Schutz zu wahren.","title":"AML Zapex-Zertifizierungen"},"checking":{"addressPlaceholder":"Geben Sie eine Krypto-Adresse ein","allFieldsRequired":"Alle Felder sind erforderlich","description":"Schnelles Erkennen des Risikos einer Brieftasche und ihrer Geldquelle durch einen einfachen Bericht","emailError":"Bitte geben Sie eine g\xfcltige E-Mail-Adresse ein.","emailPlaceholder":"Deine E-Mail","note":"Nach der \xdcberpr\xfcfung senden wir den Bericht an die von Ihnen angegebene E-Mail","submitButton":"\xdcberpr\xfcfen","successDescription":"Ihre Anfrage wird gerade bearbeitet. Sie erhalten die Ergebnisse der \xdcberpr\xfcfung so bald wie m\xf6glich an die angegebene E-Mail-Adresse.","successTitle":"Vielen Dank!","title":"Krypto-Wallet-\xdcberpr\xfcfung"},"consulting":{"consult":{"title":"Kostenlose Beratung ohne jegliche Verpflichtung"},"faq":{"items":[{"content":"Die Nichteinhaltung der AML/KYC-Anforderungen kann zum Entzug der Lizenz durch die Aufsichtsbeh\xf6rden, zu hohen Geldstrafen oder zu Haftstrafen f\xfchren. Dar\xfcber hinaus kann Ihr Konto gesperrt und Ihre Assets von einem Finanzinstitut oder einer Krypto-Exchange eingefroren werden.","title":"Warum m\xfcssen Sie die AML/KYC-Anforderungen erf\xfcllen?"},{"content":"Ja, wir stellen eine Best\xe4tigung aus, dass die von AML Zapex durchgef\xfchrte Schulung abgeschlossen wurde. Sie k\xf6nnen dieses Zertifikat den Pr\xfcfern, Regulierungsbeh\xf6rden, Banken oder Krypto-B\xf6rsen vorzeigen, wenn diese einen Nachweis Ihrer AML/KYC- oder Blockchain-Analyse-Kenntnisse verlangen.","title":"Stellen Sie Zertifikate \xfcber die Absolvierung der Schulung aus?"},{"content":"Je nach Anfrage kann die Vorbereitung von Verfahren oder anderen Dokumenten zwischen 1-2 Wochen und sogar bis zu 1 Monat dauern.","title":"Wie lange dauert es?"},{"content":"Wir decken in erster Linie EU- und GUS-L\xe4nder f\xfcr lizenz- oder AML/KYC-bezogene Auftr\xe4ge ab. Andere L\xe4nder k\xf6nnen jedoch von Fall zu Fall in Betracht gezogen werden. Dar\xfcber hinaus gibt es Dokumente, die nur von Finanzinstituten oder Krypto-Exchanges und nicht von lokalen Regulierungsbeh\xf6rden verlangt werden. In einem solchen Fall k\xf6nnen wir Ihnen ebenfalls die notwendige Unterst\xfctzung bieten.","title":"Welche L\xe4nder k\xf6nnen Sie abdecken?"},{"content":"Wir k\xf6nnen Ihnen eine Pr\xfcfung eines Krypto-Wallets anbieten. Die Pr\xfcfung beinhaltet die Analyse der Herkunft der Mittel, der Vertragspartner, Risiken und des Verhaltens des ausgew\xe4hlten Krypto-Wallets. Eine solche Pr\xfcfung des Krypto-Wallets kann f\xfcr Unternehmen oder Einzelpersonen bei weiteren Interaktionen mit einer Bank oder einer Aufsichtsbeh\xf6rde notwendig sein.","title":"Erstellen Sie einen Due-Diligence-Bericht (Audit) zu Krypto-Wallets?"}],"title":"FAQs"},"form":{"thankYou":{"description":"Wir freuen uns \xfcber Ihr Interesse an unseren Krypto-Compliance-Beratungsdiensten. Ihre Anfrage wurde erfolgreich \xfcbermittelt, und unser Team ist bestrebt, Ihnen zu helfen. Innerhalb der n\xe4chsten 24 Stunden wird sich einer unserer zertifizierten Spezialisten mit Ihnen in Verbindung setzen, um Ihre Anfrage im Detail zu besprechen.","info":{"description":"W\xe4hrend Sie warten, k\xf6nnen Sie sich in unserem <a href=\\"https://blog.AML Zapex.com\\">blog</a> \xfcber die neuesten Erkenntnisse und Aktualisierungen in der Welt der Krypto-Compliance informieren.","title":"Informiert bleiben"},"title":"Vielen Dank, dass Sie sich an AML Zapex gewandt haben"}},"main":{"description":"Wir beraten Kunden unter Ber\xfccksichtigung nicht nur rechtlicher Anforderungen, sondern auch der Marktpraxis und der gesch\xe4ftlichen Aspekte der Angelegenheit","leaveRequest":"Eine Anfrage stellen","title":"Hilfe f\xfcr Krypto-Unternehmen mit Papierkram"},"services":{"description":"Das AML Zapex-Team bietet zertifizierte Spezialisten aus verschiedenen Bereichen, einschlie\xdflich Recht, Audit, AML/CFT-Compliance und Blockchain-Forensik. Wir bieten umfassende Beratung, die rechtliche Anforderungen, Marktpraktiken und gesch\xe4ftliche Aspekte ber\xfccksichtigt.","hide":"Verbergen","items":{"assisting":{"description":"Einige unserer Kunden haben Schwierigkeiten, ein Konto f\xfcr ihre Krypto-Assets oder Fiat-bezogenen Dienstleistungen zu er\xf6ffnen.","fullDescription":"Einige unserer Kunden haben Schwierigkeiten, ein Konto f\xfcr ihre Krypto-Assets oder Fiat-bezogenen Dienstleistungen zu er\xf6ffnen. Wir helfen den Kunden, die am besten geeignete Finanzinstitution oder Krypto-B\xf6rse zu finden, die den Erwartungen des Kunden entspricht. Wir unterst\xfctzen auch Kunden bei der Kommunikation mit den ausgew\xe4hlten Finanzinstitutionen, um einen schnellen und reibungslosen Ablauf der Kontoer\xf6ffnung zu garantieren. Diese Kommunikation kann das Ausf\xfcllen von Frageb\xf6gen oder das Vervollst\xe4ndigen von AML-bezogenen Formularen usw. umfassen.","title":"Unterst\xfctzung der Kunden bei der Kontoer\xf6ffnung bei Banken oder Krypto-B\xf6rsen"},"audit":{"description":"Einige unserer Berater sind Anw\xe4lte und Wirtschaftspr\xfcfer mit Erfahrung in Top-Kanzleien, Big4 und CEX, die unseren Kunden helfen k\xf6nnen, rechtliche Angelegenheiten zu kl\xe4ren und umfassende Due-Diligence-Berichte zu erstellen.","fullDescription":"Einige unserer Berater sind Anw\xe4lte und Wirtschaftspr\xfcfer mit Erfahrung in Top-Kanzleien, Big4 und CEX, die unseren Kunden helfen k\xf6nnen, rechtliche Angelegenheiten zu kl\xe4ren und umfassende Due-Diligence-Berichte zu erstellen. Beispielsweise k\xf6nnen wir den Due-Diligence-Bericht \xfcber Krypto-Wallets oder Krypto-Investmentgesch\xe4fte usw. erstellen.","title":"Rechtliche und Pr\xfcfungsdienstleistungen"},"drafting":{"description":"Wir helfen Krypto-Unternehmen bei der Erstellung und Entwicklung ihrer internen AML/KYC-Prozesse.","fullDescription":"Wir helfen Krypto-Unternehmen bei der Erstellung und Entwicklung ihrer internen AML/KYC-Prozesse. Beispielsweise entwerfen und individualisieren wir das interne AML-Verfahren unter Ber\xfccksichtigung der Gesch\xe4ftsprozesse und der aktuellen Situation des Kunden. Dar\xfcber hinaus helfen wir Kunden bei der Erstellung ihrer Risikoappetit-Erkl\xe4rung, entwerfen Hinweisgeber-Richtlinien, Anti-Korruptions- und Bestechungspolitik oder entwickeln Transaktions\xfcberwachungsregeln f\xfcr Krypto-Assets. Alle oben genannten Dokumente werden von Regulierungsbeh\xf6rden oder Banken/Krypto-B\xf6rsen ben\xf6tigt, wenn der Kunde plant, eine Lizenz zu beantragen oder ein Konto zu er\xf6ffnen.","title":"Erstellung von AML/KYC und Transaktions\xfcberwachungsverfahren"},"trainings":{"description":"Wir haben direkte Erfahrung, wenn es um AML und Krypto-Assets oder Blockchain geht, und wir m\xf6chten unser Wissen und unsere Expertise teilen.","fullDescription":"Wir haben direkte Erfahrung, wenn es um AML und Krypto-Assets oder Blockchain geht, und wir m\xf6chten unser Wissen und unsere Expertise teilen. Daher entwickeln wir st\xe4ndig Schulungen, um unsere Kunden \xfcber neue AML/CFT-Risiken mit Fokus auf Krypto-Assets aufzukl\xe4ren.<br /><br /> Es ist wichtig zu beachten, dass alle regulierten Krypto-Unternehmen, die Konten bei CEX/Banken haben, mindestens einmal j\xe4hrlich eine AML-Schulung durchf\xfchren m\xfcssen.","title":"AML/KYC und Blockchain-Analytik-Schulungen"}},"learnMore":"Mehr erfahren","title":"Unsere Dienstleistungen"},"specialist":{"nikoDemchuk":{"description":"Niko Demchuk ist ein erfahrener AML-Spezialist, zertifiziert von der Association of Certified Anti-Money Laundering Specialists (ACAMS). Nachdem er seinen Master-Abschluss in IT-Recht erworben hat, ist Niko ein Experte f\xfcr Kryptow\xe4hrungsregulierung, AML und KYC-Compliance. Er verf\xfcgt \xfcber umfangreiche Erfahrungen in Rechtsanwaltskanzleien und Expertise im Umgang mit verschiedenen Kryptoregulierungen. Derzeit ist er Rechtsanwalt und Leiter der Beratung von AML Zapex.","name":"Niko Demchuk","position":"Rechtsanwalt und Regierungsbeziehungen"},"title":"Leading Сertified AML Specialist"}},"cookies":{"acceptButton":"Alle Cookies akzeptieren","text":"Wenn Sie auf dieser Website surfen, stimmen Sie der Verwendung von Cookies durch Dienste Dritter zu."},"copy":"Kopieren","cryptopayment":{"contact":{"button":"Fragen Sie uns per Telegram","description":"Wir haben flexible Bedingungen und eine individuelle Herangehensweise. Schreiben Sie uns per Telegram und wir w\xe4hlen die beste Option entsprechend den Anforderungen Ihres Unternehmens aus","title":"Nehmen Sie mit uns Kontakt auf, um die Bedingungen und Konditionen zu besprechen"},"howMatch":{"description":"Vermeiden Sie hohe Geb\xfchren mit AML Zapex. Versteckte Geb\xfchren und R\xfcckbuchungen geh\xf6ren der Vergangenheit an","items":[{"label1":"Pers\xf6nliche Wallets","label2":"H\xe4ndler-Wallets","label3":"Fiat-Konten","title":"Empfangsgeb\xfchren"},{"description":"Die Versandgeb\xfchr wird auf der Grundlage des US-Dollar-Wechselkurses festgelegt und zum Zeitpunkt der Zahlung berechnet","title":"Pers\xf6nliche Versandgeb\xfchren"},{"title":"F\xfcr die Auszahlung von Fiat-Geldern werden folgende Geb\xfchren erhoben"}],"title":"Wie viel kostet es?"},"info":{"items":[{"button":"Mehr erfahren","description":"Wir helfen Unternehmen dabei, Zahlungen in Kryptow\xe4hrung zu akzeptieren oder mit Partnern in Kryptow\xe4hrung zu bezahlen. Wir \xfcberpr\xfcfen diese Transaktionen, damit Sie sicher sein k\xf6nnen, dass Ihre Assets rein sind.","title":"Was bieten wir an?"},{"title":"Empfangen Sie Krypto-Zahlungen von \xfcberall auf der Welt"},{"title":"Zahlungen in den beliebtesten Kryptow\xe4hrungen"}]},"join":{"button":"Jetzt anfangen","description":"Akzeptieren Sie Zahlungen, gewinnen Sie neue Kunden und vermeiden Sie hohe Geb\xfchren dank AML Zapex","title":"Schlie\xdfen Sie sich Tausenden von Unternehmen an, die bereits Krypto-Zahlungen verwenden"},"main":{"button":"Kostenlose Beratung","description":"Wir verifizieren alle Krypto-Zahlungen, sodass Ihr Unternehmen nur reine Gelder akzeptiert oder sendet.","title":"Annahme von Krypto-Zahlungen f\xfcr Ihr Unternehmen"}},"fatf":{"advantages":{"items":[{"button":"Kostenlose Beratung","description":"Wenn wir Ihnen nicht helfen k\xf6nnen, sind wir ehrlich und sagen Ihnen bescheid.","title":"Sie zahlen f\xfcr Ergebnisse"},{"button":"Bedingungen besprechen","description":"Auch wenn Sie uns nach einem Jahr \xfcber das Problem schreiben, geben wir Ihnen gerne eine kostenlose Empfehlung","title":"Wir sorgen f\xfcr Sie"},{"button":"Schreiben Sie uns per Telegram","description1":"Wir sind rund um die Uhr erreichbar, so dass jedes Problem schnell und in einem Live-Chat gel\xf6st werden kann.","description2":"Wir sind auch nur Menschen, deshalb reagieren wir nachts vielleicht nicht so schnell wie tags\xfcber ✌️","title":"Unterst\xfctzung rund um die Uhr"},{"button":"Um einen Vertrag zu unterzeichnen","description":"Wir haben unseren Kunden etwa <b><span>5.359.800 $</span></b> erspart, dank der Blockierung von Transaktionen durch die Exchanges.","title":"Erfahrung"},{"button":"Nehmen Sie mit uns Kontakt auf","description":"Wir sch\xe4tzen Ihre Zeit, deshalb antworten wir in nur 30 Sekunden","title":"Wir antworten in nur 30 Sekunden"},{"button":"Kostenlose Beratung","description":"Wir haben <b><span>200 Unternehmen</span></b> bei der Einhaltung der FATF-Vorschriften unterst\xfctzt","title":"Professionalit\xe4t"}],"title":"Vorteile mit uns zu arbeiten"},"canWeHelp":{"first":{"description":"Ausarbeitung der f\xfcr die Lizenzierung von Krypto-Unternehmen erforderlichen rechtlichen Unterlagen, wie AML-Verfahren, spezielle Verfahren f\xfcr Blockchain-Analysen, Offenlegung von Risiken Risiko und andere","title":"Lizenzierungsverfahren f\xfcr Krypto-Unternehmen"},"items":[{"description":"Wir \xfcberpr\xfcfen die Herkunft der einzelnen Assets, deren Verwendungszweck und nehmen eine Gesamtbewertung des Risikos der Sperrung von Assets vor.","title":"AML-Pr\xfcfung"},{"description":"Wir helfen Ihnen beim Erstellen und Ausf\xfcllen aller Dokumente und stellen Berichte zur Vorlage bei allen Kontrollstellen/Unternehmen bereit","title":"Audit + Bericht"},{"description":"Nach einer detaillierten Pr\xfcfung durch unser Team von AML-Spezialisten ist Ihr Unternehmen mit allen FATF-Anforderungen konform","title":"FATF-Konformit\xe4t"}],"note":"Unser Fachwissen basiert auf der MiCA und den regulatorischen Anforderungen von Kryptow\xe4hrungen.","second":{"description":"Beratung von Krypto-Unternehmen im Gesch\xe4ftsalltag, z. B. Durchf\xfchrung von Schulungen zur Bek\xe4mpfung der Geldw\xe4sche und Unterst\xfctzung bei der Untersuchung der Herkunft von Krypto-Assets. <br /><br />J\xe4hrliche AML-Schulungen sind f\xfcr lizenzierte Krypto-Unternehmen obligatorisch.","title":"AML-Beratung"},"third":{"description":"Unterst\xfctzung von Krypto-Unternehmen bei der Er\xf6ffnung von Bankkonten und dem Ausf\xfcllen von Frageb\xf6gen von Finanzinstituten. <br /><br />Dar\xfcber hinaus bieten wir eine Pr\xfcfung der ausgew\xe4hlten Krypto-Wallet auf rechtliche Risiken an. <br /><br />Die Bank kann von Ihnen verlangen, Frageb\xf6gen zu AML auszuf\xfcllen oder AML-Richtlinien usw. bereitzustellen.","title":"Regulatorische Unterst\xfctzung"},"title":"Was machen wir?"},"consultation":{"button":"Schreiben Sie uns per Telegram","description":"Beratung in Form eines Chats auf Telegram. Es ist kostenlos, und wenn wir Ihnen nicht helfen k\xf6nnen, werden wir es Ihnen sofort sagen. Sie haben nichts zu verlieren und k\xf6nnen dies immer aufgeben.","title":"Die Beratung ist kostenlos und unverbindlich"},"faq":{"items":[{"content":"Die Nichteinhaltung der AML/KYC-Anforderungen kann zum Entzug der Lizenz durch die Aufsichtsbeh\xf6rden, zu hohen Geldstrafen oder zu Haftstrafen f\xfchren. Dar\xfcber hinaus kann Ihr Konto gesperrt und Ihre Assets von einem Finanzinstitut oder einer Krypto-Exchange eingefroren werden.","title":"Warum m\xfcssen Sie die AML/KYC-Anforderungen erf\xfcllen?"},{"content":"Unser Fachwissen konzentriert sich darauf, Ihnen bei der Beantragung einer Kryptolizenz, der Einhaltung der AML/KYC-Anforderungen und der Er\xf6ffnung eines Bankkontos zu helfen. Das Paket von Dokumenten oder spezifischen Ratschl\xe4gen h\xe4ngt von den Bed\xfcrfnissen des Kunden ab. Wir bieten ebenfalls AML-Schulungen an.","title":"Wie k\xf6nnen wir Ihnen helfen?"},{"content":"Je nach Anfrage kann die Vorbereitung von Verfahren oder anderen Dokumenten zwischen 1-2 Wochen und sogar bis zu 1 Monat dauern.","title":"Wie lange dauert es?"},{"content":"Wir decken in erster Linie EU- und GUS-L\xe4nder f\xfcr lizenz- oder AML/KYC-bezogene Auftr\xe4ge ab. Andere L\xe4nder k\xf6nnen jedoch von Fall zu Fall in Betracht gezogen werden. Dar\xfcber hinaus gibt es Dokumente, die nur von Finanzinstituten oder Krypto-Exchanges und nicht von lokalen Regulierungsbeh\xf6rden verlangt werden. In einem solchen Fall k\xf6nnen wir Ihnen ebenfalls die notwendige Unterst\xfctzung bieten.","title":"Welche L\xe4nder k\xf6nnen Sie abdecken?"},{"content":"Wir k\xf6nnen Ihnen ein Krypto-Wallet-Audit anbieten. Die Pr\xfcfung umfasst eine Analyse der Geldquelle, der Gegenparteien, der Risiken und des Verhaltens der ausgew\xe4hlten Krypto-Wallet. Eine solche Pr\xfcfung einer Krypto-Wallet kann f\xfcr juristische oder nat\xfcrliche Personen bei ihrer weiteren Interaktion mit einer Bank oder Regulierungsbeh\xf6rde erforderlich sein.","title":"Erstellen Sie einen Due-Diligence-Bericht (Audit) zu Krypto-Wallets?"}],"title":"Beliebte Fragen"},"main":{"button":"Kostenlose Beratung","description":"Unser Team von AML-Spezialisten bereitet Ihr Unternehmen auf die Erf\xfcllung der AML-Anforderungen der FATF vor.","note":"<b>Schon mehr als 200</b> Unternehmen haben die regulatorischen Anforderungen dank uns erfolgreich erf\xfcllt","specs1":"Vorbereitung von Dokumenten f\xfcr Kryptolizenzen","specs2":"Ein Bankkonto er\xf6ffnen","specs3":"Ausarbeitung von AML-Verfahren und anderen erforderlichen Dokumenten sowie Durchf\xfchrung von AML-Schulungen","subtitle":"Unser Expertenteam hilft Ihnen bei:","title":"Unterst\xfctzung f\xfcr Kryptounternehmen bei verschiedenen Formalit\xe4ten"},"program":{"buttonPdf":"Beispiel-PDF-Bericht","from":"Von","items":[{"button":"Kontaktieren Sie uns auf Telegram","description":"Wir stellen Ihnen einen klaren Handlungsrahmen f\xfcr Ihr Kryptogesch\xe4ft bereit, der die AML-Anforderungen erf\xfcllt.","specs":[{"text":"Unser Team analysiert Ihre Assets und zeigt die Herkunft aller Gelder"},{"text":"Wir senden Ihnen einen vollst\xe4ndigen Bericht, in dem angegeben ist, wohin Ihre Gelder flie\xdfen und wie hoch das Risiko ist, dass Ihre Assets in der jetzigen Form blockiert werden + wir geben Ihnen eine ausf\xfchrliche Erkl\xe4rung."},{"text":"Wir teilen Ihnen mit, wie Sie Ihre Daten speichern, Sanktionskontrollen durchf\xfchren, politisch exponierte Personen sowie die Medienreputation Ihrer Kunden \xfcberpr\xfcfen sollen."},{"text":"Wir geben Ihnen klare Anweisungen"}]},{"button":"Kontaktieren Sie uns per Telegram","description":"Wir analysieren alle Punkte zur Erf\xfcllung der AML-Anforderungen. Wir f\xfchren eine vollst\xe4ndige AML-Pr\xfcfung Ihres Unternehmens durch","special":"Es hat sich f\xfcr {{value}} Unternehmen gelohnt","specs":[{"text":"Das Team wird Ihre Assets analysieren und die Herkunft aller Gelder aufzeigen"},{"text":"Wir senden Ihnen einen vollst\xe4ndigen Bericht dar\xfcber, wo Ihr Geld geflossen ist und wie hoch das Risiko ist, dass Ihre Assets jetzt blockiert werden, und geben Erkl\xe4rungen ab."},{"text":"Detaillierte Regeln f\xfcr KYC/CDD"},{"text":"Wir helfen Ihnen beim Ausf\xfcllen von EDD-Berichten (Enhanced Due Diligence) mit detaillierten Informationen zur \xdcberpr\xfcfung von nat\xfcrlichen und juristischen Personen"}]},{"button":"Kontaktieren Sie uns per Telegram","description":"Wir werden eine professionelle Gesch\xe4ftsanalyse durchf\xfchren. Wir zeigen die Gesch\xe4ftsprozesse auf, die ge\xe4ndert werden m\xfcssen, um die Erf\xfcllung der AML-Anforderungen zu gew\xe4hrleisten.","specs":[{"text":"Professionelle Gesch\xe4ftsanalyse mit einem erfahrenen AML-Sachbearbeiter"},{"text":"Wir senden Ihnen einen vollst\xe4ndigen Bericht dar\xfcber, wo Ihr Geld geflossen ist und wie hoch das Risiko ist, dass Ihre Assets jetzt blockiert werden, und geben Erkl\xe4rungen ab."},{"text":"Wir k\xf6nnen Ihnen beim Ausf\xfcllen aller Dokumente und Berichte helfen, die Sie bei jeglicher Aufsichtsbeh\xf6rde einreichen m\xfcssen (DS Tracfin, SAR, STR und andere)."},{"text":"Wir \xfcberpr\xfcfen Krypto-Wallets und Transaktionen auf Darknetmoney, senden einen vollst\xe4ndigen Bericht und geben entsprechende Erkl\xe4rungen ab."},{"text":"Wir bereiten Ihr Unternehmen darauf vor, FATF-konform zu sein."}]}],"note":"Sie zahlen nur f\xfcr Ergebnisse. Wenn wir nicht helfen k\xf6nnen, sagen wir es Ihnen direkt","text":"Ein Audit erh\xf6ht Ihre Glaubw\xfcrdigkeit bei Ihren Partnern.  Erh\xf6ht die Kundentreue und kann die Entscheidung zur Zusammenarbeit mit Ihnen beschleunigen","title":"AML-Compliance-Programm"}},"feedback":{"thankYou":{"description":"Wir haben Ihre Anfrage erhalten und freuen uns \xfcber Ihr Interesse an den Dienstleistungen von AML Zapex.","info":{"description":"W\xe4hrend Sie warten, k\xf6nnen Sie sich in unserem <a href=\\"https://blog.AML Zapex.com\\">blog</a> \xfcber die neuesten Erkenntnisse und Aktualisierungen in der Welt der Krypto-Compliance informieren.","title":"Informiert bleiben"},"title":"Vielen Dank f\xfcr Ihre Anfrage"},"title":"R\xfcckmeldung"},"footer":{"copyright":"AML Zapex","info":{"links":{"AboutTheProject":"\xdcber das Projekt","aboutUs":"\xdcber uns","analysis":"Analyse","blog":"Blog","careers":"Karriere","certifications":"Zertifizierungen","pressKit":"Pressekit","risks":"Risiken","support":"Unterst\xfctzung"},"title":"Firma"},"legal":{"links":{"privacyPolicy":"Datenschutzerkl\xe4rungen","termsOfuse":"Nutzungsbedingungen","userAgreement":"Nutzungsbedingungen"},"title":"Rechtliches"},"products":{"links":{"AML Zapex":"AML Zapex","apiIntegration":"API-Integration","cryptopayment":"Zahlungen in Kryptow\xe4hrungen","fatf":"Beratung zu Kryptow\xe4hrungen","investigation":"Untersuchung","kyc":"Automatisiertes KYC"},"title":"Produkte"},"socials":{"links":{"facebook":"Facebook","instagram":"Instagram","linkedIn":"LinkedIn","reddit":"Reddit","telegram":"Telegram","tikTok":"TikTok","youTube":"YouTube"},"title":"Soziale Netzwerke"}},"fortune":{"codeModal":{"clickToCopy":"Klicken zum Kopieren","copied":"Kopiert","getPrize":"Preis erhalten","note":"Kopiere deinen einzigartigen Bonuscode und klicke auf \\"Preis erhalten\\", um ihn mit unserem Manager zu teilen und deine Belohnung zu erhalten","title":"Ihr einzigartiger Bonuscode zur Aktivierung des Preises","willRedirected":"Sie werden in {{countdown}} Sekunden zum Support weitergeleitet"},"end":{"contactUs":"Kontaktieren Sie uns","title":"Vielen Dank f\xfcr Ihr Interesse an der Teilnahme am AML Zapex’s Birthday Bonus Giveaway! Wir m\xf6chten Sie jedoch dar\xfcber informieren, dass das Gewinnspiel bereits beendet ist.","title2":"Aber keine Sorge – wir haben noch einen speziellen Bonus f\xfcr Sie!","title3":"Bitte wenden Sie sich an unseren Manager f\xfcr ein pers\xf6nliches Angebot"},"hero":{"birthday":"<span>Geburtstag von</span> \uD83C\uDF89 <span>AML Zapex</span>","description":"Drehen Sie das Rad, um einen <span>exklusiven Rabatt</span> oder <span>kostenlose AML-\xdcberpr\xfcfungen</span> zu gewinnen!","title":"Feiern Sie mit <b>\uD83E\uDD73</b> und holen Sie sich Ihren Preis zum Geburtstag von AML Zapex!"},"wheel":{"getLucky":"Versuchen Sie Ihr Gl\xfcck!","spinNow":"Jetzt drehen!"},"winModal":{"congratulations":"Gl\xfcckwunsch!","discount":"Rabatt","enterYourEmailLabel":"Geben Sie Ihre E-Mail ein, um einen einzigartigen Bonus-Code zur Aktivierung des Preises zu erhalten:","enterYourEmailPlaceholder":"Geben Sie Ihre E-Mail ein","freeChecks":"Kostenlose \xdcberpr\xfcfungen","getPromoCode":"Bonus-Code erhalten","youHaveWon":"Sie haben gewonnen"}},"header":{"announcement":{"final":"Heute","link":"Konsultieren Sie diese","main":"Wir haben die Gesch\xe4ftstarife aktualisiert!"},"checkWallet":"Wallet pr\xfcfen","createAnAccount":"Ein Konto erstellen","links":{"aboutUs":"\xdcber uns","analysis":"Analyse","blog":"Blog","faq":"FAQ","howDoesItWork":"Wie es funktioniert","price":"Preisliste","products":"Produkte","risks":"Risiken"},"logIn":"Einloggen","requestDemo":"Prüfung","signIn":"Anmelden","signUp":"Registrieren","webCheck":"Pers\xf6nliches Konto"},"iSOCertified":{"buttonText":"Mehr erfahren","description":"Wir optimieren regelm\xe4\xdfig unsere Sicherheitsma\xdfnahmen, um Vertrauen und Sicherheit zu wahren. Erfahren Sie mehr \xfcber unsere Zertifizierungen","title":"ISO-zertifiziert"},"initiatives":{"moreInOurBlog":"Mehr in unserem Blog","title":"Unsere Initiativen"},"investigations":{"consult":{"description":"Wir werden uns innerhalb von 24 Stunden mit weiteren Schritten und einem \xdcberblick \xfcber Ihre Situation bei Ihnen melden","title":"Bereit fortzufahren? Reichen Sie ein Formular ein und unser Team wird Ihren Fall \xfcberpr\xfcfen"},"description":{"text":"Das Team <span>zertifizierter</span> Experten von AML Zapex bietet umfassende <span>analytische</span> und <span>rechtliche</span> Unterst\xfctzung bei der Wiederbeschaffung gestohlener Krypto-W\xe4hrungen"},"disclaimer":{"description1":"AML Zapex ruft Sie nicht an oder tritt nicht zuerst mit der Anfrage an Sie heran, Ihnen beim Wiederherstellungsprozess der Mittel zu helfen, denn jegliche Art von Anruf, E-Mail oder Nachricht ohne Ihre Zustimmung verst\xf6\xdft gegen Datenschutzregeln. In der Regel kontaktieren unsere Kunden AML Zapex zuerst mit den auf unserer Website bereitgestellten Methoden.","description2":"Bitte beachten Sie, dass AML Zapex zur Verhinderung von Online-Betrug und Krypto-Scams nur Unternehmensdomain-E-Mails von <a href=\\"https://AML Zapex.com\\">\\nhttps://AML Zapex.com</a> oder offizielle Kommunikationskan\xe4le, die auf der offiziellen Website aufgelistet sind, f\xfcr E-Mails oder andere Kommunikationskan\xe4le (Telegram, WhatsApp) verwendet. Es liegt in der Verantwortung des Benutzers, die richtige Schreibweise der Website zu \xfcberpr\xfcfen und nur mit den offiziellen Kommunikationskan\xe4len zu kommunizieren, die auf der AML Zapex-Website aufgef\xfchrt sind.","description3":"Alle Rechnungen werden von unserem Unternehmen Safelement Limited erstellt. F\xfcr Zahlungen akzeptiert AML Zapex sowohl Krypto- als auch Fiat-Zahlungen f\xfcr unsere Dienstleistungen. Krypto-Zahlungen werden an die lizenzierten Kryptow\xe4hrungsb\xf6rsen akzeptiert. F\xfcr Fiat-Zahlungen verwenden wir Gesch\xe4ftsbankkonten bei den gro\xdfen HK- & EU-Banken. Au\xdferdem nutzen wir Kreditkartenzahlungsdienste, die von Stripe bereitgestellt und mit denselben Bankkonten verbunden sind.","hide":"Verbergen","learnMore":"Mehr erfahren","subtitle":"Achtung vor Betrug und Scams:","title":"Rechtlicher Hinweis"},"expertise":{"description":"Vertrauen Sie auf unser erfahrenes Team von Krypto-Ermittlern und Spezialisten f\xfcr die Wiederbeschaffung.","items":{"1":"Chainalysis Reactor Certification (CRC)","2":"Chainalysis KYT Certification (CKC)","3":"Cryptocurrency Fundamentals Certification (CCFC)","4":"Chainalysis Ethereum Investigations Certification (CEIC)","5":"ACAMS Fightning Moder Slavery And Human Trafficking","6":"<b>Stolze Mitglieder</b><ul><li>Crypto Defence Alliance</li><li>ATHI</li></ul>"},"subtitle":"Wir verf\xfcgen \xfcber Zertifizierungen, einschlie\xdflich:","title":"Unser Fachwissen"},"faq":{"items":[{"content":"AML Zapex kann eine Vielzahl von Kryptow\xe4hrungen untersuchen, einschlie\xdflich, aber nicht beschr\xe4nkt auf Bitcoin, Ethereum und andere beliebte Altcoins.","title":"Welche Arten von Kryptow\xe4hrungen kann AML Zapex untersuchen?"},{"content":"Die Dauer einer Untersuchung variiert je nach der Komplexit\xe4t des Falles. In der Regel bieten wir Ihnen innerhalb von 24 Stunden einen kostenlosen \xdcberblick \xfcber Ihre Situation. Wenn wir alle Informationen haben, stellen wir Ihnen innerhalb von 72 Stunden einen Untersuchungsbericht zur Verf\xfcgung. Allerdings kann der gesamte Zeitrahmen dar\xfcber hinausgehen, insbesondere wenn wir die Wallets zur weiteren Untersuchung markieren m\xfcssen.","title":"Wie lange dauert eine Blockchain-Untersuchung durch AML Zapex?"},{"content":"Die Dauer des Wiederherstellungsprozesses kann je nach der Komplexit\xe4t des Falles, den Antwortzeiten von B\xf6rsen und Strafverfolgungsbeh\xf6rden und anderen Faktoren erheblich variieren. Es ist am besten, sich auf einen Prozess einzustellen, der mehrere Monate dauern k\xf6nnte.","title":"Wie lange dauert der gesamte Wiederherstellungsprozess normalerweise?"},{"content":"Obwohl AML Zapex fortschrittliche Techniken und Tools einsetzt, um die Chancen auf Wiederherstellung zu maximieren, ist es aufgrund der Natur von Blockchain-Transaktionen und den unterschiedlichen Kooperationsgraden der beteiligten Drittparteien nicht m\xf6glich, in jedem Fall einen erfolgreichen Ausgang zu garantieren.","title":"Gibt es eine Garantie, dass meine verlorenen Kryptow\xe4hrungen wiederhergestellt werden?"},{"content":"Die Kosten k\xf6nnen je nach der Komplexit\xe4t des Falles variieren. Bitte reichen Sie den Bericht des Opfers ein oder kontaktieren Sie uns f\xfcr ein personalisiertes Angebot.","title":"Was kostet der Wiederherstellungsdienst?"},{"content":"Unsere Servicegeb\xfchr ist nicht erstattbar, da sie die Arbeit und die Ressourcen abdeckt, die das AML Zapex-Team in die Untersuchung und Wiederherstellungsbem\xfchungen investiert hat, unabh\xe4ngig vom Ergebnis. Seien Sie versichert, dass wir uns verpflichtet f\xfchlen, alles M\xf6gliche zu tun, um Ihre digitalen Verm\xf6genswerte wiederherzustellen.","title":"Wenn meine Mittel nicht wiederhergestellt werden k\xf6nnen, erhalte ich eine R\xfcckerstattung f\xfcr die Servicegeb\xfchr?"},{"content":"Es ist wichtig, so viele Details wie m\xf6glich \xfcber die verlorenen oder gestohlenen Kryptow\xe4hrungen bereitzustellen, einschlie\xdflich der zugeh\xf6rigen Wallet-Adressen, Transaktions-TXs, der Art des Verlusts (z. B. Betrug, Diebstahl) und aller relevanten Kommunikations- oder Transaktionsaufzeichnungen.","title":"Welche Informationen muss ich f\xfcr den Wiederherstellungsprozess bereitstellen?"},{"content":"Sie sollten den Polizeibericht basierend auf Ihrem Wohnsitzland einreichen. AML Zapex bietet Anleitungen dazu, wie Sie einen Polizeibericht f\xfcr Ihre verlorenen oder gestohlenen Kryptow\xe4hrungen ordnungsgem\xe4\xdf einreichen k\xf6nnen. Dieser Bericht und die darauffolgende Vorladung sind f\xfcr den Wiederherstellungsprozess notwendig.","title":"Wo reiche ich einen Polizeibericht ein?"},{"content":"AML Zapex nimmt die Sicherheit Ihrer pers\xf6nlichen Informationen sehr ernst. Wir halten uns an strenge Datenschutzpraktiken und verwenden sichere Methoden, um Ihre Informationen in allen Phasen des Wiederherstellungsprozesses zu sch\xfctzen.","title":"Wie sicher sind meine pers\xf6nlichen Informationen w\xe4hrend dieses Prozesses?"},{"content":"AML Zapex bietet Bildung und Ressourcen, um Ihnen zu helfen, Ihre digitalen Verm\xf6genswerte zu sichern und g\xe4ngige Betr\xfcgereien und Risiken im Bereich der Kryptow\xe4hrungen zu vermeiden. Dazu geh\xf6ren bew\xe4hrte Methoden zur Wallet-Sicherheit, die Erkennung potenzieller Betr\xfcgereien und das Verst\xe4ndnis der Risiken und Vorteile verschiedener Arten von Kryptow\xe4hrungstransaktionen und -investitionen.","title":"Was kann ich tun, um zuk\xfcnftige Verluste von Kryptow\xe4hrungen zu verhindern?"}],"title":"FAQs"},"form":{"thankYou":{"description":"Wir haben Ihre Bitte um Unterst\xfctzung bei der Wiederbeschaffung Ihrer verlorenen, gehackten oder gestohlenen Kryptow\xe4hrung erhalten. Wir verstehen die Dringlichkeit und Sensibilit\xe4t Ihrer Situation und sind bestrebt, Ihnen durch diese schwierige Zeit zu helfen.","info":{"description1":"Unser Team von zertifizierten Krypto-Wiederherstellungsexperten wird die von Ihnen gemachten Angaben pr\xfcfen. Unser Ziel ist es, jeden Aspekt Ihres Falles zu verstehen, um die effektivste Wiederherstellungsstrategie anzubieten.","description2":"Sie k\xf6nnen davon ausgehen, dass wir uns innerhalb von 24 Stunden mit einer ersten Einsch\xe4tzung Ihres Falles und den n\xe4chsten Schritten bei Ihnen melden.","title":"Was passiert als N\xe4chstes?"},"title":"Vielen Dank, dass Sie Ihren Fall an AML Zapex gesendet haben"}},"main":{"description":"Finden Sie heraus, wo Ihre verlorenen Kryptow\xe4hrungen mit einer gr\xfcndlichen Untersuchung und m\xf6glichen Wiederherstellung sind","leaveRequest":"Eine Anfrage stellen","title":"Krypto-Wiederherstellung und Blockchain-Untersuchung mit AML Zapex"},"process":{"description":"Verstehen Sie die Schritte, die wir unternehmen, um Ihre verlorenen Verm\xf6genswerte zu analysieren und m\xf6glicherweise wiederherzustellen.","items":{"0":{"description":"F\xfcllen Sie unser detailliertes Opferformular aus, um uns so viele Informationen wie m\xf6glich \xfcber Ihre Situation zu geben.","title":"Informationssammlung:"},"1":{"description":"Sie k\xf6nnen entweder selbst einen Polizeibericht einreichen oder unseren Richtlinien folgen, um dies effektiv zu tun.","title":"Polizeibericht:"},"2":{"description":"Wenn n\xf6tig, k\xf6nnen wir die notwendige Unterst\xfctzung und Informationen f\xfcr die polizeiliche Ermittlung und die Vorladung zur R\xfcckgabe der Verm\xf6genswerte anbieten.","title":"Unterst\xfctzung bei der polizeilichen Ermittlung:"},"3":{"description1":"Wir unternehmen mehrere Schritte in diesem Prozess, einschlie\xdflich:","description2":"Blacklisting der betroffenen Wallets bei B\xf6rsen","description3":"Kennzeichnung der betroffenen Wallets bei Blockchain-Analyseanbietern","description4":"Markierung von Wallets zur Verfolgung, wenn die Mittel in nicht identifizierten Wallets geparkt sind","title":"Blockchain-Untersuchung:"},"4":{"description":"Wir erstellen einen umfassenden Bericht basierend auf unserer Blockchain-Untersuchung.","title":"Untersuchungsbericht:"},"5":{"description":"Wenn die gestohlenen Mittel eine B\xf6rse erreichen, kommunizieren wir mit ihnen, um eine m\xf6gliche Einfrierung der gestohlenen Verm\xf6genswerte zu beantragen.","title":"Kommunikation mit B\xf6rsen:"}},"title":"Krypto-Wiederherstellungsprozess"},"recovery":{"button":"Eine Anfrage stellen","description":"Reichen Sie jetzt Ihren Fall ein und unser Team wird sich innerhalb von 24 Stunden mit Ihnen in Verbindung setzen.","title":"Bereit, Ihren Krypto-Wiederherstellungsprozess zu starten?"}},"kyc":{"check":{"items":{"addressVerification":{"description":"Wir best\xe4tigen den Wohnsitz anhand eines offiziellen Dokuments wie einer Rechnung eines Versorgungsunternehmens oder eines Kontoauszugs und vergleichen diese mit der vom Kunden angegebenen Adresse.","title":"\xdcberpr\xfcfung der Adresse"},"amlCheck":{"description":"Wie im Gesetz zur Verhinderung von Geldw\xe4sche und Terrorismusfinanzierung vorgeschrieben, pr\xfcfen wir die Gelder und ihre Herkunft.","title":"AML-Pr\xfcfung"},"companyCheck":{"description":"<ul><li>Zust\xe4ndigkeit der Unternehmensgr\xfcndung und Art der Gesch\xe4ftst\xe4tigkeit</li><li>Ob das Unternehmen gem\xe4\xdf dem Unternehmensregister aktiv ist</li><li>Eingetragene Adresse des Unternehmens</li><li>Autorisierte Personen des Unternehmens und ihre Ausweisdokumente</li><li>Beg\xfcnstigte des Unternehmens und ihre Ausweisdokumente</li></ul>","title":"Firmenpr\xfcfung (KYB)"},"documentVerification":{"description":"Dokumentenpr\xfcfung in Echtzeit. Wir pr\xfcfen die Echtheit und G\xfcltigkeit des Dokuments und verifizieren die pers\xf6nlichen Daten des Benutzers.","title":"\xdcberpr\xfcfung von Dokumenten"},"faceVerification":{"description":"Identit\xe4tsbest\xe4tigung mittels Gesichtserkennung. Wir best\xe4tigen, dass die Selfies der Kunden mit dem Foto auf ihren Dokumenten \xfcbereinstimmen.","title":"Gesichtsverifizierung"},"ongoingMonitoring":{"description":"Wir bieten Ihnen die M\xf6glichkeit, Ihre Kunden auf eine schwarze Liste zu setzen. Wenn jemand dort hinzugef\xfcgt wird, f\xfchren wir eine zus\xe4tzliche Pr\xfcfung des Kunden durch und benachrichtigen Sie.","title":"Laufende KYC/AML-\xdcberwachung"},"paymentMethod":{"description":"Wir pr\xfcfen das Finanzdokument, die Kreditkarte oder die Transaktion, um sicherzustellen, dass die Zahlung von dem verifizierten Kunden get\xe4tigt wurde.","title":"Zahlungsmethode"},"pepScreening":{"description":"Pr\xfcfen Sie den Status der politisch exponierten Person, Sanktionen und die Beobachtungsliste der Person, um die Zusammenarbeit mit risikoreichen Personen oder Unternehmen zu vermeiden.","title":"PEP-Screening"},"sourceOfFunds":{"description":"Wir pr\xfcfen die Herkunft der Gelder und Belege wie Rechnungen, Vertr\xe4ge, Gehaltsabrechnungen.","title":"Pr\xfcfung der Mittelherkunft"},"taxVerification":{"description":"Wir erfassen die Steueridentifikationsnummer aus dem eingereichten Dokument und pr\xfcfen ihre G\xfcltigkeit.","title":"Steuerliche Verifizierung"},"viabilityCheck":{"description":"\xdcberpr\xfcfung von Dokumenten, die von Finanzinstituten oder einem Anwalt ausgestellt wurden und die Vertrauensw\xfcrdigkeit des Kunden best\xe4tigen.","title":"Pr\xfcfung der finanziellen Tragf\xe4higkeit"},"videoVerification":{"description":"Identit\xe4ts\xfcberpr\xfcfung per Videoanruf. Wir best\xe4tigen, dass der Kunde verifiziert werden m\xf6chte und dass die vorgelegten Dokumente ihm geh\xf6ren.","title":"Video-Verifizierung"}},"title":"Was pr\xfcfen wir?"},"contact":{"button":"Kontaktiere uns auf Telegram","description":"Unsere Konditionen sind flexibel und individuell. Setzen Sie sich mit uns in Verbindung und wir finden die beste Option, die auf Ihre gesch\xe4ftlichen Anforderungen zugeschnitten ist.","title":"Kontaktieren Sie uns, um die Bedingungen zu besprechen"},"info":{"items":[{"button":"Mehr erfahren","description1":"Sichern Sie Ihr Unternehmen mit einem Verifizierungsablauf, welcher mit den Anforderungen Ihrer Aufsichtsbeh\xf6rde synchronisiert ist. Verifizieren Sie Adressen, Zahlungsmethoden, f\xfchren Sie Pr\xfcfungen von pers\xf6nlichen Dokumenten, Geldnachweisen und vielem mehr durch, um sicherzustellen, dass Ihr Unternehmen vollst\xe4ndig konform ist.","description2":"Pr\xfcfen Sie die Glaubw\xfcrdigkeit jedes Nutzers zum Schutz vor unerlaubten Kundenaktivit\xe4ten, die negative Folgen f\xfcr Ihr Unternehmen haben k\xf6nnen.","title":"Was wir anbieten"},{"button":"Mehr erfahren","description1":"Unsere Dienstleistung ist wirklich einfach einzurichten, so dass Sie sofort mit der Verifizierung Ihrer Nutzer beginnen k\xf6nnen.","description2":"H\xe4ufig ist KYC erforderlich, um Lizenzen und Genehmigungen zu erhalten und Finanzen zu verwalten. Wir bieten eine bequeme M\xf6glichkeit f\xfcr Administratoren und Nutzer, diese Anforderung zu erf\xfcllen.","title":"Weshalb ist dies erforderlich?"},{"button":"Dokumentation ansehen","description":"Bei der Integration \xfcbernehmen wir die Arbeit f\xfcr Sie. So k\xf6nnen sich Ihre Entwickler auf die Entwicklung und nicht auf die Integration der Compliance konzentrieren.","title":"Unterst\xfctzung"}],"title":"Das KYC von AML Zapex ist eine schnelle und einfache M\xf6glichkeit, die Identit\xe4t Ihres Kunden zu \xfcberpr\xfcfen"},"main":{"badge":"Einfache Einrichtung","button":"Buchen Sie eine kostenlose Demo","description":"Verifizieren Sie mehr Nutzer mit einer schnellen, sicheren, automatisierten und effizienten Verifizierung, die den manuellen Arbeitsaufwand erheblich reduziert.","title":"Verifizieren Sie Benutzer mit automatischer KYC"},"why":{"items":[{"button":"Dokumentation ansehen","description":"Branchenf\xfchrende Sicherheitsstandards, gest\xfctzt durch die ISO-Zertifizierung und regelm\xe4\xdfige Sicherheitsaudits.","title":"Sicherheit"},{"button":"Dokumentation ansehen","description":"Zertifiziert durch das European Institute of Management and Finance.","title":"Zertifizierung"},{"button":"Kontaktiere uns per Telegram","description":"Wir sind in der Lage, \xfcber 4.000 Dokumententypen aus 240 verschiedenen L\xe4ndern zu pr\xfcfen. Beginnen Sie mit dem Onboarding von Kunden von \xfcberall auf der Welt.","title":"L\xe4nder\xfcbergreifende Interoperabilit\xe4t"},{"button":"Kontakt","title":"Optimieren Sie Ihren Kundenservice, reduzieren Sie Risiken und vereinfachen Sie Ihre Gesch\xe4ftsprozesse"}],"title":"Warum uns w\xe4hlen"}},"kycHelp":{"title":"Hilfecenter"},"main":{"doing":{"items":[{"button":"Beispiel-PDF-Bericht","description":"Wir \xfcberpr\xfcfen Krypto-Wallets und Transaktionen auf Darknetmoney und erstellen einen detaillierten Bericht. Dies ist notwendig, damit Sie keine Probleme mit den Aufsichtsbeh\xf6rden haben und um Sie vor Betr\xfcgern zu sch\xfctzen.","title":"Was bieten wir an?"},{"description1":"Wenn Sie Darknetmoney empfangen, laufen Sie Gefahr, von den Aufsichtsbeh\xf6rden aufgegriffen zu werden und Ihre Assets zu verlieren, da diese eingefroren werden k\xf6nnten.","description2":"M\xf6glicherweise passiert es nicht, aber Ihr Wallet wird als verd\xe4chtig markiert.","description3":"Aus diesem Grund empfehlen wir dringend, regelm\xe4\xdfige \xdcberpr\xfcfungen durchzuf\xfchren, um sicherzustellen, dass Ihre Assets in Ordnung sind.","title":"Wieso ist dies notwendig?"},{"button":"\xdcber Telegram \xfcberpr\xfcfen","title":"Die erste \xdcberpr\xfcfung ist kostenlos"}]},"faq":{"info":{"answer":"Und antworten Ihnen in nur 30 Sekunden","description":"Schreiben Sie uns auf Telegram. Wir antworten schnell und pr\xe4zise, denn wir haben alles im Griff \uD83D\uDC4C","inTelegram":"Wir sind auf Telegram","note":"Wir sind <b>24/7</b> erreichbar, k\xf6nnen aber nachts nicht immer so schnell reagieren.","title":"Sie haben Ihre Frage nicht gefunden?"},"items":[{"content":"Das grundlegende Ergebnis der AML Zapex-Pr\xfcfung umfasst den Prozentsatz der Risikobewertung, die Risikoquellen und die Zugeh\xf6rigkeit zur schwarzen Liste. <br /><br />Dar\xfcber hinaus kann das Pr\xfcfergebnis verschiedene optionale Informationen zur Adresse enthalten, z. B. die Zugeh\xf6rigkeit zum Cluster, das tats\xe4chliche Guthaben und den \xfcberwiesenen Geldbetrag. <br /><br />Das Pr\xfcfergebnis kann in Bezug auf die beschriebenen Daten unvollst\xe4ndig sein, wenn die erforderlichen Informationen fehlen.<br /><br /> Bitte beachten Sie, dass f\xfcr Blockchains, die sich im eingeschr\xe4nkten Modus befinden, die Clusterbildung und der prozentuale Wert der Risikobewertung der Pr\xfcfung nicht verf\xfcgbar sind. Eine Risikobewertung kann f\xfcr eine Gegenpartei nur dann bereitgestellt werden, wenn sie sich auf ein Unternehmen bezieht.","title":"Was zeigt der AML Zapex-Check?"},{"content":"Die Gesamtrisikobewertung (Prozentsatz) gibt die Wahrscheinlichkeit an, dass die Adresse mit illegalen Aktivit\xe4ten in Verbindung gebracht wird. <br /><br />AML Zapex findet Verbindungen einer \xfcberpr\xfcften Adresse zu anderen Adressen in der Blockchain und zu Entit\xe4ten verschiedener Kategorien, die jeweils eine andere bedingte Risikobewertung aufweisen, und berechnet die Gesamtrisikobewertung auf der Grundlage dieser Verbindungen. <br /><br />Bei der Berechnung der Gesamtrisikobewertung wird der Schweregrad der gefundenen Verbindungen ber\xfccksichtigt. Beispielsweise werden bei Verbindungen zu den Unternehmenskategorien Mining (0% Risiko) und Darknet (100% Risiko) die Risikoauswirkungen von Darknet als riskantere Kategorie h\xf6her sein und Mining wird in der Risikobewertung weniger Gewicht haben.","title":"Was bedeutet die prozentuale Risikobewertung?"},{"content":"AML Zapex \xfcberpr\xfcft die angegebene Wallet-Adresse auf Verbindungen zu bekannten Blockchain-Diensten - Entit\xe4ten. AML Zapex gruppiert diese Dienste \xfcblicherweise in Gruppen mit unterschiedlichen Risikostufen f\xfcr illegale Aktivit\xe4ten - Entit\xe4tskategorien.<br /><br /> Die AML-Pr\xfcfung zeigt die Verbindungen der gepr\xfcften Adresse zu diesen Entit\xe4tskategorien als Risikoquellen an, mit denen die Adresse interagiert hat, sowie den Prozentsatz der von/zu diesen Diensten transferierten Gelder.<br /><br /> Auf der Grundlage aller Risikoquellen wird eine Gesamtrisikobewertung berechnet, die dem Benutzer hilft, weitere Entscheidungen \xfcber die Verm\xf6genswerte zu treffen.","title":"Was bedeuten die Risikoquellen?"},{"content":"Eine Adresspr\xfcfung ist eine Analyse aller Verbindungen zu anderen Adressen und Entit\xe4ten auf Blockchains unter Ber\xfccksichtigung der ein- und ausgehenden Geldbewegungen.<br /><br /> Der Prozess der Transaktionspr\xfcfung unterscheidet sich von der Adresspr\xfcfung, und das Ergebnis h\xe4ngt von Ihrer Seite in der Transaktion ab. Die Gesamtrisikobewertung bezieht sich immer auf die Gegenpartei.<br /><br /> Um eine Transaktion zu pr\xfcfen, m\xfcssen Sie die TxID und die Zieladresse der Transaktion angeben und Ihre Seite in der Transaktion ausw\xe4hlen:<br /> - Empf\xe4nger (Sie haben eine Einzahlung auf Ihr Wallet erhalten) - die Adressen, von denen die Gelder empfangen wurden, werden gepr\xfcft. Die Risikoquellen beschreiben die Dienste, von denen die TX-Sender die \xfcberwiesenen Gelder gesammelt haben, mit einer prozentualen Aufschl\xfcsselung.<br /> - Absender (Sie haben eine Abhebung von Ihrer Brieftasche vorgenommen) - die Brieftasche, die die Gelder erhalten hat, wird \xfcberpr\xfcft. Die Risikoquellen beschreiben alle Verbindungen der Empf\xe4ngeradresse mit einer prozentualen Aufschl\xfcsselung.<br /><br /> Bei der Pr\xfcfung einer Transaktion werden also die Risiken f\xfcr den Empf\xe4nger gepr\xfcft, wenn Sie Geld erhalten haben, und die Risiken f\xfcr den Absender, wenn Sie Geld gesendet haben.","title":"Was ist der Unterschied zwischen einer Adresse und einer Transaktionspr\xfcfung?"},{"content":"Jeder Kunde bestimmt selbst, welcher Prozentsatz des Risikos f\xfcr ihn akzeptabel ist. Herk\xf6mmlicherweise kann die Risikobewertung wie folgt aufgeteilt werden:\\n<br />\\n - 0-25% sind eine saubere Geldb\xf6rse/Transaktion;\\n<br />\\n - 25-75% ist das durchschnittliche Risiko;\\n<br />\\n - \xdcber 75% wird eine solche Wallet/Transaktion als riskant angesehen.\\n<br />\\nEs lohnt sich auch, in der detaillierten Analyse, die auf <a href=\\"https://AML Zapex.com/what-do-we-analyze\\"> Seite beschrieben wird, auf die roten Risikoquellen zu achten\\n</a>","title":"Wie verstehe ich die Risikobewertung?"},{"content":"AML Zapex unterst\xfctzt alle wichtigen Blockchains und Tokens auf ihnen. Wir f\xfcgen st\xe4ndig Unterst\xfctzung f\xfcr zus\xe4tzliche Kryptow\xe4hrungen hinzu. Die aktuelle Liste der unterst\xfctzten Kryptow\xe4hrungen finden Sie jederzeit unter\\n<a href=\\"http://web.AML Zapex.com\\" target=\\"_blank\\">\\nWeb-Dashboard\\n</a>\\n oder in\\n<a href=\\"https://docs.AML Zapex.com/\\" target=\\"_blank\\">\\nAPI-Dokumentation\\n</a>\\n.","title":"Welche Kryptow\xe4hrungen analysiert AML Zapex?"},{"content":"Indem Sie die Wallets der Gegenparteien vor einer Transaktion \xfcberpr\xfcfen, k\xf6nnen Sie deren Verm\xf6genswerte ablehnen, wenn die Risikobewertung hoch ist. Bevor Sie Geld an andere Dienste \xfcberweisen, k\xf6nnen Sie au\xdferdem Ihre Wallet-Adresse \xfcberpr\xfcfen und das Ergebnis speichern (erstellen Sie einen Screenshot). <br /><br />Wenn die \xdcberpr\xfcfung ergibt, dass Ihr Verm\xf6gen in keinem Zusammenhang mit illegalen Aktivit\xe4ten stand und der Dienst Sie blockiert hat, k\xf6nnen Sie das gespeicherte Ergebnis angeben, um die Reinheit Ihres Verm\xf6gens zu best\xe4tigen.","title":"Wie hilft AML Zapex, Sie vor Blockierungen zu sch\xfctzen?"},{"content":"Die \xdcberpr\xfcfungsergebnisse basieren auf internationalen Datenbanken, die st\xe4ndig aktualisiert werden. Eine Adresse, bei der gestern ein Risiko von 0% bestand, hat den Verm\xf6genswert also m\xf6glicherweise heute an eine riskante Gegenpartei erhalten oder an sie weitergegeben. In diesem Fall wird sich die Risikobewertung \xe4ndern. Wenn Sie sich des Ergebnisses sicher sein und herausfinden m\xf6chten, was die Ursache f\xfcr das hohe Risiko ist, k\xf6nnen wir eine detaillierte \xdcberpr\xfcfung f\xfcr Sie durchf\xfchren. Senden Sie uns dazu eine E-Mail an <a href=\\"mailto:info@AML Zapex.com\\">\\ninfo@AML Zapex.com </a>","title":"Das Risiko ist h\xf6her als 50%, aber ich bin mir sicher, dass die Adresse zuverl\xe4ssig ist. Was ist zu tun?"},{"content":"Eine Antwort darauf h\xe4ngt von Ihrem individuellen Risikomodell ab. Die allgemeine Empfehlung w\xe4re, jedes Mal, wenn Sie mit einer unbekannten Brieftasche oder einem intelligenten Vertrag interagieren, einen AML-Check durchzuf\xfchren.","title":"Wie oft wird empfohlen, Kontrollen durchzuf\xfchren?"},{"content":"Nach Best\xe4tigung der Transaktion wird der Restbetrag wieder aufgef\xfcllt: <br /> • bis zu 10 Minuten, wenn die Zahlung innerhalb von 24 Stunden nach Rechnungsstellung erfolgt ist, <br /> • bis zu 25 Minuten, wenn die Zahlung innerhalb von 24 Stunden nach Rechnungsstellung erfolgt ist. Insgesamt werden BTC, ETH, USDT und Fiat schneller verarbeitet als andere M\xfcnzen.","title":"Wie schnell wird das Guthaben wieder aufgef\xfcllt?"},{"content":"Wenn Sie Schecks ohne Verfallsdatum gekauft haben, verbleiben diese auf Ihrem Konto und Sie k\xf6nnen sie jederzeit einl\xf6sen.<br /><br /> Wenn Sie Schecks mit einem Verfallsdatum gekauft haben, werden diese nach Ablauf des Verfallsdatums von Ihrem Konto abgezogen.","title":"Was passiert, wenn ich nicht jeden Monat alle meine Schecks verwende?"},{"content":"Sie k\xf6nnen bei Bedarf zus\xe4tzliche Schecks kaufen. Die Anzahl der Schecks wird immer in Ihren Benutzerinformationen angezeigt.","title":"Was ist, wenn ich mehr Schecks ben\xf6tige?"},{"content":"AML Zapex sichert Daten durch die Befolgung strikter Richtlinien, was durch unsere Zertifizierungen nach ISO 9001 und ISO 27001 best\xe4tigt wird. <br /><br />\\nUnsere ISO 9001-Zertifizierung betont unser Engagement f\xfcr die Erbringung einer konsistenten Qualit\xe4t und die Steigerung der Kundenzufriedenheit. Unsere ISO 27001-Zertifizierung ist ein weiterer Beleg f\xfcr unsere Bem\xfchungen, hohe Standards f\xfcr die Informationssicherheit einzuhalten, sensible Daten zu sch\xfctzen und die Einhaltung gesetzlicher Vorschriften zu erf\xfcllen.<br /><br />\\nErfahren Sie <a href=\\"https://AML Zapex.com/de/certifications\\">hier</a> mehr \xfcber unsere Zertifizierungen.\\n","title":"Wie stellt AML Zapex den Datenschutz sicher?"}],"title":"FAQs"},"howMatch":{"button":"Kontaktieren Sie uns","label":"Die erste \xdcberpr\xfcfung ist kostenlos","note":"Unseren Statistiken zufolge <b>ist jede vierte Wallet verd\xe4chtig.</b> <br />Durch das Ausgeben von ein paar Euros, k\xf6nnen Sie sich Verluste in H\xf6he von mehreren tausend Euros ersparen.","perCheck":"pro Scheck","startsFrom":"Ab","title":"Wie hoch ist der Preis f\xfcr Ihre innere Ruhe?"},"officers":{"items":{"[0]":{"label":"Co-Founder","name":"Slava Demchuk"},"[1]":{"label":"Chief Operating Officer","name":"Vasily Vidmanov"},"[2]":{"label":"Chief Commercial Officer","name":"Andrew Aleksandrov"},"[3]":{"label":"Blockchain-Analyst","name":"Sid Panda"},"[4]":{"label":"Rechtsanwalt / Zertifizierter AML-Spezialist","name":"Niko Demchuk"},"[5]":{"label":"Rechtsberater","name":"Ganna Voievodina"},"[6]":{"label":"Business development manager","name":"Vlad Raskosow"},"[7]":{"label":"Business Development Manager","name":"Denis Shestak"},"[8]":{"label":"Customer support manager","name":"Nikita Raskosow"},"anmolJain":{"label":"VP","name":"Anmol Jain"},"graemeHampton":{"label":"Certified AML Specialist","name":"Graeme Hampton"},"nikoDemchuk":{"label":"Certified AML Specialist","name":"Niko Demchuk"},"sidPanda":{"label":"Blockchain Analyst","name":"Sid Panda"},"slavaDemchuk":{"label":"Co-Founder","name":"Slava Demchuk"}},"text":"AML-Spezialisten helfen bei der L\xf6sung schwieriger Situationen und sch\xfctzen Sie vor Geldstrafen und Sperrungen. Die Experten vertreten Ihre Interessen, wenn n\xf6tig, auch vor Gericht.","title":"Unser Core-Team"},"partners":{"title":"Sie vertrauen uns"},"prime":{"AML ZapexOnWeb":"Pers\xf6nliches B\xfcro","button":"\xdcberpr\xfcfung anfangen","checkInTelegram":"Eine Wallet pr\xfcfen","description":"Die AML Zapex-Plattform automatisiert AML/KYC-Verfahren und reduziert die Kosten f\xfcr die Einhaltung von Vorschriften","primaryButton":"Eine Demo anfordern","secondaryButton":"Chat bot","telegramCheck":"Telegrampr\xfcfung","title":"All-in-One Compliance-L\xf6sung f\xfcr <nobr>Krypto-Gesch\xe4fte</nobr>"},"reviews":{"description":"Erkunden Sie unsere Dienste anhand von Kunden, denen wir bereits geholfen haben.","items":[{"note":"Den • <a href=\\"https://csgo500.com\\">CSGO500","quote":"Wir nutzen AML Zapex nun schon seit fast zwei Jahren und haben dank der Software Hunderte von Bedrohungen erfolgreich identifiziert und gestoppt. Auch in Zukunft werde ich auf jeden Fall weiterhin diese Dienste nutzen."},{"note":"CEO • <a href=\\"https://uniochange.com\\">Uniochange</a>","quote":"Die Krypto-Community hatte Schwierigkeiten, Quellen verd\xe4chtiger Gelder zu identifizieren, aber nach der Einf\xfchrung von AML Zapex verschwanden alle Schwierigkeiten. Ich empfehle jedem, diesen Service zu nutzen, bis Ihre Aktivit\xe4t vollst\xe4ndig legal ist."},{"note":"<a href=\\"https://alltrust.me\\">AllTrust</a>","quote":"Wir sind sehr zufrieden mit AML Zapex. Dank der Integration mit unserer Plattform konnten wir eine gro\xdfe Anzahl von Transaktionen mit illegalen Geldern verhindern. Wir sind zuversichtlich, dass wir unsere Zusammenarbeit weiter ausbauen werden."},{"note":"<a href=\\"https://guarda.com\\">Guarda</a>","quote":"AML Zapex ist schon seit geraumer Zeit ein gro\xdfartiger Partner f\xfcr uns. Es ist unglaublich einfach zu bedienen, zuverl\xe4ssig und, was am wichtigsten ist, bietet unseren Nutzern zus\xe4tzliche Sicherheit. Wir von Guarda freuen uns auf die Fortsetzung unserer Zusammenarbeit."}],"title":"Was unsere Kunden \xfcber uns sagen"},"services":{"description":"Wir bieten ein ganzes Paket von Optionen an, damit Sie sicher mit Kryptow\xe4hrungen arbeiten k\xf6nnen","items":[{"description":"API-L\xf6sungen, die AML-Compliance-Tools innerhalb Ihres aktuellen Systems erm\xf6glichen. Alle Transaktionen werden automatisch \xfcberpr\xfcft, um die AML- und FATF-Anforderungen zu erf\xfcllen und Ihr Gesch\xe4ftsrisiko somit zu verringern.","title":"AML/KYT-Screening"},{"description":"Der optimierte und automatisierte Verifizierungsprozess erm\xf6glicht es Ihrem Unternehmen, Kunden schnell aufzunehmen, den manuellen Aufwand zu reduzieren und das Risiko von Identit\xe4tsbetrug und illegalen Aktivit\xe4ten zu verringern.","title":"KYC f\xfcr Unternehmen"},{"description":"Starten Sie Ihr Krypto-Unternehmen mit Leichtigkeit, Einfachheit und Vertrauen durch unsere gestraffte AML- und KYC-Beratung, die von Anfang an eine reibungslose Einhaltung der Vorschriften und ein effektives Risikomanagement gew\xe4hrleistet.","title":"AML/KYC-Verfahren"},{"description":"Vereinfachen Sie die Er\xf6ffnung von Firmenkonten bei CEX EMI mit unserer Expertenhilfe, um sicherzustellen, dass Ihr Fokus auf dem Gesch\xe4ftswachstum in der Krypto-Branche bleibt.","title":"Firmenkonten bei CEX/EMI"},{"description":"Finden Sie gestohlene Kryptow\xe4hrungen mit den komplexen Blockchain-Untersuchungen von AML Zapex wieder, identifizieren Sie schnell die Schuldigen und verfolgen Sie die Gelder f\xfcr eine effektive R\xfcckgewinnung.","title":"Blockchain-Untersuchungen"}],"learnMore":"Mehr erfahren","title":"AML Zapex’s Dienstleistungen"},"stats":{"items":[{"description":"Betrag der aufgedeckten riskanten Gelder","title":"+ 100 000 000 $"},{"description":"Compliance-Abteilungen, die unsere AML-Verfahren akzeptieren","title":"6 500 000+"},{"description":"Kontrollierte Dienstleistungsanbieter","title":"Mehr als 60.000"}]},"whatElse":{"items":[{"button":"Eine Adresse \xfcberpr\xfcfen","description":"Wir zeigen an, ob die Adresse auf den Sanktionslisten steht. Jegliche Interaktion mit solchen Adressen kann zu Geldbu\xdfen, Sperrungen oder dem Entzug der Lizenz f\xfchren.","title":"Schutz vor sanktionierten Wallets"},{"button":"Kostenlose Beratung","description":"Unser Expertenteam wird den genauen Pfad zu den gestohlenen Assets zur\xfcckverfolgen und alles in ihrer Macht Stehende tun, um Ihnen bei der R\xfcckgewinnung zu helfen.","note":"Sie zahlen nur f\xfcr das Ergebnis. Wenn wir Ihnen nicht helfen k\xf6nnen, werden wir Ihnen dies direkt mitteilen.","title":"Hilfe bei der R\xfcckgewinnung von gestohlenen Kryptos"},{"button":"Dokumentation anzeigen","description1":"Pr\xfcfen Sie automatisch alle eingehenden Transaktionen und reduzieren Sie den Arbeitsaufwand erheblich. ","description2":"Unsere Programmierer helfen Ihnen gerne dabei, unsere API m\xf6glichst effizient in Ihren Dienst zu integrieren.","title":"API-Integration"}],"title":"Was bieten wir noch an?"},"why":{"items":[{"buttonText":"Jetzt besprechen","description":"Personenbezogene Daten werden in \xdcbereinstimmung mit dem DSGVO verarbeitet und gespeichert.","description1":"AML Zapex bietet eine breite Palette von Compliance-L\xf6sungen, die f\xfcr jeden Kunden individuell angepasst sind.","description2":"Wir sind zuversichtlich, Ihre Anforderungen zu erf\xfcllen, nachdem wir bereits <b>300+ Krypto-Unternehmen</b> aller Gr\xf6\xdfen in 25 Gerichtsbarkeiten geholfen haben.","title":"Personalisierte Vorgehensweise"},{"description":"Wir haben die entsprechenden Zertifikate, die Sie den Kontrollbeh\xf6rden vorlegen k\xf6nnen.","description1":"Wir bieten ma\xdfgeschneiderte Dienstleistungen wie KYT/Wallet-Screening, KYC, AML und mehr f\xfcr Krypto-Unternehmen an","description2":"Die Risikobewertung von AML Zapex basiert auf mehreren Datenquellen und stellt sicher, dass wir \xfcber die zuverl\xe4ssigsten Daten der Branche verf\xfcgen.","description3":"Unsere benutzerfreundlichen L\xf6sungen vereinfachen Ihre Unternehmensprozesse und machen Compliance unkompliziert.","title":"Integrierte Compliance-Plattform"},{"buttonText":"Kontakt","description":"Bei AML Zapex legen wir gro\xdfen Wert auf schnellen und freundlichen Kundensupport. Wir sind rund um die Uhr f\xfcr unsere Kunden da, damit Sie stets bestens betreut werden.","description1":"Wir sind rund um die Uhr erreichbar, so dass jedes Problem schnell und einfach \xfcber einen Live-Chat gel\xf6st werden kann.","description2":"Wir sind auch nur Menschen, deshalb reagieren wir nachts vielleicht nicht so schnell wie tags\xfcber ✌️","note":"Eine Antwort w\xe4hrend der Nacht kann etwas l\xe4nger dauern.","title":"Kundensupport"},{"description":"Wir haben {{value}} davor bewahrt, auf Exchanges gesperrt zu werden","title":"Erfahrung"}],"title":"Warum AML Zapex?"},"works":{"description":"Video-Pr\xe4sentation","title":"Wie funktioniert das?"},"yearStats":{"label":"In den letzten drei Jahren habe und Viele vertraut :","text":"Unternehmen und Exchanges"}},"menuProducts":{"AML ZapexPro":{"description":"R\xfcckverfolgung von Quelle und Ziel der Transaktionen","label":"AML Zapex Pro"},"amlTraining":{"description":"Spezialisierte Schulungsprogramme f\xfcr die Kryptow\xe4hrungsbranche","label":"AML-Schulung"},"chatBot":{"description":"Sofortige AML-Checks, der einfachste Weg, unsere Produkte zu testen","label":"AML-Chatbot"},"consulting":{"description":"Hilfestellung f\xfcr Kryptounternehmen bei AML-Verfahren, Schulungen und der Einrichtung von Bankkonten","label":"Beratung"},"dynamic":{"description":"Nutzen Sie unsere \xdcbergangsadressen, um Risiken zu vermeiden","label":"Dynamische H\xe4ndleradressen"},"forBusiness":"F\xfcr Unternehmen","forPersonalUse":"F\xfcr den pers\xf6nlichen Gebrauch","investigation":{"description":"Unterst\xfctzung bei der Wiederherstellung gestohlener Kryptow\xe4hrungen","label":"Untersuchung"},"kyc":{"description":"Verifizieren Sie mehr Nutzer mit einer schnellen, sicheren, automatisierten und effizienten Verifizierung","label":"KYC"},"kyt":{"description":"Automatische Pr\xfcfung aller Transaktionen und Geldb\xf6rsen \xfcber die API","label":"KYT"},"mobileApp":{"description":"AML-Checks in einer benutzerfreundlichen mobilen App","label":"Mobile Anwendung"}},"notFindQuestion":{"answer":"Wir antworten in nur 30 Sekunden","description":"Kontaktieren Sie uns \xfcber den Messenger. Unser <b>24/7</b>-Support ist darauf ausgelegt, jedes Anliegen rasch und im Live-Chat-Format zu l\xf6sen.","inTelegram":"Wir sind auf Telegram","note":"Wir sind <b>rund um die Uhr erreichbar</b>, jedoch kann es nachts zu etwas l\xe4ngeren Antwortzeiten kommen.","onMessenger":"Wir sind auf Messenger","title":"Fehlt Ihre Frage in unserer Liste?"},"partners":{"title":"Unsere 300+ Kunden und Partner"},"pro":{"experience":{"items":{"consistent":{"description":"Sorgen Sie daf\xfcr, dass Ihr Unternehmen die Vorschriften f\xfcr Kryptow\xe4hrungen in Ihrem Land einh\xe4lt, und verschaffen Sie sich einen umfassenden Einblick in die On-Chain-Aktivit\xe4ten. Verlassen Sie sich auf Echtzeit-Screening, um verd\xe4chtige Konten oder Transaktionen zu erkennen.","title":"Einheitliche Compliance"},"efficient":{"description":"<span>Aufdecken. Untersuchen. Ma\xdfnahmen ergreifen.</span> Mit unseren Ermittlungstools k\xf6nnen Sie Quelle und Ziel von Kryptow\xe4hrungstransaktionen identifizieren. Verwenden Sie unsere hochmoderne Technologie, um kriminelle Aktivit\xe4ten einzud\xe4mmen und Ermittlungen schneller und pr\xe4ziser durchzuf\xfchren.","title":"Effiziente Nachforschungen"}},"title":"Erhalten Sie Einblicke in die Blockchain in h\xf6chster Qualit\xe4t - die besten Daten zu erschwinglichen Preisen"},"faq":{"info":{"answer":"Wir antworten innerhalb von 30 Sekunden","description":"Erhalten Sie rund um die Uhr schnellen und effizienten Support. Kontaktieren Sie uns per Telegram, wenn Sie Fragen oder Unterst\xfctzung haben. Keine Bots, nur menschliche Unterst\xfctzung.","inTelegram":"Wir sind auf Telegram","note":"Eine Antwort in der Nacht kann etwas l\xe4nger dauern.","title":"Deine Frage ist nicht auf der Liste?"},"title":"H\xe4ufig gestellte Fragen"},"features":{"items":[{"description":"AML Zapex Pro basiert auf den besten verf\xfcgbaren Daten. Wir scannen Wallets und Transaktionen, um Verbindungen zu illegalen Kryptofonds zu finden, die f\xfcr kriminelle oder fragw\xfcrdige Aktivit\xe4ten verwendet werden, einschlie\xdflich Darknet-M\xe4rkte, Betrug, Ransomware und Mixer.","title":"Au\xdfergew\xf6hnlicher Datenzugriff"},{"description":"AML Zapex Pro wandelt die Komplexit\xe4t der Blockchain-Analyse in Einfachheit um.","title":"Geradlinige Suchoptionen"},{"description":"AML Zapex Pro verbindet Transaktionen von Kryptow\xe4hrungen mit realen Entit\xe4ten.","title":"Virtuelle Transaktionen mit realen Entit\xe4ten verbinden"},{"description":"AML Zapex Pro ist mit seiner einfachen Benutzeroberfl\xe4che f\xfcr jeden leicht zu bedienen. Dank unseres optimierten Prozesses k\xf6nnen Sie Gelder zur\xfcckverfolgen und risikoreiche Konten und Transaktionen kennzeichnen.","title":"Erweiterte Zug\xe4nglichkeit"},{"description":"Erzielen Sie schnellere Ergebnisse mit AML Zapex Pro, der Fonds \xfcber Blockchains hinweg verfolgt. Identifizieren Sie On- und Off-Ramp-Adressen und Swap-Aktivit\xe4ten, um versteckte Aktionen zu erkennen.","title":"Klare Krypto-Pfade"},{"description":"AML Zapex Pro erm\xf6glicht es Ihnen, eine solide Erz\xe4hlung zu erstellen, die die Bewegung von Kryptogeld zeigt. Exportieren und visualisieren Sie Daten, um ein vollst\xe4ndiges Bild der kriminellen Aktivit\xe4ten zu erstellen.","title":"Weitere \xfcberzeugende F\xe4lle"}],"title":"AML Zapex Pro Eigenschaften"},"hero":{"button":"AML Zapex Pro kaufen","description":"AML Zapex Pro ist ein Blockchain-Analysetool, das Ermittler und Compliance-Teams mit den besten Daten der Branche ausstattet.","info":{"compliance":{"description":"Optimieren Sie Ihre KYT- und AML-Prozesse zur Aufrechterhaltung der Compliance.","title":"Konformit\xe4t"},"investigations":{"description":"Kl\xe4ren Sie F\xe4lle z\xfcgig mit effizienter On-Chain-Verfolgung. Stoppen Sie die Kryptokriminalit\xe4t","title":"Nachforschungen"}},"title":"Entwirren Sie das Netz der On-Chain-Kriminalit\xe4t"},"secure":{"buttonText":"AML Zapex Pro kaufen","title":"Sch\xfctzen Sie Ihr Krypto mit einem Wallet- und Transaktionsrisiko-Screening"},"sets":{"buttonText":"AML Zapex Pro kaufen","items":[{"list":["Legitime Krypto-Projekte","Sanktionen und Watchlists","Bekannte Ransomware","Terroristen und Geld Geldw\xe4scherei-Gruppen"],"title":"Aufschlussreiche Daten"},{"list":["\xdcbersichtliche Daten","Reibungsloses Benutzererlebnis","Einfache Inbetriebnahme"],"title":"Benutzerfreundlichkeit"},{"list":["Risikobewertung","Erkennung krimineller Aktivit\xe4ten","Ermutigung zur Zusammenarbeit"],"title":"Sicherheit und Schutz"}],"title":"Was unterscheidet<br /> AML Zapex Pro von anderen?"},"superior":{"items":{"analyzeRisk":{"description":"Pr\xfcfen Sie Konten anhand von kritischen \xdcberwachungslisten, einschlie\xdflich der OFAC-Liste.","title":"Risiken analysieren"},"continuousTracking":{"description":"Verfolgen Sie die Bewegungen von Geldern in Echtzeit.","title":"Fortlaufende Beobachtung"},"gatherEvidence":{"description":"Verwenden Sie unsere gesch\xfctzten Daten, um Ihre Nachforschungen zu unterst\xfctzen.","title":"Beweismittel sammeln"},"reliableData":{"description":"Zugriff auf Informationen f\xfcr Unternehmen mit verschiedenen Risikostufen.","title":"Zuverl\xe4ssige Daten"},"try":{"buttonText":"Jetzt aktivieren!","title":"Sch\xf6pfen Sie das volle Potenzial unserer L\xf6sung aus"},"userFriendlyDashboard":{"description":"Einfache Navigation und Visualisierung wichtiger Daten.","title":"Benutzerfreundliches Dashboard"}},"title":"\xdcberragendes Design und Funktionalit\xe4t"}},"saleBanner":{"text1":"Genie\xdfen Sie 15% Rabatt auf alle Tarife","text2":"Bis 30. Dezember 2023"},"seo":{"cryptoChecker":{"description":"AML Zapex - ein Tool zur \xdcberpr\xfcfung von Wallets und zum Schutz von Kryptow\xe4hrungen vor illegalen Aktivit\xe4ten. AML Zapex zeigt, wie Bitcoin und Altcoins mit verd\xe4chtigen Transaktionen und kriminellen Aktivit\xe4ten verbunden sind.","title":"Umfassende L\xf6sung f\xfcr die \xdcberpr\xfcfung und den Schutz von Kryptow\xe4hrungen | AML Zapex"},"cryptoCheckerLand":{"description":"AML Zapex - Zuverl\xe4ssiger Service zur \xdcberpr\xfcfung und Absicherung von Krypto-Wallets gegen illegale Aktivit\xe4ten. Erfahren Sie, wie Ihr Bitcoin und Altcoins mit verd\xe4chtigen Transaktionen in Verbindung stehen k\xf6nnten.","title":"AML Zapex - Online-Pr\xfcfung und Schutz von Kryptowallets"},"cryptoComplianceConsulting":{"description":"Expertenberatung f\xfcr Krypto-Unternehmen: AML/KYC-Verfahren, Transaktions\xfcberwachung und umfassende Compliance-Beratung","title":"Beratungsdienste f\xfcr Kryptow\xe4hrungen: AML-Compliance und rechtliche Unterst\xfctzung"},"home":{"description":"AML Zapex bietet fortschrittliche AML-Compliance-L\xf6sungen f\xfcr Cryptocurrency-Unternehmen. Nutzen Sie unseren AML-Bot f\xfcr umfassende \xdcberpr\xfcfungen und stellen Sie die Einhaltung der neuesten Vorschriften sicher. Sch\xfctzen Sie Ihr Verm\xf6gen mit der umfassenden AML-Plattform (Anti-Geldw\xe4sche) von AML Zapex.","title":"AML Zapex - Integrierte AML Compliance-L\xf6sungen f\xfcr Kryptow\xe4hrungen (Anti-Geldw\xe4sche)"},"kyc":{"description":"Schnelle und sichere KYC-Verifizierungsplattform, die automatisierte L\xf6sungen f\xfcr KYC, AML, Identifizierung und Steuerverifizierung bietet. Erleichtert das globale Onboarding von Kunden.","title":"KYC/AML-Dienstleister f\xfcr Enterprise Compliance | Automatisierte KYC-Pr\xfcfung"},"kyt":{"description":"Automatisieren Sie die Risikobewertung f\xfcr eingehende Krypto-Transaktionen mit AML Zapex\'s AML API. Gew\xe4hrleisten Sie die Einhaltung von KYC und AML mit unseren umfassenden Anti-Geldw\xe4sche-L\xf6sungen.","title":"API f\xfcr AML-\xdcberwachung und Compliance bei Kryptow\xe4hrungstransaktionen | AML Zapex"},"pro":{"description":"Mit AML Zapex Pro \xfcberwachen Sie Krypto-Transaktionen, bewerten Risiken und gew\xe4hrleisten AML-Konformit\xe4t effizient.","title":"AML Zapex Pro: Blockchain-Analyse f\xfcr schnelle Ermittlungen und Compliance"},"reclaimCrypto":{"description":"Unser Team ist auf die R\xfcckgewinnung gestohlener Kryptow\xe4hrungen durch gr\xfcndliche Ermittlungen und Sicherung von Verm\xf6genswerten, inklusive Sperrung auf B\xf6rsen und Wallets, spezialisiert.","title":"Unterst\xfctzung bei der R\xfcckholung und Sicherung gestohlener Kryptow\xe4hrungen | AML Zapex Services"},"training":{"description":"Nehmen Sie an einer spezialisierten AML-Schulung f\xfcr die Kryptoindustrie teil. Sch\xfctzen Sie Ihr Unternehmen vor Finanzkriminalit\xe4t und regulatorischen Risiken mit den umfassenden Compliance-Kursen von AML Zapex.","title":"AML-Schulung und Zertifizierung f\xfcr Krypto-Unternehmen | Kurs zur Bek\xe4mpfung der Geldw\xe4sche"}},"training":{"benefits":{"description":"Verbessern Sie Ihr Kryptogesch\xe4ft mit AML Zapex Training:","items":{"1":{"title":"Steigern Sie die betriebliche Effizienz"},"2":{"title":"Reputation festigen"},"3":{"title":"Den regulatorischen Risiken einen Schritt voraus"}},"title":"Vorteile der Ausbildung"},"consult":{"description":"F\xfcllen Sie das Formular aus, um sich anzumelden","formTitle":"Jetzt anmelden - Master AML & Blockchain Analytics!","title":"Sind Sie bereit, loszulegen?"},"courses":{"buttonText":"Jetzt einschreiben","item1":{"title":"Live-Schulung mit einem Spezialisten"},"item2":{"title":"Digitales Abschlusszertifikat"},"item3":{"title":"Fallstudien und Diskussionen"},"title":"Die Kurse umfassen"},"faq":{"description":"In unseren FAQs erfahren Sie mehr \xfcber die Notwendigkeit, die H\xe4ufigkeit und die Zertifizierungsaspekte unserer AML-Schulungen.","items":[{"content":"Ja, viele Gerichtsbarkeiten verlangen AML-Schulungen f\xfcr lizenzierte und nicht lizenzierte Kryptounternehmen. Die spezifischen Anforderungen k\xf6nnen jedoch je nach Land oder Region variieren.","title":"Sind AML-Schulungen f\xfcr alle Unternehmen in der Krypto-Branche obligatorisch?"},{"content":"AML-Schulungen sollten regelm\xe4\xdfig durchgef\xfchrt werden, um sicherzustellen, dass die Mitarbeiter mit den neuesten Entwicklungen vertraut sind. Die H\xe4ufigkeit kann je nach Industriestandards, regulatorischen Anforderungen und der Risikobewertung des Unternehmens variieren.","title":"Wie oft sollten AML-Schulungen durchgef\xfchrt werden?"},{"content":"Ja, es gibt verschiedene Zertifizierungsprogramme f\xfcr Personen, die sich auf die Einhaltung von AML-Richtlinien spezialisiert haben. Diese Zertifizierungen best\xe4tigen das Wissen und die Expertise von Fachleuten in diesem Bereich. Als lizenzierte Fachleute in diesem Bereich bietet AML Zapex den Teilnehmern nach Abschluss der AML Zapex-Schulung eine Zertifizierung an, die ihre Glaubw\xfcrdigkeit im Bereich der AML-Compliance weiter erh\xf6ht.","title":"Gibt es Zertifizierungsprogramme f\xfcr AML-Experten?"},{"content":"Seri\xf6se Anbieter von AML-Schulungen k\xf6nnen \xfcber Branchenverb\xe4nde, Aufsichtsbeh\xf6rden und spezialisierte Schulungsorganisationen gefunden werden. Die Wahl eines Anbieters mit einer soliden Erfolgsbilanz und Fachwissen im Bereich der AML-Compliance ist entscheidend.","title":"Wo k\xf6nnen Unternehmen seri\xf6se Anbieter von AML-Schulungen finden?"}],"title":"Sie haben Fragen?"},"form":{"thankYou":{"description":"Wir freuen uns darauf, Sie dabei zu unterst\xfctzen, die betriebliche Effizienz zu verbessern, Ihren Ruf zu st\xe4rken und den regulatorischen Risiken in Ihrem Kryptogesch\xe4ft einen Schritt voraus zu sein.","title":"Vielen Dank, dass Sie AML Zapex f\xfcr Ihren AML-Schulungsbedarf gew\xe4hlt haben"}},"main":{"buttonText":"Los geht\'s","description":"Bef\xe4higung Ihrer Teams, das \xd6kosystem der Krypto-Compliance zu meistern","subtitle":"Ausbildung und Zertifizierung","title":"Krypto AML Compliance & Blockchain Analytics Schulung "},"trainings":{"blockchainEntries":[{"title":"Blockchain-Analytik"},{"title":"Geschichte"},{"title":"Wie es funktioniert"},{"title":"Risikobewertung"},{"title":"\xdcberpr\xfcfung von Transaktionen"},{"title":"\xdcberpr\xfcfung der Brieftasche"},{"title":"Krypto-Untersuchung"},{"title":"Herausforderungen in der Blockchain-Analytik"},{"title":"Marktteilnehmer"},{"title":"Verordnung"},{"title":"Anwendungsf\xe4lle"}],"course1":{"buttonText":"Zertifiziert werden","description1":"Diese spezialisierte Schulung auf Branchenebene bietet zentrale AML-Themen, die fachm\xe4nnisch ausgearbeitet wurden, um pr\xe4gnant und leicht verst\xe4ndlich zu sein. Die Zertifizierung bietet einen guten \xdcberblick f\xfcr Krypto-Unternehmen, die ihre Reise in die Krypto-Welt beginnen.","description2":"Nach der Schulung werden Sie in der Lage sein zu verstehen, was Geldw\xe4sche und andere Finanzverbrechen sind, die wichtigsten AML-Anforderungen zu verstehen, wie man interne AML-Prozesse aufbaut, AML-Risiken in der Kryptoindustrie und mehr.","duration":"3,5 Stunden","entryTitle":"Das Schulungsmodul umfasst die folgenden Kapitel:","title":"AML-Grundlagen f\xfcr Kryptogesch\xe4fte Schulung & Zertifizierung"},"course2":{"buttonText":"Zertifiziert werden","description":"Diese Schulung und Zertifizierung wurde von unseren Experten f\xfcr diejenigen ma\xdfgeschneidert, die bereits mit Kryptow\xe4hrungen vertraut sind und \xfcber grundlegende AML-Kenntnisse verf\xfcgen, aber ihre Expertise und ihr Verst\xe4ndnis f\xfcr Blockchain-Analytik erweitern m\xf6chten.","duration":"3 Stunden","entryTitle":"Das Schulungsmodul umfasst die folgenden Kapitel:","title":"Blockchain Analytics Mastery Schulung & Zertifizierung"},"fundamentalsEntries":[{"description":"Verst\xe4ndnis der Konzepte, Techniken und Indikatoren von Aktivit\xe4ten in den Bereichen Geldw\xe4sche und Terrorismusfinanzierung.","title":"Geldw\xe4sche und Terrorismusfinanzierung"},{"description":"Machen Sie die Teilnehmer mit den globalen AML-Standards, Vorschriften und rechtlichen Verpflichtungen vertraut, die f\xfcr die Kryptoindustrie spezifisch sind.","title":"AML-Standards und rechtlicher Rahmen"},{"description":"Identifizierung der inh\xe4renten Risiken von Kryptow\xe4hrungen wie Anonymit\xe4t, grenz\xfcberschreitende Transaktionen und die Verwendung digitaler Verm\xf6genswerte f\xfcr illegale Aktivit\xe4ten.","title":"Geldw\xe4scherisiken in der Kryptoindustrie"},{"description":"Untersuchung der Rollen und Verantwortlichkeiten verschiedener Interessengruppen im AML-Rahmen, einschlie\xdflich des Managements, der Compliance-Beauftragten und der internen Auditoren.","title":"Drei Verteidigungslinien"},{"description":"Bereitstellung von Richtlinien und Best Practices f\xfcr die Implementierung effektiver AML-Verfahren in Kryptounternehmen, einschlie\xdflich der Sorgfaltspflicht gegen\xfcber Kunden (CDD), Transaktions\xfcberwachung und Meldung verd\xe4chtiger Aktivit\xe4ten.","title":"AML-Verfahren"},{"description":"Verst\xe4ndnis der spezifischen AML-Anforderungen, die von den Aufsichtsbeh\xf6rden auferlegt werden, wie z. B. die F\xfchrung von Aufzeichnungen, Berichtspflichten und Methoden zur Risikobewertung.","title":"Wichtigste AML-Anforderungen"},{"description":"Einf\xfchrung der Teilnehmer in Blockchain-Analysetools und -techniken zur \xdcberwachung und Analyse von Transaktionen auf der Blockchain, um verd\xe4chtige Aktivit\xe4ten zu erkennen.","title":"Blockchain-Analytik"},{"description":"Schulung der Teilnehmer \xfcber internationale Sanktionsregime und dar\xfcber, wie wichtig es ist, Transaktionen und Unternehmen anhand von Sanktionslisten zu \xfcberpr\xfcfen.","title":"Sanktionen"},{"description":"Wir halten die Teilnehmer \xfcber die neuesten Trends, Taktiken und Methoden von Geldw\xe4schern und Terroristen auf dem Laufenden, um die AML-Ma\xdfnahmen entsprechend anzupassen.","title":"Vorherrschende Techniken, Methoden und Trends in ML/TF:"},{"description":"Arbeit an praktischen Aufgaben, die es den Teilnehmern erm\xf6glichen, ihr Wissen und ihre F\xe4higkeiten zur Probleml\xf6sung anzuwenden.","title":"Fallstudien"}],"seeAllProgram":"Alle Programme anzeigen","showLess":" Weniger anzeigen ","title":"Professionelle Schulungen und Zertifizierungen"},"why":{"buttonText":"Registrieren f\xfcr Details","description":"In der schnelllebigen Welt der Kryptow\xe4hrungen sollten Sie Ihr Unternehmen vor Finanzkriminalit\xe4t, beh\xf6rdlichen Strafen und Rufsch\xe4digung sch\xfctzen, indem Sie die Kunst und Wissenschaft der AML-Compliance beherrschen.","title":"Warum sollten Sie AML Zapex\'s AML Training w\xe4hlen?"}},"trustedMembers":{"title":"Wir sind vertrauensw\xfcrdige Mitglieder von"},"wasCopiedToClipboard":"wurde in die Zwischenablage kopiert","why":{"block1":{"buttonText":"Jetzt besprechen","description1":"AML Zapex bietet eine breite Palette von Compliance-L\xf6sungen, die f\xfcr jeden Kunden individuell angepasst sind","description2":"Wir sind zuversichtlich, Ihre Anforderungen zu erf\xfcllen, nachdem wir 300+ Krypto-Unternehmen aller Gr\xf6\xdfen in 25 Gerichtsbarkeiten geholfen haben","title":"Personalisierte Vorgehensweise"},"block2":{"description1":"Wir bieten ma\xdfgeschneiderte Dienstleistungen wie KYT/Wallet-Screening, KYC, AML und mehr f\xfcr Krypto-Unternehmen an","description2":"Die Risikobewertung von AML Zapex basiert auf mehreren Datenquellen und stellt sicher, dass wir \xfcber die zuverl\xe4ssigsten Daten der Branche verf\xfcgen","description3":"Unsere benutzerfreundlichen Dienstleistungen und L\xf6sungen straffen Ihre Unternehmensprozesse und reduzieren die Komplexit\xe4t von Compliance-Anbietern","title":"Integrierte Compliance-Plattform"},"block3":{"buttonText":"Kontakt","description":"AML Zapex versteht die Bedeutung eines schnellen, freundlichen Kundensupports, daher sind wir immer f\xfcr unsere Kunden da. 24/7 Support","note":"Eine Antwort w\xe4hrend der Nacht kann etwas l\xe4nger dauern","title":"Kundensupport"},"title":"Warum AML Zapex?"}}}');
            ee.use(et.Db).init({
                resources: {
                    ru: en,
                    ua: ei,
                    en: er,
                    es: eo,
                    fr: es,
                    de: ea
                },
                lng: "en",
                debug: !1,
                interpolation: {
                    escapeValue: !1
                }
            });
            var el = ee
        },
        8875: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "actionAsyncStorage", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
            let i = (0, n(95039).createAsyncLocalStorage)();
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        26208: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "actionAsyncStorage", {
                enumerable: !0,
                get: function () {
                    return i.actionAsyncStorage
                }
            });
            let i = n(8875);
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        95039: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "createAsyncLocalStorage", {
                enumerable: !0,
                get: function () {
                    return o
                }
            });
            let n = Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available");
            class i {
                disable() {
                    throw n
                }
                getStore() { }
                run() {
                    throw n
                }
                exit() {
                    throw n
                }
                enterWith() {
                    throw n
                }
            }
            let r = globalThis.AsyncLocalStorage;

            function o() {
                return r ? new r : new i
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        70827: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ReadonlyURLSearchParams: function () {
                        return l.ReadonlyURLSearchParams
                    },
                    RedirectType: function () {
                        return l.RedirectType
                    },
                    ServerInsertedHTMLContext: function () {
                        return c.ServerInsertedHTMLContext
                    },
                    notFound: function () {
                        return l.notFound
                    },
                    permanentRedirect: function () {
                        return l.permanentRedirect
                    },
                    redirect: function () {
                        return l.redirect
                    },
                    useParams: function () {
                        return m
                    },
                    usePathname: function () {
                        return d
                    },
                    useRouter: function () {
                        return p
                    },
                    useSearchParams: function () {
                        return u
                    },
                    useSelectedLayoutSegment: function () {
                        return f
                    },
                    useSelectedLayoutSegments: function () {
                        return h
                    },
                    useServerInsertedHTML: function () {
                        return c.useServerInsertedHTML
                    }
                });
            let i = n(67294),
                r = n(15320),
                o = n(51083),
                s = n(55363),
                a = n(74722),
                l = n(34138),
                c = n(23617);

            function u() {
                let e = (0, i.useContext)(o.SearchParamsContext);
                return (0, i.useMemo)(() => e ? new l.ReadonlyURLSearchParams(e) : null, [e])
            }

            function d() {
                return (0, i.useContext)(o.PathnameContext)
            }

            function p() {
                let e = (0, i.useContext)(r.AppRouterContext);
                if (null === e) throw Error("invariant expected app router to be mounted");
                return e
            }

            function m() {
                return (0, i.useContext)(o.PathParamsContext)
            }

            function h(e) {
                void 0 === e && (e = "children");
                let t = (0, i.useContext)(r.LayoutRouterContext);
                return t ? function e(t, n, i, r) {
                    let o;
                    if (void 0 === i && (i = !0), void 0 === r && (r = []), i) o = t[1][n];
                    else {
                        var l;
                        let e = t[1];
                        o = null != (l = e.children) ? l : Object.values(e)[0]
                    }
                    if (!o) return r;
                    let c = o[0],
                        u = (0, s.getSegmentValue)(c);
                    return !u || u.startsWith(a.PAGE_SEGMENT_KEY) ? r : (r.push(u), e(o, n, !1, r))
                }(t.tree, e) : null
            }

            function f(e) {
                void 0 === e && (e = "children");
                let t = h(e);
                if (!t || 0 === t.length) return null;
                let n = "children" === e ? t[0] : t[t.length - 1];
                return n === a.DEFAULT_SEGMENT_KEY ? null : n
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        34138: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ReadonlyURLSearchParams: function () {
                        return s
                    },
                    RedirectType: function () {
                        return i.RedirectType
                    },
                    notFound: function () {
                        return r.notFound
                    },
                    permanentRedirect: function () {
                        return i.permanentRedirect
                    },
                    redirect: function () {
                        return i.redirect
                    }
                });
            let i = n(2830),
                r = n(79399);
            class o extends Error {
                constructor() {
                    super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")
                }
            }
            class s extends URLSearchParams {
                append() {
                    throw new o
                }
                delete() {
                    throw new o
                }
                set() {
                    throw new o
                }
                sort() {
                    throw new o
                }
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        79399: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    isNotFoundError: function () {
                        return r
                    },
                    notFound: function () {
                        return i
                    }
                });
            let n = "NEXT_NOT_FOUND";

            function i() {
                let e = Error(n);
                throw e.digest = n, e
            }

            function r(e) {
                return "object" == typeof e && null !== e && "digest" in e && e.digest === n
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        78074: function (e, t) {
            "use strict";
            var n, i;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RedirectStatusCode", {
                enumerable: !0,
                get: function () {
                    return n
                }
            }), (i = n || (n = {}))[i.SeeOther = 303] = "SeeOther", i[i.TemporaryRedirect = 307] = "TemporaryRedirect", i[i.PermanentRedirect = 308] = "PermanentRedirect", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        2830: function (e, t, n) {
            "use strict";
            var i, r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    RedirectType: function () {
                        return i
                    },
                    getRedirectError: function () {
                        return c
                    },
                    getRedirectStatusCodeFromError: function () {
                        return f
                    },
                    getRedirectTypeFromError: function () {
                        return h
                    },
                    getURLFromRedirectError: function () {
                        return m
                    },
                    isRedirectError: function () {
                        return p
                    },
                    permanentRedirect: function () {
                        return d
                    },
                    redirect: function () {
                        return u
                    }
                });
            let o = n(77218),
                s = n(26208),
                a = n(78074),
                l = "NEXT_REDIRECT";

            function c(e, t, n) {
                void 0 === n && (n = a.RedirectStatusCode.TemporaryRedirect);
                let i = Error(l);
                i.digest = l + ";" + t + ";" + e + ";" + n + ";";
                let r = o.requestAsyncStorage.getStore();
                return r && (i.mutableCookies = r.mutableCookies), i
            }

            function u(e, t) {
                void 0 === t && (t = "replace");
                let n = s.actionAsyncStorage.getStore();
                throw c(e, t, (null == n ? void 0 : n.isAction) ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.TemporaryRedirect)
            }

            function d(e, t) {
                void 0 === t && (t = "replace");
                let n = s.actionAsyncStorage.getStore();
                throw c(e, t, (null == n ? void 0 : n.isAction) ? a.RedirectStatusCode.SeeOther : a.RedirectStatusCode.PermanentRedirect)
            }

            function p(e) {
                if ("object" != typeof e || null === e || !("digest" in e) || "string" != typeof e.digest) return !1;
                let [t, n, i, r] = e.digest.split(";", 4), o = Number(r);
                return t === l && ("replace" === n || "push" === n) && "string" == typeof i && !isNaN(o) && o in a.RedirectStatusCode
            }

            function m(e) {
                return p(e) ? e.digest.split(";", 3)[2] : null
            }

            function h(e) {
                if (!p(e)) throw Error("Not a redirect error");
                return e.digest.split(";", 2)[1]
            }

            function f(e) {
                if (!p(e)) throw Error("Not a redirect error");
                return Number(e.digest.split(";", 4)[3])
            } (r = i || (i = {})).push = "push", r.replace = "replace", ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        6718: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "requestAsyncStorage", {
                enumerable: !0,
                get: function () {
                    return i
                }
            });
            let i = (0, n(95039).createAsyncLocalStorage)();
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        77218: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    getExpectedRequestStore: function () {
                        return r
                    },
                    requestAsyncStorage: function () {
                        return i.requestAsyncStorage
                    }
                });
            let i = n(6718);

            function r(e) {
                let t = i.requestAsyncStorage.getStore();
                if (t) return t;
                throw Error("`" + e + "` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context")
            } ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        55363: function (e, t) {
            "use strict";

            function n(e) {
                return Array.isArray(e) ? e[1] : e
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getSegmentValue", {
                enumerable: !0,
                get: function () {
                    return n
                }
            }), ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        23617: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }),
                function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    ServerInsertedHTMLContext: function () {
                        return r
                    },
                    useServerInsertedHTML: function () {
                        return o
                    }
                });
            let i = n(61757)._(n(67294)),
                r = i.default.createContext(null);

            function o(e) {
                let t = (0, i.useContext)(r);
                t && t(e)
            }
        },
        10477: function (e, t, n) {
            "use strict";
            var i = n(83454);
            n(91479);
            var r = n(67294),
                o = r && "object" == typeof r && "default" in r ? r : {
                    default: r
                },
                s = void 0 !== i && i.env && !0,
                a = function (e) {
                    return "[object String]" === Object.prototype.toString.call(e)
                },
                l = function () {
                    function e(e) {
                        var t = void 0 === e ? {} : e,
                            n = t.name,
                            i = void 0 === n ? "stylesheet" : n,
                            r = t.optimizeForSpeed,
                            o = void 0 === r ? s : r;
                        c(a(i), "`name` must be a string"), this._name = i, this._deletedRulePlaceholder = "#" + i + "-deleted-rule____{}", c("boolean" == typeof o, "`optimizeForSpeed` must be a boolean"), this._optimizeForSpeed = o, this._serverSheet = void 0, this._tags = [], this._injected = !1, this._rulesCount = 0;
                        var l = document.querySelector('meta[property="csp-nonce"]');
                        this._nonce = l ? l.getAttribute("content") : null
                    }
                    var t = e.prototype;
                    return t.setOptimizeForSpeed = function (e) {
                        c("boolean" == typeof e, "`setOptimizeForSpeed` accepts a boolean"), c(0 === this._rulesCount, "optimizeForSpeed cannot be when rules have already been inserted"), this.flush(), this._optimizeForSpeed = e, this.inject()
                    }, t.isOptimizeForSpeed = function () {
                        return this._optimizeForSpeed
                    }, t.inject = function () {
                        var e = this;
                        if (c(!this._injected, "sheet already injected"), this._injected = !0, this._optimizeForSpeed) {
                            this._tags[0] = this.makeStyleTag(this._name), this._optimizeForSpeed = "insertRule" in this.getSheet(), this._optimizeForSpeed || (s || console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."), this.flush(), this._injected = !0);
                            return
                        }
                        this._serverSheet = {
                            cssRules: [],
                            insertRule: function (t, n) {
                                return "number" == typeof n ? e._serverSheet.cssRules[n] = {
                                    cssText: t
                                } : e._serverSheet.cssRules.push({
                                    cssText: t
                                }), n
                            },
                            deleteRule: function (t) {
                                e._serverSheet.cssRules[t] = null
                            }
                        }
                    }, t.getSheetForTag = function (e) {
                        if (e.sheet) return e.sheet;
                        for (var t = 0; t < document.styleSheets.length; t++)
                            if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                    }, t.getSheet = function () {
                        return this.getSheetForTag(this._tags[this._tags.length - 1])
                    }, t.insertRule = function (e, t) {
                        if (c(a(e), "`insertRule` accepts only strings"), this._optimizeForSpeed) {
                            var n = this.getSheet();
                            "number" != typeof t && (t = n.cssRules.length);
                            try {
                                n.insertRule(e, t)
                            } catch (t) {
                                return s || console.warn("StyleSheet: illegal rule: \n\n" + e + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), -1
                            }
                        } else {
                            var i = this._tags[t];
                            this._tags.push(this.makeStyleTag(this._name, e, i))
                        }
                        return this._rulesCount++
                    }, t.replaceRule = function (e, t) {
                        if (this._optimizeForSpeed) {
                            var n = this.getSheet();
                            if (t.trim() || (t = this._deletedRulePlaceholder), !n.cssRules[e]) return e;
                            n.deleteRule(e);
                            try {
                                n.insertRule(t, e)
                            } catch (i) {
                                s || console.warn("StyleSheet: illegal rule: \n\n" + t + "\n\nSee https://stackoverflow.com/q/20007992 for more info"), n.insertRule(this._deletedRulePlaceholder, e)
                            }
                        } else {
                            var i = this._tags[e];
                            c(i, "old rule at index `" + e + "` not found"), i.textContent = t
                        }
                        return e
                    }, t.deleteRule = function (e) {
                        if (this._optimizeForSpeed) this.replaceRule(e, "");
                        else {
                            var t = this._tags[e];
                            c(t, "rule at index `" + e + "` not found"), t.parentNode.removeChild(t), this._tags[e] = null
                        }
                    }, t.flush = function () {
                        this._injected = !1, this._rulesCount = 0, this._tags.forEach(function (e) {
                            return e && e.parentNode.removeChild(e)
                        }), this._tags = []
                    }, t.cssRules = function () {
                        var e = this;
                        return this._tags.reduce(function (t, n) {
                            return n ? t = t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules, function (t) {
                                return t.cssText === e._deletedRulePlaceholder ? null : t
                            })) : t.push(null), t
                        }, [])
                    }, t.makeStyleTag = function (e, t, n) {
                        t && c(a(t), "makeStyleTag accepts only strings as second parameter");
                        var i = document.createElement("style");
                        this._nonce && i.setAttribute("nonce", this._nonce), i.type = "text/css", i.setAttribute("data-" + e, ""), t && i.appendChild(document.createTextNode(t));
                        var r = document.head || document.getElementsByTagName("head")[0];
                        return n ? r.insertBefore(i, n) : r.appendChild(i), i
                    },
                        function (e, t) {
                            for (var n = 0; n < t.length; n++) {
                                var i = t[n];
                                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                            }
                        }(e.prototype, [{
                            key: "length",
                            get: function () {
                                return this._rulesCount
                            }
                        }]), e
                }();

            function c(e, t) {
                if (!e) throw Error("StyleSheet: " + t + ".")
            }
            var u = function (e) {
                for (var t = 5381, n = e.length; n;) t = 33 * t ^ e.charCodeAt(--n);
                return t >>> 0
            },
                d = {};

            function p(e, t) {
                if (!t) return "jsx-" + e;
                var n = String(t),
                    i = e + n;
                return d[i] || (d[i] = "jsx-" + u(e + "-" + n)), d[i]
            }

            function m(e, t) {
                var n = e + t;
                return d[n] || (d[n] = t.replace(/__jsx-style-dynamic-selector/g, e)), d[n]
            }
            var h = function () {
                function e(e) {
                    var t = void 0 === e ? {} : e,
                        n = t.styleSheet,
                        i = void 0 === n ? null : n,
                        r = t.optimizeForSpeed,
                        o = void 0 !== r && r;
                    this._sheet = i || new l({
                        name: "styled-jsx",
                        optimizeForSpeed: o
                    }), this._sheet.inject(), i && "boolean" == typeof o && (this._sheet.setOptimizeForSpeed(o), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                }
                var t = e.prototype;
                return t.add = function (e) {
                    var t = this;
                    void 0 === this._optimizeForSpeed && (this._optimizeForSpeed = Array.isArray(e.children), this._sheet.setOptimizeForSpeed(this._optimizeForSpeed), this._optimizeForSpeed = this._sheet.isOptimizeForSpeed()), this._fromServer || (this._fromServer = this.selectFromServer(), this._instancesCounts = Object.keys(this._fromServer).reduce(function (e, t) {
                        return e[t] = 0, e
                    }, {}));
                    var n = this.getIdAndRules(e),
                        i = n.styleId,
                        r = n.rules;
                    if (i in this._instancesCounts) {
                        this._instancesCounts[i] += 1;
                        return
                    }
                    var o = r.map(function (e) {
                        return t._sheet.insertRule(e)
                    }).filter(function (e) {
                        return -1 !== e
                    });
                    this._indices[i] = o, this._instancesCounts[i] = 1
                }, t.remove = function (e) {
                    var t = this,
                        n = this.getIdAndRules(e).styleId;
                    if (function (e, t) {
                        if (!e) throw Error("StyleSheetRegistry: " + t + ".")
                    }(n in this._instancesCounts, "styleId: `" + n + "` not found"), this._instancesCounts[n] -= 1, this._instancesCounts[n] < 1) {
                        var i = this._fromServer && this._fromServer[n];
                        i ? (i.parentNode.removeChild(i), delete this._fromServer[n]) : (this._indices[n].forEach(function (e) {
                            return t._sheet.deleteRule(e)
                        }), delete this._indices[n]), delete this._instancesCounts[n]
                    }
                }, t.update = function (e, t) {
                    this.add(t), this.remove(e)
                }, t.flush = function () {
                    this._sheet.flush(), this._sheet.inject(), this._fromServer = void 0, this._indices = {}, this._instancesCounts = {}
                }, t.cssRules = function () {
                    var e = this,
                        t = this._fromServer ? Object.keys(this._fromServer).map(function (t) {
                            return [t, e._fromServer[t]]
                        }) : [],
                        n = this._sheet.cssRules();
                    return t.concat(Object.keys(this._indices).map(function (t) {
                        return [t, e._indices[t].map(function (e) {
                            return n[e].cssText
                        }).join(e._optimizeForSpeed ? "" : "\n")]
                    }).filter(function (e) {
                        return !!e[1]
                    }))
                }, t.styles = function (e) {
                    var t, n;
                    return t = this.cssRules(), void 0 === (n = e) && (n = {}), t.map(function (e) {
                        var t = e[0],
                            i = e[1];
                        return o.default.createElement("style", {
                            id: "__" + t,
                            key: "__" + t,
                            nonce: n.nonce ? n.nonce : void 0,
                            dangerouslySetInnerHTML: {
                                __html: i
                            }
                        })
                    })
                }, t.getIdAndRules = function (e) {
                    var t = e.children,
                        n = e.dynamic,
                        i = e.id;
                    if (n) {
                        var r = p(i, n);
                        return {
                            styleId: r,
                            rules: Array.isArray(t) ? t.map(function (e) {
                                return m(r, e)
                            }) : [m(r, t)]
                        }
                    }
                    return {
                        styleId: p(i),
                        rules: Array.isArray(t) ? t : [t]
                    }
                }, t.selectFromServer = function () {
                    return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function (e, t) {
                        return e[t.id.slice(2)] = t, e
                    }, {})
                }, e
            }(),
                f = r.createContext(null);
            f.displayName = "StyleSheetContext";
            var g = o.default.useInsertionEffect || o.default.useLayoutEffect,
                b = new h;

            function v(e) {
                var t = b || r.useContext(f);
                return t && g(function () {
                    return t.add(e),
                        function () {
                            t.remove(e)
                        }
                }, [e.id, String(e.dynamic)]), null
            }
            v.dynamic = function (e) {
                return e.map(function (e) {
                    return p(e[0], e[1])
                }).join(" ")
            }, t.style = v
        },
        1822: function (e, t, n) {
            "use strict";
            e.exports = n(10477).style
        },
        56761: function (e, t, n) {
            "use strict";
            var i = n(85893),
                r = n(67294),
                o = n(11163),
                s = n(83253),
                a = n.n(s),
                l = n(93967),
                c = n.n(l),
                u = n(45951),
                d = n(91387),
                p = n(63633),
                m = n.n(p);
            let h = {
                content: {
                    inset: 0,
                    border: "none",
                    backgroundColor: "transparent",
                    pointerEvents: "none"
                }
            };
            t.Z = e => {
                let {
                    modalId: t,
                    isOpen: n = !1,
                    title: s,
                    description: l,
                    children: p,
                    actions: f,
                    className: g,
                    pushToUrl: b,
                    onClose: v
                } = e, y = (0, o.useRouter)(), {
                    modalsState: A,
                    closeModal: k
                } = (0, d.d)(), w = (0, r.useCallback)(async () => {
                    if (b) {
                        let e = new URL(window.location.href);
                        e.searchParams.delete("showModal"), await y.replace(e.href, void 0, {
                            shallow: !0
                        })
                    }
                    v && v(), k(t)
                }, [k, t, v, b, y]), L = c()(m().modal, g);
                return (0, i.jsx)(a(), {
                    isOpen: A[t] || n,
                    className: "modal-content",
                    bodyOpenClassName: m().bodyLock,
                    overlayClassName: "modal-overlay modal-overlay--black",
                    ariaHideApp: !1,
                    style: h,
                    onRequestClose: w,
                    onAfterOpen: () => {
                        if (!b) return;
                        let e = new URL(y.asPath, window.location.origin);
                        e.searchParams.get("showModal") !== t && (e.searchParams.set("showModal", t), y.replace(e.href, void 0, {
                            shallow: !0
                        }))
                    },
                    children: (0, i.jsxs)("div", {
                        className: L,
                        children: [(s || l) && (0, i.jsxs)("div", {
                            className: m().head,
                            children: [s && (0, i.jsx)("div", {
                                className: m().title,
                                children: s
                            }), l && (0, i.jsx)("div", {
                                className: m().description,
                                children: l
                            })]
                        }), p, f && (0, i.jsx)("div", {
                            className: m().actions,
                            children: f
                        }), (0, i.jsx)("button", {
                            type: "button",
                            className: m().close,
                            onClick: w,
                            children: (0, i.jsx)(u.l, {
                                name: "close"
                            })
                        })]
                    })
                })
            }
        },
        25183: function (e, t, n) {
            "use strict";
            n.d(t, {
                p: function () {
                    return l
                }
            });
            var i = n(85893);
            n(67294);
            var r = n(93967),
                o = n.n(r),
                s = n(321),
                a = n.n(s);
            let l = e => {
                let {
                    overlay: t,
                    size: n = "1em",
                    className: r
                } = e, s = o()(a().preloader, {
                    [a().overlay]: t
                }, r);
                return (0, i.jsx)("div", {
                    className: s,
                    style: {
                        fontSize: n
                    },
                    children: (0, i.jsx)("i", {})
                })
            }
        },
        45951: function (e, t, n) {
            "use strict";
            n.d(t, {
                l: function () {
                    return s
                }
            });
            var i = n(85893);
            n(67294);
            var r = n(93967),
                o = n.n(r);
            let s = e => {
                let {
                    name: t,
                    className: n
                } = e, r = o()("icon", "icon-".concat(t), n), s = "#icon-".concat(t);
                return t ? (0, i.jsx)("svg", {
                    className: r,
                    children: (0, i.jsx)("use", {
                        xmlnsXlink: "http://www.w3.org/1999/xlink",
                        xlinkHref: s
                    })
                }) : null
            }
        },
        36735: function (e, t, n) {
            "use strict";
            n.d(t, {
                I0: function () {
                    return i
                },
                aF: function () {
                    return r
                },
                vg: function () {
                    return o
                }
            });
            let i = "20255707",
                r = {
                    general: {
                        modalId: "modal-form-contact",
                        formId: {
                            en: "7e668dfc-5d45-4cc4-ad90-684668678d8d",
                            ru: "a60fa581-9308-48f5-91ba-19342e7338d3",
                            ua: "2d4b8fa2-a7e9-465c-b89f-7d0e4a01ab50"
                        }
                    },
                    training: {
                        title: "Ready to get started?",
                        modalId: "modal-form-training",
                        formId: {
                            en: "0ff77c86-0779-42d0-a6dc-8cc26ab3572b",
                            ru: "f4abe511-cb0e-40f4-ac3d-c7832bc4a20f",
                            ua: "2de8936e-f595-4f54-a208-5c81dcd75d26"
                        }
                    },
                    kyc: {
                        modalId: "modal-form-kyc",
                        formId: {
                            en: "04a47f59-acc2-41a6-b3e1-dd1e9a6b38f3",
                            ru: "a5dd89c8-c0f9-431c-9627-6ba77cf11f7d",
                            ua: "c4699886-bb12-4d96-a63e-f8818f4e89f6"
                        }
                    },
                    kyt: {
                        modalId: "modal-form-webinar",
                        formId: {
                            en: "e550ce36-aea4-4110-ab62-5ac18985d964",
                            ru: "13220562-55f6-4c31-89ee-6938137edfa9",
                            ua: "4424298f-332e-4fb0-ae73-6f4fdea9d83c"
                        }
                    },
                    kytWhite: {
                        modalId: "modal-form-kyt-white",
                        formId: {
                            en: "e91f5097-553e-487a-b441-a74606d9b1cb",
                            ru: "7f6c7f48-9342-4ca7-b669-c678a865f020",
                            ua: "b1532f46-9209-4e24-9fdc-3cc963f087de"
                        }
                    },
                    reclaim: {
                        modalId: "modal-form-reclaim",
                        formId: {
                            en: "0f5a4557-04eb-4d82-91ba-04d2b8ecc633",
                            ru: "6b0b5dd4-8579-4a06-b842-10cb1fd1ab22",
                            ua: "f6fdc0f9-17c0-4ba1-b54f-a242381f5c30"
                        }
                    },
                    consulting: {
                        modalId: "modal-form-consulting",
                        formId: {
                            en: "b00243fd-b994-4da4-af9c-8977b6968d55",
                            ru: "755f3ac1-f61e-4d98-8ba9-c6ba18af4b45"
                        }
                    },
                    personalChecks: {
                        modalId: "modal-form-personal-checks",
                        formId: {
                            en: "d2e43549-3755-4c6b-8602-a0714ea66259",
                            ru: "fc59e63b-495f-420a-859a-ab4e77a0db47"
                        }
                    },
                    pro: {
                        title: "Interested in transaction monitoring?",
                        description: "Fill out the form, and we will contact you promptly.",
                        modalId: "modal-form-pro",
                        formId: {
                            en: "8ad565bd-c5c9-46a4-9fb0-a689f0d3c79e"
                        }
                    }
                },
                o = [r.general, r.reclaim, r.consulting, r.training, r.kyt, r.kytWhite, r.pro]
        },
        47057: function (e, t, n) {
            "use strict";
            n.d(t, {
                Am: function () {
                    return z
                },
                CV: function () {
                    return A
                },
                DR: function () {
                    return x
                },
                Ek: function () {
                    return L
                },
                Hk: function () {
                    return I
                },
                IJ: function () {
                    return S
                },
                MS: function () {
                    return q
                },
                N$: function () {
                    return D
                },
                Ni: function () {
                    return v
                },
                PO: function () {
                    return c
                },
                QV: function () {
                    return l
                },
                Ql: function () {
                    return T
                },
                Rg: function () {
                    return i
                },
                Rp: function () {
                    return s
                },
                Y0: function () {
                    return E
                },
                b3: function () {
                    return f
                },
                dh: function () {
                    return a
                },
                g5: function () {
                    return R
                },
                g6: function () {
                    return b
                },
                ie: function () {
                    return k
                },
                jo: function () {
                    return m
                },
                jy: function () {
                    return P
                },
                ke: function () {
                    return O
                },
                mO: function () {
                    return w
                },
                mq: function () {
                    return p
                },
                nb: function () {
                    return h
                },
                rR: function () {
                    return u
                },
                rg: function () {
                    return M
                },
                s1: function () {
                    return C
                },
                s8: function () {
                    return y
                },
                sE: function () {
                    return d
                },
                uz: function () {
                    return g
                },
                vI: function () {
                    return o
                },
                xp: function () {
                    return B
                },
                zc: function () {
                    return r
                }
            });
            let i = "https://AML Zapex.com",
                r = "/",
                o = "/what-do-we-analyze/",
                s = "/",
                a = "/",
                l = "/about-us/",
                c = "/privacy-policy/",
                u = "/press-kit/",
                d = "/",
                p = "/certifications/",
                m = "/",
                h = "/",
                f = "/",
                g = "/",
                b = "/careers/",
                v = "/#pricing",
                y = "/#faq",
                A = "".concat(b, "#advantages"),
                k = "".concat(b, "#open-positions"),
                w = "".concat(b, "#about-us"),
                L = "".concat(i, "/files/AML Zapex_SERVICE_AGREEMENT.pdf"),
                M = "https://t.me/monitorusd_supp",
                C = "https://t.me/monitorusd_supp",
                S = "https://AML Zapex.com/attachment/AML Zapex_report_example.pdf",
                x = "https://app.AML Zapex.com",
                z = "https://trustpilot.com/review/AML Zapex.com",
                E = "https://play.google.com/store/apps/details?id=io.walletchecker.app",
                T = "https://blog.AML Zapex.com",
                B = "https://web.AML Zapex.com",
                P = "https://kyc-app.AML Zapex.com/",
                q = "https://t.me/monitorusd_supp",
                I = "https://linkedin.com/company/AML Zapex/",
                O = "https://medium.com/@AML Zapex",
                R = "https://youtube.com/channel/UCwWKnYS5sQLWVwFBBEEYJgw/videos",
                D = "https://x.com/AML ZapexHQ"
        },
        91387: function (e, t, n) {
            "use strict";
            n.d(t, {
                D: function () {
                    return s
                },
                d: function () {
                    return a
                }
            });
            var i = n(85893),
                r = n(67294);
            let o = (0, r.createContext)(void 0),
                s = e => {
                    let {
                        children: t
                    } = e, [n, s] = (0, r.useState)({}), [a, l] = (0, r.useState)({});
                    return (0, i.jsx)(o.Provider, {
                        value: {
                            modalsState: n,
                            modalParams: a,
                            openModal: (e, t) => {
                                s(t => ({
                                    ...t,
                                    [e]: !0
                                })), l(n => ({
                                    ...n,
                                    [e]: t
                                }))
                            },
                            closeModal: e => {
                                s(t => {
                                    let n = {
                                        ...t
                                    };
                                    return delete n[e], n
                                }), l(t => {
                                    let n = {
                                        ...t
                                    };
                                    return delete n[e], n
                                })
                            }
                        },
                        children: t
                    })
                },
                a = () => {
                    let e = (0, r.useContext)(o);
                    if (!e) throw Error("useModal must be used within a ModalProvider");
                    return e
                }
        },
        64423: function (e, t, n) {
            "use strict";
            n.d(t, {
                r: function () {
                    return m
                },
                d: function () {
                    return h
                }
            });
            var i = n(85893),
                r = n(67294),
                o = n(87066),
                s = n(47041),
                a = n(39332),
                l = n(47057),
                c = n(43840),
                u = n(22486),
                d = () => {
                    let e = (0, r.useRef)(null),
                        t = (0, s.getCookie)("telegram_start_params"),
                        n = (0, s.getCookie)("hubspotutk"),
                        [i, d] = (0, r.useState)(),
                        [p, m] = (0, r.useState)(l.rg),
                        [h, f] = (0, r.useState)(t),
                        [g, b] = (0, r.useState)(!1),
                        v = (0, u.p)(),
                        y = (0, a.useSearchParams)(),
                        A = (0, c.p)(y);
                    return (0, r.useEffect)(() => {
                        let e = "G-JTNTG71F81";
                        e.length && window.gtag && window.gtag("get", e, "client_id", e => {
                            d(e)
                        })
                    }, []), (0, r.useEffect)(() => {
                        if (v) {
                            let e = A.length ? "&".concat(A) : "";
                            m("".concat(l.rg, "?start=").concat(v).concat(e))
                        }
                    }, [A, v]), (0, r.useEffect)(() => {
                        let r = () => {
                        };
                        return e.current = setTimeout(() => {
                            !h && !g && (n || i) && (b(!0), r(), e.current && clearTimeout(e.current))
                        }, 2e3), h && m("".concat(l.rg, "?start=").concat(t)), () => {
                            e.current && clearTimeout(e.current)
                        }
                    }, [h, t, i, n, g, v]), p
                };
            let p = (0, r.createContext)(""),
                m = e => {
                    let {
                        children: t
                    } = e, n = d();
                    return (0, i.jsx)(p.Provider, {
                        value: n,
                        children: t
                    })
                },
                h = () => (0, r.useContext)(p)
        },
        61087: function (e, t, n) {
            "use strict";
            n.d(t, {
                b: function () {
                    return m
                }
            });
            var i = n(85893),
                r = n(67294),
                o = n(11163),
                s = n(26674),
                a = n(93967),
                l = n.n(a),
                c = n(25183),
                u = n(36735),
                d = n(13309),
                p = n.n(d);
            let m = e => {
                let {
                    targetId: t = "hubspot-form-wrapper",
                    formId: n,
                    className: s
                } = e, {
                    locale: a
                } = (0, o.useRouter)(), [u, d] = (0, r.useState)(!0), [m, f] = (0, r.useState)(!1), [g, b] = (0, r.useState)(!1);
                (0, r.useEffect)(() => {
                    if (g && m) {
                        let e = setTimeout(() => {
                            d(!1)
                        }, 1e3);
                        return () => clearTimeout(e)
                    }
                }, [g, m, u]), (0, r.useEffect)(() => {
                    d(!0)
                }, [n, a]);
                let v = l()(p().container, s);
                return (0, i.jsxs)("div", {
                    className: v,
                    children: [(0, i.jsx)(h, {
                        formId: n,
                        targetId: t,
                        onFormCreated: b,
                        onLoaded: f
                    }, "".concat(n, "-").concat(a)), u && (0, i.jsx)(c.p, {
                        overlay: !0
                    })]
                })
            },
                h = e => {
                    let {
                        formId: t,
                        targetId: n,
                        onError: o,
                        onFormCreated: a,
                        onLoaded: l
                    } = e, {
                        loaded: c,
                        error: d,
                        formCreated: p
                    } = (0, s.k1)({
                        portalId: u.I0,
                        formId: t,
                        target: "#".concat(n)
                    });
                    return (0, r.useEffect)(() => {
                        o && o(d), l(c), a(p)
                    }, [d, p, c, o, a, l]), (0, i.jsx)("div", {
                        id: n
                    })
                }
        },
        43840: function (e, t, n) {
            "use strict";

            function i(e) {
                let t = new URLSearchParams(e);
                return t.delete("ref"), t.toString()
            }
            n.d(t, {
                p: function () {
                    return i
                }
            })
        },
        22486: function (e, t, n) {
            "use strict";
            n.d(t, {
                p: function () {
                    return s
                }
            });
            var i = n(11163),
                r = n(67294),
                o = n(88948);
            let s = () => {
                let [e, t] = (0, r.useState)(null), n = (0, i.useRouter)(), s = (0, o.Z)();
                return (0, r.useEffect)(() => {
                    let {
                        ref: e
                    } = n.query;
                    if (e && "string" == typeof e) {
                        t(e);
                        return
                    }
                    let i = s.getItem("referral", "local");
                    i && t(i)
                }, [n.query, s]), e
            }
        },
        88948: function (e, t) {
            "use strict";
            t.Z = () => {
                let e = e => "".concat(null != e ? e : "session", "Storage");
                return {
                    getItem: (t, n) => window[e(n)][t],
                    setItem: (t, n, i) => (window[e(i)].setItem(t, n), !0),
                    removeItem: (t, n) => {
                        window[e(n)].removeItem(t)
                    }
                }
            }
        },
        30622: function (e, t, n) {
            "use strict";
            var i = n(67294),
                r = n(11163),
                o = n(36735);
            t.Z = function (e) {
                let {
                    locale: t
                } = (0, r.useRouter)();
                return (0, i.useMemo)(() => {
                    let n = o.aF[e],
                        i = null == n ? void 0 : n.formId;
                    return i[t] || i.en
                }, [e, t])
            }
        },
        24217: function (e, t, n) {
            "use strict";
            var i = n(85893),
                r = n(56761),
                o = n(36735),
                s = n(61087),
                a = n(30622);
            t.Z = e => {
                let {
                    modalId: t,
                    title: n,
                    description: o
                } = e, c = l(t), u = (0, a.Z)(c);
                return (0, i.jsx)(r.Z, {
                    modalId: t,
                    title: n,
                    description: o,
                    pushToUrl: !0,
                    children: (0, i.jsx)(s.b, {
                        targetId: "hubspot-form-modal-wrapper",
                        formId: u
                    })
                })
            };
            let l = e => Object.keys(o.aF).find(t => o.aF[t].modalId === e)
        },
        99294: function (e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function () {
                    return M
                }
            });
            var i = n(85893),
                r = n(40183),
                o = n.n(r),
                s = n(1822),
                a = n.n(s),
                l = n(67294),
                c = n(26674),
                u = n(64712),
                d = n(11163),
                p = n(85351),
                m = n(13114),
                h = n(2711),
                f = n.n(h);
            n(30889);
            var g = n(91387),
                b = n(64423),
                v = n(36735),
                y = n(24217),
                A = () => {
                    let e = (0, d.useRouter)(),
                        {
                            openModal: t,
                            modalsState: n
                        } = (0, g.d)();
                    return (0, l.useEffect)(() => {
                        let e = new URL(window.location.href),
                            i = v.vg.map(e => e.modalId),
                            r = e.searchParams.get("showModal");
                        r && i.includes(r) && !n[r] && t(r)
                    }, [e.asPath, t, n]), v.vg.map(e => (0, i.jsx)(y.Z, {
                        title: e.title,
                        description: e.description,
                        modalId: e.modalId
                    }, e.modalId))
                };
            n(28240);
            var k = n(12236);
            n(8783);
            let w = parseInt("3556817"),
                L = parseInt("6");
            var M = function (e) {
                let {
                    Component: t,
                    pageProps: n
                } = e, r = (0, d.useRouter)(), {
                    asPath: s,
                    pathname: h,
                    locale: v
                } = (0, d.useRouter)(), y = r.query.ref;
                return (0, l.useEffect)(() => {
                    let e = s.split("#~")[1];
                    e && r.push({
                        pathname: h,
                        query: {
                            ref: e
                        }
                    }), y && localStorage.setItem("referral", y.toString())
                }, [s, h, y, r]), (0, l.useEffect)(() => {
                    f().init({
                        offset: 0
                    }), f().refresh()
                }, []), (0, l.useEffect)(() => {
                    k.Z.changeLanguage(v)
                }, [v]), (0, l.useEffect)(() => {
                    p.hotjar.initialize({
                        id: w,
                        sv: L
                    })
                }, []), (0, i.jsx)(c.l0, {
                    children: (0, i.jsx)(b.r, {
                        children: (0, i.jsxs)(g.D, {
                            children: [(0, i.jsx)(a(), {
                                id: "bca3faa92e615c05",
                                dynamic: [o().style.fontFamily],
                                children: "html{font-family:".concat(o().style.fontFamily, ",Helvetica,Arial,sans-serif}")
                            }), (0, i.jsx)(m.M, {
                                mode: "wait",
                                initial: !1,
                                onExitComplete: () => window.scrollTo(0, 0),
                                children: (0, i.jsx)(t, {
                                    ...n,
                                    className: a().dynamic([
                                        ["bca3faa92e615c05", [o().style.fontFamily]]
                                    ]) + " " + (n && null != n.className && n.className || "")
                                })
                            }), (0, i.jsx)(A, {}), (0, i.jsx)(u.x7, {
                                richColors: !0
                            })]
                        })
                    })
                })
            }
        },
        21876: function (e) {
            ! function () {
                var t = {
                    675: function (e, t) {
                        "use strict";
                        t.byteLength = function (e) {
                            var t = l(e),
                                n = t[0],
                                i = t[1];
                            return (n + i) * 3 / 4 - i
                        }, t.toByteArray = function (e) {
                            var t, n, o = l(e),
                                s = o[0],
                                a = o[1],
                                c = new r((s + a) * 3 / 4 - a),
                                u = 0,
                                d = a > 0 ? s - 4 : s;
                            for (n = 0; n < d; n += 4) t = i[e.charCodeAt(n)] << 18 | i[e.charCodeAt(n + 1)] << 12 | i[e.charCodeAt(n + 2)] << 6 | i[e.charCodeAt(n + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
                            return 2 === a && (t = i[e.charCodeAt(n)] << 2 | i[e.charCodeAt(n + 1)] >> 4, c[u++] = 255 & t), 1 === a && (t = i[e.charCodeAt(n)] << 10 | i[e.charCodeAt(n + 1)] << 4 | i[e.charCodeAt(n + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t), c
                        }, t.fromByteArray = function (e) {
                            for (var t, i = e.length, r = i % 3, o = [], s = 0, a = i - r; s < a; s += 16383) o.push(function (e, t, i) {
                                for (var r, o = [], s = t; s < i; s += 3) o.push(n[(r = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2])) >> 18 & 63] + n[r >> 12 & 63] + n[r >> 6 & 63] + n[63 & r]);
                                return o.join("")
                            }(e, s, s + 16383 > a ? a : s + 16383));
                            return 1 === r ? o.push(n[(t = e[i - 1]) >> 2] + n[t << 4 & 63] + "==") : 2 === r && o.push(n[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="), o.join("")
                        };
                        for (var n = [], i = [], r = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, a = o.length; s < a; ++s) n[s] = o[s], i[o.charCodeAt(s)] = s;

                        function l(e) {
                            var t = e.length;
                            if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                            var n = e.indexOf("="); - 1 === n && (n = t);
                            var i = n === t ? 0 : 4 - n % 4;
                            return [n, i]
                        }
                        i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
                    },
                    72: function (e, t, n) {
                        "use strict";
                        /*!
                         * The buffer module from node.js, for the browser.
                         *
                         * @author   Feross Aboukhadijeh <https://feross.org>
                         * @license  MIT
                         */
                        var i = n(675),
                            r = n(783),
                            o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

                        function s(e) {
                            if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                            var t = new Uint8Array(e);
                            return Object.setPrototypeOf(t, a.prototype), t
                        }

                        function a(e, t, n) {
                            if ("number" == typeof e) {
                                if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                                return u(e)
                            }
                            return l(e, t, n)
                        }

                        function l(e, t, n) {
                            if ("string" == typeof e) return function (e, t) {
                                if (("string" != typeof t || "" === t) && (t = "utf8"), !a.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                                var n = 0 | m(e, t),
                                    i = s(n),
                                    r = i.write(e, t);
                                return r !== n && (i = i.slice(0, r)), i
                            }(e, t);
                            if (ArrayBuffer.isView(e)) return d(e);
                            if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                            if (E(e, ArrayBuffer) || e && E(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (E(e, SharedArrayBuffer) || e && E(e.buffer, SharedArrayBuffer))) return function (e, t, n) {
                                var i;
                                if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                                if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
                                return Object.setPrototypeOf(i = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), a.prototype), i
                            }(e, t, n);
                            if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                            var i = e.valueOf && e.valueOf();
                            if (null != i && i !== e) return a.from(i, t, n);
                            var r = function (e) {
                                if (a.isBuffer(e)) {
                                    var t, n = 0 | p(e.length),
                                        i = s(n);
                                    return 0 === i.length || e.copy(i, 0, 0, n), i
                                }
                                return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? s(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
                            }(e);
                            if (r) return r;
                            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return a.from(e[Symbol.toPrimitive]("string"), t, n);
                            throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                        }

                        function c(e) {
                            if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                            if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
                        }

                        function u(e) {
                            return c(e), s(e < 0 ? 0 : 0 | p(e))
                        }

                        function d(e) {
                            for (var t = e.length < 0 ? 0 : 0 | p(e.length), n = s(t), i = 0; i < t; i += 1) n[i] = 255 & e[i];
                            return n
                        }

                        function p(e) {
                            if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                            return 0 | e
                        }

                        function m(e, t) {
                            if (a.isBuffer(e)) return e.length;
                            if (ArrayBuffer.isView(e) || E(e, ArrayBuffer)) return e.byteLength;
                            if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                            var n = e.length,
                                i = arguments.length > 2 && !0 === arguments[2];
                            if (!i && 0 === n) return 0;
                            for (var r = !1; ;) switch (t) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return n;
                                case "utf8":
                                case "utf-8":
                                    return C(e).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * n;
                                case "hex":
                                    return n >>> 1;
                                case "base64":
                                    return x(e).length;
                                default:
                                    if (r) return i ? -1 : C(e).length;
                                    t = ("" + t).toLowerCase(), r = !0
                            }
                        }

                        function h(e, t, n) {
                            var r, o, s = !1;
                            if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0))) return "";
                            for (e || (e = "utf8"); ;) switch (e) {
                                case "hex":
                                    return function (e, t, n) {
                                        var i = e.length;
                                        (!t || t < 0) && (t = 0), (!n || n < 0 || n > i) && (n = i);
                                        for (var r = "", o = t; o < n; ++o) r += T[e[o]];
                                        return r
                                    }(this, t, n);
                                case "utf8":
                                case "utf-8":
                                    return v(this, t, n);
                                case "ascii":
                                    return function (e, t, n) {
                                        var i = "";
                                        n = Math.min(e.length, n);
                                        for (var r = t; r < n; ++r) i += String.fromCharCode(127 & e[r]);
                                        return i
                                    }(this, t, n);
                                case "latin1":
                                case "binary":
                                    return function (e, t, n) {
                                        var i = "";
                                        n = Math.min(e.length, n);
                                        for (var r = t; r < n; ++r) i += String.fromCharCode(e[r]);
                                        return i
                                    }(this, t, n);
                                case "base64":
                                    return r = t, o = n, 0 === r && o === this.length ? i.fromByteArray(this) : i.fromByteArray(this.slice(r, o));
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return function (e, t, n) {
                                        for (var i = e.slice(t, n), r = "", o = 0; o < i.length; o += 2) r += String.fromCharCode(i[o] + 256 * i[o + 1]);
                                        return r
                                    }(this, t, n);
                                default:
                                    if (s) throw TypeError("Unknown encoding: " + e);
                                    e = (e + "").toLowerCase(), s = !0
                            }
                        }

                        function f(e, t, n) {
                            var i = e[t];
                            e[t] = e[n], e[n] = i
                        }

                        function g(e, t, n, i, r) {
                            var o;
                            if (0 === e.length) return -1;
                            if ("string" == typeof n ? (i = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), (o = n = +n) != o && (n = r ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                                if (r) return -1;
                                n = e.length - 1
                            } else if (n < 0) {
                                if (!r) return -1;
                                n = 0
                            }
                            if ("string" == typeof t && (t = a.from(t, i)), a.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, i, r);
                            if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? r ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, i, r);
                            throw TypeError("val must be string, number or Buffer")
                        }

                        function b(e, t, n, i, r) {
                            var o, s = 1,
                                a = e.length,
                                l = t.length;
                            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                                if (e.length < 2 || t.length < 2) return -1;
                                s = 2, a /= 2, l /= 2, n /= 2
                            }

                            function c(e, t) {
                                return 1 === s ? e[t] : e.readUInt16BE(t * s)
                            }
                            if (r) {
                                var u = -1;
                                for (o = n; o < a; o++)
                                    if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                                        if (-1 === u && (u = o), o - u + 1 === l) return u * s
                                    } else - 1 !== u && (o -= o - u), u = -1
                            } else
                                for (n + l > a && (n = a - l), o = n; o >= 0; o--) {
                                    for (var d = !0, p = 0; p < l; p++)
                                        if (c(e, o + p) !== c(t, p)) {
                                            d = !1;
                                            break
                                        } if (d) return o
                                }
                            return -1
                        }

                        function v(e, t, n) {
                            n = Math.min(e.length, n);
                            for (var i = [], r = t; r < n;) {
                                var o, s, a, l, c = e[r],
                                    u = null,
                                    d = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                                if (r + d <= n) switch (d) {
                                    case 1:
                                        c < 128 && (u = c);
                                        break;
                                    case 2:
                                        (192 & (o = e[r + 1])) == 128 && (l = (31 & c) << 6 | 63 & o) > 127 && (u = l);
                                        break;
                                    case 3:
                                        o = e[r + 1], s = e[r + 2], (192 & o) == 128 && (192 & s) == 128 && (l = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (u = l);
                                        break;
                                    case 4:
                                        o = e[r + 1], s = e[r + 2], a = e[r + 3], (192 & o) == 128 && (192 & s) == 128 && (192 & a) == 128 && (l = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
                                }
                                null === u ? (u = 65533, d = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), i.push(u), r += d
                            }
                            return function (e) {
                                var t = e.length;
                                if (t <= 4096) return String.fromCharCode.apply(String, e);
                                for (var n = "", i = 0; i < t;) n += String.fromCharCode.apply(String, e.slice(i, i += 4096));
                                return n
                            }(i)
                        }

                        function y(e, t, n) {
                            if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                            if (e + t > n) throw RangeError("Trying to access beyond buffer length")
                        }

                        function A(e, t, n, i, r, o) {
                            if (!a.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                            if (t > r || t < o) throw RangeError('"value" argument is out of bounds');
                            if (n + i > e.length) throw RangeError("Index out of range")
                        }

                        function k(e, t, n, i, r, o) {
                            if (n + i > e.length || n < 0) throw RangeError("Index out of range")
                        }

                        function w(e, t, n, i, o) {
                            return t = +t, n >>>= 0, o || k(e, t, n, 4, 34028234663852886e22, -34028234663852886e22), r.write(e, t, n, i, 23, 4), n + 4
                        }

                        function L(e, t, n, i, o) {
                            return t = +t, n >>>= 0, o || k(e, t, n, 8, 17976931348623157e292, -17976931348623157e292), r.write(e, t, n, i, 52, 8), n + 8
                        }
                        t.Buffer = a, t.SlowBuffer = function (e) {
                            return +e != e && (e = 0), a.alloc(+e)
                        }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 2147483647, a.TYPED_ARRAY_SUPPORT = function () {
                            try {
                                var e = new Uint8Array(1),
                                    t = {
                                        foo: function () {
                                            return 42
                                        }
                                    };
                                return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                            } catch (e) {
                                return !1
                            }
                        }(), a.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(a.prototype, "parent", {
                            enumerable: !0,
                            get: function () {
                                if (a.isBuffer(this)) return this.buffer
                            }
                        }), Object.defineProperty(a.prototype, "offset", {
                            enumerable: !0,
                            get: function () {
                                if (a.isBuffer(this)) return this.byteOffset
                            }
                        }), a.poolSize = 8192, a.from = function (e, t, n) {
                            return l(e, t, n)
                        }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array), a.alloc = function (e, t, n) {
                            return (c(e), e <= 0) ? s(e) : void 0 !== t ? "string" == typeof n ? s(e).fill(t, n) : s(e).fill(t) : s(e)
                        }, a.allocUnsafe = function (e) {
                            return u(e)
                        }, a.allocUnsafeSlow = function (e) {
                            return u(e)
                        }, a.isBuffer = function (e) {
                            return null != e && !0 === e._isBuffer && e !== a.prototype
                        }, a.compare = function (e, t) {
                            if (E(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), E(t, Uint8Array) && (t = a.from(t, t.offset, t.byteLength)), !a.isBuffer(e) || !a.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                            if (e === t) return 0;
                            for (var n = e.length, i = t.length, r = 0, o = Math.min(n, i); r < o; ++r)
                                if (e[r] !== t[r]) {
                                    n = e[r], i = t[r];
                                    break
                                } return n < i ? -1 : i < n ? 1 : 0
                        }, a.isEncoding = function (e) {
                            switch (String(e).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, a.concat = function (e, t) {
                            if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                            if (0 === e.length) return a.alloc(0);
                            if (void 0 === t)
                                for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
                            var n, i = a.allocUnsafe(t),
                                r = 0;
                            for (n = 0; n < e.length; ++n) {
                                var o = e[n];
                                if (E(o, Uint8Array) && (o = a.from(o)), !a.isBuffer(o)) throw TypeError('"list" argument must be an Array of Buffers');
                                o.copy(i, r), r += o.length
                            }
                            return i
                        }, a.byteLength = m, a.prototype._isBuffer = !0, a.prototype.swap16 = function () {
                            var e = this.length;
                            if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                            for (var t = 0; t < e; t += 2) f(this, t, t + 1);
                            return this
                        }, a.prototype.swap32 = function () {
                            var e = this.length;
                            if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                            for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2);
                            return this
                        }, a.prototype.swap64 = function () {
                            var e = this.length;
                            if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                            for (var t = 0; t < e; t += 8) f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4);
                            return this
                        }, a.prototype.toString = function () {
                            var e = this.length;
                            return 0 === e ? "" : 0 == arguments.length ? v(this, 0, e) : h.apply(this, arguments)
                        }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function (e) {
                            if (!a.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                            return this === e || 0 === a.compare(this, e)
                        }, a.prototype.inspect = function () {
                            var e = "",
                                n = t.INSPECT_MAX_BYTES;
                            return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
                        }, o && (a.prototype[o] = a.prototype.inspect), a.prototype.compare = function (e, t, n, i, r) {
                            if (E(e, Uint8Array) && (e = a.from(e, e.offset, e.byteLength)), !a.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === i && (i = 0), void 0 === r && (r = this.length), t < 0 || n > e.length || i < 0 || r > this.length) throw RangeError("out of range index");
                            if (i >= r && t >= n) return 0;
                            if (i >= r) return -1;
                            if (t >= n) return 1;
                            if (t >>>= 0, n >>>= 0, i >>>= 0, r >>>= 0, this === e) return 0;
                            for (var o = r - i, s = n - t, l = Math.min(o, s), c = this.slice(i, r), u = e.slice(t, n), d = 0; d < l; ++d)
                                if (c[d] !== u[d]) {
                                    o = c[d], s = u[d];
                                    break
                                } return o < s ? -1 : s < o ? 1 : 0
                        }, a.prototype.includes = function (e, t, n) {
                            return -1 !== this.indexOf(e, t, n)
                        }, a.prototype.indexOf = function (e, t, n) {
                            return g(this, e, t, n, !0)
                        }, a.prototype.lastIndexOf = function (e, t, n) {
                            return g(this, e, t, n, !1)
                        }, a.prototype.write = function (e, t, n, i) {
                            if (void 0 === t) i = "utf8", n = this.length, t = 0;
                            else if (void 0 === n && "string" == typeof t) i = t, n = this.length, t = 0;
                            else if (isFinite(t)) t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === i && (i = "utf8")) : (i = n, n = void 0);
                            else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            var r, o, s, a, l, c, u, d, p, m, h, f, g = this.length - t;
                            if ((void 0 === n || n > g) && (n = g), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                            i || (i = "utf8");
                            for (var b = !1; ;) switch (i) {
                                case "hex":
                                    return function (e, t, n, i) {
                                        n = Number(n) || 0;
                                        var r = e.length - n;
                                        i ? (i = Number(i)) > r && (i = r) : i = r;
                                        var o = t.length;
                                        i > o / 2 && (i = o / 2);
                                        for (var s = 0; s < i; ++s) {
                                            var a = parseInt(t.substr(2 * s, 2), 16);
                                            if (a != a) break;
                                            e[n + s] = a
                                        }
                                        return s
                                    }(this, e, t, n);
                                case "utf8":
                                case "utf-8":
                                    return l = t, c = n, z(C(e, this.length - l), this, l, c);
                                case "ascii":
                                    return u = t, d = n, z(S(e), this, u, d);
                                case "latin1":
                                case "binary":
                                    return r = this, o = e, s = t, a = n, z(S(o), r, s, a);
                                case "base64":
                                    return p = t, m = n, z(x(e), this, p, m);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return h = t, f = n, z(function (e, t) {
                                        for (var n, i, r = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) i = (n = e.charCodeAt(o)) >> 8, r.push(n % 256), r.push(i);
                                        return r
                                    }(e, this.length - h), this, h, f);
                                default:
                                    if (b) throw TypeError("Unknown encoding: " + i);
                                    i = ("" + i).toLowerCase(), b = !0
                            }
                        }, a.prototype.toJSON = function () {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        }, a.prototype.slice = function (e, t) {
                            var n = this.length;
                            e = ~~e, t = void 0 === t ? n : ~~t, e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                            var i = this.subarray(e, t);
                            return Object.setPrototypeOf(i, a.prototype), i
                        }, a.prototype.readUIntLE = function (e, t, n) {
                            e >>>= 0, t >>>= 0, n || y(e, t, this.length);
                            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                            return i
                        }, a.prototype.readUIntBE = function (e, t, n) {
                            e >>>= 0, t >>>= 0, n || y(e, t, this.length);
                            for (var i = this[e + --t], r = 1; t > 0 && (r *= 256);) i += this[e + --t] * r;
                            return i
                        }, a.prototype.readUInt8 = function (e, t) {
                            return e >>>= 0, t || y(e, 1, this.length), this[e]
                        }, a.prototype.readUInt16LE = function (e, t) {
                            return e >>>= 0, t || y(e, 2, this.length), this[e] | this[e + 1] << 8
                        }, a.prototype.readUInt16BE = function (e, t) {
                            return e >>>= 0, t || y(e, 2, this.length), this[e] << 8 | this[e + 1]
                        }, a.prototype.readUInt32LE = function (e, t) {
                            return e >>>= 0, t || y(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                        }, a.prototype.readUInt32BE = function (e, t) {
                            return e >>>= 0, t || y(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                        }, a.prototype.readIntLE = function (e, t, n) {
                            e >>>= 0, t >>>= 0, n || y(e, t, this.length);
                            for (var i = this[e], r = 1, o = 0; ++o < t && (r *= 256);) i += this[e + o] * r;
                            return i >= (r *= 128) && (i -= Math.pow(2, 8 * t)), i
                        }, a.prototype.readIntBE = function (e, t, n) {
                            e >>>= 0, t >>>= 0, n || y(e, t, this.length);
                            for (var i = t, r = 1, o = this[e + --i]; i > 0 && (r *= 256);) o += this[e + --i] * r;
                            return o >= (r *= 128) && (o -= Math.pow(2, 8 * t)), o
                        }, a.prototype.readInt8 = function (e, t) {
                            return (e >>>= 0, t || y(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
                        }, a.prototype.readInt16LE = function (e, t) {
                            e >>>= 0, t || y(e, 2, this.length);
                            var n = this[e] | this[e + 1] << 8;
                            return 32768 & n ? 4294901760 | n : n
                        }, a.prototype.readInt16BE = function (e, t) {
                            e >>>= 0, t || y(e, 2, this.length);
                            var n = this[e + 1] | this[e] << 8;
                            return 32768 & n ? 4294901760 | n : n
                        }, a.prototype.readInt32LE = function (e, t) {
                            return e >>>= 0, t || y(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                        }, a.prototype.readInt32BE = function (e, t) {
                            return e >>>= 0, t || y(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                        }, a.prototype.readFloatLE = function (e, t) {
                            return e >>>= 0, t || y(e, 4, this.length), r.read(this, e, !0, 23, 4)
                        }, a.prototype.readFloatBE = function (e, t) {
                            return e >>>= 0, t || y(e, 4, this.length), r.read(this, e, !1, 23, 4)
                        }, a.prototype.readDoubleLE = function (e, t) {
                            return e >>>= 0, t || y(e, 8, this.length), r.read(this, e, !0, 52, 8)
                        }, a.prototype.readDoubleBE = function (e, t) {
                            return e >>>= 0, t || y(e, 8, this.length), r.read(this, e, !1, 52, 8)
                        }, a.prototype.writeUIntLE = function (e, t, n, i) {
                            if (e = +e, t >>>= 0, n >>>= 0, !i) {
                                var r = Math.pow(2, 8 * n) - 1;
                                A(this, e, t, n, r, 0)
                            }
                            var o = 1,
                                s = 0;
                            for (this[t] = 255 & e; ++s < n && (o *= 256);) this[t + s] = e / o & 255;
                            return t + n
                        }, a.prototype.writeUIntBE = function (e, t, n, i) {
                            if (e = +e, t >>>= 0, n >>>= 0, !i) {
                                var r = Math.pow(2, 8 * n) - 1;
                                A(this, e, t, n, r, 0)
                            }
                            var o = n - 1,
                                s = 1;
                            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) this[t + o] = e / s & 255;
                            return t + n
                        }, a.prototype.writeUInt8 = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                        }, a.prototype.writeUInt16LE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                        }, a.prototype.writeUInt16BE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                        }, a.prototype.writeUInt32LE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                        }, a.prototype.writeUInt32BE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                        }, a.prototype.writeIntLE = function (e, t, n, i) {
                            if (e = +e, t >>>= 0, !i) {
                                var r = Math.pow(2, 8 * n - 1);
                                A(this, e, t, n, r - 1, -r)
                            }
                            var o = 0,
                                s = 1,
                                a = 0;
                            for (this[t] = 255 & e; ++o < n && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                            return t + n
                        }, a.prototype.writeIntBE = function (e, t, n, i) {
                            if (e = +e, t >>>= 0, !i) {
                                var r = Math.pow(2, 8 * n - 1);
                                A(this, e, t, n, r - 1, -r)
                            }
                            var o = n - 1,
                                s = 1,
                                a = 0;
                            for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                            return t + n
                        }, a.prototype.writeInt8 = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                        }, a.prototype.writeInt16LE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                        }, a.prototype.writeInt16BE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                        }, a.prototype.writeInt32LE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                        }, a.prototype.writeInt32BE = function (e, t, n) {
                            return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                        }, a.prototype.writeFloatLE = function (e, t, n) {
                            return w(this, e, t, !0, n)
                        }, a.prototype.writeFloatBE = function (e, t, n) {
                            return w(this, e, t, !1, n)
                        }, a.prototype.writeDoubleLE = function (e, t, n) {
                            return L(this, e, t, !0, n)
                        }, a.prototype.writeDoubleBE = function (e, t, n) {
                            return L(this, e, t, !1, n)
                        }, a.prototype.copy = function (e, t, n, i) {
                            if (!a.isBuffer(e)) throw TypeError("argument should be a Buffer");
                            if (n || (n = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < n && (i = n), i === n || 0 === e.length || 0 === this.length) return 0;
                            if (t < 0) throw RangeError("targetStart out of bounds");
                            if (n < 0 || n >= this.length) throw RangeError("Index out of range");
                            if (i < 0) throw RangeError("sourceEnd out of bounds");
                            i > this.length && (i = this.length), e.length - t < i - n && (i = e.length - t + n);
                            var r = i - n;
                            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, i);
                            else if (this === e && n < t && t < i)
                                for (var o = r - 1; o >= 0; --o) e[o + t] = this[o + n];
                            else Uint8Array.prototype.set.call(e, this.subarray(n, i), t);
                            return r
                        }, a.prototype.fill = function (e, t, n, i) {
                            if ("string" == typeof e) {
                                if ("string" == typeof t ? (i = t, t = 0, n = this.length) : "string" == typeof n && (i = n, n = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                                if ("string" == typeof i && !a.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                                if (1 === e.length) {
                                    var r, o = e.charCodeAt(0);
                                    ("utf8" === i && o < 128 || "latin1" === i) && (e = o)
                                }
                            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                            if (t < 0 || this.length < t || this.length < n) throw RangeError("Out of range index");
                            if (n <= t) return this;
                            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                                for (r = t; r < n; ++r) this[r] = e;
                            else {
                                var s = a.isBuffer(e) ? e : a.from(e, i),
                                    l = s.length;
                                if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                                for (r = 0; r < n - t; ++r) this[r + t] = s[r % l]
                            }
                            return this
                        };
                        var M = /[^+/0-9A-Za-z-_]/g;

                        function C(e, t) {
                            t = t || 1 / 0;
                            for (var n, i = e.length, r = null, o = [], s = 0; s < i; ++s) {
                                if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
                                    if (!r) {
                                        if (n > 56319 || s + 1 === i) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        r = n;
                                        continue
                                    }
                                    if (n < 56320) {
                                        (t -= 3) > -1 && o.push(239, 191, 189), r = n;
                                        continue
                                    }
                                    n = (r - 55296 << 10 | n - 56320) + 65536
                                } else r && (t -= 3) > -1 && o.push(239, 191, 189);
                                if (r = null, n < 128) {
                                    if ((t -= 1) < 0) break;
                                    o.push(n)
                                } else if (n < 2048) {
                                    if ((t -= 2) < 0) break;
                                    o.push(n >> 6 | 192, 63 & n | 128)
                                } else if (n < 65536) {
                                    if ((t -= 3) < 0) break;
                                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                                } else if (n < 1114112) {
                                    if ((t -= 4) < 0) break;
                                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                                } else throw Error("Invalid code point")
                            }
                            return o
                        }

                        function S(e) {
                            for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                            return t
                        }

                        function x(e) {
                            return i.toByteArray(function (e) {
                                if ((e = (e = e.split("=")[0]).trim().replace(M, "")).length < 2) return "";
                                for (; e.length % 4 != 0;) e += "=";
                                return e
                            }(e))
                        }

                        function z(e, t, n, i) {
                            for (var r = 0; r < i && !(r + n >= t.length) && !(r >= e.length); ++r) t[r + n] = e[r];
                            return r
                        }

                        function E(e, t) {
                            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                        }
                        var T = function () {
                            for (var e = "0123456789abcdef", t = Array(256), n = 0; n < 16; ++n)
                                for (var i = 16 * n, r = 0; r < 16; ++r) t[i + r] = e[n] + e[r];
                            return t
                        }()
                    },
                    783: function (e, t) {
                        /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
                        t.read = function (e, t, n, i, r) {
                            var o, s, a = 8 * r - i - 1,
                                l = (1 << a) - 1,
                                c = l >> 1,
                                u = -7,
                                d = n ? r - 1 : 0,
                                p = n ? -1 : 1,
                                m = e[t + d];
                            for (d += p, o = m & (1 << -u) - 1, m >>= -u, u += a; u > 0; o = 256 * o + e[t + d], d += p, u -= 8);
                            for (s = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; s = 256 * s + e[t + d], d += p, u -= 8);
                            if (0 === o) o = 1 - c;
                            else {
                                if (o === l) return s ? NaN : 1 / 0 * (m ? -1 : 1);
                                s += Math.pow(2, i), o -= c
                            }
                            return (m ? -1 : 1) * s * Math.pow(2, o - i)
                        }, t.write = function (e, t, n, i, r, o) {
                            var s, a, l, c = 8 * o - r - 1,
                                u = (1 << c) - 1,
                                d = u >> 1,
                                p = 23 === r ? 5960464477539062e-23 : 0,
                                m = i ? 0 : o - 1,
                                h = i ? 1 : -1,
                                f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), s + d >= 1 ? t += p / l : t += p * Math.pow(2, 1 - d), t * l >= 2 && (s++, l /= 2), s + d >= u ? (a = 0, s = u) : s + d >= 1 ? (a = (t * l - 1) * Math.pow(2, r), s += d) : (a = t * Math.pow(2, d - 1) * Math.pow(2, r), s = 0)); r >= 8; e[n + m] = 255 & a, m += h, a /= 256, r -= 8);
                            for (s = s << r | a, c += r; c > 0; e[n + m] = 255 & s, m += h, s /= 256, c -= 8);
                            e[n + m - h] |= 128 * f
                        }
                    }
                },
                    n = {};

                function i(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var o = n[e] = {
                        exports: {}
                    },
                        s = !0;
                    try {
                        t[e](o, o.exports, i), s = !1
                    } finally {
                        s && delete n[e]
                    }
                    return o.exports
                }
                i.ab = "//";
                var r = i(72);
                e.exports = r
            }()
        },
        91479: function () { },
        63633: function (e) {
            e.exports = {
                bodyLock: "LbYZhq",
                modal: "JJVF3S",
                showModalContent: "nS7j7X",
                head: "mRsMqz",
                title: "XiXnOf",
                description: "aGnai2",
                actions: "_8AczHR",
                close: "x_vrHP"
            }
        },
        321: function (e) {
            e.exports = {
                preloader: "vHgOYX",
                rotate: "MqhCUa",
                overlay: "rWdikF"
            }
        },
        13309: function (e) {
            e.exports = {
                container: "yd6pxZ"
            }
        },
        30889: function () { },
        28240: function () { },
        8783: function () { },
        40183: function (e) {
            e.exports = {
                style: {
                    fontFamily: "'__Inter_441a4b', '__Inter_Fallback_441a4b'",
                    fontStyle: "normal"
                },
                className: "OeL4Hw"
            }
        },
        77663: function (e) {
            ! function () {
                var t = {
                    229: function (e) {
                        var t, n, i, r = e.exports = {};

                        function o() {
                            throw Error("setTimeout has not been defined")
                        }

                        function s() {
                            throw Error("clearTimeout has not been defined")
                        }

                        function a(e) {
                            if (t === setTimeout) return setTimeout(e, 0);
                            if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                            try {
                                return t(e, 0)
                            } catch (n) {
                                try {
                                    return t.call(null, e, 0)
                                } catch (n) {
                                    return t.call(this, e, 0)
                                }
                            }
                        } ! function () {
                            try {
                                t = "function" == typeof setTimeout ? setTimeout : o
                            } catch (e) {
                                t = o
                            }
                            try {
                                n = "function" == typeof clearTimeout ? clearTimeout : s
                            } catch (e) {
                                n = s
                            }
                        }();
                        var l = [],
                            c = !1,
                            u = -1;

                        function d() {
                            c && i && (c = !1, i.length ? l = i.concat(l) : u = -1, l.length && p())
                        }

                        function p() {
                            if (!c) {
                                var e = a(d);
                                c = !0;
                                for (var t = l.length; t;) {
                                    for (i = l, l = []; ++u < t;) i && i[u].run();
                                    u = -1, t = l.length
                                }
                                i = null, c = !1,
                                    function (e) {
                                        if (n === clearTimeout) return clearTimeout(e);
                                        if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                        try {
                                            n(e)
                                        } catch (t) {
                                            try {
                                                return n.call(null, e)
                                            } catch (t) {
                                                return n.call(this, e)
                                            }
                                        }
                                    }(e)
                            }
                        }

                        function m(e, t) {
                            this.fun = e, this.array = t
                        }

                        function h() { }
                        r.nextTick = function (e) {
                            var t = Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            l.push(new m(e, t)), 1 !== l.length || c || a(p)
                        }, m.prototype.run = function () {
                            this.fun.apply(null, this.array)
                        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function (e) {
                            return []
                        }, r.binding = function (e) {
                            throw Error("process.binding is not supported")
                        }, r.cwd = function () {
                            return "/"
                        }, r.chdir = function (e) {
                            throw Error("process.chdir is not supported")
                        }, r.umask = function () {
                            return 0
                        }
                    }
                },
                    n = {};

                function i(e) {
                    var r = n[e];
                    if (void 0 !== r) return r.exports;
                    var o = n[e] = {
                        exports: {}
                    },
                        s = !0;
                    try {
                        t[e](o, o.exports, i), s = !1
                    } finally {
                        s && delete n[e]
                    }
                    return o.exports
                }
                i.ab = "//";
                var r = i(229);
                e.exports = r
            }()
        },
        39332: function (e, t, n) {
            e.exports = n(70827)
        },
        11163: function (e, t, n) {
            e.exports = n(9090)
        },
        4298: function (e, t, n) {
            e.exports = n(32892)
        },
        92703: function (e, t, n) {
            "use strict";
            var i = n(50414);

            function r() { }

            function o() { }
            o.resetWarningCache = r, e.exports = function () {
                function e(e, t, n, r, o, s) {
                    if (s !== i) {
                        var a = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bigint: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: r
                };
                return n.PropTypes = n, n
            }
        },
        45697: function (e, t, n) {
            e.exports = n(92703)()
        },
        50414: function (e) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        85351: function (e, t, n) {
            let i = n(62765),
                r = (...e) => {
                    if (!window.hj) throw Error("Hotjar is not initialized");
                    window.hj(...e)
                };
            e.exports = {
                hotjar: {
                    initialize: function ({
                        id: e,
                        sv: t,
                        debug: n,
                        nonce: r
                    }) {
                        i({
                            id: e,
                            sv: t,
                            debug: n,
                            nonce: r
                        })
                    },
                    initialized: function () {
                        return "undefined" != typeof window && "function" == typeof window?.hj
                    },
                    identify: function (e, t) {
                        r("identify", e, t)
                    },
                    event: function (e) {
                        r("event", e)
                    },
                    stateChange: function (e) {
                        r("stateChange", e)
                    }
                }
            }
        },
        62765: function (e) {
            e.exports = function ({
                id: e,
                sv: t,
                debug: n = !1,
                nonce: i = null
            }) {
                var r, o, s, a;
                r = window, o = document, r.hj = r.hj || function () {
                    (r.hj.q = r.hj.q || []).push(arguments)
                }, r._hjSettings = {
                    hjid: e,
                    hjsv: t,
                    hjDebug: n
                }, r._scriptPath = "https://static.hotjar.com/c/hotjar-" + r._hjSettings.hjid + ".js?sv=" + r._hjSettings.hjsv, document.querySelector('script[src*="' + r._scriptPath + '"]') || (s = o.getElementsByTagName("head")[0], a = o.createElement("script"), i && a.setAttribute("nonce", i), a.async = 1, a.src = r._scriptPath, s.appendChild(a))
            }
        },
        46871: function (e, t, n) {
            "use strict";

            function i() {
                var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
                null != e && this.setState(e)
            }

            function r(e) {
                this.setState((function (t) {
                    var n = this.constructor.getDerivedStateFromProps(e, t);
                    return null != n ? n : null
                }).bind(this))
            }

            function o(e, t) {
                try {
                    var n = this.props,
                        i = this.state;
                    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(n, i)
                } finally {
                    this.props = n, this.state = i
                }
            }

            function s(e) {
                var t = e.prototype;
                if (!t || !t.isReactComponent) throw Error("Can only polyfill class components");
                if ("function" != typeof e.getDerivedStateFromProps && "function" != typeof t.getSnapshotBeforeUpdate) return e;
                var n = null,
                    s = null,
                    a = null;
                if ("function" == typeof t.componentWillMount ? n = "componentWillMount" : "function" == typeof t.UNSAFE_componentWillMount && (n = "UNSAFE_componentWillMount"), "function" == typeof t.componentWillReceiveProps ? s = "componentWillReceiveProps" : "function" == typeof t.UNSAFE_componentWillReceiveProps && (s = "UNSAFE_componentWillReceiveProps"), "function" == typeof t.componentWillUpdate ? a = "componentWillUpdate" : "function" == typeof t.UNSAFE_componentWillUpdate && (a = "UNSAFE_componentWillUpdate"), null !== n || null !== s || null !== a) throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n" + (e.displayName || e.name) + " uses " + ("function" == typeof e.getDerivedStateFromProps ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()") + " but also contains the following legacy lifecycles:" + (null !== n ? "\n  " + n : "") + (null !== s ? "\n  " + s : "") + (null !== a ? "\n  " + a : "") + "\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks");
                if ("function" == typeof e.getDerivedStateFromProps && (t.componentWillMount = i, t.componentWillReceiveProps = r), "function" == typeof t.getSnapshotBeforeUpdate) {
                    if ("function" != typeof t.componentDidUpdate) throw Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");
                    t.componentWillUpdate = o;
                    var l = t.componentDidUpdate;
                    t.componentDidUpdate = function (e, t, n) {
                        var i = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : n;
                        l.call(this, e, t, i)
                    }
                }
                return e
            }
            n.r(t), n.d(t, {
                polyfill: function () {
                    return s
                }
            }), i.__suppressDeprecationWarning = !0, r.__suppressDeprecationWarning = !0, o.__suppressDeprecationWarning = !0
        },
        29983: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bodyOpenClassName = t.portalClassName = void 0;
            var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
                r = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                o = n(67294),
                s = h(o),
                a = h(n(73935)),
                l = h(n(45697)),
                c = h(n(28747)),
                u = function (e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(57149)),
                d = n(51112),
                p = h(d),
                m = n(46871);

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e, t) {
                if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t && ("object" == typeof t || "function" == typeof t) ? t : e
            }
            var g = t.portalClassName = "ReactModalPortal",
                b = t.bodyOpenClassName = "ReactModal__Body--open",
                v = d.canUseDOM && void 0 !== a.default.createPortal,
                y = function (e) {
                    return document.createElement(e)
                },
                A = function () {
                    return v ? a.default.createPortal : a.default.unstable_renderSubtreeIntoContainer
                },
                k = function (e) {
                    function t() {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t);
                        for (var e, n, r, o = arguments.length, l = Array(o), u = 0; u < o; u++) l[u] = arguments[u];
                        return n = r = f(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), r.removePortal = function () {
                            v || a.default.unmountComponentAtNode(r.node);
                            var e = (0, r.props.parentSelector)();
                            e && e.contains(r.node) ? e.removeChild(r.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')
                        }, r.portalRef = function (e) {
                            r.portal = e
                        }, r.renderPortal = function (e) {
                            var n = A()(r, s.default.createElement(c.default, i({
                                defaultStyles: t.defaultStyles
                            }, e)), r.node);
                            r.portalRef(n)
                        }, f(r, n)
                    }
                    return ! function (e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), r(t, [{
                        key: "componentDidMount",
                        value: function () {
                            d.canUseDOM && (v || (this.node = y("div")), this.node.className = this.props.portalClassName, (0, this.props.parentSelector)().appendChild(this.node), v || this.renderPortal(this.props))
                        }
                    }, {
                        key: "getSnapshotBeforeUpdate",
                        value: function (e) {
                            return {
                                prevParent: (0, e.parentSelector)(),
                                nextParent: (0, this.props.parentSelector)()
                            }
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (e, t, n) {
                            if (d.canUseDOM) {
                                var i = this.props,
                                    r = i.isOpen,
                                    o = i.portalClassName;
                                e.portalClassName !== o && (this.node.className = o);
                                var s = n.prevParent,
                                    a = n.nextParent;
                                a !== s && (s.removeChild(this.node), a.appendChild(this.node)), (e.isOpen || r) && (v || this.renderPortal(this.props))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            if (d.canUseDOM && this.node && this.portal) {
                                var e = this.portal.state,
                                    t = Date.now(),
                                    n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                                n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal()
                            }
                        }
                    }, {
                        key: "render",
                        value: function () {
                            return d.canUseDOM && v ? (!this.node && v && (this.node = y("div")), A()(s.default.createElement(c.default, i({
                                ref: this.portalRef,
                                defaultStyles: t.defaultStyles
                            }, this.props)), this.node)) : null
                        }
                    }], [{
                        key: "setAppElement",
                        value: function (e) {
                            u.setElement(e)
                        }
                    }]), t
                }(o.Component);
            k.propTypes = {
                isOpen: l.default.bool.isRequired,
                style: l.default.shape({
                    content: l.default.object,
                    overlay: l.default.object
                }),
                portalClassName: l.default.string,
                bodyOpenClassName: l.default.string,
                htmlOpenClassName: l.default.string,
                className: l.default.oneOfType([l.default.string, l.default.shape({
                    base: l.default.string.isRequired,
                    afterOpen: l.default.string.isRequired,
                    beforeClose: l.default.string.isRequired
                })]),
                overlayClassName: l.default.oneOfType([l.default.string, l.default.shape({
                    base: l.default.string.isRequired,
                    afterOpen: l.default.string.isRequired,
                    beforeClose: l.default.string.isRequired
                })]),
                appElement: l.default.oneOfType([l.default.instanceOf(p.default), l.default.instanceOf(d.SafeHTMLCollection), l.default.instanceOf(d.SafeNodeList), l.default.arrayOf(l.default.instanceOf(p.default))]),
                onAfterOpen: l.default.func,
                onRequestClose: l.default.func,
                closeTimeoutMS: l.default.number,
                ariaHideApp: l.default.bool,
                shouldFocusAfterRender: l.default.bool,
                shouldCloseOnOverlayClick: l.default.bool,
                shouldReturnFocusAfterClose: l.default.bool,
                preventScroll: l.default.bool,
                parentSelector: l.default.func,
                aria: l.default.object,
                data: l.default.object,
                role: l.default.string,
                contentLabel: l.default.string,
                shouldCloseOnEsc: l.default.bool,
                overlayRef: l.default.func,
                contentRef: l.default.func,
                id: l.default.string,
                overlayElement: l.default.func,
                contentElement: l.default.func
            }, k.defaultProps = {
                isOpen: !1,
                portalClassName: g,
                bodyOpenClassName: b,
                role: "dialog",
                ariaHideApp: !0,
                closeTimeoutMS: 0,
                shouldFocusAfterRender: !0,
                shouldCloseOnEsc: !0,
                shouldCloseOnOverlayClick: !0,
                shouldReturnFocusAfterClose: !0,
                preventScroll: !1,
                parentSelector: function () {
                    return document.body
                },
                overlayElement: function (e, t) {
                    return s.default.createElement("div", e, t)
                },
                contentElement: function (e, t) {
                    return s.default.createElement("div", e, t)
                }
            }, k.defaultStyles = {
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.75)"
                },
                content: {
                    position: "absolute",
                    top: "40px",
                    left: "40px",
                    right: "40px",
                    bottom: "40px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px"
                }
            }, (0, m.polyfill)(k), t.default = k
        },
        28747: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            },
                r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                o = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function (t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                s = n(67294),
                a = g(n(45697)),
                l = f(n(99685)),
                c = g(n(88338)),
                u = f(n(57149)),
                d = f(n(32409)),
                p = n(51112),
                m = g(p),
                h = g(n(89623));

            function f(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n(35063);
            var b = {
                overlay: "ReactModal__Overlay",
                content: "ReactModal__Content"
            },
                v = 0,
                y = function (e) {
                    function t(e) {
                        ! function (e, t) {
                            if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function (e, t) {
                            if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t && ("object" == typeof t || "function" == typeof t) ? t : e
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.setOverlayRef = function (e) {
                            n.overlay = e, n.props.overlayRef && n.props.overlayRef(e)
                        }, n.setContentRef = function (e) {
                            n.content = e, n.props.contentRef && n.props.contentRef(e)
                        }, n.afterClose = function () {
                            var e = n.props,
                                t = e.appElement,
                                i = e.ariaHideApp,
                                r = e.htmlOpenClassName,
                                o = e.bodyOpenClassName,
                                s = e.parentSelector,
                                a = s && s().ownerDocument || document;
                            o && d.remove(a.body, o), r && d.remove(a.getElementsByTagName("html")[0], r), i && v > 0 && 0 == (v -= 1) && u.show(t), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (l.returnFocus(n.props.preventScroll), l.teardownScopedFocus()) : l.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose(), h.default.deregister(n)
                        }, n.open = function () {
                            n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({
                                beforeClose: !1
                            })) : (n.props.shouldFocusAfterRender && (l.setupScopedFocus(n.node), l.markForFocusLater()), n.setState({
                                isOpen: !0
                            }, function () {
                                n.openAnimationFrame = requestAnimationFrame(function () {
                                    n.setState({
                                        afterOpen: !0
                                    }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({
                                        overlayEl: n.overlay,
                                        contentEl: n.content
                                    })
                                })
                            }))
                        }, n.close = function () {
                            n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
                        }, n.focusContent = function () {
                            return n.content && !n.contentHasFocus() && n.content.focus({
                                preventScroll: !0
                            })
                        }, n.closeWithTimeout = function () {
                            var e = Date.now() + n.props.closeTimeoutMS;
                            n.setState({
                                beforeClose: !0,
                                closesAt: e
                            }, function () {
                                n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
                            })
                        }, n.closeWithoutTimeout = function () {
                            n.setState({
                                beforeClose: !1,
                                isOpen: !1,
                                afterOpen: !1,
                                closesAt: null
                            }, n.afterClose)
                        }, n.handleKeyDown = function (e) {
                            ("Tab" === e.code || 9 === e.keyCode) && (0, c.default)(n.content, e), n.props.shouldCloseOnEsc && ("Escape" === e.code || 27 === e.keyCode) && (e.stopPropagation(), n.requestClose(e))
                        }, n.handleOverlayOnClick = function (e) {
                            null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null
                        }, n.handleContentOnMouseUp = function () {
                            n.shouldClose = !1
                        }, n.handleOverlayOnMouseDown = function (e) {
                            n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault()
                        }, n.handleContentOnClick = function () {
                            n.shouldClose = !1
                        }, n.handleContentOnMouseDown = function () {
                            n.shouldClose = !1
                        }, n.requestClose = function (e) {
                            return n.ownerHandlesClose() && n.props.onRequestClose(e)
                        }, n.ownerHandlesClose = function () {
                            return n.props.onRequestClose
                        }, n.shouldBeClosed = function () {
                            return !n.state.isOpen && !n.state.beforeClose
                        }, n.contentHasFocus = function () {
                            return document.activeElement === n.content || n.content.contains(document.activeElement)
                        }, n.buildClassName = function (e, t) {
                            var i = (void 0 === t ? "undefined" : r(t)) === "object" ? t : {
                                base: b[e],
                                afterOpen: b[e] + "--after-open",
                                beforeClose: b[e] + "--before-close"
                            },
                                o = i.base;
                            return n.state.afterOpen && (o = o + " " + i.afterOpen), n.state.beforeClose && (o = o + " " + i.beforeClose), "string" == typeof t && t ? o + " " + t : o
                        }, n.attributesFromObject = function (e, t) {
                            return Object.keys(t).reduce(function (n, i) {
                                return n[e + "-" + i] = t[i], n
                            }, {})
                        }, n.state = {
                            afterOpen: !1,
                            beforeClose: !1
                        }, n.shouldClose = null, n.moveFromContentToOverlay = null, n
                    }
                    return ! function (e, t) {
                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), o(t, [{
                        key: "componentDidMount",
                        value: function () {
                            this.props.isOpen && this.open()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function (e, t) {
                            this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame)
                        }
                    }, {
                        key: "beforeOpen",
                        value: function () {
                            var e = this.props,
                                t = e.appElement,
                                n = e.ariaHideApp,
                                i = e.htmlOpenClassName,
                                r = e.bodyOpenClassName,
                                o = e.parentSelector,
                                s = o && o().ownerDocument || document;
                            r && d.add(s.body, r), i && d.add(s.getElementsByTagName("html")[0], i), n && (v += 1, u.hide(t)), h.default.register(this)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this.props,
                                t = e.id,
                                n = e.className,
                                r = e.overlayClassName,
                                o = e.defaultStyles,
                                s = e.children,
                                a = n ? {} : o.content,
                                l = r ? {} : o.overlay;
                            if (this.shouldBeClosed()) return null;
                            var c = {
                                ref: this.setOverlayRef,
                                className: this.buildClassName("overlay", r),
                                style: i({}, l, this.props.style.overlay),
                                onClick: this.handleOverlayOnClick,
                                onMouseDown: this.handleOverlayOnMouseDown
                            },
                                u = i({
                                    id: t,
                                    ref: this.setContentRef,
                                    style: i({}, a, this.props.style.content),
                                    className: this.buildClassName("content", n),
                                    tabIndex: "-1",
                                    onKeyDown: this.handleKeyDown,
                                    onMouseDown: this.handleContentOnMouseDown,
                                    onMouseUp: this.handleContentOnMouseUp,
                                    onClick: this.handleContentOnClick,
                                    role: this.props.role,
                                    "aria-label": this.props.contentLabel
                                }, this.attributesFromObject("aria", i({
                                    modal: !0
                                }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
                                    "data-testid": this.props.testId
                                }),
                                d = this.props.contentElement(u, s);
                            return this.props.overlayElement(c, d)
                        }
                    }]), t
                }(s.Component);
            y.defaultProps = {
                style: {
                    overlay: {},
                    content: {}
                },
                defaultStyles: {}
            }, y.propTypes = {
                isOpen: a.default.bool.isRequired,
                defaultStyles: a.default.shape({
                    content: a.default.object,
                    overlay: a.default.object
                }),
                style: a.default.shape({
                    content: a.default.object,
                    overlay: a.default.object
                }),
                className: a.default.oneOfType([a.default.string, a.default.object]),
                overlayClassName: a.default.oneOfType([a.default.string, a.default.object]),
                parentSelector: a.default.func,
                bodyOpenClassName: a.default.string,
                htmlOpenClassName: a.default.string,
                ariaHideApp: a.default.bool,
                appElement: a.default.oneOfType([a.default.instanceOf(m.default), a.default.instanceOf(p.SafeHTMLCollection), a.default.instanceOf(p.SafeNodeList), a.default.arrayOf(a.default.instanceOf(m.default))]),
                onAfterOpen: a.default.func,
                onAfterClose: a.default.func,
                onRequestClose: a.default.func,
                closeTimeoutMS: a.default.number,
                shouldFocusAfterRender: a.default.bool,
                shouldCloseOnOverlayClick: a.default.bool,
                shouldReturnFocusAfterClose: a.default.bool,
                preventScroll: a.default.bool,
                role: a.default.string,
                contentLabel: a.default.string,
                aria: a.default.object,
                data: a.default.object,
                children: a.default.node,
                shouldCloseOnEsc: a.default.bool,
                overlayRef: a.default.func,
                contentRef: a.default.func,
                id: a.default.string,
                overlayElement: a.default.func,
                contentElement: a.default.func,
                testId: a.default.string
            }, t.default = y, e.exports = t.default
        },
        57149: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function () {
                s && (s.removeAttribute ? s.removeAttribute("aria-hidden") : null != s.length ? s.forEach(function (e) {
                    return e.removeAttribute("aria-hidden")
                }) : document.querySelectorAll(s).forEach(function (e) {
                    return e.removeAttribute("aria-hidden")
                })), s = null
            }, t.log = function () { }, t.assertNodeList = a, t.setElement = function (e) {
                var t = e;
                if ("string" == typeof t && o.canUseDOM) {
                    var n = document.querySelectorAll(t);
                    a(n, t), t = n
                }
                return s = t || s
            }, t.validateElement = l, t.hide = function (e) {
                var t = !0,
                    n = !1,
                    i = void 0;
                try {
                    for (var r, o = l(e)[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) r.value.setAttribute("aria-hidden", "true")
                } catch (e) {
                    n = !0, i = e
                } finally {
                    try {
                        !t && o.return && o.return()
                    } finally {
                        if (n) throw i
                    }
                }
            }, t.show = function (e) {
                var t = !0,
                    n = !1,
                    i = void 0;
                try {
                    for (var r, o = l(e)[Symbol.iterator](); !(t = (r = o.next()).done); t = !0) r.value.removeAttribute("aria-hidden")
                } catch (e) {
                    n = !0, i = e
                } finally {
                    try {
                        !t && o.return && o.return()
                    } finally {
                        if (n) throw i
                    }
                }
            }, t.documentNotReadyOrSSRTesting = function () {
                s = null
            };
            var i, r = (i = n(42473)) && i.__esModule ? i : {
                default: i
            },
                o = n(51112),
                s = null;

            function a(e, t) {
                if (!e || !e.length) throw Error("react-modal: No elements were found for selector " + t + ".")
            }

            function l(e) {
                var t = e || s;
                return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, r.default)(!1, "react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`."), [])
            }
        },
        35063: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function () {
                for (var e = [o, s], t = 0; t < e.length; t++) {
                    var n = e[t];
                    n && n.parentNode && n.parentNode.removeChild(n)
                }
                o = s = null, a = []
            }, t.log = function () {
                console.log("bodyTrap ----------"), console.log(a.length);
                for (var e = [o, s], t = 0; t < e.length; t++) {
                    var n = e[t] || {};
                    console.log(n.nodeName, n.className, n.id)
                }
                console.log("edn bodyTrap ----------")
            };
            var i, r = (i = n(89623)) && i.__esModule ? i : {
                default: i
            },
                o = void 0,
                s = void 0,
                a = [];

            function l() {
                0 !== a.length && a[a.length - 1].focusContent()
            }
            r.default.subscribe(function (e, t) {
                o || s || ((o = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""), o.style.position = "absolute", o.style.opacity = "0", o.setAttribute("tabindex", "0"), o.addEventListener("focus", l), (s = o.cloneNode()).addEventListener("focus", l)), (a = t).length > 0 ? (document.body.firstChild !== o && document.body.insertBefore(o, document.body.firstChild), document.body.lastChild !== s && document.body.appendChild(s)) : (o.parentElement && o.parentElement.removeChild(o), s.parentElement && s.parentElement.removeChild(s))
            })
        },
        32409: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function () {
                var e = document.getElementsByTagName("html")[0];
                for (var t in n) r(e, n[t]);
                var o = document.body;
                for (var s in i) r(o, i[s]);
                n = {}, i = {}
            }, t.log = function () { };
            var n = {},
                i = {};

            function r(e, t) {
                e.classList.remove(t)
            }
            var o = function (e, t, n) {
                n.forEach(function (n) {
                    t[n] || (t[n] = 0), t[n] += 1, e.add(n)
                })
            },
                s = function (e, t, n) {
                    n.forEach(function (n) {
                        t[n] && (t[n] -= 1), 0 === t[n] && e.remove(n)
                    })
                };
            t.add = function (e, t) {
                return o(e.classList, "html" == e.nodeName.toLowerCase() ? n : i, t.split(" "))
            }, t.remove = function (e, t) {
                return s(e.classList, "html" == e.nodeName.toLowerCase() ? n : i, t.split(" "))
            }
        },
        99685: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function () {
                o = []
            }, t.log = function () { }, t.handleBlur = l, t.handleFocus = c, t.markForFocusLater = function () {
                o.push(document.activeElement)
            }, t.returnFocus = function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = null;
                try {
                    0 !== o.length && (t = o.pop()).focus({
                        preventScroll: e
                    });
                    return
                } catch (e) {
                    console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "))
                }
            }, t.popWithoutFocus = function () {
                o.length > 0 && o.pop()
            }, t.setupScopedFocus = function (e) {
                s = e, window.addEventListener ? (window.addEventListener("blur", l, !1), document.addEventListener("focus", c, !0)) : (window.attachEvent("onBlur", l), document.attachEvent("onFocus", c))
            }, t.teardownScopedFocus = function () {
                s = null, window.addEventListener ? (window.removeEventListener("blur", l), document.removeEventListener("focus", c)) : (window.detachEvent("onBlur", l), document.detachEvent("onFocus", c))
            };
            var i, r = (i = n(37845)) && i.__esModule ? i : {
                default: i
            },
                o = [],
                s = null,
                a = !1;

            function l() {
                a = !0
            }

            function c() {
                a && (a = !1, s && setTimeout(function () {
                    s.contains(document.activeElement) || ((0, r.default)(s)[0] || s).focus()
                }, 0))
            }
        },
        89623: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.log = function () {
                console.log("portalOpenInstances ----------"), console.log(i.openInstances.length), i.openInstances.forEach(function (e) {
                    return console.log(e)
                }), console.log("end portalOpenInstances ----------")
            }, t.resetState = function () {
                i = new n
            };
            var n = function e() {
                var t = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                }(this, e), this.register = function (e) {
                    -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e), t.emit("register"))
                }, this.deregister = function (e) {
                    var n = t.openInstances.indexOf(e); - 1 !== n && (t.openInstances.splice(n, 1), t.emit("deregister"))
                }, this.subscribe = function (e) {
                    t.subscribers.push(e)
                }, this.emit = function (e) {
                    t.subscribers.forEach(function (n) {
                        return n(e, t.openInstances.slice())
                    })
                }, this.openInstances = [], this.subscribers = []
            },
                i = new n;
            t.default = i
        },
        51112: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0;
            var i, r = ((i = n(58875)) && i.__esModule ? i : {
                default: i
            }).default,
                o = r.canUseDOM ? window.HTMLElement : {};
            t.SafeHTMLCollection = r.canUseDOM ? window.HTMLCollection : {}, t.SafeNodeList = r.canUseDOM ? window.NodeList : {}, t.canUseDOM = r.canUseDOM, t.default = o
        },
        88338: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function (e, t) {
                var n = (0, r.default)(e);
                if (!n.length) {
                    t.preventDefault();
                    return
                }
                var i = void 0,
                    o = t.shiftKey,
                    s = n[0],
                    a = n[n.length - 1],
                    l = function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                        return t.activeElement.shadowRoot ? e(t.activeElement.shadowRoot) : t.activeElement
                    }();
                if (e === l) {
                    if (!o) return;
                    i = a
                }
                if (a !== l || o || (i = s), s === l && o && (i = a), i) {
                    t.preventDefault(), i.focus();
                    return
                }
                var c = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
                if (null != c && "Chrome" != c[1] && null == /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) {
                    var u = n.indexOf(l);
                    if (u > -1 && (u += o ? -1 : 1), void 0 === (i = n[u])) {
                        t.preventDefault(), (i = o ? a : s).focus();
                        return
                    }
                    t.preventDefault(), i.focus()
                }
            };
            var i, r = (i = n(37845)) && i.__esModule ? i : {
                default: i
            };
            e.exports = t.default
        },
        37845: function (e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function e(t) {
                return [].slice.call(t.querySelectorAll("*"), 0).reduce(function (t, n) {
                    return t.concat(n.shadowRoot ? e(n.shadowRoot) : [n])
                }, []).filter(i)
            };
            var n = /input|select|textarea|button|object|iframe/;

            function i(e) {
                var t, i, r = e.getAttribute("tabindex");
                null === r && (r = void 0);
                var o = isNaN(r);
                return (o || r >= 0) && (t = !o, i = e.nodeName.toLowerCase(), (n.test(i) && !e.disabled || "a" === i && e.href || t) && function (e) {
                    for (var t = e, n = e.getRootNode && e.getRootNode(); t && t !== document.body;) {
                        if (n && t === n && (t = n.host.parentNode), function (e) {
                            var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
                            if (t && !e.innerHTML) return !0;
                            try {
                                var n = window.getComputedStyle(e),
                                    i = n.getPropertyValue("display");
                                return t ? "contents" !== i && ("visible" !== n.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0) : "none" === i
                            } catch (e) {
                                return console.warn("Failed to inspect element style"), !1
                            }
                        }(t)) return !1;
                        t = t.parentNode
                    }
                    return !0
                }(e))
            }
            e.exports = t.default
        },
        83253: function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i, r = (i = n(29983)) && i.__esModule ? i : {
                default: i
            };
            t.default = r.default, e.exports = t.default
        },
        71739: function (e) {
            e.exports = {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            }
        },
        42473: function (e) {
            "use strict";
            e.exports = function () { }
        },
        93967: function (e, t) {
            var n;
            /*!
                Copyright (c) 2018 Jed Watson.
                Licensed under the MIT License (MIT), see
                http://jedwatson.github.io/classnames
            */
            ! function () {
                "use strict";
                var i = {}.hasOwnProperty;

                function r() {
                    for (var e = "", t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        n && (e = o(e, function (e) {
                            if ("string" == typeof e || "number" == typeof e) return e;
                            if ("object" != typeof e) return "";
                            if (Array.isArray(e)) return r.apply(null, e);
                            if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
                            var t = "";
                            for (var n in e) i.call(e, n) && e[n] && (t = o(t, n));
                            return t
                        }(n)))
                    }
                    return e
                }

                function o(e, t) {
                    return t ? e ? e + " " + t : e + t : e
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 !== (n = (function () {
                    return r
                }).apply(t, [])) && (e.exports = n)
            }()
        },
        87066: function (e, t, n) {
            "use strict";
            let i, r, o;
            n.d(t, {
                Z: function () {
                    return tm
                }
            });
            var s, a, l, c, u, d = {};

            function p(e, t) {
                return function () {
                    return e.apply(t, arguments)
                }
            }
            n.r(d), n.d(d, {
                hasBrowserEnv: function () {
                    return eb
                },
                hasStandardBrowserEnv: function () {
                    return ey
                },
                hasStandardBrowserWebWorkerEnv: function () {
                    return eA
                },
                navigator: function () {
                    return ev
                },
                origin: function () {
                    return ek
                }
            });
            var m = n(83454);
            let {
                toString: h
            } = Object.prototype, {
                getPrototypeOf: f
            } = Object, g = (i = Object.create(null), e => {
                let t = h.call(e);
                return i[t] || (i[t] = t.slice(8, -1).toLowerCase())
            }), b = e => (e = e.toLowerCase(), t => g(t) === e), v = e => t => typeof t === e, {
                isArray: y
            } = Array, A = v("undefined"), k = b("ArrayBuffer"), w = v("string"), L = v("function"), M = v("number"), C = e => null !== e && "object" == typeof e, S = e => {
                if ("object" !== g(e)) return !1;
                let t = f(e);
                return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
            }, x = b("Date"), z = b("File"), E = b("Blob"), T = b("FileList"), B = b("URLSearchParams"), [P, q, I, O] = ["ReadableStream", "Request", "Response", "Headers"].map(b);

            function R(e, t, {
                allOwnKeys: n = !1
            } = {}) {
                let i, r;
                if (null != e) {
                    if ("object" != typeof e && (e = [e]), y(e))
                        for (i = 0, r = e.length; i < r; i++) t.call(null, e[i], i, e);
                    else {
                        let r;
                        let o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                            s = o.length;
                        for (i = 0; i < s; i++) r = o[i], t.call(null, e[r], r, e)
                    }
                }
            }

            function D(e, t) {
                let n;
                t = t.toLowerCase();
                let i = Object.keys(e),
                    r = i.length;
                for (; r-- > 0;)
                    if (t === (n = i[r]).toLowerCase()) return n;
                return null
            }
            let F = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : global,
                N = e => !A(e) && e !== F,
                j = (r = "undefined" != typeof Uint8Array && f(Uint8Array), e => r && e instanceof r),
                K = b("HTMLFormElement"),
                W = (({
                    hasOwnProperty: e
                }) => (t, n) => e.call(t, n))(Object.prototype),
                U = b("RegExp"),
                V = (e, t) => {
                    let n = Object.getOwnPropertyDescriptors(e),
                        i = {};
                    R(n, (n, r) => {
                        let o;
                        !1 !== (o = t(n, r, e)) && (i[r] = o || n)
                    }), Object.defineProperties(e, i)
                },
                Y = "abcdefghijklmnopqrstuvwxyz",
                _ = "0123456789",
                H = {
                    DIGIT: _,
                    ALPHA: Y,
                    ALPHA_DIGIT: Y + Y.toUpperCase() + _
                },
                G = b("AsyncFunction"),
                $ = (s = "function" == typeof setImmediate, a = L(F.postMessage), s ? setImmediate : a ? (l = `axios@${Math.random()}`, c = [], F.addEventListener("message", ({
                    source: e,
                    data: t
                }) => {
                    e === F && t === l && c.length && c.shift()()
                }, !1), e => {
                    c.push(e), F.postMessage(l, "*")
                }) : e => setTimeout(e)),
                J = "undefined" != typeof queueMicrotask ? queueMicrotask.bind(F) : void 0 !== m && m.nextTick || $;
            var Z = {
                isArray: y,
                isArrayBuffer: k,
                isBuffer: function (e) {
                    return null !== e && !A(e) && null !== e.constructor && !A(e.constructor) && L(e.constructor.isBuffer) && e.constructor.isBuffer(e)
                },
                isFormData: e => {
                    let t;
                    return e && ("function" == typeof FormData && e instanceof FormData || L(e.append) && ("formdata" === (t = g(e)) || "object" === t && L(e.toString) && "[object FormData]" === e.toString()))
                },
                isArrayBufferView: function (e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && k(e.buffer)
                },
                isString: w,
                isNumber: M,
                isBoolean: e => !0 === e || !1 === e,
                isObject: C,
                isPlainObject: S,
                isReadableStream: P,
                isRequest: q,
                isResponse: I,
                isHeaders: O,
                isUndefined: A,
                isDate: x,
                isFile: z,
                isBlob: E,
                isRegExp: U,
                isFunction: L,
                isStream: e => C(e) && L(e.pipe),
                isURLSearchParams: B,
                isTypedArray: j,
                isFileList: T,
                forEach: R,
                merge: function e() {
                    let {
                        caseless: t
                    } = N(this) && this || {}, n = {}, i = (i, r) => {
                        let o = t && D(n, r) || r;
                        S(n[o]) && S(i) ? n[o] = e(n[o], i) : S(i) ? n[o] = e({}, i) : y(i) ? n[o] = i.slice() : n[o] = i
                    };
                    for (let e = 0, t = arguments.length; e < t; e++) arguments[e] && R(arguments[e], i);
                    return n
                },
                extend: (e, t, n, {
                    allOwnKeys: i
                } = {}) => (R(t, (t, i) => {
                    n && L(t) ? e[i] = p(t, n) : e[i] = t
                }, {
                    allOwnKeys: i
                }), e),
                trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
                inherits: (e, t, n, i) => {
                    e.prototype = Object.create(t.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                        value: t.prototype
                    }), n && Object.assign(e.prototype, n)
                },
                toFlatObject: (e, t, n, i) => {
                    let r, o, s;
                    let a = {};
                    if (t = t || {}, null == e) return t;
                    do {
                        for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0;) s = r[o], (!i || i(s, e, t)) && !a[s] && (t[s] = e[s], a[s] = !0);
                        e = !1 !== n && f(e)
                    } while (e && (!n || n(e, t)) && e !== Object.prototype);
                    return t
                },
                kindOf: g,
                kindOfTest: b,
                endsWith: (e, t, n) => {
                    e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                    let i = e.indexOf(t, n);
                    return -1 !== i && i === n
                },
                toArray: e => {
                    if (!e) return null;
                    if (y(e)) return e;
                    let t = e.length;
                    if (!M(t)) return null;
                    let n = Array(t);
                    for (; t-- > 0;) n[t] = e[t];
                    return n
                },
                forEachEntry: (e, t) => {
                    let n;
                    let i = (e && e[Symbol.iterator]).call(e);
                    for (;
                        (n = i.next()) && !n.done;) {
                        let i = n.value;
                        t.call(e, i[0], i[1])
                    }
                },
                matchAll: (e, t) => {
                    let n;
                    let i = [];
                    for (; null !== (n = e.exec(t));) i.push(n);
                    return i
                },
                isHTMLForm: K,
                hasOwnProperty: W,
                hasOwnProp: W,
                reduceDescriptors: V,
                freezeMethods: e => {
                    V(e, (t, n) => {
                        if (L(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                        if (L(e[n])) {
                            if (t.enumerable = !1, "writable" in t) {
                                t.writable = !1;
                                return
                            }
                            t.set || (t.set = () => {
                                throw Error("Can not rewrite read-only method '" + n + "'")
                            })
                        }
                    })
                },
                toObjectSet: (e, t) => {
                    let n = {};
                    return (e => {
                        e.forEach(e => {
                            n[e] = !0
                        })
                    })(y(e) ? e : String(e).split(t)), n
                },
                toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
                    return t.toUpperCase() + n
                }),
                noop: () => { },
                toFiniteNumber: (e, t) => null != e && Number.isFinite(e = +e) ? e : t,
                findKey: D,
                global: F,
                isContextDefined: N,
                ALPHABET: H,
                generateString: (e = 16, t = H.ALPHA_DIGIT) => {
                    let n = "",
                        {
                            length: i
                        } = t;
                    for (; e--;) n += t[Math.random() * i | 0];
                    return n
                },
                isSpecCompliantForm: function (e) {
                    return !!(e && L(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
                },
                toJSONObject: e => {
                    let t = Array(10),
                        n = (e, i) => {
                            if (C(e)) {
                                if (t.indexOf(e) >= 0) return;
                                if (!("toJSON" in e)) {
                                    t[i] = e;
                                    let r = y(e) ? [] : {};
                                    return R(e, (e, t) => {
                                        let o = n(e, i + 1);
                                        A(o) || (r[t] = o)
                                    }), t[i] = void 0, r
                                }
                            }
                            return e
                        };
                    return n(e, 0)
                },
                isAsyncFn: G,
                isThenable: e => e && (C(e) || L(e)) && L(e.then) && L(e.catch),
                setImmediate: $,
                asap: J
            };

            function Q(e, t, n, i, r) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), i && (this.request = i), r && (this.response = r, this.status = r.status ? r.status : null)
            }
            Z.inherits(Q, Error, {
                toJSON: function () {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: Z.toJSONObject(this.config),
                        code: this.code,
                        status: this.status
                    }
                }
            });
            let X = Q.prototype,
                ee = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => {
                ee[e] = {
                    value: e
                }
            }), Object.defineProperties(Q, ee), Object.defineProperty(X, "isAxiosError", {
                value: !0
            }), Q.from = (e, t, n, i, r, o) => {
                let s = Object.create(X);
                return Z.toFlatObject(e, s, function (e) {
                    return e !== Error.prototype
                }, e => "isAxiosError" !== e), Q.call(s, e.message, t, n, i, r), s.cause = e, s.name = e.name, o && Object.assign(s, o), s
            };
            var et = n(21876).Buffer;

            function en(e) {
                return Z.isPlainObject(e) || Z.isArray(e)
            }

            function ei(e) {
                return Z.endsWith(e, "[]") ? e.slice(0, -2) : e
            }

            function er(e, t, n) {
                return e ? e.concat(t).map(function (e, t) {
                    return e = ei(e), !n && t ? "[" + e + "]" : e
                }).join(n ? "." : "") : t
            }
            let eo = Z.toFlatObject(Z, {}, null, function (e) {
                return /^is[A-Z]/.test(e)
            });
            var es = function (e, t, n) {
                if (!Z.isObject(e)) throw TypeError("target must be an object");
                t = t || new FormData;
                let i = (n = Z.toFlatObject(n, {
                    metaTokens: !0,
                    dots: !1,
                    indexes: !1
                }, !1, function (e, t) {
                    return !Z.isUndefined(t[e])
                })).metaTokens,
                    r = n.visitor || c,
                    o = n.dots,
                    s = n.indexes,
                    a = (n.Blob || "undefined" != typeof Blob && Blob) && Z.isSpecCompliantForm(t);
                if (!Z.isFunction(r)) throw TypeError("visitor must be a function");

                function l(e) {
                    if (null === e) return "";
                    if (Z.isDate(e)) return e.toISOString();
                    if (!a && Z.isBlob(e)) throw new Q("Blob is not supported. Use a Buffer instead.");
                    return Z.isArrayBuffer(e) || Z.isTypedArray(e) ? a && "function" == typeof Blob ? new Blob([e]) : et.from(e) : e
                }

                function c(e, n, r) {
                    let a = e;
                    if (e && !r && "object" == typeof e) {
                        if (Z.endsWith(n, "{}")) n = i ? n : n.slice(0, -2), e = JSON.stringify(e);
                        else {
                            var c;
                            if (Z.isArray(e) && (c = e, Z.isArray(c) && !c.some(en)) || (Z.isFileList(e) || Z.endsWith(n, "[]")) && (a = Z.toArray(e))) return n = ei(n), a.forEach(function (e, i) {
                                Z.isUndefined(e) || null === e || t.append(!0 === s ? er([n], i, o) : null === s ? n : n + "[]", l(e))
                            }), !1
                        }
                    }
                    return !!en(e) || (t.append(er(r, n, o), l(e)), !1)
                }
                let u = [],
                    d = Object.assign(eo, {
                        defaultVisitor: c,
                        convertValue: l,
                        isVisitable: en
                    });
                if (!Z.isObject(e)) throw TypeError("data must be an object");
                return ! function e(n, i) {
                    if (!Z.isUndefined(n)) {
                        if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + i.join("."));
                        u.push(n), Z.forEach(n, function (n, o) {
                            !0 === (!(Z.isUndefined(n) || null === n) && r.call(t, n, Z.isString(o) ? o.trim() : o, i, d)) && e(n, i ? i.concat(o) : [o])
                        }), u.pop()
                    }
                }(e), t
            };

            function ea(e) {
                let t = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (e) {
                    return t[e]
                })
            }

            function el(e, t) {
                this._pairs = [], e && es(e, this, t)
            }
            let ec = el.prototype;

            function eu(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function ed(e, t, n) {
                let i;
                if (!t) return e;
                let r = n && n.encode || eu,
                    o = n && n.serialize;
                if (i = o ? o(t, n) : Z.isURLSearchParams(t) ? t.toString() : new el(t, n).toString(r)) {
                    let t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + i
                }
                return e
            }
            ec.append = function (e, t) {
                this._pairs.push([e, t])
            }, ec.toString = function (e) {
                let t = e ? function (t) {
                    return e.call(this, t, ea)
                } : ea;
                return this._pairs.map(function (e) {
                    return t(e[0]) + "=" + t(e[1])
                }, "").join("&")
            };
            class ep {
                constructor() {
                    this.handlers = []
                }
                use(e, t, n) {
                    return this.handlers.push({
                        fulfilled: e,
                        rejected: t,
                        synchronous: !!n && n.synchronous,
                        runWhen: n ? n.runWhen : null
                    }), this.handlers.length - 1
                }
                eject(e) {
                    this.handlers[e] && (this.handlers[e] = null)
                }
                clear() {
                    this.handlers && (this.handlers = [])
                }
                forEach(e) {
                    Z.forEach(this.handlers, function (t) {
                        null !== t && e(t)
                    })
                }
            }
            var em = {
                silentJSONParsing: !0,
                forcedJSONParsing: !0,
                clarifyTimeoutError: !1
            },
                eh = "undefined" != typeof URLSearchParams ? URLSearchParams : el,
                ef = "undefined" != typeof FormData ? FormData : null,
                eg = "undefined" != typeof Blob ? Blob : null;
            let eb = "undefined" != typeof window && "undefined" != typeof document,
                ev = "object" == typeof navigator && navigator || void 0,
                ey = eb && (!ev || 0 > ["ReactNative", "NativeScript", "NS"].indexOf(ev.product)),
                eA = "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" == typeof self.importScripts,
                ek = eb && window.location.href || "http://localhost";
            var ew = {
                ...d,
                isBrowser: !0,
                classes: {
                    URLSearchParams: eh,
                    FormData: ef,
                    Blob: eg
                },
                protocols: ["http", "https", "file", "blob", "url", "data"]
            },
                eL = function (e) {
                    if (Z.isFormData(e) && Z.isFunction(e.entries)) {
                        let t = {};
                        return Z.forEachEntry(e, (e, n) => {
                            ! function e(t, n, i, r) {
                                let o = t[r++];
                                if ("__proto__" === o) return !0;
                                let s = Number.isFinite(+o),
                                    a = r >= t.length;
                                return (o = !o && Z.isArray(i) ? i.length : o, a) ? Z.hasOwnProp(i, o) ? i[o] = [i[o], n] : i[o] = n : (i[o] && Z.isObject(i[o]) || (i[o] = []), e(t, n, i[o], r) && Z.isArray(i[o]) && (i[o] = function (e) {
                                    let t, n;
                                    let i = {},
                                        r = Object.keys(e),
                                        o = r.length;
                                    for (t = 0; t < o; t++) i[n = r[t]] = e[n];
                                    return i
                                }(i[o]))), !s
                            }(Z.matchAll(/\w+|\[(\w*)]/g, e).map(e => "[]" === e[0] ? "" : e[1] || e[0]), n, t, 0)
                        }), t
                    }
                    return null
                };
            let eM = {
                transitional: em,
                adapter: ["xhr", "http", "fetch"],
                transformRequest: [function (e, t) {
                    let n;
                    let i = t.getContentType() || "",
                        r = i.indexOf("application/json") > -1,
                        o = Z.isObject(e);
                    if (o && Z.isHTMLForm(e) && (e = new FormData(e)), Z.isFormData(e)) return r ? JSON.stringify(eL(e)) : e;
                    if (Z.isArrayBuffer(e) || Z.isBuffer(e) || Z.isStream(e) || Z.isFile(e) || Z.isBlob(e) || Z.isReadableStream(e)) return e;
                    if (Z.isArrayBufferView(e)) return e.buffer;
                    if (Z.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                    if (o) {
                        if (i.indexOf("application/x-www-form-urlencoded") > -1) {
                            var s, a;
                            return (s = e, a = this.formSerializer, es(s, new ew.classes.URLSearchParams, Object.assign({
                                visitor: function (e, t, n, i) {
                                    return ew.isNode && Z.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments)
                                }
                            }, a))).toString()
                        }
                        if ((n = Z.isFileList(e)) || i.indexOf("multipart/form-data") > -1) {
                            let t = this.env && this.env.FormData;
                            return es(n ? {
                                "files[]": e
                            } : e, t && new t, this.formSerializer)
                        }
                    }
                    return o || r ? (t.setContentType("application/json", !1), function (e, t, n) {
                        if (Z.isString(e)) try {
                            return (0, JSON.parse)(e), Z.trim(e)
                        } catch (e) {
                            if ("SyntaxError" !== e.name) throw e
                        }
                        return (0, JSON.stringify)(e)
                    }(e)) : e
                }],
                transformResponse: [function (e) {
                    let t = this.transitional || eM.transitional,
                        n = t && t.forcedJSONParsing,
                        i = "json" === this.responseType;
                    if (Z.isResponse(e) || Z.isReadableStream(e)) return e;
                    if (e && Z.isString(e) && (n && !this.responseType || i)) {
                        let n = t && t.silentJSONParsing;
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            if (!n && i) {
                                if ("SyntaxError" === e.name) throw Q.from(e, Q.ERR_BAD_RESPONSE, this, null, this.response);
                                throw e
                            }
                        }
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: ew.classes.FormData,
                    Blob: ew.classes.Blob
                },
                validateStatus: function (e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": void 0
                    }
                }
            };
            Z.forEach(["delete", "get", "head", "post", "put", "patch"], e => {
                eM.headers[e] = {}
            });
            let eC = Z.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]);
            var eS = e => {
                let t, n, i;
                let r = {};
                return e && e.split("\n").forEach(function (e) {
                    i = e.indexOf(":"), t = e.substring(0, i).trim().toLowerCase(), n = e.substring(i + 1).trim(), !t || r[t] && eC[t] || ("set-cookie" === t ? r[t] ? r[t].push(n) : r[t] = [n] : r[t] = r[t] ? r[t] + ", " + n : n)
                }), r
            };
            let ex = Symbol("internals");

            function ez(e) {
                return e && String(e).trim().toLowerCase()
            }

            function eE(e) {
                return !1 === e || null == e ? e : Z.isArray(e) ? e.map(eE) : String(e)
            }
            let eT = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());

            function eB(e, t, n, i, r) {
                if (Z.isFunction(i)) return i.call(this, t, n);
                if (r && (t = n), Z.isString(t)) {
                    if (Z.isString(i)) return -1 !== t.indexOf(i);
                    if (Z.isRegExp(i)) return i.test(t)
                }
            }
            class eP {
                constructor(e) {
                    e && this.set(e)
                }
                set(e, t, n) {
                    let i = this;

                    function r(e, t, n) {
                        let r = ez(t);
                        if (!r) throw Error("header name must be a non-empty string");
                        let o = Z.findKey(i, r);
                        o && void 0 !== i[o] && !0 !== n && (void 0 !== n || !1 === i[o]) || (i[o || t] = eE(e))
                    }
                    let o = (e, t) => Z.forEach(e, (e, n) => r(e, n, t));
                    if (Z.isPlainObject(e) || e instanceof this.constructor) o(e, t);
                    else if (Z.isString(e) && (e = e.trim()) && !eT(e)) o(eS(e), t);
                    else if (Z.isHeaders(e))
                        for (let [t, i] of e.entries()) r(i, t, n);
                    else null != e && r(t, e, n);
                    return this
                }
                get(e, t) {
                    if (e = ez(e)) {
                        let n = Z.findKey(this, e);
                        if (n) {
                            let e = this[n];
                            if (!t) return e;
                            if (!0 === t) return function (e) {
                                let t;
                                let n = Object.create(null),
                                    i = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                for (; t = i.exec(e);) n[t[1]] = t[2];
                                return n
                            }(e);
                            if (Z.isFunction(t)) return t.call(this, e, n);
                            if (Z.isRegExp(t)) return t.exec(e);
                            throw TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(e, t) {
                    if (e = ez(e)) {
                        let n = Z.findKey(this, e);
                        return !!(n && void 0 !== this[n] && (!t || eB(this, this[n], n, t)))
                    }
                    return !1
                }
                delete(e, t) {
                    let n = this,
                        i = !1;

                    function r(e) {
                        if (e = ez(e)) {
                            let r = Z.findKey(n, e);
                            r && (!t || eB(n, n[r], r, t)) && (delete n[r], i = !0)
                        }
                    }
                    return Z.isArray(e) ? e.forEach(r) : r(e), i
                }
                clear(e) {
                    let t = Object.keys(this),
                        n = t.length,
                        i = !1;
                    for (; n--;) {
                        let r = t[n];
                        (!e || eB(this, this[r], r, e, !0)) && (delete this[r], i = !0)
                    }
                    return i
                }
                normalize(e) {
                    let t = this,
                        n = {};
                    return Z.forEach(this, (i, r) => {
                        let o = Z.findKey(n, r);
                        if (o) {
                            t[o] = eE(i), delete t[r];
                            return
                        }
                        let s = e ? r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n) : String(r).trim();
                        s !== r && delete t[r], t[s] = eE(i), n[s] = !0
                    }), this
                }
                concat(...e) {
                    return this.constructor.concat(this, ...e)
                }
                toJSON(e) {
                    let t = Object.create(null);
                    return Z.forEach(this, (n, i) => {
                        null != n && !1 !== n && (t[i] = e && Z.isArray(n) ? n.join(", ") : n)
                    }), t
                } [Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map(([e, t]) => e + ": " + t).join("\n")
                }
                get [Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(e) {
                    return e instanceof this ? e : new this(e)
                }
                static concat(e, ...t) {
                    let n = new this(e);
                    return t.forEach(e => n.set(e)), n
                }
                static accessor(e) {
                    let t = (this[ex] = this[ex] = {
                        accessors: {}
                    }).accessors,
                        n = this.prototype;

                    function i(e) {
                        let i = ez(e);
                        t[i] || (! function (e, t) {
                            let n = Z.toCamelCase(" " + t);
                            ["get", "set", "has"].forEach(i => {
                                Object.defineProperty(e, i + n, {
                                    value: function (e, n, r) {
                                        return this[i].call(this, t, e, n, r)
                                    },
                                    configurable: !0
                                })
                            })
                        }(n, e), t[i] = !0)
                    }
                    return Z.isArray(e) ? e.forEach(i) : i(e), this
                }
            }

            function eq(e, t) {
                let n = this || eM,
                    i = t || n,
                    r = eP.from(i.headers),
                    o = i.data;
                return Z.forEach(e, function (e) {
                    o = e.call(n, o, r.normalize(), t ? t.status : void 0)
                }), r.normalize(), o
            }

            function eI(e) {
                return !!(e && e.__CANCEL__)
            }

            function eO(e, t, n) {
                Q.call(this, null == e ? "canceled" : e, Q.ERR_CANCELED, t, n), this.name = "CanceledError"
            }

            function eR(e, t, n) {
                let i = n.config.validateStatus;
                !n.status || !i || i(n.status) ? e(n) : t(new Q("Request failed with status code " + n.status, [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n))
            }
            eP.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), Z.reduceDescriptors(eP.prototype, ({
                value: e
            }, t) => {
                let n = t[0].toUpperCase() + t.slice(1);
                return {
                    get: () => e,
                    set(e) {
                        this[n] = e
                    }
                }
            }), Z.freezeMethods(eP), Z.inherits(eO, Q, {
                __CANCEL__: !0
            });
            var eD = function (e, t) {
                let n;
                let i = Array(e = e || 10),
                    r = Array(e),
                    o = 0,
                    s = 0;
                return t = void 0 !== t ? t : 1e3,
                    function (a) {
                        let l = Date.now(),
                            c = r[s];
                        n || (n = l), i[o] = a, r[o] = l;
                        let u = s,
                            d = 0;
                        for (; u !== o;) d += i[u++], u %= e;
                        if ((o = (o + 1) % e) === s && (s = (s + 1) % e), l - n < t) return;
                        let p = c && l - c;
                        return p ? Math.round(1e3 * d / p) : void 0
                    }
            },
                eF = function (e, t) {
                    let n, i, r = 0,
                        o = 1e3 / t,
                        s = (t, o = Date.now()) => {
                            r = o, n = null, i && (clearTimeout(i), i = null), e.apply(null, t)
                        };
                    return [(...e) => {
                        let t = Date.now(),
                            a = t - r;
                        a >= o ? s(e, t) : (n = e, i || (i = setTimeout(() => {
                            i = null, s(n)
                        }, o - a)))
                    }, () => n && s(n)]
                };
            let eN = (e, t, n = 3) => {
                let i = 0,
                    r = eD(50, 250);
                return eF(n => {
                    let o = n.loaded,
                        s = n.lengthComputable ? n.total : void 0,
                        a = o - i,
                        l = r(a);
                    i = o, e({
                        loaded: o,
                        total: s,
                        progress: s ? o / s : void 0,
                        bytes: a,
                        rate: l || void 0,
                        estimated: l && s && o <= s ? (s - o) / l : void 0,
                        event: n,
                        lengthComputable: null != s,
                        [t ? "download" : "upload"]: !0
                    })
                }, n)
            },
                ej = (e, t) => {
                    let n = null != e;
                    return [i => t[0]({
                        lengthComputable: n,
                        total: e,
                        loaded: i
                    }), t[1]]
                },
                eK = e => (...t) => Z.asap(() => e(...t));
            var eW = ew.hasStandardBrowserEnv ? function () {
                let e;
                let t = ew.navigator && /(msie|trident)/i.test(ew.navigator.userAgent),
                    n = document.createElement("a");

                function i(e) {
                    let i = e;
                    return t && (n.setAttribute("href", i), i = n.href), n.setAttribute("href", i), {
                        href: n.href,
                        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
                        host: n.host,
                        search: n.search ? n.search.replace(/^\?/, "") : "",
                        hash: n.hash ? n.hash.replace(/^#/, "") : "",
                        hostname: n.hostname,
                        port: n.port,
                        pathname: "/" === n.pathname.charAt(0) ? n.pathname : "/" + n.pathname
                    }
                }
                return e = i(window.location.href),
                    function (t) {
                        let n = Z.isString(t) ? i(t) : t;
                        return n.protocol === e.protocol && n.host === e.host
                    }
            }() : function () {
                return !0
            },
                eU = ew.hasStandardBrowserEnv ? {
                    write(e, t, n, i, r, o) {
                        let s = [e + "=" + encodeURIComponent(t)];
                        Z.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), Z.isString(i) && s.push("path=" + i), Z.isString(r) && s.push("domain=" + r), !0 === o && s.push("secure"), document.cookie = s.join("; ")
                    },
                    read(e) {
                        let t = document.cookie.match(RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                        return t ? decodeURIComponent(t[3]) : null
                    },
                    remove(e) {
                        this.write(e, "", Date.now() - 864e5)
                    }
                } : {
                    write() { },
                    read: () => null,
                    remove() { }
                };

            function eV(e, t) {
                return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e : t
            }
            let eY = e => e instanceof eP ? {
                ...e
            } : e;

            function e_(e, t) {
                t = t || {};
                let n = {};

                function i(e, t, n) {
                    return Z.isPlainObject(e) && Z.isPlainObject(t) ? Z.merge.call({
                        caseless: n
                    }, e, t) : Z.isPlainObject(t) ? Z.merge({}, t) : Z.isArray(t) ? t.slice() : t
                }

                function r(e, t, n) {
                    return Z.isUndefined(t) ? Z.isUndefined(e) ? void 0 : i(void 0, e, n) : i(e, t, n)
                }

                function o(e, t) {
                    if (!Z.isUndefined(t)) return i(void 0, t)
                }

                function s(e, t) {
                    return Z.isUndefined(t) ? Z.isUndefined(e) ? void 0 : i(void 0, e) : i(void 0, t)
                }

                function a(n, r, o) {
                    return o in t ? i(n, r) : o in e ? i(void 0, n) : void 0
                }
                let l = {
                    url: o,
                    method: o,
                    data: o,
                    baseURL: s,
                    transformRequest: s,
                    transformResponse: s,
                    paramsSerializer: s,
                    timeout: s,
                    timeoutMessage: s,
                    withCredentials: s,
                    withXSRFToken: s,
                    adapter: s,
                    responseType: s,
                    xsrfCookieName: s,
                    xsrfHeaderName: s,
                    onUploadProgress: s,
                    onDownloadProgress: s,
                    decompress: s,
                    maxContentLength: s,
                    maxBodyLength: s,
                    beforeRedirect: s,
                    transport: s,
                    httpAgent: s,
                    httpsAgent: s,
                    cancelToken: s,
                    socketPath: s,
                    responseEncoding: s,
                    validateStatus: a,
                    headers: (e, t) => r(eY(e), eY(t), !0)
                };
                return Z.forEach(Object.keys(Object.assign({}, e, t)), function (i) {
                    let o = l[i] || r,
                        s = o(e[i], t[i], i);
                    Z.isUndefined(s) && o !== a || (n[i] = s)
                }), n
            }
            var eH = e => {
                let t;
                let n = e_({}, e),
                    {
                        data: i,
                        withXSRFToken: r,
                        xsrfHeaderName: o,
                        xsrfCookieName: s,
                        headers: a,
                        auth: l
                    } = n;
                if (n.headers = a = eP.from(a), n.url = ed(eV(n.baseURL, n.url), e.params, e.paramsSerializer), l && a.set("Authorization", "Basic " + btoa((l.username || "") + ":" + (l.password ? unescape(encodeURIComponent(l.password)) : ""))), Z.isFormData(i)) {
                    if (ew.hasStandardBrowserEnv || ew.hasStandardBrowserWebWorkerEnv) a.setContentType(void 0);
                    else if (!1 !== (t = a.getContentType())) {
                        let [e, ...n] = t ? t.split(";").map(e => e.trim()).filter(Boolean) : [];
                        a.setContentType([e || "multipart/form-data", ...n].join("; "))
                    }
                }
                if (ew.hasStandardBrowserEnv && (r && Z.isFunction(r) && (r = r(n)), r || !1 !== r && eW(n.url))) {
                    let e = o && s && eU.read(s);
                    e && a.set(o, e)
                }
                return n
            },
                eG = "undefined" != typeof XMLHttpRequest && function (e) {
                    return new Promise(function (t, n) {
                        let i, r, o, s, a;
                        let l = eH(e),
                            c = l.data,
                            u = eP.from(l.headers).normalize(),
                            {
                                responseType: d,
                                onUploadProgress: p,
                                onDownloadProgress: m
                            } = l;

                        function h() {
                            s && s(), a && a(), l.cancelToken && l.cancelToken.unsubscribe(i), l.signal && l.signal.removeEventListener("abort", i)
                        }
                        let f = new XMLHttpRequest;

                        function g() {
                            if (!f) return;
                            let i = eP.from("getAllResponseHeaders" in f && f.getAllResponseHeaders());
                            eR(function (e) {
                                t(e), h()
                            }, function (e) {
                                n(e), h()
                            }, {
                                data: d && "text" !== d && "json" !== d ? f.response : f.responseText,
                                status: f.status,
                                statusText: f.statusText,
                                headers: i,
                                config: e,
                                request: f
                            }), f = null
                        }
                        f.open(l.method.toUpperCase(), l.url, !0), f.timeout = l.timeout, "onloadend" in f ? f.onloadend = g : f.onreadystatechange = function () {
                            f && 4 === f.readyState && (0 !== f.status || f.responseURL && 0 === f.responseURL.indexOf("file:")) && setTimeout(g)
                        }, f.onabort = function () {
                            f && (n(new Q("Request aborted", Q.ECONNABORTED, e, f)), f = null)
                        }, f.onerror = function () {
                            n(new Q("Network Error", Q.ERR_NETWORK, e, f)), f = null
                        }, f.ontimeout = function () {
                            let t = l.timeout ? "timeout of " + l.timeout + "ms exceeded" : "timeout exceeded",
                                i = l.transitional || em;
                            l.timeoutErrorMessage && (t = l.timeoutErrorMessage), n(new Q(t, i.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, f)), f = null
                        }, void 0 === c && u.setContentType(null), "setRequestHeader" in f && Z.forEach(u.toJSON(), function (e, t) {
                            f.setRequestHeader(t, e)
                        }), Z.isUndefined(l.withCredentials) || (f.withCredentials = !!l.withCredentials), d && "json" !== d && (f.responseType = l.responseType), m && ([o, a] = eN(m, !0), f.addEventListener("progress", o)), p && f.upload && ([r, s] = eN(p), f.upload.addEventListener("progress", r), f.upload.addEventListener("loadend", s)), (l.cancelToken || l.signal) && (i = t => {
                            f && (n(!t || t.type ? new eO(null, e, f) : t), f.abort(), f = null)
                        }, l.cancelToken && l.cancelToken.subscribe(i), l.signal && (l.signal.aborted ? i() : l.signal.addEventListener("abort", i)));
                        let b = function (e) {
                            let t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                            return t && t[1] || ""
                        }(l.url);
                        if (b && -1 === ew.protocols.indexOf(b)) {
                            n(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
                            return
                        }
                        f.send(c || null)
                    })
                },
                e$ = (e, t) => {
                    let n, i = new AbortController,
                        r = function (e) {
                            if (!n) {
                                n = !0, s();
                                let t = e instanceof Error ? e : this.reason;
                                i.abort(t instanceof Q ? t : new eO(t instanceof Error ? t.message : t))
                            }
                        },
                        o = t && setTimeout(() => {
                            r(new Q(`timeout ${t} of ms exceeded`, Q.ETIMEDOUT))
                        }, t),
                        s = () => {
                            e && (o && clearTimeout(o), o = null, e.forEach(e => {
                                e && (e.removeEventListener ? e.removeEventListener("abort", r) : e.unsubscribe(r))
                            }), e = null)
                        };
                    e.forEach(e => e && e.addEventListener && e.addEventListener("abort", r));
                    let {
                        signal: a
                    } = i;
                    return a.unsubscribe = s, [a, () => {
                        o && clearTimeout(o), o = null
                    }]
                };
            let eJ = function* (e, t) {
                let n, i = e.byteLength;
                if (!t || i < t) {
                    yield e;
                    return
                }
                let r = 0;
                for (; r < i;) n = r + t, yield e.slice(r, n), r = n
            },
                eZ = async function* (e, t, n) {
                    for await (let i of e) yield* eJ(ArrayBuffer.isView(i) ? i : await n(String(i)), t)
                }, eQ = (e, t, n, i, r) => {
                    let o;
                    let s = eZ(e, t, r),
                        a = 0,
                        l = e => {
                            !o && (o = !0, i && i(e))
                        };
                    return new ReadableStream({
                        async pull(e) {
                            try {
                                let {
                                    done: t,
                                    value: i
                                } = await s.next();
                                if (t) {
                                    l(), e.close();
                                    return
                                }
                                let r = i.byteLength;
                                if (n) {
                                    let e = a += r;
                                    n(e)
                                }
                                e.enqueue(new Uint8Array(i))
                            } catch (e) {
                                throw l(e), e
                            }
                        },
                        cancel: e => (l(e), s.return())
                    }, {
                        highWaterMark: 2
                    })
                }, eX = "function" == typeof fetch && "function" == typeof Request && "function" == typeof Response, e0 = eX && "function" == typeof ReadableStream, e1 = eX && ("function" == typeof TextEncoder ? (o = new TextEncoder, e => o.encode(e)) : async e => new Uint8Array(await new Response(e).arrayBuffer())), e2 = (e, ...t) => {
                    try {
                        return !!e(...t)
                    } catch (e) {
                        return !1
                    }
                }, e5 = e0 && e2(() => {
                    let e = !1,
                        t = new Request(ew.origin, {
                            body: new ReadableStream,
                            method: "POST",
                            get duplex() {
                                return e = !0, "half"
                            }
                        }).headers.has("Content-Type");
                    return e && !t
                }), e3 = e0 && e2(() => Z.isReadableStream(new Response("").body)), e4 = {
                    stream: e3 && (e => e.body)
                };
            eX && (u = new Response, ["text", "arrayBuffer", "blob", "formData", "stream"].forEach(e => {
                e4[e] || (e4[e] = Z.isFunction(u[e]) ? t => t[e]() : (t, n) => {
                    throw new Q(`Response type '${e}' is not supported`, Q.ERR_NOT_SUPPORT, n)
                })
            }));
            let e7 = async e => null == e ? 0 : Z.isBlob(e) ? e.size : Z.isSpecCompliantForm(e) ? (await new Request(e).arrayBuffer()).byteLength : Z.isArrayBufferView(e) || Z.isArrayBuffer(e) ? e.byteLength : (Z.isURLSearchParams(e) && (e += ""), Z.isString(e)) ? (await e1(e)).byteLength : void 0, e8 = async (e, t) => {
                let n = Z.toFiniteNumber(e.getContentLength());
                return null == n ? e7(t) : n
            }, e6 = {
                http: null,
                xhr: eG,
                fetch: eX && (async e => {
                    let t, n, i, {
                        url: r,
                        method: o,
                        data: s,
                        signal: a,
                        cancelToken: l,
                        timeout: c,
                        onDownloadProgress: u,
                        onUploadProgress: d,
                        responseType: p,
                        headers: m,
                        withCredentials: h = "same-origin",
                        fetchOptions: f
                    } = eH(e);
                    p = p ? (p + "").toLowerCase() : "text";
                    let [g, b] = a || l || c ? e$([a, l], c) : [], v = () => {
                        t || setTimeout(() => {
                            g && g.unsubscribe()
                        }), t = !0
                    };
                    try {
                        if (d && e5 && "get" !== o && "head" !== o && 0 !== (i = await e8(m, s))) {
                            let e, t = new Request(r, {
                                method: "POST",
                                body: s,
                                duplex: "half"
                            });
                            if (Z.isFormData(s) && (e = t.headers.get("content-type")) && m.setContentType(e), t.body) {
                                let [e, n] = ej(i, eN(eK(d)));
                                s = eQ(t.body, 65536, e, n, e1)
                            }
                        }
                        Z.isString(h) || (h = h ? "include" : "omit");
                        let t = "credentials" in Request.prototype;
                        n = new Request(r, {
                            ...f,
                            signal: g,
                            method: o.toUpperCase(),
                            headers: m.normalize().toJSON(),
                            body: s,
                            duplex: "half",
                            credentials: t ? h : void 0
                        });
                        let a = await fetch(n),
                            l = e3 && ("stream" === p || "response" === p);
                        if (e3 && (u || l)) {
                            let e = {};
                            ["status", "statusText", "headers"].forEach(t => {
                                e[t] = a[t]
                            });
                            let t = Z.toFiniteNumber(a.headers.get("content-length")),
                                [n, i] = u && ej(t, eN(eK(u), !0)) || [];
                            a = new Response(eQ(a.body, 65536, n, () => {
                                i && i(), l && v()
                            }, e1), e)
                        }
                        p = p || "text";
                        let c = await e4[Z.findKey(e4, p) || "text"](a, e);
                        return l || v(), b && b(), await new Promise((t, i) => {
                            eR(t, i, {
                                data: c,
                                headers: eP.from(a.headers),
                                status: a.status,
                                statusText: a.statusText,
                                config: e,
                                request: n
                            })
                        })
                    } catch (t) {
                        if (v(), t && "TypeError" === t.name && /fetch/i.test(t.message)) throw Object.assign(new Q("Network Error", Q.ERR_NETWORK, e, n), {
                            cause: t.cause || t
                        });
                        throw Q.from(t, t && t.code, e, n)
                    }
                })
            };
            Z.forEach(e6, (e, t) => {
                if (e) {
                    try {
                        Object.defineProperty(e, "name", {
                            value: t
                        })
                    } catch (e) { }
                    Object.defineProperty(e, "adapterName", {
                        value: t
                    })
                }
            });
            let e9 = e => `- ${e}`,
                te = e => Z.isFunction(e) || null === e || !1 === e;
            var tt = e => {
                let t, n;
                let {
                    length: i
                } = e = Z.isArray(e) ? e : [e], r = {};
                for (let o = 0; o < i; o++) {
                    let i;
                    if (n = t = e[o], !te(t) && void 0 === (n = e6[(i = String(t)).toLowerCase()])) throw new Q(`Unknown adapter '${i}'`);
                    if (n) break;
                    r[i || "#" + o] = n
                }
                if (!n) {
                    let e = Object.entries(r).map(([e, t]) => `adapter ${e} ` + (!1 === t ? "is not supported by the environment" : "is not available in the build"));
                    throw new Q("There is no suitable adapter to dispatch the request " + (i ? e.length > 1 ? "since :\n" + e.map(e9).join("\n") : " " + e9(e[0]) : "as no adapter specified"), "ERR_NOT_SUPPORT")
                }
                return n
            };

            function tn(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new eO(null, e)
            }

            function ti(e) {
                return tn(e), e.headers = eP.from(e.headers), e.data = eq.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1), tt(e.adapter || eM.adapter)(e).then(function (t) {
                    return tn(e), t.data = eq.call(e, e.transformResponse, t), t.headers = eP.from(t.headers), t
                }, function (t) {
                    return !eI(t) && (tn(e), t && t.response && (t.response.data = eq.call(e, e.transformResponse, t.response), t.response.headers = eP.from(t.response.headers))), Promise.reject(t)
                })
            }
            let tr = "1.7.5",
                to = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
                to[e] = function (n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                }
            });
            let ts = {};
            to.transitional = function (e, t, n) {
                function i(e, t) {
                    return "[Axios v" + tr + "] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }
                return (n, r, o) => {
                    if (!1 === e) throw new Q(i(r, " has been removed" + (t ? " in " + t : "")), Q.ERR_DEPRECATED);
                    return t && !ts[r] && (ts[r] = !0, console.warn(i(r, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, r, o)
                }
            };
            var ta = {
                assertOptions: function (e, t, n) {
                    if ("object" != typeof e) throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
                    let i = Object.keys(e),
                        r = i.length;
                    for (; r-- > 0;) {
                        let o = i[r],
                            s = t[o];
                        if (s) {
                            let t = e[o],
                                n = void 0 === t || s(t, o, e);
                            if (!0 !== n) throw new Q("option " + o + " must be " + n, Q.ERR_BAD_OPTION_VALUE);
                            continue
                        }
                        if (!0 !== n) throw new Q("Unknown option " + o, Q.ERR_BAD_OPTION)
                    }
                },
                validators: to
            };
            let tl = ta.validators;
            class tc {
                constructor(e) {
                    this.defaults = e, this.interceptors = {
                        request: new ep,
                        response: new ep
                    }
                }
                async request(e, t) {
                    try {
                        return await this._request(e, t)
                    } catch (e) {
                        if (e instanceof Error) {
                            let t;
                            Error.captureStackTrace ? Error.captureStackTrace(t = {}) : t = Error();
                            let n = t.stack ? t.stack.replace(/^.+\n/, "") : "";
                            try {
                                e.stack ? n && !String(e.stack).endsWith(n.replace(/^.+\n.+\n/, "")) && (e.stack += "\n" + n) : e.stack = n
                            } catch (e) { }
                        }
                        throw e
                    }
                }
                _request(e, t) {
                    let n, i;
                    "string" == typeof e ? (t = t || {}).url = e : t = e || {};
                    let {
                        transitional: r,
                        paramsSerializer: o,
                        headers: s
                    } = t = e_(this.defaults, t);
                    void 0 !== r && ta.assertOptions(r, {
                        silentJSONParsing: tl.transitional(tl.boolean),
                        forcedJSONParsing: tl.transitional(tl.boolean),
                        clarifyTimeoutError: tl.transitional(tl.boolean)
                    }, !1), null != o && (Z.isFunction(o) ? t.paramsSerializer = {
                        serialize: o
                    } : ta.assertOptions(o, {
                        encode: tl.function,
                        serialize: tl.function
                    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                    let a = s && Z.merge(s.common, s[t.method]);
                    s && Z.forEach(["delete", "get", "head", "post", "put", "patch", "common"], e => {
                        delete s[e]
                    }), t.headers = eP.concat(a, s);
                    let l = [],
                        c = !0;
                    this.interceptors.request.forEach(function (e) {
                        ("function" != typeof e.runWhen || !1 !== e.runWhen(t)) && (c = c && e.synchronous, l.unshift(e.fulfilled, e.rejected))
                    });
                    let u = [];
                    this.interceptors.response.forEach(function (e) {
                        u.push(e.fulfilled, e.rejected)
                    });
                    let d = 0;
                    if (!c) {
                        let e = [ti.bind(this), void 0];
                        for (e.unshift.apply(e, l), e.push.apply(e, u), i = e.length, n = Promise.resolve(t); d < i;) n = n.then(e[d++], e[d++]);
                        return n
                    }
                    i = l.length;
                    let p = t;
                    for (d = 0; d < i;) {
                        let e = l[d++],
                            t = l[d++];
                        try {
                            p = e(p)
                        } catch (e) {
                            t.call(this, e);
                            break
                        }
                    }
                    try {
                        n = ti.call(this, p)
                    } catch (e) {
                        return Promise.reject(e)
                    }
                    for (d = 0, i = u.length; d < i;) n = n.then(u[d++], u[d++]);
                    return n
                }
                getUri(e) {
                    return ed(eV((e = e_(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
                }
            }
            Z.forEach(["delete", "get", "head", "options"], function (e) {
                tc.prototype[e] = function (t, n) {
                    return this.request(e_(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }))
                }
            }), Z.forEach(["post", "put", "patch"], function (e) {
                function t(t) {
                    return function (n, i, r) {
                        return this.request(e_(r || {}, {
                            method: e,
                            headers: t ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: n,
                            data: i
                        }))
                    }
                }
                tc.prototype[e] = t(), tc.prototype[e + "Form"] = t(!0)
            });
            class tu {
                constructor(e) {
                    let t;
                    if ("function" != typeof e) throw TypeError("executor must be a function.");
                    this.promise = new Promise(function (e) {
                        t = e
                    });
                    let n = this;
                    this.promise.then(e => {
                        if (!n._listeners) return;
                        let t = n._listeners.length;
                        for (; t-- > 0;) n._listeners[t](e);
                        n._listeners = null
                    }), this.promise.then = e => {
                        let t;
                        let i = new Promise(e => {
                            n.subscribe(e), t = e
                        }).then(e);
                        return i.cancel = function () {
                            n.unsubscribe(t)
                        }, i
                    }, e(function (e, i, r) {
                        n.reason || (n.reason = new eO(e, i, r), t(n.reason))
                    })
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(e) {
                    if (this.reason) {
                        e(this.reason);
                        return
                    }
                    this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }
                unsubscribe(e) {
                    if (!this._listeners) return;
                    let t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                }
                static source() {
                    let e;
                    return {
                        token: new tu(function (t) {
                            e = t
                        }),
                        cancel: e
                    }
                }
            }
            let td = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511
            };
            Object.entries(td).forEach(([e, t]) => {
                td[t] = e
            });
            let tp = function e(t) {
                let n = new tc(t),
                    i = p(tc.prototype.request, n);
                return Z.extend(i, tc.prototype, n, {
                    allOwnKeys: !0
                }), Z.extend(i, n, null, {
                    allOwnKeys: !0
                }), i.create = function (n) {
                    return e(e_(t, n))
                }, i
            }(eM);
            tp.Axios = tc, tp.CanceledError = eO, tp.CancelToken = tu, tp.isCancel = eI, tp.VERSION = tr, tp.toFormData = es, tp.AxiosError = Q, tp.Cancel = tp.CanceledError, tp.all = function (e) {
                return Promise.all(e)
            }, tp.spread = function (e) {
                return function (t) {
                    return e.apply(null, t)
                }
            }, tp.isAxiosError = function (e) {
                return Z.isObject(e) && !0 === e.isAxiosError
            }, tp.mergeConfig = e_, tp.AxiosHeaders = eP, tp.formToJSON = e => eL(Z.isHTMLForm(e) ? new FormData(e) : e), tp.getAdapter = tt, tp.HttpStatusCode = td, tp.default = tp;
            var tm = tp
        },
        13114: function (e, t, n) {
            "use strict";
            n.d(t, {
                M: function () {
                    return b
                }
            });
            var i = n(85893),
                r = n(67294),
                o = n(240),
                s = n(96681),
                a = n(16014);
            class l extends r.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() { }
                render() {
                    return this.props.children
                }
            }

            function c({
                children: e,
                isPresent: t
            }) {
                let n = (0, r.useId)(),
                    o = (0, r.useRef)(null),
                    s = (0, r.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    }),
                    {
                        nonce: c
                    } = (0, r.useContext)(a._);
                return (0, r.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: i,
                        top: r,
                        left: a
                    } = s.current;
                    if (t || !o.current || !e || !i) return;
                    o.current.dataset.motionPopId = n;
                    let l = document.createElement("style");
                    return c && (l.nonce = c), document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${i}px !important;
            top: ${r}px !important;
            left: ${a}px !important;
          }
        `), () => {
                            document.head.removeChild(l)
                        }
                }, [t]), (0, i.jsx)(l, {
                    isPresent: t,
                    childRef: o,
                    sizeRef: s,
                    children: r.cloneElement(e, {
                        ref: o
                    })
                })
            }
            let u = ({
                children: e,
                initial: t,
                isPresent: n,
                onExitComplete: a,
                custom: l,
                presenceAffectsLayout: u,
                mode: p
            }) => {
                let m = (0, s.h)(d),
                    h = (0, r.useId)(),
                    f = (0, r.useMemo)(() => ({
                        id: h,
                        initial: t,
                        isPresent: n,
                        custom: l,
                        onExitComplete: e => {
                            for (let t of (m.set(e, !0), m.values()))
                                if (!t) return;
                            a && a()
                        },
                        register: e => (m.set(e, !1), () => m.delete(e))
                    }), u ? [Math.random()] : [n]);
                return (0, r.useMemo)(() => {
                    m.forEach((e, t) => m.set(t, !1))
                }, [n]), r.useEffect(() => {
                    n || m.size || !a || a()
                }, [n]), "popLayout" === p && (e = (0, i.jsx)(c, {
                    isPresent: n,
                    children: e
                })), (0, i.jsx)(o.O.Provider, {
                    value: f,
                    children: e
                })
            };

            function d() {
                return new Map
            }
            var p = n(25364),
                m = n(45487);
            let h = e => e.key || "";

            function f(e) {
                let t = [];
                return r.Children.forEach(e, e => {
                    (0, r.isValidElement)(e) && t.push(e)
                }), t
            }
            var g = n(58868);
            let b = ({
                children: e,
                exitBeforeEnter: t,
                custom: n,
                initial: o = !0,
                onExitComplete: a,
                presenceAffectsLayout: l = !0,
                mode: c = "sync"
            }) => {
                (0, m.k)(!t, "Replace exitBeforeEnter with mode='wait'");
                let d = (0, r.useMemo)(() => f(e), [e]),
                    b = d.map(h),
                    v = (0, r.useRef)(!0),
                    y = (0, r.useRef)(d),
                    A = (0, s.h)(() => new Map),
                    [k, w] = (0, r.useState)(d),
                    [L, M] = (0, r.useState)(d);
                (0, g.L)(() => {
                    v.current = !1, y.current = d;
                    for (let e = 0; e < L.length; e++) {
                        let t = h(L[e]);
                        b.includes(t) ? A.delete(t) : !0 !== A.get(t) && A.set(t, !1)
                    }
                }, [L, b.length, b.join("-")]);
                let C = [];
                if (d !== k) {
                    let e = [...d];
                    for (let t = 0; t < L.length; t++) {
                        let n = L[t],
                            i = h(n);
                        b.includes(i) || (e.splice(t, 0, n), C.push(n))
                    }
                    "wait" === c && C.length && (e = C), M(f(e)), w(d);
                    return
                }
                let {
                    forceRender: S
                } = (0, r.useContext)(p.p);
                return (0, i.jsx)(i.Fragment, {
                    children: L.map(e => {
                        let t = h(e),
                            r = d === L || b.includes(t);
                        return (0, i.jsx)(u, {
                            isPresent: r,
                            initial: (!v.current || !!o) && void 0,
                            custom: r ? void 0 : n,
                            presenceAffectsLayout: l,
                            mode: c,
                            onExitComplete: r ? void 0 : () => {
                                if (!A.has(t)) return;
                                A.set(t, !0);
                                let e = !0;
                                A.forEach(t => {
                                    t || (e = !1)
                                }), e && (null == S || S(), M(y.current), a && a())
                            },
                            children: e
                        }, t)
                    })
                })
            }
        },
        25364: function (e, t, n) {
            "use strict";
            n.d(t, {
                p: function () {
                    return i
                }
            });
            let i = (0, n(67294).createContext)({})
        },
        16014: function (e, t, n) {
            "use strict";
            n.d(t, {
                _: function () {
                    return i
                }
            });
            let i = (0, n(67294).createContext)({
                transformPagePoint: e => e,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        240: function (e, t, n) {
            "use strict";
            n.d(t, {
                O: function () {
                    return i
                }
            });
            let i = (0, n(67294).createContext)(null)
        },
        45487: function (e, t, n) {
            "use strict";
            n.d(t, {
                K: function () {
                    return r
                },
                k: function () {
                    return o
                }
            });
            var i = n(81662);
            let r = i.Z,
                o = i.Z
        },
        11741: function (e, t, n) {
            "use strict";
            n.d(t, {
                j: function () {
                    return i
                }
            });
            let i = "undefined" != typeof window
        },
        81662: function (e, t, n) {
            "use strict";
            n.d(t, {
                Z: function () {
                    return i
                }
            });
            let i = e => e
        },
        96681: function (e, t, n) {
            "use strict";
            n.d(t, {
                h: function () {
                    return r
                }
            });
            var i = n(67294);

            function r(e) {
                let t = (0, i.useRef)(null);
                return null === t.current && (t.current = e()), t.current
            }
        },
        58868: function (e, t, n) {
            "use strict";
            n.d(t, {
                L: function () {
                    return r
                }
            });
            var i = n(67294);
            let r = n(11741).j ? i.useLayoutEffect : i.useEffect
        },
        26674: function (e, t, n) {
            "use strict";
            n.d(t, {
                l0: function () {
                    return c
                },
                b2: function () {
                    return l
                },
                k1: function () {
                    return u
                }
            }), (i = r || (r = {})).ENGLISH = "en", i.DANISH = "da", i.GERMAN = "de", i.SPANISH = "es", i.SPANISH_MEXICO = "es-mx", i.FINNISH = "fi", i.FRENCH = "fr", i.ITALIAN = "it", i.JAPANESE = "ja", i.DUTCH = "nl", i.POLISH = "pl", i.PORTUGUESE = "pt-br", i.SWEDISH = "sv", i.CHINESE = "zh-cn", i.CHINESE_HONG_KONG = "zh-hk";
            var i, r, o = n(67294),
                s = n(4298);
            let a = (0, o.createContext)({
                loaded: !1,
                error: !1
            }),
                l = () => {
                    let e = (0, o.useContext)(a);
                    return (0, o.useDebugValue)(`Hubspot Script: ${e?.loaded ? "Loaded" : "Not Loaded"}`), (0, o.useDebugValue)(`Failed to load Script: ${e?.error ? "Yes" : "No"}`), e
                },
                c = ({
                    children: e,
                    id: t = "hubspotScript",
                    src: n = "https://js.hsforms.net/forms/v2.js",
                    strategy: i = "afterInteractive",
                    onLoad: r,
                    onError: l,
                    ...c
                }) => {
                    let [u, d] = (0, o.useState)(!1), [p, m] = (0, o.useState)(!1);
                    (0, o.useEffect)(() => {
                        d(!1), m(!1)
                    }, [n]);
                    let h = (0, o.useCallback)(e => {
                        d(!0), r?.(e)
                    }, [r]),
                        f = (0, o.useCallback)(e => {
                            m(!0), l?.(e)
                        }, [l]),
                        g = (0, o.useMemo)(() => ({
                            loaded: u,
                            error: p
                        }), [u, p]);
                    return o.createElement(a.Provider, {
                        value: g
                    }, e, o.createElement(s, {
                        id: t,
                        src: n,
                        strategy: i,
                        onLoad: h,
                        onError: f,
                        ...c
                    }))
                },
                u = e => {
                    let {
                        loaded: t,
                        error: n
                    } = l(), [i, r] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        if (t && !i) try {
                            window.hbspt.forms.create(e), r(!0)
                        } catch (e) {
                            console.warn("Failed to create hubspot form:"), console.error(e), r(!1)
                        }
                    }, [t, i, r]), (0, o.useDebugValue)(`Form created: ${i}`), {
                        loaded: t,
                        formCreated: i,
                        error: n
                    }
                }
        },
        67421: function (e, t, n) {
            "use strict";
            let i;
            n.d(t, {
                Db: function () {
                    return w
                },
                $G: function () {
                    return z
                }
            });
            var r = n(67294);
            n(71739), Object.create(null);
            let o = (...e) => {
                console?.warn && (p(e[0]) && (e[0] = `react-i18next:: ${e[0]}`), console.warn(...e))
            },
                s = {},
                a = (...e) => {
                    p(e[0]) && s[e[0]] || (p(e[0]) && (s[e[0]] = new Date), o(...e))
                },
                l = (e, t) => () => {
                    if (e.isInitialized) t();
                    else {
                        let n = () => {
                            setTimeout(() => {
                                e.off("initialized", n)
                            }, 0), t()
                        };
                        e.on("initialized", n)
                    }
                },
                c = (e, t, n) => {
                    e.loadNamespaces(t, l(e, n))
                },
                u = (e, t, n, i) => {
                    p(n) && (n = [n]), n.forEach(t => {
                        0 > e.options.ns.indexOf(t) && e.options.ns.push(t)
                    }), e.loadLanguages(t, l(e, i))
                },
                d = (e, t, n = {}) => t.languages && t.languages.length ? t.hasLoadedNamespace(e, {
                    lng: n.lng,
                    precheck: (t, i) => {
                        if (n.bindI18n?.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !i(t.isLanguageChangingTo, e)) return !1
                    }
                }) : (a("i18n.languages were undefined or empty", t.languages), !0),
                p = e => "string" == typeof e,
                m = e => "object" == typeof e && null !== e,
                h = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                f = {
                    "&amp;": "&",
                    "&#38;": "&",
                    "&lt;": "<",
                    "&#60;": "<",
                    "&gt;": ">",
                    "&#62;": ">",
                    "&apos;": "'",
                    "&#39;": "'",
                    "&quot;": '"',
                    "&#34;": '"',
                    "&nbsp;": " ",
                    "&#160;": " ",
                    "&copy;": "\xa9",
                    "&#169;": "\xa9",
                    "&reg;": "\xae",
                    "&#174;": "\xae",
                    "&hellip;": "…",
                    "&#8230;": "…",
                    "&#x2F;": "/",
                    "&#47;": "/"
                },
                g = e => f[e],
                b = {
                    bindI18n: "languageChanged",
                    bindI18nStore: "",
                    transEmptyNodeValue: "",
                    transSupportBasicHtmlNodes: !0,
                    transWrapTextNodes: "",
                    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                    useSuspense: !0,
                    unescape: e => e.replace(h, g)
                },
                v = (e = {}) => {
                    b = {
                        ...b,
                        ...e
                    }
                },
                y = () => b,
                A = e => {
                    i = e
                },
                k = () => i,
                w = {
                    type: "3rdParty",
                    init(e) {
                        v(e.options.react), A(e)
                    }
                },
                L = (0, r.createContext)();
            class M {
                constructor() {
                    this.usedNamespaces = {}
                }
                addUsedNamespaces(e) {
                    e.forEach(e => {
                        this.usedNamespaces[e] ??= !0
                    })
                }
                getUsedNamespaces() {
                    return Object.keys(this.usedNamespaces)
                }
            }
            let C = (e, t) => {
                let n = (0, r.useRef)();
                return (0, r.useEffect)(() => {
                    n.current = t ? n.current : e
                }, [e, t]), n.current
            },
                S = (e, t, n, i) => e.getFixedT(t, n, i),
                x = (e, t, n, i) => (0, r.useCallback)(S(e, t, n, i), [e, t, n, i]),
                z = (e, t = {}) => {
                    let {
                        i18n: n
                    } = t, {
                        i18n: i,
                        defaultNS: o
                    } = (0, r.useContext)(L) || {}, s = n || i || k();
                    if (s && !s.reportNamespaces && (s.reportNamespaces = new M), !s) {
                        a("You will need to pass in an i18next instance by using initReactI18next");
                        let e = (e, t) => p(t) ? t : m(t) && p(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e,
                            t = [e, {}, !1];
                        return t.t = e, t.i18n = {}, t.ready = !1, t
                    }
                    s.options.react?.wait && a("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                    let l = {
                        ...y(),
                        ...s.options.react,
                        ...t
                    },
                        {
                            useSuspense: h,
                            keyPrefix: f
                        } = l,
                        g = e || o || s.options?.defaultNS;
                    g = p(g) ? [g] : g || ["translation"], s.reportNamespaces.addUsedNamespaces?.(g);
                    let b = (s.isInitialized || s.initializedStoreOnce) && g.every(e => d(e, s, l)),
                        v = x(s, t.lng || null, "fallback" === l.nsMode ? g : g[0], f),
                        A = () => v,
                        w = () => S(s, t.lng || null, "fallback" === l.nsMode ? g : g[0], f),
                        [z, E] = (0, r.useState)(A),
                        T = g.join();
                    t.lng && (T = `${t.lng}${T}`);
                    let B = C(T),
                        P = (0, r.useRef)(!0);
                    (0, r.useEffect)(() => {
                        let {
                            bindI18n: e,
                            bindI18nStore: n
                        } = l;
                        P.current = !0, b || h || (t.lng ? u(s, t.lng, g, () => {
                            P.current && E(w)
                        }) : c(s, g, () => {
                            P.current && E(w)
                        })), b && B && B !== T && P.current && E(w);
                        let i = () => {
                            P.current && E(w)
                        };
                        return e && s?.on(e, i), n && s?.store.on(n, i), () => {
                            P.current = !1, s && e?.split(" ").forEach(e => s.off(e, i)), n && s && n.split(" ").forEach(e => s.store.off(e, i))
                        }
                    }, [s, T]), (0, r.useEffect)(() => {
                        P.current && b && E(A)
                    }, [s, f, b]);
                    let q = [z, s, b];
                    if (q.t = z, q.i18n = s, q.ready = b, b || !b && !h) return q;
                    throw new Promise(e => {
                        t.lng ? u(s, t.lng, g, () => e()) : c(s, g, () => e())
                    })
                }
        },
        64712: function (e, t, n) {
            "use strict";
            n.d(t, {
                Am: function () {
                    return g
                },
                x7: function () {
                    return k
                }
            });
            var i = n(67294),
                r = n(73935),
                o = e => {
                    switch (e) {
                        case "success":
                            return l;
                        case "info":
                            return u;
                        case "warning":
                            return c;
                        case "error":
                            return d;
                        default:
                            return null
                    }
                },
                s = Array(12).fill(0),
                a = ({
                    visible: e
                }) => i.createElement("div", {
                    className: "sonner-loading-wrapper",
                    "data-visible": e
                }, i.createElement("div", {
                    className: "sonner-spinner"
                }, s.map((e, t) => i.createElement("div", {
                    className: "sonner-loading-bar",
                    key: `spinner-bar-${t}`
                })))),
                l = i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, i.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                    clipRule: "evenodd"
                })),
                c = i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, i.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                    clipRule: "evenodd"
                })),
                u = i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, i.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
                    clipRule: "evenodd"
                })),
                d = i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, i.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                    clipRule: "evenodd"
                })),
                p = () => {
                    let [e, t] = i.useState(document.hidden);
                    return i.useEffect(() => {
                        let e = () => {
                            t(document.hidden)
                        };
                        return document.addEventListener("visibilitychange", e), () => window.removeEventListener("visibilitychange", e)
                    }, []), e
                },
                m = 1,
                h = new class {
                    constructor() {
                        this.subscribe = e => (this.subscribers.push(e), () => {
                            let t = this.subscribers.indexOf(e);
                            this.subscribers.splice(t, 1)
                        }), this.publish = e => {
                            this.subscribers.forEach(t => t(e))
                        }, this.addToast = e => {
                            this.publish(e), this.toasts = [...this.toasts, e]
                        }, this.create = e => {
                            var t;
                            let {
                                message: n,
                                ...i
                            } = e, r = "number" == typeof (null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : m++, o = this.toasts.find(e => e.id === r), s = void 0 === e.dismissible || e.dismissible;
                            return o ? this.toasts = this.toasts.map(t => t.id === r ? (this.publish({
                                ...t,
                                ...e,
                                id: r,
                                title: n
                            }), {
                                ...t,
                                ...e,
                                id: r,
                                dismissible: s,
                                title: n
                            }) : t) : this.addToast({
                                title: n,
                                ...i,
                                dismissible: s,
                                id: r
                            }), r
                        }, this.dismiss = e => (e || this.toasts.forEach(e => {
                            this.subscribers.forEach(t => t({
                                id: e.id,
                                dismiss: !0
                            }))
                        }), this.subscribers.forEach(t => t({
                            id: e,
                            dismiss: !0
                        })), e), this.message = (e, t) => this.create({
                            ...t,
                            message: e
                        }), this.error = (e, t) => this.create({
                            ...t,
                            message: e,
                            type: "error"
                        }), this.success = (e, t) => this.create({
                            ...t,
                            type: "success",
                            message: e
                        }), this.info = (e, t) => this.create({
                            ...t,
                            type: "info",
                            message: e
                        }), this.warning = (e, t) => this.create({
                            ...t,
                            type: "warning",
                            message: e
                        }), this.loading = (e, t) => this.create({
                            ...t,
                            type: "loading",
                            message: e
                        }), this.promise = (e, t) => {
                            let n;
                            if (!t) return;
                            void 0 !== t.loading && (n = this.create({
                                ...t,
                                promise: e,
                                type: "loading",
                                message: t.loading,
                                description: "function" != typeof t.description ? t.description : void 0
                            }));
                            let i = e instanceof Promise ? e : e(),
                                r = void 0 !== n;
                            return i.then(async e => {
                                if (f(e) && !e.ok) {
                                    r = !1;
                                    let i = "function" == typeof t.error ? await t.error(`HTTP error! status: ${e.status}`) : t.error,
                                        o = "function" == typeof t.description ? await t.description(`HTTP error! status: ${e.status}`) : t.description;
                                    this.create({
                                        id: n,
                                        type: "error",
                                        message: i,
                                        description: o
                                    })
                                } else if (void 0 !== t.success) {
                                    r = !1;
                                    let i = "function" == typeof t.success ? await t.success(e) : t.success,
                                        o = "function" == typeof t.description ? await t.description(e) : t.description;
                                    this.create({
                                        id: n,
                                        type: "success",
                                        message: i,
                                        description: o
                                    })
                                }
                            }).catch(async e => {
                                if (void 0 !== t.error) {
                                    r = !1;
                                    let i = "function" == typeof t.error ? await t.error(e) : t.error,
                                        o = "function" == typeof t.description ? await t.description(e) : t.description;
                                    this.create({
                                        id: n,
                                        type: "error",
                                        message: i,
                                        description: o
                                    })
                                }
                            }).finally(() => {
                                var e;
                                r && (this.dismiss(n), n = void 0), null == (e = t.finally) || e.call(t)
                            }), n
                        }, this.custom = (e, t) => {
                            let n = (null == t ? void 0 : t.id) || m++;
                            return this.create({
                                jsx: e(n),
                                id: n,
                                ...t
                            }), n
                        }, this.subscribers = [], this.toasts = []
                    }
                },
                f = e => e && "object" == typeof e && "ok" in e && "boolean" == typeof e.ok && "status" in e && "number" == typeof e.status,
                g = Object.assign((e, t) => {
                    let n = (null == t ? void 0 : t.id) || m++;
                    return h.addToast({
                        title: e,
                        ...t,
                        id: n
                    }), n
                }, {
                    success: h.success,
                    info: h.info,
                    warning: h.warning,
                    error: h.error,
                    custom: h.custom,
                    message: h.message,
                    promise: h.promise,
                    dismiss: h.dismiss,
                    loading: h.loading
                }, {
                    getHistory: () => h.toasts
                });

            function b(e) {
                return void 0 !== e.label
            }

            function v(...e) {
                return e.filter(Boolean).join(" ")
            } ! function (e, {
                insertAt: t
            } = {}) {
                if (!e || "undefined" == typeof document) return;
                let n = document.head || document.getElementsByTagName("head")[0],
                    i = document.createElement("style");
                i.type = "text/css", "top" === t && n.firstChild ? n.insertBefore(i, n.firstChild) : n.appendChild(i), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e))
            }(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
            var y = e => {
                var t, n, r, s, l, c, u, d, m, h;
                let {
                    invert: f,
                    toast: g,
                    unstyled: v,
                    interacting: y,
                    setHeights: A,
                    visibleToasts: k,
                    heights: w,
                    index: L,
                    toasts: M,
                    expanded: C,
                    removeToast: S,
                    defaultRichColors: x,
                    closeButton: z,
                    style: E,
                    cancelButtonStyle: T,
                    actionButtonStyle: B,
                    className: P = "",
                    descriptionClassName: q = "",
                    duration: I,
                    position: O,
                    gap: R,
                    loadingIcon: D,
                    expandByDefault: F,
                    classNames: N,
                    icons: j,
                    closeButtonAriaLabel: K = "Close toast",
                    pauseWhenPageIsHidden: W,
                    cn: U
                } = e, [V, Y] = i.useState(!1), [_, H] = i.useState(!1), [G, $] = i.useState(!1), [J, Z] = i.useState(!1), [Q, X] = i.useState(0), [ee, et] = i.useState(0), en = i.useRef(null), ei = i.useRef(null), er = 0 === L, eo = L + 1 <= k, es = g.type, ea = !1 !== g.dismissible, el = g.className || "", ec = g.descriptionClassName || "", eu = i.useMemo(() => w.findIndex(e => e.toastId === g.id) || 0, [w, g.id]), ed = i.useMemo(() => {
                    var e;
                    return null != (e = g.closeButton) ? e : z
                }, [g.closeButton, z]), ep = i.useMemo(() => g.duration || I || 4e3, [g.duration, I]), em = i.useRef(0), eh = i.useRef(0), ef = i.useRef(0), eg = i.useRef(null), [eb, ev] = O.split("-"), ey = i.useMemo(() => w.reduce((e, t, n) => n >= eu ? e : e + t.height, 0), [w, eu]), eA = p(), ek = g.invert || f, ew = "loading" === es;
                eh.current = i.useMemo(() => eu * R + ey, [eu, ey]), i.useEffect(() => {
                    Y(!0)
                }, []), i.useLayoutEffect(() => {
                    if (!V) return;
                    let e = ei.current,
                        t = e.style.height;
                    e.style.height = "auto";
                    let n = e.getBoundingClientRect().height;
                    e.style.height = t, et(n), A(e => e.find(e => e.toastId === g.id) ? e.map(e => e.toastId === g.id ? {
                        ...e,
                        height: n
                    } : e) : [{
                        toastId: g.id,
                        height: n,
                        position: g.position
                    }, ...e])
                }, [V, g.title, g.description, A, g.id]);
                let eL = i.useCallback(() => {
                    H(!0), X(eh.current), A(e => e.filter(e => e.toastId !== g.id)), setTimeout(() => {
                        S(g)
                    }, 200)
                }, [g, S, A, eh]);
                return i.useEffect(() => {
                    if (g.promise && "loading" === es || g.duration === 1 / 0 || "loading" === g.type) return;
                    let e, t = ep;
                    return C || y || W && eA ? (() => {
                        if (ef.current < em.current) {
                            let e = new Date().getTime() - em.current;
                            t -= e
                        }
                        ef.current = new Date().getTime()
                    })() : t !== 1 / 0 && (em.current = new Date().getTime(), e = setTimeout(() => {
                        var e;
                        null == (e = g.onAutoClose) || e.call(g, g), eL()
                    }, t)), () => clearTimeout(e)
                }, [C, y, F, g, ep, eL, g.promise, es, W, eA]), i.useEffect(() => {
                    let e = ei.current;
                    if (e) {
                        let t = e.getBoundingClientRect().height;
                        return et(t), A(e => [{
                            toastId: g.id,
                            height: t,
                            position: g.position
                        }, ...e]), () => A(e => e.filter(e => e.toastId !== g.id))
                    }
                }, [A, g.id]), i.useEffect(() => {
                    g.delete && eL()
                }, [eL, g.delete]), i.createElement("li", {
                    "aria-live": g.important ? "assertive" : "polite",
                    "aria-atomic": "true",
                    role: "status",
                    tabIndex: 0,
                    ref: ei,
                    className: U(P, el, null == N ? void 0 : N.toast, null == (t = null == g ? void 0 : g.classNames) ? void 0 : t.toast, null == N ? void 0 : N.default, null == N ? void 0 : N[es], null == (n = null == g ? void 0 : g.classNames) ? void 0 : n[es]),
                    "data-sonner-toast": "",
                    "data-rich-colors": null != (r = g.richColors) ? r : x,
                    "data-styled": !(g.jsx || g.unstyled || v),
                    "data-mounted": V,
                    "data-promise": !!g.promise,
                    "data-removed": _,
                    "data-visible": eo,
                    "data-y-position": eb,
                    "data-x-position": ev,
                    "data-index": L,
                    "data-front": er,
                    "data-swiping": G,
                    "data-dismissible": ea,
                    "data-type": es,
                    "data-invert": ek,
                    "data-swipe-out": J,
                    "data-expanded": !!(C || F && V),
                    style: {
                        "--index": L,
                        "--toasts-before": L,
                        "--z-index": M.length - L,
                        "--offset": `${_ ? Q : eh.current}px`,
                        "--initial-height": F ? "auto" : `${ee}px`,
                        ...E,
                        ...g.style
                    },
                    onPointerDown: e => {
                        ew || !ea || (en.current = new Date, X(eh.current), e.target.setPointerCapture(e.pointerId), "BUTTON" !== e.target.tagName && ($(!0), eg.current = {
                            x: e.clientX,
                            y: e.clientY
                        }))
                    },
                    onPointerUp: () => {
                        var e, t, n, i;
                        if (J || !ea) return;
                        eg.current = null;
                        let r = Number((null == (e = ei.current) ? void 0 : e.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                            o = new Date().getTime() - (null == (t = en.current) ? void 0 : t.getTime());
                        if (Math.abs(r) >= 20 || Math.abs(r) / o > .11) {
                            X(eh.current), null == (n = g.onDismiss) || n.call(g, g), eL(), Z(!0);
                            return
                        }
                        null == (i = ei.current) || i.style.setProperty("--swipe-amount", "0px"), $(!1)
                    },
                    onPointerMove: e => {
                        var t;
                        if (!eg.current || !ea) return;
                        let n = e.clientY - eg.current.y,
                            i = e.clientX - eg.current.x,
                            r = ("top" === eb ? Math.min : Math.max)(0, n),
                            o = "touch" === e.pointerType ? 10 : 2;
                        Math.abs(r) > o ? null == (t = ei.current) || t.style.setProperty("--swipe-amount", `${n}px`) : Math.abs(i) > o && (eg.current = null)
                    }
                }, ed && !g.jsx ? i.createElement("button", {
                    "aria-label": K,
                    "data-disabled": ew,
                    "data-close-button": !0,
                    onClick: ew || !ea ? () => { } : () => {
                        var e;
                        eL(), null == (e = g.onDismiss) || e.call(g, g)
                    },
                    className: U(null == N ? void 0 : N.closeButton, null == (s = null == g ? void 0 : g.classNames) ? void 0 : s.closeButton)
                }, i.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "12",
                    height: "12",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.5",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }, i.createElement("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                }), i.createElement("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                }))) : null, g.jsx || i.isValidElement(g.title) ? g.jsx || g.title : i.createElement(i.Fragment, null, es || g.icon || g.promise ? i.createElement("div", {
                    "data-icon": "",
                    className: U(null == N ? void 0 : N.icon, null == (l = null == g ? void 0 : g.classNames) ? void 0 : l.icon)
                }, g.promise || "loading" === g.type && !g.icon ? g.icon || (null != j && j.loading ? i.createElement("div", {
                    className: "sonner-loader",
                    "data-visible": "loading" === es
                }, j.loading) : D ? i.createElement("div", {
                    className: "sonner-loader",
                    "data-visible": "loading" === es
                }, D) : i.createElement(a, {
                    visible: "loading" === es
                })) : null, "loading" !== g.type ? g.icon || (null == j ? void 0 : j[es]) || o(es) : null) : null, i.createElement("div", {
                    "data-content": "",
                    className: U(null == N ? void 0 : N.content, null == (c = null == g ? void 0 : g.classNames) ? void 0 : c.content)
                }, i.createElement("div", {
                    "data-title": "",
                    className: U(null == N ? void 0 : N.title, null == (u = null == g ? void 0 : g.classNames) ? void 0 : u.title)
                }, g.title), g.description ? i.createElement("div", {
                    "data-description": "",
                    className: U(q, ec, null == N ? void 0 : N.description, null == (d = null == g ? void 0 : g.classNames) ? void 0 : d.description)
                }, g.description) : null), i.isValidElement(g.cancel) ? g.cancel : g.cancel && b(g.cancel) ? i.createElement("button", {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: g.cancelButtonStyle || T,
                    onClick: e => {
                        var t, n;
                        b(g.cancel) && ea && (null == (n = (t = g.cancel).onClick) || n.call(t, e), eL())
                    },
                    className: U(null == N ? void 0 : N.cancelButton, null == (m = null == g ? void 0 : g.classNames) ? void 0 : m.cancelButton)
                }, g.cancel.label) : null, i.isValidElement(g.action) ? g.action : g.action && b(g.action) ? i.createElement("button", {
                    "data-button": !0,
                    "data-action": !0,
                    style: g.actionButtonStyle || B,
                    onClick: e => {
                        var t, n;
                        b(g.action) && (e.defaultPrevented || (null == (n = (t = g.action).onClick) || n.call(t, e), eL()))
                    },
                    className: U(null == N ? void 0 : N.actionButton, null == (h = null == g ? void 0 : g.classNames) ? void 0 : h.actionButton)
                }, g.action.label) : null))
            };

            function A() {
                if ("undefined" == typeof window || "undefined" == typeof document) return "ltr";
                let e = document.documentElement.getAttribute("dir");
                return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
            }
            var k = e => {
                let {
                    invert: t,
                    position: n = "bottom-right",
                    hotkey: o = ["altKey", "KeyT"],
                    expand: s,
                    closeButton: a,
                    className: l,
                    offset: c,
                    theme: u = "light",
                    richColors: d,
                    duration: p,
                    style: m,
                    visibleToasts: f = 3,
                    toastOptions: g,
                    dir: b = A(),
                    gap: k = 14,
                    loadingIcon: w,
                    icons: L,
                    containerAriaLabel: M = "Notifications",
                    pauseWhenPageIsHidden: C,
                    cn: S = v
                } = e, [x, z] = i.useState([]), E = i.useMemo(() => Array.from(new Set([n].concat(x.filter(e => e.position).map(e => e.position)))), [x, n]), [T, B] = i.useState([]), [P, q] = i.useState(!1), [I, O] = i.useState(!1), [R, D] = i.useState("system" !== u ? u : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), F = i.useRef(null), N = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), j = i.useRef(null), K = i.useRef(!1), W = i.useCallback(e => {
                    var t;
                    null != (t = x.find(t => t.id === e.id)) && t.delete || h.dismiss(e.id), z(t => t.filter(({
                        id: t
                    }) => t !== e.id))
                }, [x]);
                return i.useEffect(() => h.subscribe(e => {
                    if (e.dismiss) {
                        z(t => t.map(t => t.id === e.id ? {
                            ...t,
                            delete: !0
                        } : t));
                        return
                    }
                    setTimeout(() => {
                        r.flushSync(() => {
                            z(t => {
                                let n = t.findIndex(t => t.id === e.id);
                                return -1 !== n ? [...t.slice(0, n), {
                                    ...t[n],
                                    ...e
                                }, ...t.slice(n + 1)] : [e, ...t]
                            })
                        })
                    })
                }), []), i.useEffect(() => {
                    if ("system" !== u) {
                        D(u);
                        return
                    }
                    "system" === u && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? D("dark") : D("light")), "undefined" != typeof window && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
                        matches: e
                    }) => {
                        D(e ? "dark" : "light")
                    })
                }, [u]), i.useEffect(() => {
                    x.length <= 1 && q(!1)
                }, [x]), i.useEffect(() => {
                    let e = e => {
                        var t, n;
                        o.every(t => e[t] || e.code === t) && (q(!0), null == (t = F.current) || t.focus()), "Escape" === e.code && (document.activeElement === F.current || null != (n = F.current) && n.contains(document.activeElement)) && q(!1)
                    };
                    return document.addEventListener("keydown", e), () => document.removeEventListener("keydown", e)
                }, [o]), i.useEffect(() => {
                    if (F.current) return () => {
                        j.current && (j.current.focus({
                            preventScroll: !0
                        }), j.current = null, K.current = !1)
                    }
                }, [F.current]), x.length ? i.createElement("section", {
                    "aria-label": `${M} ${N}`,
                    tabIndex: -1
                }, E.map((e, n) => {
                    var r;
                    let [o, u] = e.split("-");
                    return i.createElement("ol", {
                        key: e,
                        dir: "auto" === b ? A() : b,
                        tabIndex: -1,
                        ref: F,
                        className: l,
                        "data-sonner-toaster": !0,
                        "data-theme": R,
                        "data-y-position": o,
                        "data-x-position": u,
                        style: {
                            "--front-toast-height": `${(null == (r = T[0]) ? void 0 : r.height) || 0}px`,
                            "--offset": "number" == typeof c ? `${c}px` : c || "32px",
                            "--width": "356px",
                            "--gap": `${k}px`,
                            ...m
                        },
                        onBlur: e => {
                            K.current && !e.currentTarget.contains(e.relatedTarget) && (K.current = !1, j.current && (j.current.focus({
                                preventScroll: !0
                            }), j.current = null))
                        },
                        onFocus: e => {
                            e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || K.current || (K.current = !0, j.current = e.relatedTarget)
                        },
                        onMouseEnter: () => q(!0),
                        onMouseMove: () => q(!0),
                        onMouseLeave: () => {
                            I || q(!1)
                        },
                        onPointerDown: e => {
                            e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || O(!0)
                        },
                        onPointerUp: () => O(!1)
                    }, x.filter(t => !t.position && 0 === n || t.position === e).map((n, r) => {
                        var o, l;
                        return i.createElement(y, {
                            key: n.id,
                            icons: L,
                            index: r,
                            toast: n,
                            defaultRichColors: d,
                            duration: null != (o = null == g ? void 0 : g.duration) ? o : p,
                            className: null == g ? void 0 : g.className,
                            descriptionClassName: null == g ? void 0 : g.descriptionClassName,
                            invert: t,
                            visibleToasts: f,
                            closeButton: null != (l = null == g ? void 0 : g.closeButton) ? l : a,
                            interacting: I,
                            position: e,
                            style: null == g ? void 0 : g.style,
                            unstyled: null == g ? void 0 : g.unstyled,
                            classNames: null == g ? void 0 : g.classNames,
                            cancelButtonStyle: null == g ? void 0 : g.cancelButtonStyle,
                            actionButtonStyle: null == g ? void 0 : g.actionButtonStyle,
                            removeToast: W,
                            toasts: x.filter(e => e.position == n.position),
                            heights: T.filter(e => e.position == n.position),
                            setHeights: B,
                            expandByDefault: s,
                            gap: k,
                            loadingIcon: w,
                            expanded: P,
                            pauseWhenPageIsHidden: C,
                            cn: S
                        })
                    }))
                })) : null
            }
        }
    },
    function (e) {
        var t = function (t) {
            return e(e.s = t)
        };
        e.O(0, [774, 179], function () {
            return t(6840), t(9090)
        }), _N_E = e.O()
    }
]);