import"./index.1816c805.js";import{M as h}from"./Modal.e9d92ecd.js";import{a,j as b,m as v}from"./index.c40ba44a.js";const Q=({defaultQueryValues:y={},queryListAction:f,deleteOneAction:g,deleteListAction:m,pk:p="id",isAutoQuery:w=!0,defaultPageSize:C=10}={})=>{const i=a([]),d=a(0),o=a(!1),l=a(y),n=a(1),r=a(C),u=a([]),S=e=>{u.value=e},s=async()=>{o.value=!0;try{const e={page:n.value,size:r.value,...l.value},t=await f(e);o.value=!1,t&&(d.value=t.count,i.value=t.results)}catch(e){o.value=!1,console.log(e,"error")}},c=()=>{n.value=1,s()},k=(e,t=1)=>{t?(l.value=e,c()):(l.value={...l.value,...e},c())},z=e=>{n.value=e,s()},D=(e,t)=>{r.value=t,c()},L=e=>{h.confirm({title:" Are you sure to delete it?",onOk:async()=>{try{await g(e[p]),v.success("Successfully deleted!"),s()}catch(t){throw t}}})},M=()=>{h.confirm({title:"Are you sure you want to batch delete the selected items?",onOk:async()=>{try{await m(u.value),v.success("Successfully deleted in bulk!"),s()}catch(e){throw e}}})};return b(()=>{w&&s()}),{listData:i,total:d,page:n,size:r,loading:o,queryValues:l,selectedKeys:u,doQueryList:s,handleChangeSelect:S,handleChangeQueryValues:k,handleChangePage:z,handleChangeSize:D,handleDelete:L,handleDeleteList:M,handleRefresh:c}};export{Q as u};
