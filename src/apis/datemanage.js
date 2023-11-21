import request from '../utils/request'
// const modulePath = 'server/testpilestate/'S
// const modulePath = '/testpilestate'

export const download = (data) => {
  return request({
    method: 'GET',
    url: 'server/testpilestate/',
    params: data
  })
}

export const getSelectList = (data) => {
  return request({
    method: 'GET',
    url: 'server/dropdownpilesn/',
  })
}
