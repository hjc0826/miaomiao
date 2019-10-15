<template>
  <div class="city_body">
    <div class="city_list">
      <div class="city_hot">
        <h2>热门城市</h2>
        <ul class="clearfix">
          <li v-for="item in hotCity" :key="item.id">{{item.nm}}</li>
        </ul>
      </div>
      <div class="city_sort">
          <IndexCity v-for="(item,index) in indexCity" :key="index" :itemData="item"/>
      </div>
    </div>
    <CityList :index="indexCity"/>
  </div>
</template>

<script>
import IndexCity from './components/index_city'
import CityList from './components/city_list'
import { getCityList } from '../../axios/api'
export default {
    name : 'city',
    data() {
      return {
        indexCity:[],
        hotCity:[]
      }
    },
    components:{
        IndexCity,
        CityList
    },
    mounted() {
      // 获取城市数据
      getCityList().then( res =>{
        var cities = res.data.cities
        this.formatCity(cities)
      })
    },
    methods: {
      formatCity(cities){
        for(var i = 0; i < cities.length ;i++){
          
          if(cities[i].isHot){
            this.hotCity.push(cities[i])
          }
            var firstLetter = cities[i].py.substring(0,1).toUpperCase()
            let self = this
            if(toCom(firstLetter,self)){
              this.indexCity.push({
                index:firstLetter,
                list :[
                  cities[i]
                ]
              })
            }
            else{
              for(var j = 0;j < this.indexCity.length ;j++){
                if(this.indexCity[j].index === firstLetter){
                  this.indexCity[j].list.push(cities[i])
                }
              }
            }
        } 
        // 判断indexCity中是否有index的城市
        function toCom(firstLetter,self){
          for(var i = 0;i < self.indexCity.length ; i++){
            if(self.indexCity[i].index === firstLetter){
              return false
            }
          }
          return true
        }
        this.indexCity.sort((a, b) => a.index.localeCompare(b.index, 'en', {sensitivity: 'base'}))
      }
      
    },
};
</script>

<style lang="" scoped>
    .city_body{
        display: flex;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        margin-top: 95px;
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
        z-index: 11;
    }
</style>