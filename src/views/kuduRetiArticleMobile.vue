<template>
  <div class="grey darken-4" v-if="$isMobile()">
    <v-container>
      <div style="padding-bottom:2rem">
        <NavbarMobile />
      </div>
      <div>
        <AdvertiseDiamondMobile />
      </div>
      <h5 class="pt-6" style="color:white">
        {{ content.title }}
      </h5>
      <p class="pb-1 text-muted" style="font-size: 12px">
        {{ formatDate(content.created_at) }}
      </p>
      <img
        src="../assets/whatsapp.png"
        width="24"
        height="24"
        style="margin-right:1rem"
        @click="
          shareWA(ip_address + '/kudu-reti/mobile/' + strReplace(content.title))
        "
      />
      <img
        src="../assets/facebook.png"
        width="27"
        height="27"
        style="margin-right:1rem"
        @click="
          shareFB(ip_address + '/kudu-reti/mobile/' + strReplace(content.title))
        "
      />
      <img
        src="../assets/copy.png"
        width="27"
        height="27"
        style="margin-right:1rem"
        @click="
          shareUrl(
            ip_address + '/kudu-reti/mobile/' + strReplace(content.title)
          ),
            (snackbar = true)
        "
      />
      <div>
        <b-img
          :class="`rounded-lg`"
          :src="urlImg + '/article/' + content.url"
          class="d-block mx-auto mt-5 img-fluid"
        ></b-img>
      </div>
      <p class="text-light text-justify mt-5" v-html="content.text"></p>

      <b-row class="mt-5">
        <b-col cols="8">
          <span class="mt-7 font-weight-bold text-light">Kudu Reti lain</span>
        </b-col>
        <b-col cols="4">
          <router-link :to="'/list-kudu-reti/mobile'" style="color: #D50000">
            <span class="font-weight-bold text-right" style="font-size: 11px;">
              Lihat Semua
            </span>
          </router-link>
        </b-col>
        <b-col cols="12" style="margin-top: -1rem">
          <splide :slides="kuduReti" :options="options" class="mt-2 clearfix">
            <splide-slide v-for="item in kuduReti" :key="item.id">
              <router-link :to="'/kudu-reti/mobile/' + strReplace(item.title)">
                <b-img
                  :src="urlImg + '/article/' + item.url"
                  class="shadow"
                  style="border-radius: 10px; width: 100%; height: auto"
                  v-if="item.url_mobile != null"
                >
                </b-img>
                <img
                  src="@/assets/empty-image.png"
                  class="shadow"
                  style="border-radius: 10px; width: 100%; height: 60%"
                  v-else
                />
                <br />
              </router-link>
            </splide-slide>
          </splide>
        </b-col>
      </b-row>
      <div class="mb-5 mt-5">
        <AdvertiseGoldMobile />
      </div>
      <v-snackbar v-model="snackbar"
        >Berhasil Dicopy Lurr
        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text v-bind="attrs" @click="snackbar = false"
            >Close</v-btn
          >
        </template>
      </v-snackbar>
    </v-container>
    <br />
    <br />
    <FooterMobile />
  </div>
  <div v-else>
    {{
      this.$router.push({
        path: `/kudu-reti/${this.$route.params.title}`,
      })
    }}
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile";
import FooterMobile from "../components/FooterMobile";
import AdvertiseDiamondMobile from "../components/advertiseDiamondMobile";
import AdvertiseGoldMobile from "../components/advertiseGoldMobile";
import { loadImg, urlLink } from "../../config.js";
import moment from "moment";

export default {
  name: "News",
  components: {
    NavbarMobile,
    FooterMobile,
    AdvertiseDiamondMobile,
    AdvertiseGoldMobile,
  },
  data() {
    return {
      newsId: "",
      content: {},
      content_id: "",
      kuduReti: [],
      snackbar: false,
      urlImg: loadImg,
      ip_address: urlLink,
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
    setTimeout(this.getArticle, 3000);
    moment.locale("id");
    console.log(this.urlDesktop);
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
          this.content_id = response.data.datas.id;
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
    limitText(text) {
      return text.slice(0, 50) + " ...";
    },
    limitTitle(text) {
      return text.slice(0, 25) + " ...";
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
