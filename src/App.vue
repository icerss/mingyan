<template>
  <div id="app">
    <MYHeader />
    <router-view />
  </div>
</template>

<script>
import MYHeader from "./components/MYHeader.vue";
import { qs } from "./js/tools";
import { MY_ranking } from "./js/feat/ranking";
// import MYFooter from "./components/MYFooter.vue";

export default {
  name: "App",
  components: {
    MYHeader,
  },
  data() {
    return {};
  },
  watch: {
    "$route.path"(val) {
      console.log(val);
    },
  },
  mounted() {
    document.title = "ERSS名言 · ERSS";
    window.addEventListener("hashchange", function () {
      let hash = window.location.hash;
      if (/#\d/.test(hash)) window.location.href = "./" + hash;
    });
    this.ranking();
  },
  methods: {
    ranking() {
      if (
        qs("force_action") == "2020" ||
        !localStorage.getItem("___mingyan_2021_ranking_data__")
      ) {
        // 如果是新用户
        MY_ranking();
      }
    },
  },
};
</script>

<style>
/* zcool-kuaile-regular */
@font-face {
  font-family: "ZCOOL KuaiLe";
  font-style: normal;
  font-weight: regular;
  font-display: swap;
  /* lib.baomitu.com */
  src: url("//s-sh-1943-pic1.oss.dogecdn.com/static/mingyan-js-org/fonts/zcool-kuaile/zcool-kuaile-regular.eot"); /* IE9 Compat Modes */
  src: local("ZCOOL KuaiLe"), local("ZCOOLKuaiLe-Normal"),
    url("//s-sh-1943-pic1.oss.dogecdn.com/static/mingyan-js-org/fonts/zcool-kuaile/zcool-kuaile-regular-ie.eot?#iefix")
      format("embedded-opentype"),
    /* IE6-IE8 */
      url("//s-sh-1943-pic1.oss.dogecdn.com/static/mingyan-js-org/fonts/zcool-kuaile/zcool-kuaile-regular.woff2")
      format("woff2"),
    /* Super Modern Browsers */
      url("//s-sh-1943-pic1.oss.dogecdn.com/static/mingyan-js-org/fonts/zcool-kuaile/zcool-kuaile-regular.woff")
      format("woff"),
    /* Modern Browsers */
      url("//s-sh-1943-pic1.oss.dogecdn.com/static/mingyan-js-org/fonts/zcool-kuaile/zcool-kuaile-regular.ttf")
      format("truetype"),
    /* Safari, Android, iOS */
      url("//s-sh-1943-pic1.oss.dogecdn.com/static/mingyan-js-org/fonts/zcool-kuaile/zcool-kuaile-regular.svg#ZCOOLKuaiLe")
      format("svg"); /* Legacy iOS */
}

@font-face {
  font-weight: 400;
  font-family: "Material Icons";
  font-style: normal;
  src: local("Material Icons"), local("MaterialIcons-Regular"),
    url("//cdn.jsdelivr.net/npm/mdui@1.0.1/dist/icons/material-icons/MaterialIcons-Regular.woff2")
      format("woff2"),
    url("//cdn.jsdelivr.net/npm/mdui@1.0.1/dist/icons/material-icons/MaterialIcons-Regular.woff")
      format("woff");
}

.material-icons {
  font-family: "Material Icons";
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-feature-settings: "liga";
  font-feature-settings: "liga";
}

.mdui-icon {
  display: inline-block;
  text-align: center;
}

.mdui-icon,
.mdui-icon::before {
  color: inherit;
  font-weight: 400;
  font-size: 24px;
  font-style: normal;
  line-height: 1;
  direction: ltr;
  letter-spacing: normal;
  white-space: nowrap;
  text-transform: none;
  vertical-align: middle;
  word-wrap: normal;
}

*,
*:after,
*:before {
  box-sizing: inherit;
}

::-webkit-scrollbar-thumb {
  height: 50px !important;
  border: 2px solid #f0f0f0 !important;
  border-radius: 6px !important;
  outline: 2px solid #f0f0f0 !important;
  outline-offset: -2px !important;
  background-color: #bbb !important;
}

::-webkit-scrollbar-thumb:hover {
  height: 50px !important;
  background-color: #aaa !important;
}

::-webkit-scrollbar {
  width: 12px !important;
  height: 12px !important;
  cursor: pointer !important;
}

::-webkit-scrollbar-track-piece {
  border-radius: 0 !important;
  background-color: #f0f0f0 !important;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  font-size: 62.5%;
}

body {
  letter-spacing: 0.01em;
  word-break: break-all;
  font-weight: bold;
  padding-top: 15%;
  padding-left: 10%;
  padding-right: 10%;
  position: relative;
  font-family: "ZCOOL KuaiLe";
  background-image: url("https://s-sh-1943-pic1.oss.dogecdn.com/2020/12/27/fRuFkxBg4edS2Qh.png");
  color: #303742 !important;
  margin-bottom: 120px;
}

#app {
  z-index: 1;
  margin-top: 50px;
  margin-bottom: 120px;
}

a,
a:hover {
  color: #9b4dca;
}

@media (min-width: 40rem) {
  body {
    padding-top: 15%;
    padding-left: 20%;
    padding-right: 20%;
  }
}

@media (min-width: 60rem) {
  body {
    padding-top: 15%;
    padding-left: 25%;
    padding-right: 25%;
  }
}

@media (min-width: 80rem) {
  body {
    padding-top: 15%;
    padding-left: 25%;
    padding-right: 25%;
  }
}

@media (min-width: 120rem) {
  body {
    padding-top: 10%;
    padding-left: 25%;
    padding-right: 25%;
  }
}

.fadeIn {
  animation: fadeIn 0.8s;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
    display: "";
  }
}

.fadeOut {
  animation: fadeOut 0.8s;
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    display: "none";
  }
}

.cool-lightbox-toolbar.hidden {
  opacity: 1 !important;
  visibility: visible !important;
}

.label {
  background: #eef0f3;
  border-radius: 0.1rem;
  color: #455060;
  display: inline-block;
  line-height: 1.25;
  padding: 0.1rem 0.2rem;
  font-weight: normal;
}

.label.label-rounded {
  border-radius: 5rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}

.label.label-warning {
  background: #ffb700;
  color: #fff;
}

.label.label-secondary {
  background: #f1f1fc;
  color: #5755d9;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: inherit;
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 0.5em;
  margin-top: 0;
}

html,
body {
  width: unset;
  height: unset;
}

.mdui-toolbar {
  margin-right: 50px;
}

hr {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  border: 0;
  border-top: 0.1rem solid #f4f5f6;
  margin: 3rem 0;
}

img {
  max-width: 100%;
}

#incidents-report {
  zoom: 0.8;
}

#incidents-report-a {
  color: #fff;
  font-weight: bold;
}

#incidents-report-title {
  font-size: 25px;
}

.grecaptcha-badge {
  display: none !important;
  visibility: hidden !important;
}
</style>