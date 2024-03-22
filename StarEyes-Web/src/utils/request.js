import axios from "axios";
import { ElMessage } from "element-plus";
import { getToken } from "../common/localStorage";

const request = axios.create({
  baseURL: "http://star-eyes.cloud:9090",
  timeout: 5000,
  transformResponse: [
    function (data) {
      //console.log(JSON.stringify(data));
      return data;
    },
  ],
});

// request 拦截器
request.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json;charset=utf-8";
    config.headers.Authorization = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// response 拦截器
request.interceptors.response.use(
  (response) => {
    let res = response.data;
    // console.log("status: " + response.status);
    console.log("response.data: " + res);

    // 如果是返回的文件
    if (response.config.responseType === "blob") {
      return res;
    }
    // 兼容服务端返回的字符串数据
    if (typeof res === "string") {
      res = res ? JSON.parse(res) : res;
    }
    return res;
  },
  (error) => {
    console.log("request.js: " + error);
    if (error.response.data.status != 200) {
      ElMessage({
        type: "error",
        message: "接口异常！",
      });
    }
    return Promise.reject(error);
  }
);

export default request;
