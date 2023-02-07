import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import helloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'

import './assets/main.css'

const routes = [
    { 
        path: '/', 
        component: helloWorld,
        props: {
            msg: 'Titulo que paso al componente'
        }
    },
    { 
        path: '/welcome/:nombre', 
        component: TheWelcome 
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
