<template>
  <section class="space-y-6">
    <h2 class="text-xl font-bold text-white">我的项目</h2>
    <div class="flex flex-col space-y-6">
      <ProjectBox v-for="p in list" :key="p.name" v-bind="p" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectBox, { type ProjectBoxProps } from "../components/ProjectBox.vue";

const list: Array<ProjectBoxProps> = [
  {
    name: "me",
    date: "2025-11",
    github: "https://github.com/luzilong2005/luzilong2005-me/",
    online: "https://me.luzilong2005.top/",
    description: "这是我的个人主页，用于展示我的个人资料、技能、项目等信息。",
  },
  {
    name: "Modern Chat",
    date: "2025-09",
    github: "https://github.com/luzilong2005/modern-chat/",
    online: "https://modern-chat.luzilong2005.top/",
    description: "这是一个现代化的AI聊天应用，基于Vue3和Vite构建。",
  },
  {
    name: "Modern UI",
    date: "2025-07",
    github: "https://github.com/luzilong2005/modern-ui/",
    online: "https://modern-ui.luzilong2005.top/",
    description: "这是一个现代化的UI框架，基于Vue3和Vite构建。",
  },
];
</script>
