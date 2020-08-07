import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
//import "./plugins/swiper";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "animate.css/source/animate.css";
import VueIconfont from "vue-iconfont";
import "animate.css";
import "lightcase/src/css/lightcase.css";
import "lightcase/src/js/lightcase";
import "./plugins/functions";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper-bundle.min.js";
import "./style.css";
import  "jquery";
import "./plugins/jquery.countdown.min.js";
Vue.config.productionTip = false;
Vue.use(VueIconfont/*, options*/)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
