<template>
  <section class="space-y-6">
    <h2 class="text-xl font-bold text-white">我的项目</h2>
    <div class="flex flex-col space-y-6">
      <ProjectBox v-for="p in list" :key="p.name" v-bind="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectBox from "../components/ProjectBox.vue";

const list = [
  {
    name: "Modern UI",
    date: "2025-07",
    github: "https://github.com/luzilong2005/modern-ui/",
    online: "https://modern-ui.luzilong2005.top/",
  },
  {
    name: "Modern Chat",
    date: "2024-010",
    github: "https://github.com/luzilong2005/modern-chat/",
    online: "https://modern-chat.luzilong2005.top/",
  },
];
</script>
