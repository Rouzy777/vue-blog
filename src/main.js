import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Butter from 'buttercms'
import 'bootstrap/dist/css/bootstrap.min.css'

export const butter = Butter('509a8ddfff4c34343a0357de81be530073696e53')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
