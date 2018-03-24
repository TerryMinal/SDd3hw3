var src = 'http://www.w3.org/2000/svg';

// values are in trillion
// values are in the following order: total revenue, total spending, total surplus, GDP
var y2015 = [2.96, 3.36, -0.339, 16.2]
var y2016 = [2.99, 3.54, -0.552, 16.5]

var graph  = function(l) {
  c = d3.select(".chart");
	setup = c.selectAll("div").data(l).enter().append("div").style("width", function(d){
  return d * 100 + "px;"; });
  console.log(setup);
}

graph(y2015);
