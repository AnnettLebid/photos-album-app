<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
import { Image } from "../utils/types";
import FullScreenImageView from "./FullScreenImageView.vue";

const currentImage = ref({});
const showModal = ref(false);

const emit = defineEmits(["addFavorite", "openFullScreen"]);
const props = defineProps(["albumImages"]);

const handleFavorite = (image: Image) => {
  emit("addFavorite", image);
};

const handleImage = (image: Image) => {
  showModal.value = true;
  currentImage.value = image;
};

const updateCurrentImage = (index: number) => {
  currentImage.value = props.albumImages[index];
};
</script>

<template>
  <v-container mt-2 style="overflow: auto">
    <v-row>
      <v-col
        v-for="image in albumImages"
        :key="image.id"
        class="d-flex child-flex"
        cols="4"
      >
        <v-img
          @click="handleImage(image)"
          :src="image.url"
          :lazy-src="image.thumbnailUrl"
          :alt="image.title"
          class="bg-grey-lighten-2"
          aspect-ratio="1"
          cover
          style="cursor: pointer"
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
              @click.stop="handleFavorite(image)"
              size="small"
              color="pink"
              variant="text"
              icon="mdi-heart-outline"
            ></v-btn>
          </div>
        </v-img>
      </v-col>
    </v-row>
    <Teleport to="body">
      <FullScreenImageView
        :show="showModal"
        :currentImage="currentImage"
        :albumImages="albumImages"
        @closeFullScreen="showModal = false"
        @updateCurrentImage="updateCurrentImage"
      >
        <template #header> </template>
      </FullScreenImageView>
    </Teleport>
  </v-container>
</template>
