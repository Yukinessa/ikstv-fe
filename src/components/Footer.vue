<template>
  <div>
    <div class="footer" style="background-color:red">
      <v-container>
        <v-layout row>
          <!-- About IKS section -->
          <v-flex
            xs12
            md4
            style="padding-left:140px; padding-top:30px"
            class="container-footer"
          >
            <a href="">
              <img src="@/assets/logo-white.png" width="100" />
            </a>
            <p style="color:white; text-align:justify; padding-top:20px">
              Kami memberikan informasi se-kota semarang mulai dari info
              kecelakaan hingga info sosial. Ikuti pembaruan berita kami melalui
              website dan sosial media yang tersedia
            </p>
          </v-flex>
          <!-- Explore section -->
          <v-flex
            xs12
            md4
            style="padding-left:150px; padding-top:40px; padding-bottom:60px"
          >
            <h3
              style="color: white; font-weight:bold; position: absolute; top:42px"
            >
              EXPLORE
            </h3>
            <br />
            <br />
            <a id="beranda" style="color:white; font-size:15px" href=""
              >Beranda</a
            >
            <br />
            <br />
            <a
              id="news"
              style="color:white; font-size:15px"
              @click="test('news')"
              >Berita Terkini</a
            >
            <br />
            <br />
            <a id="lost-item" style="color:white; font-size:15px" href=""
              >Info Kehilangan</a
            >
            <br />
            <br />
            <a id="advertise" style="color:white; font-size:15px" href=""
              >Iklan</a
            >
          </v-flex>
          <!-- Update section -->
          <v-flex xs12 md4>
            <h3
              style="color: white; font-weight:bold; position: absolute; left: 1065px; top:42px"
            >
              FOLLOW US
            </h3>
            <br />
            <br />
            <v-flex xs6 md3>
              <a href="">
                <img
                  src="@/assets/icon-instagram.png"
                  width="70"
                  style="position: absolute;
                    right:310px; 
                    top: 82px;
                    padding: 10px;"
                />
              </a>
              <a href="">
                <img
                  src="@/assets/icon-youtube.png"
                  width="70"
                  style="position: absolute;
                    top:82px;
                    right: 200px;
                    padding: 10px;"
                />
              </a>
              <h3
                style="position:absolute; left: 1070px; top:170px; color:white; font-weight:bold"
              >
                CONTACT
              </h3>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: this.$isMobile(),
    };
  },
  mounted() {
    console.log(this.$isMobile);
  },
  methods: {
    test(refName) {
      this.$emit("testing", refName);
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
#advertise:link {
  text-decoration: none;
}

#beranda:visited,
#news:visited,
#lost-item:visited,
#advertise:visited {
  text-decoration: none;
}

#beranda:hover,
#news:hover,
#lost-item:hover,
#advertise:hover {
  text-decoration: underline;
}

#beranda:active,
#news:active,
#lost-item:active,
#advertise:active {
  text-decoration: underline;
}
</style>
