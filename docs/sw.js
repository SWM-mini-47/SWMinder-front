if(!self.define){let e,n={};const s=(s,t)=>(s=new URL(s+".js",t).href,n[s]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=n,document.head.appendChild(e)}else e=s,importScripts(s),n()})).then((()=>{let e=n[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(n[a])return;let c={};const r=e=>s(e,a),o={module:{uri:a},exports:c,require:r};n[a]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/SWMinder-front/_next/static/chunks/61-dac10abc527038d0.js",revision:"dac10abc527038d0"},{url:"/SWMinder-front/_next/static/chunks/980-f2becb0ac65859d0.js",revision:"f2becb0ac65859d0"},{url:"/SWMinder-front/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/SWMinder-front/_next/static/chunks/main-0e2f140932091705.js",revision:"0e2f140932091705"},{url:"/SWMinder-front/_next/static/chunks/pages/_app-4cdf0055a01bd498.js",revision:"4cdf0055a01bd498"},{url:"/SWMinder-front/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/SWMinder-front/_next/static/chunks/pages/index-0466fe9ce45acd54.js",revision:"0466fe9ce45acd54"},{url:"/SWMinder-front/_next/static/chunks/pages/login-fe448e4334be5af2.js",revision:"fe448e4334be5af2"},{url:"/SWMinder-front/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/SWMinder-front/_next/static/chunks/webpack-9bd43c32db507e6d.js",revision:"9bd43c32db507e6d"},{url:"/SWMinder-front/_next/static/css/7516395aac43af2b.css",revision:"7516395aac43af2b"},{url:"/SWMinder-front/_next/static/ryv4JHhcCYdLFPMmOjrjs/_buildManifest.js",revision:"e13f6d681cee419c862a566506469b1b"},{url:"/SWMinder-front/_next/static/ryv4JHhcCYdLFPMmOjrjs/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/SWMinder-front/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/SWMinder-front/icon-192x192.png",revision:"4af2d08f46bcd0dea0588dac2f78cf3d"},{url:"/SWMinder-front/icon-256x256.png",revision:"e83ca023ddc197d414d6f97d9579d688"},{url:"/SWMinder-front/icon-384x384.png",revision:"46c4491835340b2ee0cccec1b05d1c04"},{url:"/SWMinder-front/icon-512x512.png",revision:"5248c70a7b6e834b1d13dc46d9a22c38"},{url:"/SWMinder-front/manifest.json",revision:"8c990e0cf5e179caa1b6d26a7b1e1628"},{url:"/SWMinder-front/search.png",revision:"0ece112028c357fcd35227416a7d00e3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/SWMinder-front",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:n,event:s,state:t})=>n&&"opaqueredirect"===n.type?new Response(n.body,{status:200,statusText:"OK",headers:n.headers}):n}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const n=e.pathname;return!n.startsWith("/api/auth/")&&!!n.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
