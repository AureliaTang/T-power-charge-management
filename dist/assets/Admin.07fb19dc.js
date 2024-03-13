import{r as u}from"./request.320a4cb6.js";import{h as R}from"./moment.9709ab41.js";import{u as q}from"./usePagingList.7cc5691e.js";import{u as F,_ as $}from"./ComSchemaForm.ddac7487.js";import{T as g}from"./dayjs.260c4fea.js";import{E as Q,o as n,b as v,d as s,c as t,e,w as o,f as l,aH as _,J as U,aG as G}from"./index.3e073952.js";import{P as K}from"./index.d2d90e7b.js";import{P as W}from"./Card.bc99f03d.js";import{B as m}from"./styleChecker.eb92c49d.js";import{a as j}from"./index.bb6352d4.js";import{S as J}from"./index.650eb3d7.js";import{T as X}from"./index.1881d489.js";import{P as Z}from"./index.4e3ab62a.js";import"./index.6751c452.js";import"./Modal.96e6e95e.js";import"./shallowequal.ccea8df8.js";import"./pickAttrs.d6d54610.js";import"./useDestroyed.98bfddca.js";import"./FormItemContext.3f5ce3ea.js";import"./treeData.11936c29.js";import"./index.ba495c24.js";import"./useState.2cff5e19.js";/* empty css                                                                   */import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.61a2edd1.js";import"./index.29c0fa28.js";import"./Form.6fa778b0.js";import"./Col.061c78bf.js";import"./useFlexGapSupport.e5ca3a50.js";import"./station.53f7a1d4.js";import"./index.da9ad678.js";import"./FilterFilled.ebb64806.js";const p="/server/operators_info_new/",ee=a=>u({method:"GET",url:p,params:a}),ae=a=>u({method:"POST",url:p,data:a}),te=a=>u({method:"PUT",url:p+a.operators_id+"/",data:a}),y=a=>u({method:"DELETE",url:p+a+"/",data:{id:a}}),se=async a=>{for(let c of a)await y(c)},oe={class:"page-wrap"},re={class:"page-head"},le={class:"page-head"},ie={class:"fl"},ne={class:"fr"},de={class:"page-body"},me={class:"page-foot"},ue={class:"fl"},pe={class:"fr"},Ge={__name:"Admin",setup(a){const{listData:c,loading:k,total:C,page:w,size:S,selectedKeys:f,queryValues:ce,handleChangeSelect:P,handleChangeQueryValues:x,handleChangePage:A,handleChangeSize:D,handleRefresh:I,handleDelete:O,handleDeleteList:T,doQueryList:_e}=q({pk:"operators_id",queryListAction:ee,deleteOneAction:y,deleteListAction:se}),{formTitle:Y,formVisible:H,formValues:h,handleCreate:L,handleModify:M,handleCancel:V,handleSubmit:E}=F({pk:"operators_id",createOneAction:ae,modifyOneAction:te,editSuccessCallback:I}),N=Q(()=>{let i=[{name:"user_id_fk",label:"Username",names:"username"},{name:"user_id_fk",label:"Password",type:"password",names:"password"},{name:"user_id_fk",label:"Last login",type:"date",names:"last_login",inputProps:{format:"YYYY-MM-DD HH:mm:ss","show-time":"{ format: 'HH:mm' }",valueFormat:"YYYY-MM-DD HH:mm:ss"}},{name:"user_id_fk",label:"First name",names:"first_name"},{name:"user_id_fk",label:"Last name",names:"last_name"},{name:"user_id_fk",label:"Email address",names:"email"},{name:"user_id_fk",label:"Available",names:"is_active",type:"radio",inputProps:{options:[{value:!0,label:"yes"},{value:!1,label:"no"}]}},{name:"operators_state",label:"States",type:"select",inputProps:{options:[{value:"nsw",label:"NSW"},{value:"tas",label:"TAS"},{value:"qld",label:"QLD"},{value:"vic",label:"VIC"},{value:"wa",label:"WA"},{value:"nt",label:"NT"},{value:"act",label:"ACT"},{value:"as",label:"AS"}]}},{name:"operators_postcode",label:"Postcode"},{name:"user_id_fk",names:"is_superuser",label:"Is it a superuser?",type:"radio",inputProps:{options:[{value:!0,label:"yes"},{value:!1,label:"no"}]}}];return h.value.id&&i.splice(2,2),i}),z=i=>{x({search:i})};return(i,b)=>(n(),v("div",oe,[s("div",re,[t(e(K),{title:"Operators Management"})]),s("div",le,[s("div",ie,[t(e(m),{type:"primary",onClick:b[0]||(b[0]=r=>e(L)("","Add New Operators"))},{default:o(()=>[t(e(W)),l("Add New Operator ")]),_:1})]),s("div",ne,[t(e(j),{type:"text",onSearch:z,allowClear:""})])]),s("div",de,[t(e(X),{"row-key":"id",bordered:"","data-source":e(c),loading:e(k),pagination:!1,columns:[{title:"Operators ID",dataIndex:"operators_id"},{title:"Username",dataIndex:["user_id_fk","username"]},{title:"Registration Datetime",dataIndex:["user_id_fk","date_joined"],customRender:({text:r})=>e(R)(r).utc().format("YYYY-MM-DD HH:mm:ss")},{title:"Registrant",dataIndex:["user_id_fk","first_name"]},{title:"Available",dataIndex:["user_id_fk","is_active"],customRender:({text:r})=>r===!0?"yes":"no"},{title:"Postcode",dataIndex:"operators_postcode"},{title:"States",dataIndex:"operators_state"},{title:"Operate",dataIndex:"action",width:160,align:"center"}],"row-selection":{selectedRowKeys:e(f),onChange:e(P)}},{bodyCell:o(({column:r,record:d})=>[r.dataIndex==="action"?(n(),_(e(J),{key:0},{default:o(()=>[t(e(m),{type:"primary",onClick:B=>e(M)(d)},{default:o(()=>[l("modify")]),_:2},1032,["onClick"]),t(e(m),{type:"primary",danger:"",onClick:B=>e(O)(d)},{default:o(()=>[l("delete")]),_:2},1032,["onClick"])]),_:2},1024)):r.dataIndex==="status"?(n(),v(U,{key:1},[d.status===1?(n(),_(e(g),{key:0,color:"green"},{default:o(()=>[l("\u542F\u7528")]),_:1})):(n(),_(e(g),{key:1},{default:o(()=>[l("\u7981\u7528")]),_:1}))],64)):G("",!0)]),_:1},8,["data-source","loading","columns","row-selection"])]),s("div",me,[s("div",ue,[t(e(m),{danger:"",disabled:e(f).length===0,onClick:e(T)},{default:o(()=>[l("Delete All")]),_:1},8,["disabled","onClick"])]),s("div",pe,[t(e(Z),{current:e(w),"page-size":e(S),total:e(C),onChange:e(A),onShowSizeChange:e(D)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])]),t($,{width:800,visible:e(H),title:e(Y),fields:e(N),values:e(h),onSubmit:e(E),onCancel:e(V)},null,8,["visible","title","fields","values","onSubmit","onCancel"])]))}};export{Ge as default};
