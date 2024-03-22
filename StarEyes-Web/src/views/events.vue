<template>
  <div>
    <el-space fill class="event-map-spcae">
      <el-card>
        <template #header>
          <div class="card-header">
            <span>未读消息</span>
          </div>
        </template>
        <template v-if="eventList.filter((item) => item.have_read === '0')">
          <div
            v-if="
              eventList.filter((item) => item.have_read === '0').length == 0
            "
          >
            没有未读消息
          </div>
          <div v-else>
            <el-table
              :data="eventList.filter((item) => item.have_read === '0')"
              style="width: 100%"
            >
              <el-table-column label="事件ID" prop="id" />
              <el-table-column label="发生时间" prop="time" />
              <el-table-column label="事件类型" prop="event_type" />
              <el-table-column label="摄像头编号" prop="cam_id" />
              <el-table-column label="是否已读" prop="have_read" />
              <el-table-column align="right">
                <template #header>
                  <el-input
                    v-model="search"
                    size="small"
                    placeholder="搜索全部事件"
                  />
                </template>
                <template #default="scope">
                  <el-button
                    size="small"
                    @click="handleMoreInformation(scope.$index, scope.row)"
                    >下载视频</el-button
                  >
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleRead(scope.$index, scope.row)"
                    >确认已读</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </template>
      </el-card>
      <el-card>
        <template #header>
          <div class="card-header">
            <span>所有消息</span>
          </div>
        </template>
        <template v-if="eventList">
          <div v-if="eventList.length === 0">没有消息</div>
          <div v-else>
            <el-table
              :data="
                eventList.filter(
                  (data) =>
                    data.id.toLowerCase().includes(search.toLowerCase()) ||
                    data.cam_id.toLowerCase().includes(search.toLowerCase()) ||
                    data.event_type
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    data.time.toLowerCase().includes(search.toLowerCase())
                )
              "
              style="width: 100%"
            >
              <el-table-column label="事件ID" prop="id" />
              <el-table-column label="发生时间" prop="time" />
              <el-table-column label="事件类型" prop="event_type" />
              <el-table-column label="摄像头编号" prop="cam_id" />
              <el-table-column label="是否已读" prop="have_read" />
              <el-table-column align="right">
                <template #header>
                  <el-input
                    v-model="search"
                    size="small"
                    placeholder="搜索全部事件"
                  />
                </template>
                <template #default="scope">
                  <el-button
                    size="small"
                    @click="handleMoreInformation(scope.$index, scope.row)"
                    >查看视频</el-button
                  >
                  <el-button
                    size="small"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                    >删除事件</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
        </template>
      </el-card>
    </el-space>
  </div>

  <el-dialog
    v-model="dialogFormVisible"
    title="事件详情"
    :append-to-body="true"
  >
    <el-form :model="form">
      <el-form-item label="摄像头名称" :label-width="formLabelWidth">
        <el-input
          v-model="form.camname"
          autocomplete="off"
          :placeholder="this.cam_now.cam_name"
        />
      </el-form-item>
      <el-form-item label="摄像头经度" :label-width="formLabelWidth">
        <el-input
          v-model="form.camlon"
          autocomplete="off"
          :placeholder="this.cam_now.pos_lon"
        />
      </el-form-item>
      <el-form-item label="摄像头纬度" :label-width="formLabelWidth">
        <el-input
          v-model="form.camlat"
          autocomplete="off"
          :placeholder="this.cam_now.pos_lat"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button
            type="primary"
            @click="
              dialogFormVisible = false;
              this.submitMonitorChange();
            "
          >
            确认
          </el-button>
        </span>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
// import Maps from "../components/Maps.vue";
import { computed, onMounted, reactive, ref } from "vue";
import request from "../utils/request";

import { user } from "../common/localStorage";
// router.go(0);
// window.location.reload();
// import '../../node_modules/video.js/dist/video-js.css';

// const eventList=reactive([{
//   id: "",
//   cam_id: "",
//   time: "",
//   event_type: "",
//   have_read: "0",

// }]);

// const filterTableData = computed(() =>
//   tableData.filter(
//     (data) =>
//       !search.value ||
//       data.id.toLowerCase().includes(search.value.toLowerCase()) ||
// 			data.address.toLowerCase().includes(search.value.toLowerCase()) ||
// 			data.eventType.toLowerCase().includes(search.value.toLowerCase()) ||
// 			data.time.toLowerCase().includes(search.value.toLowerCase())
//   )
// );
// var filterEventList = reactive([{
//   id: "",
//   cam_id: "",
//   time: "",
//   event_type: "",
//   have_read: "0",

// }]);
</script>

<script>
export default {
  data() {
    return {
      eventList: [],
      unReadEventList: [],
      filterEventList: [],
      search: "",
    };
  },
  methods: {
    getEventList() {
      request.post("/api/event/getEventList", user).then((res) => {
        console.log(res);
        this.eventList.length = 0;
        for (const item of res) {
          this.eventList.push(item);
          console.log(this.eventList);
        }
      });
    },
    handleMoreInformation(index, row) {
      //row is a proxy object that have data
      console.log("More Information");
      var video_url = this.formatDate(row.time);
      
      video_url = "http://star-eyes.cloud/vstream/" + row.cam_id + "_" + video_url + ".mp4";
      console.log(video_url);
      window.open(video_url, "_blank");
      console.log(index, row);

    },
    handleRead(index, row) {
      console.log("read");
      console.log(index, row);
      request.post("/api/event/read", row.id).then((res) => {
        console.log(res);
        this.getEventList();
        ElMessage("已确认已读");
      });
    },
    handleDelete(index, row) {
      console.log("delete");
      console.log(index, row);
      request.post("/api/event/delete", row.id).then((res) => {
        console.log(res);
        this.getEventList();
        ElMessage("已删除事件");
      });
    },
    formatDate(date) {
      var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      hour = '' + d.getHours(),
      minute = '' + d.getMinutes();

      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      if (hour.length < 2) hour = '0' + hour;
      if (minute.length < 2) minute = '0' + minute;

      return [d.getFullYear(), month, day].join('') + '_' + [hour, minute].join('');
    },

  },
  computed: {
    // unReadEventList(){
    //   return this.eventList.filter((item) => item.have_read === "0");
    // },
    // filterEventList(){
    //   return this.eventList.filter((data) => data.id.toLowerCase().includes(this.search.toLowerCase()) ||data.cam_id.toLowerCase().includes(this.search.toLowerCase()) ||data.event_type.toLowerCase().includes(this.search.toLowerCase()) ||data.time.toLowerCase().includes(this.search.toLowerCase()));
    // },
  },
  mounted() {
    this.getEventList();
  },
};
</script>
<style>


.event-map-spcae {
  width: 100%;
}
</style>
