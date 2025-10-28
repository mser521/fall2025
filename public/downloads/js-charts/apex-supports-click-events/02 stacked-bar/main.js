// Store data in simple variables for easy access
const categories = ['Jan', 'Feb', 'Mar', 'Apr'];
const chartColors = [
  '#3B82F6', // Blue
  '#EF4444', // Red
  '#10B981', // Green
  '#F59E0B', // Amber
  '#8B5CF6', // Purple
  '#EC4899', // Pink
];

const seriesData = [
  {
    name: 'Product A',
    data: [
      { x: 'Jan', y: 4, image: 'https://picsum.photos/300/300?random=1' },
      { x: 'Feb', y: 7, image: 'https://picsum.photos/300/300?random=2' },
      { x: 'Mar', y: 3, image: 'https://picsum.photos/300/300?random=3' },
      { x: 'Apr', y: 5, image: 'https://picsum.photos/300/300?random=4' },
    ],
  },
  {
    name: 'Product B',
    data: [
      { x: 'Jan', y: 2, image: 'https://picsum.photos/300/300?random=5' },
      { x: 'Feb', y: 3, image: 'https://picsum.photos/300/300?random=6' },
      { x: 'Mar', y: 4, image: 'https://picsum.photos/300/300?random=7' },
      { x: 'Apr', y: 2, image: 'https://picsum.photos/300/300?random=8' },
    ],
  },
  {
    name: 'Product C',
    data: [
      { x: 'Jan', y: 1, image: 'https://picsum.photos/300/300?random=9' },
      { x: 'Feb', y: 2, image: 'https://picsum.photos/300/300?random=10' },
      { x: 'Mar', y: 1, image: 'https://picsum.photos/300/300?random=11' },
      { x: 'Apr', y: 3, image: 'https://picsum.photos/300/300?random=12' },
    ],
  },
];

// chart options:
const options = {
  chart: {
    type: 'bar',
    stacked: true, // TODO: comment out for traditional bar chart.
    animations: {
      enabled: false,
    },
    events: {
      dataPointSelection: getDetails,
    },
  },
  tooltip: {
    enabled: false,
  },
  colors: chartColors,
  series: seriesData,
  xaxis: { categories: categories },
  plotOptions: {
    bar: {
      horizontal: false, // true for horizontal bar chart
    },
  },
};

// Much simpler function using our stored data:
function getDetails(event, chartContext, config) {
  const seriesIndex = config.seriesIndex; // get the series index
  const dataIndex = config.dataPointIndex; // get the data point index
  const dataPoint = seriesData[seriesIndex].data[dataIndex]; // get the data point

  const dataValue = dataPoint.y; // get the value
  const seriesName = seriesData[seriesIndex].name; // get the series name
  const category = dataPoint.x; // get the category
  const imageUrl = dataPoint.image; // get the image URL

  // target the details panel:
  const detailsElement = document.querySelector('#details');
  // update the details panel:
  detailsElement.innerHTML = `
        <h2>Details for ${category}</h2>
        <p>Category: ${category}</p>
        <p>Series: ${seriesName}</p>
        <p>Value: ${dataValue}</p>
        <img src="${imageUrl}" alt="${seriesName} icon">
    `;
}

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
