<template>
  <div
    :class="
      twMerge(
        `inline-flex cursor-pointer items-center space-x-2 rounded-sm
        bg-neutral-700 px-2 py-1 font-mono text-sm text-neutral-300
        transition-colors select-none hover:bg-neutral-600
        hover:text-neutral-100`,
        props.class,
      )
    "
    :title="props.title"
  >
    <img
      v-if="!showImage"
      class="size-4"
      loading="lazy"
      :src="props.src"
      :alt="props.title"
      @error="() => (showImage = false)"
    />
    <p v-if="!$slots.default">{{ props.title }}</p>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { shallowRef } from "vue";
interface Props {
  class?: string;
  title?: string;
  src?: string;
}
const props = defineProps<Props>();
const showImage = shallowRef(!props.src);
</script>
