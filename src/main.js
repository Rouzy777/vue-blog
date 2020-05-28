import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Butter from 'buttercms'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

export const butter = Butter(process.env.VUE_APP_API_KEY)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
