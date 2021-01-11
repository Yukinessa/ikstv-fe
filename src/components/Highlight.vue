<template>
  <div>
    <p class="font-weight-medium text-align: left">Berita Terkini</p>
    <v-sheet class="mx-auto" elevation="10" max-width="1200">
      <v-slide-group class="pa-4" multiple show-arrows>
        <v-slide-item v-for="item in news" :key="item">
          <v-card class="pa-2" rounded="true">
            <v-card :class="`rounded-lg`" class="mx-1 " max-width="316">
              <v-img
                v-if="item.photo != null"
                class="dark--text align-end"
                height="200px"
                v-bind:src="urlImg + '/news/' + item.photo"
              >
                <v-card-title>
                  <v-img src="@/assets/label-tittle.png" height="50px">
                    <div class="my-4 ml-8 subtitle-2">
                      <span class="white--text">{{
                        limitTitle(item.title)
                      }}</span>
                    </div>
                  </v-img>
                </v-card-title>
              </v-img>
              <!-- condition if the image aren't null -->
              <v-img
                v-else
                class="dark--text align-end"
                height="200px"
                src="../assets/empty-image.png"
              >
                <v-card-title>
                  <v-img src="@/assets/label-tittle.png" height="50px">
                    <div class="my-4 ml-8 subtitle-2">
                      <span class="white--text">{{
                        limitTitle(item.title)
                      }}</span>
                    </div>
                  </v-img>
                </v-card-title>
              </v-img>
              <v-card-text class="text--primary">
                <div class="grey--text mb-1">
                  {{ limitText(item.description) }}
                </div>
              </v-card-text>
              <v-chip
                class="ma-2 red accent-4"
                x-small
                v-if="item.content_status == 1"
                style="color:white"
              >
                Berita Sensitif
              </v-chip>
              <v-chip class="grey darken-4" v-else> </v-chip>

              <v-card-actions>
                <router-link
                  :to="'/News/' + strReplace(item.title)"
                  tag="button"
                  ><v-btn color="blue" text
                    >Baca Selanjutnya</v-btn
                  ></router-link
                >
              </v-card-actions>
            </v-card>
          </v-card>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <a
      id="lanjut"
      style="padding-top:1rem; color:white; margin-left:auto; display:block; text-align:right"
      href=""
    >
      Lebih Lanjut >
    </a>
  </div>
</template>
<style>
.theme--light.v-sheet {
  background-color: #1f1f1fff !important;
}
.font-weight-regular {
  color: white !important;
  text-align: right;
}
.font-weight-medium {
  color: white !important;
}
#garis {
  border-top: 1px solid black !important;
}
.theme--light.v-icon {
  color: white;
}

#lanjut:link {
  text-decoration: none;
}

#lanjut:visited {
  text-decoration: none;
}

#lanjut:hover {
  text-decoration: underline;
}

#lanjut:active {
  text-decoration: underline;
}
</style>
<script>
import loadImg from "../../config.js";
export default {
  data() {
    return {
      news: [],
      urlImg: loadImg,
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    strReplace(str) {
      return str.replaceAll(" ", "-");
    },
    limitText(text) {
      return text.slice(0, 50) + " ...";
    },
    limitTitle(text) {
      return text.slice(0, 30) + " ...";
    },
    getNews() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "news")
        .then((response) => {
          this.news = response.data.datas;
        });
    },
  },
};
</script>
