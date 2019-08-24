<template>
  <el-container class="home-container">
    <el-aside :width="isCollapse? '66px':'200px'">
      <div class="logo" :class="{miniLogo:isCollapse}"></div>

      <!-- 导航 -->
        <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#002033"
        text-color="#fff"
        active-text-color="#ffd04b"
        :collapse="isCollapse"
        :collapse-transition="false"
      >
        <el-menu-item index="1">
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">内容管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-picture"></i>
          <span slot="title">素材管理</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-s-promotion"></i>
          <span slot="title">发布文章</span>
        </el-menu-item>
        <el-menu-item index="5">
          <i class="el-icon-chat-dot-round"></i>
          <span slot="title">评论管理</span>
        </el-menu-item>
        <el-menu-item index="6">
          <i class="el-icon-present"></i>
          <span slot="title">粉丝管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-setting"></i>
          <span slot="title">个人设置</span>
        </el-menu-item>
      </el-menu>
      <!-- 导航 -->

    </el-aside>
    <el-container>
      <el-header>
        <span @click="toggleMenu()" class="icon el-icon-s-fold"></span>
        <span class="wz">江苏传智播客科技教育有限公司</span>
        <!-- 用户 -->
        <el-dropdown>
          <span class="el-dropdown-link">
            <img src="../../assets/images/avatar.jpg" />
            <span class="usename">起个啥名字</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <!-- 插槽 -->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-setting">
                个人设置</el-dropdown-item>
            <el-dropdown-item icon="el-icon-unlock">
                退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 用户 -->
      </el-header>
      <el-main>
        <!-- 二级路由 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {

  methods: {
    toggleMenu () {
      this.isCollapse = !this.isCollapse
    }
  },
  data () {
    return {
      isCollapse: false
    }
  }
}
</script>

<style scoped lang="less">
.home-container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .el-aside {
    background: #002033;
    .logo {
      width: 100%;
      height: 60px;
      background: url(../../assets/images/logo_admin.png) no-repeat center /
        140px auto;
    }
    .miniLogo {
        background-image:url(../../assets/images/logo_admin_01.png);
        background-size: 36px auto;
    }
    .el-menu{
        border: none;
    }
  }
  .el-header {
    border-bottom: 1px solid #f0f0f0;
    background: rgb(252, 252, 252);
    line-height: 60px;
    .icon {
      font-size: 26px;
      vertical-align: middle;
      margin: 0 10px;
    }
    .wz {
      vertical-align: middle;
      font-size: 14px;
      font-weight: 500;
    }
    .el-dropdown {
      float: right;
      .usename {
        vertical-align: middle;
      }
      img {
        width: 30px;
        margin-right: 12px;
        border-radius: 50%;
        vertical-align: middle;
        border: 1px solid #f1f1f1;
      }
    }
  }
}
</style>
