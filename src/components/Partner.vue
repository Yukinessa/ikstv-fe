<template>
  <v-container>
    <div>
      <h2 class="mb-8" style="color:white; text-align:center;">
        Mitra Kami
      </h2>
    </div>
    <b-row>
      <b-col cols="2" v-for="item in partner.slice(0, 8)" :key="item.id">
        <v-img
          :src="urlImg + '/partner/' + item.logo"
          width="100px"
          height="auto"
        >
        </v-img>
      </b-col>
    </b-row>
  </v-container>
</template>

<script>
import loadImg from "../../config";
export default {
  data() {
    return {
      partner: [],
      urlImg: loadImg,
    };
  },
  mounted() {
    this.getPartner();
  },
  methods: {
    getPartner() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "partner")
        .then((response) => {
          this.partner = response.data.datas;
        });
    },
  },
};
</script>

<style></style>
