<template>
  <div class="row">
    <div class="col col-12 col-md-6 col-lg-4 mb-3"
        v-for="note in notes"
        :key="note.id">
      <router-link class="text-decoration-none text-body" :to="'/note/' + note.id">
        <div class="card">
          <div class="card-header">{{ note.title }}</div>
          <div class="card-body">{{ note.text }}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import db from '../db.js'

export default {
  name: 'Notes',
  data: function () {
    return {
      notes: []
    }
  },
  created: function () {
    db.collection('notes')
      .orderBy('title')
      .onSnapshot(snapshot => {
        const data = []
        snapshot.forEach(doc => data.push({
          id: doc.id,
          title: doc.data().title,
          text: doc.data().text
        }))
        this.notes = data
      })
  }  
}
</script>