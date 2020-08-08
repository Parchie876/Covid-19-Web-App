<template>
  <div id="app">
    <router-view />
    <ScrollToTop />
  </div>
</template>
<script>
import ScrollToTop from "./components/ScrollToTop";
export default {
  name: "App",
  components: {
    ScrollToTop
  }
};
</script>
<style></style>
