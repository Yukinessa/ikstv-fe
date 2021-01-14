<template>
  <v-container v-if="!$isMobile()">
    <div :class="`rounded-lg`">
      <!-- <img v-bind:src="logo" /> -->
      <v-carousel
        :class="`rounded-lg`"
        cycle
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </div>
  </v-container>
  <v-container v-else>
    <b-row>
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, i) in items" :key="i" :src="item.src">
          <v-img
            :class="`rounded-lg`"
            :src="item.src"
            width="500"
            height="125"
          ></v-img>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </b-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("../assets/Advertise.jpg"),
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
      swiperOptions: {
        slidesPerView: 1,
        // spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
        },
        // Some Swiper option/callback...
      },
      computed: {
        swiper() {
          return this.$refs.mySwiper.$swiper;
        },
      },
      mounted() {
        this.swiper.slideTo(1, 1000, false);
      },
    };
  },
};
</script>

<style>
.v-carousel {
  height: 300px !important ;
}
</style>
