<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000" height="500" persistent>
      <v-card class="overflow-hidden">
        <v-btn icon dark @click="handleDialog" class="float-right">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <b-row class="p-3 mt-1">
          <b-col cols="3">
            <v-img
              height="auto"
              max-width="250"
              :src="urlImg + '/loker/' + loker.url"
              style="border-radius: 5px;"
              class="shadow"
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
              {{ loker.position }} ( Rp. {{ loker.salary | numeral(",") }} )
            </h4>
            <p style="color:white" class="ml-4" v-html="loker.description"></p>
          </b-col>
        </b-row>
        <v-card-text> </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="handleDialog">
            Tutup
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
