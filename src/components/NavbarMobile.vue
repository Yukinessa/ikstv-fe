<template>
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
  </b-navbar>
</template>
