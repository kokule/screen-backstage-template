<template>
  <div class="layout">
    <Layout>
      <Sider class="sider" ref="side" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
        <div class="sider-top">
          <img width="50" src="@/assets/image/backstage/title-img.jpg"/>
          <div class="title" v-show="!isCollapsed">龙袭</div>
        </div>
        <div class="screen-main cursor-pointer" @click="toMainScreen()">
          <Icon class="home-outline" :class="{active : isCollapsed}" type="ios-home-outline" size="22"/>
          <span v-show="!isCollapsed">大屏首页</span>
        </div>

        <Menu v-for="e in menuList" :key="e.name" :active-name="$route.name"
              :open-names="[menuList[0].name]" theme="dark" width="auto" :class="menuItemClasses">
          <Submenu v-if="e.children.length > 1" :name="e.name">
            <template slot="title">
              <Icon :type="e.meta.icon"/>
              <span>{{e.meta.title}}</span>
            </template>
            <MenuItem v-for="m in e.children" :key="m.name"
                      :name="m.name" :to="m.path">
              <Icon :type="m.meta.icon"/>
              <span>{{m.meta.title}}</span>
            </MenuItem>
          </Submenu>

          <MenuItem v-else :to="e.children[0].path" :name="e.children[0].name">
            <Icon :type="e.children[0].meta.icon"/>
            <span>{{e.children[0].meta.title}}</span>
          </MenuItem>
        </Menu>
      </Sider>

      <Layout>
        <Header :style="{padding: 0}" class="layout-header-bar">
          <Icon class="cursor-pointer" @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '0 20px'}"
                type="md-menu"
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
      menuItemClasses() {
        return [
          'menu-item', this.isCollapsed ? 'collapsed-menu' : ''
        ]
      },
      menuList() {
        return this.$store.getters.menuList
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
        .home-outline {
          margin-bottom: 5px
        }
        .home-outline.active {
          margin-left: 20px;
        }
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
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }

  .collapsed-menu span {
    width: 0;
    transition: width 0.2s ease;
  }

  .collapsed-menu i {
    transform: translateX(5px);
    transition: font-size .2s ease .2s, transform .2s ease .2s;
    vertical-align: middle;
    font-size: 22px;
  }
</style>
<style lang="less">
  .ivu-menu-item {
    height: 50px;
  }

  .ivu-menu-vertical{
    padding-left: 24px;
  }
</style>