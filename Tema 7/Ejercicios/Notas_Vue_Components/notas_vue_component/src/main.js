import { createApp } from 'vue'
import App from './App.vue'

import { firebaseApp } from './firebase.js'
import { VueFire, VueFireAuth } from 'vuefire'
// import { createRouter, createWebHistory } from 'vue-router'
import privado from './components/privado.vue'
import {onAuthStateChanged }from 'firebase/auth'
import {auth} from './firebase.js'

// import './assets/main.css'
import './assets/notas.css'

var estaAutenticado = false;
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    estaAutenticado = true;
    // ...
  } else {
    // User is signed out
    // ...
    estaAutenticado = false;
  }
});


const routes = [
  {
    path: '/privado',
    component: privado,
    beforeEnter: (to, from) => {
      if (estaAutenticado) {
        return true
      }
      else{
        return false
      }
  }
}
]

const app = createApp(App)
app
  .use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
      // we will see other modules later on
      VueFireAuth(),
    ],
  })

app.mount('#app')

