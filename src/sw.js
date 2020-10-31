'use strict';

importScripts('https://g.alicdn.com/kg/workbox/3.3.0/workbox-sw.js');
workbox.setConfig({
    modulePathPrefix: 'https://g.alicdn.com/kg/workbox/3.3.0/'
});
if (workbox) {
    console.log(`Workbox 已加载 🎉`);
} else {
    console.log(`Workbox 加载失败 😬`);
}
workbox.routing.registerRoute(
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'css-cache',
    })
);
workbox.routing.registerRoute(
    /.*\.js/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'js-cache',
    })
);
workbox.routing.registerRoute(
    /.*\.html/,
    workbox.strategies.cacheFirst({
      cacheName: 'html-cache',
      plugins: [
        new workbox.expiration.Plugin({
          maxAgeSeconds: 24 * 60 * 60,
        })
      ],
    })
);
workbox.routing.registerRoute(
    /.*\.jpg/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'jpg-cache',
    })
);
workbox.routing.registerRoute(
    /.*\.png/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'png-cache',
    })
);