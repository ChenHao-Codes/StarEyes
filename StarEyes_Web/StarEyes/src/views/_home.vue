<template>
  <div>
    <el-button type="primary" @click="handleAdd">
      <el-icon style="margin-right: 4px">
        <Plus />
      </el-icon>
      add
    </el-button>
  </div>
  <el-table :data="state.tableData" stripe style="width: 200%">
    //prop 的值要和json的key一样
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="password" label="Password" width="180" />
    <el-table-column fixed="right" label="Operations" width="220">
      <template #default>
        <el-button type="primary">
          <el-icon style="margin-right: 4px">
            <Edit />
          </el-icon>
          Edit
        </el-button>
        <el-button type="danger" @click="handleDelete">
          <el-icon style="margin-right: 4px">
            <Delete />
          </el-icon>
          Delete
        </el-button>
      </template>
    </el-table-column>
  </el-table>

  <el-dialog v-model="dialogFormVisible" title="user info" width="40%">
    <el-form :model="state.form">
      <el-form-item label="name">
        <el-input
          v-model="state.form.id"
          autocomplete="off"
          placeholder="Please input id"
        />
      </el-form-item>
      <el-form-item label="password">
        <el-select
          v-model="state.form.password"
          placeholder="Please select a zone"
        >
          <el-option label="Zone No.1" value="shanghai" />
          <el-option label="Zone No.2" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { reactive, ref } from "vue";
import request from "../request";

const state = reactive({
  tableData: [],
  form: {},
});

request.get("/user").then((res) => {
  console.log(res);
  state.tableData = res;
});

const dialogFormVisible = ref(false);
const handleAdd = () => {
  dialogFormVisible.value = () => true;
};

const handleDelete = () => {};
</script>
