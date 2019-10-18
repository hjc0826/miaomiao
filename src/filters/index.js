// 封装过滤器 0.1.0

// 替换url中的w.h
export const setWH = (url,arg)=>{
    return url ? url.replace(/w\.h/,arg) : '';
}

// 电影详情中的图片尺寸替换
export const setDetail = (url,arg) =>{
    return url.replace(/net\//,arg)
}