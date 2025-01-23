import ApexCharts from 'apexcharts'

window.ApexCharts = ApexCharts

const getRandomChartDataItem = (l = 10, m = 100) => {
    return Math.floor(Math.random() * (m - l) + l)
}

const getRandomChartData = (l = 10, m = 100) => {
    return Array.from({ length: l }, () => getRandomChartDataItem(l, m))
}

const getScheme = () => {
    if (window.localStorage.getItem('dark')) {
        return JSON.parse(window.localStorage.getItem('dark'))
    }

    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
}

const onInit = (chart) => {
    document.addEventListener('scheme:changed', () => {
        chart.updateOptions({
            theme: {
                mode: getScheme() ? 'dark' : 'light',
            },
        })
    })
}

document.addEventListener('alpine:init', () => {
    const baseChartOptions = {
        theme: {
            mode: getScheme() ? 'dark' : 'light',
        },
    }

    const quickStatisticsChartOptions = (name) => {
        return {
            ...baseChartOptions,
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
                background: 'transparent',
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

    window.Alpine.data('quickStatisticsChart', (el, name) => {
        let chart = new ApexCharts(el, quickStatisticsChartOptions(name))

        chart.render()

        return {
            init() {
                onInit(chart)
            },
        }
    })

    window.Alpine.data('barChart', (el) => {
        let chart = new ApexCharts(el, {
            ...baseChartOptions,
            chart: {
                type: 'bar',
                height: '100%',
                width: '100%',
                parentHeightOffset: 0,
                toolbar: {
                    show: false,
                },
                background: 'transparent',
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
        })

        chart.render()

        return {
            init() {
                onInit(chart)
            },
        }
    })
})
