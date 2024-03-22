<template>
  <div>
      <el-space fill class="event-map-spcae">
          <el-card>
              <template #header>
                  <div class="card-header">
                      <span>About</span>
                  </div>
              </template>
                  <p>Copyright ©2023 星眸  star-eyes.cloud</p>
                  <p>All Rights Reserved.</p>
          </el-card>
      </el-space>
  </div>
</template>

<script setup>
  import { computed, onMounted, reactive, ref } from "vue";
</script>

<style>
.event-map-spcae {
width: 100%;
}
</style>