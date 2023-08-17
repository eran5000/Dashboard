<template>
    <section class="charts" v-if="data.labels">
        <Line :data="data" :options="options" />
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
    props:{
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
                        fillColor: 'rgba(0, 0, 255, 0.2)'
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
                            label: function (context) {
                                let label = context.dataset.label || '';

                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                }
                                return label;
                            }
                        }
                    }

                },
                scales: {
                    display: true,
                    y: {
                        ticks: {
                            callback: function (value, index, ticks) {
                                return '$' + value;
                            }
                        }
                    }
                }
            }
        }
    },
    created() {
        this.data.datasets[0].label = this.labels
        this.data.datasets[0].data = this.dataSet
        this.data.labels = this.labels
    },
    components: {
        Line
    }

}
</script>