export default defineNuxtPlugin((nuxtApp) => {
  console.log("my plugin", nuxtApp);

  nuxtApp.hook("app:mounted", () => {
    console.log("app:mounted");
  });

  return {
    provide: {
      hello: (msg: string) => {
        console.log(msg);
      },
    },
  };
});
