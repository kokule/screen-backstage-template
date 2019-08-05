<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'app',
  }
</script>

<style lang="less">
  #app {
    width: 100%;
    height: 100%;
    position: relative;
  }

  html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #000;
    margin: 0;
    padding: 0;
  }
</style>
