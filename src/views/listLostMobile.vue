<template>
  <div class="grey darken-4">
    <v-container>
      <NavbarMobile />
      <AdvertiseDiamond />
      <h6 class="pt-6" style="color:white">Barang Hilang</h6>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel
          style="background-color:red"
          v-for="item in content"
          :key="item.id"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="12" md="8">
                <h5 class="ml-2 text-light font-weight-bold">
                  {{ item.title }}
                </h5>
                <p class="ml-2 text-light">
                  <!-- {{ item.created_at | moment("dddd, D MMMM YYYY") }} -->
                  {{ convertDate(item.created_at) }}
                </p>
              </v-col>
              <v-col cols="12">
                <v-btn
                  x-small
                  class="ma-2 text-center"
                  color="white"
                  v-if="item.category == 'kehilangan'"
                >
                  Kehilangan
                </v-btn>
                <v-btn x-small class="ma-2 text-center" color="white" v-else>
                  Penemuan
                </v-btn>
                <v-btn
                  x-small
                  class="ma-2 text-center text-light"
                  color="green"
                  v-if="item.status == 1"
                >
                  Ditemukan
                </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="color:white">
            <v-row style="font-size: 13px">
              <v-col cols="12" md="2">
                <v-img
                  v-bind:src="urlImg + '/info/' + item.photo"
                  :class="`rounded-lg`"
                  max-width="180"
                  class="mx-auto"
                ></v-img>
              </v-col>
              <v-col cols="12">
                <p class="text-center">
                  <b>{{ item.ig_pelapor }}</b> | <b>{{ item.contact }}</b>
                </p>
                <!-- <p><b>Kontak</b> : </p> -->
              </v-col>
            </v-row>
            <v-row style="margin-top: -2rem">
              <v-col cols="12">
                <div style="font-size: 14px">
                  <p class="text-justify">{{ item.description }}</p>
                </div>
              </v-col>
              <v-col cols="12" style="margin-top:-1rem">
                <div style="font-size: 14px">
                  <span class="font-weight-bold">Lokasi :</span>
                  <span class="ml-1">{{ item.location }}</span>
                </div>
                <br />
                <div style="font-size: 14px">
                  <p style="font-size: 13px">
                    <span v-if="item.status == 1"
                      ><span class="font-weight-bold">Ditemukan</span> -
                      {{ convertDate(item.updated_at) }}
                    </span>
                    <span v-else class="font-weight-bold">Belum ditemukan</span>
                  </p>
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <div style="margin-top: -8rem">
        <AdvertiseGold />
      </div>
      <br />
      <AdvertiseSilver />
      <br />
    </v-container>
    <br />
    <FooterMobile />
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";
import AdvertiseDiamond from "../components/advertiseDiamond";
import AdvertiseGold from "../components/advertiseGold";
import loadImg from "../../config.js";
import moment from "moment";

export default {
  components: {
    NavbarMobile,
    FooterMobile,
    AdvertiseDiamond,
    AdvertiseGold,
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
      return text.slice(0, 25) + " ...";
    },
    convertDate(textDate) {
      return moment(textDate).format("dddd, DD MMMM YYYY");
    },
  },
  mounted() {
    this.getContent();
    moment.locale("id");
  },
};
</script>

<style></style>
