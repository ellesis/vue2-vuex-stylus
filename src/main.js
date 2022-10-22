import Vue from 'vue'
import App from './App.vue'

import HighchartsVue from 'highcharts-vue'
import Highcharts from 'highcharts'
import dataModule from 'highcharts/modules/data'

import router from './router'
import store from './store'
import './plugins/element.js'

dataModule(Highcharts)
Vue.use(HighchartsVue)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
