<template>
  <div class="city_index">
    <ul>
      <li v-for="item in index" :key="item.id">{{item.index}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CityList",
  props:{
    index:{
      type : [Object,Array]
    }
  }
};
</script>

<style scoped>
.city_index {
  width: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-left: 1px solid #e6e6e6;
}
</style>