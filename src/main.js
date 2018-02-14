import Vue from 'vue'
import Vuetify from 'vuetify'
import VueFire from 'vuefire'
import App from './App'
import router from './router'
import { store } from './store'
import firebase from 'firebase'
import { firebaseConfig } from './configfire'

Vue.use(Vuetify, {
  theme: {
    primary: '#673AB7',
    secondary: '#9FA8DA',
    accent: '#9c27b0',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#2196f3',
    success: '#4caf50'
  }
}, VueFire)
Vue.config.productionTip = false

firebase.initializeApp(firebaseConfig)

/* eslint-disable no-new */
const unsubscribe = firebase.auth()
.onAuthStateChanged((firebaseUser) => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    render: h => h(App),
    created () {
      store.dispatch('autoSignIn', firebaseUser)
    }
  })
  unsubscribe()
})
