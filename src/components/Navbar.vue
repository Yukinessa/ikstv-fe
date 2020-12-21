<template>
  <v-app-bar app color="Dark" dark>
      <div class="d-flex align-center">
        <v-img alt="Logo-navbar" class="shrink mr-2" contain src="../assets/logo-white.png" width="60"/>
      </div>
      <v-spacer></v-spacer>
      <v-btn text>
        <router-link to="/" tag="button"><span class="mr-2" style="text-align=center">HOME</span></router-link>
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
</template>

<script>
export default {

}
</script>

<style>

</style>