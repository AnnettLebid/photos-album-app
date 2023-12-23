<script setup>
import { ref, onMounted } from "vue";
import { store } from "../store/store";
import ImagesList from "../components/ImagesList.vue";
</script>

<template>
  <div
    v-if="Object.keys(store.images).length === 0"
    class="d-flex justify-center mt-5"
  >
    <h4>{{ $t("favorites.no_favorites_message") }}</h4>
  </div>
  <div v-else class="d-flex flex-column justify-center mt-5">
    <h1 class="text-center">{{ $t("favorites.title") }}</h1>
    <ImagesList :albumImages="Object.values(store.images)" />
  </div>
</template>
