<template>
  <div>
    <headerComponent></headerComponent>
    <leftComponent></leftComponent>
  </div>
</template>

<script>
//引入公共css样式
import "../assets/css/index.css";
import headerComponent from "../components/header_component";
import leftComponent from "../components/left_component/index";
export default {
  name: "admin",
  components: { headerComponent, leftComponent },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
</style>


