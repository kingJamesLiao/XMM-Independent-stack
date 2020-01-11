<template>
  <div class="login_page fillcontain">
    <transition name="from-fade" mode="in-out">
      <section class="from_contianer">
        <div class="manage_tip">
          <p>XMM后台管理系统</p>
        </div>
        <el-form :model="loginForm" ref="loginForm">
          <el-form-item :rules="rules" prop="username">
            <el-input v-model="loginForm.username" @keyup.enter.native="submitForm" placeholder="用户名">
              <span></span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password"  @keyup.enter.native="submitForm" v-model="loginForm.password" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitForm" type="primary" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示：未登录过的新用户自动注册。</p>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "清输入密码", trigger: "blur" }]
      },
      showLogin: false
    };
  },
  methods: {
    submitForm() {
      //前端验证
      var self = this;
      if (this.loginForm.username === "") {
        this.$message({
          showClose: true,
          message: "用户名不能为空,请重新输入!",
          type: "error"
        });
      } else if (this.loginForm.password === "") {
        this.$message({
          showClose: true,
          message: "密码不能为空,请重新输入!",
          type: "warning"
        });
      } else {
        this.$message({
          showClose: true,
          message: "登录成功!",
          type: "success"
        });
        this.$router.push("/manage");
      }
    }
  }
};
</script>

<style lang="less">
@import "../style/mixin";
.login_page {
  background-color: #324057;
  .from_contianer {
    width: 23rem;
    height: 400px;
    position: relative;
    left: 50%;
    -webkit-transform: translateX(-50%);
    top: 350px;
    .manage_tip {
      position: absolute;
      width: 100%;
      top: -100px;
      left: 0;
      text-align: center;
      p {
        font-size: 34px;
        color: #fff;
      }
    }
    .submit_btn {
      width: 100%;
      font-size: 16px;
    }
    .tip {
      font-size: 0.5rem;
      color: red;
      font-weight: 400;
      font-weight: 300;
      text-align: center;
    }
  }
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>