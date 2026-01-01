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
  <div class="container">
    <EditableContent v-model="state.name">default</EditableContent>
  </div>
</template>
