const request = require('request')
const lang = 'en'
const darkSkyUrl = 'https://api.darksky.net/forecast/dbd7aff54b57b428ea6a0e604a51ca11/'
const darkSkyUrlWithGeocoding = darkSkyUrl + '#COORDINATES#?units=si&lang=' + lang

const Address = 'Tel%20Aviv'
const Coordinates = "37.8267,-122.4233"

const mapBoxAccessKey = 'access_token=pk.eyJ1IjoiZHVkdWIxMjMiLCJhIjoiY2p0aDRycTM3MHIxdTQ1bGhpYnpscGY0aCJ9.z1c2YLu024LrXts1l1pfuA'
const mapBoxBaseUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/#ADDRESS#.json?' + mapBoxAccessKey + '&limit=1'

// Geocoding
const GetCordinates = (address, callback) => {
    const url = mapBoxBaseUrl.replace('#ADDRESS#', address);
    request({ url, json: true}, (error, response) => {
        callback({
            place_name: response.body.features[0].place_name,
            coordinates: `${response.body.features[0].center[1]},${response.body.features[0].center[0]}`
        })
    })
}

const GetWeather = (coordinates, callback) => {
    const url = darkSkyUrlWithGeocoding.replace('#COORDINATES#', coordinates);
    request({ url, json: true}, (error, response) => {
        callback({
            summary: response.body.daily.data[0].summary,
            forcast: `It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain.` 
        })
    })    
}

const address = process.argv[2]
GetCordinates(address, function({ coordinates, place_name }) {
    GetWeather(coordinates, function({ summary, forcast }) {
        console.log(`${place_name}: ${forcast}`)
    })
})
