<template>
  <div>
      <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="100%"
        height="1080px"
      >
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              class="red accent-4"
              dark
            >{{videoTitle}}</v-toolbar>
           <iframe id="youtube-video" style=" width:100% !important; height:600px !important" v-bind:src="videoID" frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <v-card-actions class="justify-end">
              <v-btn
                color="white"
                text
                @click="dialog.value = false, closeVideo()"
              >Close</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
 data(){
      return{
          dialog:false
      }
    },
  methods:{
    closeVideo() {
      document.querySelector('#youtube-video').src = ""
    }
   
  },
  props:{
    videoID:{
      type:String 
    },
    videoTitle: {
      type:String
    }
  },
}
</script>

<style>

</style>