<template>
  <div
    :class="
      twMerge(
        `inline-flex size-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-neutral-500`,
        $attrs.class as string,
      )
    "
  >
    <img src="/avatar.png" />
  </div>
</template>

<script setup lang="ts">
import { twMerge } from "tailwind-merge";
</script>
