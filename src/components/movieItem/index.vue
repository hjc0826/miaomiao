<template>
  <div class="movie_item">
    <div class="pic_show">
        <img :src="MovieItem.img | setWH('128.180')" alt=""/>
    </div>
    <div class="info_list">
      <h2>
            {{MovieItem.nm}}
            <img :src="MovieItem.version ? imgs.img : '' " alt=""/>
      </h2>
      <p>
        观众评价
        <span class="grade">{{MovieItem.sc}}</span>
      </p>
      <p>{{MovieItem.star}}</p>
      <p>{{MovieItem.showInfo}}</p>
    </div>
    <div class="btn_mall">{{tag}}</div>
  </div>
</template>

<script>
import img from '../../assets/imges/imax.png'
export default {
  name: "MovieItem",
  props:{
    MovieItem : Object,
    tag :String
  },
  data() {
    return {
      imgs : {
        img
      }
    }
  },
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
.movie_item .pic_show img{
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
}
</style>