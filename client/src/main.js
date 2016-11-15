import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Dashboard from './components/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: Hello},
  {path: '/dashboard', component: Dashboard}
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App> </App>',
  components: {
    App
  },
  router
})
