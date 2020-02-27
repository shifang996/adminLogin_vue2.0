import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VCharts from 'v-charts'

import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(VCharts);
Vue.use(ViewUI);

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
