<template>
  <div class="text-center">
    <v-dialog v-model="dialogSosial" width="1000" height="500" persistent>
      <v-card class="overflow-hidden">
        <b-row class="p-5">
          <b-col cols="3">
            <v-img
              height="auto"
              width="100%"
              :src="urlImg + '/sosial/' + sosial.photo"
              style="border-radius: 5px"
              class="shadow"
              v-if="sosial.photo != null"
            />
            <img
              height="auto"
              width="100%"
              :src="require('../assets/lost-item.png')"
              style="border-radius: 5px"
              class="shadow"
              v-else
            />
            <p
              class="mt-3 text-center"
              style="font-size:18px; color:white; font-weight:bold"
            >
              {{ sosial.title }}
            </p>
            <p class="text-center" style="color:white; font-size:13px">
              {{ sosial.phone }}
            </p>
            <p class="text-center" style="color:white; font-size:13px">
              {{ sosial.email }}
            </p>
            <p class="text-center" style="color:white; font-size:13px">
              {{ sosial.location }}
            </p>
            <p class="text-center" style="color:white; font-size:13px">
              {{ sosial.ig_pelapor }}
            </p>
          </b-col>
          <b-col>
            <p style="color:white" v-html="sosial.description"></p>
          </b-col>
        </b-row>
        <v-card-text> </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="handleDialog">
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
      dialogSosial: this.parentDialogSosial,
      sosial: [],
      urlImg: loadImg,
      id: this.sosialID,
    };
  },
  props: {
    sosialID: Number,
    childLoadedSosial: Boolean,
    parentDialogSosial: Boolean,
  },
  mounted() {
    this.getSosial();
    console.log(this.id);
  },
  methods: {
    getSosial() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/sosial/" + this.id)
        .then((response) => {
          this.sosial = response.data.datas;
          console.log(response);
        });
    },
    handleDialog() {
      this.$emit("update:childLoadedSosial", false);
      this.dialog = false;
    },
  },
};
</script>
