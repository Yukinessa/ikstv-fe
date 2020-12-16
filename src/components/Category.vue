<template>
<div>
  <!-- <v-text class="font-weight-regular text-center">IksTV</v-text> -->
  <v-container class="dark">
    <v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
        <div class="overflow-hidden v-sheet v-sheet-outlined theme--dark rounded" style="min-height: 61px" min-height="61">
          <a class="v-list-item v-list-item--link theme--dark" href="#" tabindex="0">
            <v-img  max-height="140" max-width="330" src="@/assets/Entertainment-1.png"></v-img>
          </a>
        </div>
        </v-card>
      </v-col>
    </v-row><v-row no-gutters>
      <v-col v-for="n in 3" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>
        <div class="overflow-hidden v-sheet v-sheet-outlined theme--dark rounded" style="min-height: 61px" min-height="61">
          <a class="v-list-item v-list-item--link theme--dark" href="#" tabindex="0">
            <v-img max-height="140" max-width="330" src="@/assets/Entertainment-1.png"></v-img>
          </a>
        </div>
        </v-card>
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
  /* weight: 300px; */
}
</style>