<template>
    <section class="dashboard-preview">
        <p>{{ date }}</p>
    </section>
</template>
<script>
export default {
name: 'DataPreview',
props: {
    entity: {type: Object}
},
computed: {
    date() {
        return new Date(this.entity.date).toLocaleDateString("es-CL")
    }
}
}
</script>