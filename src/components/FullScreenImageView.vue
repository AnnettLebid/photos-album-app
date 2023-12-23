<script setup lang="ts">
import { Transition, defineEmits, defineProps } from "vue";
import { Image } from "../utils/types";

const props = defineProps(["show", "currentImage", "albumImages"]);
const emit = defineEmits(["closeFullScreen", "updateCurrentImage"]);

const handleClose = () => {
  emit("closeFullScreen");
};

const navigateImage = (direction: number) => {
  const currentIndex = props.albumImages.findIndex(
    (img: Image) => img.id === props.currentImage.id
  );
  const newIndex =
    (currentIndex + direction + props.albumImages.length) %
    props.albumImages.length;
  emit("updateCurrentImage", newIndex);
};
</script>

<template v-slot:default="true">
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <v-btn
            @click.stop="handleClose"
            density="compact"
            icon="mdi-window-close"
          />
        </div>
        <div class="d-flex align-center justify-between">
          <v-btn
            @click.stop="navigateImage(-1)"
            density="compact"
            icon="mdi-chevron-left"
            class="mr-2"
          />
          <v-img
            :src="currentImage.url"
            :lazy-src="currentImage.thumbnailUrl"
            :alt="currentImage.title"
            class="bg-grey-lighten-2"
            aspect-ratio="1"
            cover
          />
          <v-btn
            @click="navigateImage(1)"
            density="compact"
            icon="mdi-chevron-right"
            class="ml-2"
          />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(1, 1, 1, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 80vh;
  margin: auto;
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  margin-top: 0;
  display: flex;
  justify-content: left;
}
</style>
