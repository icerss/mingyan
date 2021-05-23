let { mingyan } = require("../mingyan");
let { randomNumber } = require("./tools");

let htmlTemp = {
    "MY_INFO": `<div class="info-text">
  <!-- 名言来源 -->
  <a href="javascript:;" onclick="_mingyan.showMyType()" class="my--showfrom label label-rounded label-warning theme-bg blue">
  <i class="mdui-icon material-icons" style="font-size: 15px;">&#xe80c;</i>&nbsp;
  <span class="my--showfrom-text">世界馆</span></a>&nbsp;
  <!-- 分享
  <a href="javascript:;" onclick="_mingyan.share()" class="label label-rounded label-warning">
  <i class="mdui-icon material-icons" style="font-size: 15px;">&#xe80d;</i>分享</a> -->
  <!-- 点赞 -->
  <a href="javascript:;" onclick="_mingyan.star()" class="label label-rounded label-warning">
  <i class="mdui-icon material-icons" style="font-size: 15px;">&#xe8dc;</i>&nbsp;
  点赞</a>
  </br>
  <a style="color:#9B4DC9" id="reload" href="#${randomNumber(0, mingyan.length - 1)}" onclick="_mingyan.addReloadTime();_hmt.push(['_trackEvent', '名言', '刷新', '手动' , '点击查看更多名言']);" >点击</a>查看更多名言</div>`,
    // ==========
    "SMAILL_LOADING_SVG": `<!-- 加载动画 -->
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(5px);" width="15px" height="15px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
      <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    </circle>
  <!-- https://loading.io/ --></svg>`,
    // ==========
    "BIG_LOADING_SVG": `<!-- 加载动画 -->
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(60px);" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <circle cx="50" cy="50" fill="none" stroke="rgba(0,0,0,.65)" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
        <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="0.75s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
      </circle>
    <!-- https://loading.io/ --></svg>`
};


module.exports.htmlTemp = htmlTemp;