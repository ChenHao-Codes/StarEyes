<template>
  <el-space fill :fill-ratio="fill_ratio" class="all-cards">
    <el-card class="box-card Welcome">
      <template #header>
        <div class="card-header">
          <span>概览</span>
          <el-button type="primary" round>
            <router-link to="/dashboard/overview">刷新</router-link>
          </el-button>
        </div>
      </template>
      <div class="all-welcome-texts">
        <p class="welcome-texts">{{ dateState() }}, {{ user_name }}!</p>
        <p class="welcome-texts">现在是北京时间</p>
        <p class="welcome-texts">{{ times }}</p>
        <p class="welcome-texts">您共有{{ eventList.filter((item) => item.have_read === '0').length }}起未读事件。</p>
      </div>
    </el-card>
    <el-card class="box-card Hardwares">
      <template #header>
        <div class="card-header">
          <span>硬件信息</span>
          <el-button type="primary" round>
            <router-link to="/dashboard/monitors">详情</router-link>
          </el-button>
        </div>
      </template>
      <el-descriptions direction="horizontal" border class="camera_overview_content">
        <el-descriptions-item label="摄像头总数">{{
          camera_list.length
        }}</el-descriptions-item>
        <el-descriptions-item label="当前在线">{{
          camera_list.length - offlineCamera.length
        }}</el-descriptions-item>
        <el-descriptions-item label="当前离线">{{
          offlineCamera.length
        }}</el-descriptions-item>
      </el-descriptions>
    </el-card>

    <el-card class="box-card Events">
      <template #header>
        <div class="card-header">
          <span>预警信息</span>
          <el-button type="primary" round>
            <router-link to="/dashboard/events">详情</router-link>
          </el-button>
        </div>
      </template>
      <div class="event_overview_content">
      <p v-for="(item,index) in eventList"  class="text item">
        <b>摄像头：</b>
        <span>{{ ""+eventList[index].cam_id+"  "}}</span>
        <el-divider direction="vertical" />
        <b>      时间：</b>
        <span>{{ ""+item.time +"  "}}</span>
        <el-divider direction="vertical" />
        <b>      事件：</b>
        <span>{{ ""+item.event_type }}</span>
      
      </p>
      <p v-if="eventList.length == 0" >
        <p class="welcome-texts">当前暂无新预警信息。</p>
        <p class="welcome-texts">若想查看您的历史预警信息，</p>
        <p class="welcome-texts">请点击右上角“详情”按钮，</p>
        <p class="welcome-texts">前往消息管理页面。</p>
      </p>
      </div>
    </el-card>

    <el-card class="box-card Personal">
      <template #header>
        <div class="card-header">
          <span>个人信息</span>
          <el-button type="primary" round>
            <router-link to="/dashboard/account">详情</router-link>
          </el-button>
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
  </el-space>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from "vue";
import request from "../utils/request";
import { user } from "../common/localStorage";

const fill_ratio = ref(40);

const eventList=reactive([{
  id: "",
  cam_id: "",
  time: "",
  event_type: "",
  have_read: "0",
}]);
const camera_list = reactive([{}]);

function getEventList(){
  request.post('/api/event/getEventList',user).then((res)=>{
    console.log(res);
    // for(let i=0;i<res.length;i++){
    //   eventList[i].id=res.data[i].id;
    //   eventList[i].cam_id=res.data[i].cam_id;
    //   eventList[i].time=res.data[i].time;
    //   eventList[i].event_type=res.data[i].event_type;
    //   eventList[i].have_read=res.data[i].have_read;
    // }
    eventList.length = 0;
    var i = 0;
    for(const item of res){
      eventList.push(item);
      i++;
      if(i==5){
        break;
      }
    }  
  })
}
onMounted(()=>{
  getEventList();
  getUserInformation();
  getList();
})
var user_name = ref("1234");
var user_id = ref("");
var user_organization = ref("");
var user_email = ref("");
var user_phone = ref("");
var user_wechat = ref("");

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
function getList() {
      request.post("/api/cameraList", user).then((res) => {
        console.log("1");
        camera_list.length = 0;
        for(const item of res){
          camera_list.push(item);
        }
      });
    }


const offlineCamera = computed(() => {
  return camera_list.filter((item) => item.status == "0");
});
</script>

<script>

export const newIndex = "1";


export default {
  data() {
    return {
      EventNumber: 0,
      times: "",
      user: user,
    };
  },
  methods: {
    dateState() {
      let date = new Date();
      if (date.getHours() >= 6 && date.getHours() < 12) {
        return "上午好";
      } else if (date.getHours() >= 12 && date.getHours() < 18) {
        return "下午好";
      } else {
        return "晚上好";
      }
    },
    getTimes() {
      setInterval(this.getTimesInterval, 1000);
    },
    getTimesInterval: function () {
      let _this = this;
      let year = new Date().getFullYear(); //获取当前时间的年份
      let month = new Date().getMonth() + 1; //获取当前时间的月份
      let day = new Date().getDate(); //获取当前时间的天数
      let hours = new Date().getHours(); //获取当前时间的小时
      let minutes = new Date().getMinutes(); //获取当前时间的分数
      let seconds = new Date().getSeconds(); //获取当前时间的秒数
      //当小于 10 的是时候，在前面加 0
      if (hours < 10) {
        hours = "0" + hours;
      }
      if (minutes < 10) {
        minutes = "0" + minutes;
      }
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      //拼接格式化当前时间
      _this.times =
        year +
        "." +
        month +
        "." +
        day +
        "  " +
        hours +
        ":" +
        minutes +
        ":" +
        seconds;
    },
  },
  created() {
    this.getTimes();
  },
  

};
</script>


<style scoped>
.el-card__body {
  margin-top: 30px;
}

.welcome-texts {
  font-size: 35px;
  font-weight: 600;
  color: rgb(0, 0, 0);
  display: flex;
  padding-left: 2ch;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 20px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  height: 43vh;
  min-width: 400px;
}

.all-cards {
  max-height: 900px;
  width: 100%;
}
.el-card.is-always-shadow.box-card.Welcome { 
  position: relative;
}
.all-welcome-texts{
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-90%, -50%);
}
.el-card.is-always-shadow.box-card.Hardwares { 
  position: relative;
}
.camera_overview_content{
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
  width : 90%;
}

.el-card.is-always-shadow.box-card.Events {
  position: relative;
}
.event_overview_content{
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-45%, -50%);
  width: 90%;
}


</style>
<!-- 
<style> 
.el-card__body { margin-top: 30px; }

.welcome-texts { font-size: 30px; font-weight: 600; color: rgb(0, 0, 0); }

.card-header { display: flex; justify-content: space-between; }

.text { font-size: 20px; }

.item { margin-bottom: 18px; }

.box-card { /* 新增样式 / flex:1; / 灵活性 / width:0; / 宽度 / height:auto; / 高度自适应 / min-width:400px; / 最小宽度 / } .all-cards { / 新增样式 / display:flex; / 显示为弹性盒子 / flex-wrap:wrap; / 允许换行 / justify-content:center; / 水平居中对齐 / align-items:center; / 垂直居中对齐 */
  max-height:900px; 
  width:100%; 
} 
</style> -->