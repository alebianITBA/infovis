var radius = 50 + Math.floor(Math.random() * 100);
var doubleAreaRadius = Math.sqrt(2 * radius * radius);

var space = 10;
var w = doubleAreaRadius * 2 + radius * 2 + space;
var h = doubleAreaRadius * 2;

var data = [{ x: radius, y: (h / 2), r: radius }, { x: (w - doubleAreaRadius), y: (h / 2), r: doubleAreaRadius }]

var svg = d3.select("div#circles")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("circle")
   .data(data)
   .enter()
   .append("circle")
   .attr("cx", function(d) { return d.x; })
   .attr("cy", function(d) { return d.y; })
   .attr("r", function(d) { return d.r; })
   .style("fill", function(d) { return "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")"; });
