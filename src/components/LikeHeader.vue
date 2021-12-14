<template>
  <div>
    <slot text="text"></slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"],
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Donald"
      }
    }
  }
}
</script>