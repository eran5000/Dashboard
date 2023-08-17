<template>
    <section class="app-filter">
        <el-date-picker @change="log" v-model="dates" type="daterange" start-placeholder="Start Date"
            end-placeholder="End Date" :default-value="[new Date(2023, 7, 1), new Date(2023, 10, 1)]" />
        <el-select v-model="searchEngine" class="m-2" placeholder="Select">
            <el-option v-for="item in searchEngines" :key="item" :label="item.label" :value="item" />
        </el-select>
        <el-select v-model="country" class="m-2" placeholder="Select Country">
            <template #prefix>
                <i class="fa-solid fa-earth-americas"></i>
            </template>
            <el-option v-for="item in countries" :key="item" :label="item.label" :value="item" />
        </el-select>
    </section>
</template>
<script>
export default {

    data() {
        return {
            dates: '',
            suffixIcon: 'el-icon-star',// Here you can specify your desired icon class
            searchEngine: 'Bing',
            country: '',
            countries: [
                'Israel',
                'China',
                'Maroco',
                'Jordan'
            ],
            searchEngines: [
                'Google',
                'Bing',
                'Yahoo',
                'Yandex'
            ]
        }
    },
    methods: {
        log() {
            console.log(this.dates)
        }
    },
}
</script>
<style scoped>
.demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
}

.demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    flex: 1;
}

.demo-date-picker .block:last-child {
    border-right: none;
}

.demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>