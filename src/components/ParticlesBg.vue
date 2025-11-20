<template>
  <vue-particles id="tsp" :options="options"> </vue-particles>
</template>
<script setup lang="ts">
const options = {
  background: {
    opacity: 0,
  },
  particles: {
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
    opacity: {
      value: 0.35,
    },
    number: {
      value: 120,
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
      speed: 2,
      direction: "none",
      outModes: "out",
    },
    links: {
      enable: true,
      distance: 80,
      color: "#ffffff",
      opacity: 0.05,
      width: 1,
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "grab",
      },
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          opacity: 0.25,
          color: "#ffffff",
        },
      },
    },
  },
};
</script>
