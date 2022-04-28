<template>
  <div class="project">
    <div class="actions">
      <h3 @click="toggleDetails">{{project.name}}</h3>
      <div class="list-icons">
        <pencil-icon class="icons"/>
        <trash-icon @click="deleteProject" class="icons"/>
        <done-icon @click="toggleComplete" class="icons"/>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <p>{{project.details}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['project'],
  data() {
    return {
      showDetails: false,
      uri: 'http://localhost:3000/projects/'+ this.project.id
    }
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails
    },
    deleteProject() {
      fetch(this.uri, {method: 'DELETE'})
        .then(() => this.$emit('delete', this.project.id))
        .catch(err => console.log(err.message))
    },
    toggleComplete() {
      fetch(this.uri, {
        method: 'PATCH',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify({ completed: !this.project.completed})
      }).then(() => {
        this.$emit('complete', this.project.id)
      }).catch(err => console.log(err.message)) 
    }
  }
}
</script>

<style>
.project {
  margin: 20px auto;
  background-color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.05);
  border-left: 4px solid #e90074
}

h3, .icons {
  cursor: pointer;
}
.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icons {
  font-size: 24px;
  margin-left: 10px;
  color: #bbb;
}

.icons:hover{
  color:#777;
}
</style>