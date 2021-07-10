const request = require('request')
const geocode = require('./geocode.js')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=1788a4fbafdc8191c0cd12175b85355b&query='+ encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '&units=f'

    request({url, json: true}, (error, { body }) => {

        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if(body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined,               
                    'The speed of the wind is now: ' + body.current.wind_speed + ' On the  ' + body.current.wind_dir + " direction"
                    // weather: body.current.weather_descriptions[0]
                
            )
        }
    })
}

module.exports = forecast
