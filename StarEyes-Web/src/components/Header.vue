<template>
  <div class="header">
    <el-page-header>
      <template #content>
        <div class="previous-header">
          <div class="collapse-btn" @click="collapseChange">
            <el-icon :size="30" color="#f2f2f2" v-if="SiderbarStore.isCollapse">
              <Expand />
            </el-icon>
            <el-icon :size="30" color="#f2f2f2" v-else>
              <Fold />
            </el-icon>
          </div>
          <img src="../assets/images/logo.png" />
          <span class="title"> StarEyes </span>
          <span class="desc"> 智慧城市 </span>
        </div>
      </template>
      <template #extra>
        <div class="post-header">
          <div class="notice" @click="router.push({path: '/dashboard/events'})">
            <el-tooltip effect="dark" :content="events ? `有${events}条未读消息` : `事件消息`" placement="bottom">
              <el-icon :size="25" color="#f2f2f2">
                <Bell />
              </el-icon>
            </el-tooltip>
            <span class="red-point" v-if="events"></span>
          </div>
          <el-dropdown trigger="click" @command="handleCommand">
            <div class="user-icon" @mouseover="user_hover = true" @mouseleave="user_hover = false">
              <span v-if="user_hover">
                <el-icon :size="25" color="#cccccc">
                  <User />
                </el-icon>
              </span>
              <span v-else>
                <el-icon :size="25" color="#f2f2f2">
                  <User />
                </el-icon>
              </span>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="account"><span style="font-weight:bold">ID:{{ user.id }}</span>
                </el-dropdown-item>
                <el-dropdown-item divided command="logout"><span style="color:#f86c6c; font-weight:bold">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </template>
    </el-page-header>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return user;
  }
};
</script>

<script setup>
import { useSiderbarStore } from "../store/sidebar"
import router from "../router";
import { removeUserInfo } from "../common/localStorage";
import { user } from "../common/localStorage";
import { ref, onMounted, onUnmounted } from 'vue';

const user_hover = ref(false);
const events = ref(2);
const SiderbarStore = useSiderbarStore();
const collapseChange = () => {
  SiderbarStore.toggleCollapse();
};

const handleCommand = (command) => {
  if (command == 'logout') {
    removeUserInfo();
    router.push({ path: '/login' });
    SiderbarStore.reset();
  }
  else if (command == 'account') {
    router.push({ path: '/dashboard/account' });
  }
};

onMounted(() => {
  if (document.body.clientWidth < 1500) {
    collapseChange();
  }
});

onUnmounted(() => {
  ElMessage({
    type: "info",
    message: "Log out successfully!",
  });
});

</script>

<style>
.header {
  z-index: 3;
  height: 50px;
  background-color: #112d4e;
  width: 100%;
  margin: -17px 0px 0px -20px;
  padding: 12px 20px 13px 20px;
}

.el-page-header__back {
  display: none;
}

.el-divider--vertical {
  display: none;
}

.collapse-btn {
  display: inline-block;
  height: 30px;
  background-color: #112d4e;
  margin: auto 17px;
  cursor: pointer;
}

.title {
  font-size: 40px;
  color: #f2f2f2;
}

.desc {
  font-size: 20px;
  color: #e6e6e6;
}

.notice {
  display: inline;
  margin-right: 20px;
  cursor: pointer;
}

.red-point {
  position: absolute;
  right: 66px;
  top: 16px;
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background: #f56c6c;
}

.user-icon {
  margin-right: 20px;
  cursor: pointer;
}
</style>
