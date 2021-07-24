import { createRouter, createWebHashHistory } from 'vue-router'
import Notes from '../views/Notes.vue'
import Note from '../views/Note.vue'

const routes = [
  {
    path: '/',
    name: 'Notes',
    component: Notes
  },
  {
    path: '/note/:id',
    name: 'Note',
    component: Note,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
