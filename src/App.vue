<template>
  <div id="app">
    <NavigationMenu />
    <router-view />
    <FooterView />
    <ScrollToTop />
  </div>
</template>
<script>
import ScrollToTop from "./components/ScrollToTop";
import NavigationMenu from "./components/NavigationMenu";
import FooterView from "./components/FooterView";
export default {
  name: "App",
  components: {
    ScrollToTop,
    NavigationMenu,
    FooterView
  },
};
</script>
<style></style>
