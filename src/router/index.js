import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Tz from '@/components/Tz'
import food from '@/components/food'
import seller from '@/components/seller'
import pinpai from '@/components/pinpai'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'food',
          name: 'food',
          component: food
        },
        {
          path: 'pinpai',
          name: 'pinpai',
          component: pinpai
        },
        {
          path: 'seller',
          name: 'seller',
          component: seller
        }]
    },
    {
      path: '/Tz',
      name: 'Tz',
      component: Tz
    },
    {
      path: '/pinpai',
      name: 'pinpai',
      component: pinpai
    }
  ]
})
