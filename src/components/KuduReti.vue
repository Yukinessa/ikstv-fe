<template>
  <div>
      <h3 style="color:white; ">Koe Kudu Reti</h3>
      <v-row>
              <v-col v-for="n in 3" :key="n" cols="12" sm="4"> 
                    <v-card :class="`rounded-lg`" style="background-color:white !important" class="mx-auto" max-width="300">
                      <v-img :class="`rounded-lg`" class="white--text align-end" height="200px" src="@/assets/Tandatanya.jpeg">
                        <v-card-title>
                          <v-img src="@/assets/label-tittle.png" height="40px">
                    <div class="my-2 ml-8 subtitle-2">
                      <span class="white--text" style="font-size:14px;">5 Tempat Misterius Semarang</span>
                    </div>
                  </v-img>
                        </v-card-title>
                      </v-img>
                      <v-card-text class="text--primary">
                        Tempat misterius adalah tempat yang sangat misterius ...
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
            <a id="lanjut" style="padding-top:1rem; color:white; margin-left:auto; display:block; text-align:right" href="" >
      Lebih Lanjut >
  </a>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>