<template>
  <div class="my--more">
    <!-- Start more.html -->
    <div class="my--more-main">
      <h1>更多</h1>
      <h3>
        <router-link to="submit"
          ><span @click="onClickSubmitButton">名言投稿</span></router-link
        >
      </h3>
      <h3>
        <router-link to="ranking">名言排行榜</router-link>
      </h3>
      <h3>
        <a id="download_btn" @click="downloadMingyan">下载名言列表（.txt）</a>
      </h3>
      <h3>
        <router-link to="/about">关于</router-link>
      </h3>
    </div>
    <router-link to="/donate">
      <div class="my--sponsor" @click="onClickDonateBanner">
        <img
          class="banner"
          src="https://unpkg.zhimg.com/@icerss/mingyan-oss@1.0.0/public/donate-banner.png"
          alt="鼓励我们"
        />
      </div>
    </router-link>

    <hr />

    <div id="tcomment"></div>

    <hr />

    <div style="text-align: center">
      <div style="color: gray">
        自 2020年04月30日 以来，ERSS名言已经陪伴你们走过了
        <span class="sitetime">{{ sitetime }}</span>
      </div>
      <a href="https://icp.gov.moe" target="_blank" style="color: #d6d9e2"
        >萌备 </a
      ><a
        href="https://icp.gov.moe/?keyword=20200503"
        target="_blank"
        style="color: #d6d9e2"
      >
        20200503号</a
      >
    </div>

    <div style="text-align: center">
      <div class="github-badge" title="作者就是我啦！！">
        <span class="badge-subject">Author</span
        ><span class="badge-value bg-blue">xhemj</span>
      </div>
      <div class="github-badge" title="速度还可以吧？">
        <span class="badge-subject">Hosted</span
        ><span class="badge-value bg-red"
          ><span id="host">Vercel && Github</span></span
        >
      </div>
      <div
        class="github-badge"
        title="Jsdelivr的静态文件加速和Cloudflare的部分页面加速"
      >
        <span class="badge-subject">CDN</span
        ><span class="badge-value bg-pink">Jsdelivr & DogeCloud CDN</span>
      </div>
      <div class="github-badge" title="ERSS~~~">
        <span class="badge-subject">&copy;</span
        ><span class="badge-value bg-brightgreen">Xhemj</span>
      </div>
      <div class="github-badge" title="ERSS~~~">
        <span class="badge-subject">&copy;</span
        ><span class="badge-value theme-bg blue">IYAMAYA工作室</span>
      </div>
      <div class="github-badge" title="多来看看呀！">
        <span class="badge-subject">PV</span
        ><span class="badge-value bg-yellow"
          ><span id="hit-count"> {{ hitCount }}</span></span
        >
      </div>
      <br />
      <div class="github-badge" title="会慢慢更新的">
        <span class="badge-subject">更新时间</span
        ><span class="badge-value bg-lightgrey"
          ><span id="uptime">{{ uptime }}</span></span
        >
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import { mingyan } from "../../js/mingyan";
import { fadeIn, loadJs, querySelector, SaveAs } from "../../js/utils";
import { recordEvent, recordEventId } from "../../js/log";

export default {
  name: "MYMore",
  data() {
    return {
      hitCount: "9999+",
      uptime: "2021-00-00 00:00:00",
      sitetime: "很久很久~~",
    };
  },
  methods: {
    siteTime() {
      let now = new Date();
      let grt = new Date("04/30/2020 00:00:00");
      now.setTime(now.getTime() + 250);
      let days = (now - grt) / 1000 / 60 / 60 / 24;
      let dnum = Math.floor(days);
      let hours = (now - grt) / 1000 / 60 / 60 - 24 * dnum;
      let hnum = Math.floor(hours);
      if (String(hnum).length == 1) {
        hnum = "0" + hnum;
      }
      let minutes = (now - grt) / 1000 / 60 - 24 * 60 * dnum - 60 * hnum;
      let mnum = Math.floor(minutes);
      if (String(mnum).length == 1) {
        mnum = "0" + mnum;
      }
      let seconds =
        (now - grt) / 1000 - 24 * 60 * 60 * dnum - 60 * 60 * hnum - 60 * mnum;
      let snum = Math.round(seconds);
      if (String(snum).length == 1) {
        snum = "0" + snum;
      }
      return dnum + " 天 " + hnum + " 小时 " + mnum + " 分 " + snum + " 秒";
    },
    downloadMingyan() {
      recordEvent(recordEventId.clickMYDownloadButton);
      let time = new Date().toLocaleString();
      SaveAs(
        `耳斯名言列表（下载时间：${time}）\n==========\n` + mingyan.join("\n"),
        "txt",
        `耳斯名言列表（下载时间：${time}）`
      );
    },
    onClickSubmitButton() {
      recordEvent(recordEventId.clickMYSubmitButton);
    },
    onClickDonateBanner() {
      recordEvent(recordEventId.clickDonateBanner);
    },
  },
  mounted() {
    fadeIn(".my--more");

    let root = this;
    loadJs("https://unpkg.zhimg.com/twikoo@1.4.9/dist/twikoo.min.js").then(
      function() {
        twikoo // eslint-disable-line
          .init({
            envId: "https://api.erss.club/api/twikoo",
            el: "#tcomment",
            path: "/",
          })
          .then(function() {
            try {
              querySelector(
                ".tk-footer"
              ).innerHTML = `Powered by <a href="https://twikoo.js.org" target="_blank" rel="nofollow">Twikoo</a></br>&copy; 2021 <a href="https://www.erssmy.com/">ERSS名言</a></div>`;
            } catch {} // eslint-disable-line
            querySelector(".el-textarea__inner").style.height = "150px";
          });
      }
    );
    fetch("https://api.github.com/repos/xhemj/mingyan")
      .then((r) => r.json())
      .then(function(data) {
        var a = data["updated_at"];
        root.uptime = new Date(a).toLocaleString();
      });
    fetch("https://hit-count.erss.club/?_my_cache_=no")
      .then((j) => j.json())
      .then((res) => {
        root.hitCount = res.data.count;
      });
    setInterval(function() {
      root.sitetime = root.siteTime();
    }, 250);
  },
};
</script>

<style scoped>
img {
  max-width: 400px;
  border-radius: 5px;
}

.github-badge {
  display: inline-block;
  border-radius: 4px;
  text-shadow: none;
  font-size: 12px;
  color: #fff;
  line-height: 15px;
  background-color: #abbac3;
  margin-bottom: 5px;
}

.github-badge .badge-subject {
  display: inline-block;
  background-color: #4d4d4d;
  padding: 4px 4px 4px 6px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
}

.github-badge .badge-value {
  display: inline-block;
  padding: 4px 6px 4px 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}

.github-badge .bg-brightgreen {
  background-color: #4dc820 !important;
}

.github-badge .bg-orange {
  background-color: #ffa500 !important;
}

.github-badge .bg-yellow {
  background-color: #d8b024 !important;
}

.github-badge .bg-blueviolet {
  background-color: #8833d7 !important;
}

.github-badge .bg-pink {
  background-color: #f26bae !important;
}

.github-badge .bg-red {
  background-color: #e05d44 !important;
}

.github-badge .bg-blue {
  background-color: #007ec6 !important;
}

.github-badge .bg-lightgrey {
  background-color: #9f9f9f !important;
}

.github-badge .bg-grey,
.github-badge .bg-gray {
  background-color: #555 !important;
}

.github-badge .bg-lightgrey,
.github-badge .bg-lightgray {
  background-color: #9f9f9f !important;
}

h1 {
  font-size: 30px;
}

h3 {
  font-size: 20px;
}

a {
  line-height: 1.8;
}

.my--sponsor {
  text-align: center;
}

.my--sponsor > .banner {
  cursor: pointer;
  max-height: 125px;
}

@media only screen and (max-width: 480px) {
  .my--sponsor > .banner {
    max-height: 75px;
  }
}

.my--sponsor > .qrcode > img {
  max-width: 100%;
  border-radius: 5px;
}

.my--sponsor > .sponsor-table {
  font-size: 15px;
}

.my--sponsor > * > .table td,
.my--sponsor > * > .table th {
  padding: 1rem 0.8rem;
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

h3 {
  color: #9b4dc9;
}

.my--more-main {
  text-align: center;
}
</style>

<style>
.twikoo {
  text-align: left;
}

.tk-main > .tk-content {
  background: #f2f5f9 !important;
  border-radius: 8px !important;
  padding-left: 20px !important;
  padding-top: 10px !important;
  padding-bottom: 0 !important;
}

.tk-time {
  color: #999999 !important;
}

.tk-avatar {
  height: 3rem !important;
  width: 3rem !important;
}
.tk-avatar-img {
  height: 3rem !important;
}

.tk-action-icon > svg {
  fill: #5676dc !important;
}

.tk-action-count {
  color: #5676dc !important;
}

.OwO-logo > svg {
  fill: #5676dc !important;
}

.tk-input {
  background-color: #fff !important;
}

.tk-meta-input > .el-input {
  background-color: #fff !important;
}

.tk-tag-green {
  display: none !important;
}
</style>
