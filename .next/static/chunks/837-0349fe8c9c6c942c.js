"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[837],{450:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(2115);let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),a=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),i=e=>{let t=a(e);return t.charAt(0).toUpperCase()+t.slice(1)},u=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e,t,n)=>!!e&&""!==e.trim()&&n.indexOf(e)===t).join(" ").trim()};var l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let c=(0,r.forwardRef)((e,t)=>{let{color:n="currentColor",size:o=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:c="",children:s,iconNode:d,...f}=e;return(0,r.createElement)("svg",{ref:t,...l,width:o,height:o,stroke:n,strokeWidth:i?24*Number(a)/Number(o):a,className:u("lucide",c),...f},[...d.map(e=>{let[t,n]=e;return(0,r.createElement)(t,n)}),...Array.isArray(s)?s:[s]])}),s=((e,t)=>{let n=(0,r.forwardRef)((n,a)=>{let{className:l,...s}=n;return(0,r.createElement)(c,{ref:a,iconNode:t,className:u("lucide-".concat(o(i(e))),"lucide-".concat(e),l),...s})});return n.displayName=i(e),n})("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},9601:(e,t,n)=>{n.d(t,{bm:()=>ti,UC:()=>tr,VY:()=>ta,hJ:()=>tn,ZL:()=>tt,bL:()=>te,hE:()=>to});var r,o,a,i=n(2115),u=n.t(i,2);function l(e,t,{checkForDefaultPrevented:n=!0}={}){return function(r){if(e?.(r),!1===n||!r.defaultPrevented)return t?.(r)}}var c=n(6101),s=n(5155),d=globalThis?.document?i.useLayoutEffect:()=>{},f=u[" useId ".trim().toString()]||(()=>void 0),p=0;function v(e){let[t,n]=i.useState(f());return d(()=>{e||n(e=>e??String(p++))},[e]),e||(t?`radix-${t}`:"")}function m(e){let t=i.useRef(e);return i.useEffect(()=>{t.current=e}),i.useMemo(()=>(...e)=>t.current?.(...e),[])}var h=n(3655),g="dismissableLayer.update",y=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),E=i.forwardRef((e,t)=>{var n,r;let{disableOutsidePointerEvents:a=!1,onEscapeKeyDown:u,onPointerDownOutside:d,onFocusOutside:f,onInteractOutside:p,onDismiss:v,...E}=e,C=i.useContext(y),[N,x]=i.useState(null),R=null!=(r=null==N?void 0:N.ownerDocument)?r:null==(n=globalThis)?void 0:n.document,[,O]=i.useState({}),S=(0,c.s)(t,e=>x(e)),L=Array.from(C.layers),[D]=[...C.layersWithOutsidePointerEventsDisabled].slice(-1),A=L.indexOf(D),T=N?L.indexOf(N):-1,k=C.layersWithOutsidePointerEventsDisabled.size>0,M=T>=A,P=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=m(e),o=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{let e=e=>{if(e.target&&!o.current){let t=function(){w("dismissableLayer.pointerDownOutside",r,o,{discrete:!0})},o={originalEvent:e};"touch"===e.pointerType?(n.removeEventListener("click",a.current),a.current=t,n.addEventListener("click",a.current,{once:!0})):t()}else n.removeEventListener("click",a.current);o.current=!1},t=window.setTimeout(()=>{n.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(t),n.removeEventListener("pointerdown",e),n.removeEventListener("click",a.current)}},[n,r]),{onPointerDownCapture:()=>o.current=!0}}(e=>{let t=e.target,n=[...C.branches].some(e=>e.contains(t));M&&!n&&(null==d||d(e),null==p||p(e),e.defaultPrevented||null==v||v())},R),j=function(e){var t;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null==(t=globalThis)?void 0:t.document,r=m(e),o=i.useRef(!1);return i.useEffect(()=>{let e=e=>{e.target&&!o.current&&w("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return n.addEventListener("focusin",e),()=>n.removeEventListener("focusin",e)},[n,r]),{onFocusCapture:()=>o.current=!0,onBlurCapture:()=>o.current=!1}}(e=>{let t=e.target;![...C.branches].some(e=>e.contains(t))&&(null==f||f(e),null==p||p(e),e.defaultPrevented||null==v||v())},R);return!function(e,t=globalThis?.document){let n=m(e);i.useEffect(()=>{let e=e=>{"Escape"===e.key&&n(e)};return t.addEventListener("keydown",e,{capture:!0}),()=>t.removeEventListener("keydown",e,{capture:!0})},[n,t])}(e=>{T===C.layers.size-1&&(null==u||u(e),!e.defaultPrevented&&v&&(e.preventDefault(),v()))},R),i.useEffect(()=>{if(N)return a&&(0===C.layersWithOutsidePointerEventsDisabled.size&&(o=R.body.style.pointerEvents,R.body.style.pointerEvents="none"),C.layersWithOutsidePointerEventsDisabled.add(N)),C.layers.add(N),b(),()=>{a&&1===C.layersWithOutsidePointerEventsDisabled.size&&(R.body.style.pointerEvents=o)}},[N,R,a,C]),i.useEffect(()=>()=>{N&&(C.layers.delete(N),C.layersWithOutsidePointerEventsDisabled.delete(N),b())},[N,C]),i.useEffect(()=>{let e=()=>O({});return document.addEventListener(g,e),()=>document.removeEventListener(g,e)},[]),(0,s.jsx)(h.sG.div,{...E,ref:S,style:{pointerEvents:k?M?"auto":"none":void 0,...e.style},onFocusCapture:l(e.onFocusCapture,j.onFocusCapture),onBlurCapture:l(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:l(e.onPointerDownCapture,P.onPointerDownCapture)})});function b(){let e=new CustomEvent(g);document.dispatchEvent(e)}function w(e,t,n,r){let{discrete:o}=r,a=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),o?(0,h.hO)(a,i):a.dispatchEvent(i)}E.displayName="DismissableLayer",i.forwardRef((e,t)=>{let n=i.useContext(y),r=i.useRef(null),o=(0,c.s)(t,r);return i.useEffect(()=>{let e=r.current;if(e)return n.branches.add(e),()=>{n.branches.delete(e)}},[n.branches]),(0,s.jsx)(h.sG.div,{...e,ref:o})}).displayName="DismissableLayerBranch";var C="focusScope.autoFocusOnMount",N="focusScope.autoFocusOnUnmount",x={bubbles:!1,cancelable:!0},R=i.forwardRef((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:o,onUnmountAutoFocus:a,...u}=e,[l,d]=i.useState(null),f=m(o),p=m(a),v=i.useRef(null),g=(0,c.s)(t,e=>d(e)),y=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let e=function(e){if(y.paused||!l)return;let t=e.target;l.contains(t)?v.current=t:L(v.current,{select:!0})},t=function(e){if(y.paused||!l)return;let t=e.relatedTarget;null!==t&&(l.contains(t)||L(v.current,{select:!0}))};document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&L(l)});return l&&n.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,l,y.paused]),i.useEffect(()=>{if(l){D.add(y);let e=document.activeElement;if(!l.contains(e)){let t=new CustomEvent(C,x);l.addEventListener(C,f),l.dispatchEvent(t),t.defaultPrevented||(function(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=document.activeElement;for(let r of e)if(L(r,{select:t}),document.activeElement!==n)return}(O(l).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&L(l))}return()=>{l.removeEventListener(C,f),setTimeout(()=>{let t=new CustomEvent(N,x);l.addEventListener(N,p),l.dispatchEvent(t),t.defaultPrevented||L(null!=e?e:document.body,{select:!0}),l.removeEventListener(N,p),D.remove(y)},0)}}},[l,f,p,y]);let E=i.useCallback(e=>{if(!n&&!r||y.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=O(e);return[S(t,e),S(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&L(a,{select:!0})):(e.preventDefault(),n&&L(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,y.paused]);return(0,s.jsx)(h.sG.div,{tabIndex:-1,...u,ref:g,onKeyDown:E})});function O(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function S(e,t){for(let n of e)if(!function(e,t){let{upTo:n}=t;if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===n||e!==n);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function L(e){let{select:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}R.displayName="FocusScope";var D=function(){let e=[];return{add(t){let n=e[0];t!==n&&(null==n||n.pause()),(e=A(e,t)).unshift(t)},remove(t){var n;null==(n=(e=A(e,t))[0])||n.resume()}}}();function A(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}var T=n(7650),k=i.forwardRef((e,t)=>{var n,r;let{container:o,...a}=e,[u,l]=i.useState(!1);d(()=>l(!0),[]);let c=o||u&&(null==(r=globalThis)||null==(n=r.document)?void 0:n.body);return c?T.createPortal((0,s.jsx)(h.sG.div,{...a,ref:t}),c):null});k.displayName="Portal";var M=e=>{let{present:t,children:n}=e,r=function(e){var t,n;let[r,o]=i.useState(),a=i.useRef({}),u=i.useRef(e),l=i.useRef("none"),[c,s]=(t=e?"mounted":"unmounted",n={mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}},i.useReducer((e,t)=>{let r=n[e][t];return null!=r?r:e},t));return i.useEffect(()=>{let e=P(a.current);l.current="mounted"===c?e:"none"},[c]),d(()=>{let t=a.current,n=u.current;if(n!==e){let r=l.current,o=P(t);e?s("MOUNT"):"none"===o||(null==t?void 0:t.display)==="none"?s("UNMOUNT"):n&&r!==o?s("ANIMATION_OUT"):s("UNMOUNT"),u.current=e}},[e,s]),d(()=>{if(r){var e;let t,n=null!=(e=r.ownerDocument.defaultView)?e:window,o=e=>{let o=P(a.current).includes(e.animationName);if(e.target===r&&o&&(s("ANIMATION_END"),!u.current)){let e=r.style.animationFillMode;r.style.animationFillMode="forwards",t=n.setTimeout(()=>{"forwards"===r.style.animationFillMode&&(r.style.animationFillMode=e)})}},i=e=>{e.target===r&&(l.current=P(a.current))};return r.addEventListener("animationstart",i),r.addEventListener("animationcancel",o),r.addEventListener("animationend",o),()=>{n.clearTimeout(t),r.removeEventListener("animationstart",i),r.removeEventListener("animationcancel",o),r.removeEventListener("animationend",o)}}s("ANIMATION_END")},[r,s]),{isPresent:["mounted","unmountSuspended"].includes(c),ref:i.useCallback(e=>{e&&(a.current=getComputedStyle(e)),o(e)},[])}}(t),o="function"==typeof n?n({present:r.isPresent}):i.Children.only(n),a=(0,c.s)(r.ref,function(e){var t,n;let r=null==(t=Object.getOwnPropertyDescriptor(e.props,"ref"))?void 0:t.get,o=r&&"isReactWarning"in r&&r.isReactWarning;return o?e.ref:(o=(r=null==(n=Object.getOwnPropertyDescriptor(e,"ref"))?void 0:n.get)&&"isReactWarning"in r&&r.isReactWarning)?e.props.ref:e.props.ref||e.ref}(o));return"function"==typeof n||r.isPresent?i.cloneElement(o,{ref:a}):null};function P(e){return(null==e?void 0:e.animationName)||"none"}M.displayName="Presence";var j=0;function I(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var F=function(){return(F=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function W(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}Object.create;Object.create;var _=("function"==typeof SuppressedError&&SuppressedError,"right-scroll-bar-position"),U="width-before-scroll-bar";function B(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var K="undefined"!=typeof window?i.useLayoutEffect:i.useEffect,$=new WeakMap;function G(e){return e}var Y=function(e){void 0===e&&(e={});var t,n,r,o,a=(t=null,void 0===n&&(n=G),r=[],o=!1,{read:function(){if(o)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return r.length?r[r.length-1]:null},useMedium:function(e){var t=n(e,o);return r.push(t),function(){r=r.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(o=!0;r.length;){var t=r;r=[],t.forEach(e)}r={push:function(t){return e(t)},filter:function(){return r}}},assignMedium:function(e){o=!0;var t=[];if(r.length){var n=r;r=[],n.forEach(e),t=r}var a=function(){var n=t;t=[],n.forEach(e)},i=function(){return Promise.resolve().then(a)};i(),r={push:function(e){t.push(e),i()},filter:function(e){return t=t.filter(e),r}}}});return a.options=F({async:!0,ssr:!1},e),a}(),Z=function(){},z=i.forwardRef(function(e,t){var n,r,o,a,u=i.useRef(null),l=i.useState({onScrollCapture:Z,onWheelCapture:Z,onTouchMoveCapture:Z}),c=l[0],s=l[1],d=e.forwardProps,f=e.children,p=e.className,v=e.removeScrollBar,m=e.enabled,h=e.shards,g=e.sideCar,y=e.noIsolation,E=e.inert,b=e.allowPinchZoom,w=e.as,C=e.gapMode,N=W(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),x=(n=[u,t],r=function(e){return n.forEach(function(t){return B(t,e)})},(o=(0,i.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,K(function(){var e=$.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||B(e,null)}),r.forEach(function(e){t.has(e)||B(e,o)})}$.set(a,n)},[n]),a),R=F(F({},N),c);return i.createElement(i.Fragment,null,m&&i.createElement(g,{sideCar:Y,removeScrollBar:v,shards:h,noIsolation:y,inert:E,setCallbacks:s,allowPinchZoom:!!b,lockRef:u,gapMode:C}),d?i.cloneElement(i.Children.only(f),F(F({},R),{ref:x})):i.createElement(void 0===w?"div":w,F({},R,{className:p,ref:x}),f))});z.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},z.classNames={fullWidth:U,zeroRight:_};var X=function(e){var t=e.sideCar,n=W(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return i.createElement(r,F({},n))};X.isSideCarExport=!0;var H=function(){var e=0,t=null;return{add:function(r){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=a||n.nc;return t&&e.setAttribute("nonce",t),e}())){var o,i;(o=t).styleSheet?o.styleSheet.cssText=r:o.appendChild(document.createTextNode(r)),i=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(i)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},q=function(){var e=H();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},V=function(){var e=q();return function(t){return e(t.styles,t.dynamic),null}},J={left:0,top:0,right:0,gap:0},Q=function(e){return parseInt(e||"",10)||0},ee=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[Q(n),Q(r),Q(o)]},et=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return J;var t=ee(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},en=V(),er="data-scroll-locked",eo=function(e,t,n,r){var o=e.left,a=e.top,i=e.right,u=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(u,"px ").concat(r,";\n  }\n  body[").concat(er,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(i,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(u,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(u,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(_," {\n    right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(U," {\n    margin-right: ").concat(u,"px ").concat(r,";\n  }\n  \n  .").concat(_," .").concat(_," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(U," .").concat(U," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(er,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(u,"px;\n  }\n")},ea=function(){var e=parseInt(document.body.getAttribute(er)||"0",10);return isFinite(e)?e:0},ei=function(){i.useEffect(function(){return document.body.setAttribute(er,(ea()+1).toString()),function(){var e=ea()-1;e<=0?document.body.removeAttribute(er):document.body.setAttribute(er,e.toString())}},[])},eu=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;ei();var a=i.useMemo(function(){return et(o)},[o]);return i.createElement(en,{styles:eo(a,!t,o,n?"":"!important")})},el=!1;if("undefined"!=typeof window)try{var ec=Object.defineProperty({},"passive",{get:function(){return el=!0,!0}});window.addEventListener("test",ec,ec),window.removeEventListener("test",ec,ec)}catch(e){el=!1}var es=!!el&&{passive:!1},ed=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return"hidden"!==n[t]&&(n.overflowY!==n.overflowX||"TEXTAREA"===e.tagName||"visible"!==n[t])},ef=function(e,t){var n=t.ownerDocument,r=t;do{if("undefined"!=typeof ShadowRoot&&r instanceof ShadowRoot&&(r=r.host),ep(e,r)){var o=ev(e,r);if(o[1]>o[2])return!0}r=r.parentNode}while(r&&r!==n.body);return!1},ep=function(e,t){return"v"===e?ed(t,"overflowY"):ed(t,"overflowX")},ev=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},em=function(e,t,n,r,o){var a,i=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),u=i*r,l=n.target,c=t.contains(l),s=!1,d=u>0,f=0,p=0;do{var v=ev(e,l),m=v[0],h=v[1]-v[2]-i*m;(m||h)&&ep(e,l)&&(f+=h,p+=m),l=l instanceof ShadowRoot?l.host:l.parentNode}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return d&&(o&&1>Math.abs(f)||!o&&u>f)?s=!0:!d&&(o&&1>Math.abs(p)||!o&&-u>p)&&(s=!0),s},eh=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},eg=function(e){return[e.deltaX,e.deltaY]},ey=function(e){return e&&"current"in e?e.current:e},eE=0,eb=[];let ew=(r=function(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),o=i.useState(eE++)[0],a=i.useState(V)[0],u=i.useRef(e);i.useEffect(function(){u.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(ey),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var l=i.useCallback(function(e,t){if("touches"in e&&2===e.touches.length||"wheel"===e.type&&e.ctrlKey)return!u.current.allowPinchZoom;var o,a=eh(e),i=n.current,l="deltaX"in e?e.deltaX:i[0]-a[0],c="deltaY"in e?e.deltaY:i[1]-a[1],s=e.target,d=Math.abs(l)>Math.abs(c)?"h":"v";if("touches"in e&&"h"===d&&"range"===s.type)return!1;var f=ef(d,s);if(!f)return!0;if(f?o=d:(o="v"===d?"h":"v",f=ef(d,s)),!f)return!1;if(!r.current&&"changedTouches"in e&&(l||c)&&(r.current=o),!o)return!0;var p=r.current||o;return em(p,t,e,"h"===p?l:c,!0)},[]),c=i.useCallback(function(e){if(eb.length&&eb[eb.length-1]===a){var n="deltaY"in e?eg(e):eh(e),r=t.current.filter(function(t){var r;return t.name===e.type&&(t.target===e.target||e.target===t.shadowParent)&&(r=t.delta,r[0]===n[0]&&r[1]===n[1])})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(u.current.shards||[]).map(ey).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?l(e,o[0]):!u.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),s=i.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o,shadowParent:function(e){for(var t=null;null!==e;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}(r)};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=i.useCallback(function(e){n.current=eh(e),r.current=void 0},[]),f=i.useCallback(function(t){s(t.type,eg(t),t.target,l(t,e.lockRef.current))},[]),p=i.useCallback(function(t){s(t.type,eh(t),t.target,l(t,e.lockRef.current))},[]);i.useEffect(function(){return eb.push(a),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:p}),document.addEventListener("wheel",c,es),document.addEventListener("touchmove",c,es),document.addEventListener("touchstart",d,es),function(){eb=eb.filter(function(e){return e!==a}),document.removeEventListener("wheel",c,es),document.removeEventListener("touchmove",c,es),document.removeEventListener("touchstart",d,es)}},[]);var v=e.removeScrollBar,m=e.inert;return i.createElement(i.Fragment,null,m?i.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,v?i.createElement(eu,{gapMode:e.gapMode}):null)},Y.useMedium(r),X);var eC=i.forwardRef(function(e,t){return i.createElement(z,F({},e,{ref:t,sideCar:ew}))});eC.classNames=z.classNames;var eN=function(e){return"undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body},ex=new WeakMap,eR=new WeakMap,eO={},eS=0,eL=function(e){return e&&(e.host||eL(e.parentNode))},eD=function(e,t,n,r){var o=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=eL(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});eO[n]||(eO[n]=new WeakMap);var a=eO[n],i=[],u=new Set,l=new Set(o),c=function(e){!e||u.has(e)||(u.add(e),c(e.parentNode))};o.forEach(c);var s=function(e){!e||l.has(e)||Array.prototype.forEach.call(e.children,function(e){if(u.has(e))s(e);else try{var t=e.getAttribute(r),o=null!==t&&"false"!==t,l=(ex.get(e)||0)+1,c=(a.get(e)||0)+1;ex.set(e,l),a.set(e,c),i.push(e),1===l&&o&&eR.set(e,!0),1===c&&e.setAttribute(n,"true"),o||e.setAttribute(r,"true")}catch(t){console.error("aria-hidden: cannot operate on ",e,t)}})};return s(t),u.clear(),eS++,function(){i.forEach(function(e){var t=ex.get(e)-1,o=a.get(e)-1;ex.set(e,t),a.set(e,o),t||(eR.has(e)||e.removeAttribute(r),eR.delete(e)),o||e.removeAttribute(n)}),--eS||(ex=new WeakMap,ex=new WeakMap,eR=new WeakMap,eO={})}},eA=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||eN(e);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),eD(r,o,n,"aria-hidden")):function(){return null}},eT=n(9708),ek="Dialog",[eM,eP]=function(e,t=[]){let n=[],r=()=>{let t=n.map(e=>i.createContext(e));return function(n){let r=n?.[e]||t;return i.useMemo(()=>({[`__scope${e}`]:{...n,[e]:r}}),[n,r])}};return r.scopeName=e,[function(t,r){let o=i.createContext(r),a=n.length;n=[...n,r];let u=t=>{let{scope:n,children:r,...u}=t,l=n?.[e]?.[a]||o,c=i.useMemo(()=>u,Object.values(u));return(0,s.jsx)(l.Provider,{value:c,children:r})};return u.displayName=t+"Provider",[u,function(n,u){let l=u?.[e]?.[a]||o,c=i.useContext(l);if(c)return c;if(void 0!==r)return r;throw Error(`\`${n}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let n=()=>{let n=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let r=n.reduce((t,{useScope:n,scopeName:r})=>{let o=n(e)[`__scope${r}`];return{...t,...o}},{});return i.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}(r,...t)]}(ek),[ej,eI]=eM(ek),eF=e=>{let{__scopeDialog:t,children:n,open:r,defaultOpen:o,onOpenChange:a,modal:u=!0}=e,l=i.useRef(null),c=i.useRef(null),[d=!1,f]=function({prop:e,defaultProp:t,onChange:n=()=>{}}){let[r,o]=function({defaultProp:e,onChange:t}){let n=i.useState(e),[r]=n,o=i.useRef(r),a=m(t);return i.useEffect(()=>{o.current!==r&&(a(r),o.current=r)},[r,o,a]),n}({defaultProp:t,onChange:n}),a=void 0!==e,u=a?e:r,l=m(n);return[u,i.useCallback(t=>{if(a){let n="function"==typeof t?t(e):t;n!==e&&l(n)}else o(t)},[a,e,o,l])]}({prop:r,defaultProp:o,onChange:a});return(0,s.jsx)(ej,{scope:t,triggerRef:l,contentRef:c,contentId:v(),titleId:v(),descriptionId:v(),open:d,onOpenChange:f,onOpenToggle:i.useCallback(()=>f(e=>!e),[f]),modal:u,children:n})};eF.displayName=ek;var eW="DialogTrigger";i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eW,n),a=(0,c.s)(t,o.triggerRef);return(0,s.jsx)(h.sG.button,{type:"button","aria-haspopup":"dialog","aria-expanded":o.open,"aria-controls":o.contentId,"data-state":e6(o.open),...r,ref:a,onClick:l(e.onClick,o.onOpenToggle)})}).displayName=eW;var e_="DialogPortal",[eU,eB]=eM(e_,{forceMount:void 0}),eK=e=>{let{__scopeDialog:t,forceMount:n,children:r,container:o}=e,a=eI(e_,t);return(0,s.jsx)(eU,{scope:t,forceMount:n,children:i.Children.map(r,e=>(0,s.jsx)(M,{present:n||a.open,children:(0,s.jsx)(k,{asChild:!0,container:o,children:e})}))})};eK.displayName=e_;var e$="DialogOverlay",eG=i.forwardRef((e,t)=>{let n=eB(e$,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eI(e$,e.__scopeDialog);return a.modal?(0,s.jsx)(M,{present:r||a.open,children:(0,s.jsx)(eZ,{...o,ref:t})}):null});eG.displayName=e$;var eY=(0,eT.TL)("DialogOverlay.RemoveScroll"),eZ=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(e$,n);return(0,s.jsx)(eC,{as:eY,allowPinchZoom:!0,shards:[o.contentRef],children:(0,s.jsx)(h.sG.div,{"data-state":e6(o.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),ez="DialogContent",eX=i.forwardRef((e,t)=>{let n=eB(ez,e.__scopeDialog),{forceMount:r=n.forceMount,...o}=e,a=eI(ez,e.__scopeDialog);return(0,s.jsx)(M,{present:r||a.open,children:a.modal?(0,s.jsx)(eH,{...o,ref:t}):(0,s.jsx)(eq,{...o,ref:t})})});eX.displayName=ez;var eH=i.forwardRef((e,t)=>{let n=eI(ez,e.__scopeDialog),r=i.useRef(null),o=(0,c.s)(t,n.contentRef,r);return i.useEffect(()=>{let e=r.current;if(e)return eA(e)},[]),(0,s.jsx)(eV,{...e,ref:o,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:l(e.onCloseAutoFocus,e=>{var t;e.preventDefault(),null==(t=n.triggerRef.current)||t.focus()}),onPointerDownOutside:l(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=0===t.button&&!0===t.ctrlKey;(2===t.button||n)&&e.preventDefault()}),onFocusOutside:l(e.onFocusOutside,e=>e.preventDefault())})}),eq=i.forwardRef((e,t)=>{let n=eI(ez,e.__scopeDialog),r=i.useRef(!1),o=i.useRef(!1);return(0,s.jsx)(eV,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{var a,i;null==(a=e.onCloseAutoFocus)||a.call(e,t),t.defaultPrevented||(r.current||null==(i=n.triggerRef.current)||i.focus(),t.preventDefault()),r.current=!1,o.current=!1},onInteractOutside:t=>{var a,i;null==(a=e.onInteractOutside)||a.call(e,t),t.defaultPrevented||(r.current=!0,"pointerdown"===t.detail.originalEvent.type&&(o.current=!0));let u=t.target;(null==(i=n.triggerRef.current)?void 0:i.contains(u))&&t.preventDefault(),"focusin"===t.detail.originalEvent.type&&o.current&&t.preventDefault()}})}),eV=i.forwardRef((e,t)=>{let{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:o,onCloseAutoFocus:a,...u}=e,l=eI(ez,n),d=i.useRef(null),f=(0,c.s)(t,d);return i.useEffect(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!=(e=n[0])?e:I()),document.body.insertAdjacentElement("beforeend",null!=(t=n[1])?t:I()),j++,()=>{1===j&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),j--}},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(R,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:o,onUnmountAutoFocus:a,children:(0,s.jsx)(E,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":e6(l.open),...u,ref:f,onDismiss:()=>l.onOpenChange(!1)})}),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e7,{titleId:l.titleId}),(0,s.jsx)(e9,{contentRef:d,descriptionId:l.descriptionId})]})]})}),eJ="DialogTitle",eQ=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(eJ,n);return(0,s.jsx)(h.sG.h2,{id:o.titleId,...r,ref:t})});eQ.displayName=eJ;var e0="DialogDescription",e1=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(e0,n);return(0,s.jsx)(h.sG.p,{id:o.descriptionId,...r,ref:t})});e1.displayName=e0;var e2="DialogClose",e5=i.forwardRef((e,t)=>{let{__scopeDialog:n,...r}=e,o=eI(e2,n);return(0,s.jsx)(h.sG.button,{type:"button",...r,ref:t,onClick:l(e.onClick,()=>o.onOpenChange(!1))})});function e6(e){return e?"open":"closed"}e5.displayName=e2;var e4="DialogTitleWarning",[e8,e3]=function(e,t){let n=i.createContext(t),r=e=>{let{children:t,...r}=e,o=i.useMemo(()=>r,Object.values(r));return(0,s.jsx)(n.Provider,{value:o,children:t})};return r.displayName=e+"Provider",[r,function(r){let o=i.useContext(n);if(o)return o;if(void 0!==t)return t;throw Error(`\`${r}\` must be used within \`${e}\``)}]}(e4,{contentName:ez,titleName:eJ,docsSlug:"dialog"}),e7=e=>{let{titleId:t}=e,n=e3(e4),r="`".concat(n.contentName,"` requires a `").concat(n.titleName,"` for the component to be accessible for screen reader users.\n\nIf you want to hide the `").concat(n.titleName,"`, you can wrap it with our VisuallyHidden component.\n\nFor more information, see https://radix-ui.com/primitives/docs/components/").concat(n.docsSlug);return i.useEffect(()=>{t&&(document.getElementById(t)||console.error(r))},[r,t]),null},e9=e=>{let{contentRef:t,descriptionId:n}=e,r=e3("DialogDescriptionWarning"),o="Warning: Missing `Description` or `aria-describedby={undefined}` for {".concat(r.contentName,"}.");return i.useEffect(()=>{var e;let r=null==(e=t.current)?void 0:e.getAttribute("aria-describedby");n&&r&&(document.getElementById(n)||console.warn(o))},[o,t,n]),null},te=eF,tt=eK,tn=eG,tr=eX,to=eQ,ta=e1,ti=e5}}]);