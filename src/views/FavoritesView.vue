<script setup>
import { ref, onMounted } from "vue";
import { store } from "../store/store";
import ImagesList from "../components/ImagesList.vue";
</script>

<template>
  <div class="d-flex justify-center mt-5">
    <h1 text-center>Your favorite images</h1>
  </div>
  <div
    v-if="Object.keys(store.images).length === 0"
    class="d-flex justify-center mt-5"
  >
    <h4>You don't have favorite images yet</h4>
  </div>
  <ImagesList v-else :albumImages="Object.values(store.images)" />
</template>
