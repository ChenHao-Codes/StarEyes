<template>
  <el-menu router :default-active="onRoutes" class="sidebar" :collapse="SiderbarStore.isCollapse" @open="handleOpen"
    @close="handleClose" active-text-color="#ffd04b" background-color="#3F72AF" text-color="#F9F7F7">
    <template v-for="item in items">
      <el-menu-item :index="item.index" @click="goTo(item.index)">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts" setup>
import { useSiderbarStore } from "../store/sidebar"
import { routerKey, useRoute } from 'vue-router';
import { computed } from 'vue';
import  router  from '../router/index.js'
const items = [
  {
    icon: 'DataAnalysis',
    index: 'overview',
    title: '概览'
  },
  {
    icon: 'VideoCamera',
    index: 'monitors',
    title: '摄像头管理'
  },
  {
    icon: 'Tickets',
    index: 'events',
    title: '事件消息'
  },
  {
    icon: 'Cpu',
    index: 'servers',
    title: '服务器管理'
  },
  {
    icon: 'User',
    index: 'account',
    title: '个人信息管理'
  },
  {
    icon: 'More',
    index: 'about',
    title: '关于'
  }
]

const SiderbarStore = useSiderbarStore();
const handleOpen = (key: string, keyPath: string[]) => { }
const handleClose = (key: string, keyPath: string[]) => { }

const route = useRoute();
const onRoutes = computed(() => {
	return route.path;
});

</script>
<script lang="ts">
export default {
  methods: {
    goTo(path) {
      this.$router.push({name:path}, () => {
        // router.go(0)
        window.location.reload()
      })
    }
  }
}
</script>
<style>
.sidebar:not(.el-menu--collapse) {
  width: 250px;
}

.sidebar {
  z-index: 1;
  height: 100vh;
}
</style>