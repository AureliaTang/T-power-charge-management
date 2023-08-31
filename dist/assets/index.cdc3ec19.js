import{i as I,a as B,F as z,B as Q,y as Y,n as J,G as W,j as ne,aC as N,z as C,c as u,_ as E,K as A,P as j,aE as oe,aG as le,t as X,Z as se,J as H,x as ie,v as ue,S as ce}from"./index.30759e0f.js";import{u as ve,e as fe,t as de,T as pe,b as me,c as ge,D as ye,M as Z}from"./index.391d55b2.js";import{E as be,P as he,R as Pe,D as xe,F as _e,_ as Ce,G as Se}from"./request.031bd10c.js";var Ae=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:j.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},Oe=I({name:"AAvatar",inheritAttrs:!1,props:Ae(),slots:["icon"],setup:function(e,s){var a=s.slots,r=s.attrs,d=B(!0),p=B(!1),b=B(1),m=B(null),h=B(null),f=z("avatar",e),o=f.prefixCls,i=be(),n=Q(function(){return e.size==="default"?i.value:e.size}),g=ve(),c=fe(function(){if(Y(e.size)==="object"){var v=he.find(function(y){return g.value[y]}),l=e.size[v];return l}}),S=function(l){return c.value?{width:"".concat(c.value,"px"),height:"".concat(c.value,"px"),lineHeight:"".concat(c.value,"px"),fontSize:"".concat(l?c.value/2:18,"px")}:{}},P=function(){if(!(!m.value||!h.value)){var l=m.value.offsetWidth,y=h.value.offsetWidth;if(l!==0&&y!==0){var _=e.gap,O=_===void 0?4:_;O*2<y&&(b.value=y-O*2<l?(y-O*2)/l:1)}}},x=function(){var l=e.loadError,y=l==null?void 0:l();y!==!1&&(d.value=!1)};return J(function(){return e.src},function(){W(function(){d.value=!0,b.value=1})}),J(function(){return e.gap},function(){W(function(){P()})}),ne(function(){W(function(){P(),p.value=!0})}),function(){var v,l,y=e.shape,_=e.src,O=e.alt,F=e.srcset,T=e.draggable,K=e.crossOrigin,k=N(a,e,"icon"),R=o.value,ee=(v={},C(v,"".concat(r.class),!!r.class),C(v,R,!0),C(v,"".concat(R,"-lg"),n.value==="large"),C(v,"".concat(R,"-sm"),n.value==="small"),C(v,"".concat(R,"-").concat(y),y),C(v,"".concat(R,"-image"),_&&d.value),C(v,"".concat(R,"-icon"),k),v),re=typeof n.value=="number"?{width:"".concat(n.value,"px"),height:"".concat(n.value,"px"),lineHeight:"".concat(n.value,"px"),fontSize:k?"".concat(n.value/2,"px"):"18px"}:{},V=(l=a.default)===null||l===void 0?void 0:l.call(a),D;if(_&&d.value)D=u("img",{draggable:T,src:_,srcset:F,onError:x,alt:O,crossorigin:K},null);else if(k)D=k;else if(p.value||b.value!==1){var G="scale(".concat(b.value,") translateX(-50%)"),ae={msTransform:G,WebkitTransform:G,transform:G},te=typeof n.value=="number"?{lineHeight:"".concat(n.value,"px")}:{};D=u(Pe,{onResize:P},{default:function(){return[u("span",{class:"".concat(R,"-string"),ref:m,style:E(E({},te),ae)},[V])]}})}else D=u("span",{class:"".concat(R,"-string"),ref:m,style:{opacity:0}},[V]);return u("span",A(A({},r),{},{ref:h,class:ee,style:[re,S(!!k),r.style]}),[D])}}});const w=Oe;var Re=function(){return E(E({},me()),{content:j.any,title:j.any})},Ne=I({name:"APopover",props:xe(Re(),E(E({},de()),{trigger:"hover",transitionName:"zoom-big",placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1})),setup:function(e,s){var a=s.expose,r=s.slots,d=B();a({getPopupDomNode:function(){var i,n;return(n=(i=d.value)===null||i===void 0?void 0:i.getPopupDomNode)===null||n===void 0?void 0:n.call(i)}});var p=z("popover",e),b=p.prefixCls,m=p.configProvider,h=Q(function(){return m.getPrefixCls()}),f=function(){var i,n,g=e.title,c=g===void 0?X((i=r.title)===null||i===void 0?void 0:i.call(r)):g,S=e.content,P=S===void 0?X((n=r.content)===null||n===void 0?void 0:n.call(r)):S,x=!!(Array.isArray(c)?c.length:c),v=!!(Array.isArray(P)?P.length:c);if(!(!x&&!v))return u(se,null,[x&&u("div",{class:"".concat(b.value,"-title")},[c]),u("div",{class:"".concat(b.value,"-inner-content")},[P])])};return function(){return u(pe,A(A({},_e(e,["title","content"])),{},{prefixCls:b.value,ref:d,transitionName:le(h.value,"zoom-big",e.transitionName)}),{title:f,default:r.default})}}});const je=oe(Ne);var Te=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},Be=I({name:"AAvatarGroup",inheritAttrs:!1,props:Te(),setup:function(e,s){var a=s.slots,r=s.attrs,d=z("avatar-group",e),p=d.prefixCls,b=d.direction;return Ce(e),function(){var m,h=e.maxPopoverPlacement,f=h===void 0?"top":h,o=e.maxCount,i=e.maxStyle,n=e.maxPopoverTrigger,g=n===void 0?"hover":n,c=(m={},C(m,p.value,!0),C(m,"".concat(p.value,"-rtl"),b.value==="rtl"),C(m,"".concat(r.class),!!r.class),m),S=N(a,e),P=H(S).map(function(y,_){return Se(y,{key:"avatar-key-".concat(_)})}),x=P.length;if(o&&o<x){var v=P.slice(0,o),l=P.slice(o,x);return v.push(u(je,{key:"avatar-popover-key",content:l,trigger:g,placement:f,overlayClassName:"".concat(p.value,"-popover")},{default:function(){return[u(w,{style:i},{default:function(){return["+".concat(x-o)]}})]}})),u("div",A(A({},r),{},{class:c,style:r.style}),[v])}return u("div",A(A({},r),{},{class:c,style:r.style}),[P])}}});const L=Be;w.Group=L;w.install=function(t){return t.component(w.name,w),t.component(L.name,L),t};var Ee=globalThis&&globalThis.__rest||function(t,e){var s={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(s[a[r]]=t[a[r]]);return s},Ie=function(){return{prefixCls:String,href:String,separator:j.any,overlay:j.any,onClick:Function}};const M=I({name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Ie(),slots:["separator","overlay"],setup:function(e,s){var a=s.slots,r=s.attrs,d=z("breadcrumb",e),p=d.prefixCls,b=function(h,f){var o=N(a,e,"overlay");return o?u(ye,{overlay:o,placement:"bottom"},{default:function(){return[u("span",{class:"".concat(f,"-overlay-link")},[h,u(ge,null,null)])]}}):h};return function(){var m,h=(m=N(a,e,"separator"))!==null&&m!==void 0?m:"/",f=N(a,e),o=r.class,i=r.style,n=Ee(r,["class","style"]),g;return e.href!==void 0?g=u("a",A({class:"".concat(p.value,"-link"),onClick:e.onClick},n),[f]):g=u("span",A({class:"".concat(p.value,"-link"),onClick:e.onClick},n),[f]),g=b(g,p.value),f?u("span",{class:o,style:i},[g,h&&u("span",{class:"".concat(p.value,"-separator")},[h])]):null}}});var ze=function(){return{prefixCls:String,routes:{type:Array},params:j.any,separator:j.any,itemRender:{type:Function}}};function ke(t,e){if(!t.breadcrumbName)return null;var s=Object.keys(e).join("|"),a=t.breadcrumbName.replace(new RegExp(":(".concat(s,")"),"g"),function(r,d){return e[d]||r});return a}function q(t){var e=t.route,s=t.params,a=t.routes,r=t.paths,d=a.indexOf(e)===a.length-1,p=ke(e,s);return d?u("span",null,[p]):u("a",{href:"#/".concat(r.join("/"))},[p])}const $=I({name:"ABreadcrumb",props:ze(),slots:["separator","itemRender"],setup:function(e,s){var a=s.slots,r=z("breadcrumb",e),d=r.prefixCls,p=r.direction,b=function(o,i){return o=(o||"").replace(/^\//,""),Object.keys(i).forEach(function(n){o=o.replace(":".concat(n),i[n])}),o},m=function(o,i,n){var g=ce(o),c=b(i||"",n);return c&&g.push(c),g},h=function(o){var i=o.routes,n=i===void 0?[]:i,g=o.params,c=g===void 0?{}:g,S=o.separator,P=o.itemRender,x=P===void 0?q:P,v=[];return n.map(function(l){var y=b(l.path,c);y&&v.push(y);var _=[].concat(v),O=null;return l.children&&l.children.length&&(O=u(Z,null,{default:function(){return[l.children.map(function(T){return u(Z.Item,{key:T.path||T.breadcrumbName},{default:function(){return[x({route:T,params:c,routes:n,paths:m(_,T.path,c)})]}})})]}})),u(M,{overlay:O,separator:S,key:y||l.breadcrumbName},{default:function(){return[x({route:l,params:c,routes:n,paths:_})]}})})};return function(){var f,o,i,n=e.routes,g=e.params,c=g===void 0?{}:g,S=H(N(a,e)),P=(o=N(a,e,"separator"))!==null&&o!==void 0?o:"/",x=e.itemRender||a.itemRender||q;n&&n.length>0?i=h({routes:n,params:c,separator:P,itemRender:x}):S.length&&(i=S.map(function(l,y){return ie(Y(l.type)==="object"&&(l.type.__ANT_BREADCRUMB_ITEM||l.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),ue(l,{separator:P,key:y})}));var v=(f={},C(f,d.value,!0),C(f,"".concat(d.value,"-rtl"),p.value==="rtl"),f);return u("div",{class:v},[i])}}});var De=globalThis&&globalThis.__rest||function(t,e){var s={};for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.indexOf(a)<0&&(s[a]=t[a]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(t);r<a.length;r++)e.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(t,a[r])&&(s[a[r]]=t[a[r]]);return s},we=function(){return{prefixCls:String}};const U=I({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:we(),setup:function(e,s){var a=s.slots,r=s.attrs,d=z("breadcrumb",e),p=d.prefixCls;return function(){var b;r.separator;var m=r.class,h=De(r,["separator","class"]),f=H((b=a.default)===null||b===void 0?void 0:b.call(a));return u("span",A({class:["".concat(p.value,"-separator"),m]},h),[f.length>0?f:"/"])}}});$.Item=M;$.Separator=U;$.install=function(t){return t.component($.name,$),t.component(M.name,M),t.component(U.name,U),t};export{w as A,M as B,$ as a};