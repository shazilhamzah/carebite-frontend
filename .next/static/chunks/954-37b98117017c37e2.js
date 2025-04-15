"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[954],{901:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext(null)},968:(e,t,r)=>{r.d(t,{b:()=>a});var n=r(2115),o=r(3655),i=r(5155),u=n.forwardRef((e,t)=>(0,i.jsx)(o.sG.label,{...e,ref:t,onMouseDown:t=>{var r;t.target.closest("button, input, select, textarea")||(null==(r=e.onMouseDown)||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));u.displayName="Label";var a=u},1193:(e,t)=>{function r(e){var t;let{config:r,src:n,width:o,quality:i}=e,u=i||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(n)+"&w="+o+"&q="+u+(n.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},1469:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return l},getImageProps:function(){return a}});let n=r(8229),o=r(8883),i=r(3063),u=n._(r(1193));function a(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:u.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let l=i.Image},2464:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(8229)._(r(2115)).default.createContext({})},2664:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=r(9991),o=r(7102);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let t=(0,n.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,o.hasBasePath)(r.pathname)}catch(e){return!1}}},2757:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{formatUrl:function(){return i},formatWithValidation:function(){return a},urlObjectKeys:function(){return u}});let n=r(6966)._(r(8859)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,i=e.protocol||"",u=e.pathname||"",a=e.hash||"",l=e.query||"",s=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?s=t+e.host:r&&(s=t+(~r.indexOf(":")?"["+r+"]":r),e.port&&(s+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let f=e.search||l&&"?"+l||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==s?(s="//"+(s||""),u&&"/"!==u[0]&&(u="/"+u)):s||(s=""),a&&"#"!==a[0]&&(a="#"+a),f&&"?"!==f[0]&&(f="?"+f),""+i+s+(u=u.replace(/[?#]/g,encodeURIComponent))+(f=f.replace("#","%23"))+a}let u=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function a(e){return i(e)}},3063:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return _}});let n=r(8229),o=r(6966),i=r(5155),u=o._(r(2115)),a=n._(r(7650)),l=n._(r(5564)),s=r(8883),f=r(5840),c=r(6752);r(3230);let d=r(901),p=n._(r(1193)),g=r(6654),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function h(e,t,r,n,o,i,u){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,o=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function y(e){return u.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,u.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:o,height:a,width:l,decoding:s,className:f,style:c,fetchPriority:d,placeholder:p,loading:m,unoptimized:b,fill:v,onLoadRef:_,onLoadingCompleteRef:P,setBlurComplete:j,setShowAltText:O,sizesInput:w,onLoad:E,onError:S,...x}=e,C=(0,u.useCallback)(e=>{e&&(S&&(e.src=e.src),e.complete&&h(e,p,_,P,j,b,w))},[r,p,_,P,j,S,b,w]),M=(0,g.useMergedRef)(t,C);return(0,i.jsx)("img",{...x,...y(d),loading:m,width:l,height:a,decoding:s,"data-nimg":v?"fill":"1",className:f,style:c,sizes:o,srcSet:n,src:r,ref:M,onLoad:e=>{h(e.currentTarget,p,_,P,j,b,w)},onError:e=>{O(!0),"empty"!==p&&j(!0),S&&S(e)}})});function v(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...y(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,i.jsx)(l.default,{children:(0,i.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let _=(0,u.forwardRef)((e,t)=>{let r=(0,u.useContext)(d.RouterContext),n=(0,u.useContext)(c.ImageConfigContext),o=(0,u.useMemo)(()=>{var e;let t=m||n||f.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),i=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:o,qualities:i}},[n]),{onLoad:a,onLoadingComplete:l}=e,g=(0,u.useRef)(a);(0,u.useEffect)(()=>{g.current=a},[a]);let h=(0,u.useRef)(l);(0,u.useEffect)(()=>{h.current=l},[l]);let[y,_]=(0,u.useState)(!1),[P,j]=(0,u.useState)(!1),{props:O,meta:w}=(0,s.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:y,showAltText:P});return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(b,{...O,unoptimized:w.unoptimized,placeholder:w.placeholder,fill:w.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),w.priority?(0,i.jsx)(v,{isAppRouter:!r,imgAttributes:O}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3180:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5029:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(2115),o=n.useLayoutEffect,i=n.useEffect;function u(e){let{headManager:t,reduceComponentsToState:r}=e;function u(){if(t&&t.mountedInstances){let o=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(o,e))}}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=u),()=>{t&&(t._pendingUpdate=u)})),i(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}},5100:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:o,blurDataURL:i,objectFit:u}=e,a=n?40*n:t,l=o?40*o:r,s=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+s+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(s?"none":"contain"===u?"xMidYMid":"cover"===u?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+i+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5564:(e,t,r)=>{var n=r(9509);Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},defaultHead:function(){return d}});let o=r(8229),i=r(6966),u=r(5155),a=i._(r(2115)),l=o._(r(5029)),s=r(2464),f=r(2830),c=r(7544);function d(e){void 0===e&&(e=!1);let t=[(0,u.jsx)("meta",{charSet:"utf-8"},"charset")];return e||t.push((0,u.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(3230);let g=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(d(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return o=>{let i=!0,u=!1;if(o.key&&"number"!=typeof o.key&&o.key.indexOf("$")>0){u=!0;let t=o.key.slice(o.key.indexOf("$")+1);e.has(t)?i=!1:e.add(t)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(let e=0,t=g.length;e<t;e++){let t=g[e];if(o.props.hasOwnProperty(t))if("charSet"===t)r.has(t)?i=!1:r.add(t);else{let e=o.props[t],r=n[t]||new Set;("name"!==t||!u)&&r.has(e)?i=!1:(r.add(e),n[t]=r)}}}return i}}()).reverse().map((e,t)=>{let o=e.key||t;if(n.env.__NEXT_OPTIMIZE_FONTS&&!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:o})})}let h=function(e){let{children:t}=e,r=(0,a.useContext)(s.AmpStateContext),n=(0,a.useContext)(f.HeadManagerContext);return(0,u.jsx)(l.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,c.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5840:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:void 0,unoptimized:!1}},6654:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(2115);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6752:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return i}});let n=r(8229)._(r(2115)),o=r(5840),i=n.default.createContext(o.imageConfigDefault)},6766:(e,t,r)=>{r(1469)},6874:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return h},useLinkStatus:function(){return b}});let n=r(6966),o=r(5155),i=n._(r(2115)),u=r(2757),a=r(5227),l=r(9818),s=r(6654),f=r(9991),c=r(5929);r(3230);let d=r(4930),p=r(2664),g=r(6634);function m(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}function h(e){let t,r,n,[u,h]=(0,i.useOptimistic)(d.IDLE_LINK_STATUS),b=(0,i.useRef)(null),{href:v,as:_,children:P,prefetch:j=null,passHref:O,replace:w,shallow:E,scroll:S,onClick:x,onMouseEnter:C,onTouchStart:M,legacyBehavior:R=!1,onNavigate:I,ref:A,unstable_dynamicOnHover:N,...T}=e;t=P,R&&("string"==typeof t||"number"==typeof t)&&(t=(0,o.jsx)("a",{children:t}));let z=i.default.useContext(a.AppRouterContext),k=!1!==j,L=null===j?l.PrefetchKind.AUTO:l.PrefetchKind.FULL,{href:D,as:U}=i.default.useMemo(()=>{let e=m(v);return{href:e,as:_?m(_):e}},[v,_]);R&&(r=i.default.Children.only(t));let F=R?r&&"object"==typeof r&&r.ref:A,B=i.default.useCallback(e=>(null!==z&&(b.current=(0,d.mountLinkInstance)(e,D,z,L,k,h)),()=>{b.current&&((0,d.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,d.unmountPrefetchableInstance)(e)}),[k,D,z,L,h]),G={ref:(0,s.useMergedRef)(B,F),onClick(e){R||"function"!=typeof x||x(e),R&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),z&&(e.defaultPrevented||function(e,t,r,n,o,u,a){let{nodeName:l}=e.currentTarget;if(!("A"===l.toUpperCase()&&function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||e.currentTarget.hasAttribute("download"))){if(!(0,p.isLocalURL)(t)){o&&(e.preventDefault(),location.replace(t));return}e.preventDefault(),i.default.startTransition(()=>{if(a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}(0,g.dispatchNavigateAction)(r||t,o?"replace":"push",null==u||u,n.current)})}}(e,D,U,b,w,S,I))},onMouseEnter(e){R||"function"!=typeof C||C(e),R&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),z&&k&&(0,d.onNavigationIntent)(e.currentTarget,!0===N)},onTouchStart:function(e){R||"function"!=typeof M||M(e),R&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),z&&k&&(0,d.onNavigationIntent)(e.currentTarget,!0===N)}};return(0,f.isAbsoluteUrl)(U)?G.href=U:R&&!O&&("a"!==r.type||"href"in r.props)||(G.href=(0,c.addBasePath)(U)),n=R?i.default.cloneElement(r,G):(0,o.jsx)("a",{...T,...G,children:t}),(0,o.jsx)(y.Provider,{value:u,children:n})}r(3180);let y=(0,i.createContext)(d.IDLE_LINK_STATUS),b=()=>(0,i.useContext)(y);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7544:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},8859:(e,t)=>{function r(e){let t={};for(let[r,n]of e.entries()){let e=t[r];void 0===e?t[r]=n:Array.isArray(e)?e.push(n):t[r]=[e,n]}return t}function n(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,n(e));else t.set(r,n(o));return t}function i(e){for(var t=arguments.length,r=Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{assign:function(){return i},searchParamsToUrlQuery:function(){return r},urlQueryToSearchParams:function(){return o}})},8883:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(3230);let n=r(5100),o=r(5840),i=["-moz-initial","fill","none","scale-down",void 0];function u(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r,l;let s,f,c,{src:d,sizes:p,unoptimized:g=!1,priority:m=!1,loading:h,className:y,quality:b,width:v,height:_,fill:P=!1,style:j,overrideSrc:O,onLoad:w,onLoadingComplete:E,placeholder:S="empty",blurDataURL:x,fetchPriority:C,decoding:M="async",layout:R,objectFit:I,objectPosition:A,lazyBoundary:N,lazyRoot:T,...z}=e,{imgConf:k,showAltText:L,blurComplete:D,defaultLoader:U}=t,F=k||o.imageConfigDefault;if("allSizes"in F)s=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),n=null==(r=F.qualities)?void 0:r.sort((e,t)=>e-t);s={...F,allSizes:e,deviceSizes:t,qualities:n}}if(void 0===U)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=z.loader||U;delete z.loader,delete z.srcSet;let G="__next_img_default"in B;if(G){if("custom"===s.loader)throw Object.defineProperty(Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...n}=t;return e(n)}}if(R){"fill"===R&&(P=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(j={...j,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!p&&(p=t)}let W="",q=a(v),K=a(_);if((l=d)&&"object"==typeof l&&(u(l)||void 0!==l.src)){let e=u(d)?d.default:d;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(f=e.blurWidth,c=e.blurHeight,x=x||e.blurDataURL,W=e.src,!P)if(q||K){if(q&&!K){let t=q/e.width;K=Math.round(e.height*t)}else if(!q&&K){let t=K/e.height;q=Math.round(e.width*t)}}else q=e.width,K=e.height}let V=!m&&("lazy"===h||void 0===h);(!(d="string"==typeof d?d:W)||d.startsWith("data:")||d.startsWith("blob:"))&&(g=!0,V=!1),s.unoptimized&&(g=!0),G&&!s.dangerouslyAllowSVG&&d.split("?",1)[0].endsWith(".svg")&&(g=!0);let X=a(b),H=Object.assign(P?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:I,objectPosition:A}:{},L?{}:{color:"transparent"},j),J=D||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:q,heightInt:K,blurWidth:f,blurHeight:c,blurDataURL:x||"",objectFit:H.objectFit})+'")':'url("'+S+'")',Q=i.includes(H.objectFit)?"fill"===H.objectFit?"100% 100%":"cover":H.objectFit,Z=J?{backgroundSize:Q,backgroundPosition:H.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},$=function(e){let{config:t,src:r,unoptimized:n,width:o,quality:i,sizes:u,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:s}=function(e,t,r){let{deviceSizes:n,allSizes:o}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,u),f=l.length-1;return{sizes:u||"w"!==s?u:"100vw",srcSet:l.map((e,n)=>a({config:t,src:r,quality:i,width:e})+" "+("w"===s?e:n+1)+s).join(", "),src:a({config:t,src:r,quality:i,width:l[f]})}}({config:s,src:d,unoptimized:g,width:q,quality:X,sizes:p,loader:B});return{props:{...z,loading:V?"lazy":h,fetchPriority:C,width:q,height:K,decoding:M,className:y,style:{...H,...Z},sizes:$.sizes,srcSet:$.srcSet,src:O||$.src},meta:{unoptimized:g,priority:m,placeholder:S,fill:P}}}},9991:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{DecodeError:function(){return g},MiddlewareNotFoundError:function(){return b},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return h},SP:function(){return d},ST:function(){return p},WEB_VITALS:function(){return r},execOnce:function(){return n},getDisplayName:function(){return l},getLocationOrigin:function(){return u},getURL:function(){return a},isAbsoluteUrl:function(){return i},isResSent:function(){return s},loadGetInitialProps:function(){return c},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return v}});let r=["CLS","FCP","FID","INP","LCP","TTFB"];function n(e){let t,r=!1;return function(){for(var n=arguments.length,o=Array(n),i=0;i<n;i++)o[i]=arguments[i];return r||(r=!0,t=e(...o)),t}}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>o.test(e);function u(){let{protocol:e,hostname:t,port:r}=window.location;return e+"//"+t+(r?":"+r:"")}function a(){let{href:e}=window.location,t=u();return e.substring(t.length)}function l(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function s(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?"?"+t.slice(1).join("?"):"")}async function c(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await c(t.Component,t.ctx)}:{};let n=await e.getInitialProps(t);if(r&&s(r))return n;if(!n)throw Object.defineProperty(Error('"'+l(e)+'.getInitialProps()" should resolve to an object. But found "'+n+'" instead.'),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let d="undefined"!=typeof performance,p=d&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class m extends Error{}class h extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message="Cannot find module for page: "+e}}class y extends Error{constructor(e,t){super(),this.message="Failed to load static file for page: "+e+" "+t}}class b extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}}}]);