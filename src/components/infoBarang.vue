<template>
  <div>
    <v-container>
      <v-row>
        <v-col md="6">
          <h3 style="color:white; padding-bottom:1rem">
            Info Kehilangan / Pencarian
          </h3>
          <v-row>
            <v-col md="6" v-for="item in content.slice(0, 2)" :key="item.id">
              <v-card :class="`rounded-lg`" style="padding-right:3px">
                <v-card-title
                  style="font-weight:bold; background-color:#800000ff; color:#f3ae5cff; text-align:center; justify-content: center;"
                >
                  INFO BARANG <br />
                  HILANG!
                  <img
                    :class="`rounded-lg`"
                    class="ml-3 mr-3"
                    v-bind:src="urlImg + '/info/' + item.photo"
                    width="180"
                    height="auto"
                  />
                  <v-card-subtitle
                    style="color:white; font-size:16px; text-align:left"
                  >
                    <p><b>IG Pelapor</b> : {{ item.ig_pelapor }}</p>
                    <p>
                      <b>Deskripsi Barang:</b> <br />
                      {{ item.title }}
                    </p>
                  </v-card-subtitle>
                </v-card-title>
              </v-card>
            </v-col>
            <router-link
              to="/list-lost"
              class="ml-auto mt-5 text-light"
              v-if="content.length > 2"
            >
              Lebih Lengkap >
            </router-link>
          </v-row>
        </v-col>

        <v-col md="6">
          <h3 style="color:white; padding-bottom:1rem;">
            Nomer Penting Semarang
          </h3>
          <v-card :class="`rounded-lg`" style="margin-top:0.6rem">
            <v-card-title
              style="background-color:#800000ff; color:white; text-align:left"
            >
              <table
                style="border-collapse: collapse; width: 100%; text-align:center; justify-content:center;"
              >
                <tr
                  style="font-size:12px"
                  v-for="item in contact.slice(0, 3)"
                  :key="item.id"
                >
                  <td>
                    <p style="text-weight:bold; font-size:17px">
                      {{ stringReplace(item.name) }}
                    </p>
                    <p id="nohp" style="margin-top:-1.5rem;">
                      {{ item.phone }}
                    </p>
                    <p style="margin-top:-1.5rem; font-size:10px">
                      {{ item.region }}
                    </p>
                    <hr style="border:0.5px solid white" />
                  </td>
                  <div class="mt-5" style="text-align:right">
                    <v-btn
                      class="ma-2"
                      outlined
                      color="white"
                      @click="clipboard(item.phone), (snackbar = true)"
                      >Copy!</v-btn
                    >
                  </div>
                  <v-snackbar v-model="snackbar"
                    >Nomor Berhasil Dicopy
                    <template v-slot:action="{ attrs }">
                      <v-btn
                        color="pink"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                        >Close</v-btn
                      >
                    </template>
                  </v-snackbar>
                </tr>
              </table>
            </v-card-title>
          </v-card>
          <router-link to="list-number" v-if="contact.length > 3">
            <a
              id="lanjut"
              style="padding-top:0.4rem; color:white; margin-left:auto; display:block; text-align:right"
              href=""
            >
              Lebih Lanjut >
            </a>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { loadImg } from "../../config.js";

export default {
  data() {
    return {
      snackbar: false,
      content: [],
      contact: [],
      urlImg: loadImg,
    };
  },
  mounted() {
    this.getItems();
    this.getContact();
  },
  methods: {
    clipboard(number) {
      this.$copyText(number).then(function() {
        this.snackbar = {
          show: true,
        };
      });
    },
    getItems() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/items")
        .then((response) => {
          this.content = response.data.datas;
        });
    },
    getContact() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/emergency")
        .then((response) => {
          this.contact = response.data.datas;
        });
    },
    limitTitle(text) {
      return text.slice(0, 20) + " ...";
    },
    stringReplace(str) {
      return str.replaceAll("Rumah Sakit", "RS. ");
    },
  },
};
</script>

<style>
td,
th {
  text-align: left;
  padding: 8px;
}
#lanjut:link {
  text-decoration: none;
}

#lanjut:visited {
  text-decoration: none;
}

#lanjut:hover {
  text-decoration: underline;
}

#lanjut:active {
  text-decoration: underline;
}
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
</style>
