export const tokyoNumber = {
  data(){
    return {
      title: "Welcome to Tokyo",
      subTitle: "Tokyo is great city",
      number: 0
    }
  },
  // フィルター機能(ローカル)
  filters: {
    lowerCase(value) {
      return value.toLowerCase();
    }
  }
}