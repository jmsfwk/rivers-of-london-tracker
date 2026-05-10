<script setup lang="ts">
import type { Character} from "../types.ts";

defineProps<{character: Character}>();
</script>

<template>
  <div class="character">
    <h1>{{ character.name }}</h1>

    <div class="card" :class="{
      'border-secondary': character.magic.starting !== null,
    }">
      <div class="card-header small bg-transparent">Magic</div>
      <div class="card-body">
        <div class="fs-1 text-center fw-semibold">{{ character.magic.starting }}</div>
      </div>
    </div>

    <div class="card border-secondary">
      <div class="card-header small bg-transparent">Luck</div>
      <div class="card-body">
        <div class="fs-1 text-center fw-semibold">{{ character.luck }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "bootstrap/scss/functions";
@import "bootstrap/scss/variables";

.character {
  display: grid;
  grid-template-areas: 'header header' 'magic luck';
  gap: map-get($spacers, 3);
}

.character h1 {
  grid-area: header;
}
</style>
