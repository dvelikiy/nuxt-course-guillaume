<script setup>
const { sayHello } = useUtils();
sayHello();
const { $hello } = useNuxtApp();
$hello("from plugin");
definePageMeta({
  middleware: ["auth"],
});
const counter = useCounter();
const { count } = storeToRefs(useCounterStore());
await $fetch("/hello");
const { data: products, status } = await useLazyFetch("/api/products", {
  transform: (_products) => _products,
});

const { data: productCount, status: countStatus } = await useAsyncData(
  "products",
  () => $fetch("/api/products").then((res) => res.length)
);

const refresh = () => {
  refreshNuxtData("products");
};

useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content: "My custom description",
    },
  ],
  bodyAttrs: {
    class: "my-custom-class",
  },
  script: [
    {
      src: "https://example.com/script.js",
    },
  ],
});
</script>
<template>
  <div class="main">
    index page
    <img src="/Nuxt_logo2.png" alt="" srcset="" />
    <IconsBell />
    <ContentDoc />
    <button @click="counter++">{{ counter }}</button>
    <button @click="count++">pinia {{ count }}</button>
    <pre>
      {{ status === "pending" ? "loading" : products }}
    </pre>
    <pre>
      {{ countStatus === "pending" ? "loading" : productCount }}
    </pre>
    <button @click="refresh">Refresh</button>
  </div>
</template>
