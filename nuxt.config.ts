// https://nuxt.com/docs/api/configuration/nuxt-config
// import { resolve } from "path";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  hooks: {
    ready: (ctx) => {
      console.log("ready", ctx);
    },
  },
  app: {
    // cdnURL: "https://cdn.example.com",
    head: {
      title: "Nuxt course",
      meta: [
        {
          name: "description",
          content: "Nuxt course",
        },
      ],
    },
  },
  alias: {
    assets: "/<rootDir>/assets",
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/content", "@pinia/nuxt"],
  ssr: false,
  // routeRules: {
  //   "/**": { ssr: true },
  // },
});
