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
    <v-row class="blue lighten-4 mt-6" justify="center" align-content="center">
      <v-card class="mx-auto" max-width="500">
        <p>アプリの説明</p>
        <Description class="bg-pink-lighten-5">
          <template #my-slot="{ id, body }">
            <div class="description">
              <p>{{ id }} : {{ body }}</p>
            </div>
          </template>
        </Description>
      </v-card>
    </v-row>
  </v-col>
</template>
