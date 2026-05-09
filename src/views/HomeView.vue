<script setup lang="ts">
import {onMounted, ref} from "vue";
import {store} from "../store";

type Character = {
  name: string;
  luck: number;
  magic: {
    starting: number | null;
    current: number | null;
  };
}

const loading = ref(true);
const character = ref<Character|null>(null);
onMounted(() => {
  const data = store.get<Character>('character');
  loading.value = false;
  character.value = data;
});
</script>

<template>
  <div v-if="!loading && !character" class="text-center py-5">
    <p>It looks like you don't have a character yet, get started by adding one.</p>

    <RouterLink :to="{ name: 'add-character' }" class="btn btn-secondary mt-4">Add a character</RouterLink>
  </div>
  <div v-else-if="!loading && character">
    <h1>{{ character.name }}</h1>

    <div class="card">
      <div class="card-body">
        {{ character.magic.starting }}
        <div class="card-text">Magic</div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        {{ character.luck }}
        <div class="card-text">Luck</div>
      </div>
    </div>
  </div>
</template>
