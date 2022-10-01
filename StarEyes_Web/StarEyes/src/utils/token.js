function saveAccessToken(accessToken) {
  if (!window.localStorage) {
    ElNotification({
      type: "error",
      message: "浏览器不支持localStorage,\n请更换浏览器或升级浏览器版本!",
    });
    return false;
  } else {
    console.log("saveAccessToken: " + accessToken);
    window.localStorage.setItem("accessToken", accessToken);
    return true;
  }
}

function getAccessToken() {
  if (!window.localStorage) {
    ElNotification({
      type: "error",
      message: "浏览器不支持localStorage,\n请更换浏览器或升级浏览器版本!",
    });
    return false;
  } else {
    return window.localStorage.getItem("accessToken");
  }
}

export { saveAccessToken, getAccessToken };
