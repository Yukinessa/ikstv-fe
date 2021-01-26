<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="1000" height="500" persistent>
      <v-card class="overflow-hidden">
        <v-card-title class="red darken-4 text-light">
          <img style="float:left" src="@/assets/logo-white.png" width="50" />
          PERIKLANAN
        </v-card-title>
        <b-row>
          <b-col class="ml-8" cols="7">
            <h4 class="mt-3 mb-5 ml-auto text-light">
              <b>HALLO KAK!!</b>
            </h4>
            <p class="mt-3 text-light">
              <b>
                KAMI LAGI ADA PROMO KHUSUS PSBB NIH !!
              </b>
            </p>
            <p class="mt-3  text-light"><b>KHUSUS UNTUK PARA PENGUSAHA</b></p>
            <p class="mt-3 text-light">400 RIBU</p>
            <p class="mt-3 text-light">dapatkan 1 FEED dan 3 SNAPGRAM/STORY</p>
            <p class="mt-3 text-light">Maximal booking sampai</p>
            <p class="mt-3 text-light">* KAMIS 21 JANUARI 16.00 !!*</p>
            <p class="mt-3 text-light">SELEBIHNYA HARGA NORMAL !</p>
            <p class="mt-3 text-light">yuk booking sekarang !</p>
            <p class="mt-3 text-light">slot terbataaas !</p>
            <p class="mt-3 text-light">
              ** bebas pilih waktu upload suka- suka kalian!
            </p>
          </b-col>
        </b-row>
        <b-btn style="text-align:center">Kontak Kami</b-btn>
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
export default {
  data() {
    return {
      dialog: this.parentDialogContact,
    };
  },
  props: {
    childLoadedContact: Boolean,
    parentDialogContact: Boolean,
  },
  methods: {
    handleDialog() {
      this.$emit("update:childLoadedContact", false);
      this.dialog = false;
    },
  },
};
</script>
