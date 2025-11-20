<template>
  <AppHeader />
  <AppLayout>
    <RouterView />
  </AppLayout>
  <AppFooter />
  <ParticlesBg />
</template>

<script setup lang="ts">
import AppHeader from "./components/Header/AppHeader.vue";
import AppLayout from "./components/Layout/AppLayout.vue";
import AppFooter from "./components/Footer/AppFooter.vue";
import ParticlesBg from "./components/ParticlesBg.vue";
</script>
