<template>
  <div class="container">
    <div class="row my-5 d-flex align-items-center">
      <div class="col">
        <h1 class="display-4">Notebook</h1>
      </div>
      <div class="col d-flex justify-content-end">
        <button class="btn btn-secondary" @click="showForm = true">&plus;</button>
      </div>
    </div>
    <router-view :key="$router.fullPath"></router-view>
    <transition enter-active-class="animate__animated animate__bounceIn">
      <div class="modal" v-show="showForm">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h2 class="modal-title">New Note</h2>
            </div>
            <div class="modal-body bg-light">
              <form class="p-3" @submit.prevent="">
                <div class="mb-3">
                  <label class="form-label">Title</label>
                  <input type="text" class="form-control" v-model="title">
                </div>
                <div class="mb-3">
                  <label class="form-label">Text</label>
                  <textarea v-model="text" class="form-control"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="cancelNote">Cancel</button>
              <button type="button" class="btn btn-primary" @click="addNote">Save</button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { collection, addDoc } from 'firebase/firestore'
import db from './db'

export default {
  data: function () {
    return {
      showForm: false,
      title: '',
      text: ''
    }
  },
  methods: {
    addNote: async function () {
      const c = collection(db, 'notes')
      const document = await addDoc(c, {
        title: this.title,
        text: this.text 
      })

      this.cancelNote()
      this.$router.push('/note/' + document.id)
    },
    cancelNote: function () {
      this.showForm = false
      this.title = ''
      this.text = ''
    }
  }  
}
</script>

<style scoped>
  .modal {
    display: block;
  }
</style>
