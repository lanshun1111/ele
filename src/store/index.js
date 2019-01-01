import Vue from 'vue'
import Vuex from 'vuex'
import Cart from '@/components/Cart/store'
import Footer from '@/components/Footer/store'
import Header from '@/components/Header/store'
import Home from '@/components/Home/store'
import Kind from '@/components/Kind/store'
import User from '@/components/User/store'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: []
  },
  getters: {

  },
  actions: {

  },
  mutations: {

  },
  modules: {
    Cart,
    Footer,
    Header,
    Home,
    Kind,
    User
  }
})

export default store
