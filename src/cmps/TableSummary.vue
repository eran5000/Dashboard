<template>
  <section class="table-summary table-grid">
    <div v-for="(value, key, index) in summaryData">
      <template v-if="key == 'date'">Total</template>
      <template v-else>
        <div>
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
    return {}
  },
  created() {
console.log(this.summaryData);
  },
  methods: {
    isAvg(key) {
      const isAvgs = ['quality', 'valid', 'cap']
      return isAvgs.includes(key)
    },
  },
}
</script>
