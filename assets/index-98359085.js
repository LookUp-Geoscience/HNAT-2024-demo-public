import{r as N,w as S,af as I,ag as B,O as K,o as R,n as j,ah as q,g as z,a4 as Q,v as D}from"./index-bba16a1f.js";function $(e){return I()?(B(e),!0):!1}function T(e){return typeof e=="function"?e():K(e)}const X=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Y=e=>typeof e<"u",Z=Object.prototype.toString,k=e=>Z.call(e)==="[object Object]",ee=()=>{};function U(e,t){function n(...r){return new Promise((u,a)=>{Promise.resolve(e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})).then(u).catch(a)})}return n}const x=e=>e();function te(e=x){const t=N(!0);function n(){t.value=!1}function r(){t.value=!0}const u=(...a)=>{t.value&&e(...a)};return{isActive:q(t),pause:n,resume:r,eventFilter:u}}function ne(e){return e||z()}function re(e,t,n={}){const{eventFilter:r=x,...u}=n;return S(e,U(r,t),u)}function oe(e,t,n={}){const{eventFilter:r,...u}=n,{eventFilter:a,pause:d,resume:p,isActive:g}=te(r);return{stop:re(e,t,{...u,eventFilter:a}),pause:d,resume:p,isActive:g}}function ie(e,t=!0,n){ne()?R(e,n):t?e():j(e)}function ye(e,t,n={}){const{eventFilter:r=x,...u}=n,a=U(r,t);let d,p,g;if(u.flush==="sync"){const c=N(!1);p=()=>{},d=i=>{c.value=!0,i(),c.value=!1},g=S(e,(...i)=>{c.value||a(...i)},u)}else{const c=[],i=N(0),s=N(0);p=()=>{i.value=s.value},c.push(S(e,()=>{s.value++},{...u,flush:"sync"})),d=f=>{const l=s.value;f(),i.value+=s.value-l},c.push(S(e,(...f)=>{const l=i.value>0&&i.value===s.value;i.value=0,s.value=0,!l&&a(...f)},u)),g=()=>{c.forEach(f=>f())}}return{stop:g,ignoreUpdates:d,ignorePrevAsyncUpdates:p}}function J(e){var t;const n=T(e);return(t=n==null?void 0:n.$el)!=null?t:n}const C=X?window:void 0;function L(...e){let t,n,r,u;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,u]=e,t=C):[t,n,r,u]=e,!t)return ee;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const a=[],d=()=>{a.forEach(i=>i()),a.length=0},p=(i,s,f,l)=>(i.addEventListener(s,f,l),()=>i.removeEventListener(s,f,l)),g=S(()=>[J(t),T(u)],([i,s])=>{if(d(),!i)return;const f=k(s)?{...s}:s;a.push(...n.flatMap(l=>r.map(O=>p(i,l,O,f))))},{immediate:!0,flush:"post"}),c=()=>{g(),d()};return $(c),c}function se(){const e=N(!1),t=z();return t&&R(()=>{e.value=!0},t),e}function ue(e){const t=se();return D(()=>(t.value,!!e()))}function ae(e){return JSON.parse(JSON.stringify(e))}const V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},W="__vueuse_ssr_handlers__",le=ce();function ce(){return W in V||(V[W]=V[W]||{}),V[W]}function fe(e,t){return le[e]||t}function de(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const pe={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},P="vueuse-storage";function ve(e,t,n,r={}){var u;const{flush:a="pre",deep:d=!0,listenToStorageChanges:p=!0,writeDefaults:g=!0,mergeDefaults:c=!1,shallow:i,window:s=C,eventFilter:f,onError:l=o=>{console.error(o)},initOnMounted:O}=r,m=(i?Q:N)(typeof t=="function"?t():t);if(!n)try{n=fe("getDefaultStorage",()=>{var o;return(o=C)==null?void 0:o.localStorage})()}catch(o){l(o)}if(!n)return m;const h=T(t),F=de(h),w=(u=r.serializer)!=null?u:pe[F],{pause:y,resume:_}=oe(m,()=>E(m.value),{flush:a,deep:d,eventFilter:f});s&&p&&ie(()=>{L(s,"storage",M),L(s,P,H),O&&M()}),O||M();function A(o,v){s&&s.dispatchEvent(new CustomEvent(P,{detail:{key:e,oldValue:o,newValue:v,storageArea:n}}))}function E(o){try{const v=n.getItem(e);if(o==null)A(v,null),n.removeItem(e);else{const b=w.write(o);v!==b&&(n.setItem(e,b),A(v,b))}}catch(v){l(v)}}function G(o){const v=o?o.newValue:n.getItem(e);if(v==null)return g&&h!=null&&n.setItem(e,w.write(h)),h;if(!o&&c){const b=w.read(v);return typeof c=="function"?c(b,h):F==="object"&&!Array.isArray(b)?{...h,...b}:b}else return typeof v!="string"?v:w.read(v)}function M(o){if(!(o&&o.storageArea!==n)){if(o&&o.key==null){m.value=h;return}if(!(o&&o.key!==e)){y();try{(o==null?void 0:o.newValue)!==w.write(m.value)&&(m.value=G(o))}catch(v){l(v)}finally{o?j(_):_()}}}}function H(o){M(o.detail)}return m}function me(e,t,n={}){const{window:r=C,...u}=n;let a;const d=ue(()=>r&&"ResizeObserver"in r),p=()=>{a&&(a.disconnect(),a=void 0)},g=D(()=>Array.isArray(e)?e.map(s=>J(s)):[J(e)]),c=S(g,s=>{if(p(),d.value&&r){a=new ResizeObserver(t);for(const f of s)f&&a.observe(f,u)}},{immediate:!0,flush:"post"}),i=()=>{p(),c()};return $(i),{isSupported:d,stop:i}}function he(e,t,n={}){const{window:r=C}=n;return ve(e,t,r==null?void 0:r.localStorage,n)}function we(e,t,n,r={}){var u,a,d;const{clone:p=!1,passive:g=!1,eventName:c,deep:i=!1,defaultValue:s,shouldEmit:f}=r,l=z(),O=n||(l==null?void 0:l.emit)||((u=l==null?void 0:l.$emit)==null?void 0:u.bind(l))||((d=(a=l==null?void 0:l.proxy)==null?void 0:a.$emit)==null?void 0:d.bind(l==null?void 0:l.proxy));let m=c;t||(t="modelValue"),m=m||`update:${t.toString()}`;const h=y=>p?typeof p=="function"?p(y):ae(y):y,F=()=>Y(e[t])?h(e[t]):s,w=y=>{f?f(y)&&O(m,y):O(m,y)};if(g){const y=F(),_=N(y);let A=!1;return S(()=>e[t],E=>{A||(A=!0,_.value=h(E),j(()=>A=!1))}),S(_,E=>{!A&&(E!==e[t]||i)&&w(E)},{deep:i}),_}else return D({get(){return F()},set(y){w(y)}})}export{we as a,he as b,me as u,ye as w};
//# sourceMappingURL=index-98359085.js.map