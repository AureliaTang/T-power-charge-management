import{u as M}from"./usePagingList.e11e5447.js";import{u as N,_ as H}from"./ComSchemaForm.724263e1.js";import{h as p}from"./moment.9709ab41.js";import{r as d,B as _}from"./request.a8a5b2bf.js";import{q as A}from"./station.90c4136f.js";import{a as G}from"./index.653ee793.js";import{T as U}from"./index.74f3a4c9.js";import{P as $}from"./index.fe63c723.js";import{a as s,B as g,j as F,o as h,b as K,d as a,c as r,e,w as l,am as Q,f,al as R}from"./index.e112588d.js";import{P as j}from"./index.7e088f9f.js";import{S as J}from"./index.19afbefd.js";import"./index.0258606a.js";import"./Modal.ddba711f.js";import"./index.a1cd18ff.js";import"./useDestroyed.20be08b6.js";import"./debounce.5f049df0.js";import"./isSymbol.c05f06a8.js";import"./treeData.11936c29.js";import"./Card.f6f1b557.js";import"./useState.68205e7b.js";import"./Col.566e395b.js";import"./useFlexGapSupport.748407ec.js";/* empty css                                                                   */import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.775f498b.js";import"./FilterFilled.1e36c108.js";import"./index.ae33a215.js";const c="/server/charge_order/",W=t=>d({method:"GET",url:c,params:t}),X=t=>d({method:"GET",url:c+t+"/"}),Z=t=>d({method:"DELETE",url:c+t+"/",data:{id:t}}),ee=t=>d({method:"PUT",url:c+t.order_id+"/",data:t}),te={class:"page-wrap"},ae={class:"page-head"},re={class:"page-head"},ne=a("div",{class:"fl"},null,-1),oe={class:"fr"},ie={class:"page-body"},se={class:"page-foot"},le=a("div",{class:"fl"},null,-1),de={class:"fr"},He={__name:"Order",setup(t){const m=s([]),y=g(()=>[{name:"order_start_datetime",label:"Order start time",type:"datetime"},{name:"order_end_datetime",label:"Order end time",type:"datetime"},{name:"charge_capacity",label:"Charging capacity"},{name:"order_fee",label:"Total order cost"},{name:"pile_id_fk",label:"Charging Pile SN",names:"pile_sn"},{name:"appuser_id_fk",label:"Username",names:"appuser_username"}]);g(()=>[{name:"order_id",label:"Order ID"},{name:"name",label:"user name"},{name:"pile_id",label:"Charging Pile ID"}]);const{listData:C,loading:b,total:S,page:v,size:k,selectedKeys:ce,handleDelete:x,queryValues:me,handleChangeSelect:ue,handleChangeQueryValues:O,handleChangePage:w,handleChangeSize:I,doQueryList:T}=M({pk:"order_id",queryListAction:W,deleteOneAction:Z}),{formTitle:P,formVisible:D,formValues:V,handleCancel:E,handleModify:q,handleSubmit:z}=N({queryOneAction:X,modifyOneAction:ee,editSuccessCallback:T,pk:"order_id"}),Y=n=>{O({search:n})};s({options:[],pagination:{page:1,pageSize:10,total:0},isLoading:!0});const B=async()=>{const n=await A();return m.rawValue=n.results,m.rawValue.forEach(o=>{o.label=o.station_id,o.value=o.station_name}),{infos:m}};return F(()=>{B()}),s(!1),s({}),(n,o)=>(h(),K("div",te,[a("div",ae,[r(e(j),{title:"Order Management"})]),a("div",re,[ne,a("div",oe,[r(e(G),{type:"text",onSearch:Y,allowClear:""})])]),a("div",ie,[r(e(U),{"row-key":"order_id",bordered:"","data-source":e(C),loading:e(b),pagination:!1,columns:[{title:"ID",dataIndex:"order_id",width:120,align:"center"},{title:"Order Number",dataIndex:"order_number",align:"center"},{title:"Order Start Time",dataIndex:"order_start_datetime",customRender:({text:i})=>e(p)(i).utc().format("YYYY-MM-DD HH:mm:ss"),align:"center"},{title:"Order End Time",dataIndex:"order_end_datetime",customRender:({text:i})=>e(p)(i).utc().format("YYYY-MM-DD HH:mm:ss"),align:"center"},{title:"Charging Capacity (Kw)",dataIndex:"charge_capacity_divided",align:"center"},{title:"Total Cost\uFF08include GST\uFF09",dataIndex:"order_fee",align:"center"},{title:"Charging Pile SN",dataIndex:["pile_id_fk","pile_sn"],align:"center"},{title:"User",dataIndex:["appuser_id_fk","appuser_firstname"],align:"center"},{title:"Order Status",dataIndex:"order_status",align:"center"},{title:"Operate",dataIndex:"action",width:250,align:"center"}]},{bodyCell:l(({column:i,record:u})=>[i.dataIndex==="action"?(h(),Q(e(J),{key:0},{default:l(()=>[r(e(_),{type:"primary",onClick:L=>e(q)(u)},{default:l(()=>[f("modify")]),_:2},1032,["onClick"]),r(e(_),{type:"primary",danger:"",onClick:L=>e(x)(u)},{default:l(()=>[f("delete")]),_:2},1032,["onClick"])]),_:2},1024)):R("",!0)]),_:1},8,["data-source","loading","columns"])]),a("div",se,[le,a("div",de,[r(e($),{current:e(v),"page-size":e(k),total:e(S),showSizeChanger:!1,hideOnSinglePage:"true",onChange:e(w),onShowSizeChange:e(I)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])]),r(H,{width:800,visible:e(D),title:e(P),fields:e(y),values:e(V),onSubmit:e(z),onCancel:e(E)},null,8,["visible","title","fields","values","onSubmit","onCancel"])]))}};export{He as default};
