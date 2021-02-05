<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <h1 style="color:white; padding-top:5rem; padding-bottom:1rem">
        {{ categoryChannel.name }}
      </h1>
      <div id="nav" style="text-align: center; color white"></div>
      <div v-if="content.length == 0" class="mt-5">
        <v-img
          style="margin-left:3rem; margin-top:1rem; margin-bottom:1rem"
          :src="require('../assets/icon.png')"
          :class="`rounded-lg`"
          height="auto"
          class="d-block mx-auto"
          width="500px"
        ></v-img>
        <h4 class="text-light text-center">Urung Ana Konten Lur...</h4>
      </div>
      <div v-else>
        <div
          style="margin-top:1rem; padding-bottom:1rem"
          v-for="(item, i) in content"
          :key="i"
        >
          <v-card>
            <v-row>
              <v-col cols="3">
                <v-img
                  style="margin-left:3rem; margin-top:1rem; margin-bottom:1rem"
                  :src="urlImg + '/channel/' + item.thumbnail"
                  :class="`rounded-lg`"
                  height="auto"
                  width="100%"
                ></v-img>
              </v-col>
              <v-col cols="9">
                <div class="ml-10">
                  <h4 style="margin-top:1rem; color:white">
                    {{ item.title }}
                  </h4>
                  <p style="font-size:12px; color:grey">
                    {{ convertDate(item.created_at) }}
                  </p>

                  <v-btn
                    small
                    color="error"
                    @click="goYoutube(item.youtube_url)"
                  >
                    <v-icon dark>
                      mdi-youtube
                    </v-icon>
                    <span class="ml-1">Youtube</span>
                  </v-btn>
                </div>
              </v-col>
            </v-row>
          </v-card>
        </div>
      </div>
      <div style="padding-top:6rem">
        <Footer />
      </div>
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import loadImg from "../../config.js";
import moment from "moment";

export default {
  data() {
    return {
      content: [],
      categoryChannel: [],
      urlImg: loadImg,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    this.getContent();
    this.getChannelCategory();
    moment.locale("id");
  },
  methods: {
    limitText(text) {
      return text.slice(0, 134) + " ...";
    },
    goYoutube(link) {
      window.open(link, "_blank");
    },
    getContent() {
      this.axios
        .get(
          process.env.VUE_APP_IP_ADDRESS +
            "youtube/channel/playlist=" +
            this.$route.params.playlist
        )
        .then((response) => {
          this.content = response.data.datas;
          console.log(response);
        });
    },
    getChannelCategory() {
      this.axios
        .get(
          process.env.VUE_APP_IP_ADDRESS +
            "youtube/channel/category=" +
            this.$route.params.playlist
        )
        .then((response) => {
          this.categoryChannel = response.data.result;
        });
    },
    convertDate(strDate) {
      return moment(strDate).format("dddd, DD MMMM YYYY");
    },
  },
};
</script>

<style></style>
