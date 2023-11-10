<script setup lang="ts">
interface Props {
  name: string;
}
defineProps<Props>();
</script>

<template>
  <li>
    <p v-text="name" class="item-name"></p>
  </li>
</template>

<style lang="scss" scoped>
.item-name {
  @include font-heading-xs;
}
</style>
