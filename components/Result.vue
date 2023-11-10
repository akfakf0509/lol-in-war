<script setup lang="ts">
interface Props {
  team1: Participant[];
  team2: Participant[];
}
defineProps<Props>();
</script>

<template>
  <section class="result">
    <Header text="MATCH UP" class="result__header"></Header>
    <ul class="result__body">
      <li>
        <ResultList :team="team1" />
      </li>
      <p class="result__vs" v-text="'VS'"></p>
      <li>
        <ResultList :team="team2" />
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.result {
  &__header {
    margin-bottom: 64px;
    text-align: center;
  }
  &__body {
    display: flex;
    flex-direction: column;
    gap: 32px;

    list-style: none;
  }
  &__vs {
    @include font-heading-s;
    text-align: center;
  }
}
</style>
