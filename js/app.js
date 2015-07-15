var app = angular.module('MyProfile',["highcharts-ng"]);
//chart one
app.controller('Chart1Ctrl', function($scope){
	$scope.title = "Browser market shares January, 2015 to May, 2015";
	$scope.chartConfig = {
        options: {
            chart: {
            	type: 'pie'
        	} 
        },
        title: {
            text: ''
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    }
                }
            }
        },
        series: [{
            name: "Brands",
            colorByPoint: true,
            data: [{
                name: "IE",
                y: 56.33
            }, {
                name: "Chrome",
                y: 24.03
            }, {
                name: "Firefox",
                y: 10.38
            }, {
                name: "Safari",
                y: 4.77
            }, {
                name: "Opera",
                y: 0.91
            }, {
                name: "others",
                y: 0.2
            }]
        }]
    };
});
//chart 2
app.controller('Chart2Ctrl', function($scope){
	$scope.title = "Monthly Average Rainfall";
	$scope.chartConfig={
		options:{
			chart:{
				type:'column'
			},
			title: {
            	text: ''
        	},
			 xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        	yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        	}
		},
		 plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
		series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

        }, {
            name: 'New York',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'London',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'Berlin',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
	};
});
//chart 3
app.controller('Chart3Ctrl', function($scope){
	$scope.title = "Atmosphere Temperature by Altitude";
	$scope.chartConfig={
		options:{
			chart:{
				type:'spline',
				inverted: true
			},
			title:{
				text: 'e'
			},
			xAxis: {
            	reversed: false,
	            title: {
	                enabled: true,
	                text: 'Altitude'
	            },
	            labels: {
	                formatter: function () {
	                    return this.value + 'km';
	                }
	            },
            	maxPadding: 0.05,
            	showLastLabel: true
        	},
        	yAxis: {
            title: {
                text: 'Temperature'
            },
            labels: {
                formatter: function () {
                    return this.value + '°';
                }
            },
            lineWidth: 2
        },
		},
		plotOptions: {
            spline: {
                marker: {
                    enable: false
                }
            }
        },
        series: [{
            name: 'Temperature',
            data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
                [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
        }]
	};
});
//chart 4
app.controller('Chart4Ctrl', function($scope){
	$scope.title = "Fruits data";
	$scope.chartConfig={
		options:{
			chart:{
				type:'column'
			},
			title:{
				text:""
			},
			xAxis: {
            	categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
        	},
        	yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        	}
		},
		 plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
		series: [{
            name: 'John',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Jane',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Joe',
            data: [3, 4, 4, 2, 5]
        }]
	};
})