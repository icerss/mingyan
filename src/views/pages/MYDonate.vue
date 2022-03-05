<template>
  <div class="my--donate">
    <h1>鼓励我们</h1>
    <div class="qrcode">
      <FancyImage
        src="https://s3.cdn.h36.top/@icerss/mingyan-oss@1.0.2/public/donate-qrcode.png"
        title="鼓励我们"
        className="qr-img"
      />
      <p class="qrcode-text">点击图片可以放大</p>
    </div>

    <div class="sponsor-table">
      <span class="sponsor-table-loading" v-if="!isFinishLoading"
        >加载中……</span
      >
      <div class="sponsor-table-load" v-else>
        <a-table
          :columns="columns"
          :data-source="listData"
          :row-key="(data) => data.name + data.timestamp"
        ></a-table>
      </div>
    </div>
  </div>
</template>

<script>
const FancyImage = () => import("../../components/FancyImage.vue");
import { fadeIn } from "../../js/utils";
import { apiUrls } from "../../js/init";

const columns = [
  {
    title: "昵称",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "金额",
    dataIndex: "sum",
    key: "count",
  },
  {
    title: "时间",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "备注",
    dataIndex: "msg",
    key: "msg",
  },
];

export default {
  name: "MYDonate",
  components: {
    FancyImage,
  },
  data() {
    return {
      isFinishLoading: false,
      listData: [],
      columns: columns,
    };
  },
  mounted() {
    fadeIn(".my--donate");

    let root = this;
    fetch(`${apiUrls.donate_list}?t=_${new Date().getTime()}`)
      .then((r) => r.json())
      .then(function (res) {
        root.handleData(res);
      });
  },
  methods: {
    handleData(data) {
      let o = [];
      for (let item of data) {
        o.push({
          name: item.name,
          time: new Date(item.time).toLocaleString(),
          msg: item.msg,
          sum: item.sum,
          timestamp: item.time,
        });
      }
      this.listData = o;
      this.isFinishLoading = true;
    },
  },
};
</script>

<style scoped>
.my--donate {
  text-align: center;
}

.my--donate > .banner {
  max-height: 125px;
  cursor: pointer;
}

.my--donate > .sponsor-table {
  font-size: 15px;
}

.my--donate > * > .table td,
.my--donate > * > .table th {
  padding: 1rem 0.8rem;
}
</style>

<style>
.ant-table-pagination {
  display: none;
}

.qr-img {
  max-width: 300px;
  border-radius: 5px;
}
</style>
