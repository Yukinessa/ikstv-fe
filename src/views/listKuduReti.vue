<template>
  <div class="grey darken-4">
    <v-container>
      <div class="mb-7">
        <Navbar />
      </div>
      <h2 class="pt-8 pb-9" style="color:white; font-weight:bold">
        Kudu Reti Lurr
      </h2>
      <b-row class="mb-5" v-for="(item, i) in 5" :key="i">
        <b-col md="3" class="py-5 px-3 d-flex justify-content-center">
          <img src="../assets/samplecube.png" fluid class="text-center w-100" />
        </b-col>
        <b-col md="9" class="p-5">
          <h3 style="color:white; font-weight:bold">Article Title</h3>
          <p style="color:gray; font-size:14px">DD/MM/YY</p>
          <p style="color:white; font-size:18px">
            {{ limitText(text) }}
          </p>
          <b-button class="mr-auto" variant="outline-danger"
            >Baca Lengkap</b-button
          >
        </b-col>
      </b-row>
      <b-btn v-if="totalData > 5">Load More</b-btn>
      <Footer />
    </v-container>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      totalData: 10,
      text:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    limitText(text) {
      return text.slice(0, 180) + " ...";
    },
  },
};
</script>

<style></style>
