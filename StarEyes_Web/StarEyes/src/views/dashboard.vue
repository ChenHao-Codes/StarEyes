<template>
  <div>这里是控制台！</div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { getAccessToken } from "../utils/token.js";
import { user } from "../common/data.js";

var token = getAccessToken();
ElNotification({
  type: "info",
  message: "token: " + token,
});

ElMessage({
  type: "info",
  message: "user: " + user.id,
});
</script>
