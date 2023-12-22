<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import { useApi } from "../composables/useApi";
import ImagesList from "../components/ImagesList.vue";
import SearchBar from "../components/SearchBar.vue";
import { BASE_URL } from "../helpers/constants";
import { Image } from "../types";
import { store } from "../store/store";

const route = useRoute();

const searchText = ref("");
const albumImages = ref([]);

const { data, loading, error } = useApi(
  `${BASE_URL}/${route.params.id}/photos`
);

watch(searchText, () => {
  if (searchText.value === "") {
    albumImages.value = [];
  } else {
    const filteredImages = data.value.filter((image: Image) =>
      image.title.toLowerCase().includes(searchText.value.toLowerCase())
    );
    albumImages.value = filteredImages;
  }
});

const addFavorite = (image: Image) => {
  store.addImage(image);
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
    <SearchBar v-model="searchText" />
    <v-divider></v-divider>
    <div v-if="loading" class="d-flex justify-center">
      <v-progress-circular
        :size="70"
        :width="7"
        color="purple"
        indeterminate
      ></v-progress-circular>
    </div>
    <div v-else-if="error">Error: {{ error }}</div>
    <ImagesList
      :albumImages="searchText ? albumImages : data"
      @addFavorite="addFavorite"
    />
  </v-container>
</template>
