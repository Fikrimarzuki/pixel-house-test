<template>
  <section>
    <b-button id="addButton" @click="addKanbanModal = true">CREATE TASK</b-button>
    <div class="box">
      <div class="container">
        <div class="columns">
          <Cards v-for="card in kanban" :key="card.id" :card="card"/>
        </div>
      </div>
    </div>
    <b-modal
      :active.sync="addKanbanModal"
      width="1200"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <form>
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Add Task</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Title">
              <b-input
                type="text"
                v-model="title"
                placeholder="Task Title"
                required
              />
            </b-field>
            <b-field label="Body">
              <b-input
                minlength="0"
                maxlength="200"
                type="textarea"
                v-model="body"
                placeholder="Task Body"
                required
              />
            </b-field>
            <h1 style="color: red">{{ error }}</h1>
          </section>
          <footer class="modal-card-foot">
            <b-button type="submit" @click="createTask">Add</b-button>
            <b-button @click="closeTaskModal">Cancel</b-button>
          </footer>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
import Cards from './Cards.vue'

export default {
  name: 'kanban',
  components: {
    Cards
  },
  data () {
    return {
      addKanbanModal: false,
      title: '',
      body: '',
      error: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      const kanban = vm.$store.state.kanban.kanban
      const id = vm.$route.params.id
      const users = vm.$store.state.profile.users
      const checkId = users.filter(el => +el.id === +id)
      if (checkId.length === 0) {
        vm.$router.push('/not-found')
      }
      const isUser = vm.$store.state.kanban.isUser
      if (!isUser) {
        vm.$store.commit('SET_LOADING', true)
        vm.$store.dispatch('kanban/fetchKanban')
          .then(({ data }) => {
            data = data.filter(el => el.userId === Number(id))
            kanban[0].content = data
            vm.$store.commit('kanban/SET_KANBAN', kanban)
          })
          .catch(err => {
            console.log(err.response)
          })
          .finally((_) => {
            vm.$store.commit('SET_LOADING', false)
          })
      } else {
        vm.$store.commit('SET_LOADING', true)
        let data = vm.$store.state.kanban.kanbans
        data = data.filter(el => Number(el.userId) === Number(id))
        kanban[0].content = data
        vm.$store.commit('kanban/SET_KANBAN', kanban)
        vm.$store.commit('SET_LOADING', false)
      }
    })
  },
  computed: {
    kanban () {
      return this.$store.state.kanban.kanban
    }
  },
  methods: {
    createTask () {
      // console.log('creating task', this.title, this.body)
      if (this.title === '' || this.body === '') {
        this.error = 'Title and Body Required'
      } else {
        this.error = ''
        this.$store.commit('kanban/SET_LOADING', true)
        const kanbans = this.$store.state.kanban.kanbans
        const kanbanId = this.$store.state.kanban.lastId + 1
        console.log(kanbanId)
        const payload = {
          userId: this.$route.params.id,
          title: this.title,
          body: this.body,
          id: kanbanId
        }
        const kanban = this.$store.state.kanban.kanban
        kanban[0].content.push(payload)
        kanbans.push(payload)
        this.title = ''
        this.body = ''
        this.$store.commit('kanban/SET_KANBANS', kanbans)
        this.$store.commit('kanban/SET_KANBAN', kanban)
        this.$store.commit('kanban/SET_LAST_ID', kanbanId)
        this.addKanbanModal = false
        this.$store.commit('kanban/SET_LOADING', false)
      }
    },
    closeTaskModal () {
      this.addKanbanModal = false
    }
  }
}
</script>

<style scoped>
  #addButton {
    margin-bottom: 20px;
  }
</style>
