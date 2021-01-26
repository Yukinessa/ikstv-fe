<template>
  <v-container>
    <v-container>
      <!-- Loker Section -->
      <v-row>
        <v-col md="6">
          <h3 style="color:white; padding-bottom:1rem">
            Info Loker
          </h3>
          <v-row>
            <v-col md="6" v-for="loker in lokers.slice(0, 2)" :key="loker.id">
              <v-card class="mx-auto" max-height="200">
                <v-card-title
                  style="font-weight:bold; background-color:white; color:#f3ae5cff; text-align:center; justify-content: center;"
                >
                  <v-card-subtitle style="font-size:16px; text-align:left">
                    <p style="color:red">{{ limitTitle(loker.position) }}</p>
                    <p>
                      <img
                        src="../assets/ic_baseline-corporate-fare.png"
                        alt="iks"
                      />

                      {{ limitText(loker.title) }}
                    </p>
                    <p>
                      <img src="../assets/entypo_location-pin.png" alt="iks" />
                      {{ limitText(loker.address) }}
                    </p>
                    <p>
                      <img
                        src="../assets/ant-design_dollar-circle-filled.png"
                        alt="iks"
                      />
                      Rp. 5.000.000
                    </p>
                  </v-card-subtitle>
                  <v-btn
                    @click="openModalLoker(loker.id)"
                    depressed
                    color="error"
                    >Lihat lebih lengkap</v-btn
                  >
                </v-card-title>
              </v-card>
            </v-col>
            <router-link to="/all-loker">
              <a
                id="lanjut"
                class="pt-12 pl-4"
                style="color:white; display:block"
                href=""
              >
                Lebih Lengkap >
              </a>
            </router-link>
          </v-row>
        </v-col>
        <!-- Sosial Section -->
        <v-col md="6">
          <h3 style="color:white; padding-bottom:1rem">
            Info Sosial
          </h3>
          <v-row>
            <v-col
              md="6"
              v-for="sosial in sosials.slice(0, 2)"
              :key="sosial.id"
            >
              <v-card>
                <v-card-title
                  style="font-weight:bold; background-color:white; color:#f3ae5cff; text-align:center; justify-content: center;"
                >
                  <v-card-subtitle style="font-size:16px; text-align:left">
                    <p style="color:red">{{ limitText(sosial.title) }}</p>
                    <p>
                      <img
                        src="../assets/ant-design_instagram-outlined.png"
                        alt=""
                      />
                      {{ sosial.ig_pelapor }}
                    </p>
                    <img src="../assets/entypo_location-pin.png" alt="iks" />
                    {{ stringReplace(limitText(sosial.location)) }}
                    <p class="pt-3 pl-1">
                      <img src="../assets/info-icon.png" alt="iks" />
                      {{ stringReplace(limitText(sosial.description)) }}
                    </p>
                  </v-card-subtitle>
                  <v-btn
                    @click="openModalSosial(sosial.id)"
                    depressed
                    color="error"
                    >Lihat lebih lengkap</v-btn
                  >
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
          <router-link to="all-sosial">
            <a
              id="lanjut"
              style="padding-top:0.4rem; color:white; margin-left:auto; display:block; text-align:right"
              href=""
            >
              Lebih Lanjut >
            </a>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
    <template v-if="childLoadedLoker">
      <modalLoker
        :lokerID="this.lokerID"
        :childLoadedLoker.sync="childLoadedLoker"
        :parentDialogLoker="parentDialogLoker"
      />
    </template>
    <template v-if="childLoadedSosial">
      <modalSosial
        :sosialID="this.sosialID"
        :childLoadedSosial.sync="childLoadedSosial"
        :parentDialogSosial="parentDialogSosial"
      />
    </template>
  </v-container>
</template>

<script>
import loadImg from "../../config";
import modalLoker from "../components/modalLoker";
import modalSosial from "../components/modalSosial";

export default {
  components: {
    modalLoker,
    modalSosial,
  },
  data() {
    return {
      lokers: [],
      sosials: [],
      urlImg: loadImg,
      lokerID: 0,
      sosialId: 0,
      childLoadedLoker: false,
      childLoadedSosial: false,
      parentDialogSosial: false,
      parentDialogLoker: false,
    };
  },
  mounted() {
    this.getLoker();
    this.getSosial();
  },
  methods: {
    getLoker() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/loker")
        .then((response) => {
          this.lokers = response.data.datas;
        });
    },
    getSosial() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/sosial")
        .then((response) => {
          this.sosials = response.data.datas;
        });
    },
    limitTitle(text) {
      return this.stringReplace(text.slice(0, 30) + " ...");
    },
    limitText(text) {
      return text.slice(0, 15) + " ...";
    },
    stringReplace(str) {
      return str.replace(/<\/?[^>]+(>|$)/g, "");
    },
    openModalLoker(id) {
      this.childLoadedLoker = true;
      this.lokerID = id;
      this.parentDialogLoker = true;
    },
    openModalSosial(id) {
      this.childLoadedSosial = true;
      this.sosialID = id;
      this.parentDialogSosial = true;
      // alert(id);
    },
  },
};
</script>

<style></style>
