# WeatherApp

Using Open Weather's API, this application offers a simple & clean way to view current and upcoming(5 day forecast) weather conditons based on a users searched city.

link: http://hawenger.github.io/WeatherApp

image: https://user-images.githubusercontent.com/63066634/89839256-32732780-db22-11ea-953f-d091cdeaca10.png

A user can type a city into an input box on the application's main page.  Once the request is submitted (via enter button), a call is maded to an Open Weather API to grab the coordinates (latitude and longitude) of searched city.  The application then makes a second call to an Open Weather API with more information using the latitude and logitude to grab the actual display information such as temperatures, conditions, uv index and other pertinent data.

Buttons are generated on the page for each city searched.  User can use generated buttons to navigate through past searches.

All date information is called using the Date.UTC() call.
The displayed UV index font changes colors based on the UV number grabbed through the Open Weather API.

Mobile first design.

Improvements :

- Save searched cities into Local Storage and generate nagivation through list instead of buttons
- Condensed javascript using loops for better code
- Actions for incorrect searches
- Clear search box
- Zipcode feature as well as way to specify state during search
- Design
- Initial Page Layout
- Swipe through Days of week forecast on mobile with scrolling option for larger displays
