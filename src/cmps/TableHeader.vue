<template>
  <section class="table-header table-grid">
    <div class="header-item" v-for="header in headers" :key="header.title" @click="sortBy(header.sortKey)">
      <span v-if="header.sortable" :class="['table-header item icon', getDirIndicator(header)]">
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
          dir: 0

        },
        {
          title: 'Payment',
          sortable: true,
          sortKey: 'payment',
          dir: 0
        },
        {
          title: 'Searches (k)',
          sortable: true,
          sortKey: 'searches',
          dir: 0
        },
        {
          title: 'RPM',
          sortable: true,
          sortKey: 'rpm',
          dir: 0
        },
        {
          title: 'Valid',
          sortable: true,
          sortKey: 'valid',
          dir: 0
        },
        {
          title: 'Quality',
          sortable: true,
          sortKey: 'quality',
          dir: 0
        },
        {
          title: '% CAP',
          sortable: true,
          sortKey: 'cap',
          dir: 0
        },
        {
          title: 'Alerts',
          sortable: true,
          sortKey: 'alerts',
          dir: 0
        }
      ]
    }

  },
  computed: {

  },
  methods: {
    getDirIndicator(header) {
      if (header.dir === 1) return 'asc'
      if (header.dir === -1) return 'des'
      if (header.dir === 0) return ''
    },
    sortBy(sortKey) {
      const header = this.headers.find(header => header.sortKey === sortKey)
      if (!header.sortable) return
      if (header.dir === 0) header.dir = 1
      else header.dir *= -1
      this.$emit('sort', { key: sortKey, dir: header.dir })
    }
  },

}
</script>
