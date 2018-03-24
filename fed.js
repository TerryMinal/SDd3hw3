var src = 'http://www.w3.org/2000/svg';

// values are in trillion
// values are in the following order: total revenue, total spending, money lost, GDP
var y2015 = [2.96, 3.36, 0.339, 16.2];
var y2016 = [2.99, 3.54, 0.552, 16.5];


var graph  = function(l) {
var chart = d3.select(".chart").selectAll("div").data(l).enter().append("div");
 //Set width of each bar proportional to its data value.
 chart.style("width", function(d) {
 return d * 50 + "px"; });
 //Label each bar.
 chart.text(function(d) { return d; });
}

graph(y2015);
graph(y2016); //does not create a second graph
