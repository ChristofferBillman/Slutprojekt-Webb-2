// Dependencies + setup variables
var express = require('express')
var app = express()
var port = 3000

var path = require('path')
var io = require('socket.io')(4000)
var mysql = require('mysql')
var sqlstring = require("sqlstring")
var md5 = require('md5')

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
connection.connect((err)=> {
  if (err) /*throw err*/ console.log('Database connect failed.')
  console.log('Database connected.')
})

/*functions.checkToken(connection, "username_jdfjflksjdf5", (results)=> {
  console.log(results)
})*/

functions.checkToken(connection, "username_jdfjflksjdf5", (results)=> {
})

io.on('connection', socket => {
  console.log('user connected.')

  socket.on('disconnect', ()=> {
    console.log('user disconnected.')
  })

  // Recive and process new user data
  socket.on('newUser', newUser => {
    console.log(sqlstring.format("INSERT INTO users(username, password) VALUES (?,?)", [newUser.username,newUser.password]))
    functions.dbEmptyQuery(connection, sqlstring.format("INSERT INTO users(username, password) VALUES(?,?)", [newUser.username,md5(newUser.password)]))
    
  })
  // Login
  socket.on('login', credentials => {
    token = credentials.username + '_' + md5(credentials.password)
    console.log(token)

    functions.checkToken(connection, token, success => {
      if (success) socket.emit('redirect', "/home") 
      else socket.emit('err', "Felaktigt lösenord eller användarnamn.")
    })
  })
})

//connection.end()

/*functions.createToken()*/

