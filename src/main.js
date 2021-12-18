import Vue from 'vue'
import App from './App.vue'
// vueファイルはimportしたらcomponentのオブジェクトになる

import LikeNumber from './components/LikeNumber.vue'

// Tipsの表示可否について
Vue.config.productionTip = false
Vue.component('LikeNumber', LikeNumber);

// カスタムディレクティブ(グローバル)
Vue.directive("border", {
  bind(el, binding, vnode) {},
  insert(el, binding, vnode) {},
  update(el, binding, vnode, oldVnode) {},
  componentUpdated(el, binding, vnode, oldVnode) {},
  unbind(el, binding, vnode) {}
});


// console.log(App);

new Vue({
  render: h => h(App),
}).$mount('#app')
