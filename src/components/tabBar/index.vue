<template>
  <footer id="footer">
    <ul>
      <router-link tag="li" to="/movie">
        <i class="iconfont icon-dianying"></i>
        <p>电影</p>
      </router-link>
      <router-link tag="li" to="/cinema">
        <i class="iconfont icon-yingyuan active"></i>
        <p>影院</p>
      </router-link>
      <router-link tag="li" :to="url" :class="linkClass">
        <i class="iconfont icon-weibiaoti-"></i>
        <p>我的</p>
      </router-link>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Tabbar",
  data() {
    return {
      linkClass: ""
    };
  },
  methods: {},
  watch: {
    "$route.path": function(newV) {
      this.linkClass = newV == "/mine/loginout" ? "router-link-active" : "";
    }
  },
  computed: {
    url: function() {
      if (sessionStorage.getItem("user")) {
        return "/mine/loginout";
      } else {
        return "/mine/login";
      }
    }
  }
};
</script>

<style scoped>
#footer {
  width: 100%;
  height: 50px;
  background-color: white;
  border-top: 2px solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
}
#footer ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#footer ul li {
  flex: 1;
  height: 40px;
}
#footer ul li.router-link-active {
  color: #f03d37;
}
#footer ul li i {
  font-size: 20px;
}
#footer ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>