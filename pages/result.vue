<script setup lang="ts">
const route = useRoute();

const data = computed(() => {
  const result = route.query.v;
  if (!result || typeof result !== "string") return [];
  return JSON.parse(atob(result));
});
</script>

<template>
  <main>
    {{ data }}
  </main>
</template>

<style lang="scss" scoped></style>
