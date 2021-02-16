<template>
  <div>
    <splide :slides="items" :options="options">
      <splide-slide v-for="(item, i) in items" :key="i">
        <b-img
          v-if="item.photo != null"
          :src="urlImg + '/iklan/' + item.photo"
          :class="`rounded-lg`"
          class="shadow"
          style="width:280px; height: auto;"
        >
        </b-img>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
import { loadImg } from "../../config";
export default {
  data() {
    return {
      items: [],
      urlImg: loadImg,
      options: {
        type: "loop",
        perPage: 1,
        perMove: 1,
        pagination: false,
        gap: ".5rem",
        autoWidth: true,
        focus: "center",
        autoplay: true,
        padding: {
          right: "5rem",
          left: "5rem",
        },
        // start: 2,
        rewind: true,
        trimSpace: false,
      },
    };
  },

  mounted() {
    this.getAdvertise();
  },
  methods: {
    getAdvertise() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "iklan/")
        .then((response) => {
          this.items = response.data.diamond;
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
