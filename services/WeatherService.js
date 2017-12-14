/**
 * Created by USER on 5/12/2017.
 */



const axios = require("axios");
var URL_PATH  = 'http://api.openweathermap.org/data/2.5/weather?';
var settings = require("../config/settings").settings;

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




exports.getWeather = function (configuration, callback) {

    var query = buildQuery(configuration);

    axios
        .get(query)
        .then(function (response) {
            return callback(response, null);
        })
        .catch(function (error) {
            return callback(null, error);
        });
};

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

exports.setLanguage = function(language){
    return settings.languages.indexOf(language) > -1;
};