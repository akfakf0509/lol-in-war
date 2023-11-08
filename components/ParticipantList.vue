<script setup lang="ts">
interface Props {
  participants: Participant[];
}
defineProps<Props>();
</script>

<template>
  <section class="participants">
    <Header text="참가자 목록"></Header>
    <ul class="participants__list">
      <Participant
        v-for="participant in participants"
        :key="participant.name"
        v-bind="participant"
      />
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.participants {
  &__title {
    @include font-heading-l;
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;

    list-style: none;
  }
}
</style>
