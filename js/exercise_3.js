var quantityPieChart = new d3pie("quantityPieChart", {
  "header": {
		"title": {
			"text": "Quantity",
			"fontSize": 34,
			"font": "verdana"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "courier"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 10
	},
	"footer": {
		"color": "#999999",
		"fontSize": 10,
		"font": "open sans",
		"location": "bottom-left"
	},
	"size": {
		"canvasWidth": 600,
		"pieInnerRadius": "80%",
		"pieOuterRadius": "70%"
	},
	"data": {
		"sortOrder": "label-desc",
		"content": [
			{
				"label": "Men",
				"value": 19523766,
				"color": "#2248bb"
			},
			{
				"label": "Women",
				"value": 20593330,
				"color": "#cf518a"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "label-percentage2",
			"pieDistance": 20
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"font": "verdana",
			"fontSize": 17
		},
		"percentage": {
			"color": "#999999",
			"font": "verdana",
			"fontSize": 14,
			"decimalPlaces": 0
		},
		"value": {
			"color": "#cccc43",
			"font": "verdana",
			"fontSize": 11
		},
		"lines": {
			"enabled": true,
			"color": "#777777"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%",
		"styles": {
			"font": "verdana"
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	},
	"misc": {
		"colors": {
			"segmentStroke": "#000000"
		}
	}
});

var agesPieChart = new d3pie("agesPieChart", {
	"header": {
		"title": {
			"text": "Ages",
			"fontSize": 34,
			"font": "verdana"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 17,
			"font": "verdana"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 12
	},
	"footer": {
		"color": "#999999",
		"fontSize": 11,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 600,
		"pieInnerRadius": "50%",
		"pieOuterRadius": "100%"
	},
	"data": {
		"sortOrder": "value-desc",
		"content": [
			{
				"label": "0 to 5",
				"value": 3337652,
				"color": "#f30000"
			},
			{
				"label": "5 to 10",
				"value": 3381219,
				"color": "#0600f3"
			},
			{
				"label": "10 to 15",
				"value": 3503446,
				"color": "#00b109"
			},
			{
				"label": "15 to 20",
				"value": 3542067,
				"color": "#14e4b4"
			},
			{
				"label": "20 to 25",
				"value": 3300149,
				"color": "#0fe7fb"
			},
			{
				"label": "25 to 30",
				"value": 3130509,
				"color": "#67f200"
			},
			{
				"label": "30 to 35",
				"value": 3098713,
				"color": "#ff7e00"
			},
			{
				"label": "35 to 40",
				"value": 2678435,
				"color": "#8fe4fa"
			},
			{
				"label": "40 to 45",
				"value": 2310775,
				"color": "#ff5300"
			},
			{
				"label": "45 to 50",
				"value": 2196350,
				"color": "#640000"
			},
			{
				"label": "50 to 55",
				"value": 2042993,
				"color": "#3854d1"
			},
			{
				"label": "55 to 60",
				"value": 1868950,
				"color": "#d00ed8"
			},
			{
				"label": "60 to 65",
				"value": 1621190,
				"color": "#7890ff"
			},
			{
				"label": "65 to 70",
				"value": 1293061,
				"color": "#01664d"
			},
			{
				"label": "70 to 75",
				"value": 1015897,
				"color": "#04231b"
			},
			{
				"label": "75 to 80",
				"value": 801660,
				"color": "#e9f117"
			},
			{
				"label": "80 to 85",
				"value": 565917,
				"color": "#f3228e"
			},
			{
				"label": "85 to 90",
				"value": 298337,
				"color": "#7ce8ca"
			},
			{
				"label": "90 to 95",
				"value": 102809,
				"color": "#ff5300"
			},
			{
				"label": "95 to 100",
				"value": 26967,
				"color": "#ff5300"
			}
		]
	},
	"labels": {
		"outer": {
			"pieDistance": 17
		},
		"inner": {
			"format": "none"
		},
		"mainLabel": {
			"font": "verdana"
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 2
		},
		"value": {
			"color": "#e1e1e1",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"style": "straight",
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%",
		"styles": {
			"fadeInSpeed": 801,
			"backgroundOpacity": 0.7,
			"font": "verdana",
			"fontSize": 15
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	}
});

var readPieChart = new d3pie("readPieChart", {
	"header": {
		"title": {
			"text": "Reads and writes",
			"fontSize": 36,
			"font": "verdana"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "verdana"
		},
		"titleSubtitlePadding": 12
	},
	"footer": {
		"color": "#999999",
		"fontSize": 11,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 600,
		"pieOuterRadius": "87%"
	},
	"data": {
		"content": [
			{
				"label": "Yes",
				"value": 35500411,
				"color": "#0066cc"
			},
			{
				"label": "No",
				"value": 2586973,
				"color": "#003366"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 32
		},
		"inner": {
			"format": "label"
		},
		"mainLabel": {
			"color": "#ffffff",
			"font": "verdana",
			"fontSize": 17
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 2
		},
		"value": {
			"color": "#ffffff",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%",
		"styles": {
			"fadeInSpeed": 801,
			"backgroundOpacity": 0.67,
			"color": "#ffffff",
			"fontSize": 17
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	}
});

var universityPieChart = new d3pie("universityPieChart", {
	"header": {
		"title": {
			"text": "University",
			"fontSize": 36,
			"font": "verdana"
		},
		"subtitle": {
			"color": "#999999",
			"fontSize": 10,
			"font": "verdana"
		},
		"location": "pie-center",
		"titleSubtitlePadding": 12
	},
	"footer": {
		"color": "#999999",
		"fontSize": 11,
		"font": "open sans",
		"location": "bottom-center"
	},
	"size": {
		"canvasWidth": 600,
		"pieInnerRadius": "56%",
		"pieOuterRadius": "87%"
	},
	"data": {
		"content": [
			{
				"label": "Finished",
				"value": 1842377,
				"color": "#0066cc"
			},
			{
				"label": "Left",
				"value": 992231,
				"color": "#003366"
			},
			{
				"label": "Asists",
				"value": 1219601,
				"color": "#336600"
			}
		]
	},
	"labels": {
		"outer": {
			"format": "none",
			"pieDistance": 21
		},
		"inner": {
			"format": "label-percentage2"
		},
		"mainLabel": {
			"color": "#ffffff",
			"font": "verdana",
			"fontSize": 16
		},
		"percentage": {
			"color": "#e1e1e1",
			"font": "verdana",
			"decimalPlaces": 2
		},
		"value": {
			"color": "#ffffff",
			"font": "verdana"
		},
		"lines": {
			"enabled": true,
			"color": "#cccccc"
		},
		"truncation": {
			"enabled": true
		}
	},
	"tooltips": {
		"enabled": true,
		"type": "placeholder",
		"string": "{label}: {value}, {percentage}%",
		"styles": {
			"fadeInSpeed": 801,
			"backgroundOpacity": 0.67,
			"color": "#ffffff",
			"fontSize": 17
		}
	},
	"effects": {
		"pullOutSegmentOnClick": {
			"effect": "linear",
			"speed": 400,
			"size": 8
		}
	}
});

var myChart = new JSChart('living-places', 'bar', '');
myChart.setDataArray([['House', 10620866],['Ranch', 226644],['Department', 2615916],['Office', 18369],['Trailer', 4682],['Rented room', 67765],['Family room', 22802],['Homeless', 2346],['Poorhouse', 235081]]);
myChart.colorize(['#FCDD2D','#FCBB04','#F57025','#D42525','#A60505','#3E90C9','#3E90C9','#3E90C9','#3E90C9']);
myChart.setSize(800, 500);
myChart.setIntervalEndY(10700000);
myChart.setTitle('Living places');
myChart.setTitleFontSize(36);
myChart.setGridOpacity(0.8);
myChart.setBarSpacingRatio(55);
myChart.setBarValuesColor('#7B7D77');
myChart.setBarBorderWidth(0);
myChart.setBarOpacity(1);
myChart.setAxisWidth(1);
myChart.draw();
