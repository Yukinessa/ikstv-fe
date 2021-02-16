<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <br />
      <br />
      <AdvertiseDiamond class="mt-5" />
      <h2 class="pt-6" style="color:white">Lowongan Pekerjaan</h2>
      <v-expansion-panels style="padding-bottom:2rem; padding-top:1rem">
        <v-expansion-panel
          class="grey darken-3"
          v-for="(item, i) in loker"
          :key="i"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="12">
                <h5 style="padding-left:1rem; color:white;">
                  <b>{{ item.position }}</b>
                </h5>
                <p
                  style="padding-left:1rem; font-size: 13px"
                  class="text-light font-weight-bold"
                >
                  <v-icon style="color: #EF5350 !important">
                    mdi-home-circle-outline
                  </v-icon>
                  {{ item.title }} |
                  <v-icon style="color: #EF5350 !important">
                    mdi-currency-usd
                  </v-icon>
                  IDR {{ item.salary | numeral(",") }}
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
                <p class="mb-6 text-light text-center" style="font-size:15px">
                  {{ item.address }}
                </p>
              </b-col>
              <b-col sm="9">
                <p class="font-weight-bold" style="margin-left: -1rem">
                  Job Description :
                </p>
                <p v-html="item.description"></p>
              </b-col>
            </b-row>
            <b-row>
              <b-col sm="12">
                <p class="text-light ml-4">
                  <v-icon style="color: #EF5350 !important">
                    mdi-email-plus
                  </v-icon>
                  {{ item.email }}
                </p>
                <p class="text-light ml-4">
                  <v-icon style="color: #EF5350 !important">
                    mdi-phone-forward
                  </v-icon>
                  {{ item.phone }}
                </p>
              </b-col>
            </b-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <AdvertiseGold class="mb-5" />
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertiseDiamond from "../components/advertiseDiamond";
import AdvertiseGold from "../components/advertiseGold";
import { loadImg } from "../../config";

export default {
  components: {
    Navbar,
    Footer,
    AdvertiseDiamond,
    AdvertiseGold,
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
