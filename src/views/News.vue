<template>
  <div class="grey darken-4" v-if="!$isMobile()">
    <v-container>
      <div style="padding-bottom:4rem">
        <Navbar />
      </div>
      <div style="padding-bottom:2rem">
        <AdvertiseDiamond />
      </div>
      <h1 class="pt-6" style="color:white">
        {{ content.title }}
      </h1>
      <p class="pb-1" style="color:grey">
        {{ convertDate(content.created_at) }}
      </p>
      <img
        src="../assets/whatsapp.png"
        width="24"
        height="24"
        style="margin-right:1rem"
        @click="shareWA(ip_address + '/News' + strReplace(content.title))"
      />
      <img
        src="../assets/facebook.png"
        width="27"
        height="27"
        style="margin-right:1rem"
        @click="shareFB(ip_address + '/News/' + strReplace(content.title))"
      />
      <img
        src="../assets/copy.png"
        width="27"
        height="27"
        style="margin-right:1rem"
        @click="
          shareUrl(ip_address + '/News/' + strReplace(content.title)),
            (snackbar = true)
        "
      />
      <div style="padding-top:1rem; padding-bottom:2rem">
        <v-img
          v-if="content.photo != null"
          :class="`rounded-lg`"
          v-bind:src="urlImg + '/news/' + content.photo"
          width="100%"
          height="auto"
        ></v-img>
        <v-img
          v-else
          :class="`rounded-lg`"
          src="../assets/img-news.png"
          width="1200"
          height="500px"
        ></v-img>
      </div>
      <p
        style="font-size:20px; color:white; text-align:justify; margin-bottom:12rem; margin-top:2rem"
        v-html="content.description"
      >
        {{ content.description }}
      </p>
      <v-container>
        <h4 class="text-light mb-3">Berita untuk anda</h4>
        <v-row style="margin-left: -2.5rem">
          <v-col
            v-for="item in news.slice(0, 3)"
            :key="item.id"
            cols="12"
            sm="4"
          >
            <v-card
              :class="`rounded-lg`"
              style="background-color:white !important"
              class="mx-auto"
              max-width="300"
            >
              <v-img
                :class="`rounded-lg`"
                class="white--text align-end"
                height="auto"
                v-bind:src="urlImg + '/news/' + item.photo"
                v-if="item.photo != null"
              >
                <v-card-title>
                  <v-img src="@/assets/label-tittle.png" height="40px">
                    <div class="my-2 ml-8 subtitle-2">
                      <span class="white--text" style="font-size:14px;">{{
                        limitTitle(item.title)
                      }}</span>
                    </div>
                  </v-img>
                </v-card-title>
              </v-img>
              <v-img
                :class="`rounded-lg`"
                class="white--text align-end"
                height="auto"
                :src="require('../assets/example-pict.png')"
                v-else
              >
                <v-card-title>
                  <v-img src="@/assets/label-tittle.png" height="40px">
                    <div class="my-2 ml-8 subtitle-2">
                      <span class="white--text" style="font-size:14px;">{{
                        limitTitle(item.title)
                      }}</span>
                    </div>
                  </v-img>
                </v-card-title>
              </v-img>
            </v-card>
          </v-col>
        </v-row>

        <v-snackbar v-model="snackbar"
          >Berhasil Dicopy Lurr
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"
              >Close</v-btn
            >
          </template>
        </v-snackbar>
      </v-container>
      <div style="padding-bottom:2rem; padding-top:2rem">
        <AdvertiseGold />
      </div>
    </v-container>
    <Footer />
  </div>
  <div v-else>
    {{
      this.$router.push({
        path: `/news/mobile/${this.$route.params.title}`,
      })
    }}
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertiseGold from "../components/advertiseGold";
import AdvertiseDiamond from "../components/advertiseDiamond";
import { loadImg, urlLink } from "../../config.js";
import moment from "moment";

export default {
  name: "News",
  components: {
    Navbar,
    Footer,
    AdvertiseGold,
    AdvertiseDiamond,
  },
  data() {
    return {
      newsId: "",
      content: {},
      news: [],
      snackbar: false,
      urlImg: loadImg,
      content_id: "",
      ip_address: urlLink,
    };
  },
  mounted() {
    this.getContent();
    setTimeout(this.getNews, 3000);
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
          this.content_id = response.data.datas.id;
        });
    },
    getNews() {
      this.axios
        .post(process.env.VUE_APP_IP_ADDRESS + "news/limit/three", {
          id: this.content_id,
        })
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
      return str.replaceAll(" ", "-");
    },
    strReturn(str) {
      return str.replaceAll("-", " ");
    },
    limitText(text) {
      return text.slice(0, 50) + " ...";
    },
    limitTitle(text) {
      return text.slice(0, 25) + " ...";
    },
    convertDate(strDate) {
      return moment(strDate).format("dddd, DD MMMM YYYY");
    },
  },
};
</script>

<style>
.title-news {
  padding-top: 140px;
}
</style>
