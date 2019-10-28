<template>
  <div class="shopping_body">
    <Header :title="'我的购物车'" />
    <div class="shopping_movie_body">
    <ShoppingMovieItem
      v-for="(item,index) in shoppingData.shoppingCart"
      :key="index"
      :MovieItem="item"
      @deleteShoppingItem = "deleteShoppingItem"
    />
    </div>
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" />
    <Tabbar />
  </div>
</template>

<script>
import { getMovieInfo } from "@/axios/api.js";
import Header from "@/components/header";
import ShoppingMovieItem from "@/components/shoppingMovieItem";
import Tabbar from "@/components/tabBar";
import { SubmitBar } from "vant";
export default {
  name: "ShoppingCart",
  components: {
    Header,
    Tabbar,
    ShoppingMovieItem,
    "van-submit-bar": SubmitBar
  },
  data() {
    return {
      shoppingData: "",
      //   元数据
      sourceData: []
    };
  },
  methods: {
    onSubmit() {
      console.log("提交订单");
    },
    matchId(item) {
      this.sourceData.forEach(element => {
        if (element.id == item.id) {
          // 合并对象
          // this.extend(item, element);
          // vue检测不到对象的变化
          var obj = Object.assign({},item,element);
          Object.assign(item,obj)
        }
      });
    },
    deleteId(id){
      this.shoppingData.shoppingCart.forEach((item,index) => {
        if(item.id == id){
          this.shoppingData.shoppingCart.splice(index,1)
          sessionStorage.setItem('user',JSON.stringify(this.shoppingData))
        }
      })
    },
    // 合并对象
    extend(o, n) {
      for (var p in n) {
        if (n.hasOwnProperty(p) && !o.hasOwnProperty(p)) o[p] = n[p];
      }
    },
    // 获取购物车电影信息
    shoppingMovieData() {
      getMovieInfo({ cityId: this.$store.state.currentId.cityId }).then(res => {
        this.sourceData = res.data.movieList;
        this.shoppingData = JSON.parse(sessionStorage.getItem("user"));
        this.shoppingData.shoppingCart.forEach(item => {
          this.matchId(item);
        });
        console.log(this.shoppingData.shoppingCart);
      });
    },
    deleteShoppingItem(payload){
      this.deleteId(payload)
    }
  },
  mounted() {
    this.shoppingMovieData()
  },
  watch: {
    shoppingData: {
      handler: function() {
        console.log("变化");
        // this.shoppingMovieData()
      },
      deep: true
    }
  }
};
</script>

<style lang="stylus" scoped>
.van-submit-bar {
  bottom: 53px;
}

.movie_item {
  padding: 0 20px;
}
.shopping_movie_body{
    margin-bottom: 105px;
    position: relative;
    top: 0;
    bottom: 0;
}
</style>