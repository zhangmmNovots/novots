import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/css/default.css'
import './assets/css/control.less'
import './assets/css/reset.less'
import './assets/css/style.less'

import { v4 as uuid } from 'uuid'
import { get, post, $delete, put, $postGetfile,$postPorm } from '@/util/http'
Vue.prototype.$get = get
Vue.prototype.$post = post
Vue.prototype.$put = put
Vue.prototype.$delete = $delete
Vue.prototype.$postGetfile = $postGetfile
Vue.prototype.$postPorm = $postPorm

Vue.config.productionTip = false
Vue.prototype.$uuid = function () {
  return uuid().replace(/-/g, '')
}
Vue.use(antd)
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
