import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('./views/Products.vue'),
      children: [
        {
          path: '',
          name: 'newest',
          component: () => import('./views/NewProduct.vue')
        }
        ,{
          path: 'product/:id',
          name: 'product',
          component: () => import('./views/Product.vue')
        }
      ]
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('./views/News.vue')
    },
    {
      path: '/stores',
      name: 'stores',
      component: () => import('./views/Stores.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/backstage',
      name: 'backstage',
      component: () => import('./views/Backstage.vue'),
      children: [
        {
          path: 'products',
          name: 'products',
          component: () => import('./components/Products.vue')
        }
      ]
    }
  ]
});
