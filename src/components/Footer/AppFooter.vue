<template>
  <footer class="flex h-20 w-screen items-center justify-center">
    <p
      class="text-sm text-neutral-300 transition-all select-none
        hover:text-neutral-50"
    >
      <a
        class="hover:underline"
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        >CC BY-NC-SA 4.0</a
      >
      {{ `${dayjs().format("YYYY")}-PRESENT © luzilong2005` }}
    </p>
  </footer>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
</script>
