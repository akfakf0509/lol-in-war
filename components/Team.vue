<script setup lang="ts">
import { Member } from "~/types/match";

export interface Props {
  member: Member[];
}

const props = defineProps<Props>();
const { member } = toRefs(props);
</script>

<template>
  <div>
    대충 팀 이름
    <ul>
      <li v-for="(i, index) in member" :key="index">
        {{ i }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
