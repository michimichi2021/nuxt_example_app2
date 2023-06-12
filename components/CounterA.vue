<script setup>
  import CounterB from './CounterB.vue'
</script>
<template>
  <v-row class="blue lighten-4 mt-6" justify="center" align-content="center">
    <v-card class="mx-auto" max-width="300">
      <v-list jusitfy="center" align-content="center">
        アプリ名:<v-text-field v-model="title" />
        <v-list>{{ title }}</v-list>
      </v-list>
      <img src="~/assets/counter.app.jpeg" class="mx-auto" />
      <CounterB />
    </v-card>
  </v-row>
</template>
