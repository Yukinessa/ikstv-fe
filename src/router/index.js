import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/news",
    name: "News",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "News" */ "../views/News.vue")
  },
  {
    path: "/list-news",
    name: "listNews",
    component: () => import("../views/listNews.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
