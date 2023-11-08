<script setup lang="ts">
const participants = ref<Participant[]>([]);

function handleSubmit(name: string) {
  participants.value.push({ name });
}
</script>

<template>
  <main class="page">
    <ParticipantForm @submit="handleSubmit" class="page__section" />
    <ParticipantList :participants="participants" class="page__section" />
  </main>
</template>

<style lang="scss" scoped>
.page {
  padding: 40px;
  margin: 0 400px;

  &__section:not(:last-child) {
    margin-bottom: 32px;
  }
}
</style>
