import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Butter from 'buttercms'
import 'bootstrap/dist/css/bootstrap.min.css'

export const butter = Butter(process.env.VUE_APP_API_KEY)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
