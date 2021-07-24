<template>
  <div class="row">
    <div class="col col-12 col-md-6 col-lg-4 mb-3">
      <router-link class="text-decoration-none text-body" to="/note/1">
        <div class="card">
          <div class="card-header">Title</div>
          <div class="card-body">Text</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Notes',
  data: function () {
    return {
      notes: []
    }
  }
}
</script>