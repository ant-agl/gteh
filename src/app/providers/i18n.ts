import { createI18n } from "vue-i18n";
import { defaultLocale, languages } from "@/shared/config/i18n";

const messages = Object.assign(languages);

export const i18n = createI18n({
  legacy: false,
  fallbackLng: "en",
  locale: localStorage.getItem("lang") || defaultLocale,
  messages,
});
