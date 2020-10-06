import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Echarts from 'vue-echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/title';
import 'echarts/lib/chart/line';
import axios from 'axios';
import VueAxios from 'vue-axios';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Vue.component('chart', Echarts);

// Add bootstrap-vue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
// END add bootstrap-vue

// Add vue-sidebar-menu
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Vue.use(VueSidebarMenu)
// END add vue-sidebar-menu

// Add font-awesome
// Font Awesome by Dave Gandy - http://fontawesome.io
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faUserSecret)
Vue.use(axios, VueAxios);
Vue.component('font-awesome-icon', FontAwesomeIcon)
// END Add font-awesome

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
