<template>
  <div id="app">
    <v-app>
      <router-view :key="$route.fullPath"></router-view>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>
