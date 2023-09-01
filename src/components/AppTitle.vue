<script setup lang="ts">
import { toRefs } from 'vue'

const props = defineProps({
  label: {
    type: String,
    required: true,
  },
})
const { label } = toRefs(props)
</script>

<template>
  <h1 class="text-3xl font-bold pb-4">{{ label }}</h1>
</template>
