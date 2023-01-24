export const chartData = {
  data: {
    labels: ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'],
    datasets: [
      {
        data: ['467', '576', '500', '350', '292', '474', '513'],
        borderRadius: 24,
        borderSkipped: false,
      },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 1.5,
    scales: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (ctx) {
            console.log(ctx);
            return `${ctx.label}: $${ctx.formattedValue}`;
          },
        },
      },
    },
  },
};
