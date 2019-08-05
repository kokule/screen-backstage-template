<template>
  <div class="layout">
    <Layout>
      <Sider class="sider" ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <div class="sider-top">
          <img width="50" src="@/assets/image/backstage/title-img.jpg"/>
          <div class="title">龙袭</div>
        </div>
        <div v-show="!isCollapsed" class="screen-main cursor-pointer" @click="toMainScreen()">
          <Icon style="margin-bottom: 5px" type="ios-home-outline" size="22"/>
          大屏首页
        </div>
        <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses">
          <MenuItem name="1-1">
            <Icon type="ios-navigate"></Icon>
            <span>Option 1</span>
          </MenuItem>
          <MenuItem name="1-2">
            <Icon type="ios-search"></Icon>
            <span>Option 2</span>
          </MenuItem>
          <MenuItem name="1-3">
            <Icon type="ios-settings"></Icon>
            <span>Option 3</span>
          </MenuItem>
        </Menu>
      </Sider>
      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}" type="md-menu"
                size="24"></Icon>
        </Header>
        <router-view></router-view>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        isCollapsed: false
      }
    },
    computed: {
      rotateIcon() {
        return [
          'menu-icon', this.isCollapsed ? 'rotate-icon' : ''
        ];
      },
      menuitemClasses() {
        return [
          'menu-item', this.isCollapsed ? 'collapsed-menu' : ''
        ]
      }
    },
    methods: {
      collapsedSider() {
        this.$refs.side.toggleCollapse();
      },
      toMainScreen() {
        this.$router.push({name: 'universeReincarnation'})
      }
    },
    mounted() {
      console.log(this.$store.getters.menuList)
    }

  }
</script>
<style lang="less" scoped>
  .layout {
    position: relative;
    border-radius: 4px;
    overflow: hidden;
    width: 100%;
    height: 100%;
    .sider {
      width: 100%;
      height: 100vh;
      .sider-top {
        color: white;
        img {
          border-radius: 50%;
          margin: 5px 0 0 15px;
        }
        .title {
          float: right;
          font-family: fantasy;
          font-weight: bold;
          line-height: 50px;
          font-size: 20px;
          margin-right: 30%;
        }
      }
      .screen-main {
        color: white;
        margin: 2% 0 2% 11%;
        font-size: 17px;
        font-weight: bold;
        /*font-family: "PingFang SC";*/
      }
    }
  }

  .layout-header-bar {
    background: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
  }

  .layout-logo-left {
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
  }

  .menu-icon {
    transition: all .3s;
  }

  .rotate-icon {
    transform: rotate(-90deg);
  }

  .menu-item span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width .2s ease .2s;
  }

  .menu-item i {
    transform: translateX(0px);
    transition: font-size .2s ease, transform .2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0px;
    transition: width .2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
