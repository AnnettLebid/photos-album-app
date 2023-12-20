<script setup lang="ts">
import { useApi } from "../composables/useApi";
import { BASE_URL } from "../helpers/constants";
import AlbumList from "../components/AlbumsList.vue";
import router from "../router";

const { data, loading, error } = useApi(BASE_URL);

const showAlbum = (id: string) => {
  router.push(`/albums/${id}`);
};
</script>

<template>
  <v-container>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <AlbumList v-if="data.length > 0" :albums="data" @showAlbum="showAlbum" />
  </v-container>
</template>
