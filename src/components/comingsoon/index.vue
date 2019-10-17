<template>
  <div class="comingsoon">
    <MovieItem v-for="item in ComingMovieData" :key="item.id" :MovieItem="item" :tag="'预售'"/>
  </div>
</template>

<script>
import MovieItem from "@/components/movieItem"
import { getComingsoon } from '@/axios/api'
export default {
  name: "Comingsoon",
  components: {
    MovieItem
  },
  data(){
    return{
      ComingMovieData : [],
      ajaxCurrentId : this.$store.state.currentId
    }
  },
  methods: {
    // 根据id发送对应请求
    getComing(item){
      getComingsoon({cityId : item}).then(res => {
      this.ComingMovieData = res.data.comingList;
    })
    }
  },
  mounted() {
    this.getComing(this.$store.state.currentId.cityId)
  },
  watch: {
    ajaxCurrentId:{
      handler:function(){
        this.getComing(this.ajaxCurrentId.cityId)
      },
      deep:true
    }
  }
};
</script>

<style lang="" scoped>
.comingsoon {
  margin: 0 12px;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>