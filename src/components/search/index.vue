<template>
  <div class="search_body">
    <div class="search_input">
      <div class="search_input_wrapper">
        <i class="iconfont icon-tubiaolunkuo-"></i>
        <input type="text" @keydown="inquirePlus" v-model="inquireValue" />
      </div>
    </div>
    <div class="serach_result">
      <h3>电影/电视剧/综艺</h3>
      <!-- 搜索到的组件 -->
      <ul>
        <MovieItem v-for="item in inquireMovieData" :key="item.id" :MovieItem="item" />
      </ul>
    </div>
  </div>
</template>

<script>
// 汉字转拼音
const pinyin = require("pinyin");
import { inquireMovie } from "@/axios/api.js";
import MovieItem from "@/components/movieItem";
export default {
  name: "Search",
  data() {
    return {
      inquireValue: "",
      inquireMovieData: "",
      time:null
    };
  },
  methods: {
    // 查询
    inquire() {
      // 发送请求
      inquireMovie({
        cityId: this.$store.state.currentId.cityId,
        kw: pinyin(this.inquireValue, {
          style: pinyin.STYLE_NORMAL, // 设置拼音风格
          heteronym: true
        })
      }).then(res => {
        console.log(res);
        this.inquireMovieData = res.data.movies ? res.data.movies.list : "";
        console.log(this.inquireValue);
      });
    },
    //查询优化处理
    inquirePlus(){
      // 重置延迟期时间
      if(this.time) clearTimeout(this.time)
      this.time = setTimeout(() => {
        this.inquire()
      }, 1000);
    }
  },
  components: {
    MovieItem
  }
};
</script>

<style lang="" scoped>
.movie_item {
  padding: 0 15px;
}
.search_body {
  flex: 1;
  overflow: auto;
}
.search_body .search_input {
  padding: 8px 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e5e5e5;
}
.search_body .search_input .search_input_wrapper {
  padding: 0 10px;
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  background-color: #fff;
  display: flex;
  line-height: 20px;
}
.search_body .search_input .search_input_wrapper i {
  font-size: 16px;
  padding: 4px 0;
}
.search_body .search_input .search_input_wrapper input {
  border: none;
  font-size: 13px;
  color: #333;
  padding: 4px 0;
  outline: none;
  margin-left: 5px;
  width: 100%;
}
.search_body .serach_result h3 {
  font-size: 15px;
  color: #999;
  padding: 9px 15px;
  border-bottom: 1px solid #e6e6e6;
}
</style>