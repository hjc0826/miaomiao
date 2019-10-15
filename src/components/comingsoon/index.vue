<template>
  <div class="comingsoon">
    <MovieItem v-for="item in ComingMovieData" :key="item.id" :MovieItem="item" :tag="'预售'"/>
  </div>
</template>

<script>
import MovieItem from "@/components/movieItem"
import {getComingsoon} from '@/axios/api'
export default {
  name: "Comingsoon",
  components: {
    MovieItem
  },
  data(){
    return{
      ComingMovieData : []
    }
  },
  mounted() {
    getComingsoon().then(res => {
      this.ComingMovieData = res.data.comingList;
    })
  },
};
</script>

<style lang="" scoped>
.comingsoon {
  margin: 0 12px;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>