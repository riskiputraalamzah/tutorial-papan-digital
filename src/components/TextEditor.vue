<script setup>
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";
</script>

<template>
  <QuillEditor v-model="content" theme="snow" toolbar="full" />
</template>
