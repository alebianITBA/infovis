function shuffle(array) {
  var counter = array.length;
  while (counter > 0) {
      var index = Math.floor(Math.random() * counter);
      counter--;

      var temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }
  return array;
}

function randomHexColor() {
  return "#" + Math.floor(Math.random()*16777215).toString(16)
}

var data = [["records",5],["cognition",5],["representations",6],["graphical",6],["card",7],["computer",7],["space",8],["visual",9],["abstract",11],["visualization",28],["information",29],["data",34]];
var maxFont = 50;
var minFont = 20;

var scale = d3.scale.linear()
                .domain([d3.min(data, function(d) { return d[1]; }),
                         d3.max(data, function(d) { return d[1]; })])
                .range([minFont, maxFont]);

d3.select("div#word-soup")
    .selectAll("span")
    .data(shuffle(data))
    .enter()
    .append("span")
    .attr("class", "word-cloud")
    .html(function(d) { return "<b style='color:" + randomHexColor() + ";font-size:" + scale(d[1]) + "px'>" + d[0] + " </b>"; });

var w = 700;
var h = (data.length / 2 + 1) * 50;

var svg = d3.select("div#word-soup-svg")
              .append("svg")
              .attr("width", w)
              .attr("height", h);

svg.selectAll("text")
    .data(shuffle(data))
    .enter()
    .append("text")
    .text(function(d) { return d[0]; })
    .attr("font-size", function(d) { return scale(d[1]) + "px"; })
    .attr("fill", function(d) { return randomHexColor(); })
    .attr("x", function(d, i) {
      if (i % 2 == 0) { return 0; }
      else { return w / 2; }
    })
    .attr("y", function(d, i) {
      return (i / 2) * maxFont + maxFont;
    })

d3.select("div#word-soup-svg")
    .on("click", function(d) {
      svg.selectAll("text")
           .data(shuffle(data))
           .text(function(d) { return d[0]; })
    });
