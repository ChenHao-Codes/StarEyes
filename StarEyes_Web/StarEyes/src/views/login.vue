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
          >登 录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, getCurrentInstance } from "vue";
import { User, Lock } from "@element-plus/icons-vue";
import request from "../request";
import router from "../router/router";
import { saveUserInfo, user } from "../common/data";

//如果需要获取当前组件实例，使用{proxy} = getCurrentInstance() 获取到proxy代理对象。
const { proxy } = getCurrentInstance();

const rules = reactive({
  id: [
    { required: true, message: "请输入账户ID", trigger: "change" },
    { min: 5, max: 5, message: "账户ID为五位数！ ", trigger: "change" },
  ],
  password: [{ required: true, message: "请输入账户密码", trigger: "change" }],
});

const login = () => {
  // ES6写法
  proxy.$refs.ruleFormRef.validate((valid) => {
    // 前端输入验证
    if (valid) {
      request.post("/login", user).then((res) => {
        if (res.id != "-1") {
          user.token = res.token;
          if (saveUserInfo(user.id, res.token)) {
            router.push("/dashboard");
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
