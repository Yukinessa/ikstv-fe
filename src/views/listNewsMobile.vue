<template>
  <div class="grey darken-4 p-2">
    <v-container>
      <div class="mb-7">
        <NavbarMobile />
      </div>
      <div>
        <AdvertiseDiamond />
      </div>
      <b-row>
        <b-col cols="12">
          <h6 class="pt-8 pb-9" style="color:white; font-weight:bold">
            Berita Terkini
          </h6>
        </b-col>
        <b-col cols="12" style="margin-top: -2rem"> </b-col>
      </b-row>

      <b-list-group v-for="(item, i) in news.slice(0, loadMoreSize)" :key="i">
        <router-link :to="'/News/mobile/' + strReplace(item.title)">
          <b-list-group-item>
            <b-row>
              <b-col cols="8">
                <p class="font-weight-bold" style="font-size: .9rem">
                  {{ item.title }}
                </p>
                <b-badge
                  v-if="item.content_status == 1"
                  variant="danger"
                  style="font-size: 10px"
                >
                  Berita Sensitif
                </b-badge>
                <p style="font-size: 10px" class="text-muted mt-2">
                  {{ formatDate(item.created_at) }}
                </p>
              </b-col>
              <b-col cols="4" v-if="item.photo_mobile != null">
                <b-img
                  :src="urlImg + 'news/mobile/' + item.photo_mobile"
                  class="shadow"
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
          :loading="loading"
          :disabled="loading"
          color="error"
          v-if="loadMoreSize < totalSize"
          small
          @click="loadMore(5), (loader = 'loading')"
        >
          Muat Lebih
        </v-btn>
      </div>
    </v-container>
    <br />
    <div class="pb-3">
      <AdvertiseGold />
    </div>
    <br />
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
  data() {
    return {
      news: [],
      urlImg: loadImg,
      totalSize: 0,
      loadMoreSize: 5,
    };
  },
  components: {
    NavbarMobile,
    FooterMobile,
    AdvertiseDiamond,
    AdvertiseGold,
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 3000);

      this.loader = null;
    },
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
        .get(process.env.VUE_APP_IP_ADDRESS + "news")
        .then((response) => {
          this.news = response.data.datas;
          this.totalSize = this.news.length;
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
