<template>
  <div class="grey darken-4">
      <v-container>
        <Navbar />
        <br>
        <br>
          <h1 class="pt-6" style="color:white">Isolasi Mandiri Efektif Gak Sih? Bagaimana Cara Agar Lebih Efektif</h1>
          <p class="pb-1" style="color:grey">Minggu, 13 Desember 2020 (14:29 WIB)</p>
          <br>
            <v-img :class="`rounded-lg`" src="../assets/berita.jpg" width="1200" height="500px"></v-img>
          <br>
          <p style="font-size:20px; color:white; text-align:justify; margin-bottom:12rem; margin-top:2rem"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
            has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. It has survived not 
            only five centuries, but also the leap into electronic typesetting, remaining essentially 
            unchanged. It was popularised in the 1960s with the release of Letraset sheets containing 
            Lorem Ipsum passages, and more recently with desktop publishing software like Aldus 
            PageMaker including versions of Lorem Ipsum</p>
          <v-container>
             <h3 style="color:white;">Berita Terkait </h3> 
            <v-row>
              <v-col v-for="n in 3" :key="n" cols="12" sm="4"> 
                    <v-card :class="`rounded-lg`" style="background-color:white !important" class="mx-auto" max-width="300">
                      <v-img :class="`rounded-lg`" class="white--text align-end" height="200px" src="@/assets/sample-pict.png">
                        <v-card-title>
                          <v-img src="@/assets/label-tittle.png" height="40px">
                    <div class="my-2 ml-8 subtitle-2">
                      <span class="white--text" style="font-size:14px;">Isolasi mandiri Efektif Gak Sih?</span>
                    </div>
                  </v-img>
                        </v-card-title>
                      </v-img>
                      <v-card-text class="text--primary">
                        Isolasi mandiri efektif gak sih? Be ...
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          color="blue" text>
                          Baca Selanjutnya
                        </v-btn>
                      </v-card-actions>
                    </v-card>            
              </v-col>
            </v-row>
          </v-container>
      </v-container>
      <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "News",
    components: {
      Navbar,
      Footer
    }
}
</script>

<style>
.title-news{
  padding-top: 140px
}
</style>