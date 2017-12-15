

/**
 * Created by USER on 5/12/2017.
 */

(function(){



    var  WeatherService = require('./services/WeatherService');

    /**
     * Configuration parameters for querying for weather
     * @type {{APIKEY: string, format: string, parameters: Object}}
     */
    var configuration = {
        APIKEY: null,
        format: 'json',
        parameters: null
    };

    /**
     * Sets the API key that will be used with open weather api
     * @param APIKEY
     */
    exports.setApiKey = function (APIKEY) {
      configuration.APIKEY = APIKEY;
    };

    /**
     * Get the API KEY
     * @returns {string}
     */
    exports.getApiKey = function () {
        return configuration.APIKEY;
    };

    /**
     * Get the configuration object that will be used for building the weathers' queries
     * @returns {{APIKEY: string, format: string, parameters: Object}}
     */
    exports.getConfiguration = function () {
        return configuration
    };

    /**
     * Sets the cit name in the configuration Object
     * @param cityName
     */
    exports.setCityName = function(cityName){
        configuration.parameters = null;
        configuration.parameters = {city: encodeURIComponent(cityName)};
    };

    /**
     * Sets the coordinates in the configuration Object
     * @param coordinates
     */
    exports.setCoordinates = function (coordinates) {
        configuration.parameters = null;
        configuration.parameters = {coordinates: coordinates};
    };

    /**
     * Queries for the weather of a specific location using the configuration object
     * @param callback
     */
    exports.getWeather = function (callback) {
        WeatherService.getWeather(configuration, callback);
    };

    /**
     * Queries fir the temperature of a specific location using the configuration object
     * @param callback
     */
    exports.getTemperature = function(callback){
        WeatherService.getTemperature(configuration, callback);
    };

    /**
     * Sets the language
     * @param language
     */
    exports.setLanguage = function(language){
        if(WeatherService.setLanguage(language)){
            configuration.language = language;    
        }
    };

    /**
     * Get the language
     * @param language
     * @returns {*}
     */
    exports.getLanguage = function(language){
        return configuration.language;
    };

})();




