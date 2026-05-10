<script setup lang="ts">
import {onMounted, ref} from "vue";
import {store} from "../store";
import type {Character} from "../types.ts";
import ShowCharacter from "../components/Character.vue";

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
  <template v-else-if="!loading && character">
    <ShowCharacter :character=character />
  </template>
</template>
