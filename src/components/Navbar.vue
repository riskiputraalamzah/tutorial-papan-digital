<script setup>
import { inject } from "vue";
const { toggleSidebar } = inject("toggleSidebar");
</script>
<template>
  <nav class="navbar navbar-expand-lg bg-light navbar-light shadow fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand text-truncate" href="#">
        <div class="d-flex align-items-center">
          <img src="/image/logo-desa.png" width="30" alt="logo desa tikusan" />
          <span class="d-none d-sm-block ms-2">
            Aplikasi Tutorial Papan Digital
          </span>
        </div>
      </a>
      <button
        @click.stop="toggleSidebar"
        class="navbar-toggler d-block"
        type="button"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <!-- <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex ms-auto mt-4 mt-lg-0" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div> -->
    </div>
  </nav>
</template>
<style>
.navbar{
  background-color: var(--bs-body-bg) !important;
}
</style>
