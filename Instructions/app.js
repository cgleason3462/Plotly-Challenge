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
    var landingData = data.names[0]
    // call function
    filterMeta(landingData)
        
    

})};
// function to filter down to just the metadata
function filterMeta(name){
    d3.json("samples.json").then(function(data){
    var metaData = data.metadata
    // filtering
    var filterMeta = metadata.id == name;
    var demoGraphic = d3.select("#sample-metadata");
    // Object entries
    Object.entries(name).forEach(([key, value]) =>{
        if (key == "")
    }
})};


init();