<script setup>
import TOCVue from "../../components/TOC.vue";
import { RouterLink } from "vue-router";
const dataToc = [
  {
    title: "Install Aplikasi",
    href: "#install-aplikasi",
    child: [
      {
        title: "Online",
        href: "#online",
      },
      {
        title: "Offline",
        href: "#offline",
      },
    ],
  },
  {
    title: "Halaman Utama",
    href: "#halaman-utama",
  },
];
</script>
<template>
  <div>
    <div class="row gy-5">
      <div class="col-lg-9">
        <div class="display-3 fw-semi-bold">Introduction</div>
        <div class="h3 mt-2 subtitle-page">
          Halaman ini akan membahas tentang tata cara penginstalan pada aplikasi
          smart desa tikusan
        </div>
        <TOCVue :data="dataToc" class="mt-5 d-lg-none d-block" />
        <div class="mt-5">
          <div id="install-aplikasi">
            <div
              class="fs-1 fw-semi-bold d-inline-block border-start bg-light border-5 border-primary px-4 py-2 rounded-3"
            >
              Install Aplikasi
            </div>

            <p class="mt-4">
              Pertama-tama kita harus memilih , aplikasi ini harus dijalankan
              secara online atau offline. berikut beberapa tutorial untuk
              menginstall aplikasi secara online maupun offline.
            </p>
            <div class="alert alert-warning">
              Sebelum menginstall, silahkan download source code aplikasi
              terlebih dahulu :
              <a href="https://github.com/indekslink/revisi-papan-digital"
                >Download via github</a
              >
            </div>
            <div class="mt-4">
              <div class="fs-3 fw-semi-bold mb-2" id="online">
                Online [via hosting]
              </div>
              <p>
                Untuk menggunakan aplikasi secara online, maka diperlukan
                hosting dan domain agar aplikasi tersebut dapat diakses, berikut
                beberapa tutorial yang dapat membantu anda dalam mengupload file
                project aplikasi ke dalam hosting pilihan anda
              </p>
              <ul>
                <li class="my-2">
                  <a
                    href="https://www.niagahoster.co.id/blog/cara-upload-laravel-ke-hosting/?amp&gclid=Cj0KCQiAnNacBhDvARIsABnDa68t2bdwD5kHJ1N429aR1bECiYui6DzxVaEUll7QdX32odS7HpIuxloaAjo6EALw_wcB"
                    >Cara Upload Laravel ke Hosting [Cepat & Mudah!]</a
                  >
                </li>
                <li class="my-2">
                  <a
                    href="https://www.jagoanhosting.com/tutorial/tips-hosting/upload-aplikasi-laravel-hosting"
                    >Tutorial Upload Aplikasi Laravel ke Hosting Melalui
                    cPanel</a
                  >
                </li>
                <li class="my-2">
                  <a
                    href="https://www.domainesia.com/panduan/cara-upload-file-laravel-di-hosting/"
                    >Cara Upload File Laravel di Hosting</a
                  >
                </li>
                <li class="my-2">
                  <a
                    href="https://galangptrm.medium.com/cara-upload-laravel-ke-cpanel-di-shared-hosting-menggunakan-git-d8abf3ce88eb"
                    >Cara Upload Laravel ke Shared Hosting menggunakan Git</a
                  >
                </li>
              </ul>
            </div>
            <div class="mt-4">
              <div class="fs-3 fw-semi-bold" id="offline">
                Offline [via localhost]
              </div>
              <p class="mt-2">
                Untuk menginstal aplikasi papan digital secara offline, maka
                silahkan ikuti beberapa link tutorial dibawah ini
              </p>
              <ul>
                <li class="my-2">
                  <a
                    href="https://ztrohub.github.io/2021/08/18/Cara-Menjalankan-Project-Laravel-dari-Clone-Git/"
                    >Cara Menjalankan Project Laravel dari Clone Git</a
                  >
                </li>
                <li class="my-2">
                  <a
                    href="https://blog.nafies.id/laravel/cara-install-aplikasi-laravel-dari-github-ke-xampp-windows/"
                    >Cara Install Aplikasi Laravel dari Github ke XAMPP
                    Windows</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div id="halaman-utama" class="mt-5">
            <div
              class="fs-1 fw-semi-bold d-inline-block border-start bg-light border-5 border-primary px-4 py-2 rounded-3"
            >
              Halaman Utama
            </div>
            <p class="mt-4">
              Pada Halaman utama , hanya menampilkan konten yang diambil dari
              web landing page desa tikusan. Apabila ingin ada penambahan
              kontent , silahkan mengisi
              <router-link :to="{ name: 'other-tutorial-request' }"
                >form request</router-link
              >
              terlebih dahulu.
            </p>
            <p>
              <img
                src="/image/other/halaman-utama.png"
                class="img-fluid img-thumbnail"
                alt="halaman-utama"
              />
            </p>
            <p>
              Jika proses install aplikasi berhasil. maka halaman utama yang
              muncul akan seperti gambar diatas
            </p>
          </div>
        </div>
      </div>
      <div class="col-lg-3 d-lg-block d-none">
        <TOCVue :data="dataToc" />
      </div>
    </div>
  </div>
</template>
