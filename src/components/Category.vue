<template>
  <div v-if="!$isMobile()">
    <h2 style="color:white; text-align:center;">IksTV</h2>
    <v-container class="dark">
      <v-row>
        <v-flex xs12 md4 v-for="item in category" :key="item.id">
          <router-link :to="'/detail-category/' + item.id" tag="button">
            <a class="v-list-item v-list-item--link theme--dark" href="#">
              <v-img
                :class="`rounded-lg`"
                max-height="140"
                max-width="330"
                :src="urlImg + 'channel_category/' + item.url"
              ></v-img>
            </a>
          </router-link>
        </v-flex>
      </v-row>
    </v-container>
  </div>
  <div v-else>
    <b-container>
      <h4 style="color:white;" class="font-weight-bold text-center mb-4">
        Channel Kami
      </h4>
      <b-row>
        <swiper ref="mySwiper" :options="swiperOptions">
          <swiper-slide v-for="item in category" :key="item.id">
            <router-link :to="'/detail-category/' + item.id" tag="button">
              <a class="v-list-item v-list-item--link theme--dark" href="#">
                <v-img
                  :class="`rounded-lg`"
                  max-width="50%"
                  :src="urlImg + 'channel_category/' + item.url"
                ></v-img>
              </a>
            </router-link>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import loadImg from "../../config";
export default {
  data() {
    return {
      category: [],
      urlImg: loadImg,
      swiperOptions: {
        slidesPerView: 1,
        spaceBetween: 3,
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.getCategory();
    this.swiper.slideTo(1, 1000, false);
  },
  methods: {
    getCategory() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "youtube/channel/")
        .then((response) => {
          this.category = response.data.datas;
        });
    },
  },
};
</script>

<style>
.v-btn:not(.v-btn--round).v-size--x-large {
  height: 100px;
}
</style>
