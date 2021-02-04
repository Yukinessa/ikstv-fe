<template>
  <div>
    <h3 style="color:white; ">Kudu Reti Lur</h3>
    <v-row class="mt-3">
      <v-col
        v-for="item in kudureti.slice(0, 3)"
        :key="item.id"
        cols="12"
        sm="4"
      >
        <router-link :to="'/kudu-reti/' + strReplace(item.title)">
          <v-card
            :class="`rounded-lg`"
            style="background-color:white !important"
            class="mx-auto"
            max-width="300"
          >
            <v-img
              :class="`rounded-lg`"
              class="white--text align-end"
              height="auto"
              v-bind:src="urlImg + '/article/' + item.url"
            >
            </v-img>
          </v-card>
        </router-link>
      </v-col>
    </v-row>
    <router-link to="/list-kudureti" v-if="kudureti.length > 3">
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
    <br />
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
