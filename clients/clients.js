import Vue from 'vue';
import VueRouter from 'vue-router';
// import { AddClientAccountingParcel } from '@app/accounting';
import App from './App.vue';
import List from './List.vue';
// import router from './router';
import singleSpaVue from 'single-spa-vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/clients',
    component: { template: '<router-view/>' },
    children: [
      {
        path: '',
        component: List,
      },
      {
        path: ':id',
        name: 'client',
        component: { template: '<div>CLIENT {{ $route.params.id }}</div>' },
      },
      // TODO: Pacel experiment
      // {
      //   path: ':id/accounting',
      //   name: 'client-accounting',
      //   component: {
      //     created() {
      //       const domElement = this.$el
      //       const parcelProps = {domElement, customProp1: 'foo'}
      //       const parcel = singleSpaVue.mountRootParcel(AddClientAccountingParcel, parcelProps)
      //     }
      //   }
      // }
    ],
  },
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
    el: "#main-app div", // TODO: compute at runtime
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;