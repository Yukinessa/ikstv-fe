<template>
  <div v-if="!$isMobile()">
    <v-app-bar app color="Dark" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Logo-navbar"
          class="shrink mr-2"
          contain
          src="../assets/logo-white.png"
          width="60"
        />
      </div>
      <v-spacer></v-spacer>
      <v-btn text>
        <router-link to="/" tag="button"
          ><span class="mr-2" style="text-align=center">HOME</span></router-link
        >
      </v-btn>
      <v-btn text>
        <span class="mr-2" @click="test('news')">News</span>
      </v-btn>
      <v-btn text>
        <span class="mr-2">Contact</span>
      </v-btn>
    </v-app-bar>
  </div>
  <div v-else>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand>
        <router-link :to="'/'">
          <v-img
            alt="Logo-navbar"
            class="shrink mr-2"
            contain
            src="../assets/logo-white.png"
            width="60"
          />
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/" tag="button"
              ><span class="mr-2" style="text-align=center"
                >Home</span
              ></router-link
            >
          </b-nav-item>
          <b-nav-item @click="test('news')">
            News
          </b-nav-item>
          <b-nav-item @click="test('news')">
            Contact
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  methods: {
    test(refName) {
      this.$emit("testing", refName);
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
