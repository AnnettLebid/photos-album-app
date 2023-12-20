import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "@mdi/font/css/materialdesignicons.css";
import { aliases, fa } from "vuetify/iconsets/fa";
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

const app = createApp(App);

app.use(vuetify);
app.use(router);
app.mount("#app");
