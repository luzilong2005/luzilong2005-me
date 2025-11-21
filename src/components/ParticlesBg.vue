<template>
  <vue-particles
    v-if="globals.enableParticles"
    class="absolute top-0 left-0 size-0"
    id="tsp"
    :options="options"
  >
  </vue-particles>
</template>
<script setup lang="ts">
import { useGlobalsStore } from "@/stores/useGlobalsStore";
import { reactive } from "vue";

const globals = useGlobalsStore();

const options = reactive({
  background: {
    opacity: 0,
  },
  autoPlay: true,
  clear: true,
  fpsLimit: 24,
  particles: {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    opacity: {
      value: 0.35,
    },
    number: {
      value: 256,
      limit: {
        mode: "delete",
        value: 500,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
    move: {
      enable: true,
      speed: 0.45,
      direction: "none",
      outModes: "out",
    },
  },
});
</script>
