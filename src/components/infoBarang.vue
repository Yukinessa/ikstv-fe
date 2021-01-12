<template>
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
                    <b>Tgl Publish</b> : <br />
                    {{ item.created_at | moment("dddd, MMMM Do YYYY") }}
                  </p>
                  <p>
                    <b>Barang yang ditemukan/dicari:</b> <br />
                    {{ item.title }}
                  </p>
                  <p>
                    <b>Lokasi terakhir Barang</b> : <br />{{ item.location }}
                  </p>
                </v-card-subtitle>
              </v-card-title>
            </v-card>
          </v-col>
        </v-row>
        <!-- </v-col> -->
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
              <tr style="font-size:12px" v-for="item in contact" :key="item.id">
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
</style>
