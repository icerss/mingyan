<template>
  <div class="my--header" id="my--header">
    <a-row class="container">
      <a-col :span="2">
        <router-link to="/more" id="el-a" title="更多">
          <Tooltip tip="更多">
            <div class="header-icon"><a-icon type="more" /></div>
          </Tooltip>
        </router-link>
      </a-col>
      <a href="./">
        <span class="my--title" title="ERSS名言">
          <i class="icon my--header-logo"></i>
        </span>
      </a>
      <a-col :span="16"></a-col>
      <a-col :span="2">
        <router-link to="/search" id="el-a" title="搜索">
          <Tooltip tip="搜索">
            <div class="header-icon"><a-icon type="search" /></div>
          </Tooltip>
        </router-link>
      </a-col>
      <a-col :span="2">
        <a id="reload_buttom el-a" title="刷新" @click="reload">
          <Tooltip tip="刷新">
            <div class="header-icon icon-reload"><a-icon type="reload" /></div>
          </Tooltip>
        </a>
      </a-col>
      <a-col :span="2">
        <router-link to="ranking" id="ranking-btn el-a" title="排行榜">
          <Tooltip tip="排行榜">
            <div class="header-icon">
              <i class="mdui-icon material-icons">&#xe24b;</i>
            </div>
          </Tooltip>
        </router-link>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Headroom from "headroom.js";
import Tooltip from "./Tooltip.vue";

export default {
  name: "MYHeader",
  components: {
    Tooltip,
  },
  mounted() {
    /**
     * 初始化Headroom.js
     */
    let headroom = null;
    if (Headroom.cutsTheMustard) {
      let myElement = document.querySelector(".my--header");
      headroom = new Headroom(myElement, {
        offset: 300,
        tolerance: 5,
      });
    }
    headroom.init();
  },
  methods: {
    reload() {
      if (/\/$|\/@\d/.test(location.pathname)) {
        document.querySelector("#reload").click();
      } else {
        location.pathname = "/";
      }
    },
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  width: 100%;
}

.my--header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #d6d9e2;
  box-shadow: 0 1px 10px rgba(180, 0, 252, 0.05);
  border-bottom: 1px solid #e3e4e6;
  z-index: 10;
}

.my--header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 55px;
  max-width: 1120px;
}

.my--header-logo {
  position: absolute;
  top: 5px;
  left: 92px;
  width: 103px;
  height: 45px;
  margin-left: 10px;
}

.icon.my--header-logo {
  background: transparent center/contain no-repeat;
  background-image: url("https://s-sh-1943-pic1.oss.dogecdn.com/2021/05/23/ldzxMt9PYQ3LNyU.png");
}

@media only screen and (max-width: 480px) {
  a#ranking-btn\ el-a {
    display: none !important;
  }

  a#pwa-install\ el-a {
    display: none !important;
  }

  pwa-install,
  #installComponent {
    display: none !important;
  }

  .my--header-logo {
    left: 50px;
  }
  .icon-reload {
    margin-left: 20px;
  }
}

.headroom {
  will-change: transform;
  transition: transform 200ms linear;
}

.headroom--pinned {
  transform: translateY(0%);
}

.headroom--unpinned {
  transform: translateY(-100%);
}

#el-a {
  cursor: pointer;
}

.header-icon {
  font-size: 20px;
  font-weight: bold;
  line-height: 24px;
  height: 24px;
  color: #000000de;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 24px;
  line-height: 24px;
  -webkit-transform: translate(-12px, -12px);
  transform: translate(-12px, -12px);
}

.header-icon > .mdui-icon {
  font-size: 26px;
}
</style>

<style>
.header-icon > * > svg > path {
  stroke-width: 20px;
  stroke: #000000de;
}
</style>