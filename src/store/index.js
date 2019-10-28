import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        LoadingShow : false,
        isChangeCity : false,
        // 默认
        currentId : { 
            cityId:1,
            nm : '北京'
        },
        FilmDetails : null,
        // 当前城市Id
        currentCity : {},
        lock :true,
        islogin : 1
    },
    mutations: {
        ChangeLoading(state){
            !state.LoadingShow
        },
        ChangeCurrenId(state,payload){
            state.currentId.cityId = payload.id,
            state.currentId.nm = payload.nm
        },
        ChangeCity(state,payload){
            state.isChangeCity = true;
            state.currentCity = payload
        },
        ChangeDetailId(state,payload){
            state.FilmDetails = payload.id
        }
    },
    actions: {

    }
})
