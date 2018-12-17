import Vue from 'vue';
import LoginApp from './LoginApp.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(LoginApp),
}).$mount('#app');
