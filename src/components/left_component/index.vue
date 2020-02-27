<template>
  <div id="leftcon">
    <div>
      <el-col :span="12" class="left_set">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>操作流程</span>
            </template>
            <el-menu-item-group title="操作流程" text-color="white" index="1">
              <el-menu-item class="el-icon-s-order" index="1-1" route="/personal">个人中心</el-menu-item>
              <el-menu-item class="el-icon-s-goods" index="1-2" route="/cate_order">商品管理</el-menu-item>
              <el-menu-item class="el-icon-s-order" index="1-3" route="/shop_order">订单管理</el-menu-item>
              <el-menu-item class="el-icon-s-data" index="1-4" route="/return_order">退货管理</el-menu-item>
              <el-menu-item class="el-icon-s-flag" index="1-5" route="/complain_order">投诉管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
    <div class="rg_conshow">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "left_component",
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
#leftcon {
  display: flex;
}
.left_set {
  box-sizing: border-box;
  width: 200px;
  height: 100vh;
  margin: 0;
  padding: 0;
}
.rg_conshow {
  flex: 1;
  height: 100vh;
  padding: 32px;
}
</style>