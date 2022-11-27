<script setup>
import { inject } from "vue";
import { useRouter } from "vue-router";

const { show, toggleSidebar } = inject("toggleSidebar");
const { menus } = inject("fileData");
const { updateCurrentMenu } = inject("menus");
const router = useRouter();

const checkLink = (list) => {
  if (window.innerWidth <= 992) {
    toggleSidebar();
  }
  updateCurrentMenu(list.slug);
  window.scrollTo(0, 0);
  router.push("/");
};
</script>
<template>
  <div :class="['sidebar bg-light', show ? 'close' : '']">
    <ul class="list-group list-group-flush">
      <li
        style="cursor: pointer"
        class="list-group-item bg-transparent py-3 fs-5"
        v-for="(list, i) in menus"
        v-text="list.title"
        @click="checkLink(list)"
      ></li>
      <!-- <li
        style="cursor: pointer"
        class="list-group-item bg-transparent py-3 fs-5"
        @click="$router.push('/admin')"
      >
        Admin
      </li> -->
    </ul>
  </div>
</template>

<style>
.sidebar {
  transition: all 0.5s ease;
  position: fixed;
  padding: calc(65px + 1.5rem) 1rem 1rem 1rem;
  top: 0;
  width: 300px;
  left: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden auto;
}
.sidebar.close {
  left: -300px;
}
.sidebar::-webkit-scrollbar-track {
  margin-top: 65px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.sidebar::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.sidebar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(129, 129, 129);
}
</style>
