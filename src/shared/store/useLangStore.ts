import { ref } from "vue";

import { defineStore } from "pinia";

export const useLangStore = defineStore("langStore", () => {
  const currentLanguage = ref('');

  const updateLanguage = (value: any) => {
    currentLanguage.value = value
  };


  return { currentLanguage, updateLanguage };
});
