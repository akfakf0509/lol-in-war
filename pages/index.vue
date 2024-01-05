<script setup lang="ts">
const code = ref("");

function handleSubmit() {
  code.value = "";
}
</script>

<template>
  <main class="flex items-center h-full">
    <Form class="flex flex-col gap-2 mx-auto" @submit="handleSubmit()">
      <TextInput v-model="code" />
      <Button type="submit" class="w-96" label="참여하기"></Button>
      <div class="text-center">or</div>
      <Button class="w-96" label="생성하기"></Button>
    </Form>
  </main>
</template>
