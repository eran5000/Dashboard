<template>
    <section class="dashboard-list">
        <DataPreview v-for="entity in entities" :key="entity.date" :entity="entity"/>
    </section>
</template>
<script>
import DataPreview from './DataPreview.vue';

export default {
    name: 'DataList',
    props: {
        entities: {type: Array}
    },
    components: {
       DataPreview
    }
}
</script>