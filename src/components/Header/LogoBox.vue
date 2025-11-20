<template>
  <div
    class="inline-flex size-10 items-center justify-center overflow-hidden
      rounded-full"
    :title="AUTHOR_NAME"
  >
    <img src="/avatar.png" :alt="AUTHOR_NAME" />
  </div>
</template>

<script setup lang="ts">
import { AUTHOR_NAME } from "@/constants";
</script>
