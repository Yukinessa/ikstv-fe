<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <AdvertiseDiamond />
      <h6 style="color:white;" class="font-weight-bold mt-3 p-1">
        Info Sosial
      </h6>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel
          style="background-color:red"
          v-for="item in sosials"
          :key="item.id"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="6" md="8" v-if="item.photo != null">
                <b-img
                  :src="urlImg + 'sosial/' + item.photo"
                  fluid
                  alt="Responsive image"
                  class="shadow"
                  style="height: 80px; border-radius: 5px"
                ></b-img>
              </v-col>
              <v-col cols="6" md="8" v-else>
                <b-img
                  :src="require('../assets/lost-item.png')"
                  fluid
                  alt="Responsive image"
                  class="shadow"
                  style="height: 80px; border-radius: 5px"
                ></b-img>
              </v-col>
              <v-col cols="6">
                <!-- judul sosial -->
                <p
                  class="text-light font-weight-bold"
                  style="font-size: 12px; line-height: 1rem"
                >
                  {{ item.title.toUpperCase() }}
                </p>
                <!-- tanggal publish -->
                <p style="font-size: 10px" class="text-light">
                  {{ convertDate(item.created_at) }}
                </p>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="color:white">
            <v-row style="margin-top: .5rem">
              <v-col cols="12" style="font-size: 13px" class="text-center">
                <span class="font-weight-bold">{{ item.ig_pelapor }}</span> |
                <span class="font-weight-bold">{{ item.phone }}</span>
              </v-col>
              <v-col cols="12">
                <div style="font-size: 14px">
                  <p class="font-weight-bold text-light">Detail</p>
                  <p class="text-justify ml-6" v-html="item.description"></p>
                  <span class="font-weight-bold text-light">Lokasi :</span>
                  <span class="ml-1">{{ item.location }}</span>
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
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertiseDiamond from "../components/advertiseDiamond";
import AdvertiseGold from "../components/advertiseGold";
import AdvertiseSilver from "../components/advertiseSilver";
import loadImg from "../../config.js";
import moment from "moment";
export default {
  data() {
    return {
      lokers: [],
      sosials: [],
      urlImg: loadImg,
    };
  },
  components: {
    Navbar,
    Footer,
    AdvertiseDiamond,
    AdvertiseGold,
    AdvertiseSilver,
  },
  mounted() {
    this.getLoker();
    this.getSosial();
  },
  methods: {
    getLoker() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/loker")
        .then((response) => {
          this.lokers = response.data.datas;
        });
    },
    getSosial() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/sosial")
        .then((response) => {
          this.sosials = response.data.datas;
        });
    },
    limitTitle(text) {
      return text.slice(0, 30) + " ...";
    },
    limitText(text) {
      return text.slice(0, 15) + " ...";
    },
    convertDate(textDate) {
      let now = moment();
      let date = moment(textDate);
      //   return moment(textDate).format("dddd, DD MMMM YYYY");
      let diff = now.diff(date, "minutes");
      if (diff >= 0 && diff < 60) {
        // return now.diff(date, "hours") + " jam yang lalu";
        return "Beberapa menit yang lalu";
      } else if (diff >= 60 && diff < 1440) {
        return now.diff(date, "hours") + " jam yang lalu";
      } else {
        return now.diff(date, "days") + " hari yang lalu";
      }
    },
  },
};
</script>
