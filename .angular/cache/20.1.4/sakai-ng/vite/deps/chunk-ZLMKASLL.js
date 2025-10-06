import {
  F,
  G,
  U,
  _,
  a,
  b,
  ee,
  i,
  m,
  p,
  q2 as q,
  s,
  s2,
  w,
  z
} from "./chunk-ICG2ZITK.js";

// node_modules/@primeuix/styled/dist/index.mjs
var rt = Object.defineProperty;
var st = Object.defineProperties;
var nt = Object.getOwnPropertyDescriptors;
var F2 = Object.getOwnPropertySymbols;
var xe = Object.prototype.hasOwnProperty;
var be = Object.prototype.propertyIsEnumerable;
var _e = (e, t, r) => t in e ? rt(e, t, { enumerable: true, configurable: true, writable: true, value: r }) : e[t] = r;
var g = (e, t) => {
  for (var r in t || (t = {})) xe.call(t, r) && _e(e, r, t[r]);
  if (F2) for (var r of F2(t)) be.call(t, r) && _e(e, r, t[r]);
  return e;
};
var $ = (e, t) => st(e, nt(t));
var v = (e, t) => {
  var r = {};
  for (var s3 in e) xe.call(e, s3) && t.indexOf(s3) < 0 && (r[s3] = e[s3]);
  if (e != null && F2) for (var s3 of F2(e)) t.indexOf(s3) < 0 && be.call(e, s3) && (r[s3] = e[s3]);
  return r;
};
function ke(...e) {
  return w(...e);
}
var at = s2();
var N = at;
var k = /{([^}]*)}/g;
var ne = /(\d+\s+[\+\-\*\/]\s+\d+)/g;
var ie = /var\([^)]+\)/g;
function oe(e) {
  return p(e) ? e.replace(/[A-Z]/g, (t, r) => r === 0 ? t : "." + t.toLowerCase()).toLowerCase() : e;
}
function Lt(e, t) {
  b(e) ? e.push(...t || []) : i(e) && Object.assign(e, t);
}
function ve(e) {
  return i(e) && e.hasOwnProperty("$value") && e.hasOwnProperty("$type") ? e.$value : e;
}
function At(e, t = "") {
  return ["opacity", "z-index", "line-height", "font-weight", "flex", "flex-grow", "flex-shrink", "order"].some((s3) => t.endsWith(s3)) ? e : `${e}`.trim().split(" ").map((a2) => _(a2) ? `${a2}px` : a2).join(" ");
}
function dt(e) {
  return e.replaceAll(/ /g, "").replace(/[^\w]/g, "-");
}
function Q(e = "", t = "") {
  return dt(`${p(e, false) && p(t, false) ? `${e}-` : e}${t}`);
}
function ae(e = "", t = "") {
  return `--${Q(e, t)}`;
}
function gt(e = "") {
  let t = (e.match(/{/g) || []).length, r = (e.match(/}/g) || []).length;
  return (t + r) % 2 !== 0;
}
function Y(e, t = "", r = "", s3 = [], i2) {
  if (p(e)) {
    let a2 = e.trim();
    if (gt(a2)) return;
    if (z(a2, k)) {
      let n = a2.replaceAll(k, (l) => {
        let c = l.replace(/{|}/g, "").split(".").filter((m2) => !s3.some((d) => z(m2, d)));
        return `var(${ae(r, ee(c.join("-")))}${s(i2) ? `, ${i2}` : ""})`;
      });
      return z(n.replace(ie, "0"), ne) ? `calc(${n})` : n;
    }
    return a2;
  } else if (_(e)) return e;
}
function Dt(e = {}, t) {
  if (p(t)) {
    let r = t.trim();
    return z(r, k) ? r.replaceAll(k, (s3) => F(e, s3.replace(/{|}/g, ""))) : r;
  } else if (_(t)) return t;
}
function Re(e, t, r) {
  p(t, false) && e.push(`${t}:${r};`);
}
function C(e, t) {
  return e ? `${e}{${t}}` : "";
}
function le(e, t) {
  if (e.indexOf("dt(") === -1) return e;
  function r(n, l) {
    let o = [], c = 0, m2 = "", d = null, u = 0;
    for (; c <= n.length; ) {
      let h = n[c];
      if ((h === '"' || h === "'" || h === "`") && n[c - 1] !== "\\" && (d = d === h ? null : h), !d && (h === "(" && u++, h === ")" && u--, (h === "," || c === n.length) && u === 0)) {
        let f = m2.trim();
        f.startsWith("dt(") ? o.push(le(f, l)) : o.push(s3(f)), m2 = "", c++;
        continue;
      }
      h !== void 0 && (m2 += h), c++;
    }
    return o;
  }
  function s3(n) {
    let l = n[0];
    if ((l === '"' || l === "'" || l === "`") && n[n.length - 1] === l) return n.slice(1, -1);
    let o = Number(n);
    return isNaN(o) ? n : o;
  }
  let i2 = [], a2 = [];
  for (let n = 0; n < e.length; n++) if (e[n] === "d" && e.slice(n, n + 3) === "dt(") a2.push(n), n += 2;
  else if (e[n] === ")" && a2.length > 0) {
    let l = a2.pop();
    a2.length === 0 && i2.push([l, n]);
  }
  if (!i2.length) return e;
  for (let n = i2.length - 1; n >= 0; n--) {
    let [l, o] = i2[n], c = e.slice(l + 3, o), m2 = r(c, t), d = t(...m2);
    e = e.slice(0, l) + d + e.slice(o + 1);
  }
  return e;
}
function Te(e) {
  return e.length === 4 ? `#${e[1]}${e[1]}${e[2]}${e[2]}${e[3]}${e[3]}` : e;
}
function Ne(e) {
  let t = parseInt(e.substring(1), 16), r = t >> 16 & 255, s3 = t >> 8 & 255, i2 = t & 255;
  return { r, g: s3, b: i2 };
}
function ht(e, t, r) {
  return `#${e.toString(16).padStart(2, "0")}${t.toString(16).padStart(2, "0")}${r.toString(16).padStart(2, "0")}`;
}
var D = (e, t, r) => {
  e = Te(e), t = Te(t);
  let a2 = (r / 100 * 2 - 1 + 1) / 2, n = 1 - a2, l = Ne(e), o = Ne(t), c = Math.round(l.r * a2 + o.r * n), m2 = Math.round(l.g * a2 + o.g * n), d = Math.round(l.b * a2 + o.b * n);
  return ht(c, m2, d);
};
var ce = (e, t) => D("#000000", e, t);
var me = (e, t) => D("#ffffff", e, t);
var Ce = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
var ft = (e) => {
  if (z(e, k)) {
    let t = e.replace(/{|}/g, "");
    return Ce.reduce((r, s3) => (r[s3] = `{${t}.${s3}}`, r), {});
  }
  return typeof e == "string" ? Ce.reduce((t, r, s3) => (t[r] = s3 <= 5 ? me(e, (5 - s3) * 19) : ce(e, (s3 - 5) * 15), t), {}) : e;
};
var rr = (e) => {
  var a2;
  let t = S.getTheme(), r = ue(t, e, void 0, "variable"), s3 = (a2 = r == null ? void 0 : r.match(/--[\w-]+/g)) == null ? void 0 : a2[0], i2 = ue(t, e, void 0, "value");
  return { name: s3, variable: r, value: i2 };
};
var E = (...e) => ue(S.getTheme(), ...e);
var ue = (e = {}, t, r, s3) => {
  if (t) {
    let { variable: i2, options: a2 } = S.defaults || {}, { prefix: n, transform: l } = (e == null ? void 0 : e.options) || a2 || {}, o = z(t, k) ? t : `{${t}}`;
    return s3 === "value" || a(s3) && l === "strict" ? S.getTokenValue(t) : Y(o, void 0, n, [i2.excludedKeyRegex], r);
  }
  return "";
};
function ar(e, ...t) {
  if (e instanceof Array) {
    let r = e.reduce((s3, i2, a2) => {
      var n;
      return s3 + i2 + ((n = m(t[a2], { dt: E })) != null ? n : "");
    }, "");
    return le(r, E);
  }
  return m(e, { dt: E });
}
var w2 = (e = {}) => {
  let { preset: t, options: r } = e;
  return { preset(s3) {
    return t = t ? U(t, s3) : s3, this;
  }, options(s3) {
    return r = r ? g(g({}, r), s3) : s3, this;
  }, primaryPalette(s3) {
    let { semantic: i2 } = t || {};
    return t = $(g({}, t), { semantic: $(g({}, i2), { primary: s3 }) }), this;
  }, surfacePalette(s3) {
    var o, c;
    let { semantic: i2 } = t || {}, a2 = s3 && Object.hasOwn(s3, "light") ? s3.light : s3, n = s3 && Object.hasOwn(s3, "dark") ? s3.dark : s3, l = { colorScheme: { light: g(g({}, (o = i2 == null ? void 0 : i2.colorScheme) == null ? void 0 : o.light), !!a2 && { surface: a2 }), dark: g(g({}, (c = i2 == null ? void 0 : i2.colorScheme) == null ? void 0 : c.dark), !!n && { surface: n }) } };
    return t = $(g({}, t), { semantic: g(g({}, i2), l) }), this;
  }, define({ useDefaultPreset: s3 = false, useDefaultOptions: i2 = false } = {}) {
    return { preset: s3 ? S.getPreset() : t, options: i2 ? S.getOptions() : r };
  }, update({ mergePresets: s3 = true, mergeOptions: i2 = true } = {}) {
    let a2 = { preset: s3 ? U(S.getPreset(), t) : t, options: i2 ? g(g({}, S.getOptions()), r) : r };
    return S.setTheme(a2), a2;
  }, use(s3) {
    let i2 = this.define(s3);
    return S.setTheme(i2), i2;
  } };
};
function de(e, t = {}) {
  let r = S.defaults.variable, { prefix: s3 = r.prefix, selector: i2 = r.selector, excludedKeyRegex: a2 = r.excludedKeyRegex } = t, n = [], l = [], o = [{ node: e, path: s3 }];
  for (; o.length; ) {
    let { node: m2, path: d } = o.pop();
    for (let u in m2) {
      let h = m2[u], f = ve(h), p2 = z(u, a2) ? Q(d) : Q(d, ee(u));
      if (i(f)) o.push({ node: f, path: p2 });
      else {
        let y = ae(p2), R = Y(f, p2, s3, [a2]);
        Re(l, y, R);
        let T = p2;
        s3 && T.startsWith(s3 + "-") && (T = T.slice(s3.length + 1)), n.push(T.replace(/-/g, "."));
      }
    }
  }
  let c = l.join("");
  return { value: l, tokens: n, declarations: c, css: C(i2, c) };
}
var b2 = { regex: { rules: { class: { pattern: /^\.([a-zA-Z][\w-]*)$/, resolve(e) {
  return { type: "class", selector: e, matched: this.pattern.test(e.trim()) };
} }, attr: { pattern: /^\[(.*)\]$/, resolve(e) {
  return { type: "attr", selector: `:root${e}`, matched: this.pattern.test(e.trim()) };
} }, media: { pattern: /^@media (.*)$/, resolve(e) {
  return { type: "media", selector: e, matched: this.pattern.test(e.trim()) };
} }, system: { pattern: /^system$/, resolve(e) {
  return { type: "system", selector: "@media (prefers-color-scheme: dark)", matched: this.pattern.test(e.trim()) };
} }, custom: { resolve(e) {
  return { type: "custom", selector: e, matched: true };
} } }, resolve(e) {
  let t = Object.keys(this.rules).filter((r) => r !== "custom").map((r) => this.rules[r]);
  return [e].flat().map((r) => {
    var s3;
    return (s3 = t.map((i2) => i2.resolve(r)).find((i2) => i2.matched)) != null ? s3 : this.rules.custom.resolve(r);
  });
} }, _toVariables(e, t) {
  return de(e, { prefix: t == null ? void 0 : t.prefix });
}, getCommon({ name: e = "", theme: t = {}, params: r, set: s3, defaults: i2 }) {
  var R, T, j, O, M, z2, V;
  let { preset: a2, options: n } = t, l, o, c, m2, d, u, h;
  if (s(a2) && n.transform !== "strict") {
    let { primitive: L, semantic: te, extend: re } = a2, f = te || {}, { colorScheme: K } = f, A = v(f, ["colorScheme"]), x = re || {}, { colorScheme: X } = x, G2 = v(x, ["colorScheme"]), p2 = K || {}, { dark: U2 } = p2, B = v(p2, ["dark"]), y = X || {}, { dark: I } = y, H = v(y, ["dark"]), W = s(L) ? this._toVariables({ primitive: L }, n) : {}, q2 = s(A) ? this._toVariables({ semantic: A }, n) : {}, Z = s(B) ? this._toVariables({ light: B }, n) : {}, pe = s(U2) ? this._toVariables({ dark: U2 }, n) : {}, fe = s(G2) ? this._toVariables({ semantic: G2 }, n) : {}, ye = s(H) ? this._toVariables({ light: H }, n) : {}, Se = s(I) ? this._toVariables({ dark: I }, n) : {}, [Me, ze] = [(R = W.declarations) != null ? R : "", W.tokens], [Ke, Xe] = [(T = q2.declarations) != null ? T : "", q2.tokens || []], [Ge, Ue] = [(j = Z.declarations) != null ? j : "", Z.tokens || []], [Be, Ie] = [(O = pe.declarations) != null ? O : "", pe.tokens || []], [He, We] = [(M = fe.declarations) != null ? M : "", fe.tokens || []], [qe, Ze] = [(z2 = ye.declarations) != null ? z2 : "", ye.tokens || []], [Fe, Je] = [(V = Se.declarations) != null ? V : "", Se.tokens || []];
    l = this.transformCSS(e, Me, "light", "variable", n, s3, i2), o = ze;
    let Qe = this.transformCSS(e, `${Ke}${Ge}`, "light", "variable", n, s3, i2), Ye = this.transformCSS(e, `${Be}`, "dark", "variable", n, s3, i2);
    c = `${Qe}${Ye}`, m2 = [.../* @__PURE__ */ new Set([...Xe, ...Ue, ...Ie])];
    let et = this.transformCSS(e, `${He}${qe}color-scheme:light`, "light", "variable", n, s3, i2), tt = this.transformCSS(e, `${Fe}color-scheme:dark`, "dark", "variable", n, s3, i2);
    d = `${et}${tt}`, u = [.../* @__PURE__ */ new Set([...We, ...Ze, ...Je])], h = m(a2.css, { dt: E });
  }
  return { primitive: { css: l, tokens: o }, semantic: { css: c, tokens: m2 }, global: { css: d, tokens: u }, style: h };
}, getPreset({ name: e = "", preset: t = {}, options: r, params: s3, set: i2, defaults: a2, selector: n }) {
  var f, x, p2;
  let l, o, c;
  if (s(t) && r.transform !== "strict") {
    let y = e.replace("-directive", ""), m2 = t, { colorScheme: R, extend: T, css: j } = m2, O = v(m2, ["colorScheme", "extend", "css"]), d = T || {}, { colorScheme: M } = d, z2 = v(d, ["colorScheme"]), u = R || {}, { dark: V } = u, L = v(u, ["dark"]), h = M || {}, { dark: te } = h, re = v(h, ["dark"]), K = s(O) ? this._toVariables({ [y]: g(g({}, O), z2) }, r) : {}, A = s(L) ? this._toVariables({ [y]: g(g({}, L), re) }, r) : {}, X = s(V) ? this._toVariables({ [y]: g(g({}, V), te) }, r) : {}, [G2, U2] = [(f = K.declarations) != null ? f : "", K.tokens || []], [B, I] = [(x = A.declarations) != null ? x : "", A.tokens || []], [H, W] = [(p2 = X.declarations) != null ? p2 : "", X.tokens || []], q2 = this.transformCSS(y, `${G2}${B}`, "light", "variable", r, i2, a2, n), Z = this.transformCSS(y, H, "dark", "variable", r, i2, a2, n);
    l = `${q2}${Z}`, o = [.../* @__PURE__ */ new Set([...U2, ...I, ...W])], c = m(j, { dt: E });
  }
  return { css: l, tokens: o, style: c };
}, getPresetC({ name: e = "", theme: t = {}, params: r, set: s3, defaults: i2 }) {
  var o;
  let { preset: a2, options: n } = t, l = (o = a2 == null ? void 0 : a2.components) == null ? void 0 : o[e];
  return this.getPreset({ name: e, preset: l, options: n, params: r, set: s3, defaults: i2 });
}, getPresetD({ name: e = "", theme: t = {}, params: r, set: s3, defaults: i2 }) {
  var c, m2;
  let a2 = e.replace("-directive", ""), { preset: n, options: l } = t, o = ((c = n == null ? void 0 : n.components) == null ? void 0 : c[a2]) || ((m2 = n == null ? void 0 : n.directives) == null ? void 0 : m2[a2]);
  return this.getPreset({ name: a2, preset: o, options: l, params: r, set: s3, defaults: i2 });
}, applyDarkColorScheme(e) {
  return !(e.darkModeSelector === "none" || e.darkModeSelector === false);
}, getColorSchemeOption(e, t) {
  var r;
  return this.applyDarkColorScheme(e) ? this.regex.resolve(e.darkModeSelector === true ? t.options.darkModeSelector : (r = e.darkModeSelector) != null ? r : t.options.darkModeSelector) : [];
}, getLayerOrder(e, t = {}, r, s3) {
  let { cssLayer: i2 } = t;
  return i2 ? `@layer ${m(i2.order || i2.name || "primeui", r)}` : "";
}, getCommonStyleSheet({ name: e = "", theme: t = {}, params: r, props: s3 = {}, set: i2, defaults: a2 }) {
  let n = this.getCommon({ name: e, theme: t, params: r, set: i2, defaults: a2 }), l = Object.entries(s3).reduce((o, [c, m2]) => o.push(`${c}="${m2}"`) && o, []).join(" ");
  return Object.entries(n || {}).reduce((o, [c, m2]) => {
    if (i(m2) && Object.hasOwn(m2, "css")) {
      let d = G(m2.css), u = `${c}-variables`;
      o.push(`<style type="text/css" data-primevue-style-id="${u}" ${l}>${d}</style>`);
    }
    return o;
  }, []).join("");
}, getStyleSheet({ name: e = "", theme: t = {}, params: r, props: s3 = {}, set: i2, defaults: a2 }) {
  var c;
  let n = { name: e, theme: t, params: r, set: i2, defaults: a2 }, l = (c = e.includes("-directive") ? this.getPresetD(n) : this.getPresetC(n)) == null ? void 0 : c.css, o = Object.entries(s3).reduce((m2, [d, u]) => m2.push(`${d}="${u}"`) && m2, []).join(" ");
  return l ? `<style type="text/css" data-primevue-style-id="${e}-variables" ${o}>${G(l)}</style>` : "";
}, createTokens(e = {}, t, r = "", s3 = "", i2 = {}) {
  let a2 = function(l, o = {}, c = []) {
    if (c.includes(this.path)) return console.warn(`Circular reference detected at ${this.path}`), { colorScheme: l, path: this.path, paths: o, value: void 0 };
    c.push(this.path), o.name = this.path, o.binding || (o.binding = {});
    let m2 = this.value;
    if (typeof this.value == "string" && k.test(this.value)) {
      let u = this.value.trim().replace(k, (h) => {
        var y;
        let f = h.slice(1, -1), x = this.tokens[f];
        if (!x) return console.warn(`Token not found for path: ${f}`), "__UNRESOLVED__";
        let p2 = x.computed(l, o, c);
        return Array.isArray(p2) && p2.length === 2 ? `light-dark(${p2[0].value},${p2[1].value})` : (y = p2 == null ? void 0 : p2.value) != null ? y : "__UNRESOLVED__";
      });
      m2 = ne.test(u.replace(ie, "0")) ? `calc(${u})` : u;
    }
    return a(o.binding) && delete o.binding, c.pop(), { colorScheme: l, path: this.path, paths: o, value: m2.includes("__UNRESOLVED__") ? void 0 : m2 };
  }, n = (l, o, c) => {
    Object.entries(l).forEach(([m2, d]) => {
      let u = z(m2, t.variable.excludedKeyRegex) ? o : o ? `${o}.${oe(m2)}` : oe(m2), h = c ? `${c}.${m2}` : m2;
      i(d) ? n(d, u, h) : (i2[u] || (i2[u] = { paths: [], computed: (f, x = {}, p2 = []) => {
        if (i2[u].paths.length === 1) return i2[u].paths[0].computed(i2[u].paths[0].scheme, x.binding, p2);
        if (f && f !== "none") for (let y = 0; y < i2[u].paths.length; y++) {
          let R = i2[u].paths[y];
          if (R.scheme === f) return R.computed(f, x.binding, p2);
        }
        return i2[u].paths.map((y) => y.computed(y.scheme, x[y.scheme], p2));
      } }), i2[u].paths.push({ path: h, value: d, scheme: h.includes("colorScheme.light") ? "light" : h.includes("colorScheme.dark") ? "dark" : "none", computed: a2, tokens: i2 }));
    });
  };
  return n(e, r, s3), i2;
}, getTokenValue(e, t, r) {
  var l;
  let i2 = ((o) => o.split(".").filter((m2) => !z(m2.toLowerCase(), r.variable.excludedKeyRegex)).join("."))(t), a2 = t.includes("colorScheme.light") ? "light" : t.includes("colorScheme.dark") ? "dark" : void 0, n = [(l = e[i2]) == null ? void 0 : l.computed(a2)].flat().filter((o) => o);
  return n.length === 1 ? n[0].value : n.reduce((o = {}, c) => {
    let u = c, { colorScheme: m2 } = u, d = v(u, ["colorScheme"]);
    return o[m2] = d, o;
  }, void 0);
}, getSelectorRule(e, t, r, s3) {
  return r === "class" || r === "attr" ? C(s(t) ? `${e}${t},${e} ${t}` : e, s3) : C(e, C(t != null ? t : ":root", s3));
}, transformCSS(e, t, r, s3, i2 = {}, a2, n, l) {
  if (s(t)) {
    let { cssLayer: o } = i2;
    if (s3 !== "style") {
      let c = this.getColorSchemeOption(i2, n);
      t = r === "dark" ? c.reduce((m2, { type: d, selector: u }) => (s(u) && (m2 += u.includes("[CSS]") ? u.replace("[CSS]", t) : this.getSelectorRule(u, l, d, t)), m2), "") : C(l != null ? l : ":root", t);
    }
    if (o) {
      let c = { name: "primeui", order: "primeui" };
      i(o) && (c.name = m(o.name, { name: e, type: s3 })), s(c.name) && (t = C(`@layer ${c.name}`, t), a2 == null || a2.layerNames(c.name));
    }
    return t;
  }
  return "";
} };
var S = { defaults: { variable: { prefix: "p", selector: ":root", excludedKeyRegex: /^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi }, options: { prefix: "p", darkModeSelector: "system", cssLayer: false } }, _theme: void 0, _layerNames: /* @__PURE__ */ new Set(), _loadedStyleNames: /* @__PURE__ */ new Set(), _loadingStyles: /* @__PURE__ */ new Set(), _tokens: {}, update(e = {}) {
  let { theme: t } = e;
  t && (this._theme = $(g({}, t), { options: g(g({}, this.defaults.options), t.options) }), this._tokens = b2.createTokens(this.preset, this.defaults), this.clearLoadedStyleNames());
}, get theme() {
  return this._theme;
}, get preset() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.preset) || {};
}, get options() {
  var e;
  return ((e = this.theme) == null ? void 0 : e.options) || {};
}, get tokens() {
  return this._tokens;
}, getTheme() {
  return this.theme;
}, setTheme(e) {
  this.update({ theme: e }), N.emit("theme:change", e);
}, getPreset() {
  return this.preset;
}, setPreset(e) {
  this._theme = $(g({}, this.theme), { preset: e }), this._tokens = b2.createTokens(e, this.defaults), this.clearLoadedStyleNames(), N.emit("preset:change", e), N.emit("theme:change", this.theme);
}, getOptions() {
  return this.options;
}, setOptions(e) {
  this._theme = $(g({}, this.theme), { options: e }), this.clearLoadedStyleNames(), N.emit("options:change", e), N.emit("theme:change", this.theme);
}, getLayerNames() {
  return [...this._layerNames];
}, setLayerNames(e) {
  this._layerNames.add(e);
}, getLoadedStyleNames() {
  return this._loadedStyleNames;
}, isStyleNameLoaded(e) {
  return this._loadedStyleNames.has(e);
}, setLoadedStyleName(e) {
  this._loadedStyleNames.add(e);
}, deleteLoadedStyleName(e) {
  this._loadedStyleNames.delete(e);
}, clearLoadedStyleNames() {
  this._loadedStyleNames.clear();
}, getTokenValue(e) {
  return b2.getTokenValue(this.tokens, e, this.defaults);
}, getCommon(e = "", t) {
  return b2.getCommon({ name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getComponent(e = "", t) {
  let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPresetC(r);
}, getDirective(e = "", t) {
  let r = { name: e, theme: this.theme, params: t, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPresetD(r);
}, getCustomPreset(e = "", t, r, s3) {
  let i2 = { name: e, preset: t, options: this.options, selector: r, params: s3, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } };
  return b2.getPreset(i2);
}, getLayerOrderCSS(e = "") {
  return b2.getLayerOrder(e, this.options, { names: this.getLayerNames() }, this.defaults);
}, transformCSS(e = "", t, r = "style", s3) {
  return b2.transformCSS(e, t, s3, r, this.options, { layerNames: this.setLayerNames.bind(this) }, this.defaults);
}, getCommonStyleSheet(e = "", t, r = {}) {
  return b2.getCommonStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, getStyleSheet(e, t, r = {}) {
  return b2.getStyleSheet({ name: e, theme: this.theme, params: t, props: r, defaults: this.defaults, set: { layerNames: this.setLayerNames.bind(this) } });
}, onStyleMounted(e) {
  this._loadingStyles.add(e);
}, onStyleUpdated(e) {
  this._loadingStyles.add(e);
}, onStyleLoaded(e, { name: t }) {
  this._loadingStyles.size && (this._loadingStyles.delete(t), N.emit(`theme:${t}:load`, e), !this._loadingStyles.size && N.emit("theme:load"));
} };
function Ve(...e) {
  let t = w(S.getPreset(), ...e);
  return S.setPreset(t), t;
}
function Le(e) {
  return w2().primaryPalette(e).update().preset;
}
function Ae(e) {
  return w2().surfacePalette(e).update().preset;
}
function De(...e) {
  let t = w(...e);
  return S.setPreset(t), t;
}
function je(e) {
  return w2(e).update({ mergePresets: false });
}
var he = class {
  constructor({ attrs: t } = {}) {
    this._styles = /* @__PURE__ */ new Map(), this._attrs = t || {};
  }
  get(t) {
    return this._styles.get(t);
  }
  has(t) {
    return this._styles.has(t);
  }
  delete(t) {
    this._styles.delete(t);
  }
  clear() {
    this._styles.clear();
  }
  add(t, r) {
    if (s(r)) {
      let s3 = { name: t, css: r, attrs: this._attrs, markup: q(r, this._attrs) };
      this._styles.set(t, $(g({}, s3), { element: this.createStyleElement(s3) }));
    }
  }
  update() {
  }
  getStyles() {
    return this._styles;
  }
  getAllCSS() {
    return [...this._styles.values()].map((t) => t.css).filter(String);
  }
  getAllMarkup() {
    return [...this._styles.values()].map((t) => t.markup).filter(String);
  }
  getAllElements() {
    return [...this._styles.values()].map((t) => t.element);
  }
  createStyleElement(t = {}) {
  }
};
var Nt = he;

export {
  ke,
  N,
  k,
  ne,
  ie,
  oe,
  Lt,
  ve,
  At,
  dt,
  Q,
  ae,
  gt,
  Y,
  Dt,
  Re,
  C,
  le,
  D,
  ce,
  me,
  ft,
  rr,
  E,
  ue,
  ar,
  w2 as w,
  de,
  b2 as b,
  S,
  Ve,
  Le,
  Ae,
  De,
  je,
  Nt
};
//# sourceMappingURL=chunk-ZLMKASLL.js.map
