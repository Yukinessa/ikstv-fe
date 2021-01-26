<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <br />
      <br />
      <h2 class="pt-6" style="color:white">Barang Hilang</h2>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel
          class="grey darken-3"
          v-for="item in content"
          :key="item"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="12" md="8">
                <h4 class="ml-2 text-light font-weight-bold">
                  {{ limitTitle(item.title) }}
                </h4>
                <p class="ml-2 text-light">
                  {{ item.created_at | moment("dddd, MMMM Do YYYY") }}
                </p>
              </v-col>
              <v-col cols="6" sm="6" md="4">
                <v-btn
                  x-small
                  class="ma-2 text-center"
                  color="white"
                  v-if="item.category == 'kehilangan'"
                >
                  Kehilangan
                </v-btn>
                <v-btn x-small class="ma-2 text-center" color="white" v-else>
                  Ditemukan
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="color:white">
            <v-row>
              <v-col cols="6" md="2">
                <v-img
                  v-bind:src="urlImg + '/info/' + item.photo"
                  :class="`rounded-lg`"
                  max-width="180"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <p><b>IG Pelapor</b> : {{ item.ig_pelapor }}</p>
                <span
                  ><b>Deskripsi : </b><br />
                  <p v-html="item.description"></p
                ></span>
              </v-col>
            </v-row>
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
import loadImg from "../../config.js";

export default {
  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      content: [],
      urlImg: loadImg,
    };
  },
  methods: {
    getContent() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/items")
        .then((response) => {
          this.content = response.data.datas;
          console.log(response);
        });
    },
    limitTitle(text) {
      return text.slice(0, 25) + " ...";
    },
  },
  mounted() {
    this.getContent();
  },
};
</script>

<style></style>
