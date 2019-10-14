<template>
  <div class="index_card">
    <h2>{{itemData.index}}</h2>
    <ul>
        <li v-for="item in itemData.list" :key="item.id">{{item.nm}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "IndexCity",
  props : {
    indexCity : [Object,Array],
    itemData : Object
  },
  created() {
    
  },
  data() {
    return {
      cityList : null
    }
  },
};
</script>

<style scoped>
.index_card{
    margin-top: 20px;
}
.index_card h2 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: 400;
}
.index_card ul{
    padding-left: 10px;
    margin-top: 10px;
}
.index_card ul li{
    line-height: 30px;
}
</style>