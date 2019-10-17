<template>
  <div>
    <div class="movieList">
      <MovieItem v-for="item in MovieInfo" :key="item.id" :MovieItem="item" :tag="'购买'"/>
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/movieItem"
import { getMovieInfo } from '../../axios/api'
export default {
  name: "nowplaying",
  mounted() {
    // 获取电影信息数据
    this.getMovie(this.$store.state.currentId)
  },
  data() {
    return {
      MovieInfo : [],
      ajaxCurrentId:this.$store.state.currentId
    }
  },
  methods: {
    // 根据传入的currentId值发送对应的请求数据
    getMovie(sid){
      getMovieInfo({cityId : sid.cityId}).then( res =>{
      this.MovieInfo = res.data.movieList
    })
    }
  },
  components: {
    MovieItem
  },
  watch: {
    // 监听store中数据的变化 然后调用函数 因为keepalive在路由切换的时候就不能继续调用方法
    ajaxCurrentId:{
      handler:function(){
        this.getMovie(this.ajaxCurrentId)
      },
      deep:true
    }
  },
};
</script>

<style scoped>
.movieList {
  margin: 0 12px;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>