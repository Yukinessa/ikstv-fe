<template>
   <v-container>
    <v-row>
        <v-flex xs12 md3>
            <h3 style="color:white; padding-bottom:1rem">Info Kehilangan / Pencarian</h3>
            <router-link to="/list-lost" tag="card">
                <v-card :class="`rounded-lg`" href="#">
                    <v-card-title style="font-weight:bold; background-color:#800000ff; color:#f3ae5cff; text-align:center; justify-content: center;">
                        INFO BARANG <br> HILANG!
                        <img :class="`rounded-lg`" class="ml-3 mr-3" src="@/assets/barang-hilang.jpg" width="180">
                    <v-card-subtitle style="color:white; font-size:16px; text-align:left">
                        <p>Nama Pelapor :</p>
                        <p>IG Pelapor :</p>
                        <p>Barang yang ditemukan <br> / dicari :</p>
                        <p>Lokasi terakhir Barang :</p>
                    </v-card-subtitle>
                    </v-card-title>
                </v-card>
            </router-link>
        </v-flex>
        <v-flex xs12 md3 style="padding-right: 25px; padding-left:10px; padding-top:2.8rem">
            <router-link to="/list-lost" tag="card">
            <v-card :class="`rounded-lg`" href="#">
                <v-card-title style="font-weight:bold; background-color:#800000ff; color:#f3ae5cff; text-align:center; justify-content: center;">
                    INFO BARANG <br> HILANG!
                    <img :class="`rounded-lg`" class="ml-3 mr-3" src="@/assets/barang-hilang.jpg" width="180">
                <v-card-subtitle style="color:white; font-size:16px; text-align:left">
                    <p>Nama Pelapor :</p>
                    <p>IG Pelapor :</p>
                    <p>Barang yang ditemukan <br> / dicari :</p>
                    <p>Lokasi terakhir Barang :</p>
                </v-card-subtitle>
                </v-card-title>
            </v-card>
            </router-link>
            <a href="#">
            <p style="color:white; text-align:right; line-height: 1.8">Lihat Semua ></p>
            </a>
        </v-flex>
        <v-flex xs12 md6 style="padding-left: 25px; padding-right: 10px">
            <h3 style="color:white; padding-bottom:1rem">Nomer Penting Semarang</h3>
            <v-card :class="`rounded-lg`"  href="#">
                <v-card-title style="background-color:#800000ff; color:white; text-align:left">
                <table style="border-collapse: collapse; width: 100%; text-align:center; justify-content:center;">
                    <tr>
                        <th>Instansi</th>
                        <th>Region</th>
                        <th>Kontak</th>
                    </tr>
                    <tr style="font-size:12px" v-for="(item,i) in 8" :key="i">
                        <td>Polsek Genuk</td>
                        <td>Genuk</td>
                        <td>085-6351-789</td>
                    </tr>
                </table>
                </v-card-title>
            </v-card>
            <p style="color:white; text-align:right; line-height: 1.8">Lihat Semua ></p>
        </v-flex>
    </v-row>
    
  </v-container>
</template>

<script>
export default {

}
</script>

<style>
td, th {
  text-align: left;
  padding: 8px;
}
</style>