import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Details from '@/components/Details'
import Home from '@/components/Home'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/blog'
    },
    {
      path: '/blog',
      name: 'Index',
      component: Index,
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
  ],
  mode: 'history'
})
