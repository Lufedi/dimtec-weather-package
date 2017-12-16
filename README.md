# dimtec-weather-package
This module helps you to ask for the weather in some cities using some basic parameters like city name o geographical position.

# Prerequisites
Nodejs development enviroment

# Versions 

1.0.0 first verion of this package

# Installing

You only have to install the package using npm.
```
//Install and save in local project
npm install --save dimtec-weather

//Install in global modules
npm install -g dimtec-weather
```
Or if you prefer, you can download the package from this repository and install it using local configuration


# Using The package

After adding the package to your project, import it (as shown below) in your files and enjoy it!

```
//import weather query package
var weatherQuery = require('weather-query');

//Set your language
weatherQuery.setLanguage('es');

//Set your API KEY
weatherQuery.setApiKey(OPEN_WEATHER_MAP_API_KEY);

//Set your city
weatherQuery.setCityName('miami');

//OR

//Set a geographical location
weatherQuery.setCoordinates({lat: 50.21, lon: -58.21});


//Get a weather object with tons of details
weatherQuery.getWeather(function(weather, error){
    console.log('Weather :' + weather );
});

//Get the temperature number
weatherQuery.getTemperature(function(temperature, error){
    console.log('Temperature ' + temperature);
});

```


# Running the test

You can run the suite of tests built with mocha and chai with this command
```
npm test

```

# Authors

Luis Felipe Díaz Chica - 


The project is  open to contributions

