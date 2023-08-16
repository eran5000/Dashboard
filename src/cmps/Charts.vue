<template>
    <section class="charts">
        <Line :data="data" :options="options" />
    </section>
</template>
<script>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export default {
    data() {
        return {
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'none',
                        backgroundColor: '#f87979',
                        data: [40, 39, 10, 40, 39, 80, 40]
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                    enabled: true, // Enable tooltips
                    callbacks: {
                        label: (tooltipItem, data) => {
                            console.log(tooltipItem)
                            const dataset = data.datasets[tooltipItem.datasetIndex]
                            const currentValue = dataset.data[tooltipItem.index]
                            return currentValue.toString()
                        }
                    }
                }
                },
                elements: {
                    point: {
                        pointStyle: 'line',
                        radius: 0, // Set the radius to 0 to hide dots
                    }
                }
            }
        }
    },
    components: {
        Line
    }

}
</script>