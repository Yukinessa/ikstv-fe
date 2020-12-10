<template>
<div>
  <p class="font-weight-medium text-align: left" >Berita Terkini </p>
  <v-sheet class="mx-auto" elevation="10" max-width="1200">
    <v-slide-group class="pa-4" multiple show-arrows>
      <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
        <v-card class="pa-2" outlined tile rounded="true" @click="toggle">
            <v-card class="mx-3" max-width="300">
              <v-img class="dark--text align-end" height="200px" src="@/assets/sample-pict.png">
                <v-img class="@/assets/label-tittle.png"></v-img>
                <v-card-title>
                  <v-img src="@/assets/label-tittle.png">
                    <div class="my-4 subtitle-1">
                      <span class="white--text">Isolasi mandiri Efektif Gak Sih?</span>
                    </div>
                  </v-img>
                </v-card-title>
              </v-img>
              <v-card-text class="text--primary">
                <div class="grey--text mb-1">Isolasi mandiri efektif gak sih? Be ...</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="blue" text>Baca Selanjutnya</v-btn>
              </v-card-actions>
            </v-card>
          </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
  <p class="font-weight-regular" style="margin-top:10px">Lihat Semua ></p>
</div>
</template>
<style>
.theme--light.v-sheet{
  background-color: #1f1f1fff !important;
}
.font-weight-regular{
  color: white !important;
  text-align: right;
}
.font-weight-medium{
  color:white !important;
}
#garis{
  border-top: 1px solid black !important;
}
</style>
<script>

export default {
    
  data: () => ({
      model: [],
    }),
};
</script>