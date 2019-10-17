import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        LoadingShow : false,
        // 默认
        currentId : { 
            cityId:1,
            nm : '北京'
        }
    },
    mutations: {
        ChangeLoading(state){
            !state.LoadingShow
        },
        ChangeCurrenId(state,payload){
            state.currentId.cityId = payload.id,
            state.currentId.nm = payload.nm
        }
    },
    actions: {

    }
})
