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
                    <p
                      style="color:red; font-size: 14px"
                      class="text-center font-weight-bold"
                    >
                      {{ limitPosition(loker.position) }}
                    </p>
                    <p style="font-size: 13px" class="font-weight-bold">
                      <v-icon style="color: #EF5350 !important">
                        mdi-home-circle-outline
                      </v-icon>
                      {{ loker.title }}
                    </p>

                    <p style="font-size: 13px" class="font-weight-bold">
                      <v-icon style="color: #EF5350 !important">
                        mdi-currency-usd
                      </v-icon>
                      IDR {{ loker.salary | numeral(",") }}
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
            <router-link
              to="/all-loker"
              class="float-right"
              v-if="lokers.length > 2"
            >
              <a
                id="lanjut"
                class="mt-7 ml-3"
                style="color:white; display:block"
                href=""
              >
                Lebih Lengkap
                <v-icon style="color: #EF5350">
                  mdi-arrow-right-bold-circle-outline
                </v-icon>
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
                    <p
                      style="color:red; font-size: 14px"
                      class="text-center font-weight-bold"
                    >
                      {{ limitTitleSosial(sosial.title) }}
                    </p>
                    <p style="font-size:13px" class="font-weight-bold ml-1">
                      <v-icon style="color: #EF5350 !important">
                        mdi-cellphone-sound
                      </v-icon>
                      {{ sosial.phone }}
                    </p>
                    <p style="font-size: 13px" class="font-weight-bold">
                      <v-icon style="color: #EF5350 !important">
                        mdi-instagram
                      </v-icon>
                      {{ sosial.ig_pelapor }}
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
          <router-link to="all-sosial" v-if="sosials.length > 2">
            <a
              id="lanjut"
              style="padding-top:0.4rem; color:white; margin-left:auto; display:block; text-align:right; margin-top: 1rem"
              href=""
            >
              Lebih Lanjut
              <v-icon style="color: #EF5350">
                mdi-arrow-right-bold-circle-outline
              </v-icon>
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
import { loadImg } from "../../config";
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
    limitPosition(str) {
      if (str.length > 22) {
        return str.slice(0, 22) + "..";
      } else {
        return str;
      }
    },
    limitAddress(str) {
      if (str.length > 23) {
        return str.slice(0, 22) + "..";
      } else {
        return str;
      }
    },
    limitTitleSosial(str) {
      if (str.length > 20) {
        return str.slice(0, 19) + "..";
      } else {
        return str;
      }
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
