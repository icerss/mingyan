import { apiUrls, normalPostHeader } from "../init";
import { getUid } from "../utils";

let apiUrl = apiUrls.comment;
// apiUrl = "http://localhost:3000/api/comment";

export let MY_commentApi = {
  /**
   * 获取当前名言评论
   * @param {String} my 完整名言
   */
  getComment: function(my) {
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "getcomment",
          data: {
            mingyan: my,
            uid: getUid(),
            t: new Date().getTime(),
          },
        }),
      })
        .then((r) => r.json())
        .then(function(res) {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res.msg);
          }
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
  addComment: function(
    opt = {
      mingyan: "",
      avatar: "",
      comment: "",
      nick: "",
      mail: "",
    }
  ) {
    let my = opt.mingyan;
    let avatar = opt.avatar;
    let comment = opt.comment;
    let nick = opt.nick;
    let mail = opt.mail;
    return new Promise(function(resolve, reject) {
      fetch(apiUrl, {
        ...normalPostHeader,
        body: JSON.stringify({
          event: "addcomment",
          data: {
            mingyan: my,
            uid: getUid(),
            avatar,
            comment,
            nick,
            mail,
            t: new Date().getTime(),
          },
        }),
      })
        .then((r) => r.json())
        .then(function(res) {
          if (res.code === 0) {
            resolve(res.data);
          } else {
            reject(res.msg);
          }
        })
        .catch(function(err) {
          reject(err);
        });
    });
  },
};
