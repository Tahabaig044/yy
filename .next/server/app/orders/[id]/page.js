(()=>{var e={};e.id=12,e.ids=[12],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},7068:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>l,routeModule:()=>f,tree:()=>c}),r(1324),r(844),r(996);var n=r(170),s=r(5002),a=r(3876),i=r.n(a),o=r(6299),d={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(d[e]=()=>o[e]);r.d(t,d);let c=["",{children:["orders",{children:["[id]",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,1324)),"C:\\abc\\src\\app\\orders\\[id]\\page.tsx"]}]},{}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,844)),"C:\\abc\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],l=["C:\\abc\\src\\app\\orders\\[id]\\page.tsx"],u="/orders/[id]/page",p={require:r,loadChunk:()=>Promise.resolve()},f=new n.AppPageRouteModule({definition:{kind:s.x.APP_PAGE,page:"/orders/[id]/page",pathname:"/orders/[id]",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},1754:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4080,23))},1288:(e,t,r)=>{"use strict";var n=r(1083);r.o(n,"notFound")&&r.d(t,{notFound:function(){return n.notFound}})},1083:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ReadonlyURLSearchParams:function(){return i},RedirectType:function(){return n.RedirectType},notFound:function(){return s.notFound},permanentRedirect:function(){return n.permanentRedirect},redirect:function(){return n.redirect}});let n=r(1192),s=r(6868);class a extends Error{constructor(){super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams")}}class i extends URLSearchParams{append(){throw new a}delete(){throw new a}set(){throw new a}sort(){throw new a}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6868:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{isNotFoundError:function(){return s},notFound:function(){return n}});let r="NEXT_NOT_FOUND";function n(){let e=Error(r);throw e.digest=r,e}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===r}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3701:(e,t)=>{"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RedirectStatusCode",{enumerable:!0,get:function(){return r}}),function(e){e[e.SeeOther=303]="SeeOther",e[e.TemporaryRedirect=307]="TemporaryRedirect",e[e.PermanentRedirect=308]="PermanentRedirect"}(r||(r={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1192:(e,t,r)=>{"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{RedirectType:function(){return n},getRedirectError:function(){return d},getRedirectStatusCodeFromError:function(){return m},getRedirectTypeFromError:function(){return f},getURLFromRedirectError:function(){return p},isRedirectError:function(){return u},permanentRedirect:function(){return l},redirect:function(){return c}});let s=r(4580),a=r(2934),i=r(3701),o="NEXT_REDIRECT";function d(e,t,r){void 0===r&&(r=i.RedirectStatusCode.TemporaryRedirect);let n=Error(o);n.digest=o+";"+t+";"+e+";"+r+";";let a=s.requestAsyncStorage.getStore();return a&&(n.mutableCookies=a.mutableCookies),n}function c(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw d(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.TemporaryRedirect)}function l(e,t){void 0===t&&(t="replace");let r=a.actionAsyncStorage.getStore();throw d(e,t,(null==r?void 0:r.isAction)?i.RedirectStatusCode.SeeOther:i.RedirectStatusCode.PermanentRedirect)}function u(e){if("object"!=typeof e||null===e||!("digest"in e)||"string"!=typeof e.digest)return!1;let[t,r,n,s]=e.digest.split(";",4),a=Number(s);return t===o&&("replace"===r||"push"===r)&&"string"==typeof n&&!isNaN(a)&&a in i.RedirectStatusCode}function p(e){return u(e)?e.digest.split(";",3)[2]:null}function f(e){if(!u(e))throw Error("Not a redirect error");return e.digest.split(";",2)[1]}function m(e){if(!u(e))throw Error("Not a redirect error");return Number(e.digest.split(";",4)[3])}(function(e){e.push="push",e.replace="replace"})(n||(n={})),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1324:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(2051),s=r(3641),a=r(2349),i=r(1288);let o=async({params:e})=>{let t;let r=e.id,o=await (0,s.e)();try{t=await o.orders.getOrder(r)}catch(e){return(0,i.notFound)()}return(0,n.jsxs)("div",{className:"flex flex-col h-[calc(100vh-180px)] items-center justify-center ",children:[(0,n.jsxs)("div",{className:"shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-40 py-20",children:[n.jsx("h1",{className:"text-xl",children:"Order Details"}),(0,n.jsxs)("div",{className:"mt-12 flex flex-col gap-6",children:[(0,n.jsxs)("div",{className:"",children:[n.jsx("span",{className:"font-medium",children:"Order Id: "}),n.jsx("span",{children:t._id})]}),(0,n.jsxs)("div",{className:"",children:[n.jsx("span",{className:"font-medium",children:"Receiver Name: "}),(0,n.jsxs)("span",{children:[t.billingInfo?.contactDetails?.firstName+" ",t.billingInfo?.contactDetails?.lastName]})]}),(0,n.jsxs)("div",{className:"",children:[n.jsx("span",{className:"font-medium",children:"Receiver Email: "}),n.jsx("span",{children:t.buyerInfo?.email})]}),(0,n.jsxs)("div",{className:"",children:[n.jsx("span",{className:"font-medium",children:"Price: "}),n.jsx("span",{children:t.priceSummary?.subtotal?.amount})]}),(0,n.jsxs)("div",{className:"",children:[n.jsx("span",{className:"font-medium",children:"Payment Status: "}),n.jsx("span",{children:t.paymentStatus})]}),(0,n.jsxs)("div",{className:"",children:[n.jsx("span",{className:"font-medium",children:"Order Status: "}),n.jsx("span",{children:t.status})]}),(0,n.jsxs)("div",{className:"",children:[n.jsx("span",{className:"font-medium",children:"Delivery Address: "}),(0,n.jsxs)("span",{children:[t.billingInfo?.address?.addressLine1+" ",t.billingInfo?.address?.city]})]})]})]}),n.jsx(a.default,{href:"/",className:"underline mt-6",children:"Have a problem? Contact us"})]})}},3641:(e,t,r)=>{"use strict";r.d(t,{e:()=>l});var n=r(5947),s=r(7064),a=r(8705),i=r(6798),o=r(9062),d=r(2845),c=r(7904);let l=async()=>{let e;try{let t=(0,d.cookies)();e=JSON.parse(t.get("refreshToken")?.value||"{}")}catch(e){}return(0,n.e)({modules:{products:a,collections:i,orders:o,members:c},auth:(0,s.n)({clientId:"5e2b4490-bbf9-47b8-b2a0-2e43273c7ad2",tokens:{refreshToken:e,accessToken:{value:"",expiresAt:0}}})})}},3881:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var n=r(4564);let s=e=>[{type:"image/x-icon",sizes:"150x150",url:(0,n.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[379,440,564,661,58],()=>r(7068));module.exports=n})();