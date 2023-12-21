<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <v-toolbar app dark color="purple-accent-4 text-white px-2">
    <v-toolbar-title class="hidden-xs">Photos Album</v-toolbar-title>
    <div>
      <img
        src="@/assets/gallery.svg"
        alt="Not Found"
        class="content-center hidden-sm-and-up"
      />
    </div>
    <div class="ml-auto">
      <RouterLink to="/">
        <v-btn class="text-none text-subtitle-1" color="white" flat>Home</v-btn>
      </RouterLink>
      <RouterLink to="/favorite">
        <v-btn class="text-none text-subtitle-1" color="white" flat
          >Favorites</v-btn
        >
      </RouterLink>
    </div>
  </v-toolbar>
</template>
