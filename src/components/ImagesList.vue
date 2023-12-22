<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import { Image } from "../types";

const emit = defineEmits(["addFavorite"]);
defineProps(["albumImages"]);

const handleFavorite = (image: Image) => {
  emit("addFavorite", image);
};
</script>

<template>
  <v-container mt-2>
    <v-row>
      <v-col
        v-for="image in albumImages"
        :key="image.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          :src="image.url"
          :lazy-src="image.thumbnailUrl"
          aspect-ratio="1"
          cover
          class="bg-grey-lighten-2"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
          <div>
            <v-btn
              v-if="image.isFavorite"
              size="small"
              color="pink"
              variant="text"
              icon="mdi-heart"
            ></v-btn>
            <v-btn
              v-else
              @click="handleFavorite(image)"
              size="small"
              color="pink"
              variant="text"
              icon="mdi-heart-outline"
            ></v-btn>
          </div>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>
