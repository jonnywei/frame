<template>
  <header class="head-nav">
          <el-row>
           <el-col :span="4" >
             <img src="../../assets/logo.png" class='navbar__logo' alt="自动化测试管理控制台">
           </el-col>
           <el-col :span="8">
             <p class="navbar__title">自动化测试管理控制台</p>
           </el-col>
            <el-col :span="12">
             <el-dropdown>
            <span class="el-dropdown-link">
            {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
             </span>
               <el-dropdown-menu slot="dropdown">
                 <el-dropdown-item command='info'>修改信息</el-dropdown-item>
                 <el-dropdown-item
                   command='set'>系统设置</el-dropdown-item>
                 <el-dropdown-item @click.native="onExitAccount">退出登录</el-dropdown-item>
               </el-dropdown-menu>
             </el-dropdown>
           </el-col>
         </el-row>

  </header>
  </template>

<script>
  import ElRow from "element-ui/packages/row/src/row";
  import ElCol from "element-ui/packages/col/src/col";

  export default {
    components: {
      ElCol,
      ElRow},
    data() {
      return {
        username: "weijianjun",
      }
    }
  }
</script>

<style scoped>

  .head-nav {
    width: 100%;
    height: 60px;
    background: #324057;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 99;
    color: #FFF;
    border-bottom: 1px solid #1F2D3D;
  }
  .el-dropdown-link {
    font-size: 18px;

    cursor: pointer;
    color: white;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .title {
    font-size: 14px;
    color: white;
  }

  .navbar__logo {
    display: block;
    height: 60px;
    width: 60px;
    /*margin-left: auto;*/
    /*margin-right: auto;*/
  }

  .navbar__title {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 12px;
    height: 60px;
    line-height: 60px;
    font-size: 1.5em;
    font-weight: bold;
    color: white;
  }


  .navbar__logo-box {
    background-color: #0da7ff;
  }
  .navbar__logo {
    display: block;
    height: 60px;
    margin-left: auto;
    margin-right: auto;
  }
  .navbar__menu-box {
    background-color: #fff;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  .navbar__menu {
    float: right;
    background-color: #fff;
  }
  .navbar__dropdown-menu a {
    color: inherit;
    text-decoration: none;
  }
  .navbar__title {
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 12px;
    height: 60px;
    line-height: 60px;
    font-size: 1.5em;
    font-weight: bold;
  }
  .navbar__title a {
    color: #48576a;
    text-decoration: none;
  }
</style>
