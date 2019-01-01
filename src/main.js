// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './main.scss'
import store from '@/store/index.js'
import Mintui, { MessageBox } from 'mint-ui'
Vue.use(Mintui)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  mounted () {
    var myCity = new window.BMap.LocalCity()
    myCity.get((result) => {
      var cityname = result.name
      console.log(cityname)
      MessageBox.confirm('当前城市为' + cityname + '是否切换')
        .then(action => {
          this.$store.commit('changeCity', cityname)
        }).catch(err => console.log(err))
    })
  }
})
