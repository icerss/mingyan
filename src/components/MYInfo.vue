<template>
  <!-- 名言来源 -->
  <a class="my--showfrom label label-rounded label-warning" @click="showInfo">
    <i class="mdui-icon material-icons" style="font-size: 15px">&#xe80c;</i
    >&nbsp; <span class="my--showfrom-text"> {{ type }}</span>
  </a>
</template>

<script>
import { MingyanLOGO } from "../js/init";
import { MY_showFromApi } from "./../js/feat/infoApi";
import swal from "sweetalert";

export default {
  name: "MYInfo",
  props: {
    mingyan: String,
  },
  data() {
    return {
      type: "世界馆",
      showFromData: "",
    };
  },
  mounted() {
    this.loadType();
  },
  watch: {
    mingyan() {
      this.type = "世界馆";
      this.loadType();
    },
  },
  methods: {
    showInfo() {
      let root = this;
      if (!root.showFromData) {
        root.showFromData = "";
        MY_showFromApi.getinfo(root.mingyan).then(function(info) {
          root.showFromData = info.data;
          return root.showInfo();
        });
      } else {
        let fetchData = root.showFromData;
        let name = fetchData.from.submit_name || "耳斯名言团队";
        let comefrom = fetchData.from.submit_school || "地球";
        swal({
          title: "",
          text: `提供者：${name}\n出自：${comefrom}`,
          icon: MingyanLOGO,
          button: "关闭",
        });
        document.querySelector(
          ".swal-icon.swal-icon--custom>img"
        ).style.maxWidth = "150px";
        document.querySelector(".swal-text").style.fontSize = "26px";
        document.querySelector(".swal-text").style.textAlign = "center";
      }
    },
    loadType() {
      let root = this;
      MY_showFromApi.getinfo(root.mingyan).then(function(info) {
        root.showFromData = info.data;
        // db("showFromData", showFromData);
        let submit_type = root.showFromData.from.type;
        if (root.showFromData.from.submit_school == "厦门市音乐学校") {
          submit_type = "音校馆";
        }
        root.type = submit_type;
        root.isReady = true;
      });
    },
  },
};
</script>

<style scoped>
.my--showfrom {
  cursor: pointer;
}
</style>
