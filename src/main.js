import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css'

import { createRouter, createWebHashHistory } from 'vue-router'
import Notes from './views/Notes.vue'
import Note from './views/Note.vue'

const routes = [
  {
    path: '/',
    component: Notes
  },
  {
    path: '/note/:id',
    component: Note,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

createApp(App).use(router).mount('#app')
