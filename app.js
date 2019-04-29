// Genereal setup
var express = require('express')
var app = express()
var port = 3000

// Dependencies
var path = require('path')
var io = require('socket.io')(4000)
var mysql = require('mysql')
var sqlstring = require("sqlstring")
var md5 = require('md5')
var colors = require('colors')

// Module with helper functions.
var functions = require('./functions.js')
var secrets = require('./secrets.js')

// Setup PUG
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, 'public')))

// Setup db
var connection = mysql.createConnection(secrets.dbcredentials)

// Connect to db
connection.connect((err)=> {
  if (err) /*throw err*/ console.log('[STATUS]'.black.bgWhite + ': ' + 'Database connect failed.'.red)
  console.log('[STATUS]'.black.bgWhite + ': ' + 'Database connected.'.green)
})

require('./routes')(app, port, connection)

// Socket.io
io.on('connection', socket => {
  console.log('[USER ACTIVITY]'.black.bgWhite + ': ' + 'Unknown user connected.')

  socket.on('disconnect', ()=> {
    
  })

  // Recive and process new user data
  socket.on('newUser', newUser => {
    // Inserts user data into db.
    functions.dbEmptyQuery(connection, sqlstring.format("INSERT INTO users(username, password) VALUES(?,?)", [newUser.username,md5(newUser.password)]))
  })

  // Login
  socket.on('login', credentials => {
    token = functions.createToken(credentials.username, credentials.password)

    functions.checkToken(connection, token, success => {
      if (success) {
        socket.emit('redirect', "/home")
        console.log('[USER ACTIVITY]'.black.bgWhite + ': ' + credentials.username + " logged in.")
      } else {
        socket.emit('err', "Felaktigt lösenord eller användarnamn.")
        console.log('[USER ACTIVITY]'.black.bgWhite + ": " + "User attempted login.")
      } 
    })
  })

  // Create token. Currently only used on signup and login.
  socket.on('token', credentials => {
    token = functions.createToken(credentials.username, credentials.password)
    socket.emit('token', token)
  })
})

//connection.end()

