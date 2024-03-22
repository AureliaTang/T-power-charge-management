import{M as G,N as Q,c as n,a2 as p,D as se,a as R,ar as re,L as H,I as de,v as I,bJ as fe,bi as me,F as ge,aO as te,E as L,O as ye,l as N,n as ae,_ as ne}from"./index.8245d607.js";import{P as _e,S as he}from"./index.80f71a17.js";import{C as Se,R as be}from"./Col.49051607.js";import{u as xe,e as Ce}from"./index.c73c8db1.js";import{a as Ie,i as pe,r as ie}from"./styleChecker.8bde6f41.js";var Pe=function(){return{avatar:p.any,description:p.any,prefixCls:String,title:p.any}};const Le=G({name:"AListItemMeta",props:Pe(),displayName:"AListItemMeta",__ANT_LIST_ITEM_META:!0,slots:["avatar","description","title"],setup:function(e,_){var t=_.slots,c=Q("list",e),f=c.prefixCls;return function(){var P,h,i,M,O,v,m="".concat(f.value,"-item-meta"),r=(P=e.title)!==null&&P!==void 0?P:(h=t.title)===null||h===void 0?void 0:h.call(t),u=(i=e.description)!==null&&i!==void 0?i:(M=t.description)===null||M===void 0?void 0:M.call(t),s=(O=e.avatar)!==null&&O!==void 0?O:(v=t.avatar)===null||v===void 0?void 0:v.call(t),S=n("div",{class:"".concat(f.value,"-item-meta-content")},[r&&n("h4",{class:"".concat(f.value,"-item-meta-title")},[r]),u&&n("div",{class:"".concat(f.value,"-item-meta-description")},[u])]);return n("div",{class:m},[s&&n("div",{class:"".concat(f.value,"-item-meta-avatar")},[s]),(r||u)&&S])}}});var le=Symbol("ListContextKey"),je=globalThis&&globalThis.__rest||function(o,e){var _={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(_[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,t=Object.getOwnPropertySymbols(o);c<t.length;c++)e.indexOf(t[c])<0&&Object.prototype.propertyIsEnumerable.call(o,t[c])&&(_[t[c]]=o[t[c]]);return _},Me=function(){return{prefixCls:String,extra:p.any,actions:p.array,grid:Object,colStyle:{type:Object,default:void 0}}};const Oe=G({name:"AListItem",inheritAttrs:!1,Meta:Le,props:Me(),slots:["actions","extra"],setup:function(e,_){var t=_.slots,c=_.attrs,f=se(le,{grid:R(),itemLayout:R()}),P=f.itemLayout,h=f.grid,i=Q("list",e),M=i.prefixCls,O=function(){var r,u=((r=t.default)===null||r===void 0?void 0:r.call(t))||[],s;return u.forEach(function(S){fe(S)&&!me(S)&&(s=!0)}),s&&u.length>1},v=function(){var r,u,s=(r=e.extra)!==null&&r!==void 0?r:(u=t.extra)===null||u===void 0?void 0:u.call(t);return P.value==="vertical"?!!s:!O()};return function(){var m,r,u,s,S,J=c.class,V=je(c,["class"]),g=M.value,E=(m=e.extra)!==null&&m!==void 0?m:(r=t.extra)===null||r===void 0?void 0:r.call(t),k=(u=t.default)===null||u===void 0?void 0:u.call(t),y=(s=e.actions)!==null&&s!==void 0?s:re((S=t.actions)===null||S===void 0?void 0:S.call(t));y=y&&!Array.isArray(y)?[y]:y;var b=y&&y.length>0&&n("ul",{class:"".concat(g,"-item-action"),key:"actions"},[y.map(function(w,B){return n("li",{key:"".concat(g,"-item-action-").concat(B)},[w,B!==y.length-1&&n("em",{class:"".concat(g,"-item-action-split")},null)])})]),K=h.value?"div":"li",F=n(K,H(H({},V),{},{class:de("".concat(g,"-item"),I({},"".concat(g,"-item-no-flex"),!v()),J)}),{default:function(){return[P.value==="vertical"&&E?[n("div",{class:"".concat(g,"-item-main"),key:"content"},[k,b]),n("div",{class:"".concat(g,"-item-extra"),key:"extra"},[E])]:[k,b,Ie(E,{key:"extra"})]]}});return h.value?n(Se,{flex:1,style:e.colStyle},{default:function(){return[F]}}):F}}});var Ee=function(){return{bordered:{type:Boolean,default:void 0},dataSource:p.array,extra:p.any,grid:{type:Object,default:void 0},itemLayout:String,loading:{type:[Boolean,Object],default:void 0},loadMore:p.any,pagination:{type:[Boolean,Object],default:void 0},prefixCls:String,rowKey:[String,Number,Function],renderItem:Function,size:String,split:{type:Boolean,default:void 0},header:p.any,footer:p.any,locale:{type:Object}}},j=G({name:"AList",Item:Oe,props:pe(Ee(),{dataSource:[],bordered:!1,split:!0,loading:!1,pagination:!1}),slots:["extra","loadMore","renderItem","header","footer"],setup:function(e,_){var t=_.slots,c,f;ge(le,{grid:te(e,"grid"),itemLayout:te(e,"itemLayout")});var P={current:1,total:0},h=Q("list",e),i=h.prefixCls,M=h.direction,O=h.renderEmpty,v=L(function(){return e.pagination&&ae(e.pagination)==="object"?e.pagination:{}}),m=R((c=v.value.defaultCurrent)!==null&&c!==void 0?c:1),r=R((f=v.value.defaultPageSize)!==null&&f!==void 0?f:10);ye(v,function(){"current"in v.value&&(m.value=v.value.current),"pageSize"in v.value&&(r.value=v.value.pageSize)});var u=[],s=function(l){return function(d,x){m.value=d,r.value=x,v.value[l]&&v.value[l](d,x)}},S=s("onChange"),J=s("onShowSizeChange"),V=function(l){var d;return n("div",{class:"".concat(i.value,"-empty-text")},[((d=e.locale)===null||d===void 0?void 0:d.emptyText)||l("List")])},g=L(function(){return typeof e.loading=="boolean"?{spinning:e.loading}:e.loading}),E=L(function(){return g.value&&g.value.spinning}),k=L(function(){var a="";switch(e.size){case"large":a="lg";break;case"small":a="sm";break}return a}),y=L(function(){var a;return a={},I(a,"".concat(i.value),!0),I(a,"".concat(i.value,"-vertical"),e.itemLayout==="vertical"),I(a,"".concat(i.value,"-").concat(k.value),k.value),I(a,"".concat(i.value,"-split"),e.split),I(a,"".concat(i.value,"-bordered"),e.bordered),I(a,"".concat(i.value,"-loading"),E.value),I(a,"".concat(i.value,"-grid"),!!e.grid),I(a,"".concat(i.value,"-rtl"),M.value==="rtl"),a}),b=L(function(){var a=N(N(N({},P),{total:e.dataSource.length,current:m.value,pageSize:r.value}),e.pagination||{}),l=Math.ceil(a.total/a.pageSize);return a.current>l&&(a.current=l),a}),K=L(function(){var a=ne(e.dataSource);return e.pagination&&e.dataSource.length>(b.value.current-1)*b.value.pageSize&&(a=ne(e.dataSource).splice((b.value.current-1)*b.value.pageSize,b.value.pageSize)),a}),F=xe(),w=Ce(function(){for(var a=0;a<ie.length;a+=1){var l=ie[a];if(F.value[l])return l}}),B=L(function(){if(!!e.grid){var a=w.value&&e.grid[w.value]?e.grid[w.value]:e.grid.column;if(a)return{width:"".concat(100/a,"%"),maxWidth:"".concat(100/a,"%")}}}),oe=function(l,d){var x,A=(x=e.renderItem)!==null&&x!==void 0?x:t.renderItem;if(!A)return null;var C,z=ae(e.rowKey);return z==="function"?C=e.rowKey(l):z==="string"||z==="number"?C=l[e.rowKey]:C=l.key,C||(C="list-item-".concat(d)),u[d]=C,A({item:l,index:d})};return function(){var a,l,d,x,A,C,z,U=(a=e.loadMore)!==null&&a!==void 0?a:(l=t.loadMore)===null||l===void 0?void 0:l.call(t),W=(d=e.footer)!==null&&d!==void 0?d:(x=t.footer)===null||x===void 0?void 0:x.call(t),X=(A=e.header)!==null&&A!==void 0?A:(C=t.header)===null||C===void 0?void 0:C.call(t),Y=re((z=t.default)===null||z===void 0?void 0:z.call(t)),ue=!!(U||e.pagination||W),ce=N(N({},y.value),I({},"".concat(i.value,"-something-after-last-item"),ue)),Z=e.pagination?n("div",{class:"".concat(i.value,"-pagination")},[n(_e,H(H({},b.value),{},{onChange:S,onShowSizeChange:J}),null)]):null,$=E.value&&n("div",{style:{minHeight:"53px"}},null);if(K.value.length>0){u.length=0;var ee=K.value.map(function(T,q){return oe(T,q)}),ve=ee.map(function(T,q){return n("div",{key:u[q],style:B.value},[T])});$=e.grid?n(be,{gutter:e.grid.gutter},{default:function(){return[ve]}}):n("ul",{class:"".concat(i.value,"-items")},[ee])}else!Y.length&&!E.value&&($=V(O.value));var D=b.value.position||"bottom";return n("div",{class:ce},[(D==="top"||D==="both")&&Z,X&&n("div",{class:"".concat(i.value,"-header")},[X]),n(he,g.value,{default:function(){return[$,Y]}}),W&&n("div",{class:"".concat(i.value,"-footer")},[W]),U||(D==="bottom"||D==="both")&&Z])}}});j.install=function(o){return o.component(j.name,j),o.component(j.Item.name,j.Item),o.component(j.Item.Meta.name,j.Item.Meta),o};const Ne=j;export{Oe as L,Ne as a};
