<template>
  <a
    :href="props.link"
    target="_blank"
    class="inline-flex items-center justify-center rounded-lg bg-neutral-800/40
      px-4 py-3 text-sm text-neutral-300 transition-colors select-none
      hover:bg-neutral-800/80"
  >
    <slot />
  </a>
</template>

<script setup lang="ts">
interface Props {
  link?: string;
}
const props = defineProps<Props>();
</script>
