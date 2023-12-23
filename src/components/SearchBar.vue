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
          class="w-100 px-2 py-1 rounded border border-primary box-shadow"
          :placeholder="$t('search.search_placeholder')"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
          :style="{
            direction: $i18n.locale === `en` ? `ltr` : `rtl`,
          }"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
