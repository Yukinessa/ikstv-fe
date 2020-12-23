<template>
  <div class="grey darken-4">
    <v-container >
      <Navbar />
      <br>
      <br>
      <h1 class="pt-6" style="color:white"> Barang Hilang </h1>
      <v-expansion-panels style="padding-bottom:10rem; padding-top:1rem">
        <v-expansion-panel style="background-color:red" v-for="(item,i) in 5" :key="i">
          <v-expansion-panel-header>
            <v-row>
              <v-col cols="12" md="8">       
                <h4 style="padding-left:1rem; color:white">Dompet A.n Ridwan Malik</h4>
              </v-col>
              <v-col cols="6" sm="6" md="4" >
                    <v-btn x-small class="ma-2 text-center"  color="white">
                      Hilang
                    </v-btn>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content style="color:white">
            <v-row>
              <v-col cols="6" md="2">
                <v-img src="../assets/samplecube.png" :class="`rounded-lg`" max-width="180"></v-img>
              </v-col>
              <v-col cols="12" sm="6" md="8">
                <p>Nama Pelapor :</p>
                <p>IG Pelapor :</p>
                <p>Barang yang ditemukan / dicari :</p>
                <p>Lokasi terakhir Barang :</p>
              </v-col>
            </v-row>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default {
 name: "listLove",
    components: {
      Navbar,
      Footer
    }
}
</script>

<style>

</style>