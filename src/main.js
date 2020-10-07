import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
// const { IP } = require('./helper/env')

axios.defaults.headers = {
  token: localStorage.getItem('token')
}

axios.interceptors.response.use((response) => {
  return response
}, async (err) => {
  const status = err.response.status
  console.log(status)
  if (status === 500) {
    const refreshtoken = localStorage.getItem('refreshtoken')
    const fd = {
      refreshToken: refreshtoken
    }
    await axios.post('http://localhost:3000/api/v1/users/refresh-token', fd)
      .then((response) => {
        // console.log(response.data.message)
        localStorage.setItem('token', response.data.data.token)
        window.location = '/'
      }).catch((err) => {
        console.log(err)
      })
  } else {
    window.location = '/login'
  }
})

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
