<template>
  <div>
    <div class="movieList">
      <MovieItem v-for="item in MovieInfo" :key="item.id" :MovieItem="item" :tag="'购买'"/>
    </div>
  </div>
</template>

<script>
import MovieItem from "@/components/movieItem";
import { getMovieInfo } from "../../axios/api";
export default {
  name: "nowplaying",
  mounted() {
    // 获取电影信息数据
    this.getMovie(this.$store.state.currentId);
    this.cityPosition();
  },
  data() {
    return {
      MovieInfo: [],
      ajaxCurrentId: this.$store.state.currentId
    };
  },
  methods: {
    // 根据传入的currentId值发送对应的请求数据
    getMovie(sid) {
      getMovieInfo({ cityId: sid.cityId }).then(res => {
        this.MovieInfo = res.data.movieList;
      });
    },
    // 定位城市位置
    cityPosition() {
      console.log("位置");
      getLocation()
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition)
        } else {
          alert('该浏览器不支持定位，不好意思')
        }
      }
      function showPosition(position) {
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        var point = new BMap.Point(lon, lat); // 创建坐标点
        // 根据坐标得到地址描述
        var myGeo = new BMap.Geocoder();
        myGeo.getLocation(point, function(result) {
          var city = result.addressComponents.city;
          console.log(result);
        });
      };
    },
  },
  components: {
    MovieItem
  },
  watch: {
    // 监听store中数据的变化 然后调用函数 因为keepalive在路由切换的时候就不能继续调用方法
    ajaxCurrentId: {
      handler: function() {
        this.getMovie(this.ajaxCurrentId);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.movieList {
  margin: 0 12px;
  overflow: hidden;
  margin-bottom: 50px;
}
</style>