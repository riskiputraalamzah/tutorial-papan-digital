<script setup>
import { provide, reactive, computed, inject, ref } from "vue";

import Navbar from "./components/Navbar.vue";
import SidebarVue from "./components/Sidebar.vue";

const maintenance = inject("maintenance");

const state = reactive({
  showSidebar: true,
  currentWidth: window.innerWidth,
});

const toggleSidebar = () => {
  state.showSidebar = !state.showSidebar;

  return state.showSidebar;
};
const show = computed(() => state.showSidebar);

provide("toggleSidebar", {
  show,
  toggleSidebar,
});

window.addEventListener("resize", function () {
  state.currentWidth = window.innerWidth;
  state.showSidebar = state.currentWidth >= 992 ? false : true;
});
state.showSidebar = state.currentWidth >= 992 ? false : true;
</script>

<template>
  <div v-if="maintenance">
    <div class="container pt-5 mt-5">
      <div class="alert alert-warning">
        <div class="text-center">
          <div class="display-1 fw-bold">Maintenance</div>
          <div class="fs-5">
            Maaf, website masih dalam tahap pemeliharaan. Silahkan kunjungi
            website secara berkala dengan kurun waktu 1 jam kedepan
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <Navbar />
    <SidebarVue />
    <div
      :class="[
        'content',
        state.showSidebar && state.currentWidth >= 992 ? 'close-sidebar' : '',
      ]"
    >
      <router-view v-slot="{ Component }">
        <transition name="scale" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
/* style transition */
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
}

.content {
  transition: all 0.5s ease;

  padding: calc(65px + 1.5rem) 1rem 1rem calc(300px + 1rem);
}
.content.close-sidebar {
  padding-left: 1rem;
}
@media (max-width: 992px) {
  .content {
    padding-left: 1rem !important;
  }
}
/* end */
</style>
