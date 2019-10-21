<style lang="stylus" scoped>
.film_details_body {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  min-height: 100%;
  background: #fff;
}

.contentDetail {
  flex: 1;
  overflow: auto;
  margin-bottom: 50px;
  position: relative;
  display: flex;
  flex-direction: column;
  display: block;
  margin-bottom: 0;
}

.contentDetail .detail_list {
  height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.contentDetail .detail_list .detail_list_bg {
  width: 100%;
  height: 100%;
  background: 0 40%;
  filter: blur(20px);
  background-size: cover;
  position: absolute;
  left: 0;
  top: 0;
}

.contentDetail .detail_list .detail_list_filter {
  width: 100%;
  height: 100%;
  background-color: #40454d;
  opacity: 0.55;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}

.contentDetail .detail_list .detail_list_content {
  display: flex;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
}

.contentDetail .detail_list .detail_list_img {
  width: 108px;
  height: 150px;
  border: 1px solid #f0f2f3;
  margin: 20px;
}

.contentDetail .detail_list img {
  width: 100%;
  height: 100%;
}

.contentDetail .detail_list .detail_list_info {
  margin-top: 20px;
}

.contentDetail .detail_list .detail_list_info h2 {
  font-size: 20px;
  color: #fff;
  font-weight: 400;
  line-height: 40px;
}

.contentDetail .detail_list .detail_list_info p {
  color: #fff;
  line-height: 20px;
  font-size: 14px;
  color: #ccc;
}

.contentDetail .detail_intro {
  padding: 10px;
}

.contentDetail .detail_player {
  margin: 20px;
}

</style>

<template>
  <div class="film_details_body">
    <Header :title="'影片详情'">
      <i class="iconfont icon-xia" @click="$router.go(-1)"></i>
    </Header>
    <div class="contentDetail">
      <div class="detail_list">
        <div class="detail_list_bg" :style="{backgroundImage:'url(' + DetailMovie.albumImg + ')'}"></div>
        <div class="detail_list_filter"></div>
        <div class="detail_list_content">
          <div class="detail_list_img">
            <img :src="DetailMovie.img | setWH(148.208)" alt />
          </div>
          <div class="detail_list_info">
            <h2>{{DetailMovie.nm}}</h2>
            <p>{{DetailMovie.enm}}</p>
            <p>0</p>
            <p>{{DetailMovie.cat}}</p>
            <p>{{DetailMovie.fra}} / {{DetailMovie.dur}}</p>
            <p>{{DetailMovie.pubDesc}}</p>
          </div>
        </div>
      </div>
      <div class="detail_intro">
        <p>{{DetailMovie.dra}}</p>
      </div>
      <swiper :options="swiperOption" class="detail_player">
        <swiper-slide v-for="(slide, index) in imgLoad" :key="index">
          <img :src="slide | setWH(140.127)" />
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import { getDetailMovie } from "@/axios/api";
import 'swiper/css/swiper.css'
import Header from "@/components/header";
export default {
  name: "FilmDetails",
  data() {
    return {
      DetailMovie: {},
      semaphore: this.$route.query.id,
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 30,
        freeMode: true
      },
      //全部的图片和需要加载的图片
      imgAll: [],
      imgLoad: [],
      num: 0,
      time:null
    };
  },
  components: {
    Header,
    swiper,
    swiperSlide
  },
  beforeMount() {
    this.getDetailItem();
  },
  mounted() {
    this.time = setInterval(() => {
      console.log("simulate async data");
      this.num++;
      if (this.num < this.imgAll.length) {
        this.imgLoad.push(this.imgAll[this.num]);
      }
    }, 1000);
  },
  beforeDestroy() {
    //   进入详情页加载图片 退出时取消图片加载
      clearInterval(this.time)
  },
  methods: {
    getDetailItem() {
      getDetailMovie({ movieId: this.semaphore }).then(res => {
        this.DetailMovie = res.data.detailMovie;
        this.imgAll = res.data.detailMovie.photos;
      });
    }
  }
};
</script>