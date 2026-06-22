// js/chart-manager.js
// Interfaces with ApexCharts to render dynamic sidebar graphs for sales managers (Korean Localized)

const ChartManager = (() => {
  let severityDonutChart = null;
  let productBarChart = null;

  // Render Severity Donut Chart
  function initSeverityDonut(containerId) {
    const options = {
      series: [0, 0, 0, 0],
      chart: {
        type: 'donut',
        height: 200,
        fontFamily: 'Inter, sans-serif'
      },
      labels: ['심각한 위험', '높은 영향', '보통 영향', '기회 요인'],
      colors: ['#ef4444', '#f97316', '#eab308', '#22c55e'],
      legend: {
        show: false
      },
      dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex];
        },
        style: {
          fontSize: '11px',
          fontWeight: 'bold',
          colors: ['#fff']
        }
      },
      plotOptions: {
        pie: {
          donut: {
            size: '65%',
            labels: {
              show: true,
              name: {
                show: true,
                fontSize: '11px',
                color: '#475569',
                offsetY: -5
              },
              value: {
                show: true,
                fontSize: '18px',
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 'bold',
                color: '#0f172a',
                offsetY: 5,
                formatter: function (val) {
                  return val + '건';
                }
              },
              total: {
                show: true,
                label: '총 합계',
                fontSize: '10px',
                fontWeight: '700',
                color: '#94a3b8',
                formatter: function (w) {
                  return w.globals.seriesTotals.reduce((a, b) => a + b, 0) + '건';
                }
              }
            }
          }
        }
      },
      tooltip: {
        enabled: true,
        y: {
          formatter: function(val) { return `${val}개 활성 경보`; }
        }
      }
    };

    severityDonutChart = new ApexCharts(document.getElementById(containerId), options);
    severityDonutChart.render();
  }

  // Render Product Impact Bar Chart
  function initProductBar(containerId) {
    const options = {
      series: [
        { name: '냉장고', data: [0, 0, 0, 0, 0] },
        { name: '세탁기', data: [0, 0, 0, 0, 0] }
      ],
      chart: {
        type: 'bar',
        height: 180,
        stacked: true,
        toolbar: { show: false },
        fontFamily: 'Inter, sans-serif'
      },
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '60%',
        },
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      xaxis: {
        categories: ['SG', 'TH', 'BD', 'LK', 'NP'],
        labels: {
          style: { fontSize: '10px', colors: '#64748b' }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: { fontSize: '11px', fontWeight: 600, colors: '#0f172a' }
        }
      },
      colors: ['#3b82f6', '#06b6d4'], // Refrigerator (Blue) vs Washing Machine (Cyan)
      legend: {
        position: 'top',
        horizontalAlign: 'center',
        fontSize: '11px',
        offsetY: 0
      },
      fill: {
        opacity: 0.95
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return `${val}개 이벤트`;
          }
        }
      }
    };

    productBarChart = new ApexCharts(document.getElementById(containerId), options);
    productBarChart.render();
  }

  // Update chart data based on loaded and filtered records
  function updateCharts(filteredEvents) {
    if (!severityDonutChart) return;

    // 1. Calculate Severities
    const counts = {
      "Critical Risk": 0,
      "High Impact": 0,
      "Medium Impact": 0,
      "Opportunity": 0
    };

    filteredEvents.forEach(e => {
      if (counts[e.impactLevel] !== undefined) {
        counts[e.impactLevel]++;
      }
    });

    severityDonutChart.updateSeries([
      counts["Critical Risk"],
      counts["High Impact"],
      counts["Medium Impact"],
      counts["Opportunity"]
    ]);

  }

  return {
    init: (donutContainerId) => {
      initSeverityDonut(donutContainerId);
      console.log('ChartManager successfully initialized.');
    },
    update: (filteredEvents) => {
      updateCharts(filteredEvents);
    }
  };
})();
