<template>
  <div>
    <Header title="喵喵电影" />
    <div class="movie_menu">
      <div class="city_name">
        <span>北京</span>
        <i class="iconfont icon-xia"></i>
      </div>
      <div class="hot_switch">
        <div class="hot_item_active">正在热映</div>
        <div class="hot_item">即将上映</div>
      </div>
      <div class="search_entry">
        <i class="iconfont icon-tubiaolunkuo-"></i>
      </div>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabbar from "@/components/tabBar";
export default {
  name: "Movie",
  components: {
    Header,
    Tabbar
  }
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
.movie_menu .hot_switch .hot_item_active {
  color: #ef4238;
  border-bottom: 2px solid #ef4238;
}
/* .movie_menu .hot_switch .hot_item_active */
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