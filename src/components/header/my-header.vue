<template>
  <div class="my-header">
    <div class="header-time">{{realTime}}</div>
    <div class="header-logout cursor-pointer" @click="logout">
      <Icon color="white" type="md-power" size="24"/>
    </div>
    <div v-show="username" class="header-user">你好,{{username}}</div>

    <div class="center-title">
      <div @click="toRoute(routes[0])">地球</div>
      <div @click="toRoute(routes[1])">宇宙</div>
      <div>{{title}}</div>
      <div @click="toRoute(routes[2])">测试1</div>
      <div @click="toRoute(routes[3])">测试2</div>
    </div>
  </div>
</template>

<script>
  import routes from '@/router/screen_routers'
  import {removeToken} from '@/libs/utils'

  export default {
    name: "my-header",
    data() {
      return {
        realTime: '',
        timer: '',
        title: ''
      }
    },
    computed: {
      routes() {
        return routes[2].children
      },
      username() {
        return this.$store.state.user.username
      }

    },
    methods: {
      getRealTime() {
        this.realTime = this.moment(new Date().getTime()).format('YYYY-MM-DD HH:mm:ss')
      },
      logout() {
        removeToken()
        this.$router.push({name: 'loginPage'})
      },
      toRoute(router) {
        this.$router.push({name: router.name})
        this.title = router.meta.title
      }
    },
    mounted() {
      this.timer = setInterval(this.getRealTime, 1000)
      this.title = '流浪地球'
    },
    beforeCreate() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="less" scoped>
  .font {
    font-weight: bolder;
    font-family: sans-serif;
    font-size: 20px;
  }

  .my-header {
    width: 100%;
    height: 74px;
    color: white;
    margin: 0 auto;
    position: relative;
    background-size: 100% 100%;
    background-image: url("../../assets/image/large-screen/title_frame.png");
    .header-time {
      position: absolute;
      left: 1%;
      top: 25%;
      color: white;
      .font
    }
    .header-logout {
      float: right;
      margin: 0.8% 3% 0 0;
    }
    .header-user {
      .font;
      margin: 0.5% 1% 0 0;
      float: right;
    }
    .center-title {
      .font;
      font-size: 28px;
      letter-spacing: 5px;
      div {
        position: absolute;
        top: 18%;
        cursor: pointer;
      }
      div:nth-child(1) {
        left: 29%;
      }
      div:nth-child(2) {
        left: 36%;
      }
      div:nth-child(3) {
        left: 46.5%;
      }
      div:nth-child(4) {
        left: 60.5%;
      }
      div:nth-child(5) {
        left: 67.5%;
      }
    }
  }

  @media screen and (max-width: 1500px) {
    .my-header {
      .header-time, .header-logout {
        font-size: 10px;
      }
    }
  }
</style>
