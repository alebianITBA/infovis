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

d3.selectAll(".iv-activities")
  .style("fill", activitiesColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#activities-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-activities").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-activities").style("opacity", unFocusedOpacity);
  });

d3.selectAll(".iv-college")
  .style("fill", collegeColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#college-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-college").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-college").style("opacity", unFocusedOpacity);
  });

d3.selectAll(".iv-family")
  .style("fill", familyColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#family-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-family").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-family").style("opacity", unFocusedOpacity);
  });

d3.selectAll(".iv-other")
  .style("fill", otherColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#other-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-other").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-other").style("opacity", unFocusedOpacity);
  });

d3.selectAll(".iv-school")
  .style("fill", schoolColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#school-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-school").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-school").style("opacity", unFocusedOpacity);
  });

d3.selectAll(".iv-sport")
  .style("fill", sportColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#sport-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-sport").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-sport").style("opacity", unFocusedOpacity);
  });

d3.selectAll(".iv-travel")
  .style("fill", travelColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#travel-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-travel").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-travel").style("opacity", unFocusedOpacity);
  });

d3.selectAll(".iv-work")
  .style("fill", workColor)
  .style("opacity", unFocusedOpacity);

d3.selectAll("#work-ellipse")
  .on("mouseover", function(d) {
    d3.selectAll(".iv-work").style("opacity", focusedOpacity);
  })
  .on("mouseout", function(d) {
    d3.selectAll(".iv-work").style("opacity", unFocusedOpacity);
  });