<template>
  <b-container style="margin-top: -3rem">
    <b-row class="mt-5">
      <b-col cols="8">
        <h6 class="font-weight-bold text-light">Kudu Reti Lur</h6>
      </b-col>
      <b-col cols="4">
        <router-link :to="'/list-kudu-reti/mobile'" style="color: #D50000">
          <span class="font-weight-bold text-right" style="font-size: 11px;">
            Lihat Semua
          </span>
        </router-link>
      </b-col>
    </b-row>
    <splide
      :slides="kudureti"
      :options="options"
      style="margin-left: -.6rem; margin-top: 1rem"
    >
      <splide-slide v-for="item in kudureti.slice(0, 5)" :key="item.id">
        <router-link :to="'/kudu-reti/mobile/' + strReplace(item.title)">
          <b-img
            :src="urlImg + '/article/' + item.url"
            class="shadow"
            style="border-radius: 5px; width: 100%; height: auto"
            v-if="item.url_mobile != null"
          >
          </b-img>
          <img
            src="@/assets/empty-image.png"
            class="shadow"
            style="border-radius: 5px; width: 100%; height: 60%"
            v-else
          />
          <br />
        </router-link>
      </splide-slide>
    </splide>
  </b-container>
</template>
<script>
import { loadImg } from "../../config";
export default {
  data() {
    return {
      kudureti: [],
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
    this.getArticle();
  },
  methods: {
    limitText(text) {
      return text.slice(0, 50) + " ...";
    },
    limitTitle(text) {
      return text.slice(0, 26) + " ...";
    },
    getArticle() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/funfact")
        .then((response) => {
          this.kudureti = response.data.datas;
        });
    },
    strReplace(str) {
      return str.replaceAll(" ", "-");
    },
  },
};
</script>
