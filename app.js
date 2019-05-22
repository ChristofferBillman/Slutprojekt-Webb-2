// Genereal setup
var express = require('express')
var app = express()

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

require('./routes')(app, connection)

// TODO: Göra om socket.io-saker till req och res.
// Socket.io

online = []

io.on('connection', socket => {
  console.log('[USER ACTIVITY]' + ': ' + 'user connected.')

  socket.on('disconnect', ()=> {
    
  })

  // Recive and process new user data
  socket.on('newUser', newUser => {
    // Inserts user data into db.
    functions.dbQuery(sqlstring.format("INSERT INTO users(username, password, displayname) VALUES(?,?,?)", [newUser.username,md5(newUser.password), newUser.displayname]), (results) => {
      console.log(results)
    })
  })

  // Login
  socket.on('login', credentials => {
    token = functions.createToken(credentials.username, credentials.password)

    functions.checkToken(token, success => {
      if (success) {
        socket.emit('redirect', "/home")
        console.log('[USER ACTIVITY]' + ': ' + credentials.username + " logged in.")
      } else {
        socket.emit('err', "Felaktigt lösenord eller användarnamn.")
        console.log('[USER ACTIVITY]' + ": " + "User attempted login.")
      } 
    })
  })

  // Searchbar
  socket.on('onsearch', searchquery => {
    var users = []
    functions.dbQuery("SELECT * FROM users WHERE username LIKE '" + searchquery + "%';", (results) => {
      users = results
      socket.emit('onsearch', users)
    })
  })

  // Create token. Currently only used on signup and login.
  socket.on('token', credentials => {
    token = functions.createToken(credentials.username, credentials.password)
    socket.emit('token', token)
  })

  socket.on('newMsg', msg => {
    msg.timesent = Date.now() / 1000
    msg.status = 1;
    console.log(sqlstring.format("INSERT INTO messages (message, recipient, status, timesent, userid) VALUES (?,?,?,?,?)", [msg.message, msg.recipient, msg.status, msg.timesent, msg.userid]))
    connection.query(sqlstring.format("INSERT INTO messages (message, recipient, status, timesent, userid) VALUES (?,?,?,?,?)", [msg.message, msg.recipient, msg.status, msg.timesent, msg.userid]), (error, results) => {
      if (error) throw error
      else console.log("Successful")

    })
  })
  socket.on('friendrequest', data => {
    console.log(data)
    var username = data.sender.substr(0, data.sender.lastIndexOf("_"))
    console.log()
    functions.dbQuery("UPDATE users SET friends = CONCAT(friends,'(" + data.recipient + ");", (results) => {
      console.log("inserted")
    })
  })
  /*
  if (update) socket.emit('newMsg', msg)
  else 
  */

  socket.on('getChats', data => {
    connection.query(sqlstring.format("SELECT * FROM messages WHERE ? AND ?", [data.recipient, data.user]), (error, results) => {
      if (results > 0) var chat = results
      else chat = "No chats could be found."

      socket.emit('getChats', chat)
    })
  })
})


//connection.end()

