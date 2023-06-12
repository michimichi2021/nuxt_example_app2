<template>
  <input
    type="text"
    @input="
      emit('update:moduleValue', ($event.target as HTMLInputElement).value)
    "
  />
</template>
<script setup lang="ts">
  defineProps<{
    modelValue: string
  }>()
  const emit = defineEmits<{
    (e: 'update:moduleValue', value: string): void
  }>()
</script>
