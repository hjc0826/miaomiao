<template>
  <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <swiper-slide>
      <div class="movie_item">
        <div class="pic_show" @click="toFilmDetail">
          <img :src="MovieItem.img | setWH('128.180')" alt />
        </div>
        <div class="info_list">
          <h2>
            {{MovieItem.nm}}
            <img :src="MovieItem.version ? imgs.img : '' " alt />
          </h2>
          <p>
            观众评价
            <span class="grade">{{ MovieItem.sc }}</span>
          </p>
          <p>{{MovieItem.star}}</p>
          <p>{{MovieItem.showInfo}}</p>
        </div>
        <div class="btn_mall">{{MovieItem.num}} 张</div>
      </div>
    </swiper-slide>
    <swiper-slide>
        <div class="delete_body">
            <div class="reset">
                重置
            </div>
            <div class="delete" @click="deleteShopping(MovieItem.id)">
                删除
            </div>
        </div>
    </swiper-slide>
  </swiper>
</template>
<script>
// 引入图片
import img from "../../assets/imges/imax.png";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  name: "MovieItem",
  props: {
    MovieItem: Object,
    tickes: [String, Number]
  },
  data() {
    return {
      imgs: {
        img
      },
      swiperOption: {
        // some swiper options/callbacks
        // 所有的参数同 swiper 官方 api 参数
        // ...
        freeMode:true,
        setWrapperSize :true
      }
    };
  },
  methods: {
    toFilmDetail() {
      this.$router.push({
        path: "/detail",
        query: {
          id: this.MovieItem.id
        }
      });
    },
    callback(data) {
        console.log(1)
    },
    deleteShopping(payload){
        console.log(payload)
        this.$emit("deleteShoppingItem",payload)
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    console.log("this is current swiper instance object", this.swiper);
    //   this.swiper.slideTo(3, 1000, false)
  }
};
</script>

<style>
.movie_item {
  margin-top: 12px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  padding-bottom: 10px;
}
.pic_show {
  padding: 0 10px;
}
.movie_item .pic_show img {
  width: 64px;
  height: 90px;
}
.movie_item .info_list {
  margin-left: 10px;
  flex: 1;
  position: relative;
  font-size: 13px;
  color: #666;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.movie_item .info_list img {
  width: 50px;
  position: absolute;
  right: 10px;
  top: 5px;
}

.movie_item .info_list h2 {
  font-size: 17px;
  line-height: 24px;
  width: 150px;
}
.movie_item .info_list .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 15px;
}
.movie_item .btn_mall {
  width: 47px;
  height: 27px;
  line-height: 28px;
  text-align: center;
  background-color: #f03d37;
  color: #fff;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  margin: 0 15px;
}
.swiper-wrapper {
  padding: 10px 5px;
}
.delete_body{
    width: 100%;
    background-color: #e6e6e6;
    height: 100%;
    display: flex;
    justify-content: center;
    line-height: 110px;
}
.delete_body .reset{
    flex: 1;
    background-color: #666;
    color: red;
    text-align: center;
}
.delete_body .delete{
    flex: 1;
    text-align: center;
    background-color: #f03d37;
    color: #ffffff;
}
.swiper-slide{
    height: 100%;
}
</style>