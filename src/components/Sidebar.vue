<script setup>
import { inject, computed } from "vue";
import { useRouter } from "vue-router";

const { show, toggleSidebar } = inject("toggleSidebar");

const router = useRouter();
const menus = computed(() => {
  return router.options.routes;
});

const checkLink = (name) => {
  if (window.innerWidth <= 992) {
    toggleSidebar();
  }
  // updateCurrentMenu(list.slug);
  window.scrollTo(0, 0);
  router.push({ name });
};
</script>
<template>
  <div :class="['sidebar shadow', show ? 'close' : '']">
    <ul class="list-group list-group-flush">
      <template v-for="(list, i) in menus">
        <li
          v-if="list.hasOwnProperty('children')"
          class="list-group-item bg-transparent py-3 fs-5"
        >
          <div
            v-text="list.title"
            data-bs-toggle="collapse"
            :data-bs-target="'#collapse-' + i"
            aria-expanded="false"
            :aria-controls="'collapse-' + i"
          ></div>
          <div class="collapse" :id="'collapse-' + i">
            <ul class="list-group list-group-flush mt-3">
              <li
                v-for="child in list.children"
                :class="[
                  'list-group-item bg-transparent fs-6',
                  $router.currentRoute.value.name == child.name
                    ? 'text-primary'
                    : '',
                ]"
                v-text="child.title"
                @click="checkLink(child.name)"
              ></li>
            </ul>
          </div>
        </li>

        <li
          v-else
          :class="[
            'list-group-item bg-transparent py-3 fs-5',
            $router.currentRoute.value.name == list.name ? 'text-primary' : '',
          ]"
          v-text="list.title"
          @click="checkLink(list.name)"
        ></li>
      </template>
    </ul>
  </div>
</template>

<style>
.sidebar {
  transition: all 0.5s ease;
  position: fixed;
  padding: 1rem;
  margin-top: 65px;
  top: 0;
  width: 300px;
  left: 0;
  bottom: 0;
  z-index: 999;
  overflow: hidden auto;
  background-color: var(--bs-body-bg);
}
.sidebar.close {
  left: -300px;
}
.sidebar::-webkit-scrollbar-track {
  /* margin-top: 65px; */
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #f5f5f5;
}

.sidebar::-webkit-scrollbar {
  width: 8px;
  background-color: #f5f5f5;
}

.sidebar::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: rgb(199, 199, 199);
}
.list-group-item {
  cursor: pointer;
  user-select: none;
}
</style>
