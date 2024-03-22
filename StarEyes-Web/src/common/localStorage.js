import { reactive } from "vue";

const saveUserInfo = (id, Token) => {
  if (!window.localStorage) {
    ElNotification({
      type: "error",
      message: "浏览器不支持localStorage,\n请更换浏览器或升级浏览器版本!",
    });
    return false;
  } else {
    window.localStorage.setItem("SE_ID", id);
    window.localStorage.setItem("SE_Token", Token);
    return true;
  }
};

const getToken = () => {
  return window.localStorage.getItem("SE_Token");
};

const getID = () => {
  return window.localStorage.getItem("SE_ID");
};

const removeUserInfo = () => {
  window.localStorage.removeItem("SE_ID");
  window.localStorage.removeItem("SE_Token");
};

const user = reactive({
  id: getID(),
  password: "",
  token: getToken(),
});

const setCortexList = (cortexLon,cortexLat) => {
  window.localStorage.setItem("SE_CortexLon",cortexLon);
  window.localStorage.setItem("SE_CortexLat",cortexLat);
};

const getCortexLon = () => {
  return window.localStorage.getItem("SE_CortexLon");
};

const getCortexLat = () => {
  return window.localStorage.getItem("SE_CortexLat");
};

const setMapStatus = (mapStatus) => {
  window.localStorage.setItem("SE_MapStatus",mapStatus);
};

const getMapStatus = () => {
  return window.localStorage.getItem("SE_MapStatus");
};

const setEventList = (eventList) => {
  window.localStorage.setItem("SE_EventList",eventList);
};

const getCameraList = () => {
  return window.localStorage.getItem("SE_CameraList");
};

const setCameraList = (cameraList) => {
  window.localStorage.setItem("SE_CameraList",cameraList);
};

const setFlashFlag = (flag) => {
  window.localStorage.setItem("SE_FlashFlag",flag);
};

const getFlashFlag = () => {
  return window.localStorage.getItem("SE_FlashFlag");
};
export { saveUserInfo, getToken, getID, removeUserInfo, setCortexList, getCortexLat, getCortexLon, setMapStatus, getMapStatus,setFlashFlag, getFlashFlag, user };
