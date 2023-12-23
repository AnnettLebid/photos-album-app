<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <v-card class="mx-auto" height="60" style="z-index: 10">
    <v-layout>
      <v-app-bar color="purple-accent-4 text-white px-2">
        <v-app-bar-title class="hidden-xs">{{
          $t("nav.title")
        }}</v-app-bar-title>
        <div>
          <img
            src="@/assets/gallery.svg"
            alt="Not Found"
            class="content-center hidden-sm-and-up"
          />
        </div>
        <div class="ml-auto">
          <v-btn
            @click="$i18n.locale = $i18n.locale === 'en' ? 'he' : 'en'"
            class="text-none text-subtitle-1"
            color="white"
            append-icon="mdi-web"
            >{{ $i18n.locale === `en` ? "HE" : "EN" }}</v-btn
          >
          <RouterLink to="/">
            <v-btn class="text-none text-subtitle-1" color="white" flat>{{
              $t("nav.home")
            }}</v-btn>
          </RouterLink>
          <RouterLink to="/favorite">
            <v-btn
              class="text-none text-subtitle-1"
              color="white"
              flat
              append-icon="mdi-heart"
              >{{ $t("nav.favorites") }}</v-btn
            >
          </RouterLink>
        </div>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<!-- <template>
  <v-toolbar app dark position="fixed" color="purple-accent-4 text-white px-2">
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
        <v-btn
          class="text-none text-subtitle-1"
          color="white"
          flat
          append-icon="mdi-heart"
          >Favorites</v-btn
        >
      </RouterLink>
    </div>
  </v-toolbar>
</template> -->

<style>
.router-link-exact-active.v-btn {
  font-weight: bold;
  color: red;
  text-decoration: none;
}
</style>
