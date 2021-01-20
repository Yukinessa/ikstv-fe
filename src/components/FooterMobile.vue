<template>
  <div class="footer" style="background-color: red">
    <b-container>
      <b-row>
        <b-col sm="1" class="p-2">
          <img
            src="@/assets/logo-white.png"
            width="100"
            style="display: block; margin-left:auto; margin-right: auto"
          />
          <!-- </a> -->
        </b-col>
        <b-col sm="1">
          <p class="text-light text-justify" style="line-height: 2rem">
            Kami memberikan informasi se-kota semarang mulai dari info
            kecelakaan hingga info sosial. Ikuti pembaruan berita kami melalui
            website dan sosial media yang tersedia
          </p>
        </b-col>
        <b-col sm="1" class="text-center" style="line-height: 4rem">
          <h5 class="font-weight-bold text-light">
            EXPLORE
          </h5>
          <a id="beranda" class="text-light" style="font-size:15px;" href=""
            >Beranda</a
          >

          <a
            id="news"
            class="text-light"
            style="font-size:15px; display:block"
            @click="test('news')"
            >Berita Terkini</a
          >
          <a
            id="lost-item"
            class="text-light"
            style="font-size:15px; display:block"
            href=""
            >Info Kehilangan</a
          >
          <a
            id="iklan"
            class="text-light"
            style="font-size:15px; display:block"
            href=""
            >Iklan</a
          >
        </b-col>
        <b-col sm="1">
          <h5 style="color:white;  text-align:center">
            FOLLOW US
          </h5>
          <div style="text-align:center; margin-top: 1rem">
            <a href="">
              <img src="@/assets/icon-instagram.png" width="30" />
            </a>
            <a href="">
              <img
                src="@/assets/icon-youtube.png"
                width="30"
                style="margin-left:1rem"
              />
            </a>
            <a href="">
              <img
                src="@/assets/icon-wa.png"
                width="25"
                style="margin-left:1rem"
              />
            </a>
          </div>
        </b-col>
        <b-col sm="1" class="mt-5 text-light text-center font-weight-bold">
          &copy; {{ year }} Info Kejadian Semarang</b-col
        >
      </b-row>
    </b-container>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      year: moment().format("YYYY"),
    };
  },
};
</script>
