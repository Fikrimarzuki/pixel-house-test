<template>
  <div class="container">
    <Loading v-if="loading"/>
    <div v-else>
      <h1>CHOOSE YOUR PROFILE</h1>
      <br />
      <div class="columns is-multiline is-desktop is-centered">
        <div v-for="user in users" :key="user.id" class="column is-5 is-narrow">
          <b-button id="buttonProfile" @click="goToKanban(user.id)">{{ user.name }}</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '../../components/Loading'

export default {
  components: {
    Loading
  },
  methods: {
    goToKanban (userId) {
      this.$router.push(`kanban/${userId}`)
    }
  },
  computed: {
    users () {
      return this.$store.state.profile.users
    },
    loading () {
      return this.$store.state.profile.loading
    }
  }
}
</script>

<style scoped>
  #buttonProfile {
    width: 100%;
    height: 150%
  }
  #buttonProfile:hover {
    background-color: lightseagreen;
    size: 100px;
  }
</style>
