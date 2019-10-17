import http from './httpRequest.js'

// 获取电影信息
export const getMovieInfo = data => {
    return http({
        url:'/movieOnInfoList?cityId=1',
        method : 'get',
        data
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
export const getComingsoon = data => {
    return http({
        url:'/movieComingList?cityId=1',
        method : 'get',
        data
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
