<script setup lang="ts">
const { data, refresh } = await useFetch("/api/users");

const text = ref("");

async function handleSubmit() {
  await useFetch("/api/users", {
    method: "post",
    body: {
      name: text.value,
    },
  });
}
</script>

<template>
  <div>
    <form @submit.prevent="handleSubmit()">
      <label>
        <input v-model="text" type="text" />
        <button type="submit">Create</button>
      </label>
    </form>
    <hr />
    <p>Users</p>
    <button @click="refresh()">Load</button>
    <div>{{ data }}</div>
  </div>
</template>

<style lang="scss" scoped></style>
