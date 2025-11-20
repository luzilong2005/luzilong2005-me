import { defineStore } from "pinia";
import { shallowRef } from "vue";

export const useGlobalsStore = defineStore(
  "globals",
  () => {
    const enableParticles = shallowRef(true);
    return {
      enableParticles,
    };
  },
  { persist: true },
);
