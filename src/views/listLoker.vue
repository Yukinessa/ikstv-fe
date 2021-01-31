<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <br />
      <br />
      <h2 class="pt-6" style="color:white">Lowongan Pekerjaan</h2>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel
          class="grey darken-3"
          v-for="item in loker"
          :key="item"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="12" md="8">
                <h6 style="padding-left:1rem; color:white">
                  <b>{{ item.position }}</b>
                </h6>
                <p style="padding-left:1rem; color:white">{{ item.title }}</p>
              </v-col>
              <v-col cols="6" sm="6" md="4">
                <p class="text-light" style="font-weight:bold">
                  IDR {{ item.salary }}
                </p>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="color:white">
            <b-row>
              <b-col sm="3">
                <v-img
                  v-bind:src="urlImg + '/loker/' + item.url"
                  :class="`rounded-lg`"
                  style="display:block; margin-left:auto; margin-right:auto; margin-bottom:1rem"
                  max-width="180"
                />
                <p class="text-light text-center" style="font-size:20px">
                  <b>{{ upperCase(item.title) }}</b>
                </p>
                <p class="mb-6 text-light text-center" style="font-size:15px">
                  {{ item.address }}
                </p>
                <p class=" text-light ">
                  <b>Email</b> : <br />{{ item.email }}
                </p>
                <p class="text-light ">
                  <b>Kontak</b> : <br />{{ item.phone }}
                </p>
              </b-col>
              <b-col sm="9" v-html="item.description"></b-col>
            </b-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import loadImg from "../../config";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      loker: [],
      urlImg: loadImg,
    };
  },
  mounted() {
    this.getLoker();
  },
  methods: {
    getLoker() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/loker")
        .then((response) => {
          this.loker = response.data.datas;
          console.log(response);
        });
    },
    limitTitle(text) {
      return this.stringReplace(text.slice(0, 30) + " ...");
    },
    limitText(text) {
      return text.slice(0, 15) + " ...";
    },
    upperCase(text) {
      return text.toUpperCase();
    },
  },
};
</script>

<style>
.theme--light.v-expansion-panels
  .v-expansion-panel-header
  .v-expansion-panel-header__icon
  .v-icon {
  color: white;
}
</style>
