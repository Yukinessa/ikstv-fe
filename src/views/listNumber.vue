<template>
  <div class="grey darken-4">
    <v-container>
      <div style="padding-bottom : 4rem">
        <Navbar />
      </div>
      <h1 class="pt-6" style="color:white; padding-bottom:1rem">
        Nomer Penting Se-Kota Semarang
      </h1>
      <v-simple-table
        class="red accent-4"
        fixed-header
        :class="`rounded-lg`"
        style="text-align:center; "
      >
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">
                <b>Instansi</b>
              </th>
              <th class="text-left">
                <b>Alamat</b>
              </th>
              <th class="text-left">
                <b>Kontak</b>
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in contact" :key="item" style="color:white">
              <td>{{ item.name }}</td>
              <td>{{ item.region }}</td>
              <td>{{ item.phone }}</td>
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
                    color="red"
                    text
                    v-bind="attrs"
                    @click="snackbar = false"
                    >Close</v-btn
                  >
                </template>
              </v-snackbar>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div style="padding-top:4rem">
        <Footer />
      </div>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      contact: [],
      snackbar: false,
    };
  },
  mounted() {
    this.getContact();
  },
  methods: {
    getContact() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/emergency")
        .then((response) => {
          this.contact = response.data.datas;
          console.log(response);
        });
    },
    clipboard(number) {
      this.$copyText(number).then(function() {
        this.snackbar = {
          show: true,
        };
      });
    },
  },
};
</script>

<style>
tr:hover {
  background: red !important;
}
</style>
