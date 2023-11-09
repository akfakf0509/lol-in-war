<script setup lang="ts">
interface Props {
  name: string;
  tier: number;
}
interface Emits {
  (event: "update:tier", tier: number): void;
}
defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<template>
  <li class="participant">
    <p class="participant__name" v-text="name"></p>
    <hr class="participant__hr" />
    <p class="participant__tier-title" v-text="`티어 선택`"></p>
    <div class="tier">
      <button
        v-for="i in 3"
        :key="i"
        class="tier__item"
        v-text="`${i} Tier`"
        :data-active="tier === i"
        @click="emit('update:tier', i)"
      ></button>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.participant {
  padding: 24px;
  border: 1px solid $color-border;

  &__name {
    @include font-heading-m;
    text-align: center;
  }
  &__hr {
    height: 1px;
    border: none;

    margin: 24px 0;

    background-color: $color-border;
  }
  &__tier-title {
    @include font-heading-xs;
    margin-bottom: 12px;
  }
}

.tier {
  display: flex;
  gap: 8px;

  &__item {
    @include font-body-bold;
    flex: 1;
    border: 1px solid $color-border;
    padding: 8px 12px;

    &[data-active="true"] {
      border-width: 3px;
    }
  }
}
</style>
