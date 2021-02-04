<template>
  <div class="grey darken-4">
    <v-container>
      <div class="mb-7">
        <NavbarMobile />
      </div>
      <div>
        <AdvertiseDiamondMobile />
      </div>
      <b-row>
        <b-col cols="12">
          <h6 class="pt-8 pb-9" style="color:white; font-weight:bold">
            {{ categoryChannel.name }}
          </h6>
        </b-col>
        <b-col cols="12" style="margin-top: -2rem"> </b-col>
      </b-row>
      <b-row>
        <b-list-group
          v-for="(item, i) in content.slice(0, loadMoreSize)"
          :key="i"
        >
          <b-list-group-item>
            <b-row>
              <b-col cols="4" v-if="item.thumbnail != null">
                <b-img
                  :src="urlImg + '/channel/' + item.thumbnail"
                  class="shadow"
                  style="border-radius: 10px; width: 100%; max-height: 80%"
                >
                </b-img>
              </b-col>
              <b-col cols="4" v-else>
                <b-img
                  :src="require('../assets/empty-image.png')"
                  class="shadow"
                  style="border-radius: 10px; width: 100%; height: 65px"
                >
                </b-img>
              </b-col>
              <b-col cols="8">
                <p class="font-weight-bold" style="font-size: .9rem">
                  {{ item.title }}
                </p>

                <p style="font-size: 10px" class="text-muted">
                  {{ formatDate(item.created_at) }}
                </p>
                <v-btn small color="error" @click="goYoutube(item.youtube_url)">
                  <v-icon dark>
                    mdi-youtube
                  </v-icon>
                  <span class="ml-1">Youtube</span>
                </v-btn>
              </b-col>
            </b-row>
          </b-list-group-item>
        </b-list-group>
      </b-row>
      <div class="mt-5 mb-4">
        <AdvertiseGoldMobile />
      </div>
    </v-container>
    <br />
    <br />
    <FooterMobile />
  </div>
</template>

<script>
import NavbarMobile from "../components/NavbarMobile";
import AdvertiseDiamondMobile from "../components/advertiseDiamondMobile";
import AdvertiseGoldMobile from "../components/advertiseGoldMobile";
import FooterMobile from "../components/FooterMobile";
import loadImg from "../../config.js";
import moment from "moment";

export default {
  data() {
    return {
      content: [],
      categoryChannel: [],
      urlImg: loadImg,
      data: "",
      title: "",
      totalSize: 0,
      loadMoreSize: 5,
    };
  },
  components: {
    NavbarMobile,
    AdvertiseDiamondMobile,
    AdvertiseGoldMobile,
    FooterMobile,
  },
  mounted() {
    this.getContent();
    this.getChannelCategory();
    moment.locale("id");
  },
  methods: {
    goYoutube(link) {
      window.open(link, "_blank");
    },
    getContent() {
      this.axios
        .get(
          process.env.VUE_APP_IP_ADDRESS +
            "youtube/channel/playlist=" +
            this.$route.params.playlist
        )
        .then((response) => {
          this.content = response.data.datas;
        });
    },
    getChannelCategory() {
      this.axios
        .get(
          process.env.VUE_APP_IP_ADDRESS +
            "youtube/channel/category=" +
            this.$route.params.playlist
        )
        .then((response) => {
          this.categoryChannel = response.data.result;
        });
    },
    formatDate(strDate) {
      return moment(strDate).format("dddd, DD MMMM YYYY");
    },
  },
};
</script>

<style>
.list-group {
  border-radius: 5px;
  padding-bottom: 1rem;
}
.list-group-item {
  border: none;
  background-color: #212121;
  border-bottom: 0.2px solid rgba(255, 255, 255, 0.9);
  color: white;
}
</style>
