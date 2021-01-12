import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
import axios from "axios";
import VueClipboard from "vue-clipboard2";
import VueMobileDetection from "vue-mobile-detection";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueClipboard);
VueClipboard.config.autoSetContainer = true;
Vue.use(require("vue-moment"));
Vue.config.productionTip = false;
Vue.use(axios);
Vue.use(VueMobileDetection);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
window.loadImg = "http://192.168.1.20:8000/uploads/";

new Vue({
  vuetify,
  router,
  render: (h) => h(App),
}).$mount("#app");
