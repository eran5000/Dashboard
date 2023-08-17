<template>
  <header class="app-header">
    <AppFilter />
    <el-tooltip popper-class="bell-popper" content="Last data update was on 17-8-2023 about 7 hours ago"
      placement="bottom" effect="light">
      <i class="fa-regular fa-bell fa-lg"></i>
    </el-tooltip>

    <div class="user-actions">
      <p>MAX - Publisher</p>
      <p>John Don</p>
      <el-popover popper-class="user-popper" placement="bottom" :width="200" trigger="click">
        <template #reference>
          <i class="fa-regular fa-user fa-lg"></i>
        </template>
        <section class="user-menu">
          <div>
            <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
          </div>
          <div>
            <i class="fa-regular fa-envelope"></i>
            <span>Email Address</span>
          </div>
          <div>
            <i class="fa-solid fa-arrow-down"></i>
            <span>Download</span>
          </div>
          <div>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            <span>Log out</span>
          </div>
        </section>
      </el-popover>
    </div>
  </header>
</template>
<script>
import AppFilter from './AppFilter.vue'
import UserModal from './UserModal.vue'

export default {

  data() {
    return {
      isModalOpen: false
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

<style>
.el-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.el-popper.is-customized .el-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>