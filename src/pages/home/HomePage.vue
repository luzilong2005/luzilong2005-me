<template>
  <div class="py-8">
    <PersonalSection />
    <DividerBox />
    <TechnologyStackSection />
    <DividerBox />
    <ProjectsSection />
    <DividerBox />
    <ContactMeSection />
  </div>
</template>

<script setup lang="ts">
import DividerBox from "@/components/DividerBox.vue";
import ContactMeSection from "./ContactMeSection.vue";
import PersonalSection from "./PersonalSection.vue";
import ProjectsSection from "./ProjectsSection.vue";
import TechnologyStackSection from "./TechnologyStackSection.vue";
</script>
