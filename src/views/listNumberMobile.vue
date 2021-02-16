<template>
  <div class="grey darken-4">
    <v-container>
      <div class="mb-6">
        <NavbarMobile />
      </div>
      <AdvertiseDiamondMobile />
      <br />
      <h6 class="text-light font-weight-bold mb-4">
        Nomer Penting Se-Kota Semarang
      </h6>
      <br />
      <v-col cols="12" sm="6" md="3">
        <v-text-field
          label="Cari kontak lur.."
          style="color: white !important"
          v-model="search"
          @keyup="searchContact"
        ></v-text-field>
      </v-col>
      <b-table
        id="my-table"
        :items="items"
        :per-page="perPage"
        :current-page="currentPage"
        small
        :fields="fields"
        style="color: white !important"
        class="shadow"
      >
        <template #cell(fullname)="data">
          <div class="p-2">
            <p class="font-weight-bold" style="font-size: 14px">
              {{ data.item.name }}
            </p>

            <p style="font-size: 10px" class="text-light">
              {{ data.item.phone }}
            </p>
            <p style="font-size: 11px">{{ data.item.region }}</p>
          </div>
        </template>
        <template #cell(actions)="data">
          <div class="p-2 mt-1">
            <v-img
              src="@/assets/icon-copy.png"
              max-width="25"
              @click="clipboard(data.item.phone, (snackbar = true))"
            >
            </v-img>
          </div>
        </template>
      </b-table>
      <v-snackbar v-model="snackbar"
        >Nomor Berhasil Dicopy
        <template v-slot:action="{ attrs }">
          <v-btn color="red" text v-bind="attrs" @click="snackbar = false"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
        pills
        align="center"
      ></b-pagination>
      <br />
      <AdvertiseGoldMobile />
      <div style="padding-top:4rem">
        <FooterMobile />
      </div>
    </v-container>
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";
import AdvertiseDiamondMobile from "../components/advertiseDiamondMobile";
import AdvertiseGoldMobile from "../components/advertiseGoldMobile";

export default {
  components: {
    NavbarMobile,
    FooterMobile,
    AdvertiseDiamondMobile,
    AdvertiseGoldMobile,
  },
  data() {
    return {
      items: [],
      snackbar: false,
      search: "",
      perPage: 5,
      currentPage: 1,
      fields: [
        { key: "fullName", label: "Full Name" },
        { key: "actions", label: "Action here" },
      ],
    };
  },
  mounted() {
    this.getContact();
  },
  computed: {
    rows() {
      return this.items.length;
    },
  },
  methods: {
    getContact() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/emergency/mobile")
        .then((response) => {
          this.items = response.data.datas;
        });
    },
    clipboard(number) {
      this.$copyText(number).then(function() {});
    },
    searchContact() {
      if (this.search != "") {
        this.axios
          .post(process.env.VUE_APP_IP_ADDRESS + "search/emergency/contact", {
            item_search: this.search,
          })
          .then((response) => {
            this.items = response.data.result;
          });
      } else {
        this.axios
          .get(process.env.VUE_APP_IP_ADDRESS + "info/emergency")
          .then((response) => {
            this.items = response.data.datas;
          });
      }
    },
  },
};
</script>

<style>
tr:hover {
  background: red !important;
}
.theme--light.v-label {
  color: white !important;
}
.theme--light.v-input input {
  color: white !important;
}
thead {
  display: none;
}
table {
  background-color: #d50000;
}
.table td {
  border-top: 1px solid #212121;
  border-bottom: 1px solid rgba(33, 33, 33, 0.4);
}
.page-item.active .page-link {
  background-color: #d50000;
  border-color: #d50000 !important;
}
.page-link {
  color: #d50000;
}
</style>
