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

var data = [["graphical",6],["representations",6],["that",6],["with",6],["card",7],["computer",7],["this",8],["space",8],["visual",9],["abstract",11],["visualization",28],["information",29],["data",34]]

var scale = d3.scale.linear()
                .domain([1, 13])
                .range([16, 36]);

d3.select("div#word-soup")
  .selectAll("span")
  .data(shuffle(data))
  .enter()
  .append("span")
  .html(function(d) { return "<b style='font-family:monospace;color:" + randomHexColor() + ";font-size:" + scale(d[1]) + "px'> " + d[0] + "</b>"; });
