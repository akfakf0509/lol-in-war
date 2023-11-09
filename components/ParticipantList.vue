<script setup lang="ts">
interface Props {
  participants: Participant[];
}
interface Emits {
  (event: "update:tier", index: number, tier: number): void;
}
defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <section class="participants">
    <Header text="참가자 목록"></Header>
    <ul class="participants__list">
      <Participant
        v-for="(participant, index) in participants"
        :key="participant.name"
        v-bind="participant"
        @update:tier="(newTier) => emit('update:tier', index, newTier)"
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
