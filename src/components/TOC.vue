<script setup>
import { defineProps, onMounted } from "vue";
const props = defineProps(["data"]);
const { data } = props;

const goTo = (href) => {
  const el = document.querySelector(href);
  // const btnTOC = document.querySelector(
  //   'button.btn-close[data-bs-dismiss="offcanvas"]'
  // );
  if (el) {
    const offsetTop = el.offsetTop - 90;

    window.scrollTo(0, offsetTop);
  }
};
</script>
<template>
  <div class="toc">
    <div class="fs-4 fw-semi-bold border-bottom">Table Of Content</div>
    <div class="item text-muted mt-2" style="cursor: pointer">
      <template v-for="list in data">
        <div class="pt-1" v-if="list.hasOwnProperty('child')">
          <div @click="goTo(list.href)">{{ list.title }}</div>
          <div
            class="py-1 ps-3"
            v-for="(child, iChild) in list.child"
            :key="iChild"
            @click="goTo(child.href)"
          >
            {{ child.title }}
          </div>
        </div>
        <div class="py-1" @click="goTo(list.href)" v-else>
          {{ list.title }}
        </div>
      </template>
    </div>
  </div>
</template>

<style>
.toc {
  position: sticky;
  top: 100px;
}
@media (max-width: 992px) {
  .toc {
    position: relative !important;
    top: 0;
  }
}
</style>
