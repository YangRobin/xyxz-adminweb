import Vue from 'vue';
import LoginApp from './LoginApp.vue';
import '../../common/font/style.scss';
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(LoginApp),
}).$mount('#app');
