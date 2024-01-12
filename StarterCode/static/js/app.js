const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
    console.log(data);

    // Create a horizontal bar chart
    let trace1 = {
        x: data.otu_ids.slice(0, 10),
        y: data.sample_values.slice(0, 10),
        text: data.otu_labels.slice(0, 10),
        type: "bar",
        orientation: "h"
    };

    let chartData = [trace1];
    let layout = {
        title: "Top 10 OTUs",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    Plotly.newPlot("plot", chartData, layout);

    // Create a bubble chart
    let trace2 = {
        x: data.otu_ids,
        y: data.sample_values,
        text: data.otu_labels,
        mode: "markers",
        marker: {
            size: data.sample_values,
            color: data.otu_ids
        }
    };
    let chartData2 = [trace2];
    let layout2 = {
        title: "All OTUs",
        margin: {
            l: 100,
            r: 100,
            t: 100,
            b: 100
        }
    };
    Plotly.newPlot("plot2", chartData2, layout2);

    // Display sample metadata
    let metadata = data.metadata;
    console.log(metadata);
    let metadataId = metadata[0].id;
    document.getElementById("sample-metadata").innerHTML = `ID: ${metadataId}`;

    // Function to update plots
    function updatePlotly(newdata) {
        // Restyle the plots as needed
        Plotly.restyle("plot", newdata); // fix typo here
        Plotly.restyle("plot2", newdata); // fix typo here
    }

    // Function to build the gauge chart
    function buildGauge(wfreq) {
        let level = parseFloat(wfreq) * 20;
        let degrees = 180 - level;
        let radius = 0.5;
        let radians = (degrees * Math.PI) / 180;
        let x = radius * Math.cos(radians);
        let y = radius * Math.sin(radians);
        let mainPath = "M -.0 -0.05 L .0 0.05 L";
        let pathX = String(x);
        let space = " ";
        let pathY = String(y);
        let pathEnd = " Z";
        let path = mainPath.concat(pathX, space, pathY, pathEnd);

        console.log(path);
    }
});


