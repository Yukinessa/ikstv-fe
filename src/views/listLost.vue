<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <br />
      <br />
      <AdvertiseDiamond class="mb-3 mt-5" />
      <h2 class="pt-6" style="color:white">Barang Hilang</h2>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel
          class="grey darken-3"
          v-for="item in content"
          :key="item.id"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="12" md="8">
                <h4 class="ml-2 text-light font-weight-bold">
                  {{ limitTitle(item.title) }}
                </h4>
                <p class="ml-2 text-light">
                  {{ convertDate(item.created_at) }}
                </p>
              </v-col>
              <v-col cols="6" sm="6" md="4">
                <v-btn
                  x-small
                  class="ma-2 text-center"
                  color="error"
                  v-if="item.category == 'kehilangan'"
                >
                  Kehilangan
                </v-btn>
                <v-btn x-small class="ma-2 text-center" color="info" v-else>
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
      <AdvertiseGold class="mb-4" />
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import AdvertiseDiamond from "../components/advertiseDiamond";
import AdvertiseGold from "../components/advertiseGold";
import Footer from "../components/Footer";
import { loadImg } from "../../config.js";
import moment from "moment";

export default {
  components: {
    Navbar,
    Footer,
    AdvertiseDiamond,
    AdvertiseGold,
  },
  mounted() {
    this.getContent();
    moment.locale("id");
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
        });
    },
    limitTitle(text) {
      if (text.length > 25) {
        return text.slice(0, 25) + " ...";
      } else {
        return text;
      }
    },
    convertDate(strDate) {
      return moment(strDate).format("dddd, DD MMMM YYYY");
    },
  },
};
</script>

<style></style>
