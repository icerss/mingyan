<template>
  <div id="my--search-app">
    <div class="my--search">
      <input
        type="search"
        id="searchbar"
        class="my--search-bar"
        placeholder="搜索……"
        results="5"
        v-model="inputValue"
        v-if="!isLoading"
      />
      <div class="search-list" v-if="listMode === 'search'">
        <div class="search-item" v-for="item of displayMingyan" :key="item">
          <a
            class="showall-item"
            @click="historyItemClick($event)"
            :data-text="item"
            v-if="isStarInput"
          >
            <MYSearchHighlight
              :searchText="inputValue"
              :text="item"
              v-if="item"
            />
          </a>
          <a
            class="showall-item"
            @click="historyItemClick($event)"
            :data-text="item"
            v-else
          >
            {{ item }}
          </a>
        </div>
      </div>
      <div class="search-history-list" v-if="listMode === 'ranking'">
        <div class="history-loading-mask" v-if="!isLoadHitsory">
          <span class="loading-svg" v-html="loadingSvg"></span>
          <h3>搜索加载中……</h3>
        </div>

        <div class="history-list" v-else>
          <div class="search-history-list-tip">每日精选名言：</div>
          <div
            class="search-history-item"
            v-for="(item, index) of historyDataList"
            :key="item.text"
            @click="historyItemClick($event)"
          >
            <a-row :data-text="item.text">
              <a-col
                :span="historyListWidth[0]"
                id="star-ranking-num"
                :data-text="item.text"
              >
                {{ new Number(index) + 1 }}
              </a-col>
              <a-col
                :span="historyListWidth[1]"
                class="my--star-ranking-text"
                id="star-ranking-text"
                :data-text="item.text"
              >
                {{ item.text }}
              </a-col>
            </a-row>
          </div>
        </div>
      </div>
      <span class="my--search-no-result" v-if="isNoResult">无结果</span>
    </div>
    <MYFooter mode="back" />
  </div>
</template>

<script>
import { mingyan } from "../js/mingyan";
import MYFooter from "../components/MYFooter.vue";
import MYSearchHighlight from "../components/MYSearchHighlight.vue";
import { MY_starApi } from "../js/feat/starApi";
import router from "../router";

export default {
  name: "MYSearch",
  components: {
    MYSearchHighlight,
    MYFooter,
  },
  data() {
    return {
      loadingSvg: `<!-- 加载动画 --><svg xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(60px);"width="30px"height="30px"viewBox="0 0 100 100"preserveAspectRatio="xMidYMid"><circle cx="50"cy="50"fill="none"stroke="rgba(0,0,0,.65)"stroke-width="10"r="35"stroke-dasharray="164.93361431346415 56.97787143782138"><animateTransform attributeName="transform"type="rotate"repeatCount="indefinite"dur="0.75s"values="0 50 50;360 50 50"keyTimes="0;1"></animateTransform></circle><!-- https://loading.io/ --></svg>`,
      mingyan: mingyan,
      isStarInput: false,
      inputValue: "",
      isLoadHitsory: false,
      isLoading: true,
      listMode: "ranking",
      historyListWidth: [4, 16, 4],
      historyDataList: [],
      displayLength: 25,
      scrollEvent: null,
      isNoResult: false,
    };
  },
  watch: {
    inputValue() {
      if (this.inputValue) {
        this.handleSearch();
        this.listMode = "search";
      } else {
        this.listMode = "ranking";
      }
      //console.log(this.displayMingyan);
      let result = "";
      for (let item of this.displayMingyan) if (item) result += item;
      if (!result) {
        this.isNoResult = true;
      } else {
        this.isNoResult = false;
      }
    },
    historyDataList() {
      this.listMode = "ranking";
      this.isLoadHitsory = true;
    },
  },
  mounted() {
    this.getHistoryRanking();
    this.scrollEvent = window.addEventListener("scroll", this.handleScroll);
  },
  computed: {
    displayDataList() {
      return this.displayMingyan.filter(function (item, index) {
        index < this.displayLength;
      });
    },
    displayMingyan() {
      let root = this;
      if (!this.isStarInput) {
        let o = [];
        for (let i = 0; i < this.displayLength; i++) {
          o.push(mingyan[i]);
        }
        return o;
      } else {
        let data = this.mingyan.filter(function (item) {
          if (
            item
              .toLocaleLowerCase()
              .indexOf(root.inputValue.toLocaleLowerCase()) !== -1
          ) {
            return item;
          }
        });
        let o = [];
        for (let i = 0; i < this.displayLength; i++) {
          o.push(data[i]);
        }
        return o;
      }
    },
  },
  methods: {
    handleScroll() {
      if (
        document.body.clientHeight - window.scrollY - window.innerHeight <
        document.body.clientHeight / this.displayLength
      ) {
        if (
          this.displayLength < this.mingyan.length &&
          this.displayLength + 10 < this.mingyan.length
        ) {
          this.displayLength += 10;
        } else {
          this.displayLength = this.mingyan.length;
        }
      }
    },
    handleSearch() {
      if (!this.inputValue) {
        this.isStarInput = false;
        this.resultLength = 0;
      } else {
        this.isStarInput = true;
      }
      //console.log(this.inputValue);
    },

    getHistoryRanking() {
      let root = this;
      MY_starApi.getHistoryRanking().then(function (res) {
        let data = [];
        for (let i = 0; i < 15; i++) {
          data.push(res[i]);
        }
        root.historyDataList = data;
        root.isLoading = false;
      });
      setTimeout(function () {
        if (!root.historyDataList === []) root.isLoading = false;
      }, 2000);
    },

    findMingyan(text) {
      for (let i in mingyan) {
        if (mingyan[i] === text) return i;
      }
      return 0;
    },

    historyItemClick(event) {
      let text = event.path[0].getAttribute("data-text");
      router.push("/@" + this.findMingyan(text));
    },
  },
};
</script>

<style scoped>
.my--search {
  display: block;
}

#searchbar {
  -webkit-appearance: textfield;
  outline-offset: -2px;
  appearance: none;
  background-color: transparent;
  border: 0.1rem solid #d1d1d1;
  border-radius: 0.4rem;
  box-shadow: none;
  box-sizing: inherit;
  padding: 0.6rem 1rem 0.7rem;
  width: 100%;
  outline: none;
  margin-bottom: 40px;
  height: 25px;
  width: 100%;
  transform: translateX(-10px);
}

#searchbar:focus {
  border: 1px solid #9b4dca;
}

.search-item {
  background: transparent;
  letter-spacing: -0.1rem;
  line-height: 1.8;
  text-decoration: none;
  font-weight: normal;
  color: black;
}

.showall-item {
  color: black;
}

.search-history-item,
.showall-item {
  cursor: pointer !important;
}

.search-history-list-tip {
  font-size: 30px;
  margin-bottom: 10px;
  text-align: center;
}

.history-list {
  font-weight: normal;
}

.search-history-item {
  padding: 3px;
  font-size: 15px;
  text-align: center;
}

.history-loading-mask {
  text-align: center;
}

.search-list {
  text-align: center;
}

#my--search-app {
  text-align: center;
}
</style>