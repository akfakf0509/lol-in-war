<script setup lang="ts">
import Team from "~/components/Team.vue";
import { useMatch } from "~/stores/match";

const { value, addTeam } = useMatch();
</script>

<template>
  <div>
    <ul>
      <li v-for="(i, index) in value.team" :key="`team-${index}`">
        <Team v-bind="i" />
      </li>
    </ul>

    <button @click="addTeam()">Create Team</button>
  </div>
</template>

<style lang="scss" scoped></style>
