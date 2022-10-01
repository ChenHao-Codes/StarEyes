<template>
  <div id="login_bg"></div>
  <div style="width: 200%; max-width: 500px; margin: auto">
    <h1 style="text-align: center; margin-bottom: 30px; font-size: 40px">
      星 眸
    </h1>
    <el-form :model="user" :rules="rules" ref="ruleFormRef" size="large">
      <el-form-item prop="id">
        <el-input v-model="user.id" :prefix-icon="User" />
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="user.password" :prefix-icon="Lock" show-password />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" @click="login"
          >登 录</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import request from "../request";
import router from "../router";

const { proxy } = getCurrentInstance();

const admin = reactive({
  id: "10001",
  password: "Aa123456",
});

const rules = reactive({
  id: [
    { required: true, message: "请输入账户ID", trigger: "change" },
    { min: 5, max: 5, message: "账户ID为五位数！ ", trigger: "change" },
  ],
  password: [{ required: true, message: "请输入账户密码", trigger: "change" }],
});

const user = reactive({});

const login = () => {
  // ES6写法
  proxy.$refs.ruleFormRef.validate((valid) => {
    if (valid) {
      // 往后端发送包 - http://localhost:9090 + /user/login
      // 后端返回的包格式{"code": "200", "msg": "error\info", "data":null}
      request.post("/user/login", user).then((res) => {
        if (res) {
          ElMessage({
            type: "info",
            message: "登陆成功！",
          });
          router.push("/home");
        } else {
          ElMessage({
            type: "error",
            message: "登陆失败！",
          });
        }
      });
    } else {
      ElMessage({
        type: "error",
        message: "用户名或密码错误！",
      });
    }
  });
};
</script>
