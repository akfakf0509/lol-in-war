<script setup lang="ts">
interface Props {
  text: string;
}
defineProps<Props>();
</script>

<template>
  <h1 class="title" v-text="text"></h1>
</template>

<style lang="scss" scoped>
.title {
  @include font-heading-l;
  margin-bottom: 24px;
}
</style>
