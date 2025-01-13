export default {
    title: 'Starter Dashboard Layout',

    navigationLinks: [
        {
            title: 'Dashboard',
            url: '/index.html',
            iconName: 'tabler--dashboard',
        },
        {
            title: 'Pages',
            url: null,
            iconName: 'tabler--file',
            links: [
                {
                    title: 'Blank',
                    url: '/blank.html',
                },
            ],
        },
    ],

    charts: {
        quickStatisticsCharts: [
            {
                title: 'Customers',
                url: '#',
                icon: 'tabler--users-group',
                total: '12.4k',
                percentage: '32.40%',
                status: 'up',
            },
            {
                title: 'Visits',
                url: '#',
                icon: 'tabler--eye',
                total: '-2.6k',
                percentage: '-2.10%',
                status: 'down',
            },
            {
                title: 'Orders',
                url: '#',
                icon: 'tabler--shopping-cart',
                total: '34.4k',
                percentage: '0.60%',
                status: 'default',
            },
            {
                title: 'Growth',
                url: '#',
                icon: 'tabler--chart-pie',
                total: '15.6%',
                percentage: '7.20%',
                status: 'up',
            },
        ],
    },
}
