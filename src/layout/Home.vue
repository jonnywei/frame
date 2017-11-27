<template>
  <div class="home">
    <HeadNav />
    <div class="left-fixed-right-auto">
      <LeftMenu />
    </div>
    <div class="right-content">
      <div class="content" >
        <router-breadcrumb></router-breadcrumb>
        <router-view  class="main-content__router-view"></router-view>
      </div>
      <!--<el-row class="app__main-box">-->
        <!--<el-col :span="4" class="app__router-nav-box">-->
        <!--</el-col>-->
        <!--<el-col :span="20" class="app__main-content-box">-->
         <!---->
        <!--</el-col>-->
      <!--</el-row>-->
    </div>

  </div>
</template>
<script>
  import HeadNav  from '@/layout/head-nav/HeadNav'
  import LeftMenu from '@/layout/left-menu/LeftMenu'
  import RouterBreadcrumb from '@/layout/router-breadcrumb/RouterBreadcrumb'

//  import MainContent from '@/layout/main-content/MainContent'
export default {
   data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username:"weijianjun",
      isCollapse:false,
    }
  },
  components:{
     HeadNav,
     LeftMenu,
//    MainContent,
    RouterBreadcrumb
  }

}
</script>

<style scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .el-header {
    font-size: 12px;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: rgb(30,47,68);
    color: #333;
    line-height: 54px;
    z-index: 999;
    display: flex;
    justify-content: space-between;
  }
  .title {
    font-size: 14px;
    color: white;
  }
  .el-aside {
    color: #333;
    position: fixed;
    left: 0;
    top: 54px;
    bottom: 0;
    background-color: rgb(30,47,68);
  }
  .el-menu {
    border-right: 1px solid rgb(248,248,248);
    background-color: rgb(30,47,68);
  }
  .el-main {
    position: absolute;
    left: 150px;
    top: 54px;
    right: 0;
    bottom: 0;
  }
  .el-breadcrumb {
    margin-bottom: 20px;
  }
  .el-table {
    margin-bottom: 20px;
  }
  .el-pagination {
    margin-bottom: 20px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-bread {
    display: inline-block;
    float: right;
    text-align: right;
    line-height: 26px;
  }

  .app,
  .app__main-box,
  .app__router-nav-box,
  .app__main-content-box {
    /* 全屏显示内容区域 */
    height: 100%;
  }
  .app__navbar {
    position: fixed;
    top: 0;
    z-index: 1;
    width: 100%;
  }
  .app__main-box {
    padding-top: 60px; /* 预留出顶部导航的高度 */
  }
  .app__router-nav-box {
    background-color: #3a3f52;
    overflow: auto;
  }
  .app__main-content-box {
    overflow: auto;
  }

  .fa {
    margin-right: 8px;
  }

  .left-fixed-right-auto {
    padding-top: 60px;
  }

  .right-content {
    float: right;
    width: 100%;
  }

  .right-content {
    margin-left: 12px;
    margin-right: 12px;
    height: 100%;
    margin-bottom: 60px;
  }
  .content {
    margin-left: 60px;
     /*margin-top: 60px;*/
     /*background: #f1f2f7;*/
     background: #FFF;
     padding: 16px;
   }

  .main-content__router-view {
    min-height: calc(100% - 50px - 12px); /* 减去面包屑的高度和底部预留的 margin-bottom 高度 */
    padding: 10px;
    margin-bottom: 12px;
    box-sizing: border-box;
    background-color: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.117647), 0 0 6px 0 rgba(0, 0, 0, 0.0392157);
  }

</style>
