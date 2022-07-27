<template>
  <div class="row">
    <div class="col">
      <form class="p-5 bg-light border border-1 mb-3" @submit.prevent="updateNote">
        <h2 class="mb-3">Edit Note</h2>
        <div class="mb-3">
          <label class="form-label">Title</label>
          <input type="text" class="form-control" v-model="title">
        </div>
        <div class="mb-3">
          <label class="form-label">Text</label>
          <textarea v-model="text" class="form-control"></textarea>
        </div>
        <div class="d-flex justify-content-end">
          <router-link class="btn btn-secondary me-3" to="/">Cancel</router-link>
          <button type="submit" class="btn btn-primary">Save</button>
        </div>
      </form>

      <button type="button" class="btn btn-danger" @click="deleteNote">Delete</button>
    </div>
  </div>
</template>

<script>
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import db from '../db.js'

export default {
  name: 'Note',
  props: ['id'],
  data: function () {
    return {
      title: '',
      text: ''
    }
  },
  created: async function () {
    const document = await getDoc(doc(db, 'notes', this.id))

    if (document.exists()) {
      this.title = document.data().title
      this.text = document.data().text
    }
  },
  methods: {
    updateNote: async function () {
      await updateDoc(doc(db, 'notes', this.id), {
        title: this.title,
        text: this.text
      })
      this.$router.push('/')
    },
    deleteNote: async function () {
      await deleteDoc(doc(db, 'notes', this.id))
      this.$router.push('/')
    }
  }  
}
</script>