import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sitemenu: [
      { name: 'products', path: '/products' },
      { name: 'product', path: '/product' }
    ],
    sitemap: {
      about: { tw: '關於我', en: 'ABOUT' },
      products: { tw: '產品', en: 'PRODUCTS' },
      news: { tw: '消息', en: 'NEWS' },
      stores: { tw: '門市', en: 'STORES' },
      contact: { tw: '連絡我們', en: 'CONTACT' }
    }
  },
  mutations: {},
  actions: {}
});
