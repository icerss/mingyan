import Vue from "vue";
import VueRouter from "vue-router";

const MYMain = () =>
  import(/* webpackChunkName: "MYMain" */ "./views/MYMain.vue");
const MYSearch = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/MYSearch.vue");
const MYMore = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/pages/MYMore.vue");
const MYAbout = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/pages/MYAbout.vue");
const MYFaq = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/pages/MYFaq.vue");
const MYDonate = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/pages/MYDonate.vue");
const MYRanking = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/pages/MYRanking.vue");
const MYSubmit = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/pages/MYSubmit.vue");
const MYDebugPage = () =>
  import(/* webpackChunkName: "FancyImage" */ "./views/pages/MYDebugPage.vue");

Vue.use(VueRouter);

export let routes = [
  { path: "/", alias: "/@*", name: "main", component: MYMain },
  { path: "/search", name: "search", component: MYSearch },
  { path: "/more", name: "more", component: MYMore },
  { path: "/about", name: "about", component: MYAbout },
  { path: "/faq", name: "faq", component: MYFaq },
  { path: "/ranking", name: "ranking", component: MYRanking },
  { path: "/donate", name: "donate", component: MYDonate },
  { path: "/submit", name: "submit", component: MYSubmit },
  { path: "/debug", name: "debug", component: MYDebugPage },
  { path: "/sponsor", redirect: "/donate" },
  // { path: "*", redirect: "/" },
];

let router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;

// router.beforeEach((to, from, next) => {
//     console.log({ from, to })
// })
