import './assets/main.css'

// 引入 import 
import { createApp } from 'vue'
// 根
import App from './App.vue'


import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

import APITest from './components/APITest.vue'
import router from './router'


// const routes = [
//     { path: '/api_test', component: APITest},
// ]
// const router = createRouter({
//     history: createWebHistory(),
//     routes,
// })
// create App
createApp(App).use(router).mount('#app')




