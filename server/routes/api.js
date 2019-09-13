const express = require('express')
const router = express.Router()
let apik = "b2161eb899566fc2f0ae04e26c218e36"
var moment = require('moment');
let City = require('../model/City')
const request = require('request')
// moment().format();

let ncity
router.get('/city/:cityName', function (req, res) {
    let cityName = req.params.cityName

    request(`http://api.weatherstack.com/current?access_key=${apik}&query=${cityName}`, function (error, res, data) {
        let cit = JSON.parse(data)
        let arrayCit = [cit]
        // let result = processed.results
        ncity = new City({
            name: cit.location.name,  //location.name
            updatedAt: moment().format('YYYY MM DD'),                        // 
            temperature: cit.current.temperature,
            condition: cit.current.weather_descriptions[0],
            conditionPic: cit.current.weather_icons[0]
        })
        // ncity.save()
        //     arrayRecipes.push(food)
        // });
        // console.log(ncity)
    })
    res.send(ncity)
    // res.send(ncity)
})

router.get('/cities', function (req, res) {
    City.find({}, function (err, results) {
        // console.log(results)
        res.send(results)
    })
    // res.send(ncity)
})

router.post('/city', function (req, res) {
    let city = req.body
    let newcity = new City(city)
    newcity.save((err, results) => {
        City.find({}, function (err, response) {
            res.send(response)
        })
    })
}
)

router.delete('/city/:cityName', function (req, res) {
    let cityname = req.params.cityName
    City.findOne({ name: cityname }, function (err, reply) {
        console.log(err)
        reply.remove()
        City.find({}, function (err, response) {
            res.send(response)
        })
    })
})




module.exports = router
