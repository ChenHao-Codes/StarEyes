import { reactive } from "vue";

const saveUserInfo = (id, Token) => {
  if (!window.localStorage) {
    ElNotification({
      type: "error",
      message: "浏览器不支持localStorage,\n请更换浏览器或升级浏览器版本!",
    });
    return false;
  } else {
    window.localStorage.setItem("ID", id);
    window.localStorage.setItem("Token", Token);
    return true;
  }
};

const getToken = () => {
  return window.localStorage.getItem("Token");
};

const getID = () => {
  return window.localStorage.getItem("ID");
};

const user = reactive({
  id: getID(),
  password: "",
  token: getToken(),
});

export { saveUserInfo, getToken, getID, user };
