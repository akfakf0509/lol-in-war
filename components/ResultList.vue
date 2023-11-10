<script setup lang="ts">
interface Props {
  team: Participant[];
}
defineProps<Props>();
</script>

<template>
  <ul class="list">
    <ResultItem
      v-for="member of team"
      :key="member.name"
      :name="member.name"
      class="list__item"
    />
  </ul>
</template>

<style lang="scss" scoped>
.list {
  display: flex;
  list-style: none;

  &__item {
    flex: 1;
    text-align: center;
  }
}
</style>
