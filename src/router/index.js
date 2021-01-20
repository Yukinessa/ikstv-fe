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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "News" */ "../views/News.vue"),
  },
  {
    path: "/news/mobile/:title",
    name: "NewsMobile",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
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
    path: "/kudu-reti/:title",
    name: "kuduReti",
    component: () => import("../views/kuduRetiArticle.vue"),
  },
  {
    path: "/list-loker/:id",
    name: "listLoker",
    component: () => import("../components/modalLoker.vue"),
  },
  {
    path: "/list-loker/",
    name: "listLoker",
    component: () => import("../views/listLoker.vue"),
  },
  {
    path: "/list-loker/mobile",
    name: "listLokerMobile",
    component: () => import("../views/listLokerMobile.vue"),
  },
  {
    path: "/list-sosial/mobile",
    name: "listSosialMobile",
    component: () => import("../views/listSosialMobile.vue"),
  },
];

const router = new VueRouter({
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
