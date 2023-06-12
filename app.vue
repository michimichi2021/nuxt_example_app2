<script setup>
  import CounterA from './components/CounterA.vue'
  import { provide, ref } from 'vue'

  const count = ref(0)
  const addCount = () => {
    count.value++
  }
  const deleteCount = () => {
    count.value--
  }

  watch(count, () => {
    alert('数字が変わりました')
  })

  provide('count', count)
  provide('addCount', addCount)
  provide('deleteCount', deleteCount)
</script>

<template>
  <v-col jusitfy="center">
    <CounterA />
  </v-col>
</template>
