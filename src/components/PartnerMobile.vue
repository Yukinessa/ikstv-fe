<template>
  <v-container>
    <div>
      <h5 class="text-light font-weight-bold text-center">
        Mitra Kami
      </h5>
    </div>
    <v-row class="mt-2">
      <v-col md="4" v-for="item in partner.slice(0, 8)" :key="item.id">
        <img
          v-bind:src="urlImg + '/partner/' + item.logo"
          width="100%"
          height="auto"
          class="d-block mx-auto"
        />
      </v-col>
    </v-row>
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
