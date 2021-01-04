<template>
  <div>
      <v-row>
              <v-col v-for="n in 3" :key="n" cols="12" sm="4"> 
                    <v-card :class="`rounded-lg`" style="background-color:white !important" class="mx-auto" max-width="300">
                      <v-img :class="`rounded-lg`" class="white--text align-end" height="200px" src="@/assets/sample-pict.png">
                        <v-card-title>
                          <v-img src="@/assets/label-tittle.png" height="40px">
                    <div class="my-2 ml-8 subtitle-2">
                      <span class="white--text" style="font-size:14px;">Isolasi mandiri Efektif Gak Sih?</span>
                    </div>
                  </v-img>
                        </v-card-title>
                      </v-img>
                      <v-card-text class="text--primary">
                        Isolasi mandiri efektif gak sih? Be ...
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          color="blue" text>
                          Baca Selanjutnya
                        </v-btn>
                      </v-card-actions>
                    </v-card>            
              </v-col>
            </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>