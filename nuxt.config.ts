// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { AppPreset } from "./app/theme/preset";

export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxt/eslint", "@primevue/nuxt-module"],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",
  css: ["./app/styles/global.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  ...({
    primevue: {
      options: {
        theme: {
          preset: AppPreset,
        },
      },
    },
  } as any),
});
