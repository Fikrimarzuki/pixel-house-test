<template>
  <section>
    <div class="card">
      <header class="card-header">
        <p class="card-header-title">
          {{ task.title }}
        </p>
      </header>
      <div class="card-content">
        <div class="content">
          {{ task.body }}
        </div>
      </div>
      <footer class="card-footer">
        <b-button @click="move(task.id, 'prev')" class="card-footer-item move" v-if="cardId > 1"><i class="fas fa-angle-double-left"></i></b-button>
        <b-button @click="showEditModal(task.id)" class="card-footer-item save-action"><i class="fas fa-edit"></i></b-button>
        <b-button @click="deleteTask(task.id)" class="card-footer-item cancel-action"><i class="fas fa-trash-alt"></i></b-button>
        <b-button @click="move(task.id, 'next')" class="card-footer-item move" v-if="cardId < 4"><i class="fas fa-angle-double-right"></i></b-button>
      </footer>
    </div>
    <b-modal :active.sync="editModal"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-modal
    >
      <form>
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">Edit Task</p>
            </header>
            <section class="modal-card-body">
              <b-field label="title">
                <b-input
                  type="text"
                  v-model="title"
                  placeholder="Task Title"
                  required
                />
              </b-field>
              <b-field label="description">
                <b-input
                  maxlength="200"
                  type="textarea"
                  v-model="body"
                  placeholder="Task Description"
                  required
                />
              </b-field>
            </section>
            <footer class="modal-card-foot">
              <b-button type="submit" class="save-action" @click="saveTask(task.id)">Save</b-button>
              <b-button class="cancel-action" @click="closeTaskModal">Cancel</b-button>
            </footer>
          </div>
        </form>
    </b-modal>
  </section>
</template>

<script>
export default {
  data () {
    return {
      editModal: false,
      title: '',
      body: ''
    }
  },
  props: {
    task: Object,
    cardId: Number
  },
  methods: {
    showEditModal (id) {
      this.title = this.task.title
      this.body = this.task.body
      this.editModal = true
    },
    move (id, type) {
      let newCardId = null
      const cardId = this.cardId - 1
      if (type === 'prev') {
        newCardId = cardId - 1
      }
      if (type === 'next') {
        newCardId = cardId + 1
      }
      const kanban = this.$store.state.kanban.kanban
      const newKanban = kanban[cardId].content.filter(el => +el.id !== +id)
      const task = kanban[cardId].content.filter(el => +el.id === +id)
      if (task.length !== 0) {
        kanban[newCardId].content.push(task[0])
      }
      kanban[cardId].content = newKanban
      this.$store.commit('kanban/SET_KANBAN', kanban)
    },
    prev (id) {
      const kanban = this.$store.state.kanban.kanban
      const newKanban = kanban[this.cardId - 1].content.filter(el => +el.id !== +id)
      const task = kanban[this.cardId - 1].content.filter(el => +el.id === +id)
      if (task.length !== 0) {
        kanban[this.cardId - 2].content.push(task[0])
      }
      kanban[this.cardId - 1].content = newKanban
      this.$store.commit('kanban/SET_KANBAN', kanban)
    },
    saveTask (id) {
      const kanban = this.$store.state.kanban.kanban
      const newKanban = kanban[this.cardId - 1].content.map(el => {
        if (+el.id === +id) {
          el = { ...el, title: this.title, body: this.body }
        }
        return el
      })
      kanban[this.cardId - 1].content = newKanban
      this.$store.commit('kanban/SET_KANBAN', kanban)
      this.editModal = false
    },
    closeTaskModal () {
      this.editModal = false
    },
    deleteTask (id) {
      const kanbans = this.$store.state.kanban.kanbans
      const newKanbans = kanbans.filter(el => +el.id !== +id)
      this.$store.commit('kanban/SET_KANBANS', newKanbans)
      const kanban = this.$store.state.kanban.kanban
      const newKanban = kanban[this.cardId - 1].content.filter(el => +el.id !== +id)
      kanban[this.cardId - 1].content = newKanban
      this.$store.commit('kanban/SET_KANBAN', kanban)
    }
  }
}
</script>

<style scoped>
  .move{
    background-color: white;
    color: black;
  }
  .move:hover {
    background-color: black;
    color: white
  }
  .save-action {
    background-color: green;
    color: white
  }
  .save-action:hover {
    background-color: green;
    color: black
  }
  .cancel-action {
    background-color: red;
    color: white
  }
  .cancel-action:hover {
    background-color: red;
    color: black
  }
  .card {
    margin-bottom: 10px
  }
  .card-header-title {
    text-align: center;
    justify-content: center;
  }
</style>
