<template>
  <section class="table-summary table-grid">
    <div v-for="(value, key) in summaryData" :key="key">
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
  methods: {
    isAvg(key) {
      const isAvgs = ['quality', 'valid', 'cap']
      return isAvgs.includes(key)
    },
  },
}
</script>
