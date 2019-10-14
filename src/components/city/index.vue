<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li>北京</li>
          <li>上海</li>
          <li>广州</li>
          <li>天津</li>
          <li>杭州</li>
          <li>南京</li>
          <li>成都</li>
        </ul>
      </div>
      <div class="city_sort">
          <IndexCity />
      </div>
    </div>
    <div class="city_index">
        <CityList />
    </div>
  </div>
</template>

<script>
import IndexCity from './components/index_city'
import CityList from './components/city_list'
export default {
    name : 'city',
    components:{
        IndexCity,
        CityList
    }
};
</script>

<style lang="" scoped>
    .city_body{
        margin-top: 20px;
        display: flex;
        width: 100%;
    }
    .city_body .city_list{
        flex: 1;
        overflow: auto;
        background: #fff5f0;
    }
    .city_body .city_list .city_hot h2{
        padding-left: 15px;
        line-height: 30px;
        font-size: 14px;
        background: #f0f0f0;
        font-weight: 400;
    }
    .city_body .city_list .city_hot ul li{
        float: left;
        background: #fff;
        width: 29%;
        height: 33px;
        margin-top: 15px;
        margin-left: 3%;
        padding: 0 4px;
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        line-height: 33px;
        text-align: center;
        box-sizing: border-box;
    }
    .city_body .city_index{
        width: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-left: 1px solid #e6e6e6;
    }
</style>