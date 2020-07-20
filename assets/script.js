$('#select-city').on('click', function(event) {
    event.preventDefault();
    let city = $('city-input').val();
    let queryURL = "https://api.openweathermap.org/data/2.5/onecall/timemachine?lat={60.99}&lon={30}&dt={1586468027}&appid={19bb59ca9e9c53523fec04a6898c8443}";

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        $('#weather-div').text(JSON.stringify(response));
    });
})