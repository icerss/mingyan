import { apiUrls, normalPostHeader } from "../init";
import { kv, notyf } from "../tools";

export function MY_getUpdate() {
  fetch(apiUrls.update, {
    ...normalPostHeader,
    body: JSON.stringify({
      t: new Date().getTime(),
    }),
  })
    .then((r) => r.json())
    .then(function(res) {
      let localHash = kv.get("sha_version");
      let fetchHash = res.data.sha || "";
      if (localHash !== fetchHash) {
        (async function() {
          // 重新注册 serviceWorker && 删除缓存
          if (
            "serviceWorker" in navigator &&
            kv.get("___mingyan_2021_ranking_data__") &&
            kv.get("___mingyan_sw_version__")
          ) {
            await caches.keys().then((cacheNames) => {
              return Promise.all(
                cacheNames.map((cacheName) => {
                  return caches.delete(cacheName);
                })
              );
            });
            await navigator.serviceWorker
              .getRegistration()
              .then((registration) => {
                if (registration) {
                  registration.unregister().then(() => {
                    if (localHash) {
                      notyf.open({
                        type: "15s",
                        message: "检测到网站更新啦！刷新网页来查看最新版本~~",
                      });
                    }
                    kv.put("sha_version", fetchHash);
                  });
                }
              });
          }
        })();
      }
    })
    .catch(function(err) {
      console.error(err);
    });
}
