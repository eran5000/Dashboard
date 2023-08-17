<template>
  <section class="table-container">
    <TableHeader @sort="$emit('sort', $event)" />
    <DataList :entities="entities" />
    <TableSummary :summaryData="summaryData" />
  </section>
</template>
<script>
import DataList from './DataList.vue'
import TableHeader from './TableHeader.vue'
import TableSummary from './TableSummary.vue'

export default {
  name: 'DataTable',
  props: {
    entities: { type: Array },
  },
  computed: {
    summaryData() {
      if (!this.entities.length) return;
      const summaryData = {};

      Object.keys(this.entities[0]).forEach(key => {
        this.entities.reduce((acc, curr) => {
          if (!acc[key]) acc[key] = {};
          acc[key].total = (acc[key].total || 0) + curr[key];
          acc[key].avg = acc[key].total / this.entities.length;
          return acc;
        }, summaryData);
      });

      return summaryData

    }
  },
  components: {
    DataList,
    TableHeader,
    TableSummary,
  },


}
</script>
