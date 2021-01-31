<template>
  <v-container>
    <div :class="`rounded-lg`">
      <v-carousel
        :class="`rounded-lg`"
        cycle
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="urlImg + '/iklan/' + item.photo"
        ></v-carousel-item>
      </v-carousel>
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
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.getAdvertise();
  },
  methods: {
    getAdvertise() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "advert/")
        .then((response) => {
          this.items = response.data.gold;
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
