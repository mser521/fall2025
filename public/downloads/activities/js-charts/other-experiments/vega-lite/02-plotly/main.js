// Store data in simple variables for easy access
const N = 16;

// create 16 random x and y values between -5 and 5:
const x = Array.from({ length: N }, (_, i) => i);
const y = Array.from({ length: N }, () => Math.random() * 10 - 5); // Random values between -5 and 5

// Chart data
const data = [
  {
    x: x,
    y: y,
    type: 'scatter',
    mode: 'markers',
    marker: { size: 16, color: '#3B82F6' },
    name: 'Data Points',
  },
];

// Chart layout
const layout = {
  title: 'Interactive Scatter Plot - Click or Drag to Select Points',
  xaxis: { title: 'X Values' },
  yaxis: { title: 'Y Values' },
  hovermode: 'closest',
  showlegend: true,
  dragmode: 'select', // Enable selection mode
};

// Create the plot
const myPlot = document.getElementById('myDiv');
Plotly.newPlot('myDiv', data, layout, { responsive: true });

// Add click event listener
myPlot.on('plotly_click', function (eventData) {
  console.log('Event data:', eventData);

  // Information about the clicked points
  if (eventData.points && eventData.points.length > 0) {
    const clickedPoint = eventData.points[0]; // First clicked point

    console.log('Clicked point coordinates:', {
      x: clickedPoint.x,
      y: clickedPoint.y,
      pointIndex: clickedPoint.pointIndex,
      curveNumber: clickedPoint.curveNumber,
    });

    // Show an alert with the point info
    alert(`Clicked point:\nX: ${clickedPoint.x}\nY: ${clickedPoint.y.toFixed(2)}`);
  }
});

// Add selection event listener for drag selection
myPlot.on('plotly_selected', function (eventData) {
  console.log('Selection event data:', eventData);

  if (eventData.points && eventData.points.length > 0) {
    // Get all selected points
    const selectedPoints = eventData.points;

    // Create a summary of all selected points
    let summary = `Selected ${selectedPoints.length} points:\n\n`;

    selectedPoints.forEach((point, index) => {
      summary += `Point ${index + 1}: X=${point.x}, Y=${point.y.toFixed(2)}\n`;
    });

    // Show alert with all selected points
    alert(summary);
  }
});

// // Add relayout event listener for box selection
// myPlot.on('plotly_relayout', function (eventData) {
//   // Check if this is a box selection (not zoom/pan)
//   if (eventData['xaxis.range[0]'] !== undefined && eventData['xaxis.range[1]'] !== undefined) {
//     console.log('Box selection detected:', eventData);

//     // Get the selection range
//     const xRange = [eventData['xaxis.range[0]'], eventData['xaxis.range[1]']];
//     const yRange = [eventData['yaxis.range[0]'], eventData['yaxis.range[1]']];

//     // Find points within the selection range
//     const pointsInRange = [];
//     for (let i = 0; i < x.length; i++) {
//       if (x[i] >= xRange[0] && x[i] <= xRange[1] && y[i] >= yRange[0] && y[i] <= yRange[1]) {
//         pointsInRange.push({ x: x[i], y: y[i], index: i });
//       }
//     }

//     if (pointsInRange.length > 0) {
//       let summary = `Box selection: ${pointsInRange.length} points found\n\n`;
//       pointsInRange.forEach((point, index) => {
//         summary += `Point ${index + 1}: X=${point.x}, Y=${point.y.toFixed(2)}\n`;
//       });
//       alert(summary);
//     }
//   }
// });
