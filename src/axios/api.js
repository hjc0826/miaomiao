import http from './httpRequest.js'

// 获取电影信息
export const getMovieInfo = params => {
    return http({
        url:'/movieOnInfoList',
        method : 'get',
        params
    })
}

// 获取城市
export const getCityList = data => {
    return http({
        url:'/cityList',
        method : 'get',
        data
    })
}

//获取即将上映
export const getComingsoon = params => {
    return http({
        url:'/movieComingList',
        method : 'get',
        params
    })
}

// 获取影院信息
export const cinemaList = data => {
    return http({
        url:'/cinemaList?cityId=40',
        method : 'get',
        data
    })
}