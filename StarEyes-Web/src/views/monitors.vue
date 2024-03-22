<template>
  <el-space class="box-title-space" fill>
    <el-card class="box-card-title">
      <template #header>
        <div class="card-header">
          <span class="header-monitor-num">摄像头数量:{{ monitorNumber }}</span>
          <el-form :inline="true" :model="form" label-width="20px">    
            <el-form-item>              
              <el-button class="button-list" type="success" round @click="message_show()"
                >添加摄像头</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </template>
    </el-card>
    <el-card class="maps-card">
      <Maps id="container"></Maps>
    </el-card>
  </el-space>

  <div>
    <el-space fill class="monitors-card">
      <!-- <el-card>
        <li v-for="camera in camera_list">
          {{ camera }}
        </li>
      </el-card> -->
      <template v-for="(cam_id, index) in camera_list">
        <!-- <el-card  class="box-card" id="monitor-each"> -->
        <el-card class="monitors-card-each">
          <div class="card-header">
            <span>摄像头{{ index + 1 }}</span>
            <span v-if="cam_id.status == true">
              <el-tag class="ml-2" type="success">在线</el-tag></span
            >
            <span v-else><el-tag class="ml-2" type="danger">离线</el-tag></span>
            <el-button @click="dialogFormVisible = true;camera_index_now = index;" id="change-monitor-info" type="warning" round 
              >修改信息</el-button
            >
          </div>

          <li class="text-item">摄像头ID:{{camera_list[index].cam_id}}</li>
          <li class="text-item">摄像头名称：{{camera_list[index].cam_name}}</li>
          <li class="text-item">所属组织：{{camera_list[index].organization}}</li>
          <li class="text-item">经度：{{camera_list[index].pos_lon}}</li>
          <li class="text-item">纬度：{{camera_list[index].pos_lat}}</li>
          <!-- <span>{{this.camera_list[camera_index_now]}}</span> -->
        </el-card>
      </template>
    </el-space>
  </div>

  <el-dialog
    v-model="dialogFormVisible"
    title="修改摄像头信息"
    :append-to-body="true"
  > 
    <div>请高亮选择您想修改的信息：</div>
    <div class="demo-button-style">
    <el-checkbox-group v-model="chooseChangeItem" size="large" @change="setInputValid">
      <el-checkbox-button v-for="information in informations" :key="information" :label="information">
        {{ information }}
      </el-checkbox-button>
    </el-checkbox-group>
    
  </div>

    <el-form :model="form">
      <el-form-item label="摄像头名称" :label-width="formLabelWidth" >
        <el-input v-model="form.camname" autocomplete="off" :placeholder="this.cam_now.cam_name" :disabled="this.disabledName"/>
      </el-form-item>
      <el-form-item label="摄像头经度" :label-width="formLabelWidth">
        <el-input v-model="form.camlon" autocomplete="off" :placeholder="this.cam_now.pos_lon" :disabled="this.disabledLon"/>
      </el-form-item>
      <el-form-item label="摄像头纬度" :label-width="formLabelWidth">
        <el-input v-model="form.camlat" autocomplete="off" :placeholder="this.cam_now.pos_lat" :disabled="this.disabledLat"/>
      </el-form-item>

    </el-form>
    <template #footer>
      <div>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false;this.submitMonitorChange()">
            确认
          </el-button>
        </span>
      </div>
    </template>
    
  </el-dialog>
  
</template>

<script setup>
import Maps from "../components/Maps.vue";
import request from "../utils/request";
import { user } from "../common/localStorage";
import { ref, reactive, onMounted } from "vue";
import { computed } from "@vue/reactivity";
import { setCortexList, getCortexLat} from "../common/localStorage.js";

// console.log(camera_list);

const dialogFormVisible = ref(false);
const formLabelWidth = "140px";

const form = reactive({
  camname: "",
  camlon: "",
  camlat: "",

});

const chooseChangeItem = ref(["摄像头名称"]);
const informations = ["摄像头名称", "摄像头经度", "摄像头纬度"];
var disabledName = ref(false);
var disabledLon = ref(true);
var disabledLat = ref(true);
function setInputValid(){
  var selectStr = JSON.parse(JSON.stringify(chooseChangeItem.value));
  if(selectStr.includes("摄像头名称")){
    disabledName.value = false;
  }else{
    disabledName.value = true;
  }
  if(selectStr.includes("摄像头经度")){
    disabledLon.value = false;
  }else{
    disabledLon.value = true;
  }
  if(selectStr.includes("摄像头纬度")){
    disabledLat.value = false;
  }else{
    disabledLat.value = true;
  }
}
function message_show(){
  ElMessage('请使用Windows桌面版客户端添加摄像头');
}

function submitMonitorChange(){
  console.log("submit");
  var submitMonitorChangeForm = {
    cam_name:this.cam_now.cam_name,
    cam_id: this.cam_now.cam_id,
    pos_lon: this.cam_now.pos_lon,
    pos_lat: this.cam_now.pos_lat,
    user:this.user,
  }
  
  if(!disabledName.value){
    submitMonitorChangeForm.cam_name = form.camname;
  }
  if(!disabledLon.value){
    submitMonitorChangeForm.pos_lon = form.camlon;
  }
  if(!disabledLat.value){
    submitMonitorChangeForm.pos_lat = form.camlat;
  }
  console.log(submitMonitorChangeForm);
  request.post("/api/camera/update", submitMonitorChangeForm).then((res) => {
    console.log(res);
  });
}

</script>

<script>
export default {
  data() {
    return {
      camera_index_now:0,
      camera_list: [],
      monitorNumber: 0,
      formInline: {
        queryMonitor: "",
        region: "",
      },
    };
  },
  methods: {
    getList() {
      request.post("/api/cameraList", user).then((res) => {
        console.log("1");
        this.camera_list = res;
        console.log("2");
        console.log(this.camera_list);
        this.monitorNumber = this.camera_list.length;
        var camera_str = JSON.parse(JSON.stringify(this.camera_list));
        console.log(camera_str);
        setCortexList(camera_str.map(obj => obj.pos_lon),camera_str.map(obj => obj.pos_lat));
        console.log(getCortexLat());
      });
    },
    printCamera(){
      console.log(this.camera_list[this.camera_index_now]);
    },
    submitMonitorChange(){
      var cameraToPost = this.camera_list[this.camera_index_now];
      cameraToPost.cam_name = this.form.camname;
      cameraToPost.pos_lon = this.form.camlon;
      cameraToPost.pos_lat = this.form.camlat;
      request.post("/api/cameraChange", this.camera_list[this.camera_index_now]).then((res) => {
        //TODO:完成后端逻辑 修改数据库中当前摄像头信息
        if(res){

        } else{
          alert("修改失败");
        }
      });
    }
  },
  created() {
    this.getList();
  },
  // mounted() {
  //   this.timer = setInterval(this.getList, 10000);
  // },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  computed: {
    cam_now() {
      return this.camera_list[this.camera_index_now];
    },
  },
};
</script>

<style scoped>
#change-monitor-info {
  float: right;
  transform: translate(-44px,-4px);
}
.monitors-card {
  width: 99%;
  height: wrap-content;
}
.header-monitor-num {
  float: left;
  font-size: 20px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  display: flex;
  padding-left: 0ch;
  text-align: center;
  padding-bottom: 20px;
}

.el-form--inline {
  float: right;
}

.box-card-title {
  margin-bottom: 10px;
  width: 100%;
  height: 63px;
}
.box-title-space {
  width: 99%;
}
.button-list {
  margin-right: 10px;
}
.monitors-card-each{
  width: 99%;
  height: wrap-content;
  
  margin-bottom: 10px;
  padding-bottom: 20px;
}
#monitor-each {
  height: wrap-content;
  padding-bottom: 20px;
}
.maps-card {
  width: wrap-content;
  margin-bottom: 20px;
  height: wrap-content;
}
.el-card {
  padding: -10px 0px 0px 0px;
  border: 0px;
  width:99vw;
}
#container {
  height: 40vh;
  width: 99vw;
}
.text-item {
  float: left;
  margin-right: 40px;
  list-style-type: none;
}
.ml-2{
  margin-left: 20px;
  transform: translate(-1px, -4px);
}
.change_monitor_button{
  transform: translate(0px, -100px);
}
</style>

<!-- <template>
  <h1>monitors</h1>
</template> -->
