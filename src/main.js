import Vue from "vue";
import App from "./App.vue";

//main.css
import "./assets/main.css";

// vue-js-modal
import vmodal from "vue-js-modal";

import router from './router'
Vue.use(vmodal);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
