<template>
  <v-toolbar app dark color="purple-accent-4 text-white">
    <v-toolbar-title>Photos Album</v-toolbar-title>

    <RouterLink to="/">
      <v-btn class="text-none text-subtitle-1" color="white">Home</v-btn>
    </RouterLink>
    <RouterLink to="/favorite">
      <v-btn class="text-none text-subtitle-1" color="white"
        >Favorites</v-btn
      ></RouterLink
    >
  </v-toolbar>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped></style>
