<template>
  <section class="table-header grid">
    <div class="header-item" v-for="header in headers" :key="header.title" @click="sortBy(header.sortKey)">
      <span v-if="header.sortable" :class="['table-header item icon', header.dir === 1 ? 'asc' : 'des']">
        <i class="fas fa-sort-up"></i>
        <i class="fas fa-sort-down"></i>
      </span>
      <span>{{ header.title }}</span>
    </div>
  </section>
</template>
<script>
export default {
  name: 'TableHeader',
  emits: ['sort'],
  data() {
    return {
      headers: [
        {
          title: 'Date',
          sortable: true,
          sortKey: 'date',
          dir: 1

        },
        {
          title: 'Payment',
          sortable: true,
          sortKey: 'payment',
          dir: 1
        },
        {
          title: 'Searches (k)',
          sortable: true,
          sortKey: 'searches',
          dir: 1
        },
        {
          title: 'RPM',
          sortable: true,
          sortKey: 'rpm',
          dir: 1
        },
        {
          title: 'Valid',
          sortable: true,
          sortKey: 'valid',
          dir: 1
        },
        {
          title: '% CAP',
          sortable: true,
          sortKey: 'cap',
          dir: 1
        },
        {
          title: 'Alerts',
          sortable: true,
          sortKey: 'alerts',
          dir: 1
        }
      ]
    }

  },
  methods: {
    sortBy(sortKey) {
      const header = this.headers.find(header => header.sortKey === sortKey)
      if (!header.sortable) return
      header.dir = header.dir * -1
      this.$emit('sort', { key: sortKey, dir: header.dir })
    }
  },

}
</script>
<style lang="scss">
.table-header {
  font-weight: 600;
  font-size: 0.8rem;
  display: grid;
  grid-auto-flow: column;
}

.header-item {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content 1fr;
  gap: 0.5rem;
}

.table-header.icon {
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: min-content;
}
</style>