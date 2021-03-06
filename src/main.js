import Vue from "vue";

import ElementUI from "element-ui";

import App from "./demo.vue";
import '@repackel/repack/assets/style.css';

Vue.config.productionTip = false;

Vue.use(ElementUI);


new Vue({
  render: (h) => h(App)
}).$mount("#app");
