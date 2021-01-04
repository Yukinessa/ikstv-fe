<template>
<div>
  <template>
  <v-app-bar app color="Dark" dark>
      <div class="d-flex align-center">
        <v-img alt="Logo-navbar" class="shrink mr-2" contain src="../assets/logo-white.png" width="60"/>
      </div>
      <v-spacer></v-spacer>
      <v-btn text>
        <router-link to="/" tag="button"><span class="mr-2" style="text-align=center">HOME</span></router-link>
      </v-btn>
      <v-btn text>
        <span class="mr-2" @click="test('news')">News</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2">Iklan</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2" >Contact</span>
      </v-btn>
    </v-app-bar>
  </template>
  <!-- Mobile Display -->
</div>
</template>

<script>
export default {
  methods:{
    test(refName){
      this.$emit('testing',refName)
    }
  }
}
</script>

<style>

</style>