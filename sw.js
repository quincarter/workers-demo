if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const c=e=>i(e,l),u={module:{uri:l},exports:o,require:c};s[l]=Promise.all(r.map((e=>u[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"detect-color-scheme.js",revision:"90ff158ffcd6edef3f0c11e3a30b9939"},{url:"index.html",revision:"36774ef37a57b574c55832611b6c6f68"},{url:"pwa-192x192.png",revision:"dbad8567cf17dbb7019972b34933c21f"},{url:"pwa-512x512.png",revision:"01053ebc572675c624e650562a877281"},{url:"registerSW.js",revision:"a90c6864c07055e44e1b4b923c56f172"},{url:"src/chart-examples-AQPzcjUj.js",revision:null},{url:"src/detail-page-C7UOuKus.js",revision:null},{url:"src/home-page-D9uFw-87.js",revision:null},{url:"src/index-C5OsQ1UP.css",revision:null},{url:"src/index-kmHjOaSl.js",revision:null},{url:"src/movie-info-B4_kM7sp.js",revision:null},{url:"src/movie-info.styles-DTE8aFXE.js",revision:null},{url:"src/movies-list-CvCOtSmy.js",revision:null},{url:"src/view.mixin-HIKtRt2O.js",revision:null},{url:"src/vite-mfe-CplC9Wdu.js",revision:null},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"pwa-192x192.png",revision:"dbad8567cf17dbb7019972b34933c21f"},{url:"pwa-512x512.png",revision:"01053ebc572675c624e650562a877281"},{url:"manifest.webmanifest",revision:"49df28f4bc90b8df5ee35941bf9e3ba6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/^\/assets/]}))}));
