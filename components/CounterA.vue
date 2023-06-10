<script setup>
  import CounterB from './CounterB.vue'
</script>
<template>
  <v-row class="blue lighten-4 mt-6" justify="center" align-content="center">
    <v-card title="カウンターアプリ" class="mx-auto" max-width="300">
      <img src="~/assets/counter.app.jpeg" class="mx-auto" />
      <CounterB />
    </v-card>
  </v-row>
</template>
