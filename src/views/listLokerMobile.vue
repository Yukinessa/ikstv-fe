<template>
  <div class="grey darken-4">
    <v-container>
      <NavbarMobile />
      <AdvertiseDiamondMobile />
      <h6 class="pt-6" style="color:white">Lowongan Pekerjaan</h6>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel
          style="background-color: #212121"
          v-for="item in content.slice(0, loadMoreSize)"
          :key="item.id"
        >
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="6" md="8">
                <b-img
                  :src="urlImg + '/loker/' + item.url"
                  alt="Responsive image"
                  class="shadow"
                  style="width:100%; height: auto; border-radius: 5px"
                ></b-img>
              </v-col>
              <v-col cols="6">
                <!-- posisi pekerjaan -->
                <p style="font-size: 13px" class="text-light font-weight-bold">
                  {{ item.position }}
                </p>
                <!-- nama perusahaan -->
                <p class="text-light" style="font-size: 11px">
                  {{ item.title }}
                </p>
                <!-- gaji -->
                <p class="text-light font-weight-bold" style="font-size: 11px">
                  IDR {{ item.salary | numeral("0,0") }}
                </p>
                <p style="font-size: 10px" class="text-light">
                  {{ convertDate(item.created_at) }}
                </p>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="color:white">
            <v-row style="margin-top: -2rem">
              <v-col cols="12" class="mt-3">
                <div style="font-size: 14px">
                  <p class="font-weight-bold text-light">Deskripsi</p>
                  <p class="text-justify ml-6" v-html="item.description"></p>
                </div>
              </v-col>
              <v-col cols="12" style="margin-top:-1rem">
                <div style="font-size: 14px">
                  <p style="font-size: 13px">
                    <span class="font-weight-bold">Kontak </span> :
                    <span>{{ item.phone }}</span>
                  </p>
                </div>

                <div style="font-size: 14px; margin-top: -.5rem">
                  <span class="font-weight-bold">Email </span> :
                  <span>{{ item.email }}</span>
                </div>

                <div style="font-size: 14px;margin-top: .5rem">
                  <span class="font-weight-bold">Alamat </span> :
                  <span>{{ item.address }}</span>
                </div>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <div class="text-center">
        <v-btn
          color="error"
          v-if="loadMoreSize < totalSize"
          small
          @click="loadMore(5)"
        >
          Muat Lebih
        </v-btn>
      </div>
      <div class="mt-5 mb-5">
        <AdvertiseGoldMobile />
      </div>
      <br />
    </v-container>
    <br />
    <FooterMobile />
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";
import AdvertiseDiamondMobile from "../components/advertiseDiamondMobile";
import AdvertiseGoldMobile from "../components/advertiseGoldMobile";
import loadImg from "../../config.js";
import moment from "moment";

export default {
  components: {
    NavbarMobile,
    FooterMobile,
    AdvertiseDiamondMobile,
    AdvertiseGoldMobile,
  },
  data() {
    return {
      content: [],
      urlImg: loadImg,
      totalSize: 0,
      loadMoreSize: 5,
    };
  },
  methods: {
    getContent() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/loker")
        .then((response) => {
          this.content = response.data.datas;
          this.totalSize = this.content.length;
        });
    },
    limitTitle(text) {
      return text.slice(0, 25) + " ...";
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
    loadMore(number) {
      return (this.loadMoreSize += number);
    },
  },
  mounted() {
    this.getContent();
    moment.locale("id");
  },
};
</script>

<style>
.v-expansion-panels {
  padding-bottom: 2rem !important;
}
.v-icon {
  color: white !important;
}
</style>
