<template>
  <v-container v-if="!$isMobile()">
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
                  <v-router-link :to="'/list-loker/' + loker.id">
                    <v-btn depressed color="error">Lihat lebih lengkap</v-btn>
                  </v-router-link>
                </v-card-title>
              </v-card>
            </v-col>
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
                    <p>
                      <img src="../assets/entypo_location-pin.png" alt="iks" />
                      {{ limitText(sosial.description) }}
                    </p>
                  </v-card-subtitle>
                  <v-btn depressed color="error">Lihat lebih lengkap</v-btn>
                </v-card-title>
              </v-card>
            </v-col>
          </v-row>
          <router-link to="list-number">
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
      <router-link to="/list-lost">
        <a
          class="mt-5"
          id="lanjut"
          style="padding-top:0.2rem; color:white; display:block"
          href=""
        >
          Lebih Lengkap >
        </a>
      </router-link>
    </v-container>
  </v-container>
  <!-- Mobile Version -->
  <v-container v-else>
    <h6 style="color:white; padding-bottom:1rem" class="font-weight-bold">
      Info Lowongan Kerja
    </h6>
    <b-row>
      <b-col sm="1" v-for="loker in lokers.slice(0, 2)" :key="loker.id">
        <b-card
          v-if="loker.partner_id != null"
          :img-src="urlImg + 'loker/' + loker.partner.logo"
          img-alt="Image"
          img-top
          img-width="100%"
          img-height="109"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 d-block mx-auto"
        >
          <b-card-text>
            <p class="font-weight-bold" style="color: #D60909">
              {{ loker.position }}
            </p>
            <p
              v-if="loker.partner_id != null"
              class="font-weight-bold"
              style="font-size: 15px"
            >
              {{ loker.partner.name }}
            </p>
            <p v-else style="font-size: 15px" class="font-weight-bold">
              {{ loker.title }}
            </p>
            <p class="text-muted" style="font-size: 12px">
              {{ loker.address }}
            </p>
          </b-card-text>

          <div class="text-center">
            <b-button
              href="#"
              variant="danger"
              style="color: white"
              @click="goInstagram()"
              >Info Lebih Lanjut ></b-button
            >
          </div>
        </b-card>
        <b-card
          v-else
          tag="article"
          style="max-width: 20rem;"
          class="mb-2 mx-auto"
        >
          <img
            src="@/assets/empty-image.png"
            alt=""
            style="width:100%; height:109"
            class="card-img-top"
          />
          <b-card-text>
            <p class="font-weight-bold" style="color: #D60909">
              {{ loker.position }}
            </p>
            <p
              v-if="loker.partner_id != null"
              class="font-weight-bold"
              style="font-size: 15px"
            >
              {{ loker.partner.name }}
            </p>
            <p v-else class="font-weight-bold" style="font-size: 15px">
              {{ loker.title }}
            </p>
            <p class="text-muted" style="font-size: 12px">
              {{ loker.address }}
            </p>
          </b-card-text>
          <div class="text-center">
            <b-button href="#" variant="danger" style="color: white"
              >Info Lebih Lanjut ></b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
    <h6 style="color:white; padding-bottom:1rem" class="font-weight-bold mt-4">
      Info Sosial
    </h6>
    <b-row>
      <b-col sm="1" v-for="sosial in sosials.slice(0, 2)" :key="sosial.id">
        <b-card
          v-if="sosial.photo != null"
          :img-src="urlImg + 'sosial/' + sosial.photo"
          img-alt="Image"
          img-top
          img-width="100%"
          img-height="109"
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text>
            <p class="font-weight-bold" style="color: #D60909">
              {{ sosial.title }}
            </p>
            <p class="font-weight-bold" style="font-size: 15px">
              {{ sosial.ig_pelapor }}
            </p>
            <p class="text-muted" style="font-size: 12px">
              {{ sosial.description }}
            </p>
          </b-card-text>

          <div class="text-center">
            <b-button href="#" variant="danger" style="color: white"
              >Info Lebih Lanjut ></b-button
            >
          </div>
        </b-card>
        <b-card v-else tag="article" style="max-width: 20rem;" class="mb-2">
          <img
            src="@/assets/empty-image.png"
            alt=""
            style="width:100%;
          height:109"
            class="card-img-top"
          />
          <b-card-text>
            <p class="font-weight-bold" style="color: #D60909">
              {{ sosial.title }}
            </p>
            <p class="font-weight-bold" style="font-size: 15px">
              {{ sosial.ig_pelapor }}
            </p>
            <p class="text-muted" style="font-size: 12px">
              {{ sosial.description }}
            </p>
          </b-card-text>

          <div class="text-center">
            <b-button href="#" variant="danger" style="color: white"
              >Info Lebih Lanjut ></b-button
            >
          </div>
        </b-card>
      </b-col>
    </b-row>
  </v-container>
</template>

<script>
import loadImg from "../../config";
export default {
  data() {
    return {
      lokers: [],
      sosials: [],
      urlImg: loadImg,
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
      return text.slice(0, 30) + " ...";
    },
    limitText(text) {
      return text.slice(0, 15) + " ...";
    },
    goInstagram() {
      location.href = "https://www.instagram.com/p/CKIwg94FiRs/";
    },
  },
};
</script>

<style></style>
