<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import EditableContent from "./components/EditableContent.vue";

type State = {
  name?: string;
}

const state = ref<State>({});
watch(state, (value) => localStorage.setItem('state', JSON.stringify(value)), {
  deep: true,
});

onMounted(() => {
  const item = localStorage.getItem('state');
  if (!item) {
    return;
  }
  state.value = JSON.parse(item) as State;
});
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <header lang="la" class="navbar-brand"><i>Scientia est potentia</i></header>
    </div>
  </nav>

  <div class="container p-3">
    <EditableContent v-model="state.name">default</EditableContent>
  </div>
</template>
