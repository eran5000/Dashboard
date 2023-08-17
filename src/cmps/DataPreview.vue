<template>
  <section class="data-preview table-grid">
    <p v-for="col in colOrder">{{ formattedEntity(col) }}</p>
  </section>
</template>
<script>
export default {
  name: 'DataPreview',
  props: {
    entity: { type: Object },
  },
  data() {
    return {
      colOrder: Object.keys(this.entity),
    }
  },
  methods: {
    formattedEntity(type) {
      switch (type) {
        case 'date':
          return new Date(this.entity.date).toLocaleDateString('es-CL')
        case 'payment':
        case 'rpm':
          return this.entity[type].toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })
        case 'searches':
          return `${this.entity.searches} K`
        case 'cap':
        case 'quality':
          return `${this.entity[type]} %`
        default:
          return this.entity[type]
      }
    },
  },
}
</script>
