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
        {{ formatDate(content.created_at) }}
      </p>
      <img
        src="../assets/whatsapp.png"
        width="24"
        height="24"
        style="margin-right:1rem"
        @click="shareWA(ip_address + '/kudu-reti/' + strReplace(content.title))"
      />
      <img
        src="../assets/facebook.png"
        width="27"
        height="27"
        style="margin-right:1rem"
        @click="shareFB(ip_address + '/kudu-reti/' + strReplace(content.title))"
      />
      <img
        src="../assets/copy.png"
        width="27"
        height="27"
        style="margin-right:1rem"
        @click="
          shareUrl(ip_address + '/kudu-reti/' + strReplace(content.title)),
            (snackbar = true)
        "
      />
      <div class="mt-4">
        <b-img
          :class="`rounded-lg`"
          class="d-block mx-auto mb-5"
          v-bind:src="urlImg + '/article/' + content.url"
          height="auto"
        ></b-img>
        <p
          class="mt-10 ml-3"
          style="font-size:20px; color:white; text-align:justify;"
          v-html="content.text"
        ></p>
        <p class="text-light font-weight-bold ml-3" style="cursor: pointer">
          Sumber : <a :href="content.source">{{ content.source }}</a>
        </p>
      </div>

      <v-container>
        <h4 class="text-light mb-3">Artikel Lainnya</h4>
        <v-row style="margin-left: -2.5rem">
          <v-col
            v-for="item in kuduReti.slice(0, 3)"
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
                v-bind:src="urlImg + '/article/' + item.url"
              >
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
        path: `/kudu-reti/mobile/${this.$route.params.title}`,
      })
    }}
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertiseDiamond from "../components/advertiseDiamond";
import AdvertiseGold from "../components/advertiseGold";
import { loadImg, urlLink } from "../../config.js";
import moment from "moment";

export default {
  name: "News",
  components: {
    Navbar,
    Footer,
    AdvertiseDiamond,
    AdvertiseGold,
  },
  data() {
    return {
      newsId: "",
      content: {},
      kuduReti: [],
      snackbar: false,
      urlImg: loadImg,
      content_id: "",
      ip_address: urlLink,
    };
  },
  mounted() {
    this.getContent();
    setTimeout(this.getArticle, 3000);
    moment.locale("id");
  },
  methods: {
    getContent() {
      this.axios
        .get(
          process.env.VUE_APP_IP_ADDRESS +
            "info/funfact/" +
            this.strReturn(this.$route.params.title)
        )
        .then((response) => {
          this.content = response.data.datas;
          this.content_id = response.data.datas;
        });
    },
    // get content of artikel kudu-reti
    getArticle() {
      this.axios
        .post(process.env.VUE_APP_IP_ADDRESS + "info/funfact/limit/three", {
          id: this.content_id,
        })
        .then((response) => {
          this.kuduReti = response.data.datas;
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
    formatDate(strDate) {
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
