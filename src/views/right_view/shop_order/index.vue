<template>
  <div>
    <breadComponent />
    <template>
      <el-table :data="tableData" style="width: 100%;" border>
        <el-table-column prop="id" label="id" width="180"></el-table-column>
        <el-table-column prop="createtime" label="时间" width="180"></el-table-column>
        <el-table-column prop="realname" label="姓名" width="180"></el-table-column>
        <el-table-column prop="tel" label="电话" width="180"></el-table-column>
        <el-table-column prop="set" label="操作" width="360">
          <!-- 结构scope -->
          <template slot-scope="{row}">
            <el-button
              type="primary"
              @click="handle_Detail(row)"
              size="mini"
              icon="el-icon-search"
              plain
            >详情</el-button>
            <el-button
              type="warning"
              size="mini"
              @click="handle_Edit(row)"
              icon="el-icon-edit"
              plain
            >修改</el-button>
            <el-button
              type="danger"
              @click="handle_Delete(row)"
              size="mini"
              icon="el-icon-delete"
              plain
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
    <el-pagination
      @current-change="handle_list"
      background
      layout="prev, pager, next"
      :total="total"
    ></el-pagination>
  </div>
</template>

<script>
import breadComponent from "../../../components/topnav_component";
import { getTotalCount, getUserList } from "../../../api/index";
export default {
  components: {
    breadComponent
  },
  data() {
    return {
      total: 0,
      tableData: []
    };
  },
  methods: {
    // async await是一种异步操作
    async handle_list(page) {
      let res = await getUserList(page, 10);
      this.tableData = res.data;
    },
    handle_Detail(dataDetil) {
      console.log(dataDetil);
    },
    async handle_Delete(dataDelete) {
      await this.$confirm(
        `此操作将永久删除${dataDelete.realname}, 是否继续?`,
        "友情提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }
      ).then(() => {
        this.$message({
          type: "success",
          message: "删除成功!"
        });
      });
    },
    handle_Edit(dataEdit) {
      console.log(dataEdit);
      this.$prompt("请重新输入电话", "编辑提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        message: dataEdit.tel
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "电话: " + value
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  },
  mounted() {
    getTotalCount().then(res => {
      this.total = res.data.count;
    });
    getUserList(1, 10).then(res => {
      this.tableData = res.data;
    });
    console.log(this.tableData);
  }
};
</script>

<style>
</style>