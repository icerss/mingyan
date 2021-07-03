'use strict'; const version = 'xhemj_202102271649'; const __DEVELOPMENT__ = false; const __DEBUG__ = false; const offlineResources = ['/src/offline.html?t=202101281303', './src/loading.svg']; const ignoreFetch = [/https?:\/\/hm.baidu.com\//, /https?:\/\/api.share.baidu.com\//, /https?:\/\/sp0.baidu.com\//, /https?:\/\/www.google-analytics.com\//, /https?:\/\/www.googletagmanager.com\//, /https?:\/\/busuanzi.ibruce.info\//, /https?:\/\/tcb-api.tencentcloudapi.com\//, /https?:\/\/api.github.com\//, /https?:\/\/cdn.jsdelivr.net\//, /https?:\/\/thirdqq.qlogo.cn\//, /https?:\/\/lib.baomitu.com\//, /https?:\/\/7.dusays.com\//, /https?:\/\/ip.xhemj.now.sh\//, /erss\.club\/api/, /_my_cache_=no/, /https?:\/\/badgen.net\//,]; function onInstall(event) { log('install event in progress.'); event.waitUntil(updateStaticCache()) }
function updateStaticCache() { return caches.open(cacheKey('offline')).then((cache) => { return cache.addAll(offlineResources) }).then(() => { log('installation complete!') }) }
function onFetch(event) {
    const request = event.request; if (shouldAlwaysFetch(request)) { event.respondWith(networkedOrOffline(request)); return }
    if (shouldFetchAndCache(request)) { event.respondWith(networkedOrCached(request)); return }
    event.respondWith(cachedOrNetworked(request))
}
function networkedOrCached(request) { return networkedAndCache(request).catch(() => { return cachedOrOffline(request) }) }
function networkedAndCache(request) { return fetch(request).then((response) => { var copy = response.clone(); caches.open(cacheKey('resources')).then((cache) => { cache.put(request, copy) }); log("(network: cache write)", request.method, request.url); return response }) }
function cachedOrNetworked(request) { return caches.match(request).then((response) => { log(response ? '(cached)' : '(network: cache miss)', request.method, request.url); return response || networkedAndCache(request).catch(() => { return offlineResponse(request) }) }) }
function networkedOrOffline(request) { return fetch(request).then((response) => { log('(network)', request.method, request.url); return response }).catch(() => { return offlineResponse(request) }) }
function cachedOrOffline(request) { return caches.match(request).then((response) => { return response || offlineResponse(request) }) }
function offlineResponse(request) { log('(offline)', request.method, request.url); if (request.url.match(/\.(jpg|png|gif|svg|jpeg)(\?.*)?$/)) { return caches.match('/src/loading.svg') } else { return caches.match('/src/offline.html?t=202101281303') } }
function onActivate(event) { log('activate event in progress.'); event.waitUntil(removeOldCache()) }
function removeOldCache() { return caches.keys().then((keys) => { return Promise.all(keys.filter((key) => { return !key.startsWith(version) }).map((key) => { return caches.delete(key) })) }).then(() => { log('removeOldCache completed.') }) }
function cacheKey() { return [version, ...arguments].join(':') }
function log() { if (developmentMode()) { console.log("%c[DB]:", "color:red", ...arguments) } }
function shouldAlwaysFetch(request) { return __DEVELOPMENT__ || request.method !== 'GET' || ignoreFetch.some(regex => request.url.match(regex)) }
function shouldFetchAndCache(request) { try { return ~request.headers.get('Accept').indexOf('text/html') } catch (e) { } }
function developmentMode() { return __DEVELOPMENT__ || __DEBUG__ }
log("Hello from ServiceWorker land!", version);
self.skipWaiting(); self.addEventListener('install', onInstall); self.addEventListener('fetch', onFetch); self.addEventListener("activate", onActivate);