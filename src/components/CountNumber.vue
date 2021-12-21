<template>
  <!-- // 複数の場合はオブジェクトで指定 -->
  <div>
    <h2>{{ title | upperCase }}</h2>
    <p>{{ subTitle | lowerCase }}</p>
    <p>{{ number }}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<!-- カスタムディレクティブのローカル登録 -->
<script>
import { tokyoNumber } from "@/tokyoNumber";
export default {
  mixins: [tokyoNumber]
}
</script>
