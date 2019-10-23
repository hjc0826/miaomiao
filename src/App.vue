<template>
  <div id="app">
    <Loading v-if="isShow" :msg="'数据正在加载...'"/>
    <CurrentPosition :city="'北京'" v-if="this.$store.state.isChangeCity"/>
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import Loading from '@/components/loading'
import CurrentPosition from '@/components/getCurrentPosition'
import Tabbar from '@/components/tabBar'
export default {
  name : 'App' ,
  components : {
    Loading,
    CurrentPosition,
    Tabbar
  },
  data() {
    return {
      
    }
  },
  computed: {
    isShow(){
      return this.$store.state.LoadingShow
    }
  },
}
</script>

<style lang="stylus">
  
</style>
