<script setup>
  import { inject } from 'vue'
  const count = inject('count')
  const addCount = inject('addCount')
  const deleteCount = inject('deleteCount')
</script>

<template>
  <v-card-item>
    Count:{{ count }}
    <v-btn color="primary" @click="addCount">+</v-btn>
    <v-btn color="secondary" @click="deleteCount">-</v-btn>
  </v-card-item>
</template>
