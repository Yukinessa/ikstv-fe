<template>
<div>
  <v-text class="font-weight-regular text-center">IksTV</v-text>
  <v-container class="dark">
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <a class="v-list-item v-list-item--link theme--dark" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/Entertainment-1.png"></v-img>
          </a>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
          <a class="v-list-item v-list-item--link theme--dark" :class="`rounded-lg`" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/Entertainment-1.png"></v-img>
          </a>
      </v-col>
    </v-row>
  </v-container>
</div>
</template>

<script>
export default {

}
</script>

<style>
.v-btn:not(.v-btn--round).v-size--x-large{
  height: 100px;
}
.v-btn__content{
  height: 100px;
  weight: 300px;
}
</style>