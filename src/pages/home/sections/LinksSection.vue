<template>
  <section class="space-y-6">
    <h2 class="text-xl font-bold text-neutral-100">推荐链接</h2>
    <div class="flex flex-wrap items-center justify-center gap-4">
      <LinkBox v-for="item in list" :key="item.url" :link="item.url">
        <img
          :src="`https://favicon.im/${getDomain(item.url)}`"
          :alt="item.description"
          loading="lazy"
          class="size-5"
        />
        <span class="ml-2">{{ item.description }}</span>
      </LinkBox>
    </div>
  </section>
</template>

<script setup lang="ts">
import LinkBox from "../components/LinkBox.vue";

interface LinkProps {
  url: string;
  description: string;
}

const list: Array<LinkProps> = [
  {
    url: "https://favicon.im/",
    description: "即时获取和下载任何网站的图标",
  },
  {
    url: "https://github.com/",
    description: "全球最大的代码托管平台",
  },
  {
    url: "https://vuejs.org/",
    description: "渐进式 JavaScript 框架",
  },
  {
    url: "https://tailwindcss.com/",
    description: "实用优先的 CSS 框架",
  },
  {
    url: "https://vitejs.dev/",
    description: "下一代前端构建工具",
  },
  {
    url: "https://cloudflare.com/",
    description: "为您的网站提供免费的防护和加速",
  },
];

const getDomain = (url: string) => {
  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (error) {
    return "";
  }
};
</script>
