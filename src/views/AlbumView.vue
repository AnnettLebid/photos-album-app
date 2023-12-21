<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import { useApi } from "../composables/useApi";
import ImagesList from "../components/ImagesList.vue";
import SearchBar from "../components/SearchBar.vue";
import { BASE_URL } from "../helpers/constants";

const route = useRoute();
const searchValue = ref("");

const {
  data: albumImages,
  loading,
  error,
} = useApi(`${BASE_URL}/${route.params.id}/photos`);
</script>

<template>
  <v-container>
    <SearchBar v-model="searchValue" />
    <p>{{ searchValue }}</p>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ImagesList v-if="albumImages.length > 0" :albumImages="albumImages" />
  </v-container>
</template>
