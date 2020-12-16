<template>
   <v-container>
    <v-layout row>
        <v-flex xs12 md3>
            <h3 style="color:white">Info Kehilangan</h3>
            <v-card href="#">
                <v-card-title style="font-weight:bold; background-color:#800000ff; color:#f3ae5cff; text-align:center; justify-content: center;">
                    INFO BARANG <br> HILANG!
                    <img class="ml-3 mr-3" src="@/assets/barang-hilang.jpg" width="180">
                <v-card-subtitle style="color:white; font-size:16px; text-align:left">
                    <p>Nama Pelapor :</p>
                    <p>IG Pelapor :</p>
                    <p>Barang yang ditemukan <br> / dicari :</p>
                    <p>Lokasi terakhir Barang :</p>
                </v-card-subtitle>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md3 style="padding-right: 25px; padding-left:10px">
            <h3 style="hidden">Info Kehilangan</h3>
            <v-card  href="#">
                <v-card-title style="font-weight:bold; background-color:#800000ff; color:#f3ae5cff; text-align:center; justify-content: center;">
                    INFO BARANG <br> HILANG!
                    <img class="ml-3 mr-3" src="@/assets/barang-hilang.jpg" width="180">
                <v-card-subtitle style="color:white; font-size:16px; text-align:left">
                    <p>Nama Pelapor :</p>
                    <p>IG Pelapor :</p>
                    <p>Barang yang ditemukan <br> / dicari :</p>
                    <p>Lokasi terakhir Barang :</p>
                </v-card-subtitle>
                </v-card-title>
            </v-card>
            <a href="#">
            <p style="color:white; text-align:right; line-height: 1.8">Lihat Semua ></p>
            </a>
        </v-flex>
        <v-flex xs12 md3 style="padding-left: 25px; padding-right: 10px">
            <h3 style="color:white">Info Pencarian</h3>
            <v-divider></v-divider>
            <v-card  href="#">
                <v-card-title style="font-weight:bold; background-color:#800000ff; color:#f3ae5cff; text-align:center; justify-content:center">
                    INFO BARANG <br> HILANG!
                    <img class="ml-3 mr-3" src="@/assets/barang-hilang.jpg" width="180">
                <v-card-subtitle style="color:white; font-size:16px; text-align:left">
                    <p>Nama Pelapor :</p>
                    <p>IG Pelapor :</p>
                    <p>Barang yang ditemukan <br> / dicari :</p>
                    <p>Lokasi terakhir Barang :</p>
                </v-card-subtitle>
                </v-card-title>
            </v-card>
        </v-flex>
        <v-flex xs12 md3>
            <h3>a</h3>
            <v-card  href="#">
                <v-card-title style="font-weight:bold; background-color:#800000ff; color:#f3ae5cff; text-align:center; justify-content: center;">
                    INFO BARANG <br> HILANG!
                    <img class="ml-3 mr-3" src="@/assets/barang-hilang.jpg" width="180">
                <v-card-subtitle style="color:white; font-size:16px; text-align:left">
                    <p>Nama Pelapor :</p>
                    <p>IG Pelapor :</p>
                    <p>Barang yang ditemukan <br> / dicari :</p>
                    <p>Lokasi terakhir Barang :</p>
                </v-card-subtitle>
                </v-card-title>
            </v-card>
            <a href="#">
            <p style="color:white; text-align:right line-height: 1.8">Lihat Semua ></p>
            </a>
        </v-flex>
    </v-layout>
    
  </v-container>
</template>

<script>
import axios from 'axios';
export default {
    name: "Info",
    data () {
        return{
            infoPencarian: [],
            infoKehilangan: [],
        }
    },
    mounted(){
        axios.get('http://localhost:8000/api/kehilangan')
            .then(response => {
                console.log(response.data.data)
            })
            .catch(error =>{
                console.log(error)
            })
    }
}
</script>

<style>
</style>