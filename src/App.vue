<template>
  <nav>
  </nav>
  <router-view/>
</template>

<script>
import Home from "./views/HomeView.vue"

export default {
  components: {
    Home
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 600px;
  color: #555;
}

</style>
