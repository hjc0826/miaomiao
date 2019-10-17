<template>
  <li>
    <div>
      <span>{{itemDate.nm}}</span>
      <span class="q">
        <span class="price">{{itemDate.sellPrice}}</span>
        元起
      </span>
    </div>
    <div class="address">
      <span>{{itemDate.addr}}</span>
      <span>{{itemDate.distance}}</span>
    </div>
    <div class="card">
      <div class="bl" v-if="itemDate.tag.allowRefund">购买</div>
      <div class="bl" v-if="itemDate.tag.endorse">退</div>
      <div class="or" v-if="itemDate.tag.sell">折扣卡</div>
      <div class="or" v-if="itemDate.tag.snack">小吃</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "CinemaItem",
  props:{
    itemDate : [Object,Array]
  },
  data() {
    return {
      item : {}
    }
  },
};
</script>

<style scoped>
li {
  border-bottom: 1px solid #e6e6e6;
  margin-bottom: 20px;
}
li div {
  margin-bottom: 10px;
}
li div .q {
  font-size: 11px;
  color: #f03d37;
}
li div .q .price {
  font-size: 18px;
}
li .address {
  font-size: 13px;
  color: #666;
}
li .address span:nth-of-type(2) {
  float: right;
}
li .card {
  display: flex;
}
li .card div {
  padding: 0 3px;
  height: 15px;
  line-height: 15px;
  border-radius: 2px;
  color: #f90;
  border: 1px solid #f90;
  font-size: 13px;
  margin-right: 5px;
}
li .card div.bl {
  color: #589daf;
  border: 1px solid #589daf;
}
li .card div.or {
  color: #f90;
  border: 1px solid #f90;
}
</style>