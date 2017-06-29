function initWeatherModel(data) {
    weatherModel.weatherTemper = data.results[0].weather_data[0].temperature.substr(-3, 3);
    weatherModel.weatherImg = data.results[0].weather_data[0].dayPictureUrl;
    //cn to english
    if (weatherModel.weatherImg.indexOf('qing') !== -1) {
        weatherModel.weatherDes = 'Sunny';
    }
    if (weatherModel.weatherImg.indexOf('zhenyu') !== -1) {
        weatherModel.weatherDes = 'Showers';
    }
    if (weatherModel.weatherImg.indexOf('leizhenyu') !== -1) {
        weatherModel.weatherDes = 'Rainy';
    }
    if (weatherModel.weatherImg.indexOf('zhongyu') !== -1) {
        weatherModel.weatherDes = 'Rain';
    }
    if (weatherModel.weatherImg.indexOf('yin') !== -1) {
        weatherModel.weatherDes = 'Overcast';
    }
    if (weatherModel.weatherImg.indexOf('duoyun') !== -1) {
        weatherModel.weatherDes = 'Cloudy';
    }
    //set value
    $('.env-weatherleft img').attr("src", weatherModel.weatherImg);
    $('.weatherdata-tem-span').text(weatherModel.weatherTemper);
    $('.env-weathermsg').text(weatherModel.weatherDes);
    // TO DO  PSI  RAIN DENGUE
}
function weatherAjax(locationName) {
    $.ajax({
        type: 'get',
        url: 'http://api.map.baidu.com/telematics/v3/weather?output=json&ak=0A5bc3c4fb543c8f9bc54b77bc155724',
        data: {
            location: locationName
        },
        dataType: 'jsonp',
        success: function (data) {
            //Dynamic rendering related data
            initWeatherModel(data);

        }
    });
}
var timeFormat = 'MM/DD/YYYY HH:mm';
var hourFormat = "HH:mm";
function newDate(days) {
    return moment().add(days, 'd').toDate();
}

function newDateString(days) {
    return moment().add(days, 'd').format(timeFormat);
}

function newTimestamp(days) {
    return moment().add(days, 'd').unix();
}

function newHour(hours) {
    return moment().add(hours, 'h').format(timeFormat);
}