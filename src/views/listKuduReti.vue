<template>
  <div class="grey darken-4">
    <v-container>
      <br />
      <br />
      <div class="mt-7">
        <Navbar />
      </div>
      <AdvertiseDiamond />
      <h2 class="pt-8 pb-9" style="color:white; font-weight:bold">
        Kudu Reti Lurr
      </h2>
      <b-row
        class="mb-5"
        v-for="(item, i) in article.slice(0, loadMoreSize)"
        :key="i"
      >
        <b-col md="3" class="py-5 px-3 d-flex justify-content-center">
          <b-img
            v-bind:src="urlImg + '/article/' + item.url"
            fluid
            class="text-center w-100"
            style="border-radius: 10px"
          ></b-img>
        </b-col>
        <b-col md="9" class="p-5">
          <h3 style="color:white; font-weight:bold">{{ item.title }}</h3>
          <p style="color:gray; font-size:14px">
            {{ item.created_at | moment("dddd, MMMM Do YYYY") }}
          </p>
          <p
            style="color:white; font-size:18px"
            v-html="limitText(item.text)"
          ></p>
          <router-link
            :to="'/kudu-reti/' + strReplace(item.title)"
            tag="button"
          >
            <b-button class="mr-auto" variant="outline-danger"
              >Baca Lengkap</b-button
            >
          </router-link>
        </b-col>
      </b-row>
      <div class="text-center mb-6">
        <b-btn
          variant="danger"
          v-if="loadMoreSize < totalSize"
          @click="loadMore(5)"
          >Muat Lebih</b-btn
        >
      </div>
      <AdvertiseGold />
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AdvertiseDiamond from "../components/advertiseDiamond";
import AdvertiseGold from "../components/advertiseGold";
import { loadImg } from "../../config.js";

export default {
  data() {
    return {
      article: [],
      urlImg: loadImg,
      totalSize: 0,
      loadMoreSize: 5,
    };
  },
  components: {
    Navbar,
    Footer,
    AdvertiseDiamond,
    AdvertiseGold,
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    limitText(text) {
      if (text.length > 180) {
        return text.slice(0, 180) + " ...";
      } else {
        return text;
      }
    },
    getArticle() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/funfact")
        .then((response) => {
          this.article = response.data.datas;
          this.totalSize = this.article.length;
        });
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

<style></style>
