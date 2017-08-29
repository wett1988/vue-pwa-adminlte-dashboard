import Vue from 'vue'
import Router from 'vue-router'

import LayoutHeader from '@/components/Layout/LayoutHeader'
import LayoutMainSidebar from '@/components/Layout/LayoutMainSidebar'
import LayoutFooter from '@/components/Layout/LayoutFooter'
import LayoutControlSidebar from '@/components/Layout/LayoutControlSidebar'

import Home from '@/components/Home'

import AuthLogin from '@/components/Auth/AuthLogin'
import AuthRegister from '@/components/Auth/AuthRegister'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        header: LayoutHeader,
        mainSidebar: LayoutMainSidebar,
        footer: LayoutFooter,
        controlSidebar: LayoutControlSidebar
      },
      meta: {auth: true}
    },
    {
      path: '/login',
      name: 'login',
      component: AuthLogin
    },
    {
      path: '/register',
      name: 'register',
      component: AuthRegister
    }
  ]
})
