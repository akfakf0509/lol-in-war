<script setup lang="ts">
const participants = ref<Participant[]>([]);
const createdTeam = ref<Participant[][]>([[], []]);

function handleSubmit(name: string) {
  participants.value.push({ name, tier: 0 });
}
function handleUpdateTier(index: number, tier: number) {
  participants.value[index].tier = tier;
}
function handleCreate() {
  createdTeam.value = create();
}

function create() {
  const tempParticipants = [...participants.value];
  const result: Participant[][] = [[], []];
  const tierIndex = [0, 0, 0, 0];

  while (tempParticipants.length > 0) {
    const index = getRandomNumber(tempParticipants.length);
    const participant = tempParticipants[index];
    const resultIndex = tierIndex[participant.tier];
    if (result[resultIndex].length < 5) result[resultIndex].push(participant);
    else result[reverseZeroOne(resultIndex)].push(participant);
    tierIndex[participant.tier] = reverseZeroOne(resultIndex);
    tempParticipants.splice(index, 1);
  }

  return result;
}

function getRandomNumber(max: number) {
  return Math.floor(Math.random() * max);
}
function reverseZeroOne(num: number) {
  return num === 0 ? 1 : 0;
}
</script>

<template>
  <main class="page">
    <ParticipantForm @submit="handleSubmit" class="page__section" />
    <ParticipantList
      :participants="participants"
      class="page__section"
      @update:tier="handleUpdateTier"
    />
    <button class="page__create" @click="handleCreate()">생성 하기</button>
    <p>
      {{ createdTeam[0] }}
      <span
        v-text="
          createdTeam[0].reduce((acc, cur) => {
            return acc + cur.tier;
          }, 0)
        "
      ></span>
    </p>
    <p>
      {{ createdTeam[1] }}
      <span
        v-text="
          createdTeam[1].reduce((acc, cur) => {
            return acc + cur.tier;
          }, 0)
        "
      ></span>
    </p>
  </main>
</template>

<style lang="scss" scoped>
.page {
  padding: 40px;
  margin: 0 400px;

  &__section:not(:last-child) {
    margin-bottom: 32px;
  }
  &__create {
    @include font-heading-xs;
    padding: 12px 24px;
    border: 1px solid $color-border;
  }
}
</style>
