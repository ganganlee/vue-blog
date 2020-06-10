import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Details from '@/components/Details'
import Home from '@/components/Home'
import Archives from '@/components/Archives'
import Tag from '@/components/Tag'

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
    {
      path: '/archives',
      name: 'archives',
      component: Archives,
    },
    {
      path: '/tag',
      name: 'tag',
      component: Tag,
    },
  ],
  mode: 'history'
})
