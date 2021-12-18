import Vue from 'vue'
import App from './App.vue'
// vueファイルはimportしたらcomponentのオブジェクトになる

import LikeNumber from './components/LikeNumber.vue'

// Tipsの表示可否について
Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブ(グローバル)
Vue.directive("border", function(el, binding) {
  el.style.border = "solid black 2px";

  // カスタムディレクティブからデータを渡す
  el.style.borderWidth = binding.value.width;
  el.style.borderColor = binding.value.color;
});


// console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
