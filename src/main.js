import Vue from 'vue'
import App from './App.vue'

import router from './router/router'
import './assets/style/style.scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
