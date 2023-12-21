<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["addFavorite"]);
const props = defineProps(["albumImages"]);

const handleFavorite = (image: number) => {
  emit("addFavorite", image);
};
console.log("albumImages", props);
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
              size="small"
              color="pink"
              variant="text"
              icon="mdi-heart"
            ></v-btn>
            <v-btn
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
