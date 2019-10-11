<template>
  <div class="movie_item">
    <div class="pic_show">
        <img src="" alt="">
    </div>
    <div class="info_list">
      <h2>
            中国机长
            <img src="" alt="">
      </h2>
      <p>
        观众评
        <span class="grade">9.4</span>
      </p>
      <p>主演: 张涵予,欧豪,杜江</p>
      <p>今天227家影院放映3193场</p>
    </div>
    <div class="btn_mall">购票</div>
  </div>
</template>

<script>
export default {
  name: "MovieItem"
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
.movie_item .pic_show {
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