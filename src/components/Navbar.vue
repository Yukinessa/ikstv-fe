<template>
  <v-app-bar app color="Dark" dark>
    <router-link to="/" tag="button">
      <a>
        <div class="d-flex align-center">
          <v-img
            alt="Logo-navbar"
            class="shrink mr-2"
            contain
            src="../assets/logo-white.png"
            width="60"
          />
        </div>
      </a>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn text>
      <router-link to="/" tag="button"
        ><span class="mr-2" style="text-align=center">HOME</span></router-link
      >
    </v-btn>
    <v-btn text>
      <span class="mr-2" @click="test('news')">News</span>
    </v-btn>
    <v-btn text @click="goWhatsapp">
      <span class="mr-2">Contact</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    test(refName) {
      this.$emit("testing", refName);
    },
    goWhatsapp() {
      window.open(
        "https://wa.me/6282180888164?text=Saya%20ingin%20mengiklankan%20produk%20saya%20prosedurnya%20bagaimana"
      );
    },
  },
};
</script>

<style>
.v-application ul,
.v-application ol {
  margin-top: 1rem;
  padding-left: 0;
}
.navbar-dark .navbar-nav .nav-link {
  color: white;
}
</style>
