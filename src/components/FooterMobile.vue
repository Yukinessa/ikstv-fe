<template>
  <v-bottom-navigation fixed background-color="grey darken-4">
    <v-btn value="home" :to="'/'">
      <span style="color: white">Beranda</span>

      <v-icon small style="color: white">mdi-home</v-icon>
    </v-btn>
    <v-btn :to="'/list-news/mobile'">
      <span style="color: white">Berita</span>

      <v-icon small style="color: white">mdi-newspaper-variant-outline</v-icon>
    </v-btn>

    <v-btn :to="'/loker'">
      <span style="color: white">Loker</span>

      <v-icon small style="color: white"
        >mdi-clipboard-text-search-outline</v-icon
      >
    </v-btn>

    <v-btn :to="'/list-sosial/mobile'">
      <span style="color: white">Sosial</span>

      <v-icon small style="color: white">mdi-account-group</v-icon>
    </v-btn>
    <!-- <router-link :to="'/list-lost/mobile'" tag="button"> -->
    <v-btn :to="'/list-lost/mobile'">
      <span style="color: white">Kehilangan</span>
      <v-icon small style="color: white">mdi-chat-question-outline</v-icon>
    </v-btn>
    <!-- </router-link> -->
  </v-bottom-navigation>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      year: moment().format("YYYY"),
    };
  },
};
</script>
<style>
.v-item-group.v-bottom-navigation .v-btn {
  min-width: 30px !important;
}
</style>
