import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/news/:title",
    name: "News",

    component: () => import(/* webpackChunkName: "News" */ "../views/News.vue"),
  },
  {
    path: "/news/mobile/:title",
    name: "NewsMobile",
    component: () =>
      import(/* webpackChunkName: "News" */ "../views/NewsMobile.vue"),
  },
  {
    path: "/list-lost",
    name: "listLost",
    component: () => import("../views/listLost.vue"),
  },
  {
    path: "/list-lost/mobile",
    name: "listLostMobile",
    component: () => import("../views/listLostMobile.vue"),
  },
  {
    path: "/list-number",
    name: "listNumber",
    component: () => import("../views/listNumber.vue"),
  },
  {
    path: "/list-number/mobile",
    name: "listNumberMobile",
    component: () => import("../views/listNumberMobile.vue"),
  },
  {
    path: "/detail-category/:playlist",
    name: "detailCategory",
    component: () => import("../views/detailCategory.vue"),
  },
  {
    path: "/detail-category/mobile/:playlist",
    name: "detailCategoryMobile",
    component: () => import("../views/detailCategoryMobile.vue"),
  },
  {
    path: "/kudu-reti/:title",
    name: "kuduRetiMobile",
    component: () => import("../views/kuduRetiArticle.vue"),
  },
  {
    path: "/kudu-reti/mobile/:title",
    name: "kuduReti",
    component: () => import("../views/kuduRetiArticleMobile.vue"),
  },
  {
    path: "/all-loker",
    name: "allLoker",
    component: () => import("../views/listLoker.vue"),
  },
  {
    path: "/all-sosial",
    name: "allSosial",
    component: () => import("../views/listSocial.vue"),
  },
  {
    path: "/loker",
    name: "listLokerMobile",
    component: () => import("../views/listLokerMobile.vue"),
  },
  {
    path: "/list-sosial/mobile",
    name: "listSosialMobile",
    component: () => import("../views/listSosialMobile.vue"),
  },
  {
    path: "/list-news",
    name: "list-news",
    component: () => import("../views/listNews.vue"),
  },
  {
    path: "/list-news/mobile",
    name: "listNewsMobile",
    component: () => import("../views/listNewsMobile.vue"),
  },
  {
    path: "/list-kudu-reti/mobile",
    name: "listKuduRetiMobile",
    component: () => import("../views/listKuduRetiMobile.vue"),
  },
  {
    path: "/list-kudureti",
    name: "list-kudureti",
    component: () => import("../views/listKuduReti.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior: function(to) {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
