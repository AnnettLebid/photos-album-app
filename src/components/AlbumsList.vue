<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const emit = defineEmits(["showAlbum"]);
defineProps(["albums"]);

const handleAlbum = (id: string) => {
  emit("showAlbum", id);
};
</script>

<template>
  <v-row no-gutters>
    <v-col
      v-for="album in albums"
      :key="album.id"
      cols="12"
      sm="6"
      md="3"
      lg="3"
    >
      <v-card color="yellow-darken-3">
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
            View photos
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
