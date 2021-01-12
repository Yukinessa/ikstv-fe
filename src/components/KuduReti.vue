<template>
  <div>
    <h3 style="color:white; ">Koe Kudu Reti</h3>
    <v-row>
      <v-col v-for="item in kudureti" :key="item.id" cols="12" sm="4">
        <v-card
          :class="`rounded-lg`"
          style="background-color:white !important"
          class="mx-auto"
          max-width="300"
        >
          <v-img
            :class="`rounded-lg`"
            class="white--text align-end"
            height="200px"
            v-bind:src="urlImg + 'article/' + item.url"
          >
            <v-card-title>
              <v-img src="@/assets/label-tittle.png" height="40px">
                <div class="my-2 ml-8 subtitle-2">
                  <span class="white--text" style="font-size:14px;">{{
                    limitTitle(item.title)
                  }}</span>
                </div>
              </v-img>
            </v-card-title>
          </v-img>
          <v-card-text class="text--primary">
            {{ limitText(item.text) }}
          </v-card-text>
          <v-card-actions>
            <router-link :to="'/kudu-reti/' + strReplace(item.title)">
              <v-btn color="blue" text>
                Baca Selanjutnya
              </v-btn>
            </router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <a
      id="lanjut"
      style="padding-top:1rem; color:white; margin-left:auto; display:block; text-align:right"
      href=""
    >
      Lebih Lanjut >
    </a>
  </div>
</template>

<script>
import loadImg from "../../config";
export default {
  data() {
    return {
      kudureti: [],
      urlImg: loadImg,
    };
  },
  mounted() {
    this.getArticle();
  },
  methods: {
    limitText(text) {
      return text.slice(0, 50) + " ...";
    },
    limitTitle(text) {
      return text.slice(0, 26) + " ...";
    },
    getArticle() {
      this.axios
        .get(process.env.VUE_APP_IP_ADDRESS + "info/funfact")
        .then((response) => {
          this.kudureti = response.data.datas;
        });
    },
    strReplace(str) {
      return str.replaceAll(" ", "-");
    },
  },
};
</script>

<style>
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
