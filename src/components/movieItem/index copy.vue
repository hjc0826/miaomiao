<template>
  <div class="movie_item">
    <div class="pic_show" @click="toFilmDetail">
      <img :src="MovieItem.img | setWH('128.180')" alt />
    </div>
    <div class="info_list">
      <h2>
        {{MovieItem.nm}}
        <img :src="MovieItem.version ? imgs.img : '' " alt />
      </h2>
      <p>
        观众评价
        <span class="grade">{{ MovieItem.sc }}</span>
      </p>
      <p>{{MovieItem.star}}</p>
      <p>{{MovieItem.showInfo}}</p>
    </div>
    <div class="btn_mall" @click="buyTickeks">{{tag}}</div>
    <!-- <van-popup v-model="show" round position="bottom" :style="{ height: '60%' }"> -->
    <!-- 商品布进器 -->
    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :stock_num="sku.stock_num"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :initial-sku="initialSku"
      :hide-stock="sku.hide_stock"
      :custom-stepper-config="customStepperConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
    <!-- </van-popup> -->
  </div>
</template>

<script>
import img from "../../assets/imges/imax.png";
import { Popup, Sku, Toast } from "vant";
export default {
  name: "MovieItem",
  props: {
    MovieItem: Object,
    tag: String
  },
  data() {
    return {
      imgs: {
        img
      },
      show: true,

      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "电影", // skuKeyName：规格类目名称
            v: [
              {
                id: "54546", // skuValueId：规格值 id
                name: "开心老妈", // skuValueName：规格值名称
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "类别", // skuKeyName：规格类目名称
            v: [
              {
                id: "30349", // skuValueId：规格值 id
                name: "Imax", // skuValueName：规格值名称
              },
              {
                id: "1215",
                name: "2D_"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],

        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 2259, // skuId，下单时后端需要
            price: 1, // 价格（单位分）
            s1: "54546", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "30349", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 50, // 当前 sku 组合对应的库存
            price:'4666'
          },
          {
            id: 2260, // skuId，下单时后端需要
            price: 1, // 价格（单位分）
            s1: "54546", // 规格类目 k_s 为 s1 的对应规格值 id
            s2: "1215", // 规格类目 k_s 为 s2 的对应规格值 id
            s3: "0", // 最多包含3个规格值，为0表示不存在该规格
            stock_num: 50, // 当前 sku 组合对应的库存
            price:'3555'
          }
        ],
        hide_stock: true,
        price: "29.88", // 默认价格（单位元）
        stock_num: 100, // 商品总库存
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: false, // 是否无规格商品
      },
      initialSku: {
        s1: "54546",
        s2: "1215",
        // 初始选中数量
        selectedNum: 3
      },

      goods: {
        // 商品标题
        // title: "测试商品",
        // // 默认商品 sku 缩略图
        // picture: "https://img.yzcdn.cn/1.jpg"
      },
      quotaUsed: 0,
      quota: 4,
      // 商品ID
      goodsId: "2261",
      customStepperConfig: {
        // 自定义限购文案
        quotaText: "每次限购2张",
        // 自定义步进器超过限制时的回调
        handleOverLimit: data => {
          const { action, limitType, quota, quotaUsed } = data;
          if (action === "minus") {
            Toast("至少买一张");
          } else if (action === "plus") {
            const { LIMIT_TYPE } = Sku.skuConstants;
            if (limitType === LIMIT_TYPE.QUOTA_LIMIT) {
              let msg = `单次限购${quota}张`;
              if (quotaUsed > 0) msg += `，你已购买${quotaUsed}`;
              Toast(msg);
            } else {
              Toast("票不够了");
            }
          }
        },
        // 步进器变化的回调
        handleStepperChange: currentValue => {
          console.log(currentValue);
        },
        // 库存
        stockNum: 312,
        // 格式化库存
        stockFormatter: stockNum => {
          console.log(stockNum);
        }
      },
      // 商品点击购买后的后调参数
      skuData: {
        // 商品 id
        goodsId: "946755",
        // 留言信息
        messages: {
          message_0: "12",
          message_1: ""
        },
        // 另一种格式的留言，key 不同
        cartMessages: {
          留言1: "xxxx"
        },
        // 选择的商品数量
        selectedNum: 1,
        // 选择的 sku 组合
        selectedSkuComb: {
          id: 2257,
          price: 100,
          s1: "30349",
          s2: "1193",
          s3: "0",
          stock_num: 111
        }
      }
    };
  },
  methods: {
    toFilmDetail() {
      this.$router.push({
        path: "/detail",
        query: {
          id: this.MovieItem.id
        }
      });
    },
    buyTickeks() {
      console.log(this);
      this.show = !this.show;
    },
    onBuyClicked(data) {
      console.log(data);
    },
    onAddCartClicked() {}
  },
  components: {
    "van-popup": Popup,
    "van-sku": Sku
  }
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
.movie_item .pic_show img {
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