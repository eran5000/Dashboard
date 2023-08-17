<template>
  <AppHeader />
  <SideNav/>
  <section class="content-container">
    <Charts />
    <DataTable :entities="entities"/>
  </section>

  
</template>

<script>
import AppHeader from '../cmps/AppHeader.vue';
import DataTable from '../cmps/DataTable.vue';
import Charts from '../cmps/Charts.vue';
import SideNav from '../cmps/SideNav.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  created() {
    this.$store.dispatch({type: 'loadEntities'})
  },
  computed: {
    entities() {
      return this.$store.getters.entities
    }
  },
  methods: {
    
  },
  components: {
    AppHeader,
    DataTable,
    Charts,
    SideNav
  },
  
}
</script>
