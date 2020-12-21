<template>
  <div class="left-footer" style="background-color:red">
        <v-layout row>
        <v-flex xs12 md6 style="padding-left:140px; padding-top:30px" class="container-footer">
            <img src="@/assets/logo-white.png" width="100">
            <br>
            <br>
            <a style="color:white; font-size:15px" href="">Beranda</a>
            <br>
            <br>
            <a style="color:white; font-size:15px" href="">Berita Terkini</a>
            <br>
            <br>
            <a style="color:white; font-size:15px" href="">Info Kehilangan</a>
            <br>
            <br>
            <a style="color:white; font-size:15px" href="">Iklan</a>
            <br>
            <br>
            <br>
        </v-flex>
        <v-flex xs12 md6> 
            <h3 style="color: white; font-weight:bold; position: absolute; left: 1090px; top:30px">UPDATE</h3>
            <br>
            <br>
            <v-flex xs6 md3>
              <img src="@/assets/icon-instagram.png" width="80" 
              style="position: absolute;
                    right:300px;
                    padding: 10px;">
              <img src="@/assets/icon-youtube.png" width="80" 
              style="position: absolute;
                    right: 170px;
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
.left-footer{
  position: absolute;
  left: 0px;
  width: 1400px;
  padding: 10px;
}


</style>