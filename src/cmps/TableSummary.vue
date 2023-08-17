<template>
  <section class="table-summary">
    <!-- <div v-for="summary in summaryData"></div> -->
    <div v-for="(value, key, index) in summaryData">
      <template v-if="key !== 'date'">
        <div>
          {{ key }}:
          {{ isAvg(key) ? value.avg.toFixed(2) + '%' : value.total.toFixed(2) }}
        </div>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TableSummary',
  props: {
    summaryData: { type: Object },
  },
  Date() {
    return {

    }
  },
  methods: {
    isAvg(key) {
      const isAvgs = ['quality', 'valid', 'cap'];
      return isAvgs.includes(key);
    }
  },

}
</script>