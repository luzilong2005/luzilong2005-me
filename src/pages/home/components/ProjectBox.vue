<template>
  <article
    class="group flex flex-col space-y-3 rounded-lg bg-neutral-800/50 p-4 ring-1
      ring-neutral-700/60 transition hover:ring-neutral-500"
  >
    <time class="text-xs text-neutral-400">
      {{ `${dayjs(props.date).format("YYYY/MM")} - 至今` }}
    </time>

    <DividerBox class="my-2" />

    <h3 class="font-semibold text-neutral-100">
      {{ props.name }}
    </h3>

    <p v-if="props.description" class="text-sm text-neutral-400">
      {{ props.description }}
    </p>

    <div class="flex items-center space-x-4 text-sm">
      <a
        class="flex items-center gap-1 text-neutral-300 hover:text-blue-400"
        :href="props.github"
        target="_blank"
        :title="props.github"
      >
        <GithubIcon :size="18" />
        GitHub
      </a>

      <a
        class="flex items-center gap-1 text-neutral-300 hover:text-emerald-400"
        :href="props.online"
        target="_blank"
        :title="props.online"
      >
        <ChromeIcon :size="18" />
        在线预览
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import DividerBox from "@/components/DividerBox.vue";
import dayjs from "dayjs";
import { GithubIcon, ChromeIcon } from "lucide-vue-next";

export interface ProjectBoxProps {
  name: string;
  date?: string;
  github: string;
  online: string;
  description?: string;
}
const props = defineProps<ProjectBoxProps>();
</script>
