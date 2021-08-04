const monthDays = [
  '1 May',
  '2 May',
  '3 May',
  '4 May',
  '5 May',
  '6 May',
  '7 May',
  '8 May',
  '9 May',
  '10 May',
  '11 May',
  '12 May',
  '13 May',
  '14 May',
  '15 May',
  '16 May',
  '17 May',
  '18 May',
  '19 May',
  '20 May',
  '21 May',
  '22 May',
  '23 May',
  '24 May',
  '25 May',
  '26 May',
  '27 May',
  '28 May',
  '29 May',
  '30 May',
  '31 May',
]

const lineChartOptions = {
  scales: {
    yAxes: [
      {
        display: false,
      },
    ],
    xAxes: [
      {
        display: false,
      },
    ],
  },
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  hover: {
    mode: 'nearest',
    intersect: false,
  },
  tooltips: false,
}

const usersCanvas = document.getElementById('usersChart').getContext('2d')
const usersChart = new Chart(usersCanvas, {
  type: 'line',
  data: {
    labels: monthDays,
    datasets: [
      {
        data: [
          21, 20, 24, 20, 18, 17, 15, 17, 18, 30, 31, 30, 30, 35, 25, 35, 35, 40, 60, 90, 90, 90, 85, 70, 75, 70, 30,
          30, 30, 50, 72,
        ],
        backgroundColor: ['rgba(55, 125, 255, 0)', 'rgba(255, 255, 255, 0)'],
        borderColor: '#377dff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: lineChartOptions,
})
const sessionsCanvas = document.getElementById('sessionsChart').getContext('2d')
const sessionsChart = new Chart(sessionsCanvas, {
  type: 'line',
  data: {
    labels: monthDays,
    datasets: [
      {
        data: [
          21, 20, 24, 20, 18, 17, 15, 17, 30, 30, 35, 25, 18, 30, 31, 35, 35, 90, 90, 90, 85, 100, 120, 120, 120, 100,
          90, 75, 75, 75, 90,
        ],
        backgroundColor: ['rgba(55, 125, 255, 0)', 'rgba(255, 255, 255, 0)'],
        borderColor: '#377dff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: lineChartOptions,
})
const vistsCanvas = document.getElementById('vistsChart').getContext('2d')
const vistsChart = new Chart(vistsCanvas, {
  type: 'line',
  data: {
    labels: monthDays,
    datasets: [
      {
        data: [
          25, 18, 30, 31, 35, 35, 60, 60, 60, 75, 21, 20, 24, 20, 18, 17, 15, 17, 30, 120, 120, 120, 100, 90, 75, 90,
          90, 90, 75, 70, 60,
        ],
        backgroundColor: ['rgba(55, 125, 255, 0)', 'rgba(255, 255, 255, 0)'],
        borderColor: '#377dff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: lineChartOptions,
})
const articlesCanvas = document.getElementById('articlesChart').getContext('2d')
const articlesChart = new Chart(articlesCanvas, {
  type: 'line',
  data: {
    labels: monthDays,
    datasets: [
      {
        data: [
          21, 20, 24, 15, 17, 30, 30, 35, 35, 35, 40, 60, 12, 90, 90, 85, 70, 75, 43, 75, 90, 22, 120, 120, 90, 85, 100,
          92, 92, 92, 92,
        ],
        backgroundColor: ['rgba(55, 125, 255, 0)', 'rgba(255, 255, 255, 0)'],
        borderColor: '#377dff',
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 0,
      },
    ],
  },
  options: lineChartOptions,
})

const updatingMonthlyCanvas = document.getElementById('updatingMonthlyChart').getContext('2d')
const updatingMonthlyChart = new Chart(updatingMonthlyCanvas, {
  type: 'bar',
  data: {
    labels: ['May 1', 'May 2', 'May 3', 'May 4', 'May 5', 'May 6', 'May 7', 'May 8', 'May 9', 'May 10'],
    datasets: [
      {
        data: [200, 300, 290, 350, 150, 350, 300, 100, 125, 220],
        backgroundColor: '#377dff',
        hoverBackgroundColor: '#377dff',
        borderColor: '#377dff',
      },
      {
        data: [150, 230, 382, 204, 169, 290, 300, 100, 300, 225, 120],
        backgroundColor: '#e7eaf3',
        borderColor: '#e7eaf3',
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          gridLines: {
            color: '#e7eaf3',
            drawBorder: false,
            zeroLineColor: '#e7eaf3',
          },
          ticks: {
            beginAtZero: true,
            stepSize: 100,
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 10,
            postfix: '$',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false,
          },
          ticks: {
            fontSize: 12,
            fontColor: '#97a4af',
            fontFamily: 'Open Sans, sans-serif',
            padding: 5,
          },
          categoryPercentage: 0.5,
          maxBarThickness: '10',
        },
      ],
    },
    cornerRadius: 2,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      prefix: '$',
      hasIndicator: true,
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
  },
})
