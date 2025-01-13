import ApexCharts from 'apexcharts'

window.ApexCharts = ApexCharts

const getRandomChartDataItem = (l = 10, m = 100) => {
    return Math.floor(Math.random() * (m - l) + l)
}

const getRandomChartData = (l = 10, m = 100) => {
    return Array.from({ length: l }, () => getRandomChartDataItem(l, m))
}

const quickStatisticsChartOptions = (name) => {
    return {
        series: [
            {
                name: name,
                data: getRandomChartData(12),
            },
        ],
        chart: {
            height: '100%',
            width: '100%',
            type: 'line',
            toolbar: {
                show: false,
            },
            sparkline: {
                enabled: true,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
            },
            xaxis: {
                lines: {
                    show: false,
                },
            },
            yaxis: {
                lines: {
                    show: false,
                },
            },
        },
        xaxis: {
            tickAmount: 10,
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        title: {
            show: false,
        },
        fill: {
            type: 'gradient',
            gradient: {
                shade: 'dark',
                gradientToColors: ['#FDD835'],
                shadeIntensity: 1,
                type: 'horizontal',
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        tooltip: {
            x: { show: false },
            theme: 'dark',
        },
    }
}

document.addEventListener('alpine:init', () => {
    window.Alpine.data('quickStatisticsChart', (el, name) => {
        return {
            init() {
                new ApexCharts(el, quickStatisticsChartOptions(name)).render()
            },
        }
    })

    window.Alpine.data('barChart', (el) => {
        new ApexCharts(el, {
            chart: {
                type: 'bar',
                height: '100%',
                width: '100%',
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                },
            },
            plotOptions: {
                bar: {
                    columnWidth: '50%',
                },
            },
            dataLabels: {
                enabled: false,
            },
            fill: {
                opacity: 1,
            },
            series: [
                {
                    name: 'A',
                    data: getRandomChartData(12),
                },
                {
                    name: 'B',
                    data: getRandomChartData(12),
                },
            ],
            tooltip: {
                theme: 'dark',
            },
            grid: {
                padding: {
                    top: -20,
                    right: 0,
                    left: -4,
                    bottom: -4,
                },
                strokeDashArray: 4,
            },
            xaxis: {
                labels: {
                    padding: 0,
                },
                tooltip: {
                    enabled: false,
                },
                axisBorder: {
                    show: false,
                },
                categories: ['M 1', 'M 2', 'M 3', 'M 4', 'M 5', 'M 6', 'M 7', 'M 8', 'M 9', 'M 10', 'M 11', 'M 12'],
            },
            yaxis: {
                labels: {
                    padding: 4,
                },
            },
            legend: {
                show: false,
            },
        }).render()
    })
})
