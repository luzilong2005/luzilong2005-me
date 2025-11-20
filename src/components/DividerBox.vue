<template>
  <div
    :class="
      twMerge(
        'border-neutral-700',
        [props.vertical ? 'mx-10 h-full border-r' : 'my-10 w-full border-b'],
        props.class,
      )
    "
  ></div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";

interface Props {
  class?: string;
  vertical?: boolean;
}
const props = defineProps<Props>();
</script>
