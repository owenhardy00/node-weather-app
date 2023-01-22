const request = require('request')

const forecast = (lat, long, callback) => {
    const url = ('http://api.weatherstack.com/current?access_key=914d23d1a12094281371dce7e606ca87&query=' + lat + ',' + long + '&units=f')

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('unable to connect to weather API', undefined)
        } else if(body.error) {
            callback('no location found!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' and currently ' + body.current.temperature + 'º out.  It feels like ' + body.current.feelslike + 'º.')
        }
    })
}

module.exports = forecast