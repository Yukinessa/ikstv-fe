<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <br />
      <br />
      <h1 class="pt-6" style="color:white">Sosial dan Donasi</h1>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel
          class="grey darken-3"
          v-for="item in sosial"
          :key="item"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="12" md="8">
                <h6 style="padding-left:1rem; color:white">
                  <b>{{ item.title }}</b>
                </h6>
                <p class="font-weight-bold text-light ml-3">
                  <v-icon style="color: #EF5350 !important">
                    mdi-instagram
                  </v-icon>
                  {{ item.ig_pelapor }} |
                  <v-icon style="color: #EF5350 !important">
                    mdi-cellphone-sound
                  </v-icon>
                  {{ item.phone }}
                </p>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="color:white; margin-left: 2rem">
            <b-row>
              <b-col sm="12">
                <v-img
                  v-bind:src="urlImg + '/sosial/' + item.photo"
                  :class="`rounded-lg`"
                  width="50%"
                  height="auto"
                  v-if="item.photo != null"
                />
                <v-img
                  :src="require('@/assets/lost-item.png')"
                  :class="`rounded-lg`"
                  width="50%"
                  height="30%"
                  v-else
                />

                <p v-html="item.description" class="ml-3"></p>
                <p class="text-light" style="margin-left: -.5rem">
                  <v-icon style="color: #EF5350 !important">
                    mdi-map-marker
                  </v-icon>
                  {{ item.location }}
                </p>
              </b-col>
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
      sosial: [],
      urlImg: loadImg,
    };
  },
  mounted() {
    this.getSosial();
  },
  methods: {
    getSosial() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/sosial")
        .then((response) => {
          this.sosial = response.data.datas;
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
