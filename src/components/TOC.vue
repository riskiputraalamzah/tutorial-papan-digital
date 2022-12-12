<script setup>
import { defineProps } from "vue";
const props = defineProps(["data"]);
const { data } = props;

const goTo = (href) => {
  const el = document.querySelector(href);
  window.scrollTo(0, el.offsetTop - 90);
};
</script>
<template>
  <div style="position: sticky; top: 100px">
    <div
      style="border-radius: 2rem 2rem 0 0"
      class="offcanvas-lg offcanvas-bottom"
      data-bs-scroll="true"
      tabindex="-1"
      id="toc"
      aria-labelledby="tocLabel"
    >
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="tocLabel">Table Of Content</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          data-bs-target="#toc"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body flex-column">
        <div class="fs-4 fw-semi-bold d-lg-block d-none border-bottom">
          Table Of Content
        </div>
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
    </div>
  </div>
</template>
