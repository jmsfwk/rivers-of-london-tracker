<script setup lang="ts">
import {store} from "../store";
import type {Character} from "../types.ts";
import {ref} from "vue";

const character = ref(await new Promise<Character>((resolve, reject) => {
  const c = store.get<Character>('character');
  if (c) {
    resolve(c);
    return;
  }

  reject();
}));

function set(points: number): void {
  store.put('character', {
    ...character.value,
    luck: points,
  });
  character.value.luck = points;
}

function spend(points: number): void {
  const newValue = character.value.luck - points;
  set(newValue);
}
</script>

<template>
  <div class="card border-secondary">
    <div class="card-header small bg-transparent">Luck</div>
    <div class="card-body">
      <div class="fs-1 text-center fw-semibold">{{ character.luck }}</div>
    </div>
    <div class="card-footer d-flex justify-content-center">
      <div class="btn-group" role="group" aria-label="Spend luck">
        <button class="btn btn-outline-secondary" :disabled="character.luck < 1" @click="spend(1)">Spend 1</button>
        <button class="btn btn-outline-secondary" :disabled="character.luck < 5" @click="spend(5)">Spend 5</button>
        <button class="btn btn-outline-secondary" :disabled="character.luck < 10" @click="spend(10)">Spend 10</button>
      </div>
    </div>
  </div>
</template>
