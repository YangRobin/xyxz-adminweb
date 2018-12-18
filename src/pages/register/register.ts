import Vue from 'vue';
import RegisterApp from './RegisterApp.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(RegisterApp),
}).$mount('#app');
