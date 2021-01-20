<template>
  <div>
    <v-row justify="space-around">
      <v-col cols="auto">
        <v-dialog
          v-model="dialog"
          transition="dialog-bottom-transition"
          max-width="100%"
          height="1080px"
        >
          <template>
            <v-card>
              <v-toolbar class="red accent-4" dark>{{ videoTitle }}</v-toolbar>
              <v-card-actions class="justify-end"> </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      loker: [],
    };
  },
  methods: {
    closeVideo() {
      document.querySelector("#youtube-video").src = "";
    },
    getLoker() {
      this.axios
        .get(
          process.env.VUE_APP_IP_ADDRESS +
            "info/loker/" +
            this.$router.params.id
        )
        .then((response) => {
          this.loker = response.data.datas;
        });
    },
  },
};
</script>

<style></style>
