<template>
  <div id="header">
    <div class="header_left">
      商品运行后台运维管理系统
    </div>
    <div>
      <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-submenu index="1">
        <template slot="title">个人中心</template>
        <el-menu-item index="1-1">申请用户</el-menu-item>
        <el-menu-item index="1-2">切换用户</el-menu-item>
        <el-menu-item index="/login" route="/login">退出用户</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#header{
  display: flex;
}
.header_left{
  flex:1;
  height: 60px;
  line-height: 60px;
  color: white;
  background: rgb(84, 92, 100);
  font-size: 28px;
  padding-left: 32px;
}
</style>