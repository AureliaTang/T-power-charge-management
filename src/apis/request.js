import axios from 'axios'
const service = axios.create({
  baseURL: '',
});

// 接口开始请求
service.interceptors.request.use(config => {
  const userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  var contentData = {
    "Content-Type": "application/json", // 设置默认请求头
    token:config.method === 'get'? userInfo.token: ''
  }
  contentData = Object.assign(contentData)
  config.params;
  config.headers = contentData
  return config
}, error => {
  Promise.reject(error)
})
// 接口调用结束
service.interceptors.response.use(
  (response) => {
 
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(response => {

  return response
}, error => {

})
export default service