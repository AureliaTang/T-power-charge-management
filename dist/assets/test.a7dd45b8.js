import{o as n,b as i,d as s,aa as _,af as p,f as r,ag as d,p as v,g as f}from"./index.0928075b.js";import{l as h}from"./logo.9ff4dc13.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";const x=""+new URL("search1.0ea19b02.png",import.meta.url).href,m=""+new URL("start.d099d4b2.png",import.meta.url).href,g=""+new URL("stop.b556da39.png",import.meta.url).href;const b={data(){return{searchQuery:""}},methods:{search(){console.log("Performing search for:",this.searchQuery)}}},e=c=>(v("data-v-4018c483"),c=c(),f(),c),y={class:"box_12 flex-col"},w=d('<div class="nav-bar_2 flex-row" data-v-4018c483><img class="image_2" referrerpolicy="no-referrer" src="'+h+'" data-v-4018c483><span class="text_2" data-v-4018c483>Fleet\xA0Manage\xA0System</span><div class="icon_1 flex-col" data-v-4018c483></div></div><div class="section_2 flex-col" data-v-4018c483><span class="text_3" data-v-4018c483>Charge\xA0List</span></div><br data-v-4018c483><br data-v-4018c483>',4),k={class:"search flex-col"},S=e(()=>s("img",{class:"search-icon",src:x,alt:"search"},null,-1)),I=[S],P=e(()=>s("br",null,null,-1)),V={class:"box_3 flex-col"},C={class:"group_1 flex-row"},L=e(()=>s("div",{class:"text-wrapper_1 flex-col"},[s("span",{class:"text_4"},"1")],-1)),Q=e(()=>s("span",{class:"text_5"},"1000063\uFF08Pile\xA0ID\uFF09",-1)),U=e(()=>s("img",{class:"switch_1",referrerpolicy:"no-referrer",src:m},null,-1)),j=[U],B=e(()=>s("img",{class:"switch_1",referrerpolicy:"no-referrer",src:g},null,-1)),D=[B],N=d('<div class="group_2 flex-row justify-between" data-v-4018c483><div class="box_6 flex-col" data-v-4018c483></div><span class="text_6" data-v-4018c483>Online</span></div><div class="group_3 flex-row" data-v-4018c483><div class="text-group_7 flex-col" data-v-4018c483><span class="text_7" data-v-4018c483>--\xA0V</span><br data-v-4018c483><span class="text_8" data-v-4018c483>Voltage</span></div><img class="image_3" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e65ab9700a99f1496415eddfcd5cfddc7fda651173c5a60b642447f56170095" data-v-4018c483><div class="text-group_8 flex-col" data-v-4018c483><span class="text_9" data-v-4018c483>--\xA0Kw</span><br data-v-4018c483><span class="text_10" data-v-4018c483>Power</span></div><img class="image_4" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2e65ab9700a99f1496415eddfcd5cfddc7fda651173c5a60b642447f56170095" data-v-4018c483><div class="text-group_9 flex-col" data-v-4018c483><span class="text_11" data-v-4018c483>--\xA0Kwh</span><br data-v-4018c483><span class="text_12" data-v-4018c483>Capacity</span></div></div>',2);function R(c,a,K,M,l,o){return n(),i("div",y,[w,s("div",k,[_(s("input",{"onUpdate:modelValue":a[0]||(a[0]=t=>l.searchQuery=t),type:"text",placeholder:" Pile ID"},null,512),[[p,l.searchQuery]]),r("\xA0 "),s("button",{class:"custom-button",onClick:a[1]||(a[1]=(...t)=>o.search&&o.search(...t))},I)]),P,s("div",V,[s("div",C,[L,Q,r("\xA0\xA0\xA0\xA0\xA0\xA0\xA0 "),s("button",{class:"start-button",onClick:a[2]||(a[2]=()=>{})},j),r("\xA0\xA0\xA0\xA0\xA0\xA0\xA0\xA0 "),s("button",{class:"stop-button",onClick:a[3]||(a[3]=(...t)=>o.search&&o.search(...t))},D)]),N])])}const O=u(b,[["render",R],["__scopeId","data-v-4018c483"]]);export{O as default};