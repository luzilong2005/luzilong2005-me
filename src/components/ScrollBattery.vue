<template>
  <div class="fixed top-0 left-0 z-1001 h-px w-full">
    <div
      class="h-full bg-linear-to-r from-neutral-800 to-neutral-100
        transition-all duration-150 ease-out"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, shallowRef } from "vue";
import { throttle } from "es-toolkit";

const progress = shallowRef(0);

const handleScroll = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.scrollY;
  const trackLength = documentHeight - windowHeight;

  if (trackLength > 0) {
    progress.value = Math.min(
      100,
      Math.max(0, (scrollTop / trackLength) * 100),
    );
  } else {
    progress.value = 100;
  }
};

const throttledHandleScroll = throttle(handleScroll, 100);

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", throttledHandleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", throttledHandleScroll);
});
</script>
