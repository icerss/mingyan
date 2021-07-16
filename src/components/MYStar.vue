<template>
  <!-- 点赞 -->
  <a class="my--star-btn label label-rounded label-warning" @click="doStar">
    <i class="mdui-icon material-icons" style="font-size: 15px">&#xe8dc;</i
    >&nbsp; 点赞</a
  >
</template>

<script>
import { addClickEvent, isShow, log, NotyfAlert } from "../js/tools";
import { MingyanLOGO } from "../js/init";
import { MY_starApi } from "../js/feat/starApi";
import swal from "sweetalert";

export default {
  name: "MYStar",
  props: {
    mingyan: String,
  },
  data() {
    return {
      starEvent: "addstar",
      loadingHtml: `
    <!-- 点赞 -->
    <i class="mdui-icon material-icons" id="star-logo" style="cursor: pointer;">&#xe8dc;</i>
    <span class="my--star-num">
    <!-- 加载动画 -->
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(5px);" width="15px" height="15px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    </circle>
  <!-- https://loading.io/ --></svg>
    </span>
    `,
    };
  },
  mounted() {
    window.addEventListener("hashchange", function () {
      this.starEvent = "addstar";
    });
    addClickEvent("#star-logo", this.doStar);
  },
  created() {
    this.doStar = this.star;
  },
  methods: {
    isSwalShow() {
      return isShow(".swal-overlay--show-modal");
    },
    turnRed() {
      return (document.querySelector("#star-logo").style.color = "red");
    },
    turnGray() {
      return (document.querySelector("#star-logo").style.color = "#000000A3");
    },
    star() {
      log(this.mingyan);
      if (!this.isSwalShow()) {
        swal({
          title: document.querySelector(".my--mingyan-text").innerText,
          text: "加载出错了？刷新试试？",
          icon: MingyanLOGO,
          button: "关闭",
        }).then(() => {
          this.starEvent = "addstar";
        });
        document.querySelector(
          ".swal-icon.swal-icon--custom>img"
        ).style.maxWidth = "150px";
        document.querySelector(".swal-text").innerHTML = this.loadingHtml;
        this.turnGray();

        switch (this.starEvent) {
          case "addstar":
            this.addStar();
            break;
          case "removestar":
            this.removeStar();
            break;
        }
      }
    },
    addStar() {
      let root = this;
      root.turnGray();
      MY_starApi.addStar()
        .then(function (addStar_res) {
          let statusCode = addStar_res.code;
          if (statusCode != 0) {
            NotyfAlert.err(addStar_res.msg);
            document.querySelector(".my--star-num").innerHTML =
              addStar_res.data.starNum;
            if (addStar_res.data.isStar) {
              root.turnRed();
              root.starEvent = "removestar";
            }
          } else {
            NotyfAlert.su(addStar_res.msg);
            document.querySelector(".my--star-num").innerHTML =
              addStar_res.data.starNum;
            if (addStar_res.data.isStar) {
              root.turnRed();
              root.starEvent = "removestar";
            }
          }
        })
        .catch(function (err) {
          NotyfAlert.err("错误：\n" + err);
        });
    },
    removeStar() {
      let root = this;
      root.turnGray();
      MY_starApi.removeStar()
        .then(function (addStar_res) {
          let statusCode = addStar_res.code;
          if (statusCode != 0) {
            NotyfAlert.err(addStar_res.msg);
            document.querySelector(".my--star-num").innerHTML =
              addStar_res.data.starNum;
            if (!addStar_res.data.isStar) {
              root.turnGray();
              root.starEvent = "addstar";
            }
          } else {
            NotyfAlert.su(addStar_res.msg);
            document.querySelector(".my--star-num").innerHTML =
              addStar_res.data.starNum;
            if (!addStar_res.data.isStar) {
              root.turnGray();
              root.starEvent = "addstar";
            }
          }
        })
        .catch(function (err) {
          NotyfAlert.err("错误：\n" + err);
        });
    },
  },
};
</script>

<style>
.swal-overlay {
  z-index: 10 !important;
}

.notyf__message {
  font-size: 17px !important;
  font-family: "Roboto" !important;
  margin: 0 !important;
}

.notyf {
  opacity: 0.8 !important;
}

.notyf {
  padding-top: 20px !important;
  padding-right: 20px !important;
  padding-bottom: 0 !important;
  padding-left: 20px !important;
}

.notyf__toast {
  border-radius: 5px !important;
}

.notyf__toast--upper {
  margin-bottom: 10px !important;
}

@media only screen and (max-width: 480px) {
  .notyf {
    padding-top: 0px !important;
  }
}
</style>

<style  scoped>
.my--star-btn {
  cursor: pointer;
}
</style>