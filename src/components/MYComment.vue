<template>
  <div class="my--comment">
    <div class="comment-load" v-if="isLoadData">
      <div class="my--comment-input">
        <a-list
          v-if="displayComments.length"
          :data-source="displayComments"
          item-layout="horizontal"
        >
          <a-list-item slot="renderItem" slot-scope="item">
            <a-comment
              :author="item.author"
              :avatar="item.avatar"
              :content="item.content"
              :datetime="item.datetime"
            />
          </a-list-item>
        </a-list>
        <div class="comment-pagination" v-if="comments.length">
          <a-pagination
            @change="onPaginationChange"
            v-model="displayCommentPage"
            :total="comments.length"
            page-size="5"
          />
        </div>
        <a-comment class="my--comment-show" v-if="isOpenInput">
          <a-avatar slot="avatar" :src="avatarImg" alt="Han Solo"
            ><a-icon type="user"
          /></a-avatar>
          <div slot="content">
            <a-form-item>
              <a-row class="comment-detail">
                <div class="comment-detail-input">
                  <a-input v-model="name" placeholder="昵称" required>
                    <a-icon
                      slot="prefix"
                      type="user"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </div>
                <div class="comment-detail-input">
                  <a-input v-model="mail" placeholder="邮箱" required>
                    <a-icon
                      slot="prefix"
                      type="mail"
                      style="color: rgba(0, 0, 0, 0.25)"
                    />
                  </a-input>
                </div>
              </a-row>
              <div class="comment-detail-textarea">
                <a-textarea
                  :style="'height:' + textarea_height"
                  :value="comment_input"
                  @mousemove="textarea_height = '72px'"
                  @mouseleave="onTextareaMouseLeave"
                  @change="handleChange"
                  @keyup.enter.prevent="sendComment"
                  placeholder="发一条友善的评论~~"
                />
              </div>
            </a-form-item>
            <a-form-item>
              <a-button
                html-type="submit"
                type="primary"
                class="comment-submit-btn"
                :loading="submitting"
                @click="sendComment"
              >
                发送评论
              </a-button>
            </a-form-item>
          </div>
        </a-comment>
      </div>
      <a-divider v-if="!isOpenInput" class="comment-open-tip">
        <span @click="isOpenInput = true"
          >{{ comments.length === 0 ? "暂无评论，" : "" }}点我发送评论</span
        >
      </a-divider>
    </div>
    <div class="comment-loading" v-else>
      <a-divider class="comment-loading-tip">
        <span>评论加载中</span>
        <div class="loading-svg">
          <!-- 加载动画 -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            style="margin: auto;background: none;shape-rendering: auto;position: relative;transform: translateY(5px);"
            width="15px"
            height="15px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="rgba(0,0,0,.65)"
              stroke-width="10"
              r="35"
              stroke-dasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="0.75s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              ></animateTransform>
            </circle>
            <!-- https://loading.io/ -->
          </svg>
        </div>
      </a-divider>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/zh-cn";
import md5 from "md5";
import { log, NotyfAlert } from "../js/tools";
import { MY_commentApi } from "../js/feat/commentApi";

export default {
  name: "MYComment",
  props: {
    rawMingyan: String,
  },
  data() {
    return {
      comments: [],
      displayComments: [],
      displayCommentPage: 1,
      submitting: false,
      isOpenInput: false,
      isStartInput: false,
      isLoadData: false,
      isBoyHide: false,
      md5: md5,
      name:
        JSON.parse(localStorage.getItem("___mingyan_comment_user_") || "{}")
          .name || "",
      mail:
        JSON.parse(localStorage.getItem("___mingyan_comment_user_") || "{}")
          .mail || "",
      comment_input: "",
      textarea_height: "36px",
    };
  },
  mounted() {
    dayjs.extend(relativeTime);
    dayjs.locale("zh-cn");
    this.getComment();
  },
  watch: {
    rawMingyan() {
      this.getComment();
      this.isOpenInput = false;
      this.isStartInput = false;
      // if (this.isBoyHide) fadeIn(".my--mingyan-boy");
    },
    mail() {
      let d = JSON.parse(
        localStorage.getItem("___mingyan_comment_user_") || "{}"
      );
      if (d === {}) d = { name: "", mail: "" };
      d.mail = this.mail;
      localStorage.setItem("___mingyan_comment_user_", JSON.stringify(d));
    },
    name() {
      let d = JSON.parse(
        localStorage.getItem("___mingyan_comment_user_") || "{}"
      );
      if (d === {}) d = { name: "", mail: "" };
      d.name = this.name;
      localStorage.setItem("___mingyan_comment_user_", JSON.stringify(d));
    },
    comment_input() {
      if (this.comment_input) {
        this.isStartInput = true;
        this.textarea_height = "72px";
      } else {
        this.isStartInput = false;
        this.textarea_height = "36px";
      }
    },
    isOpenInput() {
      // if (this.isOpenInput) {
      //   fadeOut(".my--mingyan-boy");
      //   this.isBoyHide = true;
      // } else {
      //   fadeIn(".my--mingyan-boy");
      //   this.isBoyHide = false;
      // }
    },
  },
  computed: {
    avatarImg() {
      return this.mail
        ? `https://sdn.geekzu.org/avatar/${md5(this.mail)}?d=identicon`
        : "";
    },
  },
  methods: {
    getComment() {
      let root = this;
      this.isLoadData = false;
      MY_commentApi.getComment(this.rawMingyan)
        .then(function(res) {
          log("获取到评论", res);
          let o = [];
          for (let item of res) {
            o.push({
              author: item.nick,
              avatar: item.avatar
                ? item.avatar
                : `https://sdn.geekzu.org/avatar/${item.mail_md5}?d=identicon`,
              content: item.comment,
              datetime: dayjs(item.created).fromNow(),
            });
          }
          root.comments = o;
          root.isLoadData = true;
          root.handleDisplayComment();
        })
        .catch(function(err) {
          NotyfAlert.err("评论失败：\n" + err);
        });
    },
    sendComment() {
      let root = this;
      if (!this.comment_input || !this.name || !this.mail) {
        NotyfAlert.err("你还没输入内容呢！");
        return;
      }
      this.submitting = true;
      let comment_input = this.comment_input;
      MY_commentApi.addComment({
        mingyan: this.rawMingyan,
        avatar: "",
        comment: comment_input,
        nick: this.name,
        mail: this.mail,
      })
        .then(function(res) {
          log("评论成功", res);
          root.submitting = false;
          root.comment_input = "";
          root.comments = [
            {
              author: root.name,
              avatar: `https://sdn.geekzu.org/avatar/${md5(
                root.mail
              )}?d=identicon`,
              content: comment_input,
              datetime: dayjs(new Date().getTime()).fromNow(),
            },
            ...root.comments,
          ];
          root.displayCommentPage = 1;
          root.handleDisplayComment();
          NotyfAlert.su("评论成功！");
        })
        .catch(function(err) {
          NotyfAlert.err("评论失败：\n" + err);
        });
    },
    handleDisplayComment() {
      let displayLength = (this.displayCommentPage - 1) * 5 + 5;
      log({ displayLength });
      let o = [];
      for (let i = (this.displayCommentPage - 1) * 5; i < displayLength; i++) {
        let item = this.comments[i];
        if (!item) continue;
        o.push(item);
      }
      this.displayCommentId++;
      this.displayComments = o;
      log({ o });
    },
    handleChange(e) {
      this.comment_input = e.target.value;
    },
    onTextareaMouseLeave() {
      if (this.isStartInput && this.comment_input) {
        this.textarea_height = "72px";
      } else {
        this.textarea_height = "36px";
      }
    },
    onPaginationChange(page) {
      this.displayCommentPage = page;
      this.handleDisplayComment();
    },
  },
};
</script>

<style scoped>
.my--comment {
  text-align: left;
  margin-top: 50px;
}

.my--comment-input {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.comment-detail {
  display: flex;
}

.comment-detail-input {
  width: auto;
  width: calc((100% - 1rem) / 2);
  flex: 1;
}

@media screen and (max-width: 767px) {
  .comment-detail-input {
    width: auto;
  }
}

.comment-submit-btn {
  transform: translateY(-35px);
  float: right;
}

.comment-pagination {
  text-align: center;
}
</style>
<style>
.comment-open-tip > .ant-divider-inner-text {
  transform: translateY(10px);
}

.comment-loading-tip > .ant-divider-inner-text {
  transform: translateY(30px);
}

.comment-detail-input > .ant-input-affix-wrapper > .ant-input,
.comment-detail-textarea > textarea {
  background-color: #f4f5f7;
  border: 1px solid #e5e9ef;
  transition: 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.comment-pagination > .ant-pagination > li.ant-pagination-item {
  background-color: #f4f5f7;
  border: 1px solid #e5e9ef;
}

.comment-pagination > .ant-pagination > li.ant-pagination-item-active {
  background: #fff;
}
</style>
