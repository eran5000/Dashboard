<template>
  <SideNav />
  <main class="main-content">
    <AppHeader />
    <section class="content-container">
      <section class="charts-container" v-if="chartsData">
        <Charts label="Payments" :dataSet="[1857, 716, 9048, 6443, 5782]" :labels="chartsData.dates" />
        <Charts label="Searches" :dataSet="[57, 46, 340, 210, 330]" :labels="chartsData.dates" />
        <Charts label="RPM" :dataSet="[34, 17, 29, 33, 20]" :labels="chartsData.dates" />
        <Charts label="Alerts" :dataSet="[112, 587, 144, 372, 1968]" :labels="chartsData.dates" />
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
