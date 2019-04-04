// Dependencies + setup variables
var express = require('express')
var app = express()
var port = 3000

var path = require('path')
var io = require('socket.io')(4000)
var mysql = require('mysql')

require('./routes')(app, port)
var functions = require('./functions.js')

// Setup PUG
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

// Setup db
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'christoffer',
  password : 'sten1234',
  database : 'chattapp'
})

// Connect to db
connection.connect(function(err) {
    if (err) throw err
    console.log('Database connected.')
})

connection.end()

functions.createToken()
var u1 = new functions.User

