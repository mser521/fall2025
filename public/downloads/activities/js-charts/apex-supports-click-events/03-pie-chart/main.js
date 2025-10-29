// Store data in simple variables for easy access
const chartData = [44, 55, 13, 33];
const total = chartData.reduce((sum, val) => sum + val, 0);
const labels = ['Apple', 'Mango', 'Orange', 'Watermelon'];
const chartColors = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B'];

// chart options for simple donut chart:
const options = {
  chart: {
    type: 'donut',
    height: 400,
    events: {
      dataPointSelection: getDetails,
    },
  },
  tooltip: {
    enabled: false,
  },
  series: chartData,
  labels: labels,
  colors: chartColors,
  dataLabels: {
    enabled: true,
    style: {
      fontSize: '14px',
      fontWeight: 'bold',
      colors: ['#fff'],
    },
    dropShadow: {
      enabled: false,
    },
  },
};

// Much simpler function using our stored data:
function getDetails(event, chartContext, config) {
  const dataIndex = config.dataPointIndex; // get the index of the clicked slice
  const fruit = labels[dataIndex]; // get the fruit name
  const value = chartData[dataIndex]; // get the value
  const percentage = ((value / total) * 100).toFixed(1); // calculate percentage

  // target the details panel:
  const detailsElement = document.querySelector('#details');
  // update the details panel:
  detailsElement.innerHTML = `
        <h2>${fruit}</h2>
        <p><strong>Value:</strong> ${value}</p>
        <p><strong>Percentage:</strong> ${percentage}%</p>
    `;
}

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
