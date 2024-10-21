import{$ as oe,v as w,a0 as se,a1 as W,O as _,a2 as ne,g as Z,d as z,a3 as ae,a4 as le,r as I,o as re,c as x,l as E,m as g,s as D,q as n,N as ie,S as N,e as k,t as V,x as O,a5 as G,p as d,a6 as ce,y as H,a7 as de,a8 as ue,a9 as pe,aa as fe,J as L,ab as me,Z as ve,j as y,F as X,A as T,U as _e}from"./index-39e3e9e2.js";import{u as ge}from"./useForm-0cf37a3e.js";const he=()=>typeof window>"u",xe={},b=()=>he()?typeof globalThis>"u"?xe:globalThis:window,ye=()=>{let t;return{start:(...a)=>(t=window.setTimeout(...a),t),clear:()=>t&&window.clearTimeout(t)}},K=(t,s)=>(s&&Object.keys(s).forEach(e=>{t=t.replace(`{${e}}`,String(s[e]))}),t),we=()=>{const{globalConfig:t}=oe(),s=w(()=>t.value.i18n);return{tp:(e,a)=>e?(e.startsWith("$t:")&&(e=s.value[e.slice(3)]||e),K(e,a)||e):"",t(e,a){const o=s.value[e];return o?K(o,a)||e:(se(`${e} not found in VuesticUI i18n config`),e)}}},be=(t,s=!1)=>{const{props:e}=Z(),{getColor:a,getTextColor:o}=W();return{textColorComputed:w(()=>{if(e.textColor)return a(e.textColor);const i=t?_(t):e.color;if(!i)return"currentColor";const r=a(i);return ne(r)?"currentColor":_(s)?r:a(o(r))})}},Ce=["role","aria-live"],$e={class:"va-toast__group"},Ve=["textContent"],Te={class:"va-toast__content"},Ne=["innerHTML"],Se=["textContent"],ke={key:1,class:"va-toast__content"},Ie=z({name:"VaToast",__name:"VaToast",props:{...ae,title:{type:String,default:""},offsetY:{type:Number,default:16},offsetX:{type:Number,default:16},message:{type:[String,Function],default:""},dangerouslyUseHtmlString:{type:Boolean,default:!1},icon:{type:String,default:"close"},customClass:{type:String,default:""},duration:{type:Number,default:5e3},color:{type:String,default:""},closeable:{type:Boolean,default:!0},onClose:{type:Function},onClick:{type:Function},multiLine:{type:Boolean,default:!1},position:{type:String,default:"top-right",validator:t=>["top-right","top-left","bottom-right","bottom-left"].includes(t)},render:{type:Function},ariaCloseLabel:{type:String,default:"$t:close"},role:{type:String,default:void 0},inline:{type:Boolean,default:!1}},emits:["on-click","on-close"],setup(t,{emit:s}){const e=z({name:"VaToastRenderer",props:{render:{type:Function,required:!0}},setup:v=>()=>v.render()}),{tp:a}=we(),o=t,l=s,i=le(),{getColor:r}=W(),{textColorComputed:u}=be(w(()=>r(o.color))),p=I(!1),f=w(()=>o.position.includes("right")?"right":"left"),h=w(()=>o.position.includes("top")?"top":"bottom"),c=w(()=>[o.customClass,o.multiLine?"va-toast--multiline":"",o.inline?"va-toast--inline":""]),m=w(()=>({[h.value]:`${o.offsetY}px`,[f.value]:`${o.offsetX}px`,backgroundColor:r(o.color),color:u.value})),$=w(()=>o.role==="status"?"polite":"assertive"),A=w(()=>typeof o.message=="function"?o.message():o.message),P=()=>{var v,Y;(v=i.value)==null||v.removeEventListener("transitionend",P),(Y=i.value)==null||Y.remove()},B=()=>{typeof o.onClick=="function"?o.onClick():l("on-click")},S=()=>{var v;p.value=!1,(v=i.value)==null||v.addEventListener("transitionend",P),typeof o.onClose=="function"?o.onClose():l("on-close")},F=ye(),C=F.clear,j=()=>{o.duration>0&&F.start(()=>p.value&&S(),o.duration)};return re(()=>{p.value=!0,j()}),(v,Y)=>(x(),E(ue,{name:"va-toast-fade"},{default:g(()=>[D(n("div",{ref_key:"rootElement",ref:i,role:v.$props.role??v.$props.closeable?"alertdialog":"alert","aria-live":$.value,"aria-atomic":"true",class:ie(["va-toast",c.value]),style:N(m.value),onMouseenter:Y[0]||(Y[0]=(...te)=>_(C)&&_(C)(...te)),onMouseleave:j,onClick:B},[n("div",$e,[v.$props.title?(x(),k("h2",{key:0,class:"va-toast__title",textContent:V(v.$props.title)},null,8,Ve)):O("",!0),D(n("div",Te,[v.$props.dangerouslyUseHtmlString?(x(),k("div",{key:0,innerHTML:A.value},null,8,Ne)):(x(),k("p",{key:1,textContent:V(A.value)},null,8,Se))],512),[[G,v.$props.message]]),v.$props.render?(x(),k("div",ke,[d(_(e),{render:v.$props.render},null,8,["render"])])):O("",!0),v.$props.closeable?(x(),E(ce,{key:2,class:"va-toast__close-icon",role:"button","aria-label":_(a)(v.$props.ariaCloseLabel),tabindex:"0",size:"1rem",name:v.$props.icon,onClick:H(S,["stop"]),onKeydown:de(H(S,["stop"]),["enter"])},null,8,["aria-label","name","onKeydown"])):O("",!0)])],46,Ce),[[G,p.value]])]),_:1}))}}),Me=`:root,
:host {
  --va-toast-display: flex;
  --va-toast-width: 330px;
  --va-toast-padding: 14px 26px 14px 13px;
  --va-toast-border-radius: 8px;
  --va-toast-border-color: transparent;
  --va-toast-border: 1px solid var(--va-toast-border-color);
  --va-toast-background-color: var(--va-background-secondary);
  --va-toast-box-shadow: 0 2px 12px 0 var(--va-shadow);
  --va-toast-transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s, bottom 0.3s;
  --va-toast-z-index: calc(var(--va-z-index-teleport-overlay) + 100);
  /* Group */
  --va-toast-group-margin-left: 13px;
  --va-toast-group-margin-right: 8px;
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
}
.va-toast--inline {
  position: static;
}
.va-toast--multiline {
  min-height: 70px;
}
.va-toast--right {
  right: 16px;
}
.va-toast--left {
  left: 16px;
}
.va-toast__group {
  margin-left: var(--va-toast-group-margin-left);
  margin-right: var(--va-toast-group-margin-right);
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
.va-toast-fade-enter.right {
  right: 0;
  transform: translateX(100%);
}
.va-toast-fade-enter.left {
  left: 0;
  transform: translateX(-100%);
}
.va-toast-fade-leave-active {
  opacity: 0;
}`,ze=pe(Ie,[["styles",[Me]]]),Ae=fe(ze),Q=5;let U=1;b().vaToastInstances=[];const Pe=(t,s)=>{if(t.el){const e=s.includes("bottom")?-1:1;return(t.el.offsetHeight+Q)*e}return 0},Fe=(t,s,e)=>{const a=e.includes("bottom")?-1:1;return parseInt(t,10)-(s+Q)*a},R=t=>{var s;return((s=t.component)==null?void 0:s.props)||{}},Ee=(t,s)=>{var e;if(!t)return;if(!b().vaToastInstances.length){U=1;return}const a=b().vaToastInstances.findIndex(p=>p===t);if(a<0)return;const o=R(t),{offsetX:l,offsetY:i,position:r}=o,u=(e=t.el)==null?void 0:e.offsetHeight;s(),b().vaToastInstances=b().vaToastInstances.reduce((p,f,h)=>{if(f===t)return p;if(f.component){const{offsetX:c,offsetY:m,position:$}=R(f);if(h>a&&l===c&&i===m&&r===$&&f.el&&u){const[P,B]=f.el.style.transform.match(/[\d-]+(?=px)/g),S=Fe(B,u,$);f.el.style.transform=`translate(0, ${S}px)`}}return[...p,f]},[]),b().vaToastInstances.length||(U=1)},Re=(t,s)=>{t&&(L(null,t),t.remove()),t=null},Be=(t,{props:s,children:e,element:a,appContext:o}={})=>{let l=a,i;return i=d(t,{...s,onClose:()=>{Ee(i,()=>Re(l)),s!=null&&s.onClose&&s.onClose()}},e),o&&(i.appContext=o),l?L(i,l):typeof document<"u"&&L(i,l=document.createElement("div")),{vNode:i,el:l}},Ye=t=>{if(!b().vaToastInstances.length){U=1;return}b().vaToastInstances.forEach(s=>{t&&s.appContext!==t||R(s).onClose()})},J=t=>{const s=b().vaToastInstances.find(e=>{var a;return((a=e.el)==null?void 0:a.id)===t});s&&R(s).onClose()},Oe=t=>typeof t=="string"?{message:t}:t,Ue=(t,s)=>{const{vNode:e,el:a}=Be(Ae,{appContext:s,props:Oe(t)}),o=R(e);if(a&&e.el&&o){document.body.appendChild(a.childNodes[0]);const{offsetX:l,offsetY:i,position:r}=o;e.el.style.display="flex",e.el.id="notification_"+U;let u=0;return b().vaToastInstances.filter(p=>{const{offsetX:f,offsetY:h,position:c}=R(p);return f===l&&h===i&&r===c}).forEach(p=>{u+=Pe(p,r)}),e.el.style.transform=`translate(0, ${u}px)`,U+=1,b().vaToastInstances.push(e),e.el.id}return null},He=()=>{const t=Z();return w(()=>{var s;return((s=me())==null?void 0:s._context)||(t==null?void 0:t.appContext)})},ee=()=>{const t=He(),s=[],e=r=>{const u=Ue(r,t.value);return u&&s.push(u),u};return{init:r=>e(r),notify:e,close:r=>J(r),closeAll:(r=!1)=>Ye(r?void 0:t.value),closeAllCreatedInThisHook:()=>{s.forEach(r=>J(r))}}},q=ve("user",{state:()=>({userName:"Vasili Savitski",email:"vasili@gmail.com",memberSince:"8/12/2020",pfp:"https://picsum.photos/id/22/200/300",is2FAEnabled:!1}),actions:{toggle2FA(){this.is2FAEnabled=!this.is2FAEnabled},changeUserName(t){this.userName=t}}}),Le=n("span",{class:"text-4xl"}," 😍 ",-1),Xe={class:"flex flex-col justify-center"},qe={class:"text-[28px] md:text-[32px] leading-10 font-bold"},je={class:"flex space-x-1 text-[13px] leading-4"},De=n("p",null,"Member since",-1),Ge=z({__name:"PreferencesHeader",setup(t){const s=q();return(e,a)=>{const o=y("VaAvatar");return x(),k(X,null,[d(o,{size:"large",color:"warning"},{default:g(()=>[Le]),_:1}),n("div",Xe,[n("h2",qe,V(_(s).userName),1),n("div",je,[De,n("p",null,V(_(s).memberSince),1)])])],64)}}}),M={"--va-button-font-size":"14px","--va-button-line-height":"20px"},Ke={class:"flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},Je=n("p",{class:"font-bold w-[200px]"},"Name",-1),We={class:"flex-1"},Ze={class:"max-w-[748px]"},Qe={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},et=n("p",{class:"font-bold w-[200px]"},"Email",-1),tt={class:"flex-1"},ot={class:"max-w-[748px]"},st={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},nt=n("p",{class:"font-bold w-[200px]"},"Password",-1),at=n("div",{class:"flex-1"},[n("div",{class:"max-w-[748px]"},"•••••••••••••")],-1),lt={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},rt=n("p",{class:"font-bold w-[200px]"},"Two-factor authentication",-1),it={class:"flex-1"},ct={class:"max-w-[748px]"},dt={class:"flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 min-h-[36px] leading-5"},ut=n("p",{class:"font-bold w-[200px]"},"Email subscriptions",-1),pt={class:"flex-1"},ft={class:"max-w-[748px]"},mt=n("p",null,"To manage what emails you get, visit the",-1),vt={class:"flex space-x-1 w-fit"},_t=z({__name:"Settings",emits:["openNameModal","openResetPasswordModal"],setup(t,{emit:s}){const e=q(),{init:a}=ee(),o=w(()=>e.is2FAEnabled?"2FA successfully enabled":"2FA successfully disabled"),l=w(()=>e.is2FAEnabled?{color:"danger",button:"Disable 2FA",content:"Two-Factor Authentication (2FA) is now enabled for your account, adding an extra layer of security to your sign-ins."}:{color:"primary",button:"Set up 2FA",content:"Add an extra layer of security to your account. To sign in, you’ll need to provide a code along with your username and password."}),i=()=>{e.toggle2FA(),a({message:o.value,color:"success"})},r=s;return(u,p)=>{const f=y("VaButton"),h=y("VaDivider"),c=y("RouterLink");return x(),k(X,null,[n("div",Ke,[Je,n("div",We,[n("div",Ze,V(_(e).userName),1)]),d(f,{style:N(_(M)),class:"w-fit h-fit",preset:"primary",onClick:p[0]||(p[0]=m=>r("openNameModal"))},{default:g(()=>[T(" Edit ")]),_:1},8,["style"])]),d(h),n("div",Qe,[et,n("div",tt,[n("div",ot,V(_(e).email),1)])]),n("div",st,[nt,at,d(f,{style:N(_(M)),class:"w-fit h-fit",preset:"primary",onClick:p[1]||(p[1]=m=>r("openResetPasswordModal"))},{default:g(()=>[T(" Reset Password ")]),_:1},8,["style"])]),d(h),n("div",lt,[rt,n("div",it,[n("div",ct,V(l.value.content),1)]),d(f,{style:N(_(M)),class:"w-fit h-fit",preset:"primary",color:l.value.color,onClick:i},{default:g(()=>[T(V(l.value.button),1)]),_:1},8,["style","color"])]),d(h),n("div",dt,[ut,n("div",pt,[n("div",ft,[mt,n("div",vt,[d(c,{to:{name:"settings"},class:"font-semibold text-primary"},{default:g(()=>[T("Notification settings")]),_:1})])])])])],64)}}}),gt=n("h1",{class:"va-h5 mb-4"},"Reset password",-1),ht={class:"flex flex-col-reverse md:flex-row md:items-center md:justify-end md:space-x-4"},xt=z({__name:"EditNameModal",emits:["cancel"],setup(t,{emit:s}){const e=q(),{init:a}=ee(),o=s,l=I(e.userName),i=()=>{if(!l.value||l.value===e.userName)return o("cancel");e.changeUserName(l.value),a({message:"You've successfully changed your name",color:"success"}),o("cancel")};return(r,u)=>{const p=y("VaInput"),f=y("VaButton"),h=y("VaForm"),c=y("VaModal");return x(),E(c,{"mobile-fullscreen":!1,size:"small","hide-default-actions":"","max-width":"380px","model-value":"","close-button":"","onUpdate:modelValue":u[2]||(u[2]=m=>o("cancel"))},{default:g(()=>[gt,d(h,{ref:"form",onSubmit:H(i,["prevent"])},{default:g(()=>[d(p,{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=m=>l.value=m),class:"mb-4",label:"Name",placeholder:"Name"},null,8,["modelValue"]),n("div",ht,[d(f,{style:N(_(M)),preset:"secondary",color:"secondary",onClick:u[1]||(u[1]=m=>o("cancel"))},{default:g(()=>[T(" Cancel")]),_:1},8,["style"]),d(f,{style:N(_(M)),class:"mb-4 md:mb-0",type:"submit",onClick:i},{default:g(()=>[T(" Save")]),_:1},8,["style"])])]),_:1},8,["onSubmit"])]),_:1})}}});const yt=n("h1",{class:"va-h5 mb-4"},"Reset password",-1),wt={class:"grid grid-cols-1 md:grid-cols-2 gap-6"},bt=n("div",{class:"hidden md:block"},null,-1),Ct={class:"flex flex-col space-y-2"},$t={class:"flex space-x-2 items-center"},Vt=n("p",null,"Must be at least 8 characters long",-1),Tt={class:"flex space-x-2 items-center"},Nt=n("p",null,"Must contain at least 6 unique characters",-1),St={class:"flex flex-col-reverse md:justify-end md:flex-row md:space-x-4"},kt=z({__name:"ResetPasswordModal",emits:["cancel"],setup(t,{emit:s}){const e=I(),a=I(),o=I(),{validate:l}=ge("form"),{init:i}=_e(),r=s,u=()=>{l()&&(i({message:"You've successfully changed your password",color:"success"}),r("cancel"))},p=[c=>!!c||"Old password field is required"],f=[c=>!!c||"New password field is required",c=>(c==null?void 0:c.length)>=8||"Must be at least 8 characters long",c=>new Set(c).size>=6||"Must contain at least 6 unique characters",c=>c!==e.value||"New password cannot be the same"],h=[c=>!!c||"Repeat new password field is required",c=>c===a.value||"Confirm password does not match new password"];return(c,m)=>{const $=y("VaInput"),A=y("VaIcon"),P=y("VaButton"),B=y("VaForm"),S=y("VaModal");return x(),E(S,{"max-width":"530px","mobile-fullscreen":!1,"hide-default-actions":"","model-value":"","close-button":"","onUpdate:modelValue":m[4]||(m[4]=F=>r("cancel"))},{default:g(()=>[yt,d(B,{ref:"form",class:"space-y-6",onSubmit:H(u,["prevent"])},{default:g(()=>{var F;return[n("div",wt,[d($,{modelValue:e.value,"onUpdate:modelValue":m[0]||(m[0]=C=>e.value=C),rules:p,label:"Old password",placeholder:"Old password","required-mark":"",type:"password"},null,8,["modelValue"]),bt,d($,{modelValue:a.value,"onUpdate:modelValue":m[1]||(m[1]=C=>a.value=C),rules:f,label:"New password",placeholder:"New password","required-mark":"",type:"password"},null,8,["modelValue"]),d($,{modelValue:o.value,"onUpdate:modelValue":m[2]||(m[2]=C=>o.value=C),rules:h,label:"Repeat new password",placeholder:"Repeat new password","required-mark":"",type:"password"},null,8,["modelValue"])]),n("div",Ct,[n("div",$t,[n("div",null,[d(A,{name:((F=a.value)==null?void 0:F.length)>=8?"mso-check":"mso-close",color:"secondary",size:"20px"},null,8,["name"])]),Vt]),n("div",Tt,[n("div",null,[d(A,{name:new Set(a.value).size>=6?"mso-check":"mso-close",color:"secondary",size:"20px"},null,8,["name"])]),Nt])]),n("div",St,[d(P,{style:N(_(M)),preset:"secondary",color:"secondary",onClick:m[3]||(m[3]=C=>r("cancel"))},{default:g(()=>[T(" Cancel")]),_:1},8,["style"]),d(P,{style:N(_(M)),class:"mb-4 md:mb-0",type:"submit",onClick:u},{default:g(()=>[T(" Update Password")]),_:1},8,["style"])])]}),_:1},8,["onSubmit"])]),_:1})}}});const It=n("h1",{class:"page-title"},"Preferences",-1),Mt={class:"flex flex-col p-4 space-y-10 bg-backgroundSecondary rounded-lg"},zt={class:"flex space-x-5"},At={class:"space-y-4 md:space-y-6"},Et=z({__name:"Preferences",setup(t){const s=I(!1),e=I(!1);return(a,o)=>(x(),k(X,null,[It,n("div",Mt,[n("div",zt,[d(Ge)]),n("div",At,[d(_t,{onOpenNameModal:o[0]||(o[0]=l=>s.value=!0),onOpenResetPasswordModal:o[1]||(o[1]=l=>e.value=!0)})])]),s.value?(x(),E(xt,{key:0,onCancel:o[2]||(o[2]=l=>s.value=!1)})):O("",!0),e.value?(x(),E(kt,{key:1,onCancel:o[3]||(o[3]=l=>e.value=!1)})):O("",!0)],64))}});export{Et as default};
//# sourceMappingURL=Preferences-c89ef28c.js.map
