<template>
  <el-dialog
    v-model="dialogFormVisible"
    title="修改摄像头${this.camId}信息"
    :append-to-body="true"
  >
    <el-form :model="form">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">
            Confirm
          </el-button>
        </span>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>


const props = defineProps({
  camdata: {
    cam_id:String,
    cam_name:String,
    organization:String,
    status:Number,
    pos_lon:Number,
    pos_lat:Number
  },
  dialogFormVisible: Boolean
});


console.log(props.camdata);
</script>
