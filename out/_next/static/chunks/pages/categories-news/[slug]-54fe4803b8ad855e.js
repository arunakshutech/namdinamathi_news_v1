(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9597],{26834:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/categories-news/[slug]",function(){return n(75611)}])},32602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},noSSR:function(){return l}});let o=n(38754);n(85893),n(67294);let r=o._(n(35491));function a(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let n=r.default,o={loading:e=>{let{error:t,isLoading:n,pastDelay:o}=e;return null}};e instanceof Promise?o.loader=()=>e:"function"==typeof e?o.loader=e:"object"==typeof e&&(o={...o,...e});let i=(o={...o,...t}).loader;return(o.loadableGenerated&&(o={...o,...o.loadableGenerated},delete o.loadableGenerated),"boolean"!=typeof o.ssr||o.ssr)?n({...o,loader:()=>null!=i?i().then(a):Promise.resolve(a(()=>null))}):(delete o.webpack,delete o.modules,l(n,o))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return o}});let o=n(38754)._(n(67294)).default.createContext(null)},35491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let o=n(38754)._(n(67294)),r=n(1159),a=[],l=[],i=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function d(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function s(){if(!a){let t=new u(e,n);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!i){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(t.includes(n))return s()})}function d(e,t){!function(){s();let e=o.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let l=o.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),o.default.useMemo(()=>{var t;return l.loading||l.error?o.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:a.retry}):l.loaded?o.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return d.preload=()=>s(),d.displayName="LoadableComponent",o.default.forwardRef(d)}(s,e)}function c(e,t){let n=[];for(;e.length;){let o=e.pop();n.push(o(t))}return Promise.all(n).then(()=>{if(e.length)return c(e,t)})}d.preloadAll=()=>new Promise((e,t)=>{c(a).then(e,t)}),d.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(i=!0,t());c(l,e).then(n,n)})),window.__NEXT_PRELOADREADY=d.preloadReady;let m=d},68761:function(e,t,n){"use strict";var o=n(85893),r=n(9008),a=n.n(r);t.Z=e=>{let{title:t,description:n,keywords:r,ogImage:l,pathName:i,schema:s}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(a(),{children:[(0,o.jsx)("title",{children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,o.jsx)("meta",{name:"name",content:"enter_here_your_web_url"}),(0,o.jsx)("meta",{name:"description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,o.jsx)("meta",{name:"keywords",content:r||"Breaking news,Top stories,Headlines,Current events,Latest news,World news,National news,Local news,Politics,Business,Technology,Entertainment,Sports,Health,Science,Environment,Education,Crime,Immigration,Weather."}),(0,o.jsx)("meta",{name:"image",content:l||null}),(0,o.jsx)("meta",{property:"og:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,o.jsx)("meta",{property:"og:description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,o.jsx)("meta",{property:"og:image",content:l||null}),(0,o.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,o.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,o.jsx)("meta",{property:"og:image:height",content:"608"}),(0,o.jsx)("meta",{property:"og:url",content:i||"enter_here_your_web_url"}),(0,o.jsx)("meta",{property:"og:type",content:"website"}),(0,o.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,o.jsx)("meta",{property:"og:site_name",content:"enter_here_your_web_url"}),(0,o.jsx)("meta",{name:"twitter:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,o.jsx)("meta",{name:"twitter:description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,o.jsx)("meta",{name:"twitter:image",content:l||null}),(0,o.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,o.jsx)("link",{rel:"canonical",href:"".concat("enter_here_your_web_url")}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"}),(0,o.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s||null)}},"structured-data")]}),(0,o.jsx)("h1",{className:"d-none",children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"})]})}},75611:function(e,t,n){"use strict";n.r(t);var o=n(85893),r=n(5152),a=n.n(r),l=n(11163),i=n(68761),s=n(17702);let u=a()(()=>Promise.all([n.e(96),n.e(4980),n.e(1228),n.e(1778),n.e(5445),n.e(3874),n.e(4617),n.e(1827),n.e(6132),n.e(6152),n.e(7237),n.e(9332),n.e(5942),n.e(3142),n.e(9459),n.e(8144)]).then(n.bind(n,68144)),{loadableGenerated:{webpack:()=>[68144]},ssr:!1});t.default=()=>{let e=(0,l.useRouter)(),t=(null==e?void 0:e.query).slug;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.Z,{title:"".concat("News"," | ").concat((0,s.Iu)("categoryLbl")," | ").concat(t),description:"",keywords:"",ogImage:"",pathName:"",schema:""}),(0,o.jsx)(u,{})]})}},5152:function(e,t,n){e.exports=n(32602)},9008:function(e,t,n){e.exports=n(23867)}},function(e){e.O(0,[7702,2888,9774,179],function(){return e(e.s=26834)}),_N_E=e.O()}]);