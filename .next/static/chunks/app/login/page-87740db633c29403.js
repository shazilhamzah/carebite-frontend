(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[520],{285:(e,r,t)=>{"use strict";t.d(r,{$:()=>o});var s=t(5155);t(2115);var n=t(9708),a=t(2085),i=t(9434);let d=(0,a.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function o(e){let{className:r,variant:t,size:a,asChild:o=!1,...l}=e,c=o?n.DX:"button";return(0,s.jsx)(c,{"data-slot":"button",className:(0,i.cn)(d({variant:t,size:a,className:r})),...l})}},1189:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>b});var s=t(5155),n=t(6874),a=t.n(n);t(6766);var i=t(285);t(2115);var d=t(9434);function o(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card",className:(0,d.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",r),...t})}function l(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-header",className:(0,d.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",r),...t})}function c(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-title",className:(0,d.cn)("leading-none font-semibold",r),...t})}function u(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-description",className:(0,d.cn)("text-muted-foreground text-sm",r),...t})}function x(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-content",className:(0,d.cn)("px-6",r),...t})}function m(e){let{className:r,...t}=e;return(0,s.jsx)("div",{"data-slot":"card-footer",className:(0,d.cn)("flex items-center px-6 [.border-t]:pt-6",r),...t})}var g=t(2523),f=t(968);function p(e){let{className:r,...t}=e;return(0,s.jsx)(f.b,{"data-slot":"label",className:(0,d.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...t})}function b(){return(0,s.jsx)("div",{className:"flex  min-h-screen flex-col items-center justify-center bg-slate-50 p-4",children:(0,s.jsxs)("div",{className:"w-full max-w-md",children:[(0,s.jsxs)("div",{className:"mb-6 flex flex-col items-center text-center",children:[(0,s.jsx)("div",{className:"mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-100",children:(0,s.jsx)("img",{src:"/Logo.png",alt:"Carebite Logo",className:"h-8 w-8"})}),(0,s.jsx)("h1",{className:"text-2xl font-bold text-slate-900",children:"Carebite"})]}),(0,s.jsxs)(o,{className:"border rounded-lg shadow-sm bg-white",children:[(0,s.jsxs)(l,{className:"pb-4 pt-6 px-6",children:[(0,s.jsx)(c,{className:"text-xl font-semibold",children:"Staff Login"}),(0,s.jsx)(u,{className:"text-sm text-slate-500",children:"Enter your credentials to access the management system"})]}),(0,s.jsx)(x,{className:"px-6",children:(0,s.jsx)("form",{children:(0,s.jsxs)("div",{className:"grid gap-4",children:[(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsx)(p,{htmlFor:"username",className:"text-sm font-medium",children:"Username"}),(0,s.jsx)(g.p,{id:"username",type:"username",placeholder:"e.g. W23-X19910",required:!0,className:"h-10 px-3 py-2 text-sm rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"})]}),(0,s.jsxs)("div",{className:"grid gap-2",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between",children:[(0,s.jsx)(p,{htmlFor:"password",className:"text-sm font-medium",children:"Password"}),(0,s.jsx)(a(),{href:"/login/forgot-password",className:"text-xs text-green-600 hover:underline",children:"Forgot password?"})]}),(0,s.jsx)(g.p,{id:"password",type:"password",required:!0,className:"h-10 px-3 py-2 text-sm rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"})]}),(0,s.jsx)(a(),{href:"/dashboard",children:(0,s.jsx)(i.$,{type:"submit",className:"w-full h-10 px-4 py-2 mt-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2",children:"Sign In"})})]})})}),(0,s.jsx)(m,{className:"flex flex-col items-center gap-4 px-6 pt-2 pb-6 text-sm text-slate-600",children:(0,s.jsx)("div",{className:"text-center text-xs",children:"Having trouble logging in? Contact system administrator at admin@carebite.com"})})]})]})})}},1996:(e,r,t)=>{Promise.resolve().then(t.bind(t,1189))},2523:(e,r,t)=>{"use strict";t.d(r,{p:()=>a});var s=t(5155);t(2115);var n=t(9434);function a(e){let{className:r,type:t,...a}=e;return(0,s.jsx)("input",{type:t,"data-slot":"input",className:(0,n.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...a})}},9434:(e,r,t)=>{"use strict";t.d(r,{cn:()=>a});var s=t(2596),n=t(9688);function a(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,n.QP)((0,s.$)(r))}}},e=>{var r=r=>e(e.s=r);e.O(0,[389,954,441,684,358],()=>r(1996)),_N_E=e.O()}]);