<template>
  <v-container v-if="!$isMobile()">
    <v-layout row>
      <v-flex xs12 md3>
        <h3 style="color:white; padding-bottom:1rem">Info Lowongan Kerja</h3>
        <v-card href="#">
          <v-card-title
            style="font-weight:bold; background-color:white; color:#f3ae5cff; text-align:center; justify-content: center;"
          >
            <img
              class="ml-3 mr-3 mt-5"
              src="@/assets/gambarsosial.png"
              width="180"
            />
            <v-card-subtitle style="font-size:16px; text-align:left">
              <p style="color:red">Jobdesk</p>
              <p>Nama Perusahaan</p>
              <p>Kantor</p>
              <p style="color:white; line-height: 0">
                Lokasi terakhir Barang :
              </p>
            </v-card-subtitle>
            <v-btn depressed color="error">Lihat lebih lengkap</v-btn>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md3 style="padding-right: 25px; padding-left:10px">
        <v-card style="padding-top:2.8rem" href="#">
          <v-card-title
            style="font-weight:bold; background-color:white; color:#f3ae5cff; text-align:center; justify-content: center;"
          >
            <img
              class="ml-3 mr-3 mt-5"
              src="@/assets/gambarsosial.png"
              width="180"
            />
            <v-card-subtitle style="font-size:16px; text-align:left">
              <p style="color:red">Jobdesk</p>
              <p>Nama Perusahaan</p>
              <p>Kantor</p>
              <p style="color:white; line-height: 0">
                Lokasi terakhir Barang :
              </p>
            </v-card-subtitle>
            <v-btn depressed color="error">Lihat lebih lengkap</v-btn>
          </v-card-title>
        </v-card>
        <a href="#">
          <p style="color:white; text-align:right; line-height: 1.8">
            Lihat Semua >
          </p>
        </a>
      </v-flex>
      <v-flex xs12 md3 style="padding-left: 25px; padding-right: 10px">
        <h3 style="color:white; padding-bottom:1rem">Info Sosial</h3>
        <v-divider></v-divider>
        <v-card href="#">
          <v-card-title
            style="font-weight:bold; background-color:white; color:#f3ae5cff; text-align:center; justify-content: center;"
          >
            <img
              class="ml-3 mr-3 mt-5"
              src="@/assets/gambarsosial.png"
              width="180"
            />
            <v-card-subtitle style="font-size:16px; text-align:left">
              <p style="color:red">Jobdesk</p>
              <p>Nama Perusahaan</p>
              <p>Kantor</p>
              <p style="color:white; line-height: 0">
                Lokasi terakhir Barang :
              </p>
            </v-card-subtitle>
            <v-btn depressed color="error">Lihat lebih lengkap</v-btn>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex xs12 md3>
        <v-card style="padding-top:2.8rem" href="#">
          <v-card-title
            style="font-weight:bold; background-color:white; color:#f3ae5cff; text-align:center; justify-content: center;"
          >
            <img
              class="ml-3 mr-3 mt-5"
              src="@/assets/gambarsosial.png"
              width="180"
            />
            <v-card-subtitle style="font-size:16px; text-align:left">
              <p style="color:red">Jobdesk</p>
              <p>Nama Perusahaan</p>
              <p>Kantor</p>
              <p style="color:white; line-height: 0">
                Lokasi terakhir Barang :
              </p>
            </v-card-subtitle>
            <v-btn depressed color="error">Lihat lebih lengkap</v-btn>
          </v-card-title>
        </v-card>
        <router-link to="/list-loker">
          <a>
            <p style="color:white; text-align:right; line-height: 1.8">
              Lihat Semua >
            </p>
          </a>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
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
            <b-button href="#" variant="danger" style="color: white"
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
  },
};
</script>

<style></style>
