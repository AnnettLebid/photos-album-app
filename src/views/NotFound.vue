<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <v-container fill-height>
    <v-row justify="center" align="center" smAndUp:margin-t-left>
      <v-col cols="12" md="3" class="text-center">
        <img
          src="@/assets/space-2.svg"
          alt="Not Found"
          class="content-center"
        />
      </v-col>
      <v-col cols="12" md="3" class="text-center mdAndUp:text-left">
        <h1>404</h1>
        <h2>{{ $t("not_found.title") }}</h2>
        <p class="mb-3">
          {{ $t("not_found.message") }}
        </p>
        <RouterLink to="/">
          <v-btn color="teal-accent-4 white--text align">{{
            $t("not_found.home_button")
          }}</v-btn>
        </RouterLink>
      </v-col>
    </v-row>
  </v-container>
</template>
