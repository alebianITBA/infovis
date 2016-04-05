var data = [{"text": "I felt creative", "agree": 88, "neutral": 8, "disagree": 4}, {"text":"I felt an emotional reaction", "agree":66, "neutral": 22, "disagree": 12}, {"text":"I learned something new about the text", "agree":63, "neutral": 24, "disagree": 13}, {"text":"It confirmed my understanding of the text", "agree":57, "neutral": 33, "disagree": 10}, {"text":"It jogged my memory", "agree":50, "neutral": 35, "disagree": 15}, {"text":"The Wordle confused me", "agree":5, "neutral": 9, "disagree": 86}];

var agreeColor = "#8cdf59";
var neutralColor = "#7697b0";
var disagreeColor = "#db4437";

var bar_width = 800;
var bar_height = 25;

function bar_proportion(number) {
  return (number * bar_width) / 100;
}

$("div#reference").append("<h3>Reference: " + "<strong style='color:" + agreeColor +"'>Agree</strong>, " + "<strong style='color:" + neutralColor +"'>Neutral</strong>, " + "<strong style='color:" + disagreeColor +"'>Disagree</strong>" + "</h3>");

for (element of data) {
  $("div#svg-d3").append("<p class='data-title'>" + element.text + "</p>");

  var svgContainer = d3.select("div#svg-d3").append("svg")
                                            .attr("width", bar_width)
                                            .attr("height", bar_height);

  var agreeRectangle = svgContainer.append("rect")
                                   .attr("x", 0)
                                   .attr("width", bar_proportion(element.agree))
                                   .attr("height", bar_height);
  var agreeRectangleAttributes = agreeRectangle
                                   .style("fill", function(d) { return agreeColor; });

  var neutralRectangle = svgContainer.append("rect")
                                     .attr("x", bar_proportion(element.agree))
                                     .attr("width", bar_proportion(element.neutral))
                                     .attr("height", bar_height);
  var neutralRectangleAttributes = neutralRectangle
                                     .style("fill", function(d) { return neutralColor; });

  var disagreeRectangle = svgContainer.append("rect")
                                      .attr("x", bar_proportion(element.agree + element.neutral))
                                      .attr("width", bar_proportion(element.disagree))
                                      .attr("height", bar_height);
  var disagreeRectangleAttributes = disagreeRectangle
                                      .style("fill", function(d) { return disagreeColor; });
}
