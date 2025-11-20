<template>
  <footer class="flex h-20 w-screen items-center justify-center">
    <!-- <p
      class=""
    >
      <span>
        
      </span>
      
    </p> -->
    <div class="flex h-4 items-center text-sm text-neutral-300 transition-all">
      <p>
        使用
        <a
          class="font-bold transition-all hover:text-neutral-100
            hover:underline"
          target="_blank"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          >CC BY-NC-SA 4.0</a
        >
        许可
      </p>
      <DividerBox vertical class="mx-2" />
      <p>{{ `${dayjs().format("YYYY")}-PRESENT © ${AUTHOR_NAME}` }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { AUTHOR_NAME } from "@/constants";
import dayjs from "dayjs";
import DividerBox from "../DividerBox.vue";
</script>
