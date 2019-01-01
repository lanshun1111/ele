<template>
  <div class="box">
    <mt-header title="城市选择">
      <router-link to="/home" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="content">
      <mt-index-list>
        <mt-index-section v-for="item of cityList" :key="item.letter" :index="item.letter">
          <mt-cell v-for="itm of item.cities" :key="itm.id"  :title="itm.name" @click.native="selectCity(itm)"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header, IndexList, IndexSection, Indicator } from 'mint-ui'
Vue.use(Header, IndexList, IndexSection)
export default {
  data () {
    return {
      cityList: []
    }
  },
  mounted () {
    Indicator.open()
    fetch('daxunxuncity.json').then(res =>
      res.json()).then(data => {
      console.log(data)
      this.cityList = data
      Indicator.close()
    }).catch(err => console.log(err))
  },
  methods: {
    selectCity (item) {
      console.log(item.name)
      this.$store.commit('changeCity', item.name)
      window.history.go(-1)
    }
  }
}
</script>

<style>
.mint-header {
  background-color: #f66;
}
.mint-indexlist-navitem {
  padding: 0 6px;
}
</style>
