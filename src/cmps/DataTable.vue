<template>
  <section class="table-container">
    <TableHeader @sort="$emit('sort', $event)" />
    <DataList :entities="entities" />
    <TableSummary />
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
  components: {
    DataList,
    TableHeader,
    TableSummary,
  },
}
</script>
