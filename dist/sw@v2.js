const log = console.log;
let proxyDomain = [
  "localhost",
  //   "127.0.0.1",
  "www.erssmy.com",
  "www.erss.club",
  "www.xhemj.top",
].join("|");
let shouldProxyReg = new RegExp(proxyDomain);
log(shouldProxyReg);
let commitId = "c09ae76";
let cdnUrl = "https://cdn.jsdelivr.net/gh/xhemj/mingyan@" + commitId + "/dist";
let cacheName = "xhemj-sw-test";

function onInstall() {
  log("install");
  self.skipWaiting();
}

function onActivate() {
  log("activate");
}

function onFetch(event) {
  log("fetch");
  event.respondWith(handleFetch(event.request));
}

async function handleFetch(request) {
  //   log("request");
  let url = request.url;
  url = new URL(url);
  // 只代理当前域名下的请求
  if (!shouldProxyReg.test(url.origin)) {
    return fetch(request);
  }
  let pathname = url.pathname;
  if (pathname === "/") pathname = "/index.html";
  let f = await fetch(cdnUrl + pathname + url.search);
  let fetchRes = await f.text();
  log(f.headers.get("content-type"));
  let type = f.headers.get("content-type");
  if (type.indexOf("text/plain") || type.indexOf("text/html"))
    type = "text/html; charset=utf-8";
  if (pathname.endsWith(".js")) type = "application/javascript; charset=utf-8";
  if (pathname.endsWith(".css")) type = "text/css; charset=utf-8";
  return new Response(fetchRes, {
    headers: {
      "content-type": type,
    },
  });
}

self.addEventListener("install", onInstall);
self.addEventListener("fetch", onFetch);
self.addEventListener("activate", onActivate);
