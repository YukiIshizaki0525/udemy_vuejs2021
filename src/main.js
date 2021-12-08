import Vue from 'vue'
import App from './App.vue'

// Tipsの表示可否について
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
