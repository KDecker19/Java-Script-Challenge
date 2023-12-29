// Read  data from sample.json file from the following path:https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json

// Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
// Use sample_values as the values for the bar chart.
// Use otu_ids as the labels for the bar chart.
// Use otu_labels as the hovertext for the chart.

// Create a bubble chart that displays each sample.
// Use otu_ids for the x values.
// Use sample_values for the y values.
// Use sample_values for the marker size.
// Use otu_ids for the marker colors.
// Use otu_labels for the text values.

// Display the sample metadata, i.e., an individual's demographic information.
// Display each key-value pair from the metadata JSON object somewhere on the page.

// Update all of the plots any time that a new sample is selected.
// Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard page might look something like the following.

// Advanced Challenge Assignment (Optional)
// The following task is advanced and therefore optional.
// Adapt the Gauge Chart from https://plot.ly/javascript/gauge-charts/ to plot the weekly washing frequency of the individual.
// You will need to modify the example gauge code to account for values ranging from 0 through 9.
// Update the chart whenever a new sample is selected.
// Create your own custom dashboard. An example dashboard page might look something like the following.

let data = d3.json("samples.json").then(function(data) {
    console.log(data);
    console.log(data.metadata[0]);
    console.log(data.samples[0]);    
    console.log(data.names[0]);
    console.log(data.metadata[0].id);
});

let sample_values = data.samples[0].sample_values;  
let otu_ids = data.samples[0].otu_ids;
let otu_labels = data.samples[0].otu_labels;

function init() {
    let selector = d3.select("#selDataset");
    data.names.forEach((name) => {
        selector.append("option").text(name).property("value", name);
    });
    let firstSample = data.names[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
}



