<template>
    <section class="data-preview table-grid">
        <p>{{ date }}</p>
        <p>{{ payment }}</p>
        <p>{{ entity.searches }} K</p>
        <p>{{ rpm }}</p>
        <p>{{ entity.valid }}%</p>
        <p>{{ entity.quality }}%</p>
        <p>{{ entity.cap }}%</p>
        <p>{{ entity.alerts }}</p>
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
    },
    payment() {
        return this.entity.payment.toLocaleString("en-US", {style:"currency", currency:"USD"});
    },
    rpm() {
        return this.entity.rpm.toLocaleString("en-US", {style:"currency", currency:"USD"});
    },
}
}
</script>