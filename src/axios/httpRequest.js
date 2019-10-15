import axios from 'axios'
import qs from 'qs'
// import app from "../main.js"

const http = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL_API,
    timeout: 5000 
})

// 请求参数处理
http.interceptors.request.use(config => {
    // 数据加载动画
    // app.$vux.loading.show({
    //     text: '数据加载中……'
    // });
    console.log(config)
    config.method === 'post'
        ? config.data = qs.stringify({...config.data})
        : config.params = {...config.params};
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    return config;
},     //请求错误处理
    error => {  

    // app.$vux.toast.show({
    //     type: 'warn',
    //     text: error
    // });

    Promise.reject(error)
})

    // 请求响应处理
http.interceptors.response.use(
    response => {  
        // 成功请求到数据
        //这里根据后端提供的数据进行对应的处理
        if (response.data.msg === "ok") {
            return response.data;
        } else {
        //常规错误处理
           console.log('error infomation')
        }
    },
        //响应错误处理
    error => {  
        console.log('error');
        console.log(error);
        console.log(JSON.stringify(error));
 
        let text = JSON.parse(JSON.stringify(error)).response.status === 404
            ? '404'
            : '网络异常，请重试';
        // app.$vux.toast.show({
        //     type: 'warn',
        //     text: text
        // });
 
        return Promise.reject(error)
    }
);

export default http