import{a3 as O,a4 as re,a5 as ne,a6 as w,a7 as te,_ as g,a8 as S,a9 as v,R as y,q as C,aa as ae,ab as ie,o as se,b as J,h as N,A as Q,E as W,ac as fe,ad as ue,z as le,y as M,ae as U,a as F,af as j,c as X,ag as ce,ah as de,u as B,ai as oe,aj as _e,a0 as k,n as Z,ak as ve,al as be,am as he,an as ge,ao as ye,ap as pe,m as z,aq as we,g as Pe,ar as Re,as as Ee,Z as ee,T as G,at as Ie,au as x,av as Oe}from"./runtime.C05xA0RX.js";import{s as Se}from"./index-client.D_vZ0r2e.js";function I(e,r=null,i){if(typeof e!="object"||e===null||O in e)return e;const t=ie(e);if(t!==re&&t!==ne)return e;var n=new Map,u=se(e),b=w(0);u&&n.set("length",w(e.length));var p;return new Proxy(e,{defineProperty(c,a,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&te();var l=n.get(a);return l===void 0?(l=w(s.value),n.set(a,l)):g(l,I(s.value,p)),!0},deleteProperty(c,a){var s=n.get(a);if(s===void 0)a in c&&n.set(a,w(v));else{if(u&&typeof a=="string"){var l=n.get("length"),f=Number(a);Number.isInteger(f)&&f<l.v&&g(l,f)}g(s,v),H(b)}return!0},get(c,a,s){var _;if(a===O)return e;var l=n.get(a),f=a in c;if(l===void 0&&(!f||(_=S(c,a))!=null&&_.writable)&&(l=w(I(f?c[a]:v,p)),n.set(a,l)),l!==void 0){var d=y(l);return d===v?void 0:d}return Reflect.get(c,a,s)},getOwnPropertyDescriptor(c,a){var s=Reflect.getOwnPropertyDescriptor(c,a);if(s&&"value"in s){var l=n.get(a);l&&(s.value=y(l))}else if(s===void 0){var f=n.get(a),d=f==null?void 0:f.v;if(f!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return s},has(c,a){var d;if(a===O)return!0;var s=n.get(a),l=s!==void 0&&s.v!==v||Reflect.has(c,a);if(s!==void 0||C!==null&&(!l||(d=S(c,a))!=null&&d.writable)){s===void 0&&(s=w(l?I(c[a],p):v),n.set(a,s));var f=y(s);if(f===v)return!1}return l},set(c,a,s,l){var R;var f=n.get(a),d=a in c;if(u&&a==="length")for(var _=s;_<f.v;_+=1){var P=n.get(_+"");P!==void 0?g(P,v):_ in c&&(P=w(v),n.set(_+"",P))}f===void 0?(!d||(R=S(c,a))!=null&&R.writable)&&(f=w(void 0),g(f,I(s,p)),n.set(a,f)):(d=f.v!==v,g(f,I(s,p)));var h=Reflect.getOwnPropertyDescriptor(c,a);if(h!=null&&h.set&&h.set.call(l,s),!d){if(u&&typeof a=="string"){var T=n.get("length"),m=Number(a);Number.isInteger(m)&&m>=T.v&&g(T,m+1)}H(b)}return!0},ownKeys(c){y(b);var a=Reflect.ownKeys(c).filter(f=>{var d=n.get(f);return d===void 0||d.v!==v});for(var[s,l]of n)l.v!==v&&!(s in c)&&a.push(s);return a},setPrototypeOf(){ae()}})}function H(e,r=1){g(e,e.v+r)}function De(e,r,i=!1){N&&Q();var t=e,n=null,u=null,b=v,p=i?W:0,c=!1;const a=(l,f=!0)=>{c=!0,s(f,l)},s=(l,f)=>{if(b===(b=l))return;let d=!1;if(N){const _=t.data===fe;!!b===_&&(t=ue(),le(t),M(!1),d=!0)}b?(n?U(n):f&&(n=F(()=>f(t))),u&&j(u,()=>{u=null})):(u?U(u):f&&(u=F(()=>f(t))),n&&j(n,()=>{n=null})),d&&M(!0)};J(()=>{c=!1,r(a),c||s(null,null)},p),N&&(t=X)}function Le(e,r,i){N&&Q();var t=e,n,u;J(()=>{n!==(n=r())&&(u&&(j(u),u=null),n&&(u=F(()=>i(t,n))))},W),N&&(t=X)}function $(e,r){return e===r||(e==null?void 0:e[O])===r}function qe(e={},r,i,t){return ce(()=>{var n,u;return de(()=>{n=u,u=[],B(()=>{e!==i(...u)&&(r(e,...u),n&&$(i(...n),e)&&r(null,...n))})}),()=>{oe(()=>{u&&$(i(...u),e)&&r(null,...u)})}}),e}let D=!1;function Ce(e,r,i){const t=i[r]??(i[r]={store:null,source:k(void 0),unsubscribe:Z});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=Z;else{var n=!0;t.unsubscribe=Se(e,u=>{n?t.source.v=u:g(t.source,u)}),n=!1}return y(t.source)}function Fe(){const e={};return _e(()=>{for(var r in e)e[r].unsubscribe()}),e}function Te(e){var r=D;try{return D=!1,[e(),D]}finally{D=r}}const me={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function je(e,r,i){return new Proxy({props:e,exclude:r},me)}const Ae={get(e,r){let i=e.props.length;for(;i--;){let t=e.props[i];if(x(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},set(e,r,i){let t=e.props.length;for(;t--;){let n=e.props[t];x(n)&&(n=n());const u=S(n,r);if(u&&u.set)return u.set(i),!0}return!1},getOwnPropertyDescriptor(e,r){let i=e.props.length;for(;i--;){let t=e.props[i];if(x(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const n=S(t,r);return n&&!n.configurable&&(n.configurable=!0),n}}},has(e,r){if(r===O||r===ee)return!1;for(let i of e.props)if(x(i)&&(i=i()),i!=null&&r in i)return!0;return!1},ownKeys(e){const r=[];for(let i of e.props){x(i)&&(i=i());for(const t in i)r.includes(t)||r.push(t)}return r}};function Be(...e){return new Proxy({props:e},Ae)}function V(e){for(var r=C,i=C;r!==null&&!(r.f&(ye|pe));)r=r.parent;try{return z(r),e()}finally{z(i)}}function Ke(e,r,i,t){var Y;var n=(i&we)!==0,u=!Pe||(i&Re)!==0,b=(i&Ee)!==0,p=(i&Oe)!==0,c=!1,a;b?[a,c]=Te(()=>e[r]):a=e[r];var s=O in e||ee in e,l=((Y=S(e,r))==null?void 0:Y.set)??(s&&b&&r in e?o=>e[r]=o:void 0),f=t,d=!0,_=!1,P=()=>(_=!0,d&&(d=!1,p?f=B(t):f=t),f);a===void 0&&t!==void 0&&(l&&u&&ve(),a=P(),l&&l(a));var h;if(u)h=()=>{var o=e[r];return o===void 0?P():(d=!0,_=!1,o)};else{var T=V(()=>(n?G:Ie)(()=>e[r]));T.f|=be,h=()=>{var o=y(T);return o!==void 0&&(f=void 0),o===void 0?f:o}}if(!(i&he))return h;if(l){var m=e.$$legacy;return function(o,E){return arguments.length>0?((!u||!E||m||c)&&l(E?h():o),o):h()}}var R=!1,K=!1,L=k(a),A=V(()=>G(()=>{var o=h(),E=y(L);return R?(R=!1,K=!0,E):(K=!1,L.v=o)}));return n||(A.equals=ge),function(o,E){if(arguments.length>0){const q=E?y(A):u&&b?I(o):o;return A.equals(q)||(R=!0,g(L,q),_&&f!==void 0&&(f=q),B(()=>y(A))),o}return y(A)}}export{I as a,qe as b,Le as c,Fe as d,Ce as e,De as i,Ke as p,je as r,Be as s};
