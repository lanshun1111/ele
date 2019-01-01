import Vue from 'vue'
import Router from 'vue-router'
import MintUi from 'mint-ui'

Vue.use(MintUi)
Vue.use(Router)
const Home = () => import('@/components/Home/index')
const Kind = () => import('@/components/Kind/index')
const Cart = () => import('@/components/Cart/index')
const Footer = () => import('@/components/Footer/main')
const User = () => import('@/components/User/index')
const City = () => import('@/components/city/index')
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: Home,
        footer: Footer
      }
    },
    {
      path: '/city',
      name: 'city',
      components: {
        default: City
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: Kind,
        footer: Footer
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: Cart,
        footer: Footer
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: User,
        footer: Footer
      }
    }
  ]
})
