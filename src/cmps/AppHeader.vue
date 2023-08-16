<template>
  <header class="app-header">
    <AppFilter />

    <section class="user-info">
      <h1>user info</h1>
      <UserModal v-if="isModalOpen"/>
    </section>
  </header>
</template>
<script>
import AppFilter from './AppFilter.vue'
import UserModal from './UserModal.vue'

export default {

  data() {
    return {
      isModalOpen:false
    }
  },
  computed: {
    loggedInUser() {
      return this.$store.getters.loggedinUser
    },
  },
  components: {
    AppFilter,
    UserModal
  }
}
</script>