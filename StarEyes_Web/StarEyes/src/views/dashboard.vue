<template>
  <div>这里是控制台！</div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { getToken, user } from "../common/data";

let token = getToken();


ElMessage({
  type: "info",
  message: "Welcome! User " + user.id + ".",
});
</script>
