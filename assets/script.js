const key = '63183c4ac7d682e53892a0100ab56cb4';
let cities = [];
let uvNum;
let timezone;

function displaycityInfo(city) {

    let initialCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;

    $.ajax({
        url: initialCall,
        method: "GET"
    }).then(function (response) {

        let latitude = response.coord.lat;
        let longitude = response.coord.lon;
        timezone = $('<h2>').text(` ${response.name}, ${response.sys.country} `);
        console.log(response);

            let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&%20exclude=minutelyhourly&appid=" + key;

            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                $('#cities-view').empty();
                $('#timezone').empty();
                $('#day1').empty();
                $('#day2').empty();
                $('#day3').empty();
                $('#day4').empty();
                $('#day5').empty();
                let cityContainer = $('<div class="city">');
                let dayOne = $('<div class="city">');
                let dayTwo = $('<div class="city">');
                let dayThree = $('<div class="city">');
                let dayFour = $('<div class="city">');
                let dayFive = $('<div class="city">');
                let date = $('<h5>').text(`${response.current.dt}`);
                let logo = $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + response.current.weather[0].icon + '@2x.png');
                let feelsLike = $('<h4>').text(`Feels like: ${response.current.feels_like}°F`);
                let currentTemp = $('<h5>').text(` Current temperature: ${response.current.temp}°F`);
                let humidity = $('<h5>').text(`Humidity: ${response.current.humidity}%`);
                let wind = $('<h5>').text(`Wind speed: ${response.current.wind_speed} MPH`);
                uvNum = parseInt(response.current.uvi);
                let UV = $('<h5>').text(`UV index: ${response.current.uvi}`);
                let uvText = $('<p> class=".colorBox"');
                let dayOneLogo = $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + response.daily[0].weather[0].icon + '@2x.png');
                let dayTwoLogo = $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + response.daily[1].weather[0].icon + '@2x.png');
                let dayThreeLogo = $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + response.daily[2].weather[0].icon + '@2x.png');
                let dayFourLogo = $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + response.daily[3].weather[0].icon + '@2x.png');
                let dayFiveLogo = $('<img>').attr('src', 'http://openweathermap.org/img/wn/' + response.daily[4].weather[0].icon + '@2x.png');
                let dayOneDescription = $('<h4>').text(` ${response.daily[0].weather[0].description} `);
                let dayTwoDescription = $('<h4>').text(` ${response.daily[1].weather[0].description} `);
                let dayThreeDescription = $('<h4>').text(` ${response.daily[2].weather[0].description} `);
                let dayFourDescription = $('<h4>').text(` ${response.daily[3].weather[0].description} `);
                let dayFiveDescription = $('<h4>').text(` ${response.daily[4].weather[0].description} `);
                let dayOneHumidity = $('<h5>').text(`Humidity: ${response.daily[0].humidity}%`);
                let dayTwoHumidity = $('<h5>').text(`Humidity: ${response.daily[1].humidity}%`);
                let dayThreeHumidity = $('<h5>').text(`Humidity: ${response.daily[2].humidity}%`);
                let dayFourHumidity = $('<h5>').text(`Humidity: ${response.daily[3].humidity}%`);
                let dayFiveHumidity = $('<h5>').text(`Humidity: ${response.daily[4].humidity}%`);
                let dayOneTempMax = $('<h5>').text(`High: ${response.daily[0].temp.max}°F`);
                let dayTwoTempMax = $('<h5>').text(`High: ${response.daily[1].temp.max}°F`);
                let dayThreeTempMax = $('<h5>').text(`High: ${response.daily[2].temp.max}°F`);
                let dayFourTempMax = $('<h5>').text(`High: ${response.daily[3].temp.max}°F`);
                let dayFiveTempMax = $('<h5>').text(`High: ${response.daily[4].temp.max}°F`);
                let dayOneTempMin = $('<h5>').text(`Low: ${response.daily[0].temp.min}°F`);
                let dayTwoTempMin = $('<h5>').text(`Low: ${response.daily[1].temp.min}°F`);
                let dayThreeTempMin = $('<h5>').text(`Low: ${response.daily[2].temp.min}°F`);
                let dayFourTempMin = $('<h5>').text(`Low: ${response.daily[3].temp.min}°F`);
                let dayFiveTempMin = $('<h5>').text(`Low: ${response.daily[4].temp.min}°F`);
                cityContainer.append(date);
                cityContainer.append(logo);
                cityContainer.append(feelsLike);
                cityContainer.append(currentTemp);
                cityContainer.append(humidity);
                cityContainer.append(wind);
                cityContainer.append(UV);
                cityContainer.append(uvText);
                dayOne.append(dayOneLogo);
                dayTwo.append(dayTwoLogo);
                dayThree.append(dayThreeLogo);
                dayFour.append(dayFourLogo);
                dayFive.append(dayFiveLogo);
                dayOne.append(dayOneDescription);
                dayTwo.append(dayTwoDescription);
                dayThree.append(dayThreeDescription);
                dayFour.append(dayFourDescription);
                dayFive.append(dayFiveDescription);
                dayOne.append(dayOneHumidity);
                dayTwo.append(dayTwoHumidity);
                dayThree.append(dayThreeHumidity);
                dayFour.append(dayFourHumidity);
                dayFive.append(dayFiveHumidity);
                dayOne.append(dayOneTempMax);
                dayTwo.append(dayTwoTempMax);
                dayThree.append(dayThreeTempMax);
                dayFour.append(dayFourTempMax);
                dayFive.append(dayFiveTempMax);
                dayOne.append(dayOneTempMin);
                dayTwo.append(dayTwoTempMin);
                dayThree.append(dayThreeTempMin);
                dayFour.append(dayFourTempMin);
                dayFive.append(dayFiveTempMin);
                $('#cities-view').prepend(cityContainer);
                $('#day1').prepend(dayOne);
                $('#day2').prepend(dayTwo);
                $('#day3').prepend(dayThree);
                $('#day4').prepend(dayFour);
                $('#day5').prepend(dayFive);
                $('#timezone').prepend(timezone);
                console.log(uvNum);
                //let index = parseInt(uvNum);
                function uvDisplay() {
                    if (uvNum <= 2) {
                        $(UV).toggleClass('green'); 
                    } 
                    if (uvNum > 2 && uvNum < 6) {
                        $(UV).toggleClass('yellow'); 
                    }
                    if (uvNum >= 6 && uvNum < 11) {
                        $(UV).toggleClass('orange');
                    }
                    if (uvNum >= 11) {
                        $(UV).toggleClass('red');    
                    }
                }
                uvDisplay();    
            });
    });    
}

function renderButtons() {
    $("#buttons-view").empty();
    for (let i = 0; i < cities.length; i++) {
        let a = $("<button>");
        a.addClass("city");
        a.attr("data-name", cities[i]);
        a.text(cities[i]);
        $("#buttons-view").append(a);
    }
}
$("#add-city").on("click", function (event) {
    event.preventDefault();
    let city = $("#city-input").val().trim();
    cities.push(city);
    renderButtons();
    displaycityInfo(city);
});

$(document).on("click", ".city", function (event) {
    event.preventDefault();
    $('#five-day').toggleClass('hide');
    let city = $(this).attr("data-name");
    console.log(city);
    displaycityInfo(city);

});

document.getElementById('add-city').addEventListener('click', function() {
    document.querySelector('#five-day').style.display='flex';
});

renderButtons();

