<template>
  <div class="left">
    <div id="left-menu">
  <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
           background-color="rgb(30,47,68)"
           text-color="#fff"
           active-text-color="#ffd04b"
           :collapse="isCollapse">
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <span slot="title">分组一</span>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
      <i class="el-icon-menu"></i>
      <span slot="title">导航二</span>
      </template>
      <el-menu-item index="2-1">选项21</el-menu-item>
      <el-menu-item index="2-2">选项21</el-menu-item>
      <el-menu-item index="2-3">选项21</el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <i class="el-icon-setting"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
  </div>
    <div class="toggle-menu"
         @click='toggleMenu'
         >
      <!--<i-->
        <!--:class='[{"el-icon-arrow-left":$store.state.leftmenu.menu_flag},{"el-icon-arrow-right":!$store.state.leftmenu.menu_flag}]'></i>-->
    </div>
  </div>

  </template>
<script>
  export default {
    data() {
      return {
         isCollapse:false
      }
    }
  }
</script>
<style scoped>
  .left {
    position: fixed;
    float: left;
    /*width:190px;
    margin-right:-190px;*/
    top: 60px;
  }
  #left-menu {
    height: 100%;
    background: #324057;
   position: relative;
    overflow-x: hidden;
  }

  .left-fixed-right-auto {
    padding-top: 60px;
  }

  .toggle-menu {
    width: 40px;
    height: 40px;
    background: #1f2f3d;
    position: absolute;
    top: 0px;
    /*left: 190px;*/
    z-index: 1000;
    cursor: pointer;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    opacity: 0.2;
    transition: opacity .3s ease-out;
  }
  .el-aside {
    overflow: auto;
    width: 200px;
    color: #333;
    position: fixed;
    left: 0;
    top: 54px;
    bottom: 0;
    background-color: rgb(248, 248, 248);
  }
  .el-menu {
    border-right: 1px solid rgb(248,248,248);
  }
</style>
