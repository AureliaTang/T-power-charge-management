import{u as z,_ as T}from"./ComSchemaForm.69cf1e46.js";import{u as A}from"./usePagingList.d9f7ed49.js";import{a as D,d as q,c as $,m as E}from"./station.effc7bfb.js";import{B as F,o as i,b as m,d as a,c as e,e as t,w as o,f as n,am as r,Z as M,al as Q}from"./index.55cf085f.js";import{P as H}from"./index.227eebfc.js";import{P as K}from"./Card.79b8d940.js";import{B as d}from"./request.e95454fd.js";import{a as Z}from"./index.7eced5b4.js";import{S as j}from"./index.51820f5b.js";import{T as p}from"./dayjs.b63d3b91.js";import{T as G}from"./index.015808d9.js";import{P as J}from"./index.76152c0a.js";import"./shallowequal.9bf93796.js";import"./debounce.8f05f4a2.js";import"./isSymbol.92b049d2.js";import"./treeData.11936c29.js";import"./index.790d6f1a.js";import"./pickAttrs.c337f33a.js";import"./useState.b2cd0e7b.js";/* empty css                                                                   */import"./_plugin-vue_export-helper.cdc0426e.js";import"./Modal.cd6a7cf2.js";import"./index.f2b29a9c.js";import"./Form.95d6e895.js";import"./Col.d871f895.js";import"./useFlexGapSupport.ab34fae3.js";import"./index.fe3c4aa9.js";import"./index.b1924724.js";import"./useDestroyed.6570a5e8.js";import"./index.90a5b505.js";import"./FilterFilled.810f0803.js";const R={class:"page-wrap"},U={class:"page-head"},W={class:"page-head"},X={class:"fl"},Y={class:"fr"},tt={class:"page-body"},et={class:"page-foot"},at=a("div",{class:"fl"},null,-1),ot={class:"fr"},Ft={__name:"Station",setup(it){const _=F(()=>[{name:"station_name",label:"Station Name"},{name:"station_lat",label:"Latitude of station"},{name:"station_long",label:"Longitude of station"},{name:"station_location_state",label:"State"},{name:"station_postcode",label:"Postcode"},{name:"operators_id_fk",label:"Operator ID"}]),{listData:u,loading:f,total:g,page:h,size:C,selectedKeys:nt,handleDelete:y,queryValues:st,handleChangeSelect:lt,handleChangeQueryValues:S,handleChangePage:k,handleChangeSize:b,doQueryList:v}=A({pk:"station_id",queryListAction:D,deleteOneAction:q}),{formTitle:x,formVisible:I,formValues:w,handleCreate:O,handleModify:P,handleCancel:L,handleSubmit:V}=z({pk:"station_id",createOneAction:$,modifyOneAction:E,editSuccessCallback:v}),B=s=>{S({search:s})};return(s,rt)=>(i(),m("div",R,[a("div",U,[e(t(H),{title:"Charging Station Management"})]),a("div",W,[a("div",X,[e(t(d),{type:"primary",onClick:t(O)},{default:o(()=>[e(t(K)),n("Add New Charging Station ")]),_:1},8,["onClick"])]),a("div",Y,[e(t(Z),{type:"text",onSearch:B,allowClear:""})])]),a("div",tt,[e(t(G),{"row-key":"id",bordered:"","data-source":t(u),loading:t(f),pagination:!1,columns:[{title:"Station ID",dataIndex:"station_id"},{title:"Station Name",dataIndex:"station_name"},{title:"Latitude",dataIndex:"station_lat"},{title:"Longitude",dataIndex:"station_long"},{title:"State",dataIndex:"station_location_state",width:200},{title:"Postcode",dataIndex:"station_postcode",align:"center"},{title:"Operator ID",dataIndex:"operators_id_fk",align:"center"},{title:"Operate",dataIndex:"action",width:250,align:"center"}]},{bodyCell:o(({column:c,record:l})=>[c.dataIndex==="action"?(i(),r(t(j),{key:0},{default:o(()=>[e(t(d),{type:"primary",onClick:N=>t(P)(l)},{default:o(()=>[n("modify")]),_:2},1032,["onClick"]),e(t(d),{type:"primary",danger:"",onClick:N=>t(y)(l)},{default:o(()=>[n("delete")]),_:2},1032,["onClick"])]),_:2},1024)):c.dataIndex==="status"?(i(),m(M,{key:1},[l.status===1?(i(),r(t(p),{key:0,color:"green"},{default:o(()=>[n("\u542F\u7528")]),_:1})):(i(),r(t(p),{key:1},{default:o(()=>[n("\u7981\u7528")]),_:1}))],64)):Q("",!0)]),_:1},8,["data-source","loading"])]),a("div",et,[at,a("div",ot,[e(t(J),{current:t(h),"page-size":t(C),total:t(g),onChange:t(k),onShowSizeChange:t(b)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])]),e(T,{width:800,visible:t(I),title:t(x),fields:t(_),values:t(w),onSubmit:t(V),onCancel:t(L)},null,8,["visible","title","fields","values","onSubmit","onCancel"])]))}};export{Ft as default};