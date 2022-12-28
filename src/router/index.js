import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Introduction/Main.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      title: "Introduction",
      name: "introduction",
      component: HomeView,
    },
    {
      path: "/items",
      title: "Items",
      name: "items",
      component: () => import("../views/Items/Main.vue"),
      // children: [
      //   {
      //     path: "",
      //     title: "Definisi",
      //     name: "definisi-items",
      //     component: () => import("../views/Items/Main.vue"),
      //   },
      //   {
      //     path: "tambah-data",
      //     title: "Tambah Data",
      //     name: "tambah-data-items",
      //     component: () => import("../views/Items/TambahData.vue"),
      //   },
      // ],
    },
    {
      path: "/sheets",
      title: "Sheets",
      hide: true,
      children: [
        {
          path: "",
          title: "Definisi",
          name: "definisi-sheets",
          component: () => import("../views/Sheets/Main.vue"),
        },
        {
          path: "tambah-data",
          title: "Tambah Data",
          hide: true,
          name: "tambah-data-sheets",
          component: () => import("../views/Sheets/TambahData.vue"),
        },
      ],
    },
    {
      path: "/other-tutorial",
      title: "Other Tutorial",
      hide: true,
      children: [
        {
          path: "request",
          title: "Request",
          hide: true,
          name: "other-tutorial-request",
          component: () => import("../views/OtherTutorial/Request.vue"),
        },
      ],
    },

    // {
    //   path: "/admin",
    //   name: "admin",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AdminView.vue"),
    // },
  ],
});

export default router;
