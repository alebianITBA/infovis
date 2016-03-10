var data = [{"text": "I felt creative", "agree": 88, "neutral": 8, "disagree": 4}, {"text":"I felt an emotional reaction", "agree":66, "neutral": 22, "disagree": 12}, {"text":"I learned something new about the text", "agree":63, "neutral": 24, "disagree": 13}, {"text":"It confirmed my understanding of the text", "agree":57, "neutral": 33, "disagree": 10}, {"text":"It jogged my memory", "agree":50, "neutral": 35, "disagree": 15}, {"text":"The Wordle confused me", "agree":5, "neutral": 9, "disagree": 86}];

var agreeColor = "#8cdf59";
var neutralColor = "#7697b0";
var disagreeColor = "#db4437";

for (element of data) {

  var svgContainer = d3.select("div#svg-d3").append("svg")
                                            .attr("width", 100)
                                            .attr("height", 50);

  var agreeRectangle = svgContainer.append("rect")
                                   .attr("x", 0)
                                   .attr("width", element.agree)
                                   .attr("height", 50);
  var agreeRectangleAttributes = agreeRectangle
                                   .style("fill", function(d) { return agreeColor; });

  var neutralRectangle = svgContainer.append("rect")
                                     .attr("x", element.agree)
                                     .attr("width", element.neutral)
                                     .attr("height", 50);
  var neutralRectangleAttributes = neutralRectangle
                                     .style("fill", function(d) { return neutralColor; });

  var disagreeRectangle = svgContainer.append("rect")
                                      .attr("x", element.agree + element.neutral)
                                      .attr("width", element.disagree)
                                      .attr("height", 50);
  var disagreeRectangleAttributes = disagreeRectangle
                                      .style("fill", function(d) { return disagreeColor; });

  d3.select("div#svg-d3").append("br")
}
