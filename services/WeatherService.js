/**
 * Created by USER on 5/12/2017.
 */



const axios = require("axios");
var URL_PATH  = 'http://api.openweathermap.org/data/2.5/weather?';
var settings = require("../config/settings").settings;

/**
 * Builds a URL query using the configurations parameters
 * @param  {Object} configuration
 * @returns {string}
 */
function buildQuery(configuration){
    try{
        var query = URL_PATH;
        var parameters = configuration.parameters;
        if(parameters.city){
            query+= 'q='+ parameters.city;
        }else if(parameters.coordinates){
            query+= 'lat=' + parameters.coordinates.lat + '&lon=' + parameters.coordinates.lon;
        }

        if(configuration.language){
            query+= '&lang=' + configuration.language;
        }
        query+= '&appid=' + configuration.APIKEY;
        
        return  query;
    }catch(e){
        console.error(e);
    }
}


/**
 * This callback handles the response getWeather
 * @callback callback
 * @param {number} weather
 * @param {Error} error
 */

/**
 * Retreive the weather of a  location using configuration parameters
 * @param {Object} configuration
 * @param callback - cd The callback that handles the response
 */
exports.getWeather = function (configuration, callback) {
    var query = buildQuery(configuration);

    axios
        .get(query)
        .then(function (response) {
            return callback(response.data, null);
        })
        .catch(function (error) {
            return callback(null, error);
        });
};


/**
 * This callback handles the getTemperature value
 * @callback callback
 * @param {number} temperature value
 * @param {Error} error
 */


/**
 *  Get the temperature of a location using configuration parameters
 * @param  {Object} configuration
 * @param callback
 */
exports.getTemperature = function (configuration, callback) {
    var query = buildQuery(configuration);
    axios
        .get(query)
        .then( function (response) {
            return callback(response.data.main.temp, null);
        })
        .catch(function (error) {
            return callback(null, error);
        });
};

/**
 *  Validates if the language is available in the language settings
 * @param language
 * @returns {boolean} if the language is allowed or not
 */
exports.setLanguage = function(language){
    return settings.languages.indexOf(language) > -1;
};