<template>
  <div class="my--submit-app">
    <div class="my--submit">
      <h1>名言投稿</h1>
      <a-form-model
        ref="ruleForm"
        :model="form"
        :rules="rules"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
      >
        <a-form-model-item ref="name" label="昵称" prop="name">
          <a-input v-model="form.name" placeholder="选填" />
        </a-form-model-item>

        <a-form-model-item ref="school" label="学校" prop="school">
          <a-input v-model="form.school" placeholder="选填" />
        </a-form-model-item>

        <a-form-model-item ref="classname" label="班级" prop="classname">
          <a-input v-model="form.classname" placeholder="选填" />
        </a-form-model-item>

        <a-form-model-item ref="mail" label="邮箱" prop="mail">
          <a-input
            v-model="form.mail"
            pattern="^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"
            placeholder="选填，若您的名言被入选，我们将会第一时间联系您"
          />
        </a-form-model-item>

        <a-form-model-item ref="saying" label="名言" prop="saying">
          <a-input v-model="form.saying" placeholder="格式：教师名 + 名言" />
        </a-form-model-item>

        <a-form-model-item ref="story" label="名言故事" prop="story">
          <a-input
            v-model="form.story"
            type="textarea"
            rows="10"
            placeholder="选填，有机会选入ERSS名言微信公众号哦！"
          />
        </a-form-model-item>
        <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
          <a-button
            type="primary"
            @click="onSubmit"
            :loading="isLoadingSubmit"
            class="submit_btn"
          >
            提交
          </a-button>
          <a-button style="margin-left: 10px" @click="resetForm">
            清空
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </div>
    <MYFooter mode="back" />
  </div>
</template>

<script>
import { fadeIn, NotyfAlert, swal } from "../../js/utils";
import { apiUrls } from "../../js/init";
import MYFooter from "../../components/MYFooter.vue";

export default {
  name: "MYSubmit",
  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 20 },
      isLoadingSubmit: false,
      isSubmit: false,
      form: {
        name: "",
        school: "",
        classname: "",
        mail: "",
        saying: "",
        story: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "请输入昵称",
          },
        ],
        school: [
          {
            required: false,
          },
        ],
        classname: [
          {
            required: false,
          },
        ],
        mail: [
          {
            required: false,
          },
        ],
        saying: [
          {
            required: true,
            message: "请输入名言",
          },
        ],
        story: [
          {
            required: false,
          },
        ],
      },
    };
  },
  components: {
    MYFooter,
  },
  mounted() {
    fadeIn(".my--submit");
  },
  methods: {
    resetForm() {
      this.$refs.ruleForm.resetFields();
    },
    onSubmit() {
      let root = this;
      this.$refs.ruleForm.validate(function(valid) {
        if (valid) {
          root.isLoadingSubmit = true;
          fetch(apiUrls.submit, {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              event: "mingyan-contribute",
              data: {
                my: root.form.saying,
                name: root.form.name,
                story: root.form.story,
                class: root.form.classname,
                school: root.form.school,
                mail: root.form.mail,
                t: new Date().getTime(),
              },
            }),
          })
            .then(function() {
              root.isLoadingSubmit = false;
              swal({
                title: "名言投稿成功！",
                text: "名言：" + root.form.saying + "\n请等待审核",
                icon: "success",
                button: "关闭",
                closeOnClickOutside: false,
              }).then(function() {
                location.href = "./?from=mingyan-contribute";
              });
            })
            .catch(function() {
              NotyfAlert.err("提交失败，建议稍后再试");
            });
        } else {
          NotyfAlert.err("提交失败，请检查填写的内容是否符合规则");
        }
      });
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}

.my--submit {
  font-weight: normal;
}

input:not(:valid) {
  background-color: #fff;
  border-color: #f5222d;
}

.submit_btn {
  background-color: #5755d9;
  border: none;
}

input:focus,
textarea:focus {
  border: 1px solid #5755d9;
  outline: none;
}
</style>

<style>
.ant-spin-dot-item {
  background-color: #fff !important;
}
</style>
