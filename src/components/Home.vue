<template>
  <!-- // 複数の場合はオブジェクトで指定 -->
  <p v-border:solid.round.shadow="{width: '3px', color: 'red'}">{{ tmpData }}</p>
</template>

<!-- カスタムディレクティブのローカル登録 -->
<script>
export default {
  data(){
    return {
      tmpData: 'hello'
    }
  },
  directives: {
    border(el, binding){
      // thisは使えない
      // this.tmpData = "こんにちは"

      // カスタムディレクティブからデータを渡す=>binding
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;

      // カスタムディレクティブに引数を渡す
      el.style.borderStyle = binding.arg;

      // カスタムディレクティブに修飾子を使う
      if (binding.modifiers.round) {
        el.style.borderRadius = '0.5rem';
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = '0 2px 5px rgba(0,0,0.26)';
      }
    }
  }
}
</script>
