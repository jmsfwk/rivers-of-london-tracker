<script setup lang="ts">
import {store} from "../store.ts";
import { useRouter } from "vue-router";

const router = useRouter();

async function onSubmit(event: SubmitEvent) {
  const formData = new FormData(event.target as HTMLFormElement);
  const data = {
    name: formData.get("name") as string,
    luck: formData.get("luck") as string,
    magic: formData.get("magic") as string,
  }

  store.put('character', {
    ...data,
    luck: Number.parseInt(data.luck, 10),
    magic: {
      starting: data.magic ? Number.parseInt(data.magic) : null,
      current: data.magic ? Number.parseInt(data.magic) : null,
    },
    impaired: false,
  });

  await router.push({ name: "home" });
}
</script>

<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="name" class="form-label">Name</label>
      <input name="name" type="text" class="form-control" required>
    </div>

    <div>
      <label for="luck" class="form-label">Luck</label>
      <input name="luck" type="number" min="50" max="100" inputmode="numeric" class="form-control" required>
    </div>

    <div>
      <label for="magic" class="form-label">Magic points</label>
      <input name="magic" type="number" min="1" max="30" inputmode="numeric" class="form-control">
    </div>

    <button class="btn btn-secondary mt-3">Add character</button>
  </form>
</template>
