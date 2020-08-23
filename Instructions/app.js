function init(){
    d3.json("samples.json").then(function(data){
        console.log(data);
    var sample_data = data.names;
    
    var dropDown  = d3.select("#selDataset");
    sample_data.forEach(function(name){dropdownMenu
        .append("option")
        .text(name)
        .property("value",name)})
});

};
