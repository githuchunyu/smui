// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import base from './base'

import smui from './uis/index.js'
Vue.use(smui)

Vue.prototype.$base = base;

router.beforeEach((to, from, next) => {
  next();
})
router.afterEach((to)=>{
  
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
