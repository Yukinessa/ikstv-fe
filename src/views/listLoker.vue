<template>
  <v-container>
    <div>
      <Navbar />
    </div>

    <div>
      <Footer />
    </div>
  </v-container>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style></style>
