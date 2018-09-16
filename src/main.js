import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store";
import Meta from 'vue-meta';

import Axios from "axios";

import 'bootstrap/scss/bootstrap.scss';
import "swiper/dist/css/swiper.css";

window.$ = window.jQuery = require('jquery');
Vue.use(Vuex);
Vue.use(Meta);

import App from "./App.vue";

Vue.prototype.$http= Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
