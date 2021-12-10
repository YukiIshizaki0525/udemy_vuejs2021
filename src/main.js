import Vue from 'vue'
import App from './App.vue'
// vueファイルはimportしたらcomponentのオブジェクトになる

import LikeNumber from './components/LikeNumber.vue'

// Tipsの表示可否について
Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

// console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
