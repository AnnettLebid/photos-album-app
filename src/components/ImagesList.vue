<script setup>
import { defineProps, defineEmits } from "vue";

defineProps(["albumImages"]);
</script>

<template>
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
        <v-btn flat color="pink" id="no-background-hover">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </v-img>
    </v-col>
  </v-row>
</template>
