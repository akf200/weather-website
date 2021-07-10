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
                    body.current.weather_descriptions[0] + '. The temperature is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees'
                    // weather: body.current.weather_descriptions[0]
                     
            )
        }
    })
}

module.exports = forecast
