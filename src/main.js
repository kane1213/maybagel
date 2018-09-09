import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store";
import 'bootstrap/scss/bootstrap.scss';
import "swiper/dist/css/swiper.css";
import BootstrapVue from 'bootstrap-vue';



Vue.use(Vuex);
Vue.use(BootstrapVue);

import App from "./App.vue";


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
