<template>
  <section class="section">
    <div class="container">
      <Loading v-if="loading" />
      <div>
        <h1 class="title"> KANBAN </h1>
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
import Loading from '../../components/Loading'

export default {
  name: 'kanbanLandingPage',
  components: {
    Loading
  },
  data () {
    return {
    }
  },
  methods: {
    fetchKanban () {
      if (this.$store.state.kanban.kanbans.length === 0) {
        this.$store.commit('kanban/SET_LOADING', true)
        this.$store.dispatch('kanban/fetchKanban')
          .then(({ data }) => {
            this.$store.commit('kanban/SET_KANBANS', data)
            if (!this.$store.state.kanban.lastId) {
              this.$store.commit('kanban/SET_LAST_ID', data[data.length - 1].id)
            }
            this.$store.commit('kanban/SET_IS_USER', true)
          })
          .catch(err => {
            console.log(err.response)
          })
          .finally((_) => {
            this.$store.commit('kanban/SET_LOADING', false)
          })
      }
    }
  },
  created () {
    this.fetchKanban()
  },
  computed: {
    kanbans () {
      return this.$store.state.kanban.kanbans
    },
    loading () {
      return this.$store.state.kanban.loading
    }
  }
}
</script>

<style scoped>

</style>
