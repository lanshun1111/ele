<template>
<div class='box'>
  <div class="header1">
    <div class="header-top">
    <router-link to='/city' slot="left">
      <mt-button>{{ city }}</mt-button>
    </router-link>
    </div>
    <div class="header-search">
      <input type="text" v-model='search' placeholder="搜索饿了么商家、商品名称">
    </div>
  </div>
  <div class="content">
    <div class="content-top">
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/7/d8/a867c870b22bc74c87c348b75528djpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/" alt="">
        <span>美食</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
        <span>晚餐</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/e/89/185f7259ebda19e16123884a60ef2jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
        <span>商城便利</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/0/d0/dd7c960f08cdc756b1d3ad54978fdjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
       <span>水果</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/7/0a/af108e256ebc9f02db599592ae655jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
       <span>医药健康</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/3/01/c888acb2c8ba9e0c813f36ec9e90ajpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
       <span>浪漫鲜花</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/c/21/e42997b86b232161a5a16ab813ae8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
       <span>厨房生鲜</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/7/d6/6f2631288a44ec177204e05cbcb93jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
       <span>地方小吃</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/a/8a/ec21096d528b7cfd23cdd894f01c6jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
       <span>地方菜系</span>
      </router-link>
      <router-link to='' class='doshap'>
        <img src="https://fuss10.elemecdn.com/e/c7/b7ba9547aa700bd20d0420e1794a8jpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/">
       <span>麻辣烫</span>
      </router-link>
    </div>
    <div class="tu1">
      <h2>品质套餐</h2>
      <p>搭配齐全吃得好</p>
      <a>立即抢购&nbsp;&gt;</a>
      <img src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/" alt="">
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item><img src="https://fuss10.elemecdn.com/3/81/10542f410b30f939574d01ac39208jpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"></mt-swipe-item>
      <mt-swipe-item><img src="https://fuss10.elemecdn.com/3/40/00cbad36e9ba18ea45b3b7eed21efjpeg.jpeg?imageMogr/format/webp/thumbnail/568x/"></mt-swipe-item>
    </mt-swipe>
    <!-- 这是商家 -->
    <div class="shop">
      <span>--</span>&nbsp;推荐商家&nbsp;<span>--</span>
    </div>
    <div class="shopselect">
      <ul class="comCS">
        <router-link to='' tag='li'>综合排序</router-link>
        <router-link to='' tag='li'>距离最近</router-link>
        <router-link to='' tag='li'>品质联盟</router-link>
        <router-link to='' tag='li'>筛选</router-link>
      </ul>
    </div>
    <!-- 商店渲染 -->
    <div class="shopList">
      <ul>
        <router-link to='' tag='li' v-for='item of resq' :key='item.name'>
          <div class="left">
            <img :src="item.picture" alt="">
          </div>
          <div class="right">
            <h2>{{item.name}}</h2>
            <span>{{item.rating}}</span>
            <span>月销售{{item.soldNum}}单</span>
            <p>
              <span>￥{{item.minPay}}起送&nbsp;|</span>
              <span>夜间配送费{{item.payNight}}元</span>
              <span>{{item.distance}}公里|{{item.lastsendTime}}分钟</span>
            </p>
            <p>{{item.ComFood}} ||{{item.support}}</p>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
import { mapState, mapActions } from 'vuex'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {
  name: 'home',
  data () {
    return {
      search: '',
      resq: [],
      picture: ''
    }
  },
  computed: {
    ...mapState({
      city: state => state.city
    })
  },
  methods: {
    searchone () {
      console.log(111)
    },
    ...mapActions({
    }),
    getdata (data, support) {
      // console.log(data.items)
      console.log(111)
      var arr = []
      var str = ''
      var strarr = []
      var str2 = ''
      var len = ''
      for (var item11 of data.items) {
        if (item11.restaurant.image_path) {
          var data1 = item11.restaurant
          str = item11.restaurant.image_path
          strarr = str.split('')
          strarr.splice(1, 0, '/')
          strarr.splice(4, 0, '/')
          len = str.length - 3
          str2 = str.substr(len, 3)
          if (str2 === 'peg') {
            str2 = 'jpeg'
          }
          strarr.unshift('https://fuss10.elemecdn.com/')
          strarr.push('.')
          strarr.push(str2)
          str = strarr.join('')
          arr.push({picture: str, name: item11.restaurant.name, distance: data1.float_delivery_fee, minPay: data1.float_minimum_order_amount, soldNum: data1.recent_order_num, ComFood: data1.flavors[0].name, payNight: data1.float_delivery_fee, lastsendTime: data1.order_lead_time, rating: data1.rating, support})
        } else if (item11.restaurant.gradient.icon_hash) {
          strarr = str.split('')
          strarr.splice(1, 0, '/')
          strarr.splice(4, 0, '/')
          len = str.length - 3
          str2 = str.substr(len, 3)
          if (str2 === 'peg') {
            str2 = 'jpeg'
          }
          strarr.unshift('https://fuss10.elemecdn.com/')
          strarr.push('.')
          strarr.push(str2)
          str = strarr.join('')
          arr.push({picture: str, name: item11.restaurant.name})
        }
      }
      this.resq = arr
      console.log(arr[0])
    }
  },
  mounted () {
    const that = this
    fetch('/elerestapi/shopping/v3/restaurants?latitude=39.90469&longitude=116.407173&offset=0&limit=100&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5')
      .then(function (res) {
        return res.json()
      })
      .then(function (data) {
        console.log(data.items[0].restaurant.support_tags[1].text)
        var support = data.items[0].restaurant.support_tags[1].text
        that.getdata(data, support)
      })
  }
}
</script>

<style lang='scss'>
@import '@/lib/reset.scss';

 .box {
   height:auto;
   width:100%;
   @include flexbox();
   @include flex-direction(column)
   @include overflow();
   // 这是小商城的便利
   .content{
     padding-top:1rem;
     .shopselect {
       @include rect(100%,1.0rem);
       ul {
         flex-wrap:nowrap;
         @include rect(100%,100%);
         li{
            flex:1;
            @include flexbox;
            text-align:center;
            justify-content:center;
         }
       }
     }
     .shopList {
       @include rect(100%, 100%);
       ul{
         @include rect(100%, 100%);
         @include flexbox();
         @include flex-direction(column);
         li {
           @include rect(100%,1.75rem);
           margin:0.1rem auto;
           @include flexbox();
           flex-wrap: nowrap;
           .left {
             img {
               @include rect(0.6rem,0.60rem);
             }
           }
         }
       }
     }
     .shop {
       margin-top:0.02rem;
        width:100%;
        height:0.8rem ;
        line-height:0.8rem;
        text-align:center;
        font-size:800;
        span {
          font-size:0.14rem;
        }
     }
     .mint-swipe {
      height:1rem;
      width:100%;
        img {
          height:auto;
          width:100%;
        }
}
    .tu1{
      position:relative;
      @include rect(3.6rem,1.3rem);
      margin:0.2rem auto;
      @include background-color(#f9f9f9);
      a{
        display:block;
        margin-left:0.1rem;
      }
      p{
        font-size:0.16rem;
        color:#777;
        margin-bottom:0.1rem;
        margin-left:0.1rem;
      }
      h2{
        @include font-size(0.2rem);
        font-weight:700;
        color:#333;
        padding-top:0.1rem;
        margin-left:0.1rem;
      }
      img{
        position:absolute;
        width:1.3rem;
        height:auto;
        top:.24rem;
        right:0.2rem;
      }
    }
   .content-top{
     @include flexbox();
     @include rect(100%,auto);
     flex-wrap:wrap;
     margin-top:0.08rem;
     .doshap{
       @include flexbox();
       width:20%;
       height:0.80rem;
       flex-direction:column;
       justify-content:center;
       align-items:center;
       span{
         margin-to: 0.01rem;
         color:#666;
       }
       img {
         @include flexbox();
         justify-content:center;
         align-items:center;
         @include rect(0.46rem,0.46rem);
       }
     }
   }
 }
   .header1 {
     position:fixed;
     top:0;
     height:1rem;
     width:100%;
     @include flexbox();
     @include flex-direction(column)
     background-color:#0090ff;
     justify-content:center;
     z-index:20;
     .header-top {
       @include rect(100%, 0.50rem);
     }
     .header-search {
       @include rect(100%, auto);
       input {
         @include flexbox();
         @include rect(90%,0.44rem);
         margin-left:5%;
         height:0.36rem;
         border:none;
         font-size:12px;
         text-align: center;
       }
     }
   }
 }
</style>
