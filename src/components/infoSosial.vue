<template>
  <v-container>
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
</template>

<script>
export default {};
</script>

<style></style>
