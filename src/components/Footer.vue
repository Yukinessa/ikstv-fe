<template>
  <div class="left" style="background-color:red">
        <v-layout row>
        <v-flex xs12 md6 style="padding-left:140px; padding-top:30px" class="container-footer">
            <img src="@/assets/logo-white.png" width="100">
            <br>
            <br>
            <a href="">Beranda</a>
            <br>
            <a href="">Berita Terkini</a>
            <br>
            <a href="">Info Kehilangan</a>
            <br>
            <a href="">Iklan</a>
            <br>
        </v-flex>
        <v-flex xs12 md6> 
            <h3 style="color: white; font-weight:bold; position: absolute; left: 990px; top:30px">UPDATE</h3>
            <br>
            <br>
            <v-flex xs6 md3>
              <img src="@/assets/icon-instagram.png" width="100" 
              style="position: absolute;
                    right: 400px;
                    padding: 10px;">
              <img src="@/assets/icon-youtube.png" width="100" 
              style="position: absolute;
                    right: 250px;
                    padding: 10px;">  
            </v-flex> 
        </v-flex>
        </v-layout>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.left{
  position: absolute;
  left: 0px;
  width: 1400px;
  padding: 10px;
}


</style>