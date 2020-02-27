<template>
  <div>
    <el-breadcrumb separator="/" class="breadcrumbs_set">
      <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/index">{{title1}}</a></el-breadcrumb-item>
      <el-breadcrumb-item>{{title2}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: "bread_component",
  data() {
    return {
      title1: "",
      title2: ""
    };
  },
  created() {
    this.setBread();
  },
  methods: {
    setBread() {
      this.title1 = this.$route.meta.parentTitle;
      this.title2=this.$route.meta.title;
    }
  },
  mounted() {
    this.setBread();
  }
};
</script>

<style>
</style>