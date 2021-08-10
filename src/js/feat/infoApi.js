import { apiUrls, normalPostHeader } from "../init";
/**
 * 显示名言来源Api
 */
export let MY_showFromApi = {
  getinfo: function(my, picPath) {
    if (!Promise) return;
    return new Promise(function(resolve, reject) {
      fetch(apiUrls.showfrom, {
        ...normalPostHeader,
        body: JSON.stringify({
          mingyan:
            my ||
            document.querySelector(".my--mingyan-name").innerText.trim() +
              "：" +
              document.querySelector(".my--mingyan-text").innerText.trim(),
          picPath: picPath,
          t: new Date().getTime(),
        }),
      })
        .then((res) => res.json())
        .then((json) => {
          // log(json);
          resolve(json);
        })
        .catch(function(e) {
          reject(e);
        });
    });
  },
};
