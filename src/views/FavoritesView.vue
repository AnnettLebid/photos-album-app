<script setup>
import { ref, onMounted } from "vue";
import ImagesList from "../components/ImagesList.vue";

const favoriteImages = ref([]);
console.log("favoriteImages", favoriteImages.value);
onMounted(() => {
  const savedFavoriteImages = JSON.parse(localStorage.getItem("favorites"));
  console.log("savedFavoriteImages favorites view", savedFavoriteImages);

  if (savedFavoriteImages) {
    favoriteImages.value = savedFavoriteImages;
  }
  console.log("favoriteImages", favoriteImages);
});
</script>

<template>
  <div class="d-flex justify-center mt-5">
    <h1 text-center>Your favorite images</h1>
  </div>
  <ImagesList v-if="favoriteImages.value" :albumImages="favoriteImages" />
  <!-- <div v-else class="d-flex justify-center mt-5">
    <h4>You don't have favorite images yet</h4>
  </div> -->
</template>
