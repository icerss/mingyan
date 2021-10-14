<template>
  <!-- 点赞 -->
  <a class="my--star-btn label label-rounded label-warning" @click="doStar()">
    <i class="mdui-icon material-icons" style="font-size: 15px">&#xe8dc;</i
    >&nbsp; 点赞</a
  >
</template>

<script>
import { isShow, log, NotyfAlert, qs, querySelector, swal } from "../js/utils";
import { MingyanLogoBase64 } from "../js/init";
import { MY_starApi } from "../js/feat/starApi";
import { loadMtCaptcha } from "../js/feat/loadMtCaptcha";
import { recordEvent, recordEventId } from "../js/log";

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
    window.addEventListener("hashchange", function() {
      this.starEvent = "addstar";
    });
    // addClickEvent("#star-logo", this.doStar);
  },
  created() {
    this.doStar = this.star;
  },
  methods: {
    isSwalShow() {
      return isShow(".swal-overlay--show-modal");
    },
    turnRed() {
      return (querySelector("#star-logo").style.color = "red");
    },
    turnGray() {
      return (querySelector("#star-logo").style.color = "#000000A3");
    },
    star(my, id, recaptcha_token) {
      recordEvent(recordEventId.clickMYStarButton);
      let root = this;
      log(this.mingyan);
      if (!this.isSwalShow()) {
        swal({
          title: querySelector(".my--mingyan-text").innerText,
          text: "加载出错了？刷新试试？",
          icon: MingyanLogoBase64,
          button: "关闭",
        }).then(() => {
          root.starEvent = "addstar";
          document.removeEventListener("click", root.doStar);
        });
        querySelector(".swal-icon.swal-icon--custom>img").style.maxWidth =
          "150px";
        querySelector(".swal-text").innerHTML = this.loadingHtml;
        document
          .querySelector("#star-logo")
          .addEventListener("click", function() {
            root.doStar();
          });
        this.turnGray();

        switch (this.starEvent) {
          case "addstar":
            this.addStar(my, id, recaptcha_token);
            break;
          case "removestar":
            this.removeStar(my, id, recaptcha_token);
            break;
        }
      }
    },
    addStar(my, id, recaptcha_token) {
      log(my);
      let root = this;
      root.turnGray();
      MY_starApi.addStar(my, id, recaptcha_token)
        .then(function(addStar_res) {
          let statusCode = addStar_res.code;
          if (statusCode != 0) {
            NotyfAlert.err(addStar_res.msg);
            querySelector(".my--star-num").innerHTML = addStar_res.data.starNum;
            if (addStar_res.data.isStar) {
              root.turnRed();
              root.starEvent = "removestar";
            }
            if (addStar_res.msg.indexOf("人机验证") !== -1 || qs("captcha"))
              return root.reVerify("addstar");
          } else {
            NotyfAlert.su(addStar_res.msg);
            querySelector(".my--star-num").innerHTML = addStar_res.data.starNum;
            if (addStar_res.data.isStar) {
              root.turnRed();
              root.starEvent = "removestar";
            }
          }
        })
        .catch(function(err) {
          NotyfAlert.err("错误：\n" + err);
        });
    },
    removeStar(my, id, recaptcha_token) {
      let root = this;
      root.turnGray();
      MY_starApi.removeStar(my, id, recaptcha_token)
        .then(function(addStar_res) {
          let statusCode = addStar_res.code;
          if (statusCode != 0) {
            NotyfAlert.err(addStar_res.msg);
            querySelector(".my--star-num").innerHTML = addStar_res.data.starNum;
            if (!addStar_res.data.isStar) {
              root.turnGray();
              root.starEvent = "addstar";
            }
            if (addStar_res.msg.indexOf("人机验证") !== -1 || qs("captcha"))
              return root.reVerify("removestar");
          } else {
            NotyfAlert.su(addStar_res.msg);
            querySelector(".my--star-num").innerHTML = addStar_res.data.starNum;
            if (!addStar_res.data.isStar) {
              root.turnGray();
              root.starEvent = "addstar";
            }
          }
        })
        .catch(function(err) {
          NotyfAlert.err("错误：\n" + err);
        });
    },
    reVerify(event) {
      let root = this;
      swal({
        title:
          "感谢您对耳斯名言的支持，但为了防止恶意刷赞行为，我们不得不对您的身份进行验证。若您多次收到验证提示，建议您稍后再试。",
        text: "加载中……",
        icon: "",
        button: "继续",
      }).then(() => {
        let reToken = window.mtcaptcha.getVerifiedToken(); // window.grecaptcha.getResponse();
        if (!reToken) return NotyfAlert.err("验证失败：请重试");
        root.starEvent = event;
        return root.star(null, null, "reverify_mtcaptcha@" + reToken);
      });
      querySelector(".swal-title").style.fontSize = "20px";
      querySelector(".swal-text").innerHTML = `验证码加载中……`;
      querySelector(".swal-text").id = "star-reverify";
      querySelector("#star-reverify").style.margin = "-30px";
      loadMtCaptcha("star-reverify", "addstar");
      // window.grecaptcha.render("star-reverify", {
      //   sitekey: "6Lf9VgccAAAAAO2KrVDJGSuDXIHXD3lnV7T2nzP9",
      // });
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

<style scoped>
.my--star-btn {
  cursor: pointer;
}
</style>
