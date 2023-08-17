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
                        data: [40, 39, 10, 40, 39, 80, 40],
                        datalabels: {
                            display: true, // Display labels on data points
                        },
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                fill: true,
                plugins: {
                    legend: {
                        display: false,
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