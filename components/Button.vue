<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

interface Props {
  label?: string;
  to?: RouteLocationRaw;
}
const props = defineProps<Props>();

const { to } = toRefs(props);
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="px-4 py-2 font-semibold leading-6 text-sm bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring-indigo-300 focus:ring transition duration-150 text-white rounded-md hover"
  >
    <slot>{{ label }}</slot>
  </NuxtLink>
  <button
    v-else
    class="px-4 py-2 font-semibold leading-6 text-sm bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus:outline-none focus:ring-indigo-300 focus:ring transition duration-150 text-white rounded-md hover"
  >
    <slot>{{ label }}</slot>
  </button>
</template>
