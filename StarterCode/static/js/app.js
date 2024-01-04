// Read in samples.json using d3.json().

const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

d3.json(url).then(function(data) {
    console.log(data);
}
);

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.

let trace1 = {
    x: data.map(row => row.otu_ids),
    y: data.map(row => row.sample_values),
    text: data.map(row => row.otu_labels),
    name: "OTU",
    type: "bar",
    orientation: "h"
  };

  // data
  let chartData = [trace1];

  // Apply the group bar mode to the layout
  let layout = {
    title: "OTU",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };

  Plotly.newPlot("plot", chartData, layout);

// Create a bubble chart that displays each sample.

let trace2 = {
    x: data.map((row) => row.otu_ids),
    y: data.map((row) => row.sample_values),
    text: data.map((row) => row.otu_labels),
    mode: "markers",
    marker: {
      size: data.map((row) => row.sample_values),
      color: data.map((row) => row.otu_ids)
    }
    };
let chartDatat2 = [trace2];
let layout2 = {
    title: "OTU",
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 100
    }
  };
Plotly.newPlot("plot2", chartData2, layout2);
// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object somewhere on the page.

let metadata = data.metadata;
console.log(metadata);

let metadataId = data.metadata[0].id;

//update all the plots when a new sample is selected

function updatePlotly(newdata) {
    Plotly.restyle("plot", "x", [newdata.x]);
    Plotly.restyle("plot", "y", [newdata.y]);
    Plotly.restyle("plot", "text", [newdata.text]);
    Plotly.restyle("plot", "marker.size", [newdata.marker.size]);
    Plotly.restyle("plot", "marker.color", [newdata.marker.color]);
    Plotly.restyle("plot2", "x", [newdata.x]);
    Plotly.restyle("plot2", "y", [newdata.y]);
    Plotly.restyle("plot2", "text", [newdata.text]);
    Plotly.restyle("plot2", "marker.size", [newdata.marker.size]);
    Plotly.restyle("plot2", "marker.color", [newdata.marker.color]);
  }

// Update the restyled plot's values

function getData(dataset) {
    let data = [];
    switch (dataset) {
    case "dataset1":
      data = data.dataset1;
      break;
    case "dataset2":
      data = data.dataset2;
      break;
    case "dataset3":
      data = data.dataset3;
      break;
    default:
      data = data.dataset1;
    }
    updatePlotly(data);
  }

// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
// You will need to modify the example gauge code to account for values ranging from 0 through 9.
// Update the chart whenever a new sample is selected.

function buildGauge(wfreq) {
    let level = parseFloat(wfreq) * 20;
    let degrees = 180 - level;
    let radius = 0.5;
    let radians = (degrees * Math.PI) / 180;
    let x = radius * Math.cos(radians);
    let y = radiues * Math.sin(radians);   
    let mainPath = "M -.0 -0.05 L .0 0.05 L";
    let pathX = String(x);
    let space = " ";
    let pathY = String(y);  
    let pathEnd ="Z";
    // Remove unused variables
    // Remove unused variables
        {
            type: "scatter",
            x: [0],
            y: [0],
            marker: {size: 12, color: "850000"},
            showlegend: false,
            name: "Freq",}
        ]
        }
document.getElementById("sample-metadata").innerHTML = metadataId;













