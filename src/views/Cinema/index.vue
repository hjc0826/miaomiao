<template>
  <div id="cinema">
    <Header title="我的影院" />
    <div class="content">
      <div class="cinema_menu">
        <router-link class="city_switch" tag="div" to="/cinema/allcity">
          全城
          <i class="iconfont icon-xia"></i>
        </router-link>
        <router-link class="brand_switch" tag="div" to="/cinema/brand">
          品牌
          <i class="iconfont icon-xia"></i>
        </router-link>
        <router-link class="feature_switch" tag="div" to="/cinema/feature">
          特色
          <i class="iconfont icon-xia"></i>
        </router-link>
      </div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
    <Tabbar />
  </div>
</template>

<script>
import Header from "@/components/header";
import Tabbar from "@/components/tabBar";
export default {
  name: "Cinema",
  components: {
    Header,
    Tabbar
  }
};
</script>

<style scoped>
#cinema{
  height: 100%;
}
.content {
  display: flex;
  overflow: auto;
  margin-bottom: 50px;
  flex-direction: column;
  position: relative;
}
.content .cinema_menu {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fff;
}
.cinema_menu .router-link-active{
    color: darkorange;
}
</style>