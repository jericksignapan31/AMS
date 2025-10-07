import{$ as R,$b as xt,A as zo,Ab as Fe,Ac as ne,Ba as Oi,Bb as Ni,Bc as nn,Ca as Ri,Cb as Li,Da as ht,Db as mt,E as Go,Ea as St,Eb as bt,Ec as T,Fa as Qo,Fb as yt,Fc as Bi,Ga as er,Gb as vt,H as Wo,Ha as tr,Hb as $n,Ia as nr,Ib as pr,Ja as ir,Jb as pe,Jc as Rt,Ka as or,Kb as Z,Kc as vr,La as rr,Lb as be,Lc as Dr,M as Ti,Ma as ft,Mb as j,Mc as _r,Nb as Ge,Nc as D,Ob as We,Oc as Ke,Pb as ue,Qb as hr,Rb as se,S as Ko,Sa as k,Sb as ae,Ta as gt,Tb as Pi,Ua as At,Ub as fr,V as O,Va as sr,W as Qt,Wa as He,Wb as gr,X as Ee,Xa as F,Xb as Ft,Y as m,Yb as mr,Z as N,Za as tn,Zb as V,_b as It,a as C,aa as S,b as ce,ba as f,bb as q,ca as en,cb as L,da as qo,db as A,ea as Yo,eb as Bn,f as Vn,fa as Zo,fb as E,ga as Ct,gb as ar,ha as Et,hb as ee,hc as B,i as Si,ia as we,ib as lr,ja as wt,jb as te,jc as Ot,ka as P,kb as ze,kc as Un,l as de,la as Mi,ma as Fi,nb as ki,oa as Q,ob as ur,p as Ho,q as Ai,ra as Ii,rb as Y,sa as Le,sb as Tt,ta as v,tb as Mt,u as pt,va as Se,vb as cr,vc as br,wa as Xo,wb as dr,xa as xi,xb as x,xc as Vi,ya as Jo,yb as Te,yc as yr,za as Ae,zb as Me,zc as Pe}from"./chunk-4NSBCGEI.js";var wr=null;function _e(){return wr}function $i(t){wr??=t}var on=class{},rn=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>f(Sr),providedIn:"platform"})}return t})(),Cl=new R(""),Sr=(()=>{class t extends rn{_location;_history;_doc=f(P);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return _e().getBaseHref(this._doc)}onPopState(e){let n=_e().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=_e().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,o){this._history.pushState(e,n,o)}replaceState(e,n,o){this._history.replaceState(e,n,o)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function jn(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function Cr(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function Ie(t){return t&&t[0]!=="?"?`?${t}`:t}var kt=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:()=>f(Ar),providedIn:"root"})}return t})(),Hn=new R(""),Ar=(()=>{class t extends kt{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??f(P).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return jn(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+Ie(this._platformLocation.search),o=this._platformLocation.hash;return o&&e?`${n}${o}`:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Ie(r));this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Ie(r));this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(S(rn),S(Hn,8))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Tr=(()=>{class t{_subject=new de;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=Sl(Cr(Er(n))),this._locationStrategy.onPopState(o=>{this._subject.next({url:this.path(!0),pop:!0,state:o.state,type:o.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+Ie(n))}normalize(e){return t.stripTrailingSlash(wl(this._basePath,Er(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",o=null){this._locationStrategy.pushState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ie(n)),o)}replaceState(e,n="",o=null){this._locationStrategy.replaceState(o,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+Ie(n)),o)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(o=>o(e,n))}subscribe(e,n,o){return this._subject.subscribe({next:e,error:n??void 0,complete:o??void 0})}static normalizeQueryParams=Ie;static joinWithSlash=jn;static stripTrailingSlash=Cr;static \u0275fac=function(n){return new(n||t)(S(kt))};static \u0275prov=m({token:t,factory:()=>El(),providedIn:"root"})}return t})();function El(){return new Tr(S(kt))}function wl(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function Er(t){return t.replace(/\/index.html$/,"")}function Sl(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}var Al=(()=>{class t extends kt{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=jn(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,o,r){let s=this.prepareExternalUrl(o+Ie(r))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,s)}replaceState(e,n,o,r){let s=this.prepareExternalUrl(o+Ie(r))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,s)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(S(rn),S(Hn,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),kr={ADP:[void 0,void 0,0],AFN:[void 0,"\u060B",0],ALL:[void 0,void 0,0],AMD:[void 0,"\u058F",2],AOA:[void 0,"Kz"],ARS:[void 0,"$"],AUD:["A$","$"],AZN:[void 0,"\u20BC"],BAM:[void 0,"KM"],BBD:[void 0,"$"],BDT:[void 0,"\u09F3"],BHD:[void 0,void 0,3],BIF:[void 0,void 0,0],BMD:[void 0,"$"],BND:[void 0,"$"],BOB:[void 0,"Bs"],BRL:["R$"],BSD:[void 0,"$"],BWP:[void 0,"P"],BYN:[void 0,void 0,2],BYR:[void 0,void 0,0],BZD:[void 0,"$"],CAD:["CA$","$",2],CHF:[void 0,void 0,2],CLF:[void 0,void 0,4],CLP:[void 0,"$",0],CNY:["CN\xA5","\xA5"],COP:[void 0,"$",2],CRC:[void 0,"\u20A1",2],CUC:[void 0,"$"],CUP:[void 0,"$"],CZK:[void 0,"K\u010D",2],DJF:[void 0,void 0,0],DKK:[void 0,"kr",2],DOP:[void 0,"$"],EGP:[void 0,"E\xA3"],ESP:[void 0,"\u20A7",0],EUR:["\u20AC"],FJD:[void 0,"$"],FKP:[void 0,"\xA3"],GBP:["\xA3"],GEL:[void 0,"\u20BE"],GHS:[void 0,"GH\u20B5"],GIP:[void 0,"\xA3"],GNF:[void 0,"FG",0],GTQ:[void 0,"Q"],GYD:[void 0,"$",2],HKD:["HK$","$"],HNL:[void 0,"L"],HRK:[void 0,"kn"],HUF:[void 0,"Ft",2],IDR:[void 0,"Rp",2],ILS:["\u20AA"],INR:["\u20B9"],IQD:[void 0,void 0,0],IRR:[void 0,void 0,0],ISK:[void 0,"kr",0],ITL:[void 0,void 0,0],JMD:[void 0,"$"],JOD:[void 0,void 0,3],JPY:["\xA5",void 0,0],KHR:[void 0,"\u17DB"],KMF:[void 0,"CF",0],KPW:[void 0,"\u20A9",0],KRW:["\u20A9",void 0,0],KWD:[void 0,void 0,3],KYD:[void 0,"$"],KZT:[void 0,"\u20B8"],LAK:[void 0,"\u20AD",0],LBP:[void 0,"L\xA3",0],LKR:[void 0,"Rs"],LRD:[void 0,"$"],LTL:[void 0,"Lt"],LUF:[void 0,void 0,0],LVL:[void 0,"Ls"],LYD:[void 0,void 0,3],MGA:[void 0,"Ar",0],MGF:[void 0,void 0,0],MMK:[void 0,"K",0],MNT:[void 0,"\u20AE",2],MRO:[void 0,void 0,0],MUR:[void 0,"Rs",2],MXN:["MX$","$"],MYR:[void 0,"RM"],NAD:[void 0,"$"],NGN:[void 0,"\u20A6"],NIO:[void 0,"C$"],NOK:[void 0,"kr",2],NPR:[void 0,"Rs"],NZD:["NZ$","$"],OMR:[void 0,void 0,3],PHP:["\u20B1"],PKR:[void 0,"Rs",2],PLN:[void 0,"z\u0142"],PYG:[void 0,"\u20B2",0],RON:[void 0,"lei"],RSD:[void 0,void 0,0],RUB:[void 0,"\u20BD"],RWF:[void 0,"RF",0],SBD:[void 0,"$"],SEK:[void 0,"kr",2],SGD:[void 0,"$"],SHP:[void 0,"\xA3"],SLE:[void 0,void 0,2],SLL:[void 0,void 0,0],SOS:[void 0,void 0,0],SRD:[void 0,"$"],SSP:[void 0,"\xA3"],STD:[void 0,void 0,0],STN:[void 0,"Db"],SYP:[void 0,"\xA3",0],THB:[void 0,"\u0E3F"],TMM:[void 0,void 0,0],TND:[void 0,void 0,3],TOP:[void 0,"T$"],TRL:[void 0,void 0,0],TRY:[void 0,"\u20BA"],TTD:[void 0,"$"],TWD:["NT$","$",2],TZS:[void 0,void 0,2],UAH:[void 0,"\u20B4"],UGX:[void 0,void 0,0],USD:["$"],UYI:[void 0,void 0,0],UYU:[void 0,"$"],UYW:[void 0,void 0,4],UZS:[void 0,void 0,2],VEF:[void 0,"Bs",2],VND:["\u20AB",void 0,0],VUV:[void 0,void 0,0],XAF:["FCFA",void 0,0],XCD:["EC$","$"],XOF:["F\u202FCFA",void 0,0],XPF:["CFPF",void 0,0],XXX:["\xA4"],YER:[void 0,void 0,0],ZAR:[void 0,"R"],ZMK:[void 0,void 0,0],ZMW:[void 0,"ZK"],ZWD:[void 0,void 0,0]},qi=function(t){return t[t.Decimal=0]="Decimal",t[t.Percent=1]="Percent",t[t.Currency=2]="Currency",t[t.Scientific=3]="Scientific",t}(qi||{});var le=function(t){return t[t.Format=0]="Format",t[t.Standalone=1]="Standalone",t}(le||{}),$=function(t){return t[t.Narrow=0]="Narrow",t[t.Abbreviated=1]="Abbreviated",t[t.Wide=2]="Wide",t[t.Short=3]="Short",t}($||{}),he=function(t){return t[t.Short=0]="Short",t[t.Medium=1]="Medium",t[t.Long=2]="Long",t[t.Full=3]="Full",t}(he||{}),fe={Decimal:0,Group:1,List:2,PercentSign:3,PlusSign:4,MinusSign:5,Exponential:6,SuperscriptingExponent:7,PerMille:8,Infinity:9,NaN:10,TimeSeparator:11,CurrencyDecimal:12,CurrencyGroup:13};function Nr(t){return pe(t)[Z.LocaleId]}function Lr(t,i,e){let n=pe(t),o=[n[Z.DayPeriodsFormat],n[Z.DayPeriodsStandalone]],r=Ce(o,i);return Ce(r,e)}function Pr(t,i,e){let n=pe(t),o=[n[Z.DaysFormat],n[Z.DaysStandalone]],r=Ce(o,i);return Ce(r,e)}function Vr(t,i,e){let n=pe(t),o=[n[Z.MonthsFormat],n[Z.MonthsStandalone]],r=Ce(o,i);return Ce(r,e)}function Br(t,i){let n=pe(t)[Z.Eras];return Ce(n,i)}function sn(t,i){let e=pe(t);return Ce(e[Z.DateFormat],i)}function an(t,i){let e=pe(t);return Ce(e[Z.TimeFormat],i)}function ln(t,i){let n=pe(t)[Z.DateTimeFormat];return Ce(n,i)}function Ve(t,i){let e=pe(t),n=e[Z.NumberSymbols][i];if(typeof n>"u"){if(i===fe.CurrencyDecimal)return e[Z.NumberSymbols][fe.Decimal];if(i===fe.CurrencyGroup)return e[Z.NumberSymbols][fe.Group]}return n}function $r(t,i){return pe(t)[Z.NumberFormats][i]}function Tl(t){return pe(t)[Z.Currencies]}function Ur(t){if(!t[Z.ExtraData])throw new O(2303,!1)}function jr(t){let i=pe(t);return Ur(i),(i[Z.ExtraData][2]||[]).map(n=>typeof n=="string"?Ui(n):[Ui(n[0]),Ui(n[1])])}function Hr(t,i,e){let n=pe(t);Ur(n);let o=[n[Z.ExtraData][0],n[Z.ExtraData][1]],r=Ce(o,i)||[];return Ce(r,e)||[]}function Ce(t,i){for(let e=i;e>-1;e--)if(typeof t[e]<"u")return t[e];throw new O(2304,!1)}function Ui(t){let[i,e]=t.split(":");return{hours:+i,minutes:+e}}function zr(t,i,e="en"){let n=Tl(e)[t]||kr[t]||[],o=n[1];return i==="narrow"&&typeof o=="string"?o:n[0]||t}var Ml=2;function Gr(t){let i,e=kr[t];return e&&(i=e[2]),typeof i=="number"?i:Ml}var Fl=/^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,zn={},Il=/((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;function Wr(t,i,e,n){let o=Bl(t);i=qe(e,i)||i;let s=[],a;for(;i;)if(a=Il.exec(i),a){s=s.concat(a.slice(1));let c=s.pop();if(!c)break;i=c}else{s.push(i);break}let l=o.getTimezoneOffset();n&&(l=qr(n,l),o=Vl(o,n));let u="";return s.forEach(c=>{let d=Ll(c);u+=d?d(o,e,l):c==="''"?"'":c.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}function Yn(t,i,e){let n=new Date(0);return n.setFullYear(t,i,e),n.setHours(0,0,0),n}function qe(t,i){let e=Nr(t);if(zn[e]??={},zn[e][i])return zn[e][i];let n="";switch(i){case"shortDate":n=sn(t,he.Short);break;case"mediumDate":n=sn(t,he.Medium);break;case"longDate":n=sn(t,he.Long);break;case"fullDate":n=sn(t,he.Full);break;case"shortTime":n=an(t,he.Short);break;case"mediumTime":n=an(t,he.Medium);break;case"longTime":n=an(t,he.Long);break;case"fullTime":n=an(t,he.Full);break;case"short":let o=qe(t,"shortTime"),r=qe(t,"shortDate");n=Gn(ln(t,he.Short),[o,r]);break;case"medium":let s=qe(t,"mediumTime"),a=qe(t,"mediumDate");n=Gn(ln(t,he.Medium),[s,a]);break;case"long":let l=qe(t,"longTime"),u=qe(t,"longDate");n=Gn(ln(t,he.Long),[l,u]);break;case"full":let c=qe(t,"fullTime"),d=qe(t,"fullDate");n=Gn(ln(t,he.Full),[c,d]);break}return n&&(zn[e][i]=n),n}function Gn(t,i){return i&&(t=t.replace(/\{([^}]+)}/g,function(e,n){return i!=null&&n in i?i[n]:e})),t}function xe(t,i,e="-",n,o){let r="";(t<0||o&&t<=0)&&(o?t=-t+1:(t=-t,r=e));let s=String(t);for(;s.length<i;)s="0"+s;return n&&(s=s.slice(s.length-i)),r+s}function xl(t,i){return xe(t,3).substring(0,i)}function X(t,i,e=0,n=!1,o=!1){return function(r,s){let a=Ol(t,r);if((e>0||a>-e)&&(a+=e),t===3)a===0&&e===-12&&(a=12);else if(t===6)return xl(a,i);let l=Ve(s,fe.MinusSign);return xe(a,i,l,n,o)}}function Ol(t,i){switch(t){case 0:return i.getFullYear();case 1:return i.getMonth();case 2:return i.getDate();case 3:return i.getHours();case 4:return i.getMinutes();case 5:return i.getSeconds();case 6:return i.getMilliseconds();case 7:return i.getDay();default:throw new O(2301,!1)}}function G(t,i,e=le.Format,n=!1){return function(o,r){return Rl(o,r,t,i,e,n)}}function Rl(t,i,e,n,o,r){switch(e){case 2:return Vr(i,o,n)[t.getMonth()];case 1:return Pr(i,o,n)[t.getDay()];case 0:let s=t.getHours(),a=t.getMinutes();if(r){let u=jr(i),c=Hr(i,o,n),d=u.findIndex(p=>{if(Array.isArray(p)){let[h,b]=p,_=s>=h.hours&&a>=h.minutes,g=s<b.hours||s===b.hours&&a<b.minutes;if(h.hours<b.hours){if(_&&g)return!0}else if(_||g)return!0}else if(p.hours===s&&p.minutes===a)return!0;return!1});if(d!==-1)return c[d]}return Lr(i,o,n)[s<12?0:1];case 3:return Br(i,n)[t.getFullYear()<=0?0:1];default:let l=e;throw new O(2302,!1)}}function Wn(t){return function(i,e,n){let o=-1*n,r=Ve(e,fe.MinusSign),s=o>0?Math.floor(o/60):Math.ceil(o/60);switch(t){case 0:return(o>=0?"+":"")+xe(s,2,r)+xe(Math.abs(o%60),2,r);case 1:return"GMT"+(o>=0?"+":"")+xe(s,1,r);case 2:return"GMT"+(o>=0?"+":"")+xe(s,2,r)+":"+xe(Math.abs(o%60),2,r);case 3:return n===0?"Z":(o>=0?"+":"")+xe(s,2,r)+":"+xe(Math.abs(o%60),2,r);default:throw new O(2302,!1)}}}var kl=0,qn=4;function Nl(t){let i=Yn(t,kl,1).getDay();return Yn(t,0,1+(i<=qn?qn:qn+7)-i)}function Kr(t){let i=t.getDay(),e=i===0?-3:qn-i;return Yn(t.getFullYear(),t.getMonth(),t.getDate()+e)}function ji(t,i=!1){return function(e,n){let o;if(i){let r=new Date(e.getFullYear(),e.getMonth(),1).getDay()-1,s=e.getDate();o=1+Math.floor((s+r)/7)}else{let r=Kr(e),s=Nl(r.getFullYear()),a=r.getTime()-s.getTime();o=1+Math.round(a/6048e5)}return xe(o,t,Ve(n,fe.MinusSign))}}function Kn(t,i=!1){return function(e,n){let r=Kr(e).getFullYear();return xe(r,t,Ve(n,fe.MinusSign),i)}}var Hi={};function Ll(t){if(Hi[t])return Hi[t];let i;switch(t){case"G":case"GG":case"GGG":i=G(3,$.Abbreviated);break;case"GGGG":i=G(3,$.Wide);break;case"GGGGG":i=G(3,$.Narrow);break;case"y":i=X(0,1,0,!1,!0);break;case"yy":i=X(0,2,0,!0,!0);break;case"yyy":i=X(0,3,0,!1,!0);break;case"yyyy":i=X(0,4,0,!1,!0);break;case"Y":i=Kn(1);break;case"YY":i=Kn(2,!0);break;case"YYY":i=Kn(3);break;case"YYYY":i=Kn(4);break;case"M":case"L":i=X(1,1,1);break;case"MM":case"LL":i=X(1,2,1);break;case"MMM":i=G(2,$.Abbreviated);break;case"MMMM":i=G(2,$.Wide);break;case"MMMMM":i=G(2,$.Narrow);break;case"LLL":i=G(2,$.Abbreviated,le.Standalone);break;case"LLLL":i=G(2,$.Wide,le.Standalone);break;case"LLLLL":i=G(2,$.Narrow,le.Standalone);break;case"w":i=ji(1);break;case"ww":i=ji(2);break;case"W":i=ji(1,!0);break;case"d":i=X(2,1);break;case"dd":i=X(2,2);break;case"c":case"cc":i=X(7,1);break;case"ccc":i=G(1,$.Abbreviated,le.Standalone);break;case"cccc":i=G(1,$.Wide,le.Standalone);break;case"ccccc":i=G(1,$.Narrow,le.Standalone);break;case"cccccc":i=G(1,$.Short,le.Standalone);break;case"E":case"EE":case"EEE":i=G(1,$.Abbreviated);break;case"EEEE":i=G(1,$.Wide);break;case"EEEEE":i=G(1,$.Narrow);break;case"EEEEEE":i=G(1,$.Short);break;case"a":case"aa":case"aaa":i=G(0,$.Abbreviated);break;case"aaaa":i=G(0,$.Wide);break;case"aaaaa":i=G(0,$.Narrow);break;case"b":case"bb":case"bbb":i=G(0,$.Abbreviated,le.Standalone,!0);break;case"bbbb":i=G(0,$.Wide,le.Standalone,!0);break;case"bbbbb":i=G(0,$.Narrow,le.Standalone,!0);break;case"B":case"BB":case"BBB":i=G(0,$.Abbreviated,le.Format,!0);break;case"BBBB":i=G(0,$.Wide,le.Format,!0);break;case"BBBBB":i=G(0,$.Narrow,le.Format,!0);break;case"h":i=X(3,1,-12);break;case"hh":i=X(3,2,-12);break;case"H":i=X(3,1);break;case"HH":i=X(3,2);break;case"m":i=X(4,1);break;case"mm":i=X(4,2);break;case"s":i=X(5,1);break;case"ss":i=X(5,2);break;case"S":i=X(6,1);break;case"SS":i=X(6,2);break;case"SSS":i=X(6,3);break;case"Z":case"ZZ":case"ZZZ":i=Wn(0);break;case"ZZZZZ":i=Wn(3);break;case"O":case"OO":case"OOO":case"z":case"zz":case"zzz":i=Wn(1);break;case"OOOO":case"ZZZZ":case"zzzz":i=Wn(2);break;default:return null}return Hi[t]=i,i}function qr(t,i){t=t.replace(/:/g,"");let e=Date.parse("Jan 01, 1970 00:00:00 "+t)/6e4;return isNaN(e)?i:e}function Pl(t,i){return t=new Date(t.getTime()),t.setMinutes(t.getMinutes()+i),t}function Vl(t,i,e){let o=t.getTimezoneOffset(),r=qr(i,o);return Pl(t,-1*(r-o))}function Bl(t){if(Mr(t))return t;if(typeof t=="number"&&!isNaN(t))return new Date(t);if(typeof t=="string"){if(t=t.trim(),/^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(t)){let[o,r=1,s=1]=t.split("-").map(a=>+a);return Yn(o,r-1,s)}let e=parseFloat(t);if(!isNaN(t-e))return new Date(e);let n;if(n=t.match(Fl))return $l(n)}let i=new Date(t);if(!Mr(i))throw new O(2302,!1);return i}function $l(t){let i=new Date(0),e=0,n=0,o=t[8]?i.setUTCFullYear:i.setFullYear,r=t[8]?i.setUTCHours:i.setHours;t[9]&&(e=Number(t[9]+t[10]),n=Number(t[9]+t[11])),o.call(i,Number(t[1]),Number(t[2])-1,Number(t[3]));let s=Number(t[4]||0)-e,a=Number(t[5]||0)-n,l=Number(t[6]||0),u=Math.floor(parseFloat("0."+(t[7]||0))*1e3);return r.call(i,s,a,l,u),i}function Mr(t){return t instanceof Date&&!isNaN(t.valueOf())}var Ul=/^(\d+)?\.((\d+)(-(\d+))?)?$/,Fr=22,Zn=".",un="0",jl=";",Hl=",",zi="#",Ir="\xA4";function zl(t,i,e,n,o,r,s=!1){let a="",l=!1;if(!isFinite(t))a=Ve(e,fe.Infinity);else{let u=Kl(t);s&&(u=Wl(u));let c=i.minInt,d=i.minFrac,p=i.maxFrac;if(r){let w=r.match(Ul);if(w===null)throw new O(2306,!1);let z=w[1],I=w[3],me=w[5];z!=null&&(c=Gi(z)),I!=null&&(d=Gi(I)),me!=null?p=Gi(me):I!=null&&d>p&&(p=d)}ql(u,d,p);let h=u.digits,b=u.integerLen,_=u.exponent,g=[];for(l=h.every(w=>!w);b<c;b++)h.unshift(0);for(;b<0;b++)h.unshift(0);b>0?g=h.splice(b,h.length):(g=h,h=[0]);let y=[];for(h.length>=i.lgSize&&y.unshift(h.splice(-i.lgSize,h.length).join(""));h.length>i.gSize;)y.unshift(h.splice(-i.gSize,h.length).join(""));h.length&&y.unshift(h.join("")),a=y.join(Ve(e,n)),g.length&&(a+=Ve(e,o)+g.join("")),_&&(a+=Ve(e,fe.Exponential)+"+"+_)}return t<0&&!l?a=i.negPre+a+i.negSuf:a=i.posPre+a+i.posSuf,a}function Yr(t,i,e,n,o){let r=$r(i,qi.Currency),s=Gl(r,Ve(i,fe.MinusSign));return s.minFrac=Gr(n),s.maxFrac=s.minFrac,zl(t,s,i,fe.CurrencyGroup,fe.CurrencyDecimal,o).replace(Ir,e).replace(Ir,"").trim()}function Gl(t,i="-"){let e={minInt:1,minFrac:0,maxFrac:0,posPre:"",posSuf:"",negPre:"",negSuf:"",gSize:0,lgSize:0},n=t.split(jl),o=n[0],r=n[1],s=o.indexOf(Zn)!==-1?o.split(Zn):[o.substring(0,o.lastIndexOf(un)+1),o.substring(o.lastIndexOf(un)+1)],a=s[0],l=s[1]||"";e.posPre=a.substring(0,a.indexOf(zi));for(let c=0;c<l.length;c++){let d=l.charAt(c);d===un?e.minFrac=e.maxFrac=c+1:d===zi?e.maxFrac=c+1:e.posSuf+=d}let u=a.split(Hl);if(e.gSize=u[1]?u[1].length:0,e.lgSize=u[2]||u[1]?(u[2]||u[1]).length:0,r){let c=o.length-e.posPre.length-e.posSuf.length,d=r.indexOf(zi);e.negPre=r.substring(0,d).replace(/'/g,""),e.negSuf=r.slice(d+c).replace(/'/g,"")}else e.negPre=i+e.posPre,e.negSuf=e.posSuf;return e}function Wl(t){if(t.digits[0]===0)return t;let i=t.digits.length-t.integerLen;return t.exponent?t.exponent+=2:(i===0?t.digits.push(0,0):i===1&&t.digits.push(0),t.integerLen+=2),t}function Kl(t){let i=Math.abs(t)+"",e=0,n,o,r,s,a;for((o=i.indexOf(Zn))>-1&&(i=i.replace(Zn,"")),(r=i.search(/e/i))>0?(o<0&&(o=r),o+=+i.slice(r+1),i=i.substring(0,r)):o<0&&(o=i.length),r=0;i.charAt(r)===un;r++);if(r===(a=i.length))n=[0],o=1;else{for(a--;i.charAt(a)===un;)a--;for(o-=r,n=[],s=0;r<=a;r++,s++)n[s]=Number(i.charAt(r))}return o>Fr&&(n=n.splice(0,Fr-1),e=o-1,o=1),{digits:n,exponent:e,integerLen:o}}function ql(t,i,e){if(i>e)throw new O(2307,!1);let n=t.digits,o=n.length-t.integerLen,r=Math.min(Math.max(i,o),e),s=r+t.integerLen,a=n[s];if(s>0){n.splice(Math.max(t.integerLen,s));for(let d=s;d<n.length;d++)n[d]=0}else{o=Math.max(0,o),t.integerLen=1,n.length=Math.max(1,s=r+1),n[0]=0;for(let d=1;d<s;d++)n[d]=0}if(a>=5)if(s-1<0){for(let d=0;d>s;d--)n.unshift(0),t.integerLen++;n.unshift(1),t.integerLen++}else n[s-1]++;for(;o<Math.max(0,r);o++)n.push(0);let l=r!==0,u=i+t.integerLen,c=n.reduceRight(function(d,p,h,b){return p=p+d,b[h]=p<10?p:p-10,l&&(b[h]===0&&h>=u?b.pop():l=!1),p>=10?1:0},0);c&&(n.unshift(c),t.integerLen++)}function Gi(t){let i=parseInt(t);if(isNaN(i))throw new O(2305,!1);return i}var Wi=/\s+/,xr=[],Yi=(()=>{class t{_ngEl;_renderer;initialClasses=xr;rawClass;stateMap=new Map;constructor(e,n){this._ngEl=e,this._renderer=n}set klass(e){this.initialClasses=e!=null?e.trim().split(Wi):xr}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(Wi):e}ngDoCheck(){for(let n of this.initialClasses)this._updateState(n,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let n of e)this._updateState(n,!0);else if(e!=null)for(let n of Object.keys(e))this._updateState(n,!!e[n]);this._applyStateDiff()}_updateState(e,n){let o=this.stateMap.get(e);o!==void 0?(o.enabled!==n&&(o.changed=!0,o.enabled=n),o.touched=!0):this.stateMap.set(e,{enabled:n,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let n=e[0],o=e[1];o.changed?(this._toggleClass(n,o.enabled),o.changed=!1):o.touched||(o.enabled&&this._toggleClass(n,!1),this.stateMap.delete(n)),o.touched=!1}}_toggleClass(e,n){e=e.trim(),e.length>0&&e.split(Wi).forEach(o=>{n?this._renderer.addClass(this._ngEl.nativeElement,o):this._renderer.removeClass(this._ngEl.nativeElement,o)})}static \u0275fac=function(n){return new(n||t)(F(Se),F(He))};static \u0275dir=A({type:t,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"}})}return t})();var Xn=class{$implicit;ngForOf;index;count;constructor(i,e,n,o){this.$implicit=i,this.ngForOf=e,this.index=n,this.count=o}get first(){return this.index===0}get last(){return this.index===this.count-1}get even(){return this.index%2===0}get odd(){return!this.even}},Zr=(()=>{class t{_viewContainer;_template;_differs;set ngForOf(e){this._ngForOf=e,this._ngForOfDirty=!0}set ngForTrackBy(e){this._trackByFn=e}get ngForTrackBy(){return this._trackByFn}_ngForOf=null;_ngForOfDirty=!0;_differ=null;_trackByFn;constructor(e,n,o){this._viewContainer=e,this._template=n,this._differs=o}set ngForTemplate(e){e&&(this._template=e)}ngDoCheck(){if(this._ngForOfDirty){this._ngForOfDirty=!1;let e=this._ngForOf;!this._differ&&e&&(this._differ=this._differs.find(e).create(this.ngForTrackBy))}if(this._differ){let e=this._differ.diff(this._ngForOf);e&&this._applyChanges(e)}}_applyChanges(e){let n=this._viewContainer;e.forEachOperation((o,r,s)=>{if(o.previousIndex==null)n.createEmbeddedView(this._template,new Xn(o.item,this._ngForOf,-1,-1),s===null?void 0:s);else if(s==null)n.remove(r===null?void 0:r);else if(r!==null){let a=n.get(r);n.move(a,s),Or(a,o)}});for(let o=0,r=n.length;o<r;o++){let a=n.get(o).context;a.index=o,a.count=r,a.ngForOf=this._ngForOf}e.forEachIdentityChange(o=>{let r=n.get(o.currentIndex);Or(r,o)})}static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(F(tn),F(At),F(vr))};static \u0275dir=A({type:t,selectors:[["","ngFor","","ngForOf",""]],inputs:{ngForOf:"ngForOf",ngForTrackBy:"ngForTrackBy",ngForTemplate:"ngForTemplate"}})}return t})();function Or(t,i){t.context.$implicit=i.item}var cn=(()=>{class t{_viewContainer;_context=new Jn;_thenTemplateRef=null;_elseTemplateRef=null;_thenViewRef=null;_elseViewRef=null;constructor(e,n){this._viewContainer=e,this._thenTemplateRef=n}set ngIf(e){this._context.$implicit=this._context.ngIf=e,this._updateView()}set ngIfThen(e){Rr(e,!1),this._thenTemplateRef=e,this._thenViewRef=null,this._updateView()}set ngIfElse(e){Rr(e,!1),this._elseTemplateRef=e,this._elseViewRef=null,this._updateView()}_updateView(){this._context.$implicit?this._thenViewRef||(this._viewContainer.clear(),this._elseViewRef=null,this._thenTemplateRef&&(this._thenViewRef=this._viewContainer.createEmbeddedView(this._thenTemplateRef,this._context))):this._elseViewRef||(this._viewContainer.clear(),this._thenViewRef=null,this._elseTemplateRef&&(this._elseViewRef=this._viewContainer.createEmbeddedView(this._elseTemplateRef,this._context)))}static ngIfUseIfTypeGuard;static ngTemplateGuard_ngIf;static ngTemplateContextGuard(e,n){return!0}static \u0275fac=function(n){return new(n||t)(F(tn),F(At))};static \u0275dir=A({type:t,selectors:[["","ngIf",""]],inputs:{ngIf:"ngIf",ngIfThen:"ngIfThen",ngIfElse:"ngIfElse"}})}return t})(),Jn=class{$implicit=null;ngIf=null};function Rr(t,i){if(t&&!t.createEmbeddedView)throw new O(2020,!1)}var Ki=class{_viewContainerRef;_templateRef;_created=!1;constructor(i,e){this._viewContainerRef=i,this._templateRef=e}create(){this._created=!0,this._viewContainerRef.createEmbeddedView(this._templateRef)}destroy(){this._created=!1,this._viewContainerRef.clear()}enforceState(i){i&&!this._created?this.create():!i&&this._created&&this.destroy()}},Xr=(()=>{class t{_defaultViews=[];_defaultUsed=!1;_caseCount=0;_lastCaseCheckIndex=0;_lastCasesMatched=!1;_ngSwitch;set ngSwitch(e){this._ngSwitch=e,this._caseCount===0&&this._updateDefaultCases(!0)}_addCase(){return this._caseCount++}_addDefault(e){this._defaultViews.push(e)}_matchCase(e){let n=e===this._ngSwitch;return this._lastCasesMatched||=n,this._lastCaseCheckIndex++,this._lastCaseCheckIndex===this._caseCount&&(this._updateDefaultCases(!this._lastCasesMatched),this._lastCaseCheckIndex=0,this._lastCasesMatched=!1),n}_updateDefaultCases(e){if(this._defaultViews.length>0&&e!==this._defaultUsed){this._defaultUsed=e;for(let n of this._defaultViews)n.enforceState(e)}}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","ngSwitch",""]],inputs:{ngSwitch:"ngSwitch"}})}return t})(),Yl=(()=>{class t{ngSwitch;_view;ngSwitchCase;constructor(e,n,o){this.ngSwitch=o,o._addCase(),this._view=new Ki(e,n)}ngDoCheck(){this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))}static \u0275fac=function(n){return new(n||t)(F(tn),F(At),F(Xr,9))};static \u0275dir=A({type:t,selectors:[["","ngSwitchCase",""]],inputs:{ngSwitchCase:"ngSwitchCase"}})}return t})();var Zi=(()=>{class t{_ngEl;_differs;_renderer;_ngStyle=null;_differ=null;constructor(e,n,o){this._ngEl=e,this._differs=n,this._renderer=o}set ngStyle(e){this._ngStyle=e,!this._differ&&e&&(this._differ=this._differs.find(e).create())}ngDoCheck(){if(this._differ){let e=this._differ.diff(this._ngStyle);e&&this._applyChanges(e)}}_setStyle(e,n){let[o,r]=e.split("."),s=o.indexOf("-")===-1?void 0:gt.DashCase;n!=null?this._renderer.setStyle(this._ngEl.nativeElement,o,r?`${n}${r}`:n,s):this._renderer.removeStyle(this._ngEl.nativeElement,o,s)}_applyChanges(e){e.forEachRemovedItem(n=>this._setStyle(n.key,null)),e.forEachAddedItem(n=>this._setStyle(n.key,n.currentValue)),e.forEachChangedItem(n=>this._setStyle(n.key,n.currentValue))}static \u0275fac=function(n){return new(n||t)(F(Se),F(Dr),F(He))};static \u0275dir=A({type:t,selectors:[["","ngStyle",""]],inputs:{ngStyle:"ngStyle"}})}return t})(),Ye=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let o=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,o,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,o)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,o):!1,get:(e,n,o)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,o)}})}static \u0275fac=function(n){return new(n||t)(F(tn))};static \u0275dir=A({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[Le]})}return t})();function Xi(t,i){return new O(2100,!1)}var Zl="mediumDate",Jr=new R(""),Qr=new R(""),Xl=(()=>{class t{locale;defaultTimezone;defaultOptions;constructor(e,n,o){this.locale=e,this.defaultTimezone=n,this.defaultOptions=o}transform(e,n,o,r){if(e==null||e===""||e!==e)return null;try{let s=n??this.defaultOptions?.dateFormat??Zl,a=o??this.defaultOptions?.timezone??this.defaultTimezone??void 0;return Wr(e,s,r||this.locale,a)}catch(s){throw Xi(t,s.message)}}static \u0275fac=function(n){return new(n||t)(F(Vi,16),F(Jr,24),F(Qr,24))};static \u0275pipe=Bn({name:"date",type:t,pure:!0})}return t})();var Jl=(()=>{class t{_locale;_defaultCurrencyCode;constructor(e,n="USD"){this._locale=e,this._defaultCurrencyCode=n}transform(e,n=this._defaultCurrencyCode,o="symbol",r,s){if(!Ql(e))return null;s||=this._locale,typeof o=="boolean"&&(o=o?"symbol":"code");let a=n||this._defaultCurrencyCode;o!=="code"&&(o==="symbol"||o==="symbol-narrow"?a=zr(a,o==="symbol"?"wide":"narrow",s):a=o);try{let l=eu(e);return Yr(l,s,a,n,r)}catch(l){throw Xi(t,l.message)}}static \u0275fac=function(n){return new(n||t)(F(Vi,16),F(yr,16))};static \u0275pipe=Bn({name:"currency",type:t,pure:!0})}return t})();function Ql(t){return!(t==null||t===""||t!==t)}function eu(t){if(typeof t=="string"&&!isNaN(Number(t)-parseFloat(t)))return Number(t);if(typeof t!="number")throw new O(2309,!1);return t}var tu=(()=>{class t{transform(e,n,o){if(e==null)return null;if(!(typeof e=="string"||Array.isArray(e)))throw Xi(t,e);return e.slice(n,o)}static \u0275fac=function(n){return new(n||t)};static \u0275pipe=Bn({name:"slice",type:t,pure:!1})}return t})();var ie=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();function dn(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[o,r]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(o.trim()===i)return decodeURIComponent(r)}return null}var Dt=class{};var Qi="browser",iu="server";function Qn(t){return t===Qi}function ts(t){return t===iu}var Rh=(()=>{class t{static \u0275prov=m({token:t,providedIn:"root",factory:()=>new Ji(f(P),window)})}return t})(),Ji=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i,e){this.window.scrollTo(ce(C({},e),{left:i[0],top:i[1]}))}scrollToAnchor(i,e){let n=ou(this.document,i);n&&(this.scrollToElement(n,e),n.focus())}setHistoryScrollRestoration(i){try{this.window.history.scrollRestoration=i}catch{console.warn(Qt(2400,!1))}}scrollToElement(i,e){let n=i.getBoundingClientRect(),o=n.left+this.window.pageXOffset,r=n.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(ce(C({},e),{left:o-s[0],top:r-s[1]}))}};function ou(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),o=n.currentNode;for(;o;){let r=o.shadowRoot;if(r){let s=r.getElementById(i)||r.querySelector(`[name="${i}"]`);if(s)return s}o=n.nextNode()}}return null}var ni=new R(""),oo=(()=>{class t{_zone;_plugins;_eventNameToPlugin=new Map;constructor(e,n){this._zone=n,e.forEach(o=>{o.manager=this}),this._plugins=e.slice().reverse()}addEventListener(e,n,o,r){return this._findPluginFor(n).addEventListener(e,n,o,r)}getZone(){return this._zone}_findPluginFor(e){let n=this._eventNameToPlugin.get(e);if(n)return n;if(n=this._plugins.find(r=>r.supports(e)),!n)throw new O(5101,!1);return this._eventNameToPlugin.set(e,n),n}static \u0275fac=function(n){return new(n||t)(S(ni),S(ze))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),pn=class{_doc;constructor(i){this._doc=i}manager},eo="ng-app-id";function ns(t){for(let i of t)i.remove()}function is(t,i){let e=i.createElement("style");return e.textContent=t,e}function ru(t,i,e,n){let o=t.head?.querySelectorAll(`style[${eo}="${i}"],link[${eo}="${i}"]`);if(o)for(let r of o)r.removeAttribute(eo),r instanceof HTMLLinkElement?n.set(r.href.slice(r.href.lastIndexOf("/")+1),{usage:0,elements:[r]}):r.textContent&&e.set(r.textContent,{usage:0,elements:[r]})}function no(t,i){let e=i.createElement("link");return e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),e}var ro=(()=>{class t{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;constructor(e,n,o,r={}){this.doc=e,this.appId=n,this.nonce=o,ru(e,n,this.inline,this.external),this.hosts.add(e.head)}addStyles(e,n){for(let o of e)this.addUsage(o,this.inline,is);n?.forEach(o=>this.addUsage(o,this.external,no))}removeStyles(e,n){for(let o of e)this.removeUsage(o,this.inline);n?.forEach(o=>this.removeUsage(o,this.external))}addUsage(e,n,o){let r=n.get(e);r?r.usage++:n.set(e,{usage:1,elements:[...this.hosts].map(s=>this.addElement(s,o(e,this.doc)))})}removeUsage(e,n){let o=n.get(e);o&&(o.usage--,o.usage<=0&&(ns(o.elements),n.delete(e)))}ngOnDestroy(){for(let[,{elements:e}]of[...this.inline,...this.external])ns(e);this.hosts.clear()}addHost(e){this.hosts.add(e);for(let[n,{elements:o}]of this.inline)o.push(this.addElement(e,is(n,this.doc)));for(let[n,{elements:o}]of this.external)o.push(this.addElement(e,no(n,this.doc)))}removeHost(e){this.hosts.delete(e)}addElement(e,n){return this.nonce&&n.setAttribute("nonce",this.nonce),e.appendChild(n)}static \u0275fac=function(n){return new(n||t)(S(P),S(xi),S(Oi,8),S(Ae))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),to={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},so=/%COMP%/g;var rs="%COMP%",su=`_nghost-${rs}`,au=`_ngcontent-${rs}`,lu=!0,uu=new R("",{providedIn:"root",factory:()=>lu});function cu(t){return au.replace(so,t)}function du(t){return su.replace(so,t)}function ss(t,i){return i.map(e=>e.replace(so,t))}var ao=(()=>{class t{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;tracingService;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(e,n,o,r,s,a,l,u=null,c=null){this.eventManager=e,this.sharedStylesHost=n,this.appId=o,this.removeStylesOnCompDestroy=r,this.doc=s,this.platformId=a,this.ngZone=l,this.nonce=u,this.tracingService=c,this.platformIsServer=!1,this.defaultRenderer=new hn(e,s,l,this.platformIsServer,this.tracingService)}createRenderer(e,n){if(!e||!n)return this.defaultRenderer;let o=this.getOrCreateRenderer(e,n);return o instanceof ti?o.applyToHost(e):o instanceof fn&&o.applyStyles(),o}getOrCreateRenderer(e,n){let o=this.rendererByCompId,r=o.get(n.id);if(!r){let s=this.doc,a=this.ngZone,l=this.eventManager,u=this.sharedStylesHost,c=this.removeStylesOnCompDestroy,d=this.platformIsServer,p=this.tracingService;switch(n.encapsulation){case Ri.Emulated:r=new ti(l,u,n,this.appId,c,s,a,d,p);break;case Ri.ShadowDom:return new io(l,u,e,n,s,a,this.nonce,d,p);default:r=new fn(l,u,n,c,s,a,d,p);break}o.set(n.id,r)}return r}ngOnDestroy(){this.rendererByCompId.clear()}componentReplaced(e){this.rendererByCompId.delete(e)}static \u0275fac=function(n){return new(n||t)(S(oo),S(ro),S(xi),S(uu),S(P),S(Ae),S(ze),S(Oi),S(lr,8))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),hn=class{eventManager;doc;ngZone;platformIsServer;tracingService;data=Object.create(null);throwOnSyntheticProps=!0;constructor(i,e,n,o,r){this.eventManager=i,this.doc=e,this.ngZone=n,this.platformIsServer=o,this.tracingService=r}destroy(){}destroyNode=null;createElement(i,e){return e?this.doc.createElementNS(to[e]||e,i):this.doc.createElement(i)}createComment(i){return this.doc.createComment(i)}createText(i){return this.doc.createTextNode(i)}appendChild(i,e){(os(i)?i.content:i).appendChild(e)}insertBefore(i,e,n){i&&(os(i)?i.content:i).insertBefore(e,n)}removeChild(i,e){e.remove()}selectRootElement(i,e){let n=typeof i=="string"?this.doc.querySelector(i):i;if(!n)throw new O(-5104,!1);return e||(n.textContent=""),n}parentNode(i){return i.parentNode}nextSibling(i){return i.nextSibling}setAttribute(i,e,n,o){if(o){e=o+":"+e;let r=to[o];r?i.setAttributeNS(r,e,n):i.setAttribute(e,n)}else i.setAttribute(e,n)}removeAttribute(i,e,n){if(n){let o=to[n];o?i.removeAttributeNS(o,e):i.removeAttribute(`${n}:${e}`)}else i.removeAttribute(e)}addClass(i,e){i.classList.add(e)}removeClass(i,e){i.classList.remove(e)}setStyle(i,e,n,o){o&(gt.DashCase|gt.Important)?i.style.setProperty(e,n,o&gt.Important?"important":""):i.style[e]=n}removeStyle(i,e,n){n&gt.DashCase?i.style.removeProperty(e):i.style[e]=""}setProperty(i,e,n){i!=null&&(i[e]=n)}setValue(i,e){i.nodeValue=e}listen(i,e,n,o){if(typeof i=="string"&&(i=_e().getGlobalEventTarget(this.doc,i),!i))throw new O(5102,!1);let r=this.decoratePreventDefault(n);return this.tracingService?.wrapEventListener&&(r=this.tracingService.wrapEventListener(i,e,r)),this.eventManager.addEventListener(i,e,r,o)}decoratePreventDefault(i){return e=>{if(e==="__ngUnwrap__")return i;i(e)===!1&&e.preventDefault()}}};function os(t){return t.tagName==="TEMPLATE"&&t.content!==void 0}var io=class extends hn{sharedStylesHost;hostEl;shadowRoot;constructor(i,e,n,o,r,s,a,l,u){super(i,r,s,l,u),this.sharedStylesHost=e,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let c=o.styles;c=ss(o.id,c);for(let p of c){let h=document.createElement("style");a&&h.setAttribute("nonce",a),h.textContent=p,this.shadowRoot.appendChild(h)}let d=o.getExternalStyles?.();if(d)for(let p of d){let h=no(p,r);a&&h.setAttribute("nonce",a),this.shadowRoot.appendChild(h)}}nodeOrShadowRoot(i){return i===this.hostEl?this.shadowRoot:i}appendChild(i,e){return super.appendChild(this.nodeOrShadowRoot(i),e)}insertBefore(i,e,n){return super.insertBefore(this.nodeOrShadowRoot(i),e,n)}removeChild(i,e){return super.removeChild(null,e)}parentNode(i){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(i)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},fn=class extends hn{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(i,e,n,o,r,s,a,l,u){super(i,r,s,a,l),this.sharedStylesHost=e,this.removeStylesOnCompDestroy=o;let c=n.styles;this.styles=u?ss(u,c):c,this.styleUrls=n.getExternalStyles?.(u)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ti=class extends fn{contentAttr;hostAttr;constructor(i,e,n,o,r,s,a,l,u){let c=o+"-"+n.id;super(i,e,n,r,s,a,l,u,c),this.contentAttr=cu(c),this.hostAttr=du(c)}applyToHost(i){this.applyStyles(),this.setAttribute(i,this.hostAttr,"")}createElement(i,e){let n=super.createElement(i,e);return super.setAttribute(n,this.contentAttr,""),n}};var ii=class t extends on{supportsDOMEvents=!0;static makeCurrent(){$i(new t)}onAndCancel(i,e,n,o){return i.addEventListener(e,n,o),()=>{i.removeEventListener(e,n,o)}}dispatchEvent(i,e){i.dispatchEvent(e)}remove(i){i.remove()}createElement(i,e){return e=e||this.getDefaultDocument(),e.createElement(i)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(i){return i.nodeType===Node.ELEMENT_NODE}isShadowRoot(i){return i instanceof DocumentFragment}getGlobalEventTarget(i,e){return e==="window"?window:e==="document"?i:e==="body"?i.body:null}getBaseHref(i){let e=hu();return e==null?null:fu(e)}resetBaseElement(){gn=null}getUserAgent(){return window.navigator.userAgent}getCookie(i){return dn(document.cookie,i)}},gn=null;function hu(){return gn=gn||document.head.querySelector("base"),gn?gn.getAttribute("href"):null}function fu(t){return new URL(t,document.baseURI).pathname}var gu=(()=>{class t{build(){return new XMLHttpRequest}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),ls=(()=>{class t extends pn{constructor(e){super(e)}supports(e){return!0}addEventListener(e,n,o,r){return e.addEventListener(n,o,r),()=>this.removeEventListener(e,n,o,r)}removeEventListener(e,n,o,r){return e.removeEventListener(n,o,r)}static \u0275fac=function(n){return new(n||t)(S(P))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),as=["alt","control","meta","shift"],mu={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},bu={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey},us=(()=>{class t extends pn{constructor(e){super(e)}supports(e){return t.parseEventName(e)!=null}addEventListener(e,n,o,r){let s=t.parseEventName(n),a=t.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>_e().onAndCancel(e,s.domEventName,a,r))}static parseEventName(e){let n=e.toLowerCase().split("."),o=n.shift();if(n.length===0||!(o==="keydown"||o==="keyup"))return null;let r=t._normalizeKey(n.pop()),s="",a=n.indexOf("code");if(a>-1&&(n.splice(a,1),s="code."),as.forEach(u=>{let c=n.indexOf(u);c>-1&&(n.splice(c,1),s+=u+".")}),s+=r,n.length!=0||r.length===0)return null;let l={};return l.domEventName=o,l.fullKey=s,l}static matchEventFullKeyCode(e,n){let o=mu[e.key]||e.key,r="";return n.indexOf("code.")>-1&&(o=e.code,r="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),as.forEach(s=>{if(s!==o){let a=bu[s];a(e)&&(r+=s+".")}}),r+=o,r===n)}static eventCallback(e,n,o){return r=>{t.matchEventFullKeyCode(r,e)&&o.runGuarded(()=>n(r))}}static _normalizeKey(e){return e==="esc"?"escape":e}static \u0275fac=function(n){return new(n||t)(S(P))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();function yu(t,i){let e=C({rootComponent:t},vu(i));return _r(e)}function vu(t){return{appProviders:[...wu,...t?.providers??[]],platformProviders:Eu}}function Du(){ii.makeCurrent()}function _u(){return new Fi}function Cu(){return Xo(document),document}var Eu=[{provide:Ae,useValue:Qi},{provide:Jo,useValue:Du,multi:!0},{provide:P,useFactory:Cu}];var wu=[{provide:qo,useValue:"root"},{provide:Fi,useFactory:_u},{provide:ni,useClass:ls,multi:!0,deps:[P]},{provide:ni,useClass:us,multi:!0,deps:[P]},ao,ro,oo,{provide:sr,useExisting:ao},{provide:Dt,useClass:gu},[]];var Lt=class{},Pt=class{},$e=class t{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(i){i?typeof i=="string"?this.lazyInit=()=>{this.headers=new Map,i.split(`
`).forEach(e=>{let n=e.indexOf(":");if(n>0){let o=e.slice(0,n),r=e.slice(n+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&i instanceof Headers?(this.headers=new Map,i.forEach((e,n)=>{this.addHeaderEntry(n,e)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(i).forEach(([e,n])=>{this.setHeaderEntries(e,n)})}:this.headers=new Map}has(i){return this.init(),this.headers.has(i.toLowerCase())}get(i){this.init();let e=this.headers.get(i.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(i){return this.init(),this.headers.get(i.toLowerCase())||null}append(i,e){return this.clone({name:i,value:e,op:"a"})}set(i,e){return this.clone({name:i,value:e,op:"s"})}delete(i,e){return this.clone({name:i,value:e,op:"d"})}maybeSetNormalizedName(i,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,i)}init(){this.lazyInit&&(this.lazyInit instanceof t?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(i=>this.applyUpdate(i)),this.lazyUpdate=null))}copyFrom(i){i.init(),Array.from(i.headers.keys()).forEach(e=>{this.headers.set(e,i.headers.get(e)),this.normalizedNames.set(e,i.normalizedNames.get(e))})}clone(i){let e=new t;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof t?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([i]),e}applyUpdate(i){let e=i.name.toLowerCase();switch(i.op){case"a":case"s":let n=i.value;if(typeof n=="string"&&(n=[n]),n.length===0)return;this.maybeSetNormalizedName(i.name,e);let o=(i.op==="a"?this.headers.get(e):void 0)||[];o.push(...n),this.headers.set(e,o);break;case"d":let r=i.value;if(!r)this.headers.delete(e),this.normalizedNames.delete(e);else{let s=this.headers.get(e);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,s)}break}}addHeaderEntry(i,e){let n=i.toLowerCase();this.maybeSetNormalizedName(i,n),this.headers.has(n)?this.headers.get(n).push(e):this.headers.set(n,[e])}setHeaderEntries(i,e){let n=(Array.isArray(e)?e:[e]).map(r=>r.toString()),o=i.toLowerCase();this.headers.set(o,n),this.maybeSetNormalizedName(i,o)}forEach(i){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>i(this.normalizedNames.get(e),this.headers.get(e)))}};var si=class{encodeKey(i){return cs(i)}encodeValue(i){return cs(i)}decodeKey(i){return decodeURIComponent(i)}decodeValue(i){return decodeURIComponent(i)}};function Su(t,i){let e=new Map;return t.length>0&&t.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[i.decodeKey(o),""]:[i.decodeKey(o.slice(0,r)),i.decodeValue(o.slice(r+1))],l=e.get(s)||[];l.push(a),e.set(s,l)}),e}var Au=/%(\d[a-f0-9])/gi,Tu={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function cs(t){return encodeURIComponent(t).replace(Au,(i,e)=>Tu[e]??i)}function oi(t){return`${t}`}var Ze=class t{map;encoder;updates=null;cloneFrom=null;constructor(i={}){if(this.encoder=i.encoder||new si,i.fromString){if(i.fromObject)throw new O(2805,!1);this.map=Su(i.fromString,this.encoder)}else i.fromObject?(this.map=new Map,Object.keys(i.fromObject).forEach(e=>{let n=i.fromObject[e],o=Array.isArray(n)?n.map(oi):[oi(n)];this.map.set(e,o)})):this.map=null}has(i){return this.init(),this.map.has(i)}get(i){this.init();let e=this.map.get(i);return e?e[0]:null}getAll(i){return this.init(),this.map.get(i)||null}keys(){return this.init(),Array.from(this.map.keys())}append(i,e){return this.clone({param:i,value:e,op:"a"})}appendAll(i){let e=[];return Object.keys(i).forEach(n=>{let o=i[n];Array.isArray(o)?o.forEach(r=>{e.push({param:n,value:r,op:"a"})}):e.push({param:n,value:o,op:"a"})}),this.clone(e)}set(i,e){return this.clone({param:i,value:e,op:"s"})}delete(i,e){return this.clone({param:i,value:e,op:"d"})}toString(){return this.init(),this.keys().map(i=>{let e=this.encoder.encodeKey(i);return this.map.get(i).map(n=>e+"="+this.encoder.encodeValue(n)).join("&")}).filter(i=>i!=="").join("&")}clone(i){let e=new t({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(i),e}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(i=>this.map.set(i,this.cloneFrom.map.get(i))),this.updates.forEach(i=>{switch(i.op){case"a":case"s":let e=(i.op==="a"?this.map.get(i.param):void 0)||[];e.push(oi(i.value)),this.map.set(i.param,e);break;case"d":if(i.value!==void 0){let n=this.map.get(i.param)||[],o=n.indexOf(oi(i.value));o!==-1&&n.splice(o,1),n.length>0?this.map.set(i.param,n):this.map.delete(i.param)}else{this.map.delete(i.param);break}}}),this.cloneFrom=this.updates=null)}};var ai=class{map=new Map;set(i,e){return this.map.set(i,e),this}get(i){return this.map.has(i)||this.map.set(i,i.defaultValue()),this.map.get(i)}delete(i){return this.map.delete(i),this}has(i){return this.map.has(i)}keys(){return this.map.keys()}};function Mu(t){switch(t){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function ds(t){return typeof ArrayBuffer<"u"&&t instanceof ArrayBuffer}function ps(t){return typeof Blob<"u"&&t instanceof Blob}function hs(t){return typeof FormData<"u"&&t instanceof FormData}function Fu(t){return typeof URLSearchParams<"u"&&t instanceof URLSearchParams}var mn="Content-Type",li="Accept",ho="X-Request-URL",ms="text/plain",bs="application/json",ys=`${bs}, ${ms}, */*`,Nt=class t{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;credentials;keepalive=!1;cache;priority;mode;redirect;responseType="json";method;params;urlWithParams;transferCache;timeout;constructor(i,e,n,o){this.url=e,this.method=i.toUpperCase();let r;if(Mu(this.method)||o?(this.body=n!==void 0?n:null,r=o):r=n,r){if(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,this.keepalive=!!r.keepalive,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),r.priority&&(this.priority=r.priority),r.cache&&(this.cache=r.cache),r.credentials&&(this.credentials=r.credentials),typeof r.timeout=="number"){if(r.timeout<1||!Number.isInteger(r.timeout))throw new Error("");this.timeout=r.timeout}r.mode&&(this.mode=r.mode),r.redirect&&(this.redirect=r.redirect),this.transferCache=r.transferCache}if(this.headers??=new $e,this.context??=new ai,!this.params)this.params=new Ze,this.urlWithParams=e;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=e;else{let a=e.indexOf("?"),l=a===-1?"?":a<e.length-1?"&":"";this.urlWithParams=e+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||ds(this.body)||ps(this.body)||hs(this.body)||Fu(this.body)?this.body:this.body instanceof Ze?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||hs(this.body)?null:ps(this.body)?this.body.type||null:ds(this.body)?null:typeof this.body=="string"?ms:this.body instanceof Ze?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?bs:null}clone(i={}){let e=i.method||this.method,n=i.url||this.url,o=i.responseType||this.responseType,r=i.keepalive??this.keepalive,s=i.priority||this.priority,a=i.cache||this.cache,l=i.mode||this.mode,u=i.redirect||this.redirect,c=i.credentials||this.credentials,d=i.transferCache??this.transferCache,p=i.timeout??this.timeout,h=i.body!==void 0?i.body:this.body,b=i.withCredentials??this.withCredentials,_=i.reportProgress??this.reportProgress,g=i.headers||this.headers,y=i.params||this.params,w=i.context??this.context;return i.setHeaders!==void 0&&(g=Object.keys(i.setHeaders).reduce((z,I)=>z.set(I,i.setHeaders[I]),g)),i.setParams&&(y=Object.keys(i.setParams).reduce((z,I)=>z.set(I,i.setParams[I]),y)),new t(e,n,h,{params:y,headers:g,context:w,reportProgress:_,responseType:o,withCredentials:b,transferCache:d,keepalive:r,cache:a,priority:s,timeout:p,mode:l,redirect:u,credentials:c})}},Xe=function(t){return t[t.Sent=0]="Sent",t[t.UploadProgress=1]="UploadProgress",t[t.ResponseHeader=2]="ResponseHeader",t[t.DownloadProgress=3]="DownloadProgress",t[t.Response=4]="Response",t[t.User=5]="User",t}(Xe||{}),Vt=class{headers;status;statusText;url;ok;type;constructor(i,e=200,n="OK"){this.headers=i.headers||new $e,this.status=i.status!==void 0?i.status:e,this.statusText=i.statusText||n,this.url=i.url||null,this.ok=this.status>=200&&this.status<300}},bn=class t extends Vt{constructor(i={}){super(i)}type=Xe.ResponseHeader;clone(i={}){return new t({headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Bt=class t extends Vt{body;constructor(i={}){super(i),this.body=i.body!==void 0?i.body:null}type=Xe.Response;clone(i={}){return new t({body:i.body!==void 0?i.body:this.body,headers:i.headers||this.headers,status:i.status!==void 0?i.status:this.status,statusText:i.statusText||this.statusText,url:i.url||this.url||void 0})}},Be=class extends Vt{name="HttpErrorResponse";message;error;ok=!1;constructor(i){super(i,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${i.url||"(unknown url)"}`:this.message=`Http failure response for ${i.url||"(unknown url)"}: ${i.status} ${i.statusText}`,this.error=i.error||null}},vs=200,Iu=204;function lo(t,i){return{body:i,headers:t.headers,context:t.context,observe:t.observe,params:t.params,reportProgress:t.reportProgress,responseType:t.responseType,withCredentials:t.withCredentials,transferCache:t.transferCache,keepalive:t.keepalive,priority:t.priority,cache:t.cache,mode:t.mode,redirect:t.redirect}}var Ds=(()=>{class t{handler;constructor(e){this.handler=e}request(e,n,o={}){let r;if(e instanceof Nt)r=e;else{let l;o.headers instanceof $e?l=o.headers:l=new $e(o.headers);let u;o.params&&(o.params instanceof Ze?u=o.params:u=new Ze({fromObject:o.params})),r=new Nt(e,n,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:u,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache,keepalive:o.keepalive,priority:o.priority,cache:o.cache,mode:o.mode,redirect:o.redirect,credentials:o.credentials})}let s=Ai(r).pipe(Wo(l=>this.handler.handle(l)));if(e instanceof Nt||o.observe==="events")return s;let a=s.pipe(Go(l=>l instanceof Bt));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(pt(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new O(2806,!1);return l.body}));case"blob":return a.pipe(pt(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new O(2807,!1);return l.body}));case"text":return a.pipe(pt(l=>{if(l.body!==null&&typeof l.body!="string")throw new O(2808,!1);return l.body}));case"json":default:return a.pipe(pt(l=>l.body))}case"response":return a;default:throw new O(2809,!1)}}delete(e,n={}){return this.request("DELETE",e,n)}get(e,n={}){return this.request("GET",e,n)}head(e,n={}){return this.request("HEAD",e,n)}jsonp(e,n){return this.request("JSONP",e,{params:new Ze().append(n,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,n={}){return this.request("OPTIONS",e,n)}patch(e,n,o={}){return this.request("PATCH",e,lo(o,n))}post(e,n,o={}){return this.request("POST",e,lo(o,n))}put(e,n,o={}){return this.request("PUT",e,lo(o,n))}static \u0275fac=function(n){return new(n||t)(S(Lt))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),xu=/^\)\]\}',?\n/;function fs(t){if(t.url)return t.url;let i=ho.toLocaleLowerCase();return t.headers.get(i)}var _s=new R(""),ri=(()=>{class t{fetchImpl=f(uo,{optional:!0})?.fetch??((...e)=>globalThis.fetch(...e));ngZone=f(ze);destroyRef=f(Mi);destroyed=!1;constructor(){this.destroyRef.onDestroy(()=>{this.destroyed=!0})}handle(e){return new Si(n=>{let o=new AbortController;this.doRequest(e,o.signal,n).then(co,s=>n.error(new Be({error:s})));let r;return e.timeout&&(r=this.ngZone.runOutsideAngular(()=>setTimeout(()=>{o.signal.aborted||o.abort(new DOMException("signal timed out","TimeoutError"))},e.timeout))),()=>{r!==void 0&&clearTimeout(r),o.abort()}})}doRequest(e,n,o){return Vn(this,null,function*(){let r=this.createRequestInit(e),s;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(e.urlWithParams,C({signal:n},r)));Ou(h),o.next({type:Xe.Sent}),s=yield h}catch(h){o.error(new Be({error:h,status:h.status??0,statusText:h.statusText,url:e.urlWithParams,headers:h.headers}));return}let a=new $e(s.headers),l=s.statusText,u=fs(s)??e.urlWithParams,c=s.status,d=null;if(e.reportProgress&&o.next(new bn({headers:a,status:c,statusText:l,url:u})),s.body){let h=s.headers.get("content-length"),b=[],_=s.body.getReader(),g=0,y,w,z=typeof Zone<"u"&&Zone.current,I=!1;if(yield this.ngZone.runOutsideAngular(()=>Vn(this,null,function*(){for(;;){if(this.destroyed){yield _.cancel(),I=!0;break}let{done:De,value:Ne}=yield _.read();if(De)break;if(b.push(Ne),g+=Ne.length,e.reportProgress){w=e.responseType==="text"?(w??"")+(y??=new TextDecoder).decode(Ne,{stream:!0}):void 0;let it=()=>o.next({type:Xe.DownloadProgress,total:h?+h:void 0,loaded:g,partialText:w});z?z.run(it):it()}}})),I){o.complete();return}let me=this.concatChunks(b,g);try{let De=s.headers.get(mn)??"";d=this.parseBody(e,me,De)}catch(De){o.error(new Be({error:De,headers:new $e(s.headers),status:s.status,statusText:s.statusText,url:fs(s)??e.urlWithParams}));return}}c===0&&(c=d?vs:0),c>=200&&c<300?(o.next(new Bt({body:d,headers:a,status:c,statusText:l,url:u})),o.complete()):o.error(new Be({error:d,headers:a,status:c,statusText:l,url:u}))})}parseBody(e,n,o){switch(e.responseType){case"json":let r=new TextDecoder().decode(n).replace(xu,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(n);case"blob":return new Blob([n],{type:o});case"arraybuffer":return n.buffer}}createRequestInit(e){let n={},o;if(o=e.credentials,e.withCredentials&&(o="include"),e.headers.forEach((r,s)=>n[r]=s.join(",")),e.headers.has(li)||(n[li]=ys),!e.headers.has(mn)){let r=e.detectContentTypeHeader();r!==null&&(n[mn]=r)}return{body:e.serializeBody(),method:e.method,headers:n,credentials:o,keepalive:e.keepalive,cache:e.cache,priority:e.priority,mode:e.mode,redirect:e.redirect}}concatChunks(e,n){let o=new Uint8Array(n),r=0;for(let s of e)o.set(s,r),r+=s.length;return o}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),uo=class{};function co(){}function Ou(t){t.then(co,co)}function Cs(t,i){return i(t)}function Ru(t,i){return(e,n)=>i.intercept(e,{handle:o=>t(o,n)})}function ku(t,i,e){return(n,o)=>Zo(e,()=>i(n,r=>t(r,o)))}var Es=new R(""),fo=new R(""),ws=new R(""),go=new R("",{providedIn:"root",factory:()=>!0});function Nu(){let t=null;return(i,e)=>{t===null&&(t=(f(Es,{optional:!0})??[]).reduceRight(Ru,Cs));let n=f(Ii);if(f(go)){let r=n.add();return t(i,e).pipe(Ti(r))}else return t(i,e)}}var ui=(()=>{class t extends Lt{backend;injector;chain=null;pendingTasks=f(Ii);contributeToStability=f(go);constructor(e,n){super(),this.backend=e,this.injector=n}handle(e){if(this.chain===null){let n=Array.from(new Set([...this.injector.get(fo),...this.injector.get(ws,[])]));this.chain=n.reduceRight((o,r)=>ku(o,r,this.injector),Cs)}if(this.contributeToStability){let n=this.pendingTasks.add();return this.chain(e,o=>this.backend.handle(o)).pipe(Ti(n))}else return this.chain(e,n=>this.backend.handle(n))}static \u0275fac=function(n){return new(n||t)(S(Pt),S(Yo))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Lu=/^\)\]\}',?\n/,Pu=RegExp(`^${ho}:`,"m");function Vu(t){return"responseURL"in t&&t.responseURL?t.responseURL:Pu.test(t.getAllResponseHeaders())?t.getResponseHeader(ho):null}var po=(()=>{class t{xhrFactory;constructor(e){this.xhrFactory=e}handle(e){if(e.method==="JSONP")throw new O(-2800,!1);let n=this.xhrFactory;return Ai(null).pipe(Ko(()=>new Si(r=>{let s=n.build();if(s.open(e.method,e.urlWithParams),e.withCredentials&&(s.withCredentials=!0),e.headers.forEach((g,y)=>s.setRequestHeader(g,y.join(","))),e.headers.has(li)||s.setRequestHeader(li,ys),!e.headers.has(mn)){let g=e.detectContentTypeHeader();g!==null&&s.setRequestHeader(mn,g)}if(e.timeout&&(s.timeout=e.timeout),e.responseType){let g=e.responseType.toLowerCase();s.responseType=g!=="json"?g:"text"}let a=e.serializeBody(),l=null,u=()=>{if(l!==null)return l;let g=s.statusText||"OK",y=new $e(s.getAllResponseHeaders()),w=Vu(s)||e.url;return l=new bn({headers:y,status:s.status,statusText:g,url:w}),l},c=()=>{let{headers:g,status:y,statusText:w,url:z}=u(),I=null;y!==Iu&&(I=typeof s.response>"u"?s.responseText:s.response),y===0&&(y=I?vs:0);let me=y>=200&&y<300;if(e.responseType==="json"&&typeof I=="string"){let De=I;I=I.replace(Lu,"");try{I=I!==""?JSON.parse(I):null}catch(Ne){I=De,me&&(me=!1,I={error:Ne,text:I})}}me?(r.next(new Bt({body:I,headers:g,status:y,statusText:w,url:z||void 0})),r.complete()):r.error(new Be({error:I,headers:g,status:y,statusText:w,url:z||void 0}))},d=g=>{let{url:y}=u(),w=new Be({error:g,status:s.status||0,statusText:s.statusText||"Unknown Error",url:y||void 0});r.error(w)},p=d;e.timeout&&(p=g=>{let{url:y}=u(),w=new Be({error:new DOMException("Request timed out","TimeoutError"),status:s.status||0,statusText:s.statusText||"Request timeout",url:y||void 0});r.error(w)});let h=!1,b=g=>{h||(r.next(u()),h=!0);let y={type:Xe.DownloadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),e.responseType==="text"&&s.responseText&&(y.partialText=s.responseText),r.next(y)},_=g=>{let y={type:Xe.UploadProgress,loaded:g.loaded};g.lengthComputable&&(y.total=g.total),r.next(y)};return s.addEventListener("load",c),s.addEventListener("error",d),s.addEventListener("timeout",p),s.addEventListener("abort",d),e.reportProgress&&(s.addEventListener("progress",b),a!==null&&s.upload&&s.upload.addEventListener("progress",_)),s.send(a),r.next({type:Xe.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",c),s.removeEventListener("timeout",p),e.reportProgress&&(s.removeEventListener("progress",b),a!==null&&s.upload&&s.upload.removeEventListener("progress",_)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(n){return new(n||t)(S(Dt))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Ss=new R(""),Bu="XSRF-TOKEN",$u=new R("",{providedIn:"root",factory:()=>Bu}),Uu="X-XSRF-TOKEN",ju=new R("",{providedIn:"root",factory:()=>Uu}),yn=class{},Hu=(()=>{class t{doc;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(e,n){this.doc=e,this.cookieName=n}getToken(){let e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=dn(e,this.cookieName),this.lastCookieString=e),this.lastToken}static \u0275fac=function(n){return new(n||t)(S(P),S($u))};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();function zu(t,i){let e=t.url.toLowerCase();if(!f(Ss)||t.method==="GET"||t.method==="HEAD"||e.startsWith("http://")||e.startsWith("https://"))return i(t);let n=f(yn).getToken(),o=f(ju);return n!=null&&!t.headers.has(o)&&(t=t.clone({headers:t.headers.set(o,n)})),i(t)}var ci=function(t){return t[t.Interceptors=0]="Interceptors",t[t.LegacyInterceptors=1]="LegacyInterceptors",t[t.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",t[t.NoXsrfProtection=3]="NoXsrfProtection",t[t.JsonpSupport=4]="JsonpSupport",t[t.RequestsMadeViaParent=5]="RequestsMadeViaParent",t[t.Fetch=6]="Fetch",t}(ci||{});function As(t,i){return{\u0275kind:t,\u0275providers:i}}function Ts(...t){let i=[Ds,po,ui,{provide:Lt,useExisting:ui},{provide:Pt,useFactory:()=>f(_s,{optional:!0})??f(po)},{provide:fo,useValue:zu,multi:!0},{provide:Ss,useValue:!0},{provide:yn,useClass:Hu}];for(let e of t)i.push(...e.\u0275providers);return en(i)}var gs=new R("");function Ms(){return As(ci.LegacyInterceptors,[{provide:gs,useFactory:Nu},{provide:fo,useExisting:gs,multi:!0}])}function Gu(){return As(ci.Fetch,[ri,{provide:_s,useExisting:ri},{provide:Pt,useExisting:ri}])}var Wu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({providers:[Ts(Ms())]})}return t})();var ig=(()=>{class t{_doc;constructor(e){this._doc=e}getTitle(){return this._doc.title}setTitle(e){this._doc.title=e||""}static \u0275fac=function(n){return new(n||t)(S(P))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var qu=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:function(n){let o=null;return n?o=new(n||t):o=S(Yu),o},providedIn:"root"})}return t})(),Yu=(()=>{class t extends qu{_doc;constructor(e){super(),this._doc=e}sanitize(e,n){if(n==null)return null;switch(e){case ft.NONE:return n;case ft.HTML:return St(n,"HTML")?ht(n):rr(this._doc,String(n)).toString();case ft.STYLE:return St(n,"Style")?ht(n):n;case ft.SCRIPT:if(St(n,"Script"))return ht(n);throw new O(5200,!1);case ft.URL:return St(n,"URL")?ht(n):or(String(n));case ft.RESOURCE_URL:if(St(n,"ResourceURL"))return ht(n);throw new O(5201,!1);default:throw new O(5202,!1)}}bypassSecurityTrustHtml(e){return Qo(e)}bypassSecurityTrustStyle(e){return er(e)}bypassSecurityTrustScript(e){return tr(e)}bypassSecurityTrustUrl(e){return nr(e)}bypassSecurityTrustResourceUrl(e){return ir(e)}static \u0275fac=function(n){return new(n||t)(S(P))};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();function $t(...t){if(t){let i=[];for(let e=0;e<t.length;e++){let n=t[e];if(!n)continue;let o=typeof n;if(o==="string"||o==="number")i.push(n);else if(o==="object"){let r=Array.isArray(n)?[$t(...n)]:Object.entries(n).map(([s,a])=>a?s:void 0);i=r.length?i.concat(r.filter(s=>!!s)):i}}return i.join(" ").trim()}}function Is(t,i){return t?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}function Je(t,i){if(t&&i){let e=n=>{Is(t,n)||(t.classList?t.classList.add(n):t.className+=" "+n)};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Zu(){return window.innerWidth-document.documentElement.offsetWidth}function xs(t){typeof t=="string"?Je(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.setProperty(t.variableName,Zu()+"px"),Je(document.body,t?.className||"p-overflow-hidden"))}function ot(t,i){if(t&&i){let e=n=>{t.classList?t.classList.remove(n):t.className=t.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," ")};[i].flat().filter(Boolean).forEach(n=>n.split(" ").forEach(e))}}function Os(t){typeof t=="string"?ot(document.body,t||"p-overflow-hidden"):(t!=null&&t.variableName&&document.body.style.removeProperty(t.variableName),ot(document.body,t?.className||"p-overflow-hidden"))}function vn(t){for(let i of document?.styleSheets)try{for(let e of i?.cssRules)for(let n of e?.style)if(t.test(n))return{name:n,value:e.style.getPropertyValue(n).trim()}}catch{}return null}function Rs(t){let i={width:0,height:0};if(t){let[e,n]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display=n,t.style.visibility=e}return i}function vo(){let t=window,i=document,e=i.documentElement,n=i.getElementsByTagName("body")[0],o=t.innerWidth||e.clientWidth||n.clientWidth,r=t.innerHeight||e.clientHeight||n.clientHeight;return{width:o,height:r}}function yo(t){return t?Math.abs(t.scrollLeft):0}function Xu(){let t=document.documentElement;return(window.pageXOffset||yo(t))-(t.clientLeft||0)}function Ju(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}function Qu(t){return t?getComputedStyle(t).direction==="rtl":!1}function ag(t,i,e=!0){var n,o,r,s;if(t){let a=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Rs(t),l=a.height,u=a.width,c=i.offsetHeight,d=i.offsetWidth,p=i.getBoundingClientRect(),h=Ju(),b=Xu(),_=vo(),g,y,w="top";p.top+c+l>_.height?(g=p.top+h-l,w="bottom",g<0&&(g=h)):g=c+p.top+h,p.left+u>_.width?y=Math.max(0,p.left+b+d-u):y=p.left+b,Qu(t)?t.style.insetInlineEnd=y+"px":t.style.insetInlineStart=y+"px",t.style.top=g+"px",t.style.transformOrigin=w,e&&(t.style.marginTop=w==="bottom"?`calc(${(o=(n=vn(/-anchor-gutter$/))==null?void 0:n.value)!=null?o:"2px"} * -1)`:(s=(r=vn(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function ks(t,i){t&&(typeof i=="string"?t.style.cssText=i:Object.entries(i||{}).forEach(([e,n])=>t.style[e]=n))}function Do(t,i){if(t instanceof HTMLElement){let e=t.offsetWidth;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginLeft)+parseFloat(n.marginRight)}return e}return 0}function lg(t,i,e=!0,n=void 0){var o;if(t){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:Rs(t),s=i.offsetHeight,a=i.getBoundingClientRect(),l=vo(),u,c,d=n??"top";if(!n&&a.top+s+r.height>l.height?(u=-1*r.height,d="bottom",a.top+u<0&&(u=-1*a.top)):u=s,r.width>l.width?c=a.left*-1:a.left+r.width>l.width?c=(a.left+r.width-l.width)*-1:c=0,t.style.top=u+"px",t.style.insetInlineStart=c+"px",t.style.transformOrigin=d,e){let p=(o=vn(/-anchor-gutter$/))==null?void 0:o.value;t.style.marginTop=d==="bottom"?`calc(${p??"2px"} * -1)`:p??""}}}function Ns(t){if(t){let i=t.parentNode;return i&&i instanceof ShadowRoot&&i.host&&(i=i.host),i}return null}function ec(t){return!!(t!==null&&typeof t<"u"&&t.nodeName&&Ns(t))}function Ut(t){return typeof Element<"u"?t instanceof Element:t!==null&&typeof t=="object"&&t.nodeType===1&&typeof t.nodeName=="string"}function Ls(t){let i=t;return t&&typeof t=="object"&&(Object.hasOwn(t,"current")?i=t.current:Object.hasOwn(t,"el")&&(Object.hasOwn(t.el,"nativeElement")?i=t.el.nativeElement:i=t.el)),Ut(i)?i:void 0}function tc(t,i){var e,n,o;if(t)switch(t){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@first":return i?.firstElementChild;case"@last":return i?.lastElementChild;case"@child":return(e=i?.children)==null?void 0:e[0];case"@parent":return i?.parentElement;case"@grandparent":return(n=i?.parentElement)==null?void 0:n.parentElement;default:{if(typeof t=="string"){let a=t.match(/^@child\[(\d+)]/);return a?((o=i?.children)==null?void 0:o[parseInt(a[1],10)])||null:document.querySelector(t)||null}let r=(a=>typeof a=="function"&&"call"in a&&"apply"in a)(t)?t():t,s=Ls(r);return ec(s)?s:r?.nodeType===9?r:void 0}}}function ug(t,i){let e=tc(t,i);if(e)e.appendChild(i);else throw new Error("Cannot append "+i+" to "+t)}var mo;function cg(t){if(t){let i=getComputedStyle(t);return t.offsetHeight-t.clientHeight-parseFloat(i.borderTopWidth)-parseFloat(i.borderBottomWidth)}else{if(mo!=null)return mo;let i=document.createElement("div");ks(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetHeight-i.clientHeight;return document.body.removeChild(i),mo=e,e}}var bo;function Fs(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(bo!=null)return bo;let i=document.createElement("div");ks(i,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(i);let e=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),bo=e,e}}function dg(){if(window.getSelection){let t=window.getSelection()||{};t.empty?t.empty():t.removeAllRanges&&t.rangeCount>0&&t.getRangeAt(0).getClientRects().length>0&&t.removeAllRanges()}}function di(t,i={}){if(Ut(t)){let e=(n,o)=>{var r,s;let a=(r=t?.$attrs)!=null&&r[n]?[(s=t?.$attrs)==null?void 0:s[n]]:[];return[o].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?e(n,u):Object.entries(u).map(([p,h])=>n==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([n,o])=>{if(o!=null){let r=n.match(/^on(.+)/);r?t.addEventListener(r[1].toLowerCase(),o):n==="p-bind"||n==="pBind"?di(t,o):(o=n==="class"?[...new Set(e("class",o))].join(" ").trim():n==="style"?e("style",o).join(";").trim():o,(t.$attrs=t.$attrs||{})&&(t.$attrs[n]=o),t.setAttribute(n,o))}})}}function pg(t,i={},...e){if(t){let n=document.createElement(t);return di(n,i),n.append(...e),n}}function hg(t,i){if(t){t.style.opacity="0";let e=+new Date,n="0",o=function(){n=`${+t.style.opacity+(new Date().getTime()-e)/i}`,t.style.opacity=n,e=+new Date,+n<1&&("requestAnimationFrame"in window?requestAnimationFrame(o):setTimeout(o,16))};o()}}function nc(t,i){return Ut(t)?Array.from(t.querySelectorAll(i)):[]}function jt(t,i){return Ut(t)?t.matches(i)?t:t.querySelector(i):null}function fg(t,i){t&&document.activeElement!==t&&t.focus(i)}function gg(t,i){if(Ut(t)){let e=t.getAttribute(i);return isNaN(e)?e==="true"||e==="false"?e==="true":e:+e}}function Ps(t,i=""){let e=nc(t,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`),n=[];for(let o of e)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&n.push(o);return n}function mg(t,i){let e=Ps(t,i);return e.length>0?e[0]:null}function _o(t){if(t){let i=t.offsetHeight,e=getComputedStyle(t);return i-=parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)+parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),i}return 0}function ic(t){if(t){let[i,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetHeight;return t.style.display=e,t.style.visibility=i,n}return 0}function oc(t){if(t){let[i,e]=[t.style.visibility,t.style.display];t.style.visibility="hidden",t.style.display="block";let n=t.offsetWidth;return t.style.display=e,t.style.visibility=i,n}return 0}function bg(t){var i;if(t){let e=(i=Ns(t))==null?void 0:i.childNodes,n=0;if(e)for(let o=0;o<e.length;o++){if(e[o]===t)return n;e[o].nodeType===1&&n++}}return-1}function yg(t,i){let e=Ps(t,i);return e.length>0?e[e.length-1]:null}function Co(t){if(t){let i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||yo(document.documentElement)||yo(document.body)||0)}}return{top:"auto",left:"auto"}}function pi(t,i){if(t){let e=t.offsetHeight;if(i){let n=getComputedStyle(t);e+=parseFloat(n.marginTop)+parseFloat(n.marginBottom)}return e}return 0}function vg(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function Eo(t){if(t){let i=t.offsetWidth,e=getComputedStyle(t);return i-=parseFloat(e.paddingLeft)+parseFloat(e.paddingRight)+parseFloat(e.borderLeftWidth)+parseFloat(e.borderRightWidth),i}return 0}function Dg(){return/(android)/i.test(navigator.userAgent)}function _g(t){return!!(t&&t.offsetParent!=null)}function Cg(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window)}function Eg(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function wg(t,i){var e,n;if(t){let o=t.parentElement,r=Co(o),s=vo(),a=t.offsetParent?t.offsetWidth:oc(t),l=t.offsetParent?t.offsetHeight:ic(t),u=Do((e=o?.children)==null?void 0:e[0]),c=pi((n=o?.children)==null?void 0:n[0]),d="",p="";r.left+u+a>s.width-Fs()?r.left<a?i%2===1?d=r.left?"-"+r.left+"px":"100%":i%2===0&&(d=s.width-a-Fs()+"px"):d="-100%":d="100%",t.getBoundingClientRect().top+c+l>s.height?p=`-${l-c}px`:p="0px",t.style.top=p,t.style.insetInlineStart=d}}function Vs(t){var i;t&&("remove"in Element.prototype?t.remove():(i=t.parentNode)==null||i.removeChild(t))}function Sg(t,i){let e=Ls(t);if(e)e.removeChild(i);else throw new Error("Cannot remove "+i+" from "+t)}function Ag(t,i){let e=getComputedStyle(t).getPropertyValue("borderTopWidth"),n=e?parseFloat(e):0,o=getComputedStyle(t).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=t.getBoundingClientRect(),a=i.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-n-r,l=t.scrollTop,u=t.clientHeight,c=pi(i);a<0?t.scrollTop=l+a:a+c>u&&(t.scrollTop=l+a-u+c)}function Tg(t,i="",e){Ut(t)&&e!==null&&e!==void 0&&t.setAttribute(i,e)}function Bs(){let t=new Map;return{on(i,e){let n=t.get(i);return n?n.push(e):n=[e],t.set(i,n),this},off(i,e){let n=t.get(i);return n&&n.splice(n.indexOf(e)>>>0,1),this},emit(i,e){let n=t.get(i);n&&n.forEach(o=>{o(e)})},clear(){t.clear()}}}var rc=Object.defineProperty,$s=Object.getOwnPropertySymbols,sc=Object.prototype.hasOwnProperty,ac=Object.prototype.propertyIsEnumerable,Us=(t,i,e)=>i in t?rc(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,lc=(t,i)=>{for(var e in i||(i={}))sc.call(i,e)&&Us(t,e,i[e]);if($s)for(var e of $s(i))ac.call(i,e)&&Us(t,e,i[e]);return t};function Ue(t){return t==null||t===""||Array.isArray(t)&&t.length===0||!(t instanceof Date)&&typeof t=="object"&&Object.keys(t).length===0}function wo(t,i,e=new WeakSet){if(t===i)return!0;if(!t||!i||typeof t!="object"||typeof i!="object"||e.has(t)||e.has(i))return!1;e.add(t).add(i);let n=Array.isArray(t),o=Array.isArray(i),r,s,a;if(n&&o){if(s=t.length,s!=i.length)return!1;for(r=s;r--!==0;)if(!wo(t[r],i[r],e))return!1;return!0}if(n!=o)return!1;let l=t instanceof Date,u=i instanceof Date;if(l!=u)return!1;if(l&&u)return t.getTime()==i.getTime();let c=t instanceof RegExp,d=i instanceof RegExp;if(c!=d)return!1;if(c&&d)return t.toString()==i.toString();let p=Object.keys(t);if(s=p.length,s!==Object.keys(i).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(i,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!wo(t[a],i[a],e))return!1;return!0}function uc(t,i){return wo(t,i)}function Hs(t){return typeof t=="function"&&"call"in t&&"apply"in t}function U(t){return!Ue(t)}function rt(t,i){if(!t||!i)return null;try{let e=t[i];if(U(e))return e}catch{}if(Object.keys(t).length){if(Hs(i))return i(t);if(i.indexOf(".")===-1)return t[i];{let e=i.split("."),n=t;for(let o=0,r=e.length;o<r;++o){if(n==null)return null;n=n[e[o]]}return n}}return null}function je(t,i,e){return e?rt(t,e)===rt(i,e):uc(t,i)}function zs(t,i){if(t!=null&&i&&i.length){for(let e of i)if(je(t,e))return!0}return!1}function Oe(t,i=!0){return t instanceof Object&&t.constructor===Object&&(i||Object.keys(t).length!==0)}function Gs(t={},i={}){let e=lc({},t);return Object.keys(i).forEach(n=>{let o=n;Oe(i[o])&&o in t&&Oe(t[o])?e[o]=Gs(t[o],i[o]):e[o]=i[o]}),e}function So(...t){return t.reduce((i,e,n)=>n===0?e:Gs(i,e),{})}function Ig(t,i){let e=-1;if(i){for(let n=0;n<i.length;n++)if(i[n]===t){e=n;break}}return e}function xg(t,i){let e;if(U(t))try{e=t.findLast(i)}catch{e=[...t].reverse().find(i)}return e}function Og(t,i){let e=-1;if(U(t))try{e=t.findLastIndex(i)}catch{e=t.lastIndexOf([...t].reverse().find(i))}return e}function ge(t,...i){return Hs(t)?t(...i):t}function st(t,i=!0){return typeof t=="string"&&(i||t!=="")}function js(t){return st(t)?t.replace(/(-|_)/g,"").toLowerCase():t}function hi(t,i="",e={}){let n=js(i).split("."),o=n.shift();if(o){if(Oe(t)){let r=Object.keys(t).find(s=>js(s)===o)||"";return hi(ge(t[r],e),n.join("."),e)}return}return ge(t,e)}function cc(t,i=!0){return Array.isArray(t)&&(i||t.length!==0)}function Rg(t){return t instanceof Date}function Ws(t){return U(t)&&!isNaN(t)}function kg(t=""){return U(t)&&t.length===1&&!!t.match(/\S| /)}function Re(t,i){if(i){let e=i.test(t);return i.lastIndex=0,e}return!1}function Ao(...t){return So(...t)}function _t(t){return t&&t.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":").trim()}function ye(t){if(t&&/[\xC0-\xFF\u0100-\u017E]/.test(t)){let i={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let e in i)t=t.replace(i[e],e)}return t}function Ng(t,i,e){t&&i!==e&&(e>=t.length&&(e%=t.length,i%=t.length),t.splice(e,0,t.splice(i,1)[0]))}function fi(t){return st(t)?t.replace(/(_)/g,"-").replace(/[A-Z]/g,(i,e)=>e===0?i:"-"+i.toLowerCase()).toLowerCase():t}var gi={};function Dn(t="pui_id_"){return Object.hasOwn(gi,t)||(gi[t]=0),gi[t]++,`${t}${gi[t]}`}var Ks=["*"],dc=function(t){return t[t.ACCEPT=0]="ACCEPT",t[t.REJECT=1]="REJECT",t[t.CANCEL=2]="CANCEL",t}(dc||{}),Ug=(()=>{class t{requireConfirmationSource=new de;acceptConfirmationSource=new de;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(e){return this.requireConfirmationSource.next(e),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var oe=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return t})(),jg=(()=>{class t{static AND="and";static OR="or"}return t})(),Hg=(()=>{class t{filter(e,n,o,r,s){let a=[];if(e)for(let l of e)for(let u of n){let c=rt(l,u);if(this.filters[r](c,o,s)){a.push(l);break}}return a}filters={startsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=ye(n.toString()).toLocaleLowerCase(o);return ye(e.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=ye(n.toString()).toLocaleLowerCase(o);return ye(e.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(e,n,o)=>{if(n==null||typeof n=="string"&&n.trim()==="")return!0;if(e==null)return!1;let r=ye(n.toString()).toLocaleLowerCase(o);return ye(e.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(e,n,o)=>{if(n==null||n.trim()==="")return!0;if(e==null)return!1;let r=ye(n.toString()).toLocaleLowerCase(o),s=ye(e.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()===n.getTime():e==n?!0:ye(e.toString()).toLocaleLowerCase(o)==ye(n.toString()).toLocaleLowerCase(o),notEquals:(e,n,o)=>n==null||typeof n=="string"&&n.trim()===""?!1:e==null?!0:e.getTime&&n.getTime?e.getTime()!==n.getTime():e==n?!1:ye(e.toString()).toLocaleLowerCase(o)!=ye(n.toString()).toLocaleLowerCase(o),in:(e,n)=>{if(n==null||n.length===0)return!0;for(let o=0;o<n.length;o++)if(je(e,n[o]))return!0;return!1},between:(e,n)=>n==null||n[0]==null||n[1]==null?!0:e==null?!1:e.getTime?n[0].getTime()<=e.getTime()&&e.getTime()<=n[1].getTime():n[0]<=e&&e<=n[1],lt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<n.getTime():e<n,lte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()<=n.getTime():e<=n,gt:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>n.getTime():e>n,gte:(e,n,o)=>n==null?!0:e==null?!1:e.getTime&&n.getTime?e.getTime()>=n.getTime():e>=n,is:(e,n,o)=>this.filters.equals(e,n,o),isNot:(e,n,o)=>this.filters.notEquals(e,n,o),before:(e,n,o)=>this.filters.lt(e,n,o),after:(e,n,o)=>this.filters.gt(e,n,o),dateIs:(e,n)=>n==null?!0:e==null?!1:e.toDateString()===n.toDateString(),dateIsNot:(e,n)=>n==null?!0:e==null?!1:e.toDateString()!==n.toDateString(),dateBefore:(e,n)=>n==null?!0:e==null?!1:e.getTime()<n.getTime(),dateAfter:(e,n)=>n==null?!0:e==null?!1:(e.setHours(0,0,0,0),e.getTime()>n.getTime())};register(e,n){this.filters[e]=n}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),zg=(()=>{class t{messageSource=new de;clearSource=new de;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(e){e&&this.messageSource.next(e)}addAll(e){e&&e.length&&this.messageSource.next(e)}clear(e){this.clearSource.next(e||null)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})(),Gg=(()=>{class t{clickSource=new de;clickObservable=this.clickSource.asObservable();add(e){e&&this.clickSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["p-header"]],standalone:!1,ngContentSelectors:Ks,decls:1,vars:0,template:function(n,o){n&1&&(Ge(),We(0))},encapsulation:2})}return t})(),Kg=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275cmp=q({type:t,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:Ks,decls:1,vars:0,template:function(n,o){n&1&&(Ge(),We(0))},encapsulation:2})}return t})(),at=(()=>{class t{template;type;name;constructor(e){this.template=e}getType(){return this.name}static \u0275fac=function(n){return new(n||t)(F(At))};static \u0275dir=A({type:t,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return t})(),J=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[ie]})}return t})(),qg=(()=>{class t{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return t})(),Yg=(()=>{class t{dragStartSource=new de;dragStopSource=new de;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(e){this.dragStartSource.next(e)}stopDrag(e){this.dragStopSource.next(e)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var pc=Object.defineProperty,hc=Object.defineProperties,fc=Object.getOwnPropertyDescriptors,mi=Object.getOwnPropertySymbols,Zs=Object.prototype.hasOwnProperty,Xs=Object.prototype.propertyIsEnumerable,qs=(t,i,e)=>i in t?pc(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e,W=(t,i)=>{for(var e in i||(i={}))Zs.call(i,e)&&qs(t,e,i[e]);if(mi)for(var e of mi(i))Xs.call(i,e)&&qs(t,e,i[e]);return t},zt=(t,i)=>hc(t,fc(i)),Qe=(t,i)=>{var e={};for(var n in t)Zs.call(t,n)&&i.indexOf(n)<0&&(e[n]=t[n]);if(t!=null&&mi)for(var n of mi(t))i.indexOf(n)<0&&Xs.call(t,n)&&(e[n]=t[n]);return e};var gc=Bs(),ve=gc,_n=/{([^}]*)}/g,Js=/(\d+\s+[\+\-\*\/]\s+\d+)/g,Qs=/var\([^)]+\)/g;function Ys(t){return st(t)?t.replace(/[A-Z]/g,(i,e)=>e===0?i:"."+i.toLowerCase()).toLowerCase():t}function mc(t){return Oe(t)&&t.hasOwnProperty("$value")&&t.hasOwnProperty("$type")?t.$value:t}function bc(t){return t.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function To(t="",i=""){return bc(`${st(t,!1)&&st(i,!1)?`${t}-`:t}${i}`)}function ea(t="",i=""){return`--${To(t,i)}`}function yc(t=""){let i=(t.match(/{/g)||[]).length,e=(t.match(/}/g)||[]).length;return(i+e)%2!==0}function ta(t,i="",e="",n=[],o){if(st(t)){let r=t.trim();if(yc(r))return;if(Re(r,_n)){let s=r.replaceAll(_n,a=>{let l=a.replace(/{|}/g,"").split(".").filter(u=>!n.some(c=>Re(u,c)));return`var(${ea(e,fi(l.join("-")))}${U(o)?`, ${o}`:""})`});return Re(s.replace(Qs,"0"),Js)?`calc(${s})`:s}return r}else if(Ws(t))return t}function vc(t,i,e){st(i,!1)&&t.push(`${i}:${e};`)}function Ht(t,i){return t?`${t}{${i}}`:""}function na(t,i){if(t.indexOf("dt(")===-1)return t;function e(s,a){let l=[],u=0,c="",d=null,p=0;for(;u<=s.length;){let h=s[u];if((h==='"'||h==="'"||h==="`")&&s[u-1]!=="\\"&&(d=d===h?null:h),!d&&(h==="("&&p++,h===")"&&p--,(h===","||u===s.length)&&p===0)){let b=c.trim();b.startsWith("dt(")?l.push(na(b,a)):l.push(n(b)),c="",u++;continue}h!==void 0&&(c+=h),u++}return l}function n(s){let a=s[0];if((a==='"'||a==="'"||a==="`")&&s[s.length-1]===a)return s.slice(1,-1);let l=Number(s);return isNaN(l)?s:l}let o=[],r=[];for(let s=0;s<t.length;s++)if(t[s]==="d"&&t.slice(s,s+3)==="dt(")r.push(s),s+=2;else if(t[s]===")"&&r.length>0){let a=r.pop();r.length===0&&o.push([a,s])}if(!o.length)return t;for(let s=o.length-1;s>=0;s--){let[a,l]=o[s],u=t.slice(a+3,l),c=e(u,i),d=i(...c);t=t.slice(0,a)+d+t.slice(l+1)}return t}var Fo=t=>{var i;let e=M.getTheme(),n=Mo(e,t,void 0,"variable"),o=(i=n?.match(/--[\w-]+/g))==null?void 0:i[0],r=Mo(e,t,void 0,"value");return{name:o,variable:n,value:r}},et=(...t)=>Mo(M.getTheme(),...t),Mo=(t={},i,e,n)=>{if(i){let{variable:o,options:r}=M.defaults||{},{prefix:s,transform:a}=t?.options||r||{},l=Re(i,_n)?i:`{${i}}`;return n==="value"||Ue(n)&&a==="strict"?M.getTokenValue(i):ta(l,void 0,s,[o.excludedKeyRegex],e)}return""};function Gt(t,...i){if(t instanceof Array){let e=t.reduce((n,o,r)=>{var s;return n+o+((s=ge(i[r],{dt:et}))!=null?s:"")},"");return na(e,et)}return ge(t,{dt:et})}var Dc=(t={})=>{let{preset:i,options:e}=t;return{preset(n){return i=i?Ao(i,n):n,this},options(n){return e=e?W(W({},e),n):n,this},primaryPalette(n){let{semantic:o}=i||{};return i=zt(W({},i),{semantic:zt(W({},o),{primary:n})}),this},surfacePalette(n){var o,r;let{semantic:s}=i||{},a=n&&Object.hasOwn(n,"light")?n.light:n,l=n&&Object.hasOwn(n,"dark")?n.dark:n,u={colorScheme:{light:W(W({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:W(W({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return i=zt(W({},i),{semantic:W(W({},s),u)}),this},define({useDefaultPreset:n=!1,useDefaultOptions:o=!1}={}){return{preset:n?M.getPreset():i,options:o?M.getOptions():e}},update({mergePresets:n=!0,mergeOptions:o=!0}={}){let r={preset:n?Ao(M.getPreset(),i):i,options:o?W(W({},M.getOptions()),e):e};return M.setTheme(r),r},use(n){let o=this.define(n);return M.setTheme(o),o}}};function _c(t,i={}){let e=M.defaults.variable,{prefix:n=e.prefix,selector:o=e.selector,excludedKeyRegex:r=e.excludedKeyRegex}=i,s=[],a=[],l=[{node:t,path:n}];for(;l.length;){let{node:c,path:d}=l.pop();for(let p in c){let h=c[p],b=mc(h),_=Re(p,r)?To(d):To(d,fi(p));if(Oe(b))l.push({node:b,path:_});else{let g=ea(_),y=ta(b,_,n,[r]);vc(a,g,y);let w=_;n&&w.startsWith(n+"-")&&(w=w.slice(n.length+1)),s.push(w.replace(/-/g,"."))}}}let u=a.join("");return{value:a,tokens:s,declarations:u,css:Ht(o,u)}}var ke={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(t){return{type:"class",selector:t,matched:this.pattern.test(t.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(t){return{type:"attr",selector:`:root${t}`,matched:this.pattern.test(t.trim())}}},media:{pattern:/^@media (.*)$/,resolve(t){return{type:"media",selector:t,matched:this.pattern.test(t.trim())}}},system:{pattern:/^system$/,resolve(t){return{type:"system",selector:"@media (prefers-color-scheme: dark)",matched:this.pattern.test(t.trim())}}},custom:{resolve(t){return{type:"custom",selector:t,matched:!0}}}},resolve(t){let i=Object.keys(this.rules).filter(e=>e!=="custom").map(e=>this.rules[e]);return[t].flat().map(e=>{var n;return(n=i.map(o=>o.resolve(e)).find(o=>o.matched))!=null?n:this.rules.custom.resolve(e)})}},_toVariables(t,i){return _c(t,{prefix:i?.prefix})},getCommon({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s,a,l,u,c,d;let{preset:p,options:h}=i,b,_,g,y,w,z,I;if(U(p)&&h.transform!=="strict"){let{primitive:me,semantic:De,extend:Ne}=p,it=De||{},{colorScheme:An}=it,Tn=Qe(it,["colorScheme"]),Mn=Ne||{},{colorScheme:Fn}=Mn,Xt=Qe(Mn,["colorScheme"]),Jt=An||{},{dark:In}=Jt,xn=Qe(Jt,["dark"]),On=Fn||{},{dark:Rn}=On,kn=Qe(On,["dark"]),Nn=U(me)?this._toVariables({primitive:me},h):{},Ln=U(Tn)?this._toVariables({semantic:Tn},h):{},Pn=U(xn)?this._toVariables({light:xn},h):{},Bo=U(In)?this._toVariables({dark:In},h):{},$o=U(Xt)?this._toVariables({semantic:Xt},h):{},Uo=U(kn)?this._toVariables({light:kn},h):{},jo=U(Rn)?this._toVariables({dark:Rn},h):{},[ol,rl]=[(r=Nn.declarations)!=null?r:"",Nn.tokens],[sl,al]=[(s=Ln.declarations)!=null?s:"",Ln.tokens||[]],[ll,ul]=[(a=Pn.declarations)!=null?a:"",Pn.tokens||[]],[cl,dl]=[(l=Bo.declarations)!=null?l:"",Bo.tokens||[]],[pl,hl]=[(u=$o.declarations)!=null?u:"",$o.tokens||[]],[fl,gl]=[(c=Uo.declarations)!=null?c:"",Uo.tokens||[]],[ml,bl]=[(d=jo.declarations)!=null?d:"",jo.tokens||[]];b=this.transformCSS(t,ol,"light","variable",h,n,o),_=rl;let yl=this.transformCSS(t,`${sl}${ll}`,"light","variable",h,n,o),vl=this.transformCSS(t,`${cl}`,"dark","variable",h,n,o);g=`${yl}${vl}`,y=[...new Set([...al,...ul,...dl])];let Dl=this.transformCSS(t,`${pl}${fl}color-scheme:light`,"light","variable",h,n,o),_l=this.transformCSS(t,`${ml}color-scheme:dark`,"dark","variable",h,n,o);w=`${Dl}${_l}`,z=[...new Set([...hl,...gl,...bl])],I=ge(p.css,{dt:et})}return{primitive:{css:b,tokens:_},semantic:{css:g,tokens:y},global:{css:w,tokens:z},style:I}},getPreset({name:t="",preset:i={},options:e,params:n,set:o,defaults:r,selector:s}){var a,l,u;let c,d,p;if(U(i)&&e.transform!=="strict"){let h=t.replace("-directive",""),b=i,{colorScheme:_,extend:g,css:y}=b,w=Qe(b,["colorScheme","extend","css"]),z=g||{},{colorScheme:I}=z,me=Qe(z,["colorScheme"]),De=_||{},{dark:Ne}=De,it=Qe(De,["dark"]),An=I||{},{dark:Tn}=An,Mn=Qe(An,["dark"]),Fn=U(w)?this._toVariables({[h]:W(W({},w),me)},e):{},Xt=U(it)?this._toVariables({[h]:W(W({},it),Mn)},e):{},Jt=U(Ne)?this._toVariables({[h]:W(W({},Ne),Tn)},e):{},[In,xn]=[(a=Fn.declarations)!=null?a:"",Fn.tokens||[]],[On,Rn]=[(l=Xt.declarations)!=null?l:"",Xt.tokens||[]],[kn,Nn]=[(u=Jt.declarations)!=null?u:"",Jt.tokens||[]],Ln=this.transformCSS(h,`${In}${On}`,"light","variable",e,o,r,s),Pn=this.transformCSS(h,kn,"dark","variable",e,o,r,s);c=`${Ln}${Pn}`,d=[...new Set([...xn,...Rn,...Nn])],p=ge(y,{dt:et})}return{css:c,tokens:d,style:p}},getPresetC({name:t="",theme:i={},params:e,set:n,defaults:o}){var r;let{preset:s,options:a}=i,l=(r=s?.components)==null?void 0:r[t];return this.getPreset({name:t,preset:l,options:a,params:e,set:n,defaults:o})},getPresetD({name:t="",theme:i={},params:e,set:n,defaults:o}){var r,s;let a=t.replace("-directive",""),{preset:l,options:u}=i,c=((r=l?.components)==null?void 0:r[a])||((s=l?.directives)==null?void 0:s[a]);return this.getPreset({name:a,preset:c,options:u,params:e,set:n,defaults:o})},applyDarkColorScheme(t){return!(t.darkModeSelector==="none"||t.darkModeSelector===!1)},getColorSchemeOption(t,i){var e;return this.applyDarkColorScheme(t)?this.regex.resolve(t.darkModeSelector===!0?i.options.darkModeSelector:(e=t.darkModeSelector)!=null?e:i.options.darkModeSelector):[]},getLayerOrder(t,i={},e,n){let{cssLayer:o}=i;return o?`@layer ${ge(o.order||o.name||"primeui",e)}`:""},getCommonStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){let s=this.getCommon({name:t,theme:i,params:e,set:o,defaults:r}),a=Object.entries(n).reduce((l,[u,c])=>l.push(`${u}="${c}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[u,c])=>{if(Oe(c)&&Object.hasOwn(c,"css")){let d=_t(c.css),p=`${u}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:t="",theme:i={},params:e,props:n={},set:o,defaults:r}){var s;let a={name:t,theme:i,params:e,set:o,defaults:r},l=(s=t.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,u=Object.entries(n).reduce((c,[d,p])=>c.push(`${d}="${p}"`)&&c,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${t}-variables" ${u}>${_t(l)}</style>`:""},createTokens(t={},i,e="",n="",o={}){let r=function(a,l={},u=[]){if(u.includes(this.path))return console.warn(`Circular reference detected at ${this.path}`),{colorScheme:a,path:this.path,paths:l,value:void 0};u.push(this.path),l.name=this.path,l.binding||(l.binding={});let c=this.value;if(typeof this.value=="string"&&_n.test(this.value)){let d=this.value.trim().replace(_n,p=>{var h;let b=p.slice(1,-1),_=this.tokens[b];if(!_)return console.warn(`Token not found for path: ${b}`),"__UNRESOLVED__";let g=_.computed(a,l,u);return Array.isArray(g)&&g.length===2?`light-dark(${g[0].value},${g[1].value})`:(h=g?.value)!=null?h:"__UNRESOLVED__"});c=Js.test(d.replace(Qs,"0"))?`calc(${d})`:d}return Ue(l.binding)&&delete l.binding,u.pop(),{colorScheme:a,path:this.path,paths:l,value:c.includes("__UNRESOLVED__")?void 0:c}},s=(a,l,u)=>{Object.entries(a).forEach(([c,d])=>{let p=Re(c,i.variable.excludedKeyRegex)?l:l?`${l}.${Ys(c)}`:Ys(c),h=u?`${u}.${c}`:c;Oe(d)?s(d,p,h):(o[p]||(o[p]={paths:[],computed:(b,_={},g=[])=>{if(o[p].paths.length===1)return o[p].paths[0].computed(o[p].paths[0].scheme,_.binding,g);if(b&&b!=="none")for(let y=0;y<o[p].paths.length;y++){let w=o[p].paths[y];if(w.scheme===b)return w.computed(b,_.binding,g)}return o[p].paths.map(y=>y.computed(y.scheme,_[y.scheme],g))}}),o[p].paths.push({path:h,value:d,scheme:h.includes("colorScheme.light")?"light":h.includes("colorScheme.dark")?"dark":"none",computed:r,tokens:o}))})};return s(t,e,n),o},getTokenValue(t,i,e){var n;let o=(a=>a.split(".").filter(l=>!Re(l.toLowerCase(),e.variable.excludedKeyRegex)).join("."))(i),r=i.includes("colorScheme.light")?"light":i.includes("colorScheme.dark")?"dark":void 0,s=[(n=t[o])==null?void 0:n.computed(r)].flat().filter(a=>a);return s.length===1?s[0].value:s.reduce((a={},l)=>{let u=l,{colorScheme:c}=u,d=Qe(u,["colorScheme"]);return a[c]=d,a},void 0)},getSelectorRule(t,i,e,n){return e==="class"||e==="attr"?Ht(U(i)?`${t}${i},${t} ${i}`:t,n):Ht(t,Ht(i??":root",n))},transformCSS(t,i,e,n,o={},r,s,a){if(U(i)){let{cssLayer:l}=o;if(n!=="style"){let u=this.getColorSchemeOption(o,s);i=e==="dark"?u.reduce((c,{type:d,selector:p})=>(U(p)&&(c+=p.includes("[CSS]")?p.replace("[CSS]",i):this.getSelectorRule(p,a,d,i)),c),""):Ht(a??":root",i)}if(l){let u={name:"primeui",order:"primeui"};Oe(l)&&(u.name=ge(l.name,{name:t,type:n})),U(u.name)&&(i=Ht(`@layer ${u.name}`,i),r?.layerNames(u.name))}return i}return""}},M={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(t={}){let{theme:i}=t;i&&(this._theme=zt(W({},i),{options:W(W({},this.defaults.options),i.options)}),this._tokens=ke.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var t;return((t=this.theme)==null?void 0:t.preset)||{}},get options(){var t;return((t=this.theme)==null?void 0:t.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(t){this.update({theme:t}),ve.emit("theme:change",t)},getPreset(){return this.preset},setPreset(t){this._theme=zt(W({},this.theme),{preset:t}),this._tokens=ke.createTokens(t,this.defaults),this.clearLoadedStyleNames(),ve.emit("preset:change",t),ve.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(t){this._theme=zt(W({},this.theme),{options:t}),this.clearLoadedStyleNames(),ve.emit("options:change",t),ve.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(t){this._layerNames.add(t)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(t){return ke.getTokenValue(this.tokens,t,this.defaults)},getCommon(t="",i){return ke.getCommon({name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ke.getPresetC(e)},getDirective(t="",i){let e={name:t,theme:this.theme,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ke.getPresetD(e)},getCustomPreset(t="",i,e,n){let o={name:t,preset:i,options:this.options,selector:e,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return ke.getPreset(o)},getLayerOrderCSS(t=""){return ke.getLayerOrder(t,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(t="",i,e="style",n){return ke.transformCSS(t,i,n,e,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(t="",i,e={}){return ke.getCommonStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(t,i,e={}){return ke.getStyleSheet({name:t,theme:this.theme,params:i,props:e,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(t){this._loadingStyles.add(t)},onStyleUpdated(t){this._loadingStyles.add(t)},onStyleLoaded(t,{name:i}){this._loadingStyles.size&&(this._loadingStyles.delete(i),ve.emit(`theme:${i}:load`,t),!this._loadingStyles.size&&ve.emit("theme:load"))}};function rm(...t){let i=So(M.getPreset(),...t);return M.setPreset(i),i}function sm(t){return Dc().surfacePalette(t).update().preset}var ia=`
    *,
    ::before,
    ::after {
        box-sizing: border-box;
    }

    /* Non vue overlay animations */
    .p-connected-overlay {
        opacity: 0;
        transform: scaleY(0.8);
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-visible {
        opacity: 1;
        transform: scaleY(1);
    }

    .p-connected-overlay-hidden {
        opacity: 0;
        transform: scaleY(1);
        transition: opacity 0.1s linear;
    }

    /* Vue based overlay animations */
    .p-connected-overlay-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-connected-overlay-leave-to {
        opacity: 0;
    }

    .p-connected-overlay-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-connected-overlay-leave-active {
        transition: opacity 0.1s linear;
    }

    /* Toggleable Content */
    .p-toggleable-content-enter-from,
    .p-toggleable-content-leave-to {
        max-height: 0;
    }

    .p-toggleable-content-enter-to,
    .p-toggleable-content-leave-from {
        max-height: 1000px;
    }

    .p-toggleable-content-leave-active {
        overflow: hidden;
        transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
    }

    .p-toggleable-content-enter-active {
        overflow: hidden;
        transition: max-height 1s ease-in-out;
    }

    .p-disabled,
    .p-disabled * {
        cursor: default;
        pointer-events: none;
        user-select: none;
    }

    .p-disabled,
    .p-component:disabled {
        opacity: dt('disabled.opacity');
    }

    .pi {
        font-size: dt('icon.size');
    }

    .p-icon {
        width: dt('icon.size');
        height: dt('icon.size');
    }

    .p-overlay-mask {
        background: dt('mask.background');
        color: dt('mask.color');
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .p-overlay-mask-enter {
        animation: p-overlay-mask-enter-animation dt('mask.transition.duration') forwards;
    }

    .p-overlay-mask-leave {
        animation: p-overlay-mask-leave-animation dt('mask.transition.duration') forwards;
    }

    @keyframes p-overlay-mask-enter-animation {
        from {
            background: transparent;
        }
        to {
            background: dt('mask.background');
        }
    }
    @keyframes p-overlay-mask-leave-animation {
        from {
            background: dt('mask.background');
        }
        to {
            background: transparent;
        }
    }
`;var Cc=0,oa=(()=>{class t{document=f(P);use(e,n={}){let o=!1,r=e,s=null,{immediate:a=!0,manual:l=!1,name:u=`style_${++Cc}`,id:c=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:b={}}=n;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${u}"]`)||c&&this.document.getElementById(c)||this.document.createElement("style"),!s.isConnected){r=e;let _=this.document.head;h&&_.firstChild?_.insertBefore(s,_.firstChild):_.appendChild(s),di(s,{type:"text/css",media:d,nonce:p,"data-primeng-style-id":u})}return s.textContent!==r&&(s.textContent=r),{id:c,name:u,el:s,css:r}}}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Wt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(t){return this._loadedStyleNames.has(t)},setLoadedStyleName(t){this._loadedStyleNames.add(t)},deleteLoadedStyleName(t){this._loadedStyleNames.delete(t)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Ec=`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: dt('scrollbar.width');
}
`,K=(()=>{class t{name="base";useStyle=f(oa);theme=void 0;css=void 0;classes={};inlineStyles={};load=(e,n={},o=r=>r)=>{let r=o(Gt`${ge(e,{dt:et})}`);return r?this.useStyle.use(_t(r),C({name:this.name},n)):{}};loadCSS=(e={})=>this.load(this.css,e);loadTheme=(e={},n="")=>this.load(this.theme,e,(o="")=>M.transformCSS(e.name||this.name,`${o}${Gt`${n}`}`));loadGlobalCSS=(e={})=>this.load(Ec,e);loadGlobalTheme=(e={},n="")=>this.load(ia,e,(o="")=>M.transformCSS(e.name||this.name,`${o}${Gt`${n}`}`));getCommonTheme=e=>M.getCommon(this.name,e);getComponentTheme=e=>M.getComponent(this.name,e);getDirectiveTheme=e=>M.getDirective(this.name,e);getPresetTheme=(e,n,o)=>M.getCustomPreset(this.name,e,n,o);getLayerOrderThemeCSS=()=>M.getLayerOrderCSS(this.name);getStyleSheet=(e="",n={})=>{if(this.css){let o=ge(this.css,{dt:et}),r=_t(Gt`${o}${e}`),s=Object.entries(n).reduce((a,[l,u])=>a.push(`${l}="${u}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(e,n={})=>M.getCommonStyleSheet(this.name,e,n);getThemeStyleSheet=(e,n={})=>{let o=[M.getStyleSheet(this.name,e,n)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=Gt`${ge(this.theme,{dt:et})}`,a=_t(M.transformCSS(r,s)),l=Object.entries(n).reduce((u,[c,d])=>u.push(`${c}="${d}"`)&&u,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var wc=(()=>{class t{theme=Q(void 0);csp=Q({nonce:void 0});isThemeChanged=!1;document=f(P);baseStyle=f(K);constructor(){nn(()=>{ve.on("theme:change",e=>{Pe(()=>{this.isThemeChanged=!0,this.theme.set(e)})})}),nn(()=>{let e=this.theme();this.document&&e&&(this.isThemeChanged||this.onThemeChange(e),this.isThemeChanged=!1)})}ngOnDestroy(){M.clearLoadedStyleNames(),ve.clear()}onThemeChange(e){M.setTheme(e),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!M.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(e?.css,C({name:"primitive-variables"},s)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,C({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},s),r),M.setLoadedStyleName("common")}}setThemeConfig(e){let{theme:n,csp:o}=e||{};n&&this.theme.set(n),o&&this.csp.set(o)}static \u0275fac=function(n){return new(n||t)};static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Io=(()=>{class t extends wc{ripple=Q(!1);platformId=f(Ae);inputStyle=Q(null);inputVariant=Q(null);overlayAppendTo=Q("self");overlayOptions={};csp=Q({nonce:void 0});filterMatchModeOptions={text:[oe.STARTS_WITH,oe.CONTAINS,oe.NOT_CONTAINS,oe.ENDS_WITH,oe.EQUALS,oe.NOT_EQUALS],numeric:[oe.EQUALS,oe.NOT_EQUALS,oe.LESS_THAN,oe.LESS_THAN_OR_EQUAL_TO,oe.GREATER_THAN,oe.GREATER_THAN_OR_EQUAL_TO],date:[oe.DATE_IS,oe.DATE_IS_NOT,oe.DATE_BEFORE,oe.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",completed:"Completed",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new de;translationObserver=this.translationSource.asObservable();getTranslation(e){return this.translation[e]}setTranslation(e){this.translation=C(C({},this.translation),e),this.translationSource.next(this.translation)}setConfig(e){let{csp:n,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:u,filterMatchModeOptions:c,overlayAppendTo:d}=e||{};n&&this.csp.set(n),d&&this.overlayAppendTo.set(d),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),u&&this.setTranslation(u),c&&(this.filterMatchModeOptions=c),a&&this.setThemeConfig({theme:a,csp:n})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),Sc=new R("PRIME_NG_CONFIG");function Fm(...t){let i=t?.map(n=>({provide:Sc,useValue:n,multi:!1})),e=ur(()=>{let n=f(Io);t?.forEach(o=>n.setConfig(o))});return en([...i,e])}var ha=(()=>{class t{_renderer;_elementRef;onChange=e=>{};onTouched=()=>{};constructor(e,n){this._renderer=e,this._elementRef=n}setProperty(e,n){this._renderer.setProperty(this._elementRef.nativeElement,e,n)}registerOnTouched(e){this.onTouched=e}registerOnChange(e){this.onChange=e}setDisabledState(e){this.setProperty("disabled",e)}static \u0275fac=function(n){return new(n||t)(F(He),F(Se))};static \u0275dir=A({type:t})}return t})(),fa=(()=>{class t extends ha{static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,features:[E]})}return t})(),nt=new R("");var Ac={provide:nt,useExisting:Ee(()=>ga),multi:!0};function Tc(){let t=_e()?_e().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Mc=new R(""),ga=(()=>{class t extends ha{_compositionMode;_composing=!1;constructor(e,n,o){super(e,n),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!Tc())}writeValue(e){let n=e??"";this.setProperty("value",n)}_handleInput(e){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(e)}_compositionStart(){this._composing=!0}_compositionEnd(e){this._composing=!1,this._compositionMode&&this.onChange(e)}static \u0275fac=function(n){return new(n||t)(F(He),F(Se),F(Mc,8))};static \u0275dir=A({type:t,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,o){n&1&&be("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[B([Ac]),E]})}return t})();function Fc(t){return t==null||Ic(t)===0}function Ic(t){return t==null?null:Array.isArray(t)||typeof t=="string"?t.length:t instanceof Set?t.size:null}var ma=new R(""),xc=new R("");function Oc(t){return Fc(t.value)?{required:!0}:null}function ra(t){return null}function ba(t){return t!=null}function ya(t){return ki(t)?Ho(t):t}function va(t){let i={};return t.forEach(e=>{i=e!=null?C(C({},i),e):i}),Object.keys(i).length===0?null:i}function Da(t,i){return i.map(e=>e(t))}function Rc(t){return!t.validate}function _a(t){return t.map(i=>Rc(i)?i:e=>i.validate(e))}function kc(t){if(!t)return null;let i=t.filter(ba);return i.length==0?null:function(e){return va(Da(e,i))}}function Ca(t){return t!=null?kc(_a(t)):null}function Nc(t){if(!t)return null;let i=t.filter(ba);return i.length==0?null:function(e){let n=Da(e,i).map(ya);return zo(n).pipe(pt(va))}}function Ea(t){return t!=null?Nc(_a(t)):null}function sa(t,i){return t===null?[i]:Array.isArray(t)?[...t,i]:[t,i]}function Lc(t){return t._rawValidators}function Pc(t){return t._rawAsyncValidators}function xo(t){return t?Array.isArray(t)?t:[t]:[]}function yi(t,i){return Array.isArray(t)?t.includes(i):t===i}function aa(t,i){let e=xo(i);return xo(t).forEach(o=>{yi(e,o)||e.push(o)}),e}function la(t,i){return xo(i).filter(e=>!yi(t,e))}var vi=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(i){this._rawValidators=i||[],this._composedValidatorFn=Ca(this._rawValidators)}_setAsyncValidators(i){this._rawAsyncValidators=i||[],this._composedAsyncValidatorFn=Ea(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(i){this._onDestroyCallbacks.push(i)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(i=>i()),this._onDestroyCallbacks=[]}reset(i=void 0){this.control&&this.control.reset(i)}hasError(i,e){return this.control?this.control.hasError(i,e):!1}getError(i,e){return this.control?this.control.getError(i,e):null}},Oo=class extends vi{name;get formDirective(){return null}get path(){return null}},tt=class extends vi{_parent=null;name=null;valueAccessor=null},Ro=class{_cd;constructor(i){this._cd=i}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Vc={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qm=ce(C({},Vc),{"[class.ng-submitted]":"isSubmitted"}),wa=(()=>{class t extends Ro{constructor(e){super(e)}static \u0275fac=function(n){return new(n||t)(F(tt,2))};static \u0275dir=A({type:t,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,o){n&2&&Ft("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[E]})}return t})();var Cn="VALID",bi="INVALID",Kt="PENDING",En="DISABLED",Yt=class{},Di=class extends Yt{value;source;constructor(i,e){super(),this.value=i,this.source=e}},wn=class extends Yt{pristine;source;constructor(i,e){super(),this.pristine=i,this.source=e}},Sn=class extends Yt{touched;source;constructor(i,e){super(),this.touched=i,this.source=e}},qt=class extends Yt{status;source;constructor(i,e){super(),this.status=i,this.source=e}};function Bc(t){return(_i(t)?t.validators:t)||null}function $c(t){return Array.isArray(t)?Ca(t):t||null}function Uc(t,i){return(_i(i)?i.asyncValidators:t)||null}function jc(t){return Array.isArray(t)?Ea(t):t||null}function _i(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}var ko=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(i,e){this._assignValidators(i),this._assignAsyncValidators(e)}get validator(){return this._composedValidatorFn}set validator(i){this._rawValidators=this._composedValidatorFn=i}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(i){this._rawAsyncValidators=this._composedAsyncValidatorFn=i}get parent(){return this._parent}get status(){return Pe(this.statusReactive)}set status(i){Pe(()=>this.statusReactive.set(i))}_status=ne(()=>this.statusReactive());statusReactive=Q(void 0);get valid(){return this.status===Cn}get invalid(){return this.status===bi}get pending(){return this.status==Kt}get disabled(){return this.status===En}get enabled(){return this.status!==En}errors;get pristine(){return Pe(this.pristineReactive)}set pristine(i){Pe(()=>this.pristineReactive.set(i))}_pristine=ne(()=>this.pristineReactive());pristineReactive=Q(!0);get dirty(){return!this.pristine}get touched(){return Pe(this.touchedReactive)}set touched(i){Pe(()=>this.touchedReactive.set(i))}_touched=ne(()=>this.touchedReactive());touchedReactive=Q(!1);get untouched(){return!this.touched}_events=new de;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(i){this._assignValidators(i)}setAsyncValidators(i){this._assignAsyncValidators(i)}addValidators(i){this.setValidators(aa(i,this._rawValidators))}addAsyncValidators(i){this.setAsyncValidators(aa(i,this._rawAsyncValidators))}removeValidators(i){this.setValidators(la(i,this._rawValidators))}removeAsyncValidators(i){this.setAsyncValidators(la(i,this._rawAsyncValidators))}hasValidator(i){return yi(this._rawValidators,i)}hasAsyncValidator(i){return yi(this._rawAsyncValidators,i)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(i={}){let e=this.touched===!1;this.touched=!0;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsTouched(ce(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new Sn(!0,n))}markAllAsDirty(i={}){this.markAsDirty({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsDirty(i))}markAllAsTouched(i={}){this.markAsTouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:this}),this._forEachChild(e=>e.markAllAsTouched(i))}markAsUntouched(i={}){let e=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:i.emitEvent,sourceControl:n})}),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,n),e&&i.emitEvent!==!1&&this._events.next(new Sn(!1,n))}markAsDirty(i={}){let e=this.pristine===!0;this.pristine=!1;let n=i.sourceControl??this;this._parent&&!i.onlySelf&&this._parent.markAsDirty(ce(C({},i),{sourceControl:n})),e&&i.emitEvent!==!1&&this._events.next(new wn(!1,n))}markAsPristine(i={}){let e=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=i.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:i.emitEvent})}),this._parent&&!i.onlySelf&&this._parent._updatePristine(i,n),e&&i.emitEvent!==!1&&this._events.next(new wn(!0,n))}markAsPending(i={}){this.status=Kt;let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new qt(this.status,e)),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.markAsPending(ce(C({},i),{sourceControl:e}))}disable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=En,this.errors=null,this._forEachChild(o=>{o.disable(ce(C({},i),{onlySelf:!0}))}),this._updateValue();let n=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Di(this.value,n)),this._events.next(new qt(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(ce(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(i={}){let e=this._parentMarkedDirty(i.onlySelf);this.status=Cn,this._forEachChild(n=>{n.enable(ce(C({},i),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent}),this._updateAncestors(ce(C({},i),{skipPristineCheck:e}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(i,e){this._parent&&!i.onlySelf&&(this._parent.updateValueAndValidity(i),i.skipPristineCheck||this._parent._updatePristine({},e),this._parent._updateTouched({},e))}setParent(i){this._parent=i}getRawValue(){return this.value}updateValueAndValidity(i={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Cn||this.status===Kt)&&this._runAsyncValidator(n,i.emitEvent)}let e=i.sourceControl??this;i.emitEvent!==!1&&(this._events.next(new Di(this.value,e)),this._events.next(new qt(this.status,e)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!i.onlySelf&&this._parent.updateValueAndValidity(ce(C({},i),{sourceControl:e}))}_updateTreeValidity(i={emitEvent:!0}){this._forEachChild(e=>e._updateTreeValidity(i)),this.updateValueAndValidity({onlySelf:!0,emitEvent:i.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?En:Cn}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(i,e){if(this.asyncValidator){this.status=Kt,this._hasOwnPendingAsyncValidator={emitEvent:e!==!1,shouldHaveEmitted:i!==!1};let n=ya(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:e,shouldHaveEmitted:i})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let i=(this._hasOwnPendingAsyncValidator?.emitEvent||this._hasOwnPendingAsyncValidator?.shouldHaveEmitted)??!1;return this._hasOwnPendingAsyncValidator=null,i}return!1}setErrors(i,e={}){this.errors=i,this._updateControlsErrors(e.emitEvent!==!1,this,e.shouldHaveEmitted)}get(i){let e=i;return e==null||(Array.isArray(e)||(e=e.split(".")),e.length===0)?null:e.reduce((n,o)=>n&&n._find(o),this)}getError(i,e){let n=e?this.get(e):this;return n&&n.errors?n.errors[i]:null}hasError(i,e){return!!this.getError(i,e)}get root(){let i=this;for(;i._parent;)i=i._parent;return i}_updateControlsErrors(i,e,n){this.status=this._calculateStatus(),i&&this.statusChanges.emit(this.status),(i||n)&&this._events.next(new qt(this.status,e)),this._parent&&this._parent._updateControlsErrors(i,e,n)}_initObservables(){this.valueChanges=new te,this.statusChanges=new te}_calculateStatus(){return this._allControlsDisabled()?En:this.errors?bi:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(Kt)?Kt:this._anyControlsHaveStatus(bi)?bi:Cn}_anyControlsHaveStatus(i){return this._anyControls(e=>e.status===i)}_anyControlsDirty(){return this._anyControls(i=>i.dirty)}_anyControlsTouched(){return this._anyControls(i=>i.touched)}_updatePristine(i,e){let n=!this._anyControlsDirty(),o=this.pristine!==n;this.pristine=n,this._parent&&!i.onlySelf&&this._parent._updatePristine(i,e),o&&this._events.next(new wn(this.pristine,e))}_updateTouched(i={},e){this.touched=this._anyControlsTouched(),this._events.next(new Sn(this.touched,e)),this._parent&&!i.onlySelf&&this._parent._updateTouched(i,e)}_onDisabledChange=[];_registerOnCollectionChange(i){this._onCollectionChange=i}_setUpdateStrategy(i){_i(i)&&i.updateOn!=null&&(this._updateOn=i.updateOn)}_parentMarkedDirty(i){let e=this._parent&&this._parent.dirty;return!i&&!!e&&!this._parent._anyControlsDirty()}_find(i){return null}_assignValidators(i){this._rawValidators=Array.isArray(i)?i.slice():i,this._composedValidatorFn=$c(this._rawValidators)}_assignAsyncValidators(i){this._rawAsyncValidators=Array.isArray(i)?i.slice():i,this._composedAsyncValidatorFn=jc(this._rawAsyncValidators)}};var Sa=new R("",{providedIn:"root",factory:()=>No}),No="always";function Hc(t,i){return[...i.path,t]}function zc(t,i,e=No){Wc(t,i),i.valueAccessor.writeValue(t.value),(t.disabled||e==="always")&&i.valueAccessor.setDisabledState?.(t.disabled),Kc(t,i),Yc(t,i),qc(t,i),Gc(t,i)}function ua(t,i){t.forEach(e=>{e.registerOnValidatorChange&&e.registerOnValidatorChange(i)})}function Gc(t,i){if(i.valueAccessor.setDisabledState){let e=n=>{i.valueAccessor.setDisabledState(n)};t.registerOnDisabledChange(e),i._registerOnDestroy(()=>{t._unregisterOnDisabledChange(e)})}}function Wc(t,i){let e=Lc(t);i.validator!==null?t.setValidators(sa(e,i.validator)):typeof e=="function"&&t.setValidators([e]);let n=Pc(t);i.asyncValidator!==null?t.setAsyncValidators(sa(n,i.asyncValidator)):typeof n=="function"&&t.setAsyncValidators([n]);let o=()=>t.updateValueAndValidity();ua(i._rawValidators,o),ua(i._rawAsyncValidators,o)}function Kc(t,i){i.valueAccessor.registerOnChange(e=>{t._pendingValue=e,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&Aa(t,i)})}function qc(t,i){i.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&Aa(t,i),t.updateOn!=="submit"&&t.markAsTouched()})}function Aa(t,i){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),i.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function Yc(t,i){let e=(n,o)=>{i.valueAccessor.writeValue(n),o&&i.viewToModelUpdate(n)};t.registerOnChange(e),i._registerOnDestroy(()=>{t._unregisterOnChange(e)})}function Zc(t,i){if(!t.hasOwnProperty("model"))return!1;let e=t.model;return e.isFirstChange()?!0:!Object.is(i,e.currentValue)}function Xc(t){return Object.getPrototypeOf(t.constructor)===fa}function Jc(t,i){if(!i)return null;Array.isArray(i);let e,n,o;return i.forEach(r=>{r.constructor===ga?e=r:Xc(r)?n=r:o=r}),o||n||e||null}function ca(t,i){let e=t.indexOf(i);e>-1&&t.splice(e,1)}function da(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var Qc=class extends ko{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(i=null,e,n){super(Bc(e),Uc(n,e)),this._applyFormState(i),this._setUpdateStrategy(e),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),_i(e)&&(e.nonNullable||e.initialValueIsDefault)&&(da(i)?this.defaultValue=i.value:this.defaultValue=i)}setValue(i,e={}){this.value=this._pendingValue=i,this._onChange.length&&e.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,e.emitViewToModelChange!==!1)),this.updateValueAndValidity(e)}patchValue(i,e={}){this.setValue(i,e)}reset(i=this.defaultValue,e={}){this._applyFormState(i),this.markAsPristine(e),this.markAsUntouched(e),this.setValue(this.value,e),this._pendingChange=!1}_updateValue(){}_anyControls(i){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(i){this._onChange.push(i)}_unregisterOnChange(i){ca(this._onChange,i)}registerOnDisabledChange(i){this._onDisabledChange.push(i)}_unregisterOnDisabledChange(i){ca(this._onDisabledChange,i)}_forEachChild(i){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(i){da(i)?(this.value=this._pendingValue=i.value,i.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=i}};var ed={provide:tt,useExisting:Ee(()=>Lo)},pa=Promise.resolve(),Lo=(()=>{class t extends tt{_changeDetectorRef;callSetDisabledState;control=new Qc;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new te;constructor(e,n,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=e,this._setValidators(n),this._setAsyncValidators(o),this.valueAccessor=Jc(this,r)}ngOnChanges(e){if(this._checkForErrors(),!this._registered||"name"in e){if(this._registered&&(this._checkName(),this.formDirective)){let n=e.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in e&&this._updateDisabled(e),Zc(e,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(e){this.viewModel=e,this.update.emit(e)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){zc(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._checkName()}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(e){pa.then(()=>{this.control.setValue(e,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(e){let n=e.isDisabled.currentValue,o=n!==0&&D(n);pa.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(e){return this._parent?Hc(e,this._parent):[e]}static \u0275fac=function(n){return new(n||t)(F(Oo,9),F(ma,10),F(xc,10),F(nt,10),F(Rt,8),F(Sa,8))};static \u0275dir=A({type:t,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[B([ed]),E,Le]})}return t})();var td={provide:nt,useExisting:Ee(()=>nd),multi:!0},nd=(()=>{class t extends fa{writeValue(e){let n=e??"";this.setProperty("value",n)}registerOnChange(e){this.onChange=n=>{e(n==""?null:parseFloat(n))}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(n,o){n&1&&be("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[B([td]),E]})}return t})();var id=(()=>{class t{_validator=ra;_onChange;_enabled;ngOnChanges(e){if(this.inputName in e){let n=this.normalizeInput(e[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):ra,this._onChange&&this._onChange()}}validate(e){return this._validator(e)}registerOnValidatorChange(e){this._onChange=e}enabled(e){return e!=null}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,features:[Le]})}return t})();var od={provide:ma,useExisting:Ee(()=>rd),multi:!0};var rd=(()=>{class t extends id{required;inputName="required";normalizeInput=D;createValidator=e=>Oc;enabled(e){return e}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,o){n&2&&Y("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[B([od]),E]})}return t})();var sd=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var Ta=(()=>{class t{static withConfig(e){return{ngModule:t,providers:[{provide:Sa,useValue:e.callSetDisabledState??No}]}}static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[sd]})}return t})();var Ma=(()=>{class t extends K{name="common";static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),re=(()=>{class t{document=f(P);platformId=f(Ae);el=f(Se);injector=f(wt);cd=f(Rt);renderer=f(He);config=f(Io);baseComponentStyle=f(Ma);baseStyle=f(K);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Dn("pc");themeChangeListeners=[];_getHostInstance(e){if(e)return e?this.hostName?e.name===this.hostName?e:this._getHostInstance(e.parentInstance):e.parentInstance:void 0}_getOptionValue(e,n="",o={}){return hi(e,n,o)}ngOnInit(){this.document&&(this._loadCoreStyles(),this._loadStyles())}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(e){if(this.document&&!ts(this.platformId)){let{dt:n}=e;n&&n.currentValue&&(this._loadScopedThemeStyles(n.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(n.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(e=>ve.off("theme:change",e))}_loadStyles(){let e=()=>{Wt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),Wt.setLoadedStyleName("base")),this._loadThemeStyles()};e(),this._themeChangeListener(()=>e())}_loadCoreStyles(){!Wt.isStyleNameLoaded("base")&&this.componentStyle?.name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),Wt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!M.isStyleNameLoaded("common")){let{primitive:e,semantic:n,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(e?.css,C({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(n?.css,C({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,C({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(C({name:"global-style"},this.styleOptions),r),M.setLoadedStyleName("common")}if(!M.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:e,style:n}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(e,C({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(C({name:`${this.componentStyle?.name}-style`},this.styleOptions),n),M.setLoadedStyleName(this.componentStyle?.name)}if(!M.isStyleNameLoaded("layer-order")){let e=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(e,C({name:"layer-order",first:!0},this.styleOptions)),M.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(e){let{css:n}=this.componentStyle?.getPresetTheme?.(e,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(n,C({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(e=()=>{}){Wt.clearLoadedStyleNames(),ve.on("theme:change",e),this.themeChangeListeners.push(e)}cx(e,n={}){return $t(this._getOptionValue(this.$style?.classes,e,C({instance:this},n)))}sx(e="",n=!0,o={}){if(n)return this._getOptionValue(this.$style?.inlineStyles,e,C({instance:this},o))}get parent(){return this.parentInstance}get $style(){return this.parent?this.parent.componentStyle:this.componentStyle}cn=$t;static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,inputs:{dt:"dt"},features:[B([Ma,K]),Le]})}return t})();var Fa=`
    .p-badge {
        display: inline-flex;
        border-radius: dt('badge.border.radius');
        align-items: center;
        justify-content: center;
        padding: dt('badge.padding');
        background: dt('badge.primary.background');
        color: dt('badge.primary.color');
        font-size: dt('badge.font.size');
        font-weight: dt('badge.font.weight');
        min-width: dt('badge.min.width');
        height: dt('badge.height');
    }

    .p-badge-dot {
        width: dt('badge.dot.size');
        min-width: dt('badge.dot.size');
        height: dt('badge.dot.size');
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-circle {
        padding: 0;
        border-radius: 50%;
    }

    .p-badge-secondary {
        background: dt('badge.secondary.background');
        color: dt('badge.secondary.color');
    }

    .p-badge-success {
        background: dt('badge.success.background');
        color: dt('badge.success.color');
    }

    .p-badge-info {
        background: dt('badge.info.background');
        color: dt('badge.info.color');
    }

    .p-badge-warn {
        background: dt('badge.warn.background');
        color: dt('badge.warn.color');
    }

    .p-badge-danger {
        background: dt('badge.danger.background');
        color: dt('badge.danger.color');
    }

    .p-badge-contrast {
        background: dt('badge.contrast.background');
        color: dt('badge.contrast.color');
    }

    .p-badge-sm {
        font-size: dt('badge.sm.font.size');
        min-width: dt('badge.sm.min.width');
        height: dt('badge.sm.height');
    }

    .p-badge-lg {
        font-size: dt('badge.lg.font.size');
        min-width: dt('badge.lg.min.width');
        height: dt('badge.lg.height');
    }

    .p-badge-xl {
        font-size: dt('badge.xl.font.size');
        min-width: dt('badge.xl.min.width');
        height: dt('badge.xl.height');
    }
`;var ld=`
    ${Fa}

    /* For PrimeNG (directive)*/
    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge > .p-badge {
        position: absolute;
        top: 0;
        inset-inline-end: 0;
        transform: translate(50%, -50%);
        transform-origin: 100% 0;
        margin: 0;
    }
`,ud={root:({instance:t})=>["p-badge p-component",{"p-badge-circle":U(t.value())&&String(t.value()).length===1,"p-badge-dot":Ue(t.value()),"p-badge-sm":t.size()==="small"||t.badgeSize()==="small","p-badge-lg":t.size()==="large"||t.badgeSize()==="large","p-badge-xl":t.size()==="xlarge"||t.badgeSize()==="xlarge","p-badge-info":t.severity()==="info","p-badge-success":t.severity()==="success","p-badge-warn":t.severity()==="warn","p-badge-danger":t.severity()==="danger","p-badge-secondary":t.severity()==="secondary","p-badge-contrast":t.severity()==="contrast"}]},Ia=(()=>{class t extends K{name="badge";theme=ld;classes=ud;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Po=(()=>{class t extends re{styleClass=T();badgeSize=T();size=T();severity=T();value=T();badgeDisabled=T(!1,{transform:D});_componentStyle=f(Ia);static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["p-badge"]],hostVars:4,hostBindings:function(n,o){n&2&&(V(o.cn(o.cx("root"),o.styleClass())),gr("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[B([Ia]),E],decls:1,vars:1,template:function(n,o){n&1&&It(0),n&2&&xt(o.value())},dependencies:[ie,J],encapsulation:2,changeDetection:0})}return t})(),xa=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[Po,J,J]})}return t})();var Oa=`
    .p-progressbar {
        display: block;
        position: relative;
        overflow: hidden;
        height: dt('progressbar.height');
        background: dt('progressbar.background');
        border-radius: dt('progressbar.border.radius');
    }

    .p-progressbar-value {
        margin: 0;
        background: dt('progressbar.value.background');
    }

    .p-progressbar-label {
        color: dt('progressbar.label.color');
        font-size: dt('progressbar.label.font.size');
        font-weight: dt('progressbar.label.font.weight');
    }

    .p-progressbar-determinate .p-progressbar-value {
        height: 100%;
        width: 0%;
        position: absolute;
        display: none;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        transition: width 1s ease-in-out;
    }

    .p-progressbar-determinate .p-progressbar-label {
        display: inline-flex;
    }

    .p-progressbar-indeterminate .p-progressbar-value::before {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }

    .p-progressbar-indeterminate .p-progressbar-value::after {
        content: '';
        position: absolute;
        background: inherit;
        inset-block-start: 0;
        inset-inline-start: 0;
        inset-block-end: 0;
        will-change: inset-inline-start, inset-inline-end;
        animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }

    @keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim {
        0% {
            inset-inline-start: -35%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
        100% {
            inset-inline-start: 100%;
            inset-inline-end: -90%;
        }
    }

    @keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
    @-webkit-keyframes p-progressbar-indeterminate-anim-short {
        0% {
            inset-inline-start: -200%;
            inset-inline-end: 100%;
        }
        60% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
        100% {
            inset-inline-start: 107%;
            inset-inline-end: -8%;
        }
    }
`;var dd=["*"],pd={root:"p-fluid"},Ra=(()=>{class t extends K{name="fluid";classes=pd;theme=Oa;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var lt=(()=>{class t extends re{_componentStyle=f(Ra);static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["p-fluid"]],hostVars:2,hostBindings:function(n,o){n&2&&V(o.cx("root"))},features:[B([Ra]),E],ngContentSelectors:dd,decls:1,vars:0,template:function(n,o){n&1&&(Ge(),We(0))},dependencies:[ie],encapsulation:2,changeDetection:0})}return t})(),kb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[lt]})}return t})();var ka=`
    .p-ink {
        display: block;
        position: absolute;
        background: dt('ripple.background');
        border-radius: 100%;
        transform: scale(0);
        pointer-events: none;
    }

    .p-ink-active {
        animation: ripple 0.4s linear;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`;var hd=`
    ${ka}
    /* For PrimeNG */
    .p-ripple {
        overflow: hidden;
        position: relative;
    }

    .p-ripple-disabled .p-ink {
        display: none !important;
    }

    @keyframes ripple {
        100% {
            opacity: 0;
            transform: scale(2.5);
        }
    }
`,fd={root:"p-ink"},Na=(()=>{class t extends K{name="ripple";theme=hd;classes=fd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Ci=(()=>{class t extends re{zone=f(ze);_componentStyle=f(Na);animationListener;mouseDownListener;timeout;constructor(){super(),nn(()=>{Qn(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(e){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(ot(n,"p-ink-active"),!_o(n)&&!Eo(n)){let a=Math.max(Do(this.el.nativeElement),pi(this.el.nativeElement));n.style.height=a+"px",n.style.width=a+"px"}let o=Co(this.el.nativeElement),r=e.pageX-o.left+this.document.body.scrollTop-Eo(n)/2,s=e.pageY-o.top+this.document.body.scrollLeft-_o(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",r+"px"),Je(n,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&ot(a,"p-ink-active")},401)}getInk(){let e=this.el.nativeElement.children;for(let n=0;n<e.length;n++)if(typeof e[n].className=="string"&&e[n].className.indexOf("p-ink")!==-1)return e[n];return null}resetInk(){let e=this.getInk();e&&ot(e,"p-ink-active")}onAnimationEnd(e){this.timeout&&clearTimeout(this.timeout),ot(e.currentTarget,"p-ink-active")}create(){let e=this.renderer.createElement("span");this.renderer.addClass(e,"p-ink"),this.renderer.appendChild(this.el.nativeElement,e),this.renderer.setAttribute(e,"aria-hidden","true"),this.renderer.setAttribute(e,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(e,"animationend",this.onAnimationEnd.bind(this)))}remove(){let e=this.getInk();e&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Vs(e))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||t)};static \u0275dir=A({type:t,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[B([Na]),E]})}return t})(),Wb=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var Vo=(()=>{class t{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(e,n){e&&n&&(e.classList?e.classList.add(n):e.className+=" "+n)}static addMultipleClasses(e,n){if(e&&n)if(e.classList){let o=n.trim().split(" ");for(let r=0;r<o.length;r++)e.classList.add(o[r])}else{let o=n.split(" ");for(let r=0;r<o.length;r++)e.className+=" "+o[r]}}static removeClass(e,n){e&&n&&(e.classList?e.classList.remove(n):e.className=e.className.replace(new RegExp("(^|\\b)"+n.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(e,n){e&&n&&[n].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(e,r)))}static hasClass(e,n){return e&&n?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}static siblings(e){return Array.prototype.filter.call(e.parentNode.children,function(n){return n!==e})}static find(e,n){return Array.from(e.querySelectorAll(n))}static findSingle(e,n){return this.isElement(e)?e.querySelector(n):null}static index(e){let n=e.parentNode.childNodes,o=0;for(var r=0;r<n.length;r++){if(n[r]==e)return o;n[r].nodeType==1&&o++}return-1}static indexWithinGroup(e,n){let o=e.parentNode?e.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==e)return r;o[s].attributes&&o[s].attributes[n]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(e,n,o="self"){o!=="self"&&e&&n&&this.appendChild(e,n)}static alignOverlay(e,n,o="self",r=!0){e&&n&&(r&&(e.style.minWidth=`${t.getOuterWidth(n)}px`),o==="self"?this.relativePosition(e,n):this.absolutePosition(e,n))}static relativePosition(e,n,o=!0){let r=z=>{if(z)return getComputedStyle(z).getPropertyValue("position")==="relative"?z:r(z.parentElement)},s=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),a=n.offsetHeight,l=n.getBoundingClientRect(),u=this.getWindowScrollTop(),c=this.getWindowScrollLeft(),d=this.getViewport(),h=r(e)?.getBoundingClientRect()||{top:-1*u,left:-1*c},b,_,g="top";l.top+a+s.height>d.height?(b=l.top-h.top-s.height,g="bottom",l.top+b<0&&(b=-1*l.top)):(b=a+l.top-h.top,g="top");let y=l.left+s.width-d.width,w=l.left-h.left;if(s.width>d.width?_=(l.left-h.left)*-1:y>0?_=w-y:_=l.left-h.left,e.style.top=b+"px",e.style.left=_+"px",e.style.transformOrigin=g,o){let z=vn(/-anchor-gutter$/)?.value;e.style.marginTop=g==="bottom"?`calc(${z??"2px"} * -1)`:z??""}}static absolutePosition(e,n,o=!0){let r=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:this.getHiddenElementDimensions(e),s=r.height,a=r.width,l=n.offsetHeight,u=n.offsetWidth,c=n.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),b,_;c.top+l+s>h.height?(b=c.top+d-s,e.style.transformOrigin="bottom",b<0&&(b=d)):(b=l+c.top+d,e.style.transformOrigin="top"),c.left+a>h.width?_=Math.max(0,c.left+p+u-a):_=c.left+p,e.style.top=b+"px",e.style.left=_+"px",o&&(e.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(e,n=[]){return e.parentNode===null?n:this.getParents(e.parentNode,n.concat([e.parentNode]))}static getScrollableParents(e){let n=[];if(e){let o=this.getParents(e),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let u=l.split(",");for(let c of u){let d=this.findSingle(a,c);d&&s(d)&&n.push(d)}}a.nodeType!==9&&s(a)&&n.push(a)}}return n}static getHiddenElementOuterHeight(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementOuterWidth(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}static getHiddenElementDimensions(e){let n={};return e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible",n}static scrollInView(e,n){let o=getComputedStyle(e).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(e).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=e.getBoundingClientRect(),c=n.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=e.scrollTop,p=e.clientHeight,h=this.getOuterHeight(n);c<0?e.scrollTop=d+c:c+h>p&&(e.scrollTop=d+c-p+h)}static fadeIn(e,n){e.style.opacity=0;let o=+new Date,r=0,s=function(){r=+e.style.opacity.replace(",",".")+(new Date().getTime()-o)/n,e.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(e,n){var o=1,r=50,s=n,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),e.style.opacity=o},r)}static getWindowScrollTop(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}static getWindowScrollLeft(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}static matches(e,n){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(e,n)}static getOuterWidth(e,n){let o=e.offsetWidth;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(e){let n=getComputedStyle(e);return parseFloat(n.paddingLeft)+parseFloat(n.paddingRight)}static getHorizontalMargin(e){let n=getComputedStyle(e);return parseFloat(n.marginLeft)+parseFloat(n.marginRight)}static innerWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static width(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),n}static getInnerHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),n}static getOuterHeight(e,n){let o=e.offsetHeight;if(n){let r=getComputedStyle(e);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(e){let n=e.offsetHeight,o=getComputedStyle(e);return n-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),n}static getWidth(e){let n=e.offsetWidth,o=getComputedStyle(e);return n-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),n}static getViewport(){let e=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0],s=e.innerWidth||o.clientWidth||r.clientWidth,a=e.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(e){var n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(e,n){let o=e.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(n,e)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var e=window.navigator.userAgent,n=e.indexOf("MSIE ");if(n>0)return!0;var o=e.indexOf("Trident/");if(o>0){var r=e.indexOf("rv:");return!0}var s=e.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(e,n){if(this.isElement(n))n.appendChild(e);else if(n&&n.el&&n.el.nativeElement)n.el.nativeElement.appendChild(e);else throw"Cannot append "+n+" to "+e}static removeChild(e,n){if(this.isElement(n))n.removeChild(e);else if(n.el&&n.el.nativeElement)n.el.nativeElement.removeChild(e);else throw"Cannot remove "+e+" from "+n}static removeElement(e){"remove"in Element.prototype?e.remove():e.parentNode.removeChild(e)}static isElement(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}static calculateScrollbarWidth(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let n=document.createElement("div");n.className="p-scrollbar-measure",document.body.appendChild(n);let o=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let e=document.createElement("div");e.className="p-scrollbar-measure",document.body.appendChild(e);let n=e.offsetHeight-e.clientHeight;return document.body.removeChild(e),this.calculatedScrollbarWidth=n,n}static invokeElementMethod(e,n,o){e[n].apply(e,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let e=this.resolveUserAgent();this.browser={},e.browser&&(this.browser[e.browser]=!0,this.browser.version=e.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let e=navigator.userAgent.toLowerCase(),n=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[1]||"",version:n[2]||"0"}}static isInteger(e){return Number.isInteger?Number.isInteger(e):typeof e=="number"&&isFinite(e)&&Math.floor(e)===e}static isHidden(e){return!e||e.offsetParent===null}static isVisible(e){return e&&e.offsetParent!=null}static isExist(e){return e!==null&&typeof e<"u"&&e.nodeName&&e.parentNode}static focus(e,n){e&&document.activeElement!==e&&e.focus(n)}static getFocusableSelectorString(e=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${e}`}static getFocusableElements(e,n=""){let o=this.find(e,this.getFocusableSelectorString(n)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(e,n=""){let o=this.findSingle(e,this.getFocusableSelectorString(n));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(e,n=""){let o=this.getFocusableElements(e,n);return o.length>0?o[0]:null}static getLastFocusableElement(e,n){let o=this.getFocusableElements(e,n);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(e,n=!1){let o=t.getFocusableElements(e),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);n?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(e,n){if(!e)return null;switch(e){case"document":return document;case"window":return window;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return n?.parentElement.parentElement;default:let o=typeof e;if(o==="string")return document.querySelector(e);if(o==="object"&&e.hasOwnProperty("nativeElement"))return this.isExist(e.nativeElement)?e.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(e)?e():e;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(e,n){if(e){let o=e.getAttribute(n);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(e="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,e)}static unblockBodyScroll(e="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,e)}static createElement(e,n={},...o){if(e){let r=document.createElement(e);return this.setAttributes(r,n),r.append(...o),r}}static setAttribute(e,n="",o){this.isElement(e)&&o!==null&&o!==void 0&&e.setAttribute(n,o)}static setAttributes(e,n={}){if(this.isElement(e)){let o=(r,s)=>{let a=e?.$attrs?.[r]?[e?.$attrs?.[r]]:[];return[s].flat().reduce((l,u)=>{if(u!=null){let c=typeof u;if(c==="string"||c==="number")l.push(u);else if(c==="object"){let d=Array.isArray(u)?o(r,u):Object.entries(u).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?e.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(e,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(e.$attrs=e.$attrs||{})&&(e.$attrs[r]=s),e.setAttribute(r,s))}})}}static isFocusableElement(e,n=""){return this.isElement(e)?e.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`):!1}}return t})();function Zb(){xs({variableName:Fo("scrollbar.width").name})}function Xb(){Os({variableName:Fo("scrollbar.width").name})}var La=class{element;listener;scrollableParents;constructor(i,e=()=>{}){this.element=i,this.listener=e}bindScrollListener(){this.scrollableParents=Vo.getScrollableParents(this.element);for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let i=0;i<this.scrollableParents.length;i++)this.scrollableParents[i].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Pa=(()=>{class t extends re{autofocus=!1;focused=!1;platformId=f(Ae);document=f(P);host=f(Se);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){Qn(this.platformId)&&this.autofocus&&setTimeout(()=>{let e=Vo.getFocusableElements(this.host?.nativeElement);e.length===0&&this.host.nativeElement.focus(),e.length>0&&e[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[0,"pAutoFocus","autofocus"]},features:[E]})}return t})(),sy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var md=["*"],bd=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Va=(()=>{class t extends K{name="baseicon";css=bd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var Zt=(()=>{class t extends re{spin=!1;_componentStyle=f(Va);getClassNames(){return $t("p-icon",{"p-icon-spin":this.spin})}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["ng-component"]],hostAttrs:["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],hostVars:2,hostBindings:function(n,o){n&2&&V(o.getClassNames())},inputs:{spin:[2,"spin","spin",D]},features:[B([Va]),E],ngContentSelectors:md,decls:1,vars:0,template:function(n,o){n&1&&(Ge(),We(0))},encapsulation:2,changeDetection:0})}return t})();var yd=["data-p-icon","check"],Ba=(()=>{class t extends Zt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["","data-p-icon","check"]],features:[E],attrs:yd,decls:1,vars:0,consts:[["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(n,o){n&1&&(we(),mt(0,"path",0))},encapsulation:2})}return t})();var vd=["data-p-icon","spinner"],$a=(()=>{class t extends Zt{pathId;ngOnInit(){super.ngOnInit(),this.pathId="url(#"+Dn()+")"}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["","data-p-icon","spinner"]],features:[E],attrs:vd,decls:5,vars:2,consts:[["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(n,o){n&1&&(we(),Ni(0,"g"),mt(1,"path",0),Li(),Ni(2,"defs")(3,"clipPath",1),mt(4,"rect",2),Li()()),n&2&&(Y("clip-path",o.pathId),k(3),pr("id",o.pathId))},encapsulation:2})}return t})();var Dd=["data-p-icon","times"],wy=(()=>{class t extends Zt{static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["","data-p-icon","times"]],features:[E],attrs:Dd,decls:1,vars:0,consts:[["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(n,o){n&1&&(we(),mt(0,"path",0))},encapsulation:2})}return t})();var Ua=`
    .p-button {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        color: dt('button.primary.color');
        background: dt('button.primary.background');
        border: 1px solid dt('button.primary.border.color');
        padding: dt('button.padding.y') dt('button.padding.x');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('button.transition.duration'),
            color dt('button.transition.duration'),
            border-color dt('button.transition.duration'),
            outline-color dt('button.transition.duration'),
            box-shadow dt('button.transition.duration');
        border-radius: dt('button.border.radius');
        outline-color: transparent;
        gap: dt('button.gap');
    }

    .p-button:disabled {
        cursor: default;
    }

    .p-button-icon-right {
        order: 1;
    }

    .p-button-icon-right:dir(rtl) {
        order: -1;
    }

    .p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
        order: 1;
    }

    .p-button-icon-bottom {
        order: 2;
    }

    .p-button-icon-only {
        width: dt('button.icon.only.width');
        padding-inline-start: 0;
        padding-inline-end: 0;
        gap: 0;
    }

    .p-button-icon-only.p-button-rounded {
        border-radius: 50%;
        height: dt('button.icon.only.width');
    }

    .p-button-icon-only .p-button-label {
        visibility: hidden;
        width: 0;
    }

    .p-button-icon-only::after {
        content: "\0A0";
        visibility: hidden;
        width: 0;
    }

    .p-button-sm {
        font-size: dt('button.sm.font.size');
        padding: dt('button.sm.padding.y') dt('button.sm.padding.x');
    }

    .p-button-sm .p-button-icon {
        font-size: dt('button.sm.font.size');
    }

    .p-button-sm.p-button-icon-only {
        width: dt('button.sm.icon.only.width');
    }

    .p-button-sm.p-button-icon-only.p-button-rounded {
        height: dt('button.sm.icon.only.width');
    }

    .p-button-lg {
        font-size: dt('button.lg.font.size');
        padding: dt('button.lg.padding.y') dt('button.lg.padding.x');
    }

    .p-button-lg .p-button-icon {
        font-size: dt('button.lg.font.size');
    }

    .p-button-lg.p-button-icon-only {
        width: dt('button.lg.icon.only.width');
    }

    .p-button-lg.p-button-icon-only.p-button-rounded {
        height: dt('button.lg.icon.only.width');
    }

    .p-button-vertical {
        flex-direction: column;
    }

    .p-button-label {
        font-weight: dt('button.label.font.weight');
    }

    .p-button-fluid {
        width: 100%;
    }

    .p-button-fluid.p-button-icon-only {
        width: dt('button.icon.only.width');
    }

    .p-button:not(:disabled):hover {
        background: dt('button.primary.hover.background');
        border: 1px solid dt('button.primary.hover.border.color');
        color: dt('button.primary.hover.color');
    }

    .p-button:not(:disabled):active {
        background: dt('button.primary.active.background');
        border: 1px solid dt('button.primary.active.border.color');
        color: dt('button.primary.active.color');
    }

    .p-button:focus-visible {
        box-shadow: dt('button.primary.focus.ring.shadow');
        outline: dt('button.focus.ring.width') dt('button.focus.ring.style') dt('button.primary.focus.ring.color');
        outline-offset: dt('button.focus.ring.offset');
    }

    .p-button .p-badge {
        min-width: dt('button.badge.size');
        height: dt('button.badge.size');
        line-height: dt('button.badge.size');
    }

    .p-button-raised {
        box-shadow: dt('button.raised.shadow');
    }

    .p-button-rounded {
        border-radius: dt('button.rounded.border.radius');
    }

    .p-button-secondary {
        background: dt('button.secondary.background');
        border: 1px solid dt('button.secondary.border.color');
        color: dt('button.secondary.color');
    }

    .p-button-secondary:not(:disabled):hover {
        background: dt('button.secondary.hover.background');
        border: 1px solid dt('button.secondary.hover.border.color');
        color: dt('button.secondary.hover.color');
    }

    .p-button-secondary:not(:disabled):active {
        background: dt('button.secondary.active.background');
        border: 1px solid dt('button.secondary.active.border.color');
        color: dt('button.secondary.active.color');
    }

    .p-button-secondary:focus-visible {
        outline-color: dt('button.secondary.focus.ring.color');
        box-shadow: dt('button.secondary.focus.ring.shadow');
    }

    .p-button-success {
        background: dt('button.success.background');
        border: 1px solid dt('button.success.border.color');
        color: dt('button.success.color');
    }

    .p-button-success:not(:disabled):hover {
        background: dt('button.success.hover.background');
        border: 1px solid dt('button.success.hover.border.color');
        color: dt('button.success.hover.color');
    }

    .p-button-success:not(:disabled):active {
        background: dt('button.success.active.background');
        border: 1px solid dt('button.success.active.border.color');
        color: dt('button.success.active.color');
    }

    .p-button-success:focus-visible {
        outline-color: dt('button.success.focus.ring.color');
        box-shadow: dt('button.success.focus.ring.shadow');
    }

    .p-button-info {
        background: dt('button.info.background');
        border: 1px solid dt('button.info.border.color');
        color: dt('button.info.color');
    }

    .p-button-info:not(:disabled):hover {
        background: dt('button.info.hover.background');
        border: 1px solid dt('button.info.hover.border.color');
        color: dt('button.info.hover.color');
    }

    .p-button-info:not(:disabled):active {
        background: dt('button.info.active.background');
        border: 1px solid dt('button.info.active.border.color');
        color: dt('button.info.active.color');
    }

    .p-button-info:focus-visible {
        outline-color: dt('button.info.focus.ring.color');
        box-shadow: dt('button.info.focus.ring.shadow');
    }

    .p-button-warn {
        background: dt('button.warn.background');
        border: 1px solid dt('button.warn.border.color');
        color: dt('button.warn.color');
    }

    .p-button-warn:not(:disabled):hover {
        background: dt('button.warn.hover.background');
        border: 1px solid dt('button.warn.hover.border.color');
        color: dt('button.warn.hover.color');
    }

    .p-button-warn:not(:disabled):active {
        background: dt('button.warn.active.background');
        border: 1px solid dt('button.warn.active.border.color');
        color: dt('button.warn.active.color');
    }

    .p-button-warn:focus-visible {
        outline-color: dt('button.warn.focus.ring.color');
        box-shadow: dt('button.warn.focus.ring.shadow');
    }

    .p-button-help {
        background: dt('button.help.background');
        border: 1px solid dt('button.help.border.color');
        color: dt('button.help.color');
    }

    .p-button-help:not(:disabled):hover {
        background: dt('button.help.hover.background');
        border: 1px solid dt('button.help.hover.border.color');
        color: dt('button.help.hover.color');
    }

    .p-button-help:not(:disabled):active {
        background: dt('button.help.active.background');
        border: 1px solid dt('button.help.active.border.color');
        color: dt('button.help.active.color');
    }

    .p-button-help:focus-visible {
        outline-color: dt('button.help.focus.ring.color');
        box-shadow: dt('button.help.focus.ring.shadow');
    }

    .p-button-danger {
        background: dt('button.danger.background');
        border: 1px solid dt('button.danger.border.color');
        color: dt('button.danger.color');
    }

    .p-button-danger:not(:disabled):hover {
        background: dt('button.danger.hover.background');
        border: 1px solid dt('button.danger.hover.border.color');
        color: dt('button.danger.hover.color');
    }

    .p-button-danger:not(:disabled):active {
        background: dt('button.danger.active.background');
        border: 1px solid dt('button.danger.active.border.color');
        color: dt('button.danger.active.color');
    }

    .p-button-danger:focus-visible {
        outline-color: dt('button.danger.focus.ring.color');
        box-shadow: dt('button.danger.focus.ring.shadow');
    }

    .p-button-contrast {
        background: dt('button.contrast.background');
        border: 1px solid dt('button.contrast.border.color');
        color: dt('button.contrast.color');
    }

    .p-button-contrast:not(:disabled):hover {
        background: dt('button.contrast.hover.background');
        border: 1px solid dt('button.contrast.hover.border.color');
        color: dt('button.contrast.hover.color');
    }

    .p-button-contrast:not(:disabled):active {
        background: dt('button.contrast.active.background');
        border: 1px solid dt('button.contrast.active.border.color');
        color: dt('button.contrast.active.color');
    }

    .p-button-contrast:focus-visible {
        outline-color: dt('button.contrast.focus.ring.color');
        box-shadow: dt('button.contrast.focus.ring.shadow');
    }

    .p-button-outlined {
        background: transparent;
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):hover {
        background: dt('button.outlined.primary.hover.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined:not(:disabled):active {
        background: dt('button.outlined.primary.active.background');
        border-color: dt('button.outlined.primary.border.color');
        color: dt('button.outlined.primary.color');
    }

    .p-button-outlined.p-button-secondary {
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):hover {
        background: dt('button.outlined.secondary.hover.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-secondary:not(:disabled):active {
        background: dt('button.outlined.secondary.active.background');
        border-color: dt('button.outlined.secondary.border.color');
        color: dt('button.outlined.secondary.color');
    }

    .p-button-outlined.p-button-success {
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):hover {
        background: dt('button.outlined.success.hover.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-success:not(:disabled):active {
        background: dt('button.outlined.success.active.background');
        border-color: dt('button.outlined.success.border.color');
        color: dt('button.outlined.success.color');
    }

    .p-button-outlined.p-button-info {
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):hover {
        background: dt('button.outlined.info.hover.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-info:not(:disabled):active {
        background: dt('button.outlined.info.active.background');
        border-color: dt('button.outlined.info.border.color');
        color: dt('button.outlined.info.color');
    }

    .p-button-outlined.p-button-warn {
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):hover {
        background: dt('button.outlined.warn.hover.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-warn:not(:disabled):active {
        background: dt('button.outlined.warn.active.background');
        border-color: dt('button.outlined.warn.border.color');
        color: dt('button.outlined.warn.color');
    }

    .p-button-outlined.p-button-help {
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):hover {
        background: dt('button.outlined.help.hover.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-help:not(:disabled):active {
        background: dt('button.outlined.help.active.background');
        border-color: dt('button.outlined.help.border.color');
        color: dt('button.outlined.help.color');
    }

    .p-button-outlined.p-button-danger {
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):hover {
        background: dt('button.outlined.danger.hover.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-danger:not(:disabled):active {
        background: dt('button.outlined.danger.active.background');
        border-color: dt('button.outlined.danger.border.color');
        color: dt('button.outlined.danger.color');
    }

    .p-button-outlined.p-button-contrast {
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):hover {
        background: dt('button.outlined.contrast.hover.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-contrast:not(:disabled):active {
        background: dt('button.outlined.contrast.active.background');
        border-color: dt('button.outlined.contrast.border.color');
        color: dt('button.outlined.contrast.color');
    }

    .p-button-outlined.p-button-plain {
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):hover {
        background: dt('button.outlined.plain.hover.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-outlined.p-button-plain:not(:disabled):active {
        background: dt('button.outlined.plain.active.background');
        border-color: dt('button.outlined.plain.border.color');
        color: dt('button.outlined.plain.color');
    }

    .p-button-text {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):hover {
        background: dt('button.text.primary.hover.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text:not(:disabled):active {
        background: dt('button.text.primary.active.background');
        border-color: transparent;
        color: dt('button.text.primary.color');
    }

    .p-button-text.p-button-secondary {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):hover {
        background: dt('button.text.secondary.hover.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-secondary:not(:disabled):active {
        background: dt('button.text.secondary.active.background');
        border-color: transparent;
        color: dt('button.text.secondary.color');
    }

    .p-button-text.p-button-success {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):hover {
        background: dt('button.text.success.hover.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-success:not(:disabled):active {
        background: dt('button.text.success.active.background');
        border-color: transparent;
        color: dt('button.text.success.color');
    }

    .p-button-text.p-button-info {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):hover {
        background: dt('button.text.info.hover.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-info:not(:disabled):active {
        background: dt('button.text.info.active.background');
        border-color: transparent;
        color: dt('button.text.info.color');
    }

    .p-button-text.p-button-warn {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):hover {
        background: dt('button.text.warn.hover.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-warn:not(:disabled):active {
        background: dt('button.text.warn.active.background');
        border-color: transparent;
        color: dt('button.text.warn.color');
    }

    .p-button-text.p-button-help {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):hover {
        background: dt('button.text.help.hover.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-help:not(:disabled):active {
        background: dt('button.text.help.active.background');
        border-color: transparent;
        color: dt('button.text.help.color');
    }

    .p-button-text.p-button-danger {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):hover {
        background: dt('button.text.danger.hover.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-danger:not(:disabled):active {
        background: dt('button.text.danger.active.background');
        border-color: transparent;
        color: dt('button.text.danger.color');
    }

    .p-button-text.p-button-contrast {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):hover {
        background: dt('button.text.contrast.hover.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-contrast:not(:disabled):active {
        background: dt('button.text.contrast.active.background');
        border-color: transparent;
        color: dt('button.text.contrast.color');
    }

    .p-button-text.p-button-plain {
        background: transparent;
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):hover {
        background: dt('button.text.plain.hover.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-text.p-button-plain:not(:disabled):active {
        background: dt('button.text.plain.active.background');
        border-color: transparent;
        color: dt('button.text.plain.color');
    }

    .p-button-link {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.color');
    }

    .p-button-link:not(:disabled):hover {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.hover.color');
    }

    .p-button-link:not(:disabled):hover .p-button-label {
        text-decoration: underline;
    }

    .p-button-link:not(:disabled):active {
        background: transparent;
        border-color: transparent;
        color: dt('button.link.active.color');
    }
`;var _d=["content"],Cd=["loadingicon"],Ed=["icon"],wd=["*"],za=t=>({class:t});function Sd(t,i){t&1&&vt(0)}function Ad(t,i){if(t&1&&Fe(0,"span"),t&2){let e=j(3);V(e.cx("loadingIcon")),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Td(t,i){if(t&1&&(we(),Fe(0,"svg",7)),t&2){let e=j(3);V(e.cn(e.cx("loadingIcon"),e.spinnerIconClass())),x("spin",!0),Y("aria-hidden",!0)("data-pc-section","loadingicon")}}function Md(t,i){if(t&1&&(bt(0),ee(1,Ad,1,4,"span",3)(2,Td,1,5,"svg",6),yt()),t&2){let e=j(2);k(),x("ngIf",e.loadingIcon),k(),x("ngIf",!e.loadingIcon)}}function Fd(t,i){}function Id(t,i){if(t&1&&ee(0,Fd,0,0,"ng-template",8),t&2){let e=j(2);x("ngIf",e.loadingIconTemplate||e._loadingIconTemplate)}}function xd(t,i){if(t&1&&(bt(0),ee(1,Md,3,2,"ng-container",2)(2,Id,1,1,null,5),yt()),t&2){let e=j();k(),x("ngIf",!e.loadingIconTemplate&&!e._loadingIconTemplate),k(),x("ngTemplateOutlet",e.loadingIconTemplate||e._loadingIconTemplate)("ngTemplateOutletContext",Ot(3,za,e.cx("loadingIcon")))}}function Od(t,i){if(t&1&&Fe(0,"span"),t&2){let e=j(2);V(e.cx("icon")),Y("data-pc-section","icon")}}function Rd(t,i){}function kd(t,i){if(t&1&&ee(0,Rd,0,0,"ng-template",8),t&2){let e=j(2);x("ngIf",!e.icon&&(e.iconTemplate||e._iconTemplate))}}function Nd(t,i){if(t&1&&(bt(0),ee(1,Od,1,3,"span",3)(2,kd,1,1,null,5),yt()),t&2){let e=j();k(),x("ngIf",e.icon&&!e.iconTemplate&&!e._iconTemplate),k(),x("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Ot(3,za,e.cx("icon")))}}function Ld(t,i){if(t&1&&(Te(0,"span"),It(1),Me()),t&2){let e=j();V(e.cx("label")),Y("aria-hidden",e.icon&&!e.label)("data-pc-section","label"),k(),xt(e.label)}}function Pd(t,i){if(t&1&&Fe(0,"p-badge",9),t&2){let e=j();x("value",e.badge)("severity",e.badgeSeverity)}}var Vd={root:({instance:t})=>["p-button p-component",{"p-button-icon-only":(t.icon||t.buttonProps?.icon||t.iconTemplate||t._iconTemplate||t.loadingIcon||t.loadingIconTemplate||t._loadingIconTemplate)&&!t.label&&!t.buttonProps?.label,"p-button-vertical":(t.iconPos==="top"||t.iconPos==="bottom")&&t.label,"p-button-loading":t.loading||t.buttonProps?.loading,"p-button-link":t.link||t.buttonProps?.link,[`p-button-${t.severity||t.buttonProps?.severity}`]:t.severity||t.buttonProps?.severity,"p-button-raised":t.raised||t.buttonProps?.raised,"p-button-rounded":t.rounded||t.buttonProps?.rounded,"p-button-text":t.text||t.variant==="text"||t.buttonProps?.text||t.buttonProps?.variant==="text","p-button-outlined":t.outlined||t.variant==="outlined"||t.buttonProps?.outlined||t.buttonProps?.variant==="outlined","p-button-sm":t.size==="small"||t.buttonProps?.size==="small","p-button-lg":t.size==="large"||t.buttonProps?.size==="large","p-button-plain":t.plain||t.buttonProps?.plain,"p-button-fluid":t.hasFluid}],loadingIcon:"p-button-loading-icon",icon:({instance:t})=>["p-button-icon",{[`p-button-icon-${t.iconPos||t.buttonProps?.iconPos}`]:t.label||t.buttonProps?.label,"p-button-icon-left":(t.iconPos==="left"||t.buttonProps?.iconPos==="left")&&t.label||t.buttonProps?.label,"p-button-icon-right":(t.iconPos==="right"||t.buttonProps?.iconPos==="right")&&t.label||t.buttonProps?.label},t.icon,t.buttonProps?.icon],spinnerIcon:({instance:t})=>Object.entries(t.iconClass()).filter(([,i])=>!!i).reduce((i,[e])=>i+` ${e}`,"p-button-loading-icon"),label:"p-button-label"},ct=(()=>{class t extends K{name="button";theme=Ua;classes=Vd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var ut={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},ja=(()=>{class t extends re{_componentStyle=f(ct);static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(n,o){n&2&&Ft("p-button-label",!0)},features:[B([ct]),E]})}return t})(),Ha=(()=>{class t extends re{_componentStyle=f(ct);static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(n,o){n&2&&Ft("p-button-icon",!0)},features:[B([ct]),E]})}return t})(),Yy=(()=>{class t extends re{iconPos="left";loadingIcon;set label(e){this._label=e,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(e){this._icon=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(e){this._loading=e,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=Bi(Ha);labelSignal=Bi(ja);isIconOnly=ne(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(e){this._buttonProps=e,e&&typeof e=="object"&&Object.entries(e).forEach(([n,o])=>this[`_${n}`]!==o&&(this[`_${n}`]=o))}_severity;get severity(){return this._severity}set severity(e){this._severity=e,this.initialized&&this.setStyleClass()}raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid=T(void 0,{transform:D});_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(ut);pcFluid=f(lt,{optional:!0,host:!0,skipSelf:!0});isTextButton=ne(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=f(ct);ngAfterViewInit(){super.ngAfterViewInit(),Je(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}getStyleClass(){let e=[ut.button,ut.component];return this.icon&&!this.label&&Ue(this.htmlElement.textContent)&&e.push(ut.iconOnly),this.loading&&(e.push(ut.disabled,ut.loading),!this.icon&&this.label&&e.push(ut.labelOnly),this.icon&&!this.label&&!Ue(this.htmlElement.textContent)&&e.push(ut.iconOnly)),this.text&&e.push("p-button-text"),this.severity&&e.push(`p-button-${this.severity}`),this.plain&&e.push("p-button-plain"),this.raised&&e.push("p-button-raised"),this.size&&e.push(`p-button-${this.size}`),this.outlined&&e.push("p-button-outlined"),this.rounded&&e.push("p-button-rounded"),this.size==="small"&&e.push("p-button-sm"),this.size==="large"&&e.push("p-button-lg"),this.hasFluid&&e.push("p-button-fluid"),e}get hasFluid(){return this.fluid()??!!this.pcFluid}setStyleClass(){let e=this.getStyleClass();this.removeExistingSeverityClass(),this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...e)}removeExistingSeverityClass(){let e=["success","info","warn","danger","help","primary","secondary","contrast"],n=this.htmlElement.classList.value.split(" ").find(o=>e.some(r=>o===`p-button-${r}`));n&&this.htmlElement.classList.remove(n)}createLabel(){if(!jt(this.htmlElement,".p-button-label")&&this.label){let n=this.document.createElement("span");this.icon&&!this.label&&n.setAttribute("aria-hidden","true"),n.className="p-button-label",n.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(n)}}createIcon(){if(!jt(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let n=this.document.createElement("span");n.className="p-button-icon",n.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Je(n,o);let r=this.getIconClass();r&&Je(n,r),!this.loadingIcon&&this.loading&&(n.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(n,this.htmlElement.firstChild)}}updateLabel(){let e=jt(this.htmlElement,".p-button-label");if(!this.label){e&&this.htmlElement.removeChild(e);return}e?e.textContent=this.label:this.createLabel()}updateIcon(){let e=jt(this.htmlElement,".p-button-icon"),n=jt(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&e?e.innerHTML=this.spinnerIcon:e?.innerHTML&&(e.innerHTML=""),e?this.iconPos?e.className="p-button-icon "+(n?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():e.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pButton",""]],contentQueries:function(n,o,r){n&1&&(Pi(r,o.iconSignal,Ha,5),Pi(r,o.labelSignal,ja,5)),n&2&&fr(2)},hostVars:4,hostBindings:function(n,o){n&2&&Ft("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],outlined:[2,"outlined","outlined",D],size:"size",plain:[2,"plain","plain",D],fluid:[1,"fluid"],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[B([ct]),E]})}return t})(),Bd=(()=>{class t extends re{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;buttonProps;autofocus;fluid=T(void 0,{transform:D});onClick=new te;onFocus=new te;onBlur=new te;contentTemplate;loadingIconTemplate;iconTemplate;templates;pcFluid=f(lt,{optional:!0,host:!0,skipSelf:!0});get hasFluid(){return this.fluid()??!!this.pcFluid}_componentStyle=f(ct);_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"loadingicon":this._loadingIconTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,e])=>!!e).reduce((e,[n])=>e+` ${n}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["p-button"]],contentQueries:function(n,o,r){if(n&1&&(ue(r,_d,5),ue(r,Cd,5),ue(r,Ed,5),ue(r,at,4)),n&2){let s;se(s=ae())&&(o.contentTemplate=s.first),se(s=ae())&&(o.loadingIconTemplate=s.first),se(s=ae())&&(o.iconTemplate=s.first),se(s=ae())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",D],loading:[2,"loading","loading",D],loadingIcon:"loadingIcon",raised:[2,"raised","raised",D],rounded:[2,"rounded","rounded",D],text:[2,"text","text",D],plain:[2,"plain","plain",D],severity:"severity",outlined:[2,"outlined","outlined",D],link:[2,"link","link",D],tabindex:[2,"tabindex","tabindex",Ke],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",buttonProps:"buttonProps",autofocus:[2,"autofocus","autofocus",D],fluid:[1,"fluid"]},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[B([ct]),E],ngContentSelectors:wd,decls:7,vars:15,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],[3,"class",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","spinner",3,"class","spin",4,"ngIf"],["data-p-icon","spinner",3,"spin"],[3,"ngIf"],[3,"value","severity"]],template:function(n,o){n&1&&(Ge(),Te(0,"button",0),be("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),We(1),ee(2,Sd,1,0,"ng-container",1)(3,xd,3,5,"ng-container",2)(4,Nd,3,5,"ng-container",2)(5,Ld,2,5,"span",3)(6,Pd,1,2,"p-badge",4),Me()),n&2&&(V(o.cn(o.cx("root"),o.styleClass,o.buttonProps==null?null:o.buttonProps.styleClass)),x("ngStyle",o.style||(o.buttonProps==null?null:o.buttonProps.style))("disabled",o.disabled||o.loading||(o.buttonProps==null?null:o.buttonProps.disabled))("pAutoFocus",o.autofocus||(o.buttonProps==null?null:o.buttonProps.autofocus)),Y("type",o.type||(o.buttonProps==null?null:o.buttonProps.type))("aria-label",o.ariaLabel||(o.buttonProps==null?null:o.buttonProps.ariaLabel))("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex||(o.buttonProps==null?null:o.buttonProps.tabindex)),k(2),x("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),k(),x("ngIf",o.loading),k(),x("ngIf",!o.loading),k(),x("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),k(),x("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ie,cn,Ye,Zi,Ci,Pa,$a,xa,Po,J],encapsulation:2,changeDetection:0})}return t})(),Zy=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[ie,Bd,J,J]})}return t})();var Ei=(()=>{class t extends re{modelValue=Q(void 0);$filled=ne(()=>U(this.modelValue()));writeModelValue(e){this.modelValue.set(e)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,features:[E]})}return t})();var dt=(()=>{class t extends Ei{required=T(void 0,{transform:D});invalid=T(void 0,{transform:D});disabled=T(void 0,{transform:D});name=T();_disabled=Q(!1);$disabled=ne(()=>this.disabled()||this._disabled());onModelChange=()=>{};onModelTouched=()=>{};writeDisabledState(e){this._disabled.set(e)}writeControlValue(e,n){}writeValue(e){this.writeControlValue(e,this.writeModelValue.bind(this))}registerOnChange(e){this.onModelChange=e}registerOnTouched(e){this.onModelTouched=e}setDisabledState(e){this.writeDisabledState(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,inputs:{required:[1,"required"],invalid:[1,"invalid"],disabled:[1,"disabled"],name:[1,"name"]},features:[E]})}return t})();var Ga=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var $d=["icon"],Ud=["input"],jd=(t,i)=>({checked:t,class:i});function Hd(t,i){if(t&1&&Fe(0,"span",7),t&2){let e=j(3);V(e.cx("icon")),x("ngClass",e.checkboxIcon),Y("data-pc-section","icon")}}function zd(t,i){if(t&1&&(we(),Fe(0,"svg",8)),t&2){let e=j(3);V(e.cx("icon")),Y("data-pc-section","icon")}}function Gd(t,i){if(t&1&&(bt(0),ee(1,Hd,1,4,"span",5)(2,zd,1,3,"svg",6),yt()),t&2){let e=j(2);k(),x("ngIf",e.checkboxIcon),k(),x("ngIf",!e.checkboxIcon)}}function Wd(t,i){if(t&1&&(we(),Fe(0,"svg",9)),t&2){let e=j(2);V(e.cx("icon")),Y("data-pc-section","icon")}}function Kd(t,i){if(t&1&&(bt(0),ee(1,Gd,3,2,"ng-container",2)(2,Wd,1,3,"svg",4),yt()),t&2){let e=j();k(),x("ngIf",e.checked),k(),x("ngIf",e._indeterminate())}}function qd(t,i){}function Yd(t,i){t&1&&ee(0,qd,0,0,"ng-template")}var Zd=`
    ${Ga}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Xd={root:({instance:t})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":t.checked,"p-disabled":t.$disabled(),"p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-checkbox-sm p-inputfield-sm":t.size()==="small","p-checkbox-lg p-inputfield-lg":t.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},Wa=(()=>{class t extends K{name="checkbox";theme=Zd;classes=Xd;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Jd={provide:nt,useExisting:Ee(()=>Ka),multi:!0},Ka=(()=>{class t extends dt{value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=T();size=T();onChange=new te;onFocus=new te;onBlur=new te;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:zs(this.value,this.modelValue())}_indeterminate=Q(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=f(Wa);$variant=ne(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._checkboxIconTemplate=e.template;break;case"checkboxicon":this._checkboxIconTemplate=e.template;break}})}ngOnChanges(e){super.ngOnChanges(e),e.indeterminate&&this._indeterminate.set(e.indeterminate.currentValue)}updateModel(e){let n,o=this.injector.get(tt,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=r.filter(s=>!je(s,this.value)):n=r?[...r,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:e})}handleChange(e){this.readonly||this.updateModel(e)}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1,this.onBlur.emit(e),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeControlValue(e,n){n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,o,r){if(n&1&&(ue(r,$d,4),ue(r,at,4)),n&2){let s;se(s=ae())&&(o.checkboxIconTemplate=s.first),se(s=ae())&&(o.templates=s)}},viewQuery:function(n,o){if(n&1&&hr(Ud,5),n&2){let r;se(r=ae())&&(o.inputViewChild=r.first)}},hostVars:5,hostBindings:function(n,o){n&2&&(Y("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.$disabled()),V(o.cn(o.cx("root"),o.styleClass)))},inputs:{value:"value",binary:[2,"binary","binary",D],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Ke],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",D],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",D],autofocus:[2,"autofocus","autofocus",D],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[B([Jd,Wa]),E,Le],decls:5,vars:22,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class",4,"ngIf"],[3,"class","ngClass",4,"ngIf"],["data-p-icon","check",3,"class",4,"ngIf"],[3,"ngClass"],["data-p-icon","check"],["data-p-icon","minus"]],template:function(n,o){if(n&1){let r=$n();Te(0,"input",1,0),be("focus",function(a){return Ct(r),Et(o.onInputFocus(a))})("blur",function(a){return Ct(r),Et(o.onInputBlur(a))})("change",function(a){return Ct(r),Et(o.handleChange(a))}),Me(),Te(2,"div"),ee(3,Kd,3,2,"ng-container",2)(4,Yd,1,0,null,3),Me()}n&2&&(mr(o.inputStyle),V(o.cn(o.cx("input"),o.inputClass)),x("checked",o.checked),Y("id",o.inputId)("value",o.value)("name",o.name())("tabindex",o.tabindex)("required",o.required()?"":void 0)("readonly",o.readonly?"":void 0)("disabled",o.$disabled()?"":void 0)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),k(2),V(o.cx("box")),k(),x("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),k(),x("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",Un(19,jd,o.checked,o.cx("icon"))))},dependencies:[ie,Yi,cn,Ye,J,Ba],encapsulation:2,changeDetection:0})}return t})(),T0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[Ka,J,J]})}return t})();var qa=`
    .p-inputtext {
        font-family: inherit;
        font-feature-settings: inherit;
        font-size: 1rem;
        color: dt('inputtext.color');
        background: dt('inputtext.background');
        padding-block: dt('inputtext.padding.y');
        padding-inline: dt('inputtext.padding.x');
        border: 1px solid dt('inputtext.border.color');
        transition:
            background dt('inputtext.transition.duration'),
            color dt('inputtext.transition.duration'),
            border-color dt('inputtext.transition.duration'),
            outline-color dt('inputtext.transition.duration'),
            box-shadow dt('inputtext.transition.duration');
        appearance: none;
        border-radius: dt('inputtext.border.radius');
        outline-color: transparent;
        box-shadow: dt('inputtext.shadow');
    }

    .p-inputtext:enabled:hover {
        border-color: dt('inputtext.hover.border.color');
    }

    .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
        box-shadow: dt('inputtext.focus.ring.shadow');
        outline: dt('inputtext.focus.ring.width') dt('inputtext.focus.ring.style') dt('inputtext.focus.ring.color');
        outline-offset: dt('inputtext.focus.ring.offset');
    }

    .p-inputtext.p-invalid {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.p-variant-filled {
        background: dt('inputtext.filled.background');
    }

    .p-inputtext.p-variant-filled:enabled:hover {
        background: dt('inputtext.filled.hover.background');
    }

    .p-inputtext.p-variant-filled:enabled:focus {
        background: dt('inputtext.filled.focus.background');
    }

    .p-inputtext:disabled {
        opacity: 1;
        background: dt('inputtext.disabled.background');
        color: dt('inputtext.disabled.color');
    }

    .p-inputtext::placeholder {
        color: dt('inputtext.placeholder.color');
    }

    .p-inputtext.p-invalid::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }

    .p-inputtext-sm {
        font-size: dt('inputtext.sm.font.size');
        padding-block: dt('inputtext.sm.padding.y');
        padding-inline: dt('inputtext.sm.padding.x');
    }

    .p-inputtext-lg {
        font-size: dt('inputtext.lg.font.size');
        padding-block: dt('inputtext.lg.padding.y');
        padding-inline: dt('inputtext.lg.padding.x');
    }

    .p-inputtext-fluid {
        width: 100%;
    }
`;var Qd=`
    ${qa}

    /* For PrimeNG */
   .p-inputtext.ng-invalid.ng-dirty {
        border-color: dt('inputtext.invalid.border.color');
    }

    .p-inputtext.ng-invalid.ng-dirty::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,ep={root:({instance:t})=>["p-inputtext p-component",{"p-filled":t.$filled(),"p-inputtext-sm":t.pSize==="small","p-inputtext-lg":t.pSize==="large","p-invalid":t.invalid(),"p-variant-filled":t.$variant()==="filled","p-inputtext-fluid":t.hasFluid}]},Ya=(()=>{class t extends K{name="inputtext";theme=Qd;classes=ep;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var U0=(()=>{class t extends Ei{ngControl=f(tt,{optional:!0,self:!0});pcFluid=f(lt,{optional:!0,host:!0,skipSelf:!0});pSize;variant=T();fluid=T(void 0,{transform:D});invalid=T(void 0,{transform:D});$variant=ne(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());_componentStyle=f(Ya);ngAfterViewInit(){super.ngAfterViewInit(),this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value),this.cd.detectChanges()}ngDoCheck(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}onInput(){this.writeModelValue(this.ngControl?.value??this.el.nativeElement.value)}get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,selectors:[["","pInputText",""]],hostVars:2,hostBindings:function(n,o){n&1&&be("input",function(s){return o.onInput(s)}),n&2&&V(o.cx("root"))},inputs:{pSize:"pSize",variant:[1,"variant"],fluid:[1,"fluid"],invalid:[1,"invalid"]},features:[B([Ya]),E]})}return t})(),j0=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({})}return t})();var Za=class t{static isArray(i,e=!0){return Array.isArray(i)&&(e||i.length!==0)}static isObject(i,e=!0){return typeof i=="object"&&!Array.isArray(i)&&i!=null&&(e||Object.keys(i).length!==0)}static equals(i,e,n){return n?this.resolveFieldData(i,n)===this.resolveFieldData(e,n):this.equalsByValue(i,e)}static equalsByValue(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=this.isDate(i),u=this.isDate(e);if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var c=i instanceof RegExp,d=e instanceof RegExp;if(c!=d)return!1;if(c&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static resolveFieldData(i,e){if(i&&e){if(this.isFunction(e))return e(i);if(e.indexOf(".")==-1)return i[e];{let n=e.split("."),o=i;for(let r=0,s=n.length;r<s;++r){if(o==null)return null;o=o[n[r]]}return o}}else return null}static isFunction(i){return!!(i&&i.constructor&&i.call&&i.apply)}static reorderArray(i,e,n){let o;i&&e!==n&&(n>=i.length&&(n%=i.length,e%=i.length),i.splice(n,0,i.splice(e,1)[0]))}static insertIntoOrderedArray(i,e,n,o){if(n.length>0){let r=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],o)>e){n.splice(s,0,i),r=!0;break}r||n.push(i)}else n.push(i)}static findIndexInList(i,e){let n=-1;if(e){for(let o=0;o<e.length;o++)if(e[o]==i){n=o;break}}return n}static contains(i,e){if(i!=null&&e&&e.length){for(let n of e)if(this.equals(i,n))return!0}return!1}static removeAccents(i){return i&&(i=i.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),i}static isDate(i){return Object.prototype.toString.call(i)==="[object Date]"}static isEmpty(i){return i==null||i===""||Array.isArray(i)&&i.length===0||!this.isDate(i)&&typeof i=="object"&&Object.keys(i).length===0}static isNotEmpty(i){return!this.isEmpty(i)}static compare(i,e,n,o=1){let r=-1,s=this.isEmpty(i),a=this.isEmpty(e);return s&&a?r=0:s?r=o:a?r=-o:typeof i=="string"&&typeof e=="string"?r=i.localeCompare(e,n,{numeric:!0}):r=i<e?-1:i>e?1:0,r}static sort(i,e,n=1,o,r=1){let s=t.compare(i,e,o,n),a=n;return(t.isEmpty(i)||t.isEmpty(e))&&(a=r===1?n:r),a*s}static merge(i,e){if(!(i==null&&e==null)){{if((i==null||typeof i=="object")&&(e==null||typeof e=="object"))return C(C({},i||{}),e||{});if((i==null||typeof i=="string")&&(e==null||typeof e=="string"))return[i||"",e||""].join(" ")}return e||i}}static isPrintableCharacter(i=""){return this.isNotEmpty(i)&&i.length===1&&i.match(/\S| /)}static getItemValue(i,...e){return this.isFunction(i)?i(...e):i}static findLastIndex(i,e){let n=-1;if(this.isNotEmpty(i))try{n=i.findLastIndex(e)}catch{n=i.lastIndexOf([...i].reverse().find(e))}return n}static findLast(i,e){let n;if(this.isNotEmpty(i))try{n=i.findLast(e)}catch{n=[...i].reverse().find(e)}return n}static deepEquals(i,e){if(i===e)return!0;if(i&&e&&typeof i=="object"&&typeof e=="object"){var n=Array.isArray(i),o=Array.isArray(e),r,s,a;if(n&&o){if(s=i.length,s!=e.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(i[r],e[r]))return!1;return!0}if(n!=o)return!1;var l=i instanceof Date,u=e instanceof Date;if(l!=u)return!1;if(l&&u)return i.getTime()==e.getTime();var c=i instanceof RegExp,d=e instanceof RegExp;if(c!=d)return!1;if(c&&d)return i.toString()==e.toString();var p=Object.keys(i);if(s=p.length,s!==Object.keys(e).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(i[a],e[a]))return!1;return!0}return i!==i&&e!==e}static minifyCSS(i){return i&&i.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(i){return this.isString(i)?i.replace(/(-|_)/g,"").toLowerCase():i}static isString(i,e=!0){return typeof i=="string"&&(e||i!=="")}},Xa=0;function z0(t="pn_id_"){return Xa++,`${t}${Xa}`}function tp(){let t=[],i=(r,s)=>{let a=t.length>0?t[t.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return t.push({key:r,value:l}),l},e=r=>{t=t.filter(s=>s.value!==r)},n=()=>t.length>0?t[t.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(i(r,a)))},clear:r=>{r&&(e(o(r)),r.style.zIndex="")},getCurrent:()=>n(),generateZIndex:i,revertZIndex:e}}var G0=tp(),W0=t=>!!t;var Ja=`
    .p-togglebutton {
        display: inline-flex;
        cursor: pointer;
        user-select: none;
        overflow: hidden;
        position: relative;
        color: dt('togglebutton.color');
        background: dt('togglebutton.background');
        border: 1px solid dt('togglebutton.border.color');
        padding: dt('togglebutton.padding');
        font-size: 1rem;
        font-family: inherit;
        font-feature-settings: inherit;
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
        border-radius: dt('togglebutton.border.radius');
        outline-color: transparent;
        font-weight: dt('togglebutton.font.weight');
    }

    .p-togglebutton-content {
        display: inline-flex;
        flex: 1 1 auto;
        align-items: center;
        justify-content: center;
        gap: dt('togglebutton.gap');
        padding: dt('togglebutton.content.padding');
        background: transparent;
        border-radius: dt('togglebutton.content.border.radius');
        transition:
            background dt('togglebutton.transition.duration'),
            color dt('togglebutton.transition.duration'),
            border-color dt('togglebutton.transition.duration'),
            outline-color dt('togglebutton.transition.duration'),
            box-shadow dt('togglebutton.transition.duration');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
        background: dt('togglebutton.hover.background');
        color: dt('togglebutton.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked {
        background: dt('togglebutton.checked.background');
        border-color: dt('togglebutton.checked.border.color');
        color: dt('togglebutton.checked.color');
    }

    .p-togglebutton-checked .p-togglebutton-content {
        background: dt('togglebutton.content.checked.background');
        box-shadow: dt('togglebutton.content.checked.shadow');
    }

    .p-togglebutton:focus-visible {
        box-shadow: dt('togglebutton.focus.ring.shadow');
        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');
        outline-offset: dt('togglebutton.focus.ring.offset');
    }

    .p-togglebutton.p-invalid {
        border-color: dt('togglebutton.invalid.border.color');
    }

    .p-togglebutton:disabled {
        opacity: 1;
        cursor: default;
        background: dt('togglebutton.disabled.background');
        border-color: dt('togglebutton.disabled.border.color');
        color: dt('togglebutton.disabled.color');
    }

    .p-togglebutton-label,
    .p-togglebutton-icon {
        position: relative;
        transition: none;
    }

    .p-togglebutton-icon {
        color: dt('togglebutton.icon.color');
    }

    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
        color: dt('togglebutton.icon.hover.color');
    }

    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
        color: dt('togglebutton.icon.checked.color');
    }

    .p-togglebutton:disabled .p-togglebutton-icon {
        color: dt('togglebutton.icon.disabled.color');
    }

    .p-togglebutton-sm {
        padding: dt('togglebutton.sm.padding');
        font-size: dt('togglebutton.sm.font.size');
    }

    .p-togglebutton-sm .p-togglebutton-content {
        padding: dt('togglebutton.content.sm.padding');
    }

    .p-togglebutton-lg {
        padding: dt('togglebutton.lg.padding');
        font-size: dt('togglebutton.lg.font.size');
    }

    .p-togglebutton-lg .p-togglebutton-content {
        padding: dt('togglebutton.content.lg.padding');
    }

    .p-togglebutton-fluid {
        width: 100%;
    }
`;var np=["icon"],ip=["content"],el=t=>({$implicit:t});function op(t,i){t&1&&vt(0)}function rp(t,i){if(t&1&&Fe(0,"span"),t&2){let e=j(3);V(e.cn(e.cx("icon"),e.checked?e.onIcon:e.offIcon,e.iconPos==="left"?e.cx("iconLeft"):e.cx("iconRight"))),Y("data-pc-section","icon")}}function sp(t,i){if(t&1&&Tt(0,rp,1,3,"span",1),t&2){let e=j(2);Mt(e.onIcon||e.offIcon?0:-1)}}function ap(t,i){t&1&&vt(0)}function lp(t,i){if(t&1&&ee(0,ap,1,0,"ng-container",0),t&2){let e=j(2);x("ngTemplateOutlet",e.iconTemplate||e._iconTemplate)("ngTemplateOutletContext",Ot(2,el,e.checked))}}function up(t,i){if(t&1&&(Tt(0,sp,1,1)(1,lp,1,4,"ng-container"),Te(2,"span"),It(3),Me()),t&2){let e=j();Mt(e.iconTemplate?1:0),k(2),V(e.cx("label")),Y("data-pc-section","label"),k(),xt(e.checked?e.hasOnLabel?e.onLabel:"\xA0":e.hasOffLabel?e.offLabel:"\xA0")}}var cp=`
    ${Ja}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`,dp={root:({instance:t})=>["p-togglebutton p-component",{"p-togglebutton-checked":t.checked,"p-invalid":t.invalid(),"p-disabled":t.$disabled(),"p-togglebutton-sm p-inputfield-sm":t.size==="small","p-togglebutton-lg p-inputfield-lg":t.size==="large","p-togglebutton-fluid":t.fluid()}],content:"p-togglebutton-content",icon:"p-togglebutton-icon",iconLeft:"p-togglebutton-icon-left",iconRight:"p-togglebutton-icon-right",label:"p-togglebutton-label"},Qa=(()=>{class t extends K{name="togglebutton";theme=cp;classes=dp;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var pp={provide:nt,useExisting:Ee(()=>wi),multi:!0},wi=(()=>{class t extends dt{onKeyDown(e){switch(e.code){case"Enter":this.toggle(e),e.preventDefault();break;case"Space":this.toggle(e),e.preventDefault();break}}toggle(e){!this.$disabled()&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.writeModelValue(this.checked),this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:e,checked:this.checked}),this.cd.markForCheck())}onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;styleClass;inputId;tabindex=0;iconPos="left";autofocus;size;allowEmpty;fluid=T(void 0,{transform:D});onChange=new te;iconTemplate;contentTemplate;templates;checked=!1;_componentStyle=f(Qa);onBlur(){this.onModelTouched()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"icon":this._iconTemplate=e.template;break;case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}writeControlValue(e,n){this.checked=e,n(e),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(n,o,r){if(n&1&&(ue(r,np,4),ue(r,ip,4),ue(r,at,4)),n&2){let s;se(s=ae())&&(o.iconTemplate=s.first),se(s=ae())&&(o.contentTemplate=s.first),se(s=ae())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&1&&be("keydown",function(s){return o.onKeyDown(s)})("click",function(s){return o.toggle(s)}),n&2&&(Y("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("role","button")("tabindex",o.$disabled()?-1:0),V(o.cn(o.cx("root"),o.styleClass)))},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Ke],iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",D],size:"size",allowEmpty:"allowEmpty",fluid:[1,"fluid"]},outputs:{onChange:"onChange"},features:[B([pp,Qa]),ar([Ci]),E],decls:3,vars:7,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class"]],template:function(n,o){n&1&&(Te(0,"span"),ee(1,op,1,0,"ng-container",0),Tt(2,up,4,5),Me()),n&2&&(V(o.cx("content")),k(),x("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",Ot(5,el,o.checked)),k(),Mt(o.contentTemplate?-1:2))},dependencies:[ie,Ye,J],encapsulation:2,changeDetection:0})}return t})(),pv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[wi,J,J]})}return t})();var tl=`
    .p-selectbutton {
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        outline-color: transparent;
        border-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton {
        border-radius: 0;
        border-width: 1px 1px 1px 0;
    }

    .p-selectbutton .p-togglebutton:focus-visible {
        position: relative;
        z-index: 1;
    }

    .p-selectbutton .p-togglebutton:first-child {
        border-inline-start-width: 1px;
        border-start-start-radius: dt('selectbutton.border.radius');
        border-end-start-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton .p-togglebutton:last-child {
        border-start-end-radius: dt('selectbutton.border.radius');
        border-end-end-radius: dt('selectbutton.border.radius');
    }

    .p-selectbutton.p-invalid {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }

    .p-selectbutton-fluid {
        width: 100%;
    }
    
    .p-selectbutton-fluid .p-togglebutton {
        flex: 1 1 0;
    }
`;var hp=["item"],fp=(t,i)=>({$implicit:t,index:i});function gp(t,i){return this.getOptionLabel(i)}function mp(t,i){t&1&&vt(0)}function bp(t,i){if(t&1&&ee(0,mp,1,0,"ng-container",3),t&2){let e=j(2),n=e.$implicit,o=e.$index,r=j();x("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",Un(2,fp,n,o))}}function yp(t,i){t&1&&ee(0,bp,1,5,"ng-template",null,0,br)}function vp(t,i){if(t&1){let e=$n();Te(0,"p-togglebutton",2),be("onChange",function(o){let r=Ct(e),s=r.$implicit,a=r.$index,l=j();return Et(l.onOptionSelect(o,s,a))}),Tt(1,yp,2,0),Me()}if(t&2){let e=i.$implicit,n=j();x("autofocus",n.autofocus)("styleClass",n.styleClass)("ngModel",n.isSelected(e))("onLabel",n.getOptionLabel(e))("offLabel",n.getOptionLabel(e))("disabled",n.$disabled()||n.isOptionDisabled(e))("allowEmpty",n.getAllowEmpty())("size",n.size())("fluid",n.fluid()),k(),Mt(n.itemTemplate||n._itemTemplate?1:-1)}}var Dp=`
    ${tl}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`,_p={root:({instance:t})=>["p-selectbutton p-component",{"p-invalid":t.invalid(),"p-selectbutton-fluid":t.fluid()}]},nl=(()=>{class t extends K{name="selectbutton";theme=Dp;classes=_p;static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275prov=m({token:t,factory:t.\u0275fac})}return t})();var Cp={provide:nt,useExisting:Ee(()=>il),multi:!0},il=(()=>{class t extends dt{options;optionLabel;optionValue;optionDisabled;get unselectable(){return this._unselectable}_unselectable=!1;set unselectable(e){this._unselectable=e,this.allowEmpty=!e}tabindex=0;multiple;allowEmpty=!0;styleClass;ariaLabelledBy;dataKey;autofocus;size=T();fluid=T(void 0,{transform:D});onOptionClick=new te;onChange=new te;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;focusedIndex=0;_componentStyle=f(nl);getAllowEmpty(){return this.multiple?this.allowEmpty||this.value?.length!==1:this.allowEmpty}getOptionLabel(e){return this.optionLabel?rt(e,this.optionLabel):e.label!=null?e.label:e}getOptionValue(e){return this.optionValue?rt(e,this.optionValue):this.optionLabel||e.value===void 0?e:e.value}isOptionDisabled(e){return this.optionDisabled?rt(e,this.optionDisabled):e.disabled!==void 0?e.disabled:!1}onOptionSelect(e,n,o){if(this.$disabled()||this.isOptionDisabled(n))return;let r=this.isSelected(n);if(r&&this.unselectable)return;let s=this.getOptionValue(n),a;if(this.multiple)r?a=this.value.filter(l=>!je(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.writeModelValue(this.value),this.onModelChange(this.value),this.onChange.emit({originalEvent:e,value:this.value}),this.onOptionClick.emit({originalEvent:e,option:n,index:o})}changeTabIndexes(e,n){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});n==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(e,n){this.focusedIndex=n}onBlur(){this.onModelTouched()}removeOption(e){this.value=this.value.filter(n=>!je(n,this.getOptionValue(e),this.dataKey))}isSelected(e){let n=!1,o=this.getOptionValue(e);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(je(r,o,this.dataKey)){n=!0;break}}}else n=je(this.getOptionValue(e),this.value,this.equalityKey);return n}templates;ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"item":this._itemTemplate=e.template;break}})}writeControlValue(e,n){this.value=e,n(this.value),this.cd.markForCheck()}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275cmp=q({type:t,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(n,o,r){if(n&1&&(ue(r,hp,4),ue(r,at,4)),n&2){let s;se(s=ae())&&(o.itemTemplate=s.first),se(s=ae())&&(o.templates=s)}},hostVars:6,hostBindings:function(n,o){n&2&&(Y("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),V(o.cx("root")))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",D],tabindex:[2,"tabindex","tabindex",Ke],multiple:[2,"multiple","multiple",D],allowEmpty:[2,"allowEmpty","allowEmpty",D],styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",D],size:[1,"size"],fluid:[1,"fluid"]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[B([Cp,nl]),E],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size","fluid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,o){n&1&&cr(0,vp,2,10,"p-togglebutton",1,gp,!0),n&2&&dr(o.options)},dependencies:[wi,Ta,wa,Lo,ie,Ye,J],encapsulation:2,changeDetection:0})}return t})(),Rv=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=L({type:t});static \u0275inj=N({imports:[il,J,J]})}return t})();var oD=(()=>{class t extends dt{pcFluid=f(lt,{optional:!0,host:!0,skipSelf:!0});fluid=T(void 0,{transform:D});variant=T();size=T();inputSize=T();pattern=T();min=T();max=T();step=T();minlength=T();maxlength=T();$variant=ne(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());get hasFluid(){return this.fluid()??!!this.pcFluid}static \u0275fac=(()=>{let e;return function(o){return(e||(e=v(t)))(o||t)}})();static \u0275dir=A({type:t,inputs:{fluid:[1,"fluid"],variant:[1,"variant"],size:[1,"size"],inputSize:[1,"inputSize"],pattern:[1,"pattern"],min:[1,"min"],max:[1,"max"],step:[1,"step"],minlength:[1,"minlength"],maxlength:[1,"maxlength"]},features:[E]})}return t})();export{Cl as a,kt as b,Ar as c,Tr as d,Al as e,Yi as f,Zr as g,cn as h,Xr as i,Yl as j,Zi as k,Ye as l,Xl as m,Jl as n,tu as o,ie as p,Qn as q,Rh as r,ao as s,yu as t,Xe as u,Ds as v,Ts as w,Gu as x,Wu as y,ig as z,qu as A,$t as B,Is as C,Je as D,ot as E,vo as F,Xu as G,Ju as H,Qu as I,ag as J,ks as K,Do as L,lg as M,tc as N,ug as O,cg as P,Fs as Q,dg as R,pg as S,hg as T,nc as U,jt as V,fg as W,gg as X,Ps as Y,mg as Z,_o as _,ic as $,oc as aa,bg as ba,yg as ca,Co as da,pi as ea,vg as fa,Eo as ga,Dg as ha,_g as ia,Cg as ja,Eg as ka,wg as la,Sg as ma,Ag as na,Tg as oa,Ue as pa,uc as qa,Hs as ra,U as sa,rt as ta,je as ua,Ig as va,xg as wa,Og as xa,ge as ya,cc as za,Rg as Aa,kg as Ba,ye as Ca,Ng as Da,Dn as Ea,dc as Fa,Ug as Ga,oe as Ha,jg as Ia,Hg as Ja,zg as Ka,Gg as La,Wg as Ma,Kg as Na,at as Oa,J as Pa,qg as Qa,Yg as Ra,Fo as Sa,Dc as Ta,rm as Ua,sm as Va,K as Wa,Io as Xa,Fm as Ya,nt as Za,ga as _a,tt as $a,wa as ab,Lo as bb,nd as cb,rd as db,Ta as eb,re as fb,Vo as gb,Zb as hb,Xb as ib,La as jb,Pa as kb,sy as lb,Po as mb,xa as nb,Oa as ob,lt as pb,kb as qb,Zt as rb,Ba as sb,$a as tb,wy as ub,Ci as vb,Wb as wb,Ha as xb,Yy as yb,Bd as zb,Zy as Ab,Ei as Bb,dt as Cb,Ka as Db,T0 as Eb,U0 as Fb,j0 as Gb,oD as Hb,Za as Ib,z0 as Jb,G0 as Kb,W0 as Lb,wi as Mb,pv as Nb,il as Ob,Rv as Pb};
