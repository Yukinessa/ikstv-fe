<template>
  <div class="grey darken-4">
      <v-container>
        <Navbar />
           <h1 style="color:white; padding-top:5rem; padding-bottom:1rem">Entertainment </h1>
            <div id="nav" style="text-align: center; color white">
            </div>
             <div style="margin-top:1rem; padding-bottom:1rem" v-for="(item,i) in content" :key="i" > 
                  <v-card>
                    <v-row>
                      <v-col cols="4" md="3">
                          <v-img style="margin-left:3rem; margin-top:1rem; margin-bottom:1rem" @click="openModal(item.id.videoId, item.snippet.title)" v-bind:src="item.snippet.thumbnails.high.url" :class="`rounded-lg`" max-width="180"></v-img>
                      </v-col>
                      <v-col cols="8" md="6">
                        <h2 style="margin-top:1rem; color:white">{{item.snippet.title}}</h2>
                        <p style="font-size:12px; color:grey">{{item.snippet.publishTime | moment("dddd, MMMM Do YYYY")}}</p>
                        <p style="color:white; text-align:justify">{{limitText(item.snippet.description)}}</p>
                      <v-btn style="text-align:right !important" @click="goYoutube(item.id.videoId)">Lihat Selangkapnya</v-btn>
                      </v-col>
                    </v-row>
                  </v-card>
             </div>
             <div style="padding-top:6rem">
                <Footer />
             </div>
      </v-container>
  <modalVideo ref="modalVideo" :videoID="this.data" :videoTitle="this.title"/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import modalVideo from "../components/modalVideo"

export default {
  data(){
    return{
      content : [],
      data : '',
      title: ''
    }
  },
    components:{
      Navbar,
      Footer,
      modalVideo
    },
    methods:{
      openModal(videoID, videoTitle){
        this.$refs.modalVideo.dialog=true
        this.data = 'https://www.youtube.com/embed/'+videoID+"?autoplay=1"
        this.title = videoTitle
      },
      limitText(text){
         return text.slice(0, 134) + ' ...'
      },
      goYoutube(link) {
        window.open('https://www.youtube.com/watch?v='+link, '_blank')
      }
    },
    mounted(){
      this.axios
        .get('http://192.168.1.36:8000/api/youtube/channel/ikstv')
        .then(response => {
                this.content=response.data.datas.results
                // console.log(response)
              })
  
    }
    
}
</script>

<style>

</style>