import { ___date_version___ } from "./feat/config";

export default (async function () {
    /**
     * ServiceWorker
     */

    // 防止sw占用过大
    let sw_v = "202105232055";
    let sw_local_v = localStorage.getItem("___mingyan_sw_version__") || "";
    let sw_app = "xhemj";
    if ("serviceWorker" in navigator && sw_v != sw_local_v) {
        await caches.keys().then((cacheNames) => {
            return Promise.all(cacheNames
                .filter((cacheName) => {
                    return cacheName.startsWith(sw_app);
                })
                .map((cacheName) => {
                    return caches.delete(cacheName);
                }));
        });
        await navigator.serviceWorker.getRegistration().then((registration) => {
            if (registration) {
                registration.unregister().then(() => {
                    localStorage.setItem("___mingyan_sw_version__", sw_v);
                    location.reload();
                });
            }
        });
    }

    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
            navigator.serviceWorker.register("./sw.js?t=" + ___date_version___); // eslint-disable-line
        });
    }
})();