import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/index'
import Inner from '../pages/inner/Inner'
import List from '../pages/list/list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/",
      name:"Home",
      component: Home,
      redirect: '/home'
    },
    {
      path:"/home",
      name:"Home",
      component: Home,
    },
    {
      path:"/inner/:userId",
      name:"Inner",
      component: Inner
    },
    {
      path:"/list",
      name:"List",
      component: List
    }
  ]
})
