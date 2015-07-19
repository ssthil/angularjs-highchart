var app = angular.module('MyProfile',["highcharts-ng"]);
//chart one
app.controller('Chart1Ctrl', function($scope){
	$scope.title = "My Daily Activities";
	$scope.chartConfig = {
        options: {
            chart: {
            	type: 'pie'
        	},
            colors:['#D90B83','#365096','#6F9451','#E8901C','#2CD1D1']
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
            colorByPoint: true,
            data: [{
                name: "Work",
                y: 11
            }, {
                name: "Eat",
                y: 2
            }, {
                name: "Commute",
                y: 2
            }, {
                name: "Watch TV",
                y: 2
            }, {
                name: "Sleep",
                y: 7
            }]
        }]
    };
});
//chart 2
app.controller('Chart2Ctrl', function($scope){
	$scope.title = "Population of Largest U.S. Cities";
	$scope.chartConfig={
		options:{
			chart:{
				type:'bar'
			},
            colors:['#04B2C9','#E33805','#FCD217','#7437A6','#2CD1D1'],
			title: {
            	text: ''
        	},
			 xAxis: {
            categories: [
                'Jan 2010',
                'Jan 2011',
                'Jan 2012',
                'Jan 2013',
                'Jan 2014'
                
            ],
            crosshair: true
        },
        	yAxis: {
            min: 0,
            title: {
                text: ''
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
            name: 'New York City, NY',
            data: [1499, 1715, 1064, 1292]

        }, {
            name: 'Los Angeles, CA',
            data: [1836, 1788, 1985, 1934]

        }, {
            name: 'Chicago, IL',
            data: [1489, 1388, 3193, 4114]

        }, {
            name: 'Houston, TX',
            data: [4224, 3232, 3415, 3197]

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
            colors:['#09BD60'],
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
	$scope.title = "Fruits Consumption";
	$scope.chartConfig={
		options:{
			chart:{
				type:'column'
			},
            colors:['#04B2C9','#F78A74','#D9E84F'],
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
            name: 'Senthil',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'Surya',
            data: [2, 2, 3, 2, 1]
        }, {
            name: 'Swasthika',
            data: [3, 4, 4, 2, 5]
        }]
	};
})
//Analyse
app.controller('AnalyseCtrl', ['$scope', function($scope) {
  $scope.analysis = [{
    title: "Profit Chart",
    name:"01"
  }, {
    title: "Sales Chart",
    name:"02"
  }, {
    title: "Expense Chart",
    name:"03"
  }, {
    title: "Chris",
    name:"04"
  }]
}]);