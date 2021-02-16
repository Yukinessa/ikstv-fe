<template>
  <div>
    <h3 class="font-weight-medium text-align: left mt-3">Berita Terkini</h3>
    <v-sheet class="mx-auto" elevation="10" max-width="1200">
      <v-slide-group class="pa-4" multiple show-arrows>
        <v-slide-item v-for="item in news" :key="item.id">
          <router-link :to="'/News/' + strReplace(item.title)">
            <v-card class="pa-2" rounded="true">
              <v-card
                :class="`rounded-lg`"
                class="mx-1 "
                max-width="316"
                max-height="460"
              >
                <v-img
                  v-if="item.photo != null"
                  class="dark--text align-end"
                  height="auto"
                  width="100%"
                  v-bind:src="urlImg + '/news/' + item.photo"
                >
                  <v-chip
                    class="ma-2"
                    color="red darken-3"
                    label
                    text-color="white"
                    style="margin-top: -24rem !important; margin-left: 16rem !important"
                    v-if="item.content_status == 1"
                  >
                    <v-icon center>
                      mdi-eye-off-outline
                    </v-icon>
                  </v-chip>
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
                  <v-chip
                    class="ma-2"
                    color="red darken-3"
                    label
                    text-color="white"
                    style="margin-top: -9.6rem !important; margin-left: 16rem !important"
                    v-if="item.content_status == 1"
                  >
                    <v-icon center>
                      mdi-eye-off-outline
                    </v-icon>
                  </v-chip>
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
              </v-card>
            </v-card>
          </router-link>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
    <router-link to="list-news" v-if="news.length > 5">
      <a
        id="lanjut"
        style="padding-top:1rem; color:white; margin-left:auto; display:block; text-align:right; margin-top: 1rem"
        href=""
      >
        Lebih Lanjut
        <v-icon style="color: #EF5350">
          mdi-arrow-right-bold-circle-outline
        </v-icon>
      </a>
    </router-link>
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
.v-slide-group__content a:hover {
  text-decoration: none !important;
}
</style>
<script>
import { loadImg } from "../../config.js";
export default {
  data() {
    return {
      news: [],
      urlImg: loadImg,
      options: {
        perPage: 1,
        pagination: false,
        gap: ".5rem",
        fixedWidth: "15rem",
        arrows: false,
      },
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    strReplace(str) {
      return str.replaceAll(" ", "-");
    },
    limitTitle(text) {
      if (text.length > 30) {
        return text.slice(0, 30) + " ...";
      } else {
        return text;
      }
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
