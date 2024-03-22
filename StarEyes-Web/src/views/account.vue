<template>
  <el-space class="information-space" fill>
    <el-card class="information-card">
      <template #header>
        <div class="card-header">
          <span class="header-monitor-num">个人信息管理</span>
        </div>
      </template>
      <el-descriptions direction="vertical" border>
        <el-descriptions-item label="用户名">{{
          user_name
        }}</el-descriptions-item>
        <el-descriptions-item label="ID">{{ user_id }}</el-descriptions-item>
        <el-descriptions-item label="所属组织">{{
          user_organization
        }}</el-descriptions-item>
        <el-descriptions-item label="邮箱">{{
          user_email
        }}</el-descriptions-item>
        <el-descriptions-item label="电话">{{
          user_phone
        }}</el-descriptions-item>
        <el-descriptions-item label="微信">{{
          user_wechat
        }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
    <el-button
      @click="changeInformationFormVisible = true"
      class="button-list"
      type="primary"
      text
      bg
      >修改信息</el-button
    >
    <el-button @click="changePasswordVisible = true" class="button-list" type="warning" text bg>修改密码</el-button>
    <el-button @click="deleteAccountVisible=true" class="button-list" type="danger" text bg>
      注销该账户
    </el-button>
    <el-button @click="connectAdmin()" class="button-list" type="info" text bg> 联系管理员 </el-button>
  </el-space>
<div>
  <el-dialog
    v-model="changeInformationFormVisible"
    title="修改用户信息"
    :append-to-body="true"
  >

      <div style="display: inline-block">
    
    <el-select
      v-model="selectValue"
      multiple
      placeholder="选择您要修改的信息（可多选）"
      style="width: 240px"
      @change="setInputValid"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        v-model = "selectValue.typeId"
      />
    </el-select>
  </div>

    <el-form :model="changeInformationForm">
      <el-form-item label="修改后用户名" :label-width="formLabelWidth" >
        <el-input
          v-model="changeInformationForm.user_name"
          autocomplete="off"
          :placeholder="this.user_name"
          :disabled = "this.disabled1"
        ></el-input>
      </el-form-item>
      <el-form-item label="修改后邮箱  " :label-width="formLabelWidth">
        <el-input
          v-model="changeInformationForm.user_email"
          autocomplete="off"
          :placeholder="this.user_email"
          :disabled = "this.disabled2"
        ></el-input>
      </el-form-item>
      <el-form-item label="修改后电话  " :label-width="formLabelWidth">
        <el-input
          v-model="changeInformationForm.user_phone"
          autocomplete="off"
          :placeholder="this.user_phone"
          :disabled = "this.disabled3"
        ></el-input>
      </el-form-item>
      <el-form-item label="修改后微信  " :label-width="formLabelWidth">
        <el-input
          v-model="changeInformationForm.user_wechat"
          autocomplete="off"
          :placeholder="this.user_wechat"
          :disabled = "this.disabled4"
        ></el-input>
      </el-form-item>
    </el-form>
      <template #footer>
        <div>
          <span class="dialog-footer">
            <el-button @click="changeInformationFormVisible = false"
              >取消</el-button
            >
            <el-button
              type="primary"
              @click="changeInformationFormVisible = false; submitInformationChange()"
            >
              确认
            </el-button>
          </span>
        </div>
      </template>
    
  </el-dialog>

  <el-dialog
    v-model="changePasswordVisible"
    title="修改密码"
    :append-to-body="true"
  >
  <el-form :model="changePasswordForm">
      <el-form-item label="修改后密码" :label-width="formLabelWidth" >
        <el-input
          v-model="changePasswordForm.newPassword"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      
  </el-form>
  <template #footer>
        <div>
          <span class="dialog-footer">
            <el-button @click="changePasswordVisible = false"
              >取消</el-button
            >
            <el-button
              type="primary"
              @click="changePasswordVisible = false; submitPasswordChange()"
            >
              确认
            </el-button>
          </span>
        </div>
      </template>
</el-dialog>
<el-dialog
    v-model="deleteAccountVisible"
    title="注销账户"
    :append-to-body="true"
  >
  <div>此操作不可逆，您的账户信息将被从数据库中抹去。提交注销申请后，您的申请将被管理员审核。是否继续？</div>
  <template #footer>
        <div>
          <span class="dialog-footer">
            <el-button @click="deleteAccountVisible = false"
              >取消</el-button
            >
            <el-button
              type="primary"
              @click="deleteAccountVisible = false; deleteThisAccount()"
            >
              确认
            </el-button>
          </span>
        </div>
      </template>
</el-dialog>
</div>
</template>

<script setup>
import { onMounted } from "vue";
import { user } from "../common/localStorage";
import request from "../utils/request";
import { ref, reactive } from "vue";
import { before } from "lodash";
import { ElMessage } from "element-plus";
// import Vue from 'vue';
var user_name = ref("1234");
var user_id = ref("");
var user_organization = ref("");
var user_email = ref("");
var user_phone = ref("");
var user_wechat = ref("");
var disabled1 = ref(true);
var disabled2 = ref(true);
var disabled3 = ref(true);
var disabled4 = ref(true);
const changeInformationFormVisible = ref(false);
const changeInformationForm = reactive({
  user_name: "",
  user_email: "",
  user_phone: "",
  user_wechat: "",
});
const changePasswordVisible = ref(false);
const changePasswordForm = reactive({
  newPassword: "",
  user_id:"",
  token:"",
});
const deleteAccountVisible = ref(false);
function getUserInformation() {
  request.post("/api/user/getUserInfo", user).then((res) => {
    console.log(res);
    console.log(res.username);
    user_name.value = res.username;
    user_id.value = res.id;
    user_organization.value = res.organization;
    user_email.value = res.email;
    user_phone.value = res.phone;
    user_wechat.value = res.wechat;
    console.log(typeof user_name);
    console.log(user_id);
  });
}

function setInputValid() {
  // console.log(selectValue.value);
  var selectStr = JSON.parse(JSON.stringify(selectValue.value));
  if(selectStr.indexOf("Option1") =='-1'){
    // console.log("-yonghuming");
    disabled1.value = true;
  } else {
    // console.log("yonghuming");
    disabled1.value = false;
  }
  if(selectStr.indexOf("Option2") =='-1'){
    // console.log("-youxiang");
    disabled2.value = true;
  } else {
    // console.log("youxiang");
    disabled2.value = false;
  }
  if(selectStr.indexOf("Option3") =='-1'){
    // console.log("-dianhua");
    disabled3.value = true;
  } else {
    // console.log("dianhua");
    disabled3.value = false;
  }
  if(selectStr.indexOf("Option4") =='-1'){
    // console.log("-weixin");
    disabled4.value = true;
  } else {
    // console.log("weixin");
    disabled4.value = false;
  }
}

function submitInformationChange(){
  console.log("submit");
  var changeInformationForm1 = {
    user_name: "",
    user_email: "",
    user_phone: "",
    user_wechat:"",
    token:"",
    user_id:"",
  }
  changeInformationForm1.user_name = disabled1.value == true ? user_name.value : changeInformationForm.user_name;
  changeInformationForm1.user_email = disabled2.value == true ? user_email.value : changeInformationForm.user_email;
  changeInformationForm1.user_phone = disabled3.value == true ? user_phone.value : changeInformationForm.user_phone;
  changeInformationForm1.user_wechat = disabled4.value == true ? user_wechat.value : changeInformationForm.user_wechat;
  changeInformationForm1.token = user.token;
  changeInformationForm1.user_id = user.id;
  request.post("/api/user/changeUserInfo", changeInformationForm1).then((res) => {
    console.log(res);
  });
  getUserInformation();
}

function submitPasswordChange(){
  changePasswordForm.token = user.token;
  changePasswordForm.user_id = user.id;
  request.post("/api/user/changePassword",changePasswordForm).then((res)=>{
    console.log(res);
  });
  ElMessage("修改密码成功");
}

function connectAdmin(){
  ElMessage('请发邮件至chenhao2020@lzu.edu.cn联系管理员');
}

function deleteThisAccount(){
  request.post("/api/user/deleteUser", user).then((res) => {
    console.log(res);
  });
  ElMessage('注销信息提交成功。请等待管理员审核。');
  window.location.href = "/login";
}
const selectValue = ref([])
const options = [
  {
    value: 'Option1',
    label: '修改用户名',
  },
  {
    value: 'Option2',
    label: '修改邮箱',
  },
  {
    value: 'Option3',
    label: '修改电话',
  },
  {
    value: 'Option4',
    label: '修改微信',
  },

]


onMounted(() => {
  getUserInformation();
  const timer = setInterval(() => {
    getUserInformation();
  }, 10000);

  // const inputTimer = setInterval(() => {
  //   setInputValid();
  // }, 500);
});
function beforeDestroy() {
  clearInterval(this.timer);
  // clearInterval(this.inputTimer);
}
</script>

<style scoped>
.information-space {
  width: 99%;
}
.information-card {
  width: 99%;
  height: 100%;
}
.card-header {
  width: 99%;
}
</style>
