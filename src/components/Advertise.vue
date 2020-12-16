<template>
<v-container>
  <div class="rounded-lg">
    <!-- <img v-bind:src="logo" /> -->
    <v-carousel cycle hide-delimiters show-arrows-on-hover >
      <v-carousel-item
        v-for="(iklan, index) in iklanData"
        :key="index"
        :src="iklan.banner"
      ></v-carousel-item>
      <!-- <div id="iklan"> {{  advertisements }} </div> -->
    </v-carousel>
  </div>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: "Advertisement",
  data () {
      return {
        iklanData: [],
        errors: []
      }
    },
    mounted(){
      axios.get('http://localhost:8000/api/iklan')
            .then(response => {
              console.log(response)
              this.iklanData = response.data.bronze
            }).catch(error =>{
              console.log(error)
            })
    }
  }
</script>