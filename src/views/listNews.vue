<template>
  <div class="grey darken-4">
    <v-container>
      <div class="mb-7">
        <Navbar />
      </div>
      <h2 class="pt-8 pb-9" style="color:white; font-weight:bold">
        Berita Terkini
      </h2>
      <b-row
        class="mb-5"
        v-for="(item, i) in news.slice(0, loadMoreLength)"
        :key="i"
      >
        <b-col md="3" class="py-5 px-3 d-flex justify-content-center">
          <b-img
            :class="`rounded-lg`"
            v-bind:src="urlImg + '/news/desktop/' + item.photo"
            fluid
            class="text-center w-100"
          ></b-img>
        </b-col>
        <b-col md="9" class="p-5">
          <h3 style="color:white; font-weight:bold">{{ item.title }}</h3>
          <p style="color:gray; font-size:14px">
            {{ item.created_at | moment("dddd, MMMM Do YYYY") }}
          </p>
          <p
            style="color:white; font-size:18px"
            v-html="limitText(item.description)"
          ></p>
          <router-link :to="'/News/' + strReplace(item.title)" tag="button">
            <b-button class="mr-auto" variant="outline-danger"
              >Baca Lengkap</b-button
            >
          </router-link>
        </b-col>
      </b-row>
      <div class="text-center mb-6">
        <b-btn
          variant="danger"
          v-if="loadMoreLength < totalSize"
          @click="loadMore(5)"
          >Muat Lebih</b-btn
        >
      </div>
      <Footer />
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
      news: [],
      urlImg: loadImg,
      totalSize: 0,
      loadMoreLength: 5,
    };
  },
  components: {
    Navbar,
    Footer,
  },
  mounted() {
    this.getNews();
  },
  methods: {
    limitText(text) {
      return text.slice(0, 180) + " ...";
    },
    getNews() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "news")
        .then((response) => {
          this.news = response.data.datas;
          this.totalSize = this.news.length;
        });
    },
    strReplace(str) {
      return str.replace(" ", "-");
    },
    loadMore(number) {
      return (this.loadMoreLength += number);
    },
  },
};
</script>

<style></style>
