<script setup>
import { reactive, ref, inject } from "vue";
const state = reactive({
  loading: true,
  data: [],
});
const title = ref("");
const description = ref("");

const key = inject("keyRequest");

const getFile = () => {
  fetch(`https://jsonblob.com/api/jsonBlob/${key}`, {
    headers: { "Content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((response) => {
      state.loading = false;
      state.data = response;
    })
    .catch((error) => {
      console.log("Looks like there was a problem: \n", error);
    });
};

getFile();

function auto_grow(event) {
  event.target.style.height = "5px";
  event.target.style.height = event.target.scrollHeight + "px";
}

let wait = false;
const saveData = () => {
  if (wait) {
    return true;
  }
  wait = true;
  if (title == "" || description == "") {
    wait = false;
    return alert("Lengkapi input terlebih dahulu");
  }
  const currentData = {
    tgl: new Date().toLocaleDateString(),
    id: state.data.length + 1,
    title: title.value,
    description: description.value,
    status: "wait",
    bluring: false,
  };
  state.data.unshift(currentData);

  fetch(`https://jsonblob.com/api/jsonBlob/${key}`, {
    headers: { "Content-type": "application/json" },
    method: "PUT",
    body: JSON.stringify(state.data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert("Your request has been succesfully added");
      wait = false;
      state.data = response;
      title.value = "";
      description.value = "";
    })
    .catch((error) => {
      wait = false;
      console.log("Looks like there was a problem: \n", error);
    });
};
</script>
<template>
  <div>
    <div class="fs-1 mb-4">List Request</div>
    <div class="mb-4">
      <button
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#modalAddRequest"
      >
        Create Your Request
      </button>
      <button
        class="btn btn-info ms-3"
        data-bs-toggle="collapse"
        data-bs-target="#fq"
      >
        F&Q
      </button>
      <div class="collapse" id="fq">
        <div class="accordion pt-4" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Apa itu Request Tutorial
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Jadi fitur request tutorial ini ialah berfungsi agar si
                developer membuatkan suatu menu terkait papan digital tikusan
                sesuai apa yang di inginkan oleh perequest
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Kenapa request saya di blur ?
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Karena mengandung unsur rasis atau bahasa yang tidak sopan
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Apa itu kolom status?
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                Kolom status berfungsi untuk memberitahukan status dari request
                tersebut. <br />
                Ada 3 status, yakni
                <strong>accepted, waiting list , rejected</strong> <br />
                <strong>accepted,</strong> menandakan bahwa request tersebut
                diterima dan akan segera dibuatkan menu tersendiri untuk
                tutorial tersebut yang akan di kelompokkan dalam menu terkait<br />
                <strong>waiting list,</strong> menandakan bahwa request tersebut
                masih dalam tahap proses antrian dan tergantung kehendak
                developer ingin membuatkannya atau tidak<br />
                <strong>rejected,</strong> menandakan bahwa request tersebut
                ditolak karena suatu alasan tertentu<br />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-striped table-bordered">
        <thead>
          <tr>
            <th>No</th>
            <th>Tgl</th>
            <th>Title</th>
            <th>Deskripsi</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="state.loading">
            <td colspan="5" class="text-center">Loading</td>
          </tr>
          <template v-else>
            <tr
              v-for="(list, i) in state.data"
              v-if="state.data.length > 0"
              :class="[list.bluring ? 'bluring' : '']"
            >
              <td v-text="i + 1"></td>
              <td v-text="list.tgl"></td>
              <td v-text="list.title"></td>
              <td v-text="list.description"></td>
              <td>
                <button
                  class="btn btn-success"
                  v-if="list.status == 'accepted'"
                >
                  Accepted
                </button>
                <button
                  class="btn btn-warning"
                  v-else-if="list.status == 'wait'"
                >
                  Waiting List
                </button>
                <button class="btn btn-danger" v-else>Rejected</button>
              </td>
            </tr>
            <tr v-else>
              <td colspan="5" class="text-center">Data Masih Kosong</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="modalAddRequest"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="modalAddRequestLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="modalAddRequestLabel">
              Add Your Request
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="row">
                <div class="col-12">
                  <div class="mb-3">
                    <label for="title" class="form-label">Title Tutorial</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="title"
                      id="title"
                    />
                  </div>
                </div>
                <div class="col-12">
                  <div class="mb-3">
                    <label for="description" class="form-label"
                      >Description Tutorial</label
                    >
                    <textarea
                      class="form-control"
                      @input="auto_grow"
                      id="description"
                      v-model="description"
                    ></textarea>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" class="btn btn-primary" @click="saveData">
              {{ wait ? "Loading" : "Save" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
table th,
table td {
  vertical-align: middle;
}
textarea {
  height: 5px;
}
.bluring {
  filter: blur(5px);
}
</style>
