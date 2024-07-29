export default defineNuxtRouteMiddleware((to, from) => {
  console.log("auth middleware", to, from);
  // const isLoggedIn = true;

  // if (isLoggedIn) {
  //   // redirect to the page we want to go
  //   navigateTo(to.fullPath);
  // }
});
