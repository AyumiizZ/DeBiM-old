import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from 'vue-echarts'
// import VueElasticsearch from 'vue-elasticsearch'

// Vue.use(VueElasticsearch)
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/title'
import 'echarts/lib/chart/line'

Vue.component('chart', Echarts)

// Add bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// END add bootstrap-vue

// Add font-awesome
// Font Awesome by Dave Gandy - http://fontawesome.io
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faUser,
  faSortUp,
  faSortDown,
  faEquals
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUser)
library.add(faSortUp)
library.add(faSortDown)
library.add(faEquals)
Vue.component('font-awesome-icon', FontAwesomeIcon)
// END add font-awesome

// Add ECharts
// const ECharts = require('vue-echarts')
// Vue.component('v-chart', ECharts)
// END add ECharts

import titleSet from './titleSet'
Vue.mixin(titleSet)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
