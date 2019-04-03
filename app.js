var express = require('express')
var app = express()

var port = 3000

require('./routes')(app, port)
var functions = require('./functions')

var io = require('socket.io')(4000)

functions.createToken()

app.set('views', path.join(__dirname, 'views'))
app.search('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))


