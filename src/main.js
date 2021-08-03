import Vue from 'vue';
import App from './App.vue';
import router from './core/router';
import store from './core/store';
console.log("store", store);

import './core/plugins/bootstrap'
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
