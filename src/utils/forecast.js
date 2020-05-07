const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/ef3a9573c4ebb782fe7a0dba8e320c66/' + latitude + ',' + longitude+'?units=si'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            // callback(undefined, 
            //         body.daily.data[0].summary + ' It is currently ' + body.currently.temperature  
            //         + ' degress out. Today\'s highest temperature is ' + body.daily.data[0].temperatureHigh 
            //         + ' degrees and the Lowest temperature is '+ body.daily.data[0].temperatureLow 
            //         +' degrees. There is a ' + body.currently.precipProbability + '% chance of rain.')
            callback(undefined, {
                summary: body.daily.data[0].summary,
                Temp : ' It is currently ' + body.currently.temperature + ' degress out.',
                HighTemp : 'Today\'s highest temperature is ' + body.daily.data[0].temperatureHigh + ' degrees',
                LowTemp  : 'The Lowest temperature is '+ body.daily.data[0].temperatureLow  + ' degrees',
                RainPossibility : 'There is a ' + body.currently.precipProbability + '% chance of rain.'
            })
        }
    })
}

module.exports = forecast