<template>
  <div class="login">
    <div class="login-card">
      <Card :bordered="false" title="欢迎登录">
        <Input v-model="username" style="margin-bottom: 20px" placeholder="请输入用户名"/>
        <Input v-model="password" style="margin-bottom: 20px" type="password" placeholder="请输入密码"/>
        <Button style="width: 100%" type="primary" @click="handleSubmit()">登录</Button>
      </Card>
    </div>
  </div>
</template>

<script>

  import {login} from '@/api/user'
  import {setToken} from '../../libs/utils'

  export default {
    name: 'login',
    data() {
      return {
        username: 'qinkai',
        password: '12345',
      }
    },
    methods: {
      handleSubmit() {
        let params = {
          account: this.username,
          password: this.password
        }
        login(params).then(res => {
          if (res.data.data) {
            setToken(res.data.token)
            this.$store.commit('setUserInfo', res.data)
            this.$router.push({name: this.$config.homePage})
          }
        }).catch(error => {
          this.$Message.error(error)
        })

      }
    },
    mounted() {
      console.log('666666666666666')
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
