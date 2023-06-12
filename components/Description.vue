<script>
  export default {
    data() {
      return {
        items: []
      }
    },
    mounted() {
      this.items = [
        {
          id: 1,
          body: '+ボタンを押すとポップアップのお知らせが出てきて、カウンターの数字が1プラスされます'
        },
        {
          id: 2,
          body: '-ボタンを押すとポップアップのお知らせが出てきて、カウンターの数字が1マイナスされます'
        },
        {
          id: 3,
          body: 'アプリ名のフォームに文字を入力すると、フォームの下に文字が出てきます'
        }
      ]
    }
  }
</script>

<template>
  <v-list>
    <v-list-item v-if="!items.length"> Loading... </v-list-item>
    <v-list-item v-for="item in items">
      <slot name="my-slot" v-bind="item" />
    </v-list-item>
  </v-list>
</template>

<style scoped></style>
