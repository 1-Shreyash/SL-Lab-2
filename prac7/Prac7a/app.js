var xValues1 = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues1 = [55, 49, 44, 24, 15];
var barColors1 = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues1,
    datasets: [{
      backgroundColor: barColors1,
      data: yValues1
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});


//point chart
const xyValues2 = [
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("myChart2", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgba(0,0,255,1)",
        data: xyValues2
      }]
    },
    options:{
        legend: {display: false},
    scales: {
      xAxes: [{ticks: {min: 40, max:160}}],
      yAxes: [{ticks: {min: 6, max:16}}],
    }
    }
  });


  //line chart
  const xValues3 = [50,60,70,80,90,100,110,120,130,140,150];
const yValues3 = [7,8,8,9,9,9,10,11,14,14,15];

  new Chart("myChart3", {
    type: "line",
    data: {
      labels: xValues3,
      datasets: [{
        fill: false,
        lineTension: 0,
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: yValues3
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });


  //Multiple charts
  const xValues4 = [100,200,300,400,500,600,700,800,900,1000];

new Chart("myChart4", {
  type: "line",
  data: {
    labels: xValues4,
    datasets: [{
      data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
      borderColor: "red",
      fill: false
    },{
      data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
      borderColor: "green",
      fill: false
    },{
      data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
      borderColor: "blue",
      fill: false
    }]
  },
  options: {
    legend: {display: false}
  }
});


//Linear Graphs
const xValues5 = [];
const yValues5 = [];
generateData("x * 2 + 7", 0, 10, 0.5);

new Chart("myChart5", {
  type: "line",
  data: {
    labels: xValues5,
    datasets: [{
      fill: false,
      pointRadius: 1,
      borderColor: "rgba(255,0,0,0.5)",
      data: yValues5
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "y = x * 2 + 7",
      fontSize: 16
    }
  }
});

function generateData(value, i1, i2, step = 1) {
  for (let x = i1; x <= i2; x += step) {
    yValues5.push(eval(value));
    xValues5.push(x);
  }
}



//bar graphs
var xValues6 = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues6 = [55, 49, 44, 24, 15];
var barColors6 = ["red", "green","blue","orange","brown"];

new Chart("myChart6", {
  type: "bar",
  data: {
    labels: xValues6,
    datasets: [{
      backgroundColor: barColors6,
      data: yValues6
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});


//3d Pie
Highcharts.chart('container', {
    chart: {
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45,
            beta: 0
        }
    },
    title: {
        text: 'Global smartphone shipments market share, Q1 2022',
        align: 'left'
    },
    subtitle: {
        text: 'Source: ' +
            '<a href="https://www.counterpointresearch.com/global-smartphone-share/"' +
            'target="_blank">Counterpoint Research</a>',
        align: 'left'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            depth: 35,
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }
    },
    series: [{
        type: 'pie',
        name: 'Share',
        data: [
            ['Samsung', 23],
            ['Apple', 18],
            {
                name: 'Xiaomi',
                y: 12,
                sliced: true,
                selected: true
            },
            ['Oppo*', 9],
            ['Vivo', 8],
            ['Others', 30]
        ]
    }]
});
