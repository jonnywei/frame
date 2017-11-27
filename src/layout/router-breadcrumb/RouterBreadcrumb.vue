<template>
  <el-breadcrumb separator="/" class='router-breadcrumb'>
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for='(item,index) in $route.matched'
      :key='index'>{{item.name}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
  export default {
    data() {
      return {
      };
    }
  };
</script>
<style >
  .router-breadcrumb {
    padding-top: 0px;
    padding-bottom: 18px;
    font-size: 14px;
    display: inline-block;
    float: right;
    text-align: right;
    line-height: 26px;
  }
</style>
