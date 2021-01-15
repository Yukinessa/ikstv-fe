<template>
  <v-container>
    <div>
      <h2 style="color:white; text-align:center;">
        Our Partner
      </h2>
    </div>
    <v-row>
      <v-col md="3" v-for="item in partner.slice(0, 8)" :key="item.id">
        <img
          v-bind:src="urlImg + '/partner/' + item.logo"
          width="100"
          height="100"
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

<style></style>
