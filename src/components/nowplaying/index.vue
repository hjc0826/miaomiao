<template>
  <div>
    <div class="movieList">
      <MovieItem v-for="item in MovieInfo" :key="item.id" :MovieItem="item" :tag="'购买'" @buytickeks="buyTickeks"/>
      <!-- 弹出层 -->
      <van-sku
        v-model="show"
        :sku="skuData.sku"
        :goods="skuData.goods_info"
        :goods-id="skuData.goods_id"
        :hide-stock="skuData.sku.hide_stock"
        :quota="skuData.quota"
        :quota-used="skuData.quota_used"
        :show-soldout-sku="false"
        hide-quota-text
        safe-area-inset-bottom
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
  </div>
</template>

<script>
import { Popup, Sku, Toast } from "vant";
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
      ajaxCurrentId: this.$store.state.currentId,
      show: false,
      buyMovieItem : {},
      skuData: {
        goods_id: "",
        quota: 15,
        quota_used: 0,
        goods_info: {
          title: "电影图片",
          picture:"",
          price: 1
        },
        sku: {
          price: "29.00",
          stock_num: 116,
          none_sku: false,
          hide_stock: false,
          collection_id: 2261,
          tree: [
            {
              k: "电影",
              k_id: "1",
              v: [
                {
                  id: "30349",
                  name: ""
                }
              ],
              k_s: "s1",
              count: 1
            },
            {
              k: "类型",
              k_id: "2",
              v: [
                {
                  id: "1193",
                  name: "IMAX"
                },
                {
                  id: "1194",
                  name: "3D"
                }
              ],
              k_s: "s2",
              count: 2
            }
          ],
          list: [
            {
              id: 2259,
              price: 100,
              discount: 100,
              code: "",
              s1: "30349",
              s2: "1193",
              stock_num: 110,
              goods_id: 946755,
              price: "3500"
            },
            {
              id: 2260,
              price: 100,
              discount: 100,
              code: "",
              s1: "30349",
              s2: "1194",
              s3: "0",
              s4: "0",
              s5: "0",
              stock_num: 6,
              goods_id: 946755,
              price: "6500"
            }
          ]
        }
      }
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
      getLocation();
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert("该浏览器不支持定位，不好意思");
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
        });
      }
    },
    onBuyClicked(data){
      console.log('购买')
    },
    onAddCartClicked(data){
      // 读取sessionStorage中user中的用户对象
      let index = JSON.parse(sessionStorage.getItem("user"));
      // 商品的id 和 商品选择数量
      index.shoppingCart.push({
        id : data.goodsId,
        num : data.selectedNum
      })
      sessionStorage.setItem("user", JSON.stringify(index));
      Toast.success('成功加入购物车');
    },
    buyTickeks(payload){
      // 判断是否登陆 查看状态码
      if(!this.$store.state.islogin){
        Toast.fail('请登录后在购买票');
        return
      }
      this.show = !this.show
      this.buyMovieItem = payload
      this.skuData.sku.tree[0].v[0].name = payload.nm
      this.skuData.goods_id = payload.id
      this.skuData.goods_info.picture = payload.img.replace(/w\.h/,'160.180')
    }
  },
  components: {
    MovieItem,
    "van-popup": Popup,
    "van-sku": Sku,
    Toast
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