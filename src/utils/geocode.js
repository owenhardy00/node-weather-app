const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.geoapify.com/v1/geocode/search?text=' + encodeURIComponent(address) + '&apiKey=7b88e6def8684da2b50a9759f59ba8e1'

    request({url, json: true}, (error, { body }) => {
        if(error) {
            callback('invalid location!', undefined)
        } else if(body.features.length === 0) {
            callback('invalid location!', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].properties.lat,
                long: body.features[0].properties.lon,
                loc: body.features[0].properties.formatted
            })
        }
    })
}

module.exports = geocode