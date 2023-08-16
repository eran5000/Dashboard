<template>
  <AppHeader />
  <Charts /> 
  <SideNav/>
  <section class="container home text-center">
    <DataList />
  </section>

  
</template>

<script>
import AppHeader from '../cmps/AppHeader.vue';
import DataList from '../cmps/DataList.vue';
import Charts from '../cmps/Charts.vue';
import SideNav from '../cmps/SideNav.vue';

export default {
  name: 'Dashboard',
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
  },
  methods: {
  },
  components: {
    AppHeader,
    DashboardList,
    Charts,
    SideNav
  },
  
}
</script>
