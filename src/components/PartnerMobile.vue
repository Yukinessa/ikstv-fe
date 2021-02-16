<template>
  <v-container>
    <div>
      <h5 class="text-light font-weight-bold text-center">
        Mitra Kami
      </h5>
    </div>
    <b-row align-v="center">
      <b-col cols="4" v-for="item in partner.slice(0, 8)" :key="item.id">
        <b-img
          v-bind:src="urlImg + '/partner/' + item.logo"
          width="60"
          height="auto"
          class="d-block mx-auto"
        >
        </b-img>
      </b-col>
    </b-row>
  </v-container>
</template>
<script>
import { loadImg } from "../../config";
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
