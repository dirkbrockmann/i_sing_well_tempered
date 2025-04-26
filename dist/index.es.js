(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode('/*! tailwindcss v4.1.4 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial}}}@layer theme{:root,:host{--tw-font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--tw-spacing:.25rem;--tw-container-5xl:64rem;--tw-text-2xl:1.5rem;--tw-text-2xl--line-height:calc(2/1.5);--tw-text-3xl:1.875rem;--tw-text-3xl--line-height: 1.2 ;--tw-text-5xl:3rem;--tw-text-5xl--line-height:1;--tw-font-weight-light:300}}@layer base,components;@layer utilities{.tw\\:m-8{margin:calc(var(--tw-spacing)*8)}.tw\\:grid{display:grid}.tw\\:max-w-5xl{max-width:var(--tw-container-5xl)}.tw\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.tw\\:p-0{padding:calc(var(--tw-spacing)*0)}.tw\\:px-1{padding-inline:calc(var(--tw-spacing)*1)}.tw\\:px-10{padding-inline:calc(var(--tw-spacing)*10)}.tw\\:font-sans{font-family:var(--tw-font-sans)}.tw\\:text-2xl{font-size:var(--tw-text-2xl);line-height:var(--tw-leading,var(--tw-text-2xl--line-height))}.tw\\:text-3xl{font-size:var(--tw-text-3xl);line-height:var(--tw-leading,var(--tw-text-3xl--line-height))}.tw\\:text-5xl{font-size:var(--tw-text-5xl);line-height:var(--tw-leading,var(--tw-text-5xl--line-height))}.tw\\:font-light{--tw-font-weight:var(--tw-font-weight-light);font-weight:var(--tw-font-weight-light)}@media (min-width:40rem){.tw\\:sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.tw\\:sm\\:gap-8{gap:calc(var(--tw-spacing)*8)}.tw\\:sm\\:p-0{padding:calc(var(--tw-spacing)*0)}}.debug-grid-16{background-image:linear-gradient(90deg,#0000ff1a 1px,#0000 1px),linear-gradient(#0000ff1a 1px,#0000 1px);background-repeat:repeat;background-size:6.25% 6.25%,6.25% 6.25%}}.explorable *,.explorable :before,.explorable :after{box-sizing:border-box}@property --tw-font-weight{syntax:"*";inherits:false}._widget_18g36_1{stroke:#969696;stroke-width:1px;cursor:pointer;pointer-events:all;stroke-opacity:1;fill-opacity:1;fill:#ccc;font-size:16px}._widget_18g36_1 ._title_18g36_12{font-size:20px;fill:#000;stroke:none;text-anchor:middle}._widget_18g36_1 ._label_18g36_19{fill:#000;stroke:none}._widget_18g36_1 ._lit_18g36_24{fill:#eee}._button_18g36_29>._symbol_18g36_29,._radio_18g36_29>._radiobutton_18g36_29>._symbol_18g36_29{fill:#fff;fill-rule:nonzero;pointer-events:none}._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35,._toggle_18g36_35._selected_18g36_35,._widget_18g36_1 ._symbol_18g36_29._selected_18g36_35._lit_18g36_24{fill:#000}._widget_18g36_1 ._symbol_18g36_29._lit_18g36_24{fill:#bbb}._slider_18g36_44>._track_18g36_44,._toggle_18g36_35>._track_18g36_44{pointer-events:none}._slider_18g36_44>._track_overlay_18g36_48,._toggle_18g36_35>._track_overlay_18g36_48{pointer-events:all;cursor:pointer;fill:transparent;stroke:transparent}._slider_18g36_44>._handle_18g36_55,._toggle_18g36_35>._handle_18g36_55{fill:#fff}._plot_hjim9_5>._axislabel_hjim9_9{text-anchor:end;font-size:12px}._plot_hjim9_5>._yaxislabel_hjim9_14{text-anchor:middle;font-size:12px}._plot_hjim9_5>._curve_hjim9_19{stroke-width:3px;fill:none}._magnetization_hjim9_24{stroke:#00008b}._energy_hjim9_28{stroke:#8b0000}')),document.head.appendChild(t)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
const $o = {
  display_type: "canvas",
  // either svg or canvas depending on explorable
  debug: !1,
  // if set to true, draws dots on the control panel to help widget placement
  controls_border: "",
  display_border: "1px solid black",
  debug_lattice: "debug-grid-16",
  controls_grid: { nx: 12, ny: 12 },
  display_size: { width: 804, height: 804 },
  controls_size: { width: 480, height: 480 },
  display_class: " tw:p-0",
  controls_class: "tw:p-0",
  container_class: "tw:font-sans tw:font-light tw:grid tw:grid-cols-1 tw:sm:grid-cols-2 tw:sm:gap-8 tw:px-1 tw:sm:p-0 tw:m-8"
};
function fn(t, n) {
  return t == null || n == null ? NaN : t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ao(t, n) {
  return t == null || n == null ? NaN : n < t ? -1 : n > t ? 1 : n >= t ? 0 : NaN;
}
function Zr(t) {
  let n, e, r;
  t.length !== 2 ? (n = fn, e = (s, u) => fn(t(s), u), r = (s, u) => t(s) - u) : (n = t === fn || t === Ao ? t : To, e = t, r = t);
  function i(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const f = l + h >>> 1;
        e(s[f], u) < 0 ? l = f + 1 : h = f;
      } while (l < h);
    }
    return l;
  }
  function o(s, u, l = 0, h = s.length) {
    if (l < h) {
      if (n(u, u) !== 0) return h;
      do {
        const f = l + h >>> 1;
        e(s[f], u) <= 0 ? l = f + 1 : h = f;
      } while (l < h);
    }
    return l;
  }
  function a(s, u, l = 0, h = s.length) {
    const f = i(s, u, l, h - 1);
    return f > l && r(s[f - 1], u) > -r(s[f], u) ? f - 1 : f;
  }
  return { left: i, center: a, right: o };
}
function To() {
  return 0;
}
function So(t) {
  return t === null ? NaN : +t;
}
const Po = Zr(fn), Eo = Po.right;
Zr(So).center;
const No = Math.sqrt(50), ko = Math.sqrt(10), zo = Math.sqrt(2);
function mn(t, n, e) {
  const r = (n - t) / Math.max(0, e), i = Math.floor(Math.log10(r)), o = r / Math.pow(10, i), a = o >= No ? 10 : o >= ko ? 5 : o >= zo ? 2 : 1;
  let s, u, l;
  return i < 0 ? (l = Math.pow(10, -i) / a, s = Math.round(t * l), u = Math.round(n * l), s / l < t && ++s, u / l > n && --u, l = -l) : (l = Math.pow(10, i) * a, s = Math.round(t / l), u = Math.round(n / l), s * l < t && ++s, u * l > n && --u), u < s && 0.5 <= e && e < 2 ? mn(t, n, e * 2) : [s, u, l];
}
function Oo(t, n, e) {
  if (n = +n, t = +t, e = +e, !(e > 0)) return [];
  if (t === n) return [t];
  const r = n < t, [i, o, a] = r ? mn(n, t, e) : mn(t, n, e);
  if (!(o >= i)) return [];
  const s = o - i + 1, u = new Array(s);
  if (r)
    if (a < 0) for (let l = 0; l < s; ++l) u[l] = (o - l) / -a;
    else for (let l = 0; l < s; ++l) u[l] = (o - l) * a;
  else if (a < 0) for (let l = 0; l < s; ++l) u[l] = (i + l) / -a;
  else for (let l = 0; l < s; ++l) u[l] = (i + l) * a;
  return u;
}
function ue(t, n, e) {
  return n = +n, t = +t, e = +e, mn(t, n, e)[2];
}
function Io(t, n, e) {
  n = +n, t = +t, e = +e;
  const r = n < t, i = r ? ue(n, t, e) : ue(t, n, e);
  return (r ? -1 : 1) * (i < 0 ? 1 / -i : i);
}
function rn(t, n) {
  let e;
  for (const r of t)
    r != null && (e < r || e === void 0 && r >= r) && (e = r);
  return e;
}
function Co(t, n, e) {
  t = +t, n = +n, e = (i = arguments.length) < 2 ? (n = t, t = 0, 1) : i < 3 ? 1 : +e;
  for (var r = -1, i = Math.max(0, Math.ceil((n - t) / e)) | 0, o = new Array(i); ++r < i; )
    o[r] = t + r * e;
  return o;
}
function Ro(t) {
  return t;
}
var jn = 1, Jn = 2, le = 3, Dt = 4, rr = 1e-6;
function Fo(t) {
  return "translate(" + t + ",0)";
}
function Lo(t) {
  return "translate(0," + t + ")";
}
function Do(t) {
  return (n) => +t(n);
}
function Ho(t, n) {
  return n = Math.max(0, t.bandwidth() - n * 2) / 2, t.round() && (n = Math.round(n)), (e) => +t(e) + n;
}
function Bo() {
  return !this.__axis;
}
function jr(t, n) {
  var e = [], r = null, i = null, o = 6, a = 6, s = 3, u = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, l = t === jn || t === Dt ? -1 : 1, h = t === Dt || t === Jn ? "x" : "y", f = t === jn || t === le ? Fo : Lo;
  function c(d) {
    var p = r ?? (n.ticks ? n.ticks.apply(n, e) : n.domain()), _ = i ?? (n.tickFormat ? n.tickFormat.apply(n, e) : Ro), x = Math.max(o, 0) + s, y = n.range(), M = +y[0] + u, $ = +y[y.length - 1] + u, g = (n.bandwidth ? Ho : Do)(n.copy(), u), m = d.selection ? d.selection() : d, T = m.selectAll(".domain").data([null]), A = m.selectAll(".tick").data(p, n).order(), E = A.exit(), I = A.enter().append("g").attr("class", "tick"), C = A.select("line"), w = A.select("text");
    T = T.merge(T.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(I), C = C.merge(I.append("line").attr("stroke", "currentColor").attr(h + "2", l * o)), w = w.merge(I.append("text").attr("fill", "currentColor").attr(h, l * x).attr("dy", t === jn ? "0em" : t === le ? "0.71em" : "0.32em")), d !== m && (T = T.transition(d), A = A.transition(d), C = C.transition(d), w = w.transition(d), E = E.transition(d).attr("opacity", rr).attr("transform", function(N) {
      return isFinite(N = g(N)) ? f(N + u) : this.getAttribute("transform");
    }), I.attr("opacity", rr).attr("transform", function(N) {
      var P = this.parentNode.__axis;
      return f((P && isFinite(P = P(N)) ? P : g(N)) + u);
    })), E.remove(), T.attr("d", t === Dt || t === Jn ? a ? "M" + l * a + "," + M + "H" + u + "V" + $ + "H" + l * a : "M" + u + "," + M + "V" + $ : a ? "M" + M + "," + l * a + "V" + u + "H" + $ + "V" + l * a : "M" + M + "," + u + "H" + $), A.attr("opacity", 1).attr("transform", function(N) {
      return f(g(N) + u);
    }), C.attr(h + "2", l * o), w.attr(h, l * x).text(_), m.filter(Bo).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t === Jn ? "start" : t === Dt ? "end" : "middle"), m.each(function() {
      this.__axis = g;
    });
  }
  return c.scale = function(d) {
    return arguments.length ? (n = d, c) : n;
  }, c.ticks = function() {
    return e = Array.from(arguments), c;
  }, c.tickArguments = function(d) {
    return arguments.length ? (e = d == null ? [] : Array.from(d), c) : e.slice();
  }, c.tickValues = function(d) {
    return arguments.length ? (r = d == null ? null : Array.from(d), c) : r && r.slice();
  }, c.tickFormat = function(d) {
    return arguments.length ? (i = d, c) : i;
  }, c.tickSize = function(d) {
    return arguments.length ? (o = a = +d, c) : o;
  }, c.tickSizeInner = function(d) {
    return arguments.length ? (o = +d, c) : o;
  }, c.tickSizeOuter = function(d) {
    return arguments.length ? (a = +d, c) : a;
  }, c.tickPadding = function(d) {
    return arguments.length ? (s = +d, c) : s;
  }, c.offset = function(d) {
    return arguments.length ? (u = +d, c) : u;
  }, c;
}
function qo(t) {
  return jr(le, t);
}
function Xo(t) {
  return jr(Dt, t);
}
var Go = { value: () => {
} };
function Oe() {
  for (var t = 0, n = arguments.length, e = {}, r; t < n; ++t) {
    if (!(r = arguments[t] + "") || r in e || /[\s.]/.test(r)) throw new Error("illegal type: " + r);
    e[r] = [];
  }
  return new hn(e);
}
function hn(t) {
  this._ = t;
}
function Uo(t, n) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var r = "", i = e.indexOf(".");
    if (i >= 0 && (r = e.slice(i + 1), e = e.slice(0, i)), e && !n.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    return { type: e, name: r };
  });
}
hn.prototype = Oe.prototype = {
  constructor: hn,
  on: function(t, n) {
    var e = this._, r = Uo(t + "", e), i, o = -1, a = r.length;
    if (arguments.length < 2) {
      for (; ++o < a; ) if ((i = (t = r[o]).type) && (i = Yo(e[i], t.name))) return i;
      return;
    }
    if (n != null && typeof n != "function") throw new Error("invalid callback: " + n);
    for (; ++o < a; )
      if (i = (t = r[o]).type) e[i] = ir(e[i], t.name, n);
      else if (n == null) for (i in e) e[i] = ir(e[i], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, n = this._;
    for (var e in n) t[e] = n[e].slice();
    return new hn(t);
  },
  call: function(t, n) {
    if ((i = arguments.length - 2) > 0) for (var e = new Array(i), r = 0, i, o; r < i; ++r) e[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (o = this._[t], r = 0, i = o.length; r < i; ++r) o[r].value.apply(n, e);
  },
  apply: function(t, n, e) {
    if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    for (var r = this._[t], i = 0, o = r.length; i < o; ++i) r[i].value.apply(n, e);
  }
};
function Yo(t, n) {
  for (var e = 0, r = t.length, i; e < r; ++e)
    if ((i = t[e]).name === n)
      return i.value;
}
function ir(t, n, e) {
  for (var r = 0, i = t.length; r < i; ++r)
    if (t[r].name === n) {
      t[r] = Go, t = t.slice(0, r).concat(t.slice(r + 1));
      break;
    }
  return e != null && t.push({ name: n, value: e }), t;
}
var ce = "http://www.w3.org/1999/xhtml";
const or = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ce,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function In(t) {
  var n = t += "", e = n.indexOf(":");
  return e >= 0 && (n = t.slice(0, e)) !== "xmlns" && (t = t.slice(e + 1)), or.hasOwnProperty(n) ? { space: or[n], local: t } : t;
}
function Vo(t) {
  return function() {
    var n = this.ownerDocument, e = this.namespaceURI;
    return e === ce && n.documentElement.namespaceURI === ce ? n.createElement(t) : n.createElementNS(e, t);
  };
}
function Ko(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Jr(t) {
  var n = In(t);
  return (n.local ? Ko : Vo)(n);
}
function Wo() {
}
function Ie(t) {
  return t == null ? Wo : function() {
    return this.querySelector(t);
  };
}
function Zo(t) {
  typeof t != "function" && (t = Ie(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = new Array(a), u, l, h = 0; h < a; ++h)
      (u = o[h]) && (l = t.call(u, u.__data__, h, o)) && ("__data__" in u && (l.__data__ = u.__data__), s[h] = l);
  return new D(r, this._parents);
}
function jo(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Jo() {
  return [];
}
function Qr(t) {
  return t == null ? Jo : function() {
    return this.querySelectorAll(t);
  };
}
function Qo(t) {
  return function() {
    return jo(t.apply(this, arguments));
  };
}
function ta(t) {
  typeof t == "function" ? t = Qo(t) : t = Qr(t);
  for (var n = this._groups, e = n.length, r = [], i = [], o = 0; o < e; ++o)
    for (var a = n[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && (r.push(t.call(u, u.__data__, l, a)), i.push(u));
  return new D(r, i);
}
function ti(t) {
  return function() {
    return this.matches(t);
  };
}
function ni(t) {
  return function(n) {
    return n.matches(t);
  };
}
var na = Array.prototype.find;
function ea(t) {
  return function() {
    return na.call(this.children, t);
  };
}
function ra() {
  return this.firstElementChild;
}
function ia(t) {
  return this.select(t == null ? ra : ea(typeof t == "function" ? t : ni(t)));
}
var oa = Array.prototype.filter;
function aa() {
  return Array.from(this.children);
}
function sa(t) {
  return function() {
    return oa.call(this.children, t);
  };
}
function ua(t) {
  return this.selectAll(t == null ? aa : sa(typeof t == "function" ? t : ni(t)));
}
function la(t) {
  typeof t != "function" && (t = ti(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new D(r, this._parents);
}
function ei(t) {
  return new Array(t.length);
}
function ca() {
  return new D(this._enter || this._groups.map(ei), this._parents);
}
function vn(t, n) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
}
vn.prototype = {
  constructor: vn,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, n) {
    return this._parent.insertBefore(t, n);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function fa(t) {
  return function() {
    return t;
  };
}
function ha(t, n, e, r, i, o) {
  for (var a = 0, s, u = n.length, l = o.length; a < l; ++a)
    (s = n[a]) ? (s.__data__ = o[a], r[a] = s) : e[a] = new vn(t, o[a]);
  for (; a < u; ++a)
    (s = n[a]) && (i[a] = s);
}
function da(t, n, e, r, i, o, a) {
  var s, u, l = /* @__PURE__ */ new Map(), h = n.length, f = o.length, c = new Array(h), d;
  for (s = 0; s < h; ++s)
    (u = n[s]) && (c[s] = d = a.call(u, u.__data__, s, n) + "", l.has(d) ? i[s] = u : l.set(d, u));
  for (s = 0; s < f; ++s)
    d = a.call(t, o[s], s, o) + "", (u = l.get(d)) ? (r[s] = u, u.__data__ = o[s], l.delete(d)) : e[s] = new vn(t, o[s]);
  for (s = 0; s < h; ++s)
    (u = n[s]) && l.get(c[s]) === u && (i[s] = u);
}
function pa(t) {
  return t.__data__;
}
function ga(t, n) {
  if (!arguments.length) return Array.from(this, pa);
  var e = n ? da : ha, r = this._parents, i = this._groups;
  typeof t != "function" && (t = fa(t));
  for (var o = i.length, a = new Array(o), s = new Array(o), u = new Array(o), l = 0; l < o; ++l) {
    var h = r[l], f = i[l], c = f.length, d = ya(t.call(h, h && h.__data__, l, r)), p = d.length, _ = s[l] = new Array(p), x = a[l] = new Array(p), y = u[l] = new Array(c);
    e(h, f, _, x, y, d, n);
    for (var M = 0, $ = 0, g, m; M < p; ++M)
      if (g = _[M]) {
        for (M >= $ && ($ = M + 1); !(m = x[$]) && ++$ < p; ) ;
        g._next = m || null;
      }
  }
  return a = new D(a, r), a._enter = s, a._exit = u, a;
}
function ya(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function _a() {
  return new D(this._exit || this._groups.map(ei), this._parents);
}
function ma(t, n, e) {
  var r = this.enter(), i = this, o = this.exit();
  return typeof t == "function" ? (r = t(r), r && (r = r.selection())) : r = r.append(t + ""), n != null && (i = n(i), i && (i = i.selection())), e == null ? o.remove() : e(o), r && i ? r.merge(i).order() : i;
}
function va(t) {
  for (var n = t.selection ? t.selection() : t, e = this._groups, r = n._groups, i = e.length, o = r.length, a = Math.min(i, o), s = new Array(i), u = 0; u < a; ++u)
    for (var l = e[u], h = r[u], f = l.length, c = s[u] = new Array(f), d, p = 0; p < f; ++p)
      (d = l[p] || h[p]) && (c[p] = d);
  for (; u < i; ++u)
    s[u] = e[u];
  return new D(s, this._parents);
}
function wa() {
  for (var t = this._groups, n = -1, e = t.length; ++n < e; )
    for (var r = t[n], i = r.length - 1, o = r[i], a; --i >= 0; )
      (a = r[i]) && (o && a.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(a, o), o = a);
  return this;
}
function xa(t) {
  t || (t = ba);
  function n(f, c) {
    return f && c ? t(f.__data__, c.__data__) : !f - !c;
  }
  for (var e = this._groups, r = e.length, i = new Array(r), o = 0; o < r; ++o) {
    for (var a = e[o], s = a.length, u = i[o] = new Array(s), l, h = 0; h < s; ++h)
      (l = a[h]) && (u[h] = l);
    u.sort(n);
  }
  return new D(i, this._parents).order();
}
function ba(t, n) {
  return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
}
function Ma() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function $a() {
  return Array.from(this);
}
function Aa() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
      var a = r[i];
      if (a) return a;
    }
  return null;
}
function Ta() {
  let t = 0;
  for (const n of this) ++t;
  return t;
}
function Sa() {
  return !this.node();
}
function Pa(t) {
  for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
    for (var i = n[e], o = 0, a = i.length, s; o < a; ++o)
      (s = i[o]) && t.call(s, s.__data__, o, i);
  return this;
}
function Ea(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Na(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ka(t, n) {
  return function() {
    this.setAttribute(t, n);
  };
}
function za(t, n) {
  return function() {
    this.setAttributeNS(t.space, t.local, n);
  };
}
function Oa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttribute(t) : this.setAttribute(t, e);
  };
}
function Ia(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
  };
}
function Ca(t, n) {
  var e = In(t);
  if (arguments.length < 2) {
    var r = this.node();
    return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
  }
  return this.each((n == null ? e.local ? Na : Ea : typeof n == "function" ? e.local ? Ia : Oa : e.local ? za : ka)(e, n));
}
function ri(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Ra(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Fa(t, n, e) {
  return function() {
    this.style.setProperty(t, n, e);
  };
}
function La(t, n, e) {
  return function() {
    var r = n.apply(this, arguments);
    r == null ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
  };
}
function Da(t, n, e) {
  return arguments.length > 1 ? this.each((n == null ? Ra : typeof n == "function" ? La : Fa)(t, n, e ?? "")) : kt(this.node(), t);
}
function kt(t, n) {
  return t.style.getPropertyValue(n) || ri(t).getComputedStyle(t, null).getPropertyValue(n);
}
function Ha(t) {
  return function() {
    delete this[t];
  };
}
function Ba(t, n) {
  return function() {
    this[t] = n;
  };
}
function qa(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    e == null ? delete this[t] : this[t] = e;
  };
}
function Xa(t, n) {
  return arguments.length > 1 ? this.each((n == null ? Ha : typeof n == "function" ? qa : Ba)(t, n)) : this.node()[t];
}
function ii(t) {
  return t.trim().split(/^|\s+/);
}
function Ce(t) {
  return t.classList || new oi(t);
}
function oi(t) {
  this._node = t, this._names = ii(t.getAttribute("class") || "");
}
oi.prototype = {
  add: function(t) {
    var n = this._names.indexOf(t);
    n < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var n = this._names.indexOf(t);
    n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function ai(t, n) {
  for (var e = Ce(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
}
function si(t, n) {
  for (var e = Ce(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
}
function Ga(t) {
  return function() {
    ai(this, t);
  };
}
function Ua(t) {
  return function() {
    si(this, t);
  };
}
function Ya(t, n) {
  return function() {
    (n.apply(this, arguments) ? ai : si)(this, t);
  };
}
function Va(t, n) {
  var e = ii(t + "");
  if (arguments.length < 2) {
    for (var r = Ce(this.node()), i = -1, o = e.length; ++i < o; ) if (!r.contains(e[i])) return !1;
    return !0;
  }
  return this.each((typeof n == "function" ? Ya : n ? Ga : Ua)(e, n));
}
function Ka() {
  this.textContent = "";
}
function Wa(t) {
  return function() {
    this.textContent = t;
  };
}
function Za(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.textContent = n ?? "";
  };
}
function ja(t) {
  return arguments.length ? this.each(t == null ? Ka : (typeof t == "function" ? Za : Wa)(t)) : this.node().textContent;
}
function Ja() {
  this.innerHTML = "";
}
function Qa(t) {
  return function() {
    this.innerHTML = t;
  };
}
function ts(t) {
  return function() {
    var n = t.apply(this, arguments);
    this.innerHTML = n ?? "";
  };
}
function ns(t) {
  return arguments.length ? this.each(t == null ? Ja : (typeof t == "function" ? ts : Qa)(t)) : this.node().innerHTML;
}
function es() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function rs() {
  return this.each(es);
}
function is() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function os() {
  return this.each(is);
}
function as(t) {
  var n = typeof t == "function" ? t : Jr(t);
  return this.select(function() {
    return this.appendChild(n.apply(this, arguments));
  });
}
function ss() {
  return null;
}
function us(t, n) {
  var e = typeof t == "function" ? t : Jr(t), r = n == null ? ss : typeof n == "function" ? n : Ie(n);
  return this.select(function() {
    return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function ls() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function cs() {
  return this.each(ls);
}
function fs() {
  var t = this.cloneNode(!1), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function hs() {
  var t = this.cloneNode(!0), n = this.parentNode;
  return n ? n.insertBefore(t, this.nextSibling) : t;
}
function ds(t) {
  return this.select(t ? hs : fs);
}
function ps(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function gs(t) {
  return function(n) {
    t.call(this, n, this.__data__);
  };
}
function ys(t) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var e = "", r = n.indexOf(".");
    return r >= 0 && (e = n.slice(r + 1), n = n.slice(0, r)), { type: n, name: e };
  });
}
function _s(t) {
  return function() {
    var n = this.__on;
    if (n) {
      for (var e = 0, r = -1, i = n.length, o; e < i; ++e)
        o = n[e], (!t.type || o.type === t.type) && o.name === t.name ? this.removeEventListener(o.type, o.listener, o.options) : n[++r] = o;
      ++r ? n.length = r : delete this.__on;
    }
  };
}
function ms(t, n, e) {
  return function() {
    var r = this.__on, i, o = gs(n);
    if (r) {
      for (var a = 0, s = r.length; a < s; ++a)
        if ((i = r[a]).type === t.type && i.name === t.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = o, i.options = e), i.value = n;
          return;
        }
    }
    this.addEventListener(t.type, o, e), i = { type: t.type, name: t.name, value: n, listener: o, options: e }, r ? r.push(i) : this.__on = [i];
  };
}
function vs(t, n, e) {
  var r = ys(t + ""), i, o = r.length, a;
  if (arguments.length < 2) {
    var s = this.node().__on;
    if (s) {
      for (var u = 0, l = s.length, h; u < l; ++u)
        for (i = 0, h = s[u]; i < o; ++i)
          if ((a = r[i]).type === h.type && a.name === h.name)
            return h.value;
    }
    return;
  }
  for (s = n ? ms : _s, i = 0; i < o; ++i) this.each(s(r[i], n, e));
  return this;
}
function ui(t, n, e) {
  var r = ri(t), i = r.CustomEvent;
  typeof i == "function" ? i = new i(n, e) : (i = r.document.createEvent("Event"), e ? (i.initEvent(n, e.bubbles, e.cancelable), i.detail = e.detail) : i.initEvent(n, !1, !1)), t.dispatchEvent(i);
}
function ws(t, n) {
  return function() {
    return ui(this, t, n);
  };
}
function xs(t, n) {
  return function() {
    return ui(this, t, n.apply(this, arguments));
  };
}
function bs(t, n) {
  return this.each((typeof n == "function" ? xs : ws)(t, n));
}
function* Ms() {
  for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
    for (var r = t[n], i = 0, o = r.length, a; i < o; ++i)
      (a = r[i]) && (yield a);
}
var li = [null];
function D(t, n) {
  this._groups = t, this._parents = n;
}
function jt() {
  return new D([[document.documentElement]], li);
}
function $s() {
  return this;
}
D.prototype = jt.prototype = {
  constructor: D,
  select: Zo,
  selectAll: ta,
  selectChild: ia,
  selectChildren: ua,
  filter: la,
  data: ga,
  enter: ca,
  exit: _a,
  join: ma,
  merge: va,
  selection: $s,
  order: wa,
  sort: xa,
  call: Ma,
  nodes: $a,
  node: Aa,
  size: Ta,
  empty: Sa,
  each: Pa,
  attr: Ca,
  style: Da,
  property: Xa,
  classed: Va,
  text: ja,
  html: ns,
  raise: rs,
  lower: os,
  append: as,
  insert: us,
  remove: cs,
  clone: ds,
  datum: ps,
  on: vs,
  dispatch: bs,
  [Symbol.iterator]: Ms
};
function z(t) {
  return typeof t == "string" ? new D([[document.querySelector(t)]], [document.documentElement]) : new D([[t]], li);
}
function As(t) {
  let n;
  for (; n = t.sourceEvent; ) t = n;
  return t;
}
function fe(t, n) {
  if (t = As(t), n === void 0 && (n = t.currentTarget), n) {
    var e = n.ownerSVGElement || n;
    if (e.createSVGPoint) {
      var r = e.createSVGPoint();
      return r.x = t.clientX, r.y = t.clientY, r = r.matrixTransform(n.getScreenCTM().inverse()), [r.x, r.y];
    }
    if (n.getBoundingClientRect) {
      var i = n.getBoundingClientRect();
      return [t.clientX - i.left - n.clientLeft, t.clientY - i.top - n.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Ts = { passive: !1 }, Gt = { capture: !0, passive: !1 };
function Qn(t) {
  t.stopImmediatePropagation();
}
function Pt(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Ss(t) {
  var n = t.document.documentElement, e = z(t).on("dragstart.drag", Pt, Gt);
  "onselectstart" in n ? e.on("selectstart.drag", Pt, Gt) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
}
function Ps(t, n) {
  var e = t.document.documentElement, r = z(t).on("dragstart.drag", null);
  n && (r.on("click.drag", Pt, Gt), setTimeout(function() {
    r.on("click.drag", null);
  }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
}
const on = (t) => () => t;
function he(t, {
  sourceEvent: n,
  subject: e,
  target: r,
  identifier: i,
  active: o,
  x: a,
  y: s,
  dx: u,
  dy: l,
  dispatch: h
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: n, enumerable: !0, configurable: !0 },
    subject: { value: e, enumerable: !0, configurable: !0 },
    target: { value: r, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: o, enumerable: !0, configurable: !0 },
    x: { value: a, enumerable: !0, configurable: !0 },
    y: { value: s, enumerable: !0, configurable: !0 },
    dx: { value: u, enumerable: !0, configurable: !0 },
    dy: { value: l, enumerable: !0, configurable: !0 },
    _: { value: h }
  });
}
he.prototype.on = function() {
  var t = this._.on.apply(this._, arguments);
  return t === this._ ? this : t;
};
function Es(t) {
  return !t.ctrlKey && !t.button;
}
function Ns() {
  return this.parentNode;
}
function ks(t, n) {
  return n ?? { x: t.x, y: t.y };
}
function zs() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Os() {
  var t = Es, n = Ns, e = ks, r = zs, i = {}, o = Oe("start", "drag", "end"), a = 0, s, u, l, h, f = 0;
  function c(g) {
    g.on("mousedown.drag", d).filter(r).on("touchstart.drag", x).on("touchmove.drag", y, Ts).on("touchend.drag touchcancel.drag", M).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function d(g, m) {
    if (!(h || !t.call(this, g, m))) {
      var T = $(this, n.call(this, g, m), g, m, "mouse");
      T && (z(g.view).on("mousemove.drag", p, Gt).on("mouseup.drag", _, Gt), Ss(g.view), Qn(g), l = !1, s = g.clientX, u = g.clientY, T("start", g));
    }
  }
  function p(g) {
    if (Pt(g), !l) {
      var m = g.clientX - s, T = g.clientY - u;
      l = m * m + T * T > f;
    }
    i.mouse("drag", g);
  }
  function _(g) {
    z(g.view).on("mousemove.drag mouseup.drag", null), Ps(g.view, l), Pt(g), i.mouse("end", g);
  }
  function x(g, m) {
    if (t.call(this, g, m)) {
      var T = g.changedTouches, A = n.call(this, g, m), E = T.length, I, C;
      for (I = 0; I < E; ++I)
        (C = $(this, A, g, m, T[I].identifier, T[I])) && (Qn(g), C("start", g, T[I]));
    }
  }
  function y(g) {
    var m = g.changedTouches, T = m.length, A, E;
    for (A = 0; A < T; ++A)
      (E = i[m[A].identifier]) && (Pt(g), E("drag", g, m[A]));
  }
  function M(g) {
    var m = g.changedTouches, T = m.length, A, E;
    for (h && clearTimeout(h), h = setTimeout(function() {
      h = null;
    }, 500), A = 0; A < T; ++A)
      (E = i[m[A].identifier]) && (Qn(g), E("end", g, m[A]));
  }
  function $(g, m, T, A, E, I) {
    var C = o.copy(), w = fe(I || T, m), N, P, X;
    if ((X = e.call(g, new he("beforestart", {
      sourceEvent: T,
      target: c,
      identifier: E,
      active: a,
      x: w[0],
      y: w[1],
      dx: 0,
      dy: 0,
      dispatch: C
    }), A)) != null)
      return N = X.x - w[0] || 0, P = X.y - w[1] || 0, function en(st, ct, $t) {
        var B = w, Zn;
        switch (st) {
          case "start":
            i[E] = en, Zn = a++;
            break;
          case "end":
            delete i[E], --a;
          // falls through
          case "drag":
            w = fe($t || ct, m), Zn = a;
            break;
        }
        C.call(
          st,
          g,
          new he(st, {
            sourceEvent: ct,
            subject: X,
            target: c,
            identifier: E,
            active: Zn,
            x: w[0] + N,
            y: w[1] + P,
            dx: w[0] - B[0],
            dy: w[1] - B[1],
            dispatch: C
          }),
          A
        );
      };
  }
  return c.filter = function(g) {
    return arguments.length ? (t = typeof g == "function" ? g : on(!!g), c) : t;
  }, c.container = function(g) {
    return arguments.length ? (n = typeof g == "function" ? g : on(g), c) : n;
  }, c.subject = function(g) {
    return arguments.length ? (e = typeof g == "function" ? g : on(g), c) : e;
  }, c.touchable = function(g) {
    return arguments.length ? (r = typeof g == "function" ? g : on(!!g), c) : r;
  }, c.on = function() {
    var g = o.on.apply(o, arguments);
    return g === o ? c : g;
  }, c.clickDistance = function(g) {
    return arguments.length ? (f = (g = +g) * g, c) : Math.sqrt(f);
  }, c;
}
function Re(t, n, e) {
  t.prototype = n.prototype = e, e.constructor = t;
}
function ci(t, n) {
  var e = Object.create(t.prototype);
  for (var r in n) e[r] = n[r];
  return e;
}
function Jt() {
}
var Ut = 0.7, wn = 1 / Ut, Et = "\\s*([+-]?\\d+)\\s*", Yt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", W = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Is = /^#([0-9a-f]{3,8})$/, Cs = new RegExp(`^rgb\\(${Et},${Et},${Et}\\)$`), Rs = new RegExp(`^rgb\\(${W},${W},${W}\\)$`), Fs = new RegExp(`^rgba\\(${Et},${Et},${Et},${Yt}\\)$`), Ls = new RegExp(`^rgba\\(${W},${W},${W},${Yt}\\)$`), Ds = new RegExp(`^hsl\\(${Yt},${W},${W}\\)$`), Hs = new RegExp(`^hsla\\(${Yt},${W},${W},${Yt}\\)$`), ar = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Re(Jt, yt, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: sr,
  // Deprecated! Use color.formatHex.
  formatHex: sr,
  formatHex8: Bs,
  formatHsl: qs,
  formatRgb: ur,
  toString: ur
});
function sr() {
  return this.rgb().formatHex();
}
function Bs() {
  return this.rgb().formatHex8();
}
function qs() {
  return fi(this).formatHsl();
}
function ur() {
  return this.rgb().formatRgb();
}
function yt(t) {
  var n, e;
  return t = (t + "").trim().toLowerCase(), (n = Is.exec(t)) ? (e = n[1].length, n = parseInt(n[1], 16), e === 6 ? lr(n) : e === 3 ? new R(n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, (n & 15) << 4 | n & 15, 1) : e === 8 ? an(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, (n & 255) / 255) : e === 4 ? an(n >> 12 & 15 | n >> 8 & 240, n >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | n & 240, ((n & 15) << 4 | n & 15) / 255) : null) : (n = Cs.exec(t)) ? new R(n[1], n[2], n[3], 1) : (n = Rs.exec(t)) ? new R(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, 1) : (n = Fs.exec(t)) ? an(n[1], n[2], n[3], n[4]) : (n = Ls.exec(t)) ? an(n[1] * 255 / 100, n[2] * 255 / 100, n[3] * 255 / 100, n[4]) : (n = Ds.exec(t)) ? hr(n[1], n[2] / 100, n[3] / 100, 1) : (n = Hs.exec(t)) ? hr(n[1], n[2] / 100, n[3] / 100, n[4]) : ar.hasOwnProperty(t) ? lr(ar[t]) : t === "transparent" ? new R(NaN, NaN, NaN, 0) : null;
}
function lr(t) {
  return new R(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function an(t, n, e, r) {
  return r <= 0 && (t = n = e = NaN), new R(t, n, e, r);
}
function Xs(t) {
  return t instanceof Jt || (t = yt(t)), t ? (t = t.rgb(), new R(t.r, t.g, t.b, t.opacity)) : new R();
}
function de(t, n, e, r) {
  return arguments.length === 1 ? Xs(t) : new R(t, n, e, r ?? 1);
}
function R(t, n, e, r) {
  this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
}
Re(R, de, ci(Jt, {
  brighter(t) {
    return t = t == null ? wn : Math.pow(wn, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ut : Math.pow(Ut, t), new R(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new R(pt(this.r), pt(this.g), pt(this.b), xn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cr,
  // Deprecated! Use color.formatHex.
  formatHex: cr,
  formatHex8: Gs,
  formatRgb: fr,
  toString: fr
}));
function cr() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}`;
}
function Gs() {
  return `#${ht(this.r)}${ht(this.g)}${ht(this.b)}${ht((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function fr() {
  const t = xn(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${pt(this.r)}, ${pt(this.g)}, ${pt(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function xn(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function pt(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function ht(t) {
  return t = pt(t), (t < 16 ? "0" : "") + t.toString(16);
}
function hr(t, n, e, r) {
  return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new Y(t, n, e, r);
}
function fi(t) {
  if (t instanceof Y) return new Y(t.h, t.s, t.l, t.opacity);
  if (t instanceof Jt || (t = yt(t)), !t) return new Y();
  if (t instanceof Y) return t;
  t = t.rgb();
  var n = t.r / 255, e = t.g / 255, r = t.b / 255, i = Math.min(n, e, r), o = Math.max(n, e, r), a = NaN, s = o - i, u = (o + i) / 2;
  return s ? (n === o ? a = (e - r) / s + (e < r) * 6 : e === o ? a = (r - n) / s + 2 : a = (n - e) / s + 4, s /= u < 0.5 ? o + i : 2 - o - i, a *= 60) : s = u > 0 && u < 1 ? 0 : a, new Y(a, s, u, t.opacity);
}
function Us(t, n, e, r) {
  return arguments.length === 1 ? fi(t) : new Y(t, n, e, r ?? 1);
}
function Y(t, n, e, r) {
  this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
}
Re(Y, Us, ci(Jt, {
  brighter(t) {
    return t = t == null ? wn : Math.pow(wn, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Ut : Math.pow(Ut, t), new Y(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, n = isNaN(t) || isNaN(this.s) ? 0 : this.s, e = this.l, r = e + (e < 0.5 ? e : 1 - e) * n, i = 2 * e - r;
    return new R(
      te(t >= 240 ? t - 240 : t + 120, i, r),
      te(t, i, r),
      te(t < 120 ? t + 240 : t - 120, i, r),
      this.opacity
    );
  },
  clamp() {
    return new Y(dr(this.h), sn(this.s), sn(this.l), xn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = xn(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${dr(this.h)}, ${sn(this.s) * 100}%, ${sn(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function dr(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function sn(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function te(t, n, e) {
  return (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n) * 255;
}
const Fe = (t) => () => t;
function Ys(t, n) {
  return function(e) {
    return t + e * n;
  };
}
function Vs(t, n, e) {
  return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function(r) {
    return Math.pow(t + r * n, e);
  };
}
function Ks(t) {
  return (t = +t) == 1 ? hi : function(n, e) {
    return e - n ? Vs(n, e, t) : Fe(isNaN(n) ? e : n);
  };
}
function hi(t, n) {
  var e = n - t;
  return e ? Ys(t, e) : Fe(isNaN(t) ? n : t);
}
const bn = function t(n) {
  var e = Ks(n);
  function r(i, o) {
    var a = e((i = de(i)).r, (o = de(o)).r), s = e(i.g, o.g), u = e(i.b, o.b), l = hi(i.opacity, o.opacity);
    return function(h) {
      return i.r = a(h), i.g = s(h), i.b = u(h), i.opacity = l(h), i + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Ws(t, n) {
  n || (n = []);
  var e = t ? Math.min(n.length, t.length) : 0, r = n.slice(), i;
  return function(o) {
    for (i = 0; i < e; ++i) r[i] = t[i] * (1 - o) + n[i] * o;
    return r;
  };
}
function Zs(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function js(t, n) {
  var e = n ? n.length : 0, r = t ? Math.min(e, t.length) : 0, i = new Array(r), o = new Array(e), a;
  for (a = 0; a < r; ++a) i[a] = Le(t[a], n[a]);
  for (; a < e; ++a) o[a] = n[a];
  return function(s) {
    for (a = 0; a < r; ++a) o[a] = i[a](s);
    return o;
  };
}
function Js(t, n) {
  var e = /* @__PURE__ */ new Date();
  return t = +t, n = +n, function(r) {
    return e.setTime(t * (1 - r) + n * r), e;
  };
}
function G(t, n) {
  return t = +t, n = +n, function(e) {
    return t * (1 - e) + n * e;
  };
}
function Qs(t, n) {
  var e = {}, r = {}, i;
  (t === null || typeof t != "object") && (t = {}), (n === null || typeof n != "object") && (n = {});
  for (i in n)
    i in t ? e[i] = Le(t[i], n[i]) : r[i] = n[i];
  return function(o) {
    for (i in e) r[i] = e[i](o);
    return r;
  };
}
var pe = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, ne = new RegExp(pe.source, "g");
function tu(t) {
  return function() {
    return t;
  };
}
function nu(t) {
  return function(n) {
    return t(n) + "";
  };
}
function di(t, n) {
  var e = pe.lastIndex = ne.lastIndex = 0, r, i, o, a = -1, s = [], u = [];
  for (t = t + "", n = n + ""; (r = pe.exec(t)) && (i = ne.exec(n)); )
    (o = i.index) > e && (o = n.slice(e, o), s[a] ? s[a] += o : s[++a] = o), (r = r[0]) === (i = i[0]) ? s[a] ? s[a] += i : s[++a] = i : (s[++a] = null, u.push({ i: a, x: G(r, i) })), e = ne.lastIndex;
  return e < n.length && (o = n.slice(e), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? u[0] ? nu(u[0].x) : tu(n) : (n = u.length, function(l) {
    for (var h = 0, f; h < n; ++h) s[(f = u[h]).i] = f.x(l);
    return s.join("");
  });
}
function Le(t, n) {
  var e = typeof n, r;
  return n == null || e === "boolean" ? Fe(n) : (e === "number" ? G : e === "string" ? (r = yt(n)) ? (n = r, bn) : di : n instanceof yt ? bn : n instanceof Date ? Js : Zs(n) ? Ws : Array.isArray(n) ? js : typeof n.valueOf != "function" && typeof n.toString != "function" || isNaN(n) ? Qs : G)(t, n);
}
function eu(t, n) {
  return t = +t, n = +n, function(e) {
    return Math.round(t * (1 - e) + n * e);
  };
}
var pr = 180 / Math.PI, ge = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function pi(t, n, e, r, i, o) {
  var a, s, u;
  return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (u = t * e + n * r) && (e -= t * u, r -= n * u), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, u /= s), t * r < n * e && (t = -t, n = -n, u = -u, a = -a), {
    translateX: i,
    translateY: o,
    rotate: Math.atan2(n, t) * pr,
    skewX: Math.atan(u) * pr,
    scaleX: a,
    scaleY: s
  };
}
var un;
function ru(t) {
  const n = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return n.isIdentity ? ge : pi(n.a, n.b, n.c, n.d, n.e, n.f);
}
function iu(t) {
  return t == null || (un || (un = document.createElementNS("http://www.w3.org/2000/svg", "g")), un.setAttribute("transform", t), !(t = un.transform.baseVal.consolidate())) ? ge : (t = t.matrix, pi(t.a, t.b, t.c, t.d, t.e, t.f));
}
function gi(t, n, e, r) {
  function i(l) {
    return l.length ? l.pop() + " " : "";
  }
  function o(l, h, f, c, d, p) {
    if (l !== f || h !== c) {
      var _ = d.push("translate(", null, n, null, e);
      p.push({ i: _ - 4, x: G(l, f) }, { i: _ - 2, x: G(h, c) });
    } else (f || c) && d.push("translate(" + f + n + c + e);
  }
  function a(l, h, f, c) {
    l !== h ? (l - h > 180 ? h += 360 : h - l > 180 && (l += 360), c.push({ i: f.push(i(f) + "rotate(", null, r) - 2, x: G(l, h) })) : h && f.push(i(f) + "rotate(" + h + r);
  }
  function s(l, h, f, c) {
    l !== h ? c.push({ i: f.push(i(f) + "skewX(", null, r) - 2, x: G(l, h) }) : h && f.push(i(f) + "skewX(" + h + r);
  }
  function u(l, h, f, c, d, p) {
    if (l !== f || h !== c) {
      var _ = d.push(i(d) + "scale(", null, ",", null, ")");
      p.push({ i: _ - 4, x: G(l, f) }, { i: _ - 2, x: G(h, c) });
    } else (f !== 1 || c !== 1) && d.push(i(d) + "scale(" + f + "," + c + ")");
  }
  return function(l, h) {
    var f = [], c = [];
    return l = t(l), h = t(h), o(l.translateX, l.translateY, h.translateX, h.translateY, f, c), a(l.rotate, h.rotate, f, c), s(l.skewX, h.skewX, f, c), u(l.scaleX, l.scaleY, h.scaleX, h.scaleY, f, c), l = h = null, function(d) {
      for (var p = -1, _ = c.length, x; ++p < _; ) f[(x = c[p]).i] = x.x(d);
      return f.join("");
    };
  };
}
var ou = gi(ru, "px, ", "px)", "deg)"), au = gi(iu, ", ", ")", ")"), zt = 0, Ht = 0, Ft = 0, yi = 1e3, Mn, Bt, $n = 0, _t = 0, Cn = 0, Vt = typeof performance == "object" && performance.now ? performance : Date, _i = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Rn() {
  return _t || (_i(su), _t = Vt.now() + Cn);
}
function su() {
  _t = 0;
}
function Kt() {
  this._call = this._time = this._next = null;
}
Kt.prototype = mi.prototype = {
  constructor: Kt,
  restart: function(t, n, e) {
    if (typeof t != "function") throw new TypeError("callback is not a function");
    e = (e == null ? Rn() : +e) + (n == null ? 0 : +n), !this._next && Bt !== this && (Bt ? Bt._next = this : Mn = this, Bt = this), this._call = t, this._time = e, ye();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ye());
  }
};
function mi(t, n, e) {
  var r = new Kt();
  return r.restart(t, n, e), r;
}
function uu() {
  Rn(), ++zt;
  for (var t = Mn, n; t; )
    (n = _t - t._time) >= 0 && t._call.call(void 0, n), t = t._next;
  --zt;
}
function gr() {
  _t = ($n = Vt.now()) + Cn, zt = Ht = 0;
  try {
    uu();
  } finally {
    zt = 0, cu(), _t = 0;
  }
}
function lu() {
  var t = Vt.now(), n = t - $n;
  n > yi && (Cn -= n, $n = t);
}
function cu() {
  for (var t, n = Mn, e, r = 1 / 0; n; )
    n._call ? (r > n._time && (r = n._time), t = n, n = n._next) : (e = n._next, n._next = null, n = t ? t._next = e : Mn = e);
  Bt = t, ye(r);
}
function ye(t) {
  if (!zt) {
    Ht && (Ht = clearTimeout(Ht));
    var n = t - _t;
    n > 24 ? (t < 1 / 0 && (Ht = setTimeout(gr, t - Vt.now() - Cn)), Ft && (Ft = clearInterval(Ft))) : (Ft || ($n = Vt.now(), Ft = setInterval(lu, yi)), zt = 1, _i(gr));
  }
}
function yr(t, n, e) {
  var r = new Kt();
  return n = n == null ? 0 : +n, r.restart((i) => {
    r.stop(), t(i + n);
  }, n, e), r;
}
function fu(t, n, e) {
  var r = new Kt(), i = n;
  return r._restart = r.restart, r.restart = function(o, a, s) {
    a = +a, s = s == null ? Rn() : +s, r._restart(function u(l) {
      l += i, r._restart(u, i += a, s), o(l);
    }, a, s);
  }, r.restart(t, n, e), r;
}
var hu = Oe("start", "end", "cancel", "interrupt"), du = [], vi = 0, _r = 1, _e = 2, dn = 3, mr = 4, me = 5, pn = 6;
function Fn(t, n, e, r, i, o) {
  var a = t.__transition;
  if (!a) t.__transition = {};
  else if (e in a) return;
  pu(t, e, {
    name: n,
    index: r,
    // For context during callback.
    group: i,
    // For context during callback.
    on: hu,
    tween: du,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: vi
  });
}
function De(t, n) {
  var e = V(t, n);
  if (e.state > vi) throw new Error("too late; already scheduled");
  return e;
}
function j(t, n) {
  var e = V(t, n);
  if (e.state > dn) throw new Error("too late; already running");
  return e;
}
function V(t, n) {
  var e = t.__transition;
  if (!e || !(e = e[n])) throw new Error("transition not found");
  return e;
}
function pu(t, n, e) {
  var r = t.__transition, i;
  r[n] = e, e.timer = mi(o, 0, e.time);
  function o(l) {
    e.state = _r, e.timer.restart(a, e.delay, e.time), e.delay <= l && a(l - e.delay);
  }
  function a(l) {
    var h, f, c, d;
    if (e.state !== _r) return u();
    for (h in r)
      if (d = r[h], d.name === e.name) {
        if (d.state === dn) return yr(a);
        d.state === mr ? (d.state = pn, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete r[h]) : +h < n && (d.state = pn, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete r[h]);
      }
    if (yr(function() {
      e.state === dn && (e.state = mr, e.timer.restart(s, e.delay, e.time), s(l));
    }), e.state = _e, e.on.call("start", t, t.__data__, e.index, e.group), e.state === _e) {
      for (e.state = dn, i = new Array(c = e.tween.length), h = 0, f = -1; h < c; ++h)
        (d = e.tween[h].value.call(t, t.__data__, e.index, e.group)) && (i[++f] = d);
      i.length = f + 1;
    }
  }
  function s(l) {
    for (var h = l < e.duration ? e.ease.call(null, l / e.duration) : (e.timer.restart(u), e.state = me, 1), f = -1, c = i.length; ++f < c; )
      i[f].call(t, h);
    e.state === me && (e.on.call("end", t, t.__data__, e.index, e.group), u());
  }
  function u() {
    e.state = pn, e.timer.stop(), delete r[n];
    for (var l in r) return;
    delete t.__transition;
  }
}
function gu(t, n) {
  var e = t.__transition, r, i, o = !0, a;
  if (e) {
    n = n == null ? null : n + "";
    for (a in e) {
      if ((r = e[a]).name !== n) {
        o = !1;
        continue;
      }
      i = r.state > _e && r.state < me, r.state = pn, r.timer.stop(), r.on.call(i ? "interrupt" : "cancel", t, t.__data__, r.index, r.group), delete e[a];
    }
    o && delete t.__transition;
  }
}
function yu(t) {
  return this.each(function() {
    gu(this, t);
  });
}
function _u(t, n) {
  var e, r;
  return function() {
    var i = j(this, t), o = i.tween;
    if (o !== e) {
      r = e = o;
      for (var a = 0, s = r.length; a < s; ++a)
        if (r[a].name === n) {
          r = r.slice(), r.splice(a, 1);
          break;
        }
    }
    i.tween = r;
  };
}
function mu(t, n, e) {
  var r, i;
  if (typeof e != "function") throw new Error();
  return function() {
    var o = j(this, t), a = o.tween;
    if (a !== r) {
      i = (r = a).slice();
      for (var s = { name: n, value: e }, u = 0, l = i.length; u < l; ++u)
        if (i[u].name === n) {
          i[u] = s;
          break;
        }
      u === l && i.push(s);
    }
    o.tween = i;
  };
}
function vu(t, n) {
  var e = this._id;
  if (t += "", arguments.length < 2) {
    for (var r = V(this.node(), e).tween, i = 0, o = r.length, a; i < o; ++i)
      if ((a = r[i]).name === t)
        return a.value;
    return null;
  }
  return this.each((n == null ? _u : mu)(e, t, n));
}
function He(t, n, e) {
  var r = t._id;
  return t.each(function() {
    var i = j(this, r);
    (i.value || (i.value = {}))[n] = e.apply(this, arguments);
  }), function(i) {
    return V(i, r).value[n];
  };
}
function wi(t, n) {
  var e;
  return (typeof n == "number" ? G : n instanceof yt ? bn : (e = yt(n)) ? (n = e, bn) : di)(t, n);
}
function wu(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function xu(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function bu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttribute(t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function Mu(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = this.getAttributeNS(t.space, t.local);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function $u(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttribute(t) : (a = this.getAttribute(t), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Au(t, n, e) {
  var r, i, o;
  return function() {
    var a, s = e(this), u;
    return s == null ? void this.removeAttributeNS(t.space, t.local) : (a = this.getAttributeNS(t.space, t.local), u = s + "", a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s)));
  };
}
function Tu(t, n) {
  var e = In(t), r = e === "transform" ? au : wi;
  return this.attrTween(t, typeof n == "function" ? (e.local ? Au : $u)(e, r, He(this, "attr." + t, n)) : n == null ? (e.local ? xu : wu)(e) : (e.local ? Mu : bu)(e, r, n));
}
function Su(t, n) {
  return function(e) {
    this.setAttribute(t, n.call(this, e));
  };
}
function Pu(t, n) {
  return function(e) {
    this.setAttributeNS(t.space, t.local, n.call(this, e));
  };
}
function Eu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Pu(t, o)), e;
  }
  return i._value = n, i;
}
function Nu(t, n) {
  var e, r;
  function i() {
    var o = n.apply(this, arguments);
    return o !== r && (e = (r = o) && Su(t, o)), e;
  }
  return i._value = n, i;
}
function ku(t, n) {
  var e = "attr." + t;
  if (arguments.length < 2) return (e = this.tween(e)) && e._value;
  if (n == null) return this.tween(e, null);
  if (typeof n != "function") throw new Error();
  var r = In(t);
  return this.tween(e, (r.local ? Eu : Nu)(r, n));
}
function zu(t, n) {
  return function() {
    De(this, t).delay = +n.apply(this, arguments);
  };
}
function Ou(t, n) {
  return n = +n, function() {
    De(this, t).delay = n;
  };
}
function Iu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? zu : Ou)(n, t)) : V(this.node(), n).delay;
}
function Cu(t, n) {
  return function() {
    j(this, t).duration = +n.apply(this, arguments);
  };
}
function Ru(t, n) {
  return n = +n, function() {
    j(this, t).duration = n;
  };
}
function Fu(t) {
  var n = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Cu : Ru)(n, t)) : V(this.node(), n).duration;
}
function Lu(t, n) {
  if (typeof n != "function") throw new Error();
  return function() {
    j(this, t).ease = n;
  };
}
function Du(t) {
  var n = this._id;
  return arguments.length ? this.each(Lu(n, t)) : V(this.node(), n).ease;
}
function Hu(t, n) {
  return function() {
    var e = n.apply(this, arguments);
    if (typeof e != "function") throw new Error();
    j(this, t).ease = e;
  };
}
function Bu(t) {
  if (typeof t != "function") throw new Error();
  return this.each(Hu(this._id, t));
}
function qu(t) {
  typeof t != "function" && (t = ti(t));
  for (var n = this._groups, e = n.length, r = new Array(e), i = 0; i < e; ++i)
    for (var o = n[i], a = o.length, s = r[i] = [], u, l = 0; l < a; ++l)
      (u = o[l]) && t.call(u, u.__data__, l, o) && s.push(u);
  return new et(r, this._parents, this._name, this._id);
}
function Xu(t) {
  if (t._id !== this._id) throw new Error();
  for (var n = this._groups, e = t._groups, r = n.length, i = e.length, o = Math.min(r, i), a = new Array(r), s = 0; s < o; ++s)
    for (var u = n[s], l = e[s], h = u.length, f = a[s] = new Array(h), c, d = 0; d < h; ++d)
      (c = u[d] || l[d]) && (f[d] = c);
  for (; s < r; ++s)
    a[s] = n[s];
  return new et(a, this._parents, this._name, this._id);
}
function Gu(t) {
  return (t + "").trim().split(/^|\s+/).every(function(n) {
    var e = n.indexOf(".");
    return e >= 0 && (n = n.slice(0, e)), !n || n === "start";
  });
}
function Uu(t, n, e) {
  var r, i, o = Gu(n) ? De : j;
  return function() {
    var a = o(this, t), s = a.on;
    s !== r && (i = (r = s).copy()).on(n, e), a.on = i;
  };
}
function Yu(t, n) {
  var e = this._id;
  return arguments.length < 2 ? V(this.node(), e).on.on(t) : this.each(Uu(e, t, n));
}
function Vu(t) {
  return function() {
    var n = this.parentNode;
    for (var e in this.__transition) if (+e !== t) return;
    n && n.removeChild(this);
  };
}
function Ku() {
  return this.on("end.remove", Vu(this._id));
}
function Wu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Ie(t));
  for (var r = this._groups, i = r.length, o = new Array(i), a = 0; a < i; ++a)
    for (var s = r[a], u = s.length, l = o[a] = new Array(u), h, f, c = 0; c < u; ++c)
      (h = s[c]) && (f = t.call(h, h.__data__, c, s)) && ("__data__" in h && (f.__data__ = h.__data__), l[c] = f, Fn(l[c], n, e, c, l, V(h, e)));
  return new et(o, this._parents, n, e);
}
function Zu(t) {
  var n = this._name, e = this._id;
  typeof t != "function" && (t = Qr(t));
  for (var r = this._groups, i = r.length, o = [], a = [], s = 0; s < i; ++s)
    for (var u = r[s], l = u.length, h, f = 0; f < l; ++f)
      if (h = u[f]) {
        for (var c = t.call(h, h.__data__, f, u), d, p = V(h, e), _ = 0, x = c.length; _ < x; ++_)
          (d = c[_]) && Fn(d, n, e, _, c, p);
        o.push(c), a.push(h);
      }
  return new et(o, a, n, e);
}
var ju = jt.prototype.constructor;
function Ju() {
  return new ju(this._groups, this._parents);
}
function Qu(t, n) {
  var e, r, i;
  return function() {
    var o = kt(this, t), a = (this.style.removeProperty(t), kt(this, t));
    return o === a ? null : o === e && a === r ? i : i = n(e = o, r = a);
  };
}
function xi(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function tl(t, n, e) {
  var r, i = e + "", o;
  return function() {
    var a = kt(this, t);
    return a === i ? null : a === r ? o : o = n(r = a, e);
  };
}
function nl(t, n, e) {
  var r, i, o;
  return function() {
    var a = kt(this, t), s = e(this), u = s + "";
    return s == null && (u = s = (this.style.removeProperty(t), kt(this, t))), a === u ? null : a === r && u === i ? o : (i = u, o = n(r = a, s));
  };
}
function el(t, n) {
  var e, r, i, o = "style." + n, a = "end." + o, s;
  return function() {
    var u = j(this, t), l = u.on, h = u.value[o] == null ? s || (s = xi(n)) : void 0;
    (l !== e || i !== h) && (r = (e = l).copy()).on(a, i = h), u.on = r;
  };
}
function rl(t, n, e) {
  var r = (t += "") == "transform" ? ou : wi;
  return n == null ? this.styleTween(t, Qu(t, r)).on("end.style." + t, xi(t)) : typeof n == "function" ? this.styleTween(t, nl(t, r, He(this, "style." + t, n))).each(el(this._id, t)) : this.styleTween(t, tl(t, r, n), e).on("end.style." + t, null);
}
function il(t, n, e) {
  return function(r) {
    this.style.setProperty(t, n.call(this, r), e);
  };
}
function ol(t, n, e) {
  var r, i;
  function o() {
    var a = n.apply(this, arguments);
    return a !== i && (r = (i = a) && il(t, a, e)), r;
  }
  return o._value = n, o;
}
function al(t, n, e) {
  var r = "style." + (t += "");
  if (arguments.length < 2) return (r = this.tween(r)) && r._value;
  if (n == null) return this.tween(r, null);
  if (typeof n != "function") throw new Error();
  return this.tween(r, ol(t, n, e ?? ""));
}
function sl(t) {
  return function() {
    this.textContent = t;
  };
}
function ul(t) {
  return function() {
    var n = t(this);
    this.textContent = n ?? "";
  };
}
function ll(t) {
  return this.tween("text", typeof t == "function" ? ul(He(this, "text", t)) : sl(t == null ? "" : t + ""));
}
function cl(t) {
  return function(n) {
    this.textContent = t.call(this, n);
  };
}
function fl(t) {
  var n, e;
  function r() {
    var i = t.apply(this, arguments);
    return i !== e && (n = (e = i) && cl(i)), n;
  }
  return r._value = t, r;
}
function hl(t) {
  var n = "text";
  if (arguments.length < 1) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  return this.tween(n, fl(t));
}
function dl() {
  for (var t = this._name, n = this._id, e = bi(), r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      if (u = a[l]) {
        var h = V(u, n);
        Fn(u, t, e, l, a, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new et(r, this._parents, t, e);
}
function pl() {
  var t, n, e = this, r = e._id, i = e.size();
  return new Promise(function(o, a) {
    var s = { value: a }, u = { value: function() {
      --i === 0 && o();
    } };
    e.each(function() {
      var l = j(this, r), h = l.on;
      h !== t && (n = (t = h).copy(), n._.cancel.push(s), n._.interrupt.push(s), n._.end.push(u)), l.on = n;
    }), i === 0 && o();
  });
}
var gl = 0;
function et(t, n, e, r) {
  this._groups = t, this._parents = n, this._name = e, this._id = r;
}
function bi() {
  return ++gl;
}
var J = jt.prototype;
et.prototype = {
  constructor: et,
  select: Wu,
  selectAll: Zu,
  selectChild: J.selectChild,
  selectChildren: J.selectChildren,
  filter: qu,
  merge: Xu,
  selection: Ju,
  transition: dl,
  call: J.call,
  nodes: J.nodes,
  node: J.node,
  size: J.size,
  empty: J.empty,
  each: J.each,
  on: Yu,
  attr: Tu,
  attrTween: ku,
  style: rl,
  styleTween: al,
  text: ll,
  textTween: hl,
  remove: Ku,
  tween: vu,
  delay: Iu,
  duration: Fu,
  ease: Du,
  easeVarying: Bu,
  end: pl,
  [Symbol.iterator]: J[Symbol.iterator]
};
function yl(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var _l = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: yl
};
function ml(t, n) {
  for (var e; !(e = t.__transition) || !(e = e[n]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${n} not found`);
  return e;
}
function vl(t) {
  var n, e;
  t instanceof et ? (n = t._id, t = t._name) : (n = bi(), (e = _l).time = Rn(), t = t == null ? null : t + "");
  for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
    for (var a = r[o], s = a.length, u, l = 0; l < s; ++l)
      (u = a[l]) && Fn(u, t, n, l, a, e || ml(u, n));
  return new et(r, this._parents, t, n);
}
jt.prototype.interrupt = yu;
jt.prototype.transition = vl;
const ve = Math.PI, we = 2 * ve, ft = 1e-6, wl = we - ft;
function Mi(t) {
  this._ += t[0];
  for (let n = 1, e = t.length; n < e; ++n)
    this._ += arguments[n] + t[n];
}
function xl(t) {
  let n = Math.floor(t);
  if (!(n >= 0)) throw new Error(`invalid digits: ${t}`);
  if (n > 15) return Mi;
  const e = 10 ** n;
  return function(r) {
    this._ += r[0];
    for (let i = 1, o = r.length; i < o; ++i)
      this._ += Math.round(arguments[i] * e) / e + r[i];
  };
}
class Be {
  constructor(n) {
    this._x0 = this._y0 = // start of current subpath
    this._x1 = this._y1 = null, this._ = "", this._append = n == null ? Mi : xl(n);
  }
  moveTo(n, e) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}`;
  }
  closePath() {
    this._x1 !== null && (this._x1 = this._x0, this._y1 = this._y0, this._append`Z`);
  }
  lineTo(n, e) {
    this._append`L${this._x1 = +n},${this._y1 = +e}`;
  }
  quadraticCurveTo(n, e, r, i) {
    this._append`Q${+n},${+e},${this._x1 = +r},${this._y1 = +i}`;
  }
  bezierCurveTo(n, e, r, i, o, a) {
    this._append`C${+n},${+e},${+r},${+i},${this._x1 = +o},${this._y1 = +a}`;
  }
  arcTo(n, e, r, i, o) {
    if (n = +n, e = +e, r = +r, i = +i, o = +o, o < 0) throw new Error(`negative radius: ${o}`);
    let a = this._x1, s = this._y1, u = r - n, l = i - e, h = a - n, f = s - e, c = h * h + f * f;
    if (this._x1 === null)
      this._append`M${this._x1 = n},${this._y1 = e}`;
    else if (c > ft) if (!(Math.abs(f * u - l * h) > ft) || !o)
      this._append`L${this._x1 = n},${this._y1 = e}`;
    else {
      let d = r - a, p = i - s, _ = u * u + l * l, x = d * d + p * p, y = Math.sqrt(_), M = Math.sqrt(c), $ = o * Math.tan((ve - Math.acos((_ + c - x) / (2 * y * M))) / 2), g = $ / M, m = $ / y;
      Math.abs(g - 1) > ft && this._append`L${n + g * h},${e + g * f}`, this._append`A${o},${o},0,0,${+(f * d > h * p)},${this._x1 = n + m * u},${this._y1 = e + m * l}`;
    }
  }
  arc(n, e, r, i, o, a) {
    if (n = +n, e = +e, r = +r, a = !!a, r < 0) throw new Error(`negative radius: ${r}`);
    let s = r * Math.cos(i), u = r * Math.sin(i), l = n + s, h = e + u, f = 1 ^ a, c = a ? i - o : o - i;
    this._x1 === null ? this._append`M${l},${h}` : (Math.abs(this._x1 - l) > ft || Math.abs(this._y1 - h) > ft) && this._append`L${l},${h}`, r && (c < 0 && (c = c % we + we), c > wl ? this._append`A${r},${r},0,1,${f},${n - s},${e - u}A${r},${r},0,1,${f},${this._x1 = l},${this._y1 = h}` : c > ft && this._append`A${r},${r},0,${+(c >= ve)},${f},${this._x1 = n + r * Math.cos(o)},${this._y1 = e + r * Math.sin(o)}`);
  }
  rect(n, e, r, i) {
    this._append`M${this._x0 = this._x1 = +n},${this._y0 = this._y1 = +e}h${r = +r}v${+i}h${-r}Z`;
  }
  toString() {
    return this._;
  }
}
function K() {
  return new Be();
}
K.prototype = Be.prototype;
function bl(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function An(t, n) {
  if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
  var e, r = t.slice(0, e);
  return [
    r.length > 1 ? r[0] + r.slice(2) : r,
    +t.slice(e + 1)
  ];
}
function Ot(t) {
  return t = An(Math.abs(t)), t ? t[1] : NaN;
}
function Ml(t, n) {
  return function(e, r) {
    for (var i = e.length, o = [], a = 0, s = t[0], u = 0; i > 0 && s > 0 && (u + s + 1 > r && (s = Math.max(1, r - u)), o.push(e.substring(i -= s, i + s)), !((u += s + 1) > r)); )
      s = t[a = (a + 1) % t.length];
    return o.reverse().join(n);
  };
}
function $l(t) {
  return function(n) {
    return n.replace(/[0-9]/g, function(e) {
      return t[+e];
    });
  };
}
var Al = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Tn(t) {
  if (!(n = Al.exec(t))) throw new Error("invalid format: " + t);
  var n;
  return new qe({
    fill: n[1],
    align: n[2],
    sign: n[3],
    symbol: n[4],
    zero: n[5],
    width: n[6],
    comma: n[7],
    precision: n[8] && n[8].slice(1),
    trim: n[9],
    type: n[10]
  });
}
Tn.prototype = qe.prototype;
function qe(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
qe.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Tl(t) {
  t: for (var n = t.length, e = 1, r = -1, i; e < n; ++e)
    switch (t[e]) {
      case ".":
        r = i = e;
        break;
      case "0":
        r === 0 && (r = e), i = e;
        break;
      default:
        if (!+t[e]) break t;
        r > 0 && (r = 0);
        break;
    }
  return r > 0 ? t.slice(0, r) + t.slice(i + 1) : t;
}
var $i;
function Sl(t, n) {
  var e = An(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1], o = i - ($i = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1, a = r.length;
  return o === a ? r : o > a ? r + new Array(o - a + 1).join("0") : o > 0 ? r.slice(0, o) + "." + r.slice(o) : "0." + new Array(1 - o).join("0") + An(t, Math.max(0, n + o - 1))[0];
}
function vr(t, n) {
  var e = An(t, n);
  if (!e) return t + "";
  var r = e[0], i = e[1];
  return i < 0 ? "0." + new Array(-i).join("0") + r : r.length > i + 1 ? r.slice(0, i + 1) + "." + r.slice(i + 1) : r + new Array(i - r.length + 2).join("0");
}
const wr = {
  "%": (t, n) => (t * 100).toFixed(n),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: bl,
  e: (t, n) => t.toExponential(n),
  f: (t, n) => t.toFixed(n),
  g: (t, n) => t.toPrecision(n),
  o: (t) => Math.round(t).toString(8),
  p: (t, n) => vr(t * 100, n),
  r: vr,
  s: Sl,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function xr(t) {
  return t;
}
var br = Array.prototype.map, Mr = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function Pl(t) {
  var n = t.grouping === void 0 || t.thousands === void 0 ? xr : Ml(br.call(t.grouping, Number), t.thousands + ""), e = t.currency === void 0 ? "" : t.currency[0] + "", r = t.currency === void 0 ? "" : t.currency[1] + "", i = t.decimal === void 0 ? "." : t.decimal + "", o = t.numerals === void 0 ? xr : $l(br.call(t.numerals, String)), a = t.percent === void 0 ? "%" : t.percent + "", s = t.minus === void 0 ? "−" : t.minus + "", u = t.nan === void 0 ? "NaN" : t.nan + "";
  function l(f) {
    f = Tn(f);
    var c = f.fill, d = f.align, p = f.sign, _ = f.symbol, x = f.zero, y = f.width, M = f.comma, $ = f.precision, g = f.trim, m = f.type;
    m === "n" ? (M = !0, m = "g") : wr[m] || ($ === void 0 && ($ = 12), g = !0, m = "g"), (x || c === "0" && d === "=") && (x = !0, c = "0", d = "=");
    var T = _ === "$" ? e : _ === "#" && /[boxX]/.test(m) ? "0" + m.toLowerCase() : "", A = _ === "$" ? r : /[%p]/.test(m) ? a : "", E = wr[m], I = /[defgprs%]/.test(m);
    $ = $ === void 0 ? 6 : /[gprs]/.test(m) ? Math.max(1, Math.min(21, $)) : Math.max(0, Math.min(20, $));
    function C(w) {
      var N = T, P = A, X, en, st;
      if (m === "c")
        P = E(w) + P, w = "";
      else {
        w = +w;
        var ct = w < 0 || 1 / w < 0;
        if (w = isNaN(w) ? u : E(Math.abs(w), $), g && (w = Tl(w)), ct && +w == 0 && p !== "+" && (ct = !1), N = (ct ? p === "(" ? p : s : p === "-" || p === "(" ? "" : p) + N, P = (m === "s" ? Mr[8 + $i / 3] : "") + P + (ct && p === "(" ? ")" : ""), I) {
          for (X = -1, en = w.length; ++X < en; )
            if (st = w.charCodeAt(X), 48 > st || st > 57) {
              P = (st === 46 ? i + w.slice(X + 1) : w.slice(X)) + P, w = w.slice(0, X);
              break;
            }
        }
      }
      M && !x && (w = n(w, 1 / 0));
      var $t = N.length + w.length + P.length, B = $t < y ? new Array(y - $t + 1).join(c) : "";
      switch (M && x && (w = n(B + w, B.length ? y - P.length : 1 / 0), B = ""), d) {
        case "<":
          w = N + w + P + B;
          break;
        case "=":
          w = N + B + w + P;
          break;
        case "^":
          w = B.slice(0, $t = B.length >> 1) + N + w + P + B.slice($t);
          break;
        default:
          w = B + N + w + P;
          break;
      }
      return o(w);
    }
    return C.toString = function() {
      return f + "";
    }, C;
  }
  function h(f, c) {
    var d = l((f = Tn(f), f.type = "f", f)), p = Math.max(-8, Math.min(8, Math.floor(Ot(c) / 3))) * 3, _ = Math.pow(10, -p), x = Mr[8 + p / 3];
    return function(y) {
      return d(_ * y) + x;
    };
  }
  return {
    format: l,
    formatPrefix: h
  };
}
var ln, Ln, Ai;
El({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function El(t) {
  return ln = Pl(t), Ln = ln.format, Ai = ln.formatPrefix, ln;
}
function Nl(t) {
  return Math.max(0, -Ot(Math.abs(t)));
}
function kl(t, n) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ot(n) / 3))) * 3 - Ot(Math.abs(t)));
}
function zl(t, n) {
  return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, Ot(n) - Ot(t)) + 1;
}
function Ol(t, n) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(n).domain(t);
      break;
  }
  return this;
}
function Il(t) {
  return function() {
    return t;
  };
}
function Cl(t) {
  return +t;
}
var $r = [0, 1];
function Tt(t) {
  return t;
}
function xe(t, n) {
  return (n -= t = +t) ? function(e) {
    return (e - t) / n;
  } : Il(isNaN(n) ? NaN : 0.5);
}
function Rl(t, n) {
  var e;
  return t > n && (e = t, t = n, n = e), function(r) {
    return Math.max(t, Math.min(n, r));
  };
}
function Fl(t, n, e) {
  var r = t[0], i = t[1], o = n[0], a = n[1];
  return i < r ? (r = xe(i, r), o = e(a, o)) : (r = xe(r, i), o = e(o, a)), function(s) {
    return o(r(s));
  };
}
function Ll(t, n, e) {
  var r = Math.min(t.length, n.length) - 1, i = new Array(r), o = new Array(r), a = -1;
  for (t[r] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a < r; )
    i[a] = xe(t[a], t[a + 1]), o[a] = e(n[a], n[a + 1]);
  return function(s) {
    var u = Eo(t, s, 1, r) - 1;
    return o[u](i[u](s));
  };
}
function Dl(t, n) {
  return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Hl() {
  var t = $r, n = $r, e = Le, r, i, o, a = Tt, s, u, l;
  function h() {
    var c = Math.min(t.length, n.length);
    return a !== Tt && (a = Rl(t[0], t[c - 1])), s = c > 2 ? Ll : Fl, u = l = null, f;
  }
  function f(c) {
    return c == null || isNaN(c = +c) ? o : (u || (u = s(t.map(r), n, e)))(r(a(c)));
  }
  return f.invert = function(c) {
    return a(i((l || (l = s(n, t.map(r), G)))(c)));
  }, f.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Cl), h()) : t.slice();
  }, f.range = function(c) {
    return arguments.length ? (n = Array.from(c), h()) : n.slice();
  }, f.rangeRound = function(c) {
    return n = Array.from(c), e = eu, h();
  }, f.clamp = function(c) {
    return arguments.length ? (a = c ? !0 : Tt, h()) : a !== Tt;
  }, f.interpolate = function(c) {
    return arguments.length ? (e = c, h()) : e;
  }, f.unknown = function(c) {
    return arguments.length ? (o = c, f) : o;
  }, function(c, d) {
    return r = c, i = d, h();
  };
}
function Bl() {
  return Hl()(Tt, Tt);
}
function ql(t, n, e, r) {
  var i = Io(t, n, e), o;
  switch (r = Tn(r ?? ",f"), r.type) {
    case "s": {
      var a = Math.max(Math.abs(t), Math.abs(n));
      return r.precision == null && !isNaN(o = kl(i, a)) && (r.precision = o), Ai(r, a);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      r.precision == null && !isNaN(o = zl(i, Math.max(Math.abs(t), Math.abs(n)))) && (r.precision = o - (r.type === "e"));
      break;
    }
    case "f":
    case "%": {
      r.precision == null && !isNaN(o = Nl(i)) && (r.precision = o - (r.type === "%") * 2);
      break;
    }
  }
  return Ln(r);
}
function Xl(t) {
  var n = t.domain;
  return t.ticks = function(e) {
    var r = n();
    return Oo(r[0], r[r.length - 1], e ?? 10);
  }, t.tickFormat = function(e, r) {
    var i = n();
    return ql(i[0], i[i.length - 1], e ?? 10, r);
  }, t.nice = function(e) {
    e == null && (e = 10);
    var r = n(), i = 0, o = r.length - 1, a = r[i], s = r[o], u, l, h = 10;
    for (s < a && (l = a, a = s, s = l, l = i, i = o, o = l); h-- > 0; ) {
      if (l = ue(a, s, e), l === u)
        return r[i] = a, r[o] = s, n(r);
      if (l > 0)
        a = Math.floor(a / l) * l, s = Math.ceil(s / l) * l;
      else if (l < 0)
        a = Math.ceil(a * l) / l, s = Math.floor(s * l) / l;
      else
        break;
      u = l;
    }
    return t;
  }, t;
}
function H() {
  var t = Bl();
  return t.copy = function() {
    return Dl(t, H());
  }, Ol.apply(t, arguments), Xl(t);
}
function At(t) {
  return function() {
    return t;
  };
}
function Gl(t) {
  let n = 3;
  return t.digits = function(e) {
    if (!arguments.length) return n;
    if (e == null)
      n = null;
    else {
      const r = Math.floor(e);
      if (!(r >= 0)) throw new RangeError(`invalid digits: ${e}`);
      n = r;
    }
    return t;
  }, () => new Be(n);
}
function Ul(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ti(t) {
  this._context = t;
}
Ti.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t, n) {
    switch (t = +t, n = +n, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t, n) : this._context.moveTo(t, n);
        break;
      case 1:
        this._point = 2;
      // falls through
      default:
        this._context.lineTo(t, n);
        break;
    }
  }
};
function Yl(t) {
  return new Ti(t);
}
function Vl(t) {
  return t[0];
}
function Kl(t) {
  return t[1];
}
function Si(t, n) {
  var e = At(!0), r = null, i = Yl, o = null, a = Gl(s);
  t = typeof t == "function" ? t : t === void 0 ? Vl : At(t), n = typeof n == "function" ? n : n === void 0 ? Kl : At(n);
  function s(u) {
    var l, h = (u = Ul(u)).length, f, c = !1, d;
    for (r == null && (o = i(d = a())), l = 0; l <= h; ++l)
      !(l < h && e(f = u[l], l, u)) === c && ((c = !c) ? o.lineStart() : o.lineEnd()), c && o.point(+t(f, l, u), +n(f, l, u));
    if (d) return o = null, d + "" || null;
  }
  return s.x = function(u) {
    return arguments.length ? (t = typeof u == "function" ? u : At(+u), s) : t;
  }, s.y = function(u) {
    return arguments.length ? (n = typeof u == "function" ? u : At(+u), s) : n;
  }, s.defined = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : At(!!u), s) : e;
  }, s.curve = function(u) {
    return arguments.length ? (i = u, r != null && (o = i(r)), s) : i;
  }, s.context = function(u) {
    return arguments.length ? (u == null ? r = o = null : o = i(r = u), s) : r;
  }, s;
}
function qt(t, n, e) {
  this.k = t, this.x = n, this.y = e;
}
qt.prototype = {
  constructor: qt,
  scale: function(t) {
    return t === 1 ? this : new qt(this.k * t, this.x, this.y);
  },
  translate: function(t, n) {
    return t === 0 & n === 0 ? this : new qt(this.k, this.x + this.k * t, this.y + this.k * n);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
qt.prototype;
var Pi = typeof global == "object" && global && global.Object === Object && global, Wl = typeof self == "object" && self && self.Object === Object && self, it = Pi || Wl || Function("return this")(), Z = it.Symbol, Ei = Object.prototype, Zl = Ei.hasOwnProperty, jl = Ei.toString, Lt = Z ? Z.toStringTag : void 0;
function Jl(t) {
  var n = Zl.call(t, Lt), e = t[Lt];
  try {
    t[Lt] = void 0;
    var r = !0;
  } catch {
  }
  var i = jl.call(t);
  return r && (n ? t[Lt] = e : delete t[Lt]), i;
}
var Ql = Object.prototype, tc = Ql.toString;
function nc(t) {
  return tc.call(t);
}
var ec = "[object Null]", rc = "[object Undefined]", Ar = Z ? Z.toStringTag : void 0;
function wt(t) {
  return t == null ? t === void 0 ? rc : ec : Ar && Ar in Object(t) ? Jl(t) : nc(t);
}
function lt(t) {
  return t != null && typeof t == "object";
}
var ic = "[object Symbol]";
function Qt(t) {
  return typeof t == "symbol" || lt(t) && wt(t) == ic;
}
function Ct(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = Array(r); ++e < r; )
    i[e] = n(t[e], e, t);
  return i;
}
var F = Array.isArray, Tr = Z ? Z.prototype : void 0, Sr = Tr ? Tr.toString : void 0;
function Ni(t) {
  if (typeof t == "string")
    return t;
  if (F(t))
    return Ct(t, Ni) + "";
  if (Qt(t))
    return Sr ? Sr.call(t) : "";
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
var oc = /\s/;
function ac(t) {
  for (var n = t.length; n-- && oc.test(t.charAt(n)); )
    ;
  return n;
}
var sc = /^\s+/;
function uc(t) {
  return t && t.slice(0, ac(t) + 1).replace(sc, "");
}
function rt(t) {
  var n = typeof t;
  return t != null && (n == "object" || n == "function");
}
var Pr = NaN, lc = /^[-+]0x[0-9a-f]+$/i, cc = /^0b[01]+$/i, fc = /^0o[0-7]+$/i, hc = parseInt;
function dc(t) {
  if (typeof t == "number")
    return t;
  if (Qt(t))
    return Pr;
  if (rt(t)) {
    var n = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = rt(n) ? n + "" : n;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = uc(t);
  var e = cc.test(t);
  return e || fc.test(t) ? hc(t.slice(2), e ? 2 : 8) : lc.test(t) ? Pr : +t;
}
var pc = 1 / 0, gc = 17976931348623157e292;
function ee(t) {
  if (!t)
    return t === 0 ? t : 0;
  if (t = dc(t), t === pc || t === -1 / 0) {
    var n = t < 0 ? -1 : 1;
    return n * gc;
  }
  return t === t ? t : 0;
}
function Dn(t) {
  return t;
}
var yc = "[object AsyncFunction]", _c = "[object Function]", mc = "[object GeneratorFunction]", vc = "[object Proxy]";
function ki(t) {
  if (!rt(t))
    return !1;
  var n = wt(t);
  return n == _c || n == mc || n == yc || n == vc;
}
var re = it["__core-js_shared__"], Er = function() {
  var t = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function wc(t) {
  return !!Er && Er in t;
}
var xc = Function.prototype, bc = xc.toString;
function xt(t) {
  if (t != null) {
    try {
      return bc.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Mc = /[\\^$.*+?()[\]{}|]/g, $c = /^\[object .+?Constructor\]$/, Ac = Function.prototype, Tc = Object.prototype, Sc = Ac.toString, Pc = Tc.hasOwnProperty, Ec = RegExp(
  "^" + Sc.call(Pc).replace(Mc, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Nc(t) {
  if (!rt(t) || wc(t))
    return !1;
  var n = ki(t) ? Ec : $c;
  return n.test(xt(t));
}
function kc(t, n) {
  return t == null ? void 0 : t[n];
}
function bt(t, n) {
  var e = kc(t, n);
  return Nc(e) ? e : void 0;
}
var be = bt(it, "WeakMap");
function zc(t, n, e) {
  switch (e.length) {
    case 0:
      return t.call(n);
    case 1:
      return t.call(n, e[0]);
    case 2:
      return t.call(n, e[0], e[1]);
    case 3:
      return t.call(n, e[0], e[1], e[2]);
  }
  return t.apply(n, e);
}
function Oc(t, n) {
  var e = -1, r = t.length;
  for (n || (n = Array(r)); ++e < r; )
    n[e] = t[e];
  return n;
}
var Ic = 800, Cc = 16, Rc = Date.now;
function Fc(t) {
  var n = 0, e = 0;
  return function() {
    var r = Rc(), i = Cc - (r - e);
    if (e = r, i > 0) {
      if (++n >= Ic)
        return arguments[0];
    } else
      n = 0;
    return t.apply(void 0, arguments);
  };
}
function Lc(t) {
  return function() {
    return t;
  };
}
var Sn = function() {
  try {
    var t = bt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Dc = Sn ? function(t, n) {
  return Sn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Lc(n),
    writable: !0
  });
} : Dn, Hc = Fc(Dc);
function Bc(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r && n(t[e], e, t) !== !1; )
    ;
  return t;
}
var qc = 9007199254740991, Xc = /^(?:0|[1-9]\d*)$/;
function Hn(t, n) {
  var e = typeof t;
  return n = n ?? qc, !!n && (e == "number" || e != "symbol" && Xc.test(t)) && t > -1 && t % 1 == 0 && t < n;
}
function Gc(t, n, e) {
  n == "__proto__" && Sn ? Sn(t, n, {
    configurable: !0,
    enumerable: !0,
    value: e,
    writable: !0
  }) : t[n] = e;
}
function Bn(t, n) {
  return t === n || t !== t && n !== n;
}
var Uc = Object.prototype, Yc = Uc.hasOwnProperty;
function Vc(t, n, e) {
  var r = t[n];
  (!(Yc.call(t, n) && Bn(r, e)) || e === void 0 && !(n in t)) && Gc(t, n, e);
}
var Nr = Math.max;
function Kc(t, n, e) {
  return n = Nr(n === void 0 ? t.length - 1 : n, 0), function() {
    for (var r = arguments, i = -1, o = Nr(r.length - n, 0), a = Array(o); ++i < o; )
      a[i] = r[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = r[i];
    return s[n] = e(a), zc(t, this, s);
  };
}
function Wc(t, n) {
  return Hc(Kc(t, n, Dn), t + "");
}
var Zc = 9007199254740991;
function Xe(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Zc;
}
function Rt(t) {
  return t != null && Xe(t.length) && !ki(t);
}
function jc(t, n, e) {
  if (!rt(e))
    return !1;
  var r = typeof n;
  return (r == "number" ? Rt(e) && Hn(n, e.length) : r == "string" && n in e) ? Bn(e[n], t) : !1;
}
var Jc = Object.prototype;
function zi(t) {
  var n = t && t.constructor, e = typeof n == "function" && n.prototype || Jc;
  return t === e;
}
function Oi(t, n) {
  for (var e = -1, r = Array(t); ++e < t; )
    r[e] = n(e);
  return r;
}
var Qc = "[object Arguments]";
function kr(t) {
  return lt(t) && wt(t) == Qc;
}
var Ii = Object.prototype, tf = Ii.hasOwnProperty, nf = Ii.propertyIsEnumerable, Ge = kr(/* @__PURE__ */ function() {
  return arguments;
}()) ? kr : function(t) {
  return lt(t) && tf.call(t, "callee") && !nf.call(t, "callee");
};
function ef() {
  return !1;
}
var Ci = typeof exports == "object" && exports && !exports.nodeType && exports, zr = Ci && typeof module == "object" && module && !module.nodeType && module, rf = zr && zr.exports === Ci, Or = rf ? it.Buffer : void 0, of = Or ? Or.isBuffer : void 0, Me = of || ef, af = "[object Arguments]", sf = "[object Array]", uf = "[object Boolean]", lf = "[object Date]", cf = "[object Error]", ff = "[object Function]", hf = "[object Map]", df = "[object Number]", pf = "[object Object]", gf = "[object RegExp]", yf = "[object Set]", _f = "[object String]", mf = "[object WeakMap]", vf = "[object ArrayBuffer]", wf = "[object DataView]", xf = "[object Float32Array]", bf = "[object Float64Array]", Mf = "[object Int8Array]", $f = "[object Int16Array]", Af = "[object Int32Array]", Tf = "[object Uint8Array]", Sf = "[object Uint8ClampedArray]", Pf = "[object Uint16Array]", Ef = "[object Uint32Array]", S = {};
S[xf] = S[bf] = S[Mf] = S[$f] = S[Af] = S[Tf] = S[Sf] = S[Pf] = S[Ef] = !0;
S[af] = S[sf] = S[vf] = S[uf] = S[wf] = S[lf] = S[cf] = S[ff] = S[hf] = S[df] = S[pf] = S[gf] = S[yf] = S[_f] = S[mf] = !1;
function Nf(t) {
  return lt(t) && Xe(t.length) && !!S[wt(t)];
}
function kf(t) {
  return function(n) {
    return t(n);
  };
}
var Ri = typeof exports == "object" && exports && !exports.nodeType && exports, Xt = Ri && typeof module == "object" && module && !module.nodeType && module, zf = Xt && Xt.exports === Ri, ie = zf && Pi.process, Ir = function() {
  try {
    var t = Xt && Xt.require && Xt.require("util").types;
    return t || ie && ie.binding && ie.binding("util");
  } catch {
  }
}(), Cr = Ir && Ir.isTypedArray, Fi = Cr ? kf(Cr) : Nf, Of = Object.prototype, If = Of.hasOwnProperty;
function Li(t, n) {
  var e = F(t), r = !e && Ge(t), i = !e && !r && Me(t), o = !e && !r && !i && Fi(t), a = e || r || i || o, s = a ? Oi(t.length, String) : [], u = s.length;
  for (var l in t)
    (n || If.call(t, l)) && !(a && // Safari 9 has enumerable `arguments.length` in strict mode.
    (l == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (l == "offset" || l == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (l == "buffer" || l == "byteLength" || l == "byteOffset") || // Skip index properties.
    Hn(l, u))) && s.push(l);
  return s;
}
function Di(t, n) {
  return function(e) {
    return t(n(e));
  };
}
var Cf = Di(Object.keys, Object), Rf = Object.prototype, Ff = Rf.hasOwnProperty;
function Lf(t) {
  if (!zi(t))
    return Cf(t);
  var n = [];
  for (var e in Object(t))
    Ff.call(t, e) && e != "constructor" && n.push(e);
  return n;
}
function tn(t) {
  return Rt(t) ? Li(t) : Lf(t);
}
function Df(t) {
  var n = [];
  if (t != null)
    for (var e in Object(t))
      n.push(e);
  return n;
}
var Hf = Object.prototype, Bf = Hf.hasOwnProperty;
function qf(t) {
  if (!rt(t))
    return Df(t);
  var n = zi(t), e = [];
  for (var r in t)
    r == "constructor" && (n || !Bf.call(t, r)) || e.push(r);
  return e;
}
function Xf(t) {
  return Rt(t) ? Li(t, !0) : qf(t);
}
var Gf = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Uf = /^\w*$/;
function Ue(t, n) {
  if (F(t))
    return !1;
  var e = typeof t;
  return e == "number" || e == "symbol" || e == "boolean" || t == null || Qt(t) ? !0 : Uf.test(t) || !Gf.test(t) || n != null && t in Object(n);
}
var Wt = bt(Object, "create");
function Yf() {
  this.__data__ = Wt ? Wt(null) : {}, this.size = 0;
}
function Vf(t) {
  var n = this.has(t) && delete this.__data__[t];
  return this.size -= n ? 1 : 0, n;
}
var Kf = "__lodash_hash_undefined__", Wf = Object.prototype, Zf = Wf.hasOwnProperty;
function jf(t) {
  var n = this.__data__;
  if (Wt) {
    var e = n[t];
    return e === Kf ? void 0 : e;
  }
  return Zf.call(n, t) ? n[t] : void 0;
}
var Jf = Object.prototype, Qf = Jf.hasOwnProperty;
function th(t) {
  var n = this.__data__;
  return Wt ? n[t] !== void 0 : Qf.call(n, t);
}
var nh = "__lodash_hash_undefined__";
function eh(t, n) {
  var e = this.__data__;
  return this.size += this.has(t) ? 0 : 1, e[t] = Wt && n === void 0 ? nh : n, this;
}
function mt(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
mt.prototype.clear = Yf;
mt.prototype.delete = Vf;
mt.prototype.get = jf;
mt.prototype.has = th;
mt.prototype.set = eh;
function rh() {
  this.__data__ = [], this.size = 0;
}
function qn(t, n) {
  for (var e = t.length; e--; )
    if (Bn(t[e][0], n))
      return e;
  return -1;
}
var ih = Array.prototype, oh = ih.splice;
function ah(t) {
  var n = this.__data__, e = qn(n, t);
  if (e < 0)
    return !1;
  var r = n.length - 1;
  return e == r ? n.pop() : oh.call(n, e, 1), --this.size, !0;
}
function sh(t) {
  var n = this.__data__, e = qn(n, t);
  return e < 0 ? void 0 : n[e][1];
}
function uh(t) {
  return qn(this.__data__, t) > -1;
}
function lh(t, n) {
  var e = this.__data__, r = qn(e, t);
  return r < 0 ? (++this.size, e.push([t, n])) : e[r][1] = n, this;
}
function ot(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
ot.prototype.clear = rh;
ot.prototype.delete = ah;
ot.prototype.get = sh;
ot.prototype.has = uh;
ot.prototype.set = lh;
var Zt = bt(it, "Map");
function ch() {
  this.size = 0, this.__data__ = {
    hash: new mt(),
    map: new (Zt || ot)(),
    string: new mt()
  };
}
function fh(t) {
  var n = typeof t;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? t !== "__proto__" : t === null;
}
function Xn(t, n) {
  var e = t.__data__;
  return fh(n) ? e[typeof n == "string" ? "string" : "hash"] : e.map;
}
function hh(t) {
  var n = Xn(this, t).delete(t);
  return this.size -= n ? 1 : 0, n;
}
function dh(t) {
  return Xn(this, t).get(t);
}
function ph(t) {
  return Xn(this, t).has(t);
}
function gh(t, n) {
  var e = Xn(this, t), r = e.size;
  return e.set(t, n), this.size += e.size == r ? 0 : 1, this;
}
function at(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.clear(); ++n < e; ) {
    var r = t[n];
    this.set(r[0], r[1]);
  }
}
at.prototype.clear = ch;
at.prototype.delete = hh;
at.prototype.get = dh;
at.prototype.has = ph;
at.prototype.set = gh;
var yh = "Expected a function";
function Ye(t, n) {
  if (typeof t != "function" || n != null && typeof n != "function")
    throw new TypeError(yh);
  var e = function() {
    var r = arguments, i = n ? n.apply(this, r) : r[0], o = e.cache;
    if (o.has(i))
      return o.get(i);
    var a = t.apply(this, r);
    return e.cache = o.set(i, a) || o, a;
  };
  return e.cache = new (Ye.Cache || at)(), e;
}
Ye.Cache = at;
var _h = 500;
function mh(t) {
  var n = Ye(t, function(r) {
    return e.size === _h && e.clear(), r;
  }), e = n.cache;
  return n;
}
var vh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, wh = /\\(\\)?/g, xh = mh(function(t) {
  var n = [];
  return t.charCodeAt(0) === 46 && n.push(""), t.replace(vh, function(e, r, i, o) {
    n.push(i ? o.replace(wh, "$1") : r || e);
  }), n;
});
function Gn(t) {
  return t == null ? "" : Ni(t);
}
function Un(t, n) {
  return F(t) ? t : Ue(t, n) ? [t] : xh(Gn(t));
}
function nn(t) {
  if (typeof t == "string" || Qt(t))
    return t;
  var n = t + "";
  return n == "0" && 1 / t == -1 / 0 ? "-0" : n;
}
function Ve(t, n) {
  n = Un(n, t);
  for (var e = 0, r = n.length; t != null && e < r; )
    t = t[nn(n[e++])];
  return e && e == r ? t : void 0;
}
function bh(t, n, e) {
  var r = t == null ? void 0 : Ve(t, n);
  return r === void 0 ? e : r;
}
function Ke(t, n) {
  for (var e = -1, r = n.length, i = t.length; ++e < r; )
    t[i + e] = n[e];
  return t;
}
var Rr = Z ? Z.isConcatSpreadable : void 0;
function Mh(t) {
  return F(t) || Ge(t) || !!(Rr && t && t[Rr]);
}
function $h(t, n, e, r, i) {
  var o = -1, a = t.length;
  for (e || (e = Mh), i || (i = []); ++o < a; ) {
    var s = t[o];
    e(s) ? Ke(i, s) : i[i.length] = s;
  }
  return i;
}
function Ah(t) {
  var n = t == null ? 0 : t.length;
  return n ? $h(t) : [];
}
var Th = Di(Object.getPrototypeOf, Object);
function Sh(t, n, e) {
  var r = -1, i = t.length;
  n < 0 && (n = -n > i ? 0 : i + n), e = e > i ? i : e, e < 0 && (e += i), i = n > e ? 0 : e - n >>> 0, n >>>= 0;
  for (var o = Array(i); ++r < i; )
    o[r] = t[r + n];
  return o;
}
function Ph(t, n, e) {
  var r = t.length;
  return e = e === void 0 ? r : e, Sh(t, n, e);
}
var Eh = "\\ud800-\\udfff", Nh = "\\u0300-\\u036f", kh = "\\ufe20-\\ufe2f", zh = "\\u20d0-\\u20ff", Oh = Nh + kh + zh, Ih = "\\ufe0e\\ufe0f", Ch = "\\u200d", Rh = RegExp("[" + Ch + Eh + Oh + Ih + "]");
function Hi(t) {
  return Rh.test(t);
}
function Fh(t) {
  return t.split("");
}
var Bi = "\\ud800-\\udfff", Lh = "\\u0300-\\u036f", Dh = "\\ufe20-\\ufe2f", Hh = "\\u20d0-\\u20ff", Bh = Lh + Dh + Hh, qh = "\\ufe0e\\ufe0f", Xh = "[" + Bi + "]", $e = "[" + Bh + "]", Ae = "\\ud83c[\\udffb-\\udfff]", Gh = "(?:" + $e + "|" + Ae + ")", qi = "[^" + Bi + "]", Xi = "(?:\\ud83c[\\udde6-\\uddff]){2}", Gi = "[\\ud800-\\udbff][\\udc00-\\udfff]", Uh = "\\u200d", Ui = Gh + "?", Yi = "[" + qh + "]?", Yh = "(?:" + Uh + "(?:" + [qi, Xi, Gi].join("|") + ")" + Yi + Ui + ")*", Vh = Yi + Ui + Yh, Kh = "(?:" + [qi + $e + "?", $e, Xi, Gi, Xh].join("|") + ")", Wh = RegExp(Ae + "(?=" + Ae + ")|" + Kh + Vh, "g");
function Zh(t) {
  return t.match(Wh) || [];
}
function jh(t) {
  return Hi(t) ? Zh(t) : Fh(t);
}
function Jh(t) {
  return function(n) {
    n = Gn(n);
    var e = Hi(n) ? jh(n) : void 0, r = e ? e[0] : n.charAt(0), i = e ? Ph(e, 1).join("") : n.slice(1);
    return r[t]() + i;
  };
}
var Qh = Jh("toUpperCase");
function td(t) {
  return Qh(Gn(t).toLowerCase());
}
function nd() {
  this.__data__ = new ot(), this.size = 0;
}
function ed(t) {
  var n = this.__data__, e = n.delete(t);
  return this.size = n.size, e;
}
function rd(t) {
  return this.__data__.get(t);
}
function id(t) {
  return this.__data__.has(t);
}
var od = 200;
function ad(t, n) {
  var e = this.__data__;
  if (e instanceof ot) {
    var r = e.__data__;
    if (!Zt || r.length < od - 1)
      return r.push([t, n]), this.size = ++e.size, this;
    e = this.__data__ = new at(r);
  }
  return e.set(t, n), this.size = e.size, this;
}
function tt(t) {
  var n = this.__data__ = new ot(t);
  this.size = n.size;
}
tt.prototype.clear = nd;
tt.prototype.delete = ed;
tt.prototype.get = rd;
tt.prototype.has = id;
tt.prototype.set = ad;
function We(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length, i = 0, o = []; ++e < r; ) {
    var a = t[e];
    n(a, e, t) && (o[i++] = a);
  }
  return o;
}
function Vi() {
  return [];
}
var sd = Object.prototype, ud = sd.propertyIsEnumerable, Fr = Object.getOwnPropertySymbols, Ki = Fr ? function(t) {
  return t == null ? [] : (t = Object(t), We(Fr(t), function(n) {
    return ud.call(t, n);
  }));
} : Vi, ld = Object.getOwnPropertySymbols, cd = ld ? function(t) {
  for (var n = []; t; )
    Ke(n, Ki(t)), t = Th(t);
  return n;
} : Vi;
function Wi(t, n, e) {
  var r = n(t);
  return F(t) ? r : Ke(r, e(t));
}
function Lr(t) {
  return Wi(t, tn, Ki);
}
function fd(t) {
  return Wi(t, Xf, cd);
}
var Te = bt(it, "DataView"), Se = bt(it, "Promise"), Pe = bt(it, "Set"), Dr = "[object Map]", hd = "[object Object]", Hr = "[object Promise]", Br = "[object Set]", qr = "[object WeakMap]", Xr = "[object DataView]", dd = xt(Te), pd = xt(Zt), gd = xt(Se), yd = xt(Pe), _d = xt(be), Q = wt;
(Te && Q(new Te(new ArrayBuffer(1))) != Xr || Zt && Q(new Zt()) != Dr || Se && Q(Se.resolve()) != Hr || Pe && Q(new Pe()) != Br || be && Q(new be()) != qr) && (Q = function(t) {
  var n = wt(t), e = n == hd ? t.constructor : void 0, r = e ? xt(e) : "";
  if (r)
    switch (r) {
      case dd:
        return Xr;
      case pd:
        return Dr;
      case gd:
        return Hr;
      case yd:
        return Br;
      case _d:
        return qr;
    }
  return n;
});
var Gr = it.Uint8Array, md = "__lodash_hash_undefined__";
function vd(t) {
  return this.__data__.set(t, md), this;
}
function wd(t) {
  return this.__data__.has(t);
}
function Pn(t) {
  var n = -1, e = t == null ? 0 : t.length;
  for (this.__data__ = new at(); ++n < e; )
    this.add(t[n]);
}
Pn.prototype.add = Pn.prototype.push = vd;
Pn.prototype.has = wd;
function xd(t, n) {
  for (var e = -1, r = t == null ? 0 : t.length; ++e < r; )
    if (n(t[e], e, t))
      return !0;
  return !1;
}
function bd(t, n) {
  return t.has(n);
}
var Md = 1, $d = 2;
function Zi(t, n, e, r, i, o) {
  var a = e & Md, s = t.length, u = n.length;
  if (s != u && !(a && u > s))
    return !1;
  var l = o.get(t), h = o.get(n);
  if (l && h)
    return l == n && h == t;
  var f = -1, c = !0, d = e & $d ? new Pn() : void 0;
  for (o.set(t, n), o.set(n, t); ++f < s; ) {
    var p = t[f], _ = n[f];
    if (r)
      var x = a ? r(_, p, f, n, t, o) : r(p, _, f, t, n, o);
    if (x !== void 0) {
      if (x)
        continue;
      c = !1;
      break;
    }
    if (d) {
      if (!xd(n, function(y, M) {
        if (!bd(d, M) && (p === y || i(p, y, e, r, o)))
          return d.push(M);
      })) {
        c = !1;
        break;
      }
    } else if (!(p === _ || i(p, _, e, r, o))) {
      c = !1;
      break;
    }
  }
  return o.delete(t), o.delete(n), c;
}
function ji(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r, i) {
    e[++n] = [i, r];
  }), e;
}
function Ad(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = r;
  }), e;
}
var Td = 1, Sd = 2, Pd = "[object Boolean]", Ed = "[object Date]", Nd = "[object Error]", kd = "[object Map]", zd = "[object Number]", Od = "[object RegExp]", Id = "[object Set]", Cd = "[object String]", Rd = "[object Symbol]", Fd = "[object ArrayBuffer]", Ld = "[object DataView]", Ur = Z ? Z.prototype : void 0, oe = Ur ? Ur.valueOf : void 0;
function Dd(t, n, e, r, i, o, a) {
  switch (e) {
    case Ld:
      if (t.byteLength != n.byteLength || t.byteOffset != n.byteOffset)
        return !1;
      t = t.buffer, n = n.buffer;
    case Fd:
      return !(t.byteLength != n.byteLength || !o(new Gr(t), new Gr(n)));
    case Pd:
    case Ed:
    case zd:
      return Bn(+t, +n);
    case Nd:
      return t.name == n.name && t.message == n.message;
    case Od:
    case Cd:
      return t == n + "";
    case kd:
      var s = ji;
    case Id:
      var u = r & Td;
      if (s || (s = Ad), t.size != n.size && !u)
        return !1;
      var l = a.get(t);
      if (l)
        return l == n;
      r |= Sd, a.set(t, n);
      var h = Zi(s(t), s(n), r, i, o, a);
      return a.delete(t), h;
    case Rd:
      if (oe)
        return oe.call(t) == oe.call(n);
  }
  return !1;
}
var Hd = 1, Bd = Object.prototype, qd = Bd.hasOwnProperty;
function Xd(t, n, e, r, i, o) {
  var a = e & Hd, s = Lr(t), u = s.length, l = Lr(n), h = l.length;
  if (u != h && !a)
    return !1;
  for (var f = u; f--; ) {
    var c = s[f];
    if (!(a ? c in n : qd.call(n, c)))
      return !1;
  }
  var d = o.get(t), p = o.get(n);
  if (d && p)
    return d == n && p == t;
  var _ = !0;
  o.set(t, n), o.set(n, t);
  for (var x = a; ++f < u; ) {
    c = s[f];
    var y = t[c], M = n[c];
    if (r)
      var $ = a ? r(M, y, c, n, t, o) : r(y, M, c, t, n, o);
    if (!($ === void 0 ? y === M || i(y, M, e, r, o) : $)) {
      _ = !1;
      break;
    }
    x || (x = c == "constructor");
  }
  if (_ && !x) {
    var g = t.constructor, m = n.constructor;
    g != m && "constructor" in t && "constructor" in n && !(typeof g == "function" && g instanceof g && typeof m == "function" && m instanceof m) && (_ = !1);
  }
  return o.delete(t), o.delete(n), _;
}
var Gd = 1, Yr = "[object Arguments]", Vr = "[object Array]", cn = "[object Object]", Ud = Object.prototype, Kr = Ud.hasOwnProperty;
function Yd(t, n, e, r, i, o) {
  var a = F(t), s = F(n), u = a ? Vr : Q(t), l = s ? Vr : Q(n);
  u = u == Yr ? cn : u, l = l == Yr ? cn : l;
  var h = u == cn, f = l == cn, c = u == l;
  if (c && Me(t)) {
    if (!Me(n))
      return !1;
    a = !0, h = !1;
  }
  if (c && !h)
    return o || (o = new tt()), a || Fi(t) ? Zi(t, n, e, r, i, o) : Dd(t, n, u, e, r, i, o);
  if (!(e & Gd)) {
    var d = h && Kr.call(t, "__wrapped__"), p = f && Kr.call(n, "__wrapped__");
    if (d || p) {
      var _ = d ? t.value() : t, x = p ? n.value() : n;
      return o || (o = new tt()), i(_, x, e, r, o);
    }
  }
  return c ? (o || (o = new tt()), Xd(t, n, e, r, i, o)) : !1;
}
function Ze(t, n, e, r, i) {
  return t === n ? !0 : t == null || n == null || !lt(t) && !lt(n) ? t !== t && n !== n : Yd(t, n, e, r, Ze, i);
}
var Vd = 1, Kd = 2;
function Wd(t, n, e, r) {
  var i = e.length, o = i;
  if (t == null)
    return !o;
  for (t = Object(t); i--; ) {
    var a = e[i];
    if (a[2] ? a[1] !== t[a[0]] : !(a[0] in t))
      return !1;
  }
  for (; ++i < o; ) {
    a = e[i];
    var s = a[0], u = t[s], l = a[1];
    if (a[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var h = new tt(), f;
      if (!(f === void 0 ? Ze(l, u, Vd | Kd, r, h) : f))
        return !1;
    }
  }
  return !0;
}
function Ji(t) {
  return t === t && !rt(t);
}
function Zd(t) {
  for (var n = tn(t), e = n.length; e--; ) {
    var r = n[e], i = t[r];
    n[e] = [r, i, Ji(i)];
  }
  return n;
}
function Qi(t, n) {
  return function(e) {
    return e == null ? !1 : e[t] === n && (n !== void 0 || t in Object(e));
  };
}
function jd(t) {
  var n = Zd(t);
  return n.length == 1 && n[0][2] ? Qi(n[0][0], n[0][1]) : function(e) {
    return e === t || Wd(e, t, n);
  };
}
function Jd(t, n) {
  return t != null && n in Object(t);
}
function to(t, n, e) {
  n = Un(n, t);
  for (var r = -1, i = n.length, o = !1; ++r < i; ) {
    var a = nn(n[r]);
    if (!(o = t != null && e(t, a)))
      break;
    t = t[a];
  }
  return o || ++r != i ? o : (i = t == null ? 0 : t.length, !!i && Xe(i) && Hn(a, i) && (F(t) || Ge(t)));
}
function Qd(t, n) {
  return t != null && to(t, n, Jd);
}
var tp = 1, np = 2;
function ep(t, n) {
  return Ue(t) && Ji(n) ? Qi(nn(t), n) : function(e) {
    var r = bh(e, t);
    return r === void 0 && r === n ? Qd(e, t) : Ze(n, r, tp | np);
  };
}
function no(t) {
  return function(n) {
    return n == null ? void 0 : n[t];
  };
}
function rp(t) {
  return function(n) {
    return Ve(n, t);
  };
}
function ip(t) {
  return Ue(t) ? no(nn(t)) : rp(t);
}
function Mt(t) {
  return typeof t == "function" ? t : t == null ? Dn : typeof t == "object" ? F(t) ? ep(t[0], t[1]) : jd(t) : ip(t);
}
function op(t) {
  return function(n, e, r) {
    for (var i = -1, o = Object(n), a = r(n), s = a.length; s--; ) {
      var u = a[++i];
      if (e(o[u], u, o) === !1)
        break;
    }
    return n;
  };
}
var ap = op();
function sp(t, n) {
  return t && ap(t, n, tn);
}
function up(t, n) {
  return function(e, r) {
    if (e == null)
      return e;
    if (!Rt(e))
      return t(e, r);
    for (var i = e.length, o = -1, a = Object(e); ++o < i && r(a[o], o, a) !== !1; )
      ;
    return e;
  };
}
var je = up(sp);
function lp(t) {
  return lt(t) && Rt(t);
}
function cp(t) {
  return typeof t == "function" ? t : Dn;
}
function vt(t, n) {
  var e = F(t) ? Bc : je;
  return e(t, cp(n));
}
function fp(t, n) {
  return Ct(n, function(e) {
    return [e, t[e]];
  });
}
function hp(t) {
  var n = -1, e = Array(t.size);
  return t.forEach(function(r) {
    e[++n] = [r, r];
  }), e;
}
var dp = "[object Map]", pp = "[object Set]";
function gp(t) {
  return function(n) {
    var e = Q(n);
    return e == dp ? ji(n) : e == pp ? hp(n) : fp(n, t(n));
  };
}
var eo = gp(tn);
function yp(t, n) {
  var e = [];
  return je(t, function(r, i, o) {
    n(r, i, o) && e.push(r);
  }), e;
}
function _p(t, n) {
  var e = F(t) ? We : yp;
  return e(t, Mt(n));
}
function mp(t, n) {
  var e = -1, r = Rt(t) ? Array(t.length) : [];
  return je(t, function(i, o, a) {
    r[++e] = n(i, o, a);
  }), r;
}
function It(t, n) {
  var e = F(t) ? Ct : mp;
  return e(t, Mt(n));
}
function vp(t, n) {
  return t > n;
}
var wp = Object.prototype, xp = wp.hasOwnProperty;
function bp(t, n) {
  return t != null && xp.call(t, n);
}
function Mp(t, n) {
  return t != null && to(t, n, bp);
}
function $p(t, n) {
  return Ct(n, function(e) {
    return t[e];
  });
}
function Ap(t) {
  return t == null ? [] : $p(t, tn(t));
}
var Tp = "[object Boolean]";
function Sp(t) {
  return t === !0 || t === !1 || lt(t) && wt(t) == Tp;
}
function Pp(t, n) {
  return t < n;
}
function ro(t, n, e) {
  for (var r = -1, i = t.length; ++r < i; ) {
    var o = t[r], a = n(o);
    if (a != null && (s === void 0 ? a === a && !Qt(a) : e(a, s)))
      var s = a, u = o;
  }
  return u;
}
function Ep(t, n) {
  return t && t.length ? ro(t, Mt(n), vp) : void 0;
}
function io(t, n) {
  for (var e, r = -1, i = t.length; ++r < i; ) {
    var o = n(t[r]);
    o !== void 0 && (e = e === void 0 ? o : e + o);
  }
  return e;
}
var Np = NaN;
function kp(t, n) {
  var e = t == null ? 0 : t.length;
  return e ? io(t, n) / e : Np;
}
function oo(t, n) {
  return kp(t, Mt(n));
}
function zp(t, n) {
  return t && t.length ? ro(t, Mt(n), Pp) : void 0;
}
function Op(t, n, e, r) {
  if (!rt(t))
    return t;
  n = Un(n, t);
  for (var i = -1, o = n.length, a = o - 1, s = t; s != null && ++i < o; ) {
    var u = nn(n[i]), l = e;
    if (u === "__proto__" || u === "constructor" || u === "prototype")
      return t;
    if (i != a) {
      var h = s[u];
      l = void 0, l === void 0 && (l = rt(h) ? h : Hn(n[i + 1]) ? [] : {});
    }
    Vc(s, u, l), s = s[u];
  }
  return t;
}
function Ip(t, n, e) {
  for (var r = -1, i = n.length, o = {}; ++r < i; ) {
    var a = n[r], s = Ve(t, a);
    e(s, a) && Op(o, Un(a, t), s);
  }
  return o;
}
function ao(t, n) {
  if (t == null)
    return {};
  var e = Ct(fd(t), function(r) {
    return [r];
  });
  return n = Mt(n), Ip(t, e, function(r, i) {
    return n(r, i[0]);
  });
}
var Cp = Math.floor, Rp = Math.random;
function Fp(t, n) {
  return t + Cp(Rp() * (n - t + 1));
}
var Lp = Math.ceil, Dp = Math.max;
function Hp(t, n, e, r) {
  for (var i = -1, o = Dp(Lp((n - t) / (e || 1)), 0), a = Array(o); o--; )
    a[++i] = t, t += e;
  return a;
}
function Bp(t) {
  return function(n, e, r) {
    return r && typeof r != "number" && jc(n, e, r) && (e = r = void 0), n = ee(n), e === void 0 ? (e = n, n = 0) : e = ee(e), r = r === void 0 ? n < e ? 1 : -1 : ee(r), Hp(n, e, r);
  };
}
var Yn = Bp();
function qp() {
  var t = arguments, n = Gn(t[0]);
  return t.length < 3 ? n : n.replace(t[1], t[2]);
}
function so(t, n) {
  var e = -1, r = t.length, i = r - 1;
  for (n = n === void 0 ? r : n; ++e < n; ) {
    var o = Fp(e, i), a = t[o];
    t[o] = t[e], t[e] = a;
  }
  return t.length = n, t;
}
function Xp(t) {
  return so(Oc(t));
}
function Gp(t) {
  return so(Ap(t));
}
function Up(t) {
  var n = F(t) ? Xp : Gp;
  return n(t);
}
function En(t, n) {
  return t && t.length ? io(t, Mt(n)) : 0;
}
var Yp = Math.max;
function Vp(t) {
  if (!(t && t.length))
    return [];
  var n = 0;
  return t = We(t, function(e) {
    if (lp(e))
      return n = Yp(e.length, n), !0;
  }), Oi(n, function(e) {
    return Ct(t, no(e));
  });
}
var Nn = Wc(Vp);
const Kp = (t, n, e = 12, r = 12) => {
  const i = H().domain([0, e]).range([0, t]), o = H().domain([0, r]).range([0, n]);
  return {
    points: function() {
      return Yn((e + 1) * (r + 1)).map(function(u) {
        return { m: u % (e + 1), n: Math.floor(u / (e + 1)), x: i(u % (e + 1)), y: o(Math.floor(u / (e + 1))) };
      });
    },
    position: function(u, l) {
      typeof u == "number" && (u = [u]), typeof l == "number" && (l = [l]);
      const h = Ah(It(l, function(f) {
        return It(
          u,
          function(c) {
            return { x: i(c), y: o(f) };
          }
        );
      }));
      return h.length == 1 ? h[0] : h;
    }
  };
}, Wp = "_widget_18g36_1", Zp = "_label_18g36_19", jp = "_lit_18g36_24", Jp = "_button_18g36_29", Qp = "_symbol_18g36_29", t0 = "_radio_18g36_29", n0 = "_radiobutton_18g36_29", e0 = "_selected_18g36_35", r0 = "_toggle_18g36_35", i0 = "_slider_18g36_44", o0 = "_track_18g36_44", a0 = "_track_overlay_18g36_48", s0 = "_handle_18g36_55", v = {
  widget: Wp,
  label: Zp,
  lit: jp,
  button: Jp,
  symbol: Qp,
  radio: t0,
  radiobutton: n0,
  selected: e0,
  toggle: r0,
  slider: i0,
  track: o0,
  track_overlay: a0,
  handle: s0
}, Je = () => {
  const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890", e = n.length;
  let r = "";
  for (let i = 0; i < 10; ++i)
    r += n[Math.floor(Math.random() * e)];
  return r;
}, Qe = (t, n, e) => {
  var r, i, o, a;
  switch (e) {
    case "top":
      r = 0, i = -n / 2 - 5, o = "middle", a = "bottom";
      break;
    case "bottom":
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
      break;
    case "left":
      r = -t / 2 - 5, i = 0, o = "end", a = "middle";
      break;
    case "right":
      r = t / 2 + 5, i = 0, o = "start", a = "middle";
      break;
    default:
      r = 0, i = n / 2 + 5, o = "middle", a = "hanging";
  }
  return { x: r, y: i, anchor: o, valign: a };
}, u0 = (t = 1) => {
  const n = K();
  return n.moveTo(t * 1, t * 0), n.lineTo(t * -0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * -0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, l0 = (t = 1) => {
  const n = K(), e = 0.7;
  return n.moveTo(e * t * (1 + 0.75), e * t * 0), n.lineTo(e * t * (-0.5 + 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 + 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.moveTo(e * t * (1 - 0.75), e * t * 0), n.lineTo(e * t * (-0.5 - 0.75), e * t * (Math.sqrt(3) / 2)), n.lineTo(e * t * (-0.5 - 0.75), e * t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, c0 = (t = 1) => {
  const n = K();
  return n.moveTo(-t * 1, t * 0), n.lineTo(t * 0.5, t * (Math.sqrt(3) / 2)), n.lineTo(t * 0.5, t * (-Math.sqrt(3) / 2)), n.closePath(), n.toString();
}, f0 = (t = 1) => {
  const n = 0.3333333333333333, e = 0.9;
  var r = K();
  return r.moveTo(t * e, t * e), r.lineTo(t * e, t * -0.9), r.lineTo(t * (e * n), t * -0.9), r.lineTo(t * (e * n), t * e), r.closePath(), r.moveTo(-t * e, t * e), r.lineTo(-t * e, t * -0.9), r.lineTo(-t * (e * n), t * -0.9), r.lineTo(-t * (e * n), t * e), r.closePath(), r.toString();
}, h0 = (t = 1) => {
  const n = K(), e = Math.PI / 2.5, r = e / 2, i = 2 * Math.PI - e / 2, o = 0.5, a = 0.6, s = 0.6, u = [t * (1 - o / 2) * Math.cos(i), t * (1 - o / 2) * Math.sin(i)], l = [t * s * Math.cos(i + Math.PI / 2), t * s * Math.sin(i + Math.PI / 2)];
  return n.moveTo(t * Math.cos(i), t * Math.sin(i)), n.arc(0, 0, t, i, r, !0), n.lineTo(t * (1 - o) * Math.cos(r), t * (1 - o) * Math.sin(r)), n.arc(0, 0, t * (1 - o), r, i, !1), n.lineTo(t * (1 - a - o / 2) * Math.cos(i), t * (1 - a - o / 2) * Math.sin(i)), n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(i), t * (1 + a - o / 2) * Math.sin(i)), n.closePath(), n.toString();
}, d0 = (t = 1) => {
  const n = K(), e = Math.PI / 10, r = t / 2, i = Math.PI - e, o = e, a = -e, s = Math.PI + e;
  return n.arc(0, 0, r, s, a), n.lineTo(t, r * Math.sin(s)), n.lineTo(t, -t), n.lineTo(-t, -t), n.lineTo(-t, r * Math.sin(s)), n.closePath(), n.arc(0, 0, r, o, i), n.lineTo(-t, r * Math.sin(i)), n.lineTo(-t, t), n.lineTo(t, t), n.lineTo(t, r * Math.sin(i)), n.closePath(), n.toString();
}, p0 = (t = 1) => {
  const n = K(), e = Math.PI / 2.5, r = e / 2 + Math.PI, i = 2 * Math.PI - e / 2 + Math.PI, o = 0.5, a = 0.6, s = -0.6;
  n.moveTo(t * Math.cos(r), t * Math.sin(r)), n.arc(0, 0, t, r, i, !1), n.lineTo(t * (1 - o) * Math.cos(i), t * (1 - o) * Math.sin(i)), n.arc(0, 0, t * (1 - o), i, r, !0), n.lineTo(t * (1 - a - o / 2) * Math.cos(r), t * (1 - a - o / 2) * Math.sin(r));
  var u = [t * (1 - o / 2) * Math.cos(r), t * (1 - o / 2) * Math.sin(r)], l = [t * s * Math.cos(r + Math.PI / 2), t * s * Math.sin(r + Math.PI / 2)];
  return n.lineTo(u[0] + l[0], u[1] + l[1]), n.lineTo(t * (1 + a - o / 2) * Math.cos(r), t * (1 + a - o / 2) * Math.sin(r)), n.closePath(), n.toString();
}, g0 = (t = 1) => {
  var n = K(), e = 0.9;
  return n.moveTo(t * e, t * e), n.lineTo(t * -0.9, t * e), n.lineTo(t * -0.9, t * -0.9), n.lineTo(t * e, t * -0.9), n.closePath(), n.toString();
}, y0 = (t = 1) => {
  const n = K(), e = 0, r = 2 * Math.PI;
  return n.moveTo(t * Math.cos(e), t * Math.sin(e)), n.arc(0, 0, t, e, r, !0), n.closePath(), n.toString();
}, Ee = (t) => {
  switch (t) {
    case "play":
      return u0;
    case "forward":
      return l0;
    case "back":
      return c0;
    case "pause":
      return f0;
    case "reload":
      return h0;
    case "capture":
      return d0;
    case "rewind":
      return p0;
    case "stop":
      return g0;
    case "push":
      return y0;
  }
}, Vn = () => {
  const t = "button";
  var n = Je(), e = 50, r = 0.3, i = "round", o = { x: 0, y: 0 }, a = null, s = "bottom", u = null, l = function(p) {
  }, h = ["play"], f = 0;
  return {
    type: t,
    id: function(p) {
      return typeof p > "u" ? n : (n = p, this);
    },
    size: function(p) {
      return typeof p > "u" ? e : (e = p, this);
    },
    symbolsize: function(p) {
      return typeof p > "u" ? r : (r = p, this);
    },
    shape: function(p) {
      return typeof p > "u" ? i : (i = p, this);
    },
    position: function(p) {
      return typeof p > "u" ? o : (o = p, this);
    },
    x: function(p) {
      return typeof p > "u" ? o.x : (o.x = p, this);
    },
    y: function(p) {
      return typeof p > "u" ? o.y : (o.y = p, this);
    },
    label: function(p) {
      return typeof p > "u" ? a : (a = p, this);
    },
    labelposition: function(p) {
      return typeof p > "u" ? s : (s = p, this);
    },
    fontsize: function(p) {
      return typeof p > "u" ? u : (u = p, this);
    },
    update: function(p) {
      if (typeof p == "function")
        return l = p, this;
      l(p);
    },
    actions: function(p) {
      return typeof p > "u" ? h : (h = p, this);
    },
    value: function(p) {
      return typeof p > "u" ? f : (f = p, this);
    },
    click: function() {
      f = (f + 1) % h.length, l(), z(this.parentNode).select("." + v.symbol).attr("d", Ee(h[f])(r * e));
    },
    press: function(p) {
      f = (f + 1) % h.length, l(), p.select("#button_" + n).select("." + v.symbol).attr("d", Ee(h[f])(r * e));
    }
  };
}, _0 = () => {
  const t = "slider", n = Ln(".3f");
  var e = Je(), r = 100, i = 8, o = 10, a = !1, s = { x: 0, y: 0 }, u = "top-left", l = null, h = function(y) {
  }, f = function(y) {
  }, c = [0, 1], d = 0, p = null, _ = H().domain(c).range([0, r]).clamp(!0);
  const x = function(y, M, $ = c) {
    const g = y.select("#slider_" + e);
    _.domain($), d = M, g.selectAll("." + v.handle).transition().attr("cx", _(M)), a && g.select("." + v.label).text(p + " = " + n(d)), h(), f();
  };
  return {
    type: t,
    scale: _,
    id: function(y) {
      return typeof y > "u" ? e : (e = y, this);
    },
    label: function(y) {
      return typeof y > "u" ? p : (p = y, this);
    },
    size: function(y) {
      return typeof y > "u" ? r : (r = y, this);
    },
    girth: function(y) {
      return typeof y > "u" ? i : (i = y, this);
    },
    knob: function(y) {
      return typeof y > "u" ? o : (o = y, this);
    },
    show: function(y) {
      return typeof y > "u" ? a : (a = y, this);
    },
    position: function(y) {
      return typeof y > "u" ? s : (s = y, this);
    },
    x: function(y) {
      return typeof y > "u" ? s.x : (s.x = y, this);
    },
    y: function(y) {
      return typeof y > "u" ? s.y : (s.y = y, this);
    },
    labelposition: function(y) {
      return typeof y > "u" ? u : (u = y, this);
    },
    fontsize: function(y) {
      return typeof y > "u" ? l : (l = y, this);
    },
    update: function(y) {
      if (typeof y == "function")
        return h = y, this;
      h(y);
    },
    update_end: function(y) {
      if (typeof y == "function")
        return f = y, this;
      f(y);
    },
    range: function(y) {
      return typeof y > "u" ? c : (c = y, this);
    },
    value: function(y) {
      return typeof y > "u" ? d : (d = y, this);
    },
    reset: x,
    click: x
  };
}, m0 = () => {
  const t = "toggle";
  var n = Je(), e = 10, r = { x: 0, y: 0 }, i = null, o = "top", a = null, s = function(f) {
  }, u = 0;
  return {
    type: t,
    id: function(f) {
      return typeof f > "u" ? n : (n = f, this);
    },
    size: function(f) {
      return typeof f > "u" ? e : (e = f, this);
    },
    position: function(f) {
      return typeof f > "u" ? r : (r = f, this);
    },
    x: function(f) {
      return typeof f > "u" ? r.x : (r.x = f, this);
    },
    y: function(f) {
      return typeof f > "u" ? r.y : (r.y = f, this);
    },
    label: function(f) {
      return typeof f > "u" ? i : (i = f, this);
    },
    labelposition: function(f) {
      return typeof f > "u" ? o : (o = f, this);
    },
    fontsize: function(f) {
      return typeof f > "u" ? a : (a = f, this);
    },
    update: function(f) {
      if (typeof f == "function")
        return s = f, this;
      s(f);
    },
    value: function(f) {
      return typeof f > "u" ? u : (u = f, this);
    },
    click: function() {
      u = !u;
      const f = z(this.parentNode);
      f.select("." + v.handle).transition().attr("cx", u ? 2 * e : 0), f.classed(v.selected, u), s();
    },
    reset: function(f, c) {
      u = c;
      const d = f.select("#toggle_" + n);
      d.selectAll("." + v.handle).transition().attr("cx", u ? 2 * e : 0), d.classed(v.selected, u), s();
    }
  };
}, v0 = (t, n) => {
  const e = "button_" + t.id(), r = t.label(), i = t.labelposition(), o = document.createElementNS("http://www.w3.org/2000/svg", "g"), a = z(o).attr("class", v.widget + " " + v.button).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")");
  var s;
  if (t.shape() == "rect" ? s = a.append("rect").attr("width", t.size()).attr("height", t.size()).attr("transform", "translate(" + -t.size() / 2 + "," + -t.size() / 2 + ")").attr("rx", 5).attr("ry", 5) : s = a.append("circle").attr("r", t.size() / 2), s.attr("class", v.background).on("click", t.click).on("mouseover", function() {
    z(this).classed(v.lit, !0), z(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    z(this).classed(v.lit, !1), z(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), a.append("path").attr("d", Ee(t.actions()[t.value()])(t.symbolsize() * t.size())).attr("class", v.symbol), r) {
    const u = Qe(t.size(), t.size(), i);
    a.append("text").text(r).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + u.x + "," + u.y + ")");
  }
  return o;
}, uo = (t, n) => {
  const e = K();
  return e.moveTo(0, n / 2), e.arc(0, 0, n / 2, Math.PI / 2, 3 * Math.PI / 2, !1), e.lineTo(t, -n / 2), e.arc(t, 0, n / 2, 3 * Math.PI / 2, 2 * Math.PI + Math.PI / 2, !1), e.closePath(), e.toString();
}, w0 = (t, n) => {
  const e = Ln(".3f"), r = "slider_" + t.id();
  t.labelposition();
  const i = t.range, o = t.size();
  t.label();
  const a = t.scale;
  var s;
  const u = document.createElementNS("http://www.w3.org/2000/svg", "g");
  s = z(u).attr("class", v.widget + " " + v.slider).attr("id", r).attr("transform", "translate(" + t.x() + "," + t.y() + ")"), a.domain(i()).range([0, o]).clamp(!0);
  const l = t.knob() > t.girth() ? t.knob() : t.girth() / 2;
  s.append("path").attr("d", uo(t.size(), t.girth())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", t.knob()).attr("cx", a(t.value())), s.append("rect").attr("width", t.size() + 2 * l).attr("height", 2 * l).attr("transform", "translate(" + -l + "," + -l + ")").attr("class", v.track_overlay).on("click", function(p) {
    const _ = fe(p, this)[0];
    t.value(a.invert(_)), t.update(), t.update_end(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
  }).call(
    Os().on("drag", function(p) {
      t.value(a.invert(p.x)), t.update(), s.selectAll("." + v.handle).attr("cx", a(t.value())), t.show() && s.select("." + v.label).text(t.label() + " = " + e(t.value()));
    }).on("end", function(p) {
      t.update_end();
    })
  );
  var h, f, c, d = "bottom";
  return t.fontsize && (f = t.labelposition().match(/bottom/i) != null ? rn([t.girth() / 2, t.knob()]) + t.fontsize() / 2 : -rn([t.girth() / 2, t.knob()]) - t.fontsize() / 2), f = t.labelposition().match(/bottom/i) != null ? rn([t.girth() / 2, t.knob()]) + 7 : -rn([t.girth() / 2, t.knob()]) - 7, h = t.labelposition().match(/right/i) != null ? t.size() : t.labelposition().match(/center/i) != null ? t.size() / 2 : 0, c = t.labelposition().match(/right/i) != null ? "end" : t.labelposition().match(/center/i) != null ? "middle" : "start", d = t.labelposition().match(/bottom/i) != null ? "hanging" : "top", s.append("text").text(t.show() ? t.label() + " = " + e(t.value()) : t.label()).attr("class", v.label).style("text-anchor", c).style("alignment-baseline", d).style("font-size", t.fontsize()).style("opacity", 1).attr("transform", "translate(" + h + "," + f + ")"), u;
}, x0 = (t, n) => {
  const e = "toggle_" + t.id(), r = t.size(), i = t.label(), o = t.labelposition(), a = document.createElementNS("http://www.w3.org/2000/svg", "g"), s = z(a).attr("class", v.widget + " " + v.toggle).attr("id", e).attr("transform", "translate(" + (t.x() - r) + "," + t.y() + ")").classed(v.selected, t.value() == 1);
  if (s.append("path").attr("d", uo(2 * t.size(), 2 * t.size())).attr("class", v.track), s.append("circle").attr("class", v.handle).attr("r", r).attr("cx", t.value() ? 2 * r : 0), s.append("rect").attr("width", 4 * t.size()).attr("height", 2 * t.size()).attr("class", v.track_overlay).attr("transform", "translate(" + -t.size() + "," + -t.size() + ")").on("click", t.click), i) {
    const u = Qe(4 * t.size(), 2 * t.size(), o);
    s.append("text").text(i).attr("class", v.label).style("text-anchor", u.anchor).style("font-size", t.fontsize()).style("alignment-baseline", u.valign).attr("transform", "translate(" + (u.x + r) + "," + u.y + ")");
  }
  return a;
}, b0 = (t, n) => {
  const e = "radio_" + t.id(), r = t.labelposition(), i = t.buttonsize(), o = t.buttonsize() * (1 - t.buttonpadding()), a = t.choices().length, s = Co(a), u = H().domain([0, a - 1]).range([0, t.size()]), l = H().domain([0, a - 1]).range([0, t.size()]), h = document.createElementNS("http://www.w3.org/2000/svg", "g"), c = z(h).attr("class", v.widget + " " + v.radio).attr("id", e).attr("transform", "translate(" + t.x() + "," + t.y() + ")").selectAll("." + v.radiobutton).data(s).enter().append("g").attr("class", v.radiobutton).attr("id", (x) => "b" + x).attr("transform", (x) => t.orientation() == "vertical" ? "translate(0," + l(x) + ")" : "translate(" + u(x) + ",0)");
  var d, p;
  t.shape() == "rect" ? (d = c.append("rect").attr("width", i).attr("height", i).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -i / 2 + "," + -i / 2 + ")"), p = c.append("rect").attr("width", o).attr("height", o).attr("rx", 2).attr("ry", 2).attr("transform", "translate(" + -o / 2 + "," + -o / 2 + ")")) : (d = c.append("circle").attr("r", i / 2), p = c.append("circle").attr("r", o / 2)), d.attr("class", v.background).on("mouseover", function() {
    z(this).classed(v.lit, !0), z(this.parentNode).select("." + v.symbol).classed(v.lit, !0);
  }).on("mouseout", function() {
    z(this).classed(v.lit, !1), z(this.parentNode).select("." + v.symbol).classed(v.lit, !1);
  }), p.attr("class", v.symbol), p.filter((x) => x == t.value()).classed(v.selected, !0), c.on("click", t.click);
  const _ = Qe(t.buttonsize(), t.buttonsize(), r);
  return c.append("text").attr("class", v.label).text(function(x, y) {
    return t.choices()[y];
  }).attr("alignment-baseline", _.valign).attr("transform", "translate(" + _.x + "," + _.y + ")").style("font-size", t.fontsize()).attr("text-anchor", _.anchor), h;
}, ae = (t, n) => {
  switch (t.type) {
    case "button":
      return v0(t);
    case "slider":
      return w0(t);
    case "radio":
      return b0(t);
    case "toggle":
      return x0(t);
  }
}, M0 = (t, n) => {
  const e = Kp(
    n.controls_size.width,
    n.controls_size.height,
    n.controls_grid.nx,
    n.controls_grid.ny
  ), r = z("#" + t).classed("explorable " + n.container_class, !0), i = r.append("div").attr("id", "display").attr("class", "display-panel").classed(n.display_class, !0).classed(n.debug_lattice, n.debug).append(n.display_type).attr("width", n.display_type == "canvas" ? n.display_size.width : null).attr("height", n.display_type == "canvas" ? n.display_size.height : null).attr("viewBox", n.display_type == "canvas" ? null : "0 0 " + n.display_size.width + " " + n.display_size.height).style("width", "100%"), o = r.append("div").attr("id", "controls").attr("class", "control-panel").classed(n.controls_class, !0).classed(n.debug_lattice, n.debug).append("svg").attr("viewBox", "0 0 " + n.controls_size.width + " " + n.controls_size.height).style("width", "100%").style("height", "100%");
  return typeof n.controls_border == "string" && n.controls_border.length > 0 && o.style("border", n.controls_border), typeof n.display_border == "string" && n.display_border.length > 0 && i.style("border", n.display_border), n.debug && o.selectAll(null).data(e.points).enter().append("circle").attr("r", 2).attr("transform", (a) => "translate(" + a.x + "," + a.y + ")").style("fill", "black"), { display: i, controls: o, grid: e };
}, b = {
  widgets: {
    slider_size: 360,
    slider_gap: 1.5,
    slider_anchor: { x: 1, y: 8 },
    slider_girth: 10,
    slider_knob: 14,
    playbutton_size: 120,
    playbutton_anchor: { x: 3, y: 2 },
    backbutton_anchor: { x: 4, y: 5 },
    resetbutton_anchor: { x: 2, y: 5 },
    fieldbutton_anchor: { x: 11, y: 9.5 },
    fieldbutton_size: 25,
    toggle_anchor: { x: 1.5, y: 11 },
    toggle_label_position: "right"
  },
  simulation: {
    delay: 10
  },
  plot: {
    energy_anchor: { x: 6, y: 3 },
    magnetization_anchor: { x: 6, y: 6 },
    width: 200,
    height: 80,
    x_label: "time",
    x_range: 1e3
  }
}, O = {
  dt: 1,
  N: 100,
  local_radius: 0,
  temperature: {
    range: [0, 5],
    default: 0
  },
  magnetic_field: {
    range: [-0.1, 0.1],
    default: 0
  },
  local_average: {
    default: !1
  }
}, lo = (t) => It(eo(t), (n) => {
  n[1].id = n[0], n[1].label = qp(td(n[0]), /_/g, " ");
}), co = (t) => It(eo(t), (n) => n[1]), fo = (t, n) => vt(t, (e, r) => e.widget = n[r]), $0 = (t) => ao(t, (n) => Mp(n, "range")), A0 = (t) => ao(t, (n) => Sp(n.default));
H().domain([0, 360]).range([0, 2 * Math.PI]);
H().range([0, 360]).domain([0, 2 * Math.PI]);
const T0 = (t, n, e) => {
  var r = Math.abs(t.x - n.x), i = Math.abs(t.y - n.y);
  return r > e / 2 && (r = e - r), i > e / 2 && (i = e - i), Math.sqrt(r ** 2 + i ** 2);
}, S0 = function(t, n) {
  return [t % n, Math.floor(t / n)];
}, P0 = function(t, n) {
  return Yn(t * n).map(function(e) {
    return [e % t - (t - 1) / 2, Math.floor(e / t) - (t - 1) / 2];
  });
}, ho = (t, n) => {
  var e = Math.exp(-10 * t);
  return (1 - e) / (1 + e);
}, tr = $0(O), nr = A0(O);
lo(tr);
lo(nr);
const po = co(nr), go = co(tr), gn = It(
  go,
  (t) => _0().id(t.id).label(t.label).range(t.range).value(t.default).size(b.widgets.slider_size).girth(b.widgets.slider_girth).knob(b.widgets.slider_knob)
), Ne = It(
  po,
  (t) => m0().id(t.id).label(t.label).labelposition(b.widgets.toggle_label_position).value(t.default)
);
fo(go, gn);
fo(po, Ne);
const ut = Vn().actions(["play", "pause"]), Kn = Vn().actions(["back"]), Wn = Vn().actions(["rewind"]), er = Vn().actions(["rewind"]), E0 = [ut, Kn, Wn, er], N0 = (t, n) => {
  const e = n.position(b.widgets.slider_anchor.x, Yn(gn.length).map((o) => b.widgets.slider_anchor.y + b.widgets.slider_gap * o)), r = n.position(b.widgets.toggle_anchor.x, b.widgets.toggle_anchor.y);
  gn.forEach((o, a) => o.position(e[a])), Ne.forEach((o, a) => o.position(r)), ut.position(n.position(b.widgets.playbutton_anchor.x, b.widgets.playbutton_anchor.y)).size(b.widgets.playbutton_size), Wn.position(n.position(b.widgets.backbutton_anchor.x, b.widgets.backbutton_anchor.y)), Kn.position(n.position(b.widgets.resetbutton_anchor.x, b.widgets.resetbutton_anchor.y)), er.position(n.position(b.widgets.fieldbutton_anchor.x, b.widgets.fieldbutton_anchor.y)).size(b.widgets.fieldbutton_size), t.selectAll(null).data(gn).enter().append(ae), t.selectAll(null).data(Ne).enter().append(ae), t.selectAll(null).data(E0).enter().append(ae);
  const i = n.position(5.5, 9.5);
  t.append("circle").attr("r", 3).attr("cx", i.x).attr("cy", i.y);
}, k0 = (t) => {
  vt(tr, (n) => n.widget.reset(t, n.default)), vt(nr, (n) => n.widget.reset(t, n.default));
};
function yo(t, n) {
  return [t % n, Math.floor(t / n)];
}
const z0 = {
  n4: Nn([-1, 1, 0, 0], [0, 0, -1, 1]),
  n8: Nn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0])
};
function se(t, n, e = "periodic", r = "n8") {
  const i = [];
  return z0[r].forEach((o) => {
    var a = o[1], s = o[0];
    const u = yo(t, n), l = u[0], h = u[1], f = l + s, c = h + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && f < n && c < n && f >= 0 && c >= 0 : !(a == 0 && s == 0)) && i.push(n * ((c + n) % n) + (f + n) % n);
  }), i;
}
const O0 = function(t) {
  var n = "periodic", e = 1, r = "n8";
  const i = 2 * t + 1;
  var o = e / i, a = o;
  const s = Yn(i * i).map(function(c) {
    const d = yo(c, i);
    return {
      m: d[0],
      n: d[1],
      x: o * (d[0] + 0.5) - e / 2,
      y: a * (d[1] + 0.5) - e / 2
    };
  });
  s.forEach(function(c, d) {
    c.neighbors = se(d, i, n, r).map((p) => s[p]), c.cell = () => [
      { x: c.x + o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y + a / 2 },
      { x: c.x - o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y - a / 2 },
      { x: c.x + o / 2, y: c.y + a / 2 }
    ], c.random_interior_point = () => ({
      x: c.x + o * (Math.random() - 0.5),
      y: c.y + a * (Math.random() - 0.5)
    });
  });
  const u = function(c) {
    return typeof c < "u" ? (s.forEach(function(d) {
      d.x = (d.m + 0.5) * c / i - c / 2, d.y = (d.n + 0.5) * c / i - c / 2;
    }), e = c, o = e / i, a = e / i, this.L = e, this) : e;
  }, l = function(c) {
    return typeof c < "u" ? (s.forEach(function(d, p) {
      d.neighbors = se(p, i, c, r).map((_) => s[_]);
    }), n = c, s.forEach((d) => {
      d.is_boundary = n == "dirichlet" && (d.n == 0 || d.n == 2 * t || d.m == 0 || d.m == 2 * t);
    }), this) : n;
  }, h = function(c) {
    return typeof c < "u" ? (s.forEach(function(d, p) {
      d.neighbors = se(p, i, n, c).map((_) => s[_]);
    }), r = c, this) : r;
  }, f = function() {
    return n === "periodic" ? null : _p(s, (c) => c.n == 0 || c.n == 2 * t || c.m == 0 || c.m == 2 * t);
  };
  return {
    type: "square",
    L: e,
    N: t,
    size: i * i,
    hood: h,
    nodes: s,
    scale: u,
    boundary: l,
    boundary_cells: f
  };
};
Nn([-1, 1, 0, 0], [0, 0, -1, 1]), Nn([-1, 0, 1, 1, 1, 0, -1, -1], [-1, -1, -1, 0, 1, 1, 1, 0]);
var kn = [], nt = [];
const zn = O.N, I0 = O0(zn).scale(2 * zn);
var q = I0.nodes;
const C0 = (t, n, e) => n.filter((r) => T0(t, r, 2 * zn) < e), _o = (t) => En(t, (n) => n.state) / t.length, mo = (t) => En(t, (n) => -n.state * En(n.neighbors, (e) => e.state) / n.neighbors.length) / t.length, R0 = function(t, n, e = "periodic") {
  const r = P0(21, 21), i = [];
  return vt(r, (o) => {
    var a = o[1], s = o[0];
    const u = S0(t, n), l = u[0], h = u[1], f = l + s, c = h + a;
    (e == "dirichlet" ? !(a == 0 && s == 0) && f < n && c < n && f >= 0 && c >= 0 : !(a == 0 && s == 0)) && i.push(n * ((c + n) % n) + (f + n) % n);
  }), i;
};
vt(q, (t, n) => {
  let e = R0(n, 2 * zn + 1, "periodic").map((r) => q[r]);
  t.hood = C0(t, e, 4);
});
const F0 = () => {
  O.timer = {}, O.tick = 0, vt(q, (t) => {
    Math.random() < 0.5 ? t.state = -1 : t.state = 1;
  }), nt = [{ t: O.tick, x: _o(q) }], kn = [{ t: O.tick, x: mo(q) }];
}, L0 = () => {
  O.tick++, q = Up(q), vt(q, (t) => {
    let n = t.state, e = En(t.neighbors, (a) => a.state), r = O.temperature.widget.value(), i = O.magnetic_field.widget.value(), o = n * (e + 2 * i);
    (o <= 0 || Math.random() < Math.exp(-o / r)) && (t.state = -t.state);
  }), nt.push({ t: O.tick, x: _o(q) }), kn.push({ t: O.tick, x: mo(q) }), nt.length > b.plot.x_range && (nt.shift(), kn.shift());
}, D0 = "_plot_hjim9_5", H0 = "_axislabel_hjim9_9", B0 = "_yaxislabel_hjim9_14", q0 = "_curve_hjim9_19", X0 = "_magnetization_hjim9_24", G0 = "_energy_hjim9_28", U0 = "_yaxis_hjim9_14", Y0 = "_xaxis_hjim9_36", k = {
  plot: D0,
  axislabel: H0,
  yaxislabel: B0,
  curve: q0,
  magnetization: X0,
  energy: G0,
  yaxis: U0,
  xaxis: Y0
};
var dt = [0, b.plot.x_range];
const vo = [-1, 1], gt = H().domain(dt).range([0, b.plot.width]), Nt = H().domain(vo).range([0, -80]), ke = qo(gt).tickFormat(""), ze = Xo(Nt).tickFormat(""), wo = Si().x(function(t) {
  return gt(t.t);
}).y(function(t) {
  return Nt(t.x);
}), xo = Si().x(function(t) {
  return gt(t.t);
}).y(function(t) {
  return Nt(t.x);
}), V0 = (t, n) => {
  dt = [0, b.plot.x_range], gt.domain(dt), Nt.domain(vo);
  const e = n.position(b.plot.magnetization_anchor.x, b.plot.magnetization_anchor.y), r = n.position(b.plot.energy_anchor.x, b.plot.energy_anchor.y);
  t.selectAll("." + k.plot).remove();
  const i = t.append("g").attr("class", k.plot).attr("transform", "translate(" + e.x + "," + e.y + ")").attr("id", "mag_plot"), o = t.append("g").attr("class", k.plot).attr("transform", "translate(" + r.x + "," + r.y + ")").attr("id", "erg_plot");
  i.append("g").call(ke).attr("class", k.xaxis).attr("transform", "translate(0," + -80 / 2 + ")"), i.append("g").call(ze).attr("class", k.yaxis), o.append("g").call(ke).attr("class", k.xaxis).attr("transform", "translate(0," + -80 / 2 + ")"), o.append("g").call(ze).attr("class", k.yaxis), i.append("text").text(b.plot.x_label).attr("transform", "translate(" + gt(dt[1]) + "," + (20 - b.plot.height / 2) + ")").attr("class", k.axislabel), o.append("text").text(b.plot.x_label).attr("transform", "translate(" + gt(dt[1]) + "," + (20 - b.plot.height / 2) + ")").attr("class", k.axislabel), i.append("text").text("magnetization").attr("transform", "translate(-20," + Nt(0) + ")rotate(-90)").attr("class", k.yaxislabel), o.append("text").text("energy").attr("transform", "translate(-20," + Nt(0) + ")rotate(-90)").attr("class", k.yaxislabel), i.append("path").datum(nt).attr("d", wo).attr("class", k.curve + " " + k.magnetization), o.append("path").datum(nt).attr("d", xo).attr("class", k.curve + " " + k.energy);
}, K0 = (t) => {
  O.tick > b.plot.x_range && (dt = [zp(nt, "t").t, Ep(nt, "t").t]), gt.domain(dt), t.select("." + k.xaxis).call(ke), t.select("." + k.yaxis).call(ze), t.select("." + k.magnetization).datum(nt).attr("d", wo), t.select("." + k.energy).datum(kn).attr("d", xo);
};
var U, yn, _n;
const St = O.N, L = H().domain([-St, St]), W0 = H().domain([-St, St]).domain([-St, St]), On = H([-1, 1], ["black", "white"]), Z0 = (t, n, e, r) => {
  yn = r.display_size.width, _n = r.display_size.height, L.range([0, yn]), W0.range([0, _n]), U = t.node().getContext("2d"), U.clearRect(0, 0, yn, _n), q.forEach((i) => {
    const o = i.cell(), a = O.local_average.widget.value() ? On(ho(oo(i.hood, (s) => s.state))) : On(i.state);
    U.fillStyle = a, U.strokeStyle = a, U.lineWidth = 0, U.fillRect(L(o[0].x), L(o[0].y), L(o[2].x) - L(o[0].x), L(o[2].y) - L(o[0].y));
  }), V0(n, e);
}, bo = (t, n, e) => {
  U.clearRect(0, 0, yn, _n), q.forEach((r) => {
    const i = r.cell(), o = O.local_average.widget.value() ? On(ho(oo(r.hood, (a) => a.state))) : On(r.state);
    U.fillStyle = o, U.strokeStyle = o, U.lineWidth = 0, U.fillRect(L(i[0].x), L(i[0].y), L(i[2].x) - L(i[0].x), L(i[2].y) - L(i[0].y));
  }), K0(n);
}, j0 = bo;
function J0(t, n, e) {
  L0(), bo(t, n);
}
function Mo(t, n, e, r) {
  F0(), Z0(t, n, e, r);
}
function Q0(t, n, e) {
  j0(t, n);
}
var Wr = {};
const tg = (t, n, e) => {
  ut.value() == 1 ? Wr = fu(() => J0(t, n), b.simulation.delay) : Wr.stop();
}, ng = (t, n, e, r) => {
  Wn.update(() => k0(n)), ut.update(() => tg(t, n)), Kn.update(() => Mo(t, n, e, r)), er.update(() => O.magnetic_field.widget.reset(n, 0)), O.local_average.widget.update(() => Q0(t, n));
}, eg = {
  name: "@explorables/i_sing_well_tempered",
  title: "I sing well-tempered",
  subtitle: "The Ising Model",
  description: "This explorable illustrates the dynamics and properties of the famous Ising Model of statistical mechanics. It's a lattice of spins / magnets arranged on a lattice. Each spin interacts with its neighbors and tried to align its direction with the neighborhood.",
  author: "Dirk Brockmann (https://synosy.github.io)"
};
function rg(t, n = $o) {
  const e = M0(t, n), r = e.display, i = e.controls, o = e.grid;
  return N0(i, o), ng(r, i, o, n), Mo(r, i, o, n), {
    halt() {
      ut.value() === 1 && ut.press(i);
    },
    reset() {
      ut.value() === 1 && ut.press(i), Wn.press(i), Kn.press(i);
    },
    config: n,
    meta: eg
  };
}
export {
  $o as config,
  rg as default,
  rg as load,
  eg as meta
};
