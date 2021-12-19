import Vue from 'vue'
import App from './App.vue'
// vueファイルはimportしたらcomponentのオブジェクトになる

import LikeNumber from './components/LikeNumber.vue'

// Tipsの表示可否について
Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブ(グローバル)
// Vue.directive("border", function(el, binding) {
//   // カスタムディレクティブからデータを渡す=>binding
//   el.style.borderWidth = binding.value.width;
//   el.style.borderColor = binding.value.color;

//   // カスタムディレクティブに引数を渡す
//   el.style.borderStyle = binding.arg;

//   // カスタムディレクティブに修飾子を使う
//   if (binding.modifiers.round) {
//     el.style.borderRadius = '0.5rem';
//   }
//   if (binding.modifiers.shadow) {
//     el.style.boxShadow = '0 2px 5px rgba(0,0,0.26)';
//   }
// });

// フィルター機能
Vue.filter("upperCase", function(value) {
  return value.toUpperCase();
});

// console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
