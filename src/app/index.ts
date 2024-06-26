import { createApp } from "vue";
import { i18n, store, router } from "./providers";
import App from "./App.vue";

export const app = createApp(App).use(router).use(i18n).use(store);
