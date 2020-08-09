import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/symptoms",
    name: "Symptoms",
    // route level code-splitting
    // this generates a separate chunk (symptoms.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "symptoms" */ "../views/Symptoms.vue")
  },
  {
    path: "/prevention",
    name: "Prevention",
    // route level code-splitting
    // this generates a separate chunk (prevention.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "prevention" */ "../views/Prevention.vue")
  },
  {
    path: "/wash-hands",
    name: "WashHands",
    // route level code-splitting
    // this generates a separate chunk (wash-hands.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "wash-hands" */ "../views/WashHands.vue")
  },
  {
    path: "/faq",
    name: "FAQ",
    // route level code-splitting
    // this generates a separate chunk (faq.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "faq" */ "../views/FAQ.vue")
  },
  {
    path: "*",
    name: "404",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
