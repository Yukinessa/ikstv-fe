<template>
  <div v-if="!$isMobile()">
    <v-container>
      <v-row>
        <v-col md="6">
          <h3 style="color:white; padding-bottom:1rem">
            Info Kehilangan / Pencarian
          </h3>
          <v-row>
            <v-col md="6" v-for="item in content" :key="item.id">
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
                    height="180"
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
                <tr>
                  <th>Instansi</th>
                  <th>Daerah</th>
                  <th>Kontak</th>
                  <th></th>
                </tr>
                <tr
                  style="font-size:12px"
                  v-for="item in contact.slice(0, 6)"
                  :key="item.id"
                >
                  <td>{{ item.name }}</td>
                  <td>{{ item.region }}</td>
                  <td id="nohp">{{ item.phone }}</td>
                  <v-btn
                    class="ma-2"
                    outlined
                    color="white"
                    @click="clipboard(item.phone), (snackbar = true)"
                    >Copy!</v-btn
                  >
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
          <router-link to="list-number">
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
      <router-link to="/list-lost">
        <a
          id="lanjut"
          style="padding-top:0.2rem; color:white; display:block; padding-left:27rem; margin-top:-1.2rem"
          href=""
        >
          Lebih Lengkap >
        </a>
      </router-link>
    </v-container>
  </div>
  <div v-else>
    <b-container>
      <h5 class="font-weight-bold text-light">Info Kehilangan</h5>
      <b-row v-for="item in content.slice(0, 2)" :key="item.id">
        <b-col sm="1">
          <b-card
            style="max-width: 25rem;background-color: #800000"
            class="mb-2 shadow mx-auto"
          >
            <b-card-text>
              <h5 class="text-center font-weight-bold" style="color: #f3ae5cff">
                INFO BARANG<br />
                HILANG
              </h5>
            </b-card-text>
            <img
              class="d-block mx-auto"
              v-bind:src="urlImg + '/info/' + item.photo"
              width="180"
              height="180"
              style="border-radius: 10px"
            />
            <b-card-text class="mt-4">
              <p class="text-light mb-3">
                <b>IG Pelapor :</b> {{ item.ig_pelapor }}
              </p>
              <p class="text-light">
                <b>Tgl Publish</b> : <br />
                {{ item.created_at | moment("dddd, DD MMMM  YYYY") }}
              </p>
              <p class="text-light">
                <b>Barang yang ditemukan/dicari:</b> <br />
                {{ limitTitle(item.title) }}
              </p>
              <p class="text-light">
                <b>Lokasi terakhir Barang</b> : <br />{{
                  limitTitle(item.location)
                }}
              </p>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <div class="text-center">
        <b-button
          href="#"
          style="background-color: #800000; color: #f3ae5cff; border:none"
          class="text-center font-weight-bold"
          >LEBIH LENGKAP</b-button
        >
      </div>
    </b-container>
    <b-container>
      <h5 class="font-weight-bold text-light">Kontak Penting</h5>
      <b-card style="background-color: #800000" class="shadow">
        <table
          style="border-collapse: collapse; width: 100%; text-align:center; justify-content:center;"
        >
          <tr
            style="font-size:12px; border-bottom: 1px solid #6A0505"
            v-for="item in contact.slice(0, 4)"
            :key="item.id"
          >
            <td>
              <h6 class="font-weight-bold text-light">
                <b>{{ item.name }}</b>
              </h6>

              <span class="text-light">{{ item.region }}</span>
            </td>
            <!-- <td>{</td> -->
            <td id="nohp">
              <br />
              <div class="mt-3"></div>
              <span class="text-light">
                {{ item.phone }}
              </span>
            </td>
            <td>
              <br />
              <img
                class="d-block mx-auto"
                src="@/assets/icon-copy.png"
                style="border-radius: 10px"
                @click="clipboard(item.phone), (snackbar = true)"
              />
            </td>
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

        <div class="text-center mt-2">
          <router-link to="list-number">
            <b-button
              class="text-center font-weight-bold"
              style="background-color: white; border:none; color: #800000"
              >LEBIH LENGKAP</b-button
            >
          </router-link>
        </div>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import loadImg from "../../config.js";

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
