import{u as B}from"./usePagingList.e08fdc37.js";import{u as N,_ as A}from"./ComSchemaForm.43d10280.js";import{h as p}from"./moment.9709ab41.js";import{r as l}from"./request.2288667a.js";import{q as $}from"./station.22a425f9.js";import{a as G}from"./index.30480f03.js";import{T as H}from"./index.c901d8bd.js";import{P as U}from"./index.8ff1420b.js";import{a as s,x as _,$ as F,o as h,b as K,d as a,c as r,e,w as d,ao as Q,f,an as R}from"./index.e783c946.js";import{P as j}from"./index.5083c87b.js";import{B as g}from"./styleChecker.df42cde5.js";import{S as J}from"./index.c47d3d19.js";import"./index.33f30a55.js";import"./Modal.b014ebc0.js";import"./index.9641cdf4.js";import"./useDestroyed.4dcf2a17.js";import"./debounce.81a4c1ce.js";import"./isSymbol.7e901a66.js";import"./treeData.11936c29.js";import"./Card.531c7c8f.js";import"./useState.656607d1.js";import"./Col.40afaf57.js";import"./useFlexGapSupport.361aa632.js";/* empty css                                                                   */import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.794e3fba.js";import"./FilterFilled.314139b3.js";import"./index.d80e0f98.js";const m="/server/charge_order/",W=t=>l({method:"GET",url:m,params:t}),X=t=>l({method:"GET",url:m+t+"/"}),Z=t=>l({method:"DELETE",url:m+t+"/",data:{id:t}}),ee=t=>l({method:"PUT",url:m+t.order_id+"/",data:t}),te={class:"page-wrap"},ae={class:"page-head"},re={class:"page-head"},oe=a("div",{class:"fl"},null,-1),ne={class:"fr"},ie={class:"page-body"},se={class:"page-foot"},de=a("div",{class:"fl"},null,-1),le={class:"fr"},$e={__name:"Order",setup(t){const c=s([]),y=_(()=>[{name:"order_start_datetime",label:"Order start time",type:"datetime"},{name:"order_end_datetime",label:"Order end time",type:"datetime"},{name:"charge_capacity",label:"Charging capacity"},{name:"order_fee",label:"Total order cost"},{name:"pile_id_fk",label:"Charging Pile SN",names:"pile_sn"},{name:"appuser_id_fk",label:"Username",names:"appuser_username"}]);_(()=>[{name:"order_id",label:"Order ID"},{name:"name",label:"user name"},{name:"pile_id",label:"Charging Pile ID"}]);const{listData:C,loading:b,total:S,page:v,size:k,selectedKeys:me,handleDelete:x,queryValues:ce,handleChangeSelect:ue,handleChangeQueryValues:O,handleChangePage:w,handleChangeSize:I,doQueryList:T}=B({pk:"order_id",queryListAction:W,deleteOneAction:Z}),{formTitle:P,formVisible:D,formValues:V,handleCancel:E,handleModify:q,handleSubmit:z}=N({queryOneAction:X,modifyOneAction:ee,editSuccessCallback:T,pk:"order_id"}),Y=o=>{O({search:o})};s({options:[],pagination:{page:1,pageSize:10,total:0},isLoading:!0});const L=async()=>{const o=await $();return c.rawValue=o.results,c.rawValue.forEach(n=>{n.label=n.station_id,n.value=n.station_name}),{infos:c}};return F(()=>{L()}),s(!1),s({}),(o,n)=>(h(),K("div",te,[a("div",ae,[r(e(j),{title:"Order Management"})]),a("div",re,[oe,a("div",ne,[r(e(G),{type:"text",onSearch:Y,allowClear:""})])]),a("div",ie,[r(e(H),{"row-key":"order_id",bordered:"","data-source":e(C),loading:e(b),pagination:!1,columns:[{title:"ID",dataIndex:"order_id",width:120},{title:"Order Start Time",dataIndex:"order_start_datetime",customRender:({text:i})=>e(p)(i).utc().format("YYYY-MM-DD hh:mm:ss")},{title:"Order End Time",dataIndex:"order_end_datetime",customRender:({text:i})=>e(p)(i).utc().format("YYYY-MM-DD HH:mm:ss")},{title:"Charging Capacity (Kw)",dataIndex:"charge_capacity_divided"},{title:"Total Order Cost\uFF08include GST\uFF09",dataIndex:"order_fee"},{title:"Charging Pile SN",dataIndex:["pile_id_fk","pile_sn"]},{title:"Username",dataIndex:["appuser_id_fk","appuser_username"]},{title:"Operate",dataIndex:"action",width:250,align:"center"}]},{bodyCell:d(({column:i,record:u})=>[i.dataIndex==="action"?(h(),Q(e(J),{key:0},{default:d(()=>[r(e(g),{type:"primary",onClick:M=>e(q)(u)},{default:d(()=>[f("modify")]),_:2},1032,["onClick"]),r(e(g),{type:"primary",danger:"",onClick:M=>e(x)(u)},{default:d(()=>[f("delete")]),_:2},1032,["onClick"])]),_:2},1024)):R("",!0)]),_:1},8,["data-source","loading","columns"])]),a("div",se,[de,a("div",le,[r(e(U),{current:e(v),"page-size":e(k),total:e(S),showSizeChanger:!1,hideOnSinglePage:"true",onChange:e(w),onShowSizeChange:e(I)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])]),r(A,{width:800,visible:e(D),title:e(P),fields:e(y),values:e(V),onSubmit:e(z),onCancel:e(E)},null,8,["visible","title","fields","values","onSubmit","onCancel"])]))}};export{$e as default};