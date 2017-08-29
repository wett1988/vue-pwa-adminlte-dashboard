// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.router = router

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAuth from '@websanova/vue-auth'

Vue.use(VueAxios, axios)

// Vue.axios.defaults.baseURL = 'https://api-demo.websanova.com/api/v1'
Vue.axios.defaults.baseURL = 'http://localhost:8000/api/v1'

Vue.use(VueAuth, {
  auth: require('@websanova/vue-auth/drivers/auth/bearer.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js')
//  authRedirect: {path: '/login'}
})

// Vue.http.options.root = 'https://api-demo.websanova.com/api/v1'

// Start
App.router = Vue.router

new Vue(App).$mount('#app')

/* eslint-disable no-new */
//  new Vue({
//  el: '#app',
//  router,
//  template: '<App/>',
//  components: { App }
//  })
