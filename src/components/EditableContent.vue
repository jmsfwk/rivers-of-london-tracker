<script setup lang="ts">
interface Props {
  element?: string;
}

const model = defineModel<string>({
  default: () => 'Character',
});
withDefaults(defineProps<Props>(), {
  element: () => 'h1',
});

function onBlur(e: InputEvent) {
  model.value = e.target?.innerText;
}
</script>

<template>
  <component
      :is="element"
      contenteditable="plaintext-only"
      @blur="onBlur"
  >
    {{ model }}
  </component>
</template>
