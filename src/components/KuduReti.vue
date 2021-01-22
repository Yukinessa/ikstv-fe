<template>
  <div v-if="!$isMobile()">
    <h3 style="color:white; ">Kudu Reti Lur</h3>
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
    <router-link to="/list-kudureti">
      <a
        id="lanjut"
        style="padding-top:1rem; color:white; margin-left:auto; display:block; text-align:right"
        href=""
      >
        Lebih Lanjut >
      </a>
    </router-link>
  </div>
  <!-- Mobile Version -->
  <div v-else>
    <b-container>
      <b-row>
        <h5 style="color:white; " class="font-weight-bold">Kudu Reti Lur</h5>
        <swiper ref="mySwiper" :options="swiperOptions" class="ml-2">
          <swiper-slide v-for="item in kudureti" :key="item.id">
            <b-card
              :img-src="urlImg + 'article/' + item.url"
              img-alt="Image"
              img-top
              img-width="156"
              img-height="150"
              tag="article"
              style="max-width: 18rem; height: 370px"
              class="mb-2 shadow"
            >
              <b-card-text class="font-weight-bold">
                <p>{{ limitTitle(item.title) }}</p>
              </b-card-text>

              <b-card-text>
                <p class="text-muted" style="font-size: 11px">
                  {{ limitText(item.text) }}
                </p>
              </b-card-text>
              <router-link
                :to="'/kudu-reti/' + strReplace(item.title)"
                tag="button"
              >
                <b-button
                  href="#"
                  variant="primary"
                  style="font-size: 10px; color: white; margin-top: 1rem"
                  >Baca Selengkapnya</b-button
                >
              </router-link>
            </b-card>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import loadImg from "../../config";
export default {
  data() {
    return {
      kudureti: [],
      urlImg: loadImg,
      swiperOptions: {
        slidesPerView: 1,
        // spaceBetween: -6,
        pagination: {
          el: ".swiper-pagination",
        },
        loop: true,
        // Some Swiper option/callback...
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          360: {
            slidesPerView: 1,
            spaceBetween: -20,
          },
          375: {
            slidesPerView: 1,
            spaceBetween: -30,
          },
          // when window width is >= 480px
          400: {
            slidesPerView: 1,
            spaceBetween: -80,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      },
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
  mounted() {
    this.getArticle();
    this.swiper.slideTo(2, 1000, false);
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
