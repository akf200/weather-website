const request = require('request') 

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYmljYWJvZ2Rhbjg1IiwiYSI6ImNrcTQxNXpkajB5MHcycHBmcGVvenl3ZmsifQ.02VEmp4lkd1gZ9wAqMQqfw&limit=1'
    
    request ({ url, json: true}, (error, { body }) => {

        if(error) {
            callback('Unable to connect to location services!' , undefined)
        } else if (body.features.length === 0) {
            callback('Unable to visit the webpage', undefined)

        }   else {
            callback(undefined, 
            {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],                  
                location: body.features[0].place_name            
            })
        }
    })  
}

module.exports = geocode
