import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import enLocale from "./locales/en.json";
import heLocale from "./locales/he.json";
import { store } from "./store/store";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";
import { fa } from "vuetify/iconsets/fa";
import { mdi, aliases } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
      fa,
    },
  },
  components,
  directives,
});

export const i18n = createI18n({
  legacy: false, 
  locale: store.locale,
  fallbackLocale: "en",
  messages: {
    en: enLocale,
    he: heLocale,
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.use(i18n);
app.mount("#app");
