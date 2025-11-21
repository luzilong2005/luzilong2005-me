<template>
  <footer
    class="flex h-20 w-screen text-xs text-neutral-500 flex-col items-center justify-center space-y-3"
  >
    <div class="flex h-4 items-center  transition-all">
      <p>
        使用
        <a
          class="font-mono font-bold transition-all hover:text-neutral-100
            hover:underline"
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY-NC-SA 4.0</a
        >
        许可
      </p>
      <DividerBox vertical class="mx-2" />
      <p class="font-mono">{{ `${dayjs().format("YYYY")}-PRESENT © ${AUTHOR_NAME}` }}</p>
    </div>
    <div>
      <p>
        由
        <a
          class="font-mono font-bold hover:text-orange-500"
          href="https://cloudflare.com/"
          >Cloudflare</a
        >
        提供网页托管服务
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AUTHOR_NAME } from "@/constants";
import dayjs from "dayjs";
import DividerBox from "../DividerBox.vue";
</script>
