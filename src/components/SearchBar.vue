<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <!-- <v-text-field
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    type="input"
    density="compact"
    variant="solo"
    append-inner-icon="mdi-magnify single-line hide-details"
  > -->

  <v-container>
    <v-card>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <!-- <v-text-field
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    > -->
      <!-- <input
        type="text"
        placeholder="Search photos..."
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="m-20"
      /> -->
      <!-- </v-text-field> -->
    </v-card>
  </v-container>
  <!-- </v-text-field> -->
</template>

<!-- <script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <v-text-field
    :value="searchValue"
    @input="$emit('update:searchValue', $event.target.value)"
    :loading="loading"
    density="compact"
    variant="solo"
    label="Search photos..."
    append-inner-icon="mdi-magnify"
    single-line
    hide-details
  />
  <p>Message is: {{ searchValue }}</p>
</template> -->
