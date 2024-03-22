<template>
  <div class="content-wrap">
    <v-header />
    <v-sidebar />
    <div class="content" :class="{ 'content-collapse': SiderbarStore.isCollapse}">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <div>
            <keep-alive>
              <component :is="Component"></component>
            </keep-alive>
          </div>
        </transition>
      </router-view>
    </div>

  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { user } from "../common/localStorage";
import vHeader from "../components/header.vue";
import vSidebar from "../components/sidebar.vue";
import { onMounted } from 'vue'
import { useSiderbarStore } from "../store/sidebar"

const SiderbarStore = useSiderbarStore();

onMounted(() => {
  ElMessage({
    type: "info",
    message: "Welcome! User " + user.id + ".",
  });
})
</script>

<style scoped>
.content-wrap {
  background-color: #ececec;
}

.content {
  position: absolute;
  left: 250px;
  right: 0;
  top: 58px;
  bottom: 0;
  padding: 20px 6px 20px 20px;
  overflow-y: scroll;
  background-color: #ececec;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
}

.content-collapse {
  left: 63px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>