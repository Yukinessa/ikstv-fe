<template>
  <div class="mt-5">
    <b-row class="mt-5">
      <b-col cols="8">
        <h6 class="font-weight-bold ml-2 text-light">Berita Terkini</h6>
      </b-col>
      <b-col cols="4">
        <router-link :to="'/list-news/mobile'" style="color: #D50000">
          <span class="font-weight-bold text-right" style="font-size: 11px;">
            Lihat Semua
          </span>
        </router-link>
      </b-col>
    </b-row>

    <splide :slides="news" :options="options" style="margin-top: .5rem">
      <splide-slide v-for="item in news" :key="item.id">
        <router-link :to="'/News/mobile/' + strReplace(item.title)">
          <v-img
            v-if="item.photo != null"
            class="dark--text align-end"
            :class="`rounded-lg`"
            height="auto"
            width="100%"
            v-bind:src="urlImg + '/news/' + item.photo"
          >
            <v-chip
              class="ma-2"
              color="red darken-3"
              label
              text-color="white"
              style="margin-top: -25rem !important; margin-left: 11.5rem !important"
              v-if="item.content_status == 1"
            >
              <v-icon center>
                mdi-eye-off-outline
              </v-icon>
            </v-chip>
          </v-img>
          <v-img
            src="@/assets/empty-image.png"
            class="shadow"
            style="border-radius: 10px; width: 100%; height: 60%"
            v-else
          >
            <v-chip
              class="ma-2"
              color="red darken-3"
              label
              text-color="white"
              style="margin-left: 11.5rem !important"
              v-if="item.content_status == 1"
            >
              <v-icon center>
                mdi-eye-off-outline
              </v-icon>
            </v-chip>
          </v-img>
          <br />
          <p class="font-weight-bold text-light ml-1" style="font-size: 14px">
            {{ limitTitle(item.title) }}
          </p>
        </router-link>
      </splide-slide>
    </splide>
  </div>
</template>
<script>
import { loadImg } from "../../config.js";
export default {
  data() {
    return {
      news: [],
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
    this.getNews();
  },
  methods: {
    strReplace(str) {
      return str.replaceAll(" ", "-");
    },
    limitText(text) {
      return text.slice(0, 50) + " ...";
    },
    limitTitle(text) {
      return text.slice(0, 30) + " ...";
    },
    getNews() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "news")
        .then((response) => {
          this.news = response.data.datas;
        });
    },
  },
};
</script>
