import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueRouter from 'vue-router'

Vue.use(BootstrapVue)
Vue.use(VueRouter)

// require('../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap.scss')
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// import "~bootstrap-sass/assets/stylesheets/_bootstrap-sprockets.scss"
// import "~bootstrap-sass/assets/stylesheets/_bootstrap.scss"

import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import HistoryPage from './components/History.vue'
import Customer from './components/Customer.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/history',
      component: HistoryPage,
    },
    {
      path: '/customer',
      component: Customer,
    }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})