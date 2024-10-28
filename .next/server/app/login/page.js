(()=>{var e={};e.id=626,e.ids=[626],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5315:e=>{"use strict";e.exports=require("path")},7360:e=>{"use strict";e.exports=require("url")},4016:(e,a,t)=>{"use strict";t.r(a),t.d(a,{GlobalError:()=>n.a,__next_app__:()=>p,originalPathname:()=>u,pages:()=>c,routeModule:()=>m,tree:()=>d}),t(462),t(844),t(996);var s=t(170),r=t(5002),i=t(3876),n=t.n(i),l=t(6299),o={};for(let e in l)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(o[e]=()=>l[e]);t.d(a,o);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,462)),"C:\\abc\\src\\app\\login\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(t.bind(t,844)),"C:\\abc\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,996,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(t.bind(t,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["C:\\abc\\src\\app\\login\\page.tsx"],u="/login/page",p={require:t,loadChunk:()=>Promise.resolve()},m=new s.AppPageRouteModule({definition:{kind:r.x.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},1574:(e,a,t)=>{Promise.resolve().then(t.bind(t,2362))},2362:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>c});var s,r=t(7247),i=t(5224),n=t(4736),l=t(4178),o=t(2266),d=t(8964);!function(e){e.LOGIN="LOGIN",e.REGISTER="REGISTER",e.RESET_PASSWORD="RESET_PASSWORD",e.EMAIL_VERIFICATION="EMAIL_VERIFICATION"}(s||(s={}));let c=()=>{let e=(0,i.V)(),a=(0,l.useRouter)();e.auth.loggedIn()&&a.push("/");let[t,s]=(0,d.useState)("LOGIN"),[c,u]=(0,d.useState)(""),[p,m]=(0,d.useState)(""),[x,g]=(0,d.useState)(""),[h,E]=(0,d.useState)(""),[R,I]=(0,d.useState)(!1),[S,f]=(0,d.useState)(""),[v,N]=(0,d.useState)(""),w=async r=>{r.preventDefault(),I(!0),f("");try{let r;switch(t){case"LOGIN":r=await e.auth.login({email:p,password:x});break;case"REGISTER":r=await e.auth.register({email:p,password:x,profile:{nickname:c}});break;case"RESET_PASSWORD":r=await e.auth.sendPasswordResetEmail(p,window.location.href),N("Password reset email sent. Please check your e-mail.");break;case"EMAIL_VERIFICATION":r=await e.auth.processVerification({verificationCode:h})}switch(r?.loginState){case n.z.SUCCESS:N("Successful! You are being redirected.");let i=await e.auth.getMemberTokensForDirectLogin(r.data.sessionToken);o.Z.set("refreshToken",JSON.stringify(i.refreshToken),{expires:2}),e.auth.setTokens(i),a.push("/");break;case n.z.FAILURE:"invalidEmail"===r.errorCode||"invalidPassword"===r.errorCode?f("Invalid email or password!"):"emailAlreadyExists"===r.errorCode?f("Email already exists!"):"resetPassword"===r.errorCode?f("You need to reset your password!"):f("Something went wrong!");case n.z.EMAIL_VERIFICATION_REQUIRED:s("EMAIL_VERIFICATION");case n.z.OWNER_APPROVAL_REQUIRED:N("Your account is pending approval")}}catch(e){console.log(e),f("Something went wrong!")}finally{I(!1)}};return r.jsx("div",{className:"h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 flex items-center justify-center",children:(0,r.jsxs)("form",{className:"flex flex-col gap-8",onSubmit:w,children:[r.jsx("h1",{className:"text-2xl font-semibold",children:"LOGIN"===t?"Log in":"REGISTER"===t?"Register":"RESET_PASSWORD"===t?"Reset Your Password":"Verify Your Email"}),"REGISTER"===t?(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[r.jsx("label",{className:"text-sm text-gray-700",children:"Username"}),r.jsx("input",{type:"text",name:"username",placeholder:"john",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>u(e.target.value)})]}):null,"EMAIL_VERIFICATION"!==t?(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[r.jsx("label",{className:"text-sm text-gray-700",children:"E-mail"}),r.jsx("input",{type:"email",name:"email",placeholder:"john@gmail.com",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>m(e.target.value)})]}):(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[r.jsx("label",{className:"text-sm text-gray-700",children:"Verification Code"}),r.jsx("input",{type:"text",name:"emailCode",placeholder:"Code",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>E(e.target.value)})]}),"LOGIN"===t||"REGISTER"===t?(0,r.jsxs)("div",{className:"flex flex-col gap-2",children:[r.jsx("label",{className:"text-sm text-gray-700",children:"Password"}),r.jsx("input",{type:"password",name:"password",placeholder:"Enter your password",className:"ring-2 ring-gray-300 rounded-md p-4",onChange:e=>g(e.target.value)})]}):null,"LOGIN"===t&&r.jsx("div",{className:"text-sm underline cursor-pointer",onClick:()=>s("RESET_PASSWORD"),children:"Forgot Password?"}),r.jsx("button",{className:"bg-lama text-white p-2 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed",disabled:R,children:R?"Loading...":"LOGIN"===t?"Login":"REGISTER"===t?"Register":"RESET_PASSWORD"===t?"Reset":"Verify"}),S&&r.jsx("div",{className:"text-red-600",children:S}),"LOGIN"===t&&(0,r.jsxs)("div",{className:"text-sm underline cursor-pointer",onClick:()=>s("REGISTER"),children:["Don't"," have an account?"]}),"REGISTER"===t&&r.jsx("div",{className:"text-sm underline cursor-pointer",onClick:()=>s("LOGIN"),children:"Have and account?"}),"RESET_PASSWORD"===t&&r.jsx("div",{className:"text-sm underline cursor-pointer",onClick:()=>s("LOGIN"),children:"Go back to Login"}),v&&r.jsx("div",{className:"text-green-600 text-sm",children:v})]})})}},462:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>s});let s=(0,t(5347).createProxy)(String.raw`C:\abc\src\app\login\page.tsx#default`)},3881:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});var s=t(4564);let r=e=>[{type:"image/x-icon",sizes:"150x150",url:(0,s.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]}};var a=require("../../webpack-runtime.js");a.C(e);var t=e=>a(a.s=e),s=a.X(0,[379,440,564,58],()=>t(4016));module.exports=s})();