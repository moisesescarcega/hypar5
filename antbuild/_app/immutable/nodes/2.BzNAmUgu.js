var S0=Object.defineProperty;var dd=s=>{throw TypeError(s)};var M0=(s,e,t)=>e in s?S0(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Nt=(s,e,t)=>M0(s,typeof e!="symbol"?e+"":e,t),pd=(s,e,t)=>e.has(s)||dd("Cannot "+t);var Jn=(s,e,t)=>(pd(s,e,"read from private field"),t?t.call(s):e.get(s)),da=(s,e,t)=>e.has(s)?dd("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(s):e.set(s,t),gh=(s,e,t,i)=>(pd(s,e,"write to private field"),i?i.call(s,t):e.set(s,t),t);import{c as un,b as It,t as Ii}from"../chunks/disclose-version.Cy-PvFFl.js";import"../chunks/legacy.Dgn7nNcH.js";import{k as md,m as gd,p as Pm,q as xu,h as Gi,A as w0,b as E0,o as T0,G as Dm,ac as A0,ad as vd,z as _d,y as vh,c as pa,B as C0,aw as Tl,ae as Um,a as Lm,af as R0,ax as I0,ay as P0,F as D0,az as U0,d as L0,a0 as N0,a6 as Wa,aA as F0,aB as O0,aC as B0,w as k0,aD as z0,aE as V0,ab as G0,aF as H0,aG as W0,u as Ju,ah as ju,_ as Sn,aH as Nm,R as Ge,a1 as Qu,aI as Fn,aJ as Yn,P as yn,i as nn,T as hn,K as vi,U as Gt,L as _i,a2 as di,M as _n,n as Et,N as xn,W as zt,V as xs}from"../chunks/runtime.C05xA0RX.js";import{d as X0,s as Er}from"../chunks/render.Dyt_yx07.js";import{r as fo,i as Xi,b as xd,s as _c,p as ni,a as vr,d as Fm,e as yu,c as Qr}from"../chunks/props.FI-YN0pu.js";import{a as Pi,o as xc}from"../chunks/index-client.D_vZ0r2e.js";import{s as gr}from"../chunks/snippet.NvlsR2J9.js";import{g as bu,d as ss,w as Nn,r as $u}from"../chunks/index.D4pm4_79.js";let yd=!1;function Om(){yd||(yd=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var e;if(!s.defaultPrevented)for(const t of s.target.elements)(e=t.__on_r)==null||e.call(t)})},{capture:!0}))}function Y0(s){var e=Pm,t=xu;md(null),gd(null);try{return s()}finally{md(e),gd(t)}}function Z0(s,e,t,i=t){s.addEventListener(e,()=>Y0(t));const n=s.__on_r;n?s.__on_r=()=>{n(),i(!0)}:s.__on_r=()=>i(!0),Om()}function bd(s,e){return e}function q0(s,e,t,i){for(var n=[],r=e.length,a=0;a<r;a++)P0(e[a].e,n,!0);var o=r>0&&n.length===0&&t!==null;if(o){var l=t.parentNode;D0(l),l.append(t),i.clear(),ur(s,e[0].prev,e[r-1].next)}U0(n,()=>{for(var c=0;c<r;c++){var h=e[c];o||(i.delete(h.k),ur(s,h.prev,h.next)),L0(h.e,!o)}})}function Sd(s,e,t,i,n,r=null){var a=s,o={flags:e,items:new Map,first:null};Gi&&w0();var l=null,c=!1;E0(()=>{var h=t(),u=T0(h)?h:h==null?[]:Dm(h),f=u.length;if(c&&f===0)return;c=f===0;let d=!1;if(Gi){var p=a.data===A0;p!==(f===0)&&(a=vd(),_d(a),vh(!1),d=!0)}if(Gi){for(var v=null,m,g=0;g<f;g++){if(pa.nodeType===8&&pa.data===C0){a=pa,d=!0,vh(!1);break}var y=u[g],x=i(y,g);m=Bm(pa,o,v,null,y,x,g,n,e),o.items.set(x,m),v=m}f>0&&_d(vd())}if(!Gi){var _=Pm;K0(u,o,a,n,e,(_.f&Tl)!==0,i)}r!==null&&(f===0?l?Um(l):l=Lm(()=>r(a)):l!==null&&R0(l,()=>{l=null})),d&&vh(!0),t()}),Gi&&(a=pa)}function K0(s,e,t,i,n,r,a,o){var l=s.length,c=e.items,h=e.first,u=h,f,d=null,p=[],v=[],m,g,y,x;for(x=0;x<l;x+=1){if(m=s[x],g=a(m,x),y=c.get(g),y===void 0){var _=u?u.e.nodes_start:t;d=Bm(_,e,d,d===null?e.first:d.next,m,g,x,i,n),c.set(g,d),p=[],v=[],u=d.next;continue}if(J0(y,m,x),y.e.f&Tl&&Um(y.e),y!==u){if(f!==void 0&&f.has(y)){if(p.length<v.length){var C=v[0],T;d=C.prev;var A=p[0],E=p[p.length-1];for(T=0;T<p.length;T+=1)Md(p[T],C,t);for(T=0;T<v.length;T+=1)f.delete(v[T]);ur(e,A.prev,E.next),ur(e,d,A),ur(e,E,C),u=C,d=E,x-=1,p=[],v=[]}else f.delete(y),Md(y,u,t),ur(e,y.prev,y.next),ur(e,y,d===null?e.first:d.next),ur(e,d,y),d=y;continue}for(p=[],v=[];u!==null&&u.k!==g;)(r||!(u.e.f&Tl))&&(f??(f=new Set)).add(u),v.push(u),u=u.next;if(u===null)continue;y=u}p.push(y),d=y,u=y.next}if(u!==null||f!==void 0){for(var w=f===void 0?[]:Dm(f);u!==null;)(r||!(u.e.f&Tl))&&w.push(u),u=u.next;var M=w.length;if(M>0){var L=null;q0(e,w,L,c)}}xu.first=e.first&&e.first.e,xu.last=d&&d.e}function J0(s,e,t,i){I0(s.v,e),s.i=t}function Bm(s,e,t,i,n,r,a,o,l,c){var h=(l&O0)!==0,u=(l&B0)===0,f=h?u?N0(n):Wa(n):n,d=l&F0?Wa(a):a,p={i:d,v:f,k:r,a:null,e:null,prev:t,next:i};try{return p.e=Lm(()=>o(s,f,d),Gi),p.e.prev=t&&t.e,p.e.next=i&&i.e,t===null?e.first=p:(t.next=p,t.e.next=p.e),i!==null&&(i.prev=p,i.e.prev=p.e),p}finally{}}function Md(s,e,t){for(var i=s.next?s.next.e.nodes_start:t,n=e?e.e.nodes_start:t,r=s.e.nodes_start;r!==i;){var a=k0(r);n.before(r),r=a}}function ur(s,e,t){e===null?s.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function _h(s){if(Gi){var e=!1,t=()=>{if(!e){if(e=!0,s.hasAttribute("value")){var i=s.value;Hr(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var n=s.checked;Hr(s,"checked",null),s.checked=n}}};s.__on_r=t,z0(t),Om()}}function wd(s,e){var t=s.__attributes??(s.__attributes={});t.value===(t.value=e??void 0)||s.value===e&&(e!==0||s.nodeName!=="PROGRESS")||(s.value=e)}function Hr(s,e,t,i){var n=s.__attributes??(s.__attributes={});Gi&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=t)&&(e==="style"&&"__styles"in s&&(s.__styles={}),e==="loading"&&(s[V0]=t),t==null?s.removeAttribute(e):typeof t!="string"&&j0(s).includes(e)?s[e]=t:s.setAttribute(e,t))}var Ed=new Map;function j0(s){var e=Ed.get(s.nodeName);if(e)return e;Ed.set(s.nodeName,e=[]);for(var t,i=s,n=Element.prototype;n!==i;){t=H0(i);for(var r in t)t[r].set&&e.push(r);i=G0(i)}return e}const Q0=()=>performance.now(),Si={tick:s=>requestAnimationFrame(s),now:()=>Q0(),tasks:new Set};function km(){const s=Si.now();Si.tasks.forEach(e=>{e.c(s)||(Si.tasks.delete(e),e.f())}),Si.tasks.size!==0&&Si.tick(km)}function $0(s){let e;return Si.tasks.size===0&&Si.tick(km),{promise:new Promise(t=>{Si.tasks.add(e={c:s,f:t})}),abort(){Si.tasks.delete(e)}}}function e_(s,e,t=e){var i=W0();Z0(s,"input",n=>{var r=n?s.defaultValue:s.value;if(r=xh(s)?yh(r):r,t(r),i&&r!==(r=e())){var a=s.selectionStart,o=s.selectionEnd;s.value=r??"",o!==null&&(s.selectionStart=a,s.selectionEnd=Math.min(o,s.value.length))}}),(Gi&&s.defaultValue!==s.value||Ju(e)==null&&s.value)&&t(xh(s)?yh(s.value):s.value),ju(()=>{var n=e();xh(s)&&n===yh(s.value)||s.type==="date"&&!n&&!s.value||n!==s.value&&(s.value=n??"")})}function xh(s){var e=s.type;return e==="number"||e==="range"}function yh(s){return s===""?null:+s}function t_(s){Sn(s,s.v+1)}function n_(s){let e=0,t=Wa(0),i;return()=>{Nm()&&(Ge(t),ju(()=>(e===0&&(i=Ju(()=>s(()=>t_(t)))),e+=1,()=>{Qu().then(()=>{e-=1,e===0&&(i==null||i(),i=void 0)})})))}}function i_(s){let e;const t=n_(n=>{let r=!1;const a=s.subscribe(o=>{e=o,r&&n()});return r=!0,a});function i(){return Nm()?(t(),e):bu(s)}return"set"in s?{get current(){return i()},set current(n){s.set(n)}}:{get current(){return i()}}}const r_=!0,D2=Object.freeze(Object.defineProperty({__proto__:null,prerender:r_},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="171",$r={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Xr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},zm=0,Su=1,Vm=2,s_=3,a_=0,ef=1,Ia=2,bi=3,Ki=0,Mn=1,ii=2,Yi=0,es=1,Mu=2,wu=3,Eu=4,Gm=5,dr=100,Hm=101,Wm=102,Xm=103,Ym=104,Zm=200,qm=201,Km=202,Jm=203,Pl=204,Dl=205,jm=206,Qm=207,$m=208,eg=209,tg=210,ng=211,ig=212,rg=213,sg=214,Ul=0,Ll=1,Nl=2,as=3,Fl=4,Ol=5,Bl=6,kl=7,po=0,ag=1,og=2,Zi=0,lg=1,cg=2,hg=3,ug=4,fg=5,zl=6,dg=7,Tu="attached",pg="detached",bc=300,Ji=301,_r=302,Js=303,Xa=304,ea=306,Ya=1e3,si=1001,Za=1002,rn=1003,tf=1004,o_=1004,Vs=1005,l_=1005,Dt=1006,Pa=1007,c_=1007,wi=1008,h_=1008,Ci=1009,nf=1010,rf=1011,js=1012,Sc=1013,ji=1014,Yt=1015,Ln=1016,Mc=1017,wc=1018,os=1020,sf=35902,af=1021,of=1022,fn=1023,lf=1024,cf=1025,ts=1026,ls=1027,mo=1028,go=1029,hf=1030,Ec=1031,u_=1032,Tc=1033,Da=33776,Ua=33777,La=33778,Na=33779,Vl=35840,Gl=35841,Hl=35842,Wl=35843,Xl=36196,Yl=37492,Zl=37496,ql=37808,Kl=37809,Jl=37810,jl=37811,Ql=37812,$l=37813,ec=37814,tc=37815,nc=37816,ic=37817,rc=37818,sc=37819,ac=37820,oc=37821,Fa=36492,lc=36494,cc=36495,uf=36283,hc=36284,uc=36285,fc=36286,mg=2200,gg=2201,vg=2202,qa=2300,dc=2301,Al=2302,Yr=2400,Zr=2401,Ka=2402,Ac=2500,ff=2501,f_=0,d_=1,p_=2,_g=3200,df=3201,m_=3202,g_=3203,yr=0,xg=1,Mi="",Dn="srgb",Ri="srgb-linear",Ja="linear",bt="srgb",v_=0,Vr=7680,__=7681,x_=7682,y_=7683,b_=34055,S_=34056,M_=5386,w_=512,E_=513,T_=514,A_=515,C_=516,R_=517,I_=518,Au=519,yg=512,bg=513,Sg=514,pf=515,Mg=516,wg=517,Eg=518,Tg=519,ja=35044,P_=35048,D_=35040,U_=35045,L_=35049,N_=35041,F_=35046,O_=35050,B_=35042,k_="100",Cu="300 es",Ei=2e3,Qa=2001;class Di{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}}const on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Td=1234567;const ns=Math.PI/180,Qs=180/Math.PI;function Wn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(on[s&255]+on[s>>8&255]+on[s>>16&255]+on[s>>24&255]+"-"+on[e&255]+on[e>>8&255]+"-"+on[e>>16&15|64]+on[e>>24&255]+"-"+on[t&63|128]+on[t>>8&255]+"-"+on[t>>16&255]+on[t>>24&255]+on[i&255]+on[i>>8&255]+on[i>>16&255]+on[i>>24&255]).toLowerCase()}function ct(s,e,t){return Math.max(e,Math.min(t,s))}function mf(s,e){return(s%e+e)%e}function z_(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function V_(s,e,t){return s!==e?(t-s)/(e-s):0}function Oa(s,e,t){return(1-t)*s+t*e}function G_(s,e,t,i){return Oa(s,e,1-Math.exp(-t*i))}function H_(s,e=1){return e-Math.abs(mf(s,e*2)-e)}function W_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function X_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Y_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Z_(s,e){return s+Math.random()*(e-s)}function q_(s){return s*(.5-Math.random())}function K_(s){s!==void 0&&(Td=s);let e=Td+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J_(s){return s*ns}function j_(s){return s*Qs}function Q_(s){return(s&s-1)===0&&s!==0}function $_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ex(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function tx(s,e,t,i,n){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),f=a((e-i)/2),d=r((i-e)/2),p=a((i-e)/2);switch(n){case"XYX":s.set(o*h,l*u,l*f,o*c);break;case"YZY":s.set(l*f,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*f,o*h,o*c);break;case"XZX":s.set(o*h,l*p,l*d,o*c);break;case"YXY":s.set(l*d,o*h,l*p,o*c);break;case"ZYZ":s.set(l*p,l*d,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ut(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const mr={DEG2RAD:ns,RAD2DEG:Qs,generateUUID:Wn,clamp:ct,euclideanModulo:mf,mapLinear:z_,inverseLerp:V_,lerp:Oa,damp:G_,pingpong:H_,smoothstep:W_,smootherstep:X_,randInt:Y_,randFloat:Z_,randFloatSpread:q_,seededRandom:K_,degToRad:J_,radToDeg:j_,isPowerOfTwo:Q_,ceilPowerOfTwo:$_,floorPowerOfTwo:ex,setQuaternionFromProperEuler:tx,normalize:ut,denormalize:bn};class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,i,n,r,a,o,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c)}set(e,t,i,n,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],d=i[5],p=i[8],v=n[0],m=n[3],g=n[6],y=n[1],x=n[4],_=n[7],C=n[2],T=n[5],A=n[8];return r[0]=a*v+o*y+l*C,r[3]=a*m+o*x+l*T,r[6]=a*g+o*_+l*A,r[1]=c*v+h*y+u*C,r[4]=c*m+h*x+u*T,r[7]=c*g+h*_+u*A,r[2]=f*v+d*y+p*C,r[5]=f*m+d*x+p*T,r[8]=f*g+d*_+p*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+n*r*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,d=c*r-a*l,p=t*u+i*f+n*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=u*v,e[1]=(n*c-h*i)*v,e[2]=(o*i-n*a)*v,e[3]=f*v,e[4]=(h*t-n*l)*v,e[5]=(n*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(bh.makeScale(e,t)),this}rotate(e){return this.premultiply(bh.makeRotation(-e)),this}translate(e,t){return this.premultiply(bh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bh=new lt;function Ag(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}const nx={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Gs(s,e){return new nx[s](e)}function $a(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cg(){const s=$a("canvas");return s.style.display="block",s}const Ad={};function ks(s){s in Ad||(Ad[s]=!0,console.warn(s))}function ix(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function rx(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function sx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cd=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ax(){const s={enabled:!0,workingColorSpace:Ri,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===bt&&(n.r=qi(n.r),n.g=qi(n.g),n.b=qi(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(n.r=Zs(n.r),n.g=Zs(n.g),n.b=Zs(n.b))),n},fromWorkingColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},toWorkingColorSpace:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Mi?Ja:this.spaces[n].transfer},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[Ri]:{primaries:e,whitePoint:i,transfer:Ja,toXYZ:Cd,fromXYZ:Rd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Dn},outputColorSpaceConfig:{drawingBufferColorSpace:Dn}},[Dn]:{primaries:e,whitePoint:i,transfer:bt,toXYZ:Cd,fromXYZ:Rd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Dn}}}),s}const mt=ax();function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class Rg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ys===void 0&&(ys=$a("canvas")),ys.width=e.width,ys.height=e.height;const i=ys.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ys}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$a("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=qi(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(qi(t[i]/255)*255):t[i]=qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ox=0;class qr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=Wn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(Sh(n[a].image)):r.push(Sh(n[a]))}else r=Sh(n);i.url=r}return t||(e.images[this.uuid]=i),i}}function Sh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Rg.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lx=0;class Bt extends Di{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,i=si,n=si,r=Dt,a=wi,o=fn,l=Ci,c=Bt.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=Wn(),this.name="",this.source=new qr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ya:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ya:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null;Bt.DEFAULT_MAPPING=bc;Bt.DEFAULT_ANISOTROPY=1;class ft{constructor(e=0,t=0,i=0,n=1){ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],p=l[9],v=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(d+1)/2,C=(g+1)/2,T=(h+f)/4,A=(u+v)/4,E=(p+m)/4;return x>_&&x>C?x<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(x),n=T/i,r=A/i):_>C?_<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(_),i=T/n,r=E/n):C<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(C),i=A/r,n=E/r),this.set(i,n,r,t),this}let y=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(m-p)/y,this.y=(u-v)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ig extends Di{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ft(0,0,e,t),this.scissorTest=!1,this.viewport=new ft(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Bt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mi extends Ig{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Cc extends Bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=rn,this.minFilter=rn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class cx extends mi{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGLArrayRenderTarget=!0,this.depth=i,this.texture=new Cc(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class gf extends Bt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=rn,this.minFilter=rn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hx extends mi{constructor(e=1,t=1,i=1,n={}){super(e,t,n),this.isWebGL3DRenderTarget=!0,this.depth=i,this.texture=new gf(null,e,t,i),this.texture.isRenderTargetTexture=!0}}class dn{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const f=r[a+0],d=r[a+1],p=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=p,e[t+3]=v;return}if(u!==v||l!==f||c!==d||h!==p){let m=1-o;const g=l*f+c*d+h*p+u*v,y=g>=0?1:-1,x=1-g*g;if(x>Number.EPSILON){const C=Math.sqrt(x),T=Math.atan2(C,g*y);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}const _=o*y;if(l=l*m+f*_,c=c*m+d*_,h=h*m+p*_,u=u*m+v*_,m===1-o){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=r[a],f=r[a+1],d=r[a+2],p=r[a+3];return e[t]=o*p+h*u+l*d-c*f,e[t+1]=l*p+h*f+c*u-o*d,e[t+2]=c*p+h*d+o*f-l*u,e[t+3]=h*p-o*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(r/2),f=l(i/2),d=l(n/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"YXZ":this._x=f*h*u+c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"ZXY":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u-f*d*p;break;case"ZYX":this._x=f*h*u-c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u+f*d*p;break;case"YZX":this._x=f*h*u+c*d*p,this._y=c*d*u+f*h*p,this._z=c*h*p-f*d*u,this._w=c*h*u-f*d*p;break;case"XZY":this._x=f*h*u-c*d*p,this._y=c*d*u-f*h*p,this._z=c*h*p+f*d*u,this._w=c*h*u+f*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=i+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-n)*d}else if(i>o&&i>u){const d=2*Math.sqrt(1+i-o-u);this._w=(h-l)/d,this._x=.25*d,this._y=(n+a)/d,this._z=(r+c)/d}else if(o>u){const d=2*Math.sqrt(1+o-i-u);this._w=(r-c)/d,this._x=(n+a)/d,this._y=.25*d,this._z=(l+h)/d}else{const d=2*Math.sqrt(1+u-i-o);this._w=(a-n)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-r*l,this._y=n*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,r=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*n+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=n*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,t=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Id.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Id.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=n+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ct(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-r*o,this.y=r*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Mh.copy(this).projectOnVector(e),this.sub(Mh)}reflect(e){return this.sub(Mh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mh=new O,Id=new dn;class Zt{constructor(e=new O(1/0,1/0,1/0),t=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,li):li.fromBufferAttribute(r,a),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ma),Io.subVectors(this.max,ma),bs.subVectors(e.a,ma),Ss.subVectors(e.b,ma),Ms.subVectors(e.c,ma),ir.subVectors(Ss,bs),rr.subVectors(Ms,Ss),Tr.subVectors(bs,Ms);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-Tr.z,Tr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,Tr.z,0,-Tr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-Tr.y,Tr.x,0];return!wh(t,bs,Ss,Ms,Io)||(t=[1,0,0,0,1,0,0,0,1],!wh(t,bs,Ss,Ms,Io))?!1:(Po.crossVectors(ir,rr),t=[Po.x,Po.y,Po.z],wh(t,bs,Ss,Ms,Io))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new O,new O,new O,new O,new O,new O,new O,new O],li=new O,Ro=new Zt,bs=new O,Ss=new O,Ms=new O,ir=new O,rr=new O,Tr=new O,ma=new O,Io=new O,Po=new O,Ar=new O;function wh(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){Ar.fromArray(s,r);const o=n.x*Math.abs(Ar.x)+n.y*Math.abs(Ar.y)+n.z*Math.abs(Ar.z),l=e.dot(Ar),c=t.dot(Ar),h=i.dot(Ar);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const ux=new Zt,ga=new O,Eh=new O;class Kt{constructor(e=new O,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):ux.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ga.subVectors(e,this.center);const t=ga.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ga,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ga.copy(e.center).add(Eh)),this.expandByPoint(ga.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Oi=new O,Th=new O,Do=new O,sr=new O,Ah=new O,Uo=new O,Ch=new O;class br{constructor(e=new O,t=new O(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Th.copy(e).add(t).multiplyScalar(.5),Do.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Th);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Do),o=sr.dot(this.direction),l=-sr.dot(Do),c=sr.lengthSq(),h=Math.abs(1-a*a);let u,f,d,p;if(h>0)if(u=a*l-o,f=a*o-l,p=r*h,u>=0)if(f>=-p)if(f<=p){const v=1/h;u*=v,f*=v,d=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;else f<=-p?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c):f<=p?(u=0,f=Math.min(Math.max(-r,-l),r),d=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),d=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Th).addScaledVector(Do,f),d}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),n=Oi.dot(Oi)-i*i,r=e.radius*e.radius;if(n>r)return null;const a=Math.sqrt(r-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,n=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,n=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,i,n,r){Ah.subVectors(t,e),Uo.subVectors(i,e),Ch.crossVectors(Ah,Uo);let a=this.direction.dot(Ch),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;sr.subVectors(this.origin,e);const l=o*this.direction.dot(Uo.crossVectors(sr,Uo));if(l<0)return null;const c=o*this.direction.dot(Ah.cross(sr));if(c<0||l+c>a)return null;const h=-o*sr.dot(Ch);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,i,n,r,a,o,l,c,h,u,f,d,p,v,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,l,c,h,u,f,d,p,v,m)}set(e,t,i,n,r,a,o,l,c,h,u,f,d,p,v,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=i,g[12]=n,g[1]=r,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=p,g[11]=v,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ws.setFromMatrixColumn(e,0).length(),r=1/ws.setFromMatrixColumn(e,1).length(),a=1/ws.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+p*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f+v*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-p,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,d=l*u,p=c*h,v=c*u;t[0]=f-v*o,t[4]=-a*u,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,d=a*u,p=o*h,v=o*u;t[0]=l*h,t[4]=p*c-d,t[8]=f*c+v,t[1]=l*u,t[5]=v*c+f,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=v-f*u,t[8]=p*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*u+p,t[10]=f-v*u}else if(e.order==="XZY"){const f=a*l,d=a*c,p=o*l,v=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+v,t[5]=a*h,t[9]=d*u-p,t[2]=p*u-d,t[6]=o*h,t[10]=v*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fx,e,dx)}lookAt(e,t,i){const n=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),ar.crossVectors(i,Vn),ar.lengthSq()===0&&(Math.abs(i.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),ar.crossVectors(i,Vn)),ar.normalize(),Lo.crossVectors(Vn,ar),n[0]=ar.x,n[4]=Lo.x,n[8]=Vn.x,n[1]=ar.y,n[5]=Lo.y,n[9]=Vn.y,n[2]=ar.z,n[6]=Lo.z,n[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],d=i[13],p=i[2],v=i[6],m=i[10],g=i[14],y=i[3],x=i[7],_=i[11],C=i[15],T=n[0],A=n[4],E=n[8],w=n[12],M=n[1],L=n[5],D=n[9],z=n[13],B=n[2],K=n[6],H=n[10],ue=n[14],ee=n[3],J=n[7],q=n[11],V=n[15];return r[0]=a*T+o*M+l*B+c*ee,r[4]=a*A+o*L+l*K+c*J,r[8]=a*E+o*D+l*H+c*q,r[12]=a*w+o*z+l*ue+c*V,r[1]=h*T+u*M+f*B+d*ee,r[5]=h*A+u*L+f*K+d*J,r[9]=h*E+u*D+f*H+d*q,r[13]=h*w+u*z+f*ue+d*V,r[2]=p*T+v*M+m*B+g*ee,r[6]=p*A+v*L+m*K+g*J,r[10]=p*E+v*D+m*H+g*q,r[14]=p*w+v*z+m*ue+g*V,r[3]=y*T+x*M+_*B+C*ee,r[7]=y*A+x*L+_*K+C*J,r[11]=y*E+x*D+_*H+C*q,r[15]=y*w+x*z+_*ue+C*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],p=e[3],v=e[7],m=e[11],g=e[15];return p*(+r*l*u-n*c*u-r*o*f+i*c*f+n*o*d-i*l*d)+v*(+t*l*d-t*c*f+r*a*f-n*a*d+n*c*h-r*l*h)+m*(+t*c*u-t*o*d-r*a*u+i*a*d+r*o*h-i*c*h)+g*(-n*o*h-t*l*u+t*o*f+n*a*u-i*a*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],p=e[12],v=e[13],m=e[14],g=e[15],y=u*m*c-v*f*c+v*l*d-o*m*d-u*l*g+o*f*g,x=p*f*c-h*m*c-p*l*d+a*m*d+h*l*g-a*f*g,_=h*v*c-p*u*c+p*o*d-a*v*d-h*o*g+a*u*g,C=p*u*l-h*v*l-p*o*f+a*v*f+h*o*m-a*u*m,T=t*y+i*x+n*_+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=y*A,e[1]=(v*f*r-u*m*r-v*n*d+i*m*d+u*n*g-i*f*g)*A,e[2]=(o*m*r-v*l*r+v*n*c-i*m*c-o*n*g+i*l*g)*A,e[3]=(u*l*r-o*f*r-u*n*c+i*f*c+o*n*d-i*l*d)*A,e[4]=x*A,e[5]=(h*m*r-p*f*r+p*n*d-t*m*d-h*n*g+t*f*g)*A,e[6]=(p*l*r-a*m*r-p*n*c+t*m*c+a*n*g-t*l*g)*A,e[7]=(a*f*r-h*l*r+h*n*c-t*f*c-a*n*d+t*l*d)*A,e[8]=_*A,e[9]=(p*u*r-h*v*r-p*i*d+t*v*d+h*i*g-t*u*g)*A,e[10]=(a*v*r-p*o*r+p*i*c-t*v*c-a*i*g+t*o*g)*A,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*d-t*o*d)*A,e[12]=C*A,e[13]=(h*v*n-p*u*n+p*i*f-t*v*f-h*i*m+t*u*m)*A,e[14]=(p*o*n-a*v*n-p*i*l+t*v*l+a*i*m-t*o*m)*A,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*f+t*o*f)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,d=r*h,p=r*u,v=a*h,m=a*u,g=o*u,y=l*c,x=l*h,_=l*u,C=i.x,T=i.y,A=i.z;return n[0]=(1-(v+g))*C,n[1]=(d+_)*C,n[2]=(p-x)*C,n[3]=0,n[4]=(d-_)*T,n[5]=(1-(f+g))*T,n[6]=(m+y)*T,n[7]=0,n[8]=(p+x)*A,n[9]=(m-y)*A,n[10]=(1-(f+v))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let r=ws.set(n[0],n[1],n[2]).length();const a=ws.set(n[4],n[5],n[6]).length(),o=ws.set(n[8],n[9],n[10]).length();this.determinant()<0&&(r=-r),e.x=n[12],e.y=n[13],e.z=n[14],ci.copy(this);const c=1/r,h=1/a,u=1/o;return ci.elements[0]*=c,ci.elements[1]*=c,ci.elements[2]*=c,ci.elements[4]*=h,ci.elements[5]*=h,ci.elements[6]*=h,ci.elements[8]*=u,ci.elements[9]*=u,ci.elements[10]*=u,t.setFromRotationMatrix(ci),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,n,r,a,o=Ei){const l=this.elements,c=2*r/(t-e),h=2*r/(i-n),u=(t+e)/(t-e),f=(i+n)/(i-n);let d,p;if(o===Ei)d=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Qa)d=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=Ei){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-r),f=(t+e)*c,d=(i+n)*h;let p,v;if(o===Ei)p=(a+r)*u,v=-2*u;else if(o===Qa)p=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ws=new O,ci=new rt,fx=new O(0,0,0),dx=new O(1,1,1),ar=new O,Lo=new O,Vn=new O,Pd=new rt,Dd=new dn;class Xn{constructor(e=0,t=0,i=0,n=Xn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,r=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],f=n[6],d=n[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Pd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Dd.setFromEuler(this),this.setFromQuaternion(Dd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xn.DEFAULT_ORDER="XYZ";class Rc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let px=0;const Ud=new O,Es=new dn,Bi=new rt,No=new O,va=new O,mx=new O,gx=new dn,Ld=new O(1,0,0),Nd=new O(0,1,0),Fd=new O(0,0,1),Od={type:"added"},vx={type:"removed"},Ts={type:"childadded",child:null},Rh={type:"childremoved",child:null};class vt extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new O,t=new Xn,i=new dn,n=new O(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new rt},normalMatrix:{value:new lt}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Rc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.multiply(Es),this}rotateOnWorldAxis(e,t){return Es.setFromAxisAngle(e,t),this.quaternion.premultiply(Es),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Fd,e)}translateOnAxis(e,t){return Ud.copy(e).applyQuaternion(this.quaternion),this.position.add(Ud.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?No.copy(e):No.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(va,No,this.up):Bi.lookAt(No,va,this.up),this.quaternion.setFromRotationMatrix(Bi),n&&(Bi.extractRotation(n.matrixWorld),Es.setFromRotationMatrix(Bi),this.quaternion.premultiply(Es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Od),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vx),Rh.child=e,this.dispatchEvent(Rh),Rh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Od),Ts.child=e,this.dispatchEvent(Ts),Ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,mx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,gx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}vt.DEFAULT_UP=new O(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hi=new O,ki=new O,Ih=new O,zi=new O,As=new O,Cs=new O,Bd=new O,Ph=new O,Dh=new O,Uh=new O,Lh=new ft,Nh=new ft,Fh=new ft;class Un{constructor(e=new O,t=new O,i=new O){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),hi.subVectors(e,t),n.cross(hi);const r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){hi.subVectors(n,t),ki.subVectors(i,t),Ih.subVectors(e,t);const a=hi.dot(hi),o=hi.dot(ki),l=hi.dot(Ih),c=ki.dot(ki),h=ki.dot(Ih),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-d-p,p,d)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,zi)===null?!1:zi.x>=0&&zi.y>=0&&zi.x+zi.y<=1}static getInterpolation(e,t,i,n,r,a,o,l){return this.getBarycoord(e,t,i,n,zi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zi.x),l.addScaledVector(a,zi.y),l.addScaledVector(o,zi.z),l)}static getInterpolatedAttribute(e,t,i,n,r,a){return Lh.setScalar(0),Nh.setScalar(0),Fh.setScalar(0),Lh.fromBufferAttribute(e,t),Nh.fromBufferAttribute(e,i),Fh.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Lh,r.x),a.addScaledVector(Nh,r.y),a.addScaledVector(Fh,r.z),a}static isFrontFacing(e,t,i,n){return hi.subVectors(i,t),ki.subVectors(e,t),hi.cross(ki).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),hi.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,r=this.c;let a,o;As.subVectors(n,i),Cs.subVectors(r,i),Ph.subVectors(e,i);const l=As.dot(Ph),c=Cs.dot(Ph);if(l<=0&&c<=0)return t.copy(i);Dh.subVectors(e,n);const h=As.dot(Dh),u=Cs.dot(Dh);if(h>=0&&u<=h)return t.copy(n);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(As,a);Uh.subVectors(e,r);const d=As.dot(Uh),p=Cs.dot(Uh);if(p>=0&&d<=p)return t.copy(r);const v=d*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(i).addScaledVector(Cs,o);const m=h*p-d*u;if(m<=0&&u-h>=0&&d-p>=0)return Bd.subVectors(r,n),o=(u-h)/(u-h+(d-p)),t.copy(n).addScaledVector(Bd,o);const g=1/(m+v+f);return a=v*g,o=f*g,t.copy(i).addScaledVector(As,a).addScaledVector(Cs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Oh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ze{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,mt.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=mt.workingColorSpace){if(e=mf(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Oh(a,r,e+1/3),this.g=Oh(a,r,e),this.b=Oh(a,r,e-1/3)}return mt.toWorkingColorSpace(this,n),this}setStyle(e,t=Dn){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Dn){const i=Pg[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Dn){return mt.fromWorkingColorSpace(ln.copy(this),e),Math.round(ct(ln.r*255,0,255))*65536+Math.round(ct(ln.g*255,0,255))*256+Math.round(ct(ln.b*255,0,255))}getHexString(e=Dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(ln.copy(this),t);const i=ln.r,n=ln.g,r=ln.b,a=Math.max(i,n,r),o=Math.min(i,n,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-r)/u+(n<r?6:0);break;case n:l=(r-i)/u+2;break;case r:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=Dn){mt.fromWorkingColorSpace(ln.copy(this),e);const t=ln.r,i=ln.g,n=ln.b;return e!==Dn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Fo);const i=Oa(or.h,Fo.h,t),n=Oa(or.s,Fo.s,t),r=Oa(or.l,Fo.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new Ze;Ze.NAMES=Pg;let _x=0;class pn extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Wn(),this.name="",this.type="Material",this.blending=es,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pl,this.blendDst=Dl,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Au,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(i.blending=this.blending),this.side!==Ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Pl&&(i.blendSrc=this.blendSrc),this.blendDst!==Dl&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Au&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ui extends pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Hi=xx();function xx(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:r,exponentTable:a,offsetTable:o}}function Pn(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ct(s,-65504,65504),Hi.floatView[0]=s;const e=Hi.uint32View[0],t=e>>23&511;return Hi.baseTable[t]+((e&8388607)>>Hi.shiftTable[t])}function Ca(s){const e=s>>10;return Hi.uint32View[0]=Hi.mantissaTable[Hi.offsetTable[e]+(s&1023)]+Hi.exponentTable[e],Hi.floatView[0]}const Kr={toHalfFloat:Pn,fromHalfFloat:Ca},Wt=new O,Oo=new ye;class At{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ja,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),n=ut(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ja&&(e.usage=this.usage),e}}class yx extends At{constructor(e,t,i){super(new Int8Array(e),t,i)}}class bx extends At{constructor(e,t,i){super(new Uint8Array(e),t,i)}}class Sx extends At{constructor(e,t,i){super(new Uint8ClampedArray(e),t,i)}}class Mx extends At{constructor(e,t,i){super(new Int16Array(e),t,i)}}class vf extends At{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class wx extends At{constructor(e,t,i){super(new Int32Array(e),t,i)}}class _f extends At{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ex extends At{constructor(e,t,i){super(new Uint16Array(e),t,i),this.isFloat16BufferAttribute=!0}getX(e){let t=Ca(this.array[e*this.itemSize]);return this.normalized&&(t=bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=Pn(t),this}getY(e){let t=Ca(this.array[e*this.itemSize+1]);return this.normalized&&(t=bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=Pn(t),this}getZ(e){let t=Ca(this.array[e*this.itemSize+2]);return this.normalized&&(t=bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=Pn(t),this}getW(e){let t=Ca(this.array[e*this.itemSize+3]);return this.normalized&&(t=bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=Pn(t),this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=Pn(t),this.array[e+1]=Pn(i),this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),n=ut(n,this.array)),this.array[e+0]=Pn(t),this.array[e+1]=Pn(i),this.array[e+2]=Pn(n),this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.array[e+0]=Pn(t),this.array[e+1]=Pn(i),this.array[e+2]=Pn(n),this.array[e+3]=Pn(r),this}}class Ke extends At{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Tx=0;const jn=new rt,Bh=new vt,Rs=new O,Gn=new Zt,_a=new Zt,$t=new O;class ht extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?_f:vf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new lt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return Bh.lookAt(e),Bh.updateMatrix(),this.applyMatrix4(Bh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rs).negate(),this.translate(Rs.x,Rs.y,Rs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let n=0,r=e.length;n<r;n++){const a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(i,3))}else{const i=Math.min(e.length,t.count);for(let n=0;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const r=t[i];Gn.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];_a.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Gn.min,_a.min),Gn.expandByPoint($t),$t.addVectors(Gn.max,_a.max),Gn.expandByPoint($t)):(Gn.expandByPoint(_a.min),Gn.expandByPoint(_a.max))}Gn.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(Rs.fromBufferAttribute(e,c),$t.add(Rs)),n=Math.max(n,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new At(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let E=0;E<i.count;E++)o[E]=new O,l[E]=new O;const c=new O,h=new O,u=new O,f=new ye,d=new ye,p=new ye,v=new O,m=new O;function g(E,w,M){c.fromBufferAttribute(i,E),h.fromBufferAttribute(i,w),u.fromBufferAttribute(i,M),f.fromBufferAttribute(r,E),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,M),h.sub(c),u.sub(c),d.sub(f),p.sub(f);const L=1/(d.x*p.y-p.x*d.y);isFinite(L)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(L),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(L),o[E].add(v),o[w].add(v),o[M].add(v),l[E].add(m),l[w].add(m),l[M].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let E=0,w=y.length;E<w;++E){const M=y[E],L=M.start,D=M.count;for(let z=L,B=L+D;z<B;z+=3)g(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const x=new O,_=new O,C=new O,T=new O;function A(E){C.fromBufferAttribute(n,E),T.copy(C);const w=o[E];x.copy(w),x.sub(C.multiplyScalar(C.dot(w))).normalize(),_.crossVectors(T,w);const L=_.dot(l[E])<0?-1:1;a.setXYZW(E,x.x,x.y,x.z,L)}for(let E=0,w=y.length;E<w;++E){const M=y[E],L=M.start,D=M.count;for(let z=L,B=L+D;z<B;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new At(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const n=new O,r=new O,a=new O,o=new O,l=new O,c=new O,h=new O,u=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);n.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)n.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let d=0,p=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let g=0;g<h;g++)f[p++]=c[d++]}return new At(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],d=e(f,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(n[l]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kd=new rt,Cr=new br,Bo=new Kt,zd=new O,ko=new O,zo=new O,Vo=new O,kh=new O,Go=new O,Vd=new O,Ho=new O;class Ut extends vt{constructor(e=new ht,t=new Ui){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(r&&o){Go.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(kh.fromBufferAttribute(u,e),a?Go.addScaledVector(kh,h):Go.addScaledVector(kh.sub(t),h))}t.add(Go)}return t}raycast(e,t){const i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(r),Cr.copy(e.ray).recast(e.near),!(Bo.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(Bo,zd)===null||Cr.origin.distanceToSquared(zd)>(e.far-e.near)**2))&&(kd.copy(r).invert(),Cr.copy(e.ray).applyMatrix4(kd),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Cr)))}_computeIntersections(e,t,i){let n;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,C=x;_<C;_+=3){const T=o.getX(_),A=o.getX(_+1),E=o.getX(_+2);n=Wo(this,g,e,i,c,h,u,T,A,E),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const y=o.getX(m),x=o.getX(m+1),_=o.getX(m+2);n=Wo(this,a,e,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){const m=f[p],g=a[m.materialIndex],y=Math.max(m.start,d.start),x=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=y,C=x;_<C;_+=3){const T=_,A=_+1,E=_+2;n=Wo(this,g,e,i,c,h,u,T,A,E),n&&(n.faceIndex=Math.floor(_/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{const p=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=p,g=v;m<g;m+=3){const y=m,x=m+1,_=m+2;n=Wo(this,a,e,i,c,h,u,y,x,_),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}}function Ax(s,e,t,i,n,r,a,o){let l;if(e.side===Mn?l=i.intersectTriangle(a,r,n,!0,o):l=i.intersectTriangle(n,r,a,e.side===Ki,o),l===null)return null;Ho.copy(o),Ho.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Ho);return c<t.near||c>t.far?null:{distance:c,point:Ho.clone(),object:s}}function Wo(s,e,t,i,n,r,a,o,l,c){s.getVertexPosition(o,ko),s.getVertexPosition(l,zo),s.getVertexPosition(c,Vo);const h=Ax(s,e,t,i,ko,zo,Vo,Vd);if(h){const u=new O;Un.getBarycoord(Vd,ko,zo,Vo,u),n&&(h.uv=Un.getInterpolatedAttribute(n,o,l,c,u,new ye)),r&&(h.uv1=Un.getInterpolatedAttribute(r,o,l,c,u,new ye)),a&&(h.normal=Un.getInterpolatedAttribute(a,o,l,c,u,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};Un.getNormal(ko,zo,Vo,f.normal),h.face=f,h.barycoord=u}return h}class ds extends ht{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};const o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,d=0;p("z","y","x",-1,-1,i,t,e,a,r,0),p("z","y","x",1,-1,i,t,-e,a,r,1),p("x","z","y",1,1,e,i,t,n,a,2),p("x","z","y",1,-1,e,i,-t,n,a,3),p("x","y","z",1,-1,e,t,i,n,r,4),p("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(u,2));function p(v,m,g,y,x,_,C,T,A,E,w){const M=_/A,L=C/E,D=_/2,z=C/2,B=T/2,K=A+1,H=E+1;let ue=0,ee=0;const J=new O;for(let q=0;q<H;q++){const V=q*L-z;for(let Y=0;Y<K;Y++){const ie=Y*M-D;J[v]=ie*y,J[m]=V*x,J[g]=B,c.push(J.x,J.y,J.z),J[v]=0,J[m]=0,J[g]=T>0?1:-1,h.push(J.x,J.y,J.z),u.push(Y/A),u.push(1-q/E),ue+=1}}for(let q=0;q<E;q++)for(let V=0;V<A;V++){const Y=f+V+K*q,ie=f+V+K*(q+1),W=f+(V+1)+K*(q+1),X=f+(V+1)+K*q;l.push(Y,ie,X),l.push(ie,W,X),ee+=6}o.addGroup(d,ee,w),d+=ee,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const n=s[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function vn(s){const e={};for(let t=0;t<s.length;t++){const i=$s(s[t]);for(const n in i)e[n]=i[n]}return e}function Cx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Dg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Ic={clone:$s,merge:vn};var Rx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rx,this.fragmentShader=Ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Cx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Pc extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=Ei}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new O,Gd=new ye,Hd=new ye;class en extends Pc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qs*2*Math.atan(Math.tan(ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,Gd,Hd),t.subVectors(Hd,Gd)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ns*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Is=-90,Ps=1;class Ug extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new en(Is,Ps,e,t);n.layers=this.layers,this.add(n);const r=new en(Is,Ps,e,t);r.layers=this.layers,this.add(r);const a=new en(Is,Ps,e,t);a.layers=this.layers,this.add(a);const o=new en(Is,Ps,e,t);o.layers=this.layers,this.add(o);const l=new en(Is,Ps,e,t);l.layers=this.layers,this.add(l);const c=new en(Is,Ps,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,r),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class vo extends Bt{constructor(e,t,i,n,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,i,n,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lg extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new vo(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new ds(5,5,5),r=new gi({name:"CubemapFromEquirect",uniforms:$s(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Yi});r.uniforms.tEquirect.value=t;const a=new Ut(n,r),o=t.minFilter;return t.minFilter===wi&&(t.minFilter=Dt),new Ug(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}}class Dc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=t}clone(){return new Dc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uc{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=t,this.far=i}clone(){return new Uc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}let xf=class extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};class Lc{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ja,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const gn=new O;class cs{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyMatrix4(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.applyNormalMatrix(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)gn.fromBufferAttribute(this,t),gn.transformDirection(e),this.setXYZ(t,gn.x,gn.y,gn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=bn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),n=ut(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),n=ut(n,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new At(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class yf extends pn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ds;const xa=new O,Us=new O,Ls=new O,Ns=new ye,ya=new ye,Ng=new rt,Xo=new O,ba=new O,Yo=new O,Wd=new ye,zh=new ye,Xd=new ye;class Fg extends vt{constructor(e=new yf){if(super(),this.isSprite=!0,this.type="Sprite",Ds===void 0){Ds=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Lc(t,5);Ds.setIndex([0,1,2,0,2,3]),Ds.setAttribute("position",new cs(i,3,0,!1)),Ds.setAttribute("uv",new cs(i,2,3,!1))}this.geometry=Ds,this.material=e,this.center=new ye(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Us.setFromMatrixScale(this.matrixWorld),Ng.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Us.multiplyScalar(-Ls.z);const i=this.material.rotation;let n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));const a=this.center;Zo(Xo.set(-.5,-.5,0),Ls,a,Us,n,r),Zo(ba.set(.5,-.5,0),Ls,a,Us,n,r),Zo(Yo.set(.5,.5,0),Ls,a,Us,n,r),Wd.set(0,0),zh.set(1,0),Xd.set(1,1);let o=e.ray.intersectTriangle(Xo,ba,Yo,!1,xa);if(o===null&&(Zo(ba.set(-.5,.5,0),Ls,a,Us,n,r),zh.set(0,1),o=e.ray.intersectTriangle(Xo,Yo,ba,!1,xa),o===null))return;const l=e.ray.origin.distanceTo(xa);l<e.near||l>e.far||t.push({distance:l,point:xa.clone(),uv:Un.getInterpolation(xa,Xo,ba,Yo,Wd,zh,Xd,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zo(s,e,t,i,n,r){Ns.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(ya.x=r*Ns.x-n*Ns.y,ya.y=n*Ns.x+r*Ns.y):ya.copy(Ns),s.copy(e),s.x+=ya.x,s.y+=ya.y,s.applyMatrix4(Ng)}const qo=new O,Yd=new O;class Og extends vt{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let i=0,n=t.length;i<n;i++){const r=t[i];this.addLevel(r.object.clone(),r.distance,r.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,i=0){t=Math.abs(t);const n=this.levels;let r;for(r=0;r<n.length&&!(t<n[r].distance);r++);return n.splice(r,0,{distance:t,hysteresis:i,object:e}),this.add(e),this}removeLevel(e){const t=this.levels;for(let i=0;i<t.length;i++)if(t[i].distance===e){const n=t.splice(i,1);return this.remove(n[0].object),!0}return!1}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let i,n;for(i=1,n=t.length;i<n;i++){let r=t[i].distance;if(t[i].object.visible&&(r-=r*t[i].hysteresis),e<r)break}return t[i-1].object}return null}raycast(e,t){if(this.levels.length>0){qo.setFromMatrixPosition(this.matrixWorld);const n=e.ray.origin.distanceTo(qo);this.getObjectForDistance(n).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){qo.setFromMatrixPosition(e.matrixWorld),Yd.setFromMatrixPosition(this.matrixWorld);const i=qo.distanceTo(Yd)/e.zoom;t[0].object.visible=!0;let n,r;for(n=1,r=t.length;n<r;n++){let a=t[n].distance;if(t[n].object.visible&&(a-=a*t[n].hysteresis),i>=a)t[n-1].object.visible=!1,t[n].object.visible=!0;else break}for(this._currentLevel=n-1;n<r;n++)t[n].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const i=this.levels;for(let n=0,r=i.length;n<r;n++){const a=i[n];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Zd=new O,qd=new ft,Kd=new ft,Px=new O,Jd=new rt,Ko=new O,Vh=new Kt,jd=new rt,Gh=new br;class Bg extends Ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Zt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ko),this.boundingBox.expandByPoint(Ko)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Kt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ko),this.boundingSphere.expandByPoint(Ko)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vh.copy(this.boundingSphere),Vh.applyMatrix4(n),e.ray.intersectsSphere(Vh)!==!1&&(jd.copy(n).invert(),Gh.copy(e.ray).applyMatrix4(jd),!(this.boundingBox!==null&&Gh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Gh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ft,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===pg?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;qd.fromBufferAttribute(n.attributes.skinIndex,e),Kd.fromBufferAttribute(n.attributes.skinWeight,e),Zd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Kd.getComponent(r);if(a!==0){const o=qd.getComponent(r);Jd.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Px.copy(Zd).applyMatrix4(Jd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bf extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ti extends Bt{constructor(e=null,t=1,i=1,n,r,a,o,l,c=rn,h=rn,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Qd=new rt,Dx=new rt;class Nc{constructor(e=[],t=[]){this.uuid=Wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new rt;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Dx;Qd.multiplyMatrices(o,t[r]),Qd.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Nc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ti(t,e,e,fn,Yt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const r=e.bones[i];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new bf),this.bones.push(a),this.boneInverses.push(new rt().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class hs extends At{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Fs=new rt,$d=new rt,Jo=[],ep=new Zt,Ux=new rt,Sa=new Ut,Ma=new Kt;class kg extends Ut{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Ux)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Zt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fs),ep.copy(e.boundingBox).applyMatrix4(Fs),this.boundingBox.union(ep)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Fs),Ma.copy(e.boundingSphere).applyMatrix4(Fs),this.boundingSphere.union(Ma)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(Sa.geometry=this.geometry,Sa.material=this.material,Sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ma.copy(this.boundingSphere),Ma.applyMatrix4(i),e.ray.intersectsSphere(Ma)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,Fs),$d.multiplyMatrices(i,Fs),Sa.matrixWorld=$d,Sa.raycast(e,Jo);for(let a=0,o=Jo.length;a<o;a++){const l=Jo[a];l.instanceId=r,l.object=this,t.push(l)}Jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(n*this.count),n,this.count,mo,Yt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;r[l]=o,r.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}const Hh=new O,Lx=new O,Nx=new lt;class $n{constructor(e=new O(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Hh.subVectors(i,t).cross(Lx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Hh),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/n;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nx.getNormalMatrix(e),n=this.coplanarPoint(Hh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Kt,jo=new O;class _o{constructor(e=new $n,t=new $n,i=new $n,n=new $n,r=new $n,a=new $n){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Ei){const i=this.planes,n=e.elements,r=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],f=n[7],d=n[8],p=n[9],v=n[10],m=n[11],g=n[12],y=n[13],x=n[14],_=n[15];if(i[0].setComponents(l-r,f-c,m-d,_-g).normalize(),i[1].setComponents(l+r,f+c,m+d,_+g).normalize(),i[2].setComponents(l+a,f+h,m+p,_+y).normalize(),i[3].setComponents(l-a,f-h,m-p,_-y).normalize(),i[4].setComponents(l-o,f-u,m-v,_-x).normalize(),t===Ei)i[5].setComponents(l+o,f+u,m+v,_+x).normalize();else if(t===Qa)i[5].setComponents(o,u,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){return Rr.center.set(0,0,0),Rr.radius=.7071067811865476,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(jo.x=n.normal.x>0?e.max.x:e.min.x,jo.y=n.normal.y>0?e.max.y:e.min.y,jo.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(jo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wh(s,e){return s-e}function Fx(s,e){return s.z-e.z}function Ox(s,e){return e.z-s.z}class Bx{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t,i,n){const r=this.pool,a=this.list;this.index>=r.length&&r.push({start:-1,count:-1,z:-1,index:-1});const o=r[this.index];a.push(o),this.index++,o.start=e,o.count=t,o.z=i,o.index=n}reset(){this.list.length=0,this.index=0}}const Rn=new rt,kx=new Ze(1,1,1),Xh=new _o,Qo=new Zt,Ir=new Kt,wa=new O,tp=new O,zx=new O,Yh=new Bx,cn=new Ut,$o=[];function Vx(s,e,t=0){const i=e.itemSize;if(s.isInterleavedBufferAttribute||s.array.constructor!==e.array.constructor){const n=s.count;for(let r=0;r<n;r++)for(let a=0;a<i;a++)e.setComponent(r+t,a,s.getComponent(r,a))}else e.array.set(s.array,t*i);e.needsUpdate=!0}function Pr(s,e){if(s.constructor!==e.constructor){const t=Math.min(s.length,e.length);for(let i=0;i<t;i++)e[i]=s[i]}else{const t=Math.min(s.length,e.length);e.set(new s.constructor(s.buffer,0,t))}}class zg extends Ut{get maxInstanceCount(){return this._maxInstanceCount}get instanceCount(){return this._instanceInfo.length-this._availableInstanceIds.length}get unusedVertexCount(){return this._maxVertexCount-this._nextVertexStart}get unusedIndexCount(){return this._maxIndexCount-this._nextIndexStart}constructor(e,t,i=t*2,n){super(new ht,n),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._instanceInfo=[],this._geometryInfo=[],this._availableInstanceIds=[],this._availableGeometryIds=[],this._nextIndexStart=0,this._nextVertexStart=0,this._geometryCount=0,this._visibilityChanged=!0,this._geometryInitialized=!1,this._maxInstanceCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._matricesTexture=null,this._indirectTexture=null,this._colorsTexture=null,this._initMatricesTexture(),this._initIndirectTexture()}_initMatricesTexture(){let e=Math.sqrt(this._maxInstanceCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new Ti(t,e,e,fn,Yt);this._matricesTexture=i}_initIndirectTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Uint32Array(e*e),i=new Ti(t,e,e,go,ji);this._indirectTexture=i}_initColorsTexture(){let e=Math.sqrt(this._maxInstanceCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),i=new Ti(t,e,e,fn,Yt);i.colorSpace=mt.workingColorSpace,this._colorsTexture=i}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,n=this._maxIndexCount;if(this._geometryInitialized===!1){for(const r in e.attributes){const a=e.getAttribute(r),{array:o,itemSize:l,normalized:c}=a,h=new o.constructor(i*l),u=new At(h,l,c);t.setAttribute(r,u)}if(e.getIndex()!==null){const r=i>65535?new Uint32Array(n):new Uint16Array(n);t.setIndex(new At(r,1))}this._geometryInitialized=!0}}_validateGeometry(e){const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('THREE.BatchedMesh: All geometries must consistently have "index".');for(const i in t.attributes){if(!e.hasAttribute(i))throw new Error(`THREE.BatchedMesh: Added geometry missing "${i}". All geometries must have consistent attributes.`);const n=e.getAttribute(i),r=t.getAttribute(i);if(n.itemSize!==r.itemSize||n.normalized!==r.normalized)throw new Error("THREE.BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}validateInstanceId(e){const t=this._instanceInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid instanceId ${e}. Instance is either out of range or has been deleted.`)}validateGeometryId(e){const t=this._geometryInfo;if(e<0||e>=t.length||t[e].active===!1)throw new Error(`THREE.BatchedMesh: Invalid geometryId ${e}. Geometry is either out of range or has been deleted.`)}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zt);const e=this.boundingBox,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Rn),this.getBoundingBoxAt(r,Qo).applyMatrix4(Rn),e.union(Qo)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kt);const e=this.boundingSphere,t=this._instanceInfo;e.makeEmpty();for(let i=0,n=t.length;i<n;i++){if(t[i].active===!1)continue;const r=t[i].geometryIndex;this.getMatrixAt(i,Rn),this.getBoundingSphereAt(r,Ir).applyMatrix4(Rn),e.union(Ir)}}addInstance(e){if(this._instanceInfo.length>=this.maxInstanceCount&&this._availableInstanceIds.length===0)throw new Error("THREE.BatchedMesh: Maximum item count reached.");const i={visible:!0,active:!0,geometryIndex:e};let n=null;this._availableInstanceIds.length>0?(this._availableInstanceIds.sort(Wh),n=this._availableInstanceIds.shift(),this._instanceInfo[n]=i):(n=this._instanceInfo.length,this._instanceInfo.push(i));const r=this._matricesTexture;Rn.identity().toArray(r.image.data,n*16),r.needsUpdate=!0;const a=this._colorsTexture;return a&&(kx.toArray(a.image.data,n*4),a.needsUpdate=!0),this._visibilityChanged=!0,n}addGeometry(e,t=-1,i=-1){this._initializeGeometry(e),this._validateGeometry(e);const n={vertexStart:-1,vertexCount:-1,reservedVertexCount:-1,indexStart:-1,indexCount:-1,reservedIndexCount:-1,start:-1,count:-1,boundingBox:null,boundingSphere:null,active:!0},r=this._geometryInfo;n.vertexStart=this._nextVertexStart,n.reservedVertexCount=t===-1?e.getAttribute("position").count:t;const a=e.getIndex();if(a!==null&&(n.indexStart=this._nextIndexStart,n.reservedIndexCount=i===-1?a.count:i),n.indexStart!==-1&&n.indexStart+n.reservedIndexCount>this._maxIndexCount||n.vertexStart+n.reservedVertexCount>this._maxVertexCount)throw new Error("THREE.BatchedMesh: Reserved space request exceeds the maximum buffer size.");let l;return this._availableGeometryIds.length>0?(this._availableGeometryIds.sort(Wh),l=this._availableGeometryIds.shift(),r[l]=n):(l=this._geometryCount,this._geometryCount++,r.push(n)),this.setGeometryAt(l,e),this._nextIndexStart=n.indexStart+n.reservedIndexCount,this._nextVertexStart=n.vertexStart+n.reservedVertexCount,l}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("THREE.BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const i=this.geometry,n=i.getIndex()!==null,r=i.getIndex(),a=t.getIndex(),o=this._geometryInfo[e];if(n&&a.count>o.reservedIndexCount||t.attributes.position.count>o.reservedVertexCount)throw new Error("THREE.BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.reservedVertexCount;o.vertexCount=t.getAttribute("position").count;for(const h in i.attributes){const u=t.getAttribute(h),f=i.getAttribute(h);Vx(u,f,l);const d=u.itemSize;for(let p=u.count,v=c;p<v;p++){const m=l+p;for(let g=0;g<d;g++)f.setComponent(m,g,0)}f.needsUpdate=!0,f.addUpdateRange(l*d,c*d)}if(n){const h=o.indexStart,u=o.reservedIndexCount;o.indexCount=t.getIndex().count;for(let f=0;f<a.count;f++)r.setX(h+f,l+a.getX(f));for(let f=a.count,d=u;f<d;f++)r.setX(h+f,l);r.needsUpdate=!0,r.addUpdateRange(h,o.reservedIndexCount)}return o.start=n?o.indexStart:o.vertexStart,o.count=n?o.indexCount:o.vertexCount,o.boundingBox=null,t.boundingBox!==null&&(o.boundingBox=t.boundingBox.clone()),o.boundingSphere=null,t.boundingSphere!==null&&(o.boundingSphere=t.boundingSphere.clone()),this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._geometryInfo;if(e>=t.length||t[e].active===!1)return this;const i=this._instanceInfo;for(let n=0,r=i.length;n<r;n++)i[n].geometryIndex===e&&this.deleteInstance(n);return t[e].active=!1,this._availableGeometryIds.push(e),this._visibilityChanged=!0,this}deleteInstance(e){return this.validateInstanceId(e),this._instanceInfo[e].active=!1,this._availableInstanceIds.push(e),this._visibilityChanged=!0,this}optimize(){let e=0,t=0;const i=this._geometryInfo,n=i.map((a,o)=>o).sort((a,o)=>i[a].vertexStart-i[o].vertexStart),r=this.geometry;for(let a=0,o=i.length;a<o;a++){const l=n[a],c=i[l];if(c.active!==!1){if(r.index!==null){if(c.indexStart!==t){const{indexStart:h,vertexStart:u,reservedIndexCount:f}=c,d=r.index,p=d.array,v=e-u;for(let m=h;m<h+f;m++)p[m]=p[m]+v;d.array.copyWithin(t,h,h+f),d.addUpdateRange(t,f),c.indexStart=t}t+=c.reservedIndexCount}if(c.vertexStart!==e){const{vertexStart:h,reservedVertexCount:u}=c,f=r.attributes;for(const d in f){const p=f[d],{array:v,itemSize:m}=p;v.copyWithin(e*m,h*m,(h+u)*m),p.addUpdateRange(e*m,u*m)}c.vertexStart=e}e+=c.reservedVertexCount,c.start=r.index?c.indexStart:c.vertexStart,this._nextIndexStart=r.index?c.indexStart+c.reservedIndexCount:0,this._nextVertexStart=c.vertexStart+c.reservedVertexCount}}return this}getBoundingBoxAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingBox===null){const r=new Zt,a=i.index,o=i.attributes.position;for(let l=n.start,c=n.start+n.count;l<c;l++){let h=l;a&&(h=a.getX(h)),r.expandByPoint(wa.fromBufferAttribute(o,h))}n.boundingBox=r}return t.copy(n.boundingBox),t}getBoundingSphereAt(e,t){if(e>=this._geometryCount)return null;const i=this.geometry,n=this._geometryInfo[e];if(n.boundingSphere===null){const r=new Kt;this.getBoundingBoxAt(e,Qo),Qo.getCenter(r.center);const a=i.index,o=i.attributes.position;let l=0;for(let c=n.start,h=n.start+n.count;c<h;c++){let u=c;a&&(u=a.getX(u)),wa.fromBufferAttribute(o,u),l=Math.max(l,r.center.distanceToSquared(wa))}r.radius=Math.sqrt(l),n.boundingSphere=r}return t.copy(n.boundingSphere),t}setMatrixAt(e,t){this.validateInstanceId(e);const i=this._matricesTexture,n=this._matricesTexture.image.data;return t.toArray(n,e*16),i.needsUpdate=!0,this}getMatrixAt(e,t){return this.validateInstanceId(e),t.fromArray(this._matricesTexture.image.data,e*16)}setColorAt(e,t){return this.validateInstanceId(e),this._colorsTexture===null&&this._initColorsTexture(),t.toArray(this._colorsTexture.image.data,e*4),this._colorsTexture.needsUpdate=!0,this}getColorAt(e,t){return this.validateInstanceId(e),t.fromArray(this._colorsTexture.image.data,e*4)}setVisibleAt(e,t){return this.validateInstanceId(e),this._instanceInfo[e].visible===t?this:(this._instanceInfo[e].visible=t,this._visibilityChanged=!0,this)}getVisibleAt(e){return this.validateInstanceId(e),this._instanceInfo[e].visible}setGeometryIdAt(e,t){return this.validateInstanceId(e),this.validateGeometryId(t),this._instanceInfo[e].geometryIndex=t,this}getGeometryIdAt(e){return this.validateInstanceId(e),this._instanceInfo[e].geometryIndex}getGeometryRangeAt(e,t={}){this.validateGeometryId(e);const i=this._geometryInfo[e];return t.vertexStart=i.vertexStart,t.vertexCount=i.vertexCount,t.reservedVertexCount=i.reservedVertexCount,t.indexStart=i.indexStart,t.indexCount=i.indexCount,t.reservedIndexCount=i.reservedIndexCount,t.start=i.start,t.count=i.count,t}setInstanceCount(e){const t=this._availableInstanceIds,i=this._instanceInfo;for(t.sort(Wh);t[t.length-1]===i.length;)i.pop(),t.pop();if(e<i.length)throw new Error(`BatchedMesh: Instance ids outside the range ${e} are being used. Cannot shrink instance count.`);const n=new Int32Array(e),r=new Int32Array(e);Pr(this._multiDrawCounts,n),Pr(this._multiDrawStarts,r),this._multiDrawCounts=n,this._multiDrawStarts=r,this._maxInstanceCount=e;const a=this._indirectTexture,o=this._matricesTexture,l=this._colorsTexture;a.dispose(),this._initIndirectTexture(),Pr(a.image.data,this._indirectTexture.image.data),o.dispose(),this._initMatricesTexture(),Pr(o.image.data,this._matricesTexture.image.data),l&&(l.dispose(),this._initColorsTexture(),Pr(l.image.data,this._colorsTexture.image.data))}setGeometrySize(e,t){const i=[...this._geometryInfo].filter(o=>o.active);if(Math.max(...i.map(o=>o.vertexStart+o.reservedVertexCount))>e)throw new Error(`BatchedMesh: Geometry vertex values are being used outside the range ${t}. Cannot shrink further.`);if(this.geometry.index&&Math.max(...i.map(l=>l.indexStart+l.reservedIndexCount))>t)throw new Error(`BatchedMesh: Geometry index values are being used outside the range ${t}. Cannot shrink further.`);const r=this.geometry;r.dispose(),this._maxVertexCount=e,this._maxIndexCount=t,this._geometryInitialized&&(this._geometryInitialized=!1,this.geometry=new ht,this._initializeGeometry(r));const a=this.geometry;r.index&&Pr(r.index.array,a.index.array);for(const o in r.attributes)Pr(r.attributes[o].array,a.attributes[o].array)}raycast(e,t){const i=this._instanceInfo,n=this._geometryInfo,r=this.matrixWorld,a=this.geometry;cn.material=this.material,cn.geometry.index=a.index,cn.geometry.attributes=a.attributes,cn.geometry.boundingBox===null&&(cn.geometry.boundingBox=new Zt),cn.geometry.boundingSphere===null&&(cn.geometry.boundingSphere=new Kt);for(let o=0,l=i.length;o<l;o++){if(!i[o].visible||!i[o].active)continue;const c=i[o].geometryIndex,h=n[c];cn.geometry.setDrawRange(h.start,h.count),this.getMatrixAt(o,cn.matrixWorld).premultiply(r),this.getBoundingBoxAt(c,cn.geometry.boundingBox),this.getBoundingSphereAt(c,cn.geometry.boundingSphere),cn.raycast(e,$o);for(let u=0,f=$o.length;u<f;u++){const d=$o[u];d.object=this,d.batchId=o,t.push(d)}$o.length=0}cn.material=null,cn.geometry.index=null,cn.geometry.attributes={},cn.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._geometryInfo=e._geometryInfo.map(t=>({...t,boundingBox:t.boundingBox!==null?t.boundingBox.clone():null,boundingSphere:t.boundingSphere!==null?t.boundingSphere.clone():null})),this._instanceInfo=e._instanceInfo.map(t=>({...t})),this._maxInstanceCount=e._maxInstanceCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.data.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.data.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._indirectTexture.dispose(),this._indirectTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,i,n,r){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=n.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._instanceInfo,c=this._multiDrawStarts,h=this._multiDrawCounts,u=this._geometryInfo,f=this.perObjectFrustumCulled,d=this._indirectTexture,p=d.image.data;f&&(Rn.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse).multiply(this.matrixWorld),Xh.setFromProjectionMatrix(Rn,e.coordinateSystem));let v=0;if(this.sortObjects){Rn.copy(this.matrixWorld).invert(),wa.setFromMatrixPosition(i.matrixWorld).applyMatrix4(Rn),tp.set(0,0,-1).transformDirection(i.matrixWorld).transformDirection(Rn);for(let y=0,x=l.length;y<x;y++)if(l[y].visible&&l[y].active){const _=l[y].geometryIndex;this.getMatrixAt(y,Rn),this.getBoundingSphereAt(_,Ir).applyMatrix4(Rn);let C=!1;if(f&&(C=!Xh.intersectsSphere(Ir)),!C){const T=u[_],A=zx.subVectors(Ir.center,wa).dot(tp);Yh.push(T.start,T.count,A,y)}}const m=Yh.list,g=this.customSort;g===null?m.sort(r.transparent?Ox:Fx):g.call(this,m,i);for(let y=0,x=m.length;y<x;y++){const _=m[y];c[v]=_.start*o,h[v]=_.count,p[v]=_.index,v++}Yh.reset()}else for(let m=0,g=l.length;m<g;m++)if(l[m].visible&&l[m].active){const y=l[m].geometryIndex;let x=!1;if(f&&(this.getMatrixAt(m,Rn),this.getBoundingSphereAt(y,Ir).applyMatrix4(Rn),x=!Xh.intersectsSphere(Ir)),!x){const _=u[y];c[v]=_.start*o,h[v]=_.count,p[v]=m,v++}}d.needsUpdate=!0,this._multiDrawCount=v,this._visibilityChanged=!1}onBeforeShadow(e,t,i,n,r,a){this.onBeforeRender(e,null,n,r,a)}}class wn extends pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new O,mc=new O,np=new rt,Ea=new br,el=new Kt,Zh=new O,ip=new O;class xr extends vt{constructor(e=new ht,t=new wn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)pc.fromBufferAttribute(t,n-1),mc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),el.copy(i.boundingSphere),el.applyMatrix4(n),el.radius+=r,e.ray.intersectsSphere(el)===!1)return;np.copy(n).invert(),Ea.copy(e.ray).applyMatrix4(np);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let v=d,m=p-1;v<m;v+=c){const g=h.getX(v),y=h.getX(v+1),x=tl(this,e,Ea,l,g,y);x&&t.push(x)}if(this.isLineLoop){const v=h.getX(p-1),m=h.getX(d),g=tl(this,e,Ea,l,v,m);g&&t.push(g)}}else{const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let v=d,m=p-1;v<m;v+=c){const g=tl(this,e,Ea,l,v,v+1);g&&t.push(g)}if(this.isLineLoop){const v=tl(this,e,Ea,l,p-1,d);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function tl(s,e,t,i,n,r){const a=s.geometry.attributes.position;if(pc.fromBufferAttribute(a,n),mc.fromBufferAttribute(a,r),t.distanceSqToSegment(pc,mc,Zh,ip)>i)return;Zh.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Zh);if(!(l<e.near||l>e.far))return{distance:l,point:ip.clone().applyMatrix4(s.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:s}}const rp=new O,sp=new O;class Li extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)rp.fromBufferAttribute(t,n),sp.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+rp.distanceTo(sp);e.setAttribute("lineDistance",new Ke(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Vg extends xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Sf extends pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ap=new rt,Ru=new br,nl=new Kt,il=new O;class Gg extends vt{constructor(e=new ht,t=new Sf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(n),nl.radius+=r,e.ray.intersectsSphere(nl)===!1)return;ap.copy(n).invert(),Ru.copy(e.ray).applyMatrix4(ap);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=f,v=d;p<v;p++){const m=c.getX(p);il.fromBufferAttribute(u,m),op(il,m,l,n,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let p=f,v=d;p<v;p++)il.fromBufferAttribute(u,p),op(il,p,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){const o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function op(s,e,t,i,n,r,a){const o=Ru.distanceSqToPoint(s);if(o<t){const l=new O;Ru.closestPointToPoint(s,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jr extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Gx extends Bt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Dt,this.magFilter=r!==void 0?r:Dt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Hx extends Bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=rn,this.minFilter=rn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Fc extends Bt{constructor(e,t,i,n,r,a,o,l,c,h,u,f){super(null,a,o,l,c,h,n,r,u,f),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Wx extends Fc{constructor(e,t,i,n,r,a){super(e,t,i,r,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=si,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xx extends Fc{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Ji),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Yx extends Bt{constructor(e,t,i,n,r,a,o,l,c){super(e,t,i,n,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mf extends Bt{constructor(e,t,i,n,r,a,o,l,c,h=ts){if(h!==ts&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ts&&(i=ji),i===void 0&&h===ls&&(i=os),super(null,n,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:rn,this.minFilter=l!==void 0?l:rn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const r=i.length;let a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(r-1);const h=i[n],f=i[n+1]-h,d=(a-h)/f;return(n+d)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);const a=this.getPoint(n),o=this.getPoint(r),l=t||(a.isVector2?new ye:new O);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new O,n=[],r=[],a=[],o=new O,l=new rt;for(let d=0;d<=e;d++){const p=d/e;n[d]=this.getTangentAt(p,new O)}r[0]=new O,a[0]=new O;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),f=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(n[d-1],n[d]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(ct(n[d-1].dot(n[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,p))}a[d].crossVectors(n[d],r[d])}if(t===!0){let d=Math.acos(ct(r[0].dot(r[e]),-1,1));d/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(n[p],d*p)),a[p].crossVectors(n[p],r[p])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Oc extends xi{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ye){const i=t,n=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);const o=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Hg extends Oc{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function wf(){let s=0,e=0,t=0,i=0;function n(r,a,o,l){s=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){n(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,d*=h,n(a,o,f,d)},calc:function(r){const a=r*r,o=a*r;return s+e*r+t*a+i*o}}}const rl=new O,qh=new wf,Kh=new wf,Jh=new wf;class Wg extends xi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new O){const i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%r]:(rl.subVectors(n[0],n[1]).add(n[0]),c=rl);const u=n[o%r],f=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(rl.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=rl),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(u),d),v=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);v<1e-4&&(v=1),p<1e-4&&(p=v),m<1e-4&&(m=v),qh.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,p,v,m),Kh.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,p,v,m),Jh.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,p,v,m)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),Kh.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),Jh.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(qh.calc(l),Kh.calc(l),Jh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new O().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function lp(s,e,t,i,n){const r=(i-e)*.5,a=(n-t)*.5,o=s*s,l=s*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*s+t}function Zx(s,e){const t=1-s;return t*t*e}function qx(s,e){return 2*(1-s)*s*e}function Kx(s,e){return s*s*e}function Ba(s,e,t,i){return Zx(s,e)+qx(s,t)+Kx(s,i)}function Jx(s,e){const t=1-s;return t*t*t*e}function jx(s,e){const t=1-s;return 3*t*t*s*e}function Qx(s,e){return 3*(1-s)*s*s*e}function $x(s,e){return s*s*s*e}function ka(s,e,t,i,n){return Jx(s,e)+jx(s,t)+Qx(s,i)+$x(s,n)}class Ef extends xi{constructor(e=new ye,t=new ye,i=new ye,n=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ye){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ka(e,n.x,r.x,a.x,o.x),ka(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xg extends xi{constructor(e=new O,t=new O,i=new O,n=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new O){const i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ka(e,n.x,r.x,a.x,o.x),ka(e,n.y,r.y,a.y,o.y),ka(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Tf extends xi{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends xi{constructor(e=new O,t=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new O){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new O){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Af extends xi{constructor(e=new ye,t=new ye,i=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ye){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Ba(e,n.x,r.x,a.x),Ba(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cf extends xi{constructor(e=new O,t=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new O){const i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(Ba(e,n.x,r.x,a.x),Ba(e,n.y,r.y,a.y),Ba(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rf extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){const i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(lp(o,l.x,c.x,h.x,u.x),lp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ye().fromArray(n))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:Hg,CatmullRomCurve3:Wg,CubicBezierCurve:Ef,CubicBezierCurve3:Xg,EllipseCurve:Oc,LineCurve:Tf,LineCurve3:Yg,QuadraticBezierCurve:Af,QuadraticBezierCurve3:Cf,SplineCurve:Rf});class Zg extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let r=0;for(;r<n.length;){if(n[r]>=i){const a=n[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,r=this.curves;n<r.length;n++){const a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new gc[n.type]().fromJSON(n))}return this}}class eo extends Zg{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Tf(this.currentPoint.clone(),new ye(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const r=new Af(this.currentPoint.clone(),new ye(e,t),new ye(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){const o=new Ef(this.currentPoint.clone(),new ye(e,t),new ye(i,n),new ye(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Rf(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,r,a,o,l),this}absellipse(e,t,i,n,r,a,o,l){const c=new Oc(e,t,i,n,r,a,o,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class xo extends ht{constructor(e=[new ye(0,-.5),new ye(.5,0),new ye(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=ct(n,0,Math.PI*2);const r=[],a=[],o=[],l=[],c=[],h=1/t,u=new O,f=new ye,d=new O,p=new O,v=new O;let m=0,g=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[y+1].x-e[y].x,g=e[y+1].y-e[y].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(p)}for(let y=0;y<=t;y++){const x=i+y*h*n,_=Math.sin(x),C=Math.cos(x);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*_,u.y=e[T].y,u.z=e[T].x*C,a.push(u.x,u.y,u.z),f.x=y/t,f.y=T/(e.length-1),o.push(f.x,f.y);const A=l[3*T+0]*_,E=l[3*T+1],w=l[3*T+0]*C;c.push(A,E,w)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,C=_,T=_+e.length,A=_+e.length+1,E=_+1;r.push(C,T,E),r.push(A,E,T)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.points,e.segments,e.phiStart,e.phiLength)}}class Bc extends xo{constructor(e=1,t=1,i=4,n=8){const r=new eo;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),n),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:n}}static fromJSON(e){return new Bc(e.radius,e.length,e.capSegments,e.radialSegments)}}class kc extends ht{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);const r=[],a=[],o=[],l=[],c=new O,h=new ye;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){const d=i+u/t*n;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kc(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ta extends ht{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;n=Math.floor(n),r=Math.floor(r);const h=[],u=[],f=[],d=[];let p=0;const v=[],m=i/2;let g=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function y(){const _=new O,C=new O;let T=0;const A=(t-e)/i;for(let E=0;E<=r;E++){const w=[],M=E/r,L=M*(t-e)+e;for(let D=0;D<=n;D++){const z=D/n,B=z*l+o,K=Math.sin(B),H=Math.cos(B);C.x=L*K,C.y=-M*i+m,C.z=L*H,u.push(C.x,C.y,C.z),_.set(K,A,H).normalize(),f.push(_.x,_.y,_.z),d.push(z,1-M),w.push(p++)}v.push(w)}for(let E=0;E<n;E++)for(let w=0;w<r;w++){const M=v[w][E],L=v[w+1][E],D=v[w+1][E+1],z=v[w][E+1];(e>0||w!==0)&&(h.push(M,L,z),T+=3),(t>0||w!==r-1)&&(h.push(L,D,z),T+=3)}c.addGroup(g,T,0),g+=T}function x(_){const C=p,T=new ye,A=new O;let E=0;const w=_===!0?e:t,M=_===!0?1:-1;for(let D=1;D<=n;D++)u.push(0,m*M,0),f.push(0,M,0),d.push(.5,.5),p++;const L=p;for(let D=0;D<=n;D++){const B=D/n*l+o,K=Math.cos(B),H=Math.sin(B);A.x=w*H,A.y=m*M,A.z=w*K,u.push(A.x,A.y,A.z),f.push(0,M,0),T.x=K*.5+.5,T.y=H*.5*M+.5,d.push(T.x,T.y),p++}for(let D=0;D<n;D++){const z=C+D,B=L+D;_===!0?h.push(B,B+1,z):h.push(B+1,B,z),E+=3}c.addGroup(g,E,_===!0?1:2),g+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zc extends ta{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new zc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Sr extends ht{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};const r=[],a=[];o(n),c(i),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new O,_=new O,C=new O;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],_),d(t[T+2],C),l(x,_,C,y)}function l(y,x,_,C){const T=C+1,A=[];for(let E=0;E<=T;E++){A[E]=[];const w=y.clone().lerp(_,E/T),M=x.clone().lerp(_,E/T),L=T-E;for(let D=0;D<=L;D++)D===0&&E===T?A[E][D]=w:A[E][D]=w.clone().lerp(M,D/L)}for(let E=0;E<T;E++)for(let w=0;w<2*(T-E)-1;w++){const M=Math.floor(w/2);w%2===0?(f(A[E][M+1]),f(A[E+1][M]),f(A[E][M])):(f(A[E][M+1]),f(A[E+1][M+1]),f(A[E+1][M]))}}function c(y){const x=new O;for(let _=0;_<r.length;_+=3)x.x=r[_+0],x.y=r[_+1],x.z=r[_+2],x.normalize().multiplyScalar(y),r[_+0]=x.x,r[_+1]=x.y,r[_+2]=x.z}function h(){const y=new O;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];const _=m(y)/2/Math.PI+.5,C=g(y)/Math.PI+.5;a.push(_,1-C)}p(),u()}function u(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],C=a[y+4],T=Math.max(x,_,C),A=Math.min(x,_,C);T>.9&&A<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),C<.2&&(a[y+4]+=1))}}function f(y){r.push(y.x,y.y,y.z)}function d(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function p(){const y=new O,x=new O,_=new O,C=new O,T=new ye,A=new ye,E=new ye;for(let w=0,M=0;w<r.length;w+=9,M+=6){y.set(r[w+0],r[w+1],r[w+2]),x.set(r[w+3],r[w+4],r[w+5]),_.set(r[w+6],r[w+7],r[w+8]),T.set(a[M+0],a[M+1]),A.set(a[M+2],a[M+3]),E.set(a[M+4],a[M+5]),C.copy(y).add(x).add(_).divideScalar(3);const L=m(C);v(T,M+0,y,L),v(A,M+2,x,L),v(E,M+4,_,L)}}function v(y,x,_,C){C<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=C/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sr(e.vertices,e.indices,e.radius,e.details)}}class Vc extends Sr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=1/i,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-n,-i,0,-n,i,0,n,-i,0,n,i,-n,-i,0,-n,i,0,n,-i,0,n,i,0,-i,0,-n,i,0,-n,-i,0,n,i,0,n],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vc(e.radius,e.detail)}}const sl=new O,al=new O,jh=new O,ol=new Un;class qg extends ht{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const n=Math.pow(10,4),r=Math.cos(ns*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},d=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:m,c:g}=ol;if(v.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),g.fromBufferAttribute(o,c[2]),ol.getNormal(jh),u[0]=`${Math.round(v.x*n)},${Math.round(v.y*n)},${Math.round(v.z*n)}`,u[1]=`${Math.round(m.x*n)},${Math.round(m.y*n)},${Math.round(m.z*n)}`,u[2]=`${Math.round(g.x*n)},${Math.round(g.y*n)},${Math.round(g.z*n)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let y=0;y<3;y++){const x=(y+1)%3,_=u[y],C=u[x],T=ol[h[y]],A=ol[h[x]],E=`${_}_${C}`,w=`${C}_${_}`;w in f&&f[w]?(jh.dot(f[w].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(A.x,A.y,A.z)),f[w]=null):E in f||(f[E]={index0:c[y],index1:c[x],normal:jh.clone()})}}for(const p in f)if(f[p]){const{index0:v,index1:m}=f[p];sl.fromBufferAttribute(o,v),al.fromBufferAttribute(o,m),d.push(sl.x,sl.y,sl.z),d.push(al.x,al.y,al.z)}this.setAttribute("position",new Ke(d,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class is extends eo{constructor(e){super(e),this.uuid=Wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new eo().fromJSON(n))}return this}}const ey={triangulate:function(s,e,t=2){const i=e&&e.length,n=i?e[0]*t:s.length;let r=Kg(s,0,n,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,d;if(i&&(r=sy(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(let p=t;p<n;p+=t)u=s[p],f=s[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return to(r,a,t,o,l,d,0),a}};function Kg(s,e,t,i,n){let r,a;if(n===gy(s,e,t,i)>0)for(r=e;r<t;r+=i)a=cp(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=cp(r,s[r],s[r+1],a);return a&&Gc(a,a.next)&&(io(a),a=a.next),a}function us(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Gc(t,t.next)||Ft(t.prev,t,t.next)===0)){if(io(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function to(s,e,t,i,n,r,a){if(!s)return;!a&&r&&hy(s,i,n,r);let o=s,l,c;for(;s.prev!==s.next;){if(l=s.prev,c=s.next,r?ny(s,i,n,r):ty(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),io(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=iy(us(s),e,t),to(s,e,t,i,n,r,2)):a===2&&ry(s,e,t,i,n,r):to(us(s),e,t,i,n,r,1);break}}}function ty(s){const e=s.prev,t=s,i=s.next;if(Ft(e,t,i)>=0)return!1;const n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=n>r?n>a?n:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c;let p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Hs(n,o,r,l,a,c,p.x,p.y)&&Ft(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function ny(s,e,t,i){const n=s.prev,r=s,a=s.next;if(Ft(n,r,a)>=0)return!1;const o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=Iu(d,p,e,t,i),y=Iu(v,m,e,t,i);let x=s.prevZ,_=s.nextZ;for(;x&&x.z>=g&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Hs(o,h,l,u,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Hs(o,h,l,u,c,f,_.x,_.y)&&Ft(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Hs(o,h,l,u,c,f,x.x,x.y)&&Ft(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Hs(o,h,l,u,c,f,_.x,_.y)&&Ft(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function iy(s,e,t){let i=s;do{const n=i.prev,r=i.next.next;!Gc(n,r)&&Jg(n,i,i.next,r)&&no(n,r)&&no(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),io(i),io(i.next),i=s=r),i=i.next}while(i!==s);return us(i)}function ry(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&dy(a,o)){let l=jg(a,o);a=us(a,a.next),l=us(l,l.next),to(a,e,t,i,n,r,0),to(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function sy(s,e,t,i){const n=[];let r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=Kg(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(fy(c));for(n.sort(ay),r=0;r<n.length;r++)t=oy(n[r],t);return t}function ay(s,e){return s.x-e.x}function oy(s,e){const t=ly(s,e);if(!t)return e;const i=jg(t,s);return us(i,i.next),us(t,t.next)}function ly(s,e){let t=e,i=-1/0,n;const r=s.x,a=s.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const f=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>i&&(i=f,n=t.x<t.next.x?t:t.next,f===r))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h=1/0,u;t=n;do r>=t.x&&t.x>=l&&r!==t.x&&Hs(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),no(t,s)&&(u<h||u===h&&(t.x>n.x||t.x===n.x&&cy(n,t)))&&(n=t,h=u)),t=t.next;while(t!==o);return n}function cy(s,e){return Ft(s.prev,s,e.prev)<0&&Ft(e.next,s,s.next)<0}function hy(s,e,t,i){let n=s;do n.z===0&&(n.z=Iu(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,uy(n)}function uy(s){let e,t,i,n,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(a>1);return s}function Iu(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function fy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Hs(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function dy(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!py(s,e)&&(no(s,e)&&no(e,s)&&my(s,e)&&(Ft(s.prev,s,e.prev)||Ft(s,e.prev,e))||Gc(s,e)&&Ft(s.prev,s,s.next)>0&&Ft(e.prev,e,e.next)>0)}function Ft(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Gc(s,e){return s.x===e.x&&s.y===e.y}function Jg(s,e,t,i){const n=cl(Ft(s,e,t)),r=cl(Ft(s,e,i)),a=cl(Ft(t,i,s)),o=cl(Ft(t,i,e));return!!(n!==r&&a!==o||n===0&&ll(s,t,e)||r===0&&ll(s,i,e)||a===0&&ll(t,s,i)||o===0&&ll(t,e,i))}function ll(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function cl(s){return s>0?1:s<0?-1:0}function py(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Jg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function no(s,e){return Ft(s.prev,s,s.next)<0?Ft(s,e,s.next)>=0&&Ft(s,s.prev,e)>=0:Ft(s,e,s.prev)<0||Ft(s,s.next,e)<0}function my(s,e){let t=s,i=!1;const n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function jg(s,e){const t=new Pu(s.i,s.x,s.y),i=new Pu(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function cp(s,e,t,i){const n=new Pu(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function io(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Pu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function gy(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}class Ai{static area(e){const t=e.length;let i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return Ai.area(e)<0}static triangulateShape(e,t){const i=[],n=[],r=[];hp(e),up(i,e);let a=e.length;t.forEach(hp);for(let l=0;l<t.length;l++)n.push(a),a+=t[l].length,up(i,t[l]);const o=ey.triangulate(i,n);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}}function hp(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function up(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class Hc extends ht{constructor(e=new is([new ye(.5,.5),new ye(-.5,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Ke(n,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1;let f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:d-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3;const g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:vy;let x,_=!1,C,T,A,E;g&&(x=g.getSpacedPoints(h),_=!0,f=!1,C=g.computeFrenetFrames(h,!1),T=new O,A=new O,E=new O),f||(m=0,d=0,p=0,v=0);const w=o.extractPoints(c);let M=w.shape;const L=w.holes;if(!Ai.isClockWise(M)){M=M.reverse();for(let $=0,ge=L.length;$<ge;$++){const F=L[$];Ai.isClockWise(F)&&(L[$]=F.reverse())}}const z=Ai.triangulateShape(M,L),B=M;for(let $=0,ge=L.length;$<ge;$++){const F=L[$];M=M.concat(F)}function K($,ge,F){return ge||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(ge,F)}const H=M.length,ue=z.length;function ee($,ge,F){let Se,pe,Te;const he=$.x-ge.x,Le=$.y-ge.y,_e=F.x-$.x,I=F.y-$.y,R=he*he+Le*Le,Z=he*I-Le*_e;if(Math.abs(Z)>Number.EPSILON){const oe=Math.sqrt(R),le=Math.sqrt(_e*_e+I*I),me=ge.x-Le/oe,Re=ge.y+he/oe,ve=F.x-I/le,Me=F.y+_e/le,He=((ve-me)*I-(Me-Re)*_e)/(he*I-Le*_e);Se=me+he*He-$.x,pe=Re+Le*He-$.y;const Ie=Se*Se+pe*pe;if(Ie<=2)return new ye(Se,pe);Te=Math.sqrt(Ie/2)}else{let oe=!1;he>Number.EPSILON?_e>Number.EPSILON&&(oe=!0):he<-Number.EPSILON?_e<-Number.EPSILON&&(oe=!0):Math.sign(Le)===Math.sign(I)&&(oe=!0),oe?(Se=-Le,pe=he,Te=Math.sqrt(R)):(Se=he,pe=Le,Te=Math.sqrt(R/2))}return new ye(Se/Te,pe/Te)}const J=[];for(let $=0,ge=B.length,F=ge-1,Se=$+1;$<ge;$++,F++,Se++)F===ge&&(F=0),Se===ge&&(Se=0),J[$]=ee(B[$],B[F],B[Se]);const q=[];let V,Y=J.concat();for(let $=0,ge=L.length;$<ge;$++){const F=L[$];V=[];for(let Se=0,pe=F.length,Te=pe-1,he=Se+1;Se<pe;Se++,Te++,he++)Te===pe&&(Te=0),he===pe&&(he=0),V[Se]=ee(F[Se],F[Te],F[he]);q.push(V),Y=Y.concat(V)}for(let $=0;$<m;$++){const ge=$/m,F=d*Math.cos(ge*Math.PI/2),Se=p*Math.sin(ge*Math.PI/2)+v;for(let pe=0,Te=B.length;pe<Te;pe++){const he=K(B[pe],J[pe],Se);Q(he.x,he.y,-F)}for(let pe=0,Te=L.length;pe<Te;pe++){const he=L[pe];V=q[pe];for(let Le=0,_e=he.length;Le<_e;Le++){const I=K(he[Le],V[Le],Se);Q(I.x,I.y,-F)}}}const ie=p+v;for(let $=0;$<H;$++){const ge=f?K(M[$],Y[$],ie):M[$];_?(A.copy(C.normals[0]).multiplyScalar(ge.x),T.copy(C.binormals[0]).multiplyScalar(ge.y),E.copy(x[0]).add(A).add(T),Q(E.x,E.y,E.z)):Q(ge.x,ge.y,0)}for(let $=1;$<=h;$++)for(let ge=0;ge<H;ge++){const F=f?K(M[ge],Y[ge],ie):M[ge];_?(A.copy(C.normals[$]).multiplyScalar(F.x),T.copy(C.binormals[$]).multiplyScalar(F.y),E.copy(x[$]).add(A).add(T),Q(E.x,E.y,E.z)):Q(F.x,F.y,u/h*$)}for(let $=m-1;$>=0;$--){const ge=$/m,F=d*Math.cos(ge*Math.PI/2),Se=p*Math.sin(ge*Math.PI/2)+v;for(let pe=0,Te=B.length;pe<Te;pe++){const he=K(B[pe],J[pe],Se);Q(he.x,he.y,u+F)}for(let pe=0,Te=L.length;pe<Te;pe++){const he=L[pe];V=q[pe];for(let Le=0,_e=he.length;Le<_e;Le++){const I=K(he[Le],V[Le],Se);_?Q(I.x,I.y+x[h-1].y,x[h-1].x+F):Q(I.x,I.y,u+F)}}}W(),X();function W(){const $=n.length/3;if(f){let ge=0,F=H*ge;for(let Se=0;Se<ue;Se++){const pe=z[Se];fe(pe[2]+F,pe[1]+F,pe[0]+F)}ge=h+m*2,F=H*ge;for(let Se=0;Se<ue;Se++){const pe=z[Se];fe(pe[0]+F,pe[1]+F,pe[2]+F)}}else{for(let ge=0;ge<ue;ge++){const F=z[ge];fe(F[2],F[1],F[0])}for(let ge=0;ge<ue;ge++){const F=z[ge];fe(F[0]+H*h,F[1]+H*h,F[2]+H*h)}}i.addGroup($,n.length/3-$,0)}function X(){const $=n.length/3;let ge=0;te(B,ge),ge+=B.length;for(let F=0,Se=L.length;F<Se;F++){const pe=L[F];te(pe,ge),ge+=pe.length}i.addGroup($,n.length/3-$,1)}function te($,ge){let F=$.length;for(;--F>=0;){const Se=F;let pe=F-1;pe<0&&(pe=$.length-1);for(let Te=0,he=h+m*2;Te<he;Te++){const Le=H*Te,_e=H*(Te+1),I=ge+Se+Le,R=ge+pe+Le,Z=ge+pe+_e,oe=ge+Se+_e;Ee(I,R,Z,oe)}}}function Q($,ge,F){l.push($),l.push(ge),l.push(F)}function fe($,ge,F){Ae($),Ae(ge),Ae(F);const Se=n.length/3,pe=y.generateTopUV(i,n,Se-3,Se-2,Se-1);be(pe[0]),be(pe[1]),be(pe[2])}function Ee($,ge,F,Se){Ae($),Ae(ge),Ae(Se),Ae(ge),Ae(F),Ae(Se);const pe=n.length/3,Te=y.generateSideWallUV(i,n,pe-6,pe-3,pe-2,pe-1);be(Te[0]),be(Te[1]),be(Te[3]),be(Te[1]),be(Te[2]),be(Te[3])}function Ae($){n.push(l[$*3+0]),n.push(l[$*3+1]),n.push(l[$*3+2])}function be($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return _y(t,i,e)}static fromJSON(e,t){const i=[];for(let r=0,a=e.shapes.length;r<a;r++){const o=t[e.shapes[r]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new gc[n.type]().fromJSON(n)),new Hc(i,e.options)}}const vy={generateTopUV:function(s,e,t,i,n){const r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new ye(r,a),new ye(o,l),new ye(c,h)]},generateSideWallUV:function(s,e,t,i,n,r){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],f=e[n*3],d=e[n*3+1],p=e[n*3+2],v=e[r*3],m=e[r*3+1],g=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ye(a,1-l),new ye(c,1-u),new ye(f,1-p),new ye(v,1-g)]:[new ye(o,1-l),new ye(h,1-u),new ye(d,1-p),new ye(m,1-g)]}};function _y(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){const r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class Wc extends Sr{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Wc(e.radius,e.detail)}}class yo extends Sr{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],n=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,n,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yo(e.radius,e.detail)}}class $i extends ht{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,f=t/l,d=[],p=[],v=[],m=[];for(let g=0;g<h;g++){const y=g*f-a;for(let x=0;x<c;x++){const _=x*u-r;p.push(_,-y,0),v.push(0,0,1),m.push(x/o),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<o;y++){const x=y+c*g,_=y+c*(g+1),C=y+1+c*(g+1),T=y+1+c*g;d.push(x,_,T),d.push(_,C,T)}this.setIndex(d),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xc extends ht{constructor(e=.5,t=1,i=32,n=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:n,thetaStart:r,thetaLength:a},i=Math.max(3,i),n=Math.max(1,n);const o=[],l=[],c=[],h=[];let u=e;const f=(t-e)/n,d=new O,p=new ye;for(let v=0;v<=n;v++){for(let m=0;m<=i;m++){const g=r+m/i*a;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/t+1)/2,p.y=(d.y/t+1)/2,h.push(p.x,p.y)}u+=f}for(let v=0;v<n;v++){const m=v*(i+1);for(let g=0;g<i;g++){const y=g+m,x=y,_=y+i+1,C=y+i+2,T=y+1;o.push(x,_,T),o.push(_,C,T)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xc(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Yc extends ht{constructor(e=new is([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const i=[],n=[],r=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new Ke(n,3)),this.setAttribute("normal",new Ke(r,3)),this.setAttribute("uv",new Ke(a,2));function c(h){const u=n.length/3,f=h.extractPoints(t);let d=f.shape;const p=f.holes;Ai.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,g=p.length;m<g;m++){const y=p[m];Ai.isClockWise(y)===!0&&(p[m]=y.reverse())}const v=Ai.triangulateShape(d,p);for(let m=0,g=p.length;m<g;m++){const y=p[m];d=d.concat(y)}for(let m=0,g=d.length;m<g;m++){const y=d[m];n.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let m=0,g=v.length;m<g;m++){const y=v[m],x=y[0]+u,_=y[1]+u,C=y[2]+u;i.push(x,_,C),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return xy(t,e)}static fromJSON(e,t){const i=[];for(let n=0,r=e.shapes.length;n<r;n++){const a=t[e.shapes[n]];i.push(a)}return new Yc(i,e.curveSegments)}}function xy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,i=s.length;t<i;t++){const n=s[t];e.shapes.push(n.uuid)}else e.shapes.push(s.uuid);return e}class na extends ht{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new O,f=new O,d=[],p=[],v=[],m=[];for(let g=0;g<=i;g++){const y=[],x=g/i;let _=0;g===0&&a===0?_=.5/t:g===i&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){const T=C/t;u.x=-e*Math.cos(n+T*r)*Math.sin(a+x*o),u.y=e*Math.cos(a+x*o),u.z=e*Math.sin(n+T*r)*Math.sin(a+x*o),p.push(u.x,u.y,u.z),f.copy(u).normalize(),v.push(f.x,f.y,f.z),m.push(T+_,1-x),y.push(c++)}h.push(y)}for(let g=0;g<i;g++)for(let y=0;y<t;y++){const x=h[g][y+1],_=h[g][y],C=h[g+1][y],T=h[g+1][y+1];(g!==0||a>0)&&d.push(x,_,T),(g!==i-1||l<Math.PI)&&d.push(_,C,T)}this.setIndex(d),this.setAttribute("position",new Ke(p,3)),this.setAttribute("normal",new Ke(v,3)),this.setAttribute("uv",new Ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Zc extends Sr{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],n=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,n,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Zc(e.radius,e.detail)}}class qc extends ht{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new O,u=new O,f=new O;for(let d=0;d<=i;d++)for(let p=0;p<=n;p++){const v=p/n*r,m=d/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/n),c.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=n;p++){const v=(n+1)*d+p-1,m=(n+1)*(d-1)+p-1,g=(n+1)*(d-1)+p,y=(n+1)*d+p;a.push(v,m,y),a.push(m,g,y)}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Kc extends ht{constructor(e=1,t=.4,i=64,n=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:i,radialSegments:n,p:r,q:a},i=Math.floor(i),n=Math.floor(n);const o=[],l=[],c=[],h=[],u=new O,f=new O,d=new O,p=new O,v=new O,m=new O,g=new O;for(let x=0;x<=i;++x){const _=x/i*r*Math.PI*2;y(_,r,a,e,d),y(_+.01,r,a,e,p),m.subVectors(p,d),g.addVectors(p,d),v.crossVectors(m,g),g.crossVectors(v,m),v.normalize(),g.normalize();for(let C=0;C<=n;++C){const T=C/n*Math.PI*2,A=-t*Math.cos(T),E=t*Math.sin(T);u.x=d.x+(A*g.x+E*v.x),u.y=d.y+(A*g.y+E*v.y),u.z=d.z+(A*g.z+E*v.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(x/i),h.push(C/n)}}for(let x=1;x<=i;x++)for(let _=1;_<=n;_++){const C=(n+1)*(x-1)+(_-1),T=(n+1)*x+(_-1),A=(n+1)*x+_,E=(n+1)*(x-1)+_;o.push(C,T,E),o.push(T,A,E)}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2));function y(x,_,C,T,A){const E=Math.cos(x),w=Math.sin(x),M=C/_*x,L=Math.cos(M);A.x=T*(2+L)*.5*E,A.y=T*(2+L)*w*.5,A.z=T*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Jc extends ht{constructor(e=new Cf(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};const a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new O,l=new O,c=new ye;let h=new O;const u=[],f=[],d=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Ke(u,3)),this.setAttribute("normal",new Ke(f,3)),this.setAttribute("uv",new Ke(d,2));function v(){for(let x=0;x<t;x++)m(x);m(r===!1?t:0),y(),g()}function m(x){h=e.getPointAt(x/t,h);const _=a.normals[x],C=a.binormals[x];for(let T=0;T<=n;T++){const A=T/n*Math.PI*2,E=Math.sin(A),w=-Math.cos(A);l.x=w*_.x+E*C.x,l.y=w*_.y+E*C.y,l.z=w*_.z+E*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function g(){for(let x=1;x<=t;x++)for(let _=1;_<=n;_++){const C=(n+1)*(x-1)+(_-1),T=(n+1)*x+(_-1),A=(n+1)*x+_,E=(n+1)*(x-1)+_;p.push(C,T,E),p.push(T,A,E)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=n;_++)c.x=x/t,c.y=_/n,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Jc(new gc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Qg extends ht{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],i=new Set,n=new O,r=new O;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){const u=l[c],f=u.start,d=u.count;for(let p=f,v=f+d;p<v;p+=3)for(let m=0;m<3;m++){const g=o.getX(p+m),y=o.getX(p+(m+1)%3);n.fromBufferAttribute(a,g),r.fromBufferAttribute(a,y),fp(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const h=3*o+c,u=3*o+(c+1)%3;n.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),fp(n,r,i)===!0&&(t.push(n.x,n.y,n.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ke(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function fp(s,e,t){const i=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,n=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(i)===!0||t.has(n)===!0?!1:(t.add(i),t.add(n),!0)}var dp=Object.freeze({__proto__:null,BoxGeometry:ds,CapsuleGeometry:Bc,CircleGeometry:kc,ConeGeometry:zc,CylinderGeometry:ta,DodecahedronGeometry:Vc,EdgesGeometry:qg,ExtrudeGeometry:Hc,IcosahedronGeometry:Wc,LatheGeometry:xo,OctahedronGeometry:yo,PlaneGeometry:$i,PolyhedronGeometry:Sr,RingGeometry:Xc,ShapeGeometry:Yc,SphereGeometry:na,TetrahedronGeometry:Zc,TorusGeometry:qc,TorusKnotGeometry:Kc,TubeGeometry:Jc,WireframeGeometry:Qg});class $g extends pn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class ev extends gi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class If extends pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tv extends If{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nv extends pn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ze(16777215),this.specular=new Ze(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class iv extends pn{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ze(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class rv extends pn{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class sv extends pn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jc extends pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_g,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qc extends pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class av extends pn{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ze(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yr,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ov extends wn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function jr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function lv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function cv(s){function e(n,r){return s[n]-s[r]}const t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function Du(s,e,t){const i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){const o=t[r]*e;for(let l=0;l!==e;++l)n[a++]=s[o+l]}return n}function Pf(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}function yy(s,e,t,i,n=30){const r=s.clone();r.name=e;const a=[];for(let l=0;l<r.tracks.length;++l){const c=r.tracks[l],h=c.getValueSize(),u=[],f=[];for(let d=0;d<c.times.length;++d){const p=c.times[d]*n;if(!(p<t||p>=i)){u.push(c.times[d]);for(let v=0;v<h;++v)f.push(c.values[d*h+v])}}u.length!==0&&(c.times=jr(u,c.times.constructor),c.values=jr(f,c.values.constructor),a.push(c))}r.tracks=a;let o=1/0;for(let l=0;l<r.tracks.length;++l)o>r.tracks[l].times[0]&&(o=r.tracks[l].times[0]);for(let l=0;l<r.tracks.length;++l)r.tracks[l].shift(-1*o);return r.resetDuration(),r}function by(s,e=0,t=s,i=30){i<=0&&(i=30);const n=t.tracks.length,r=e/i;for(let a=0;a<n;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=s.tracks.find(function(g){return g.name===o.name&&g.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let f=0;const d=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(f=d/3);const p=o.times.length-1;let v;if(r<=o.times[0]){const g=h,y=u-h;v=o.values.slice(g,y)}else if(r>=o.times[p]){const g=p*u+h,y=g+u-h;v=o.values.slice(g,y)}else{const g=o.createInterpolant(),y=h,x=u-h;g.evaluate(r),v=g.resultBuffer.slice(y,x)}l==="quaternion"&&new dn().fromArray(v).normalize().conjugate().toArray(v);const m=c.times.length;for(let g=0;g<m;++g){const y=g*d+f;if(l==="quaternion")dn.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const x=d-f*2;for(let _=0;_<x;++_)c.values[y+_]-=v[_]}}}return s.blendMode=ff,s}const Sy={convertArray:jr,isTypedArray:lv,getKeyframeOrder:cv,sortedArray:Du,flattenJSON:Pf,subclip:yy,makeClipAdditive:by};class bo{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;n:{i:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class hv extends bo{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yr,endingEnd:Yr}}intervalChanged_(e,t,i){const n=this.parameterPositions;let r=e-2,a=e+1,o=n[r],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Zr:r=e,o=2*t-i;break;case Ka:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Zr:a=e,l=2*i-t;break;case Ka:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,p=(i-t)/(n-t),v=p*p,m=v*p,g=-f*m+2*f*v-f*p,y=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*p+1,x=(-1-d)*m+(1.5+d)*v+.5*p,_=d*m-d*v;for(let C=0;C!==o;++C)r[C]=g*a[h+C]+y*a[c+C]+x*a[l+C]+_*a[u+C];return r}}class Df extends bo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}}class uv extends bo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class yi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jr(t,this.TimeBufferType),this.values=jr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:jr(e.times,Array),values:jr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new uv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case dc:t=this.InterpolantFactoryMethodLinear;break;case Al:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return dc;case this.InterpolantFactoryMethodSmooth:return Al}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&lv(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===Al,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,f=u-i,d=u+i;for(let p=0;p!==i;++p){const v=t[u+p];if(v!==t[f+p]||v!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,f=a*i;for(let d=0;d!==i;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}yi.prototype.TimeBufferType=Float32Array;yi.prototype.ValueBufferType=Float32Array;yi.prototype.DefaultInterpolation=dc;class ps extends yi{constructor(e,t,i){super(e,t,i)}}ps.prototype.ValueTypeName="bool";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=qa;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;class Uf extends yi{}Uf.prototype.ValueTypeName="color";class ro extends yi{}ro.prototype.ValueTypeName="number";class fv extends bo{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)dn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class So extends yi{InterpolantFactoryMethodLinear(e){return new fv(this.times,this.values,this.getValueSize(),e)}}So.prototype.ValueTypeName="quaternion";So.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends yi{constructor(e,t,i){super(e,t,i)}}ms.prototype.ValueTypeName="string";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=qa;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class so extends yi{}so.prototype.ValueTypeName="vector";class ao{constructor(e="",t=-1,i=[],n=Ac){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Wn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(wy(i[a]).scale(n));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=i.length;r!==a;++r)t.push(yi.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=cv(l);l=Du(l,1,h),c=Du(c,1,h),!n&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new ro(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let f=n[u];f||(n[u]=f=[]),f.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,f,d,p,v){if(d.length!==0){const m=[],g=[];Pf(d,m,g,p),m.length!==0&&v.push(new u(f,m,g))}},n=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const f=c[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let p;for(p=0;p<f.length;p++)if(f[p].morphTargets)for(let v=0;v<f[p].morphTargets.length;v++)d[f[p].morphTargets[v]]=-1;for(const v in d){const m=[],g=[];for(let y=0;y!==f[p].morphTargets.length;++y){const x=f[p];m.push(x.time),g.push(x.morphTarget===v?1:0)}n.push(new ro(".morphTargetInfluence["+v+"]",m,g))}l=d.length*a}else{const d=".bones["+t[u].name+"]";i(so,d+".position",f,"pos",n),i(So,d+".quaternion",f,"rot",n),i(so,d+".scale",f,"scl",n)}}return n.length===0?null:new this(r,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function My(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ro;case"vector":case"vector2":case"vector3":case"vector4":return so;case"color":return Uf;case"quaternion":return So;case"bool":case"boolean":return ps;case"string":return ms}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=My(s.type);if(s.times===void 0){const t=[],i=[];Pf(s.keys,t,i,"value"),s.times=t,s.values=i}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Wi={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Lf{constructor(e,t,i){const n=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return p}return null}}}const gs=new Lf;class On{constructor(e){this.manager=e!==void 0?e:gs,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}On.DEFAULT_MATERIAL_NAME="__DEFAULT";const Vi={};class Ey extends Error{constructor(e,t){super(e),this.response=t}}class Qi extends On{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Wi.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Vi[e]!==void 0){Vi[e].push({onLoad:t,onProgress:i,onError:n});return}Vi[e]=[],Vi[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Vi[e],u=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=f?parseInt(f):0,p=d!==0;let v=0;const m=new ReadableStream({start(g){y();function y(){u.read().then(({done:x,value:_})=>{if(x)g.close();else{v+=_.byteLength;const C=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:d});for(let T=0,A=h.length;T<A;T++){const E=h[T];E.onProgress&&E.onProgress(C)}g.enqueue(_),y()}},x=>{g.error(x)})}}});return new Response(m)}else throw new Ey(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Wi.add(e,c);const h=Vi[e];delete Vi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(c)}}).catch(c=>{const h=Vi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Vi[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Ty extends On{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Qi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}parse(e){const t=[];for(let i=0;i<e.length;i++){const n=ao.parse(e[i]);t.push(n)}return t}}class Ay extends On{constructor(e){super(e)}load(e,t,i,n){const r=this,a=[],o=new Fc,l=new Qi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(r.withCredentials);let c=0;function h(u){l.load(e[u],function(f){const d=r.parse(f,!0);a[u]={width:d.width,height:d.height,format:d.format,mipmaps:d.mipmaps},c+=1,c===6&&(d.mipmapCount===1&&(o.minFilter=Dt),o.image=a,o.format=d.format,o.needsUpdate=!0,t&&t(o))},i,n)}if(Array.isArray(e))for(let u=0,f=e.length;u<f;++u)h(u);else l.load(e,function(u){const f=r.parse(u,!0);if(f.isCubemap){const d=f.mipmaps.length/f.mipmapCount;for(let p=0;p<d;p++){a[p]={mipmaps:[]};for(let v=0;v<f.mipmapCount;v++)a[p].mipmaps.push(f.mipmaps[p*f.mipmapCount+v]),a[p].format=f.format,a[p].width=f.width,a[p].height=f.height}o.image=a}else o.image.width=f.width,o.image.height=f.height,o.mipmaps=f.mipmaps;f.mipmapCount===1&&(o.minFilter=Dt),o.format=f.format,o.needsUpdate=!0,t&&t(o)},i,n);return o}}class oo extends On{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wi.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=$a("img");function l(){h(),Wi.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),n&&n(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Cy extends On{constructor(e){super(e)}load(e,t,i,n){const r=new vo;r.colorSpace=Dn;const a=new oo(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(h){r.images[c]=h,o++,o===6&&(r.needsUpdate=!0,t&&t(r))},void 0,n)}for(let c=0;c<e.length;++c)l(c);return r}}class Nf extends On{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Ti,o=new Qi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(n!==void 0)n(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:si,a.wrapT=c.wrapT!==void 0?c.wrapT:si,a.magFilter=c.magFilter!==void 0?c.magFilter:Dt,a.minFilter=c.minFilter!==void 0?c.minFilter:Dt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=wi),c.mipmapCount===1&&(a.minFilter=Dt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}}class dv extends On{constructor(e){super(e)}load(e,t,i,n){const r=new Bt,a=new oo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}}class Mr extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class pv extends Mr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Qh=new rt,pp=new O,mp=new O;class Ff{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;pp.setFromMatrixPosition(e.matrixWorld),t.position.copy(pp),mp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mp),t.updateMatrixWorld(),Qh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ry extends Ff{constructor(){super(new en(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=Qs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mv extends Mr{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Ry}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const gp=new rt,Ta=new O,$h=new O;class Iy extends Ff{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ye(4,2),this._viewportCount=6,this._viewports=[new ft(2,1,1,1),new ft(0,1,1,1),new ft(3,1,1,1),new ft(1,1,1,1),new ft(3,0,1,1),new ft(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ta),$h.copy(i.position),$h.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt($h),i.updateMatrixWorld(),n.makeTranslation(-Ta.x,-Ta.y,-Ta.z),gp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gp)}}class gv extends Mr{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new Iy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mo extends Pc{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let r=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Py extends Ff{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vv extends Mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new Py}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class _v extends Mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xv extends Mr{constructor(e,t,i=10,n=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=i,this.height=n}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class yv{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new O)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*n),t.addScaledVector(a[2],.488603*r),t.addScaledVector(a[3],.488603*i),t.addScaledVector(a[4],1.092548*(i*n)),t.addScaledVector(a[5],1.092548*(n*r)),t.addScaledVector(a[6],.315392*(3*r*r-1)),t.addScaledVector(a[7],1.092548*(i*r)),t.addScaledVector(a[8],.546274*(i*i-n*n)),t}getIrradianceAt(e,t){const i=e.x,n=e.y,r=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*n),t.addScaledVector(a[2],2*.511664*r),t.addScaledVector(a[3],2*.511664*i),t.addScaledVector(a[4],2*.429043*i*n),t.addScaledVector(a[5],2*.429043*n*r),t.addScaledVector(a[6],.743125*r*r-.247708),t.addScaledVector(a[7],2*.429043*i*r),t.addScaledVector(a[8],.429043*(i*i-n*n)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let i=0;i<9;i++)this.coefficients[i].addScaledVector(e.coefficients[i],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let i=0;i<9;i++)this.coefficients[i].lerp(e.coefficients[i],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].fromArray(e,t+n*3);return this}toArray(e=[],t=0){const i=this.coefficients;for(let n=0;n<9;n++)i[n].toArray(e,t+n*3);return e}static getBasisAt(e,t){const i=e.x,n=e.y,r=e.z;t[0]=.282095,t[1]=.488603*n,t[2]=.488603*r,t[3]=.488603*i,t[4]=1.092548*i*n,t[5]=1.092548*n*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*i*r,t[8]=.546274*(i*i-n*n)}}class bv extends Mr{constructor(e=new yv,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class $c extends On{constructor(e){super(e),this.textures={}}load(e,t,i,n){const r=this,a=new Qi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}parse(e){const t=this.textures;function i(r){return t[r]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",r),t[r]}const n=this.createMaterialFromType(e.type);if(e.uuid!==void 0&&(n.uuid=e.uuid),e.name!==void 0&&(n.name=e.name),e.color!==void 0&&n.color!==void 0&&n.color.setHex(e.color),e.roughness!==void 0&&(n.roughness=e.roughness),e.metalness!==void 0&&(n.metalness=e.metalness),e.sheen!==void 0&&(n.sheen=e.sheen),e.sheenColor!==void 0&&(n.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(n.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&n.emissive!==void 0&&n.emissive.setHex(e.emissive),e.specular!==void 0&&n.specular!==void 0&&n.specular.setHex(e.specular),e.specularIntensity!==void 0&&(n.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&n.specularColor!==void 0&&n.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(n.shininess=e.shininess),e.clearcoat!==void 0&&(n.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(n.dispersion=e.dispersion),e.iridescence!==void 0&&(n.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(n.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(n.transmission=e.transmission),e.thickness!==void 0&&(n.thickness=e.thickness),e.attenuationDistance!==void 0&&(n.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&n.attenuationColor!==void 0&&n.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(n.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(n.fog=e.fog),e.flatShading!==void 0&&(n.flatShading=e.flatShading),e.blending!==void 0&&(n.blending=e.blending),e.combine!==void 0&&(n.combine=e.combine),e.side!==void 0&&(n.side=e.side),e.shadowSide!==void 0&&(n.shadowSide=e.shadowSide),e.opacity!==void 0&&(n.opacity=e.opacity),e.transparent!==void 0&&(n.transparent=e.transparent),e.alphaTest!==void 0&&(n.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(n.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(n.depthFunc=e.depthFunc),e.depthTest!==void 0&&(n.depthTest=e.depthTest),e.depthWrite!==void 0&&(n.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(n.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(n.blendSrc=e.blendSrc),e.blendDst!==void 0&&(n.blendDst=e.blendDst),e.blendEquation!==void 0&&(n.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(n.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(n.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(n.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&n.blendColor!==void 0&&n.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(n.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(n.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(n.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(n.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(n.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(n.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(n.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(n.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(n.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(n.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(n.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(n.rotation=e.rotation),e.linewidth!==void 0&&(n.linewidth=e.linewidth),e.dashSize!==void 0&&(n.dashSize=e.dashSize),e.gapSize!==void 0&&(n.gapSize=e.gapSize),e.scale!==void 0&&(n.scale=e.scale),e.polygonOffset!==void 0&&(n.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(n.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(n.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(n.dithering=e.dithering),e.alphaToCoverage!==void 0&&(n.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(n.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(n.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(n.visible=e.visible),e.toneMapped!==void 0&&(n.toneMapped=e.toneMapped),e.userData!==void 0&&(n.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?n.vertexColors=e.vertexColors>0:n.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(n.uniforms[r]={},a.type){case"t":n.uniforms[r].value=i(a.value);break;case"c":n.uniforms[r].value=new Ze().setHex(a.value);break;case"v2":n.uniforms[r].value=new ye().fromArray(a.value);break;case"v3":n.uniforms[r].value=new O().fromArray(a.value);break;case"v4":n.uniforms[r].value=new ft().fromArray(a.value);break;case"m3":n.uniforms[r].value=new lt().fromArray(a.value);break;case"m4":n.uniforms[r].value=new rt().fromArray(a.value);break;default:n.uniforms[r].value=a.value}}if(e.defines!==void 0&&(n.defines=e.defines),e.vertexShader!==void 0&&(n.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(n.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(n.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)n.extensions[r]=e.extensions[r];if(e.lights!==void 0&&(n.lights=e.lights),e.clipping!==void 0&&(n.clipping=e.clipping),e.size!==void 0&&(n.size=e.size),e.sizeAttenuation!==void 0&&(n.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(n.map=i(e.map)),e.matcap!==void 0&&(n.matcap=i(e.matcap)),e.alphaMap!==void 0&&(n.alphaMap=i(e.alphaMap)),e.bumpMap!==void 0&&(n.bumpMap=i(e.bumpMap)),e.bumpScale!==void 0&&(n.bumpScale=e.bumpScale),e.normalMap!==void 0&&(n.normalMap=i(e.normalMap)),e.normalMapType!==void 0&&(n.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),n.normalScale=new ye().fromArray(r)}return e.displacementMap!==void 0&&(n.displacementMap=i(e.displacementMap)),e.displacementScale!==void 0&&(n.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(n.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(n.roughnessMap=i(e.roughnessMap)),e.metalnessMap!==void 0&&(n.metalnessMap=i(e.metalnessMap)),e.emissiveMap!==void 0&&(n.emissiveMap=i(e.emissiveMap)),e.emissiveIntensity!==void 0&&(n.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(n.specularMap=i(e.specularMap)),e.specularIntensityMap!==void 0&&(n.specularIntensityMap=i(e.specularIntensityMap)),e.specularColorMap!==void 0&&(n.specularColorMap=i(e.specularColorMap)),e.envMap!==void 0&&(n.envMap=i(e.envMap)),e.envMapRotation!==void 0&&n.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(n.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(n.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(n.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(n.lightMap=i(e.lightMap)),e.lightMapIntensity!==void 0&&(n.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(n.aoMap=i(e.aoMap)),e.aoMapIntensity!==void 0&&(n.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(n.gradientMap=i(e.gradientMap)),e.clearcoatMap!==void 0&&(n.clearcoatMap=i(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(n.clearcoatRoughnessMap=i(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(n.clearcoatNormalMap=i(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(n.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(n.iridescenceMap=i(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(n.iridescenceThicknessMap=i(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(n.transmissionMap=i(e.transmissionMap)),e.thicknessMap!==void 0&&(n.thicknessMap=i(e.thicknessMap)),e.anisotropyMap!==void 0&&(n.anisotropyMap=i(e.anisotropyMap)),e.sheenColorMap!==void 0&&(n.sheenColorMap=i(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(n.sheenRoughnessMap=i(e.sheenRoughnessMap)),n}setTextures(e){return this.textures=e,this}createMaterialFromType(e){return $c.createMaterialFromType(e)}static createMaterialFromType(e){const t={ShadowMaterial:$g,SpriteMaterial:yf,RawShaderMaterial:ev,ShaderMaterial:gi,PointsMaterial:Sf,MeshPhysicalMaterial:tv,MeshStandardMaterial:If,MeshPhongMaterial:nv,MeshToonMaterial:iv,MeshNormalMaterial:rv,MeshLambertMaterial:sv,MeshDepthMaterial:jc,MeshDistanceMaterial:Qc,MeshBasicMaterial:Ui,MeshMatcapMaterial:av,LineDashedMaterial:ov,LineBasicMaterial:wn,Material:pn};return new t[e]}}class Uu{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Of extends ht{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Sv extends On{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Qi(r.manager);a.setPath(r.path),a.setRequestHeader(r.requestHeader),a.setWithCredentials(r.withCredentials),a.load(e,function(o){try{t(r.parse(JSON.parse(o)))}catch(l){n?n(l):console.error(l),r.manager.itemError(e)}},i,n)}parse(e){const t={},i={};function n(d,p){if(t[p]!==void 0)return t[p];const m=d.interleavedBuffers[p],g=r(d,m.buffer),y=Gs(m.type,g),x=new Lc(y,m.stride);return x.uuid=m.uuid,t[p]=x,x}function r(d,p){if(i[p]!==void 0)return i[p];const m=d.arrayBuffers[p],g=new Uint32Array(m).buffer;return i[p]=g,g}const a=e.isInstancedBufferGeometry?new Of:new ht,o=e.data.index;if(o!==void 0){const d=Gs(o.type,o.array);a.setIndex(new At(d,1))}const l=e.data.attributes;for(const d in l){const p=l[d];let v;if(p.isInterleavedBufferAttribute){const m=n(e.data,p.data);v=new cs(m,p.itemSize,p.offset,p.normalized)}else{const m=Gs(p.type,p.array),g=p.isInstancedBufferAttribute?hs:At;v=new g(m,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(d,v)}const c=e.data.morphAttributes;if(c)for(const d in c){const p=c[d],v=[];for(let m=0,g=p.length;m<g;m++){const y=p[m];let x;if(y.isInterleavedBufferAttribute){const _=n(e.data,y.data);x=new cs(_,y.itemSize,y.offset,y.normalized)}else{const _=Gs(y.type,y.array);x=new At(_,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}a.morphAttributes[d]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const u=e.data.groups||e.data.drawcalls||e.data.offsets;if(u!==void 0)for(let d=0,p=u.length;d!==p;++d){const v=u[d];a.addGroup(v.start,v.count,v.materialIndex)}const f=e.data.boundingSphere;if(f!==void 0){const d=new O;f.center!==void 0&&d.fromArray(f.center),a.boundingSphere=new Kt(d,f.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class Dy extends On{constructor(e){super(e)}load(e,t,i,n){const r=this,a=this.path===""?Uu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Qi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(u){n!==void 0&&n(u),console.error("THREE:ObjectLoader: Can't parse "+e+".",u.message);return}const h=c.metadata;if(h===void 0||h.type===void 0||h.type.toLowerCase()==="geometry"){n!==void 0&&n(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}r.parse(c,t)},i,n)}async loadAsync(e,t){const i=this,n=this.path===""?Uu.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||n;const r=new Qi(this.manager);r.setPath(this.path),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials);const a=await r.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await i.parseAsync(o)}parse(e,t){const i=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,r,l,o,i),h=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,h),this.bindLightTargets(c),t!==void 0){let u=!1;for(const f in a)if(a[f].data instanceof HTMLImageElement){u=!0;break}u===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),i=this.parseShapes(e.shapes),n=this.parseGeometries(e.geometries,i),r=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,r),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,n,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),this.bindLightTargets(l),l}parseShapes(e){const t={};if(e!==void 0)for(let i=0,n=e.length;i<n;i++){const r=new is().fromJSON(e[i]);t[r.uuid]=r}return t}parseSkeletons(e,t){const i={},n={};if(t.traverse(function(r){r.isBone&&(n[r.uuid]=r)}),e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=new Nc().fromJSON(e[r],n);i[o.uuid]=o}return i}parseGeometries(e,t){const i={};if(e!==void 0){const n=new Sv;for(let r=0,a=e.length;r<a;r++){let o;const l=e[r];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=n.parse(l);break;default:l.type in dp?o=dp[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),i[l.uuid]=o}}return i}parseMaterials(e,t){const i={},n={};if(e!==void 0){const r=new $c;r.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];i[l.uuid]===void 0&&(i[l.uuid]=r.parse(l)),n[l.uuid]=i[l.uuid]}}return n}parseAnimations(e){const t={};if(e!==void 0)for(let i=0;i<e.length;i++){const n=e[i],r=ao.parse(n);t[r.uuid]=r}return t}parseImages(e,t){const i=this,n={};let r;function a(l){return i.manager.itemStart(l),r.load(l,function(){i.manager.itemEnd(l)},void 0,function(){i.manager.itemError(l),i.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,h=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:i.resourcePath+c;return a(h)}else return l.data?{data:Gs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new Lf(t);r=new oo(l),r.setCrossOrigin(this.crossOrigin);for(let c=0,h=e.length;c<h;c++){const u=e[c],f=u.url;if(Array.isArray(f)){const d=[];for(let p=0,v=f.length;p<v;p++){const m=f[p],g=o(m);g!==null&&(g instanceof HTMLImageElement?d.push(g):d.push(new Ti(g.data,g.width,g.height)))}n[u.uuid]=new qr(d)}else{const d=o(u.url);n[u.uuid]=new qr(d)}}}return n}async parseImagesAsync(e){const t=this,i={};let n;async function r(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await n.loadAsync(l)}else return a.data?{data:Gs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){n=new oo(this.manager),n.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const h=[];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=await r(d);p!==null&&(p instanceof HTMLImageElement?h.push(p):h.push(new Ti(p.data,p.width,p.height)))}i[l.uuid]=new qr(h)}else{const h=await r(l.url);i[l.uuid]=new qr(h)}}}return i}parseTextures(e,t){function i(r,a){return typeof r=="number"?r:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",r),a[r])}const n={};if(e!==void 0)for(let r=0,a=e.length;r<a;r++){const o=e[r];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let h;Array.isArray(c)?(h=new vo,c.length===6&&(h.needsUpdate=!0)):(c&&c.data?h=new Ti:h=new Bt,c&&(h.needsUpdate=!0)),h.source=l,h.uuid=o.uuid,o.name!==void 0&&(h.name=o.name),o.mapping!==void 0&&(h.mapping=i(o.mapping,Uy)),o.channel!==void 0&&(h.channel=o.channel),o.offset!==void 0&&h.offset.fromArray(o.offset),o.repeat!==void 0&&h.repeat.fromArray(o.repeat),o.center!==void 0&&h.center.fromArray(o.center),o.rotation!==void 0&&(h.rotation=o.rotation),o.wrap!==void 0&&(h.wrapS=i(o.wrap[0],vp),h.wrapT=i(o.wrap[1],vp)),o.format!==void 0&&(h.format=o.format),o.internalFormat!==void 0&&(h.internalFormat=o.internalFormat),o.type!==void 0&&(h.type=o.type),o.colorSpace!==void 0&&(h.colorSpace=o.colorSpace),o.minFilter!==void 0&&(h.minFilter=i(o.minFilter,_p)),o.magFilter!==void 0&&(h.magFilter=i(o.magFilter,_p)),o.anisotropy!==void 0&&(h.anisotropy=o.anisotropy),o.flipY!==void 0&&(h.flipY=o.flipY),o.generateMipmaps!==void 0&&(h.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(h.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(h.compareFunction=o.compareFunction),o.userData!==void 0&&(h.userData=o.userData),n[o.uuid]=h}return n}parseObject(e,t,i,n,r){let a;function o(f){return t[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",f),t[f]}function l(f){if(f!==void 0){if(Array.isArray(f)){const d=[];for(let p=0,v=f.length;p<v;p++){const m=f[p];i[m]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",m),d.push(i[m])}return d}return i[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",f),i[f]}}function c(f){return n[f]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",f),n[f]}let h,u;switch(e.type){case"Scene":a=new xf,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new Ze(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new Uc(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new Dc(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new en(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new Mo(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new _v(e.color,e.intensity);break;case"DirectionalLight":a=new vv(e.color,e.intensity),a.target=e.target||"";break;case"PointLight":a=new gv(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new xv(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new mv(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay),a.target=e.target||"";break;case"HemisphereLight":a=new pv(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new bv().fromJSON(e);break;case"SkinnedMesh":h=o(e.geometry),u=l(e.material),a=new Bg(h,u),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":h=o(e.geometry),u=l(e.material),a=new Ut(h,u);break;case"InstancedMesh":h=o(e.geometry),u=l(e.material);const f=e.count,d=e.instanceMatrix,p=e.instanceColor;a=new kg(h,u,f),a.instanceMatrix=new hs(new Float32Array(d.array),16),p!==void 0&&(a.instanceColor=new hs(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":h=o(e.geometry),u=l(e.material),a=new zg(e.maxInstanceCount,e.maxVertexCount,e.maxIndexCount,u),a.geometry=h,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const m=new Zt;m.min.fromArray(v.boxMin),m.max.fromArray(v.boxMax);const g=new Kt;return g.radius=v.sphereRadius,g.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:m,sphereInitialized:v.sphereInitialized,sphere:g}}),a._maxInstanceCount=e.maxInstanceCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new Og;break;case"Line":a=new xr(o(e.geometry),l(e.material));break;case"LineLoop":a=new Vg(o(e.geometry),l(e.material));break;case"LineSegments":a=new Li(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new Gg(o(e.geometry),l(e.material));break;case"Sprite":a=new Fg(l(e.material));break;case"Group":a=new Jr;break;case"Bone":a=new bf;break;default:a=new vt}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.intensity!==void 0&&(a.shadow.intensity=e.shadow.intensity),e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const f=e.children;for(let d=0;d<f.length;d++)a.add(this.parseObject(f[d],t,i,n,r))}if(e.animations!==void 0){const f=e.animations;for(let d=0;d<f.length;d++){const p=f[d];a.animations.push(r[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const f=e.levels;for(let d=0;d<f.length;d++){const p=f[d],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(i){if(i.isSkinnedMesh===!0&&i.skeleton!==void 0){const n=t[i.skeleton];n===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",i.skeleton):i.bind(n,i.bindMatrix)}})}bindLightTargets(e){e.traverse(function(t){if(t.isDirectionalLight||t.isSpotLight){const i=t.target,n=e.getObjectByProperty("uuid",i);n!==void 0?t.target=n:t.target=new vt}})}}const Uy={UVMapping:bc,CubeReflectionMapping:Ji,CubeRefractionMapping:_r,EquirectangularReflectionMapping:Js,EquirectangularRefractionMapping:Xa,CubeUVReflectionMapping:ea},vp={RepeatWrapping:Ya,ClampToEdgeWrapping:si,MirroredRepeatWrapping:Za},_p={NearestFilter:rn,NearestMipmapNearestFilter:tf,NearestMipmapLinearFilter:Vs,LinearFilter:Dt,LinearMipmapNearestFilter:Pa,LinearMipmapLinearFilter:wi};class Ly extends On{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Wi.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Wi.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){n&&n(c),Wi.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(e,l),r.manager.itemStart(e)}}let hl;class Bf{static getContext(){return hl===void 0&&(hl=new(window.AudioContext||window.webkitAudioContext)),hl}static setContext(e){hl=e}}class Ny extends On{constructor(e){super(e)}load(e,t,i,n){const r=this,a=new Qi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Bf.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},i,n);function o(l){n?n(l):console.error(l),r.manager.itemError(e)}}}const xp=new rt,yp=new rt,Dr=new rt;class Fy{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new en,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new en,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,Dr.copy(e.projectionMatrix);const n=t.eyeSep/2,r=n*t.near/t.focus,a=t.near*Math.tan(ns*t.fov*.5)/t.zoom;let o,l;yp.elements[12]=-n,xp.elements[12]=n,o=-a*t.aspect+r,l=a*t.aspect+r,Dr.elements[0]=2*t.near/(l-o),Dr.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(Dr),o=-a*t.aspect-r,l=a*t.aspect-r,Dr.elements[0]=2*t.near/(l-o),Dr.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(Dr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(yp),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(xp)}}class Mv extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=bp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=bp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function bp(){return performance.now()}const Ur=new O,Sp=new dn,Oy=new O,Lr=new O;class By extends vt{constructor(){super(),this.type="AudioListener",this.context=Bf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new wv}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ur,Sp,Oy),Lr.set(0,0,-1).applyQuaternion(Sp),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Ur.x,n),t.positionY.linearRampToValueAtTime(Ur.y,n),t.positionZ.linearRampToValueAtTime(Ur.z,n),t.forwardX.linearRampToValueAtTime(Lr.x,n),t.forwardY.linearRampToValueAtTime(Lr.y,n),t.forwardZ.linearRampToValueAtTime(Lr.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(Ur.x,Ur.y,Ur.z),t.setOrientation(Lr.x,Lr.y,Lr.z,i.x,i.y,i.z)}}class Ev extends vt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(e=0){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(this.context.currentTime+e),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1,this._progress=0}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}copy(e,t){return super.copy(e,t),e.sourceType!=="buffer"?(console.warn("THREE.Audio: Audio source type cannot be copied."),this):(this.autoplay=e.autoplay,this.buffer=e.buffer,this.detune=e.detune,this.loop=e.loop,this.loopStart=e.loopStart,this.loopEnd=e.loopEnd,this.offset=e.offset,this.duration=e.duration,this.playbackRate=e.playbackRate,this.hasPlaybackControl=e.hasPlaybackControl,this.sourceType=e.sourceType,this.filters=e.filters.slice(),this)}clone(e){return new this.constructor(this.listener).copy(this,e)}}const Nr=new O,Mp=new dn,ky=new O,Fr=new O;class zy extends Ev{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,i){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=i,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Nr,Mp,ky),Fr.set(0,0,1).applyQuaternion(Mp);const t=this.panner;if(t.positionX){const i=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Nr.x,i),t.positionY.linearRampToValueAtTime(Nr.y,i),t.positionZ.linearRampToValueAtTime(Nr.z,i),t.orientationX.linearRampToValueAtTime(Fr.x,i),t.orientationY.linearRampToValueAtTime(Fr.y,i),t.orientationZ.linearRampToValueAtTime(Fr.z,i)}else t.setPosition(Nr.x,Nr.y,Nr.z),t.setOrientation(Fr.x,Fr.y,Fr.z)}}class Vy{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class Tv{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,a;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,r=e*n+n;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){o.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){dn.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){const a=this._workIndex*r;dn.multiplyQuaternionsFlat(e,a,e,t,e,i),dn.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){const a=1-n;for(let o=0;o!==r;++o){const l=t+o;e[l]=e[l]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[i+a]*n}}}const kf="\\[\\]\\.:\\/",Gy=new RegExp("["+kf+"]","g"),zf="[^"+kf+"]",Hy="[^"+kf.replace("\\.","")+"]",Wy=/((?:WC+[\/:])*)/.source.replace("WC",zf),Xy=/(WCOD+)?/.source.replace("WCOD",Hy),Yy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zf),Zy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zf),qy=new RegExp("^"+Wy+Xy+Yy+Zy+"$"),Ky=["material","materials","bones","map"];class Jy{constructor(e,t,i){const n=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class gt{constructor(e,t,i){this.path=t,this.parsedPath=i||gt.parseTrackName(t),this.node=gt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new gt.Composite(e,t,i):new gt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){const t=qy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const r=i.nodeName.substring(n+1);Ky.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let r=t.propertyIndex;if(e||(e=gt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}gt.Composite=Jy;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class jy{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Wn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let i=0,n=arguments.length;i!==n;++i)e[arguments[i].uuid]=i;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,i=this._paths,n=this._parsedPaths,r=this._bindings,a=r.length;let o,l=e.length,c=this.nCachedObjects_;for(let h=0,u=arguments.length;h!==u;++h){const f=arguments[h],d=f.uuid;let p=t[d];if(p===void 0){p=l++,t[d]=p,e.push(f);for(let v=0,m=a;v!==m;++v)r[v].push(new gt(f,i[v],n[v]))}else if(p<c){o=e[p];const v=--c,m=e[v];t[m.uuid]=p,e[p]=m,t[d]=v,e[v]=f;for(let g=0,y=a;g!==y;++g){const x=r[g],_=x[v];let C=x[p];x[p]=_,C===void 0&&(C=new gt(f,i[g],n[g])),x[v]=C}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,h=t[c];if(h!==void 0&&h>=r){const u=r++,f=e[u];t[f.uuid]=h,e[h]=f,t[c]=u,e[u]=l;for(let d=0,p=n;d!==p;++d){const v=i[d],m=v[u],g=v[h];v[h]=m,v[u]=g}}}this.nCachedObjects_=r}uncache(){const e=this._objects,t=this._indicesByUUID,i=this._bindings,n=i.length;let r=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],h=c.uuid,u=t[h];if(u!==void 0)if(delete t[h],u<r){const f=--r,d=e[f],p=--a,v=e[p];t[d.uuid]=u,e[u]=d,t[v.uuid]=f,e[f]=v,e.pop();for(let m=0,g=n;m!==g;++m){const y=i[m],x=y[f],_=y[p];y[u]=x,y[f]=_,y.pop()}}else{const f=--a,d=e[f];f>0&&(t[d.uuid]=u),e[u]=d,e.pop();for(let p=0,v=n;p!==v;++p){const m=i[p];m[u]=m[f],m.pop()}}}this.nCachedObjects_=r}subscribe_(e,t){const i=this._bindingsIndicesByPath;let n=i[e];const r=this._bindings;if(n!==void 0)return r[n];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,h=this.nCachedObjects_,u=new Array(c);n=r.length,i[e]=n,a.push(e),o.push(t),r.push(u);for(let f=h,d=l.length;f!==d;++f){const p=l[f];u[f]=new gt(p,e,t)}return u}unsubscribe_(e){const t=this._bindingsIndicesByPath,i=t[e];if(i!==void 0){const n=this._paths,r=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=i,a[i]=l,a.pop(),r[i]=r[o],r.pop(),n[i]=n[o],n.pop()}}}class Av{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const r=t.tracks,a=r.length,o=new Array(a),l={endingStart:Yr,endingEnd:Yr};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=gg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,r=n.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+i,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ff:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case Ac:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(a),c[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,r=this._loopCount;const a=i===vg;if(e===0)return r===-1?n:a&&(r&1)===1?t-n:n;if(i===mg){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){const o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=n;if(a&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=Zr,n.endingEnd=Zr):(e?n.endingStart=this.zeroSlopeAtStart?Zr:Yr:n.endingStart=Ka,t?n.endingEnd=this.zeroSlopeAtEnd?Zr:Yr:n.endingEnd=Ka)}_scheduleFading(e,t,i){const n=this._mixer,r=n.time;let a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=t,o[1]=r+e,l[1]=i,this}}const Qy=new Float32Array(1);class $y extends Di{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const f=n[u],d=f.name;let p=h[d];if(p!==void 0)++p.referenceCount,a[u]=p;else{if(p=a[u],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,d));continue}const v=t&&t._propertyBindings[u].binding.parsedPath;p=new Tv(gt.create(i,d,v),f.ValueTypeName,f.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,d),a[u]=p}o[u].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=o.actionByRoot,f=(e._localRoot||this._root).uuid;delete u[f],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,r=this._bindings;let a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new Df(new Float32Array(2),new Float32Array(2),1,Qy),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){const n=t||this._root,r=n.uuid;let a=typeof e=="string"?ao.findByName(n,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Ac),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new Av(this,a,t,i);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(e,t){const i=t||this._root,n=i.uuid,r=typeof e=="string"?ao.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const a in i){const o=i[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class Vf{constructor(e){this.value=e}clone(){return new Vf(this.value.clone===void 0?this.value:this.value.clone())}}let e1=0;class t1 extends Di{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:e1++}),this.name="",this.usage=ja,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let i=0,n=t.length;i<n;i++){const r=Array.isArray(t[i])?t[i]:[t[i]];for(let a=0;a<r.length;a++)this.uniforms.push(r[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class n1 extends Lc{constructor(e,t,i=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class i1{constructor(e,t,i,n,r){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=i,this.elementSize=n,this.count=r,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const wp=new rt;class r1{constructor(e,t,i=0,n=1/0){this.ray=new br(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Rc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wp),this}intersectObject(e,t=!0,i=[]){return Lu(e,this,i,t),i.sort(Ep),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)Lu(e[n],this,i,t);return i.sort(Ep),i}}function Ep(s,e){return s.distance-e.distance}function Lu(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)Lu(r[a],e,t,!0)}}class Nu{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class s1{constructor(e=1,t=0,i=0){return this.radius=e,this.theta=t,this.y=i,this}set(e,t,i){return this.radius=e,this.theta=t,this.y=i,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+i*i),this.theta=Math.atan2(e,i),this.y=t,this}clone(){return new this.constructor().copy(this)}}class Gf{constructor(e,t,i,n){Gf.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){const r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}}const Tp=new ye;class a1{constructor(e=new ye(1/0,1/0),t=new ye(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Tp.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tp).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ap=new O,ul=new O;class Cv{constructor(e=new O,t=new O){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){Ap.subVectors(e,this.start),ul.subVectors(this.end,this.start);const i=ul.dot(ul);let r=ul.dot(Ap)/i;return t&&(r=ct(r,0,1)),r}closestPointToPoint(e,t,i){const n=this.closestPointToPointParameter(e,t);return this.delta(i).multiplyScalar(n).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const Cp=new O;class o1 extends vt{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const i=new ht,n=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,h=o/l*Math.PI*2;n.push(Math.cos(c),Math.sin(c),1,Math.cos(h),Math.sin(h),1)}i.setAttribute("position",new Ke(n,3));const r=new wn({fog:!1,toneMapped:!1});this.cone=new Li(i,r),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),Cp.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Cp),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const cr=new O,fl=new rt,eu=new rt;class l1 extends Li{constructor(e){const t=Rv(e),i=new ht,n=[],r=[],a=new Ze(0,0,1),o=new Ze(0,1,0);for(let c=0;c<t.length;c++){const h=t[c];h.parent&&h.parent.isBone&&(n.push(0,0,0),n.push(0,0,0),r.push(a.r,a.g,a.b),r.push(o.r,o.g,o.b))}i.setAttribute("position",new Ke(n,3)),i.setAttribute("color",new Ke(r,3));const l=new wn({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(i,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,i=this.geometry,n=i.getAttribute("position");eu.copy(this.root.matrixWorld).invert();for(let r=0,a=0;r<t.length;r++){const o=t[r];o.parent&&o.parent.isBone&&(fl.multiplyMatrices(eu,o.matrixWorld),cr.setFromMatrixPosition(fl),n.setXYZ(a,cr.x,cr.y,cr.z),fl.multiplyMatrices(eu,o.parent.matrixWorld),cr.setFromMatrixPosition(fl),n.setXYZ(a+1,cr.x,cr.y,cr.z),a+=2)}i.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function Rv(s){const e=[];s.isBone===!0&&e.push(s);for(let t=0;t<s.children.length;t++)e.push.apply(e,Rv(s.children[t]));return e}class c1 extends Ut{constructor(e,t,i){const n=new na(t,4,2),r=new Ui({wireframe:!0,fog:!1,toneMapped:!1});super(n,r),this.light=e,this.color=i,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const h1=new O,Rp=new Ze,Ip=new Ze;class u1 extends vt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="HemisphereLightHelper";const n=new yo(t);n.rotateY(Math.PI*.5),this.material=new Ui({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const r=n.getAttribute("position"),a=new Float32Array(r.count*3);n.setAttribute("color",new At(a,3)),this.add(new Ut(n,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");Rp.copy(this.light.color),Ip.copy(this.light.groundColor);for(let i=0,n=t.count;i<n;i++){const r=i<n/2?Rp:Ip;t.setXYZ(i,r.r,r.g,r.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(h1.setFromMatrixPosition(this.light.matrixWorld).negate())}}class f1 extends Li{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ze(i),n=new Ze(n);const r=t/2,a=e/t,o=e/2,l=[],c=[];for(let f=0,d=0,p=-o;f<=t;f++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=f===r?i:n;v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3,v.toArray(c,d),d+=3}const h=new ht;h.setAttribute("position",new Ke(l,3)),h.setAttribute("color",new Ke(c,3));const u=new wn({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class d1 extends Li{constructor(e=10,t=16,i=8,n=64,r=4473924,a=8947848){r=new Ze(r),a=new Ze(a);const o=[],l=[];if(t>1)for(let u=0;u<t;u++){const f=u/t*(Math.PI*2),d=Math.sin(f)*e,p=Math.cos(f)*e;o.push(0,0,0),o.push(d,0,p);const v=u&1?r:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let u=0;u<i;u++){const f=u&1?r:a,d=e-e/i*u;for(let p=0;p<n;p++){let v=p/n*(Math.PI*2),m=Math.sin(v)*d,g=Math.cos(v)*d;o.push(m,0,g),l.push(f.r,f.g,f.b),v=(p+1)/n*(Math.PI*2),m=Math.sin(v)*d,g=Math.cos(v)*d,o.push(m,0,g),l.push(f.r,f.g,f.b)}}const c=new ht;c.setAttribute("position",new Ke(o,3)),c.setAttribute("color",new Ke(l,3));const h=new wn({vertexColors:!0,toneMapped:!1});super(c,h),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const Pp=new O,dl=new O,Dp=new O;class p1 extends vt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new ht;n.setAttribute("position",new Ke([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const r=new wn({fog:!1,toneMapped:!1});this.lightPlane=new xr(n,r),this.add(this.lightPlane),n=new ht,n.setAttribute("position",new Ke([0,0,0,0,0,1],3)),this.targetLine=new xr(n,r),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),Pp.setFromMatrixPosition(this.light.matrixWorld),dl.setFromMatrixPosition(this.light.target.matrixWorld),Dp.subVectors(dl,Pp),this.lightPlane.lookAt(dl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(dl),this.targetLine.scale.z=Dp.length()}}const pl=new O,kt=new Pc;class m1 extends Li{constructor(e){const t=new ht,i=new wn({color:16777215,vertexColors:!0,toneMapped:!1}),n=[],r=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){n.push(0,0,0),r.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(n.length/3-1)}t.setAttribute("position",new Ke(n,3)),t.setAttribute("color",new Ke(r,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Ze(16755200),h=new Ze(16711680),u=new Ze(43775),f=new Ze(16777215),d=new Ze(3355443);this.setColors(c,h,u,f,d)}setColors(e,t,i,n,r){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,n.r,n.g,n.b),o.setXYZ(39,n.r,n.g,n.b),o.setXYZ(40,r.r,r.g,r.b),o.setXYZ(41,r.r,r.g,r.b),o.setXYZ(42,r.r,r.g,r.b),o.setXYZ(43,r.r,r.g,r.b),o.setXYZ(44,r.r,r.g,r.b),o.setXYZ(45,r.r,r.g,r.b),o.setXYZ(46,r.r,r.g,r.b),o.setXYZ(47,r.r,r.g,r.b),o.setXYZ(48,r.r,r.g,r.b),o.setXYZ(49,r.r,r.g,r.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,i=1,n=1;kt.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Vt("c",t,e,kt,0,0,-1),Vt("t",t,e,kt,0,0,1),Vt("n1",t,e,kt,-i,-n,-1),Vt("n2",t,e,kt,i,-n,-1),Vt("n3",t,e,kt,-i,n,-1),Vt("n4",t,e,kt,i,n,-1),Vt("f1",t,e,kt,-i,-n,1),Vt("f2",t,e,kt,i,-n,1),Vt("f3",t,e,kt,-i,n,1),Vt("f4",t,e,kt,i,n,1),Vt("u1",t,e,kt,i*.7,n*1.1,-1),Vt("u2",t,e,kt,-i*.7,n*1.1,-1),Vt("u3",t,e,kt,0,n*2,-1),Vt("cf1",t,e,kt,-i,0,1),Vt("cf2",t,e,kt,i,0,1),Vt("cf3",t,e,kt,0,-n,1),Vt("cf4",t,e,kt,0,n,1),Vt("cn1",t,e,kt,-i,0,-1),Vt("cn2",t,e,kt,i,0,-1),Vt("cn3",t,e,kt,0,-n,-1),Vt("cn4",t,e,kt,0,n,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Vt(s,e,t,i,n,r,a){pl.set(n,r,a).unproject(i);const o=e[s];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,h=o.length;c<h;c++)l.setXYZ(o[c],pl.x,pl.y,pl.z)}}const ml=new Zt;class g1 extends Li{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=new Float32Array(8*3),r=new ht;r.setIndex(new At(i,1)),r.setAttribute("position",new At(n,3)),super(r,new wn({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&ml.setFromObject(this.object),ml.isEmpty())return;const t=ml.min,i=ml.max,n=this.geometry.attributes.position,r=n.array;r[0]=i.x,r[1]=i.y,r[2]=i.z,r[3]=t.x,r[4]=i.y,r[5]=i.z,r[6]=t.x,r[7]=t.y,r[8]=i.z,r[9]=i.x,r[10]=t.y,r[11]=i.z,r[12]=i.x,r[13]=i.y,r[14]=t.z,r[15]=t.x,r[16]=i.y,r[17]=t.z,r[18]=t.x,r[19]=t.y,r[20]=t.z,r[21]=i.x,r[22]=t.y,r[23]=t.z,n.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class v1 extends Li{constructor(e,t=16776960){const i=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),n=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ht;r.setIndex(new At(i,1)),r.setAttribute("position",new Ke(n,3)),super(r,new wn({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class _1 extends xr{constructor(e,t=1,i=16776960){const n=i,r=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new ht;a.setAttribute("position",new Ke(r,3)),a.computeBoundingSphere(),super(a,new wn({color:n,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new ht;l.setAttribute("position",new Ke(o,3)),l.computeBoundingSphere(),this.add(new Ut(l,new Ui({color:n,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const Up=new O;let gl,tu;class x1 extends vt{constructor(e=new O(0,0,1),t=new O(0,0,0),i=1,n=16776960,r=i*.2,a=r*.2){super(),this.type="ArrowHelper",gl===void 0&&(gl=new ht,gl.setAttribute("position",new Ke([0,0,0,0,1,0],3)),tu=new ta(0,.5,1,5,1),tu.translate(0,-.5,0)),this.position.copy(t),this.line=new xr(gl,new wn({color:n,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ut(tu,new Ui({color:n,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(i,r,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{Up.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(Up,t)}}setLength(e,t=e*.2,i=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(i,t,i),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class y1 extends Li{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new ht;n.setAttribute("position",new Ke(t,3)),n.setAttribute("color",new Ke(i,3));const r=new wn({vertexColors:!0,toneMapped:!1});super(n,r),this.type="AxesHelper"}setColors(e,t,i){const n=new Ze,r=this.geometry.attributes.color.array;return n.set(e),n.toArray(r,0),n.toArray(r,3),n.set(t),n.toArray(r,6),n.toArray(r,9),n.set(i),n.toArray(r,12),n.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class b1{constructor(){this.type="ShapePath",this.color=new Ze,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new eo,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,n){return this.currentPath.quadraticCurveTo(e,t,i,n),this}bezierCurveTo(e,t,i,n,r,a){return this.currentPath.bezierCurveTo(e,t,i,n,r,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(g){const y=[];for(let x=0,_=g.length;x<_;x++){const C=g[x],T=new is;T.curves=C.curves,y.push(T)}return y}function i(g,y){const x=y.length;let _=!1;for(let C=x-1,T=0;T<x;C=T++){let A=y[C],E=y[T],w=E.x-A.x,M=E.y-A.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(A=y[T],w=-w,E=y[C],M=-M),g.y<A.y||g.y>E.y)continue;if(g.y===A.y){if(g.x===A.x)return!0}else{const L=M*(g.x-A.x)-w*(g.y-A.y);if(L===0)return!0;if(L<0)continue;_=!_}}else{if(g.y!==A.y)continue;if(E.x<=g.x&&g.x<=A.x||A.x<=g.x&&g.x<=E.x)return!0}}return _}const n=Ai.isClockWise,r=this.subPaths;if(r.length===0)return[];let a,o,l;const c=[];if(r.length===1)return o=r[0],l=new is,l.curves=o.curves,c.push(l),c;let h=!n(r[0].getPoints());h=e?!h:h;const u=[],f=[];let d=[],p=0,v;f[p]=void 0,d[p]=[];for(let g=0,y=r.length;g<y;g++)o=r[g],v=o.getPoints(),a=n(v),a=e?!a:a,a?(!h&&f[p]&&p++,f[p]={s:new is,p:v},f[p].s.curves=o.curves,h&&p++,d[p]=[]):d[p].push({h:o,p:v[0]});if(!f[0])return t(r);if(f.length>1){let g=!1,y=0;for(let x=0,_=f.length;x<_;x++)u[x]=[];for(let x=0,_=f.length;x<_;x++){const C=d[x];for(let T=0;T<C.length;T++){const A=C[T];let E=!0;for(let w=0;w<f.length;w++)i(A.p,f[w].p)&&(x!==w&&y++,E?(E=!1,u[w].push(A)):g=!0);E&&u[x].push(A)}}y>0&&g===!1&&(d=u)}let m;for(let g=0,y=f.length;g<y;g++){l=f[g].s,c.push(l),m=d[g];for(let x=0,_=m.length;x<_;x++)l.holes.push(m[x].h)}return c}}class Iv extends Di{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function S1(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2):(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0),s}function M1(s,e){const t=s.image&&s.image.width?s.image.width/s.image.height:1;return t>e?(s.repeat.x=e/t,s.repeat.y=1,s.offset.x=(1-s.repeat.x)/2,s.offset.y=0):(s.repeat.x=1,s.repeat.y=t/e,s.offset.x=0,s.offset.y=(1-s.repeat.y)/2),s}function w1(s){return s.repeat.x=1,s.repeat.y=1,s.offset.x=0,s.offset.y=0,s}function Fu(s,e,t,i){const n=E1(i);switch(t){case af:return s*e;case lf:return s*e;case cf:return s*e*2;case mo:return s*e/n.components*n.byteLength;case go:return s*e/n.components*n.byteLength;case hf:return s*e*2/n.components*n.byteLength;case Ec:return s*e*2/n.components*n.byteLength;case of:return s*e*3/n.components*n.byteLength;case fn:return s*e*4/n.components*n.byteLength;case Tc:return s*e*4/n.components*n.byteLength;case Da:case Ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case La:case Na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Wl:return Math.max(s,16)*Math.max(e,8)/4;case Vl:case Hl:return Math.max(s,8)*Math.max(e,8)/2;case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $l:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ec:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case tc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case nc:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ic:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case rc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case sc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case oc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fa:case lc:case cc:return Math.ceil(s/4)*Math.ceil(e/4)*16;case uf:case hc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case uc:case fc:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function E1(s){switch(s){case Ci:case nf:return{byteLength:1,components:1};case js:case rf:case Ln:return{byteLength:2,components:1};case Mc:case wc:return{byteLength:2,components:4};case ji:case Sc:case Yt:return{byteLength:4,components:1};case sf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}const T1={contain:S1,cover:M1,fill:w1,getByteLength:Fu};class A1 extends mi{constructor(e=1,t=1,i=1,n={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...n,count:i}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Pv(){let s=null,e=!1,t=null,i=null;function n(r,a){t(r,a),i=s.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function C1(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=s.createBuffer();s.bindBuffer(l,f),s.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=s.SHORT;else if(c instanceof Uint32Array)d=s.UNSIGNED_INT;else if(c instanceof Int32Array)d=s.INT;else if(c instanceof Int8Array)d=s.BYTE;else if(c instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,o),u.length===0)s.bufferSubData(c,0,h);else{u.sort((d,p)=>d.start-p.start);let f=0;for(let d=1;d<u.length;d++){const p=u[f],v=u[d];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,u[f]=v)}u.length=f+1;for(let d=0,p=u.length;d<p;d++){const v=u[d];s.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:r,update:a}}var R1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,I1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,P1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,D1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,L1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,F1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,G1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,H1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,q1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Q1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,bb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ab=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,fS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,dS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_S=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,SS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,MS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,AS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,US=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,NS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,OS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ZS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,JS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$S=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,iM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,at={alphahash_fragment:R1,alphahash_pars_fragment:I1,alphamap_fragment:P1,alphamap_pars_fragment:D1,alphatest_fragment:U1,alphatest_pars_fragment:L1,aomap_fragment:N1,aomap_pars_fragment:F1,batching_pars_vertex:O1,batching_vertex:B1,begin_vertex:k1,beginnormal_vertex:z1,bsdfs:V1,iridescence_fragment:G1,bumpmap_pars_fragment:H1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:Z1,color_fragment:q1,color_pars_fragment:K1,color_pars_vertex:J1,color_vertex:j1,common:Q1,cube_uv_reflection_fragment:$1,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:rb,colorspace_fragment:sb,colorspace_pars_fragment:ab,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:hb,envmap_physical_pars_fragment:bb,envmap_vertex:ub,fog_vertex:fb,fog_pars_vertex:db,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:vb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:xb,lights_pars_begin:yb,lights_toon_fragment:Sb,lights_toon_pars_fragment:Mb,lights_phong_fragment:wb,lights_phong_pars_fragment:Eb,lights_physical_fragment:Tb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Cb,lights_fragment_maps:Rb,lights_fragment_end:Ib,logdepthbuf_fragment:Pb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Lb,map_fragment:Nb,map_pars_fragment:Fb,map_particle_fragment:Ob,map_particle_pars_fragment:Bb,metalnessmap_fragment:kb,metalnessmap_pars_fragment:zb,morphinstance_vertex:Vb,morphcolor_vertex:Gb,morphnormal_vertex:Hb,morphtarget_pars_vertex:Wb,morphtarget_vertex:Xb,normal_fragment_begin:Yb,normal_fragment_maps:Zb,normal_pars_fragment:qb,normal_pars_vertex:Kb,normal_vertex:Jb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:aS,dithering_pars_fragment:oS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:hS,shadowmap_pars_vertex:uS,shadowmap_vertex:fS,shadowmask_pars_fragment:dS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:vS,specularmap_fragment:_S,specularmap_pars_fragment:xS,tonemapping_fragment:yS,tonemapping_pars_fragment:bS,transmission_fragment:SS,transmission_pars_fragment:MS,uv_pars_fragment:wS,uv_pars_vertex:ES,uv_vertex:TS,worldpos_vertex:AS,background_vert:CS,background_frag:RS,backgroundCube_vert:IS,backgroundCube_frag:PS,cube_vert:DS,cube_frag:US,depth_vert:LS,depth_frag:NS,distanceRGBA_vert:FS,distanceRGBA_frag:OS,equirect_vert:BS,equirect_frag:kS,linedashed_vert:zS,linedashed_frag:VS,meshbasic_vert:GS,meshbasic_frag:HS,meshlambert_vert:WS,meshlambert_frag:XS,meshmatcap_vert:YS,meshmatcap_frag:ZS,meshnormal_vert:qS,meshnormal_frag:KS,meshphong_vert:JS,meshphong_frag:jS,meshphysical_vert:QS,meshphysical_frag:$S,meshtoon_vert:eM,meshtoon_frag:tM,points_vert:nM,points_frag:iM,shadow_vert:rM,shadow_frag:sM,sprite_vert:aM,sprite_frag:oM},We={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},ei={basic:{uniforms:vn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:vn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ze(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:vn([We.common,We.specularmap,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.fog,We.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:vn([We.common,We.envmap,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.roughnessmap,We.metalnessmap,We.fog,We.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:vn([We.common,We.aomap,We.lightmap,We.emissivemap,We.bumpmap,We.normalmap,We.displacementmap,We.gradientmap,We.fog,We.lights,{emissive:{value:new Ze(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:vn([We.common,We.bumpmap,We.normalmap,We.displacementmap,We.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:vn([We.points,We.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:vn([We.common,We.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:vn([We.common,We.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:vn([We.common,We.bumpmap,We.normalmap,We.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:vn([We.sprite,We.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:vn([We.common,We.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:vn([We.lights,We.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};ei.physical={uniforms:vn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const vl={r:0,b:0,g:0},Or=new Xn,lM=new rt;function cM(s,e,t,i,n,r,a){const o=new Ze(0);let l=r===!0?0:1,c,h,u=null,f=0,d=null;function p(x){let _=x.isScene===!0?x.background:null;return _&&_.isTexture&&(_=(x.backgroundBlurriness>0?t:e).get(_)),_}function v(x){let _=!1;const C=p(x);C===null?g(o,l):C&&C.isColor&&(g(C,1),_=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(s.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,_){const C=p(_);C&&(C.isCubeTexture||C.mapping===ea)?(h===void 0&&(h=new Ut(new ds(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:$s(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,A,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Or.copy(_.backgroundRotation),Or.x*=-1,Or.y*=-1,Or.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Or.y*=-1,Or.z*=-1),h.material.uniforms.envMap.value=C,h.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lM.makeRotationFromEuler(Or)),h.material.toneMapped=mt.getTransfer(C.colorSpace)!==bt,(u!==C||f!==C.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=C,f=C.version,d=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Ut(new $i(2,2),new gi({name:"BackgroundMaterial",uniforms:$s(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=mt.getTransfer(C.colorSpace)!==bt,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(u!==C||f!==C.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,u=C,f=C.version,d=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,_){x.getRGB(vl,Dg(s)),i.buffers.color.setClear(vl.r,vl.g,vl.b,_,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(x,_=1){o.set(x),l=_,g(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(o,l)},render:v,addToRenderList:m,dispose:y}}function hM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=f(null);let r=n,a=!1;function o(M,L,D,z,B){let K=!1;const H=u(z,D,L);r!==H&&(r=H,c(r.object)),K=d(M,z,D,B),K&&p(M,z,D,B),B!==null&&e.update(B,s.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,_(M,L,D,z),B!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,L,D){const z=D.wireframe===!0;let B=i[M.id];B===void 0&&(B={},i[M.id]=B);let K=B[L.id];K===void 0&&(K={},B[L.id]=K);let H=K[z];return H===void 0&&(H=f(l()),K[z]=H),H}function f(M){const L=[],D=[],z=[];for(let B=0;B<t;B++)L[B]=0,D[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:D,attributeDivisors:z,object:M,attributes:{},index:null}}function d(M,L,D,z){const B=r.attributes,K=L.attributes;let H=0;const ue=D.getAttributes();for(const ee in ue)if(ue[ee].location>=0){const q=B[ee];let V=K[ee];if(V===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(V=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(V=M.instanceColor)),q===void 0||q.attribute!==V||V&&q.data!==V.data)return!0;H++}return r.attributesNum!==H||r.index!==z}function p(M,L,D,z){const B={},K=L.attributes;let H=0;const ue=D.getAttributes();for(const ee in ue)if(ue[ee].location>=0){let q=K[ee];q===void 0&&(ee==="instanceMatrix"&&M.instanceMatrix&&(q=M.instanceMatrix),ee==="instanceColor"&&M.instanceColor&&(q=M.instanceColor));const V={};V.attribute=q,q&&q.data&&(V.data=q.data),B[ee]=V,H++}r.attributes=B,r.attributesNum=H,r.index=z}function v(){const M=r.newAttributes;for(let L=0,D=M.length;L<D;L++)M[L]=0}function m(M){g(M,0)}function g(M,L){const D=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;D[M]=1,z[M]===0&&(s.enableVertexAttribArray(M),z[M]=1),B[M]!==L&&(s.vertexAttribDivisor(M,L),B[M]=L)}function y(){const M=r.newAttributes,L=r.enabledAttributes;for(let D=0,z=L.length;D<z;D++)L[D]!==M[D]&&(s.disableVertexAttribArray(D),L[D]=0)}function x(M,L,D,z,B,K,H){H===!0?s.vertexAttribIPointer(M,L,D,B,K):s.vertexAttribPointer(M,L,D,z,B,K)}function _(M,L,D,z){v();const B=z.attributes,K=D.getAttributes(),H=L.defaultAttributeValues;for(const ue in K){const ee=K[ue];if(ee.location>=0){let J=B[ue];if(J===void 0&&(ue==="instanceMatrix"&&M.instanceMatrix&&(J=M.instanceMatrix),ue==="instanceColor"&&M.instanceColor&&(J=M.instanceColor)),J!==void 0){const q=J.normalized,V=J.itemSize,Y=e.get(J);if(Y===void 0)continue;const ie=Y.buffer,W=Y.type,X=Y.bytesPerElement,te=W===s.INT||W===s.UNSIGNED_INT||J.gpuType===Sc;if(J.isInterleavedBufferAttribute){const Q=J.data,fe=Q.stride,Ee=J.offset;if(Q.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ee.locationSize;Ae++)g(ee.location+Ae,Q.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Ae=0;Ae<ee.locationSize;Ae++)m(ee.location+Ae);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Ae=0;Ae<ee.locationSize;Ae++)x(ee.location+Ae,V/ee.locationSize,W,q,fe*X,(Ee+V/ee.locationSize*Ae)*X,te)}else{if(J.isInstancedBufferAttribute){for(let Q=0;Q<ee.locationSize;Q++)g(ee.location+Q,J.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<ee.locationSize;Q++)m(ee.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ie);for(let Q=0;Q<ee.locationSize;Q++)x(ee.location+Q,V/ee.locationSize,W,q,V*X,V/ee.locationSize*Q*X,te)}}else if(H!==void 0){const q=H[ue];if(q!==void 0)switch(q.length){case 2:s.vertexAttrib2fv(ee.location,q);break;case 3:s.vertexAttrib3fv(ee.location,q);break;case 4:s.vertexAttrib4fv(ee.location,q);break;default:s.vertexAttrib1fv(ee.location,q)}}}}y()}function C(){E();for(const M in i){const L=i[M];for(const D in L){const z=L[D];for(const B in z)h(z[B].object),delete z[B];delete L[D]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const D in L){const z=L[D];for(const B in z)h(z[B].object),delete z[B];delete L[D]}delete i[M.id]}function A(M){for(const L in i){const D=i[L];if(D[M.id]===void 0)continue;const z=D[M.id];for(const B in z)h(z[B].object),delete z[B];delete D[M.id]}}function E(){w(),a=!0,r!==n&&(r=n,c(r.object))}function w(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:E,resetDefaultState:w,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function uM(s,e,t){let i;function n(c){i=c}function r(c,h){s.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let d=0;for(let p=0;p<u;p++)d+=h[p];t.update(d,i,1)}function l(c,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)a(c[p],h[p],f[p]);else{d.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v]*f[v];t.update(p,i,1)}}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function fM(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==fn&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const E=A===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ci&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Yt&&!E)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),y=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),x=s.getParameter(s.MAX_VARYING_VECTORS),_=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function dM(s){const e=this;let t=null,i=0,n=!1,r=!1;const a=new $n,o=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||i!==0||n;return n=f,i=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,g=s.get(u);if(!n||p===null||p.length===0||r&&!m)r?h(null):c();else{const y=r?0:i,x=y*4;let _=g.clippingState||null;l.value=_,_=h(p,f,x,d);for(let C=0;C!==x;++C)_[C]=t[C];g.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,f,d,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const g=d+v*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<g)&&(m=new Float32Array(g));for(let x=0,_=d;x!==v;++x,_+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function pM(s){let e=new WeakMap;function t(a,o){return o===Js?a.mapping=Ji:o===Xa&&(a.mapping=_r),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Js||o===Xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lg(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}const Ws=4,Lp=[.125,.215,.35,.446,.526,.582],Wr=20,nu=new Mo,Np=new Ze;let iu=null,ru=0,su=0,au=!1;const Gr=(1+Math.sqrt(5))/2,Os=1/Gr,Fp=[new O(-Gr,Os,0),new O(Gr,Os,0),new O(-Os,0,Gr),new O(Os,0,Gr),new O(0,Gr,-Os),new O(0,Gr,Os),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Ou{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,n,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,ru,su),this._renderer.xr.enabled=au,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Ln,format:fn,colorSpace:Ri,depthBuffer:!1},n=Op(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Op(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mM(r)),this._blurMaterial=gM(r,e,t)}return n}_compileMaterial(e){const t=new Ut(this._lodPlanes[0],e);this._renderer.compile(t,nu)}_sceneToCubeUV(e,t,i,n){const o=new en(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Np),h.toneMapping=Zi,h.autoClear=!1;const d=new Ui({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),p=new Ut(new ds,d);let v=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,v=!0):(d.color.copy(Np),v=!0);for(let g=0;g<6;g++){const y=g%3;y===0?(o.up.set(0,l[g],0),o.lookAt(c[g],0,0)):y===1?(o.up.set(0,0,l[g]),o.lookAt(0,c[g],0)):(o.up.set(0,l[g],0),o.lookAt(0,0,c[g]));const x=this._cubeSize;_l(n,y*x,g>2?x:0,x,x),h.setRenderTarget(n),v&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ji||e.mapping===_r;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bp());const r=n?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;_l(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,nu)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let r=1;r<n;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fp[(n-r-1)%Fp.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,n,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",r),this._halfBlur(a,e,i,i,n,"longitudinal",r)}_halfBlur(e,t,i,n,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ut(this._lodPlanes[n],c),f=c.uniforms,d=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wr-1),v=r/p,m=isFinite(r)?1+Math.floor(h*v):Wr;m>Wr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Wr}`);const g=[];let y=0;for(let A=0;A<Wr;++A){const E=A/v,w=Math.exp(-E*E/2);g.push(w),A===0?y+=w:A<m&&(y+=2*w)}for(let A=0;A<g.length;A++)g[A]=g[A]/y;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-i;const _=this._sizeLods[n],C=3*_*(n>x-Ws?n-x+Ws:0),T=4*(this._cubeSize-_);_l(t,C,T,3*_,2*_),l.setRenderTarget(t),l.render(u,nu)}}function mM(s){const e=[],t=[],i=[];let n=s;const r=s-Ws+1+Lp.length;for(let a=0;a<r;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>s-Ws?l=Lp[a-s+Ws-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,p=6,v=3,m=2,g=1,y=new Float32Array(v*p*d),x=new Float32Array(m*p*d),_=new Float32Array(g*p*d);for(let T=0;T<d;T++){const A=T%3*2/3-1,E=T>2?0:-1,w=[A,E,0,A+2/3,E,0,A+2/3,E+1,0,A,E,0,A+2/3,E+1,0,A,E+1,0];y.set(w,v*p*T),x.set(f,m*p*T);const M=[T,T,T,T,T,T];_.set(M,g*p*T)}const C=new ht;C.setAttribute("position",new At(y,v)),C.setAttribute("uv",new At(x,m)),C.setAttribute("faceIndex",new At(_,g)),e.push(C),n>Ws&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Op(s,e,t){const i=new mi(s,e,t);return i.texture.mapping=ea,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _l(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function gM(s,e,t){const i=new Float32Array(Wr),n=new O(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:Wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Bp(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function kp(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yi,depthTest:!1,depthWrite:!1})}function Hf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function vM(s){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Js||l===Xa,h=l===Ji||l===_r;if(c||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ou(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return c&&d&&d.height>0||h&&d&&n(d)?(t===null&&(t=new Ou(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function _M(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=s.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&ks("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function xM(s,e,t,i){const n={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete n[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return n[f.id]===!0||(f.addEventListener("dispose",a),n[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const d in f)e.update(f[d],s.ARRAY_BUFFER)}function c(u){const f=[],d=u.index,p=u.attributes.position;let v=0;if(d!==null){const y=d.array;v=d.version;for(let x=0,_=y.length;x<_;x+=3){const C=y[x+0],T=y[x+1],A=y[x+2];f.push(C,T,T,A,A,C)}}else if(p!==void 0){const y=p.array;v=p.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const C=x+0,T=x+1,A=x+2;f.push(C,T,T,A,A,C)}}else return;const m=new(Ag(f)?_f:vf)(f,1);m.version=v;const g=r.get(u);g&&e.remove(g),r.set(u,m)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function yM(s,e,t){let i;function n(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){s.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,p){p!==0&&(s.drawElementsInstanced(i,d,r,f*a,p),t.update(d,i,p))}function h(f,d,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,p);let m=0;for(let g=0;g<p;g++)m+=d[g];t.update(m,i,1)}function u(f,d,p,v){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/a,d[g],v[g]);else{m.multiDrawElementsInstancedWEBGL(i,d,0,r,f,0,v,0,p);let g=0;for(let y=0;y<p;y++)g+=d[y]*v[y];t.update(g,i,1)}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function bM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function SM(s,e,t){const i=new WeakMap,n=new ft;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==u){let w=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",w)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;d===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*C*4*u),A=new Cc(T,_,C,u);A.type=Yt,A.needsUpdate=!0;const E=x*4;for(let M=0;M<u;M++){const L=m[M],D=g[M],z=y[M],B=_*C*4*M;for(let K=0;K<L.count;K++){const H=K*E;d===!0&&(n.fromBufferAttribute(L,K),T[B+H+0]=n.x,T[B+H+1]=n.y,T[B+H+2]=n.z,T[B+H+3]=0),p===!0&&(n.fromBufferAttribute(D,K),T[B+H+4]=n.x,T[B+H+5]=n.y,T[B+H+6]=n.z,T[B+H+7]=0),v===!0&&(n.fromBufferAttribute(z,K),T[B+H+8]=n.x,T[B+H+9]=n.y,T[B+H+10]=n.z,T[B+H+11]=z.itemSize===4?n.w:1)}}f={count:u,texture:A,size:new ye(_,C)},i.set(o,f),o.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];const p=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function MM(s,e,t,i){let n=new WeakMap;function r(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;n.get(f)!==c&&(f.update(),n.set(f,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}const Dv=new Bt,zp=new Mf(1,1),Uv=new Cc,Lv=new gf,Nv=new vo,Vp=[],Gp=[],Hp=new Float32Array(16),Wp=new Float32Array(9),Xp=new Float32Array(4);function ia(s,e,t){const i=s[0];if(i<=0||i>0)return s;const n=e*t;let r=Vp[n];if(r===void 0&&(r=new Float32Array(n),Vp[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function jt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function eh(s,e){let t=Gp[e];t===void 0&&(t=new Int32Array(e),Gp[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function wM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),jt(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),jt(t,e)}}function AM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),jt(t,e)}}function CM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;Xp.set(i),s.uniformMatrix2fv(this.addr,!1,Xp),jt(t,i)}}function RM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;Wp.set(i),s.uniformMatrix3fv(this.addr,!1,Wp),jt(t,i)}}function IM(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,i))return;Hp.set(i),s.uniformMatrix4fv(this.addr,!1,Hp),jt(t,i)}}function PM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function DM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),jt(t,e)}}function UM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),jt(t,e)}}function LM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),jt(t,e)}}function NM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function FM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),jt(t,e)}}function OM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),jt(t,e)}}function BM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),jt(t,e)}}function kM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(zp.compareFunction=pf,r=zp):r=Dv,t.setTexture2D(e||r,n)}function zM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Lv,n)}function VM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Nv,n)}function GM(s,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Uv,n)}function HM(s){switch(s){case 5126:return wM;case 35664:return EM;case 35665:return TM;case 35666:return AM;case 35674:return CM;case 35675:return RM;case 35676:return IM;case 5124:case 35670:return PM;case 35667:case 35671:return DM;case 35668:case 35672:return UM;case 35669:case 35673:return LM;case 5125:return NM;case 36294:return FM;case 36295:return OM;case 36296:return BM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return VM;case 36289:case 36303:case 36311:case 36292:return GM}}function WM(s,e){s.uniform1fv(this.addr,e)}function XM(s,e){const t=ia(e,this.size,2);s.uniform2fv(this.addr,t)}function YM(s,e){const t=ia(e,this.size,3);s.uniform3fv(this.addr,t)}function ZM(s,e){const t=ia(e,this.size,4);s.uniform4fv(this.addr,t)}function qM(s,e){const t=ia(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function KM(s,e){const t=ia(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function JM(s,e){const t=ia(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function jM(s,e){s.uniform1iv(this.addr,e)}function QM(s,e){s.uniform2iv(this.addr,e)}function $M(s,e){s.uniform3iv(this.addr,e)}function ew(s,e){s.uniform4iv(this.addr,e)}function tw(s,e){s.uniform1uiv(this.addr,e)}function nw(s,e){s.uniform2uiv(this.addr,e)}function iw(s,e){s.uniform3uiv(this.addr,e)}function rw(s,e){s.uniform4uiv(this.addr,e)}function sw(s,e,t){const i=this.cache,n=e.length,r=eh(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||Dv,r[a])}function aw(s,e,t){const i=this.cache,n=e.length,r=eh(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Lv,r[a])}function ow(s,e,t){const i=this.cache,n=e.length,r=eh(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Nv,r[a])}function lw(s,e,t){const i=this.cache,n=e.length,r=eh(t,n);Jt(i,r)||(s.uniform1iv(this.addr,r),jt(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Uv,r[a])}function cw(s){switch(s){case 5126:return WM;case 35664:return XM;case 35665:return YM;case 35666:return ZM;case 35674:return qM;case 35675:return KM;case 35676:return JM;case 5124:case 35670:return jM;case 35667:case 35671:return QM;case 35668:case 35672:return $M;case 35669:case 35673:return ew;case 5125:return tw;case 36294:return nw;case 36295:return iw;case 36296:return rw;case 35678:case 36198:case 36298:case 36306:case 35682:return sw;case 35679:case 36299:case 36307:return aw;case 35680:case 36300:case 36308:case 36293:return ow;case 36289:case 36303:case 36311:case 36292:return lw}}class hw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=HM(t.type)}}class uw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=cw(t.type)}}class fw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let r=0,a=n.length;r!==a;++r){const o=n[r];o.setValue(e,t[o.id],i)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function Yp(s,e){s.seq.push(e),s.map[e.id]=e}function dw(s,e,t){const i=s.name,n=i.length;for(ou.lastIndex=0;;){const r=ou.exec(i),a=ou.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Yp(t,c===void 0?new hw(o,s,e):new uw(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new fw(o),Yp(t,u)),t=u}}}class Cl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const r=e.getActiveUniform(t,n),a=e.getUniformLocation(t,r.name);dw(r,a,this)}}setValue(e,t,i,n){const r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,r=e.length;n!==r;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function Zp(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const pw=37297;let mw=0;function gw(s,e){const t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const qp=new lt;function vw(s){mt._getMatrix(qp,mt.workingColorSpace,s);const e=`mat3( ${qp.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(s)){case Ja:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Kp(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),n=s.getShaderInfoLog(e).trim();if(i&&n==="")return"";const r=/ERROR: 0:(\d+)/.exec(n);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+n+`

`+gw(s.getShaderSource(e),a)}else return n}function _w(s,e){const t=vw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function xw(s,e){let t;switch(e){case lg:t="Linear";break;case cg:t="Reinhard";break;case hg:t="Cineon";break;case ug:t="ACESFilmic";break;case zl:t="AgX";break;case dg:t="Neutral";break;case fg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xl=new O;function yw(){mt.getLuminanceCoefficients(xl);const s=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ra).join(`
`)}function Sw(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Mw(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const r=s.getActiveAttrib(e,n),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ra(s){return s!==""}function Jp(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jp(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ww=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(s){return s.replace(ww,Tw)}const Ew=new Map;function Tw(s,e){let t=at[e];if(t===void 0){const i=Ew.get(e);if(i!==void 0)t=at[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Bu(t)}const Aw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qp(s){return s.replace(Aw,Cw)}function Cw(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function $p(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Rw(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ef?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ia?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===bi&&(e="SHADOWMAP_TYPE_VSM"),e}function Iw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ji:case _r:e="ENVMAP_TYPE_CUBE";break;case ea:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Pw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case _r:e="ENVMAP_MODE_REFRACTION";break}return e}function Dw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case po:e="ENVMAP_BLENDING_MULTIPLY";break;case ag:e="ENVMAP_BLENDING_MIX";break;case og:e="ENVMAP_BLENDING_ADD";break}return e}function Uw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Lw(s,e,t,i){const n=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Rw(t),c=Iw(t),h=Pw(t),u=Dw(t),f=Uw(t),d=bw(t),p=Sw(r),v=n.createProgram();let m,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ra).join(`
`),g.length>0&&(g+=`
`)):(m=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ra).join(`
`),g=[$p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?at.tonemapping_pars_fragment:"",t.toneMapping!==Zi?xw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,_w("linearToOutputTexel",t.outputColorSpace),yw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ra).join(`
`)),a=Bu(a),a=Jp(a,t),a=jp(a,t),o=Bu(o),o=Jp(o,t),o=jp(o,t),a=Qp(a),o=Qp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const x=y+m+a,_=y+g+o,C=Zp(n,n.VERTEX_SHADER,x),T=Zp(n,n.FRAGMENT_SHADER,_);n.attachShader(v,C),n.attachShader(v,T),t.index0AttributeName!==void 0?n.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(v,0,"position"),n.linkProgram(v);function A(L){if(s.debug.checkShaderErrors){const D=n.getProgramInfoLog(v).trim(),z=n.getShaderInfoLog(C).trim(),B=n.getShaderInfoLog(T).trim();let K=!0,H=!0;if(n.getProgramParameter(v,n.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,v,C,T);else{const ue=Kp(n,C,"vertex"),ee=Kp(n,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(v,n.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+D+`
`+ue+`
`+ee)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(z===""||B==="")&&(H=!1);H&&(L.diagnostics={runnable:K,programLog:D,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:g}})}n.deleteShader(C),n.deleteShader(T),E=new Cl(n,v),w=Mw(n,v)}let E;this.getUniforms=function(){return E===void 0&&A(this),E};let w;this.getAttributes=function(){return w===void 0&&A(this),w};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=n.getProgramParameter(v,pw)),M},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=mw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Nw=0;class Fw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ow(e),t.set(e,i)),i}}class Ow{constructor(e){this.id=Nw++,this.code=e,this.usedTimes=0}}function Bw(s,e,t,i,n,r,a){const o=new Rc,l=new Fw,c=new Set,h=[],u=n.logarithmicDepthBuffer,f=n.vertexTextures;let d=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,M,L,D,z){const B=D.fog,K=z.geometry,H=w.isMeshStandardMaterial?D.environment:null,ue=(w.isMeshStandardMaterial?t:e).get(w.envMap||H),ee=ue&&ue.mapping===ea?ue.image.height:null,J=p[w.type];w.precision!==null&&(d=n.getMaxPrecision(w.precision),d!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",d,"instead."));const q=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,V=q!==void 0?q.length:0;let Y=0;K.morphAttributes.position!==void 0&&(Y=1),K.morphAttributes.normal!==void 0&&(Y=2),K.morphAttributes.color!==void 0&&(Y=3);let ie,W,X,te;if(J){const it=ei[J];ie=it.vertexShader,W=it.fragmentShader}else ie=w.vertexShader,W=w.fragmentShader,l.update(w),X=l.getVertexShaderID(w),te=l.getFragmentShaderID(w);const Q=s.getRenderTarget(),fe=s.state.buffers.depth.getReversed(),Ee=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,be=!!w.map,$=!!w.matcap,ge=!!ue,F=!!w.aoMap,Se=!!w.lightMap,pe=!!w.bumpMap,Te=!!w.normalMap,he=!!w.displacementMap,Le=!!w.emissiveMap,_e=!!w.metalnessMap,I=!!w.roughnessMap,R=w.anisotropy>0,Z=w.clearcoat>0,oe=w.dispersion>0,le=w.iridescence>0,me=w.sheen>0,Re=w.transmission>0,ve=R&&!!w.anisotropyMap,Me=Z&&!!w.clearcoatMap,He=Z&&!!w.clearcoatNormalMap,Ie=Z&&!!w.clearcoatRoughnessMap,ze=le&&!!w.iridescenceMap,Fe=le&&!!w.iridescenceThicknessMap,Be=me&&!!w.sheenColorMap,Ce=me&&!!w.sheenRoughnessMap,Je=!!w.specularMap,Xe=!!w.specularColorMap,nt=!!w.specularIntensityMap,j=Re&&!!w.transmissionMap,ne=Re&&!!w.thicknessMap,de=!!w.gradientMap,Pe=!!w.alphaMap,Oe=w.alphaTest>0,Ue=!!w.alphaHash,$e=!!w.extensions;let ot=Zi;w.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(ot=s.toneMapping);const et={shaderID:J,shaderType:w.type,shaderName:w.name,vertexShader:ie,fragmentShader:W,defines:w.defines,customVertexShaderID:X,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:d,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&z.instanceColor!==null,instancingMorph:Ee&&z.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Q===null?s.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Ri,alphaToCoverage:!!w.alphaToCoverage,map:be,matcap:$,envMap:ge,envMapMode:ge&&ue.mapping,envMapCubeUVHeight:ee,aoMap:F,lightMap:Se,bumpMap:pe,normalMap:Te,displacementMap:f&&he,emissiveMap:Le,normalMapObjectSpace:Te&&w.normalMapType===xg,normalMapTangentSpace:Te&&w.normalMapType===yr,metalnessMap:_e,roughnessMap:I,anisotropy:R,anisotropyMap:ve,clearcoat:Z,clearcoatMap:Me,clearcoatNormalMap:He,clearcoatRoughnessMap:Ie,dispersion:oe,iridescence:le,iridescenceMap:ze,iridescenceThicknessMap:Fe,sheen:me,sheenColorMap:Be,sheenRoughnessMap:Ce,specularMap:Je,specularColorMap:Xe,specularIntensityMap:nt,transmission:Re,transmissionMap:j,thicknessMap:ne,gradientMap:de,opaque:w.transparent===!1&&w.blending===es&&w.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Oe,alphaHash:Ue,combine:w.combine,mapUv:be&&v(w.map.channel),aoMapUv:F&&v(w.aoMap.channel),lightMapUv:Se&&v(w.lightMap.channel),bumpMapUv:pe&&v(w.bumpMap.channel),normalMapUv:Te&&v(w.normalMap.channel),displacementMapUv:he&&v(w.displacementMap.channel),emissiveMapUv:Le&&v(w.emissiveMap.channel),metalnessMapUv:_e&&v(w.metalnessMap.channel),roughnessMapUv:I&&v(w.roughnessMap.channel),anisotropyMapUv:ve&&v(w.anisotropyMap.channel),clearcoatMapUv:Me&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:He&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&v(w.sheenRoughnessMap.channel),specularMapUv:Je&&v(w.specularMap.channel),specularColorMapUv:Xe&&v(w.specularColorMap.channel),specularIntensityMapUv:nt&&v(w.specularIntensityMap.channel),transmissionMapUv:j&&v(w.transmissionMap.channel),thicknessMapUv:ne&&v(w.thicknessMap.channel),alphaMapUv:Pe&&v(w.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Te||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(be||Pe),fog:!!B,useFog:w.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:fe,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:Y,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:ot,decodeVideoTexture:be&&w.map.isVideoTexture===!0&&mt.getTransfer(w.map.colorSpace)===bt,decodeVideoTextureEmissive:Le&&w.emissiveMap.isVideoTexture===!0&&mt.getTransfer(w.emissiveMap.colorSpace)===bt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ii,flipSided:w.side===Mn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:$e&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&w.extensions.multiDraw===!0||Ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function g(w){const M=[];if(w.shaderID?M.push(w.shaderID):(M.push(w.customVertexShaderID),M.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)M.push(L),M.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(y(M,w),x(M,w),M.push(s.outputColorSpace)),M.push(w.customProgramCacheKey),M.join()}function y(w,M){w.push(M.precision),w.push(M.outputColorSpace),w.push(M.envMapMode),w.push(M.envMapCubeUVHeight),w.push(M.mapUv),w.push(M.alphaMapUv),w.push(M.lightMapUv),w.push(M.aoMapUv),w.push(M.bumpMapUv),w.push(M.normalMapUv),w.push(M.displacementMapUv),w.push(M.emissiveMapUv),w.push(M.metalnessMapUv),w.push(M.roughnessMapUv),w.push(M.anisotropyMapUv),w.push(M.clearcoatMapUv),w.push(M.clearcoatNormalMapUv),w.push(M.clearcoatRoughnessMapUv),w.push(M.iridescenceMapUv),w.push(M.iridescenceThicknessMapUv),w.push(M.sheenColorMapUv),w.push(M.sheenRoughnessMapUv),w.push(M.specularMapUv),w.push(M.specularColorMapUv),w.push(M.specularIntensityMapUv),w.push(M.transmissionMapUv),w.push(M.thicknessMapUv),w.push(M.combine),w.push(M.fogExp2),w.push(M.sizeAttenuation),w.push(M.morphTargetsCount),w.push(M.morphAttributeCount),w.push(M.numDirLights),w.push(M.numPointLights),w.push(M.numSpotLights),w.push(M.numSpotLightMaps),w.push(M.numHemiLights),w.push(M.numRectAreaLights),w.push(M.numDirLightShadows),w.push(M.numPointLightShadows),w.push(M.numSpotLightShadows),w.push(M.numSpotLightShadowsWithMaps),w.push(M.numLightProbes),w.push(M.shadowMapType),w.push(M.toneMapping),w.push(M.numClippingPlanes),w.push(M.numClipIntersection),w.push(M.depthPacking)}function x(w,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),w.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),w.push(o.mask)}function _(w){const M=p[w.type];let L;if(M){const D=ei[M];L=Ic.clone(D.uniforms)}else L=w.uniforms;return L}function C(w,M){let L;for(let D=0,z=h.length;D<z;D++){const B=h[D];if(B.cacheKey===M){L=B,++L.usedTimes;break}}return L===void 0&&(L=new Lw(s,M,w,r),h.push(L)),L}function T(w){if(--w.usedTimes===0){const M=h.indexOf(w);h[M]=h[h.length-1],h.pop(),w.destroy()}}function A(w){l.remove(w)}function E(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:E}}function kw(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function zw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function em(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tm(){const s=[];let e=0;const t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(u,f,d,p,v,m){let g=s[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},s[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=p,g.renderOrder=u.renderOrder,g.z=v,g.group=m),e++,g}function o(u,f,d,p,v,m){const g=a(u,f,d,p,v,m);d.transmission>0?i.push(g):d.transparent===!0?n.push(g):t.push(g)}function l(u,f,d,p,v,m){const g=a(u,f,d,p,v,m);d.transmission>0?i.unshift(g):d.transparent===!0?n.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||zw),i.length>1&&i.sort(f||em),n.length>1&&n.sort(f||em)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:o,unshift:l,finish:h,sort:c}}function Vw(){let s=new WeakMap;function e(i,n){const r=s.get(i);let a;return r===void 0?(a=new tm,s.set(i,[a])):n>=r.length?(a=new tm,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Gw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new O,color:new Ze};break;case"SpotLight":t={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return s[e.id]=t,t}}}function Hw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ww=0;function Xw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Yw(s){const e=new Gw,t=Hw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const n=new O,r=new rt,a=new rt;function o(c){let h=0,u=0,f=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let d=0,p=0,v=0,m=0,g=0,y=0,x=0,_=0,C=0,T=0,A=0;c.sort(Xw);for(let w=0,M=c.length;w<M;w++){const L=c[w],D=L.color,z=L.intensity,B=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=D.r*z,u+=D.g*z,f+=D.b*z;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],z);A++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ue=L.shadow,ee=t.get(L);ee.shadowIntensity=ue.intensity,ee.shadowBias=ue.bias,ee.shadowNormalBias=ue.normalBias,ee.shadowRadius=ue.radius,ee.shadowMapSize=ue.mapSize,i.directionalShadow[d]=ee,i.directionalShadowMap[d]=K,i.directionalShadowMatrix[d]=L.shadow.matrix,y++}i.directional[d]=H,d++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(D).multiplyScalar(z),H.distance=B,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[v]=H;const ue=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,ue.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[v]=ue.matrix,L.castShadow){const ee=t.get(L);ee.shadowIntensity=ue.intensity,ee.shadowBias=ue.bias,ee.shadowNormalBias=ue.normalBias,ee.shadowRadius=ue.radius,ee.shadowMapSize=ue.mapSize,i.spotShadow[v]=ee,i.spotShadowMap[v]=K,_++}v++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(D).multiplyScalar(z),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const ue=L.shadow,ee=t.get(L);ee.shadowIntensity=ue.intensity,ee.shadowBias=ue.bias,ee.shadowNormalBias=ue.normalBias,ee.shadowRadius=ue.radius,ee.shadowMapSize=ue.mapSize,ee.shadowCameraNear=ue.camera.near,ee.shadowCameraFar=ue.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=L.shadow.matrix,x++}i.point[p]=H,p++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(z),H.groundColor.copy(L.groundColor).multiplyScalar(z),i.hemi[g]=H,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=We.LTC_FLOAT_1,i.rectAreaLTC2=We.LTC_FLOAT_2):(i.rectAreaLTC1=We.LTC_HALF_1,i.rectAreaLTC2=We.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=f;const E=i.hash;(E.directionalLength!==d||E.pointLength!==p||E.spotLength!==v||E.rectAreaLength!==m||E.hemiLength!==g||E.numDirectionalShadows!==y||E.numPointShadows!==x||E.numSpotShadows!==_||E.numSpotMaps!==C||E.numLightProbes!==A)&&(i.directional.length=d,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=_+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,E.directionalLength=d,E.pointLength=p,E.spotLength=v,E.rectAreaLength=m,E.hemiLength=g,E.numDirectionalShadows=y,E.numPointShadows=x,E.numSpotShadows=_,E.numSpotMaps=C,E.numLightProbes=A,i.version=Ww++)}function l(c,h){let u=0,f=0,d=0,p=0,v=0;const m=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){const x=c[g];if(x.isDirectionalLight){const _=i.directional[u];_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),u++}else if(x.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(n),_.direction.transformDirection(m),d++}else if(x.isRectAreaLight){const _=i.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),a.identity(),r.copy(x.matrixWorld),r.premultiply(m),a.extractRotation(r),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const _=i.point[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const _=i.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:i}}function nm(s){const e=new Yw(s),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Zw(s){let e=new WeakMap;function t(n,r=0){const a=e.get(n);let o;return a===void 0?(o=new nm(s),e.set(n,[o])):r>=a.length?(o=new nm(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const qw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Jw(s,e,t){let i=new _o;const n=new ye,r=new ye,a=new ft,o=new jc({depthPacking:df}),l=new Qc,c={},h=t.maxTextureSize,u={[Ki]:Mn,[Mn]:Ki,[ii]:ii},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:qw,fragmentShader:Kw}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const p=new ht;p.setAttribute("position",new At(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ut(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ef;let g=this.type;this.render=function(T,A,E){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const w=s.getRenderTarget(),M=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Yi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const z=g!==bi&&this.type===bi,B=g===bi&&this.type!==bi;for(let K=0,H=T.length;K<H;K++){const ue=T[K],ee=ue.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;n.copy(ee.mapSize);const J=ee.getFrameExtents();if(n.multiply(J),r.copy(ee.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/J.x),n.x=r.x*J.x,ee.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/J.y),n.y=r.y*J.y,ee.mapSize.y=r.y)),ee.map===null||z===!0||B===!0){const V=this.type!==bi?{minFilter:rn,magFilter:rn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new mi(n.x,n.y,V),ee.map.texture.name=ue.name+".shadowMap",ee.camera.updateProjectionMatrix()}s.setRenderTarget(ee.map),s.clear();const q=ee.getViewportCount();for(let V=0;V<q;V++){const Y=ee.getViewport(V);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),D.viewport(a),ee.updateMatrices(ue,V),i=ee.getFrustum(),_(A,E,ee.camera,ue,this.type)}ee.isPointLightShadow!==!0&&this.type===bi&&y(ee,E),ee.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(w,M,L)};function y(T,A){const E=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new mi(n.x,n.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(A,null,E,f,v,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(A,null,E,d,v,null)}function x(T,A,E,w){let M=null;const L=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)M=L;else if(M=E.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=M.uuid,z=A.uuid;let B=c[D];B===void 0&&(B={},c[D]=B);let K=B[z];K===void 0&&(K=M.clone(),B[z]=K,A.addEventListener("dispose",C)),M=K}if(M.visible=A.visible,M.wireframe=A.wireframe,w===bi?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,E.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const D=s.properties.get(M);D.light=E}return M}function _(T,A,E,w,M){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===bi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);const z=e.update(T),B=T.material;if(Array.isArray(B)){const K=z.groups;for(let H=0,ue=K.length;H<ue;H++){const ee=K[H],J=B[ee.materialIndex];if(J&&J.visible){const q=x(T,J,w,M);T.onBeforeShadow(s,T,A,E,z,q,ee),s.renderBufferDirect(E,null,z,q,T,ee),T.onAfterShadow(s,T,A,E,z,q,ee)}}}else if(B.visible){const K=x(T,B,w,M);T.onBeforeShadow(s,T,A,E,z,K,null),s.renderBufferDirect(E,null,z,K,T,null),T.onAfterShadow(s,T,A,E,z,K,null)}}const D=T.children;for(let z=0,B=D.length;z<B;z++)_(D[z],A,E,w,M)}function C(T){T.target.removeEventListener("dispose",C);for(const E in c){const w=c[E],M=T.target.uuid;M in w&&(w[M].dispose(),delete w[M])}}}const jw={[Ul]:Ll,[Nl]:Bl,[Fl]:kl,[as]:Ol,[Ll]:Ul,[Bl]:Nl,[kl]:Fl,[Ol]:as};function Qw(s,e){function t(){let j=!1;const ne=new ft;let de=null;const Pe=new ft(0,0,0,0);return{setMask:function(Oe){de!==Oe&&!j&&(s.colorMask(Oe,Oe,Oe,Oe),de=Oe)},setLocked:function(Oe){j=Oe},setClear:function(Oe,Ue,$e,ot,et){et===!0&&(Oe*=ot,Ue*=ot,$e*=ot),ne.set(Oe,Ue,$e,ot),Pe.equals(ne)===!1&&(s.clearColor(Oe,Ue,$e,ot),Pe.copy(ne))},reset:function(){j=!1,de=null,Pe.set(-1,0,0,0)}}}function i(){let j=!1,ne=!1,de=null,Pe=null,Oe=null;return{setReversed:function(Ue){if(ne!==Ue){const $e=e.get("EXT_clip_control");ne?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const ot=Oe;Oe=null,this.setClear(ot)}ne=Ue},getReversed:function(){return ne},setTest:function(Ue){Ue?Q(s.DEPTH_TEST):fe(s.DEPTH_TEST)},setMask:function(Ue){de!==Ue&&!j&&(s.depthMask(Ue),de=Ue)},setFunc:function(Ue){if(ne&&(Ue=jw[Ue]),Pe!==Ue){switch(Ue){case Ul:s.depthFunc(s.NEVER);break;case Ll:s.depthFunc(s.ALWAYS);break;case Nl:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case Fl:s.depthFunc(s.EQUAL);break;case Ol:s.depthFunc(s.GEQUAL);break;case Bl:s.depthFunc(s.GREATER);break;case kl:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Pe=Ue}},setLocked:function(Ue){j=Ue},setClear:function(Ue){Oe!==Ue&&(ne&&(Ue=1-Ue),s.clearDepth(Ue),Oe=Ue)},reset:function(){j=!1,de=null,Pe=null,Oe=null,ne=!1}}}function n(){let j=!1,ne=null,de=null,Pe=null,Oe=null,Ue=null,$e=null,ot=null,et=null;return{setTest:function(it){j||(it?Q(s.STENCIL_TEST):fe(s.STENCIL_TEST))},setMask:function(it){ne!==it&&!j&&(s.stencilMask(it),ne=it)},setFunc:function(it,yt,St){(de!==it||Pe!==yt||Oe!==St)&&(s.stencilFunc(it,yt,St),de=it,Pe=yt,Oe=St)},setOp:function(it,yt,St){(Ue!==it||$e!==yt||ot!==St)&&(s.stencilOp(it,yt,St),Ue=it,$e=yt,ot=St)},setLocked:function(it){j=it},setClear:function(it){et!==it&&(s.clearStencil(it),et=it)},reset:function(){j=!1,ne=null,de=null,Pe=null,Oe=null,Ue=null,$e=null,ot=null,et=null}}}const r=new t,a=new i,o=new n,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,d=[],p=null,v=!1,m=null,g=null,y=null,x=null,_=null,C=null,T=null,A=new Ze(0,0,0),E=0,w=!1,M=null,L=null,D=null,z=null,B=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ue=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ee)[1]),H=ue>=1):ee.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),H=ue>=2);let J=null,q={};const V=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),ie=new ft().fromArray(V),W=new ft().fromArray(Y);function X(j,ne,de,Pe){const Oe=new Uint8Array(4),Ue=s.createTexture();s.bindTexture(j,Ue),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let $e=0;$e<de;$e++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(ne,0,s.RGBA,1,1,Pe,0,s.RGBA,s.UNSIGNED_BYTE,Oe):s.texImage2D(ne+$e,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Oe);return Ue}const te={};te[s.TEXTURE_2D]=X(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=X(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=X(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=X(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(s.DEPTH_TEST),a.setFunc(as),pe(!1),Te(Su),Q(s.CULL_FACE),F(Yi);function Q(j){h[j]!==!0&&(s.enable(j),h[j]=!0)}function fe(j){h[j]!==!1&&(s.disable(j),h[j]=!1)}function Ee(j,ne){return u[j]!==ne?(s.bindFramebuffer(j,ne),u[j]=ne,j===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ne),j===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ne),!0):!1}function Ae(j,ne){let de=d,Pe=!1;if(j){de=f.get(ne),de===void 0&&(de=[],f.set(ne,de));const Oe=j.textures;if(de.length!==Oe.length||de[0]!==s.COLOR_ATTACHMENT0){for(let Ue=0,$e=Oe.length;Ue<$e;Ue++)de[Ue]=s.COLOR_ATTACHMENT0+Ue;de.length=Oe.length,Pe=!0}}else de[0]!==s.BACK&&(de[0]=s.BACK,Pe=!0);Pe&&s.drawBuffers(de)}function be(j){return p!==j?(s.useProgram(j),p=j,!0):!1}const $={[dr]:s.FUNC_ADD,[Hm]:s.FUNC_SUBTRACT,[Wm]:s.FUNC_REVERSE_SUBTRACT};$[Xm]=s.MIN,$[Ym]=s.MAX;const ge={[Zm]:s.ZERO,[qm]:s.ONE,[Km]:s.SRC_COLOR,[Pl]:s.SRC_ALPHA,[tg]:s.SRC_ALPHA_SATURATE,[$m]:s.DST_COLOR,[jm]:s.DST_ALPHA,[Jm]:s.ONE_MINUS_SRC_COLOR,[Dl]:s.ONE_MINUS_SRC_ALPHA,[eg]:s.ONE_MINUS_DST_COLOR,[Qm]:s.ONE_MINUS_DST_ALPHA,[ng]:s.CONSTANT_COLOR,[ig]:s.ONE_MINUS_CONSTANT_COLOR,[rg]:s.CONSTANT_ALPHA,[sg]:s.ONE_MINUS_CONSTANT_ALPHA};function F(j,ne,de,Pe,Oe,Ue,$e,ot,et,it){if(j===Yi){v===!0&&(fe(s.BLEND),v=!1);return}if(v===!1&&(Q(s.BLEND),v=!0),j!==Gm){if(j!==m||it!==w){if((g!==dr||_!==dr)&&(s.blendEquation(s.FUNC_ADD),g=dr,_=dr),it)switch(j){case es:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mu:s.blendFunc(s.ONE,s.ONE);break;case wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case es:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mu:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case wu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}y=null,x=null,C=null,T=null,A.set(0,0,0),E=0,m=j,w=it}return}Oe=Oe||ne,Ue=Ue||de,$e=$e||Pe,(ne!==g||Oe!==_)&&(s.blendEquationSeparate($[ne],$[Oe]),g=ne,_=Oe),(de!==y||Pe!==x||Ue!==C||$e!==T)&&(s.blendFuncSeparate(ge[de],ge[Pe],ge[Ue],ge[$e]),y=de,x=Pe,C=Ue,T=$e),(ot.equals(A)===!1||et!==E)&&(s.blendColor(ot.r,ot.g,ot.b,et),A.copy(ot),E=et),m=j,w=!1}function Se(j,ne){j.side===ii?fe(s.CULL_FACE):Q(s.CULL_FACE);let de=j.side===Mn;ne&&(de=!de),pe(de),j.blending===es&&j.transparent===!1?F(Yi):F(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),a.setFunc(j.depthFunc),a.setTest(j.depthTest),a.setMask(j.depthWrite),r.setMask(j.colorWrite);const Pe=j.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(j.stencilWriteMask),o.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),o.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Le(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?Q(s.SAMPLE_ALPHA_TO_COVERAGE):fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function pe(j){M!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),M=j)}function Te(j){j!==zm?(Q(s.CULL_FACE),j!==L&&(j===Su?s.cullFace(s.BACK):j===Vm?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):fe(s.CULL_FACE),L=j}function he(j){j!==D&&(H&&s.lineWidth(j),D=j)}function Le(j,ne,de){j?(Q(s.POLYGON_OFFSET_FILL),(z!==ne||B!==de)&&(s.polygonOffset(ne,de),z=ne,B=de)):fe(s.POLYGON_OFFSET_FILL)}function _e(j){j?Q(s.SCISSOR_TEST):fe(s.SCISSOR_TEST)}function I(j){j===void 0&&(j=s.TEXTURE0+K-1),J!==j&&(s.activeTexture(j),J=j)}function R(j,ne,de){de===void 0&&(J===null?de=s.TEXTURE0+K-1:de=J);let Pe=q[de];Pe===void 0&&(Pe={type:void 0,texture:void 0},q[de]=Pe),(Pe.type!==j||Pe.texture!==ne)&&(J!==de&&(s.activeTexture(de),J=de),s.bindTexture(j,ne||te[j]),Pe.type=j,Pe.texture=ne)}function Z(){const j=q[J];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function oe(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function le(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function me(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Re(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ve(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ie(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Fe(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Be(j){ie.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),ie.copy(j))}function Ce(j){W.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),W.copy(j))}function Je(j,ne){let de=c.get(ne);de===void 0&&(de=new WeakMap,c.set(ne,de));let Pe=de.get(j);Pe===void 0&&(Pe=s.getUniformBlockIndex(ne,j.name),de.set(j,Pe))}function Xe(j,ne){const Pe=c.get(ne).get(j);l.get(ne)!==Pe&&(s.uniformBlockBinding(ne,Pe,j.__bindingPointIndex),l.set(ne,Pe))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},J=null,q={},u={},f=new WeakMap,d=[],p=null,v=!1,m=null,g=null,y=null,x=null,_=null,C=null,T=null,A=new Ze(0,0,0),E=0,w=!1,M=null,L=null,D=null,z=null,B=null,ie.set(0,0,s.canvas.width,s.canvas.height),W.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:fe,bindFramebuffer:Ee,drawBuffers:Ae,useProgram:be,setBlending:F,setMaterial:Se,setFlipSided:pe,setCullFace:Te,setLineWidth:he,setPolygonOffset:Le,setScissorTest:_e,activeTexture:I,bindTexture:R,unbindTexture:Z,compressedTexImage2D:oe,compressedTexImage3D:le,texImage2D:ze,texImage3D:Fe,updateUBOMapping:Je,uniformBlockBinding:Xe,texStorage2D:He,texStorage3D:Ie,texSubImage2D:me,texSubImage3D:Re,compressedTexSubImage2D:ve,compressedTexSubImage3D:Me,scissor:Be,viewport:Ce,reset:nt}}function $w(s,e,t,i,n,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(I,R){return d?new OffscreenCanvas(I,R):$a("canvas")}function v(I,R,Z){let oe=1;const le=_e(I);if((le.width>Z||le.height>Z)&&(oe=Z/Math.max(le.width,le.height)),oe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const me=Math.floor(oe*le.width),Re=Math.floor(oe*le.height);u===void 0&&(u=p(me,Re));const ve=R?p(me,Re):u;return ve.width=me,ve.height=Re,ve.getContext("2d").drawImage(I,0,0,me,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+me+"x"+Re+")."),ve}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),I;return I}function m(I){return I.generateMipmaps}function g(I){s.generateMipmap(I)}function y(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function x(I,R,Z,oe,le=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let me=R;if(R===s.RED&&(Z===s.FLOAT&&(me=s.R32F),Z===s.HALF_FLOAT&&(me=s.R16F),Z===s.UNSIGNED_BYTE&&(me=s.R8)),R===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.R8UI),Z===s.UNSIGNED_SHORT&&(me=s.R16UI),Z===s.UNSIGNED_INT&&(me=s.R32UI),Z===s.BYTE&&(me=s.R8I),Z===s.SHORT&&(me=s.R16I),Z===s.INT&&(me=s.R32I)),R===s.RG&&(Z===s.FLOAT&&(me=s.RG32F),Z===s.HALF_FLOAT&&(me=s.RG16F),Z===s.UNSIGNED_BYTE&&(me=s.RG8)),R===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RG8UI),Z===s.UNSIGNED_SHORT&&(me=s.RG16UI),Z===s.UNSIGNED_INT&&(me=s.RG32UI),Z===s.BYTE&&(me=s.RG8I),Z===s.SHORT&&(me=s.RG16I),Z===s.INT&&(me=s.RG32I)),R===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(me=s.RGB16UI),Z===s.UNSIGNED_INT&&(me=s.RGB32UI),Z===s.BYTE&&(me=s.RGB8I),Z===s.SHORT&&(me=s.RGB16I),Z===s.INT&&(me=s.RGB32I)),R===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),Z===s.UNSIGNED_INT&&(me=s.RGBA32UI),Z===s.BYTE&&(me=s.RGBA8I),Z===s.SHORT&&(me=s.RGBA16I),Z===s.INT&&(me=s.RGBA32I)),R===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),R===s.RGBA){const Re=le?Ja:mt.getTransfer(oe);Z===s.FLOAT&&(me=s.RGBA32F),Z===s.HALF_FLOAT&&(me=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(me=Re===bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function _(I,R){let Z;return I?R===null||R===ji||R===os?Z=s.DEPTH24_STENCIL8:R===Yt?Z=s.DEPTH32F_STENCIL8:R===js&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ji||R===os?Z=s.DEPTH_COMPONENT24:R===Yt?Z=s.DEPTH_COMPONENT32F:R===js&&(Z=s.DEPTH_COMPONENT16),Z}function C(I,R){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==rn&&I.minFilter!==Dt?Math.log2(Math.max(R.width,R.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?R.mipmaps.length:1}function T(I){const R=I.target;R.removeEventListener("dispose",T),E(R),R.isVideoTexture&&h.delete(R)}function A(I){const R=I.target;R.removeEventListener("dispose",A),M(R)}function E(I){const R=i.get(I);if(R.__webglInit===void 0)return;const Z=I.source,oe=f.get(Z);if(oe){const le=oe[R.__cacheKey];le.usedTimes--,le.usedTimes===0&&w(I),Object.keys(oe).length===0&&f.delete(Z)}i.remove(I)}function w(I){const R=i.get(I);s.deleteTexture(R.__webglTexture);const Z=I.source,oe=f.get(Z);delete oe[R.__cacheKey],a.memory.textures--}function M(I){const R=i.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),i.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(R.__webglFramebuffer[oe]))for(let le=0;le<R.__webglFramebuffer[oe].length;le++)s.deleteFramebuffer(R.__webglFramebuffer[oe][le]);else s.deleteFramebuffer(R.__webglFramebuffer[oe]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[oe])}else{if(Array.isArray(R.__webglFramebuffer))for(let oe=0;oe<R.__webglFramebuffer.length;oe++)s.deleteFramebuffer(R.__webglFramebuffer[oe]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let oe=0;oe<R.__webglColorRenderbuffer.length;oe++)R.__webglColorRenderbuffer[oe]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[oe]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=I.textures;for(let oe=0,le=Z.length;oe<le;oe++){const me=i.get(Z[oe]);me.__webglTexture&&(s.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(Z[oe])}i.remove(I)}let L=0;function D(){L=0}function z(){const I=L;return I>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+n.maxTextures),L+=1,I}function B(I){const R=[];return R.push(I.wrapS),R.push(I.wrapT),R.push(I.wrapR||0),R.push(I.magFilter),R.push(I.minFilter),R.push(I.anisotropy),R.push(I.internalFormat),R.push(I.format),R.push(I.type),R.push(I.generateMipmaps),R.push(I.premultiplyAlpha),R.push(I.flipY),R.push(I.unpackAlignment),R.push(I.colorSpace),R.join()}function K(I,R){const Z=i.get(I);if(I.isVideoTexture&&he(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){const oe=I.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(Z,I,R);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+R)}function H(I,R){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){W(Z,I,R);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+R)}function ue(I,R){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){W(Z,I,R);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+R)}function ee(I,R){const Z=i.get(I);if(I.version>0&&Z.__version!==I.version){X(Z,I,R);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+R)}const J={[Ya]:s.REPEAT,[si]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},q={[rn]:s.NEAREST,[tf]:s.NEAREST_MIPMAP_NEAREST,[Vs]:s.NEAREST_MIPMAP_LINEAR,[Dt]:s.LINEAR,[Pa]:s.LINEAR_MIPMAP_NEAREST,[wi]:s.LINEAR_MIPMAP_LINEAR},V={[yg]:s.NEVER,[Tg]:s.ALWAYS,[bg]:s.LESS,[pf]:s.LEQUAL,[Sg]:s.EQUAL,[Eg]:s.GEQUAL,[Mg]:s.GREATER,[wg]:s.NOTEQUAL};function Y(I,R){if(R.type===Yt&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===Dt||R.magFilter===Pa||R.magFilter===Vs||R.magFilter===wi||R.minFilter===Dt||R.minFilter===Pa||R.minFilter===Vs||R.minFilter===wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,J[R.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,J[R.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,J[R.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,q[R.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,q[R.minFilter]),R.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,V[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===rn||R.minFilter!==Vs&&R.minFilter!==wi||R.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||i.get(R).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,n.getMaxAnisotropy())),i.get(R).__currentAnisotropy=R.anisotropy}}}function ie(I,R){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,R.addEventListener("dispose",T));const oe=R.source;let le=f.get(oe);le===void 0&&(le={},f.set(oe,le));const me=B(R);if(me!==I.__cacheKey){le[me]===void 0&&(le[me]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),le[me].usedTimes++;const Re=le[I.__cacheKey];Re!==void 0&&(le[I.__cacheKey].usedTimes--,Re.usedTimes===0&&w(R)),I.__cacheKey=me,I.__webglTexture=le[me].texture}return Z}function W(I,R,Z){let oe=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(oe=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(oe=s.TEXTURE_3D);const le=ie(I,R),me=R.source;t.bindTexture(oe,I.__webglTexture,s.TEXTURE0+Z);const Re=i.get(me);if(me.version!==Re.__version||le===!0){t.activeTexture(s.TEXTURE0+Z);const ve=mt.getPrimaries(mt.workingColorSpace),Me=R.colorSpace===Mi?null:mt.getPrimaries(R.colorSpace),He=R.colorSpace===Mi||ve===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Ie=v(R.image,!1,n.maxTextureSize);Ie=Le(R,Ie);const ze=r.convert(R.format,R.colorSpace),Fe=r.convert(R.type);let Be=x(R.internalFormat,ze,Fe,R.colorSpace,R.isVideoTexture);Y(oe,R);let Ce;const Je=R.mipmaps,Xe=R.isVideoTexture!==!0,nt=Re.__version===void 0||le===!0,j=me.dataReady,ne=C(R,Ie);if(R.isDepthTexture)Be=_(R.format===ls,R.type),nt&&(Xe?t.texStorage2D(s.TEXTURE_2D,1,Be,Ie.width,Ie.height):t.texImage2D(s.TEXTURE_2D,0,Be,Ie.width,Ie.height,0,ze,Fe,null));else if(R.isDataTexture)if(Je.length>0){Xe&&nt&&t.texStorage2D(s.TEXTURE_2D,ne,Be,Je[0].width,Je[0].height);for(let de=0,Pe=Je.length;de<Pe;de++)Ce=Je[de],Xe?j&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ce.width,Ce.height,ze,Fe,Ce.data):t.texImage2D(s.TEXTURE_2D,de,Be,Ce.width,Ce.height,0,ze,Fe,Ce.data);R.generateMipmaps=!1}else Xe?(nt&&t.texStorage2D(s.TEXTURE_2D,ne,Be,Ie.width,Ie.height),j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ie.width,Ie.height,ze,Fe,Ie.data)):t.texImage2D(s.TEXTURE_2D,0,Be,Ie.width,Ie.height,0,ze,Fe,Ie.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Xe&&nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Be,Je[0].width,Je[0].height,Ie.depth);for(let de=0,Pe=Je.length;de<Pe;de++)if(Ce=Je[de],R.format!==fn)if(ze!==null)if(Xe){if(j)if(R.layerUpdates.size>0){const Oe=Fu(Ce.width,Ce.height,R.format,R.type);for(const Ue of R.layerUpdates){const $e=Ce.data.subarray(Ue*Oe/Ce.data.BYTES_PER_ELEMENT,(Ue+1)*Oe/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,Ue,Ce.width,Ce.height,1,ze,$e)}R.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ce.width,Ce.height,Ie.depth,ze,Ce.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,de,Be,Ce.width,Ce.height,Ie.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,de,0,0,0,Ce.width,Ce.height,Ie.depth,ze,Fe,Ce.data):t.texImage3D(s.TEXTURE_2D_ARRAY,de,Be,Ce.width,Ce.height,Ie.depth,0,ze,Fe,Ce.data)}else{Xe&&nt&&t.texStorage2D(s.TEXTURE_2D,ne,Be,Je[0].width,Je[0].height);for(let de=0,Pe=Je.length;de<Pe;de++)Ce=Je[de],R.format!==fn?ze!==null?Xe?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,de,0,0,Ce.width,Ce.height,ze,Ce.data):t.compressedTexImage2D(s.TEXTURE_2D,de,Be,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?j&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,Ce.width,Ce.height,ze,Fe,Ce.data):t.texImage2D(s.TEXTURE_2D,de,Be,Ce.width,Ce.height,0,ze,Fe,Ce.data)}else if(R.isDataArrayTexture)if(Xe){if(nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ne,Be,Ie.width,Ie.height,Ie.depth),j)if(R.layerUpdates.size>0){const de=Fu(Ie.width,Ie.height,R.format,R.type);for(const Pe of R.layerUpdates){const Oe=Ie.data.subarray(Pe*de/Ie.data.BYTES_PER_ELEMENT,(Pe+1)*de/Ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Pe,Ie.width,Ie.height,1,ze,Fe,Oe)}R.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ie.width,Ie.height,Ie.depth,ze,Fe,Ie.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,Ie.width,Ie.height,Ie.depth,0,ze,Fe,Ie.data);else if(R.isData3DTexture)Xe?(nt&&t.texStorage3D(s.TEXTURE_3D,ne,Be,Ie.width,Ie.height,Ie.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ie.width,Ie.height,Ie.depth,ze,Fe,Ie.data)):t.texImage3D(s.TEXTURE_3D,0,Be,Ie.width,Ie.height,Ie.depth,0,ze,Fe,Ie.data);else if(R.isFramebufferTexture){if(nt)if(Xe)t.texStorage2D(s.TEXTURE_2D,ne,Be,Ie.width,Ie.height);else{let de=Ie.width,Pe=Ie.height;for(let Oe=0;Oe<ne;Oe++)t.texImage2D(s.TEXTURE_2D,Oe,Be,de,Pe,0,ze,Fe,null),de>>=1,Pe>>=1}}else if(Je.length>0){if(Xe&&nt){const de=_e(Je[0]);t.texStorage2D(s.TEXTURE_2D,ne,Be,de.width,de.height)}for(let de=0,Pe=Je.length;de<Pe;de++)Ce=Je[de],Xe?j&&t.texSubImage2D(s.TEXTURE_2D,de,0,0,ze,Fe,Ce):t.texImage2D(s.TEXTURE_2D,de,Be,ze,Fe,Ce);R.generateMipmaps=!1}else if(Xe){if(nt){const de=_e(Ie);t.texStorage2D(s.TEXTURE_2D,ne,Be,de.width,de.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Fe,Ie)}else t.texImage2D(s.TEXTURE_2D,0,Be,ze,Fe,Ie);m(R)&&g(oe),Re.__version=me.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function X(I,R,Z){if(R.image.length!==6)return;const oe=ie(I,R),le=R.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Z);const me=i.get(le);if(le.version!==me.__version||oe===!0){t.activeTexture(s.TEXTURE0+Z);const Re=mt.getPrimaries(mt.workingColorSpace),ve=R.colorSpace===Mi?null:mt.getPrimaries(R.colorSpace),Me=R.colorSpace===Mi||Re===ve?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const He=R.isCompressedTexture||R.image[0].isCompressedTexture,Ie=R.image[0]&&R.image[0].isDataTexture,ze=[];for(let Pe=0;Pe<6;Pe++)!He&&!Ie?ze[Pe]=v(R.image[Pe],!0,n.maxCubemapSize):ze[Pe]=Ie?R.image[Pe].image:R.image[Pe],ze[Pe]=Le(R,ze[Pe]);const Fe=ze[0],Be=r.convert(R.format,R.colorSpace),Ce=r.convert(R.type),Je=x(R.internalFormat,Be,Ce,R.colorSpace),Xe=R.isVideoTexture!==!0,nt=me.__version===void 0||oe===!0,j=le.dataReady;let ne=C(R,Fe);Y(s.TEXTURE_CUBE_MAP,R);let de;if(He){Xe&&nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Je,Fe.width,Fe.height);for(let Pe=0;Pe<6;Pe++){de=ze[Pe].mipmaps;for(let Oe=0;Oe<de.length;Oe++){const Ue=de[Oe];R.format!==fn?Be!==null?Xe?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe,0,0,Ue.width,Ue.height,Be,Ue.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe,Je,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe,0,0,Ue.width,Ue.height,Be,Ce,Ue.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe,Je,Ue.width,Ue.height,0,Be,Ce,Ue.data)}}}else{if(de=R.mipmaps,Xe&&nt){de.length>0&&ne++;const Pe=_e(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ne,Je,Pe.width,Pe.height)}for(let Pe=0;Pe<6;Pe++)if(Ie){Xe?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,ze[Pe].width,ze[Pe].height,Be,Ce,ze[Pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Je,ze[Pe].width,ze[Pe].height,0,Be,Ce,ze[Pe].data);for(let Oe=0;Oe<de.length;Oe++){const $e=de[Oe].image[Pe].image;Xe?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe+1,0,0,$e.width,$e.height,Be,Ce,$e.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe+1,Je,$e.width,$e.height,0,Be,Ce,$e.data)}}else{Xe?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,0,0,Be,Ce,ze[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Je,Be,Ce,ze[Pe]);for(let Oe=0;Oe<de.length;Oe++){const Ue=de[Oe];Xe?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe+1,0,0,Be,Ce,Ue.image[Pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Oe+1,Je,Be,Ce,Ue.image[Pe])}}}m(R)&&g(s.TEXTURE_CUBE_MAP),me.__version=le.version,R.onUpdate&&R.onUpdate(R)}I.__version=R.version}function te(I,R,Z,oe,le,me){const Re=r.convert(Z.format,Z.colorSpace),ve=r.convert(Z.type),Me=x(Z.internalFormat,Re,ve,Z.colorSpace),He=i.get(R),Ie=i.get(Z);if(Ie.__renderTarget=R,!He.__hasExternalTextures){const ze=Math.max(1,R.width>>me),Fe=Math.max(1,R.height>>me);le===s.TEXTURE_3D||le===s.TEXTURE_2D_ARRAY?t.texImage3D(le,me,Me,ze,Fe,R.depth,0,Re,ve,null):t.texImage2D(le,me,Me,ze,Fe,0,Re,ve,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Te(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,oe,le,Ie.__webglTexture,0,pe(R)):(le===s.TEXTURE_2D||le>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,oe,le,Ie.__webglTexture,me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Q(I,R,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),R.depthBuffer){const oe=R.depthTexture,le=oe&&oe.isDepthTexture?oe.type:null,me=_(R.stencilBuffer,le),Re=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=pe(R);Te(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ve,me,R.width,R.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ve,me,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,me,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,I)}else{const oe=R.textures;for(let le=0;le<oe.length;le++){const me=oe[le],Re=r.convert(me.format,me.colorSpace),ve=r.convert(me.type),Me=x(me.internalFormat,Re,ve,me.colorSpace),He=pe(R);Z&&Te(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,He,Me,R.width,R.height):Te(R)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,He,Me,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,Me,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function fe(I,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=i.get(R.depthTexture);oe.__renderTarget=R,(!oe.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),K(R.depthTexture,0);const le=oe.__webglTexture,me=pe(R);if(R.depthTexture.format===ts)Te(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,le,0);else if(R.depthTexture.format===ls)Te(R)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0,me):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Ee(I){const R=i.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==I.depthTexture){const oe=I.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),oe){const le=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,oe.removeEventListener("dispose",le)};oe.addEventListener("dispose",le),R.__depthDisposeCallback=le}R.__boundDepthTexture=oe}if(I.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");fe(R.__webglFramebuffer,I)}else if(Z){R.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[oe]),R.__webglDepthbuffer[oe]===void 0)R.__webglDepthbuffer[oe]=s.createRenderbuffer(),Q(R.__webglDepthbuffer[oe],I,!1);else{const le=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,me=R.__webglDepthbuffer[oe];s.bindRenderbuffer(s.RENDERBUFFER,me),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,me)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),Q(R.__webglDepthbuffer,I,!1);else{const oe=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,le),s.framebufferRenderbuffer(s.FRAMEBUFFER,oe,s.RENDERBUFFER,le)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(I,R,Z){const oe=i.get(I);R!==void 0&&te(oe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ee(I)}function be(I){const R=I.texture,Z=i.get(I),oe=i.get(R);I.addEventListener("dispose",A);const le=I.textures,me=I.isWebGLCubeRenderTarget===!0,Re=le.length>1;if(Re||(oe.__webglTexture===void 0&&(oe.__webglTexture=s.createTexture()),oe.__version=R.version,a.memory.textures++),me){Z.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[ve]=[];for(let Me=0;Me<R.mipmaps.length;Me++)Z.__webglFramebuffer[ve][Me]=s.createFramebuffer()}else Z.__webglFramebuffer[ve]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ve=0;ve<R.mipmaps.length;ve++)Z.__webglFramebuffer[ve]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Re)for(let ve=0,Me=le.length;ve<Me;ve++){const He=i.get(le[ve]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&Te(I)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ve=0;ve<le.length;ve++){const Me=le[ve];Z.__webglColorRenderbuffer[ve]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[ve]);const He=r.convert(Me.format,Me.colorSpace),Ie=r.convert(Me.type),ze=x(Me.internalFormat,He,Ie,Me.colorSpace,I.isXRRenderTarget===!0),Fe=pe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Fe,ze,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ve,s.RENDERBUFFER,Z.__webglColorRenderbuffer[ve])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Q(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(me){t.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture),Y(s.TEXTURE_CUBE_MAP,R);for(let ve=0;ve<6;ve++)if(R.mipmaps&&R.mipmaps.length>0)for(let Me=0;Me<R.mipmaps.length;Me++)te(Z.__webglFramebuffer[ve][Me],I,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Me);else te(Z.__webglFramebuffer[ve],I,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);m(R)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let ve=0,Me=le.length;ve<Me;ve++){const He=le[ve],Ie=i.get(He);t.bindTexture(s.TEXTURE_2D,Ie.__webglTexture),Y(s.TEXTURE_2D,He),te(Z.__webglFramebuffer,I,He,s.COLOR_ATTACHMENT0+ve,s.TEXTURE_2D,0),m(He)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let ve=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ve=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ve,oe.__webglTexture),Y(ve,R),R.mipmaps&&R.mipmaps.length>0)for(let Me=0;Me<R.mipmaps.length;Me++)te(Z.__webglFramebuffer[Me],I,R,s.COLOR_ATTACHMENT0,ve,Me);else te(Z.__webglFramebuffer,I,R,s.COLOR_ATTACHMENT0,ve,0);m(R)&&g(ve),t.unbindTexture()}I.depthBuffer&&Ee(I)}function $(I){const R=I.textures;for(let Z=0,oe=R.length;Z<oe;Z++){const le=R[Z];if(m(le)){const me=y(I),Re=i.get(le).__webglTexture;t.bindTexture(me,Re),g(me),t.unbindTexture()}}}const ge=[],F=[];function Se(I){if(I.samples>0){if(Te(I)===!1){const R=I.textures,Z=I.width,oe=I.height;let le=s.COLOR_BUFFER_BIT;const me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Re=i.get(I),ve=R.length>1;if(ve)for(let Me=0;Me<R.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Me=0;Me<R.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(le|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(le|=s.STENCIL_BUFFER_BIT)),ve){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const He=i.get(R[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,He,0)}s.blitFramebuffer(0,0,Z,oe,0,0,Z,oe,le,s.NEAREST),l===!0&&(ge.length=0,F.length=0,ge.push(s.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ge.push(me),F.push(me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ve)for(let Me=0;Me<R.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Re.__webglColorRenderbuffer[Me]);const He=i.get(R[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Re.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&l){const R=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function pe(I){return Math.min(n.maxSamples,I.samples)}function Te(I){const R=i.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function he(I){const R=a.render.frame;h.get(I)!==R&&(h.set(I,R),I.update())}function Le(I,R){const Z=I.colorSpace,oe=I.format,le=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Ri&&Z!==Mi&&(mt.getTransfer(Z)===bt?(oe!==fn||le!==Ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function _e(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=H,this.setTexture3D=ue,this.setTextureCube=ee,this.rebindTextures=Ae,this.setupRenderTarget=be,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Te}function Fv(s,e){function t(i,n=Mi){let r;const a=mt.getTransfer(n);if(i===Ci)return s.UNSIGNED_BYTE;if(i===Mc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===wc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===sf)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===nf)return s.BYTE;if(i===rf)return s.SHORT;if(i===js)return s.UNSIGNED_SHORT;if(i===Sc)return s.INT;if(i===ji)return s.UNSIGNED_INT;if(i===Yt)return s.FLOAT;if(i===Ln)return s.HALF_FLOAT;if(i===af)return s.ALPHA;if(i===of)return s.RGB;if(i===fn)return s.RGBA;if(i===lf)return s.LUMINANCE;if(i===cf)return s.LUMINANCE_ALPHA;if(i===ts)return s.DEPTH_COMPONENT;if(i===ls)return s.DEPTH_STENCIL;if(i===mo)return s.RED;if(i===go)return s.RED_INTEGER;if(i===hf)return s.RG;if(i===Ec)return s.RG_INTEGER;if(i===Tc)return s.RGBA_INTEGER;if(i===Da||i===Ua||i===La||i===Na)if(a===bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Da)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Da)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ua)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===La)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Vl||i===Gl||i===Hl||i===Wl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Vl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Wl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Xl||i===Yl||i===Zl)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Xl||i===Yl)return a===bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Zl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ql||i===Kl||i===Jl||i===jl||i===Ql||i===$l||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===ac||i===oc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ql)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$l)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ec)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===tc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===nc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ic)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===rc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===oc)return a===bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fa||i===lc||i===cc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fa)return a===bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===cc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===uf||i===hc||i===uc||i===fc)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===uc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===os?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}const eE={type:"move"};class lu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,i),g=this._getHandJoint(c,v);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&f>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eE)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const tE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Bt,r=e.properties.get(n);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new gi({vertexShader:tE,fragmentShader:nE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ut(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rE extends Di{constructor(e,t){super();const i=this;let n=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,p=null;const v=new iE,m=t.getContextAttributes();let g=null,y=null;const x=[],_=[],C=new ye;let T=null;const A=new en;A.viewport=new ft;const E=new en;E.viewport=new ft;const w=[A,E],M=new Mv;let L=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let X=x[W];return X===void 0&&(X=new lu,x[W]=X),X.getTargetRaySpace()},this.getControllerGrip=function(W){let X=x[W];return X===void 0&&(X=new lu,x[W]=X),X.getGripSpace()},this.getHand=function(W){let X=x[W];return X===void 0&&(X=new lu,x[W]=X),X.getHandSpace()};function z(W){const X=_.indexOf(W.inputSource);if(X===-1)return;const te=x[X];te!==void 0&&(te.update(W.inputSource,W.frame,c||a),te.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",B),n.removeEventListener("inputsourceschange",K);for(let W=0;W<x.length;W++){const X=_[W];X!==null&&(_[W]=null,x[W].disconnect(X))}L=null,D=null,v.reset(),e.setRenderTarget(g),d=null,f=null,u=null,n=null,y=null,ie.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return n},this.setSession=async function(W){if(n=W,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",B),n.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),n.renderState.layers===void 0){const X={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(n,t,X),n.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new mi(d.framebufferWidth,d.framebufferHeight,{format:fn,type:Ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,te=null,Q=null;m.depth&&(Q=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=m.stencil?ls:ts,te=m.stencil?os:ji);const fe={colorFormat:t.RGBA8,depthFormat:Q,scaleFactor:r};u=new XRWebGLBinding(n,t),f=u.createProjectionLayer(fe),n.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new mi(f.textureWidth,f.textureHeight,{format:fn,type:Ci,depthTexture:new Mf(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),ie.setContext(n),ie.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(W){for(let X=0;X<W.removed.length;X++){const te=W.removed[X],Q=_.indexOf(te);Q>=0&&(_[Q]=null,x[Q].disconnect(te))}for(let X=0;X<W.added.length;X++){const te=W.added[X];let Q=_.indexOf(te);if(Q===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=_.length){_.push(te),Q=Ee;break}else if(_[Ee]===null){_[Ee]=te,Q=Ee;break}if(Q===-1)break}const fe=x[Q];fe&&fe.connect(te)}}const H=new O,ue=new O;function ee(W,X,te){H.setFromMatrixPosition(X.matrixWorld),ue.setFromMatrixPosition(te.matrixWorld);const Q=H.distanceTo(ue),fe=X.projectionMatrix.elements,Ee=te.projectionMatrix.elements,Ae=fe[14]/(fe[10]-1),be=fe[14]/(fe[10]+1),$=(fe[9]+1)/fe[5],ge=(fe[9]-1)/fe[5],F=(fe[8]-1)/fe[0],Se=(Ee[8]+1)/Ee[0],pe=Ae*F,Te=Ae*Se,he=Q/(-F+Se),Le=he*-F;if(X.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Le),W.translateZ(he),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),fe[10]===-1)W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const _e=Ae+he,I=be+he,R=pe-Le,Z=Te+(Q-Le),oe=$*be/I*_e,le=ge*be/I*_e;W.projectionMatrix.makePerspective(R,Z,oe,le,_e,I),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function J(W,X){X===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(X.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(n===null)return;let X=W.near,te=W.far;v.texture!==null&&(v.depthNear>0&&(X=v.depthNear),v.depthFar>0&&(te=v.depthFar)),M.near=E.near=A.near=X,M.far=E.far=A.far=te,(L!==M.near||D!==M.far)&&(n.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,D=M.far),A.layers.mask=W.layers.mask|2,E.layers.mask=W.layers.mask|4,M.layers.mask=A.layers.mask|E.layers.mask;const Q=W.parent,fe=M.cameras;J(M,Q);for(let Ee=0;Ee<fe.length;Ee++)J(fe[Ee],Q);fe.length===2?ee(M,A,E):M.projectionMatrix.copy(A.projectionMatrix),q(W,M,Q)};function q(W,X,te){te===null?W.matrix.copy(X.matrixWorld):(W.matrix.copy(te.matrixWorld),W.matrix.invert(),W.matrix.multiply(X.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(X.projectionMatrix),W.projectionMatrixInverse.copy(X.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Qs*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let V=null;function Y(W,X){if(h=X.getViewerPose(c||a),p=X,h!==null){const te=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Q=!1;te.length!==M.cameras.length&&(M.cameras.length=0,Q=!0);for(let Ee=0;Ee<te.length;Ee++){const Ae=te[Ee];let be=null;if(d!==null)be=d.getViewport(Ae);else{const ge=u.getViewSubImage(f,Ae);be=ge.viewport,Ee===0&&(e.setRenderTargetTextures(y,ge.colorTexture,f.ignoreDepthValues?void 0:ge.depthStencilTexture),e.setRenderTarget(y))}let $=w[Ee];$===void 0&&($=new en,$.layers.enable(Ee),$.viewport=new ft,w[Ee]=$),$.matrix.fromArray(Ae.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(Ae.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(be.x,be.y,be.width,be.height),Ee===0&&(M.matrix.copy($.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Q===!0&&M.cameras.push($)}const fe=n.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const Ee=u.getDepthInformation(te[0]);Ee&&Ee.isValid&&Ee.texture&&v.init(e,Ee,n.renderState)}}for(let te=0;te<x.length;te++){const Q=_[te],fe=x[te];Q!==null&&fe!==void 0&&fe.update(Q,X,c||a)}V&&V(W,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),p=null}const ie=new Pv;ie.setAnimationLoop(Y),this.setAnimationLoop=function(W){V=W},this.dispose=function(){}}}const Br=new Xn,sE=new rt;function aE(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Dg(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function n(m,g,y,x,_){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),u(m,g)):g.isMeshPhongMaterial?(r(m,g),h(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,_)):g.isMeshMatcapMaterial?(r(m,g),p(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),v(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?l(m,g,y,x):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Mn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Mn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const y=e.get(g),x=y.envMap,_=y.envMapRotation;x&&(m.envMap.value=x,Br.copy(_),Br.x*=-1,Br.y*=-1,Br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(sE.makeRotationFromEuler(Br)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,y,x){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*y,m.scale.value=x*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,y){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Mn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function v(m,g){const y=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function oE(s,e,t,i){let n={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;i.uniformBlockBinding(y,_)}function c(y,x){let _=n[y.id];_===void 0&&(p(y),_=h(y),n[y.id]=_,y.addEventListener("dispose",m));const C=x.program;i.updateUBOMapping(y,C);const T=e.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function h(y){const x=u();y.__bindingPointIndex=x;const _=s.createBuffer(),C=y.__size,T=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,_),s.bufferData(s.UNIFORM_BUFFER,C,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,_),_}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=n[y.id],_=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let T=0,A=_.length;T<A;T++){const E=Array.isArray(_[T])?_[T]:[_[T]];for(let w=0,M=E.length;w<M;w++){const L=E[w];if(d(L,T,w,C)===!0){const D=L.__offset,z=Array.isArray(L.value)?L.value:[L.value];let B=0;for(let K=0;K<z.length;K++){const H=z[K],ue=v(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,D+B,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,B),B+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,D,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(y,x,_,C){const T=y.value,A=x+"_"+_;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{const E=C[A];if(typeof T=="number"||typeof T=="boolean"){if(E!==T)return C[A]=T,!0}else if(E.equals(T)===!1)return E.copy(T),!0}return!1}function p(y){const x=y.uniforms;let _=0;const C=16;for(let A=0,E=x.length;A<E;A++){const w=Array.isArray(x[A])?x[A]:[x[A]];for(let M=0,L=w.length;M<L;M++){const D=w[M],z=Array.isArray(D.value)?D.value:[D.value];for(let B=0,K=z.length;B<K;B++){const H=z[B],ue=v(H),ee=_%C,J=ee%ue.boundary,q=ee+J;_+=J,q!==0&&C-q<ue.storage&&(_+=C-q),D.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=_,_+=ue.storage}}}const T=_%C;return T>0&&(_+=C-T),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function m(y){const x=y.target;x.removeEventListener("dispose",m);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),s.deleteBuffer(n[x.id]),delete n[x.id],delete r[x.id]}function g(){for(const y in n)s.deleteBuffer(n[y]);a=[],n={},r={}}return{bind:l,update:c,dispose:g}}class Ov{constructor(e={}){const{canvas:t=Cg(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),v=new Int32Array(4);let m=null,g=null;const y=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Dn,this.toneMapping=Zi,this.toneMappingExposure=1;const _=this;let C=!1,T=0,A=0,E=null,w=-1,M=null;const L=new ft,D=new ft;let z=null;const B=new Ze(0);let K=0,H=t.width,ue=t.height,ee=1,J=null,q=null;const V=new ft(0,0,H,ue),Y=new ft(0,0,H,ue);let ie=!1;const W=new _o;let X=!1,te=!1;const Q=new rt,fe=new rt,Ee=new O,Ae=new ft,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let $=!1;function ge(){return E===null?ee:1}let F=i;function Se(b,P){return t.getContext(b,P)}try{const b={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),F===null){const P="webgl2";if(F=Se(P,b),F===null)throw Se(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let pe,Te,he,Le,_e,I,R,Z,oe,le,me,Re,ve,Me,He,Ie,ze,Fe,Be,Ce,Je,Xe,nt,j;function ne(){pe=new _M(F),pe.init(),Xe=new Fv(F,pe),Te=new fM(F,pe,e,Xe),he=new Qw(F,pe),Te.reverseDepthBuffer&&f&&he.buffers.depth.setReversed(!0),Le=new bM(F),_e=new kw,I=new $w(F,pe,he,_e,Te,Xe,Le),R=new pM(_),Z=new vM(_),oe=new C1(F),nt=new hM(F,oe),le=new xM(F,oe,Le,nt),me=new MM(F,le,oe,Le),Be=new SM(F,Te,I),Ie=new dM(_e),Re=new Bw(_,R,Z,pe,Te,nt,Ie),ve=new aE(_,_e),Me=new Vw,He=new Zw(pe),Fe=new cM(_,R,Z,he,me,d,l),ze=new Jw(_,me,Te),j=new oE(F,Le,Te,he),Ce=new uM(F,pe,Le),Je=new yM(F,pe,Le),Le.programs=Re.programs,_.capabilities=Te,_.extensions=pe,_.properties=_e,_.renderLists=Me,_.shadowMap=ze,_.state=he,_.info=Le}ne();const de=new rE(_,F);this.xr=de,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=pe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=pe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(b){b!==void 0&&(ee=b,this.setSize(H,ue,!1))},this.getSize=function(b){return b.set(H,ue)},this.setSize=function(b,P,G=!0){if(de.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,ue=P,t.width=Math.floor(b*ee),t.height=Math.floor(P*ee),G===!0&&(t.style.width=b+"px",t.style.height=P+"px"),this.setViewport(0,0,b,P)},this.getDrawingBufferSize=function(b){return b.set(H*ee,ue*ee).floor()},this.setDrawingBufferSize=function(b,P,G){H=b,ue=P,ee=G,t.width=Math.floor(b*G),t.height=Math.floor(P*G),this.setViewport(0,0,b,P)},this.getCurrentViewport=function(b){return b.copy(L)},this.getViewport=function(b){return b.copy(V)},this.setViewport=function(b,P,G,k){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,P,G,k),he.viewport(L.copy(V).multiplyScalar(ee).round())},this.getScissor=function(b){return b.copy(Y)},this.setScissor=function(b,P,G,k){b.isVector4?Y.set(b.x,b.y,b.z,b.w):Y.set(b,P,G,k),he.scissor(D.copy(Y).multiplyScalar(ee).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(b){he.setScissorTest(ie=b)},this.setOpaqueSort=function(b){J=b},this.setTransparentSort=function(b){q=b},this.getClearColor=function(b){return b.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(b=!0,P=!0,G=!0){let k=0;if(b){let U=!1;if(E!==null){const re=E.texture.format;U=re===Tc||re===Ec||re===go}if(U){const re=E.texture.type,se=re===Ci||re===ji||re===js||re===os||re===Mc||re===wc,ae=Fe.getClearColor(),ce=Fe.getClearAlpha(),we=ae.r,De=ae.g,xe=ae.b;se?(p[0]=we,p[1]=De,p[2]=xe,p[3]=ce,F.clearBufferuiv(F.COLOR,0,p)):(v[0]=we,v[1]=De,v[2]=xe,v[3]=ce,F.clearBufferiv(F.COLOR,0,v))}else k|=F.COLOR_BUFFER_BIT}P&&(k|=F.DEPTH_BUFFER_BIT),G&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),Fe.dispose(),Me.dispose(),He.dispose(),_e.dispose(),R.dispose(),Z.dispose(),me.dispose(),nt.dispose(),j.dispose(),Re.dispose(),de.dispose(),de.removeEventListener("sessionstart",Lt),de.removeEventListener("sessionend",sn),Qt.stop()};function Pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=Le.autoReset,P=ze.enabled,G=ze.autoUpdate,k=ze.needsUpdate,U=ze.type;ne(),Le.autoReset=b,ze.enabled=P,ze.autoUpdate=G,ze.needsUpdate=k,ze.type=U}function Ue(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function $e(b){const P=b.target;P.removeEventListener("dispose",$e),ot(P)}function ot(b){et(b),_e.remove(b)}function et(b){const P=_e.get(b).programs;P!==void 0&&(P.forEach(function(G){Re.releaseProgram(G)}),b.isShaderMaterial&&Re.releaseShaderCache(b))}this.renderBufferDirect=function(b,P,G,k,U,re){P===null&&(P=be);const se=U.isMesh&&U.matrixWorld.determinant()<0,ae=sa(b,P,G,k,U);he.setMaterial(k,se);let ce=G.index,we=1;if(k.wireframe===!0){if(ce=le.getWireframeAttribute(G),ce===void 0)return;we=2}const De=G.drawRange,xe=G.attributes.position;let ke=De.start*we,Ne=(De.start+De.count)*we;re!==null&&(ke=Math.max(ke,re.start*we),Ne=Math.min(Ne,(re.start+re.count)*we)),ce!==null?(ke=Math.max(ke,0),Ne=Math.min(Ne,ce.count)):xe!=null&&(ke=Math.max(ke,0),Ne=Math.min(Ne,xe.count));const Ve=Ne-ke;if(Ve<0||Ve===1/0)return;nt.setup(U,k,ae,G,ce);let qe,je=Ce;if(ce!==null&&(qe=oe.get(ce),je=Je,je.setIndex(qe)),U.isMesh)k.wireframe===!0?(he.setLineWidth(k.wireframeLinewidth*ge()),je.setMode(F.LINES)):je.setMode(F.TRIANGLES);else if(U.isLine){let Ye=k.linewidth;Ye===void 0&&(Ye=1),he.setLineWidth(Ye*ge()),U.isLineSegments?je.setMode(F.LINES):U.isLineLoop?je.setMode(F.LINE_LOOP):je.setMode(F.LINE_STRIP)}else U.isPoints?je.setMode(F.POINTS):U.isSprite&&je.setMode(F.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ye=U._multiDrawStarts,pt=U._multiDrawCounts,tt=U._multiDrawCount,st=ce?oe.get(ce).bytesPerElement:1,_t=_e.get(k).currentProgram.getUniforms();for(let xt=0;xt<tt;xt++)_t.setValue(F,"_gl_DrawID",xt),je.render(Ye[xt]/st,pt[xt])}else if(U.isInstancedMesh)je.renderInstances(ke,Ve,U.count);else if(G.isInstancedBufferGeometry){const Ye=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,pt=Math.min(G.instanceCount,Ye);je.renderInstances(ke,Ve,pt)}else je.render(ke,Ve)};function it(b,P,G){b.transparent===!0&&b.side===ii&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,Tn(b,P,G),b.side=Ki,b.needsUpdate=!0,Tn(b,P,G),b.side=ii):Tn(b,P,G)}this.compile=function(b,P,G=null){G===null&&(G=b),g=He.get(G),g.init(P),x.push(g),G.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),b!==G&&b.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(g.pushLight(U),U.castShadow&&g.pushShadow(U))}),g.setupLights();const k=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const re=U.material;if(re)if(Array.isArray(re))for(let se=0;se<re.length;se++){const ae=re[se];it(ae,G,U),k.add(ae)}else it(re,G,U),k.add(re)}),x.pop(),g=null,k},this.compileAsync=function(b,P,G=null){const k=this.compile(b,P,G);return new Promise(U=>{function re(){if(k.forEach(function(se){_e.get(se).currentProgram.isReady()&&k.delete(se)}),k.size===0){U(b);return}setTimeout(re,10)}pe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let yt=null;function St(b){yt&&yt(b)}function Lt(){Qt.stop()}function sn(){Qt.start()}const Qt=new Pv;Qt.setAnimationLoop(St),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(b){yt=b,de.setAnimationLoop(b),b===null?Qt.stop():Qt.start()},de.addEventListener("sessionstart",Lt),de.addEventListener("sessionend",sn),this.render=function(b,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(de.cameraAutoUpdate===!0&&de.updateCamera(P),P=de.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,P,E),g=He.get(b,x.length),g.init(P),x.push(g),fe.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(fe),te=this.localClippingEnabled,X=Ie.init(this.clippingPlanes,te),m=Me.get(b,y.length),m.init(),y.push(m),de.enabled===!0&&de.isPresenting===!0){const re=_.xr.getDepthSensingMesh();re!==null&&mn(re,P,-1/0,_.sortObjects)}mn(b,P,0,_.sortObjects),m.finish(),_.sortObjects===!0&&m.sort(J,q),$=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,$&&Fe.addToRenderList(m,b),this.info.render.frame++,X===!0&&Ie.beginShadows();const G=g.state.shadowsArray;ze.render(G,b,P),X===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=m.opaque,U=m.transmissive;if(g.setupLights(),P.isArrayCamera){const re=P.cameras;if(U.length>0)for(let se=0,ae=re.length;se<ae;se++){const ce=re[se];Zn(k,U,b,ce)}$&&Fe.render(b);for(let se=0,ae=re.length;se<ae;se++){const ce=re[se];En(m,b,ce,ce.viewport)}}else U.length>0&&Zn(k,U,b,P),$&&Fe.render(b),En(m,b,P);E!==null&&(I.updateMultisampleRenderTarget(E),I.updateRenderTargetMipmap(E)),b.isScene===!0&&b.onAfterRender(_,b,P),nt.resetDefaultState(),w=-1,M=null,x.pop(),x.length>0?(g=x[x.length-1],X===!0&&Ie.setGlobalState(_.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function mn(b,P,G,k){if(b.visible===!1)return;if(b.layers.test(P.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(P);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||W.intersectsSprite(b)){k&&Ae.setFromMatrixPosition(b.matrixWorld).applyMatrix4(fe);const se=me.update(b),ae=b.material;ae.visible&&m.push(b,se,ae,G,Ae.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||W.intersectsObject(b))){const se=me.update(b),ae=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ae.copy(b.boundingSphere.center)):(se.boundingSphere===null&&se.computeBoundingSphere(),Ae.copy(se.boundingSphere.center)),Ae.applyMatrix4(b.matrixWorld).applyMatrix4(fe)),Array.isArray(ae)){const ce=se.groups;for(let we=0,De=ce.length;we<De;we++){const xe=ce[we],ke=ae[xe.materialIndex];ke&&ke.visible&&m.push(b,se,ke,G,Ae.z,xe)}}else ae.visible&&m.push(b,se,ae,G,Ae.z,null)}}const re=b.children;for(let se=0,ae=re.length;se<ae;se++)mn(re[se],P,G,k)}function En(b,P,G,k){const U=b.opaque,re=b.transmissive,se=b.transparent;g.setupLightsView(G),X===!0&&Ie.setGlobalState(_.clippingPlanes,G),k&&he.viewport(L.copy(k)),U.length>0&&an(U,P,G),re.length>0&&an(re,P,G),se.length>0&&an(se,P,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function Zn(b,P,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[k.id]===void 0&&(g.state.transmissionRenderTarget[k.id]=new mi(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Ln:Ci,minFilter:wi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const re=g.state.transmissionRenderTarget[k.id],se=k.viewport||L;re.setSize(se.z,se.w);const ae=_.getRenderTarget();_.setRenderTarget(re),_.getClearColor(B),K=_.getClearAlpha(),K<1&&_.setClearColor(16777215,.5),_.clear(),$&&Fe.render(G);const ce=_.toneMapping;_.toneMapping=Zi;const we=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),g.setupLightsView(k),X===!0&&Ie.setGlobalState(_.clippingPlanes,k),an(b,G,k),I.updateMultisampleRenderTarget(re),I.updateRenderTargetMipmap(re),pe.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let xe=0,ke=P.length;xe<ke;xe++){const Ne=P[xe],Ve=Ne.object,qe=Ne.geometry,je=Ne.material,Ye=Ne.group;if(je.side===ii&&Ve.layers.test(k.layers)){const pt=je.side;je.side=Mn,je.needsUpdate=!0,Ht(Ve,G,k,qe,je,Ye),je.side=pt,je.needsUpdate=!0,De=!0}}De===!0&&(I.updateMultisampleRenderTarget(re),I.updateRenderTargetMipmap(re))}_.setRenderTarget(ae),_.setClearColor(B,K),we!==void 0&&(k.viewport=we),_.toneMapping=ce}function an(b,P,G){const k=P.isScene===!0?P.overrideMaterial:null;for(let U=0,re=b.length;U<re;U++){const se=b[U],ae=se.object,ce=se.geometry,we=k===null?se.material:k,De=se.group;ae.layers.test(G.layers)&&Ht(ae,P,G,ce,we,De)}}function Ht(b,P,G,k,U,re){b.onBeforeRender(_,P,G,k,U,re),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,P,G,k,b,re),U.transparent===!0&&U.side===ii&&U.forceSinglePass===!1?(U.side=Mn,U.needsUpdate=!0,_.renderBufferDirect(G,P,k,U,b,re),U.side=Ki,U.needsUpdate=!0,_.renderBufferDirect(G,P,k,U,b,re),U.side=ii):_.renderBufferDirect(G,P,k,U,b,re),b.onAfterRender(_,P,G,k,U,re)}function Tn(b,P,G){P.isScene!==!0&&(P=be);const k=_e.get(b),U=g.state.lights,re=g.state.shadowsArray,se=U.state.version,ae=Re.getParameters(b,U.state,re,P,G),ce=Re.getProgramCacheKey(ae);let we=k.programs;k.environment=b.isMeshStandardMaterial?P.environment:null,k.fog=P.fog,k.envMap=(b.isMeshStandardMaterial?Z:R).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?P.environmentRotation:b.envMapRotation,we===void 0&&(b.addEventListener("dispose",$e),we=new Map,k.programs=we);let De=we.get(ce);if(De!==void 0){if(k.currentProgram===De&&k.lightsStateVersion===se)return Ni(b,ae),De}else ae.uniforms=Re.getUniforms(b),b.onBeforeCompile(ae,_),De=Re.acquireProgram(ae,ce),we.set(ce,De),k.uniforms=ae.uniforms;const xe=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(xe.clippingPlanes=Ie.uniform),Ni(b,ae),k.needsLights=Bn(b),k.lightsStateVersion=se,k.needsLights&&(xe.ambientLightColor.value=U.state.ambient,xe.lightProbe.value=U.state.probe,xe.directionalLights.value=U.state.directional,xe.directionalLightShadows.value=U.state.directionalShadow,xe.spotLights.value=U.state.spot,xe.spotLightShadows.value=U.state.spotShadow,xe.rectAreaLights.value=U.state.rectArea,xe.ltc_1.value=U.state.rectAreaLTC1,xe.ltc_2.value=U.state.rectAreaLTC2,xe.pointLights.value=U.state.point,xe.pointLightShadows.value=U.state.pointShadow,xe.hemisphereLights.value=U.state.hemi,xe.directionalShadowMap.value=U.state.directionalShadowMap,xe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,xe.spotShadowMap.value=U.state.spotShadowMap,xe.spotLightMatrix.value=U.state.spotLightMatrix,xe.spotLightMap.value=U.state.spotLightMap,xe.pointShadowMap.value=U.state.pointShadowMap,xe.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=De,k.uniformsList=null,De}function er(b){if(b.uniformsList===null){const P=b.currentProgram.getUniforms();b.uniformsList=Cl.seqWithValue(P.seq,b.uniforms)}return b.uniformsList}function Ni(b,P){const G=_e.get(b);G.outputColorSpace=P.outputColorSpace,G.batching=P.batching,G.batchingColor=P.batchingColor,G.instancing=P.instancing,G.instancingColor=P.instancingColor,G.instancingMorph=P.instancingMorph,G.skinning=P.skinning,G.morphTargets=P.morphTargets,G.morphNormals=P.morphNormals,G.morphColors=P.morphColors,G.morphTargetsCount=P.morphTargetsCount,G.numClippingPlanes=P.numClippingPlanes,G.numIntersection=P.numClipIntersection,G.vertexAlphas=P.vertexAlphas,G.vertexTangents=P.vertexTangents,G.toneMapping=P.toneMapping}function sa(b,P,G,k,U){P.isScene!==!0&&(P=be),I.resetTextureUnits();const re=P.fog,se=k.isMeshStandardMaterial?P.environment:null,ae=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ri,ce=(k.isMeshStandardMaterial?Z:R).get(k.envMap||se),we=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,De=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),xe=!!G.morphAttributes.position,ke=!!G.morphAttributes.normal,Ne=!!G.morphAttributes.color;let Ve=Zi;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Ve=_.toneMapping);const qe=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,je=qe!==void 0?qe.length:0,Ye=_e.get(k),pt=g.state.lights;if(X===!0&&(te===!0||b!==M)){const Rt=b===M&&k.id===w;Ie.setState(k,b,Rt)}let tt=!1;k.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==pt.state.version||Ye.outputColorSpace!==ae||U.isBatchedMesh&&Ye.batching===!1||!U.isBatchedMesh&&Ye.batching===!0||U.isBatchedMesh&&Ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ye.instancing===!1||!U.isInstancedMesh&&Ye.instancing===!0||U.isSkinnedMesh&&Ye.skinning===!1||!U.isSkinnedMesh&&Ye.skinning===!0||U.isInstancedMesh&&Ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ye.instancingMorph===!1&&U.morphTexture!==null||Ye.envMap!==ce||k.fog===!0&&Ye.fog!==re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ie.numPlanes||Ye.numIntersection!==Ie.numIntersection)||Ye.vertexAlphas!==we||Ye.vertexTangents!==De||Ye.morphTargets!==xe||Ye.morphNormals!==ke||Ye.morphColors!==Ne||Ye.toneMapping!==Ve||Ye.morphTargetsCount!==je)&&(tt=!0):(tt=!0,Ye.__version=k.version);let st=Ye.currentProgram;tt===!0&&(st=Tn(k,P,U));let _t=!1,xt=!1,Mt=!1;const Qe=st.getUniforms(),dt=Ye.uniforms;if(he.useProgram(st.program)&&(_t=!0,xt=!0,Mt=!0),k.id!==w&&(w=k.id,xt=!0),_t||M!==b){he.buffers.depth.getReversed()?(Q.copy(b.projectionMatrix),rx(Q),sx(Q),Qe.setValue(F,"projectionMatrix",Q)):Qe.setValue(F,"projectionMatrix",b.projectionMatrix),Qe.setValue(F,"viewMatrix",b.matrixWorldInverse);const wt=Qe.map.cameraPosition;wt!==void 0&&wt.setValue(F,Ee.setFromMatrixPosition(b.matrixWorld)),Te.logarithmicDepthBuffer&&Qe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Qe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,xt=!0,Mt=!0)}if(U.isSkinnedMesh){Qe.setOptional(F,U,"bindMatrix"),Qe.setOptional(F,U,"bindMatrixInverse");const Rt=U.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),Qe.setValue(F,"boneTexture",Rt.boneTexture,I))}U.isBatchedMesh&&(Qe.setOptional(F,U,"batchingTexture"),Qe.setValue(F,"batchingTexture",U._matricesTexture,I),Qe.setOptional(F,U,"batchingIdTexture"),Qe.setValue(F,"batchingIdTexture",U._indirectTexture,I),Qe.setOptional(F,U,"batchingColorTexture"),U._colorsTexture!==null&&Qe.setValue(F,"batchingColorTexture",U._colorsTexture,I));const Ct=G.morphAttributes;if((Ct.position!==void 0||Ct.normal!==void 0||Ct.color!==void 0)&&Be.update(U,G,st),(xt||Ye.receiveShadow!==U.receiveShadow)&&(Ye.receiveShadow=U.receiveShadow,Qe.setValue(F,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(dt.envMap.value=ce,dt.flipEnvMap.value=ce.isCubeTexture&&ce.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&P.environment!==null&&(dt.envMapIntensity.value=P.environmentIntensity),xt&&(Qe.setValue(F,"toneMappingExposure",_.toneMappingExposure),Ye.needsLights&&qn(dt,Mt),re&&k.fog===!0&&ve.refreshFogUniforms(dt,re),ve.refreshMaterialUniforms(dt,k,ee,ue,g.state.transmissionRenderTarget[b.id]),Cl.upload(F,er(Ye),dt,I)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Cl.upload(F,er(Ye),dt,I),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Qe.setValue(F,"center",U.center),Qe.setValue(F,"modelViewMatrix",U.modelViewMatrix),Qe.setValue(F,"normalMatrix",U.normalMatrix),Qe.setValue(F,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Rt=k.uniformsGroups;for(let wt=0,kn=Rt.length;wt<kn;wt++){const Kn=Rt[wt];j.update(Kn,st),j.bind(Kn,st)}}return st}function qn(b,P){b.ambientLightColor.needsUpdate=P,b.lightProbe.needsUpdate=P,b.directionalLights.needsUpdate=P,b.directionalLightShadows.needsUpdate=P,b.pointLights.needsUpdate=P,b.pointLightShadows.needsUpdate=P,b.spotLights.needsUpdate=P,b.spotLightShadows.needsUpdate=P,b.rectAreaLights.needsUpdate=P,b.hemisphereLights.needsUpdate=P}function Bn(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(b,P,G){_e.get(b.texture).__webglTexture=P,_e.get(b.depthTexture).__webglTexture=G;const k=_e.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,P){const G=_e.get(b);G.__webglFramebuffer=P,G.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(b,P=0,G=0){E=b,T=P,A=G;let k=!0,U=null,re=!1,se=!1;if(b){const ce=_e.get(b);if(ce.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(F.FRAMEBUFFER,null),k=!1;else if(ce.__webglFramebuffer===void 0)I.setupRenderTarget(b);else if(ce.__hasExternalTextures)I.rebindTextures(b,_e.get(b.texture).__webglTexture,_e.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const xe=b.depthTexture;if(ce.__boundDepthTexture!==xe){if(xe!==null&&_e.has(xe)&&(b.width!==xe.image.width||b.height!==xe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(b)}}const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(se=!0);const De=_e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(De[P])?U=De[P][G]:U=De[P],re=!0):b.samples>0&&I.useMultisampledRTT(b)===!1?U=_e.get(b).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[G]:U=De,L.copy(b.viewport),D.copy(b.scissor),z=b.scissorTest}else L.copy(V).multiplyScalar(ee).floor(),D.copy(Y).multiplyScalar(ee).floor(),z=ie;if(he.bindFramebuffer(F.FRAMEBUFFER,U)&&k&&he.drawBuffers(b,U),he.viewport(L),he.scissor(D),he.setScissorTest(z),re){const ce=_e.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+P,ce.__webglTexture,G)}else if(se){const ce=_e.get(b.texture),we=P||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,ce.__webglTexture,G||0,we)}w=-1},this.readRenderTargetPixels=function(b,P,G,k,U,re,se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ae=_e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&se!==void 0&&(ae=ae[se]),ae){he.bindFramebuffer(F.FRAMEBUFFER,ae);try{const ce=b.texture,we=ce.format,De=ce.type;if(!Te.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Te.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=b.width-k&&G>=0&&G<=b.height-U&&F.readPixels(P,G,k,U,Xe.convert(we),Xe.convert(De),re)}finally{const ce=E!==null?_e.get(E).__webglFramebuffer:null;he.bindFramebuffer(F.FRAMEBUFFER,ce)}}},this.readRenderTargetPixelsAsync=async function(b,P,G,k,U,re,se){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ae=_e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&se!==void 0&&(ae=ae[se]),ae){const ce=b.texture,we=ce.format,De=ce.type;if(!Te.textureFormatReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Te.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=b.width-k&&G>=0&&G<=b.height-U){he.bindFramebuffer(F.FRAMEBUFFER,ae);const xe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.bufferData(F.PIXEL_PACK_BUFFER,re.byteLength,F.STREAM_READ),F.readPixels(P,G,k,U,Xe.convert(we),Xe.convert(De),0);const ke=E!==null?_e.get(E).__webglFramebuffer:null;he.bindFramebuffer(F.FRAMEBUFFER,ke);const Ne=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await ix(F,Ne,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,xe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,re),F.deleteBuffer(xe),F.deleteSync(Ne),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,P=null,G=0){b.isTexture!==!0&&(ks("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-G),U=Math.floor(b.image.width*k),re=Math.floor(b.image.height*k),se=P!==null?P.x:0,ae=P!==null?P.y:0;I.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,G,0,0,se,ae,U,re),he.unbindTexture()};const S=F.createFramebuffer(),N=F.createFramebuffer();this.copyTextureToTexture=function(b,P,G=null,k=null,U=0,re=null){b.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],P=arguments[2],re=arguments[3]||0,G=null),re===null&&(U!==0?(ks("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=U,U=0):re=0);let se,ae,ce,we,De,xe,ke,Ne,Ve;const qe=b.isCompressedTexture?b.mipmaps[re]:b.image;if(G!==null)se=G.max.x-G.min.x,ae=G.max.y-G.min.y,ce=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,De=G.min.y,xe=G.isBox3?G.min.z:0;else{const Ct=Math.pow(2,-U);se=Math.floor(qe.width*Ct),ae=Math.floor(qe.height*Ct),b.isDataArrayTexture?ce=qe.depth:b.isData3DTexture?ce=Math.floor(qe.depth*Ct):ce=1,we=0,De=0,xe=0}k!==null?(ke=k.x,Ne=k.y,Ve=k.z):(ke=0,Ne=0,Ve=0);const je=Xe.convert(P.format),Ye=Xe.convert(P.type);let pt;P.isData3DTexture?(I.setTexture3D(P,0),pt=F.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(I.setTexture2DArray(P,0),pt=F.TEXTURE_2D_ARRAY):(I.setTexture2D(P,0),pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,P.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,P.unpackAlignment);const tt=F.getParameter(F.UNPACK_ROW_LENGTH),st=F.getParameter(F.UNPACK_IMAGE_HEIGHT),_t=F.getParameter(F.UNPACK_SKIP_PIXELS),xt=F.getParameter(F.UNPACK_SKIP_ROWS),Mt=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,qe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,we),F.pixelStorei(F.UNPACK_SKIP_ROWS,De),F.pixelStorei(F.UNPACK_SKIP_IMAGES,xe);const Qe=b.isDataArrayTexture||b.isData3DTexture,dt=P.isDataArrayTexture||P.isData3DTexture;if(b.isDepthTexture){const Ct=_e.get(b),Rt=_e.get(P),wt=_e.get(Ct.__renderTarget),kn=_e.get(Rt.__renderTarget);he.bindFramebuffer(F.READ_FRAMEBUFFER,wt.__webglFramebuffer),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,kn.__webglFramebuffer);for(let Kn=0;Kn<ce;Kn++)Qe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.get(b).__webglTexture,U,xe+Kn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,_e.get(P).__webglTexture,re,Ve+Kn)),F.blitFramebuffer(we,De,se,ae,ke,Ne,se,ae,F.DEPTH_BUFFER_BIT,F.NEAREST);he.bindFramebuffer(F.READ_FRAMEBUFFER,null),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(U!==0||b.isRenderTargetTexture||_e.has(b)){const Ct=_e.get(b),Rt=_e.get(P);he.bindFramebuffer(F.READ_FRAMEBUFFER,S),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,N);for(let wt=0;wt<ce;wt++)Qe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.__webglTexture,U,xe+wt):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ct.__webglTexture,U),dt?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Rt.__webglTexture,re,Ve+wt):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Rt.__webglTexture,re),U!==0?F.blitFramebuffer(we,De,se,ae,ke,Ne,se,ae,F.COLOR_BUFFER_BIT,F.NEAREST):dt?F.copyTexSubImage3D(pt,re,ke,Ne,Ve+wt,we,De,se,ae):F.copyTexSubImage2D(pt,re,ke,Ne,we,De,se,ae);he.bindFramebuffer(F.READ_FRAMEBUFFER,null),he.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else dt?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(pt,re,ke,Ne,Ve,se,ae,ce,je,Ye,qe.data):P.isCompressedArrayTexture?F.compressedTexSubImage3D(pt,re,ke,Ne,Ve,se,ae,ce,je,qe.data):F.texSubImage3D(pt,re,ke,Ne,Ve,se,ae,ce,je,Ye,qe):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,re,ke,Ne,se,ae,je,Ye,qe.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,re,ke,Ne,qe.width,qe.height,je,qe.data):F.texSubImage2D(F.TEXTURE_2D,re,ke,Ne,se,ae,je,Ye,qe);F.pixelStorei(F.UNPACK_ROW_LENGTH,tt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,st),F.pixelStorei(F.UNPACK_SKIP_PIXELS,_t),F.pixelStorei(F.UNPACK_SKIP_ROWS,xt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Mt),re===0&&P.generateMipmaps&&F.generateMipmap(pt),he.unbindTexture()},this.copyTextureToTexture3D=function(b,P,G=null,k=null,U=0){return b.isTexture!==!0&&(ks("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,b=arguments[2],P=arguments[3],U=arguments[4]||0),ks('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,P,G,k,U)},this.initRenderTarget=function(b){_e.get(b).__webglFramebuffer===void 0&&I.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?I.setTextureCube(b,0):b.isData3DTexture?I.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?I.setTexture2DArray(b,0):I.setTexture2D(b,0),he.unbindTexture()},this.resetState=function(){T=0,A=0,E=null,he.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const lE=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:ug,AddEquation:dr,AddOperation:og,AdditiveAnimationBlendMode:ff,AdditiveBlending:Mu,AgXToneMapping:zl,AlphaFormat:af,AlwaysCompare:Tg,AlwaysDepth:Ll,AlwaysStencilFunc:Au,AmbientLight:_v,AnimationAction:Av,AnimationClip:ao,AnimationLoader:Ty,AnimationMixer:$y,AnimationObjectGroup:jy,AnimationUtils:Sy,ArcCurve:Hg,ArrayCamera:Mv,ArrowHelper:x1,AttachedBindMode:Tu,Audio:Ev,AudioAnalyser:Vy,AudioContext:Bf,AudioListener:By,AudioLoader:Ny,AxesHelper:y1,BackSide:Mn,BasicDepthPacking:_g,BasicShadowMap:a_,BatchedMesh:zg,Bone:bf,BooleanKeyframeTrack:ps,Box2:a1,Box3:Zt,Box3Helper:v1,BoxGeometry:ds,BoxHelper:g1,BufferAttribute:At,BufferGeometry:ht,BufferGeometryLoader:Sv,ByteType:nf,Cache:Wi,Camera:Pc,CameraHelper:m1,CanvasTexture:Yx,CapsuleGeometry:Bc,CatmullRomCurve3:Wg,CineonToneMapping:hg,CircleGeometry:kc,ClampToEdgeWrapping:si,Clock:wv,Color:Ze,ColorKeyframeTrack:Uf,ColorManagement:mt,CompressedArrayTexture:Wx,CompressedCubeTexture:Xx,CompressedTexture:Fc,CompressedTextureLoader:Ay,ConeGeometry:zc,ConstantAlphaFactor:rg,ConstantColorFactor:ng,Controls:Iv,CubeCamera:Ug,CubeReflectionMapping:Ji,CubeRefractionMapping:_r,CubeTexture:vo,CubeTextureLoader:Cy,CubeUVReflectionMapping:ea,CubicBezierCurve:Ef,CubicBezierCurve3:Xg,CubicInterpolant:hv,CullFaceBack:Su,CullFaceFront:Vm,CullFaceFrontBack:s_,CullFaceNone:zm,Curve:xi,CurvePath:Zg,CustomBlending:Gm,CustomToneMapping:fg,CylinderGeometry:ta,Cylindrical:s1,Data3DTexture:gf,DataArrayTexture:Cc,DataTexture:Ti,DataTextureLoader:Nf,DataUtils:Kr,DecrementStencilOp:y_,DecrementWrapStencilOp:S_,DefaultLoadingManager:gs,DepthFormat:ts,DepthStencilFormat:ls,DepthTexture:Mf,DetachedBindMode:pg,DirectionalLight:vv,DirectionalLightHelper:p1,DiscreteInterpolant:uv,DodecahedronGeometry:Vc,DoubleSide:ii,DstAlphaFactor:jm,DstColorFactor:$m,DynamicCopyUsage:O_,DynamicDrawUsage:P_,DynamicReadUsage:L_,EdgesGeometry:qg,EllipseCurve:Oc,EqualCompare:Sg,EqualDepth:Fl,EqualStencilFunc:T_,EquirectangularReflectionMapping:Js,EquirectangularRefractionMapping:Xa,Euler:Xn,EventDispatcher:Di,ExtrudeGeometry:Hc,FileLoader:Qi,Float16BufferAttribute:Ex,Float32BufferAttribute:Ke,FloatType:Yt,Fog:Uc,FogExp2:Dc,FramebufferTexture:Hx,FrontSide:Ki,Frustum:_o,GLBufferAttribute:i1,GLSL1:k_,GLSL3:Cu,GreaterCompare:Mg,GreaterDepth:Bl,GreaterEqualCompare:Eg,GreaterEqualDepth:Ol,GreaterEqualStencilFunc:I_,GreaterStencilFunc:C_,GridHelper:f1,Group:Jr,HalfFloatType:Ln,HemisphereLight:pv,HemisphereLightHelper:u1,IcosahedronGeometry:Wc,ImageBitmapLoader:Ly,ImageLoader:oo,ImageUtils:Rg,IncrementStencilOp:x_,IncrementWrapStencilOp:b_,InstancedBufferAttribute:hs,InstancedBufferGeometry:Of,InstancedInterleavedBuffer:n1,InstancedMesh:kg,Int16BufferAttribute:Mx,Int32BufferAttribute:wx,Int8BufferAttribute:yx,IntType:Sc,InterleavedBuffer:Lc,InterleavedBufferAttribute:cs,Interpolant:bo,InterpolateDiscrete:qa,InterpolateLinear:dc,InterpolateSmooth:Al,InvertStencilOp:M_,KeepStencilOp:Vr,KeyframeTrack:yi,LOD:Og,LatheGeometry:xo,Layers:Rc,LessCompare:bg,LessDepth:Nl,LessEqualCompare:pf,LessEqualDepth:as,LessEqualStencilFunc:A_,LessStencilFunc:E_,Light:Mr,LightProbe:bv,Line:xr,Line3:Cv,LineBasicMaterial:wn,LineCurve:Tf,LineCurve3:Yg,LineDashedMaterial:ov,LineLoop:Vg,LineSegments:Li,LinearFilter:Dt,LinearInterpolant:Df,LinearMipMapLinearFilter:h_,LinearMipMapNearestFilter:c_,LinearMipmapLinearFilter:wi,LinearMipmapNearestFilter:Pa,LinearSRGBColorSpace:Ri,LinearToneMapping:lg,LinearTransfer:Ja,Loader:On,LoaderUtils:Uu,LoadingManager:Lf,LoopOnce:mg,LoopPingPong:vg,LoopRepeat:gg,LuminanceAlphaFormat:cf,LuminanceFormat:lf,MOUSE:$r,Material:pn,MaterialLoader:$c,MathUtils:mr,Matrix2:Gf,Matrix3:lt,Matrix4:rt,MaxEquation:Ym,Mesh:Ut,MeshBasicMaterial:Ui,MeshDepthMaterial:jc,MeshDistanceMaterial:Qc,MeshLambertMaterial:sv,MeshMatcapMaterial:av,MeshNormalMaterial:rv,MeshPhongMaterial:nv,MeshPhysicalMaterial:tv,MeshStandardMaterial:If,MeshToonMaterial:iv,MinEquation:Xm,MirroredRepeatWrapping:Za,MixOperation:ag,MultiplyBlending:Eu,MultiplyOperation:po,NearestFilter:rn,NearestMipMapLinearFilter:l_,NearestMipMapNearestFilter:o_,NearestMipmapLinearFilter:Vs,NearestMipmapNearestFilter:tf,NeutralToneMapping:dg,NeverCompare:yg,NeverDepth:Ul,NeverStencilFunc:w_,NoBlending:Yi,NoColorSpace:Mi,NoToneMapping:Zi,NormalAnimationBlendMode:Ac,NormalBlending:es,NotEqualCompare:wg,NotEqualDepth:kl,NotEqualStencilFunc:R_,NumberKeyframeTrack:ro,Object3D:vt,ObjectLoader:Dy,ObjectSpaceNormalMap:xg,OctahedronGeometry:yo,OneFactor:qm,OneMinusConstantAlphaFactor:sg,OneMinusConstantColorFactor:ig,OneMinusDstAlphaFactor:Qm,OneMinusDstColorFactor:eg,OneMinusSrcAlphaFactor:Dl,OneMinusSrcColorFactor:Jm,OrthographicCamera:Mo,PCFShadowMap:ef,PCFSoftShadowMap:Ia,PMREMGenerator:Ou,Path:eo,PerspectiveCamera:en,Plane:$n,PlaneGeometry:$i,PlaneHelper:_1,PointLight:gv,PointLightHelper:c1,Points:Gg,PointsMaterial:Sf,PolarGridHelper:d1,PolyhedronGeometry:Sr,PositionalAudio:zy,PropertyBinding:gt,PropertyMixer:Tv,QuadraticBezierCurve:Af,QuadraticBezierCurve3:Cf,Quaternion:dn,QuaternionKeyframeTrack:So,QuaternionLinearInterpolant:fv,RED_GREEN_RGTC2_Format:uc,RED_RGTC1_Format:uf,REVISION:yc,RGBADepthPacking:df,RGBAFormat:fn,RGBAIntegerFormat:Tc,RGBA_ASTC_10x10_Format:sc,RGBA_ASTC_10x5_Format:nc,RGBA_ASTC_10x6_Format:ic,RGBA_ASTC_10x8_Format:rc,RGBA_ASTC_12x10_Format:ac,RGBA_ASTC_12x12_Format:oc,RGBA_ASTC_4x4_Format:ql,RGBA_ASTC_5x4_Format:Kl,RGBA_ASTC_5x5_Format:Jl,RGBA_ASTC_6x5_Format:jl,RGBA_ASTC_6x6_Format:Ql,RGBA_ASTC_8x5_Format:$l,RGBA_ASTC_8x6_Format:ec,RGBA_ASTC_8x8_Format:tc,RGBA_BPTC_Format:Fa,RGBA_ETC2_EAC_Format:Zl,RGBA_PVRTC_2BPPV1_Format:Wl,RGBA_PVRTC_4BPPV1_Format:Hl,RGBA_S3TC_DXT1_Format:Ua,RGBA_S3TC_DXT3_Format:La,RGBA_S3TC_DXT5_Format:Na,RGBDepthPacking:m_,RGBFormat:of,RGBIntegerFormat:u_,RGB_BPTC_SIGNED_Format:lc,RGB_BPTC_UNSIGNED_Format:cc,RGB_ETC1_Format:Xl,RGB_ETC2_Format:Yl,RGB_PVRTC_2BPPV1_Format:Gl,RGB_PVRTC_4BPPV1_Format:Vl,RGB_S3TC_DXT1_Format:Da,RGDepthPacking:g_,RGFormat:hf,RGIntegerFormat:Ec,RawShaderMaterial:ev,Ray:br,Raycaster:r1,RectAreaLight:xv,RedFormat:mo,RedIntegerFormat:go,ReinhardToneMapping:cg,RenderTarget:Ig,RepeatWrapping:Ya,ReplaceStencilOp:__,ReverseSubtractEquation:Wm,RingGeometry:Xc,SIGNED_RED_GREEN_RGTC2_Format:fc,SIGNED_RED_RGTC1_Format:hc,SRGBColorSpace:Dn,SRGBTransfer:bt,Scene:xf,ShaderChunk:at,ShaderLib:ei,ShaderMaterial:gi,ShadowMaterial:$g,Shape:is,ShapeGeometry:Yc,ShapePath:b1,ShapeUtils:Ai,ShortType:rf,Skeleton:Nc,SkeletonHelper:l1,SkinnedMesh:Bg,Source:qr,Sphere:Kt,SphereGeometry:na,Spherical:Nu,SphericalHarmonics3:yv,SplineCurve:Rf,SpotLight:mv,SpotLightHelper:o1,Sprite:Fg,SpriteMaterial:yf,SrcAlphaFactor:Pl,SrcAlphaSaturateFactor:tg,SrcColorFactor:Km,StaticCopyUsage:F_,StaticDrawUsage:ja,StaticReadUsage:U_,StereoCamera:Fy,StreamCopyUsage:B_,StreamDrawUsage:D_,StreamReadUsage:N_,StringKeyframeTrack:ms,SubtractEquation:Hm,SubtractiveBlending:wu,TOUCH:Xr,TangentSpaceNormalMap:yr,TetrahedronGeometry:Zc,Texture:Bt,TextureLoader:dv,TextureUtils:T1,TorusGeometry:qc,TorusKnotGeometry:Kc,Triangle:Un,TriangleFanDrawMode:p_,TriangleStripDrawMode:d_,TrianglesDrawMode:f_,TubeGeometry:Jc,UVMapping:bc,Uint16BufferAttribute:vf,Uint32BufferAttribute:_f,Uint8BufferAttribute:bx,Uint8ClampedBufferAttribute:Sx,Uniform:Vf,UniformsGroup:t1,UniformsLib:We,UniformsUtils:Ic,UnsignedByteType:Ci,UnsignedInt248Type:os,UnsignedInt5999Type:sf,UnsignedIntType:ji,UnsignedShort4444Type:Mc,UnsignedShort5551Type:wc,UnsignedShortType:js,VSMShadowMap:bi,Vector2:ye,Vector3:O,Vector4:ft,VectorKeyframeTrack:so,VideoTexture:Gx,WebGL3DRenderTarget:hx,WebGLArrayRenderTarget:cx,WebGLCoordinateSystem:Ei,WebGLCubeRenderTarget:Lg,WebGLMultipleRenderTargets:A1,WebGLRenderTarget:mi,WebGLRenderer:Ov,WebGLUtils:Fv,WebGPUCoordinateSystem:Qa,WireframeGeometry:Qg,WrapAroundEnding:Ka,ZeroCurvatureEnding:Yr,ZeroFactor:Zm,ZeroSlopeEnding:Zr,ZeroStencilOp:v_,createCanvasElement:Cg},Symbol.toStringTag,{value:"Module"})),im=(s,e)=>{if(s===e)return!0;if(!s||!e)return!1;const t=s.length;if(e.length!==t)return!1;for(let i=0;i<t;i++)if(s[i]!==e[i])return!1;return!0},cE=()=>{const s=[],i={items:s,remember:(n,r)=>{for(let o=0;o<s.length;o++){const l=s[o];if(im(r,l.keys)&&l.promise)return l.promise}const a={promise:n(),keys:r};return s.push(a),a.promise},clear:n=>{for(let r=0;r<s.length;r++){const a=s[r];if(im(n,a.keys)){s.splice(r,1);return}}}};return Yn("threlte-cache",i),i},hE=()=>{const s=Fn("threlte-cache");if(!s)throw new Error("No cache found. The cache can only be used in a child component to <Canvas>.");return s},rm=Symbol(),uE=s=>typeof(s==null?void 0:s.subscribe)=="function",Bv=(s,e,t)=>{const i=s().map(a=>uE(a)?i_(a):rm),n=hn(()=>s().map((a,o)=>i[o]===rm?a:i[o].current)),r=()=>{Ge(n);let a;return Ju(()=>{a=e(Ge(n))}),a};t?yn(r):nn(r)},fE=(s,e)=>Bv(s,e,!1),dE=(s,e)=>Bv(s,e,!0),sm=Object.assign(fE,{pre:dE}),ti=(s,e)=>(s==null?void 0:s[`is${e}`])===!0,pE=typeof window<"u",Hn=(s,e)=>{const t=ss(s,r=>r);let i;const n=t.subscribe(async r=>{i&&i();const a=await e(r);a&&(i=a)});Pi(()=>{n(),i&&i()})},Xt=s=>{const e=Nn(s),t={set:i=>{t.current=i,e.set(i)},subscribe:e.subscribe,update:i=>{const n=i(t.current);t.current=n,e.set(n)},current:s};return t},mE=s=>({subscribe:s.subscribe,get current(){return s.current}}),kv=(s,e)=>{if(e.includes(".")){const t=e.split("."),i=t.pop();for(let n=0;n<t.length;n+=1)s=s[t[n]];return{target:s,key:i}}else return{target:s,key:e}},gE=s=>{const e=s.dom.getBoundingClientRect();let t=e.width,i=e.height;const n=Xt(e);xc(()=>{const a=new ResizeObserver(o=>{for(const l of o){const{width:c,height:h}=l.contentRect;if(c===t&&h===i)return;t=c,i=h,n.set(l.contentRect)}});return a.observe(s.dom),()=>{a.disconnect()}});const r={dom:s.dom,canvas:s.canvas,size:mE(n)};return Yn("threlte-dom-context",r),r},Wf=()=>{const s=Fn("threlte-dom-context");if(!s)throw new Error("useDOM can only be used in a child component to <Canvas>.");return s};function vE(s){return{all:s=s||new Map,on:function(e,t){var i=s.get(e);i?i.push(t):s.set(e,[t])},off:function(e,t){var i=s.get(e);i&&(t?i.splice(i.indexOf(t)>>>0,1):s.set(e,[]))},emit:function(e,t){var i=s.get(e);i&&i.slice().map(function(n){n(t)}),(i=s.get("*"))&&i.slice().map(function(n){n(e,t)})}}}class fr{constructor(){Nt(this,"allVertices",{});Nt(this,"isolatedVertices",{});Nt(this,"connectedVertices",{});Nt(this,"sortedConnectedValues",[]);Nt(this,"needsSort",!1);Nt(this,"emitter",vE());Nt(this,"emit",this.emitter.emit.bind(this.emitter));Nt(this,"on",this.emitter.on.bind(this.emitter));Nt(this,"off",this.emitter.off.bind(this.emitter));Nt(this,"getKey",e=>typeof e=="object"?e.key:e)}get sortedVertices(){return this.mapNodes(e=>e)}moveToIsolated(e){const t=this.connectedVertices[e];t&&(this.isolatedVertices[e]=t,delete this.connectedVertices[e])}moveToConnected(e){const t=this.isolatedVertices[e];t&&(this.connectedVertices[e]=t,delete this.isolatedVertices[e])}add(e,t,i){if(this.allVertices[e]&&this.allVertices[e].value!==void 0)throw new Error(`A node with the key ${e.toString()} already exists`);let n=this.allVertices[e];n?n.value===void 0&&(n.value=t):(n={value:t,previous:new Set,next:new Set},this.allVertices[e]=n);const r=n.next.size>0||n.previous.size>0;if(!(i!=null&&i.after)&&!(i!=null&&i.before)&&!r){this.isolatedVertices[e]=n,this.emit("node:added",{key:e,type:"isolated",value:t});return}else this.connectedVertices[e]=n;if(i!=null&&i.after){const a=Array.isArray(i.after)?i.after:[i.after];a.forEach(o=>{n.previous.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.next.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set,next:new Set([e])},this.connectedVertices[l]=this.allVertices[l])})}if(i!=null&&i.before){const a=Array.isArray(i.before)?i.before:[i.before];a.forEach(o=>{n.next.add(this.getKey(o))}),a.forEach(o=>{const l=this.getKey(o),c=this.allVertices[l];c?(c.previous.add(e),this.moveToConnected(l)):(this.allVertices[l]={value:void 0,previous:new Set([e]),next:new Set},this.connectedVertices[l]=this.allVertices[l])})}this.emit("node:added",{key:e,type:"connected",value:t}),this.needsSort=!0}remove(e){const t=this.getKey(e);if(this.isolatedVertices[t]){delete this.isolatedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"isolated"});return}const n=this.connectedVertices[t];n&&(n.next.forEach(r=>{const a=this.connectedVertices[r];a&&(a.previous.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),n.previous.forEach(r=>{const a=this.connectedVertices[r];a&&(a.next.delete(t),a.previous.size===0&&a.next.size===0&&this.moveToIsolated(r))}),delete this.connectedVertices[t],delete this.allVertices[t],this.emit("node:removed",{key:t,type:"connected"}),this.needsSort=!0)}mapNodes(e){this.needsSort&&this.sort();const t=[];return this.forEachNode((i,n)=>{t.push(e(i,n))}),t}forEachNode(e){this.needsSort&&this.sort();let t=0;for(;t<this.sortedConnectedValues.length;t++)e(this.sortedConnectedValues[t],t);Reflect.ownKeys(this.isolatedVertices).forEach(i=>{const n=this.isolatedVertices[i];n.value!==void 0&&e(n.value,t++)})}getValueByKey(e){var t;return(t=this.allVertices[e])==null?void 0:t.value}getKeyByValue(e){return Reflect.ownKeys(this.connectedVertices).find(t=>this.connectedVertices[t].value===e)??Reflect.ownKeys(this.isolatedVertices).find(t=>this.isolatedVertices[t].value===e)}sort(){var a;const e=new Map,t=[],i=[],n=Reflect.ownKeys(this.connectedVertices).filter(o=>this.connectedVertices[o].value!==void 0);for(n.forEach(o=>{e.set(o,0)}),n.forEach(o=>{this.connectedVertices[o].next.forEach(c=>{this.connectedVertices[c]&&e.set(c,(e.get(c)||0)+1)})}),e.forEach((o,l)=>{o===0&&t.push(l)});t.length>0;){const o=t.shift();i.push(o);const l=n.find(c=>c===o);l&&((a=this.connectedVertices[l])==null||a.next.forEach(c=>{const h=(e.get(c)||0)-1;e.set(c,h),h===0&&t.push(c)}))}if(i.length!==n.length)throw new Error("The graph contains a cycle, and thus can not be sorted topologically.");const r=o=>o!==void 0;this.sortedConnectedValues=i.map(o=>this.connectedVertices[o].value).filter(r),this.needsSort=!1}clear(){this.allVertices={},this.isolatedVertices={},this.connectedVertices={},this.sortedConnectedValues=[],this.needsSort=!1}static isKey(e){return typeof e=="string"||typeof e=="symbol"}static isValue(e){return typeof e=="object"&&"key"in e}}class _E{constructor(e,t,i){Nt(this,"key");Nt(this,"stage");Nt(this,"callback");Nt(this,"runTask",!0);this.stage=e,this.key=t,this.callback=i}stop(){this.runTask=!1}start(){this.runTask=!0}run(e){this.runTask&&this.callback(e)}}class xE extends fr{constructor(t,i,n){super();Nt(this,"key");Nt(this,"scheduler");Nt(this,"runTask",!0);Nt(this,"callback",(t,i)=>i());Nt(this,"removeTask",this.remove.bind(this));this.scheduler=t,this.key=i,this.start=this.start.bind(this),this.stop=this.stop.bind(this),n&&(this.callback=n.bind(this))}stop(){this.runTask=!1}start(){this.runTask=!0}get tasks(){return this.sortedVertices}createTask(t,i,n){const r=new _E(this,t,i);return this.add(t,r,n),r}getTask(t){return this.getValueByKey(t)}run(t){this.runTask&&this.callback(t,i=>{this.forEachNode(n=>{n.run(i??t)})})}runWithTiming(t){if(!this.runTask)return{};const i={};return this.callback(t,n=>{this.forEachNode(r=>{const a=performance.now();r.run(n??t);const o=performance.now()-a;i[r.key]=o})}),i}getSchedule(){return this.mapNodes(t=>t.key.toString())}}class yE extends fr{constructor(t){super();Nt(this,"lastTime",performance.now());Nt(this,"clampDeltaTo",.1);Nt(this,"removeStage",this.remove.bind(this));t!=null&&t.clampDeltaTo&&(this.clampDeltaTo=t.clampDeltaTo),this.run=this.run.bind(this)}get stages(){return this.sortedVertices}createStage(t,i){const n=new xE(this,t,i==null?void 0:i.callback);return this.add(t,n,{after:i==null?void 0:i.after,before:i==null?void 0:i.before}),n}getStage(t){return this.getValueByKey(t)}run(t){const i=t-this.lastTime;this.forEachNode(n=>{n.run(Math.min(i/1e3,this.clampDeltaTo))}),this.lastTime=t}runWithTiming(t){const i=t-this.lastTime,n={},r=performance.now();return this.forEachNode(a=>{const o=performance.now(),l=a.runWithTiming(Math.min(i/1e3,this.clampDeltaTo)),c=performance.now()-o;n[a.key.toString()]={duration:c,tasks:l}}),{total:performance.now()-r,stages:n}}getSchedule(t={tasks:!0}){return{stages:this.mapNodes(i=>{if(i===void 0)throw new Error("Stage not found");return{key:i.key.toString(),tasks:t.tasks?i.getSchedule():void 0}})}}dispose(){this.clear()}}const bE=s=>{const e=new yE,t=e.createStage(Symbol("threlte-main-stage")),i={scheduler:e,frameInvalidated:!0,autoInvalidations:new Set,shouldAdvance:!1,advance:()=>{i.shouldAdvance=!0},autoRender:Xt(s.autoRender??!0),renderMode:Xt(s.renderMode??"on-demand"),invalidate(){i.frameInvalidated=!0},mainStage:t,shouldRender:()=>i.renderMode.current==="always"||i.renderMode.current==="on-demand"&&(i.frameInvalidated||i.autoInvalidations.size>0)||i.renderMode.current==="manual"&&i.shouldAdvance,renderStage:e.createStage(Symbol("threlte-render-stage"),{after:t,callback(n,r){i.shouldRender()&&r()}}),resetFrameInvalidation(){i.frameInvalidated=!1,i.shouldAdvance=!1}};return nn(()=>{i.autoRender.set(s.autoRender??!0)}),nn(()=>{i.renderMode.set(s.renderMode??"on-demand")}),Pi(()=>{i.scheduler.dispose()}),Yn("threlte-scheduler-context",i),i},th=()=>{const s=Fn("threlte-scheduler-context");if(!s)throw new Error("useScheduler can only be used in a child component to <Canvas>.");return s},SE=()=>{const{size:s}=Wf(),{invalidate:e}=th(),t=new en(75,0,.1,1e3);t.position.z=5,t.lookAt(0,0,0);const i=Xt(t);Hn(s,r=>{if(i.current===t){const a=i.current;a.aspect=r.width/r.height,a.updateProjectionMatrix(),e()}});const n={camera:i};return Yn("threlte-camera-context",n),n},zv=()=>{const s=Fn("threlte-camera-context");if(!s)throw new Error("useCamera can only be used in a child component to <Canvas>.");return s},ME=()=>{const s={removeObjectFromDisposal:e=>{s.disposableObjects.delete(e)},disposableObjectMounted:e=>{const t=s.disposableObjects.get(e);t?s.disposableObjects.set(e,t+1):s.disposableObjects.set(e,1)},disposableObjectUnmounted:e=>{const t=s.disposableObjects.get(e);t&&t>0&&(s.disposableObjects.set(e,t-1),t-1<=0&&(s.shouldDispose=!0))},disposableObjects:new Map,shouldDispose:!1,dispose:async(e=!1)=>{await Qu(),!(!s.shouldDispose&&!e)&&(s.disposableObjects.forEach((t,i)=>{var n;(t===0||e)&&((n=i==null?void 0:i.dispose)==null||n.call(i),s.disposableObjects.delete(i))}),s.shouldDispose=!1)}};return Pi(()=>{s.dispose(!0)}),Yn("threlte-disposal-context",s),s},Vv=()=>{const s=Fn("threlte-disposal-context");if(!s)throw new Error("useDisposal can only be used in a child component to <Canvas>.");return s},Gv=Symbol("threlte-parent-context"),Hv=s=>{const e=Xt(s);return Yn(Gv,e),e},Wv=()=>Fn(Gv),vc=Symbol("threlte-parent-object3d-context"),wE=s=>{const e=$u(s);return Yn(vc,e),e},EE=s=>{const e=Fn(vc),t=Nn(s),i=ss([t,e],([n,r])=>n??r);return Yn(vc,i),t},Xv=()=>Fn(vc);function Yv(s,e,t){if(!pE)return{task:void 0,start:()=>{},stop:()=>{},started:$u(!1)};let i,n,r;fr.isKey(s)?(i=s,n=e,r=t):(i=Symbol("useTask"),n=s,r=e);const a=th();let o=a.mainStage;if(r){if(r.stage)if(fr.isValue(r.stage))o=r.stage;else{const f=a.scheduler.getStage(r.stage);if(!f)throw new Error(`No stage found with key ${r.stage.toString()}`);o=f}else if(r.after)if(Array.isArray(r.after))for(let f=0;f<r.after.length;f++){const d=r.after[f];if(fr.isValue(d)){o=d.stage;break}}else fr.isValue(r.after)&&(o=r.after.stage);else if(r.before)if(Array.isArray(r.before))for(let f=0;f<r.before.length;f++){const d=r.before[f];if(fr.isValue(d)){o=d.stage;break}}else fr.isValue(r.before)&&(o=r.before.stage)}const l=Nn(!1),c=o.createTask(i,n,r),h=()=>{l.set(!0),((r==null?void 0:r.autoInvalidate)??!0)&&a.autoInvalidations.add(n),c.start()},u=()=>{l.set(!1),((r==null?void 0:r.autoInvalidate)??!0)&&a.autoInvalidations.delete(n),c.stop()};return(r==null?void 0:r.autoStart)??!0?h():u(),Pi(()=>{o&&o.removeTask(i)}),{task:c,start:h,stop:u,started:{subscribe:l.subscribe}}}const TE=s=>{const e={scene:new xf};return Yn("threlte-scene-context",e),e},Zv=()=>{const s=Fn("threlte-scene-context");if(!s)throw new Error("useScene can only be used in a child component to <Canvas>.");return s},AE=s=>{const{dispose:e}=Vv(),{camera:t}=zv(),{scene:i}=Zv(),{invalidate:n,renderStage:r,autoRender:a,scheduler:o,resetFrameInvalidation:l}=th(),{size:c,canvas:h}=Wf(),u=s.createRenderer?s.createRenderer(h):new Ov({canvas:h,powerPreference:"high-performance",antialias:!0,alpha:!0}),f=r.createTask(Symbol("threlte-auto-render-task"),()=>{u.render(i,t.current)}),d={renderer:u,colorManagementEnabled:Xt(s.colorManagementEnabled??!0),colorSpace:Xt(s.colorSpace??"srgb"),dpr:Xt(s.dpr??window.devicePixelRatio),shadows:Xt(s.shadows??Ia),toneMapping:Xt(s.toneMapping??zl),autoRenderTask:f};Yn("threlte-renderer-context",d),Hn([d.colorManagementEnabled],([m])=>{mt.enabled=m}),Hn([d.colorSpace],([m])=>{"outputColorSpace"in u&&(u.outputColorSpace=m)}),Hn([d.dpr],([m])=>{"setPixelRatio"in u&&u.setPixelRatio(m)});const{start:p,stop:v}=Yv(()=>{var m;!("xr"in u)||(m=u.xr)!=null&&m.isPresenting||(u.setSize(c.current.width,c.current.height),n(),v())},{before:f,autoStart:!1,autoInvalidate:!1});return Hn([c],()=>{p()}),Hn([d.shadows],([m])=>{"shadowMap"in u&&(u.shadowMap.enabled=!!m,m&&m!==!0?u.shadowMap.type=m:m===!0&&(u.shadowMap.type=Ia))}),Hn([d.toneMapping],([m])=>{"toneMapping"in u&&(u.toneMapping=m)}),Hn([a],([m])=>(m?d.autoRenderTask.start():d.autoRenderTask.stop(),()=>{d.autoRenderTask.stop()})),"setAnimationLoop"in d.renderer&&d.renderer.setAnimationLoop(g=>{e(),o.run(g),l()}),Pi(()=>{if("dispose"in d.renderer){const m=d.renderer.dispose;m()}}),nn(()=>{d.colorManagementEnabled.set(s.colorManagementEnabled??!0)}),nn(()=>{d.colorSpace.set(s.colorSpace??"srgb")}),nn(()=>{d.toneMapping.set(s.toneMapping??zl)}),nn(()=>{d.shadows.set(s.shadows??Ia)}),nn(()=>{d.dpr.set(s.dpr??window.devicePixelRatio)}),d},CE=()=>{const s=Fn("threlte-renderer-context");if(!s)throw new Error("useRenderer can only be used in a child component to <Canvas>.");return s},RE=()=>{const s=Xt({});Yn("threlte-user-context",s)},IE=()=>{const s=Fn("threlte-user-context");if(!s)throw new Error("useUserContext can only be used in a child component to <Canvas>.");return s},PE=s=>{gE(s),cE();const{scene:e}=TE();Hv(e),wE(e),ME(),bE(s),SE(),AE(s),RE()};function DE(s,e){vi(e,!0);let t=fo(e,["$$slots","$$events","$$legacy","children"]);PE(t);var i=un(),n=Gt(i);gr(n,()=>e.children),It(s,i),_i()}var UE=Ii('<div class="svelte-1osucwe"><canvas class="svelte-1osucwe"><!></canvas></div>');function LE(s,e){vi(e,!0);let t=fo(e,["$$slots","$$events","$$legacy","children"]),i=di(void 0),n=di(void 0);var r=UE(),a=_n(r),o=_n(a);{var l=c=>{DE(c,_c({get dom(){return Ge(n)},get canvas(){return Ge(i)}},()=>t,{children:(h,u)=>{var f=un(),d=Gt(f);gr(d,()=>e.children??Et),It(h,f)},$$slots:{default:!0}}))};Xi(o,c=>{Ge(i)&&Ge(n)&&c(l)})}xn(a),xd(a,c=>Sn(i,c),()=>Ge(i)),xn(r),xd(r,c=>Sn(n,c),()=>Ge(n)),It(s,r),_i()}const wr=()=>{const s=th(),e=CE(),t=zv(),i=Zv(),n=Wf();return{advance:s.advance,autoRender:s.autoRender,autoRenderTask:e.autoRenderTask,camera:t.camera,colorManagementEnabled:e.colorManagementEnabled,colorSpace:e.colorSpace,dpr:e.dpr,invalidate:s.invalidate,mainStage:s.mainStage,renderer:e.renderer,renderMode:s.renderMode,renderStage:s.renderStage,scheduler:s.scheduler,shadows:e.shadows,shouldRender:s.shouldRender,dom:n.dom,canvas:n.canvas,size:n.size,toneMapping:e.toneMapping,get scene(){return i.scene},set scene(a){i.scene=a}}},NE=s=>typeof s=="object"&&s!==null,FE=()=>{const{invalidate:s}=wr();let e;const t=Nn(),i=Wv(),n=Xv(),r=Hv(),a=EE();Hn([t,r,i,n],([c,h,u,f])=>{if(e==null||e(),e=void 0,!h){s();return}if(c!==void 0){if(c){if(typeof c=="function")e=c({ref:h,parent:u,parentObject3D:f});else if(ti(c,"Object3D")&&ti(h,"Object3D"))e=()=>c==null?void 0:c.remove(h),c==null||c.add(h);else if(typeof c=="string"){const{target:d,key:p}=kv(u,c),v=d[p];e=()=>d[p]=v,d[p]=h}}}else ti(h,"Object3D")?(e=()=>f==null?void 0:f.remove(h),f==null||f.add(h)):NE(u)&&(ti(h,"Material")?u.material=h:ti(h,"BufferGeometry")&&(u.geometry=h));s()});const o=c=>{t.set(c)},l=c=>{r.set(c),ti(c,"Object3D")&&a.set(c)};return Pi(()=>{e==null||e(),s()}),{updateRef:l,updateAttach:o}},OE=s=>ti(s,"PerspectiveCamera")||ti(s,"OrthographicCamera"),BE=()=>{const{invalidate:s,size:e,camera:t}=wr(),i=Nn(),n=Nn(!0),r=Nn(!1);return Hn([i,r],([c,h])=>{!c||!h||(t.set(c),s())}),Hn([i,n,e],([c,h,u])=>{!c||h||(ti(c,"OrthographicCamera")?(c.left=u.width/-2,c.right=u.width/2,c.top=u.height/2,c.bottom=u.height/-2,c.updateProjectionMatrix(),c.updateMatrixWorld(),s()):ti(c,"PerspectiveCamera")&&(c.aspect=u.width/u.height,c.updateProjectionMatrix(),c.updateMatrixWorld(),s()))}),{updateRef:c=>{OE(c)&&i.set(c)},updateManual:c=>{n.set(c)},updateMakeDefault:c=>{r.set(c)}}},kE=s=>{let e,t,i=!1;const n=()=>{e==null||e(),e=s==null?void 0:s(t)},r=a=>{t=a,i&&n()};return xc(()=>{n(),i=!0}),Pi(()=>e==null?void 0:e()),{updateRef:r}},am=Symbol("threlte-disposable-object-context"),zE=s=>typeof(s==null?void 0:s.dispose)=="function"&&!ti(s,"Scene"),VE=s=>{let e;const t=Nn(void 0),i=Nn(s),{disposableObjectMounted:n,disposableObjectUnmounted:r,removeObjectFromDisposal:a}=Vv(),o=Fn(am),l=ss([i,o??Nn(!0)],([u,f])=>u??f??!0);return Yn(am,l),Hn([t,l],([u,f])=>{u===e?f?e&&n(e):e&&a(e):f&&(e&&r(e),u&&n(u)),e=u}),Pi(()=>{if(!bu(l))return;const u=bu(t);u&&r(u)}),{updateRef:u=>{zE(u)&&t.set(u)},updateDispose:u=>{i.set(u)}}},GE=s=>s!==null&&typeof s=="object"&&"addEventListener"in s&&"removeEventListener"in s,HE=(s={})=>{const e=n=>{var r;n!=null&&n.type&&((r=s[`on${n.type}`])==null||r.call(s,n))},t=(n,r)=>{const a=[];for(const o of Object.keys(r))o.startsWith("on")&&(n.addEventListener(o.slice(2),e),a.push(o));return()=>{for(let o=0;o<a.length;o++)n.removeEventListener(a[o],e)}};return{updateRef:n=>{if(GE(n))return t(n,s)}}};let ku;const WE=s=>{ku=s},XE=()=>{const s=ku;return ku=void 0,s},YE=s=>{const t=Fn("threlte-plugin-context");if(!t)return;const i=[],n=Object.values(t);if(n.length){const r=s();for(let a=0;a<n.length;a++){const o=n[a],l=o(r);l&&l.pluginProps&&i.push(...l.pluginProps)}}return{pluginsProps:i}},ZE=new Set(["$$scope","$$slots","type","args","attach","instance"]),qE=new Set(["fov","aspect","near","far","left","right","top","bottom","zoom"]),KE=s=>typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s>"u"||s===null,om=(s,e,t)=>{var i,n,r;return!Array.isArray(t)&&typeof t=="number"&&typeof((i=s[e])==null?void 0:i.setScalar)=="function"&&!((n=s[e])!=null&&n.isColor)?(a,o,l)=>{a[o].setScalar(l)}:typeof((r=s[e])==null?void 0:r.set)=="function"?Array.isArray(t)?(a,o,l)=>{a[o].set(...l)}:(a,o,l)=>{a[o].set(l)}:(a,o,l)=>{a[o]=l}},JE=()=>{const{invalidate:s}=wr(),e=new Map,t=new Map,i=(r,a,o,l)=>{if(KE(o)){const u=e.get(a);if(u&&u.instance===r&&u.value===o)return;e.set(a,{instance:r,value:o})}const{key:c,target:h}=kv(r,a);if(o!=null){const u=t.get(a);if(u)u(h,c,o);else{const f=om(h,c,o);t.set(a,f),f(h,c,o)}}else om(h,c,o)(h,c,o);l.manualCamera||qE.has(c)&&(h.isPerspectiveCamera||h.isOrthographicCamera)&&h.updateProjectionMatrix()};return{updateProp:(r,a,o,l)=>{var c;!ZE.has(a)&&!((c=l.pluginsProps)!=null&&c.includes(a))&&i(r,a,o,l),s()}}},jE=/^\s*class\s+/,QE=s=>typeof s!="function"?!1:jE.test(s.toString()),$E=s=>Array.isArray(s),eT=(s,e)=>QE(s)?$E(e)?new s(...e):new s:s;function cu(s,e){vi(e,!0);let t=ni(e,"is",19,XE),i=ni(e,"manual",3,!1),n=ni(e,"makeDefault",3,!1),r=ni(e,"ref",15),a=fo(e,["$$slots","$$events","$$legacy","is","args","attach","manual","makeDefault","dispose","ref","oncreate","children"]),o=hn(()=>eT(t(),e.args));const l=kE(e.oncreate);yn(()=>{r()!==Ge(o)&&(r(Ge(o)),l.updateRef(Ge(o)))});const c=YE(()=>({get ref(){return Ge(o)},get args(){return e.args},get attach(){return e.attach},get manual(){return i()},get makeDefault(){return n()},get dispose(){return e.dispose},get props(){return a}})),{updateProp:h}=JE();Object.keys(a).forEach(g=>{yn(()=>{h(Ge(o),g,a[g],{manualCamera:i(),pluginsProps:c==null?void 0:c.pluginsProps})})});const u=FE();yn(()=>u.updateAttach(e.attach)),yn(()=>u.updateRef(Ge(o)));const f=BE();yn(()=>f.updateRef(Ge(o))),yn(()=>f.updateManual(i())),yn(()=>f.updateMakeDefault(n()));const d=VE(e.dispose);yn(()=>d.updateRef(Ge(o))),yn(()=>d.updateDispose(e.dispose));const p=HE(a);yn(()=>p.updateRef(Ge(o)));var v=un(),m=Gt(v);gr(m,()=>e.children??Et,()=>({ref:Ge(o)})),It(s,v),_i()}const tT={},pi=new Proxy(function(){},{apply(s,e,t){return cu(...t)},get(s,e){if(typeof e!="string")return cu;const t=tT[e]||lE[e];if(t===void 0)throw new Error(`No Three.js module found for ${e}. Did you forget to extend the catalogue?`);return WE(t),cu}});function nT(s,e,t){const i=IE();if(!i)throw new Error("No user context store found, did you invoke this function outside of your main <Canvas> component?");return e?(i.update(n=>{if(s in n)return n;const r=typeof e=="function"?e():e;return n[s]=r,n}),i.current[s]):ss(i,n=>n[s])}function lm(s){return Object.prototype.toString.call(s)==="[object Date]"}function iT(s){return s}function zu(s,e){if(s===e||s!==s)return()=>s;const t=typeof s;if(t!==typeof e||Array.isArray(s)!==Array.isArray(e))throw new Error("Cannot interpolate values of different type");if(Array.isArray(s)){const i=e.map((n,r)=>zu(s[r],n));return n=>i.map(r=>r(n))}if(t==="object"){if(!s||!e)throw new Error("Object cannot be null");if(lm(s)&&lm(e)){const r=s.getTime(),o=e.getTime()-r;return l=>new Date(r+l*o)}const i=Object.keys(e),n={};return i.forEach(r=>{n[r]=zu(s[r],e[r])}),r=>{const a={};return i.forEach(o=>{a[o]=n[o](r)}),a}}if(t==="number"){const i=e-s;return n=>s+n*i}throw new Error(`Cannot interpolate ${t} values`)}var pr,qs,uo,Ks;const Qf=class Qf{constructor(e,t={}){da(this,pr,Wa(void 0));da(this,qs,Wa(void 0));da(this,uo);da(this,Ks,null);Jn(this,pr).v=Jn(this,qs).v=e,gh(this,uo,t)}static of(e,t){const i=new Qf(e(),t);return ju(()=>{i.set(e())}),i}set(e,t){Sn(Jn(this,qs),e);let i=Jn(this,pr).v,n=Jn(this,Ks),r=!1,{delay:a=0,duration:o=400,easing:l=iT,interpolate:c=zu}={...Jn(this,uo),...t};const h=Si.now()+a;let u;return gh(this,Ks,$0(f=>{if(f<h)return!0;r||(r=!0,u=c(i,e),typeof o=="function"&&(o=o(i,e)),n==null||n.abort());const d=f-h;return d>o?(Sn(Jn(this,pr),e),!1):(Sn(Jn(this,pr),u(l(d/o))),!0)})),Jn(this,Ks).promise}get current(){return Ge(Jn(this,pr))}get target(){return Ge(Jn(this,qs))}set target(e){this.set(e)}};pr=new WeakMap,qs=new WeakMap,uo=new WeakMap,Ks=new WeakMap;let Vu=Qf;const kr=s=>({subscribe:s.subscribe,get current(){return s.current}});let za=0;const Xf=Xt(!1),nh=Xt(!1),Yf=Xt(void 0),Zf=Xt(0),qf=Xt(0),qv=Xt([]),Kf=Xt(0),{onStart:hu,onLoad:uu,onError:fu}=gs;gs.onStart=(s,e,t)=>{hu==null||hu(s,e,t),nh.set(!0),Yf.set(s),Zf.set(e),qf.set(t);const i=(e-za)/(t-za);Kf.set(i),i===1&&Xf.set(!0)};gs.onLoad=()=>{uu==null||uu(),nh.set(!1)};gs.onError=s=>{fu==null||fu(s),qv.update(e=>[...e,s])};gs.onProgress=(s,e,t)=>{e===t&&(za=t),nh.set(!0),Yf.set(s),Zf.set(e),qf.set(t);const i=(e-za)/(t-za)||1;Kf.set(i),i===1&&Xf.set(!0)};kr(nh),kr(Yf),kr(Zf),kr(qf),kr(qv),kr(Kf),kr(Xf);new O;new O;new O;new Kt;new rt;new br;new O;const Kv=Symbol("THRELTE_SUSPENSE_CONTEXT_IDENTIFIER"),rT=s=>{const e=Xt(new Set),t=Xt(new Map),i=Nn(!1),n=()=>{e.current.size===0&&t.current.size===0&&i.set(!0)},r=Nn((s==null?void 0:s.final)??!1),a=d=>{e.update(p=>(p.add(d),p))},o=d=>{e.update(p=>(p.delete(d),p))},l=(d,p)=>{t.update(v=>(v.set(d,p),v))},c=d=>{t.update(p=>(p.delete(d),p))},h=ss([e,t,r,i],([d,p,v,m])=>v&&m?!1:p.size>0?!0:d.size>0),u={suspend(d){a(d),d.catch(p=>{l(d,p)}).finally(()=>{o(d),n()})},onComponentDestroy(d){o(d),c(d),n()},suspended:h},f=ss(t,d=>Array.from(d.values()));return Yn(Kv,u),{promises:e,suspended:h,errors:f,setFinal:d=>r.set(d??!1)}},Jv=()=>{const s=Fn(Kv),e=new Set,t=n=>(s&&(s.suspend(n),e.add(n)),n),i={suspended:ss((s==null?void 0:s.suspended)??$u(!1),n=>n)};return Pi(()=>{if(s){for(const n of e)s.onComponentDestroy(n);e.clear()}}),Object.assign(t,i)};new O;new O;new O;new ye;new Zt;new O;We.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new ye(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};ei.line={uniforms:Ic.merge([We.common,We.fog,We.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};new O;new O;new ft;new ft;new ft;new O;new rt;new Cv;new O;new Zt;new Kt;new ft;const cm={type:"change"},Jf={type:"start"},jv={type:"end"},yl=new br,hm=new $n,sT=Math.cos(70*mr.DEG2RAD),qt=new O,In=2*Math.PI,Tt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},du=1e-6;let aT=class extends Iv{constructor(e,t=null){super(e,t),this.state=Tt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:Xr.ROTATE,TWO:Xr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new dn,this._lastTargetPosition=new O,this._quat=new dn().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Nu,this._sphericalDelta=new Nu,this._scale=1,this._panOffset=new O,this._rotateStart=new ye,this._rotateEnd=new ye,this._rotateDelta=new ye,this._panStart=new ye,this._panEnd=new ye,this._panDelta=new ye,this._dollyStart=new ye,this._dollyEnd=new ye,this._dollyDelta=new ye,this._dollyDirection=new O,this._mouse=new ye,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lT.bind(this),this._onPointerDown=oT.bind(this),this._onPointerUp=cT.bind(this),this._onContextMenu=gT.bind(this),this._onMouseWheel=fT.bind(this),this._onKeyDown=dT.bind(this),this._onTouchStart=pT.bind(this),this._onTouchMove=mT.bind(this),this._onMouseDown=hT.bind(this),this._onMouseMove=uT.bind(this),this._interceptControlDown=vT.bind(this),this._interceptControlUp=_T.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cm),this.update(),this.state=Tt.NONE}update(e=null){const t=this.object.position;qt.copy(t).sub(this.target),qt.applyQuaternion(this._quat),this._spherical.setFromVector3(qt),this.autoRotate&&this.state===Tt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=In:i>Math.PI&&(i-=In),n<-Math.PI?n+=In:n>Math.PI&&(n-=In),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(qt.setFromSpherical(this._spherical),qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=qt.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new O(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(yl.origin.copy(this.object.position),yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yl.direction))<sT?this.object.lookAt(this.target):(hm.setFromNormalAndCoplanarPoint(this.object.up,this.target),yl.intersectPlane(hm,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>du||8*(1-this._lastQuaternion.dot(this.object.quaternion))>du||this._lastTargetPosition.distanceToSquared(this.target)>du?(this.dispatchEvent(cm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?In/60*this.autoRotateSpeed*e:In/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){qt.setFromMatrixColumn(t,0),qt.multiplyScalar(-e),this._panOffset.add(qt)}_panUp(e,t){this.screenSpacePanning===!0?qt.setFromMatrixColumn(t,1):(qt.setFromMatrixColumn(t,0),qt.crossVectors(this.object.up,qt)),qt.multiplyScalar(e),this._panOffset.add(qt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;qt.copy(n).sub(this.target);let r=qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/i.clientHeight,this.object.matrix),this._panUp(2*t*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,r=t-i.top,a=i.width,o=i.height;this._mouse.x=n/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-In*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),r=.5*(e.pageY+i.y);this._rotateEnd.set(n,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(In*this._rotateDelta.x/t.clientHeight),this._rotateUp(In*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,r=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ye,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}};function oT(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function lT(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function cT(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(jv),this.state=Tt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function hT(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case $r.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Tt.DOLLY;break;case $r.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Tt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Tt.ROTATE}break;case $r.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Tt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Tt.PAN}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Jf)}function uT(s){switch(this.state){case Tt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Tt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Tt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function fT(s){this.enabled===!1||this.enableZoom===!1||this.state!==Tt.NONE||(s.preventDefault(),this.dispatchEvent(Jf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(jv))}function dT(s){this.enabled!==!1&&this._handleKeyDown(s)}function pT(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Xr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Tt.TOUCH_ROTATE;break;case Xr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Tt.TOUCH_PAN;break;default:this.state=Tt.NONE}break;case 2:switch(this.touches.TWO){case Xr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Tt.TOUCH_DOLLY_PAN;break;case Xr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Tt.TOUCH_DOLLY_ROTATE;break;default:this.state=Tt.NONE}break;default:this.state=Tt.NONE}this.state!==Tt.NONE&&this.dispatchEvent(Jf)}function mT(s){switch(this._trackPointer(s),this.state){case Tt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Tt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Tt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Tt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Tt.NONE}}function gT(s){this.enabled!==!1&&s.preventDefault()}function vT(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _T(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function um(s,e,t){const i=t.length-s-1;if(e>=t[i])return i-1;if(e<=t[s])return s;let n=s,r=i,a=Math.floor((n+r)/2);for(;e<t[a]||e>=t[a+1];)e<t[a]?r=a:n=a,a=Math.floor((n+r)/2);return a}function fm(s,e,t,i){const n=[],r=[],a=[];n[0]=1;for(let o=1;o<=t;++o){r[o]=e-i[s+1-o],a[o]=i[s+o]-e;let l=0;for(let c=0;c<o;++c){const h=a[c+1],u=r[o-c],f=n[c]/(h+u);n[c]=l+h*f,l=u*f}n[o]=l}return n}function xT(s,e,t,i,n,r,a,o){const l=um(s,r,t),c=um(e,a,i),h=fm(l,r,s,t),u=fm(c,a,e,i),f=[];for(let p=0;p<=e;++p){f[p]=new ft(0,0,0,0);for(let v=0;v<=s;++v){const m=n[l-s+v][c-e+p].clone(),g=m.w;m.x*=g,m.y*=g,m.z*=g,f[p].add(m.multiplyScalar(h[v]))}}const d=new ft(0,0,0,0);for(let p=0;p<=e;++p)d.add(f[p].multiplyScalar(u[p]));d.divideScalar(d.w),o.set(d.x,d.y,d.z)}class yT{constructor(e,t,i,n,r){this.degree1=e,this.degree2=t,this.knots1=i,this.knots2=n,this.controlPoints=[];const a=i.length-e-1,o=n.length-t-1;for(let l=0;l<a;++l){this.controlPoints[l]=[];for(let c=0;c<o;++c){const h=r[l][c];this.controlPoints[l][c]=new ft(h.x,h.y,h.z,h.w)}}}getPoint(e,t,i){const n=this.knots1[0]+e*(this.knots1[this.knots1.length-1]-this.knots1[0]),r=this.knots2[0]+t*(this.knots2[this.knots2.length-1]-this.knots2[0]);xT(this.degree1,this.degree2,this.knots1,this.knots2,this.controlPoints,n,r,i)}}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ri=Uint8Array,Xs=Uint16Array,bT=Int32Array,Qv=new ri([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),$v=new ri([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ST=new ri([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),e0=function(s,e){for(var t=new Xs(31),i=0;i<31;++i)t[i]=e+=1<<s[i-1];for(var n=new bT(t[30]),i=1;i<30;++i)for(var r=t[i];r<t[i+1];++r)n[r]=r-t[i]<<5|i;return{b:t,r:n}},t0=e0(Qv,2),n0=t0.b,MT=t0.r;n0[28]=258,MT[258]=28;var wT=e0($v,0),ET=wT.b,Gu=new Xs(32768);for(var Pt=0;Pt<32768;++Pt){var hr=(Pt&43690)>>1|(Pt&21845)<<1;hr=(hr&52428)>>2|(hr&13107)<<2,hr=(hr&61680)>>4|(hr&3855)<<4,Gu[Pt]=((hr&65280)>>8|(hr&255)<<8)>>1}var Va=function(s,e,t){for(var i=s.length,n=0,r=new Xs(e);n<i;++n)s[n]&&++r[s[n]-1];var a=new Xs(e);for(n=1;n<e;++n)a[n]=a[n-1]+r[n-1]<<1;var o;if(t){o=new Xs(1<<e);var l=15-e;for(n=0;n<i;++n)if(s[n])for(var c=n<<4|s[n],h=e-s[n],u=a[s[n]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[Gu[u]>>l]=c}else for(o=new Xs(i),n=0;n<i;++n)s[n]&&(o[n]=Gu[a[s[n]-1]++]>>15-s[n]);return o},wo=new ri(288);for(var Pt=0;Pt<144;++Pt)wo[Pt]=8;for(var Pt=144;Pt<256;++Pt)wo[Pt]=9;for(var Pt=256;Pt<280;++Pt)wo[Pt]=7;for(var Pt=280;Pt<288;++Pt)wo[Pt]=8;var i0=new ri(32);for(var Pt=0;Pt<32;++Pt)i0[Pt]=5;var TT=Va(wo,9,1),AT=Va(i0,5,1),pu=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},ui=function(s,e,t){var i=e/8|0;return(s[i]|s[i+1]<<8)>>(e&7)&t},mu=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},CT=function(s){return(s+7)/8|0},RT=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new ri(s.subarray(e,t))},IT=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],fi=function(s,e,t){var i=new Error(e||IT[s]);if(i.code=s,Error.captureStackTrace&&Error.captureStackTrace(i,fi),!t)throw i;return i},PT=function(s,e,t,i){var n=s.length,r=0;if(!n||e.f&&!e.l)return t||new ri(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ri(n*3));var c=function(be){var $=t.length;if(be>$){var ge=new ri(Math.max($*2,be));ge.set(t),t=ge}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,p=e.d,v=e.m,m=e.n,g=n*8;do{if(!d){h=ui(s,u,1);var y=ui(s,u+1,3);if(u+=3,y)if(y==1)d=TT,p=AT,v=9,m=5;else if(y==2){var T=ui(s,u,31)+257,A=ui(s,u+10,15)+4,E=T+ui(s,u+5,31)+1;u+=14;for(var w=new ri(E),M=new ri(19),L=0;L<A;++L)M[ST[L]]=ui(s,u+L*3,7);u+=A*3;for(var D=pu(M),z=(1<<D)-1,B=Va(M,D,1),L=0;L<E;){var K=B[ui(s,u,z)];u+=K&15;var x=K>>4;if(x<16)w[L++]=x;else{var H=0,ue=0;for(x==16?(ue=3+ui(s,u,3),u+=2,H=w[L-1]):x==17?(ue=3+ui(s,u,7),u+=3):x==18&&(ue=11+ui(s,u,127),u+=7);ue--;)w[L++]=H}}var ee=w.subarray(0,T),J=w.subarray(T);v=pu(ee),m=pu(J),d=Va(ee,v,1),p=Va(J,m,1)}else fi(1);else{var x=CT(u)+4,_=s[x-4]|s[x-3]<<8,C=x+_;if(C>n){l&&fi(0);break}o&&c(f+_),t.set(s.subarray(x,C),f),e.b=f+=_,e.p=u=C*8,e.f=h;continue}if(u>g){l&&fi(0);break}}o&&c(f+131072);for(var q=(1<<v)-1,V=(1<<m)-1,Y=u;;Y=u){var H=d[mu(s,u)&q],ie=H>>4;if(u+=H&15,u>g){l&&fi(0);break}if(H||fi(2),ie<256)t[f++]=ie;else if(ie==256){Y=u,d=null;break}else{var W=ie-254;if(ie>264){var L=ie-257,X=Qv[L];W=ui(s,u,(1<<X)-1)+n0[L],u+=X}var te=p[mu(s,u)&V],Q=te>>4;te||fi(3),u+=te&15;var J=ET[Q];if(Q>3){var X=$v[Q];J+=mu(s,u)&(1<<X)-1,u+=X}if(u>g){l&&fi(0);break}o&&c(f+131072);var fe=f+W;if(f<J){var Ee=r-J,Ae=Math.min(J,fe);for(Ee+f<0&&fi(3);f<Ae;++f)t[f]=i[Ee+f]}for(;f<fe;++f)t[f]=t[f-J]}}e.l=d,e.p=Y,e.b=f,e.f=h,d&&(h=1,e.m=v,e.d=p,e.n=m)}while(!h);return f!=t.length&&a?RT(t,0,f):t.subarray(0,f)},DT=new ri(0),UT=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&fi(6,"invalid zlib data"),(s[1]>>5&1)==+!e&&fi(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function bl(s,e){return PT(s.subarray(UT(s,e),-4),{i:2},e,e)}var LT=typeof TextDecoder<"u"&&new TextDecoder,NT=0;try{LT.decode(DT,{stream:!0}),NT=1}catch{}class dm extends ht{constructor(e=(n,r,a)=>a.set(n,r,Math.cos(n)*Math.sin(r)),t=8,i=8){super(),this.type="ParametricGeometry",this.parameters={func:e,slices:t,stacks:i};const n=[],r=[],a=[],o=[],l=1e-5,c=new O,h=new O,u=new O,f=new O,d=new O,p=t+1;for(let v=0;v<=i;v++){const m=v/i;for(let g=0;g<=t;g++){const y=g/t;e(y,m,h),r.push(h.x,h.y,h.z),y-l>=0?(e(y-l,m,u),f.subVectors(h,u)):(e(y+l,m,u),f.subVectors(u,h)),m-l>=0?(e(y,m-l,u),d.subVectors(h,u)):(e(y,m+l,u),d.subVectors(u,h)),c.crossVectors(f,d).normalize(),a.push(c.x,c.y,c.z),o.push(y,m)}}for(let v=0;v<i;v++)for(let m=0;m<t;m++){const g=v*p+m,y=v*p+m+1,x=(v+1)*p+m+1,_=(v+1)*p+m;n.push(g,y,_),n.push(y,x,_)}this.setIndex(n),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class FT extends Nf{constructor(e){super(e),this.type=Ln}parse(e){const w=Math.pow(2.7182818,2.2);function M(S,N){let b=0;for(let G=0;G<65536;++G)(G==0||S[G>>3]&1<<(G&7))&&(N[b++]=G);const P=b-1;for(;b<65536;)N[b++]=0;return P}function L(S){for(let N=0;N<16384;N++)S[N]={},S[N].len=0,S[N].lit=0,S[N].p=null}const D={l:0,c:0,lc:0};function z(S,N,b,P,G){for(;b<S;)N=N<<8|Ce(P,G),b+=8;b-=S,D.l=N>>b&(1<<S)-1,D.c=N,D.lc=b}const B=new Array(59);function K(S){for(let b=0;b<=58;++b)B[b]=0;for(let b=0;b<65537;++b)B[S[b]]+=1;let N=0;for(let b=58;b>0;--b){const P=N+B[b]>>1;B[b]=N,N=P}for(let b=0;b<65537;++b){const P=S[b];P>0&&(S[b]=P|B[P]++<<6)}}function H(S,N,b,P,G,k){const U=N;let re=0,se=0;for(;P<=G;P++){if(U.value-N.value>b)return!1;z(6,re,se,S,U);const ae=D.l;if(re=D.c,se=D.lc,k[P]=ae,ae==63){if(U.value-N.value>b)throw new Error("Something wrong with hufUnpackEncTable");z(8,re,se,S,U);let ce=D.l+6;if(re=D.c,se=D.lc,P+ce>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ce--;)k[P++]=0;P--}else if(ae>=59){let ce=ae-59+2;if(P+ce>G+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ce--;)k[P++]=0;P--}}K(k)}function ue(S){return S&63}function ee(S){return S>>6}function J(S,N,b,P){for(;N<=b;N++){const G=ee(S[N]),k=ue(S[N]);if(G>>k)throw new Error("Invalid table entry");if(k>14){const U=P[G>>k-14];if(U.len)throw new Error("Invalid table entry");if(U.lit++,U.p){const re=U.p;U.p=new Array(U.lit);for(let se=0;se<U.lit-1;++se)U.p[se]=re[se]}else U.p=new Array(1);U.p[U.lit-1]=N}else if(k){let U=0;for(let re=1<<14-k;re>0;re--){const se=P[(G<<14-k)+U];if(se.len||se.p)throw new Error("Invalid table entry");se.len=k,se.lit=N,U++}}}return!0}const q={c:0,lc:0};function V(S,N,b,P){S=S<<8|Ce(b,P),N+=8,q.c=S,q.lc=N}const Y={c:0,lc:0};function ie(S,N,b,P,G,k,U,re,se){if(S==N){P<8&&(V(b,P,G,k),b=q.c,P=q.lc),P-=8;let ae=b>>P;if(ae=new Uint8Array([ae])[0],re.value+ae>se)return!1;const ce=U[re.value-1];for(;ae-- >0;)U[re.value++]=ce}else if(re.value<se)U[re.value++]=S;else return!1;Y.c=b,Y.lc=P}function W(S){return S&65535}function X(S){const N=W(S);return N>32767?N-65536:N}const te={a:0,b:0};function Q(S,N){const b=X(S),G=X(N),k=b+(G&1)+(G>>1),U=k,re=k-G;te.a=U,te.b=re}function fe(S,N){const b=W(S),P=W(N),G=b-(P>>1)&65535,k=P+G-32768&65535;te.a=k,te.b=G}function Ee(S,N,b,P,G,k,U){const re=U<16384,se=b>G?G:b;let ae=1,ce,we;for(;ae<=se;)ae<<=1;for(ae>>=1,ce=ae,ae>>=1;ae>=1;){we=0;const De=we+k*(G-ce),xe=k*ae,ke=k*ce,Ne=P*ae,Ve=P*ce;let qe,je,Ye,pt;for(;we<=De;we+=ke){let tt=we;const st=we+P*(b-ce);for(;tt<=st;tt+=Ve){const _t=tt+Ne,xt=tt+xe,Mt=xt+Ne;re?(Q(S[tt+N],S[xt+N]),qe=te.a,Ye=te.b,Q(S[_t+N],S[Mt+N]),je=te.a,pt=te.b,Q(qe,je),S[tt+N]=te.a,S[_t+N]=te.b,Q(Ye,pt),S[xt+N]=te.a,S[Mt+N]=te.b):(fe(S[tt+N],S[xt+N]),qe=te.a,Ye=te.b,fe(S[_t+N],S[Mt+N]),je=te.a,pt=te.b,fe(qe,je),S[tt+N]=te.a,S[_t+N]=te.b,fe(Ye,pt),S[xt+N]=te.a,S[Mt+N]=te.b)}if(b&ae){const _t=tt+xe;re?Q(S[tt+N],S[_t+N]):fe(S[tt+N],S[_t+N]),qe=te.a,S[_t+N]=te.b,S[tt+N]=qe}}if(G&ae){let tt=we;const st=we+P*(b-ce);for(;tt<=st;tt+=Ve){const _t=tt+Ne;re?Q(S[tt+N],S[_t+N]):fe(S[tt+N],S[_t+N]),qe=te.a,S[_t+N]=te.b,S[tt+N]=qe}}ce=ae,ae>>=1}return we}function Ae(S,N,b,P,G,k,U,re,se){let ae=0,ce=0;const we=U,De=Math.trunc(P.value+(G+7)/8);for(;P.value<De;)for(V(ae,ce,b,P),ae=q.c,ce=q.lc;ce>=14;){const ke=ae>>ce-14&16383,Ne=N[ke];if(Ne.len)ce-=Ne.len,ie(Ne.lit,k,ae,ce,b,P,re,se,we),ae=Y.c,ce=Y.lc;else{if(!Ne.p)throw new Error("hufDecode issues");let Ve;for(Ve=0;Ve<Ne.lit;Ve++){const qe=ue(S[Ne.p[Ve]]);for(;ce<qe&&P.value<De;)V(ae,ce,b,P),ae=q.c,ce=q.lc;if(ce>=qe&&ee(S[Ne.p[Ve]])==(ae>>ce-qe&(1<<qe)-1)){ce-=qe,ie(Ne.p[Ve],k,ae,ce,b,P,re,se,we),ae=Y.c,ce=Y.lc;break}}if(Ve==Ne.lit)throw new Error("hufDecode issues")}}const xe=8-G&7;for(ae>>=xe,ce-=xe;ce>0;){const ke=N[ae<<14-ce&16383];if(ke.len)ce-=ke.len,ie(ke.lit,k,ae,ce,b,P,re,se,we),ae=Y.c,ce=Y.lc;else throw new Error("hufDecode issues")}return!0}function be(S,N,b,P,G,k){const U={value:0},re=b.value,se=Be(N,b),ae=Be(N,b);b.value+=4;const ce=Be(N,b);if(b.value+=4,se<0||se>=65537||ae<0||ae>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const we=new Array(65537),De=new Array(16384);L(De);const xe=P-(b.value-re);if(H(S,b,xe,se,ae,we),ce>8*(P-(b.value-re)))throw new Error("Something wrong with hufUncompress");J(we,se,ae,De),Ae(we,De,S,b,ce,ae,k,G,U)}function $(S,N,b){for(let P=0;P<b;++P)N[P]=S[N[P]]}function ge(S){for(let N=1;N<S.length;N++){const b=S[N-1]+S[N]-128;S[N]=b}}function F(S,N){let b=0,P=Math.floor((S.length+1)/2),G=0;const k=S.length-1;for(;!(G>k||(N[G++]=S[b++],G>k));)N[G++]=S[P++]}function Se(S){let N=S.byteLength;const b=new Array;let P=0;const G=new DataView(S);for(;N>0;){const k=G.getInt8(P++);if(k<0){const U=-k;N-=U+1;for(let re=0;re<U;re++)b.push(G.getUint8(P++))}else{const U=k;N-=2;const re=G.getUint8(P++);for(let se=0;se<U+1;se++)b.push(re)}}return b}function pe(S,N,b,P,G,k){let U=new DataView(k.buffer);const re=b[S.idx[0]].width,se=b[S.idx[0]].height,ae=3,ce=Math.floor(re/8),we=Math.ceil(re/8),De=Math.ceil(se/8),xe=re-(we-1)*8,ke=se-(De-1)*8,Ne={value:0},Ve=new Array(ae),qe=new Array(ae),je=new Array(ae),Ye=new Array(ae),pt=new Array(ae);for(let st=0;st<ae;++st)pt[st]=N[S.idx[st]],Ve[st]=st<1?0:Ve[st-1]+we*De,qe[st]=new Float32Array(64),je[st]=new Uint16Array(64),Ye[st]=new Uint16Array(we*64);for(let st=0;st<De;++st){let _t=8;st==De-1&&(_t=ke);let xt=8;for(let Qe=0;Qe<we;++Qe){Qe==we-1&&(xt=xe);for(let dt=0;dt<ae;++dt)je[dt].fill(0),je[dt][0]=G[Ve[dt]++],Te(Ne,P,je[dt]),he(je[dt],qe[dt]),Le(qe[dt]);_e(qe);for(let dt=0;dt<ae;++dt)I(qe[dt],Ye[dt],Qe*64)}let Mt=0;for(let Qe=0;Qe<ae;++Qe){const dt=b[S.idx[Qe]].type;for(let Ct=8*st;Ct<8*st+_t;++Ct){Mt=pt[Qe][Ct];for(let Rt=0;Rt<ce;++Rt){const wt=Rt*64+(Ct&7)*8;U.setUint16(Mt+0*2*dt,Ye[Qe][wt+0],!0),U.setUint16(Mt+1*2*dt,Ye[Qe][wt+1],!0),U.setUint16(Mt+2*2*dt,Ye[Qe][wt+2],!0),U.setUint16(Mt+3*2*dt,Ye[Qe][wt+3],!0),U.setUint16(Mt+4*2*dt,Ye[Qe][wt+4],!0),U.setUint16(Mt+5*2*dt,Ye[Qe][wt+5],!0),U.setUint16(Mt+6*2*dt,Ye[Qe][wt+6],!0),U.setUint16(Mt+7*2*dt,Ye[Qe][wt+7],!0),Mt+=8*2*dt}}if(ce!=we)for(let Ct=8*st;Ct<8*st+_t;++Ct){const Rt=pt[Qe][Ct]+8*ce*2*dt,wt=ce*64+(Ct&7)*8;for(let kn=0;kn<xt;++kn)U.setUint16(Rt+kn*2*dt,Ye[Qe][wt+kn],!0)}}}const tt=new Uint16Array(re);U=new DataView(k.buffer);for(let st=0;st<ae;++st){b[S.idx[st]].decoded=!0;const _t=b[S.idx[st]].type;if(b[st].type==2)for(let xt=0;xt<se;++xt){const Mt=pt[st][xt];for(let Qe=0;Qe<re;++Qe)tt[Qe]=U.getUint16(Mt+Qe*2*_t,!0);for(let Qe=0;Qe<re;++Qe)U.setFloat32(Mt+Qe*2*_t,ne(tt[Qe]),!0)}}}function Te(S,N,b){let P,G=1;for(;G<64;)P=N[S.value],P==65280?G=64:P>>8==255?G+=P&255:(b[G]=P,G++),S.value++}function he(S,N){N[0]=ne(S[0]),N[1]=ne(S[1]),N[2]=ne(S[5]),N[3]=ne(S[6]),N[4]=ne(S[14]),N[5]=ne(S[15]),N[6]=ne(S[27]),N[7]=ne(S[28]),N[8]=ne(S[2]),N[9]=ne(S[4]),N[10]=ne(S[7]),N[11]=ne(S[13]),N[12]=ne(S[16]),N[13]=ne(S[26]),N[14]=ne(S[29]),N[15]=ne(S[42]),N[16]=ne(S[3]),N[17]=ne(S[8]),N[18]=ne(S[12]),N[19]=ne(S[17]),N[20]=ne(S[25]),N[21]=ne(S[30]),N[22]=ne(S[41]),N[23]=ne(S[43]),N[24]=ne(S[9]),N[25]=ne(S[11]),N[26]=ne(S[18]),N[27]=ne(S[24]),N[28]=ne(S[31]),N[29]=ne(S[40]),N[30]=ne(S[44]),N[31]=ne(S[53]),N[32]=ne(S[10]),N[33]=ne(S[19]),N[34]=ne(S[23]),N[35]=ne(S[32]),N[36]=ne(S[39]),N[37]=ne(S[45]),N[38]=ne(S[52]),N[39]=ne(S[54]),N[40]=ne(S[20]),N[41]=ne(S[22]),N[42]=ne(S[33]),N[43]=ne(S[38]),N[44]=ne(S[46]),N[45]=ne(S[51]),N[46]=ne(S[55]),N[47]=ne(S[60]),N[48]=ne(S[21]),N[49]=ne(S[34]),N[50]=ne(S[37]),N[51]=ne(S[47]),N[52]=ne(S[50]),N[53]=ne(S[56]),N[54]=ne(S[59]),N[55]=ne(S[61]),N[56]=ne(S[35]),N[57]=ne(S[36]),N[58]=ne(S[48]),N[59]=ne(S[49]),N[60]=ne(S[57]),N[61]=ne(S[58]),N[62]=ne(S[62]),N[63]=ne(S[63])}function Le(S){const N=.5*Math.cos(.7853975),b=.5*Math.cos(3.14159/16),P=.5*Math.cos(3.14159/8),G=.5*Math.cos(3*3.14159/16),k=.5*Math.cos(5*3.14159/16),U=.5*Math.cos(3*3.14159/8),re=.5*Math.cos(7*3.14159/16),se=new Array(4),ae=new Array(4),ce=new Array(4),we=new Array(4);for(let De=0;De<8;++De){const xe=De*8;se[0]=P*S[xe+2],se[1]=U*S[xe+2],se[2]=P*S[xe+6],se[3]=U*S[xe+6],ae[0]=b*S[xe+1]+G*S[xe+3]+k*S[xe+5]+re*S[xe+7],ae[1]=G*S[xe+1]-re*S[xe+3]-b*S[xe+5]-k*S[xe+7],ae[2]=k*S[xe+1]-b*S[xe+3]+re*S[xe+5]+G*S[xe+7],ae[3]=re*S[xe+1]-k*S[xe+3]+G*S[xe+5]-b*S[xe+7],ce[0]=N*(S[xe+0]+S[xe+4]),ce[3]=N*(S[xe+0]-S[xe+4]),ce[1]=se[0]+se[3],ce[2]=se[1]-se[2],we[0]=ce[0]+ce[1],we[1]=ce[3]+ce[2],we[2]=ce[3]-ce[2],we[3]=ce[0]-ce[1],S[xe+0]=we[0]+ae[0],S[xe+1]=we[1]+ae[1],S[xe+2]=we[2]+ae[2],S[xe+3]=we[3]+ae[3],S[xe+4]=we[3]-ae[3],S[xe+5]=we[2]-ae[2],S[xe+6]=we[1]-ae[1],S[xe+7]=we[0]-ae[0]}for(let De=0;De<8;++De)se[0]=P*S[16+De],se[1]=U*S[16+De],se[2]=P*S[48+De],se[3]=U*S[48+De],ae[0]=b*S[8+De]+G*S[24+De]+k*S[40+De]+re*S[56+De],ae[1]=G*S[8+De]-re*S[24+De]-b*S[40+De]-k*S[56+De],ae[2]=k*S[8+De]-b*S[24+De]+re*S[40+De]+G*S[56+De],ae[3]=re*S[8+De]-k*S[24+De]+G*S[40+De]-b*S[56+De],ce[0]=N*(S[De]+S[32+De]),ce[3]=N*(S[De]-S[32+De]),ce[1]=se[0]+se[3],ce[2]=se[1]-se[2],we[0]=ce[0]+ce[1],we[1]=ce[3]+ce[2],we[2]=ce[3]-ce[2],we[3]=ce[0]-ce[1],S[0+De]=we[0]+ae[0],S[8+De]=we[1]+ae[1],S[16+De]=we[2]+ae[2],S[24+De]=we[3]+ae[3],S[32+De]=we[3]-ae[3],S[40+De]=we[2]-ae[2],S[48+De]=we[1]-ae[1],S[56+De]=we[0]-ae[0]}function _e(S){for(let N=0;N<64;++N){const b=S[0][N],P=S[1][N],G=S[2][N];S[0][N]=b+1.5747*G,S[1][N]=b-.1873*P-.4682*G,S[2][N]=b+1.8556*P}}function I(S,N,b){for(let P=0;P<64;++P)N[b+P]=Kr.toHalfFloat(R(S[P]))}function R(S){return S<=1?Math.sign(S)*Math.pow(Math.abs(S),2.2):Math.sign(S)*Math.pow(w,Math.abs(S)-1)}function Z(S){return new DataView(S.array.buffer,S.offset.value,S.size)}function oe(S){const N=S.viewer.buffer.slice(S.offset.value,S.offset.value+S.size),b=new Uint8Array(Se(N)),P=new Uint8Array(b.length);return ge(b),F(b,P),new DataView(P.buffer)}function le(S){const N=S.array.slice(S.offset.value,S.offset.value+S.size),b=bl(N),P=new Uint8Array(b.length);return ge(b),F(b,P),new DataView(P.buffer)}function me(S){const N=S.viewer,b={value:S.offset.value},P=new Uint16Array(S.columns*S.lines*(S.inputChannels.length*S.type)),G=new Uint8Array(8192);let k=0;const U=new Array(S.inputChannels.length);for(let ke=0,Ne=S.inputChannels.length;ke<Ne;ke++)U[ke]={},U[ke].start=k,U[ke].end=U[ke].start,U[ke].nx=S.columns,U[ke].ny=S.lines,U[ke].size=S.type,k+=U[ke].nx*U[ke].ny*U[ke].size;const re=de(N,b),se=de(N,b);if(se>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(re<=se)for(let ke=0;ke<se-re+1;ke++)G[ke+re]=Je(N,b);const ae=new Uint16Array(65536),ce=M(G,ae),we=Be(N,b);be(S.array,N,b,we,P,k);for(let ke=0;ke<S.inputChannels.length;++ke){const Ne=U[ke];for(let Ve=0;Ve<U[ke].size;++Ve)Ee(P,Ne.start+Ve,Ne.nx,Ne.size,Ne.ny,Ne.nx*Ne.size,ce)}$(ae,P,k);let De=0;const xe=new Uint8Array(P.buffer.byteLength);for(let ke=0;ke<S.lines;ke++)for(let Ne=0;Ne<S.inputChannels.length;Ne++){const Ve=U[Ne],qe=Ve.nx*Ve.size,je=new Uint8Array(P.buffer,Ve.end*2,qe*2);xe.set(je,De),De+=qe*2,Ve.end+=qe}return new DataView(xe.buffer)}function Re(S){const N=S.array.slice(S.offset.value,S.offset.value+S.size),b=bl(N),P=S.inputChannels.length*S.lines*S.columns*S.totalBytes,G=new ArrayBuffer(P),k=new DataView(G);let U=0,re=0;const se=new Array(4);for(let ae=0;ae<S.lines;ae++)for(let ce=0;ce<S.inputChannels.length;ce++){let we=0;switch(S.inputChannels[ce].pixelType){case 1:se[0]=U,se[1]=se[0]+S.columns,U=se[1]+S.columns;for(let xe=0;xe<S.columns;++xe){const ke=b[se[0]++]<<8|b[se[1]++];we+=ke,k.setUint16(re,we,!0),re+=2}break;case 2:se[0]=U,se[1]=se[0]+S.columns,se[2]=se[1]+S.columns,U=se[2]+S.columns;for(let xe=0;xe<S.columns;++xe){const ke=b[se[0]++]<<24|b[se[1]++]<<16|b[se[2]++]<<8;we+=ke,k.setUint32(re,we,!0),re+=4}break}}return k}function ve(S){const N=S.viewer,b={value:S.offset.value},P=new Uint8Array(S.columns*S.lines*(S.inputChannels.length*S.type*2)),G={version:Xe(N,b),unknownUncompressedSize:Xe(N,b),unknownCompressedSize:Xe(N,b),acCompressedSize:Xe(N,b),dcCompressedSize:Xe(N,b),rleCompressedSize:Xe(N,b),rleUncompressedSize:Xe(N,b),rleRawSize:Xe(N,b),totalAcUncompressedCount:Xe(N,b),totalDcUncompressedCount:Xe(N,b),acCompression:Xe(N,b)};if(G.version<2)throw new Error("EXRLoader.parse: "+qn.compression+" version "+G.version+" is unsupported");const k=new Array;let U=de(N,b)-2;for(;U>0;){const Ne=Me(N.buffer,b),Ve=Je(N,b),qe=Ve>>2&3,je=(Ve>>4)-1,Ye=new Int8Array([je])[0],pt=Je(N,b);k.push({name:Ne,index:Ye,type:pt,compression:qe}),U-=Ne.length+3}const re=qn.channels,se=new Array(S.inputChannels.length);for(let Ne=0;Ne<S.inputChannels.length;++Ne){const Ve=se[Ne]={},qe=re[Ne];Ve.name=qe.name,Ve.compression=0,Ve.decoded=!1,Ve.type=qe.pixelType,Ve.pLinear=qe.pLinear,Ve.width=S.columns,Ve.height=S.lines}const ae={idx:new Array(3)};for(let Ne=0;Ne<S.inputChannels.length;++Ne){const Ve=se[Ne];for(let qe=0;qe<k.length;++qe){const je=k[qe];Ve.name==je.name&&(Ve.compression=je.compression,je.index>=0&&(ae.idx[je.index]=Ne),Ve.offset=Ne)}}let ce,we,De;if(G.acCompressedSize>0)switch(G.acCompression){case 0:ce=new Uint16Array(G.totalAcUncompressedCount),be(S.array,N,b,G.acCompressedSize,ce,G.totalAcUncompressedCount);break;case 1:const Ne=S.array.slice(b.value,b.value+G.totalAcUncompressedCount),Ve=bl(Ne);ce=new Uint16Array(Ve.buffer),b.value+=G.totalAcUncompressedCount;break}if(G.dcCompressedSize>0){const Ne={array:S.array,offset:b,size:G.dcCompressedSize};we=new Uint16Array(le(Ne).buffer),b.value+=G.dcCompressedSize}if(G.rleRawSize>0){const Ne=S.array.slice(b.value,b.value+G.rleCompressedSize),Ve=bl(Ne);De=Se(Ve.buffer),b.value+=G.rleCompressedSize}let xe=0;const ke=new Array(se.length);for(let Ne=0;Ne<ke.length;++Ne)ke[Ne]=new Array;for(let Ne=0;Ne<S.lines;++Ne)for(let Ve=0;Ve<se.length;++Ve)ke[Ve].push(xe),xe+=se[Ve].width*S.type*2;pe(ae,ke,se,ce,we,P);for(let Ne=0;Ne<se.length;++Ne){const Ve=se[Ne];if(!Ve.decoded)switch(Ve.compression){case 2:let qe=0,je=0;for(let Ye=0;Ye<S.lines;++Ye){let pt=ke[Ne][qe];for(let tt=0;tt<Ve.width;++tt){for(let st=0;st<2*Ve.type;++st)P[pt++]=De[je+st*Ve.width*Ve.height];je++}qe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(P.buffer)}function Me(S,N){const b=new Uint8Array(S);let P=0;for(;b[N.value+P]!=0;)P+=1;const G=new TextDecoder().decode(b.slice(N.value,N.value+P));return N.value=N.value+P+1,G}function He(S,N,b){const P=new TextDecoder().decode(new Uint8Array(S).slice(N.value,N.value+b));return N.value=N.value+b,P}function Ie(S,N){const b=Fe(S,N),P=Be(S,N);return[b,P]}function ze(S,N){const b=Be(S,N),P=Be(S,N);return[b,P]}function Fe(S,N){const b=S.getInt32(N.value,!0);return N.value=N.value+4,b}function Be(S,N){const b=S.getUint32(N.value,!0);return N.value=N.value+4,b}function Ce(S,N){const b=S[N.value];return N.value=N.value+1,b}function Je(S,N){const b=S.getUint8(N.value);return N.value=N.value+1,b}const Xe=function(S,N){let b;return"getBigInt64"in DataView.prototype?b=Number(S.getBigInt64(N.value,!0)):b=S.getUint32(N.value+4,!0)+Number(S.getUint32(N.value,!0)<<32),N.value+=8,b};function nt(S,N){const b=S.getFloat32(N.value,!0);return N.value+=4,b}function j(S,N){return Kr.toHalfFloat(nt(S,N))}function ne(S){const N=(S&31744)>>10,b=S&1023;return(S>>15?-1:1)*(N?N===31?b?NaN:1/0:Math.pow(2,N-15)*(1+b/1024):6103515625e-14*(b/1024))}function de(S,N){const b=S.getUint16(N.value,!0);return N.value+=2,b}function Pe(S,N){return ne(de(S,N))}function Oe(S,N,b,P){const G=b.value,k=[];for(;b.value<G+P-1;){const U=Me(N,b),re=Fe(S,b),se=Je(S,b);b.value+=3;const ae=Fe(S,b),ce=Fe(S,b);k.push({name:U,pixelType:re,pLinear:se,xSampling:ae,ySampling:ce})}return b.value+=1,k}function Ue(S,N){const b=nt(S,N),P=nt(S,N),G=nt(S,N),k=nt(S,N),U=nt(S,N),re=nt(S,N),se=nt(S,N),ae=nt(S,N);return{redX:b,redY:P,greenX:G,greenY:k,blueX:U,blueY:re,whiteX:se,whiteY:ae}}function $e(S,N){const b=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],P=Je(S,N);return b[P]}function ot(S,N){const b=Fe(S,N),P=Fe(S,N),G=Fe(S,N),k=Fe(S,N);return{xMin:b,yMin:P,xMax:G,yMax:k}}function et(S,N){const b=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],P=Je(S,N);return b[P]}function it(S,N){const b=["ENVMAP_LATLONG","ENVMAP_CUBE"],P=Je(S,N);return b[P]}function yt(S,N){const b=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],P=["ROUND_DOWN","ROUND_UP"],G=Be(S,N),k=Be(S,N),U=Je(S,N);return{xSize:G,ySize:k,levelMode:b[U&15],roundingMode:P[U>>4]}}function St(S,N){const b=nt(S,N),P=nt(S,N);return[b,P]}function Lt(S,N){const b=nt(S,N),P=nt(S,N),G=nt(S,N);return[b,P,G]}function sn(S,N,b,P,G){if(P==="string"||P==="stringvector"||P==="iccProfile")return He(N,b,G);if(P==="chlist")return Oe(S,N,b,G);if(P==="chromaticities")return Ue(S,b);if(P==="compression")return $e(S,b);if(P==="box2i")return ot(S,b);if(P==="envmap")return it(S,b);if(P==="tiledesc")return yt(S,b);if(P==="lineOrder")return et(S,b);if(P==="float")return nt(S,b);if(P==="v2f")return St(S,b);if(P==="v3f")return Lt(S,b);if(P==="int")return Fe(S,b);if(P==="rational")return Ie(S,b);if(P==="timecode")return ze(S,b);if(P==="preview")return b.value+=G,"skipped";b.value+=G}function Qt(S,N){const b=Math.log2(S);return N=="ROUND_DOWN"?Math.floor(b):Math.ceil(b)}function mn(S,N,b){let P=0;switch(S.levelMode){case"ONE_LEVEL":P=1;break;case"MIPMAP_LEVELS":P=Qt(Math.max(N,b),S.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return P}function En(S,N,b,P){const G=new Array(S);for(let k=0;k<S;k++){const U=1<<k;let re=N/U|0;P=="ROUND_UP"&&re*U<N&&(re+=1);const se=Math.max(re,1);G[k]=(se+b-1)/b|0}return G}function Zn(){const S=this,N=S.offset,b={value:0};for(let P=0;P<S.tileCount;P++){const G=Fe(S.viewer,N),k=Fe(S.viewer,N);N.value+=8,S.size=Be(S.viewer,N);const U=G*S.blockWidth,re=k*S.blockHeight;S.columns=U+S.blockWidth>S.width?S.width-U:S.blockWidth,S.lines=re+S.blockHeight>S.height?S.height-re:S.blockHeight;const se=S.columns*S.totalBytes,ce=S.size<S.lines*se?S.uncompress(S):Z(S);N.value+=S.size;for(let we=0;we<S.lines;we++){const De=we*S.columns*S.totalBytes;for(let xe=0;xe<S.inputChannels.length;xe++){const ke=qn.channels[xe].name,Ne=S.channelByteOffsets[ke]*S.columns,Ve=S.decodeChannels[ke];if(Ve===void 0)continue;b.value=De+Ne;const qe=(S.height-(1+re+we))*S.outLineWidth;for(let je=0;je<S.columns;je++){const Ye=qe+(je+U)*S.outputChannels+Ve;S.byteArray[Ye]=S.getter(ce,b)}}}}}function an(){const S=this,N=S.offset,b={value:0};for(let P=0;P<S.height/S.blockHeight;P++){const G=Fe(S.viewer,N)-qn.dataWindow.yMin;S.size=Be(S.viewer,N),S.lines=G+S.blockHeight>S.height?S.height-G:S.blockHeight;const k=S.columns*S.totalBytes,re=S.size<S.lines*k?S.uncompress(S):Z(S);N.value+=S.size;for(let se=0;se<S.blockHeight;se++){const ae=P*S.blockHeight,ce=se+S.scanOrder(ae);if(ce>=S.height)continue;const we=se*k,De=(S.height-1-ce)*S.outLineWidth;for(let xe=0;xe<S.inputChannels.length;xe++){const ke=qn.channels[xe].name,Ne=S.channelByteOffsets[ke]*S.columns,Ve=S.decodeChannels[ke];if(Ve!==void 0){b.value=we+Ne;for(let qe=0;qe<S.columns;qe++){const je=De+qe*S.outputChannels+Ve;S.byteArray[je]=S.getter(re,b)}}}}}}function Ht(S,N,b){const P={};if(S.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");P.version=S.getUint8(4);const G=S.getUint8(5);P.spec={singleTile:!!(G&2),longName:!!(G&4),deepFormat:!!(G&8),multiPart:!!(G&16)},b.value=8;let k=!0;for(;k;){const U=Me(N,b);if(U==0)k=!1;else{const re=Me(N,b),se=Be(S,b),ae=sn(S,N,b,re,se);ae===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${re}'.`):P[U]=ae}}if(G&-7)throw console.error("THREE.EXRHeader:",P),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return P}function Tn(S,N,b,P,G){const k={size:0,viewer:N,array:b,offset:P,width:S.dataWindow.xMax-S.dataWindow.xMin+1,height:S.dataWindow.yMax-S.dataWindow.yMin+1,inputChannels:S.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:Ri};switch(S.compression){case"NO_COMPRESSION":k.blockHeight=1,k.uncompress=Z;break;case"RLE_COMPRESSION":k.blockHeight=1,k.uncompress=oe;break;case"ZIPS_COMPRESSION":k.blockHeight=1,k.uncompress=le;break;case"ZIP_COMPRESSION":k.blockHeight=16,k.uncompress=le;break;case"PIZ_COMPRESSION":k.blockHeight=32,k.uncompress=me;break;case"PXR24_COMPRESSION":k.blockHeight=16,k.uncompress=Re;break;case"DWAA_COMPRESSION":k.blockHeight=32,k.uncompress=ve;break;case"DWAB_COMPRESSION":k.blockHeight=256,k.uncompress=ve;break;default:throw new Error("EXRLoader.parse: "+S.compression+" is unsupported")}const U={};for(const ce of S.channels)switch(ce.name){case"Y":case"R":case"G":case"B":case"A":U[ce.name]=!0,k.type=ce.pixelType}let re=!1;if(U.R&&U.G&&U.B)re=!U.A,k.outputChannels=4,k.decodeChannels={R:0,G:1,B:2,A:3};else if(U.Y)k.outputChannels=1,k.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(k.type==1)switch(G){case Yt:k.getter=Pe;break;case Ln:k.getter=de;break}else if(k.type==2)switch(G){case Yt:k.getter=nt;break;case Ln:k.getter=j}else throw new Error("EXRLoader.parse: unsupported pixelType "+k.type+" for "+S.compression+".");k.columns=k.width;const se=k.width*k.height*k.outputChannels;switch(G){case Yt:k.byteArray=new Float32Array(se),re&&k.byteArray.fill(1,0,se);break;case Ln:k.byteArray=new Uint16Array(se),re&&k.byteArray.fill(15360,0,se);break;default:console.error("THREE.EXRLoader: unsupported type: ",G);break}let ae=0;for(const ce of S.channels)k.decodeChannels[ce.name]!==void 0&&(k.channelByteOffsets[ce.name]=ae),ae+=ce.pixelType*2;if(k.totalBytes=ae,k.outLineWidth=k.width*k.outputChannels,S.lineOrder==="INCREASING_Y"?k.scanOrder=ce=>ce:k.scanOrder=ce=>k.height-1-ce,k.outputChannels==4?(k.format=fn,k.colorSpace=Ri):(k.format=mo,k.colorSpace=Mi),S.spec.singleTile){k.blockHeight=S.tiles.ySize,k.blockWidth=S.tiles.xSize;const ce=mn(S.tiles,k.width,k.height),we=En(ce,k.width,S.tiles.xSize,S.tiles.roundingMode),De=En(ce,k.height,S.tiles.ySize,S.tiles.roundingMode);k.tileCount=we[0]*De[0];for(let xe=0;xe<ce;xe++)for(let ke=0;ke<De[xe];ke++)for(let Ne=0;Ne<we[xe];Ne++)Xe(N,P);k.decode=Zn.bind(k)}else{k.blockWidth=k.width;const ce=Math.ceil(k.height/k.blockHeight);for(let we=0;we<ce;we++)Xe(N,P);k.decode=an.bind(k)}return k}const er={value:0},Ni=new DataView(e),sa=new Uint8Array(e),qn=Ht(Ni,e,er),Bn=Tn(qn,Ni,sa,er,this.type);return Bn.decode(),{header:qn,width:Bn.width,height:Bn.height,data:Bn.byteArray,format:Bn.format,colorSpace:Bn.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,n){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=Dt,a.magFilter=Dt,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,i,n)}}class OT extends Nf{constructor(e){super(e),this.type=Ln}parse(e){const a=function(E,w){switch(E){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(w||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(w||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(w||""))}},h=`
`,u=function(E,w,M){w=w||1024;let D=E.pos,z=-1,B=0,K="",H=String.fromCharCode.apply(null,new Uint16Array(E.subarray(D,D+128)));for(;0>(z=H.indexOf(h))&&B<w&&D<E.byteLength;)K+=H,B+=H.length,D+=128,H+=String.fromCharCode.apply(null,new Uint16Array(E.subarray(D,D+128)));return-1<z?(E.pos+=B+z+1,K+H.slice(0,z)):!1},f=function(E){const w=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,z=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,B={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let K,H;for((E.pos>=E.byteLength||!(K=u(E)))&&a(1,"no header found"),(H=K.match(w))||a(3,"bad initial token"),B.valid|=1,B.programtype=H[1],B.string+=K+`
`;K=u(E),K!==!1;){if(B.string+=K+`
`,K.charAt(0)==="#"){B.comments+=K+`
`;continue}if((H=K.match(M))&&(B.gamma=parseFloat(H[1])),(H=K.match(L))&&(B.exposure=parseFloat(H[1])),(H=K.match(D))&&(B.valid|=2,B.format=H[1]),(H=K.match(z))&&(B.valid|=4,B.height=parseInt(H[1],10),B.width=parseInt(H[2],10)),B.valid&2&&B.valid&4)break}return B.valid&2||a(3,"missing format specifier"),B.valid&4||a(3,"missing image size specifier"),B},d=function(E,w,M){const L=w;if(L<8||L>32767||E[0]!==2||E[1]!==2||E[2]&128)return new Uint8Array(E);L!==(E[2]<<8|E[3])&&a(3,"wrong scanline width");const D=new Uint8Array(4*w*M);D.length||a(4,"unable to allocate buffer space");let z=0,B=0;const K=4*L,H=new Uint8Array(4),ue=new Uint8Array(K);let ee=M;for(;ee>0&&B<E.byteLength;){B+4>E.byteLength&&a(1),H[0]=E[B++],H[1]=E[B++],H[2]=E[B++],H[3]=E[B++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=L)&&a(3,"bad rgbe scanline format");let J=0,q;for(;J<K&&B<E.byteLength;){q=E[B++];const Y=q>128;if(Y&&(q-=128),(q===0||J+q>K)&&a(3,"bad scanline data"),Y){const ie=E[B++];for(let W=0;W<q;W++)ue[J++]=ie}else ue.set(E.subarray(B,B+q),J),J+=q,B+=q}const V=L;for(let Y=0;Y<V;Y++){let ie=0;D[z]=ue[Y+ie],ie+=L,D[z+1]=ue[Y+ie],ie+=L,D[z+2]=ue[Y+ie],ie+=L,D[z+3]=ue[Y+ie],z+=4}ee--}return D},p=function(E,w,M,L){const D=E[w+3],z=Math.pow(2,D-128)/255;M[L+0]=E[w+0]*z,M[L+1]=E[w+1]*z,M[L+2]=E[w+2]*z,M[L+3]=1},v=function(E,w,M,L){const D=E[w+3],z=Math.pow(2,D-128)/255;M[L+0]=Kr.toHalfFloat(Math.min(E[w+0]*z,65504)),M[L+1]=Kr.toHalfFloat(Math.min(E[w+1]*z,65504)),M[L+2]=Kr.toHalfFloat(Math.min(E[w+2]*z,65504)),M[L+3]=Kr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const g=f(m),y=g.width,x=g.height,_=d(m.subarray(m.pos),y,x);let C,T,A;switch(this.type){case Yt:A=_.length/4;const E=new Float32Array(A*4);for(let M=0;M<A;M++)p(_,M*4,E,M*4);C=E,T=Yt;break;case Ln:A=_.length/4;const w=new Uint16Array(A*4);for(let M=0;M<A;M++)v(_,M*4,w,M*4);C=w,T=Ln;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:y,height:x,data:C,header:g.string,gamma:g.gamma,exposure:g.exposure,type:T}}setDataType(e){return this.type=e,this}load(e,t,i,n){function r(a,o){switch(a.type){case Yt:case Ln:a.colorSpace=Ri,a.minFilter=Dt,a.magFilter=Dt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,i,n)}}class BT extends Ut{constructor(e,t,i,n=128){if(t<=0||i<=0||n<=0)throw new Error("GroundedSkybox height, radius, and resolution must be positive.");const r=new na(i,2*n,n);r.scale(1,1,-1);const a=r.getAttribute("position"),o=new O;for(let l=0;l<a.count;++l)if(o.fromBufferAttribute(a,l),o.y<0){const c=-t*3/2,h=o.y<c?-t/o.y:1-o.y*o.y/(3*c*c);o.multiplyScalar(h),o.toArray(a.array,3*l)}a.needsUpdate=!0,super(r,new Ui({map:e,depthWrite:!1}))}}const kT=s=>{const{invalidate:e}=wr();sm(()=>[s.scene],([n])=>{const r=n.background,a=n.environment;return()=>{n.background=r,n.environment=a}});let t=di(void 0),i=di(void 0);sm(()=>[s.scene],([n])=>{Sn(t,vr(n.background)),Sn(i,vr(n.environment))}),nn(()=>{if(s.isBackground&&s.texture!==void 0)return s.scene.background=s.texture,e(),()=>{Ge(t)!==void 0&&(s.scene.background=Ge(t),e())}}),nn(()=>{if(s.texture!==void 0)return s.scene.environment=s.texture,e(),()=>{Ge(i)!==void 0&&(s.scene.environment=Ge(i),e())}})},Qn={};function zT(s,e){vi(e,!0);const t=wr();let i=ni(e,"skybox",15),n=ni(e,"texture",15),r=ni(e,"ground",3,!1),a=ni(e,"isBackground",3,!1),o=ni(e,"scene",19,()=>t.scene);const l=Jv(),c=hE();kT({get scene(){return o()},get isBackground(){return a()},get texture(){return n()}});const h=hn(()=>{var m;return((m=e.url)==null?void 0:m.endsWith("exr"))??!1}),u=hn(()=>{var m;return((m=e.url)==null?void 0:m.endsWith("hdr"))??!1}),f=hn(()=>{if(e.url!==void 0)return Ge(h)?(Qn.exr??(Qn.exr=new FT),Qn.exr):Ge(u)?(Qn.hdr??(Qn.hdr=new OT),Qn.hdr):(Qn.tex??(Qn.tex=new dv),Qn.tex)});nn(()=>{if(e.url!==void 0&&Ge(f)!==void 0){const m=l(c.remember(()=>Ge(f).loadAsync(e.url),[e.url]));return m.then(g=>{g.mapping=Js,n(g)}),()=>{m.then(g=>{g.dispose()})}}});var d=un(),p=Gt(d);{var v=m=>{var g=un();const y=hn(()=>r()===!0?{}:r());var x=Gt(g);{var _=C=>{var T=hn(()=>[n(),Ge(y).height??1,Ge(y).radius??1,Ge(y).resolution??128]);pi(C,{is:BT,oncreate:()=>()=>{i(void 0)},get args(){return Ge(T)},get ref(){return i()},set ref(A){i(A)}})};Xi(x,C=>{n()&&C(_)})}It(m,g)};Xi(p,m=>{r()&&m(v)})}It(s,d),_i()}const VT=()=>nT("threlte-controls",{orbitControls:Nn(void 0),trackballControls:Nn(void 0)});function GT(s,e){vi(e,!0);const t=Fm(),i=()=>yu(a,"$parent",t);let n=ni(e,"ref",15),r=fo(e,["$$slots","$$events","$$legacy","ref","children"]);const a=Wv(),{dom:o,invalidate:l}=wr();if(!ti(i(),"Camera"))throw new Error("Parent missing: <OrbitControls> need to be a child of a <Camera>");const c=new aT(i(),o),{orbitControls:h}=VT(),{start:u,stop:f}=Yv(()=>{c.update()},{autoStart:!1,autoInvalidate:!1});yn(()=>{e.autoRotate||e.enableDamping?u():f()}),yn(()=>{const d=p=>{var v;l(),(v=e.onchange)==null||v.call(e,p)};return h.set(c),c.addEventListener("change",d),()=>{h.set(void 0),c.removeEventListener("change",d)}}),pi(s,_c({is:c},()=>r,{get ref(){return n()},set ref(d){n(d)},children:(d,p)=>{var v=un(),m=Gt(v);gr(m,()=>e.children??Et,()=>({ref:c})),It(d,v)},$$slots:{default:!0}})),_i()}new rt;new rt;new Ut;`${at.logdepthbuf_pars_vertex}${at.fog_pars_vertex}${at.logdepthbuf_vertex}${at.fog_vertex}`;`${at.tonemapping_fragment}${at.colorspace_fragment}`;`${at.tonemapping_fragment}${at.colorspace_fragment}`;const HT=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,WT=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,XT=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`,YT=XT,ZT=`
	${HT}
	${WT}
`;`${YT}${ZT}${at.tonemapping_fragment}${at.colorspace_fragment}`;function r0(){var s=function(e){function t(J,q,V,Y,ie,W,X,te){var Q=1-X;te.x=Q*Q*J+2*Q*X*V+X*X*ie,te.y=Q*Q*q+2*Q*X*Y+X*X*W}function i(J,q,V,Y,ie,W,X,te,Q,fe){var Ee=1-Q;fe.x=Ee*Ee*Ee*J+3*Ee*Ee*Q*V+3*Ee*Q*Q*ie+Q*Q*Q*X,fe.y=Ee*Ee*Ee*q+3*Ee*Ee*Q*Y+3*Ee*Q*Q*W+Q*Q*Q*te}function n(J,q){for(var V=/([MLQCZ])([^MLQCZ]*)/g,Y,ie,W,X,te;Y=V.exec(J);){var Q=Y[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(fe){return parseFloat(fe)});switch(Y[1]){case"M":X=ie=Q[0],te=W=Q[1];break;case"L":(Q[0]!==X||Q[1]!==te)&&q("L",X,te,X=Q[0],te=Q[1]);break;case"Q":{q("Q",X,te,X=Q[2],te=Q[3],Q[0],Q[1]);break}case"C":{q("C",X,te,X=Q[4],te=Q[5],Q[0],Q[1],Q[2],Q[3]);break}case"Z":(X!==ie||te!==W)&&q("L",X,te,ie,W);break}}}function r(J,q,V){V===void 0&&(V=16);var Y={x:0,y:0};n(J,function(ie,W,X,te,Q,fe,Ee,Ae,be){switch(ie){case"L":q(W,X,te,Q);break;case"Q":{for(var $=W,ge=X,F=1;F<V;F++)t(W,X,fe,Ee,te,Q,F/(V-1),Y),q($,ge,Y.x,Y.y),$=Y.x,ge=Y.y;break}case"C":{for(var Se=W,pe=X,Te=1;Te<V;Te++)i(W,X,fe,Ee,Ae,be,te,Q,Te/(V-1),Y),q(Se,pe,Y.x,Y.y),Se=Y.x,pe=Y.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(J,q){var V=J.getContext?J.getContext("webgl",c):J,Y=l.get(V);if(!Y){let Ee=function(Se){var pe=W[Se];if(!pe&&(pe=W[Se]=V.getExtension(Se),!pe))throw new Error(Se+" not supported");return pe},Ae=function(Se,pe){var Te=V.createShader(pe);return V.shaderSource(Te,Se),V.compileShader(Te),Te},be=function(Se,pe,Te,he){if(!X[Se]){var Le={},_e={},I=V.createProgram();V.attachShader(I,Ae(pe,V.VERTEX_SHADER)),V.attachShader(I,Ae(Te,V.FRAGMENT_SHADER)),V.linkProgram(I),X[Se]={program:I,transaction:function(Z){V.useProgram(I),Z({setUniform:function(le,me){for(var Re=[],ve=arguments.length-2;ve-- >0;)Re[ve]=arguments[ve+2];var Me=_e[me]||(_e[me]=V.getUniformLocation(I,me));V["uniform"+le].apply(V,[Me].concat(Re))},setAttribute:function(le,me,Re,ve,Me){var He=Le[le];He||(He=Le[le]={buf:V.createBuffer(),loc:V.getAttribLocation(I,le),data:null}),V.bindBuffer(V.ARRAY_BUFFER,He.buf),V.vertexAttribPointer(He.loc,me,V.FLOAT,!1,0,0),V.enableVertexAttribArray(He.loc),ie?V.vertexAttribDivisor(He.loc,ve):Ee("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(He.loc,ve),Me!==He.data&&(V.bufferData(V.ARRAY_BUFFER,Me,Re),He.data=Me)}})}}}X[Se].transaction(he)},$=function(Se,pe){Q++;try{V.activeTexture(V.TEXTURE0+Q);var Te=te[Se];Te||(Te=te[Se]=V.createTexture(),V.bindTexture(V.TEXTURE_2D,Te),V.texParameteri(V.TEXTURE_2D,V.TEXTURE_MIN_FILTER,V.NEAREST),V.texParameteri(V.TEXTURE_2D,V.TEXTURE_MAG_FILTER,V.NEAREST)),V.bindTexture(V.TEXTURE_2D,Te),pe(Te,Q)}finally{Q--}},ge=function(Se,pe,Te){var he=V.createFramebuffer();fe.push(he),V.bindFramebuffer(V.FRAMEBUFFER,he),V.activeTexture(V.TEXTURE0+pe),V.bindTexture(V.TEXTURE_2D,Se),V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Se,0);try{Te(he)}finally{V.deleteFramebuffer(he),V.bindFramebuffer(V.FRAMEBUFFER,fe[--fe.length-1]||null)}},F=function(){W={},X={},te={},Q=-1,fe.length=0};var ie=typeof WebGL2RenderingContext<"u"&&V instanceof WebGL2RenderingContext,W={},X={},te={},Q=-1,fe=[];V.canvas.addEventListener("webglcontextlost",function(Se){F(),Se.preventDefault()},!1),l.set(V,Y={gl:V,isWebGL2:ie,getExtension:Ee,withProgram:be,withTexture:$,withTextureFramebuffer:ge,handleContextLoss:F})}q(Y)}function u(J,q,V,Y,ie,W,X,te){X===void 0&&(X=15),te===void 0&&(te=null),h(J,function(Q){var fe=Q.gl,Ee=Q.withProgram,Ae=Q.withTexture;Ae("copy",function(be,$){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,ie,W,0,fe.RGBA,fe.UNSIGNED_BYTE,q),Ee("copy",a,o,function(ge){var F=ge.setUniform,Se=ge.setAttribute;Se("aUV",2,fe.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),F("1i","image",$),fe.bindFramebuffer(fe.FRAMEBUFFER,te||null),fe.disable(fe.BLEND),fe.colorMask(X&8,X&4,X&2,X&1),fe.viewport(V,Y,ie,W),fe.scissor(V,Y,ie,W),fe.drawArrays(fe.TRIANGLES,0,3)})})})}function f(J,q,V){var Y=J.width,ie=J.height;h(J,function(W){var X=W.gl,te=new Uint8Array(Y*ie*4);X.readPixels(0,0,Y,ie,X.RGBA,X.UNSIGNED_BYTE,te),J.width=q,J.height=V,u(X,te,0,0,Y,ie)})}var d=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:u,resizeWebGLCanvasWithoutClearing:f});function p(J,q,V,Y,ie,W){W===void 0&&(W=1);var X=new Uint8Array(J*q),te=Y[2]-Y[0],Q=Y[3]-Y[1],fe=[];r(V,function(Se,pe,Te,he){fe.push({x1:Se,y1:pe,x2:Te,y2:he,minX:Math.min(Se,Te),minY:Math.min(pe,he),maxX:Math.max(Se,Te),maxY:Math.max(pe,he)})}),fe.sort(function(Se,pe){return Se.maxX-pe.maxX});for(var Ee=0;Ee<J;Ee++)for(var Ae=0;Ae<q;Ae++){var be=ge(Y[0]+te*(Ee+.5)/J,Y[1]+Q*(Ae+.5)/q),$=Math.pow(1-Math.abs(be)/ie,W)/2;be<0&&($=1-$),$=Math.max(0,Math.min(255,Math.round($*255))),X[Ae*J+Ee]=$}return X;function ge(Se,pe){for(var Te=1/0,he=1/0,Le=fe.length;Le--;){var _e=fe[Le];if(_e.maxX+he<=Se)break;if(Se+he>_e.minX&&pe-he<_e.maxY&&pe+he>_e.minY){var I=g(Se,pe,_e.x1,_e.y1,_e.x2,_e.y2);I<Te&&(Te=I,he=Math.sqrt(Te))}}return F(Se,pe)&&(he=-he),he}function F(Se,pe){for(var Te=0,he=fe.length;he--;){var Le=fe[he];if(Le.maxX<=Se)break;var _e=Le.y1>pe!=Le.y2>pe&&Se<(Le.x2-Le.x1)*(pe-Le.y1)/(Le.y2-Le.y1)+Le.x1;_e&&(Te+=Le.y1<Le.y2?1:-1)}return Te!==0}}function v(J,q,V,Y,ie,W,X,te,Q,fe){W===void 0&&(W=1),te===void 0&&(te=0),Q===void 0&&(Q=0),fe===void 0&&(fe=0),m(J,q,V,Y,ie,W,X,null,te,Q,fe)}function m(J,q,V,Y,ie,W,X,te,Q,fe,Ee){W===void 0&&(W=1),Q===void 0&&(Q=0),fe===void 0&&(fe=0),Ee===void 0&&(Ee=0);for(var Ae=p(J,q,V,Y,ie,W),be=new Uint8Array(Ae.length*4),$=0;$<Ae.length;$++)be[$*4+Ee]=Ae[$];u(X,be,Q,fe,J,q,1<<3-Ee,te)}function g(J,q,V,Y,ie,W){var X=ie-V,te=W-Y,Q=X*X+te*te,fe=Q?Math.max(0,Math.min(1,((J-V)*X+(q-Y)*te)/Q)):0,Ee=J-(V+fe*X),Ae=q-(Y+fe*te);return Ee*Ee+Ae*Ae}var y=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:v,generateIntoFramebuffer:m}),x="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",_="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",C="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",T=new Float32Array([0,0,2,0,0,2]),A=null,E=!1,w={},M=new WeakMap;function L(J){if(!E&&!K(J))throw new Error("WebGL generation not supported")}function D(J,q,V,Y,ie,W,X){if(W===void 0&&(W=1),X===void 0&&(X=null),!X&&(X=A,!X)){var te=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!te)throw new Error("OffscreenCanvas or DOM canvas not supported");X=A=te.getContext("webgl",{depth:!1})}L(X);var Q=new Uint8Array(J*q*4);h(X,function(be){var $=be.gl,ge=be.withTexture,F=be.withTextureFramebuffer;ge("readable",function(Se,pe){$.texImage2D($.TEXTURE_2D,0,$.RGBA,J,q,0,$.RGBA,$.UNSIGNED_BYTE,null),F(Se,pe,function(Te){B(J,q,V,Y,ie,W,$,Te,0,0,0),$.readPixels(0,0,J,q,$.RGBA,$.UNSIGNED_BYTE,Q)})})});for(var fe=new Uint8Array(J*q),Ee=0,Ae=0;Ee<Q.length;Ee+=4)fe[Ae++]=Q[Ee];return fe}function z(J,q,V,Y,ie,W,X,te,Q,fe){W===void 0&&(W=1),te===void 0&&(te=0),Q===void 0&&(Q=0),fe===void 0&&(fe=0),B(J,q,V,Y,ie,W,X,null,te,Q,fe)}function B(J,q,V,Y,ie,W,X,te,Q,fe,Ee){W===void 0&&(W=1),Q===void 0&&(Q=0),fe===void 0&&(fe=0),Ee===void 0&&(Ee=0),L(X);var Ae=[];r(V,function(be,$,ge,F){Ae.push(be,$,ge,F)}),Ae=new Float32Array(Ae),h(X,function(be){var $=be.gl,ge=be.isWebGL2,F=be.getExtension,Se=be.withProgram,pe=be.withTexture,Te=be.withTextureFramebuffer,he=be.handleContextLoss;if(pe("rawDistances",function(Le,_e){(J!==Le._lastWidth||q!==Le._lastHeight)&&$.texImage2D($.TEXTURE_2D,0,$.RGBA,Le._lastWidth=J,Le._lastHeight=q,0,$.RGBA,$.UNSIGNED_BYTE,null),Se("main",x,_,function(I){var R=I.setAttribute,Z=I.setUniform,oe=!ge&&F("ANGLE_instanced_arrays"),le=!ge&&F("EXT_blend_minmax");R("aUV",2,$.STATIC_DRAW,0,T),R("aLineSegment",4,$.DYNAMIC_DRAW,1,Ae),Z.apply(void 0,["4f","uGlyphBounds"].concat(Y)),Z("1f","uMaxDistance",ie),Z("1f","uExponent",W),Te(Le,_e,function(me){$.enable($.BLEND),$.colorMask(!0,!0,!0,!0),$.viewport(0,0,J,q),$.scissor(0,0,J,q),$.blendFunc($.ONE,$.ONE),$.blendEquationSeparate($.FUNC_ADD,ge?$.MAX:le.MAX_EXT),$.clear($.COLOR_BUFFER_BIT),ge?$.drawArraysInstanced($.TRIANGLES,0,3,Ae.length/4):oe.drawArraysInstancedANGLE($.TRIANGLES,0,3,Ae.length/4)})}),Se("post",a,C,function(I){I.setAttribute("aUV",2,$.STATIC_DRAW,0,T),I.setUniform("1i","tex",_e),$.bindFramebuffer($.FRAMEBUFFER,te),$.disable($.BLEND),$.colorMask(Ee===0,Ee===1,Ee===2,Ee===3),$.viewport(Q,fe,J,q),$.scissor(Q,fe,J,q),$.drawArrays($.TRIANGLES,0,3)})}),$.isContextLost())throw he(),new Error("webgl context lost")})}function K(J){var q=!J||J===A?w:J.canvas||J,V=M.get(q);if(V===void 0){E=!0;var Y=null;try{var ie=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],W=D(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,J);V=W&&ie.length===W.length&&W.every(function(X,te){return X===ie[te]}),V||(Y="bad trial run results",console.info(ie,W))}catch(X){V=!1,Y=X.message}Y&&console.warn("WebGL SDF generation not supported:",Y),E=!1,M.set(q,V)}return V}var H=Object.freeze({__proto__:null,generate:D,generateIntoCanvas:z,generateIntoFramebuffer:B,isSupported:K});function ue(J,q,V,Y,ie,W){ie===void 0&&(ie=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),W===void 0&&(W=1);try{return D.apply(H,arguments)}catch(X){return console.info("WebGL SDF generation failed, falling back to JS",X),p.apply(y,arguments)}}function ee(J,q,V,Y,ie,W,X,te,Q,fe){ie===void 0&&(ie=Math.max(Y[2]-Y[0],Y[3]-Y[1])/2),W===void 0&&(W=1),te===void 0&&(te=0),Q===void 0&&(Q=0),fe===void 0&&(fe=0);try{return z.apply(H,arguments)}catch(Ee){return console.info("WebGL SDF generation failed, falling back to JS",Ee),v.apply(y,arguments)}}return e.forEachPathCommand=n,e.generate=ue,e.generateIntoCanvas=ee,e.javascript=y,e.pathToLineSegments=r,e.webgl=H,e.webglUtils=d,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}function qT(){var s=function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},i={},n={};i.L=1,n[1]="L",Object.keys(t).forEach(function(he,Le){i[he]=1<<Le+1,n[i[he]]=he}),Object.freeze(i);var r=i.LRI|i.RLI|i.FSI,a=i.L|i.R|i.AL,o=i.B|i.S|i.WS|i.ON|i.FSI|i.LRI|i.RLI|i.PDI,l=i.BN|i.RLE|i.LRE|i.RLO|i.LRO|i.PDF,c=i.S|i.WS|i.B|r|i.PDI|l,h=null;function u(){if(!h){h=new Map;var he=function(_e){if(t.hasOwnProperty(_e)){var I=0;t[_e].split(",").forEach(function(R){var Z=R.split("+"),oe=Z[0],le=Z[1];oe=parseInt(oe,36),le=le?parseInt(le,36):0,h.set(I+=oe,i[_e]);for(var me=0;me<le;me++)h.set(++I,i[_e])})}};for(var Le in t)he(Le)}}function f(he){return u(),h.get(he.codePointAt(0))||i.L}function d(he){return n[f(he)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function v(he,Le){var _e=36,I=0,R=new Map,Z=Le&&new Map,oe;return he.split(",").forEach(function le(me){if(me.indexOf("+")!==-1)for(var Re=+me;Re--;)le(oe);else{oe=me;var ve=me.split(">"),Me=ve[0],He=ve[1];Me=String.fromCodePoint(I+=parseInt(Me,_e)),He=String.fromCodePoint(I+=parseInt(He,_e)),R.set(Me,He),Le&&Z.set(He,Me)}}),{map:R,reverseMap:Z}}var m,g,y;function x(){if(!m){var he=v(p.pairs,!0),Le=he.map,_e=he.reverseMap;m=Le,g=_e,y=v(p.canonical,!1).map}}function _(he){return x(),m.get(he)||null}function C(he){return x(),g.get(he)||null}function T(he){return x(),y.get(he)||null}var A=i.L,E=i.R,w=i.EN,M=i.ES,L=i.ET,D=i.AN,z=i.CS,B=i.B,K=i.S,H=i.ON,ue=i.BN,ee=i.NSM,J=i.AL,q=i.LRO,V=i.RLO,Y=i.LRE,ie=i.RLE,W=i.PDF,X=i.LRI,te=i.RLI,Q=i.FSI,fe=i.PDI;function Ee(he,Le){for(var _e=125,I=new Uint32Array(he.length),R=0;R<he.length;R++)I[R]=f(he[R]);var Z=new Map;function oe(An,oi){var Cn=I[An];I[An]=oi,Z.set(Cn,Z.get(Cn)-1),Cn&o&&Z.set(o,Z.get(o)-1),Z.set(oi,(Z.get(oi)||0)+1),oi&o&&Z.set(o,(Z.get(o)||0)+1)}for(var le=new Uint8Array(he.length),me=new Map,Re=[],ve=null,Me=0;Me<he.length;Me++)ve||Re.push(ve={start:Me,end:he.length-1,level:Le==="rtl"?1:Le==="ltr"?0:ud(Me,!1)}),I[Me]&B&&(ve.end=Me,ve=null);for(var He=ie|Y|V|q|r|fe|W|B,Ie=function(An){return An+(An&1?1:2)},ze=function(An){return An+(An&1?2:1)},Fe=0;Fe<Re.length;Fe++){ve=Re[Fe];var Be=[{_level:ve.level,_override:0,_isolate:0}],Ce=void 0,Je=0,Xe=0,nt=0;Z.clear();for(var j=ve.start;j<=ve.end;j++){var ne=I[j];if(Ce=Be[Be.length-1],Z.set(ne,(Z.get(ne)||0)+1),ne&o&&Z.set(o,(Z.get(o)||0)+1),ne&He)if(ne&(ie|Y)){le[j]=Ce._level;var de=(ne===ie?ze:Ie)(Ce._level);de<=_e&&!Je&&!Xe?Be.push({_level:de,_override:0,_isolate:0}):Je||Xe++}else if(ne&(V|q)){le[j]=Ce._level;var Pe=(ne===V?ze:Ie)(Ce._level);Pe<=_e&&!Je&&!Xe?Be.push({_level:Pe,_override:ne&V?E:A,_isolate:0}):Je||Xe++}else if(ne&r){ne&Q&&(ne=ud(j+1,!0)===1?te:X),le[j]=Ce._level,Ce._override&&oe(j,Ce._override);var Oe=(ne===te?ze:Ie)(Ce._level);Oe<=_e&&Je===0&&Xe===0?(nt++,Be.push({_level:Oe,_override:0,_isolate:1,_isolInitIndex:j})):Je++}else if(ne&fe){if(Je>0)Je--;else if(nt>0){for(Xe=0;!Be[Be.length-1]._isolate;)Be.pop();var Ue=Be[Be.length-1]._isolInitIndex;Ue!=null&&(me.set(Ue,j),me.set(j,Ue)),Be.pop(),nt--}Ce=Be[Be.length-1],le[j]=Ce._level,Ce._override&&oe(j,Ce._override)}else ne&W?(Je===0&&(Xe>0?Xe--:!Ce._isolate&&Be.length>1&&(Be.pop(),Ce=Be[Be.length-1])),le[j]=Ce._level):ne&B&&(le[j]=ve.level);else le[j]=Ce._level,Ce._override&&ne!==ue&&oe(j,Ce._override)}for(var $e=[],ot=null,et=ve.start;et<=ve.end;et++){var it=I[et];if(!(it&l)){var yt=le[et],St=it&r,Lt=it===fe;ot&&yt===ot._level?(ot._end=et,ot._endsWithIsolInit=St):$e.push(ot={_start:et,_end:et,_level:yt,_startsWithPDI:Lt,_endsWithIsolInit:St})}}for(var sn=[],Qt=0;Qt<$e.length;Qt++){var mn=$e[Qt];if(!mn._startsWithPDI||mn._startsWithPDI&&!me.has(mn._start)){for(var En=[ot=mn],Zn=void 0;ot&&ot._endsWithIsolInit&&(Zn=me.get(ot._end))!=null;)for(var an=Qt+1;an<$e.length;an++)if($e[an]._start===Zn){En.push(ot=$e[an]);break}for(var Ht=[],Tn=0;Tn<En.length;Tn++)for(var er=En[Tn],Ni=er._start;Ni<=er._end;Ni++)Ht.push(Ni);for(var sa=le[Ht[0]],qn=ve.level,Bn=Ht[0]-1;Bn>=0;Bn--)if(!(I[Bn]&l)){qn=le[Bn];break}var S=Ht[Ht.length-1],N=le[S],b=ve.level;if(!(I[S]&r)){for(var P=S+1;P<=ve.end;P++)if(!(I[P]&l)){b=le[P];break}}sn.push({_seqIndices:Ht,_sosType:Math.max(qn,sa)%2?E:A,_eosType:Math.max(b,N)%2?E:A})}}for(var G=0;G<sn.length;G++){var k=sn[G],U=k._seqIndices,re=k._sosType,se=k._eosType,ae=le[U[0]]&1?E:A;if(Z.get(ee))for(var ce=0;ce<U.length;ce++){var we=U[ce];if(I[we]&ee){for(var De=re,xe=ce-1;xe>=0;xe--)if(!(I[U[xe]]&l)){De=I[U[xe]];break}oe(we,De&(r|fe)?H:De)}}if(Z.get(w))for(var ke=0;ke<U.length;ke++){var Ne=U[ke];if(I[Ne]&w)for(var Ve=ke-1;Ve>=-1;Ve--){var qe=Ve===-1?re:I[U[Ve]];if(qe&a){qe===J&&oe(Ne,D);break}}}if(Z.get(J))for(var je=0;je<U.length;je++){var Ye=U[je];I[Ye]&J&&oe(Ye,E)}if(Z.get(M)||Z.get(z))for(var pt=1;pt<U.length-1;pt++){var tt=U[pt];if(I[tt]&(M|z)){for(var st=0,_t=0,xt=pt-1;xt>=0&&(st=I[U[xt]],!!(st&l));xt--);for(var Mt=pt+1;Mt<U.length&&(_t=I[U[Mt]],!!(_t&l));Mt++);st===_t&&(I[tt]===M?st===w:st&(w|D))&&oe(tt,st)}}if(Z.get(w))for(var Qe=0;Qe<U.length;Qe++){var dt=U[Qe];if(I[dt]&w){for(var Ct=Qe-1;Ct>=0&&I[U[Ct]]&(L|l);Ct--)oe(U[Ct],w);for(Qe++;Qe<U.length&&I[U[Qe]]&(L|l|w);Qe++)I[U[Qe]]!==w&&oe(U[Qe],w)}}if(Z.get(L)||Z.get(M)||Z.get(z))for(var Rt=0;Rt<U.length;Rt++){var wt=U[Rt];if(I[wt]&(L|M|z)){oe(wt,H);for(var kn=Rt-1;kn>=0&&I[U[kn]]&l;kn--)oe(U[kn],H);for(var Kn=Rt+1;Kn<U.length&&I[U[Kn]]&l;Kn++)oe(U[Kn],H)}}if(Z.get(w))for(var ah=0,$f=re;ah<U.length;ah++){var ed=U[ah],oh=I[ed];oh&w?$f===A&&oe(ed,A):oh&a&&($f=oh)}if(Z.get(o)){var aa=E|w|D,td=aa|A,Eo=[];{for(var vs=[],_s=0;_s<U.length;_s++)if(I[U[_s]]&o){var oa=he[U[_s]],nd=void 0;if(_(oa)!==null)if(vs.length<63)vs.push({char:oa,seqIndex:_s});else break;else if((nd=C(oa))!==null)for(var la=vs.length-1;la>=0;la--){var lh=vs[la].char;if(lh===nd||lh===C(T(oa))||_(T(lh))===oa){Eo.push([vs[la].seqIndex,_s]),vs.length=la;break}}}Eo.sort(function(An,oi){return An[0]-oi[0]})}for(var ch=0;ch<Eo.length;ch++){for(var id=Eo[ch],To=id[0],hh=id[1],rd=!1,ai=0,uh=To+1;uh<hh;uh++){var sd=U[uh];if(I[sd]&td){rd=!0;var ad=I[sd]&aa?E:A;if(ad===ae){ai=ad;break}}}if(rd&&!ai){ai=re;for(var fh=To-1;fh>=0;fh--){var od=U[fh];if(I[od]&td){var ld=I[od]&aa?E:A;ld!==ae?ai=ld:ai=ae;break}}}if(ai){if(I[U[To]]=I[U[hh]]=ai,ai!==ae){for(var ca=To+1;ca<U.length;ca++)if(!(I[U[ca]]&l)){f(he[U[ca]])&ee&&(I[U[ca]]=ai);break}}if(ai!==ae){for(var ha=hh+1;ha<U.length;ha++)if(!(I[U[ha]]&l)){f(he[U[ha]])&ee&&(I[U[ha]]=ai);break}}}}for(var tr=0;tr<U.length;tr++)if(I[U[tr]]&o){for(var cd=tr,dh=tr,ph=re,ua=tr-1;ua>=0;ua--)if(I[U[ua]]&l)cd=ua;else{ph=I[U[ua]]&aa?E:A;break}for(var hd=se,fa=tr+1;fa<U.length;fa++)if(I[U[fa]]&(o|l))dh=fa;else{hd=I[U[fa]]&aa?E:A;break}for(var mh=cd;mh<=dh;mh++)I[U[mh]]=ph===hd?ph:ae;tr=dh}}}for(var zn=ve.start;zn<=ve.end;zn++){var y0=le[zn],Ao=I[zn];if(y0&1?Ao&(A|w|D)&&le[zn]++:Ao&E?le[zn]++:Ao&(D|w)&&(le[zn]+=2),Ao&l&&(le[zn]=zn===0?ve.level:le[zn-1]),zn===ve.end||f(he[zn])&(K|B))for(var Co=zn;Co>=0&&f(he[Co])&c;Co--)le[Co]=ve.level}}return{levels:le,paragraphs:Re};function ud(An,oi){for(var Cn=An;Cn<he.length;Cn++){var nr=I[Cn];if(nr&(E|J))return 1;if(nr&(B|A)||oi&&nr===fe)return 0;if(nr&r){var fd=b0(Cn);Cn=fd===-1?he.length:fd}}return 0}function b0(An){for(var oi=1,Cn=An+1;Cn<he.length;Cn++){var nr=I[Cn];if(nr&B)break;if(nr&fe){if(--oi===0)return Cn}else nr&r&&oi++}return-1}}var Ae="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",be;function $(){if(!be){var he=v(Ae,!0),Le=he.map,_e=he.reverseMap;_e.forEach(function(I,R){Le.set(R,I)}),be=Le}}function ge(he){return $(),be.get(he)||null}function F(he,Le,_e,I){var R=he.length;_e=Math.max(0,_e==null?0:+_e),I=Math.min(R-1,I==null?R-1:+I);for(var Z=new Map,oe=_e;oe<=I;oe++)if(Le[oe]&1){var le=ge(he[oe]);le!==null&&Z.set(oe,le)}return Z}function Se(he,Le,_e,I){var R=he.length;_e=Math.max(0,_e==null?0:+_e),I=Math.min(R-1,I==null?R-1:+I);var Z=[];return Le.paragraphs.forEach(function(oe){var le=Math.max(_e,oe.start),me=Math.min(I,oe.end);if(le<me){for(var Re=Le.levels.slice(le,me+1),ve=me;ve>=le&&f(he[ve])&c;ve--)Re[ve]=oe.level;for(var Me=oe.level,He=1/0,Ie=0;Ie<Re.length;Ie++){var ze=Re[Ie];ze>Me&&(Me=ze),ze<He&&(He=ze|1)}for(var Fe=Me;Fe>=He;Fe--)for(var Be=0;Be<Re.length;Be++)if(Re[Be]>=Fe){for(var Ce=Be;Be+1<Re.length&&Re[Be+1]>=Fe;)Be++;Be>Ce&&Z.push([Ce+le,Be+le])}}}),Z}function pe(he,Le,_e,I){var R=Te(he,Le,_e,I),Z=[].concat(he);return R.forEach(function(oe,le){Z[le]=(Le.levels[oe]&1?ge(he[oe]):null)||he[oe]}),Z.join("")}function Te(he,Le,_e,I){for(var R=Se(he,Le,_e,I),Z=[],oe=0;oe<he.length;oe++)Z[oe]=oe;return R.forEach(function(le){for(var me=le[0],Re=le[1],ve=Z.slice(me,Re+1),Me=ve.length;Me--;)Z[Re-Me]=ve[Me]}),Z}return e.closingToOpeningBracket=C,e.getBidiCharType=f,e.getBidiCharTypeName=d,e.getCanonicalBracket=T,e.getEmbeddingLevels=Ee,e.getMirroredCharacter=ge,e.getMirroredCharactersMap=F,e.getReorderSegments=Se,e.getReorderedIndices=Te,e.getReorderedString=pe,e.openingToClosingBracket=_,Object.defineProperty(e,"__esModule",{value:!0}),e}({});return s}new Zt;new Ze;typeof window<"u"&&document.createElement("div");var KT=Ii("<!> <!>",1);function JT(s,e){vi(e,!0);const t=Fm(),i=()=>yu(a,"$suspended",t),n=()=>yu(o,"$errors",t);let r=ni(e,"final",3,!1);const{suspended:a,errors:o,setFinal:l}=rT({final:r()});nn(()=>l(r())),nn(()=>{var m;i()||(m=e.onload)==null||m.call(e)}),nn(()=>{var m;i()&&((m=e.onsuspend)==null||m.call(e))}),nn(()=>{var m;n().length>0&&((m=e.onerror)==null||m.call(e,n()))});const c=new Jr,h=Xv();Hn([h,a,o],([m,g,y])=>{if(m){if(g||y.length){m.remove(c);return}return m.add(c),()=>{m.remove(c)}}});var u=KT(),f=Gt(u);pi(f,{is:c,attach:!1,children:(m,g)=>{var y=un(),x=Gt(y);gr(x,()=>e.children??Et,()=>({suspended:i(),errors:n()})),It(m,y)},$$slots:{default:!0}});var d=zt(f,2);{var p=m=>{var g=un(),y=Gt(g);gr(y,()=>e.error??Et,()=>({errors:n()})),It(m,g)},v=m=>{var g=un(),y=Gt(g);{var x=_=>{var C=un(),T=Gt(C);gr(T,()=>e.fallback??Et),It(_,C)};Xi(y,_=>{i()&&_(x)},!0)}It(m,g)};Xi(d,m=>{n().length?m(p):m(v,!1)})}It(s,u),_i()}function jT(){var s=Object.create(null);function e(n,r){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var h=n.getTransferables;if(h===void 0&&(h=null),!s[a])try{l=l.map(function(f){return f&&f.isWorkerModule&&(e(f,function(d){if(d instanceof Error)throw d}),f=s[f.id].value),f}),c=i("<"+o+">.init",c),h&&(h=i("<"+o+">.getTransferables",h));var u=null;typeof c=="function"?u=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:u,getTransferables:h},r(u)}catch(f){f&&f.noLog||console.error(f),r(f)}}function t(n,r){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&r(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(h,function(u){return r(u instanceof Error?u:new Error(""+u))}):h(c)}catch(u){r(u)}function h(u){try{var f=s[o].getTransferables&&s[o].getTransferables(u);(!f||!Array.isArray(f)||!f.length)&&(f=void 0),r(u,f)}catch(d){console.error(d),r(d)}}}function i(n,r){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+r+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var r=n.data,a=r.messageId,o=r.action,l=r.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function QT(s){var e=function(){for(var t=[],i=arguments.length;i--;)t[i]=arguments[i];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,i=s.init;t=Array.isArray(t)?t.map(function(r){return r&&r._getInitResult?r._getInitResult():r}):[];var n=Promise.all(t).then(function(r){return i.apply(null,r)});return e._getInitResult=function(){return n},n},e}var s0=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return s0=function(){return s},s},$T=0,eA=0,gu=!1,Ga=Object.create(null),Ha=Object.create(null),Hu=Object.create(null);function ra(s){if((!s||typeof s.init!="function")&&!gu)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,i=s.getTransferables,n=s.workerId;if(!s0())return QT(s);n==null&&(n="#default");var r="workerModule"+ ++$T,a=s.name||r,o=null;e=e&&e.map(function(c){return typeof c=="function"&&!c.workerModuleData&&(gu=!0,c=ra({workerId:n,name:"<"+a+"> function dependency: "+c.name,init:`function(){return (
`+Rl(c)+`
)}`}),gu=!1),c&&c.workerModuleData&&(c=c.workerModuleData),c});function l(){for(var c=[],h=arguments.length;h--;)c[h]=arguments[h];if(!o){o=pm(n,"registerModule",l.workerModuleData);var u=function(){o=null,Ha[n].delete(u)};(Ha[n]||(Ha[n]=new Set)).add(u)}return o.then(function(f){var d=f.isCallable;if(d)return pm(n,"callModule",{id:r,args:c});throw new Error("Worker module function was called but `init` did not return a callable function")})}return l.workerModuleData={isWorkerModule:!0,id:r,name:a,dependencies:e,init:Rl(t),getTransferables:i&&Rl(i)},l}function tA(s){Ha[s]&&Ha[s].forEach(function(e){e()}),Ga[s]&&(Ga[s].terminate(),delete Ga[s])}function Rl(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function nA(s){var e=Ga[s];if(!e){var t=Rl(jT);e=Ga[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(i){var n=i.data,r=n.messageId,a=Hu[r];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Hu[r],a(n)}}return e}function pm(s,e,t){return new Promise(function(i,n){var r=++eA;Hu[r]=function(a){a.success?i(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},nA(s).postMessage({messageId:r,action:e,data:t})})}const a0=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Wu(s){const e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(i,n){let r=at[n];return r?Wu(r):i}return s.replace(e,t)}const tn=[];for(let s=0;s<256;s++)tn[s]=(s<16?"0":"")+s.toString(16);function iA(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[s&255]+tn[s>>8&255]+tn[s>>16&255]+tn[s>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[t&63|128]+tn[t>>8&255]+"-"+tn[t>>16&255]+tn[t>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toUpperCase()}const zr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let i=arguments[e];if(i)for(let n in i)Object.prototype.hasOwnProperty.call(i,n)&&(s[n]=i[n])}return s},rA=Date.now(),mm=new WeakMap,gm=new Map;let sA=1e10;function Xu(s,e){const t=cA(e);let i=mm.get(s);if(i||mm.set(s,i=Object.create(null)),i[t])return new i[t];const n=`_onBeforeCompile${t}`,r=function(c,h){s.onBeforeCompile.call(this,c,h);const u=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader;let f=gm[u];if(!f){const d=aA(this,c,e,t);f=gm[u]=d}c.vertexShader=f.vertexShader,c.fragmentShader=f.fragmentShader,zr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-rA}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){const h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:sA++}),h.uuid=iA(),h.uniforms=zr({},c.uniforms,e.uniforms),h.defines=zr({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=zr({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){const h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return r},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(zr(this.extensions,c.extensions),zr(this.defines,c.defines),zr(this.uniforms,Ic.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=Xu(s.isDerivedMaterial?s.getDepthMaterial():new jc({depthPacking:df}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=Xu(s.isDerivedMaterial?s.getDistanceMaterial():new Qc,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return i[t]=a,new a}function aA(s,{vertexShader:e,fragmentShader:t},i,n){let{vertexDefs:r,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:u,fragmentColorTransform:f,customRewriter:d,timeUniform:p}=i;if(r=r||"",a=a||"",o=o||"",c=c||"",h=h||"",u=u||"",(l||d)&&(e=Wu(e)),(f||d)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Wu(t)),d){let v=d({vertexShader:e,fragmentShader:t});e=v.vertexShader,t=v.fragmentShader}if(f){let v=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,m=>(v.push(m),"")),u=`${f}
${v.join(`
`)}
${u}`}if(p){const v=`
uniform float ${p};
`;r=v+r,c=v+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,r=`${r}
void troikaVertexTransform${n}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${l}
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}(troika_position_${n}, troika_normal_${n}, troika_uv_${n});
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(v,m,g,y)=>/\battribute\s+vec[23]\s+$/.test(y.substr(0,g))?m:`troika_${m}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=vm(e,n,r,a,o),t=vm(t,n,c,h,u),{vertexShader:e,fragmentShader:t}}function vm(s,e,t,i,n){return(i||n||t)&&(s=s.replace(a0,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${i}
  troikaOrigMain${e}();
  ${n}
}`),s}function oA(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}let lA=0;const _m=new Map;function cA(s){const e=JSON.stringify(s,oA);let t=_m.get(e);return t==null&&_m.set(e,t=++lA),t}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function hA(){return typeof window>"u"&&(self.window=self),function(s){var e={parse:function(n){var r=e._bin,a=new Uint8Array(n);if(r.readASCII(a,0,4)=="ttcf"){var o=4;r.readUshort(a,o),o+=2,r.readUshort(a,o),o+=2;var l=r.readUint(a,o);o+=4;for(var c=[],h=0;h<l;h++){var u=r.readUint(a,o);o+=4,c.push(e._readFont(a,u))}return c}return[e._readFont(a,0)]},_readFont:function(n,r){var a=e._bin,o=r;a.readFixed(n,r),r+=4;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:o},u={},f=0;f<l;f++){var d=a.readASCII(n,r,4);r+=4,a.readUint(n,r),r+=4;var p=a.readUint(n,r);r+=4;var v=a.readUint(n,r);r+=4,u[d]={offset:p,length:v}}for(f=0;f<c.length;f++){var m=c[f];u[m]&&(h[m.trim()]=e[m.trim()].parse(n,u[m].offset,u[m].length,h))}return h},_tabOffset:function(n,r,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,h=0;h<l;h++){var u=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var f=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,u==r)return f}return 0}};e._bin={readFixed:function(n,r){return(n[r]<<8|n[r+1])+(n[r+2]<<8|n[r+3])/65540},readF2dot14:function(n,r){return e._bin.readShort(n,r)/16384},readInt:function(n,r){return e._bin._view(n).getInt32(r)},readInt8:function(n,r){return e._bin._view(n).getInt8(r)},readShort:function(n,r){return e._bin._view(n).getInt16(r)},readUshort:function(n,r){return e._bin._view(n).getUint16(r)},readUshorts:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,r+2*l));return o},readUint:function(n,r){return e._bin._view(n).getUint32(r)},readUint64:function(n,r){return 4294967296*e._bin.readUint(n,r)+e._bin.readUint(n,r+4)},readASCII:function(n,r,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[r+l]);return o},readUnicode:function(n,r,a){for(var o="",l=0;l<a;l++){var c=n[r++]<<8|n[r++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,r,a){var o=e._bin._tdec;return o&&r==0&&a==n.length?o.decode(n):e._bin.readASCII(n,r,a)},readBytes:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(n[r+l]);return o},readASCIIArray:function(n,r,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[r+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,r,a,o,l){var c=e._bin,h={},u=r;c.readFixed(n,r),r+=4;var f=c.readUshort(n,r);r+=2;var d=c.readUshort(n,r);r+=2;var p=c.readUshort(n,r);return r+=2,h.scriptList=e._lctf.readScriptList(n,u+f),h.featureList=e._lctf.readFeatureList(n,u+d),h.lookupList=e._lctf.readLookupList(n,u+p,l),h},e._lctf.readLookupList=function(n,r,a){var o=e._bin,l=r,c=[],h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var f=o.readUshort(n,r);r+=2;var d=e._lctf.readLookupTable(n,l+f,a);c.push(d)}return c},e._lctf.readLookupTable=function(n,r,a){var o=e._bin,l=r,c={tabs:[]};c.ltype=o.readUshort(n,r),r+=2,c.flag=o.readUshort(n,r),r+=2;var h=o.readUshort(n,r);r+=2;for(var u=c.ltype,f=0;f<h;f++){var d=o.readUshort(n,r);r+=2;var p=a(n,u,l+d,c);c.tabs.push(p)}return c},e._lctf.numOfOnes=function(n){for(var r=0,a=0;a<32;a++)n>>>a&1&&r++;return r},e._lctf.readClassDef=function(n,r){var a=e._bin,o=[],l=a.readUshort(n,r);if(r+=2,l==1){var c=a.readUshort(n,r);r+=2;var h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++)o.push(c+u),o.push(c+u),o.push(a.readUshort(n,r)),r+=2}if(l==2){var f=a.readUshort(n,r);for(r+=2,u=0;u<f;u++)o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2,o.push(a.readUshort(n,r)),r+=2}return o},e._lctf.getInterval=function(n,r){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=r&&r<=l)return a}return-1},e._lctf.readCoverage=function(n,r){var a=e._bin,o={};o.fmt=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.fmt==1&&(o.tab=a.readUshorts(n,r,l)),o.fmt==2&&(o.tab=a.readUshorts(n,r,3*l)),o},e._lctf.coverageIndex=function(n,r){var a=n.tab;if(n.fmt==1)return a.indexOf(r);if(n.fmt==2){var o=e._lctf.getInterval(a,r);if(o!=-1)return a[o+2]+(r-a[o])}return-1},e._lctf.readFeatureList=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2;var d=e._lctf.readFeatureTable(n,o+f);d.tag=u.trim(),l.push(d)}return l},e._lctf.readFeatureTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.featureParams=o+c);var h=a.readUshort(n,r);r+=2,l.tab=[];for(var u=0;u<h;u++)l.tab.push(a.readUshort(n,r+2*u));return l},e._lctf.readScriptList=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readASCII(n,r,4);r+=4;var f=a.readUshort(n,r);r+=2,l[u.trim()]=e._lctf.readScriptTable(n,o+f)}return l},e._lctf.readScriptTable=function(n,r){var a=e._bin,o=r,l={},c=a.readUshort(n,r);r+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var h=a.readUshort(n,r);r+=2;for(var u=0;u<h;u++){var f=a.readASCII(n,r,4);r+=4;var d=a.readUshort(n,r);r+=2,l[f.trim()]=e._lctf.readLangSysTable(n,o+d)}return l},e._lctf.readLangSysTable=function(n,r){var a=e._bin,o={};a.readUshort(n,r),r+=2,o.reqFeature=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);return r+=2,o.features=a.readUshorts(n,r,l),o},e.CFF={},e.CFF.parse=function(n,r,a){var o=e._bin;(n=new Uint8Array(n.buffer,r,a))[r=0],n[++r],n[++r],n[++r],r++;var l=[];r=e.CFF.readIndex(n,r,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(n,r+l[h],l[h+1]-l[h]));r+=l[l.length-1];var u=[];r=e.CFF.readIndex(n,r,u);var f=[];for(h=0;h<u.length-1;h++)f.push(e.CFF.readDict(n,r+u[h],r+u[h+1]));r+=u[u.length-1];var d=f[0],p=[];r=e.CFF.readIndex(n,r,p);var v=[];for(h=0;h<p.length-1;h++)v.push(o.readASCII(n,r+p[h],p[h+1]-p[h]));if(r+=p[p.length-1],e.CFF.readSubrs(n,r,d),d.CharStrings){r=d.CharStrings,p=[],r=e.CFF.readIndex(n,r,p);var m=[];for(h=0;h<p.length-1;h++)m.push(o.readBytes(n,r+p[h],p[h+1]-p[h]));d.CharStrings=m}if(d.ROS){r=d.FDArray;var g=[];for(r=e.CFF.readIndex(n,r,g),d.FDArray=[],h=0;h<g.length-1;h++){var y=e.CFF.readDict(n,r+g[h],r+g[h+1]);e.CFF._readFDict(n,y,v),d.FDArray.push(y)}r+=g[g.length-1],r=d.FDSelect,d.FDSelect=[];var x=n[r];if(r++,x!=3)throw x;var _=o.readUshort(n,r);for(r+=2,h=0;h<_+1;h++)d.FDSelect.push(o.readUshort(n,r),n[r+2]),r+=3}return d.Encoding&&(d.Encoding=e.CFF.readEncoding(n,d.Encoding,d.CharStrings.length)),d.charset&&(d.charset=e.CFF.readCharset(n,d.charset,d.CharStrings.length)),e.CFF._readFDict(n,d,v),d},e.CFF._readFDict=function(n,r,a){var o;for(var l in r.Private&&(o=r.Private[1],r.Private=e.CFF.readDict(n,o,o+r.Private[0]),r.Private.Subrs&&e.CFF.readSubrs(n,o+r.Private.Subrs,r.Private)),r)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(r[l]=a[r[l]-426+35])},e.CFF.readSubrs=function(n,r,a){var o=e._bin,l=[];r=e.CFF.readIndex(n,r,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var u=0;u<l.length-1;u++)a.Subrs.push(o.readBytes(n,r+l[u],l[u+1]-l[u]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,r){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==r)return a;return-1},e.CFF.glyphBySE=function(n,r){return r<0||r>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[r])},e.CFF.readEncoding=function(n,r,a){e._bin;var o=[".notdef"],l=n[r];if(r++,l!=0)throw"error: unknown encoding format: "+l;var c=n[r];r++;for(var h=0;h<c;h++)o.push(n[r+h]);return o},e.CFF.readCharset=function(n,r,a){var o=e._bin,l=[".notdef"],c=n[r];if(r++,c==0)for(var h=0;h<a;h++){var u=o.readUshort(n,r);r+=2,l.push(u)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){u=o.readUshort(n,r),r+=2;var f=0;for(c==1?(f=n[r],r++):(f=o.readUshort(n,r),r+=2),h=0;h<=f;h++)l.push(u),u++}}return l},e.CFF.readIndex=function(n,r,a){var o=e._bin,l=o.readUshort(n,r)+1,c=n[r+=2];if(r++,c==1)for(var h=0;h<l;h++)a.push(n[r+h]);else if(c==2)for(h=0;h<l;h++)a.push(o.readUshort(n,r+2*h));else if(c==3)for(h=0;h<l;h++)a.push(16777215&o.readUint(n,r+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(r+=l*c)-1},e.CFF.getCharString=function(n,r,a){var o=e._bin,l=n[r],c=n[r+1];n[r+2],n[r+3],n[r+4];var h=1,u=null,f=null;l<=20&&(u=l,h=1),l==12&&(u=100*l+c,h=2),21<=l&&l<=27&&(u=l,h=1),l==28&&(f=o.readShort(n,r+1),h=3),29<=l&&l<=31&&(u=l,h=1),32<=l&&l<=246&&(f=l-139,h=1),247<=l&&l<=250&&(f=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(f=256*-(l-251)-c-108,h=2),l==255&&(f=o.readInt(n,r+1)/65535,h=5),a.val=f??"o"+u,a.size=h},e.CFF.readCharString=function(n,r,a){for(var o=r+a,l=e._bin,c=[];r<o;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,p=null;h<=20&&(d=h,f=1),h==12&&(d=100*h+u,f=2),h!=19&&h!=20||(d=h,f=2),21<=h&&h<=27&&(d=h,f=1),h==28&&(p=l.readShort(n,r+1),f=3),29<=h&&h<=31&&(d=h,f=1),32<=h&&h<=246&&(p=h-139,f=1),247<=h&&h<=250&&(p=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(p=256*-(h-251)-u-108,f=2),h==255&&(p=l.readInt(n,r+1)/65535,f=5),c.push(p??"o"+d),r+=f}return c},e.CFF.readDict=function(n,r,a){for(var o=e._bin,l={},c=[];r<a;){var h=n[r],u=n[r+1];n[r+2],n[r+3],n[r+4];var f=1,d=null,p=null;if(h==28&&(p=o.readShort(n,r+1),f=3),h==29&&(p=o.readInt(n,r+1),f=5),32<=h&&h<=246&&(p=h-139,f=1),247<=h&&h<=250&&(p=256*(h-247)+u+108,f=2),251<=h&&h<=254&&(p=256*-(h-251)-u-108,f=2),h==255)throw p=o.readInt(n,r+1)/65535,f=5,"unknown number";if(h==30){var v=[];for(f=1;;){var m=n[r+f];f++;var g=m>>4,y=15&m;if(g!=15&&v.push(g),y!=15&&v.push(y),y==15)break}for(var x="",_=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],C=0;C<v.length;C++)x+=_[v[C]];p=parseFloat(x)}h<=21&&(d=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],f=1,h==12&&(d=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][u],f=2)),d!=null?(l[d]=c.length==1?c[0]:c,c=[]):c.push(p),r+=f}return l},e.cmap={},e.cmap.parse=function(n,r,a){n=new Uint8Array(n.buffer,r,a),r=0;var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2;var h=[];l.tables=[];for(var u=0;u<c;u++){var f=o.readUshort(n,r);r+=2;var d=o.readUshort(n,r);r+=2;var p=o.readUint(n,r);r+=4;var v="p"+f+"e"+d,m=h.indexOf(p);if(m==-1){var g;m=l.tables.length,h.push(p);var y=o.readUshort(n,p);y==0?g=e.cmap.parse0(n,p):y==4?g=e.cmap.parse4(n,p):y==6?g=e.cmap.parse6(n,p):y==12?g=e.cmap.parse12(n,p):console.debug("unknown format: "+y,f,d,p),l.tables.push(g)}if(l[v]!=null)throw"multiple tables for one platform+encoding";l[v]=m}return l},e.cmap.parse0=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[r+c]);return o},e.cmap.parse4=function(n,r){var a=e._bin,o=r,l={};l.format=a.readUshort(n,r),r+=2;var c=a.readUshort(n,r);r+=2,a.readUshort(n,r),r+=2;var h=a.readUshort(n,r);r+=2;var u=h/2;l.searchRange=a.readUshort(n,r),r+=2,l.entrySelector=a.readUshort(n,r),r+=2,l.rangeShift=a.readUshort(n,r),r+=2,l.endCount=a.readUshorts(n,r,u),r+=2*u,r+=2,l.startCount=a.readUshorts(n,r,u),r+=2*u,l.idDelta=[];for(var f=0;f<u;f++)l.idDelta.push(a.readShort(n,r)),r+=2;for(l.idRangeOffset=a.readUshorts(n,r,u),r+=2*u,l.glyphIdArray=[];r<o+c;)l.glyphIdArray.push(a.readUshort(n,r)),r+=2;return l},e.cmap.parse6=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,a.readUshort(n,r),r+=2,o.firstCode=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,r)),r+=2;return o},e.cmap.parse12=function(n,r){var a=e._bin,o={};o.format=a.readUshort(n,r),r+=2,r+=2,a.readUint(n,r),r+=4,a.readUint(n,r),r+=4;var l=a.readUint(n,r);r+=4,o.groups=[];for(var c=0;c<l;c++){var h=r+12*c,u=a.readUint(n,h+0),f=a.readUint(n,h+4),d=a.readUint(n,h+8);o.groups.push([u,f,d])}return o},e.glyf={},e.glyf.parse=function(n,r,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,r){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[r];if(n.loca[r]==n.loca[r+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(a.readUshort(o,l)),l+=2;var u=a.readUshort(o,l);if(l+=2,o.length-l<u)return null;c.instructions=a.readBytes(o,l,u),l+=u;var f=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<f;h++){var d=o[l];if(l++,c.flags.push(d),(8&d)!=0){var p=o[l];l++;for(var v=0;v<p;v++)c.flags.push(d),h++}}for(c.xs=[],h=0;h<f;h++){var m=(2&c.flags[h])!=0,g=(16&c.flags[h])!=0;m?(c.xs.push(g?o[l]:-o[l]),l++):g?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<f;h++)m=(4&c.flags[h])!=0,g=(32&c.flags[h])!=0,m?(c.ys.push(g?o[l]:-o[l]),l++):g?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var y=0,x=0;for(h=0;h<f;h++)y+=c.xs[h],x+=c.ys[h],c.xs[h]=y,c.ys[h]=x}else{var _;c.parts=[];do{_=a.readUshort(o,l),l+=2;var C={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(C),C.glyphIndex=a.readUshort(o,l),l+=2,1&_){var T=a.readShort(o,l);l+=2;var A=a.readShort(o,l);l+=2}else T=a.readInt8(o,l),l++,A=a.readInt8(o,l),l++;2&_?(C.m.tx=T,C.m.ty=A):(C.p1=T,C.p2=A),8&_?(C.m.a=C.m.d=a.readF2dot14(o,l),l+=2):64&_?(C.m.a=a.readF2dot14(o,l),l+=2,C.m.d=a.readF2dot14(o,l),l+=2):128&_&&(C.m.a=a.readF2dot14(o,l),l+=2,C.m.b=a.readF2dot14(o,l),l+=2,C.m.c=a.readF2dot14(o,l),l+=2,C.m.d=a.readF2dot14(o,l),l+=2)}while(32&_);if(256&_){var E=a.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<E;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,r,a,o){var l=r;r+=4;var c=e._bin.readUshort(n,r);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,r,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,r==1||r==2||r==3||r==7||r==8&&h.fmt<=2){var u=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,u+c)}if(r==1&&h.fmt==1){var f=l.readUshort(n,a);a+=2,f!=0&&(h.pos=e.GPOS.readValueRecord(n,a,f))}else if(r==2&&h.fmt>=1&&h.fmt<=2){f=l.readUshort(n,a),a+=2;var d=l.readUshort(n,a);a+=2;var p=e._lctf.numOfOnes(f),v=e._lctf.numOfOnes(d);if(h.fmt==1){h.pairsets=[];var m=l.readUshort(n,a);a+=2;for(var g=0;g<m;g++){var y=c+l.readUshort(n,a);a+=2;var x=l.readUshort(n,y);y+=2;for(var _=[],C=0;C<x;C++){var T=l.readUshort(n,y);y+=2,f!=0&&(D=e.GPOS.readValueRecord(n,y,f),y+=2*p),d!=0&&(z=e.GPOS.readValueRecord(n,y,d),y+=2*v),_.push({gid2:T,val1:D,val2:z})}h.pairsets.push(_)}}if(h.fmt==2){var A=l.readUshort(n,a);a+=2;var E=l.readUshort(n,a);a+=2;var w=l.readUshort(n,a);a+=2;var M=l.readUshort(n,a);for(a+=2,h.classDef1=e._lctf.readClassDef(n,c+A),h.classDef2=e._lctf.readClassDef(n,c+E),h.matrix=[],g=0;g<w;g++){var L=[];for(C=0;C<M;C++){var D=null,z=null;f!=0&&(D=e.GPOS.readValueRecord(n,a,f),a+=2*p),d!=0&&(z=e.GPOS.readValueRecord(n,a,d),a+=2*v),L.push({val1:D,val2:z})}h.matrix.push(L)}}}else if(r==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else if(r==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else{if(r==9&&h.fmt==1){var B=l.readUshort(n,a);a+=2;var K=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=B;else if(o.ltype!=B)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+K)}console.debug("unsupported GPOS table LookupType",r,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,r,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,r):0),r+=1&a?2:0,l.push(2&a?o.readShort(n,r):0),r+=2&a?2:0,l.push(4&a?o.readShort(n,r):0),r+=4&a?2:0,l.push(8&a?o.readShort(n,r):0),r+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,r,a){var o=e._bin,l=[],c=r,h=o.readUshort(n,r);r+=2;for(var u=0;u<h;u++){for(var f=[],d=0;d<a;d++)f.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,r))),r+=2;l.push(f)}return l},e.GPOS.readMarkArray=function(n,r){var a=e._bin,o=[],l=r,c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=e.GPOS.readAnchorRecord(n,a.readUshort(n,r+2)+l);u.markClass=a.readUshort(n,r),o.push(u),r+=4}return o},e.GPOS.readAnchorRecord=function(n,r){var a=e._bin,o={};return o.fmt=a.readUshort(n,r),o.x=a.readShort(n,r+2),o.y=a.readShort(n,r+4),o},e.GSUB={},e.GSUB.parse=function(n,r,a,o){return e._lctf.parse(n,r,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,r,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,r!=1&&r!=2&&r!=4&&r!=5&&r!=6)return null;if(r==1||r==2||r==4||r==5&&h.fmt<=2||r==6&&h.fmt<=2){var u=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,c+u)}if(r==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,a),a+=2;else if(h.fmt==2){var f=l.readUshort(n,a);a+=2,h.newg=l.readUshorts(n,a,f),a+=2*h.newg.length}}else if(r==2&&h.fmt==1){f=l.readUshort(n,a),a+=2,h.seqs=[];for(var d=0;d<f;d++){var p=l.readUshort(n,a)+c;a+=2;var v=l.readUshort(n,p);h.seqs.push(l.readUshorts(n,p+2,v))}}else if(r==4)for(h.vals=[],f=l.readUshort(n,a),a+=2,d=0;d<f;d++){var m=l.readUshort(n,a);a+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+m))}else if(r==5&&h.fmt==2){if(h.fmt==2){var g=l.readUshort(n,a);a+=2,h.cDef=e._lctf.readClassDef(n,c+g),h.scset=[];var y=l.readUshort(n,a);for(a+=2,d=0;d<y;d++){var x=l.readUshort(n,a);a+=2,h.scset.push(x==0?null:e.GSUB.readSubClassSet(n,c+x))}}}else if(r==6&&h.fmt==3){if(h.fmt==3){for(d=0;d<3;d++){f=l.readUshort(n,a),a+=2;for(var _=[],C=0;C<f;C++)_.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*C)));a+=2*f,d==0&&(h.backCvg=_),d==1&&(h.inptCvg=_),d==2&&(h.ahedCvg=_)}f=l.readUshort(n,a),a+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,a,f)}}else{if(r==7&&h.fmt==1){var T=l.readUshort(n,a);a+=2;var A=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=T;else if(o.ltype!=T)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+A)}console.debug("unsupported GSUB table LookupType",r,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,r){var a=e._bin.readUshort,o=r,l=[],c=a(n,r);r+=2;for(var h=0;h<c;h++){var u=a(n,r);r+=2,l.push(e.GSUB.readSubClassRule(n,o+u))}return l},e.GSUB.readSubClassRule=function(n,r){var a=e._bin.readUshort,o={},l=a(n,r),c=a(n,r+=2);r+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(a(n,r)),r+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,r,c),o},e.GSUB.readSubstLookupRecords=function(n,r,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,r),o(n,r+2)),r+=4;return l},e.GSUB.readChainSubClassSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,r);r+=2,l.push(e.GSUB.readChainSubClassRule(n,o+u))}return l},e.GSUB.readChainSubClassRule=function(n,r){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=a.readUshort(n,r);r+=2,c==1&&h--,o[l[c]]=a.readUshorts(n,r,h),r+=2*o[l[c]].length}return h=a.readUshort(n,r),r+=2,o.subst=a.readUshorts(n,r,2*h),r+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,r){var a=e._bin,o=r,l=[],c=a.readUshort(n,r);r+=2;for(var h=0;h<c;h++){var u=a.readUshort(n,r);r+=2,l.push(e.GSUB.readLigature(n,o+u))}return l},e.GSUB.readLigature=function(n,r){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,r),r+=2;var l=a.readUshort(n,r);r+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,r)),r+=2;return o},e.head={},e.head.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.fontRevision=o.readFixed(n,r),r+=4,o.readUint(n,r),r+=4,o.readUint(n,r),r+=4,l.flags=o.readUshort(n,r),r+=2,l.unitsPerEm=o.readUshort(n,r),r+=2,l.created=o.readUint64(n,r),r+=8,l.modified=o.readUint64(n,r),r+=8,l.xMin=o.readShort(n,r),r+=2,l.yMin=o.readShort(n,r),r+=2,l.xMax=o.readShort(n,r),r+=2,l.yMax=o.readShort(n,r),r+=2,l.macStyle=o.readUshort(n,r),r+=2,l.lowestRecPPEM=o.readUshort(n,r),r+=2,l.fontDirectionHint=o.readShort(n,r),r+=2,l.indexToLocFormat=o.readShort(n,r),r+=2,l.glyphDataFormat=o.readShort(n,r),r+=2,l},e.hhea={},e.hhea.parse=function(n,r,a){var o=e._bin,l={};return o.readFixed(n,r),r+=4,l.ascender=o.readShort(n,r),r+=2,l.descender=o.readShort(n,r),r+=2,l.lineGap=o.readShort(n,r),r+=2,l.advanceWidthMax=o.readUshort(n,r),r+=2,l.minLeftSideBearing=o.readShort(n,r),r+=2,l.minRightSideBearing=o.readShort(n,r),r+=2,l.xMaxExtent=o.readShort(n,r),r+=2,l.caretSlopeRise=o.readShort(n,r),r+=2,l.caretSlopeRun=o.readShort(n,r),r+=2,l.caretOffset=o.readShort(n,r),r+=2,r+=8,l.metricDataFormat=o.readShort(n,r),r+=2,l.numberOfHMetrics=o.readUshort(n,r),r+=2,l},e.hmtx={},e.hmtx.parse=function(n,r,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,u=0,f=0;f<o.maxp.numGlyphs;f++)f<o.hhea.numberOfHMetrics&&(h=l.readUshort(n,r),r+=2,u=l.readShort(n,r),r+=2),c.aWidth.push(h),c.lsBearing.push(u);return c},e.kern={},e.kern.parse=function(n,r,a,o){var l=e._bin,c=l.readUshort(n,r);if(r+=2,c==1)return e.kern.parseV1(n,r-2,a,o);var h=l.readUshort(n,r);r+=2;for(var u={glyph1:[],rval:[]},f=0;f<h;f++){r+=2,a=l.readUshort(n,r),r+=2;var d=l.readUshort(n,r);r+=2;var p=d>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;r=e.kern.readFormat0(n,r,u)}return u},e.kern.parseV1=function(n,r,a,o){var l=e._bin;l.readFixed(n,r),r+=4;var c=l.readUint(n,r);r+=4;for(var h={glyph1:[],rval:[]},u=0;u<c;u++){l.readUint(n,r),r+=4;var f=l.readUshort(n,r);r+=2,l.readUshort(n,r),r+=2;var d=f>>>8;if((d&=15)!=0)throw"unknown kern table format: "+d;r=e.kern.readFormat0(n,r,h)}return h},e.kern.readFormat0=function(n,r,a){var o=e._bin,l=-1,c=o.readUshort(n,r);r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2,o.readUshort(n,r),r+=2;for(var h=0;h<c;h++){var u=o.readUshort(n,r);r+=2;var f=o.readUshort(n,r);r+=2;var d=o.readShort(n,r);r+=2,u!=l&&(a.glyph1.push(u),a.rval.push({glyph2:[],vals:[]}));var p=a.rval[a.rval.length-1];p.glyph2.push(f),p.vals.push(d),l=u}return r},e.loca={},e.loca.parse=function(n,r,a,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,u=o.maxp.numGlyphs+1;if(h==0)for(var f=0;f<u;f++)c.push(l.readUshort(n,r+(f<<1))<<1);if(h==1)for(f=0;f<u;f++)c.push(l.readUint(n,r+(f<<2)));return c},e.maxp={},e.maxp.parse=function(n,r,a){var o=e._bin,l={},c=o.readUint(n,r);return r+=4,l.numGlyphs=o.readUshort(n,r),r+=2,c==65536&&(l.maxPoints=o.readUshort(n,r),r+=2,l.maxContours=o.readUshort(n,r),r+=2,l.maxCompositePoints=o.readUshort(n,r),r+=2,l.maxCompositeContours=o.readUshort(n,r),r+=2,l.maxZones=o.readUshort(n,r),r+=2,l.maxTwilightPoints=o.readUshort(n,r),r+=2,l.maxStorage=o.readUshort(n,r),r+=2,l.maxFunctionDefs=o.readUshort(n,r),r+=2,l.maxInstructionDefs=o.readUshort(n,r),r+=2,l.maxStackElements=o.readUshort(n,r),r+=2,l.maxSizeOfInstructions=o.readUshort(n,r),r+=2,l.maxComponentElements=o.readUshort(n,r),r+=2,l.maxComponentDepth=o.readUshort(n,r),r+=2),l},e.name={},e.name.parse=function(n,r,a){var o=e._bin,l={};o.readUshort(n,r),r+=2;var c=o.readUshort(n,r);r+=2,o.readUshort(n,r);for(var h,u=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],f=r+=2,d=0;d<c;d++){var p=o.readUshort(n,r);r+=2;var v=o.readUshort(n,r);r+=2;var m=o.readUshort(n,r);r+=2;var g=o.readUshort(n,r);r+=2;var y=o.readUshort(n,r);r+=2;var x=o.readUshort(n,r);r+=2;var _,C=u[g],T=f+12*c+x;if(p==0)_=o.readUnicode(n,T,y/2);else if(p==3&&v==0)_=o.readUnicode(n,T,y/2);else if(v==0)_=o.readASCII(n,T,y);else if(v==1)_=o.readUnicode(n,T,y/2);else if(v==3)_=o.readUnicode(n,T,y/2);else{if(p!=1)throw"unknown encoding "+v+", platformID: "+p;_=o.readASCII(n,T,y),console.debug("reading unknown MAC encoding "+v+" as ASCII")}var A="p"+p+","+m.toString(16);l[A]==null&&(l[A]={}),l[A][C!==void 0?C:g]=_,l[A]._lang=m}for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==1033)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==0)return l[E];for(var E in l)if(l[E].postScriptName!=null&&l[E]._lang==3084)return l[E];for(var E in l)if(l[E].postScriptName!=null)return l[E];for(var E in l){h=E;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,r,a){var o=e._bin.readUshort(n,r);r+=2;var l={};if(o==0)e["OS/2"].version0(n,r,l);else if(o==1)e["OS/2"].version1(n,r,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,r,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,r,l)}return l},e["OS/2"].version0=function(n,r,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,r),r+=2,a.usWeightClass=o.readUshort(n,r),r+=2,a.usWidthClass=o.readUshort(n,r),r+=2,a.fsType=o.readUshort(n,r),r+=2,a.ySubscriptXSize=o.readShort(n,r),r+=2,a.ySubscriptYSize=o.readShort(n,r),r+=2,a.ySubscriptXOffset=o.readShort(n,r),r+=2,a.ySubscriptYOffset=o.readShort(n,r),r+=2,a.ySuperscriptXSize=o.readShort(n,r),r+=2,a.ySuperscriptYSize=o.readShort(n,r),r+=2,a.ySuperscriptXOffset=o.readShort(n,r),r+=2,a.ySuperscriptYOffset=o.readShort(n,r),r+=2,a.yStrikeoutSize=o.readShort(n,r),r+=2,a.yStrikeoutPosition=o.readShort(n,r),r+=2,a.sFamilyClass=o.readShort(n,r),r+=2,a.panose=o.readBytes(n,r,10),r+=10,a.ulUnicodeRange1=o.readUint(n,r),r+=4,a.ulUnicodeRange2=o.readUint(n,r),r+=4,a.ulUnicodeRange3=o.readUint(n,r),r+=4,a.ulUnicodeRange4=o.readUint(n,r),r+=4,a.achVendID=[o.readInt8(n,r),o.readInt8(n,r+1),o.readInt8(n,r+2),o.readInt8(n,r+3)],r+=4,a.fsSelection=o.readUshort(n,r),r+=2,a.usFirstCharIndex=o.readUshort(n,r),r+=2,a.usLastCharIndex=o.readUshort(n,r),r+=2,a.sTypoAscender=o.readShort(n,r),r+=2,a.sTypoDescender=o.readShort(n,r),r+=2,a.sTypoLineGap=o.readShort(n,r),r+=2,a.usWinAscent=o.readUshort(n,r),r+=2,a.usWinDescent=o.readUshort(n,r),r+=2},e["OS/2"].version1=function(n,r,a){var o=e._bin;return r=e["OS/2"].version0(n,r,a),a.ulCodePageRange1=o.readUint(n,r),r+=4,a.ulCodePageRange2=o.readUint(n,r),r+=4},e["OS/2"].version2=function(n,r,a){var o=e._bin;return r=e["OS/2"].version1(n,r,a),a.sxHeight=o.readShort(n,r),r+=2,a.sCapHeight=o.readShort(n,r),r+=2,a.usDefault=o.readUshort(n,r),r+=2,a.usBreak=o.readUshort(n,r),r+=2,a.usMaxContext=o.readUshort(n,r),r+=2},e["OS/2"].version5=function(n,r,a){var o=e._bin;return r=e["OS/2"].version2(n,r,a),a.usLowerOpticalPointSize=o.readUshort(n,r),r+=2,a.usUpperOpticalPointSize=o.readUshort(n,r),r+=2},e.post={},e.post.parse=function(n,r,a){var o=e._bin,l={};return l.version=o.readFixed(n,r),r+=4,l.italicAngle=o.readFixed(n,r),r+=4,l.underlinePosition=o.readShort(n,r),r+=2,l.underlineThickness=o.readShort(n,r),r+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,r){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return r>=l.map.length?0:l.map[r];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(r<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>r?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[r-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:r+l.idDelta[c])}if(l.format==12){if(r>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var u=l.groups[h];if(u[0]<=r&&r<=u[1])return u[2]+(r-u[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,r){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[r]){var o=n.SVG.entries[r];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[r]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var u=0;c.FDSelect[u+2]<=r;)u+=2;h=c.FDArray[c.FDSelect[u+1]].Private}e.U._drawCFF(n.CFF.CharStrings[r],l,c,h,a)}else n.glyf&&e.U._drawGlyf(r,n,a);return a},e.U._drawGlyf=function(n,r,a){var o=r.glyf[n];o==null&&(o=r.glyf[n]=e.glyf._parseGlyf(r,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,r,a))},e.U._simpleGlyph=function(n,r){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var h=c==o?l:c-1,u=c==l?o:c+1,f=1&n.flags[c],d=1&n.flags[h],p=1&n.flags[u],v=n.xs[c],m=n.ys[c];if(c==o)if(f){if(!d){e.U.P.moveTo(r,v,m);continue}e.U.P.moveTo(r,n.xs[h],n.ys[h])}else d?e.U.P.moveTo(r,n.xs[h],n.ys[h]):e.U.P.moveTo(r,(n.xs[h]+v)/2,(n.ys[h]+m)/2);f?d&&e.U.P.lineTo(r,v,m):p?e.U.P.qcurveTo(r,v,m,n.xs[u],n.ys[u]):e.U.P.qcurveTo(r,v,m,(v+n.xs[u])/2,(m+n.ys[u])/2)}e.U.P.closePath(r)}},e.U._compoGlyph=function(n,r,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,r,l);for(var h=c.m,u=0;u<l.crds.length;u+=2){var f=l.crds[u],d=l.crds[u+1];a.crds.push(f*h.a+d*h.b+h.tx),a.crds.push(f*h.c+d*h.d+h.ty)}for(u=0;u<l.cmds.length;u++)a.cmds.push(l.cmds[u])}},e.U._getGlyphClass=function(n,r){var a=e._lctf.getInterval(r,n);return a==-1?0:r[a+2]},e.U._applySubs=function(n,r,a,o){for(var l=n.length-r-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var h,u=a.tabs[c];if(!u.coverage||(h=e._lctf.coverageIndex(u.coverage,n[r]))!=-1){if(a.ltype==1)n[r],u.fmt==1?n[r]=n[r]+u.delta:n[r]=u.newg[h];else if(a.ltype==4)for(var f=u.vals[h],d=0;d<f.length;d++){var p=f[d],v=p.chain.length;if(!(v>l)){for(var m=!0,g=0,y=0;y<v;y++){for(;n[r+g+(1+y)]==-1;)g++;p.chain[y]!=n[r+g+(1+y)]&&(m=!1)}if(m){for(n[r]=p.nglyph,y=0;y<v+g;y++)n[r+y+1]=-1;break}}}else if(a.ltype==5&&u.fmt==2)for(var x=e._lctf.getInterval(u.cDef,n[r]),_=u.cDef[x+2],C=u.scset[_],T=0;T<C.length;T++){var A=C[T],E=A.input;if(!(E.length>l)){for(m=!0,y=0;y<E.length;y++){var w=e._lctf.getInterval(u.cDef,n[r+1+y]);if(x==-1&&u.cDef[w+2]!=E[y]){m=!1;break}}if(m){var M=A.substLookupRecords;for(d=0;d<M.length;d+=2)M[d],M[d+1]}}}else if(a.ltype==6&&u.fmt==3){if(!e.U._glsCovered(n,u.backCvg,r-u.backCvg.length)||!e.U._glsCovered(n,u.inptCvg,r)||!e.U._glsCovered(n,u.ahedCvg,r+u.inptCvg.length))continue;var L=u.lookupRec;for(T=0;T<L.length;T+=2){x=L[T];var D=o[L[T+1]];e.U._applySubs(n,r+x,D,o)}}}}},e.U._glsCovered=function(n,r,a){for(var o=0;o<r.length;o++)if(e._lctf.coverageIndex(r[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,r,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<r.length;c++){var h=r[c];if(h!=-1){for(var u=c<r.length-1&&r[c+1]!=-1?r[c+1]:0,f=e.U.glyphToPath(n,h),d=0;d<f.crds.length;d+=2)o.crds.push(f.crds[d]+l),o.crds.push(f.crds[d+1]);for(a&&o.cmds.push(a),d=0;d<f.cmds.length;d++)o.cmds.push(f.cmds[d]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[h],c<r.length-1&&(l+=e.U.getPairAdjustment(n,h,u))}}return o},e.U.P={},e.U.P.moveTo=function(n,r,a){n.cmds.push("M"),n.crds.push(r,a)},e.U.P.lineTo=function(n,r,a){n.cmds.push("L"),n.crds.push(r,a)},e.U.P.curveTo=function(n,r,a,o,l,c,h){n.cmds.push("C"),n.crds.push(r,a,o,l,c,h)},e.U.P.qcurveTo=function(n,r,a,o,l){n.cmds.push("Q"),n.crds.push(r,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,r,a,o,l){for(var c=r.stack,h=r.nStems,u=r.haveWidth,f=r.width,d=r.open,p=0,v=r.x,m=r.y,g=0,y=0,x=0,_=0,C=0,T=0,A=0,E=0,w=0,M=0,L={val:0,size:0};p<n.length;){e.CFF.getCharString(n,p,L);var D=L.val;if(p+=L.size,D=="o1"||D=="o18")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(D=="o3"||D=="o23")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0;else if(D=="o4")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),d&&e.U.P.closePath(l),m+=c.pop(),e.U.P.moveTo(l,v,m),d=!0;else if(D=="o5")for(;c.length>0;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);else if(D=="o6"||D=="o7")for(var z=c.length,B=D=="o6",K=0;K<z;K++){var H=c.shift();B?v+=H:m+=H,B=!B,e.U.P.lineTo(l,v,m)}else if(D=="o8"||D=="o24"){z=c.length;for(var ue=0;ue+6<=z;)g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,g,y,x,_,v,m),ue+=6;D=="o24"&&(v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m))}else{if(D=="o11")break;if(D=="o1234"||D=="o1235"||D=="o1236"||D=="o1237")D=="o1234"&&(y=m,x=(g=v+c.shift())+c.shift(),M=_=y+c.shift(),T=_,E=m,v=(A=(C=(w=x+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,x,_,w,M),e.U.P.curveTo(l,C,T,A,E,v,m)),D=="o1235"&&(g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),w=x+c.shift(),M=_+c.shift(),C=w+c.shift(),T=M+c.shift(),A=C+c.shift(),E=T+c.shift(),v=A+c.shift(),m=E+c.shift(),c.shift(),e.U.P.curveTo(l,g,y,x,_,w,M),e.U.P.curveTo(l,C,T,A,E,v,m)),D=="o1236"&&(g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),M=_=y+c.shift(),T=_,A=(C=(w=x+c.shift())+c.shift())+c.shift(),E=T+c.shift(),v=A+c.shift(),e.U.P.curveTo(l,g,y,x,_,w,M),e.U.P.curveTo(l,C,T,A,E,v,m)),D=="o1237"&&(g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),w=x+c.shift(),M=_+c.shift(),C=w+c.shift(),T=M+c.shift(),A=C+c.shift(),E=T+c.shift(),Math.abs(A-v)>Math.abs(E-m)?v=A+c.shift():m=E+c.shift(),e.U.P.curveTo(l,g,y,x,_,w,M),e.U.P.curveTo(l,C,T,A,E,v,m));else if(D=="o14"){if(c.length>0&&!u&&(f=c.shift()+a.nominalWidthX,u=!0),c.length==4){var ee=c.shift(),J=c.shift(),q=c.shift(),V=c.shift(),Y=e.CFF.glyphBySE(a,q),ie=e.CFF.glyphBySE(a,V);e.U._drawCFF(a.CharStrings[Y],r,a,o,l),r.x=ee,r.y=J,e.U._drawCFF(a.CharStrings[ie],r,a,o,l)}d&&(e.U.P.closePath(l),d=!1)}else if(D=="o19"||D=="o20")c.length%2!=0&&!u&&(f=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,u=!0,p+=h+7>>3;else if(D=="o21")c.length>2&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),m+=c.pop(),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(D=="o22")c.length>1&&!u&&(f=c.shift()+o.nominalWidthX,u=!0),v+=c.pop(),d&&e.U.P.closePath(l),e.U.P.moveTo(l,v,m),d=!0;else if(D=="o25"){for(;c.length>6;)v+=c.shift(),m+=c.shift(),e.U.P.lineTo(l,v,m);g=v+c.shift(),y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_+c.shift(),e.U.P.curveTo(l,g,y,x,_,v,m)}else if(D=="o26")for(c.length%2&&(v+=c.shift());c.length>0;)g=v,y=m+c.shift(),v=x=g+c.shift(),m=(_=y+c.shift())+c.shift(),e.U.P.curveTo(l,g,y,x,_,v,m);else if(D=="o27")for(c.length%2&&(m+=c.shift());c.length>0;)y=m,x=(g=v+c.shift())+c.shift(),_=y+c.shift(),v=x+c.shift(),m=_,e.U.P.curveTo(l,g,y,x,_,v,m);else if(D=="o10"||D=="o29"){var W=D=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var X=c.pop(),te=W.Subrs[X+W.Bias];r.x=v,r.y=m,r.nStems=h,r.haveWidth=u,r.width=f,r.open=d,e.U._drawCFF(te,r,a,o,l),v=r.x,m=r.y,h=r.nStems,u=r.haveWidth,f=r.width,d=r.open}}else if(D=="o30"||D=="o31"){var Q=c.length,fe=(ue=0,D=="o31");for(ue+=Q-(z=-3&Q);ue<z;)fe?(y=m,x=(g=v+c.shift())+c.shift(),m=(_=y+c.shift())+c.shift(),z-ue==5?(v=x+c.shift(),ue++):v=x,fe=!1):(g=v,y=m+c.shift(),x=g+c.shift(),_=y+c.shift(),v=x+c.shift(),z-ue==5?(m=_+c.shift(),ue++):m=_,fe=!0),e.U.P.curveTo(l,g,y,x,_,v,m),ue+=4}else{if((D+"").charAt(0)=="o")throw console.debug("Unknown operation: "+D,n),D;c.push(D)}}}r.x=v,r.y=m,r.nStems=h,r.haveWidth=u,r.width=f,r.open=d};var t=e,i={Typr:t};return s.Typr=t,s.default=i,Object.defineProperty(s,"__esModule",{value:!0}),s}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function uA(){return function(s){var e=Uint8Array,t=Uint16Array,i=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),r=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(D,z){for(var B=new t(31),K=0;K<31;++K)B[K]=z+=1<<D[K-1];var H=new i(B[30]);for(K=1;K<30;++K)for(var ue=B[K];ue<B[K+1];++ue)H[ue]=ue-B[K]<<5|K;return[B,H]},l=o(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var u=o(r,0)[0],f=new t(32768),d=0;d<32768;++d){var p=(43690&d)>>>1|(21845&d)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,f[d]=((65280&p)>>>8|(255&p)<<8)>>>1}var v=function(D,z,B){for(var K=D.length,H=0,ue=new t(z);H<K;++H)++ue[D[H]-1];var ee,J=new t(z);for(H=0;H<z;++H)J[H]=J[H-1]+ue[H-1]<<1;{ee=new t(1<<z);var q=15-z;for(H=0;H<K;++H)if(D[H])for(var V=H<<4|D[H],Y=z-D[H],ie=J[D[H]-1]++<<Y,W=ie|(1<<Y)-1;ie<=W;++ie)ee[f[ie]>>>q]=V}return ee},m=new e(288);for(d=0;d<144;++d)m[d]=8;for(d=144;d<256;++d)m[d]=9;for(d=256;d<280;++d)m[d]=7;for(d=280;d<288;++d)m[d]=8;var g=new e(32);for(d=0;d<32;++d)g[d]=5;var y=v(m,9),x=v(g,5),_=function(D){for(var z=D[0],B=1;B<D.length;++B)D[B]>z&&(z=D[B]);return z},C=function(D,z,B){var K=z/8|0;return(D[K]|D[K+1]<<8)>>(7&z)&B},T=function(D,z){var B=z/8|0;return(D[B]|D[B+1]<<8|D[B+2]<<16)>>(7&z)},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],E=function(D,z,B){var K=new Error(z||A[D]);if(K.code=D,Error.captureStackTrace&&Error.captureStackTrace(K,E),!B)throw K;return K},w=function(D,z,B){var K=D.length;if(!K||B&&!B.l&&K<5)return z||new e(0);var H=!z||B,ue=!B||B.i;B||(B={}),z||(z=new e(3*K));var ee,J=function(Ce){var Je=z.length;if(Ce>Je){var Xe=new e(Math.max(2*Je,Ce));Xe.set(z),z=Xe}},q=B.f||0,V=B.p||0,Y=B.b||0,ie=B.l,W=B.d,X=B.m,te=B.n,Q=8*K;do{if(!ie){B.f=q=C(D,V,1);var fe=C(D,V+1,3);if(V+=3,!fe){var Ee=D[(_e=((ee=V)/8|0)+(7&ee&&1)+4)-4]|D[_e-3]<<8,Ae=_e+Ee;if(Ae>K){ue&&E(0);break}H&&J(Y+Ee),z.set(D.subarray(_e,Ae),Y),B.b=Y+=Ee,B.p=V=8*Ae;continue}if(fe==1)ie=y,W=x,X=9,te=5;else if(fe==2){var be=C(D,V,31)+257,$=C(D,V+10,15)+4,ge=be+C(D,V+5,31)+1;V+=14;for(var F=new e(ge),Se=new e(19),pe=0;pe<$;++pe)Se[a[pe]]=C(D,V+3*pe,7);V+=3*$;var Te=_(Se),he=(1<<Te)-1,Le=v(Se,Te);for(pe=0;pe<ge;){var _e,I=Le[C(D,V,he)];if(V+=15&I,(_e=I>>>4)<16)F[pe++]=_e;else{var R=0,Z=0;for(_e==16?(Z=3+C(D,V,3),V+=2,R=F[pe-1]):_e==17?(Z=3+C(D,V,7),V+=3):_e==18&&(Z=11+C(D,V,127),V+=7);Z--;)F[pe++]=R}}var oe=F.subarray(0,be),le=F.subarray(be);X=_(oe),te=_(le),ie=v(oe,X),W=v(le,te)}else E(1);if(V>Q){ue&&E(0);break}}H&&J(Y+131072);for(var me=(1<<X)-1,Re=(1<<te)-1,ve=V;;ve=V){var Me=(R=ie[T(D,V)&me])>>>4;if((V+=15&R)>Q){ue&&E(0);break}if(R||E(2),Me<256)z[Y++]=Me;else{if(Me==256){ve=V,ie=null;break}var He=Me-254;if(Me>264){var Ie=n[pe=Me-257];He=C(D,V,(1<<Ie)-1)+c[pe],V+=Ie}var ze=W[T(D,V)&Re],Fe=ze>>>4;if(ze||E(3),V+=15&ze,le=u[Fe],Fe>3&&(Ie=r[Fe],le+=T(D,V)&(1<<Ie)-1,V+=Ie),V>Q){ue&&E(0);break}H&&J(Y+131072);for(var Be=Y+He;Y<Be;Y+=4)z[Y]=z[Y-le],z[Y+1]=z[Y+1-le],z[Y+2]=z[Y+2-le],z[Y+3]=z[Y+3-le];Y=Be}}B.l=ie,B.p=ve,B.b=Y,ie&&(q=1,B.m=X,B.d=W,B.n=te)}while(!q);return Y==z.length?z:function(Ce,Je,Xe){(Xe==null||Xe>Ce.length)&&(Xe=Ce.length);var nt=new(Ce instanceof t?t:Ce instanceof i?i:e)(Xe-Je);return nt.set(Ce.subarray(Je,Xe)),nt}(z,0,Y)},M=new e(0),L=typeof TextDecoder<"u"&&new TextDecoder;try{L.decode(M,{stream:!0})}catch{}return s.convert_streams=function(D){var z=new DataView(D),B=0;function K(){var be=z.getUint16(B);return B+=2,be}function H(){var be=z.getUint32(B);return B+=4,be}function ue(be){Ee.setUint16(Ae,be),Ae+=2}function ee(be){Ee.setUint32(Ae,be),Ae+=4}for(var J={signature:H(),flavor:H(),length:H(),numTables:K(),reserved:K(),totalSfntSize:H(),majorVersion:K(),minorVersion:K(),metaOffset:H(),metaLength:H(),metaOrigLength:H(),privOffset:H(),privLength:H()},q=0;Math.pow(2,q)<=J.numTables;)q++;q--;for(var V=16*Math.pow(2,q),Y=16*J.numTables-V,ie=12,W=[],X=0;X<J.numTables;X++)W.push({tag:H(),offset:H(),compLength:H(),origLength:H(),origChecksum:H()}),ie+=16;var te,Q=new Uint8Array(12+16*W.length+W.reduce(function(be,$){return be+$.origLength+4},0)),fe=Q.buffer,Ee=new DataView(fe),Ae=0;return ee(J.flavor),ue(J.numTables),ue(V),ue(q),ue(Y),W.forEach(function(be){ee(be.tag),ee(be.origChecksum),ee(ie),ee(be.origLength),be.outOffset=ie,(ie+=be.origLength)%4!=0&&(ie+=4-ie%4)}),W.forEach(function(be){var $,ge=D.slice(be.offset,be.offset+be.compLength);if(be.compLength!=be.origLength){var F=new Uint8Array(be.origLength);$=new Uint8Array(ge,2),w($,F)}else F=new Uint8Array(ge);Q.set(F,be.outOffset);var Se=0;(ie=be.outOffset+be.origLength)%4!=0&&(Se=4-ie%4),Q.set(new Uint8Array(Se).buffer,be.outOffset+be.origLength),te=ie+Se}),fe.slice(0,te)},Object.defineProperty(s,"__esModule",{value:!0}),s}({}).convert_streams}function fA(s,e){const t={M:2,L:2,Q:4,C:6,Z:0},i={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,r=2,a=4,o=8,l=16,c=32;let h;function u(A){if(!h){const E={R:r,L:n,D:a,C:l,U:c,T:o};h=new Map;for(let w in i){let M=0;i[w].split(",").forEach(L=>{let[D,z]=L.split("+");D=parseInt(D,36),z=z?parseInt(z,36):0,h.set(M+=D,E[w]);for(let B=z;B--;)h.set(++M,E[w])})}}return h.get(A)||c}const f=1,d=2,p=3,v=4,m=[null,"isol","init","fina","medi"];function g(A){const E=new Uint8Array(A.length);let w=c,M=f,L=-1;for(let D=0;D<A.length;D++){const z=A.codePointAt(D);let B=u(z)|0,K=f;B&o||(w&(n|a|l)?B&(r|a|l)?(K=p,(M===f||M===p)&&E[L]++):B&(n|c)&&(M===d||M===v)&&E[L]--:w&(r|c)&&(M===d||M===v)&&E[L]--,M=E[D]=K,w=B,L=D,z>65535&&D++)}return E}function y(A,E){const w=[];for(let L=0;L<E.length;L++){const D=E.codePointAt(L);D>65535&&L++,w.push(s.U.codeToGlyph(A,D))}const M=A.GSUB;if(M){const{lookupList:L,featureList:D}=M;let z;const B=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,K=[];D.forEach(H=>{if(B.test(H.tag))for(let ue=0;ue<H.tab.length;ue++){if(K[H.tab[ue]])continue;K[H.tab[ue]]=!0;const ee=L[H.tab[ue]],J=/^(isol|init|fina|medi)$/.test(H.tag);J&&!z&&(z=g(E));for(let q=0;q<w.length;q++)(!z||!J||m[z[q]]===H.tag)&&s.U._applySubs(w,q,ee,L)}})}return w}function x(A,E){const w=new Int16Array(E.length*3);let M=0;for(;M<E.length;M++){const B=E[M];if(B===-1)continue;w[M*3+2]=A.hmtx.aWidth[B];const K=A.GPOS;if(K){const H=K.lookupList;for(let ue=0;ue<H.length;ue++){const ee=H[ue];for(let J=0;J<ee.tabs.length;J++){const q=ee.tabs[J];if(ee.ltype===1){if(s._lctf.coverageIndex(q.coverage,B)!==-1&&q.pos){z(q.pos,M);break}}else if(ee.ltype===2){let V=null,Y=L();if(Y!==-1){const ie=s._lctf.coverageIndex(q.coverage,E[Y]);if(ie!==-1){if(q.fmt===1){const W=q.pairsets[ie];for(let X=0;X<W.length;X++)W[X].gid2===B&&(V=W[X])}else if(q.fmt===2){const W=s.U._getGlyphClass(E[Y],q.classDef1),X=s.U._getGlyphClass(B,q.classDef2);V=q.matrix[W][X]}if(V){V.val1&&z(V.val1,Y),V.val2&&z(V.val2,M);break}}}}else if(ee.ltype===4){const V=s._lctf.coverageIndex(q.markCoverage,B);if(V!==-1){const Y=L(D),ie=Y===-1?-1:s._lctf.coverageIndex(q.baseCoverage,E[Y]);if(ie!==-1){const W=q.markArray[V],X=q.baseArray[ie][W.markClass];w[M*3]=X.x-W.x+w[Y*3]-w[Y*3+2],w[M*3+1]=X.y-W.y+w[Y*3+1];break}}}else if(ee.ltype===6){const V=s._lctf.coverageIndex(q.mark1Coverage,B);if(V!==-1){const Y=L();if(Y!==-1){const ie=E[Y];if(_(A,ie)===3){const W=s._lctf.coverageIndex(q.mark2Coverage,ie);if(W!==-1){const X=q.mark1Array[V],te=q.mark2Array[W][X.markClass];w[M*3]=te.x-X.x+w[Y*3]-w[Y*3+2],w[M*3+1]=te.y-X.y+w[Y*3+1];break}}}}}}}}else if(A.kern&&!A.cff){const H=L();if(H!==-1){const ue=A.kern.glyph1.indexOf(E[H]);if(ue!==-1){const ee=A.kern.rval[ue].glyph2.indexOf(B);ee!==-1&&(w[H*3+2]+=A.kern.rval[ue].vals[ee])}}}}return w;function L(B){for(let K=M-1;K>=0;K--)if(E[K]!==-1&&(!B||B(E[K])))return K;return-1}function D(B){return _(A,B)===1}function z(B,K){for(let H=0;H<3;H++)w[K*3+H]+=B[H]||0}}function _(A,E){const w=A.GDEF&&A.GDEF.glyphClassDef;return w?s.U._getGlyphClass(E,w):0}function C(...A){for(let E=0;E<A.length;E++)if(typeof A[E]=="number")return A[E]}function T(A){const E=Object.create(null),w=A["OS/2"],M=A.hhea,L=A.head.unitsPerEm,D=C(w&&w.sTypoAscender,M&&M.ascender,L),z={unitsPerEm:L,ascender:D,descender:C(w&&w.sTypoDescender,M&&M.descender,0),capHeight:C(w&&w.sCapHeight,D),xHeight:C(w&&w.sxHeight,D),lineGap:C(w&&w.sTypoLineGap,M&&M.lineGap),supportsCodePoint(B){return s.U.codeToGlyph(A,B)>0},forEachGlyph(B,K,H,ue){let ee=0;const J=1/z.unitsPerEm*K,q=y(A,B);let V=0;const Y=x(A,q);return q.forEach((ie,W)=>{if(ie!==-1){let X=E[ie];if(!X){const{cmds:te,crds:Q}=s.U.glyphToPath(A,ie);let fe="",Ee=0;for(let F=0,Se=te.length;F<Se;F++){const pe=t[te[F]];fe+=te[F];for(let Te=1;Te<=pe;Te++)fe+=(Te>1?",":"")+Q[Ee++]}let Ae,be,$,ge;if(Q.length){Ae=be=1/0,$=ge=-1/0;for(let F=0,Se=Q.length;F<Se;F+=2){let pe=Q[F],Te=Q[F+1];pe<Ae&&(Ae=pe),Te<be&&(be=Te),pe>$&&($=pe),Te>ge&&(ge=Te)}}else Ae=$=be=ge=0;X=E[ie]={index:ie,advanceWidth:A.hmtx.aWidth[ie],xMin:Ae,yMin:be,xMax:$,yMax:ge,path:fe}}ue.call(null,X,ee+Y[W*3]*J,Y[W*3+1]*J,V),ee+=Y[W*3+2]*J,H&&(ee+=H*K)}V+=B.codePointAt(V)>65535?2:1}),ee}};return z}return function(E){const w=new Uint8Array(E,0,4),M=s._bin.readASCII(w,0,4);if(M==="wOFF")E=e(E);else if(M==="wOF2")throw new Error("woff2 fonts not supported");return T(s.parse(E)[0])}}const dA=ra({name:"Typr Font Parser",dependencies:[hA,uA,fA],init(s,e,t){const i=s(),n=e();return t(i,n)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function pA(){return function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(x){var _=x>>5;this.buckets.set(_,(this.buckets.get(_)||0)|1<<(31&x))},e.prototype.has=function(x){var _=this.buckets.get(x>>5);return _!==void 0&&(_&1<<(31&x))!=0},e.prototype.serialize=function(){var x=[];return this.buckets.forEach(function(_,C){x.push((+C).toString(36)+":"+_.toString(36))}),x.join(",")},e.prototype.deserialize=function(x){var _=this;this.buckets.clear(),x.split(",").forEach(function(C){var T=C.split(":");_.buckets.set(parseInt(T[0],36),parseInt(T[1],36))})};var t=Math.pow(2,8),i=t-1,n=~i;function r(x){var _=function(T){return T&n}(x).toString(16),C=function(T){return(T&n)+t-1}(x).toString(16);return"codepoint-index/plane"+(x>>16)+"/"+_+"-"+C+".json"}function a(x,_){var C=x&i,T=_.codePointAt(C/6|0);return((T=(T||48)-48)&1<<C%6)!=0}function o(x,_){var C;(C=x,C.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(T){return T.split("-").map(function(A){return parseInt(A.trim(),16)})})).forEach(function(T){var A=T[0],E=T[1];E===void 0&&(E=A),_(A,E)})}function l(x,_){o(x,function(C,T){for(var A=C;A<=T;A++)_(A)})}var c={},h={},u=new WeakMap,f="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function d(x){var _=u.get(x);return _||(_=new e,l(x.ranges,function(C){return _.add(C)}),u.set(x,_)),_}var p,v=new Map;function m(x,_,C){return x[_]?_:x[C]?C:function(T){for(var A in T)return A}(x)}function g(x,_){var C=_;if(!x.includes(C)){C=1/0;for(var T=0;T<x.length;T++)Math.abs(x[T]-_)<Math.abs(C-_)&&(C=x[T])}return C}function y(x){return p||(p=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(_){p.add(_)})),p.has(x)}return s.CodePointSet=e,s.clearCache=function(){c={},h={}},s.getFontsForString=function(x,_){_===void 0&&(_={});var C,T=_.lang;T===void 0&&(T=new RegExp("\\p{Script=Hangul}","u").test(C=x)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(C)?"ja":"en");var A=_.category;A===void 0&&(A="sans-serif");var E=_.style;E===void 0&&(E="normal");var w=_.weight;w===void 0&&(w=400);var M=(_.dataUrl||f).replace(/\/$/g,""),L=new Map,D=new Uint8Array(x.length),z={},B={},K=new Array(x.length),H=new Map,ue=!1;function ee(V){var Y=v.get(V);return Y||(Y=fetch(M+"/"+V).then(function(ie){if(!ie.ok)throw new Error(ie.statusText);return ie.json().then(function(W){if(!Array.isArray(W)||W[0]!==1)throw new Error("Incorrect schema version; need 1, got "+W[0]);return W[1]})}).catch(function(ie){if(M!==f)return ue||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+M+'", trying default CDN. '+ie.message),ue=!0),M=f,v.delete(V),ee(V);throw ie}),v.set(V,Y)),Y}for(var J=function(V){var Y=x.codePointAt(V),ie=r(Y);K[V]=ie,c[ie]||H.has(ie)||H.set(ie,ee(ie).then(function(W){c[ie]=W})),Y>65535&&(V++,q=V)},q=0;q<x.length;q++)J(q);return Promise.all(H.values()).then(function(){H.clear();for(var V=function(ie){var W=x.codePointAt(ie),X=null,te=c[K[ie]],Q=void 0;for(var fe in te){var Ee=B[fe];if(Ee===void 0&&(Ee=B[fe]=new RegExp(fe).test(T||"en")),Ee){for(var Ae in Q=fe,te[fe])if(a(W,te[fe][Ae])){X=Ae;break}break}}if(!X){e:for(var be in te)if(be!==Q){for(var $ in te[be])if(a(W,te[be][$])){X=$;break e}}}X||(console.debug("No font coverage for U+"+W.toString(16)),X="latin"),K[ie]=X,h[X]||H.has(X)||H.set(X,ee("font-meta/"+X+".json").then(function(ge){h[X]=ge})),W>65535&&(ie++,Y=ie)},Y=0;Y<x.length;Y++)V(Y);return Promise.all(H.values())}).then(function(){for(var V,Y=null,ie=0;ie<x.length;ie++){var W=x.codePointAt(ie);if(Y&&(y(W)||d(Y).has(W)))D[ie]=D[ie-1];else{Y=h[K[ie]];var X=z[Y.id];if(!X){var te=Y.typeforms,Q=m(te,A,"sans-serif"),fe=m(te[Q],E,"normal"),Ee=g((V=te[Q])===null||V===void 0?void 0:V[fe],w);X=z[Y.id]=M+"/font-files/"+Y.id+"/"+Q+"."+fe+"."+Ee+".woff"}var Ae=L.get(X);Ae==null&&(Ae=L.size,L.set(X,Ae)),D[ie]=Ae}W>65535&&(ie++,D[ie]=D[ie-1])}return{fontUrls:Array.from(L.keys()),chars:D}})},Object.defineProperty(s,"__esModule",{value:!0}),s}({})}function mA(s,e){const t=Object.create(null),i=Object.create(null);function n(a,o){const l=c=>{console.error(`Failure loading font ${a}`,c)};try{const c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{const h=s(c.response);h.src=a,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function r(a,o){let l=t[a];l?o(l):i[a]?i[a].push(o):(i[a]=[o],n(a,c=>{c.src=a,t[a]=c,i[a].forEach(h=>h(c)),delete i[a]}))}return function(a,o,{lang:l,fonts:c=[],style:h="normal",weight:u="normal",unicodeFontsURL:f}={}){const d=new Uint8Array(a.length),p=[];a.length||y();const v=new Map,m=[];if(h!=="italic"&&(h="normal"),typeof u!="number"&&(u=u==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(_=>!_.lang||_.lang.test(l)).reverse(),c.length){let A=0;(function E(w=0){for(let M=w,L=a.length;M<L;M++){const D=a.codePointAt(M);if(A===1&&p[d[M-1]].supportsCodePoint(D)||/\s/.test(a[M]))d[M]=d[M-1],A===2&&(m[m.length-1][1]=M);else for(let z=d[M],B=c.length;z<=B;z++)if(z===B){const K=A===2?m[m.length-1]:m[m.length]=[M,M];K[1]=M,A=2}else{d[M]=z;const{src:K,unicodeRange:H}=c[z];if(!H||x(D,H)){const ue=t[K];if(!ue){r(K,()=>{E(M)});return}if(ue.supportsCodePoint(D)){let ee=v.get(ue);typeof ee!="number"&&(ee=p.length,p.push(ue),v.set(ue,ee)),d[M]=ee,A=1;break}}}D>65535&&M+1<L&&(d[M+1]=d[M],M++,A===2&&(m[m.length-1][1]=M))}g()})()}else m.push([0,a.length-1]),g();function g(){if(m.length){const _=m.map(C=>a.substring(C[0],C[1]+1)).join(`
`);e.getFontsForString(_,{lang:l||void 0,style:h,weight:u,dataUrl:f}).then(({fontUrls:C,chars:T})=>{const A=p.length;let E=0;m.forEach(M=>{for(let L=0,D=M[1]-M[0];L<=D;L++)d[M[0]+L]=T[E++]+A;E++});let w=0;C.forEach((M,L)=>{r(M,D=>{p[L+A]=D,++w===C.length&&y()})})})}else y()}function y(){o({chars:d,fonts:p})}function x(_,C){for(let T=0;T<C.length;T++){const[A,E=A]=C[T];if(A<=_&&_<=E)return!0}return!1}}}const gA=ra({name:"FontResolver",dependencies:[mA,dA,pA],init(s,e,t){return s(e,t())}});function vA(s,e){const i=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",r=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:p,lang:v,fonts:m,style:g,weight:y,preResolvedFonts:x,unicodeFontsURL:_},C){const T=({chars:A,fonts:E})=>{let w,M;const L=[];for(let D=0;D<A.length;D++)A[D]!==M?(M=A[D],L.push(w={start:D,end:D,fontObj:E[A[D]]})):w.end=D;C(L)};x?T(x):s(p,T,{lang:v,fonts:m,style:g,weight:y,unicodeFontsURL:_})}function o({text:p="",font:v,lang:m,sdfGlyphSize:g=64,fontSize:y=400,fontWeight:x=1,fontStyle:_="normal",letterSpacing:C=0,lineHeight:T="normal",maxWidth:A=1/0,direction:E,textAlign:w="left",textIndent:M=0,whiteSpace:L="normal",overflowWrap:D="normal",anchorX:z=0,anchorY:B=0,metricsOnly:K=!1,unicodeFontsURL:H,preResolvedFonts:ue=null,includeCaretPositions:ee=!1,chunkedBoundsSize:J=8192,colorRanges:q=null},V){const Y=u(),ie={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),y=+y,C=+C,A=+A,T=T||"normal",M=+M,a({text:p,lang:m,style:_,weight:x,fonts:typeof v=="string"?[{src:v}]:v,unicodeFontsURL:H,preResolvedFonts:ue},W=>{ie.fontLoad=u()-Y;const X=isFinite(A);let te=null,Q=null,fe=null,Ee=null,Ae=null,be=null,$=null,ge=null,F=0,Se=0,pe=L!=="nowrap";const Te=new Map,he=u();let Le=M,_e=0,I=new f;const R=[I];W.forEach(Re=>{const{fontObj:ve}=Re,{ascender:Me,descender:He,unitsPerEm:Ie,lineGap:ze,capHeight:Fe,xHeight:Be}=ve;let Ce=Te.get(ve);if(!Ce){const ne=y/Ie,de=T==="normal"?(Me-He+ze)*ne:T*y,Pe=(de-(Me-He)*ne)/2,Oe=Math.min(de,(Me-He)*ne),Ue=(Me+He)/2*ne+Oe/2;Ce={index:Te.size,src:ve.src,fontObj:ve,fontSizeMult:ne,unitsPerEm:Ie,ascender:Me*ne,descender:He*ne,capHeight:Fe*ne,xHeight:Be*ne,lineHeight:de,baseline:-Pe-Me*ne,caretTop:Ue,caretBottom:Ue-Oe},Te.set(ve,Ce)}const{fontSizeMult:Je}=Ce,Xe=p.slice(Re.start,Re.end+1);let nt,j;ve.forEachGlyph(Xe,y,C,(ne,de,Pe,Oe)=>{de+=_e,Oe+=Re.start,nt=de,j=ne;const Ue=p.charAt(Oe),$e=ne.advanceWidth*Je,ot=I.count;let et;if("isEmpty"in ne||(ne.isWhitespace=!!Ue&&new RegExp(n).test(Ue),ne.canBreakAfter=!!Ue&&r.test(Ue),ne.isEmpty=ne.xMin===ne.xMax||ne.yMin===ne.yMax||i.test(Ue)),!ne.isWhitespace&&!ne.isEmpty&&Se++,pe&&X&&!ne.isWhitespace&&de+$e+Le>A&&ot){if(I.glyphAt(ot-1).glyphObj.canBreakAfter)et=new f,Le=-de;else for(let yt=ot;yt--;)if(yt===0&&D==="break-word"){et=new f,Le=-de;break}else if(I.glyphAt(yt).glyphObj.canBreakAfter){et=I.splitAt(yt+1);const St=et.glyphAt(0).x;Le-=St;for(let Lt=et.count;Lt--;)et.glyphAt(Lt).x-=St;break}et&&(I.isSoftWrapped=!0,I=et,R.push(I),F=A)}let it=I.glyphAt(I.count);it.glyphObj=ne,it.x=de+Le,it.y=Pe,it.width=$e,it.charIndex=Oe,it.fontData=Ce,Ue===`
`&&(I=new f,R.push(I),Le=-(de+$e+C*y)+M)}),_e=nt+j.advanceWidth*Je+C*y});let Z=0;R.forEach(Re=>{let ve=!0;for(let Me=Re.count;Me--;){const He=Re.glyphAt(Me);ve&&!He.glyphObj.isWhitespace&&(Re.width=He.x+He.width,Re.width>F&&(F=Re.width),ve=!1);let{lineHeight:Ie,capHeight:ze,xHeight:Fe,baseline:Be}=He.fontData;Ie>Re.lineHeight&&(Re.lineHeight=Ie);const Ce=Be-Re.baseline;Ce<0&&(Re.baseline+=Ce,Re.cap+=Ce,Re.ex+=Ce),Re.cap=Math.max(Re.cap,Re.baseline+ze),Re.ex=Math.max(Re.ex,Re.baseline+Fe)}Re.baseline-=Z,Re.cap-=Z,Re.ex-=Z,Z+=Re.lineHeight});let oe=0,le=0;if(z&&(typeof z=="number"?oe=-z:typeof z=="string"&&(oe=-F*(z==="left"?0:z==="center"?.5:z==="right"?1:c(z)))),B&&(typeof B=="number"?le=-B:typeof B=="string"&&(le=B==="top"?0:B==="top-baseline"?-R[0].baseline:B==="top-cap"?-R[0].cap:B==="top-ex"?-R[0].ex:B==="middle"?Z/2:B==="bottom"?Z:B==="bottom-baseline"?-R[R.length-1].baseline:c(B)*Z)),!K){const Re=e.getEmbeddingLevels(p,E);te=new Uint16Array(Se),Q=new Uint8Array(Se),fe=new Float32Array(Se*2),Ee={},$=[1/0,1/0,-1/0,-1/0],ge=[],ee&&(be=new Float32Array(p.length*4)),q&&(Ae=new Uint8Array(Se*3));let ve=0,Me=-1,He=-1,Ie,ze;if(R.forEach((Fe,Be)=>{let{count:Ce,width:Je}=Fe;if(Ce>0){let Xe=0;for(let Oe=Ce;Oe--&&Fe.glyphAt(Oe).glyphObj.isWhitespace;)Xe++;let nt=0,j=0;if(w==="center")nt=(F-Je)/2;else if(w==="right")nt=F-Je;else if(w==="justify"&&Fe.isSoftWrapped){let Oe=0;for(let Ue=Ce-Xe;Ue--;)Fe.glyphAt(Ue).glyphObj.isWhitespace&&Oe++;j=(F-Je)/Oe}if(j||nt){let Oe=0;for(let Ue=0;Ue<Ce;Ue++){let $e=Fe.glyphAt(Ue);const ot=$e.glyphObj;$e.x+=nt+Oe,j!==0&&ot.isWhitespace&&Ue<Ce-Xe&&(Oe+=j,$e.width+=j)}}const ne=e.getReorderSegments(p,Re,Fe.glyphAt(0).charIndex,Fe.glyphAt(Fe.count-1).charIndex);for(let Oe=0;Oe<ne.length;Oe++){const[Ue,$e]=ne[Oe];let ot=1/0,et=-1/0;for(let it=0;it<Ce;it++)if(Fe.glyphAt(it).charIndex>=Ue){let yt=it,St=it;for(;St<Ce;St++){let Lt=Fe.glyphAt(St);if(Lt.charIndex>$e)break;St<Ce-Xe&&(ot=Math.min(ot,Lt.x),et=Math.max(et,Lt.x+Lt.width))}for(let Lt=yt;Lt<St;Lt++){const sn=Fe.glyphAt(Lt);sn.x=et-(sn.x+sn.width-ot)}break}}let de;const Pe=Oe=>de=Oe;for(let Oe=0;Oe<Ce;Oe++){const Ue=Fe.glyphAt(Oe);de=Ue.glyphObj;const $e=de.index,ot=Re.levels[Ue.charIndex]&1;if(ot){const et=e.getMirroredCharacter(p[Ue.charIndex]);et&&Ue.fontData.fontObj.forEachGlyph(et,0,0,Pe)}if(ee){const{charIndex:et,fontData:it}=Ue,yt=Ue.x+oe,St=Ue.x+Ue.width+oe;be[et*4]=ot?St:yt,be[et*4+1]=ot?yt:St,be[et*4+2]=Fe.baseline+it.caretBottom+le,be[et*4+3]=Fe.baseline+it.caretTop+le;const Lt=et-Me;Lt>1&&h(be,Me,Lt),Me=et}if(q){const{charIndex:et}=Ue;for(;et>He;)He++,q.hasOwnProperty(He)&&(ze=q[He])}if(!de.isWhitespace&&!de.isEmpty){const et=ve++,{fontSizeMult:it,src:yt,index:St}=Ue.fontData,Lt=Ee[yt]||(Ee[yt]={});Lt[$e]||(Lt[$e]={path:de.path,pathBounds:[de.xMin,de.yMin,de.xMax,de.yMax]});const sn=Ue.x+oe,Qt=Ue.y+Fe.baseline+le;fe[et*2]=sn,fe[et*2+1]=Qt;const mn=sn+de.xMin*it,En=Qt+de.yMin*it,Zn=sn+de.xMax*it,an=Qt+de.yMax*it;mn<$[0]&&($[0]=mn),En<$[1]&&($[1]=En),Zn>$[2]&&($[2]=Zn),an>$[3]&&($[3]=an),et%J===0&&(Ie={start:et,end:et,rect:[1/0,1/0,-1/0,-1/0]},ge.push(Ie)),Ie.end++;const Ht=Ie.rect;if(mn<Ht[0]&&(Ht[0]=mn),En<Ht[1]&&(Ht[1]=En),Zn>Ht[2]&&(Ht[2]=Zn),an>Ht[3]&&(Ht[3]=an),te[et]=$e,Q[et]=St,q){const Tn=et*3;Ae[Tn]=ze>>16&255,Ae[Tn+1]=ze>>8&255,Ae[Tn+2]=ze&255}}}}}),be){const Fe=p.length-Me;Fe>1&&h(be,Me,Fe)}}const me=[];Te.forEach(({index:Re,src:ve,unitsPerEm:Me,ascender:He,descender:Ie,lineHeight:ze,capHeight:Fe,xHeight:Be})=>{me[Re]={src:ve,unitsPerEm:Me,ascender:He,descender:Ie,lineHeight:ze,capHeight:Fe,xHeight:Be}}),ie.typesetting=u()-he,V({glyphIds:te,glyphFontIndices:Q,glyphPositions:fe,glyphData:Ee,fontData:me,caretPositions:be,glyphColors:Ae,chunkedBounds:ge,fontSize:y,topBaseline:le+R[0].baseline,blockBounds:[oe,le-Z,oe+F,le],visibleBounds:$,timings:ie})})}function l(p,v){o({...p,metricsOnly:!0},m=>{const[g,y,x,_]=m.blockBounds;v({width:x-g,height:_-y})})}function c(p){let v=p.match(/^([\d.]+)%$/),m=v?parseFloat(v[1]):NaN;return isNaN(m)?0:m/100}function h(p,v,m){const g=p[v*4],y=p[v*4+1],x=p[v*4+2],_=p[v*4+3],C=(y-g)/m;for(let T=0;T<m;T++){const A=(v+T)*4;p[A]=g+C*T,p[A+1]=g+C*(T+1),p[A+2]=x,p[A+3]=_}}function u(){return(self.performance||Date).now()}function f(){this.data=[]}const d=["glyphObj","x","y","width","charIndex","fontData"];return f.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/d.length)},glyphAt(p){let v=f.flyweight;return v.data=this.data,v.index=p,v},splitAt(p){let v=new f;return v.data=this.data.splice(p*d.length),v}},f.flyweight=d.reduce((p,v,m,g)=>(Object.defineProperty(p,v,{get(){return this.data[this.index*d.length+m]},set(y){this.data[this.index*d.length+m]=y}}),p),{data:null,index:0}),{typeset:o,measure:l}}const rs=()=>(self.performance||Date).now(),ih=r0();let xm;function _A(s,e,t,i,n,r,a,o,l,c,h=!0){return h?yA(s,e,t,i,n,r,a,o,l,c).then(null,u=>(xm||(console.warn("WebGL SDF generation failed, falling back to JS",u),xm=!0),bm(s,e,t,i,n,r,a,o,l,c))):bm(s,e,t,i,n,r,a,o,l,c)}const Il=[],xA=5;let Yu=0;function o0(){const s=rs();for(;Il.length&&rs()-s<xA;)Il.shift()();Yu=Il.length?setTimeout(o0,0):0}const yA=(...s)=>new Promise((e,t)=>{Il.push(()=>{const i=rs();try{ih.webgl.generateIntoCanvas(...s),e({timing:rs()-i})}catch(n){t(n)}}),Yu||(Yu=setTimeout(o0,0))}),bA=4,SA=2e3,ym={};let MA=0;function bm(s,e,t,i,n,r,a,o,l,c){const h="TroikaTextSDFGenerator_JS_"+MA++%bA;let u=ym[h];return u||(u=ym[h]={workerModule:ra({name:h,workerId:h,dependencies:[r0,rs],init(f,d){const p=f().javascript.generate;return function(...v){const m=d();return{textureData:p(...v),timing:d()-m}}},getTransferables(f){return[f.textureData.buffer]}}),requests:0,idleTimer:null}),u.requests++,clearTimeout(u.idleTimer),u.workerModule(s,e,t,i,n,r).then(({textureData:f,timing:d})=>{const p=rs(),v=new Uint8Array(f.length*4);for(let m=0;m<f.length;m++)v[m*4+c]=f[m];return ih.webglUtils.renderImageData(a,v,o,l,s,e,1<<3-c),d+=rs()-p,--u.requests===0&&(u.idleTimer=setTimeout(()=>{tA(h)},SA)),{timing:d}})}function wA(s){s._warm||(ih.webgl.isSupported(s),s._warm=!0)}const EA=ih.webglUtils.resizeWebGLCanvasWithoutClearing,zs={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},TA=new Ze;function Bs(){return(self.performance||Date).now()}const Sm=Object.create(null);function l0(s,e){s=RA({},s);const t=Bs(),{defaultFontURL:i}=zs,n=[];if(i&&n.push({label:"default",src:Mm(i)}),s.font&&n.push({label:"user",src:Mm(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||zs.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||zs.unicodeFontsURL,s.colorRanges!=null){let f={};for(let d in s.colorRanges)if(s.colorRanges.hasOwnProperty(d)){let p=s.colorRanges[d];typeof p!="number"&&(p=TA.set(p).getHex()),f[d]=p}s.colorRanges=f}Object.freeze(s);const{textureWidth:r,sdfExponent:a}=zs,{sdfGlyphSize:o}=s,l=r/o*4;let c=Sm[o];if(!c){const f=document.createElement("canvas");f.width=r,f.height=o*256/l,c=Sm[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new Bt(f,void 0,void 0,void 0,Dt,Dt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,AA(c)}const{sdfTexture:h,sdfCanvas:u}=c;PA(s).then(f=>{const{glyphIds:d,glyphFontIndices:p,fontData:v,glyphPositions:m,fontSize:g,timings:y}=f,x=[],_=new Float32Array(d.length*4);let C=0,T=0;const A=Bs(),E=v.map(z=>{let B=c.glyphsByFont.get(z.src);return B||c.glyphsByFont.set(z.src,B=new Map),B});d.forEach((z,B)=>{const K=p[B],{src:H,unitsPerEm:ue}=v[K];let ee=E[K].get(z);if(!ee){const{path:ie,pathBounds:W}=f.glyphData[H][z],X=Math.max(W[2]-W[0],W[3]-W[1])/o*(zs.sdfMargin*o+.5),te=c.glyphCount++,Q=[W[0]-X,W[1]-X,W[2]+X,W[3]+X];E[K].set(z,ee={path:ie,atlasIndex:te,sdfViewBox:Q}),x.push(ee)}const{sdfViewBox:J}=ee,q=m[T++],V=m[T++],Y=g/ue;_[C++]=q+J[0]*Y,_[C++]=V+J[1]*Y,_[C++]=q+J[2]*Y,_[C++]=V+J[3]*Y,d[B]=ee.atlasIndex}),y.quads=(y.quads||0)+(Bs()-A);const w=Bs();y.sdf={};const M=u.height,L=Math.ceil(c.glyphCount/l),D=Math.pow(2,Math.ceil(Math.log2(L*o)));D>M&&(console.info(`Increasing SDF texture size ${M}->${D}`),EA(u,r,D),h.dispose()),Promise.all(x.map(z=>c0(z,c,s.gpuAccelerateSDF).then(({timing:B})=>{y.sdf[z.atlasIndex]=B}))).then(()=>{x.length&&!c.contextLost&&(h0(c),h.needsUpdate=!0),y.sdfTotal=Bs()-w,y.total=Bs()-t,e(Object.freeze({parameters:s,sdfTexture:h,sdfGlyphSize:o,sdfExponent:a,glyphBounds:_,glyphAtlasIndices:d,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||wA(u)})}function c0({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:i,sdfCanvas:n,contextLost:r},a){if(r)return Promise.resolve({timing:-1});const{textureWidth:o,sdfExponent:l}=zs,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),u=h%(o/i)*i,f=Math.floor(h/(o/i))*i,d=e%4;return _A(i,i,s,t,c,l,n,u,f,d,a)}function AA(s){const e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;const i=[];s.glyphsByFont.forEach(n=>{n.forEach(r=>{i.push(c0(r,s,!0))})}),Promise.all(i).then(()=>{h0(s),s.sdfTexture.needsUpdate=!0})})}function CA({font:s,characters:e,sdfGlyphSize:t},i){let n=Array.isArray(e)?e.join(`
`):""+e;l0({font:s,sdfGlyphSize:t,text:n},i)}function RA(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}let Sl;function Mm(s){return Sl||(Sl=typeof document>"u"?{}:document.createElement("a")),Sl.href=s,Sl.href}function h0(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:e,sdfTexture:t}=s,{width:i,height:n}=e,r=s.sdfCanvas.getContext("webgl");let a=t.image.data;(!a||a.length!==i*n*4)&&(a=new Uint8Array(i*n*4),t.image={width:i,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),r.readPixels(0,0,i,n,r.RGBA,r.UNSIGNED_BYTE,a)}}const IA=ra({name:"Typesetter",dependencies:[vA,gA,qT],init(s,e,t){return s(e,t())}}),PA=ra({name:"Typesetter",dependencies:[IA],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){const e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),wm={};function DA(s){let e=wm[s];return e||(e=wm[s]=new $i(1,1,s,s).translate(.5,.5,0)),e}const UA="aTroikaGlyphBounds",Em="aTroikaGlyphIndex",LA="aTroikaGlyphColor";class NA extends Of{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Kt,this.boundingBox=new Zt}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=DA(e);["position","normal","uv"].forEach(i=>{this.attributes[i]=t.attributes[i].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,i,n,r){this.updateAttributeData(UA,e,4),this.updateAttributeData(Em,t,1),this.updateAttributeData(LA,r,3),this._blockBounds=i,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){const e=this._blockBounds;if(e){const{curveRadius:t,boundingBox:i}=this;if(t){const{PI:n,floor:r,min:a,max:o,sin:l,cos:c}=Math,h=n/2,u=n*2,f=Math.abs(t),d=e[0]/f,p=e[2]/f,v=r((d+h)/u)!==r((p+h)/u)?-f:a(l(d)*f,l(p)*f),m=r((d-h)/u)!==r((p-h)/u)?f:o(l(d)*f,l(p)*f),g=r((d+n)/u)!==r((p+n)/u)?f*2:o(f-c(d)*f,f-c(p)*f);i.min.set(v,e[1],t<0?-g:0),i.max.set(m,e[3],t<0?0:g)}else i.min.set(e[0],e[1],0),i.max.set(e[2],e[3],0);i.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(Em).count,i=this._chunkedBounds;if(i)for(let n=i.length;n--;){t=i[n].end;let r=i[n].rect;if(r[1]<e.w&&r[3]>e.y&&r[0]<e.z&&r[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,i){const n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new hs(t,i)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}}const FA=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaDistanceOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,OA=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaDistanceOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaDistanceOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,BA=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaDistanceOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaOutlineOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,kA=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaDistanceOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function zA(s){const e=Xu(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new ye},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new ft(0,0,0,0)},uTroikaClipRect:{value:new ft(0,0,0,0)},uTroikaDistanceOffset:{value:0},uTroikaOutlineOpacity:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new ye},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new Ze},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new lt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:FA,vertexTransform:OA,fragmentDefs:BA,fragmentColorTransform:kA,customRewriter({vertexShader:t,fragmentShader:i}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(i)&&(i=i.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(a0,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:i}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}const jf=new Ui({color:16777215,side:ii,transparent:!0}),Tm=8421504,Am=new rt,Ml=new O,vu=new O,Aa=[],VA=new O,_u="+x+y";function Cm(s){return Array.isArray(s)?s[0]:s}let u0=()=>{const s=new Ut(new $i(1,1),jf);return u0=()=>s,s},f0=()=>{const s=new Ut(new $i(1,1,32,1),jf);return f0=()=>s,s};const GA={type:"syncstart"},HA={type:"synccomplete"},d0=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],WA=d0.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");class p0 extends Ut{constructor(){const e=new NA;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=Tm,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=_u,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(GA),l0({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);const i=this._queuedSyncs;i&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{i.forEach(n=>n&&n())})),this.dispatchEvent(HA),e&&e()})))}onBeforeRender(e,t,i,n,r,a){this.sync(),r.isTroikaTextMaterial&&this._prepareForRender(r)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return zA(e)}get material(){let e=this._derivedMaterial;const t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=jf.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function i(){t.removeEventListener("dispose",i),e.dispose()})),this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY){let i=e._outlineMtl;return i||(i=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),i.isTextOutlineMaterial=!0,i.depthWrite=!1,i.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),i.dispose()})),[i,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return Cm(this.material).getDepthMaterial()}get customDistanceMaterial(){return Cm(this.material).getDistanceMaterial()}_prepareForRender(e){const t=e.isTextOutlineMaterial,i=e.uniforms,n=this.textRenderInfo;if(n){const{sdfTexture:o,blockBounds:l}=n;i.uTroikaSDFTexture.value=o,i.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),i.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,i.uTroikaSDFExponent.value=n.sdfExponent,i.uTroikaTotalBounds.value.fromArray(l),i.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,h=0,u=0,f,d,p,v=0,m=0;if(t){let{outlineWidth:y,outlineOffsetX:x,outlineOffsetY:_,outlineBlur:C,outlineOpacity:T}=this;c=this._parsePercent(y)||0,h=Math.max(0,this._parsePercent(C)||0),f=T,v=this._parsePercent(x)||0,m=this._parsePercent(_)||0}else u=Math.max(0,this._parsePercent(this.strokeWidth)||0),u&&(p=this.strokeColor,i.uTroikaStrokeColor.value.set(p??Tm),d=this.strokeOpacity,d==null&&(d=1)),f=this.fillOpacity;i.uTroikaDistanceOffset.value=c,i.uTroikaPositionOffset.value.set(v,m),i.uTroikaBlurRadius.value=h,i.uTroikaStrokeWidth.value=u,i.uTroikaStrokeOpacity.value=d,i.uTroikaFillOpacity.value=f??1,i.uTroikaCurveRadius.value=this.curveRadius||0;let g=this.clipRect;if(g&&Array.isArray(g)&&g.length===4)i.uTroikaClipRect.value.fromArray(g);else{const y=(this.fontSize||.1)*100;i.uTroikaClipRect.value.set(l[0]-y,l[1]-y,l[2]+y,l[3]+y)}this.geometry.applyClipRect(i.uTroikaClipRect.value)}i.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;const r=t?this.outlineColor||0:this.color;if(r==null)delete e.color;else{const o=e.hasOwnProperty("color")?e.color:e.color=new Ze;(r!==o._input||typeof r=="object")&&o.set(o._input=r)}let a=this.orientation||_u;if(a!==e._orientation){let o=i.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==_u&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,u,f]=l;Ml.set(0,0,0)[h]=c==="-"?1:-1,vu.set(0,0,0)[f]=u==="-"?-1:1,Am.lookAt(VA,Ml.cross(vu),vu),o.setFromMatrix4(Am)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),i=t?parseFloat(t[1]):NaN;e=(isNaN(i)?0:i/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new ye){t.copy(e);const i=this.curveRadius;return i&&(t.x=Math.atan2(e.x,Math.abs(i)-Math.abs(e.z))*Math.abs(i)),t}worldPositionToTextCoords(e,t=new ye){return Ml.copy(e),this.localPositionToTextCoords(this.worldToLocal(Ml),t)}raycast(e,t){const{textRenderInfo:i,curveRadius:n}=this;if(i){const r=i.blockBounds,a=n?f0():u0(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let u=r[0]+c.getX(h)*(r[2]-r[0]);const f=r[1]+c.getY(h)*(r[3]-r[1]);let d=0;n&&(d=n-Math.cos(u/n)*n,u=Math.sin(u/n)*n),l.setXYZ(h,u,f,d)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,Aa.length=0,a.raycast(e,Aa);for(let h=0;h<Aa.length;h++)Aa[h].object=this,t.push(Aa[h])}}copy(e){const t=this.geometry;return super.copy(e),this.geometry=t,WA.forEach(i=>{this[i]=e[i]}),this}clone(){return new this.constructor().copy(this)}}d0.forEach(s=>{const e="_private_"+s;Object.defineProperty(p0.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});new Zt;new Ze;function XA(s,e){vi(e,!0);let t=ni(e,"ref",15),i=fo(e,["$$slots","$$events","$$legacy","font","characters","sdfGlyphSize","ref","onsync","children"]);const n=new p0,{invalidate:r}=wr(),a=async()=>{await Qu(),n.sync(()=>{var l;r(),(l=e.onsync)==null||l.call(e)})};yn(()=>{a()});const o=Jv();yn(()=>{o(new Promise(l=>CA({font:e.font,characters:e.characters,sdfGlyphSize:e.sdfGlyphSize},l)))}),pi(s,_c({is:n},()=>i,{get font(){return e.font},get characters(){return e.characters},get sdfGlyphSize(){return e.sdfGlyphSize},get ref(){return t()},set ref(l){t(l)},children:(l,c)=>{var h=un(),u=Gt(h);gr(u,()=>e.children??Et,()=>({ref:n})),It(l,h)},$$slots:{default:!0}})),_i()}for(let s=0;s<256;s++)(s<16?"0":"")+s.toString(16);new Mo(-1,1,1,-1,0,1);class YA extends ht{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}}new YA;var m0={exports:{}};m0.exports=rh;m0.exports.default=rh;function rh(s,e,t){t=t||2;var i=e&&e.length,n=i?e[0]*t:s.length,r=g0(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;var o,l,c,h,u,f,d;if(i&&(r=jA(s,e,r,t)),s.length>80*t){o=c=s[0],l=h=s[1];for(var p=t;p<n;p+=t)u=s[p],f=s[p+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return lo(r,a,t,o,l,d,0),a}function g0(s,e,t,i,n){var r,a;if(n===Ku(s,e,t,i)>0)for(r=e;r<t;r+=i)a=Rm(r,s[r],s[r+1],a);else for(r=t-i;r>=e;r-=i)a=Rm(r,s[r],s[r+1],a);return a&&sh(a,a.next)&&(ho(a),a=a.next),a}function fs(s,e){if(!s)return s;e||(e=s);var t=s,i;do if(i=!1,!t.steiner&&(sh(t,t.next)||Ot(t.prev,t,t.next)===0)){if(ho(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function lo(s,e,t,i,n,r,a){if(s){!a&&r&&n2(s,i,n,r);for(var o=s,l,c;s.prev!==s.next;){if(l=s.prev,c=s.next,r?qA(s,i,n,r):ZA(s)){e.push(l.i/t|0),e.push(s.i/t|0),e.push(c.i/t|0),ho(s),s=c.next,o=c.next;continue}if(s=c,s===o){a?a===1?(s=KA(fs(s),e,t),lo(s,e,t,i,n,r,2)):a===2&&JA(s,e,t,i,n,r):lo(fs(s),e,t,i,n,r,1);break}}}}function ZA(s){var e=s.prev,t=s,i=s.next;if(Ot(e,t,i)>=0)return!1;for(var n=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=n<r?n<a?n:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=n>r?n>a?n:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,p=i.next;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=u&&p.y<=d&&Ys(n,o,r,l,a,c,p.x,p.y)&&Ot(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function qA(s,e,t,i){var n=s.prev,r=s,a=s.next;if(Ot(n,r,a)>=0)return!1;for(var o=n.x,l=r.x,c=a.x,h=n.y,u=r.y,f=a.y,d=o<l?o<c?o:c:l<c?l:c,p=h<u?h<f?h:f:u<f?u:f,v=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=Zu(d,p,e,t,i),y=Zu(v,m,e,t,i),x=s.prevZ,_=s.nextZ;x&&x.z>=g&&_&&_.z<=y;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Ys(o,h,l,u,c,f,x.x,x.y)&&Ot(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Ys(o,h,l,u,c,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=v&&x.y>=p&&x.y<=m&&x!==n&&x!==a&&Ys(o,h,l,u,c,f,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=d&&_.x<=v&&_.y>=p&&_.y<=m&&_!==n&&_!==a&&Ys(o,h,l,u,c,f,_.x,_.y)&&Ot(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function KA(s,e,t){var i=s;do{var n=i.prev,r=i.next.next;!sh(n,r)&&v0(n,i,i.next,r)&&co(n,r)&&co(r,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),ho(i),ho(i.next),i=s=r),i=i.next}while(i!==s);return fs(i)}function JA(s,e,t,i,n,r){var a=s;do{for(var o=a.next.next;o!==a.prev;){if(a.i!==o.i&&s2(a,o)){var l=_0(a,o);a=fs(a,a.next),l=fs(l,l.next),lo(a,e,t,i,n,r,0),lo(l,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function jA(s,e,t,i){var n=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:s.length,c=g0(s,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(r2(c));for(n.sort(QA),r=0;r<n.length;r++)t=$A(n[r],t);return t}function QA(s,e){return s.x-e.x}function $A(s,e){var t=e2(s,e);if(!t)return e;var i=_0(t,s);return fs(i,i.next),fs(t,t.next)}function e2(s,e){var t=e,i=s.x,n=s.y,r=-1/0,a;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){var o=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(o<=i&&o>r&&(r=o,a=t.x<t.next.x?t:t.next,o===i))return a}t=t.next}while(t!==e);if(!a)return null;var l=a,c=a.x,h=a.y,u=1/0,f;t=a;do i>=t.x&&t.x>=c&&i!==t.x&&Ys(n<h?i:r,n,c,h,n<h?r:i,n,t.x,t.y)&&(f=Math.abs(n-t.y)/(i-t.x),co(t,s)&&(f<u||f===u&&(t.x>a.x||t.x===a.x&&t2(a,t)))&&(a=t,u=f)),t=t.next;while(t!==l);return a}function t2(s,e){return Ot(s.prev,s,e.prev)<0&&Ot(e.next,s,s.next)<0}function n2(s,e,t,i){var n=s;do n.z===0&&(n.z=Zu(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,i2(n)}function i2(s){var e,t,i,n,r,a,o,l,c=1;do{for(t=s,s=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;t=i}r.nextZ=null,c*=2}while(a>1);return s}function Zu(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function r2(s){var e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ys(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function s2(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!a2(s,e)&&(co(s,e)&&co(e,s)&&o2(s,e)&&(Ot(s.prev,s,e.prev)||Ot(s,e.prev,e))||sh(s,e)&&Ot(s.prev,s,s.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function sh(s,e){return s.x===e.x&&s.y===e.y}function v0(s,e,t,i){var n=El(Ot(s,e,t)),r=El(Ot(s,e,i)),a=El(Ot(t,i,s)),o=El(Ot(t,i,e));return!!(n!==r&&a!==o||n===0&&wl(s,t,e)||r===0&&wl(s,i,e)||a===0&&wl(t,s,i)||o===0&&wl(t,e,i))}function wl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function El(s){return s>0?1:s<0?-1:0}function a2(s,e){var t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&v0(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function co(s,e){return Ot(s.prev,s,s.next)<0?Ot(s,e,s.next)>=0&&Ot(s,s.prev,e)>=0:Ot(s,e,s.prev)<0||Ot(s,s.next,e)<0}function o2(s,e){var t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function _0(s,e){var t=new qu(s.i,s.x,s.y),i=new qu(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Rm(s,e,t,i){var n=new qu(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function ho(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function qu(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}rh.deviation=function(s,e,t,i){var n=e&&e.length,r=n?e[0]*t:s.length,a=Math.abs(Ku(s,0,r,t));if(n)for(var o=0,l=e.length;o<l;o++){var c=e[o]*t,h=o<l-1?e[o+1]*t:s.length;a-=Math.abs(Ku(s,c,h,t))}var u=0;for(o=0;o<i.length;o+=3){var f=i[o]*t,d=i[o+1]*t,p=i[o+2]*t;u+=Math.abs((s[f]-s[p])*(s[d+1]-s[f+1])-(s[f]-s[d])*(s[p+1]-s[f+1]))}return a===0&&u===0?0:Math.abs((u-a)/a)};function Ku(s,e,t,i){for(var n=0,r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}rh.flatten=function(s){for(var e=s[0][0].length,t={vertices:[],holes:[],dimensions:e},i=0,n=0;n<s.length;n++){for(var r=0;r<s[n].length;r++)for(var a=0;a<e;a++)t.vertices.push(s[n][r][a]);n>0&&(i+=s[n-1].length,t.holes.push(i))}return t};new ye;new ye;var Im;(s=>{function e(n){let r=n.slice();return r.sort(s.POINT_COMPARATOR),s.makeHullPresorted(r)}s.makeHull=e;function t(n){if(n.length<=1)return n.slice();let r=[];for(let o=0;o<n.length;o++){const l=n[o];for(;r.length>=2;){const c=r[r.length-1],h=r[r.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))r.pop();else break}r.push(l)}r.pop();let a=[];for(let o=n.length-1;o>=0;o--){const l=n[o];for(;a.length>=2;){const c=a[a.length-1],h=a[a.length-2];if((c.x-h.x)*(l.y-h.y)>=(c.y-h.y)*(l.x-h.x))a.pop();else break}a.push(l)}return a.pop(),r.length==1&&a.length==1&&r[0].x==a[0].x&&r[0].y==a[0].y?r:r.concat(a)}s.makeHullPresorted=t;function i(n,r){return n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0}s.POINT_COMPARATOR=i})(Im||(Im={}));function x0(s){const e=new O(0,1,0),t=new O(-1,0,0),i=360/s.mantos,n=180/s.mantos,r=mr.degToRad(i*s.index+n),a=mr.degToRad(90+s.rotacion*s.index);return[new $n(new O(0,0,1).applyAxisAngle(e,r),0),new $n(new O(0,0,-1).applyAxisAngle(e,r+mr.degToRad(-i)),0),new $n(new O(0,0,-1).applyAxisAngle(t,mr.degToRad(-s.clipV1)).applyAxisAngle(e,a),s.clipV2)]}var l2=Ii("<!> <!>",1);function c2(s,e){vi(e,!0);let t=hn(()=>360/e.mantos),i=hn(()=>x0({mantos:e.mantos,clipV1:e.clipV1,clipV2:e.clipV2,index:e.index,rotacion:Ge(t)})),n=hn(()=>[new O(0,-e.vertexZ,-e.vertexY),new O(e.vertexX,e.vertexZ,0),new O(0,-e.vertexZ,e.vertexY),new O(-e.vertexX,e.vertexZ,0)]),r=di(vr(new ht));function a(h,u,f){return new O(h.x*(1-f)+u.x*f,h.y*(1-f)+u.y*f,h.z*(1-f)+u.z*f)}nn(()=>{const h=Array.from({length:e.segments+1},(u,f)=>{const d=f/e.segments;return{pUno:a(Ge(n)[3],Ge(n)[2],d),pDos:a(Ge(n)[0],Ge(n)[1],d)}});if(h.length>0){const u=new Float32Array(h.length*6);h.forEach((f,d)=>{u.set([f.pUno.x,f.pUno.y,f.pUno.z,f.pDos.x,f.pDos.y,f.pDos.z],d*6)}),Ge(r).setAttribute("position",new Ke(u,3))}});var o=un(),l=Gt(o),c=hn(()=>mr.degToRad(Ge(t)*e.index));Qr(l,()=>pi.LineSegments,(h,u)=>{u(h,{get"rotation.y"(){return Ge(c)},children:(f,d)=>{var p=l2(),v=Gt(p);Qr(v,()=>pi.BufferGeometry,(g,y)=>{y(g,{get ref(){return Ge(r)},set ref(x){Sn(r,vr(x))}})});var m=zt(v,2);Qr(m,()=>pi.LineBasicMaterial,(g,y)=>{y(g,{color:"#193d6b",linewidth:1,get clippingPlanes(){return Ge(i)}})}),It(f,p)},$$slots:{default:!0}})}),It(s,o),_i()}function h2(s,e){vi(e,!0);let t=hn(()=>360/e.mantos),i=hn(()=>x0({mantos:e.mantos,clipV1:e.clipV1,clipV2:e.clipV2,index:e.index,rotacion:Ge(t)}));const n=1,r=1;let a=hn(()=>[[new O(e.vertexX,e.vertexZ,0),new O(0,-e.vertexZ,e.vertexY)],[new O(0,-e.vertexZ,-e.vertexY),new O(-e.vertexX,e.vertexZ,0)]]);const o=[0,0,1,1],l=[0,0,1,1];let c=di(vr(new dm));nn(()=>{let d=new yT(n,r,o,l,Ge(a));function p(v,m,g){return d.getPoint(v,m,g)}Sn(c,vr(new dm(p,33,33)))});var h=un(),u=Gt(h),f=hn(()=>mr.degToRad(Ge(t)*e.index));Qr(u,()=>pi.Mesh,(d,p)=>{p(d,{get geometry(){return Ge(c)},get"rotation.y"(){return Ge(f)},children:(v,m)=>{var g=un(),y=Gt(g);Qr(y,()=>pi.MeshStandardMaterial,(x,_)=>{_(x,{color:"#193d6b",side:ii,get clippingPlanes(){return Ge(i)}})}),It(v,g)},$$slots:{default:!0}})}),It(s,h),_i()}var u2=Ii("<!> <!> <!> <!>",1);function f2(s,e){vi(e,!0),xc(()=>{const{renderer:t}=wr();t.localClippingEnabled=!0,t.setPixelRatio(window.devicePixelRatio),t.setSize(window.innerWidth,window.innerHeight)}),JT(s,{fallback:i=>{XA(i,{"position.z":-2,text:"Loading...",fontSize:2,color:"black",anchorX:"50%",anchorY:"50%",oncreate:n=>{n.lookAt(-40,25,40)}})},children:(i,n)=>{var r=u2(),a=Gt(r);Qr(a,()=>pi.PerspectiveCamera,(f,d)=>{d(f,{makeDefault:!0,position:[-25,18.5,25],fov:50,children:(p,v)=>{GT(p,{autoRotate:!0,enableZoom:!0,enableDamping:!0,autoRotateSpeed:.5,"target.y":1.5})},$$slots:{default:!0}})});var o=zt(a,2);Qr(o,()=>pi.AmbientLight,(f,d)=>{d(f,{position:[0,0,0],intensity:Math.PI/8})});var l=zt(o,2);zT(l,{url:"/venice_sunset_1k.hdr"});var c=zt(l,2);{var h=f=>{var d=un();const p=(m,g=Et,y=Et,x=Et,_=Et,C=Et,T=Et,A=Et,E=Et)=>{c2(m,{get index(){return g()},get mantos(){return y()},get segments(){return x()},get vertexX(){return _()},get vertexY(){return C()},get vertexZ(){return T()},get clipV1(){return A()},get clipV2(){return E()}})};var v=Gt(d);Sd(v,17,()=>({length:e.mantos}),bd,(m,g,y)=>{p(m,()=>y,()=>e.mantos,()=>e.segments,()=>e.vertexX,()=>e.vertexY,()=>e.vertexZ,()=>e.clipV1,()=>e.clipV2)}),It(f,d)},u=f=>{var d=un();const p=(m,g=Et,y=Et,x=Et,_=Et,C=Et,T=Et,A=Et)=>{h2(m,{get index(){return g()},get mantos(){return y()},get vertexX(){return x()},get vertexY(){return _()},get vertexZ(){return C()},get clipV1(){return T()},get clipV2(){return A()}})};var v=Gt(d);Sd(v,17,()=>({length:e.mantos}),bd,(m,g,y)=>{p(m,()=>y,()=>e.mantos,()=>e.vertexX,()=>e.vertexY,()=>e.vertexZ,()=>e.clipV1,()=>e.clipV2)}),It(f,d)};Xi(c,f=>{e.showRuled?f(h):f(u,!1)})}It(i,r)},$$slots:{fallback:!0,default:!0}}),_i()}function d2(s,e){Sn(e,!Ge(e))}var p2=(s,e,t)=>e(t(),+s.target.value),m2=Ii('<div class="flex flex-row justify-between items-center"><label class="w-[150px]"> </label> <input type="range" step="0.1" class="w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50"> <label class="w-8 text-right"> </label></div>'),g2=Ii('<div class="mb-2 text-sm font-bold"> </div>'),v2=(s,e)=>e("mantos",+s.target.value),_2=Ii("<!> <!>",1),x2=Ii('<div class="flex flex-row justify-between items-center"><label for="rango-segmentos" class="w-[150px]">Segments&nbsp;</label> <input id="rango-segmentos" type="range" min="4" max="300" class="w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50"> <label for="rango-segmentos" class="w-8 text-right"> </label></div>'),y2=Ii('<section class="fixed text-sm flex flex-col p-2 m-2 mt-2 bg-gray-200 rounded-md shadow-md opacity-75 hover:opacity-100 appearance-none z-[9999] w-[360px]"><h5 class="my-0 py-0"><strong>Hypar geometry of concrete shells</strong></h5> <div class="flex flex-row w-auto space-x-2 my-2"><button class="rounded-md border border-slate-300 py-1 px-2 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800 active:border-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full" type="button"> </button> <button class="rounded-md border border-slate-300 py-1 px-2 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:border-slate-800 active:border-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none w-full" type="button"> </button></div> <!> <div class="flex flex-row justify-between items-center"><label for="rango-mantos" class="w-[150px]">Shells&nbsp;</label> <input id="rango-mantos" type="range" min="3" max="10" class="w-full h-2 mx-3 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 disabled:opacity-50"> <label for="rango-mantos" class="w-8 text-right"> </label></div> <!> <!> <!> <!> <!></section> <!>',1);function b2(s,e){vi(e,!0);let t=di(vr([])),i=di(60),n=di(0),r=di(!1),a=di(!0),o,l={duration:()=>Ge(r)?600:0,easing:void 0};const c=new Vu({mantos:3,vertexX:22,vertexY:14,vertexZ:26,clipV1:16,clipV2:5},l);let h=hn(()=>({...c.current}));xc(async()=>{try{const q=await(await fetch("/hypar-configurations.json")).json();if(Sn(t,vr(q.configurations)),Ge(t).length>0){const V=Ge(t)[0];c.set({mantos:V.mantos,vertexX:V.vertexX,vertexY:V.vertexY,vertexZ:V.vertexZ,clipV1:V.clipV1,clipV2:V.clipV2})}}catch(J){console.error("Error loading configurations:",J)}});function u(){if(Ge(t).length===0)return;Sn(n,(Ge(n)+1)%Ge(t).length);const J=Ge(t)[Ge(n)];c.set({mantos:J.mantos,vertexX:J.vertexX,vertexY:J.vertexY,vertexZ:J.vertexZ,clipV1:J.clipV1,clipV2:J.clipV2})}function f(){Sn(r,!Ge(r)),Ge(r)&&!o?o=setInterval(u,5e3):!Ge(r)&&o&&(clearInterval(o),o=void 0)}function d(J,q){Ge(r)||c.set({...c.current,[J]:q})}Pi(()=>{o&&(clearInterval(o),o=void 0)});var p=y2(),v=Gt(p);{const J=(q,V=Et,Y=Et,ie=Et,W=Et,X=Et,te=Et)=>{var Q=m2(),fe=_n(Q),Ee=_n(fe);xn(fe);var Ae=zt(fe,2);_h(Ae),Ae.__input=[p2,d,te];var be=zt(Ae,2),$=_n(be,!0);xs(()=>Er($,Y().toFixed(1))),xn(be),xn(Q),xs(()=>{Hr(fe,"for",V()),Er(Ee,`${X()??""} `),Hr(Ae,"id",V()),wd(Ae,Y()),Hr(Ae,"min",ie()),Hr(Ae,"max",W()),Ae.disabled=Ge(r),Hr(be,"for",V())}),It(q,Q)};var m=zt(_n(v),2),g=_n(m);g.__click=f;var y=_n(g,!0);xn(g);var x=zt(g,2);x.__click=[d2,a];var _=_n(x,!0);xn(x),xn(m);var C=zt(m,2);{var T=q=>{var V=g2(),Y=_n(V,!0);xn(V),xs(()=>Er(Y,Ge(t)[Ge(n)].hypar)),It(q,V)};Xi(C,q=>{Ge(r)&&q(T)})}var A=zt(C,2),E=zt(_n(A),2);_h(E),E.__input=[v2,d];var w=zt(E,2),M=_n(w,!0);xs(()=>Er(M,Math.round(Ge(h).mantos))),xn(w),xn(A);var L=zt(A,2);J(L,()=>"rango-vertexX",()=>Ge(h).vertexX,()=>3,()=>50,()=>"X vertex",()=>"vertexX");var D=zt(L,2);J(D,()=>"rango-vertexY",()=>Ge(h).vertexY,()=>3,()=>50,()=>"Y vertex",()=>"vertexY");var z=zt(D,2);J(z,()=>"rango-vertexZ",()=>Ge(h).vertexZ,()=>3,()=>50,()=>"Z vertex",()=>"vertexZ");var B=zt(z,2);{var K=q=>{var V=_2(),Y=Gt(V);J(Y,()=>"rango-clipV1",()=>Ge(h).clipV1,()=>0,()=>50,()=>"Angle clip",()=>"clipV1");var ie=zt(Y,2);J(ie,()=>"rango-clipV2",()=>Ge(h).clipV2,()=>0,()=>50,()=>"Distance clip",()=>"clipV2"),It(q,V)};Xi(B,q=>{Ge(r)||q(K)})}var H=zt(B,2);{var ue=q=>{var V=x2(),Y=zt(_n(V),2);_h(Y);var ie=zt(Y,2),W=_n(ie,!0);xn(ie),xn(V),xs(()=>Er(W,Ge(i))),e_(Y,()=>Ge(i),X=>Sn(i,X)),It(q,V)};Xi(H,q=>{Ge(a)&&q(ue)})}xn(v),xs(()=>{Er(y,Ge(r)?"Modify":"Play"),Er(_,Ge(a)?"Solid Surface":"Ruled Surface"),wd(E,Ge(h).mantos),E.disabled=Ge(r)})}var ee=zt(v,2);LE(ee,{children:(J,q)=>{f2(J,_c(()=>Ge(h),{get segments(){return Ge(i)},get showRuled(){return Ge(a)}}))},$$slots:{default:!0}}),It(s,p),_i()}X0(["input","click"]);var S2=Ii('<div class="svelte-1q8m4f6"><!></div>');function N2(s){var e=S2(),t=_n(e);b2(t,{}),xn(e),It(s,e)}export{N2 as component,D2 as universal};
