import{u as v}from"./usePagingList.e11e5447.js";import{r as c,B as x}from"./request.a8a5b2bf.js";import{h as k}from"./moment.9709ab41.js";import{a as d,o as l,b as I,d as t,c as o,e,w as i,am as D,f as P,al as z,m as B}from"./index.e112588d.js";import{P as T}from"./index.7e088f9f.js";import{a as V}from"./index.653ee793.js";import{S as b}from"./index.19afbefd.js";import{T as q}from"./index.74f3a4c9.js";import{P as N}from"./index.fe63c723.js";import"./index.0258606a.js";import"./Modal.ddba711f.js";import"./index.a1cd18ff.js";import"./useDestroyed.20be08b6.js";import"./index.ae33a215.js";import"./debounce.5f049df0.js";import"./isSymbol.c05f06a8.js";import"./useFlexGapSupport.748407ec.js";import"./useState.68205e7b.js";import"./FilterFilled.1e36c108.js";const Y="server/statement_info/",E=n=>c({method:"GET",url:Y,params:n}),H=n=>c({method:"GET",url:"server/statement_url/",params:n}),L={class:"page-wrap"},M={class:"page-head"},A={class:"page-head"},G=t("div",{class:"fl"},null,-1),O={class:"fr"},R={class:"page-body"},K={class:"page-foot"},Q=t("div",{class:"fl"},null,-1),$={class:"fr"},ge={__name:"Reconciliation",setup(n){const{listData:m,loading:p,total:_,page:h,size:u,selectedKeys:j,queryValues:F,handleChangeSelect:J,handleChangeQueryValues:g,handleChangePage:f,handleChangeSize:w}=v({queryListAction:E});d(!1),d({});const C=a=>{g({search:a})},y=a=>{H({operators_id:a.operators_id_fk,statement_date:a.statement_datetime}).then(s=>{if(s.code==200)return window.location.href=s.pdf_download_url;B.error(s.msg)})};return(a,s)=>(l(),I("div",L,[t("div",M,[o(e(T),{title:"Statement Management"})]),t("div",A,[G,t("div",O,[o(e(V),{type:"text",onSearch:C,allowClear:""})])]),t("div",R,[o(e(q),{"row-key":"id",bordered:"","data-source":e(m),loading:e(p),pagination:!1,columns:[{title:"Statement ID",dataIndex:"statement_id"},{title:"Statement Datetime",dataIndex:"statement_datetime",align:"center",customRender:({text:r})=>e(k)(r).utc().format("YYYY-MM-DD HH:mm:ss")},{title:"Operators",dataIndex:"operators_id_fk",align:"center"},{title:"Amount",dataIndex:"statement_total_price",align:"center"},{title:"Total Capacity",dataIndex:"statement_charge_capacity",width:150,align:"center"},{title:"Operate",dataIndex:"action",width:250,align:"center"}]},{bodyCell:i(({column:r,record:S})=>[r.dataIndex==="action"?(l(),D(e(b),{key:0},{default:i(()=>[o(e(x),{type:"primary",onClick:U=>y(S)},{default:i(()=>[P("Download")]),_:2},1032,["onClick"])]),_:2},1024)):z("",!0)]),_:1},8,["data-source","loading","columns"])]),t("div",K,[Q,t("div",$,[o(e(N),{current:e(h),"page-size":e(u),total:e(_),onChange:e(f),onShowSizeChange:e(w)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])])]))}};export{ge as default};