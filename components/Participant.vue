<script setup lang="ts">
interface Props {
  name: string;
}

defineProps<Props>();
</script>

<template>
  <li>
    {{ name }}
  </li>
</template>

<style lang="scss" scoped></style>
