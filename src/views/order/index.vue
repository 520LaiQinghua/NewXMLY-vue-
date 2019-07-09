<template>
  <div id="orderDetail">
    <div class="orderacount">
      <p>购买账号</p>
      <router-link to="/mine">LittleStr星</router-link>
    </div>
    <div class="goodsDetail">
      <label class="checkAll">
        <input type="checkbox" :checked="selectAll" @change="handleToggle"/>
        <p>全选</p>
      </label>
      <div class="ordermain">
        <div class="goodsList">
          <ul class="detail">
            <li v-for="(item,index) in goods" :key="index" @change="handleToggleGoods(index)">
              <div class="checked">
                <input type="checkbox" :checked="item.flag"/>
              </div>
              <div class="goodsPic">
                <img
                  :src="item.img"
                />
              </div>
              <div class="goodsDes">
                <p>{{item.goodsName}}哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                <span>7天退货无忧</span>
              </div>
              <div class="price-num">
                <span>x1</span>
                <span @click="handleDeleted(index)">移除</span>
                <strong>￥{{(item.price*100)/100}}</strong>
              </div>
            </li>
          </ul>
        </div>
        <div class="priceAll">
          <div class="checkBom">
            <input type="checkbox" :checked="selectAll" @change="handleToggle"/>
            <p>全选</p>
            <p class="sumPrice">总价</p>
          </div>
          <div class="selectGood">
            <p>已选择<span>{{count.goodsNum}}</span>件商品</p>
          </div>
          <strong>￥{{count.goodsPrice}}</strong>
        </div>
        <div class="quan">
          <div class="youhuiquan">
            <p>优惠券</p>
            <strong>
              无可用优惠券
              <i class="iconfont icon-arrow-right"></i>
            </strong>
          </div>
          <div class="daijinquan">
            <p>代金券</p>
            <strong>
              无可用代金券
              <i class="iconfont icon-arrow-right"></i>
            </strong>
          </div>
        </div>
      </div>
    </div>
    <div class="subOrder">
      <strong>￥{{count.goodsPrice}}</strong>
      <button class="submit">提交订单</button>
    </div>
  </div>
</template>

<script>
import Vuex from "vuex"
import {mapState,mapMutations,mapGetters} from "vuex"

export default {
  name: "order",
  filters:{
    setPrice(num,price){
      return num*price
    }
  },
  computed:{
    ...mapState({
      goods:state=>state.cart.goods,
      selectAll:state=>state.cart.selectAll,

    }),
    ...mapGetters({
      count:"cart/count"
    })
  },
  created() {
    this.getGoods();
  },
  data() {
    return {
      
    }
  },
  methods: {
    ...Vuex.mapActions({
      getGoods:"cart/getActionGoods"
    }),
    ...mapMutations({
      handleToggle:"cart/handleToggle",
      handleToggleGoods:"cart/handleToggleGoods"
    })
  },
};
</script>

<style scope>
#orderDetail {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
.orderacount {
  width: 100%;
  height: 9%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.2rem;
}
.orderacount > p {
  color: #c2c2c2;
  font-size: 0.28rem;
}
.orderacount > a {
  font-size: 0.3rem;
}
.goodsDetail {
  height: 82%;
  width: 100%;
  margin: 0.25rem 0 0 0;
  background: #fff;
  position: absolute;
  left: 0;
  top: 1.2rem;
}
.checkAll {
  height: 5%;
  display: flex;
  padding: 0.15rem 0.2rem;
}
.checkAll > input {
  width: 0.25rem;
  height: 0.25rem;
}
.ordermain {
  height: 95%;
  overflow-y: auto;
}
.goodsList {
  position: relative;
  min-height: 2.3rem;
}
.detail {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.detail > li {
  display: flex;
  width: 100%;
  height: 2.3rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.35rem 0.2rem;
  border-bottom: 1px solid #c3c3c3;
}
.detail > li > .checked > input {
  width: 0.25rem;
  height: 0.25rem;
}
.detail > li > .goodsPic > img {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 0.1rem;
  margin: 0 0.15rem;
}
.detail > li > .goodsDes {
  display: flex;
  height: 100%;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0.05rem 0;
  
}
.detail > li > .goodsDes > p {
  font-size: 0.32rem;
  color: #333333;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.detail > li > .price-num {
  display: flex;
  width: 20%;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  /* margin-left: 0.5rem; */
}
.detail > li > .price-num > strong {
  color: #c33;
  font-size: 0.3rem;
}
.priceAll {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.28rem 0.25rem;
}
.priceAll > .checkBom {
  display: flex;
  justify-content: center;
  align-items: center;
}
.priceAll > .checkBom > input {
  width: 0.25rem;
  height: 0.25rem;
}
.priceAll > .checkBom > .sumPrice {
  margin-left: 0.25rem;
  color: #c33;
  font-size: 0.3rem;
}
.priceAll > p {
  color: #ccc;
  font-size: 0.25rem;
}
.priceAll > strong {
  color: #c33;
  font-size: 0.3rem;
  width: 1.2rem;
  text-align: center;
}
.quan {
  width: 100%;
  background: #fff;
}
.quan > .youhuiquan,
.quan > .daijinquan {
  width: 100%;
  border: 1px solid #f2f2f2;
  padding: 0.35rem 0.3rem;
  display: flex;
  justify-content: space-between;
}
.quan > .youhuiquan > p,
.quan > .daijinquan > p {
  color: #c3c3c3;
  font-size: 0.25rem;
}
.quan > .youhuiquan > strong,
.quan > .daijinquan > strong {
  font-size: 0.25rem;
  color: #333;
}
.quan > .youhuiquan > strong > i,
.quan > .daijinquan > strong > i {
  color: #ccc;
}
.subOrder {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  border-top: 1px solid #ccc;
  padding: 0 0.3rem;
}
.subOrder > .submit {
  width: 45%;
  height: 0.7rem;
  background: #ff5000;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.3rem;
  border: 0;
  border-radius: 0.35rem;
}
.subOrder > strong {
  color: #c33;
  font-size: 0.3rem;
}
</style>