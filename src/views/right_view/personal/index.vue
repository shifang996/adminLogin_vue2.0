<template>
  <div>
    <breadComponent />
    <ve-map :data="chartData" :settings="chartSettings" style="height:100vh;"></ve-map>
    <ve-map :data="chartData" :settings="chartSettings1"></ve-map>
  </div>
</template>

<script>
import breadComponent from "../../../components/topnav_component";
export default {
  components: {
    breadComponent
  },
  data() {
    return {
      chartSettings: {
        position: "china",
        dimension: "位置",
        metrics: ["人口", "面积"],
        dataType: {
          面积: "KMB"
        }
      },
      chartData: {
        columns: ["位置", "税收", "人口", "面积"],
        rows: [
          { 位置: "吉林", 税收: 123, 人口: 123, 面积: 92134 },
          { 位置: "北京", 税收: 1223, 人口: 2123, 面积: 29234 },
          { 位置: "上海", 税收: 2123, 人口: 1243, 面积: 94234 },
          { 位置: "浙江", 税收: 4123, 人口: 5123, 面积: 29234 }
        ]
      },
      chartSettings1: {
        position: "province/beijing",
        labelMap: {
          people: "人口"
        }
      },
      chartData1: {
        columns: ["位置", "people"],
        rows: [
          { 位置: "延庆区", people: 123 },
          { 位置: "密云区", people: 1223 },
          { 位置: "平谷区", people: 2123 },
          { 位置: "海淀区", people: 4123 }
        ]
      }
    };
  }
};
</script>

<style scoped>
</style>