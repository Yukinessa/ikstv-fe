<template>
  <v-app>
    <v-main>
      <div class="grey darken-4">
        <v-container v-if="!$isMobile()">
          <div id="navbar">
            <Navbar @testing="onClickChild" />
          </div>

          <div id="advertise-top" style="padding-top:0.1rem">
            <AdvertiseDiamond />
          </div>

          <div id="highlight-news" style="padding-top:1rem" ref="news">
            <Highlight />
          </div>

          <div id="category-article-video" style="padding-top:2.5rem">
            <Category />
          </div>

          <div id="advertise-mid" style="padding-top:2.5rem">
            <AdvertiseGold />
          </div>

          <div id="kudu-reti" style="padding-top:2.5rem">
            <KuduReti />
          </div>

          <div id="advertise-bottom" style="padding-top:1rem">
            <AdvertiseSilver />
          </div>

          <div id="info-barang-hilang" style="padding-top:2rem">
            <infoBarang />
          </div>

          <div id="info-loke-sosial" style="padding-top:1rem">
            <infoSosial />
          </div>

          <!-- <div id="hiburan" style="padding-top:2rem">
          <Youtube />
        </div> -->

          <!-- <div id="advertise-divide2" style="padding-top:2rem">
            <Advertise2 />
          </div> -->

          <div id="our-partner" style="padding-top:2rem">
            <hr size="3" width="100%" color="white" />
            <Partner />
          </div>

          <div id="footer" style="padding-top:2rem">
            <Footer @testing="onClickChild" />
          </div>
        </v-container>
        <v-container v-else>
          <div id="navbar">
            <NavbarMobile @testing="onClickChild" />
          </div>

          <div id="advertise-top" style="padding-top:0.1rem">
            <AdvertiseDiamond />
          </div>

          <div id="highlight-news" class="mt-4" ref="news">
            <HighlightMobile />
          </div>

          <div id="category-article-video">
            <CategoryMobile />
          </div>

          <div id="advertise-mid" style="padding-top:2.5rem">
            <AdvertiseGold />
          </div>

          <div id="kudu-reti" style="padding-top:2.5rem">
            <KuduRetiMobile />
          </div>

          <div id="advertise-bottom" style="padding-top:1rem">
            <AdvertiseSilver />
          </div>

          <div id="info" style="padding-top:2rem"><InfoMobile /></div>

          <div id="our-partner" style="padding-top:2rem">
            <hr size="3" width="100%" color="white" />
            <PartnerMobile />
          </div>

          <div id="footer" style="padding-top:2rem">
            <FooterMobile @testing="onClickChild" />
          </div>
        </v-container>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "../components/Navbar";
import Highlight from "../components/Highlight";
import Category from "../components/Category";
import AdvertiseGold from "../components/advertiseGold";
import AdvertiseDiamond from "../components/advertiseDiamond";
import AdvertiseSilver from "../components/advertiseSilver";
import infoBarang from "../components/infoBarang";
import infoSosial from "../components/infoSosial";
// import Youtube from "../components/Youtube";
// import Advertise2 from "../components/Advertise2";
import Footer from "../components/Footer";
import Partner from "../components/Partner";
import KuduReti from "../components/KuduReti";

// mobile component
import NavbarMobile from "../components/NavbarMobile";
import HighlightMobile from "../components/HighlightMobile";
import CategoryMobile from "../components/CategoryMobile";
import KuduRetiMobile from "../components/KuduRetiMobile";
import InfoMobile from "../components/InfoMobile";
import PartnerMobile from "../components/PartnerMobile";
import FooterMobile from "../components/FooterMobile";

export default {
  name: "Home",
  components: {
    Navbar,
    Highlight,
    Category,
    AdvertiseDiamond,
    AdvertiseGold,
    AdvertiseSilver,
    infoBarang,
    infoSosial,
    Footer,
    Partner,
    KuduReti,

    // mobile component
    NavbarMobile,
    HighlightMobile,
    CategoryMobile,
    KuduRetiMobile,
    InfoMobile,
    PartnerMobile,
    FooterMobile,
  },
  data: () => ({
    //
  }),
  methods: {
    onClickChild(value) {
      var element = this.$refs[value];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
<style>
template {
  scroll-behavior: smooth;
}
</style>
