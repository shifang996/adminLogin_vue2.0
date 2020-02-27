<template>
  <div>
    <breadComponent />
    <ve-line :data="chartData" :settings="chartSettings1"></ve-line>
    <ve-pie :data="chartData1" :settings="chartSettings"></ve-pie>
    <div></div>
  </div>
</template>

<script>
import breadComponent from "../../../components/topnav_component";
export default {
  components: {
    breadComponent
  },
  data: function() {
    return {
      chartSettings: {
        radius: 100,
        offsetY: 300,
        dataType: "percent"
      },
      chartSettings1: {
        metrics: ["月份", "花销"],
        dimension: ["月份"]
      },
      chartData: {
        columns: ["月份", "花销"],
        rows: [
          { 月份: "1", 花销: 1393 },
          { 月份: "2", 花销: 3530 },
          { 月份: "3", 花销: 2923 },
          { 月份: "4", 花销: 1723 },
          { 月份: "5", 花销: 3792 },
          { 月份: "6", 花销: 4593 },
          { 月份: "7", 花销: 1093 },
          { 月份: "8", 花销: 3550 },
          { 月份: "9", 花销: 2923 },
          { 月份: "10", 花销: 1723 },
          { 月份: "11", 花销: 31772 },
          { 月份: "12", 花销: 4773 }
        ]
      },
      chartData1: {
        columns: ["统计", "占比"],
        rows: [
          { 统计: "食品", 占比: 1393 },
          { 统计: "生活", 占比: 3530 },
          { 统计: "旅游", 占比: 2923 },
          { 统计: "通信", 占比: 1723 },
          { 统计: "信息", 占比: 3792 },
          { 统计: "游戏", 占比: 4593 }
        ]
      }
    };
  }
};
</script>
