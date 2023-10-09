import{u as z}from"./usePagingList.5681cecf.js";import{u as E,_ as R}from"./ComSchemaForm.73744b05.js";import{h as Y}from"./moment.9709ab41.js";import{r as l,B as r}from"./request.cea70209.js";import{B as q,n as H,o as f,b as U,d as o,c as a,e,w as n,f as s,am as $,al as K}from"./index.4357c83e.js";import{P as Q}from"./index.db3bab18.js";import{P as F}from"./Card.68297c3e.js";import{a as G}from"./index.5b676e8a.js";import{S as j}from"./index.4532f20e.js";import{T as J}from"./index.de41f782.js";import{P as W}from"./index.9e00fdb0.js";import"./index.5904abc1.js";import"./Modal.4d727fed.js";import"./index.925b98d7.js";import"./useDestroyed.9b6f21d3.js";import"./debounce.58757216.js";import"./isSymbol.074e984d.js";import"./treeData.11936c29.js";/* empty css                                                                   */import"./_plugin-vue_export-helper.cdc0426e.js";import"./useState.359d49dd.js";import"./index.64bce1ba.js";import"./Col.0570af65.js";import"./useFlexGapSupport.686de91a.js";import"./station.64808e7d.js";import"./index.8f1e641a.js";import"./FilterFilled.9fcad8c6.js";const d="server/car_info/",X=t=>l({method:"GET",url:d,params:t}),Z=t=>l({method:"POST",url:d,data:t}),ee=t=>l({method:"PUT",url:d+t.car_id+"/",data:t}),g=t=>l({method:"DELETE",url:d+t+"/"}),te=async t=>{for(let c of t)await g(c)},ae={class:"page-wrap"},oe={class:"page-head"},ie={class:"page-head"},ne={class:"fl"},re={class:"fr"},se={class:"page-body"},le={class:"page-foot"},de={class:"fl"},ce={class:"fr"},Re={__name:"Vehicle",props:{userId:String},setup(t){const c=t,v=q(()=>[{name:"car_registration_no",label:"Registration Number"},{name:"veh_id_fk",label:"Connect Type",names:"veh_charge_type"},{name:"veh_id_fk",label:"Brand",names:"veh_brand"},{name:"veh_id_fk",label:"Model",names:"veh_model"},{name:"register_datetime",label:"Register Datetime",type:"date"},{name:"appuser_id_fk",label:"Username",names:"appuser_username"}]),{listData:p,loading:y,total:C,page:k,size:b,selectedKeys:u,handleChangeQueryValues:_,handleChangePage:S,handleChangeSize:w,handleDelete:I,doQueryList:x,handleDeleteList:P}=z({queryListAction:X,deleteOneAction:g,pk:"car_id",deleteListAction:te}),{formTitle:V,formVisible:D,formValues:T,handleCreate:B,handleModify:O,handleCancel:A,handleSubmit:L}=E({createOneAction:Z,modifyOneAction:ee,editSuccessCallback:x,pk:"car_id"});H(()=>c.userId,i=>{i?_({userId:i},1):p.value=[]},{immediate:!0});const M=i=>{_({search:i})};return(i,me)=>(f(),U("div",ae,[o("div",oe,[a(e(Q),{title:"Vehicle Management"})]),o("div",ie,[o("div",ne,[a(e(r),{type:"primary",onClick:e(B)},{default:n(()=>[a(e(F)),s("Add New Vehicle ")]),_:1},8,["onClick"])]),o("div",re,[a(e(G),{type:"text",onSearch:M,allowClear:""})])]),o("div",se,[a(e(J),{"row-key":"id",bordered:"","data-source":e(p),loading:e(y),pagination:!1,columns:[{title:"Vehicle ID",dataIndex:"car_id"},{title:"Registration Number",dataIndex:"car_registration_no"},{title:"Connect Type",dataIndex:["veh_id_fk","veh_charge_type"]},{title:"Brand",dataIndex:["veh_id_fk","veh_brand"]},{title:"Model",dataIndex:["veh_id_fk","veh_model"]},{title:"Register Datetime",dataIndex:"register_datetime",customRender:({text:m})=>e(Y)(m).utc().format("YYYY-MM-DD HH:mm:ss")},{title:"Username",dataIndex:["appuser_id_fk","appuser_username"]},{title:"Operate",dataIndex:"action",width:250,align:"center"}],"row-selection":{selectedRowKeys:e(u),onChange:i.handleChangeSelect}},{bodyCell:n(({column:m,record:h})=>[m.dataIndex==="action"?(f(),$(e(j),{key:0},{default:n(()=>[a(e(r),{type:"primary",onClick:N=>e(O)(h)},{default:n(()=>[s("modify")]),_:2},1032,["onClick"]),a(e(r),{type:"primary",onClick:N=>e(I)(h),danger:""},{default:n(()=>[s("delete")]),_:2},1032,["onClick"])]),_:2},1024)):K("",!0)]),_:1},8,["data-source","loading","columns","row-selection"])]),o("div",le,[o("div",de,[a(e(r),{danger:"",disabled:e(u).length===0,onClick:e(P)},{default:n(()=>[s("Delete All")]),_:1},8,["disabled","onClick"])]),o("div",ce,[a(e(W),{current:e(k),"page-size":e(b),total:e(C),onChange:e(S),onShowSizeChange:e(w)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])]),a(R,{width:800,visible:e(D),title:e(V),fields:e(v),values:e(T),onSubmit:e(L),onCancel:e(A)},null,8,["visible","title","fields","values","onSubmit","onCancel"])]))}};export{Re as default};
