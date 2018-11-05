import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Tz from '@/components/Tz'
import food from '@/components/food'
import seller from '@/components/seller'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
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
          path: 'seller',
          name: 'seller',
          component: seller
        }]
    },
    {
      path: '/Tz',
      name: 'Tz',
      component: Tz
    }
  ]
})
