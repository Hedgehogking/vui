import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
// import Layout from './components/Layout';
// import Layout1 from './components/Layout1';
import { Layout } from './components';

Vue.use(VueRouter);
Vue.use(VueResource);

const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes,
})

var app = new Vue({
  el: '#app',
  router,
  ...Layout,
});