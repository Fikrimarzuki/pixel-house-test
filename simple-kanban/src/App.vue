<template>
  <div id="app">
    <Loading v-if="loading" />
    <div v-if="!loading">
      <Navbar />
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Loading from './components/Loading'

export default {
  components: {
    Navbar,
    Loading
  },
  computed: {
    loading () {
      return this.$store.state.loading
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
