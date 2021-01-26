<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000" height="500" persistent>
      <v-card class="overflow-hidden">
        <b-row>
          <b-col cols="3">
            <v-img
              max-height="150"
              max-width="250"
              :src="urlImg + '/loker/' + loker.url"
            />
            <p
              class="mt-3 text-center"
              style="font-size:18px; color:white; font-weight:bold"
            >
              {{ loker.title }}
            </p>
            <p class="text-center" style="color:white; font-size:13px">
              {{ loker.phone }}
            </p>
            <p class="text-center" style="color:white; font-size:13px">
              {{ loker.email }}
            </p>
            <p class="text-center" style="color:white; font-size:13px">
              {{ loker.address }}
            </p>
          </b-col>
          <b-col>
            <h4 class="pt-3" style="color:white; font-weight:bold">
              {{ loker.position }}
            </h4>
            <p style="color:white" v-html="loker.description"></p>
          </b-col>
        </b-row>
        <v-card-text> </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="handleDialog">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import loadImg from "../../config.js";
export default {
  data() {
    return {
      dialog: this.parentDialogLoker,
      loker: [],
      urlImg: loadImg,
      id: this.lokerID,
    };
  },
  props: {
    lokerID: Number,
    childLoadedLoker: Boolean,
    parentDialogLoker: Boolean,
  },
  mounted() {
    this.getLoker();
    console.log(this.id);
  },
  methods: {
    getLoker() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/loker/" + this.lokerID)
        .then((response) => {
          this.loker = response.data.datas;
          console.log(response);
        });
    },
    handleDialog() {
      this.$emit("update:childLoadedLoker", false);
      this.dialog = false;
    },
  },
};
</script>
