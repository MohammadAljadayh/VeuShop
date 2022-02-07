import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import Jewelery from '../views/Jewelery.vue';
import Electronics from '../views/Electronics.vue';
import Men from '../views/Men.vue';
import Women from '../views/Women.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  }, {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  },
  {
    path: '/jewelery',
    name: 'Jewelery',
    component: Jewelery,
  },
  {
    path: '/men',
    name: 'Men',
    component: Men,
  },
  {
    path: '/women',
    name: 'Women',
    component: Women,
  },
  {
    path: '/electronics',
    name: 'Electronics',
    component: Electronics,
  },
 
  {
    path: '/',
    redirect: '/products',
  }, {
    path: '*',
    component: NotFoundPage,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
