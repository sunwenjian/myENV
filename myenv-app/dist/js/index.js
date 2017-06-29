$(function () {
    document.onreadystatechange = function () { 
        document.documentElement.scrollLeft = (document.documentElement.scrollWidth - document.documentElement.offsetWidth) / 2; };
    //current city
    weatherAjax("北京");
    //alert 
    $(".myenv-alerts").click(function () {
        var alerts = $(this).find(".label-warning").val();
        if (alerts == 0) {
            alert("no alert");
        }
        else {
            //to get alerts
        }
    });
    //selectcity
    $('.myenv-selectcitys a').click(function (event) {
        //get weather msg
        weatherAjax($(this).attr("data-name"));
        $('.myenv-locationname-span').text($(this).text());
    });

    // Get context with jQuery - using jQuery's .get() method.
    var areaChartCanvas = $("#areaChart").get(0).getContext("2d");
    // This will get the first returned node in the jQuery collection.
    var areaChartData = {
        labels: ["6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am", "12:00 am", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm"],
        datasets: [

            {
                type: "line",
                // label: "Sunrise&Sunset",
                labels: [
                    newHour(1),
                    newHour(3),
                    newHour(5),
                    newHour(7),
                    newHour(9),
                    newHour(11),
                    newHour(12)
                ],
                borderColor: "#fca23c",
                fill: false,
                pointRadius: 0,
                // data: [0, 10, 20, 30, 40, 50, 60, 50, 40, 29, 20, 15, 0]
                data: [{
                    x: newHour(1),
                    y: 0
                }, {
                    x: newHour(3),
                    y: 1
                }, {
                    x: newHour(5),
                    y: 2
                }, {
                    x: newHour(7),
                    y: 2.9
                }, {
                    x: newHour(9),
                    y: 2.8
                }, {
                    x: newHour(11),
                    y: 2
                }
                    , {
                    x: newHour(12),
                    y: 1.5
                }
                    //, {
                    //     x: newDate(1.5),
                    //     y: 0
                    // },
                    // {
                    //     x: newDate(2),
                    //     y: 31
                    // }, {
                    //     x: newDate(2.5),
                    //     y: 0
                    // }, {
                    //     x: newDate(3),
                    //     y: 0
                    // }, {
                    //     x: newDate(3.5),
                    //     y: 33
                    // }, {
                    //     x: newDate(3.5),
                    //     y: 0
                    //}
                ],
            },
            {

                label: "Tide",
                // data: [38, 65, 86, 66, 48, 57, 59, 66, 38, 65, 86, 66, 67],
                data: [{
                    x: newDateString(0),
                    y: 1.6
                }, {
                    x: newHour(2),
                    y: 1.9
                }, {
                    x: newHour(4),
                    y: 2.4
                }, {
                    x: newHour(6),
                    y: 2.2
                }, {
                    x: newHour(8),
                    y: 1.2
                }
                    , {
                    x: newHour(10),
                    y: 0.9
                }
                    , {
                    x: newHour(12),
                    y: 0.7
                }
                    //, {
                    //     x: newDate(1.5),
                    //     y: 0
                    // },
                    // {
                    //     x: newDate(2),
                    //     y: 21
                    // }, {
                    //     x: newDate(2.5),
                    //     y: 0
                    // }, {
                    //     x: newDate(3),
                    //     y: 0
                    // }, {
                    //     x: newDate(3.5),
                    //     y: 23
                    // }, {
                    //     x: newDate(3.5),
                    //     y: 0
                    // }
                ],
                fill: true,
                type: "line",
                pointRadius: 0,
                backgroundColor: "#aae0f5",
                borderColor: "#91d7f3"
            }
        ]
    };
    var areaChartOptions = {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes: [{
                display: true,
                type: "time",
                time: {
                    format: timeFormat,
                    round: 'm'
                    // tooltipFormat: 'll HH:mm'
                },
                scaleLabel: {
                    display: true,
                    labelString: newDateString(0)
                }
            },],
            yAxes: [{
                display: false,
                scaleLabel: {
                    display: false,
                    labelString: 'value'
                }
            }]
        }
    };
    //Create the line chart
    var chartConfig = { type: "line", data: areaChartData, options: areaChartOptions };
    var areaChart = new Chart(areaChartCanvas, chartConfig);

});