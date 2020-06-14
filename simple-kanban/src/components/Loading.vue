<template>
  <b-loading :is-full-page="isFullPage" :active.sync="isLoading">
    <b-icon
      pack="fas"
      icon="sync-alt"
      size="is-large"
      custom-class="fa-spin">
    </b-icon>
  </b-loading>
</template>

<script>
export default {
  data () {
    return {
      isFullPage: true,
      isLoading: true
    }
  }
}
</script>

<style>

</style>
