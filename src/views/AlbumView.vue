<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useApi } from "../composables/useApi";
import ImagesList from "../components/ImagesList.vue";
import SearchBar from "../components/SearchBar.vue";
import { BASE_URL } from "../helpers/constants";
import { Album, Image } from "../types";

const route = useRoute();
const searchText = ref("");
const albumImages = ref([]);

const { data, loading, error } = useApi(
  `${BASE_URL}/${route.params.id}/photos`
);

watch(data, () => {
  albumImages.value = data.value;
});

watch(searchText, () => {
  const filteredImages = albumImages.value.filter((image: Image) =>
    image.title.toLowerCase().includes(searchText.value.toLowerCase())
  );
  albumImages.value = filteredImages;
  console.log("filteredImages", filteredImages);
});

const addFavorite = (album: Album) => {
  console.log("addFavorite", album);
  const savedImages = localStorage.getItem("favorites") as string | null;
  if (savedImages) {
    const parsedImages = JSON.parse(savedImages);
    const newImages = [...parsedImages, album];
    localStorage.setItem("favorites", JSON.stringify(newImages));
  } else {
    localStorage.setItem("favorites", JSON.stringify([album]));
  }
};

// const createDebounce = () => {
//   let timeoutID;
//   return (e) => {
//     searchText.value = e.target.value;
//     clearTimeout(timeoutID);
//     timeoutID = setTimeout(() => {
//       console.log(searchText.value);
//     }, 500);
//   };
// };
</script>

<template>
  <v-container>
    <input v-model="searchText" />
    <!-- <SearchBar v-model="searchText" /> -->
    <p>{{ searchText }}</p>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <v-divider></v-divider>
    <ImagesList
      v-if="albumImages.length > 0"
      :albumImages="albumImages"
      @addFavorite="addFavorite"
    />
  </v-container>
</template>
