<template>
  <div id="app">
    <NavigationMenu />
    <router-view />
    <ScrollToTop />
  </div>
</template>
<script>
import ScrollToTop from "./components/ScrollToTop";
import NavigationMenu from "./components/NavigationMenu";
export default {
  name: "App",
  components: {
    ScrollToTop,
    NavigationMenu,
  },
};
</script>
<style></style>
