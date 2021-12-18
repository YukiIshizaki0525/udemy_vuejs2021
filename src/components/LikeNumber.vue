<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  computed: {

    halfNumber(){
      return this.totalNumber / 2
    }
  },
  methods: {
    increment(){
      // this.totalNumber += 1 => 子から親のdataを変更できない
      this.$emit("my-click", this.totalNumber + 1);
    }
  }
}
</script>
