<template>
  <div id="app">
    <Loading v-if="isShow" :msg="'数据正在加载...'"/>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import Loading from '@/components/loading'
export default {
  name : 'App' ,
  components : {
    Loading
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

<style>
</style>
