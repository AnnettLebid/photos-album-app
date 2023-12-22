<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <input
          type="text"
          id="search"
          placeholder="Search photos..."
          class="w-100 px-2 py-1 rounded border border-primary box-shadow"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
