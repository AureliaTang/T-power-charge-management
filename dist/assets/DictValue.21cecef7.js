import{q as A,d as F,u as P,c as q,m as I,T as M,_ as z}from"./ComSchemaForm.43d10280.js";import{u as L}from"./useNoPagingList.52079f6b.js";import{x as $,a as E,I as Q,o as i,ao as o,w as t,d as f,c as a,e,f as s,b as R,an as p,F as j}from"./index.e783c946.js";import{P as G}from"./Card.531c7c8f.js";import{B as d}from"./styleChecker.df42cde5.js";import{S as H}from"./index.c47d3d19.js";import{T as J}from"./index.c901d8bd.js";import{M as K}from"./Modal.b014ebc0.js";const U={class:"page-head"},W={class:"page-body"},oe={__name:"DictValue",props:{pid:{type:[String,Number]}},emits:["update:pid"],setup(r,{emit:y}){const b=r,h=()=>{y("update:pid",null)},g=$(()=>[{label:"\u5B57\u5178\u7F16\u7801",name:"dictCode"},{label:"\u5B57\u5178\u540D\u79F0",name:"dictValue"},{label:"\u5B57\u5178\u6392\u5E8F",name:"dictSort",type:"number"},{label:"\u662F\u5426\u9ED8\u8BA4",name:"dictDefault",type:"bool",inputProps:{trueValue:"1",falseValue:"0"}},{label:"\u5B57\u5178\u72B6\u6001",name:"status",type:"bool",inputProps:{trueValue:1,falseValue:0}}]),{listData:c,loading:k,queryValues:X,handleChangeQueryValues:C,handleRefresh:_,handleDelete:V}=L({queryListAction:A,deleteOneAction:F,isAutoQuery:!1}),u=E({}),{formTitle:v,formVisible:S,formValues:w,formSending:x,handleCreate:T,handleModify:D,handleCancel:O,handleSubmit:B}=P({createOneAction:q,modifyOneAction:I,editSuccessCallback:_,defaultFormValues:u});return Q(()=>b.pid,l=>{l?(u.value={dictType:l},C({dictTypeCode:l})):c.value=[]}),(l,Y)=>(i(),o(e(K),{width:960,title:"\u67E5\u770B\u5B57\u5178\u7EB8",visible:!!r.pid,onCancel:h,"mask-closable":!1},{default:t(()=>[f("div",U,[a(e(d),{type:"primary",onClick:e(T)},{default:t(()=>[a(e(G)),s("\u65B0\u589E\u5B57\u5178\u503C ")]),_:1},8,["onClick"])]),f("div",W,[a(e(J),{"row-key":"id",bordered:"",size:"small","data-source":e(c),loading:e(k),pagination:!1,columns:[{title:"\u5B57\u5178\u7F16\u7801",dataIndex:"dictCode",width:120},{title:"\u5B57\u5178\u540D\u79F0",dataIndex:"dictValue"},{title:"\u5B57\u5178\u6392\u5E8F",dataIndex:"dictSort",width:80,align:"center"},{title:"\u662F\u5426\u9ED8\u8BA4",key:"dictDefault",width:80,align:"center"},{title:"\u64CD\u4F5C",key:"action",width:180,align:"center"}]},{bodyCell:t(({column:m,record:n})=>[m.key==="action"?(i(),o(e(H),{key:0},{default:t(()=>[a(e(d),{type:"link",size:"small",onClick:N=>e(D)(n)},{default:t(()=>[s("modify")]),_:2},1032,["onClick"]),a(e(d),{type:"text",danger:"",size:"small",onClick:N=>e(V)(n)},{default:t(()=>[s("delete")]),_:2},1032,["onClick"])]),_:2},1024)):m.key==="dictDefault"?(i(),R(j,{key:1},[n.dictDefault==="1"?(i(),o(e(M),{key:0,color:"green"},{default:t(()=>[s("\u9ED8\u8BA4")]),_:1})):p("",!0)],64)):p("",!0)]),_:1},8,["data-source","loading"])]),a(z,{visible:e(S),title:e(v),fields:e(g),values:e(w),sending:e(x),onSubmit:e(B),onCancel:e(O)},null,8,["visible","title","fields","values","sending","onSubmit","onCancel"])]),_:1},8,["visible"]))}};export{oe as _};