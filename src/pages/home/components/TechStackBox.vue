<template>
  <article>
    <h3 class="mb-2 text-sm font-medium text-neutral-400">{{ props.title }}</h3>
    <div class="flex flex-wrap gap-2">
      <slot></slot>
    </div>
  </article>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>
