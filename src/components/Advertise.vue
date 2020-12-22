<template>
<v-container>
  <div :class="`rounded-lg`">
    <!-- <img v-bind:src="logo" /> -->
    <v-carousel :class="`rounded-lg`" cycle hide-delimiters show-arrows-on-hover >
      <v-carousel-item  
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      ></v-carousel-item>
    </v-carousel>
  </div>
  </v-container>
</template>


<script>
export default {
data () {
      return {
        items: [
          {
            src: require('../assets/Advertise.jpg'),
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
      }
    },
}
</script>

<style>
.v-carousel{
  height: 300px !important ;
}
</style>