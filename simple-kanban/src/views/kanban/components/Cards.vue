<template>
  <div class="column is-3">
    <div class="card">
      <div class="card-content">
        <div class="title">
          {{ card.name }}
        </div>
        <div class="content">
          <Task v-for="task in card.content" :key="task.id" :task="task" :cardId="card.id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Task from './Task'

export default {
  components: {
    Task
  },
  props: {
    card: Object
  }
}
</script>

<style>

</style>
