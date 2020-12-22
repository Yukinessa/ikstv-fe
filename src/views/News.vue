<template>
  <div>
      <v-container>
        <Navbar />
        <br>
        <br>
          <h1 class="pt-6">Isolasi Mandiri Efektif Gak Sih? Bagaimana Cara Agar Lebih Efektif</h1>
          <p class="pb-1" style="color:grey">Minggu, 13 Desember 2020 (14:29 WIB)</p>
          <br>
            <v-img :class="`rounded-lg`" src="../assets/berita.jpg" width="1200" height="500px"></v-img>
          <br>
          <p style="font-size:20px; text-align:justify; margin-bottom:20rem; margin-top:2rem"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
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
          <v-layout row>
            <v-flex xs12 md4>
              
            </v-flex>
          </v-layout>
      </v-container>
      <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default {
  name: "Home",
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