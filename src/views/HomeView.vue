<script setup>
import { inject, computed } from "vue";
import TextEditorVue from "../components/TextEditor.vue";
const { currentMenu } = inject("menus");
const { menus } = inject("fileData");
const maintenance = inject("maintenance");
const data = computed(() => {
  return menus.filter((key) => key.slug == currentMenu.value)[0];
});
</script>

<template>
  <main>
    <div v-if="maintenance">
      <div v-html="data.content"></div>
    </div>

    <div v-else>
      <div class="w-100">
        <button class="btn btn-primary btn-lg">Save</button>
        <TextEditorVue />
      </div>
    </div>
  </main>
</template>
