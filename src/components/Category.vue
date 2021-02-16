<template>
  <div>
    <h2 style="color:white; text-align:center;">IksTV</h2>
    <v-container class="dark">
      <v-row>
        <v-flex xs12 md4 v-for="item in category" :key="item.id">
          <router-link :to="'/detail-category/' + item.id" tag="button">
            <a class="v-list-item v-list-item--link theme--dark" href="#">
              <v-img
                :class="`rounded-lg`"
                height="auto"
                width="350"
                class="mb-4"
                :src="urlImg + '/channel_category/' + item.url"
              ></v-img>
            </a>
          </router-link>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { loadImg } from "../../config";
export default {
  data() {
    return {
      category: [],
      urlImg: loadImg,
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

<style>
.v-btn:not(.v-btn--round).v-size--x-large {
  height: 100px;
}
.theme--dark.v-list-item:not(.v-list-item--active):not(.v-list-item--disabled) {
  color: #212121 !important;
}
</style>
