import{g as c,a2 as t}from"./index-bd79719e.js";const d=()=>{var l;const r=(l=c())==null?void 0:l.appContext;if(!r)throw new Error("useModal can be used only in setup function. You can use app.config.globalProperties.$vaModal outside setup function");return{init:e=>t(e,r),confirm:e=>typeof e=="string"?new Promise((n,u)=>{t({message:e,onOk(){n(!0)},onCancel(){n(!1)}},r)}):new Promise((n,u)=>{t({...e,onOk(){var a;(a=e==null?void 0:e.onOk)==null||a.call(e),n(!0)},onCancel(){var a;(a=e==null?void 0:e.onCancel)==null||a.call(e),n(!1)}},r)})}};export{d as u};
//# sourceMappingURL=useModal-0e912063.js.map