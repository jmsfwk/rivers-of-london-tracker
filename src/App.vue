<script setup lang="ts">
import {onMounted, ref, watch} from "vue";
import EditableContent from "./components/EditableContent.vue";
import PoliceHelmet from "/police-helmet.svg?url";

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
  <header>
    <nav class="navbar bg-body-tertiary">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img :src="PoliceHelmet" alt="Home" width="32" height="32">
        </a>

        <span lang="la" class="navbar-text"><i>Scientia est potentia</i></span>
      </div>
    </nav>
  </header>

  <div class="container p-3">
    <EditableContent v-model="state.name">default</EditableContent>
  </div>
</template>
