(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5376],{68278:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/news/[slug]",function(){return n(64483)}])},32602:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{default:function(){return i},noSSR:function(){return l}});let a=n(38754);n(85893),n(67294);let r=a._(n(35491));function o(e){return{default:(null==e?void 0:e.default)||e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}function i(e,t){let n=r.default,a={loading:e=>{let{error:t,isLoading:n,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e});let i=(a={...a,...t}).loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?n({...a,loader:()=>null!=i?i().then(o):Promise.resolve(o(()=>null))}):(delete a.webpack,delete a.modules,l(n,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return a}});let a=n(38754)._(n(67294)).default.createContext(null)},35491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let a=n(38754)._(n(67294)),r=n(1159),o=[],l=[],i=!1;function s(e){let t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then(e=>(n.loading=!1,n.loaded=e,e)).catch(e=>{throw n.loading=!1,n.error=e,e}),n}class d{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function u(e){return function(e,t){let n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),o=null;function s(){if(!o){let t=new d(e,n);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()}if(!i){let e=n.webpack?n.webpack():n.modules;e&&l.push(t=>{for(let n of e)if(t.includes(n))return s()})}function u(e,t){!function(){s();let e=a.default.useContext(r.LoadableContext);e&&Array.isArray(n.modules)&&n.modules.forEach(t=>{e(t)})}();let l=a.default.useSyncExternalStore(o.subscribe,o.getCurrentValue,o.getCurrentValue);return a.default.useImperativeHandle(t,()=>({retry:o.retry}),[]),a.default.useMemo(()=>{var t;return l.loading||l.error?a.default.createElement(n.loading,{isLoading:l.loading,pastDelay:l.pastDelay,timedOut:l.timedOut,error:l.error,retry:o.retry}):l.loaded?a.default.createElement((t=l.loaded)&&t.default?t.default:t,e):null},[e,l])}return u.preload=()=>s(),u.displayName="LoadableComponent",a.default.forwardRef(u)}(s,e)}function c(e,t){let n=[];for(;e.length;){let a=e.pop();n.push(a(t))}return Promise.all(n).then(()=>{if(e.length)return c(e,t)})}u.preloadAll=()=>new Promise((e,t)=>{c(o).then(e,t)}),u.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let n=()=>(i=!0,t());c(l,e).then(n,n)})),window.__NEXT_PRELOADREADY=u.preloadReady;let m=u},68761:function(e,t,n){"use strict";var a=n(85893),r=n(9008),o=n.n(r);t.Z=e=>{let{title:t,description:n,keywords:r,ogImage:l,pathName:i,schema:s}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,a.jsx)("meta",{name:"name",content:"enter_here_your_web_url"}),(0,a.jsx)("meta",{name:"description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,a.jsx)("meta",{name:"keywords",content:r||"Breaking news,Top stories,Headlines,Current events,Latest news,World news,National news,Local news,Politics,Business,Technology,Entertainment,Sports,Health,Science,Environment,Education,Crime,Immigration,Weather."}),(0,a.jsx)("meta",{name:"image",content:l||null}),(0,a.jsx)("meta",{property:"og:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,a.jsx)("meta",{property:"og:description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,a.jsx)("meta",{property:"og:image",content:l||null}),(0,a.jsx)("meta",{property:"og:image:type",content:"image/jpg"}),(0,a.jsx)("meta",{property:"og:image:width",content:"1080"}),(0,a.jsx)("meta",{property:"og:image:height",content:"608"}),(0,a.jsx)("meta",{property:"og:url",content:i||"enter_here_your_web_url"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),(0,a.jsx)("meta",{property:"og:locale",content:"en_US"}),(0,a.jsx)("meta",{property:"og:site_name",content:"enter_here_your_web_url"}),(0,a.jsx)("meta",{name:"twitter:title",content:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"}),(0,a.jsx)("meta",{name:"twitter:description",content:n||"Discover the top news web solution on Codeacnyon! Get the latest and most relevant news with our user-friendly and efficient platform. Stay informed with ease"}),(0,a.jsx)("meta",{name:"twitter:image",content:l||null}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("link",{rel:"canonical",href:"".concat("enter_here_your_web_url")}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("meta",{name:"robots",content:"index, follow,max-snippet:-1,max-video-preview:-1,max-image-preview:large"}),(0,a.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(s||null)}},"structured-data")]}),(0,a.jsx)("h1",{className:"d-none",children:t||"No. 1 News Web Solution on CodeCanyon: Stay Informed and Engaged!"})]})}},64483:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return d}});var a=n(85893),r=n(5152),o=n.n(r),l=n(68761),i=n(17702);n(90378);let s=o()(()=>Promise.all([n.e(96),n.e(4980),n.e(1228),n.e(1778),n.e(5445),n.e(3874),n.e(4617),n.e(1827),n.e(6132),n.e(6152),n.e(7237),n.e(2013),n.e(9412),n.e(9866),n.e(7627),n.e(3777),n.e(9332),n.e(5942),n.e(3142),n.e(2004),n.e(4840),n.e(9459),n.e(6160)]).then(n.bind(n,36160)),{loadableGenerated:{webpack:()=>[36160]},ssr:!1});var d=!0;t.default=e=>{let{seoData:t,currentURL:n}=e,r=null;if(t&&t.data&&t.data.length>0&&t.data[0].schema_markup){let e=t.data[0].schema_markup;r=(0,i.VO)(e)}return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Z,{title:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_title,description:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_description,keywords:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].meta_keyword,ogImage:(null==t?void 0:t.data)&&t.data.length>0&&t.data[0].image,pathName:n,schema:r}),(0,a.jsx)(s,{})]})}},5152:function(e,t,n){e.exports=n(32602)},9008:function(e,t,n){e.exports=n(23867)}},function(e){e.O(0,[7702,2888,9774,179],function(){return e(e.s=68278)}),_N_E=e.O()}]);