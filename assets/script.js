const key = '63183c4ac7d682e53892a0100ab56cb4';
let cities = [];

// displaycityInfo function re-renders the HTML to display the appropriate content
function displaycityInfo() {

    let city = $(this).attr("data-name");
    let initialCall = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + key;

    $.ajax({
        url: initialCall,
        method: "GET"
    }).then(function(response) {
        
        let latitude = response.coord.lat;
        let longitude = response.coord.lon;

        
    let queryURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + latitude + "&lon=" + longitude + "&units=imperial&%20exclude=minutelyhourly&appid=" + key;
        // Creates AJAX call for the specific city button being clicked
        
        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            let cityContainer = $('<div class="city">');
            let logo = $('<img>').attr(href='http://openweathermap.org/img/wn/10d@2x.png', response.current.weather.icon);
            let description = $('<img>').text(`${response.current.weather.description}`);
            let feelsLike = $('<h3>').text(`Feels like: ${response.current.feels_like}°F`);
            let currentTemp = $('<h3>').text(` Current temperature: ${response.current.temp}°F`);
            let humidity = $('<h3>').text(`Humidity: ${response.current.humidity}%`);
            let wind = $('<h3>').text(`Wind speed: ${response.current.wind_speed} MPH`);
            let UV = $('<h3>').text(`UV index: ${response.current.uvi}`);
            cityContainer.append(logo);
            cityContainer.append(description);
            cityContainer.append(feelsLike);
            cityContainer.append(currentTemp);
            cityContainer.append(humidity);
            cityContainer.append(wind);
            cityContainer.append(UV);
            $('#cities-view').prepend(cityContainer);
            });
        });
}
 // Function for displaying city data
function renderButtons() {
// Deletes the cities prior to adding new cities
// (this is necessary otherwise you will have repeat buttons)
$("#buttons-view").empty();
// Loops through the array of cities
for (let i = 0; i < cities.length; i++) {
// Then dynamicaly generates buttons for each city in the array
// This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
let a = $("<button>");
// Adds a class of city to our button
a.addClass("city");
// Added a data-attribute
a.attr("data-name", cities[i]);
// Provided the initial button text
a.text(cities[i]);
// Added the button to the buttons-view div
$("#buttons-view").append(a);
}
}
// This function handles events where the add city button is clicked
$("#add-city").on("click", function(event) {
event.preventDefault();
// This line of code will grab the input from the textbox
let city = $("#city-input").val().trim();
// The city from the textbox is then added to our array
cities.push(city);
// Calling renderButtons which handles the processing of our city array
renderButtons();
});
// Adding click event listeners to all elements with a class of "city"
$(document).on("click", ".city", displaycityInfo);
// Calling the renderButtons function to display the initial buttons
renderButtons();