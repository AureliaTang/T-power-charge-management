import{u as v}from"./usePagingList.6da1d0b3.js";import{r as c,B as x}from"./request.62baea1e.js";import{h as k}from"./moment.9709ab41.js";import{a as d,o as l,b as I,d as t,c as a,e,w as i,am as D,f as P,al as z,m as B}from"./index.c40ba44a.js";import{P as T}from"./index.d9dc9e4e.js";import{a as V}from"./index.ad22d2db.js";import{S as b}from"./index.a0603571.js";import{T as q}from"./index.c3fa6db2.js";import{P as N}from"./index.67f8f3a5.js";import"./index.1816c805.js";import"./Modal.e9d92ecd.js";import"./index.e65bc6a3.js";import"./useDestroyed.b4b7294a.js";import"./index.c1737657.js";import"./debounce.48f4b242.js";import"./isSymbol.e344bab7.js";import"./useFlexGapSupport.244e6824.js";import"./useState.0374a5c3.js";import"./FilterFilled.90ebc0b2.js";const Y="server/statement_info/",E=o=>c({method:"GET",url:Y,params:o}),H=o=>c({method:"GET",url:"server/statement_url/",params:o}),L={class:"page-wrap"},M={class:"page-head"},A={class:"page-head"},G=t("div",{class:"fl"},null,-1),O={class:"fr"},R={class:"page-body"},K={class:"page-foot"},Q=t("div",{class:"fl"},null,-1),$={class:"fr"},ge={__name:"Reconciliation",setup(o){const{listData:m,loading:p,total:_,page:h,size:u,selectedKeys:j,queryValues:F,handleChangeSelect:J,handleChangeQueryValues:g,handleChangePage:f,handleChangeSize:w}=v({queryListAction:E});d(!1),d({});const C=n=>{g({search:n})},y=n=>{H({operators_id:n.statement_id}).then(s=>{if(s.code==200)return window.location.href=s.pdf_download_url;B.error(s.msg)})};return(n,s)=>(l(),I("div",L,[t("div",M,[a(e(T),{title:"Statement Management"})]),t("div",A,[G,t("div",O,[a(e(V),{type:"text",onSearch:C,allowClear:""})])]),t("div",R,[a(e(q),{"row-key":"id",bordered:"","data-source":e(m),loading:e(p),pagination:!1,columns:[{title:"Statement ID",dataIndex:"statement_id"},{title:"Statement Datetime",dataIndex:"statement_datetime",align:"center",customRender:({text:r})=>e(k)(r).utc().format("YYYY-MM-DD HH:mm:ss")},{title:"Operators",dataIndex:"operators_id_fk",align:"center"},{title:"Amount",dataIndex:"statement_total_price",align:"center"},{title:"Total Capacity",dataIndex:"statement_charge_capacity",width:150,align:"center"},{title:"Operate",dataIndex:"action",width:250,align:"center"}]},{bodyCell:i(({column:r,record:S})=>[r.dataIndex==="action"?(l(),D(e(b),{key:0},{default:i(()=>[a(e(x),{type:"primary",onClick:U=>y(S)},{default:i(()=>[P("Download")]),_:2},1032,["onClick"])]),_:2},1024)):z("",!0)]),_:1},8,["data-source","loading","columns"])]),t("div",K,[Q,t("div",$,[a(e(N),{current:e(h),"page-size":e(u),total:e(_),onChange:e(f),onShowSizeChange:e(w)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])])]))}};export{ge as default};