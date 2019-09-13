// Node Modules imports
var express = require('express')
var mongoose = require('mongoose')
let path = require('path')
var bodyParser = require('body-parser')

// Internal imports
let api = require('./server/routes/api')
var request = require('request')
// var Book = require("./models/BookModel")

// Connecting to DB 
mongoose.connect("mongodb://localhost/weather-fullstack", {useNewUrlParser: true})

// Serving client and files
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.use('/', api)

// running it
let port = 3000
app.listen(port, function () { console.log('Running on '+port)})
