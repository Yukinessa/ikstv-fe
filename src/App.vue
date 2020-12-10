<template>
  <v-app>
    <v-app-bar app color="Dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo-navbar"
          class="shrink mr-2"
          contain
          src="./assets/logo-white.png"
          transition="scale-transition"
          width="80"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">News</span>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Iklan</span>
      </v-btn>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Home</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <div class="black">        
      <v-container>
        <Highlight  />
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
      </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Highlight from "./components/Highlight";
import Category from "./components/Category";
import Advertise from "./components/Advertise";
import infoBarang from "./components/infoBarang";
import infoSosial from "./components/infoSosial"

export default {
  name: "App",

  components: {
    Highlight,
    Category,
    Advertise,
    infoBarang,
    infoSosial
  },

  data: () => ({
    //
  })
};
</script>
