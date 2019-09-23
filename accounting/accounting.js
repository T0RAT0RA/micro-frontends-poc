import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import App from './App.vue';


Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    render: (h) => h(App),
    router,
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