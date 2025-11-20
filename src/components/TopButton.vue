<template>
  <transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="opacity-0 translate-y-6"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-6"
  >
    <button
      v-show="isVisible"
      title="回到顶部"
      class="fixed right-1/6 bottom-1/6 z-1000 inline-flex size-12
        cursor-pointer items-center justify-center rounded-full bg-neutral-800
        hover:bg-neutral-700"
      @click="handleClick"
    >
      <ArrowUpIcon class="size-6 text-white" />
    </button>
  </transition>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef } from "vue";
import { ArrowUpIcon } from "lucide-vue-next";
import { throttle } from "es-toolkit";

const isVisible = shallowRef(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 0;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleClick = throttle(scrollToTop, 1000);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
