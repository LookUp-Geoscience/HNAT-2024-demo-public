import{d as f,r as _,ae as w,j as s,c as b,l as y,m as a,A as V,p as t,C as m,q as u}from"./index-aa1b58a7.js";import{u as v}from"./useForm-bd1771ea.js";const h=u("h1",{class:"font-semibold text-4xl mb-4"},"Forgot your password?",-1),x=u("p",{class:"text-base mb-4 leading-5"}," If you've forgotten your password, don't worry. Simply enter your email address below, and we'll send you an email with a temporary password. Restoring access to your account has never been easier. ",-1),B=f({__name:"RecoverPassword",setup(C){const r=_(""),d=v("passwordForm"),c=w(),e=()=>{d.validate()&&c.push({name:"recover-password-email"})};return(F,n)=>{const i=s("VaInput"),l=s("VaButton"),p=s("VaForm");return b(),y(p,{ref:"passwordForm",onSubmit:V(e,["prevent"])},{default:a(()=>[h,x,t(i,{modelValue:r.value,"onUpdate:modelValue":n[0]||(n[0]=o=>r.value=o),rules:[o=>!!o||"Email field is required"],class:"mb-4",label:"Enter your email",type:"email"},null,8,["modelValue","rules"]),t(l,{class:"w-full mb-2",onClick:e},{default:a(()=>[m("Send password")]),_:1}),t(l,{to:{name:"login"},class:"w-full",preset:"secondary",onClick:e},{default:a(()=>[m("Go back")]),_:1})]),_:1},8,["onSubmit"])}}});export{B as default};
//# sourceMappingURL=RecoverPassword-c8b6c28d.js.map