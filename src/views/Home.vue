<template>
  <v-app>
    <v-main>
      <div class="black">
      <v-container >
        <Navbar />
        <Highlight />
        <br>
        <Category />
        <br>
        <br>
        <Advertise />
        <br>
        <infoBarang />
        <br>
        <infoSosial />
        <br>
        <Advertise />
        <br>
        <Youtube />
        <br>
        <Advertise2 />
        <br>
        <br>
        <hr size="3" width="100%" color="white">
        <br>
        <Partner />
        <br>
        <Footer />
      </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import Category from "../components/Category";
import Advertise from "../components/Advertise";
import infoBarang from "../components/infoBarang";
import infoSosial from "../components/infoSosial";
import Youtube from "../components/Youtube";
import Advertise2 from "../components/Advertise2";
import Footer from "../components/Footer";
import Partner from "../components/Partner";

export default {
  name: "Home",
  components: {
    Navbar,
    Highlight,
    Category,
    Advertise,
    infoBarang,
    infoSosial,
    Youtube,
    Advertise2,
    Footer,
    Partner
  },
  data: () => ({
    //
  })
};
</script>