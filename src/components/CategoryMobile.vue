<template>
  <b-container>
    <h5 style="color:white;" class="font-weight-bold text-center mb-4">
      Channel Kami
    </h5>
    <splide :slides="category" :options="options" style="margin-left:-.5rem">
      <splide-slide v-for="item in category" :key="item.id">
        <router-link :to="'/detail-category/mobile/' + item.id">
          <b-img
            :src="urlImg + '/channel_category/' + item.url"
            style="width:100%; border-radius: 5px"
          >
          </b-img>
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
      category: [],

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
    this.getCategory();
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
