<script setup lang="ts">
const route = useRoute();

const data = computed(() => {
  const result = route.query.v;
  if (!result || typeof result !== "string") return [];
  const urlDecoded = decodeURIComponent(result);
  return JSON.parse(parseStringFromBase64(urlDecoded));
});

function parseStringFromBase64(text: string) {
  const binString = atob(text);
  const uint8Array = Uint8Array.from(binString, (m) => m.charCodeAt(0));
  return new TextDecoder().decode(uint8Array);
}
</script>

<template>
  <main class="page">
    <Result :team1="data[0]" :team2="data[1]" class="page__result" />
  </main>
</template>

<style lang="scss" scoped>
.page {
  display: flex;
  align-items: center;

  height: 100%;

  padding: 40px;
  margin: 0 400px;

  &__result {
    flex: 1;
  }
}
</style>
