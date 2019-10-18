<template>
  <div>
    <Header title="喵喵电影"></Header>
  
    <div class="movie_menu">
      <router-link class="city_name" to="/movie/city" tag="div">
        <span>{{cityName.nm}}</span>
        <i class="iconfont icon-xia"></i>
      </router-link>
      <div class="hot_switch">
        <router-link class="hot_item" tag="div" to="/movie/nowplaying">正在热映</router-link>
        <router-link class="hot_item" tag="div" to="/movie/comingsoon">即将上映</router-link>
      </div>
      <router-link class="search_entry" tag="div" to="/movie/search">
        <i class="iconfont icon-tubiaolunkuo-"></i>
      </router-link>
    </div>

    <keep-alive>
      <router-view />
    </keep-alive>

    <Tabbar />

  </div>
</template>

<script>
import Header from "@/components/header"
import Tabbar from "@/components/tabBar"
import { getCityList } from '../../axios/api.js'
export default {
  name: "Movie",
  components: {
    Header,
    Tabbar
  },
  mounted() {
    
  },
  data() {
    return {
      isShow:'false',
      cityName : this.$store.state.currentId   
    }
  },
};
</script>

<style>
.movie_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  z-index: 10;
}
.movie_menu .city_name {
  margin-left: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .hot_switch {
  line-height: 45px;
  display: flex;
}
.movie_menu .hot_switch .hot_item {
  font-size: 15px;
  color: #666;
  width: 80px;
  text-align: center;
  margin: 0 12px;
  font-weight: 700;
}
.movie_menu .router-link-active{
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}

.movie_menu .search_entry {
  margin-right: 20px;
  height: 100%;
  line-height: 45px;
}
.movie_menu .search_entry i {
  font-size: 24px;
  color: red;
}
</style>