import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/home/index.vue";
import Signup from "../views/signup/index.vue";
import Login from "../views/login/index.vue";
import Profile from "../views/profile/index.vue";
import Comment from "../views/comment/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
  },
  {
    path: "/comment",
    name: "comment",
    component: Comment,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
