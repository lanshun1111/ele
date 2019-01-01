<template>
  <div class="box">
    <div class="header">
        购物
    </div>
    <div class="content">
      中心部分
      <mt-swipe :auto="2000">
        <mt-swipe-item><img src="http://pic1.win4000.com/pic/9/86/c326d057ac.jpg" alt="美女"></mt-swipe-item>
        <mt-swipe-item><img src="http://pic1.win4000.com/pic/8/f2/fc0a8026c8.jpg" alt="美女"></mt-swipe-item>
        <mt-swipe-item><img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1744202229,3506499731&fm=27&gp=0.jpg" alt="美女"></mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
export default {}
</script>

<style></style>
