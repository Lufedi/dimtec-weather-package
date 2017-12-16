

//import weather query package
var weatherQuery = require('dimtec-weather');

//Set you language
weatherQuery.setLanguage('es');

var OPEN_WEATHER_MAP_API_KEY = 'a66a80833494504a31c089ab4c91971e';

//Set you API KEY
weatherQuery.setApiKey(OPEN_WEATHER_MAP_API_KEY);

//Set you city
weatherQuery.setCityName('miami');

//Get a weather object with tons of details
weatherQuery.getWeather(function(data, error){
    console.log(data);
})

//OR

//Set a geographical location
weatherQuery.setCoordinates({lat: 50.21, lon: -58.21});

//Get a weather object with tons of details
weatherQuery.getWeather(function(data, error){
    console.log( data );
});

//Get the temperature number
weatherQuery.getTemperature(function(temperature, error){
    console.log('Temperature ' + temperature);
});
