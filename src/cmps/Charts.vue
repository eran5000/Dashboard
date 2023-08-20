<template>
    <section class="flex column">
        <p>{{ label }}</p>
        <section class="charts" v-if="data.labels">
            <Line :data="data" :options="options" />
        </section>
    </section>
</template>
<script>
import {
    Chart as ChartJS,
    registerables
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    ...registerables
)

export default {
    props: {
        labels: Array,
        dataSet: Array,
        label: String
    },
    data() {
        return {
            data: {
                labels: [],
                datasets: [
                    {
                        label: '',
                        backgroundColor: '#b2d8d8',
                        borderColor: '#66b2b2',
                        data: [],
                        fill: true,
                        fillColor: 'rgba(0, 0, 255, 0.2)',
                        tension: 0.5
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                elements: {
                    point: {
                        radius: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        displayColors: false,
                        callbacks: {
                            label: this.label !== 'Searches'? function (context) {
                                let label = context.dataset.label || '';

                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                }
                                return label;
                            } :
                            function (context) {
                                let label = context.dataset.label || '';

                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += context.parsed.y + 'k';
                                }
                                return label;
                            }
                        }
                    }

                },
                scales: {
                    y: {
                        ticks: {
                            callback: this.label !== 'Searches'? function (value) {
                                const newVal = value > 999 ? value/1000 + 'k' : value
                                return '$' + newVal
                            } : function (value) {
                                const newVal = value > 999 ? value/1000 + 'k' : value
                                return newVal + 'k'
                            } 
                        }
                    }
                }
            },
        }
    },
    created() {
        this.data.datasets[0].label = this.label
        this.data.datasets[0].data = this.dataSet
        this.data.labels = this.labels
    },
    components: {
        Line
    }

}
</script>