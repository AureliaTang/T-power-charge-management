import{M as C,d as h}from"./Modal.96e6e95e.js";import{M as G,a as F,ai as ve,$ as me,c,L as k,G as ye,H as ke,I as M,v as W,aU as E,l as r,aV as be,aW as xe,aX as ge,aY as H,aZ as V,a_ as he,a$ as pe}from"./index.3e073952.js";import{g as Te,B as Pe,o as we}from"./styleChecker.eb92c49d.js";import{u as Be}from"./useDestroyed.98bfddca.js";var Fe={type:{type:String},actionFn:Function,close:Function,autofocus:Boolean,prefixCls:String,buttonProps:Object,emitEvent:Boolean,quitOnNullishReturnValue:Boolean};function j(n){return!!(n&&!!n.then)}const q=G({name:"ActionButton",props:Fe,setup:function(e,b){var u=b.slots,i=F(!1),x=F(),f=F(!1),y,g=Be();ve(function(){e.autofocus&&(y=setTimeout(function(){var t;return(t=x.value.$el)===null||t===void 0?void 0:t.focus()}))}),me(function(){clearTimeout(y)});var p=function(a){var o=e.close;!j(a)||(f.value=!0,a.then(function(){g.value||(f.value=!1),o.apply(void 0,arguments),i.value=!1},function(s){console.error(s),g.value||(f.value=!1),i.value=!1}))},l=function(a){var o=e.actionFn,s=e.close,v=s===void 0?function(){}:s;if(!i.value){if(i.value=!0,!o){v();return}var d;if(e.emitEvent){if(d=o(a),e.quitOnNullishReturnValue&&!j(d)){i.value=!1,v(a);return}}else if(o.length)d=o(v),i.value=!1;else if(d=o(),!d){v();return}p(d)}};return function(){var t=e.type,a=e.prefixCls,o=e.buttonProps;return c(Pe,k(k(k({},Te(t)),{},{onClick:l,loading:f.value,prefixCls:a},o),{},{ref:x}),u)}}});function T(n){return typeof n=="function"?n():n}const Ne=G({name:"ConfirmDialog",inheritAttrs:!1,props:["icon","onCancel","onOk","close","closable","zIndex","afterClose","visible","keyboard","centered","getContainer","maskStyle","okButtonProps","cancelButtonProps","okType","prefixCls","okCancel","width","mask","maskClosable","okText","cancelText","autoFocusButton","transitionName","maskTransitionName","type","title","content","direction","rootPrefixCls","bodyStyle","closeIcon","modalRender","focusTriggerAfterClose","wrapClassName"],setup:function(e,b){var u=b.attrs,i=ye("Modal"),x=ke(i,1),f=x[0];return function(){var y=e.icon,g=e.onCancel,p=e.onOk,l=e.close,t=e.closable,a=t===void 0?!1:t,o=e.zIndex,s=e.afterClose,v=e.visible,d=e.keyboard,N=e.centered,X=e.getContainer,Y=e.maskStyle,Z=e.okButtonProps,J=e.cancelButtonProps,O=e.okCancel,S=O===void 0?!0:O,A=e.width,K=A===void 0?416:A,I=e.mask,Q=I===void 0?!0:I,R=e.maskClosable,ee=R===void 0?!1:R,_=e.type,$=e.title,ne=e.content,te=e.direction,oe=e.closeIcon,ae=e.modalRender,re=e.focusTriggerAfterClose,w=e.rootPrefixCls,le=e.bodyStyle,ce=e.wrapClassName,ie=e.okType||"primary",B=e.prefixCls||"ant-modal",m="".concat(B,"-confirm"),ue=u.style||{},se=T(e.okText)||(S?f.value.okText:f.value.justOkText),fe=T(e.cancelText)||f.value.cancelText,D=e.autoFocusButton===null?!1:e.autoFocusButton||"ok",de=M(m,"".concat(m,"-").concat(_),"".concat(B,"-").concat(_),W({},"".concat(m,"-rtl"),te==="rtl"),u.class),Ce=S&&c(q,{actionFn:g,close:l,autofocus:D==="cancel",buttonProps:J,prefixCls:"".concat(w,"-btn")},{default:function(){return[fe]}});return c(C,{prefixCls:B,class:de,wrapClassName:M(W({},"".concat(m,"-centered"),!!N),ce),onCancel:function(L){return l({triggerCancel:!0},L)},visible:v,title:"",footer:"",transitionName:E(w,"zoom",e.transitionName),maskTransitionName:E(w,"fade",e.maskTransitionName),mask:Q,maskClosable:ee,maskStyle:Y,style:ue,bodyStyle:le,width:K,zIndex:o,afterClose:s,keyboard:d,centered:N,getContainer:X,closable:a,closeIcon:oe,modalRender:ae,focusTriggerAfterClose:re},{default:function(){return[c("div",{class:"".concat(m,"-body-wrapper")},[c("div",{class:"".concat(m,"-body")},[T(y),$===void 0?null:c("span",{class:"".concat(m,"-title")},[T($)]),c("div",{class:"".concat(m,"-content")},[T(ne)])]),c("div",{class:"".concat(m,"-btns")},[Ce,c(q,{type:ie,actionFn:p,close:l,autofocus:D==="ok",buttonProps:Z,prefixCls:"".concat(w,"-btn")},{default:function(){return[se]}})])])]}})}}});var Oe=function(e){var b=document.createDocumentFragment(),u=r(r({},we(e,["parentContext","appContext"])),{close:f,visible:!0}),i=null;function x(){i&&(V(null,b),i.component.update(),i=null);for(var l=arguments.length,t=new Array(l),a=0;a<l;a++)t[a]=arguments[a];var o=t.some(function(d){return d&&d.triggerCancel});e.onCancel&&o&&e.onCancel.apply(e,t);for(var s=0;s<h.length;s++){var v=h[s];if(v===f){h.splice(s,1);break}}}function f(){for(var l=this,t=arguments.length,a=new Array(t),o=0;o<t;o++)a[o]=arguments[o];u=r(r({},u),{visible:!1,afterClose:function(){typeof e.afterClose=="function"&&e.afterClose(),x.apply(l,a)}}),y(u)}function y(l){typeof l=="function"?u=l(u):u=r(r({},u),l),i&&(r(i.component.props,u),i.component.update())}var g=function(t){var a=pe,o=a.prefixCls,s=t.prefixCls||"".concat(o,"-modal");return c(he,k(k({},a),{},{notUpdateGlobalConfig:!0,prefixCls:o}),{default:function(){return[c(Ne,k(k({},t),{},{rootPrefixCls:o,prefixCls:s}),null)]}})};function p(l){var t=c(g,r({},l));return t.appContext=e.parentContext||e.appContext||t.appContext,V(t,b),t}return i=p(u),h.push(f),{destroy:f,update:y}};const P=Oe;function Se(n){return r(r({icon:function(){return c(H,null,null)},okCancel:!1},n),{type:"warning"})}function Ae(n){return r(r({icon:function(){return c(be,null,null)},okCancel:!1},n),{type:"info"})}function Ie(n){return r(r({icon:function(){return c(xe,null,null)},okCancel:!1},n),{type:"success"})}function Re(n){return r(r({icon:function(){return c(ge,null,null)},okCancel:!1},n),{type:"error"})}function _e(n){return r(r({icon:function(){return c(H,null,null)},okCancel:!0},n),{type:"confirm"})}function U(n){return P(Se(n))}C.info=function(e){return P(Ae(e))};C.success=function(e){return P(Ie(e))};C.error=function(e){return P(Re(e))};C.warning=U;C.warn=U;C.confirm=function(e){return P(_e(e))};C.destroyAll=function(){for(;h.length;){var e=h.pop();e&&e()}};C.install=function(n){return n.component(C.name,C),n};
