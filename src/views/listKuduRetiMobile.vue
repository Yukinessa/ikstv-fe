<template>
  <div class="grey darken-4 p-2">
    <v-container>
      <div class="mb-7">
        <NavbarMobile />
      </div>
      <div>
        <AdvertiseDiamondMobile />
      </div>
      <b-row>
        <b-col cols="12">
          <h6 class="pt-8 pb-9" style="color:white; font-weight:bold">
            Kudu Reti
          </h6>
        </b-col>
        <b-col cols="12" style="margin-top: -2rem"> </b-col>
      </b-row>

      <b-list-group
        v-for="(item, i) in articles.slice(0, loadMoreSize)"
        :key="i"
      >
        <router-link :to="'/kudu-reti/mobile/' + strReplace(item.title)">
          <b-list-group-item>
            <b-row>
              <b-col cols="8">
                <p class="font-weight-bold" style="font-size: .9rem">
                  {{ item.title }}
                </p>

                <p style="font-size: 10px" class="text-muted mt-2">
                  {{ formatDate(item.created_at) }}
                </p>
              </b-col>
              <b-col cols="4" v-if="item.url_mobile != null">
                <b-img
                  :src="urlImg + '/article/' + item.url"
                  class="shadow"
                  height="auto"
                  width="100%"
                  style="border-radius: 10px; width: 100%; max-height: 80%"
                >
                </b-img>
              </b-col>
              <b-col cols="4" v-else>
                <b-img
                  :src="require('../assets/empty-image.png')"
                  class="shadow"
                  style="border-radius: 10px; width: 100%; height: 65px"
                >
                </b-img>
              </b-col>
            </b-row>
          </b-list-group-item>
        </router-link>
      </b-list-group>
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
      <div class="mt-5">
        <AdvertiseGoldMobile />
      </div>
    </v-container>
    <br />

    <br />
    <br />
    <FooterMobile />
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";
import AdvertiseDiamondMobile from "../components/advertiseDiamondMobile";
import AdvertiseGoldMobile from "../components/advertiseGoldMobile";
import { loadImg } from "../../config.js";
import moment from "moment";
export default {
  data() {
    return {
      articles: [],
      urlImg: loadImg,
      totalSize: 0,
      loadMoreSize: 5,
    };
  },
  components: {
    NavbarMobile,
    FooterMobile,
    AdvertiseDiamondMobile,
    AdvertiseGoldMobile,
  },

  mounted() {
    this.getAllNews();
    moment.locale("id");
  },
  methods: {
    limitText(text) {
      return text.slice(0, 180) + " ...";
    },
    getAllNews() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/funfact")
        .then((response) => {
          this.articles = response.data.datas;

          this.totalSize = this.articles.length;
        });
    },
    formatDate(strDate) {
      return moment(strDate).format("dddd, DD MMMM YYYY");
    },
    strReplace(str) {
      return str.replaceAll(" ", "-");
    },
    loadMore(number) {
      return (this.loadMoreSize += number);
    },
  },
};
</script>

<style>
.list-group {
  border-radius: 5px;
  padding-bottom: 1rem;
}
.list-group-item {
  border: none;
  background-color: #212121;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.9);
  color: white;
}
</style>
