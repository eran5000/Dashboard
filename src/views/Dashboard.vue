<template>
  <SideNav />
  <main class="main-content">
    <AppHeader />
    <section class="content-container">
      <section class="charts-container" v-if="chartsData">
        <Charts v-for="data, idx in chartData" :key="idx" :dataSet="data.dataSet" :labels="data.labels" :label="data.label" />
      </section>
      <DataTable @sort="sortEntities" :entities="entities" />
    </section>
  </main>
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
      chartData: [
        { dataSet: [1857, 716, 9048, 6443, 5782], labels: ['25-03', '24-03', '23-03', '22-03', '21-03'], label:'Payments' },
        { dataSet: [57, 46, 340, 210, 330], labels: ['25-03', '24-03', '23-03', '22-03', '21-03'], label:'Searches' },
        { dataSet: [112, 587, 144, 372, 1968], labels: ['25-03', '24-03', '23-03', '22-03', '21-03'], label:'RPM' },
        { dataSet: [34, 17, 29, 33, 20], labels: ['25-03', '24-03', '23-03', '22-03', '21-03'], label:'alerts' },
      ]
    }
  },
  async created() {
    await this.$store.dispatch({ type: 'loadEntities' })
    this.$store.commit({ type: 'setChartsData' })
  },
  computed: {
    entities() {
      return this.$store.getters.entities
    },
    chartsData() {
      return this.$store.getters.chartsData
    },
    RPM() {
      return this.$store.getters.RPM
    }
  },
  methods: {
    sortEntities({ key, dir }) {
      this.$store.commit({ type: 'setSort', sortBy: { key, dir } })
    }

  },
  components: {
    AppHeader,
    DataTable,
    Charts,
    SideNav
  },

}
</script>
