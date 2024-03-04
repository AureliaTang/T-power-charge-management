import{u as v}from"./usePagingList.cf8e154d.js";import{r as c,B as x}from"./request.f6131b86.js";import{h as k}from"./moment.9709ab41.js";import{a as d,o as l,b as I,d as t,c as o,e,w as i,am as D,f as P,al as z,m as B}from"./index.2280ec3a.js";import{P as T}from"./index.60627ea8.js";import{a as V}from"./index.e8b0d794.js";import{S as b}from"./index.cb967652.js";import{T as q}from"./index.d3d777b6.js";import{P as N}from"./index.4e9feb47.js";import"./index.8bc2d4c8.js";import"./Modal.e1ebeb99.js";import"./shallowequal.b569bcb1.js";import"./pickAttrs.dc97a78a.js";import"./useDestroyed.920d59f3.js";import"./index.7e849802.js";import"./index.b859e965.js";import"./debounce.95684c51.js";import"./isSymbol.b7e4289f.js";import"./useFlexGapSupport.ff982a16.js";import"./useState.91bfb08f.js";import"./FilterFilled.138365ee.js";import"./index.9acfb3cb.js";const Y="server/statement_info/",E=n=>c({method:"GET",url:Y,params:n}),H=n=>c({method:"GET",url:"server/statement_url/",params:n}),L={class:"page-wrap"},M={class:"page-head"},A={class:"page-head"},G=t("div",{class:"fl"},null,-1),O={class:"fr"},R={class:"page-body"},K={class:"page-foot"},Q=t("div",{class:"fl"},null,-1),$={class:"fr"},Ce={__name:"Reconciliation",setup(n){const{listData:m,loading:p,total:_,page:h,size:u,selectedKeys:j,queryValues:F,handleChangeSelect:J,handleChangeQueryValues:g,handleChangePage:f,handleChangeSize:w}=v({queryListAction:E});d(!1),d({});const C=a=>{g({search:a})},y=a=>{H({operators_id:a.operators_id_fk,statement_date:a.statement_datetime}).then(r=>{if(r.code==200)return window.location.href=r.pdf_download_url;B.error(r.msg)})};return(a,r)=>(l(),I("div",L,[t("div",M,[o(e(T),{title:"Statement Management"})]),t("div",A,[G,t("div",O,[o(e(V),{type:"text",onSearch:C,allowClear:""})])]),t("div",R,[o(e(q),{"row-key":"id",bordered:"","data-source":e(m),loading:e(p),pagination:!1,columns:[{title:"Statement ID",dataIndex:"statement_id"},{title:"Statement Datetime",dataIndex:"statement_datetime",align:"center",customRender:({text:s})=>e(k)(s).utc().format("YYYY-MM-DD HH:mm:ss")},{title:"Operators",dataIndex:"operators_id_fk",align:"center"},{title:"Amount",dataIndex:"statement_total_price",align:"center"},{title:"Total Capacity",dataIndex:"statement_charge_capacity",width:150,align:"center"},{title:"Operate",dataIndex:"action",width:250,align:"center"}]},{bodyCell:i(({column:s,record:S})=>[s.dataIndex==="action"?(l(),D(e(b),{key:0},{default:i(()=>[o(e(x),{type:"primary",onClick:U=>y(S)},{default:i(()=>[P("Download")]),_:2},1032,["onClick"])]),_:2},1024)):z("",!0)]),_:1},8,["data-source","loading","columns"])]),t("div",K,[Q,t("div",$,[o(e(N),{current:e(h),"page-size":e(u),total:e(_),onChange:e(f),onShowSizeChange:e(w)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])])]))}};export{Ce as default};