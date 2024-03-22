<template>
  <div>
  <div class="main-wrap">
    <div class="logo-wrap" @click="goHome">
      <img src="../assets/images/logo.png" />
      <div class="brand"> StarEyes </div>
    </div>
    <div class="video-wrap">
      <video class="video-wrap-video" poster="https://qq-web.cdn-go.cn/zc.qq.com/f59c7d00/v3/img/img-bg@2x.png"
        src="https://qq-web.cdn-go.cn/zc.qq.com/f59c7d00/v3/img/bg-video.mp4" tabindex="-1" airplay="allow"
        x-webkit-airplay="true" playsinline="true" webkit-playsinline="true" x5-playsinline="true"
        x5-video-player-type="h5" x5-video-player-fullscreen="true" autoplay muted></video>
    </div>
    <div class="login-wrap">
      <div class="login-form">
        <div class="login-title">欢迎使用StarEyes</div>
        <div class="login-desc">新一代智慧城市解决方案</div>
        <el-form :model="user" :rules="rules" ref="ruleFormRef" size="large">
          <el-form-item prop="id">
            <el-input v-model="user.id" :prefix-icon="User" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="user.password" :prefix-icon="Lock" show-password />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="login">登 录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  inject: ['reload'],
};
</script>

<script setup>
import { reactive, getCurrentInstance } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import request from "../utils/request";
import router from "../router";
import { saveUserInfo, user } from "../common/localStorage";

//如果需要获取当前组件实例，使用{proxy} = getCurrentInstance() 获取到proxy代理对象。
const { proxy } = getCurrentInstance();

const rules = reactive({
  id: [
    { required: true, message: "请输入账户ID", trigger: "blur" },
    { min: 5, max: 5, message: "账户ID为五位数！ ", trigger: "blur" },
  ],
  password: [{ required: true, message: "请输入账户密码", trigger: "blur" }],
});

const goHome = () => {
  router.push({ path: "/home" });
  this.reload();
};

const login = () => {
  // ES6写法
  proxy.$refs.ruleFormRef.validate((valid) => {
    // 前端输入验证
    if (valid) {
      request.post("/login", user).then((res) => {
        if (res.id != "-1") {
          user.token = res.token;
          if (saveUserInfo(user.id, user.token)) {
            router.push({ path: '/dashboard' });
          }
        } else {
          ElMessage({
            type: "error",
            message: "账户或密码错误！",
          });
        }
      });
    } else {
      ElMessage({
        type: "error",
        message: "账户密码不能为空！",
      });
    }
  });
};
</script>

<style scoped>
input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 1000px white inset !important;
  box-shadow: 0 0 0 1000px white inset !important;
}

.logo-wrap {
  position: absolute;
  width: 150px;
  height: 35px;
  top: 20px;
  left: 5%;
  cursor: pointer;
}

.brand {
  position: absolute;
  display: inline;
  font-size: 26px;
  color: #323232;
  font-weight: 500;
  top: 4px;
  left: 40px;
}

.video-wrap {
  margin: 0;
  padding: 0;
  border: none;
  transition: all 0.2s;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background-color: #c0e4f3;
}

.video-wrap-video {
  margin: 0;
  padding: 0;
  border: none;
  transition: all 0.2s;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-wrap {
  position: relative;
  background-size: cover;
  padding: 0;
  border: none;
  height: 360px;
  width: 90%;
  margin: 0 auto;
  top: 20vh;
  z-index: 1;
  display: flex;
}

.login-form {
  position: relative;
  border: none;
  margin: 0 auto;
  width: 400px;
  height: 310px;
  top: 20px;
}

.login-title {
  line-height: 65px;
  font-size: 40px;
  color: rgb(0, 0, 0);
}

.login-desc {
  line-height: 40px;
  font-size: 18px;
  color: rgb(0, 0, 0);
  bottom: 30px;
  margin: 0;
  margin-bottom: 32px;
}
</style>
