let cities = [];
      // displayMovieInfo function re-renders the HTML to display the appropriate content
function displayCityInfo() {
    let city = $(this).attr("data-name");
    const key = '63183c4ac7d682e53892a0100ab56cb4';
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }`;
        // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            $('.name').html(`<h2>${ response.name }, ${ response.sys.country}</h2>`);
            $('.logo').html(`<img src>${ response.main.icon }</img>`);
            $('.feelsLike').html(`<p>Feels like: ${ ((response.main.feels_like - 273.15) * 1.8 + 32).toFixed(0) }°F</p>`);
            $('.wind').html(`<p>Wind speed: ${ response.wind.speed }MPH</p>`);
            $('.humidity').html(`<p>humidity: ${ response.main.humidity }%</p>`);
            $('.temp').html(`<p>Current temp: ${ ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) }°F</p>`);
        });
    }