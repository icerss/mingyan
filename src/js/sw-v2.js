import { registerRoute } from "workbox-routing";
import {
    NetworkFirst,
    StaleWhileRevalidate,
    CacheFirst,
} from "workbox-strategies";

import { CacheableResponsePlugin } from "workbox-cacheable-response";
import { ExpirationPlugin } from "workbox-expiration";

self.skipWaiting();

let ignoreList = [
    /https?:\/\/busuanzi.ibruce.info/,
    /https?:\/\/api.github.com/,
    /https?:\/\/(www\.)?badgen.net/,
    /https?:\/\/tcb-api.tencentcloudapi.com/,
    /https?:\/\/hm.baidu.com/,
    /https?:\/\/sp0.baidu.com/,
    /https?:\/\/api.share.baidu.com/,
    /_my_cache_=no/,
    /\.md/,
    /https?:\/\/(www\.)?erss\.club\/api/,
    /https?:\/\/(www\.)?erssmy\.com\/api/,
];

let shouldCache = (url = "") => ignoreList.some(regex => url.match(regex));

registerRoute(
    ({ request, url }) => request.mode === "navigate" && !shouldCache(url.href),
    new StaleWhileRevalidate({
        cacheName: "pages",
        plugins: [
            new CacheableResponsePlugin({
                statuses: [200],
            }),
        ],
    }),
);

registerRoute(
    ({ request, url }) =>
        (request.destination === "style" ||
            request.destination === "script" ||
            request.destination === "worker") &&
        !shouldCache(url.href),
    new StaleWhileRevalidate({
        cacheName: "assets",
        plugins: [],
    }),
);

registerRoute(
    ({ request, url }) =>
        request.destination === "image" && !shouldCache(url.href),
    new CacheFirst({
        cacheName: "images",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
            }),
        ],
    }),
);

registerRoute(
    ({ url }) => url.origin === "https://cdn.jsdelivr.net" && !shouldCache(url.href),
    new StaleWhileRevalidate({
        cacheName: "jsDelivr",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
            }),
        ],
    }),
);

registerRoute(
    ({ url }) => (url.origin === "https://s-sh-1943-pic1.oss.dogecdn.com" || url.origin === "https://s-sh-1943-gravatar.oss.dogecdn.com") && !shouldCache(url.href),
    new CacheFirst({
        cacheName: "DogeCDN",
        plugins: [
            new ExpirationPlugin({
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30,
            }),
        ],
    }),
);