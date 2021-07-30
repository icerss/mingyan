import Vue from "vue";
import VueRouter from "vue-router";

const MYMain = () =>
  import(/* webpackChunkName: "main" */ "@/views/MYMain.vue");
const MYSearch = () =>
  import(/* webpackChunkName: "search" */ "@/views/MYSearch.vue");
const MYMore = () =>
  import(/* webpackChunkName: "page" */ "@/components/MYMore.vue");
const MYAbout = () =>
  import(/* webpackChunkName: "page" */ "@/components/MYAbout.vue");
const MYFaq = () =>
  import(/* webpackChunkName: "page" */ "@/components/MYFaq.vue");
const MYDonate = () =>
  import(/* webpackChunkName: "page" */ "@/components/MYDonate.vue");
const MYRanking = () =>
  import(/* webpackChunkName: "action-page" */ "@/components/MYRanking.vue");
const MYSubmit = () =>
  import(/* webpackChunkName: "action-page" */ "@/components/MYSubmit.vue");

Vue.use(VueRouter);

export let routes = [
  { path: "/", name: "main", component: MYMain, alias: "/@*" },
  { path: "/search", name: "search", component: MYSearch },
  { path: "/more", name: "more", component: MYMore },
  { path: "/about", name: "about", component: MYAbout },
  { path: "/faq", name: "faq", component: MYFaq },
  { path: "/ranking", name: "ranking", component: MYRanking },
  { path: "/donate", name: "donate", component: MYDonate },
  { path: "/submit", name: "submit", component: MYSubmit },
  { path: "/sponsor", redirect: "/donate" },
  { path: "*", redirect: "/" },
];

let router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes,
});

export default router;

// router.beforeEach((to, from, next) => {
//     console.log({ from, to })
// })
