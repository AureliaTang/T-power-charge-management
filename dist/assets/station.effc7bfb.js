import{r}from"./request.e95454fd.js";const e="server/charge_station_info/",a=t=>r({method:"GET",url:e,params:t}),o=t=>r({method:"GET",url:e,params:t}),n=t=>r({method:"POST",url:e,data:t}),u=t=>r({method:"PUT",url:e+t.station_id+"/",data:t}),m=t=>r({method:"DELETE",url:e+t+"/",data:{id:t}});export{a,n as c,m as d,u as m,o as q};
