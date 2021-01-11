<template>
  <div>
    <h2 style="color:white; text-align:center;">IksTV</h2>
    <v-container class="dark">
      <v-row>
        <v-flex xs12 md4 v-for="item in category" :key="item">
          <router-link :to="'/detail-category/' + item.id" tag="button">
            <a class="v-list-item v-list-item--link theme--dark" href="#">
              <v-img
                v-if="item.id == 'PLa4W9TpKyh9eFj8vFvQg6bTlTdNKchZ3G'"
                :class="`rounded-lg`"
                max-height="140"
                max-width="330"
                src="@/assets/Entertainment-1.png"
              ></v-img>
              <v-img
                v-else-if="item.id == 'PLa4W9TpKyh9cAvt_z9yvbfj7FxqvYcy17'"
                :class="`rounded-lg`"
                max-height="140"
                max-width="330"
                src="@/assets/socom.png"
              ></v-img>
            </a>
          </router-link>
        </v-flex>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [],
    };
  },
  mounted() {
    this.getCategory();
  },
  methods: {
    getCategory() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "youtube/channel/ikstv/")
        .then((response) => {
          this.category = response.data.datas.results;
        });
    },
  },
};
</script>

<style>
.v-btn:not(.v-btn--round).v-size--x-large {
  height: 100px;
}
</style>
