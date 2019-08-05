<template>
  <div class="login">
    <div class="login-card">
      <Card :bordered="false" title="欢迎登录">
        <Input v-model="username" style="margin-bottom: 20px" placeholder="请输入用户名"/>
        <Input v-model="password" style="margin-bottom: 20px" type="password" placeholder="请输入密码"/>
        <Button style="width: 100%" type="primary" @click="handleSubmit">登录</Button>
      </Card>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'login',
    data() {
      return {
        username: 'qinkai',
        password: '123456',
      }
    },
    methods: {
      handleSubmit() {
        if (this.username && this.password) {
          this.$store.commit('setUsername', this.username)
          this.$router.push({name: this.$config.homePage})
        } else {
          this.$Message.error('请输入用户名或密码')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .login {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url('../../assets/image/dnf.jpg');
    background-size: 100% 162%;
    .login-card {
      box-shadow: 5px 5px 15px #36cfe3,-5px -5px 15px #36cfe3, -5px 5px 15px #36cfe3,5px -5px 15px #36cfe3;
      position: absolute;
      margin: 0 auto;
      width: 18%;
      left: 41%;
      top: 35%;
    }
  }
</style>
<style lang="less">
  .login-card {
    .ivu-card {
      background: transparent;
    }
    .ivu-card-head p i, .ivu-card-head p span {
      color: cyan;
    }
  }
</style>
