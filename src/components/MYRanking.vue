<template>
  <div class="my--ranking-app">
    <div class="my--ranking">
      <div class="my--ranking-loading-tip" v-if="!isFinishLoading">
        <strong
          ><div>
            <h1>加载中……</h1>
          </div></strong
        ><br />
      </div>
      <div class="my--ranking-finish-loading" v-else>
        <h1 style="text-align: center">排行榜</h1>
        <a-row
          class="my--ranking-item"
          v-for="(item, index) of rankingData"
          :key="index + item"
        >
          <a-col :span="width[0]" id="star-ranking-num">
            <router-link :to="'/@' + findMingyan(item.text)">
              {{ new Number(index) + 1 }}
            </router-link>
          </a-col>
          <a-col
            :span="width[1]"
            class="my--star-ranking-text"
            id="star-ranking-text"
          >
            <router-link :to="'/@' + findMingyan(item.text)">
              {{ item.text }}
            </router-link>
          </a-col>
          <a-col :span="width[2]">
            <router-link :to="'/@' + findMingyan(item.text)">
              <i
                class="mdui-icon material-icons"
                id="star-ranking-thumb"
                style="color: rgba(0, 0, 0, 0.64)"
                >&#xe8dc;</i
              >
            </router-link>
            <span id="star-ranking-thumb-num">
              <router-link :to="'/@' + findMingyan(item.text)">
                {{ item.num }}
              </router-link>
            </span>
          </a-col>
        </a-row>
      </div>
    </div>
    <MYFooter mode="back" />
  </div>
</template>

<script>
import MYFooter from "./MYFooter.vue";
import { MY_starApi } from "../js/feat/starApi";
import { deviceIsPhone, fadeIn } from "../js/tools";
import { mingyan } from "../js/mingyan";

export default {
  name: "MYRanking",
  components: {
    MYFooter,
  },
  data() {
    return {
      isFinishLoading: false,
      rankingData: [],
    };
  },
  computed: {
    width() {
      if (!deviceIsPhone()) {
        return [4, 16, 4];
      } else {
        return [4, 14, 6];
      }
    },
  },
  mounted() {
    fadeIn(".my--ranking");

    this.getRankingData();
  },
  methods: {
    getRankingData() {
      let root = this;
      MY_starApi.getRanking().then(function (res) {
        root.rankingData = res.data;
        root.isFinishLoading = true;
      });
    },

    findMingyan(text) {
      for (let i in mingyan) {
        if (mingyan[i] === text) return i;
      }
      return 0;
    },
  },
};
</script>

<style scoped>
.my--ranking-loading-tip {
  text-align: center;
  font-size: 15px;
}

.my--ranking-item {
  cursor: pointer;
}

.my--ranking-item {
  font-weight: normal;
}

.my--star-ranking-text {
  text-align: center;
}

a {
  color: #303742;
}
</style>