var dropdownMenu  = d3.select("#selDataset");

function init(){
    d3.json("samples.json").then(function(data){
        console.log(data);

    var sample_data = data.names;
    
    sample_data.forEach(function(name){dropdownMenu
        .append("option")
        .text(name)
        .property("value",name)})

    // use the initial sample to have some data when we land on the page
    var landingData = sample_data[0]
    // call function
    filterMeta(landingData);
    buildCharts(sample_data);
        
    

})};
//function to filter down to just the metadata
function filterMeta(name){
    d3.json("samples.json").then(function(data){
    var demoGraphic = d3.select("#sample-metadata");
    
    demoGraphic.html("");
    // append data to demographic info
    // Not sure how to just append metadata
    Object.entries(data).forEach(function ([key, value]){
        var row = demoGraphic.append("p")
        row.text(`${key}: ${value}`);
    })
   
})};

function optionChanged(sample_data){
    filterMeta(sample_data);
    buildCharts(sample_data);
};

function buildCharts(sample_data){
    d3.json("samples.json").then(function(data){
    var otu_ids = data.otu_ids;
    var otu_labels = data.otu_labels;
    var sample_values = data.sample_values;

    //Building Bubble chart
    var bubData = [{
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      }
    }];      

    var Layout = {
      margin: { t: 0 },
      hovermode: 'closest',
      xaxis: {title: 'OTU ID'},
    };

    Plotly.plot('bubble', bubData, Layout);

})};
init();