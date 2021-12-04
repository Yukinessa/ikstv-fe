<template>
  <div class="footer" style="background-color:#fa2c2c">
    <v-container>
      <b-row>
        <b-col class="mt-5">
          <a href="">
            <img src="@/assets/logo-white.png" width="100" />
          </a>
          <p class="mt-6" style="color:white; text-align:justify">
            Kami memberikan informasi se-kota semarang mulai dari info
            kecelakaan hingga info sosial. Ikuti pembaruan berita kami melalui
            website dan sosial media yang tersedia
          </p>
        </b-col>
        <b-col class="mt-6 text-center">
          <h3 class="mb-5" style="color: white; font-weight:bold;">
            EXPLORE
          </h3>
          <div class="mb-4 ">
            <div class="mb-4">
              <router-link to="/" tag="button">
                <a
                  class="mt-5 mb-4"
                  id="beranda"
                  style="color:white; font-size:15px"
                >
                  Beranda
                </a>
              </router-link>
            </div>
            <div class="mb-4 d-block">
              <a
                class=""
                id="news"
                style="color:white; font-size:15px"
                @click="smoothScroll('news')"
              >
                Berita Terkini
              </a>
            </div>
            <div class="d-block mb-4">
              <a
                class=" mb-2"
                id="lost-item"
                style="color:white; font-size:15px"
                @click="smoothScroll('infoBarang')"
              >
                Info Kehilangan
              </a>
            </div>
            <div class="d-block mb-4">
              <a
                @click="goWhatsapp"
                id="iklan"
                style="color:white; font-size:15px"
              >
                Iklan
              </a>
            </div>
          </div>
        </b-col>
        <b-col class="text-center mt-6">
          <h3 class="mb-5 text-light " style="font-weight:bold">
            FOLLOW US
          </h3>
          <a @click="goInstagram">
            <img class="mr-10" src="@/assets/icon-instagram.png" width="50" />
          </a>
          <a @click="goYoutube">
            <img class="ml-2" src="@/assets/icon-youtube.png" width="50" />
          </a>
          <v-row justify="center">
            <v-dialog
              v-model="dialog"
              fullscreen
              hide-overlay
              transition="dialog-bottom-transition"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  style="color:red"
                  class="mt-10"
                  color="white"
                  position="fixed"
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Lapor Berita Disini
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark color="red">
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Lapor Berita</v-toolbar-title>
                </v-toolbar>
                <v-list three-line subheader>
                  <v-container grid-list-xs>
                    <form @submit="submitForm" enctype="multipart/form-data">
                      <v-text-field
                        name="instagram"
                        label="Username Instagram"
                        id="instagram"
                        style="color:white"
                        dark
                        hint="Identitas instagram untuk validasi laporan"
                        v-model="form.instagram"
                      >
                      </v-text-field>
                      <v-text-field
                        name="location"
                        label="Lokasi Kejadian"
                        id="location"
                        style="color:white"
                        hint="Lokasi Kejadian yang terjadi pada laporan"
                        dark
                        v-model="form.location"
                      >
                      </v-text-field>
                      <v-textarea
                        id="description"
                        label="Detail Laporan"
                        hint="Ceritakan laporan anda secara singkat dan jelas"
                        dark
                        enctype
                        v-model="form.description"
                      ></v-textarea>
                      <v-btn type="submit" color="success">Submit</v-btn>
                    </form>
                  </v-container>
                </v-list>
              </v-card>
            </v-dialog>
          </v-row>
        </b-col>
      </b-row>
    </v-container>
    <div class="text-center text-light mt-15">
      <p>© Copyright {{ year }} Info Kejadian Semarang | All right reserved.</p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      year: moment().format("YYYY"),
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false,
      form: {
        instagram: "",
        location: "",
        description: "",
      },
    };
  },
  methods: {
    smoothScroll(refName) {
      this.$emit("testing", refName);
    },
    goInstagram() {
      window.open("https://www.instagram.com/infokejadiansemarang/");
    },
    goYoutube() {
      window.open("https://www.youtube.com/channel/UCSS_5sakJUZPxud7SHUweuQ");
    },
    goWhatsapp() {
      window.open(
        "https://wa.me/6282180888164?text=Saya%20ingin%20mengiklankan%20produk%20saya%20prosedurnya%20bagaimana"
      );
    },
    submitForm(e) {
      e.preventDefault();
      let formData = new FormData();
      formData.append("instagram", this.form.instagram);
      formData.append("location", this.form.location);
      formData.append("description", this.form.description);
      const config = {
        headers: { "content-type": "multipart/form-data" },
      };
      this.axios
        .post(process.env.VUE_APP_IP_ADDRESS + "lapor", formData, config)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.footer {
  position: absolute;
  left: 0px;
  width: 100%;
  padding: 10px;
}

#beranda:link,
#news:link,
#lost-item:link,
#iklan:link {
  text-decoration: none;
}

#beranda:visited,
#news:visited,
#lost-item:visited,
#iklan:visited {
  text-decoration: none;
}

#beranda:hover,
#news:hover,
#lost-item:hover,
#iklan:hover {
  text-decoration: underline;
}

#beranda:active,
#news:active,
#lost-item:active,
#iklan:active {
  text-decoration: underline;
}
</style>
