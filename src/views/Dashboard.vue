<template>
  <SideNav/>
  <AppHeader /> 
  <section class="container home text-center">
    <DashboardList />
  </section>

  
</template>

<script>
import AppHeader from '../cmps/AppHeader.vue';
import DashboardList from '../cmps/DashboardList.vue';
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
