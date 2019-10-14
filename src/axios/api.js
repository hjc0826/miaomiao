import http from './httpRequest.js'

// 获取电影信息
export const getMovieInfo = data => {
    return http({
        url:'/apis/movieOnInfoList?cityId=1',
        method : 'get',
        data
    })
}

// 获取城市
export const getCityList = data => {
    return http({
        url:'/apis/cityList',
        method : 'get',
        data
    })
}

