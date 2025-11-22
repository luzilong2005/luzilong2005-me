<template>
  <footer
    class="flex h-30 w-screen flex-wrap items-center justify-center gap-x-2
      gap-y-1 py-12 text-xs text-neutral-500"
  >
    <p>
      使用
      <a
        class="font-mono font-bold hover:text-neutral-100 hover:underline"
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        target="_blank"
        aria-label="Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License"
      >
        CC BY-NC-SA 4.0
      </a>
      许可
    </p>

    <DividerBox vertical class="mx-0 h-3" aria-hidden="true" />

    <p class="font-mono">
      &copy; {{ COPYRIGHT_YEAR }}-PRESENT {{ AUTHOR_NAME }}
    </p>

    <DividerBox vertical class="mx-0 hidden h-3 md:block" aria-hidden="true" />

    <p>
      由
      <a
        class="font-mono font-bold hover:text-orange-400"
        href="https://cloudflare.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cloudflare
      </a>
      提供网页托管服务
    </p>
  </footer>
</template>

<script setup lang="ts">
import { AUTHOR_NAME, COPYRIGHT_YEAR } from "@/constants";
import DividerBox from "@/components/DividerBox.vue";
</script>
