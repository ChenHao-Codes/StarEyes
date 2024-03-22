<template>
  <div class="home_div" style="height: 100%">
    <div id="container"></div>
  </div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";
import { map } from "lodash";
import { getCortexLat, getCortexLon, getMapStatus } from "../common/localStorage";
export default {
  name: "mapcomtaint",
  setup() {
    const map = shallowRef(null);
    return {
      map,
    };
  },
  create() {},

  props: {},
  methods: {
    ininMap() {
      AMapLoader.load({
        key: "82c40fd8fb83a68e1513783c57ce7d3f", //设置您的key
        version: "2.0",
        plugins: ["AMap.ToolBar", "AMap.Driving"],
        AMapUI: {
          version: "1.1",
          plugins: [],
        },
        Loca: {
          version: "2.0.0",
        },
      })
        .then((AMap) => {
          this.map = new AMap.Map("container", {
            viewMode: "3D",
            zoom: 5,
            zooms: [2, 22],
            center: [105.602725, 37.076636],
          });
		  
		  var cortexLat = getCortexLat().split(",");
		  var cortexLon = getCortexLon().split(",");
		  console.log(typeof cortexLat);
		  console.log(typeof cortexLon);
		  var positionArr = [];
		  for(let i = 0; i < cortexLat.length; i++){
			positionArr.push([cortexLon[i],cortexLat[i]]);
		  }
		  console.log(positionArr);
          for (let item of positionArr) {
            let marker = new AMap.Marker({
              position: [item[0], item[1]],
            });
            this.map.add(marker);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    addMarker() {
    //   new AMapUI.SimpleMarker({
    //     //前景文字
    //     iconLabel: {
    //       innerHTML: "A",
    //       style: {
    //         color: "#fff",
    //       },
    //     },
    //     //图标主题
    //     iconTheme: "fresh",
    //     //背景图标样式
    //     iconStyle: "blue",
    //     //图标大小
    //     iconStyle: "blue",
    //     //图标大小
    //     size: [40, 40],
    //     //图标定位点位置
    //     offset: [0, 0],
    //     //地图对象
    //     map: this.map,
    //     //基点位置
    //     position: [116.397428, 39.90923],
    //   });
     },
  },
  mounted() {
    //DOM初始化完成进行地图初始化
    this.ininMap();
    this.addMarker();

  },
};
</script>
<style scoped>
.home_div {
  height: 100%;
  width: 100%;
  padding: 0px;
  margin: 0px 0 0 0px;
  position: relative;
  left: -3vh;
}
#container {
  height: 50vh;
  width: wrap-content;
  padding: 0px;
  margin: 0px 0 0 0px;
}

h3 {
  position: absolute;

  z-index: 1;
  color: white;
}
</style>
