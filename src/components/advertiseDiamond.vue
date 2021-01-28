<template>
  <v-container>
    <div :class="`rounded-lg`">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, i) in items" :key="i">
          <b-img
            v-if="!$isMobile()"
            style="height:300px; width:100%"
            :class="`rounded-lg`"
            :src="urlImg + '/iklan/' + item.photo"
          ></b-img>
          <b-img
            v-else
            :class="`rounded-lg`"
            :src="urlImg + '/iklan/' + item.photo"
            width="500"
            height="125"
          >
          </b-img>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </v-container>
</template>

<script>
import loadImg from "../../config";
export default {
  data() {
    return {
      items: [],
      urlImg: loadImg,
      swiperOptions: {
        loop: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.getAdvertise();
    // this.$refs.mySwiper.swiper.autoplay.start();
  },
  methods: {
    getAdvertise() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "advert/")
        .then((response) => {
          this.items = response.data.diamond;
          console.log(this.items);
        });
    },
  },
};
</script>

<style>
.v-carousel {
  height: 300px !important ;
}
</style>
