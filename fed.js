
var src = 'http://www.w3.org/2000/svg';

var svg = {
  element: document.createElementNS(src, "svg"),
  height: 500,
  width: 500,
  id: "bars",
  style: "border: 1px solid;"
}

svg.element.setAttribute("height", svg.height);
svg.element.setAttribute("width", svg.width);
svg.element.setAttribute("style", svg.style);
document.getElementById("wrapper").appendChild(svg.element);


// values are in trillion
// values are in the following order: total revenue, total spending, total surplus, GDP
var y2015 = [2.96, 3.36, -0.339, 16.2] 
var y2016 = [2.99, 3.54, -0.552, 16.5]

var graph  = function(l) {
	setup = svg.element.selectAll("div").data(l).enter().append("div"); 
  setup.style("width", function(d) { return d * 100 + "px;"; });
}

graph(y2015); 
