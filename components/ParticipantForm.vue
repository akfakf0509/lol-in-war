<script setup lang="ts">
interface Emits {
  (e: "submit", name: string): void;
}
const emit = defineEmits<Emits>();

const name = ref("");

function handleSubmit() {
  if (!name.value) return;
  emit("submit", name.value);
  name.value = "";
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit()">
    <Header text="참가자 추가"></Header>
    <input v-model="name" class="form__input" />
    <button type="submit">추가</button>
  </form>
</template>

<style lang="scss" scoped>
.form {
  &__input {
    margin-right: 8px;

    background-color: $color-surface;
    border: 1px solid $color-border;
  }
}
</style>
