import{a as w,R as lt,G as de,x as ee,c as r,C as Ne,t as T,P as Xe,k as te,B as D,$ as Ze,I as we,V as ge,y as Ut,v as qt,aS as Yt,aT as Xt,_ as gt,aU as ze,E as pe,A as Zt,a7 as Rt,q as Jt,aV as Qt,a9 as qe,H as wt,l as ea,aP as ta,aF as Nt,aW as He,aX as aa,aY as pt,aZ as na}from"./index.e783c946.js";import{F as Ve,i as St,J as ra,R as xt,E as ia,A as Ot,D as la}from"./styleChecker.df42cde5.js";import{K as ve,E as oa,M as ua,a as ca,i as sa}from"./index.9641cdf4.js";import{u as Y,i as va,a as Tt}from"./useState.656607d1.js";import{f as Lt,t as da,a as fa,c as ba,h as ya,g as ha,R as ma,C as ga}from"./Col.40afaf57.js";import{i as pa}from"./isSymbol.7e901a66.js";function Sa(i){var e=w(),t=w(!1);function a(){for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];t.value||(Ve.cancel(e.value),e.value=Ve(function(){i.apply(void 0,l)}))}return lt(function(){t.value=!0,Ve.cancel(e.value)}),a}function xa(i){var e=w([]),t=w(typeof i=="function"?i():i),a=Sa(function(){var l=t.value;e.value.forEach(function(o){l=o(l)}),e.value=[],t.value=l});function n(l){e.value.push(l),a()}return[t,n]}const Ta=de({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var a=t.expose,n=t.attrs,l=w();function o(d){var b;!((b=e.tab)===null||b===void 0)&&b.disabled||e.onClick(d)}a({domRef:l});function u(d){var b;d.preventDefault(),d.stopPropagation(),e.editable.onEdit("remove",{key:(b=e.tab)===null||b===void 0?void 0:b.key,event:d})}var c=ee(function(){var d;return e.editable&&e.closable!==!1&&!(!((d=e.tab)===null||d===void 0)&&d.disabled)});return function(){var d,b,v=e.prefixCls,f=e.id,S=e.active,h=e.tab,N=h.key,P=h.tab,z=h.disabled,C=h.closeIcon,y=e.renderWrapper,O=e.removeAriaLabel,G=e.editable,M=e.onFocus,k="".concat(v,"-tab"),W=r("div",{key:N,ref:l,class:Ne(k,(d={},T(d,"".concat(k,"-with-remove"),c.value),T(d,"".concat(k,"-active"),S),T(d,"".concat(k,"-disabled"),z),d)),style:n.style,onClick:o},[r("div",{role:"tab","aria-selected":S,id:f&&"".concat(f,"-tab-").concat(N),class:"".concat(k,"-btn"),"aria-controls":f&&"".concat(f,"-panel-").concat(N),"aria-disabled":z,tabindex:z?null:0,onClick:function(F){F.stopPropagation(),o(F)},onKeydown:function(F){[ve.SPACE,ve.ENTER].includes(F.which)&&(F.preventDefault(),o(F))},onFocus:M},[typeof P=="function"?P():P]),c.value&&r("button",{type:"button","aria-label":O||"remove",tabindex:0,class:"".concat(k,"-remove"),onClick:function(F){F.stopPropagation(),u(F)}},[(C==null?void 0:C())||((b=G.removeIcon)===null||b===void 0?void 0:b.call(G))||"\xD7"])]);return y?y(W):W}}});var Ct={width:0,height:0,left:0,top:0};function Ca(i,e){var t=w(new Map);return Xe(function(){for(var a,n,l=new Map,o=i.value,u=e.value.get((a=o[0])===null||a===void 0?void 0:a.key)||Ct,c=u.left+u.width,d=0;d<o.length;d+=1){var b=o[d].key,v=e.value.get(b);v||(v=e.value.get((n=o[d-1])===null||n===void 0?void 0:n.key)||Ct);var f=l.get(b)||te({},v);f.right=c-f.left-f.width,l.set(b,f)}t.value=new Map(l)}),t}const Mt=de({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var a=t.expose,n=t.attrs,l=w();return a({domRef:l}),function(){var o=e.prefixCls,u=e.editable,c=e.locale;return!u||u.showAdd===!1?null:r("button",{ref:l,type:"button",class:"".concat(o,"-nav-add"),style:n.style,"aria-label":(c==null?void 0:c.addAriaLabel)||"Add tab",onClick:function(b){u.onEdit("add",{event:b})}},[u.addIcon?u.addIcon():"+"])}}});var _a={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:ge.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}};const Pa=de({name:"OperationNode",inheritAttrs:!1,props:_a,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var a=t.attrs,n=t.slots,l=Y(!1),o=D(l,2),u=o[0],c=o[1],d=Y(null),b=D(d,2),v=b[0],f=b[1],S=function(y){for(var O=e.tabs.filter(function(V){return!V.disabled}),G=O.findIndex(function(V){return V.key===v.value})||0,M=O.length,k=0;k<M;k+=1){G=(G+y+M)%M;var W=O[G];if(!W.disabled){f(W.key);return}}},h=function(y){var O=y.which;if(!u.value){[ve.DOWN,ve.SPACE,ve.ENTER].includes(O)&&(c(!0),y.preventDefault());return}switch(O){case ve.UP:S(-1),y.preventDefault();break;case ve.DOWN:S(1),y.preventDefault();break;case ve.ESC:c(!1);break;case ve.SPACE:case ve.ENTER:v.value!==null&&e.onTabClick(v.value,y);break}},N=ee(function(){return"".concat(e.id,"-more-popup")}),P=ee(function(){return v.value!==null?"".concat(N.value,"-").concat(v.value):null}),z=function(y,O){y.preventDefault(),y.stopPropagation(),e.editable.onEdit("remove",{key:O,event:y})};return Ze(function(){we(v,function(){var C=document.getElementById(P.value);C&&C.scrollIntoView&&C.scrollIntoView(!1)},{flush:"post",immediate:!0})}),we(u,function(){u.value||f(null)}),function(){var C,y=e.prefixCls,O=e.id,G=e.tabs,M=e.locale,k=e.mobile,W=e.moreIcon,V=W===void 0?((C=n.moreIcon)===null||C===void 0?void 0:C.call(n))||r(oa,null,null):W,F=e.moreTransitionName,K=e.editable,ie=e.tabBarGutter,g=e.rtl,s=e.onTabClick,m="".concat(y,"-dropdown"),_=M==null?void 0:M.dropdownAriaLabel,$=T({},g?"marginRight":"marginLeft",ie);G.length||($.visibility="hidden",$.order=1);var L=Ne(T({},"".concat(m,"-rtl"),g)),E=k?null:r(sa,{prefixCls:m,trigger:["hover"],visible:u.value,transitionName:F,onVisibleChange:c,overlayClassName:L,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return r(ua,{onClick:function(A){var U=A.key,ae=A.domEvent;s(U,ae),c(!1)},id:N.value,tabindex:-1,role:"listbox","aria-activedescendant":P.value,selectedKeys:[v.value],"aria-label":_!==void 0?_:"expanded dropdown"},{default:function(){return[G.map(function(A){var U,ae,le=K&&A.closable!==!1&&!A.disabled;return r(ca,{key:A.key,id:"".concat(N.value,"-").concat(A.key),role:"option","aria-controls":O&&"".concat(O,"-panel-").concat(A.key),disabled:A.disabled},{default:function(){return[r("span",null,[typeof A.tab=="function"?A.tab():A.tab]),le&&r("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(m,"-menu-item-remove"),onClick:function(oe){oe.stopPropagation(),z(oe,A.key)}},[((U=A.closeIcon)===null||U===void 0?void 0:U.call(A))||((ae=K.removeIcon)===null||ae===void 0?void 0:ae.call(K))||"\xD7"])]}})})]}})},default:function(){return r("button",{type:"button",class:"".concat(y,"-nav-more"),style:$,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":N.value,id:"".concat(O,"-more"),"aria-expanded":u.value,onKeydown:h},[V])}});return r("div",{class:Ne("".concat(y,"-nav-operations"),a.class),style:a.style},[E,r(Mt,{prefixCls:y,locale:M,editable:K},null)])}}});var Kt=Symbol("tabsContextKey"),Dt=function(e){Ut(Kt,e)},Wt=function(){return qt(Kt,{tabs:w([]),prefixCls:w()})};de({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var a=t.slots;return Dt(Yt(e)),function(){var n;return(n=a.default)===null||n===void 0?void 0:n.call(a)}}});var Ia=.1,_t=.01,Ye=20,Pt=Math.pow(.995,Ye);function ka(i,e){var t=Y(),a=D(t,2),n=a[0],l=a[1],o=Y(0),u=D(o,2),c=u[0],d=u[1],b=Y(0),v=D(b,2),f=v[0],S=v[1],h=Y(),N=D(h,2),P=N[0],z=N[1],C=w();function y(g){var s=g.touches[0],m=s.screenX,_=s.screenY;l({x:m,y:_}),clearInterval(C.value)}function O(g){if(!!n.value){g.preventDefault();var s=g.touches[0],m=s.screenX,_=s.screenY,$=m-n.value.x,L=_-n.value.y;e($,L),l({x:m,y:_});var E=Date.now();S(E-c.value),d(E),z({x:$,y:L})}}function G(){if(!!n.value){var g=P.value;if(l(null),z(null),g){var s=g.x/f.value,m=g.y/f.value,_=Math.abs(s),$=Math.abs(m);if(Math.max(_,$)<Ia)return;var L=s,E=m;C.value=setInterval(function(){if(Math.abs(L)<_t&&Math.abs(E)<_t){clearInterval(C.value);return}L*=Pt,E*=Pt,e(L*Ye,E*Ye)},Ye)}}}var M=w();function k(g){var s=g.deltaX,m=g.deltaY,_=0,$=Math.abs(s),L=Math.abs(m);$===L?_=M.value==="x"?s:m:$>L?(_=s,M.value="x"):(_=m,M.value="y"),e(-_,-_)&&g.preventDefault()}var W=w({onTouchStart:y,onTouchMove:O,onTouchEnd:G,onWheel:k});function V(g){W.value.onTouchStart(g)}function F(g){W.value.onTouchMove(g)}function K(g){W.value.onTouchEnd(g)}function ie(g){W.value.onWheel(g)}Ze(function(){var g,s;document.addEventListener("touchmove",F,{passive:!1}),document.addEventListener("touchend",K,{passive:!1}),(g=i.value)===null||g===void 0||g.addEventListener("touchstart",V,{passive:!1}),(s=i.value)===null||s===void 0||s.addEventListener("wheel",ie,{passive:!1})}),lt(function(){document.removeEventListener("touchmove",F),document.removeEventListener("touchend",K)})}function It(i,e){var t=w(i);function a(n){var l=typeof n=="function"?n(t.value):n;l!==t.value&&e(l,t.value),t.value=l}return[t,a]}var Ea=function(){var e=w(new Map),t=function(n){return function(l){e.value.set(n,l)}};return Xt(function(){e.value=new Map}),[t,e]};const Ba=Ea;function Aa(i,e,t,a){if(!St(i))return i;e=Lt(e,i);for(var n=-1,l=e.length,o=l-1,u=i;u!=null&&++n<l;){var c=da(e[n]),d=t;if(c==="__proto__"||c==="constructor"||c==="prototype")return i;if(n!=o){var b=u[c];d=a?a(b,c,u):void 0,d===void 0&&(d=St(b)?b:ra(e[n+1])?[]:{})}fa(u,c,d),u=u[c]}return i}function Ra(i,e,t){for(var a=-1,n=e.length,l={};++a<n;){var o=e[a],u=ba(i,o);t(u,o)&&Aa(l,Lt(o,i),u)}return l}function wa(i,e){return Ra(i,e,function(t,a){return ya(i,a)})}var Na=ha(function(i,e){return i==null?{}:wa(i,e)});const Ft=Na;var kt={width:0,height:0,left:0,top:0,right:0},Oa=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:ge.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}};const Et=de({name:"TabNavList",inheritAttrs:!1,props:Oa(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var a=t.attrs,n=t.slots,l=Wt(),o=l.tabs,u=l.prefixCls,c=w(),d=w(),b=w(),v=w(),f=Ba(),S=D(f,2),h=S[0],N=S[1],P=ee(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=It(0,function(x,I){P.value&&e.onTabScroll&&e.onTabScroll({direction:x>I?"left":"right"})}),C=D(z,2),y=C[0],O=C[1],G=It(0,function(x,I){!P.value&&e.onTabScroll&&e.onTabScroll({direction:x>I?"top":"bottom"})}),M=D(G,2),k=M[0],W=M[1],V=Y(0),F=D(V,2),K=F[0],ie=F[1],g=Y(0),s=D(g,2),m=s[0],_=s[1],$=Y(null),L=D($,2),E=L[0],fe=L[1],be=Y(null),A=D(be,2),U=A[0],ae=A[1],le=Y(0),B=D(le,2),_e=B[0],oe=B[1],X=Y(0),Z=D(X,2),Oe=Z[0],Le=Z[1],Pe=xa(new Map),Ie=D(Pe,2),De=Ie[0],ke=Ie[1],Me=Ca(o,De),Ee=ee(function(){return"".concat(u.value,"-nav-operations-hidden")}),j=w(0),Se=w(0);Xe(function(){P.value?e.rtl?(j.value=0,Se.value=Math.max(0,K.value-E.value)):(j.value=Math.min(0,E.value-K.value),Se.value=0):(j.value=Math.min(0,U.value-m.value),Se.value=0)});var xe=function(I){return I<j.value?j.value:I>Se.value?Se.value:I},We=w(),Fe=Y(),ut=D(Fe,2),Je=ut[0],ct=ut[1],Qe=function(){ct(Date.now())},et=function(){clearTimeout(We.value)},st=function(I,p){I(function(H){var R=xe(H+p);return R})};ka(c,function(x,I){if(P.value){if(E.value>=K.value)return!1;st(O,x)}else{if(U.value>=m.value)return!1;st(W,I)}return et(),Qe(),!0}),we(Je,function(){et(),Je.value&&(We.value=setTimeout(function(){ct(0)},100))});var vt=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,p=Me.value.get(I)||{width:0,height:0,left:0,right:0,top:0};if(P.value){var H=y.value;e.rtl?p.right<y.value?H=p.right:p.right+p.width>y.value+E.value&&(H=p.right+p.width-E.value):p.left<-y.value?H=-p.left:p.left+p.width>-y.value+E.value&&(H=-(p.left+p.width-E.value)),W(0),O(xe(H))}else{var R=k.value;p.top<-k.value?R=-p.top:p.top+p.height>-k.value+U.value&&(R=-(p.top+p.height-U.value)),O(0),W(xe(R))}},tt=w(0),at=w(0);Xe(function(){var x,I,p,H,R,J,Q,Be=Me.value;["top","bottom"].includes(e.tabPosition)?(I="width",R=E.value,J=K.value,Q=_e.value,p=e.rtl?"right":"left",H=Math.abs(y.value)):(I="height",R=U.value,J=K.value,Q=Oe.value,p="top",H=-k.value);var ne=R;J+Q>R&&J<R&&(ne=R-Q);var ye=o.value;if(!ye.length){var he;return he=[0,0],tt.value=he[0],at.value=he[1],he}for(var Ae=ye.length,q=Ae,ue=0;ue<Ae;ue+=1){var ce=Be.get(ye[ue].key)||kt;if(ce[p]+ce[I]>H+ne){q=ue-1;break}}for(var me=0,re=Ae-1;re>=0;re-=1){var Re=Be.get(ye[re].key)||kt;if(Re[p]<H){me=re+1;break}}return x=[me,q],tt.value=x[0],at.value=x[1],x});var nt=function(){var I,p,H,R,J,Q=((I=c.value)===null||I===void 0?void 0:I.offsetWidth)||0,Be=((p=c.value)===null||p===void 0?void 0:p.offsetHeight)||0,ne=((H=v.value)===null||H===void 0?void 0:H.$el)||{},ye=ne.offsetWidth||0,he=ne.offsetHeight||0;fe(Q),ae(Be),oe(ye),Le(he);var Ae=(((R=d.value)===null||R===void 0?void 0:R.offsetWidth)||0)-ye,q=(((J=d.value)===null||J===void 0?void 0:J.offsetHeight)||0)-he;ie(Ae),_(q),ke(function(){var ue=new Map;return o.value.forEach(function(ce){var me=ce.key,re,Re=N.value.get(me),Ce=((re=Re)===null||re===void 0?void 0:re.$el)||Re;Ce&&ue.set(me,{width:Ce.offsetWidth,height:Ce.offsetHeight,left:Ce.offsetLeft,top:Ce.offsetTop})}),ue})},dt=ee(function(){return[].concat(gt(o.value.slice(0,tt.value)),gt(o.value.slice(at.value+1)))}),jt=Y(),ft=D(jt,2),zt=ft[0],Ht=ft[1],Te=ee(function(){return Me.value.get(e.activeKey)}),bt=w(),yt=function(){Ve.cancel(bt.value)};we([Te,P,function(){return e.rtl}],function(){var x={};Te.value&&(P.value?(e.rtl?x.right=ze(Te.value.right):x.left=ze(Te.value.left),x.width=ze(Te.value.width)):(x.top=ze(Te.value.top),x.height=ze(Te.value.height))),yt(),bt.value=Ve(function(){Ht(x)})}),we([function(){return e.activeKey},Te,Me,P],function(){vt()},{flush:"post"}),we([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return o.value}],function(){nt()},{flush:"post"});var rt=function(I){var p=I.position,H=I.prefixCls,R=I.extra;if(!R)return null;var J=R==null?void 0:R({position:p});return J?r("div",{class:"".concat(H,"-extra-content")},[J]):null};return lt(function(){et(),yt()}),function(){var x,I=e.id,p=e.animated,H=e.activeKey,R=e.rtl,J=e.editable,Q=e.locale,Be=e.tabPosition,ne=e.tabBarGutter,ye=e.onTabClick,he=a.class,Ae=a.style,q=u.value,ue=!!dt.value.length,ce="".concat(q,"-nav-wrap"),me,re,Re,Ce;P.value?R?(re=y.value>0,me=y.value+E.value<K.value):(me=y.value<0,re=-y.value+E.value<K.value):(Re=k.value<0,Ce=-k.value+U.value<m.value);var Ue={};Be==="top"||Be==="bottom"?Ue[R?"marginRight":"marginLeft"]=typeof ne=="number"?"".concat(ne,"px"):ne:Ue.marginTop=typeof ne=="number"?"".concat(ne,"px"):ne;var ht=o.value.map(function($e,mt){var je=$e.key;return r(Ta,{id:I,prefixCls:q,key:je,tab:$e,style:mt===0?void 0:Ue,closable:$e.closable,editable:J,active:je===H,removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:h(je),onClick:function(Vt){ye(je,Vt)},onFocus:function(){vt(je),Qe(),c.value&&(R||(c.value.scrollLeft=0),c.value.scrollTop=0)}},n)});return r("div",{role:"tablist",class:Ne("".concat(q,"-nav"),he),style:Ae,onKeydown:function(){Qe()}},[r(rt,{position:"left",prefixCls:q,extra:n.leftExtra},null),r(xt,{onResize:nt},{default:function(){return[r("div",{class:Ne(ce,(x={},T(x,"".concat(ce,"-ping-left"),me),T(x,"".concat(ce,"-ping-right"),re),T(x,"".concat(ce,"-ping-top"),Re),T(x,"".concat(ce,"-ping-bottom"),Ce),x)),ref:c},[r(xt,{onResize:nt},{default:function(){return[r("div",{ref:d,class:"".concat(q,"-nav-list"),style:{transform:"translate(".concat(y.value,"px, ").concat(k.value,"px)"),transition:Je.value?"none":void 0}},[ht,r(Mt,{ref:v,prefixCls:q,locale:Q,editable:J,style:te(te({},ht.length===0?void 0:Ue),{visibility:ue?"hidden":null})},null),r("div",{class:Ne("".concat(q,"-ink-bar"),T({},"".concat(q,"-ink-bar-animated"),p.inkBar)),style:zt.value},null)])]}})])]}}),r(Pa,pe(pe({},e),{},{removeAriaLabel:Q==null?void 0:Q.removeAriaLabel,ref:b,prefixCls:q,tabs:dt.value,class:!ue&&Ee.value}),Ft(n,["moreIcon"])),r(rt,{position:"right",prefixCls:q,extra:n.rightExtra},null),r(rt,{position:"right",prefixCls:q,extra:n.tabBarExtraContent},null)])}}}),La=de({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Wt(),a=t.tabs,n=t.prefixCls;return function(){var l=e.id,o=e.activeKey,u=e.animated,c=e.tabPosition,d=e.rtl,b=e.destroyInactiveTabPane,v=u.tabPane,f=n.value,S=a.value.findIndex(function(h){return h.key===o});return r("div",{class:"".concat(f,"-content-holder")},[r("div",{class:["".concat(f,"-content"),"".concat(f,"-content-").concat(c),T({},"".concat(f,"-content-animated"),v)],style:S&&v?T({},d?"marginRight":"marginLeft","-".concat(S,"00%")):null},[a.value.map(function(h){return ia(h.node,{key:h.key,prefixCls:f,tabKey:h.key,id:l,animated:v,active:h.key===o,destroyInactiveTabPane:b})})])])}}});var Ma={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};const Ka=Ma;function Bt(i){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},a=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),a.forEach(function(n){Da(i,n,t[n])})}return i}function Da(i,e,t){return e in i?Object.defineProperty(i,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):i[e]=t,i}var ot=function(e,t){var a=Bt({},e,t.attrs);return r(Zt,Bt({},a,{icon:Ka}),null)};ot.displayName="PlusOutlined";ot.inheritAttrs=!1;const Wa=ot;var At=0,$t=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:ge.any}};function Fa(i){return i.map(function(e){if(Jt(e)){for(var t=te({},e.props||{}),a=0,n=Object.entries(t);a<n.length;a++){var l=D(n[a],2),o=l[0],u=l[1];delete t[o],t[Qt(o)]=u}var c=e.children||{},d=e.key!==void 0?e.key:void 0,b=t.tab,v=b===void 0?c.tab:b,f=t.disabled,S=t.forceRender,h=t.closable,N=t.animated,P=t.active,z=t.destroyInactiveTabPane;return te(te({key:d},t),{node:e,closeIcon:c.closeIcon,tab:v,disabled:f===""||f,forceRender:S===""||S,closable:h===""||h,animated:N===""||N,active:P===""||P,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var $a=de({name:"InternalTabs",inheritAttrs:!1,props:te(te({},Ot($t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var a=t.attrs,n=t.slots;qe(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),qe(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),qe(n.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var l=wt("tabs",e),o=l.prefixCls,u=l.direction,c=l.size,d=l.rootPrefixCls,b=ee(function(){return u.value==="rtl"}),v=ee(function(){var s=e.animated,m=e.tabPosition;return s===!1||["left","right"].includes(m)?{inkBar:!1,tabPane:!1}:s===!0?{inkBar:!0,tabPane:!0}:te({inkBar:!0,tabPane:!1},ea(s)==="object"?s:{})}),f=Y(!1),S=D(f,2),h=S[0],N=S[1];Ze(function(){N(va())});var P=Tt(function(){var s;return(s=e.tabs[0])===null||s===void 0?void 0:s.key},{value:ee(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=D(P,2),C=z[0],y=z[1],O=Y(function(){return e.tabs.findIndex(function(s){return s.key===C.value})}),G=D(O,2),M=G[0],k=G[1];Xe(function(){var s,m=e.tabs.findIndex(function(_){return _.key===C.value});m===-1&&(m=Math.max(0,Math.min(M.value,e.tabs.length-1)),y((s=e.tabs[m])===null||s===void 0?void 0:s.key)),k(m)});var W=Tt(null,{value:ee(function(){return e.id})}),V=D(W,2),F=V[0],K=V[1],ie=ee(function(){return h.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});Ze(function(){e.id||(K("rc-tabs-".concat(At)),At+=1)});var g=function(m,_){var $,L;($=e.onTabClick)===null||$===void 0||$.call(e,m,_);var E=m!==C.value;y(m),E&&((L=e.onChange)===null||L===void 0||L.call(e,m))};return Dt({tabs:ee(function(){return e.tabs}),prefixCls:o}),function(){var s,m=e.id,_=e.type,$=e.tabBarGutter,L=e.tabBarStyle,E=e.locale,fe=e.destroyInactiveTabPane,be=e.renderTabBar,A=be===void 0?n.renderTabBar:be,U=e.onTabScroll,ae=e.hideAdd,le=e.centered,B={id:F.value,activeKey:C.value,animated:v.value,tabPosition:ie.value,rtl:b.value,mobile:h.value},_e;_==="editable-card"&&(_e={onEdit:function(Le,Pe){var Ie=Pe.key,De=Pe.event,ke;(ke=e.onEdit)===null||ke===void 0||ke.call(e,Le==="add"?De:Ie,Le)},removeIcon:function(){return r(ta,null,null)},addIcon:n.addIcon?n.addIcon:function(){return r(Wa,null,null)},showAdd:ae!==!0});var oe,X=te(te({},B),{moreTransitionName:"".concat(d.value,"-slide-up"),editable:_e,locale:E,tabBarGutter:$,onTabClick:g,onTabScroll:U,style:L});A?oe=A(te(te({},X),{DefaultTabBar:Et})):oe=r(Et,X,Ft(n,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var Z=o.value;return r("div",pe(pe({},a),{},{id:m,class:Ne(Z,"".concat(Z,"-").concat(ie.value),(s={},T(s,"".concat(Z,"-").concat(c.value),c.value),T(s,"".concat(Z,"-card"),["card","editable-card"].includes(_)),T(s,"".concat(Z,"-editable-card"),_==="editable-card"),T(s,"".concat(Z,"-centered"),le),T(s,"".concat(Z,"-mobile"),h.value),T(s,"".concat(Z,"-editable"),_==="editable-card"),T(s,"".concat(Z,"-rtl"),b.value),s),a.class)}),[oe,r(La,pe(pe({destroyInactiveTabPane:fe},B),{},{animated:v.value}),null)])}}});const Ke=de({name:"ATabs",inheritAttrs:!1,props:Ot($t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var a=t.attrs,n=t.slots,l=t.emit,o=function(c){l("update:activeKey",c),l("change",c)};return function(){var u,c=Fa(Rt((u=n.default)===null||u===void 0?void 0:u.call(n)));return r($a,pe(pe(pe({},la(e,["onUpdate:activeKey"])),a),{},{onChange:o,tabs:c}),n)}}});var ja=function(){return{tab:ge.any,disabled:{type:Boolean},forceRender:{type:Boolean},closable:{type:Boolean},animated:{type:Boolean},active:{type:Boolean},destroyInactiveTabPane:{type:Boolean},prefixCls:{type:String},tabKey:{type:[String,Number]},id:{type:String}}};const it=de({name:"ATabPane",inheritAttrs:!1,__ANT_TAB_PANE:!0,props:ja(),slots:["closeIcon","tab"],setup:function(e,t){var a=t.attrs,n=t.slots,l=w(e.forceRender);we([function(){return e.active},function(){return e.destroyInactiveTabPane}],function(){e.active?l.value=!0:e.destroyInactiveTabPane&&(l.value=!1)},{immediate:!0});var o=ee(function(){return e.active?{}:e.animated?{visibility:"hidden",height:0,overflowY:"hidden"}:{display:"none"}});return function(){var u,c=e.prefixCls,d=e.forceRender,b=e.id,v=e.active,f=e.tabKey;return r("div",{id:b&&"".concat(b,"-panel-").concat(f),role:"tabpanel",tabindex:v?0:-1,"aria-labelledby":b&&"".concat(b,"-tab-").concat(f),"aria-hidden":!v,style:[o.value,a.style],class:["".concat(c,"-tabpane"),v&&"".concat(c,"-tabpane-active"),a.class]},[(v||l.value||d)&&((u=n.default)===null||u===void 0?void 0:u.call(n))])}}});Ke.TabPane=it;Ke.install=function(i){return i.component(Ke.name,Ke),i.component(it.name,it),i};const Ge=Nt(ma),se=Nt(ga);var za=Ke.TabPane,Ha=function(){return{prefixCls:String,title:ge.any,extra:ge.any,bordered:{type:Boolean,default:!0},bodyStyle:{type:Object,default:void 0},headStyle:{type:Object,default:void 0},loading:{type:Boolean,default:!1},hoverable:{type:Boolean,default:!1},type:{type:String},size:{type:String},actions:ge.any,tabList:{type:Array},tabBarExtraContent:ge.any,activeTabKey:String,defaultActiveTabKey:String,cover:ge.any,onTabChange:{type:Function}}},Ga=de({name:"ACard",props:Ha(),slots:["title","extra","tabBarExtraContent","actions","cover","customTab"],setup:function(e,t){var a=t.slots,n=wt("card",e),l=n.prefixCls,o=n.direction,u=n.size,c=function(f){var S=f.map(function(h,N){return pt(h)&&!na(h)||!pt(h)?r("li",{style:{width:"".concat(100/f.length,"%")},key:"action-".concat(N)},[r("span",null,[h])]):null});return S},d=function(f){var S;(S=e.onTabChange)===null||S===void 0||S.call(e,f)},b=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],S;return f.forEach(function(h){h&&pa(h.type)&&h.type.__ANT_CARD_GRID&&(S=!0)}),S};return function(){var v,f,S,h,N,P,z,C,y=e.headStyle,O=y===void 0?{}:y,G=e.bodyStyle,M=G===void 0?{}:G,k=e.loading,W=e.bordered,V=W===void 0?!0:W,F=e.type,K=e.tabList,ie=e.hoverable,g=e.activeTabKey,s=e.defaultActiveTabKey,m=e.tabBarExtraContent,_=m===void 0?He((S=a.tabBarExtraContent)===null||S===void 0?void 0:S.call(a)):m,$=e.title,L=$===void 0?He((h=a.title)===null||h===void 0?void 0:h.call(a)):$,E=e.extra,fe=E===void 0?He((N=a.extra)===null||N===void 0?void 0:N.call(a)):E,be=e.actions,A=be===void 0?He((P=a.actions)===null||P===void 0?void 0:P.call(a)):be,U=e.cover,ae=U===void 0?He((z=a.cover)===null||z===void 0?void 0:z.call(a)):U,le=Rt((C=a.default)===null||C===void 0?void 0:C.call(a)),B=l.value,_e=(v={},T(v,"".concat(B),!0),T(v,"".concat(B,"-loading"),k),T(v,"".concat(B,"-bordered"),V),T(v,"".concat(B,"-hoverable"),!!ie),T(v,"".concat(B,"-contain-grid"),b(le)),T(v,"".concat(B,"-contain-tabs"),K&&K.length),T(v,"".concat(B,"-").concat(u.value),u.value),T(v,"".concat(B,"-type-").concat(F),!!F),T(v,"".concat(B,"-rtl"),o.value==="rtl"),v),oe=M.padding===0||M.padding==="0px"?{padding:"24px"}:void 0,X=r("div",{class:"".concat(B,"-loading-block")},null),Z=r("div",{class:"".concat(B,"-loading-content"),style:oe},[r(Ge,{gutter:8},{default:function(){return[r(se,{span:22},{default:function(){return[X]}})]}}),r(Ge,{gutter:8},{default:function(){return[r(se,{span:8},{default:function(){return[X]}}),r(se,{span:15},{default:function(){return[X]}})]}}),r(Ge,{gutter:8},{default:function(){return[r(se,{span:6},{default:function(){return[X]}}),r(se,{span:18},{default:function(){return[X]}})]}}),r(Ge,{gutter:8},{default:function(){return[r(se,{span:13},{default:function(){return[X]}}),r(se,{span:9},{default:function(){return[X]}})]}}),r(Ge,{gutter:8},{default:function(){return[r(se,{span:4},{default:function(){return[X]}}),r(se,{span:3},{default:function(){return[X]}}),r(se,{span:16},{default:function(){return[X]}})]}})]),Oe=g!==void 0,Le=(f={size:"large"},T(f,Oe?"activeKey":"defaultActiveKey",Oe?g:s),T(f,"onChange",d),T(f,"class","".concat(B,"-head-tabs")),f),Pe,Ie=K&&K.length?r(Ke,Le,{default:function(){return[K.map(function(j){var Se=j.tab,xe=j.slots,We=xe==null?void 0:xe.tab;qe(!xe,"Card","tabList slots is deprecated, Please use `customTab` instead.");var Fe=Se!==void 0?Se:a[We]?a[We](j):null;return Fe=aa(a,"customTab",j,function(){return[Fe]}),r(za,{tab:Fe,key:j.key,disabled:j.disabled},null)})]},rightExtra:_?function(){return _}:null}):null;(L||fe||Ie)&&(Pe=r("div",{class:"".concat(B,"-head"),style:O},[r("div",{class:"".concat(B,"-head-wrapper")},[L&&r("div",{class:"".concat(B,"-head-title")},[L]),fe&&r("div",{class:"".concat(B,"-extra")},[fe])]),Ie]));var De=ae?r("div",{class:"".concat(B,"-cover")},[ae]):null,ke=r("div",{class:"".concat(B,"-body"),style:M},[k?Z:le]),Me=A&&A.length?r("ul",{class:"".concat(B,"-actions")},[c(A)]):null;return r("div",{class:_e,ref:"cardContainerRef"},[Pe,De,le&&le.length?ke:null,Me])}}});const Ja=Ga;export{Ja as C,Wa as P,Ge as R,se as a,Ba as u};
