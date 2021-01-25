<template>
  <b-navbar toggleable="lg" type="dark">
    <b-navbar-brand class="d-block mx-auto mb-2">
      <router-link :to="'/'">
        <b-img
          alt="Logo-navbar"
          contain
          :src="require('../assets/logo-white.png')"
          width="60"
        ></b-img>
      </router-link>
    </b-navbar-brand>
  </b-navbar>
</template>
