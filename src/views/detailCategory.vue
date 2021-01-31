<template>
  <div class="grey darken-4">
    <v-container>
      <Navbar />
      <h1 style="color:white; padding-top:5rem; padding-bottom:1rem">
        {{ categoryChannel.name }}
      </h1>
      <div id="nav" style="text-align: center; color white"></div>
      <div
        style="margin-top:1rem; padding-bottom:1rem"
        v-for="(item, i) in content"
        :key="i"
      >
        <v-card>
          <v-row>
            <v-col cols="4" md="3">
              <v-img
                style="margin-left:3rem; margin-top:1rem; margin-bottom:1rem"
                :src="urlImg + 'channel/' + item.thumbnail"
                :class="`rounded-lg`"
                max-width="180"
              ></v-img>
            </v-col>
            <v-col cols="8" md="6">
              <h2 style="margin-top:1rem; color:white">
                {{ item.title }}
              </h2>
              <p style="font-size:12px; color:grey">
                {{ item.created_at | moment("dddd, MMMM Do YYYY") }}
              </p>
              <p style="color:white; text-align:justify">
                {{ limitText(item.description) }}
              </p>
              <v-btn small color="error" @click="goYoutube(item.youtube_url)">
                <v-icon dark>
                  mdi-youtube
                </v-icon>
                <span class="ml-1">Youtube</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
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
  },
  mounted() {
    this.getContent();
    this.getChannelCategory();
    console.log(this.$route.params.playlist);
  },
};
</script>

<style></style>
