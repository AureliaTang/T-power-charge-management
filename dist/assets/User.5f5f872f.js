import{u as F}from"./usePagingList.d9f7ed49.js";import{u as K,_ as Q}from"./ComSchemaForm.69cf1e46.js";import{r as d,B as r}from"./request.e95454fd.js";import{h as G}from"./moment.9709ab41.js";import j from"./Vehicle.79d42904.js";import{B as J,a as y,o as _,b as W,d as s,c as a,e,w as o,f as n,am as b,al as C}from"./index.55cf085f.js";import{P as X}from"./index.227eebfc.js";import{P as Z}from"./Card.79b8d940.js";import{a as ee}from"./index.7eced5b4.js";import{S as ae}from"./index.51820f5b.js";import{T as te}from"./index.015808d9.js";import{P as se}from"./index.76152c0a.js";import{M as oe}from"./Modal.cd6a7cf2.js";import"./index.b1924724.js";import"./useDestroyed.6570a5e8.js";import"./shallowequal.9bf93796.js";import"./debounce.8f05f4a2.js";import"./isSymbol.92b049d2.js";import"./treeData.11936c29.js";import"./index.790d6f1a.js";import"./pickAttrs.c337f33a.js";import"./useState.b2cd0e7b.js";/* empty css                                                                   */import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.f2b29a9c.js";import"./Form.95d6e895.js";import"./Col.d871f895.js";import"./useFlexGapSupport.ab34fae3.js";import"./index.fe3c4aa9.js";import"./station.effc7bfb.js";import"./dayjs.b63d3b91.js";import"./index.90a5b505.js";import"./FilterFilled.810f0803.js";const p="server/appuser_info/",ie=t=>d({method:"GET",url:p,params:t}),le=t=>d({method:"POST",url:p,data:t}),re=t=>d({method:"PUT",url:p+t.appuser_id+"/",data:t}),k=t=>d({method:"DELETE",url:p+t+"/"}),ne=async t=>{for(let m of t)await k(m)},de={class:"page-wrap"},pe={class:"page-head"},me={class:"page-head"},ce={class:"fl"},ue={class:"fr"},he={class:"page-body"},_e={class:"page-foot"},fe={class:"fl"},ge={class:"fr"},Ze={__name:"User",setup(t){const m=J(()=>[{name:"appuser_username",label:"Username"},{name:"appuser_password",label:"Password",type:"password"},{name:"appuser_firstname",label:"First Name"},{name:"appuser_lastname",label:"Last Name"},{name:"appuser_phone_no",label:"Phone Number"},{name:"appuser_email",label:"Email"},{name:"is_active",label:"Is it available?",type:"radio",inputProps:{options:[{value:"1",label:"yes"},{value:"0",label:"no"}]}},{name:"last_login",label:"Registration Datetime",type:"date"}]),{listData:w,loading:S,total:x,page:P,size:I,selectedKeys:f,queryValues:ve,handleChangeSelect:N,handleChangeQueryValues:A,handleChangePage:D,handleChangeSize:V,handleRefresh:ye,handleDelete:L,handleDeleteList:O,doQueryList:U}=F({queryListAction:ie,deleteOneAction:k,pk:"appuser_id",deleteListAction:ne}),{formTitle:E,formVisible:T,formValues:B,handleCreate:M,handleModify:z,handleCancel:$,handleSubmit:R}=K({createOneAction:le,modifyOneAction:re,editSuccessCallback:U,pk:"appuser_id"}),c=y(!1),u=y({}),q=i=>{c.value=!0,u.value=i},H=i=>{c.value=!1,u.value={}},Y=i=>{A({search:i})};return(i,g)=>(_(),W("div",de,[s("div",pe,[a(e(X),{title:"App User Management"})]),s("div",me,[s("div",ce,[a(e(r),{type:"primary",onClick:g[0]||(g[0]=l=>e(M)("","Add New App User"))},{default:o(()=>[a(e(Z)),n("Add New User ")]),_:1})]),s("div",ue,[a(e(ee),{type:"text",onSearch:Y,allowClear:""})])]),s("div",he,[a(e(te),{"row-key":"appuser_id",bordered:"","data-source":e(w),loading:e(S),pagination:!1,columns:[{title:"User ID",dataIndex:"appuser_id"},{title:"Username",dataIndex:"appuser_username"},{title:"First Name",dataIndex:"appuser_firstname"},{title:"Last Name",dataIndex:"appuser_lastname"},{title:"Email",dataIndex:"appuser_email"},{title:"Phone Number",dataIndex:"appuser_phone_no"},{title:"Postcode",dataIndex:"appuser_postcode"},{title:"Available",dataIndex:"appuser_isactive"},{title:"Registration Datetime",dataIndex:"register_datetime",customRender:({text:l})=>l?e(G)(l).utc().format("YYYY-MM-DD HH:mm:ss"):"-"},{title:"Operate",dataIndex:"action",width:250,align:"center"}],"row-selection":{selectedRowKeys:e(f),onChange:e(N)}},{bodyCell:o(({column:l,record:h})=>[l.key==="verhicle"?(_(),b(e(r),{key:0,type:"primary",ghost:"",onClick:v=>q(h)},{default:o(()=>[n("\u67E5\u770B\u8F66\u8F86")]),_:2},1032,["onClick"])):C("",!0),l.dataIndex==="action"?(_(),b(e(ae),{key:1},{default:o(()=>[a(e(r),{type:"primary",onClick:v=>e(z)(h)},{default:o(()=>[n("modify")]),_:2},1032,["onClick"]),a(e(r),{type:"primary",danger:"",onClick:v=>e(L)(h)},{default:o(()=>[n("delete")]),_:2},1032,["onClick"])]),_:2},1024)):C("",!0)]),_:1},8,["data-source","loading","columns","row-selection"])]),s("div",_e,[s("div",fe,[a(e(r),{danger:"",disabled:e(f).length===0,onClick:e(O)},{default:o(()=>[n("Delete All")]),_:1},8,["disabled","onClick"])]),s("div",ge,[a(e(se),{current:e(P),"page-size":e(I),total:e(x),onChange:e(D),onShowSizeChange:e(V)},null,8,["current","page-size","total","onChange","onShowSizeChange"])])]),a(e(oe),{title:"\u67E5\u770B\u7528\u6237\u8F66\u8F86",visible:c.value,"mask-closable":!1,keyboard:!1,width:"960px",footer:null,onCancel:H},{default:o(()=>[a(j,{"user-id":u.value.id},null,8,["user-id"])]),_:1},8,["visible"]),a(Q,{width:800,visible:e(T),title:e(E),fields:e(m),values:e(B),onSubmit:e(R),onCancel:e($)},null,8,["visible","title","fields","values","onSubmit","onCancel"])]))}};export{Ze as default};
