

/**
 * Created by USER on 5/12/2017.
 */

(function(){




    var  WeatherService = require('./services/WeatherService');

    var configuration = {
        city: 'Miami',
        APIKEY: null,
        format: 'json',
        parameters: null
    };


    exports.setApiKey = function (APIKEY) {
      configuration.APIKEY = APIKEY;
    };
    exports.getApiKey = function () {
        return configuration.APIKEY;
    };

    exports.getConfiguration = function () {
        return configuration
    };

    exports.setCityName = function(cityName){
        configuration.parameters = null;
        configuration.parameters = {city: cityName};
    };

    exports.setCoordinates = function (coordinates) {
        configuration.parameters = null;
        configuration.parameters = {coordinates: coordinates};
    };


    exports.getWeather = function (callback) {
        WeatherService.getWeather(configuration, callback);
    };

    exports.getTemperature = function(callback){
        WeatherService.getTemperature(configuration, callback);
    }



})();




