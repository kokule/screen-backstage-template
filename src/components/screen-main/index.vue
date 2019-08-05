<template>
  <div class="screen-main">
    <my-header></my-header>
    <router-view></router-view>
    <div class="backstage cursor-pointer" @click="toBackstage">
      <img width="32" title="后台" src="@/assets/image/large-screen/后台.png"/>
    </div>
  </div>
</template>

<script>
  import myHeader from '../header/my-header'

  export default {
    name: "screen-main",
    components: {
      myHeader
    },
    data() {
      return {}
    },
    methods: {
      toBackstage() {
        this.$router.push({name: 'pageOne'})
      }
    },
    mounted() {
    }
  }
</script>

<style lang="less" scoped>
  .screen-main {
    height: 100%;
    overflow: hidden;
    background-color: #000;
    .backstage {
      position: absolute;
      bottom: 2%;
      right: 2%;
    }
  }
</style>