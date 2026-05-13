<script setup lang="ts">
import {ref, watch} from 'vue';
import type { Character} from "../types.ts";
import { store } from "../store.ts";

const { character } = defineProps<{character: Character}>();

const impaired = ref(character?.impaired || false);
watch(impaired, (newValue) => {
  store.put("character", {
    ...character,
    impaired: newValue,
  });
})
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

    <RouterLink class="card border-primary link-primary link-underline-opacity-0" to="/luck">
      <div class="card-header small bg-transparent text-decoration-underline">Luck</div>
      <div class="card-body">
        <div class="fs-1 text-center fw-semibold">{{ character.luck }}</div>
      </div>
    </RouterLink>

    <div class="card border-secondary">
      <label class="card-header small bg-transparent" for="impaired">Impaired</label>
      <div class="card-body">
        <div class="form-check form-switch form-switch-md">
          <input class="form-check-input" type="checkbox" id="impaired" switch v-model="impaired">
        </div>
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
  grid-template-columns: repeat(2, 1fr);
  gap: map-get($spacers, 3);
}

.character h1 {
  grid-area: header;
}

.form-switch.form-switch-md {
  margin-bottom: 1rem; /* JUST FOR STYLING PURPOSE */
}

.form-switch.form-switch-md .form-check-input {
  height: 1.5rem;
  width: calc(2rem + 0.75rem);
  border-radius: 3rem;
}
</style>
