<script setup lang="ts">
interface Emits {
  (e: "submit"): void;
}
const emit = defineEmits<Emits>();
</script>

<template>
  <form autocomplete="off" @submit.prevent="emit('submit')"><slot></slot></form>
</template>

<style lang="scss" scoped></style>
