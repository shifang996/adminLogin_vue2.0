<template>
  <div id="hanle_login">
    <div class="login_set">
      <h1 class="header_inputset">商品系统运维支持系统</h1>
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-ruleForm"
        router
      >
        <el-form-item label="用户账户" prop="user">
          <el-input type="String" v-model="loginForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="用户密码" prop="password">
          <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">立即登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import "../../assets/css/index.css";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        user: "",
        password: ""
      },
      rules: {
        user: [{ required: true, message: "请输入名称", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message({
            showClose: true,
            message: `恭喜${this.loginForm.user}，登录成功！！！`,
            type: "success",
            onClose:()=>{
              this.$router.push("/index"),
              sessionStorage.setItem("loginuser",JSON.stringify(this.loginForm));
            },
            duration: () => {
              1200;
            },
          });
        } else {
          this.$message({
            showClose: true,
            message: "登录失败！请查看账号密码是否完整！",
            type: "false"
          });
          return false;
        }
      });
    }
  },
  mounted() {
    console.log(this.loginForm)
  }
};
</script>

<style scoped>
#hanle_login {
  height: 100vh;
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login_set {
  width: 800px;
  height: 400px;
  background: gray;
  text-align: center;
}
.header_inputset {
  font-size: 32px;
  color: white;
  height: 40px;
  line-height: 40px;
  margin-bottom: 60px;
}
</style>