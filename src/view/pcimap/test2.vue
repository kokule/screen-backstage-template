<template>
  <div class="test-main">{{username}}</div>
</template>

<script>

  export default {
    name: "testPage",
    data() {
      return {}
    },
    computed: {
      username(){
        return this.$store.state.app.username
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .test-main {
    width: 100%;
    font-size: 20px;
    color: white;
    height: 100%;
  }
</style>
