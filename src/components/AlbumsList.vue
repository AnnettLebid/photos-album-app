<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["showAlbum"]);
const { albums } = defineProps(["albums"]);

const handleAlbum = (id: number) => {
  emit("showAlbum", id);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col
        v-for="album in albums"
        :key="album.id"
        cols="12"
        sm="6"
        md="3"
        lg="3"
      >
        <v-hover v-slot="{ isHovering, props }" close-delay="200">
          <v-card
            color="yellow-darken-3"
            :elevation="isHovering ? 16 : 2"
            :class="{ 'on-hover': isHovering }"
            v-bind="props"
          >
            <v-card-text>
              <v-chip v-text="album.title"></v-chip>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions class="justify-center">
              <v-btn
                @click="handleAlbum(album.id)"
                class="text-none text-subtitle-1"
                color="white"
                flat
              >
                {{ $t("albums_list.view_photos") }}
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
