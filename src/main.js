import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import router from "./router/index";
// import VueMobileDetection from 'mobile-device-detect'; 
import axios from 'axios';
// import moment from 'vue-moment';

Vue.use(require('vue-moment'));
// Vue.use(VueMobileDetection);
Vue.config.productionTip = false;
Vue.use(axios);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
