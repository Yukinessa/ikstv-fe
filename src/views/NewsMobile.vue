<template>
  <div class="grey darken-4">
    <v-container>
      <div style="padding-bottom:1rem">
        <NavbarMobile />
      </div>
      <div style="padding-bottom:1rem">
        <AdvertiseDiamondMobile />
      </div>
      <b-row>
        <b-col cols="12">
          <h5 class="pt-6" style="color:white">
            {{ content.title }}
          </h5>
          <p class="pb-1" style="color:grey; font-size: 12px">
            {{ convertDate(content.created_at) }}
          </p>
          <img
            src="../assets/whatsapp.png"
            width="24"
            height="24"
            style="margin-right:1rem"
            @click="
              shareWA(
                'http://192.168.1.6:8080/#/News/' + strReplace(content.title)
              )
            "
          />
          <img
            src="../assets/facebook.png"
            width="27"
            height="27"
            style="margin-right:1rem"
            @click="
              shareFB(
                'http://192.168.1.6:8080/#/News/' + strReplace(content.title)
              )
            "
          />
          <img
            src="../assets/url.png"
            width="27"
            height="27"
            style="margin-right:1rem"
            @click="
              shareUrl(
                'http://192.168.1.6:8080/#/News/' + strReplace(content.title)
              ),
                (snackbar = true)
            "
          />
          <div class="mt-5">
            <v-img
              :class="`rounded-lg`"
              v-bind:src="urlImg + '/news/' + content.photo"
              v-if="content.photo != null"
            ></v-img>
            <v-img
              :class="`rounded-lg`"
              :src="require('../assets/lost-item.png')"
              v-else
            ></v-img>
          </div>
          <p
            style="font-size:15px; color:white; text-align:justify; margin-top:2rem"
            v-html="content.description"
          ></p>
        </b-col>
      </b-row>

      <div style="padding-bottom:2rem; padding-top:2rem">
        <AdvertiseGoldMobile />
      </div>

      <b-row>
        <b-col cols="8">
          <span class="mt-7 font-weight-bold text-light">Berita lain</span>
        </b-col>
        <b-col cols="4">
          <router-link :to="'/'" style="color: #D50000">
            <span class="font-weight-bold text-right" style="font-size: 11px;">
              Lihat Semua
            </span>
          </router-link>
        </b-col>
        <b-col cols="12" style="margin-top: -1rem">
          <splide :slides="news" :options="options" class="mt-2 clearfix">
            <splide-slide v-for="item in news" :key="item.id">
              <router-link :to="'/News/mobile/' + strReplace(item.title)">
                <b-img
                  :src="urlImg + 'news/mobile/' + item.photo_mobile"
                  class="shadow"
                  style="border-radius: 10px; width: 100%; height: 60%"
                  v-if="item.photo_mobile != null"
                >
                </b-img>
                <img
                  src="@/assets/empty-image.png"
                  class="shadow"
                  style="border-radius: 10px; width: 100%; height: 60%"
                  v-else
                />
                <br />
                <p
                  class="font-weight-bold mt-3 text-light ml-1"
                  style="font-size: 14px"
                >
                  {{ limitTitle(item.title) }}
                </p>
                <b-badge
                  variant="danger"
                  v-if="item.content_status == 1"
                  style="font-size: 13px"
                  class="ml-1"
                >
                  Berita Sensitif
                </b-badge>
              </router-link>
            </splide-slide>
          </splide>
        </b-col>
      </b-row>

      <v-snackbar v-model="snackbar"
        >Berhasil Dicopy Lurr
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
      <div style="padding-bottom:2rem; padding-top:1rem">
        <AdvertiseSilverMobile />
      </div>
    </v-container>

    <FooterMobile />
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";
import AdvertiseGoldMobile from "../components/advertiseGoldMobile";
import AdvertiseDiamondMobile from "../components/advertiseDiamondMobile";
import loadImg from "../../config.js";
import moment from "moment";

export default {
  name: "News",
  components: {
    NavbarMobile,
    FooterMobile,
    AdvertiseGoldMobile,
    AdvertiseDiamondMobile,
  },
  data() {
    return {
      newsId: "",
      content: {},
      news: [],
      snackbar: false,
      urlImg: loadImg,
      options: {
        perPage: 1,
        pagination: false,
        gap: ".5rem",
        fixedWidth: "15rem",
        arrows: false,
      },
    };
  },
  mounted() {
    this.getContent();
    this.getNews();
    moment.locale("id");
  },
  methods: {
    getContent() {
      this.axios
        .get(
          process.env.VUE_APP_IP_ADDRESS +
            "news/details/" +
            this.strReturn(this.$route.params.title)
        )
        .then((response) => {
          this.content = response.data.datas;
        });
    },
    getNews() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "news/limit/three")
        .then((response) => {
          this.news = response.data.datas;
        });
    },
    shareWA(link) {
      window.open(
        "https://api.whatsapp.com/send?text=" + encodeURIComponent(link),
        "_blank"
      );
    },
    shareFB(link) {
      window.open(
        "https://www.facebook.com/sharer/sharer.php?u=" +
          encodeURIComponent(link),
        "_blank"
      );
    },
    shareUrl(link) {
      this.$copyText(link).then(function() {});
    },
    strReplace(str) {
      return str.replace(" ", "-");
    },
    strReturn(str) {
      return str.replace("-", " ");
    },
    limitText(text) {
      return text.slice(0, 50) + " ...";
    },
    limitTitle(text) {
      return text.slice(0, 25) + " ...";
    },
    convertDate(textDate) {
      return moment(textDate).format("dddd, DD MMMM YYYY");
    },
  },
};
</script>

<style>
.title-news {
  padding-top: 140px;
}
.clearfix {
  overflow: auto;
}
</style>
