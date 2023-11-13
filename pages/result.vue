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
  <main>
    {{ data }}
  </main>
</template>

<style lang="scss" scoped></style>
