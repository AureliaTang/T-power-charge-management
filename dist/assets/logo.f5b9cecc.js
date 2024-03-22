import{c as u,A as o,h as c}from"./index.8245d607.js";import{r as i}from"./request.6f3b4563.js";var l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};const d=l;function s(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(r){return Object.getOwnPropertyDescriptor(a,r).enumerable}))),n.forEach(function(r){h(e,r,a[r])})}return e}function h(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=function(t,a){var n=s({},t,a.attrs);return u(o,s({},n,{icon:d}),null)};m.displayName="UserOutlined";m.inheritAttrs=!1;const b=m,f=c("app-tab",{state:()=>({tabs:[]}),actions:{addTab(e){this.tabs=this.tabs.map(t=>({...t,isActive:!1})).concat([{...e,isActive:!0,isFixed:!1}])},removeTab(e){this.tabs=this.tabs.filter((t,a)=>a!==e)},changeTab(e){this.tabs=this.tabs.map((t,a)=>({...t,isActive:e===a}))}}}),I=e=>i({method:"POST",url:"/server/login/",data:e}),M=e=>i({method:"POST",url:"/server/logout/",data:e}),O=({noErrorMessage:e}={})=>i({method:"GET",url:"/server/currentuser/",noErrorMessage:e}),v=()=>localStorage.getItem("is_superuser")=="true"?new Promise((e,t)=>{e([{menuId:1,path:"/",name:"Dashboard"},{menuId:1,path:"/order",name:"Order Management"},{menuId:1,path:"/station",name:"Charging Station Management"},{menuId:2,path:"/pile",name:"Charging Pile Management",children:[{menuId:1,path:"/pile",name:"Charging Pile Management"},{menuId:2,path:"/equipment",name:"Equipment Monitoring"}]},{menuId:3,path:"/user",name:"User Management"},{menuId:4,path:"/admin",name:"Operator Management"},{menuId:6,path:"/vehicle",name:"Vehicle Management"},{menuId:7,path:"/record",name:"Price Management"},{menuId:10,path:"/reconciliation",name:"Statement Management"},{menuId:11,path:"/datePick",name:"Date Management"}])}):new Promise((e,t)=>{e([{menuId:1,path:"/",name:"Dashboard"},{menuId:1,path:"/order",name:"Order Management"},{menuId:1,path:"/station",name:"Charging Station Management"},{menuId:2,path:"/pile",name:"Charging Pile Management",children:[{menuId:1,path:"/pile",name:"Charging Pile Management"},{menuId:2,path:"/equipment",name:"Equipment Monitoring"}]},{menuId:6,path:"/vehicle",name:"Vehicle Management"},{menuId:7,path:"/record",name:"Price Management"},{menuId:10,path:"/reconciliation",name:"Statement Management"}])}),S=""+new URL("logo.c3b1a678.png",import.meta.url).href;export{b as U,S as a,v as b,M as c,I as l,O as q,f as u};
