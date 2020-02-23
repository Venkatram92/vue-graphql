import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/employee",
      component: () => import("./views/empList.vue")
    },
    {
      path: "/ap",
      component: () => import("./views/ap_state.vue")
    },
    {
      path: "/login",
      component: () => import("./views/login.vue")
    }
  ]
});
