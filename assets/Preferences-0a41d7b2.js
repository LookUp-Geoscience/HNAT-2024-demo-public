import{r as N,y as g,o as nt,a as dt,g as L,$ as ut,a0 as pt,a1 as at,Q as v,a2 as ft,d as P,a3 as vt,a4 as mt,a5 as j,c as h,l as A,m as _,s as tt,q as n,P as _t,S,e as k,t as V,z as R,a6 as et,p as d,a7 as ht,A as O,a8 as xt,a9 as gt,aa as yt,ab as wt,L as D,ac as bt,Z as Ct,j as x,F as X,C as T,U as $t}from"./index-e972f9fe.js";import{u as Vt}from"./useForm-a9d67d24.js";const Tt=()=>typeof window>"u",Nt={},b=()=>Tt()?typeof globalThis>"u"?Nt:globalThis:window,St=5,I=N([]),It=e=>{var o;return((o=e.component)==null?void 0:o.props)||{}},kt=e=>e.el?e.el.offsetHeight+St:0,zt=e=>{const o=L(),s=g(()=>{const a=I.value.findIndex(t=>t===o.vnode);return a===-1?0:I.value.slice(a+1).reduce((t,l)=>{const{position:i}=It(l),{position:r}=e;return r===i?kt(l)+t:t},0)});return nt(()=>{I.value.unshift(o.vnode)}),dt(()=>{I.value=I.value.filter(a=>a!==o.vnode)}),{yOffset:s,updateYOffset:()=>{I.value=I.value.filter(a=>a!==o.vnode)}}},Pt=()=>{let e;return{start:(...a)=>(e=window.setTimeout(...a),e),clear:()=>e&&window.clearTimeout(e)}},At=e=>e.startsWith("$t:"),Mt=e=>({type:String,default:e}),ot=(e,o)=>(o&&Object.keys(o).forEach(s=>{e=e.replace(`{${s}}`,String(o[s]))}),e),Ft=()=>{const{globalConfig:e}=ut(),o=g(()=>e.value.i18n);function s(t,l){var i;const r=(i=L())==null?void 0:i.appContext.config.globalProperties.$t;if(typeof r=="function"){const m=r(`vuestic.${t}`,l);if(m)return m}const u=o.value[t];return u?ot(u,l)||t:(pt(`${t} not found in VuesticUI i18n config`),t)}function a(t,l){return t?At(t)?s(t.slice(3),l):ot(t,l)||t:""}return{tp:a,t:s}},Et=(e,o=!1)=>{const{props:s}=L(),{getColor:a,getTextColor:t}=at();return{textColorComputed:g(()=>{if(s.textColor)return a(s.textColor);const i=e?v(e):s.color;if(!i)return"currentColor";const r=a(i);return ft(r)?"currentColor":v(o)?r:a(t(r))})}},Rt=["role","aria-live"],Bt={class:"va-toast__group"},Ut=["textContent"],Ot={class:"va-toast__content"},Lt=["innerHTML"],qt=["textContent"],Ht={key:1,class:"va-toast__content"},Yt=P({name:"VaToast",__name:"VaToast",props:{...vt,title:{type:String,default:""},offsetY:{type:[Number,String],default:16},offsetX:{type:[Number,String],default:16},message:{type:[String,Function],default:""},dangerouslyUseHtmlString:{type:Boolean,default:!1},icon:{type:String,default:"close"},customClass:{type:String,default:""},duration:{type:[Number,String],default:5e3},color:{type:String,default:"primary"},closeable:{type:Boolean,default:!0},onClose:{type:Function},onClick:{type:Function},multiLine:{type:Boolean,default:!1},position:{type:String,default:"top-right",validator:e=>["top-right","top-center","top-left","bottom-right","bottom-center","bottom-left"].includes(e)},render:{type:Function},ariaCloseLabel:Mt("$t:close"),role:{type:String,default:void 0},inline:{type:Boolean,default:!1}},emits:["on-click","on-close"],setup(e,{emit:o}){const s=P({name:"VaToastRenderer",props:{render:{type:Function,required:!0}},setup:f=>()=>f.render()}),{tp:a}=Ft(),t=e,l=o,i=mt(),{getColor:r}=at(),{textColorComputed:u}=Et(g(()=>r(t.color))),m=j("offsetY"),y=j("offsetX"),w=j("duration"),c=N(!1),{yOffset:p,updateYOffset:M}=zt(t),F=g(()=>({vertical:t.position.includes("top")?"top":"bottom",horizontal:t.position.includes("center")?"center":t.position.includes("right")?"right":"left"})),U=()=>{const f=F.value.vertical,$=F.value.horizontal;return $==="center"?{[f]:`${m.value+p.value}px`,left:"50%","--va-toast-x-shift":"-50%"}:{[f]:`${m.value+p.value}px`,[$]:`${y.value}px`}},q=g(()=>[t.customClass,t.multiLine?"va-toast--multiline":"",t.inline?"va-toast--inline":"",[`va-toast--${t.position}`]]),H=g(()=>({...U(),backgroundColor:r(t.color),color:u.value})),E=g(()=>t.role==="status"?"polite":"assertive"),C=g(()=>typeof t.message=="function"?t.message():t.message),Q=()=>{var f,$;(f=i.value)==null||f.removeEventListener("transitionend",Q),($=i.value)==null||$.remove()},rt=()=>{typeof t.onClick=="function"?t.onClick():l("on-click")},Y=()=>{c.value=!1,M()},it=()=>{typeof t.onClose=="function"?t.onClose():l("on-close"),Q()},W=Pt(),Z=W.clear,J=()=>{w.value>0&&W.start(()=>c.value&&Y(),w.value)};return nt(()=>{c.value=!0,J()}),(f,$)=>(h(),A(gt,{name:"va-toast-fade",onAfterLeave:it},{default:_(()=>[tt(n("div",{ref_key:"rootElement",ref:i,role:f.$props.role??f.$props.closeable?"alertdialog":"alert","aria-live":E.value,"aria-atomic":"true",class:_t(["va-toast",q.value]),style:S(H.value),onMouseenter:$[0]||($[0]=(...ct)=>v(Z)&&v(Z)(...ct)),onMouseleave:J,onClick:rt},[n("div",Bt,[f.$props.title?(h(),k("h2",{key:0,class:"va-toast__title",textContent:V(f.$props.title)},null,8,Ut)):R("",!0),tt(n("div",Ot,[f.$props.dangerouslyUseHtmlString?(h(),k("div",{key:0,innerHTML:C.value},null,8,Lt)):(h(),k("p",{key:1,textContent:V(C.value)},null,8,qt))],512),[[et,f.$props.message]]),f.$props.render?(h(),k("div",Ht,[d(v(s),{render:f.$props.render},null,8,["render"])])):R("",!0),f.$props.closeable?(h(),A(ht,{key:2,class:"va-toast__close-icon",role:"button","aria-label":v(a)(f.$props.ariaCloseLabel),tabindex:"0",size:"1rem",name:f.$props.icon,onClick:O(Y,["stop"]),onKeydown:xt(O(Y,["stop"]),["enter"])},null,8,["aria-label","name","onKeydown"])):R("",!0)])],46,Rt),[[et,c.value]])]),_:1}))}}),jt=`:root,
:host {
  --va-toast-display: flex;
  --va-toast-width: 330px;
  --va-toast-padding: 14px 1.25rem 14px 1.25rem;
  --va-toast-border-radius: 8px;
  --va-toast-border-color: transparent;
  --va-toast-border: 1px solid var(--va-toast-border-color);
  --va-toast-background-color: var(--va-background-secondary);
  --va-toast-box-shadow: 0 2px 12px 0 var(--va-shadow);
  --va-toast-transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s, bottom 0.3s;
  --va-toast-z-index: calc(var(--va-z-index-teleport-overlay) + 100);
  /* Title */
  --va-toast-title-font-weight: bold;
  --va-toast-title-font-size: 1rem;
  --va-toast-title-color: #303133;
  --va-toast-title-margin: 0 0 6px;
  /* Content */
  --va-toast-content-font-size: 1rem;
  --va-toast-content-line-height: 1.3125;
  --va-toast-content-padding-right: 20px;
  /* Icon */
  --va-toast-icon-height: 24px;
  --va-toast-icon-width: 24px;
  --va-toast-icon-font-size: 24px;
  /* Icon Close */
  --va-toast-close-icon-top: 18px;
  --va-toast-close-icon-right: 15px;
  --va-toast-close-icon-font-size: 1rem;
}
.va-toast {
  --va-toast-x-shift: 0px;
  --va-toast-animation-x-shift: 0px;
  --va-toast-animation-y-shift: 100%;
  position: fixed;
  box-sizing: border-box;
  width: var(--va-toast-width);
  padding: var(--va-toast-padding);
  display: flex;
  align-items: center;
  border-radius: var(--va-toast-border-radius);
  border: var(--va-toast-border);
  background-color: var(--va-toast-background-color);
  box-shadow: var(--va-toast-box-shadow);
  transition: var(--va-toast-transition);
  overflow: hidden;
  z-index: var(--va-toast-z-index);
  font-family: var(--va-font-family);
  transform: translateX(var(--va-toast-x-shift));
}
.va-toast--top-right, .va-toast--bottom-right {
  --va-toast-animation-x-shift: 100%;
}
.va-toast--top-left, .va-toast--bottom-left {
  --va-toast-animation-x-shift: -100%;
}
.va-toast--top-left, .va-toast--top-center, .va-toast--top-right {
  --va-toast-animation-y-shift: -100%;
}
.va-toast--inline {
  position: static;
}
.va-toast--multiline {
  min-height: 70px;
}
.va-toast__title {
  font-weight: var(--va-toast-title-font-weight);
  font-size: var(--va-toast-title-font-size);
  margin: var(--va-toast-title-margin);
  font-size: 0.625rem;
  letter-spacing: 0.6px;
  line-height: 1.2;
  font-weight: 700;
  text-transform: uppercase;
}
.va-toast__content {
  font-size: var(--va-toast-content-font-size);
  line-height: var(--va-toast-content-line-height);
  padding-right: var(--va-toast-content-padding-right);
}
.va-toast__content p,
.va-toast__content div {
  margin: 0;
}
.va-toast__icon {
  height: var(--va-toast-icon-height);
  width: var(--va-toast-icon-width);
  font-size: var(--va-toast-icon-font-size);
}
.va-toast__close-icon {
  position: absolute;
  top: 50%;
  right: var(--va-toast-close-icon-right);
  cursor: pointer;
  transform: translateY(-50%);
  font-size: var(--va-toast-close-icon-font-siz);
  opacity: 0.7;
}
.va-toast__close-icon:hover {
  opacity: 1;
}
.va-toast-fade-enter-from {
  transform: translateX(calc(var(--va-toast-animation-x-shift) + var(--va-toast-x-shift)));
}
.va-toast-fade-leave-to {
  transform: translateY(var(--va-toast-animation-y-shift));
  opacity: 0;
}`,Dt=yt(Yt,[["styles",[jt]]]),Xt=wt(Dt);let B=1;b().vaToastInstances=[];const G=e=>{var o;return((o=e.component)==null?void 0:o.props)||{}},Gt=(e,o)=>{if(!e)return;if(!b().vaToastInstances.length){B=1;return}b().vaToastInstances.findIndex(a=>a===e)<0||(o(),b().vaToastInstances=b().vaToastInstances.reduce((a,t,l)=>t===e?a:[...a,t],[]),b().vaToastInstances.length||(B=1))},Kt=(e,o)=>{e&&(D(null,e),e.remove()),e=null},Qt=(e,{props:o,children:s,element:a,appContext:t}={})=>{let l=a,i;return i=d(e,{...o,onClose:()=>{Gt(i,()=>Kt(l)),o!=null&&o.onClose&&o.onClose()}},s),t&&(i.appContext=t),l?D(i,l):typeof document<"u"&&D(i,l=document.createElement("div")),{vNode:i,el:l}},Wt=e=>{if(!b().vaToastInstances.length){B=1;return}b().vaToastInstances.forEach(o=>{e&&o.appContext!==e||G(o).onClose()})},st=e=>{const o=b().vaToastInstances.find(s=>{var a;return((a=s.el)==null?void 0:a.id)===e});o&&G(o).onClose()},Zt=e=>typeof e=="string"?{message:e}:e,Jt=(e,o)=>{const{vNode:s,el:a}=Qt(Xt,{appContext:o,props:Zt(e)}),t=G(s);return a&&s.el&&t?(document.body.appendChild(a.childNodes[0]),s.el.id="notification_"+B,B+=1,b().vaToastInstances.push(s),s.el.id):null},te=()=>{const e=L();return g(()=>{var o;return((o=bt())==null?void 0:o._context)||(e==null?void 0:e.appContext)})},lt=()=>{const e=te(),o=[],s=r=>{const u=Jt(r,e.value);return u&&o.push(u),u};return{init:r=>s(r),notify:s,close:r=>st(r),closeAll:(r=!1)=>Wt(r?void 0:e.value),closeAllCreatedInThisHook:()=>{o.forEach(r=>st(r))}}},K=Ct("user",{state:()=>({userName:"Vasili Savitski",email:"vasili@gmail.com",memberSince:"8/12/2020",pfp:"https://picsum.photos/id/22/200/300",is2FAEnabled:!1}),actions:{toggle2FA(){this.is2FAEnabled=!this.is2FAEnabled},changeUserName(e){this.userName=e}}}),ee=n("span",{class:"text-4xl"}," 😍 ",-1),oe={class:"flex flex-col justify-center"},se={class:"text-[28px] md:text-[32px] leading-10 font-bold"},ne={class:"flex space-x-1 text-[13px] leading-4"},ae=n("p",null,"Member since",-1),le=P({__name:"PreferencesHeader",setup(e){const o=K();return(s,a)=>{const t=x("VaAvatar");return h(),k(X,null,[d(t,{size:"large",color:"warning"},{default:_(()=>[ee]),_:1}),n("div",oe,[n("h2",se,V(v(o).userName),1),n("div",ne,[ae,n("p",null,V(v(o).memberSince),1)])])],64)}}}),z={"--va-button-font-size":"14px","--va-button-line-height":"20px"},re={class:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},ie=n("p",{class:"font-bold w-[200px]"},"Name",-1),ce={class:"flex-1"},de={class:"max-w-[748px]"},ue={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},pe=n("p",{class:"font-bold w-[200px]"},"Email",-1),fe={class:"flex-1"},ve={class:"max-w-[748px]"},me={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},_e=n("p",{class:"font-bold w-[200px]"},"Password",-1),he=n("div",{class:"flex-1"},[n("div",{class:"max-w-[748px]"},"•••••••••••••")],-1),xe={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},ge=n("p",{class:"font-bold w-[200px]"},"Two-factor authentication",-1),ye={class:"flex-1"},we={class:"max-w-[748px]"},be={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},Ce=n("p",{class:"font-bold w-[200px]"},"Email subscriptions",-1),$e={class:"flex-1"},Ve={class:"max-w-[748px]"},Te=n("p",null,"To manage what emails you get, visit the",-1),Ne={class:"flex space-x-1 w-fit"},Se=P({__name:"Settings",emits:["openNameModal","openResetPasswordModal"],setup(e,{emit:o}){const s=K(),{init:a}=lt(),t=g(()=>s.is2FAEnabled?"2FA successfully enabled":"2FA successfully disabled"),l=g(()=>s.is2FAEnabled?{color:"danger",button:"Disable 2FA",content:"Two-Factor Authentication (2FA) is now enabled for your account, adding an extra layer of security to your sign-ins."}:{color:"primary",button:"Set up 2FA",content:"Add an extra layer of security to your account. To sign in, you’ll need to provide a code along with your username and password."}),i=()=>{s.toggle2FA(),a({message:t.value,color:"success"})},r=o;return(u,m)=>{const y=x("VaButton"),w=x("VaDivider"),c=x("RouterLink");return h(),k(X,null,[n("div",re,[ie,n("div",ce,[n("div",de,V(v(s).userName),1)]),d(y,{style:S(v(z)),class:"w-fit h-fit",preset:"primary",onClick:m[0]||(m[0]=p=>r("openNameModal"))},{default:_(()=>[T(" Edit ")]),_:1},8,["style"])]),d(w),n("div",ue,[pe,n("div",fe,[n("div",ve,V(v(s).email),1)])]),n("div",me,[_e,he,d(y,{style:S(v(z)),class:"w-fit h-fit",preset:"primary",onClick:m[1]||(m[1]=p=>r("openResetPasswordModal"))},{default:_(()=>[T(" Reset Password ")]),_:1},8,["style"])]),d(w),n("div",xe,[ge,n("div",ye,[n("div",we,V(l.value.content),1)]),d(y,{style:S(v(z)),class:"w-fit h-fit",preset:"primary",color:l.value.color,onClick:i},{default:_(()=>[T(V(l.value.button),1)]),_:1},8,["style","color"])]),d(w),n("div",be,[Ce,n("div",$e,[n("div",Ve,[Te,n("div",Ne,[d(c,{to:{name:"settings"},class:"font-semibold text-primary"},{default:_(()=>[T("Notification settings")]),_:1})])])])])],64)}}}),Ie=n("h1",{class:"va-h5 mb-4"},"Reset password",-1),ke={class:"flex flex-col-reverse md:flex-row md:items-center md:justify-end md:space-x-4"},ze=P({__name:"EditNameModal",emits:["cancel"],setup(e,{emit:o}){const s=K(),{init:a}=lt(),t=o,l=N(s.userName),i=()=>{if(!l.value||l.value===s.userName)return t("cancel");s.changeUserName(l.value),a({message:"You've successfully changed your name",color:"success"}),t("cancel")};return(r,u)=>{const m=x("VaInput"),y=x("VaButton"),w=x("VaForm"),c=x("VaModal");return h(),A(c,{"mobile-fullscreen":!1,size:"small","hide-default-actions":"","max-width":"380px","model-value":"","close-button":"","onUpdate:modelValue":u[2]||(u[2]=p=>t("cancel"))},{default:_(()=>[Ie,d(w,{ref:"form",onSubmit:O(i,["prevent"])},{default:_(()=>[d(m,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=p=>l.value=p),class:"mb-4",label:"Name",placeholder:"Name"},null,8,["modelValue"]),n("div",ke,[d(y,{style:S(v(z)),preset:"secondary",color:"secondary",onClick:u[1]||(u[1]=p=>t("cancel"))},{default:_(()=>[T(" Cancel")]),_:1},8,["style"]),d(y,{style:S(v(z)),class:"mb-4 md:mb-0",type:"submit",onClick:i},{default:_(()=>[T(" Save")]),_:1},8,["style"])])]),_:1},8,["onSubmit"])]),_:1})}}});const Pe=n("h1",{class:"va-h5 mb-4"},"Reset password",-1),Ae={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},Me=n("div",{class:"hidden md:block"},null,-1),Fe={class:"flex flex-col space-y-2"},Ee={class:"flex space-x-2 items-center"},Re=n("p",null,"Must be at least 8 characters long",-1),Be={class:"flex space-x-2 items-center"},Ue=n("p",null,"Must contain at least 6 unique characters",-1),Oe={class:"flex flex-col-reverse md:justify-end md:flex-row md:space-x-4"},Le=P({__name:"ResetPasswordModal",emits:["cancel"],setup(e,{emit:o}){const s=N(),a=N(),t=N(),{validate:l}=Vt("form"),{init:i}=$t(),r=o,u=()=>{l()&&(i({message:"You've successfully changed your password",color:"success"}),r("cancel"))},m=[c=>!!c||"Old password field is required"],y=[c=>!!c||"New password field is required",c=>(c==null?void 0:c.length)>=8||"Must be at least 8 characters long",c=>new Set(c).size>=6||"Must contain at least 6 unique characters",c=>c!==s.value||"New password cannot be the same"],w=[c=>!!c||"Repeat new password field is required",c=>c===a.value||"Confirm password does not match new password"];return(c,p)=>{const M=x("VaInput"),F=x("VaIcon"),U=x("VaButton"),q=x("VaForm"),H=x("VaModal");return h(),A(H,{"max-width":"530px","mobile-fullscreen":!1,"hide-default-actions":"","model-value":"","close-button":"","onUpdate:modelValue":p[4]||(p[4]=E=>r("cancel"))},{default:_(()=>[Pe,d(q,{ref:"form",class:"space-y-6",onSubmit:O(u,["prevent"])},{default:_(()=>{var E;return[n("div",Ae,[d(M,{modelValue:s.value,"onUpdate:modelValue":p[0]||(p[0]=C=>s.value=C),rules:m,label:"Old password",placeholder:"Old password","required-mark":"",type:"password"},null,8,["modelValue"]),Me,d(M,{modelValue:a.value,"onUpdate:modelValue":p[1]||(p[1]=C=>a.value=C),rules:y,label:"New password",placeholder:"New password","required-mark":"",type:"password"},null,8,["modelValue"]),d(M,{modelValue:t.value,"onUpdate:modelValue":p[2]||(p[2]=C=>t.value=C),rules:w,label:"Repeat new password",placeholder:"Repeat new password","required-mark":"",type:"password"},null,8,["modelValue"])]),n("div",Fe,[n("div",Ee,[n("div",null,[d(F,{name:((E=a.value)==null?void 0:E.length)>=8?"mso-check":"mso-close",color:"secondary",size:"20px"},null,8,["name"])]),Re]),n("div",Be,[n("div",null,[d(F,{name:new Set(a.value).size>=6?"mso-check":"mso-close",color:"secondary",size:"20px"},null,8,["name"])]),Ue])]),n("div",Oe,[d(U,{style:S(v(z)),preset:"secondary",color:"secondary",onClick:p[3]||(p[3]=C=>r("cancel"))},{default:_(()=>[T(" Cancel")]),_:1},8,["style"]),d(U,{style:S(v(z)),class:"mb-4 md:mb-0",type:"submit",onClick:u},{default:_(()=>[T(" Update Password")]),_:1},8,["style"])])]}),_:1},8,["onSubmit"])]),_:1})}}});const qe=n("h1",{class:"page-title"},"Preferences",-1),He={class:"flex flex-col p-4 space-y-10 bg-backgroundSecondary rounded-lg"},Ye={class:"flex space-x-5"},je={class:"space-y-4 md:space-y-6"},Ge=P({__name:"Preferences",setup(e){const o=N(!1),s=N(!1);return(a,t)=>(h(),k(X,null,[qe,n("div",He,[n("div",Ye,[d(le)]),n("div",je,[d(Se,{onOpenNameModal:t[0]||(t[0]=l=>o.value=!0),onOpenResetPasswordModal:t[1]||(t[1]=l=>s.value=!0)})])]),o.value?(h(),A(ze,{key:0,onCancel:t[2]||(t[2]=l=>o.value=!1)})):R("",!0),s.value?(h(),A(Le,{key:1,onCancel:t[3]||(t[3]=l=>s.value=!1)})):R("",!0)],64))}});export{Ge as default};
//# sourceMappingURL=Preferences-0a41d7b2.js.map
