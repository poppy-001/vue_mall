import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toast from './components/common/toast'
import fastclick from 'fastclick'

import lazyload from 'vue-lazyload'

//引入全局样式
import './assets/css/base.css'

Vue.config.productionTip = false
Vue.use(Toast)
fastclick.attach(document.body)

Vue.use(lazyload, {
  loading: require('./assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
