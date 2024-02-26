import{c as i,A as V,i as Y,a as q,j as X,_ as E,K as N,as as Z,F as ee,B as te,J as ae,Y as re,z as $,P as g,t as ne,aO as le,aP as oe}from"./index.55cf085f.js";import{a as ie,A as ce}from"./index.90a5b505.js";import{K as M}from"./shallowequal.9bf93796.js";import{R as ue}from"./request.e95454fd.js";import{u as de}from"./useDestroyed.6570a5e8.js";var se={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const ve=se;function U(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),l.forEach(function(t){fe(n,t,a[t])})}return n}function fe(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var D=function(e,a){var l=U({},e,a.attrs);return i(V,U({},l,{icon:ve}),null)};D.displayName="ArrowLeftOutlined";D.inheritAttrs=!1;const be=D;var ge={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"};const me=ge;function J(n){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?Object(arguments[e]):{},l=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(l=l.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),l.forEach(function(t){ye(n,t,a[t])})}return n}function ye(n,e,a){return e in n?Object.defineProperty(n,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[e]=a,n}var z=function(e,a){var l=J({},e,a.attrs);return i(V,J({},l,{icon:me}),null)};z.displayName="ArrowRightOutlined";z.inheritAttrs=!1;const he=z;var pe=globalThis&&globalThis.__rest||function(n,e){var a={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&e.indexOf(l)<0&&(a[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,l=Object.getOwnPropertySymbols(n);t<l.length;t++)e.indexOf(l[t])<0&&Object.prototype.propertyIsEnumerable.call(n,l[t])&&(a[l[t]]=n[l[t]]);return a},Oe={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},_e=Y({name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,a){var l=a.slots,t=a.emit,p=a.attrs,d=a.expose,f=q(),B=function(s){var m=s.keyCode;m===M.ENTER&&s.preventDefault()},P=function(s){var m=s.keyCode;m===M.ENTER&&t("click",s)},j=function(s){t("click",s)},C=function(){f.value&&f.value.focus()},x=function(){f.value&&f.value.blur()};return X(function(){e.autofocus&&C()}),d({focus:C,blur:x}),function(){var v,s=e.noStyle,m=e.disabled,S=pe(e,["noStyle","disabled"]),_={};return s||(_=E({},Oe)),m&&(_.pointerEvents="none"),i("div",N(N(N({role:"button",tabindex:0,ref:f},S),p),{},{onClick:j,onKeydown:B,onKeyup:P,style:E(E({},_),p.style||{})}),[(v=l.default)===null||v===void 0?void 0:v.call(l)])}}});const we=_e;var ke=function(){return{backIcon:g.any,prefixCls:String,title:g.any,subTitle:g.any,breadcrumb:g.object,tags:g.any,footer:g.any,extra:g.any,avatar:g.object,ghost:{type:Boolean,default:void 0},onBack:Function}},Pe=Y({name:"APageHeader",props:ke(),slots:["backIcon","avatar","breadcrumb","title","subTitle","tags","extra","footer"],setup:function(e,a){var l=a.emit,t=a.slots,p=ee("page-header",e),d=p.prefixCls,f=p.direction,B=p.pageHeader,P=q(!1),j=de(),C=function(r){var o=r.width;j.value||(P.value=o<768)},x=te(function(){var c,r,o;return(o=(c=e.ghost)!==null&&c!==void 0?c:(r=B.value)===null||r===void 0?void 0:r.ghost)!==null&&o!==void 0?o:!0}),v=function(){var r,o,u;return(u=(r=e.backIcon)!==null&&r!==void 0?r:(o=t.backIcon)===null||o===void 0?void 0:o.call(t))!==null&&u!==void 0?u:f.value==="rtl"?i(he,null,null):i(be,null,null)},s=function(r){return!r||!e.onBack?null:i(oe,{componentName:"PageHeader",children:function(u){var y=u.back;return i("div",{class:"".concat(d.value,"-back")},[i(we,{onClick:function(h){l("back",h)},class:"".concat(d.value,"-back-button"),"aria-label":y},{default:function(){return[r]}})])}},null)},m=function(){var r;return e.breadcrumb?i(ie,e.breadcrumb,null):(r=t.breadcrumb)===null||r===void 0?void 0:r.call(t)},S=function(){var r,o,u,y,b,h,A,T,R,H=e.avatar,w=(r=e.title)!==null&&r!==void 0?r:(o=t.title)===null||o===void 0?void 0:o.call(t),k=(u=e.subTitle)!==null&&u!==void 0?u:(y=t.subTitle)===null||y===void 0?void 0:y.call(t),L=(b=e.tags)!==null&&b!==void 0?b:(h=t.tags)===null||h===void 0?void 0:h.call(t),I=(A=e.extra)!==null&&A!==void 0?A:(T=t.extra)===null||T===void 0?void 0:T.call(t),O="".concat(d.value,"-heading"),F=w||k||L||I;if(!F)return null;var Q=v(),K=s(Q),W=K||H||F;return i("div",{class:O},[W&&i("div",{class:"".concat(O,"-left")},[K,H?i(ce,H,null):(R=t.avatar)===null||R===void 0?void 0:R.call(t),w&&i("span",{class:"".concat(O,"-title"),title:typeof w=="string"?w:void 0},[w]),k&&i("span",{class:"".concat(O,"-sub-title"),title:typeof k=="string"?k:void 0},[k]),L&&i("span",{class:"".concat(O,"-tags")},[L])]),I&&i("span",{class:"".concat(O,"-extra")},[I])])},_=function(){var r,o,u=(r=e.footer)!==null&&r!==void 0?r:ne((o=t.footer)===null||o===void 0?void 0:o.call(t));return le(u)?null:i("div",{class:"".concat(d.value,"-footer")},[u])},G=function(r){return i("div",{class:"".concat(d.value,"-content")},[r])};return function(){var c,r,o,u=((r=e.breadcrumb)===null||r===void 0?void 0:r.routes)||t.breadcrumb,y=e.footer||t.footer,b=ae((o=t.default)===null||o===void 0?void 0:o.call(t)),h=re(d.value,(c={"has-breadcrumb":u,"has-footer":y},$(c,"".concat(d.value,"-ghost"),x.value),$(c,"".concat(d.value,"-rtl"),f.value==="rtl"),$(c,"".concat(d.value,"-compact"),P.value),c));return i(ue,{onResize:C},{default:function(){return[i("div",{class:h},[m(),S(),b.length?G(b):null,_()])]}})}}});const Se=Z(Pe);export{Se as P};
