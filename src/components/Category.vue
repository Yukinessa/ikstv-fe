<template>
<div>
  <h2 style="color:white; text-align:center;">IksTV</h2>
  <v-container class="dark">
    <v-row>
      <v-flex xs12 md4>
        <router-link to="/detail-category" tag="button">
        <a class="v-list-item v-list-item--link theme--dark" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/Entertainment-1.png"></v-img>
        </a>
        </router-link>
      </v-flex>
      <v-flex xs12 md4>
        <a class="v-list-item v-list-item--link theme--dark" style="padding-left:30px" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/socom.png"></v-img>
        </a>
      </v-flex>
      <v-flex xs12 md4>
        <a class="v-list-item v-list-item--link theme--dark" style="padding-left:40px" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/edu.png"></v-img>
        </a>
      </v-flex>
      
    </v-row>

    <v-row style="padding-top:1rem">
      <v-flex xs12 md4>
        <a class="v-list-item v-list-item--link theme--dark" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/culi.png"></v-img>
        </a>
      </v-flex>
      <v-flex xs12 md4>
        <a class="v-list-item v-list-item--link theme--dark" style="padding-left:30px" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/spimov.png"></v-img>
        </a>
      </v-flex>
      <v-flex xs12 md4>
        <a class="v-list-item v-list-item--link theme--dark" style="padding-left:40px" href="#">
            <v-img :class="`rounded-lg`" max-height="140" max-width="330" src="@/assets/sucstor.png"></v-img>
        </a>
      </v-flex>
      
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