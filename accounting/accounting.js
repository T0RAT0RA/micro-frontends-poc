import Vue from 'vue';
import VueRouter from 'vue-router';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';


Vue.config.productionTip = false;


Vue.use(VueRouter);

const routes = [
  {
    path: '/accounting',
    component: App,
  },
]
const router = new VueRouter({
  routes
})

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


// TODO: Pacel experiment
// export const AddClientAccountingParcel = {
//   bootstrap: vueLifecycles.bootstrap,
//   mount: vueLifecycles.mount,
//   unmount: vueLifecycles.unmount,
// }