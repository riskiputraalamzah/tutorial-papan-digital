<script setup>
import TOCVue from "../../components/TOC.vue";
import { RouterLink } from "vue-router";
const dataToc = [
  {
    title: "Halaman Utama",
    href: "#halaman-utama",
  },
  {
    title: "Tambah Data",
    href: "#tambah-data",
  },
  {
    title: "Update Data",
    href: "#update-data",
  },
  {
    title: "Hapus Data",
    href: "#hapus-data",
  },
];
</script>
<template>
  <div>
    <div class="row gy-5">
      <div class="col-lg-9">
        <div class="display-3 fw-semi-bold">Items</div>
        <div class="h3 mt-2 subtitle-page">
          Halaman ini akan membahas tentang tata cara pengoperasian/penggunaan
          menu items
        </div>
        <TOCVue :data="dataToc" class="mt-5 d-lg-none d-block" />
        <div class="mt-5">
          <div id="halaman-utama">
            <div
              class="fs-1 fw-semi-bold d-inline-block border-start bg-light border-5 border-primary px-4 py-2 rounded-3"
            >
              Halaman Utama
            </div>

            <p class="mt-4">
              Pada halaman utama, terdapat semua data list dari tabel items.
              Data-data tersebut saling terhubung(relasi) dengan tabel dari menu
              sheet.
              <br />
              Relasi dari tabel item dengan tabel sheet yakni menggunakan relasi
              one to many
            </p>
            <p>
              <img
                src="/image/other/items-1.png "
                alt="gambar-items"
                class="img-fluid"
              />
            </p>
          </div>
        </div>
        <div class="mt-5">
          <div
            class="fs-1 fw-semi-bold d-inline-block border-start bg-light border-5 border-primary px-4 py-2 rounded-3"
            id="tambah-data"
          >
            Tambah Data
          </div>
        </div>
      </div>
      <div class="col-lg-3 d-lg-block d-none">
        <TOCVue :data="dataToc" />
      </div>
    </div>
  </div>
</template>
