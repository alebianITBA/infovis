function resize(number) {
  return number * 2.5;
}

$('svg > circle').each(function(d) {
  $(this).attr("r", resize($(this).attr("r")));
});

var unFocusedOpacity = 0.5;
var focusedOpacity = 1;

var activitiesColor = "#bf6969";
var collegeColor = "#bfa969";
var familyColor = "#94bf6";
var otherColor = "#69bf7e";
var schoolColor = "#69bfbf";
var sportColor = "#697ebf";
var travelColor = "#9469bf";
var workColor = "#bf69a9";
var animationDuration = 500;

d3.selectAll(".iv-activities")
  .style("fill", activitiesColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#activities-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-activities").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("Activities");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-activities").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });

d3.selectAll(".iv-college")
  .style("fill", collegeColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#college-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-college").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("College");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-college").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });

d3.selectAll(".iv-family")
  .style("fill", familyColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#family-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-family").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("Family");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-family").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });

d3.selectAll(".iv-other")
  .style("fill", otherColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#other-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-other").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("Other");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-other").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });

d3.selectAll(".iv-school")
  .style("fill", schoolColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#school-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-school").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("School");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-school").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });

d3.selectAll(".iv-sport")
  .style("fill", sportColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#sport-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-sport").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("Sport");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-sport").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });

d3.selectAll(".iv-travel")
  .style("fill", travelColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#travel-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-travel").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("Travel");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-travel").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });

d3.selectAll(".iv-work")
  .style("fill", workColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#work-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-work").transition().duration(animationDuration).style("opacity", focusedOpacity);
    var xPosition = parseFloat(d3.select(this).attr("x"));
    var yPosition = parseFloat(d3.select(this).attr("y"));
    d3.select("#tooltip").style("left", xPosition + "px").style("top", yPosition + "px").select("#label").text("Work");
    d3.select("#tooltip").classed("hidden", false);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-work").transition().duration(animationDuration).style("opacity", unFocusedOpacity);
    d3.select("#tooltip").classed("hidden", true);
  });
