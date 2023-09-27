import request from '../utils/request'

export const info = () => {
    return request({
        method: 'GET',
        url: '/server/dashboard_info/'
    })
}

export const cartInfo = (data) => {
    return request({
        method: 'POST',
        url: '/server/dashboard_info/',
        params:data
    })
}

export const cartInfo2 = (data) =>{
    return request({
        method:'POST',
        url: '/server/dashboard_info/',
        params:data
    })
}
