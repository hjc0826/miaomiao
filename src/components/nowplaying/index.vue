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
    getMovieInfo().then( res =>{
      this.MovieInfo = res.data.movieList
      console.log(this.MovieInfo)
    })
  },
  data() {
    return {
      MovieInfo : []
    }
  },
  components: {
    MovieItem
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