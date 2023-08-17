<template>
  <section class="table-container">
    <TableHeader/>
    <DataList/>
    <TableSummary/>
      <!-- <DataPreview v-for="entity in entities" :key="entity.date"/> -->
      <pre>{{ entities }}</pre>
  </section>
</template>
<script>
import DataPreview from './DataPreview.vue';
import TableHeader from './TableHeader.vue';
import TableSummary from './TableSummary.vue';

export default {
  name: 'DataTable',
  props: {
      entities: {type: Array}
  },
  components: {
     DataPreview,
     TableHeader,
     TableSummary
  }
}
</script>