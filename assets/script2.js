    const key = '63183c4ac7d682e53892a0100ab56cb4';
    const city = prompt('What city?');
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ key }`;
    $.ajax({
      url: url,
      method: 'GET'
    }).then(function(response) {
      console.log(url);
      console.log(response);
      $('.city').html(`<h2>${ response.name }, ${ response.sys.country}</h2>`);
      $('.feelsLike').html(`<p>Feels like: ${ ((response.main.feels_like - 273.15) * 1.8 + 32).toFixed(0) }°F</p>`);
      $('.wind').html(`<p>Wind speed: ${ response.wind.speed }MPH</p>`);
      $('.humidity').html(`<p>humidity: ${ response.main.humidity }%</p>`);
      $('.temp').html(`<p>Current temp: ${ ((response.main.temp - 273.15) * 1.8 + 32).toFixed(0) }°F</p>`);
    });
    // Get an API Key from OpenWeatherMap API
    // Create an AJAX call to retrieve data Log the data in console
    // Log the data in HTMLlondon