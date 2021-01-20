<template>
  <div class="grey darken-4">
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
        {{ content.created_at | moment("dddd, MMMM Do YYYY") }}
      </p>
      <img
        src="../assets/whatsapp.png"
        width="24"
        height="24"
        style="margin-right:1rem"
        @click="
          shareWA('http://192.168.1.6:8080/#/News/' + strReplace(content.title))
        "
      />
      <img
        src="../assets/facebook.png"
        width="27"
        height="27"
        style="margin-right:1rem"
        @click="
          shareFB('http://192.168.1.6:8080/#/News/' + strReplace(content.title))
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
      <div style="padding-top:1rem; padding-bottom:2rem">
        <v-img
          :class="`rounded-lg`"
          v-bind:src="urlImg + 'news/' + content.photo"
          width="1200"
          height="500px"
        ></v-img>
      </div>
      <p
        style="font-size:20px; color:white; text-align:justify; margin-bottom:12rem; margin-top:2rem"
      >
        {{ content.description }}
      </p>
      <v-container>
        <h3 style="color:white;">Berita untuk anda</h3>
        <v-row>
          <v-col v-for="item in news" :key="item.id" cols="12" sm="4">
            <v-card
              :class="`rounded-lg`"
              style="background-color:white !important"
              class="mx-auto"
              max-width="300"
            >
              <v-img
                :class="`rounded-lg`"
                class="white--text align-end"
                height="200px"
                v-bind:src="urlImg + 'news/' + item.photo"
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
              <v-card-text class="text--primary">
                {{ limitText(item.description) }}
              </v-card-text>
              <v-card-actions>
                <router-link
                  :to="'/News/' + strReplace(item.title)"
                  tag="button"
                  ><v-btn color="blue" text
                    >Baca Selanjutnya</v-btn
                  ></router-link
                >
              </v-card-actions>
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
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertiseGold from "../components/advertiseGold";
import AdvertiseDiamond from "../components/advertiseDiamond";
import loadImg from "../../config.js";

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
    };
  },
  mounted() {
    this.getContent();
    this.getNews();
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
  },
};
</script>

<style>
.title-news {
  padding-top: 140px;
}
</style>
