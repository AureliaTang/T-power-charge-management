import{_ as g}from"./DictValue.735d53aa.js";import{a as l}from"./index.ed1c00b4.js";import{a as _,an as p,o as h,b as v,d as r,c as o,w as t,e as a}from"./index.4357c83e.js";import{C}from"./Card.68297c3e.js";import"./ComSchemaForm.73744b05.js";import"./index.925b98d7.js";import"./request.cea70209.js";import"./debounce.58757216.js";import"./isSymbol.074e984d.js";import"./index.5b676e8a.js";import"./treeData.11936c29.js";import"./index.9e00fdb0.js";import"./Modal.4d727fed.js";import"./useState.359d49dd.js";import"./index.de41f782.js";import"./FilterFilled.9fcad8c6.js";import"./index.4532f20e.js";import"./useFlexGapSupport.686de91a.js";/* empty css                                                                   */import"./_plugin-vue_export-helper.cdc0426e.js";import"./index.64bce1ba.js";import"./Col.0570af65.js";import"./station.64808e7d.js";import"./useNoPagingList.f07df02f.js";const b={class:"page-wrap"},S={class:"page-head"},V={class:"page-body"},k=r("div",null," \u76EE 3.599kWh\u56E2\u65E0\u6570\u636E\u56FE \u7535\u6D41 12.90...@ \u538B 234.4V\u529F\u7387 3.02k..\u65E5 \u589E\u5F3A\u7248APP ",-1),Q={__name:"Electricity",setup(P){const d={onChange:e=>{console.log(e)},pageSize:12},c=l.Item,n=_(null),s=[];for(let e=0;e<23;e++)s.push({title:`${e} \u5145\u7535\u6869`});return(e,m)=>{const u=p("PageHeader"),f=p("ComSchemaForm");return h(),v("div",b,[r("div",S,[o(u,{title:"Equipment monitoring"})]),r("div",V,[o(a(l),{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:4,xxxl:2},"data-source":s,pagination:d},{footer:t(()=>[]),renderItem:t(({item:i})=>[o(a(c),null,{default:t(()=>[o(a(C),{title:i.title},{default:t(()=>[k]),_:2},1032,["title"])]),_:2},1024)]),_:1})]),o(f,{visible:e.formVisible,title:e.formTitle,fields:e.formFields,values:e.formValues,labelCol:6,sending:e.formSending,onSubmit:e.handleSubmit,onCancel:e.handleCancel},null,8,["visible","title","fields","values","sending","onSubmit","onCancel"]),o(g,{pid:n.value,"onUpdate:pid":m[0]||(m[0]=i=>n.value=i)},null,8,["pid"])])}}};export{Q as default};
